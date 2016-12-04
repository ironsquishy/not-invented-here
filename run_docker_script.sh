#!/bin/bash
echo "Stopping all docker process and flushing docker-log.log"
docker stop ${WEB_APP_ID}
unset WEB_APP_ID
echo "Starting docker build.."
#Build Docker image
docker build -t ironsquishy/web-app-test .
echo "Finish docker build.."
echo "Running docker image.."
#Run Docker image
export WEB_APP_ID=$(docker run -v ${PWD}:/usr/src/app -p 3000:3000 -d ironsquishy/web-app-test)
echo "Docker web app id: $WEB_APP_ID"
echo "Finish running docker"
echo "Docker ps"
docker ps
