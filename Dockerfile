FROM node:16
WORKDIR /usr/src/app
RUN apt-get update -y
RUN apt-get upgrade -y
COPY . .
RUN npm install .
RUN npm install serve
RUN npm install -g serve
#RUN npm install -location global pkg
#RUN dir
#RUN pkg .
#RUN cp -r node_modules/puppeteer* ./dist
EXPOSE 3000
RUN npm run build
CMD ["serve", "-s", "build"]
#CMD ["npm","run", "build"]
