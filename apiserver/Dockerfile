FROM node:latest
WORKDIR /usr/app
COPY package*.json ./
RUN npm install 
COPY . .
# EXPOSE 3000 


# FROM nginx 
# COPY nginx/nginx.conf /etc/nginx/nginx.conf


CMD ["npm", "start"]


