# Portfolio Personal con Menu 3D Meny

Una pagina web de presentacion personal con un menu 3D interactivo inspirado en [Meny.js](https://github.com/hakimel/Meny). Perfecta para impresionar a recruiters y mostrar tu perfil tecnologico de manera creativa.

## Caracteristicas

- Menu 3D con efecto de rotacion (basado en Meny.js)
- Soporte para touch/swipe en dispositivos moviles
- Activacion por mouse hover en el borde izquierdo
- Diseno minimalista y oscuro (dark mode)
- Totalmente responsive
- Facil de personalizar

## Estructura del Proyecto

```
├── app/
│   ├── globals.css          # Estilos globales y configuracion de Meny
│   ├── layout.tsx           # Layout principal con fuentes
│   └── page.tsx             # Pagina principal
├── components/
│   ├── meny/
│   │   └── meny.tsx         # Componente del menu 3D
│   ├── navigation/
│   │   └── navigation-menu.tsx  # Menu de navegacion lateral
│   ├── sections/
│   │   ├── about-section.tsx        # Seccion About Me
│   │   ├── experience-section.tsx   # Seccion Experience
│   │   ├── skills-section.tsx       # Seccion Skills
│   │   ├── hobbies-section.tsx      # Seccion Hobbies
│   │   └── certifications-section.tsx # Seccion Certifications
│   └── profile-page.tsx     # Componente principal que integra todo
├── lib/
│   └── profile-data.ts      # TUS DATOS PERSONALES (edita aqui)
└── README.md
```

## Como Editar tu Informacion

**Solo necesitas editar un archivo: `lib/profile-data.ts`**

Este archivo contiene toda tu informacion personal organizada en secciones:

### 1. Datos Personales (`personal`)
```typescript
personal: {
  name: "Tu Nombre Completo",
  title: "Tu Titulo Profesional",
  subtitle: "Subtitulo corto",
  email: "tu@email.com",
  location: "Tu Ciudad, Pais",
  phone: "+34 600 000 000",
  linkedin: "https://linkedin.com/in/tu-perfil",
  github: "https://github.com/tu-usuario",
  credly: "https://www.credly.com/users/tu-usuario",
  portfolio: "https://tu-portfolio.com",
}
```

### 2. About Me (`about`)
```typescript
about: {
  headline: "Tu frase principal",
  description: `Tu descripcion larga...`,
  highlights: [
    "Punto destacado 1",
    "Punto destacado 2",
    // ...
  ],
}
```

### 3. Experiencia (`experience`)
```typescript
experience: [
  {
    id: 1,
    role: "Tu Puesto",
    company: "Nombre de la Empresa",
    location: "Ciudad, Pais",
    period: "2022 - Presente",
    description: "Descripcion del rol...",
    achievements: ["Logro 1", "Logro 2"],
    technologies: ["React", "Node.js", "etc"],
  },
  // ... mas experiencias
]
```

### 4. Skills (`skills`)
```typescript
skills: {
  technical: [
    { name: "JavaScript/TypeScript", level: 95 },
    { name: "React/Next.js", level: 90 },
    // ... (level es un porcentaje 0-100)
  ],
  soft: ["Problem Solving", "Team Leadership", ...],
  languages: [
    { name: "Espanol", level: "Nativo" },
    { name: "Ingles", level: "Profesional (C1)" },
  ],
}
```

### 5. Hobbies (`hobbies`)
```typescript
hobbies: [
  {
    name: "Nombre del hobby",
    icon: "code", // Opciones: code, gamepad, book, camera, dumbbell, plane, music, coffee
    description: "Breve descripcion",
  },
  // ...
]
```

### 6. Certificaciones (`certifications`)
```typescript
certifications: [
  {
    name: "Nombre de la Certificacion",
    issuer: "Entidad Emisora",
    date: "2023",
    credlyUrl: "https://www.credly.com/badges/...",
  },
  // ...
]
```

## Como Funciona el Menu 3D

El menu se activa de las siguientes maneras:

1. **Desktop**: Mueve el cursor hacia el borde izquierdo de la pantalla
2. **Mobile**: Desliza hacia la derecha (swipe right)
3. **Boton**: Haz clic en el icono de menu en la esquina superior izquierda

Para cerrarlo:
- Haz clic fuera del menu
- Desliza hacia la izquierda (swipe left)
- El menu se cierra automaticamente al seleccionar una seccion

## Configuracion del Menu Meny

Puedes personalizar el comportamiento del menu en `components/profile-page.tsx`:

```typescript
<Meny
  config={{
    position: "left",        // Posicion: "left", "right", "top", "bottom"
    width: 280,              // Ancho del menu en pixels
    angle: 30,               // Angulo de rotacion 3D
    threshold: 40,           // Pixels desde el borde para activar
    overlap: 6,              // Pixels visibles cuando esta cerrado
    transitionDuration: "0.5s",
    transitionEasing: "ease",
  }}
  // ...
>
```

## Personalizacion de Colores

Los colores se definen en `app/globals.css` usando variables CSS. El tema actual es oscuro con acentos en cyan:

```css
:root {
  --background: oklch(0.09 0.005 260);    /* Fondo principal */
  --foreground: oklch(0.95 0 0);          /* Texto principal */
  --primary: oklch(0.7 0.15 200);         /* Color de acento (cyan) */
  --card: oklch(0.12 0.005 260);          /* Fondo de tarjetas */
  --muted-foreground: oklch(0.6 0 0);     /* Texto secundario */
  --border: oklch(0.22 0.01 260);         /* Bordes */
}
```

## Conectar con GitHub

### Opcion 1: Desde v0 (Recomendado)

1. Haz clic en el boton de configuracion (engranaje) en la esquina superior derecha de v0
2. Ve a la seccion "Settings"
3. Conecta tu repositorio de GitHub
4. Todos los cambios se sincronizaran automaticamente con tu rama

### Opcion 2: Descargar y subir manualmente

1. En v0, haz clic en los tres puntos en la esquina superior derecha
2. Selecciona "Download ZIP"
3. Descomprime el archivo
4. Crea un nuevo repositorio en GitHub
5. Ejecuta los siguientes comandos:

```bash
cd tu-portfolio
git init
git add .
git commit -m "Initial commit - Portfolio with Meny 3D menu"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/TU-REPO.git
git push -u origin main
```

### Opcion 3: Usar la CLI de shadcn

```bash
npx shadcn@latest init
```

## Despliegue

### Vercel (Recomendado)

1. Haz clic en "Publish" en v0 para desplegar directamente
2. O conecta tu repositorio de GitHub a Vercel:
   - Ve a [vercel.com](https://vercel.com)
   - Importa tu repositorio
   - Despliega automaticamente

### Otros proveedores

El proyecto es una aplicacion Next.js estandar, compatible con:
- Netlify
- Railway
- Render
- Cloudflare Pages
- Cualquier servicio que soporte Node.js

## Tecnologias Utilizadas

- **Next.js 15** - Framework React
- **TypeScript** - Tipado estatico
- **Tailwind CSS v4** - Estilos
- **Lucide React** - Iconos
- **Meny.js** (adaptado) - Menu 3D

## Creditos

- Menu 3D basado en [Meny.js](https://github.com/hakimel/Meny) por Hakim El Hattab
- Iconos por [Lucide](https://lucide.dev)

## Licencia

MIT - Siéntete libre de usar este proyecto para tu portfolio personal.

---

Hecho con Next.js y mucho cafe.
