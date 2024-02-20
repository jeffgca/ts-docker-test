FROM node:20-alpine

WORKDIR /app

COPY package.json .
COPY tsconfig.json .
COPY src/ ./src
COPY dist ./dist


RUN mkdir -p ./dist

# RUN mkdir -p ./dist
RUN npm install
RUN tsc

# COPY .env . # don't need this for D.O. apps

EXPOSE 3000

# Nu kör vi
CMD ["node" , "dist/index.js"]