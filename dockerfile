# ---------- Build stage ----------
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --include=dev
COPY . .
# pastikan package.json punya "build": "vite build"
RUN npm run build

# ---------- Runtime stage (Nginx) ----------
FROM nginx:1.27-alpine AS runner

# Tulis config Nginx langsung (SPA fallback + cache static)
RUN rm -f /etc/nginx/conf.d/default.conf && \
    printf 'server {\n\
  listen 80;\n\
  server_name _;\n\
  root /usr/share/nginx/html;\n\
  index index.html;\n\
  location ~* \\.(?:js|css|woff2?|ttf|otf|eot|svg|png|jpg|jpeg|gif|ico)$ {\n\
    try_files $uri =404;\n\
    access_log off;\n\
    add_header Cache-Control "public, max-age=31536000, immutable";\n\
  }\n\
  location / {\n\
    try_files $uri /index.html;\n\
  }\n\
}\n' > /etc/nginx/conf.d/app.conf

# Copy hasil build Vite ke web root
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
