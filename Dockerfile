# Stage 1: Build
FROM node:20-alpine AS build

WORKDIR /app

# Copy package.json and yarn.lock
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy all source code
COPY . .

# Build the app
RUN yarn build

# Stage 2: Serve
FROM nginx:stable-alpine

# Copy build output to Nginx html folder
COPY --from=build /app/build /usr/share/nginx/html

# Expose port
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]