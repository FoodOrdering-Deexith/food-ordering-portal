FROM node:20.8.0 as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /usr/dist/food-order-portal /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daeom off;"]
