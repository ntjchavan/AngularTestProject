# Step:1 build angular app
FROM node:18 AS build

# Step:2 set the working directory inside the container
WORKDIR /app

# Step:3 copy package.json & package-lock.json files
COPY package*.json ./

# Step:4 Install the dependencies
RUN npm install

# Step:5 Copy the rest of application files
COPY . .

# Step:6 Build the angular application for production
RUN npm run build --production

# Step:7 Serve the application using NGINX
FROM nginx:alpine

# Step: 8 Copy the build add from prev stage to NGINX public folder
COPY --from=build /app/dist/demotest /usr/share/nginx/html

# Step: 8 Expose port
EXPOSE 80

# Step: 9 Start NGINX server
CMD ["nginx", "-g", "daemon off;"]