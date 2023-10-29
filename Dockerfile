# Use an official Node.js runtime as the base image
FROM node:16.17.0-alpine as builder

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install production dependencies (for your application)
RUN npm install --save @fortawesome/fontawesome-svg-core

# Install development dependencies (for building the application)
RUN npm install --save-dev @babel/plugin-proposal-private-property-in-object

# Install all other dependencies
RUN npm install

# Copy the application code to the container
COPY . .

# Build the React application
RUN npm run build

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
FROM nginx:stable-alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/dist .
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]

