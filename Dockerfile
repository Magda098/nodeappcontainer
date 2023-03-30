FROM node:16-alpine

RUN mkdir /app

WORKDIR /app

COPY package.json /app/
COPY package-lock.json /app/
COPY index.js /app/

RUN npm install

COPY . /app/

CMD ["npm" ,"start" ]