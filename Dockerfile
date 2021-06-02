FROM node:16-alpine
COPY ./src /app
WORKDIR /app
RUN apk add git && npm install
EXPOSE 4100
CMD npm start