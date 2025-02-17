FROM node:20
ARG ENVIRONMENT_NAME
ARG BUILD_NAME

RUN mkdir -p /app-build
ADD . /app-build
WORKDIR /app-build
RUN --mount=type=cache,target=/root/.yarn YARN_CACHE_FOLDER=/root/.yarn yarn --frozen-lockfile
RUN yarn
RUN yarn build:$BUILD_NAME


FROM node:20-alpine
ARG ENVIRONMENT_NAME
ARG BUILD_NAME

RUN mkdir -p /dist
RUN apk add yarn
RUN yarn global add sequelize-cli@6.2.0
RUN yarn add shelljs dotenv pg sequelize@6.6.5
ADD scripts/migrate-and-run.sh /
ADD package.json /
ADD . /
COPY --from=0 /app-build/dist ./dist


CMD ["sh", "./migrate-and-run.sh"]
EXPOSE 9000