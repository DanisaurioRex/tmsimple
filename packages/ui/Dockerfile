FROM node:18.9-alpine

WORKDIR /usr/src/ui

COPY package*.json ./
COPY .babelrc ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 80

