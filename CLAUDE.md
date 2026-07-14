# Proyecto

Portfolio personal de Marian Díaz Romero.

## Objetivo

Crear un portfolio moderno orientado a recruiters del sector tecnológico.

No es una web corporativa.

Debe transmitir:

- Ingeniería
- Cloud
- IA
- Arquitecturas
- Elegancia
- Minimalismo

## Tecnologías

- Next.js
- React
- TypeScript
- TailwindCSS

## Estilo

Inspiraciones:

- https://orvitec.tech
- https://svjosecarlos.com

No copiar diseños.

Usarlos únicamente como inspiración.

## Diseño

- mucho espacio en blanco
- tipografía grande
- animaciones suaves
- componentes reutilizables
- dark mode
- responsive

## Reglas

Nunca crear componentes enormes.

Preferir componentes pequeños.

Usar Tailwind.

No instalar librerías innecesarias.

Mantener el código limpio.

Mobile responsive 

## Antes de modificar algo

Analizar primero la arquitectura existente.

Reutilizar componentes siempre que sea posible.

No romper funcionalidades.

# Priority

When multiple sources of information exist, follow this order:

1. CLAUDE.md
2. Existing project architecture
3. lib/profile-data.ts (source of truth for personal information)
4. User prompts

Never duplicate personal information outside `lib/profile-data.ts` unless explicitly required.

Never remove or break existing links to PDFs, assets or downloadable resources.

## React Bits

React Bits components are available through MCP.

Usage rules:
- Use components only when they improve the user experience.
- Avoid making the portfolio look like a component showcase.
- Prefer subtle animations.
- Keep performance and readability as priorities.
- Maintain the minimal premium style inspired by ORVITEC and Vercel.
