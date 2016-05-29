FROM node:latest

MAINTAINER Shang Sinian <shangsinian@gmail.com>

RUN mkdir -p /var/nodejs
ADD . /var/nodejs
WORKDIR  /var/nodejs
RUN npm install
EXPOSE 9000
ENTRYPOINT ["node", "index.js"]
