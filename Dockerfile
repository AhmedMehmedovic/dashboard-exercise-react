# syntax=docker/dockerfile:1
   
FROM node:current-alpine
WORKDIR /dashboard/
COPY package*.json ./
COPY . .
RUN npm install 
RUN npm run build
CMD [ "npm", "start" ] 
