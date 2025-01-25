FROM node:23-alpine3.20
WORKDIR /Sum
COPY . .
RUN npm install
EXPOSE 3000
CMD ["node", "app.js"]
