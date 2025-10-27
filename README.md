# EDRA Toolkit (React + Vite + Tailwind + TS)

Starter de la "Caja de herramientas EDRA" con navegación, calculadoras placeholder (EIQ/STIR),
instructivos y verificador de certificados.

## Arranque
```bash
npm i
npm run dev
```

## Variables de entorno
- `VITE_CERT_CHECK_URL`: endpoint del verificador de certificados. Por defecto usa la Cloud Function de dev.

## Tecnologías
- React 18, React Router 6
- TailwindCSS 3
- Vite 5, TypeScript 5

## Ajustes de marca
La paleta `edra` en `tailwind.config.js` puede ajustarse para calzar 1:1 con edra.bio.
