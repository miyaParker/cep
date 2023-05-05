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
sudo git checkout deve

# #pull the changes
sudo git pull origin dev


# # install
# sudo yarn install

# # Build the application
# sudo yarn build

#echo "****************************************************************"
#echo "--- Frontend update complete"
#echo "****************************************************************"