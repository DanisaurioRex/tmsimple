FROM node:19.6.0-alpine as build-step

WORKDIR /usr/src/app/ui

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build
CMD [ "npm", "run", "start" ]

EXPOSE 4201
