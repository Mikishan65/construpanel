# Construpanel

Landing page de Construpanel Bolivia, desarrollada con React, Vite, Motion y React Three Fiber. Presenta el sistema constructivo, sus datos técnicos y trabajos reales mediante una escena 3D interactiva y animaciones por scroll.

---

## 🚀 Despliegue en VPS (Producción)

El proyecto está preparado para ejecutarse en producción con un contenedor ultraligero de **Nginx Alpine**, optimizado para el dominio **`ccepcoin.construpanel.tech`**.

### 1. Clonar o subir el proyecto al VPS
```bash
git clone <URL_DEL_REPOSITORIO> construpanel
cd construpanel
```

### 2. Configurar variables de entorno (Opcional)
Copia la plantilla de entorno:
```bash
cp .env.example .env
```
- Si vas a usar el puerto `80` directamente: deja `PORT=80`.
- Si ya tienes un reverse proxy en el VPS (ej. Nginx Proxy Manager, Traefik, Plesk, cPanel) escuchando en el puerto 80: cambia `PORT=8080` (o el puerto que prefieras) y apunta tu proxy a `http://localhost:8080` con el dominio `ccepcoin.construpanel.tech`.

### 3. Levantar el contenedor
```bash
docker compose up -d --build
```
O con versiones anteriores de Docker Compose:
```bash
docker-compose up -d --build
```

### 4. Verificar estado y logs
```bash
docker compose ps
docker compose logs -f app
```

### 5. Para detener o actualizar
- **Detener:** `docker compose down`
- **Actualizar tras cambios de código:**
  ```bash
  git pull
  docker compose up -d --build
  ```

---

## 🛠️ Desarrollo local

### Con Docker (con HMR y recarga en vivo)
```bash
docker compose -f compose.dev.yml up --build
```
Abre [http://localhost:5173](http://localhost:5173).

Para detener:
```bash
docker compose -f compose.dev.yml down
```

### Con Node.js local
```bash
npm install
npm run dev
```

Comprobaciones disponibles:
```bash
npm run lint
npm run build
```

---

## 📝 Notas de pendientes de diseño
- Añadir espacios más espacios entrelineas de cada sección grande.
- En la segunda sección poner fondo y centrar lo de la empresa y poner imagen de fondo con letras sobresalientes.
- En la demostración por día cambiarlo a 1 día - 3 días - 7 días.
- Cambiar el footer y en contactos y cambiar el WhatsApp.