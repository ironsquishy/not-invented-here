#Start of Docker machine with NodeJs and AngularJS

#FROM ubuntu:16.04
FROM node:argon

#Instantiate (install) NodeJs
#RUN apt-get update && apt-get upgrade -y
#RUN apt-get intall -y build-essential

#Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

#Copy host package.json too machine
COPY package.json /usr/src/app
RUN npm install
RUN npm install -g nodemon
#Copy files that are not ignore.
COPY . /usr/src/app

EXPOSE 3000

#CMD ["pm2", "start", ".", "--watch", "--env", "development"]
CMD ["nodemon", "-L", "server.js"]
