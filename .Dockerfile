# base image
FROM node:9.6.1

# set working directory
WORKDIR /usr/src/app

COPY . ./

RUN npm install --production

EXPOSE 4000

# start app
CMD ["npm", "start"]