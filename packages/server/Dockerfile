FROM node:18.9

WORKDIR /usr/src/server

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build
RUN npm install mongodb
CMD ["node", "dist/src/app.js"]

EXPOSE 3000
