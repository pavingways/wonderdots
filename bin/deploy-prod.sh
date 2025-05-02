npm run build
rsync -avr --delete-before  \
  --include=".nojekyll" \
  --exclude=".*" \
  /Users/Rocco/Develop/pavingways/wonderdots.ch/dist/ /Users/Rocco/Develop/pavingways/wonderdots.github.io/
cp .gitignore /Users/Rocco/Develop/pavingways/wonderdots.github.io/
cd /Users/Rocco/Develop/pavingways/wonderdots.github.io/
git add .
git commit -am "release $(date +'%Y-%m-%d')"
git push origin main
cd - || exit
