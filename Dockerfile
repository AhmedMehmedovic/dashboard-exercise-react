# syntax=docker/dockerfile:1
   
FROM node:15.13-alpine
WORKDIR /dashboard
COPY package*.json ./ 
RUN npm install 
RUN npm run build
CMD [ "npm", 'start' ] 
