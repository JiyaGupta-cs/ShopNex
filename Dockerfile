FROM node:alpine3.19 as wdir

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

 
#nginx for serving the static files from the app directory which has the build directory 

FROM nginx:1.27.2-alpine

WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=wdir /app/build .
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]
