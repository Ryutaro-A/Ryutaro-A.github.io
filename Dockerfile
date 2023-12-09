FROM node:18-alpine
RUN apk update
RUN apk upgrade
RUN apk add --no-cache bash git yarn python3 make g++
RUN yarn global add gatsby-cli