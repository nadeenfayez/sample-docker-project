# Parent/Base image
FROM node:22-alpine

RUN npm install -g -D nodemon

# Specify root working directory so all layers below use it as the root folder
WORKDIR /app

# Copy package.json file so can install dependencies earlier and cache it, so any change in src code doesn't reinstall dependencies
COPY package.json .

# Install dependecies at the build time
RUN npm install

# Copy source code and all files to the /app folder in image file system/folder structure
COPY . .

# Exposing the port api should recieve requests on it
EXPOSE 4000

# Container runs the node app using this commmand
CMD [ "npm", "run", "dev"]