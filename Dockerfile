# Parent/Base image
FROM node:22-alpine

# Specify root working directory so all layers below use it as the root folder
WORKDIR /app

# Copy source code and all files to the /app folder in image file system
COPY . /app

# Install dependecies at the build time
RUN npm install

# Exposing the port api should recieve requests on it
EXPOSE 4000

# Container runs the node app using this commmand
CMD [ "node", "app.js"]