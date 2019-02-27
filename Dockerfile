FROM nginx:alpine

# nginx config
COPY ./default.conf /etc/nginx/conf.d/default.conf

# site contents
COPY ./build/ /usr/share/nginx/html
