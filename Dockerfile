FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./
COPY packages/server/package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000
