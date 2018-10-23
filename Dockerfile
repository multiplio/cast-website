FROM node:8-alpine

# Install yarn
RUN npm install --global yarn

# Create app directory
WORKDIR /usr/src/app

# Install pm2
RUN yarn global add serve

# Install app dependencies
COPY package.json yarn.lock ./

RUN set -ex; \
    yarn install --production --frozen-lockfile

# Bundle app
COPY build/ ./

# Start
EXPOSE 7001
USER node
ENTRYPOINT exec serve --single -p 7001 -n .
