FROM node:14

#create app dir
WORKDIR /usr/src/app

#dependencies
COPY package*.json ./

RUN npm install

RUN npm ci --only=production

COPY . .

EXPOSE 6060

CMD ["node", "index.js"]