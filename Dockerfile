FROM node:12.18-alpine

WORKDIR /myApp

EXPOSE 3000

CMD ["node", "./dist/app.js"]