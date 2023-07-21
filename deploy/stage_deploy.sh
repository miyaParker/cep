# !/bin/bash
# Get servers list:
set — f
# Variables from GitLab server:
# Note: They can’t have spaces!!
string=$STAGE_SERVER
array=(${string//,/ })
# Iterate servers for deploy and pull last commit
# Careful with the ; https://stackoverflow.com/a/20666248/1057052
for i in "${!array[@]}"; do
  echo "Deploy project on server ${array[i]}"
  ssh ubuntu@${array[i]} 'bash -s' < ./deploy/stage_update.sh 
done