FROM node:14.16.0


ENV PORT 8080
ENV HOST 0.0.0.0
ENV NODE_ENV=production

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production

COPY . .

CMD ["node", "server.js"]

