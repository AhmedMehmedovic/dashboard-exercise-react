# syntax=docker/dockerfile:1
   
FROM node:current-alpine
WORKDIR /dashboard/
COPY package*.json ./

RUN npm install 
COPY . .
RUN npm run build
COPY . .


CMD [ "npm", "start" ] 
