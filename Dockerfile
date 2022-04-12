
### STAGE 1:BUILD ###
FROM node:16-alpine AS build

WORKDIR /dist/src/app

RUN npm cache clean --force

COPY . .
RUN yarn install
RUN yarn rock:format
RUN yarn rock:ng:lint
RUN yarn rock:prod

### STAGE 2:BUILD ###
FROM nginx:latest AS ngi

COPY --from=build /dist/app/rock-band /usr/share/nginx/html

COPY /config/nginx.conf  /etc/nginx/conf.d/default.conf

ENTRYPOINT ["nginx", "-g", "daemon off;"]

EXPOSE 90