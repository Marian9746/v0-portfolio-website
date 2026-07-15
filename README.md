# Marian Díaz Romero — Portfolio

Portfolio personal construido con Next.js, TypeScript y Tailwind CSS. Diseño minimalista orientado a recruiters del sector tecnológico (cloud, IA, arquitecturas).

## Stack

- Next.js (App Router)
- React + TypeScript
- Tailwind CSS v4
- Framer Motion
- React Bits — componentes en `components/reactbits/`
- shadcn/ui — componentes en `components/ui/`

## Estructura

```
├── app/                  # Rutas y layout de Next.js
├── components/
│   ├── sections/         # Secciones de la página (hero, about, experience, projects...)
│   ├── navigation/       # Navbar
│   ├── reactbits/        # Componentes adaptados de React Bits
│   ├── ui/                # Componentes shadcn/ui
│   └── motion/             # Helpers de animación (Reveal, Disclosure...)
├── lib/
│   └── profile-data.ts   # Información personal — único archivo a editar para actualizar contenido
└── public/                # Imágenes y certificados
```

## Editar contenido

Toda la información personal (experiencia, educación, proyectos, certificaciones, etc.) vive en `lib/profile-data.ts`. Es el único archivo que hace falta tocar para actualizar el contenido del portfolio.

## Desarrollo local

```bash
npm install
npm run dev
```

## Despliegue

Desplegado en Vercel, conectado al repositorio de GitHub — cada push a `main` se publica automáticamente.
