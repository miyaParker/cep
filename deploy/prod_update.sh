#!/bin/bash

# any future command that fails will exit the script
set -e
################## Backend update ###############################
# Change directory to where the project is stored
# cd /var/www/html/re-learn/

cd /var/www/html/re-learn/

# sudo git stash - incase of any local changes
sudo git stash

# sudo git fetch
sudo git fetch

# checkout develop
sudo git checkout main

# #pull the changes
sudo git pull origin main


# Build docker image
sudo docker build -t relearn .

## Stop relearn runing container
sudo docker stop relearn

## Remove docker container
sudo docker rm relearn

# # Run application using docker 
sudo docker run -d --name relearn -p 3000:3000 relearn

echo "****************************************************************"
echo "--- Frontend update complete"
echo "****************************************************************"
