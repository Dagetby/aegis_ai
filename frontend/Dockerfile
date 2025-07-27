# syntax=docker/dockerfile:1
FROM node:18-alpine AS build
WORKDIR /app
COPY package.json tsconfig.json tsconfig.node.json vite.config.ts index.html ./
COPY src ./src
RUN npm install && npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
