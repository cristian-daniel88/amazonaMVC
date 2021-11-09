# We add node and the : means the version, if we don't add a version, just 'node' it will install the latest version
FROM node:15.4 as build

# We crate de working directory for deployment
WORKDIR /frontend

# Now we build our app based on the package.json and the locked one.
COPY package*.json .
RUN npm install
COPY . .
RUN npm run build

# This is the second stage and we start by installing the latest version of nginx
FROM nginx
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /frontend/build /usr/share/nginx/html

# How to run it?
# sudo docker build -t app .
# sudo docker -p 8000:80 app 


FROM node

WORKDIR /backend

COPY package*.json .
RUN npm install
COPY . .
CMD node app.js

# How to build and run it
## sudo docker build -t app .
## 