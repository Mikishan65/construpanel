# -------------------------------------------------------------
# 1. Base: Instalación de dependencias
# -------------------------------------------------------------
FROM node:22-alpine AS base

WORKDIR /app

COPY package*.json ./
RUN npm ci

# -------------------------------------------------------------
# 2. Entorno de desarrollo local (HMR y recarga en vivo)
# -------------------------------------------------------------
FROM base AS dev

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]

# -------------------------------------------------------------
# 3. Compilación del bundle estático para producción
# -------------------------------------------------------------
FROM base AS builder

COPY . .

RUN npm run build

# -------------------------------------------------------------
# 4. Servidor web de producción (Nginx Alpine)
# -------------------------------------------------------------
FROM nginx:alpine AS production

# Copiar la configuración personalizada de Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copiar el código estático compilado desde la etapa builder
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
