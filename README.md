# Construpanel

Landing page de Construpanel Bolivia, desarrollada con React, Vite, Motion y React Three Fiber. Presenta el sistema constructivo, sus datos técnicos y trabajos reales mediante una escena 3D interactiva y animaciones por scroll.

## Desarrollo con Docker

```bash
docker compose up --build
```

Abre [http://localhost:5173](http://localhost:5173). El código está montado como volumen y Vite actualiza los cambios automáticamente mediante HMR.

Para detener el entorno:

```bash
docker compose down
```

## Desarrollo local

```bash
npm install
npm run dev
```

Comprobaciones disponibles:

```bash
npm run lint
npm run build
```
