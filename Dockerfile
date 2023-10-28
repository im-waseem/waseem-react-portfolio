# Use an official Node.js runtime as the base image
FROM node:14 as build

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

# Use a lightweight Nginx image as the final production image
FROM nginx:alpine

# Copy the built React application from the previous stage
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
