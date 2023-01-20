# set the base image to build from 
FROM node:17-alpine

# set the working directory
WORKDIR /app

# copy package files
COPY package.json .

# install dependencies
RUN npm install

# copy everything to /app directory
COPY . .

EXPOSE 3000

# run the app
CMD ["npm","start"]