echo "Starting docker build.."
#Build Docker image
docker build -t ironsquishy/web-app-test .
echo "Finish docker build.."
echo "Running docker image.."
#Run Docker image
docker run -v ${PWD}:/usr/rc/app -p 3000:3000 -d ironsquishy/web-app-test
echo "Finish running docker"
echo "Docker ps"
docker ps
