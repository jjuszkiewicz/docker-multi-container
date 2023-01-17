FROM node:18 as build
ARG REACT_APP_BACKEND_URL

WORKDIR /app
COPY . .
RUN npm i
RUN npm run build

FROM nginx:stable-alpine as prod

COPY --from=build /app/build /var/www/frontend
ADD nginx/sites/* /etc/nginx/conf.d/

EXPOSE 80