# Use an official Node.js runtime as the base image
FROM node:14

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

# Command to start your application (modify this to start your specific app)
CMD ["npm", "start"]
