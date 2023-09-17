# Base image
FROM node

# Set working directory
WORKDIR /app

# Copy package json into the container
COPY package*.json ./

# Install npm dependencies
RUN npm install

# Copy the rest of the application code into the container
COPY . /app

# Expose the port React will run on
EXPOSE 3000

# Run the npm application
CMD [ "npm", "start" ]
