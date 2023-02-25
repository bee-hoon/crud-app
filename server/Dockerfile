FROM node:18

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
COPY ./src ./src

RUN npm install
RUN npm cache clean --force

CMD ["npm", "run", "start-dev"]

EXPOSE 5000
