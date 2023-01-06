# set the base image to build from 
FROM node:17-alpine

# set the working directory
WORKDIR /app

# copy package files
COPY package.json .
COPY package-lock.json ./

# install dependencies
RUN npm config set legacy-peer-deps true
RUN npm install

# copy everything to /app directory
COPY . .

EXPOSE 3200

# run the app
CMD ["npm","start"]