#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { fileURLToPath } = require('url');
const glob = require('glob');
const fetch = globalThis.fetch || require('node-fetch');

const CONTENT_DIR = path.resolve(process.cwd(), 'src/content/news');
const DEST_DIR = path.join(CONTENT_DIR, 'images');

if (!fs.existsSync(DEST_DIR)) fs.mkdirSync(DEST_DIR, { recursive: true });

function getFrontmatterBlock(content) {
  if (!content.startsWith('---')) return null;
  const end = content.indexOf('\n---', 3);
  if (end === -1) return null;
  return content.slice(0, end + 4);
}

async function processFile(file) {
  const text = fs.readFileSync(file, 'utf8');
  const fm = getFrontmatterBlock(text);
  if (!fm) return;
  const srcMatch = fm.match(/^[ \t]*src:\s*(?:"|')?(https?:\\S+?)(?:"|'|\s|$)/m);
  if (!srcMatch) return;
  const url = srcMatch[1];
  if (!url.startsWith('http')) return;

  console.log('Found external image in', file, url);

  try {
    const res = await fetch(url, { headers: { 'User-Agent': 'fetch-content-images' } });
    if (!res.ok) throw new Error(`Request failed ${res.status}`);
    const contentType = res.headers.get('content-type') || '';
    let ext = '.jpg';
    if (contentType.includes('png')) ext = '.png';
    else if (contentType.includes('webp')) ext = '.webp';
    else if (contentType.includes('jpeg')) ext = '.jpg';
    else if (contentType.includes('svg')) ext = '.svg';

    // Build filename from original URL path or from file basename
    let urlPath = url.split('?')[0];
    let base = path.basename(urlPath);
    if (!path.extname(base)) {
      base = base + ext;
    }
    // avoid collisions
    let destName = base;
    let i = 1;
    while (fs.existsSync(path.join(DEST_DIR, destName))) {
      destName = path.basename(base, path.extname(base)) + '-' + i + path.extname(base);
      i++;
    }

    const arrayBuffer = await res.arrayBuffer();
    fs.writeFileSync(path.join(DEST_DIR, destName), Buffer.from(arrayBuffer));
    console.log('Saved to', path.join(DEST_DIR, destName));

    // Replace frontmatter src with local relative path
    const relPath = './images/' + destName;
    const newFm = fm.replace(srcMatch[0], `  src: "${relPath}"`);
    const newText = newFm + text.slice(fm.length);
    fs.writeFileSync(file, newText, 'utf8');
    console.log('Updated', file, 'to use', relPath);
  } catch (err) {
    console.error('Error processing', file, err.message);
  }
}

async function main() {
  const files = glob.sync(path.join(CONTENT_DIR, '*.md'));
  for (const f of files) {
    // only process markdown files in content directory
    await processFile(f);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
