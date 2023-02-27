# syntax=docker/dockerfile:1
   
FROM node:15.13-alpine
WORKDIR /dashboard
COPY package*.json ./ 
RUN npm install 
COPY . .
CMD [ "npm", 'start' ] 