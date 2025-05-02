npm run build
rsync -avr --delete-before  \
                         --exclude '.*'  \
                         --exclude '_deploy-dev.sh' \
                         --exclude '_deploy-prod.sh' \
/Users/Rocco/Develop/pavingways/wonderdots.ch/dist/* root@164.90.218.79:/var/www/skatepark/www/
