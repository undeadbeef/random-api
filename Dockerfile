FROM node:alpine

COPY . /home/node/app
WORKDIR /home/node/app
ENV NODE_ENV=production
EXPOSE 8080

RUN npm install --only=production

CMD [ "node", "/home/node/app/build/app.js" ]