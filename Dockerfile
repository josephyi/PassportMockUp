ARG BASE_IMAGE="node:14.11.0-buster-slim"

FROM ${BASE_IMAGE} as base

FROM base as deps
WORKDIR /src
COPY . .
RUN npm install

CMD npm run start
