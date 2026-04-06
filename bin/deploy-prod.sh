npm run build
rsync -avr --delete-before  \
  --include=".nojekyll" \
  --exclude=".*" \
  ./dist/ ../wonderdots.github.io/
cp .gitignore ../wonderdots.github.io/
cd ../wonderdots.github.io/ || exit
git add .
git commit -am "release $(date +'%Y-%m-%d')"
git push origin main
cd - || exit
