FROM node:10-alpine
RUN apk add git
COPY ./src /app
WORKDIR /app
RUN npm install
EXPOSE 4100
CMD npm start