FROM node:18

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
COPY tsconfig.json ./
COPY .env ./

COPY ./src ./src
COPY ./storage ./storage

RUN npm install
RUN npm cache clean --force
RUN npm run typescript

CMD ["npm", "run", "start-dev"]

EXPOSE 5000
