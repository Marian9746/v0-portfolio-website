// ============================================
// PROFILE DATA - Edit your information here
// ============================================

export const profileData = {
  // Personal Information
  personal: {
    name: "Marian Díaz Romero",
    title: "Full Stack Developer",
    subtitle: "Software Engineer | Tech Enthusiast",
    email: "tu@email.com",
    location: "Madrid, España",
    phone: "+34 600 000 000",
    linkedin: "https://linkedin.com/in/tu-perfil",
    github: "https://github.com/tu-usuario",
    credly: "https://www.credly.com/users/tu-usuario",
    portfolio: "https://tu-portfolio.com",
  },

  // About Me Section
  about: {
    headline: "Building the future, one line of code at a time",
    description: `Soy un desarrollador apasionado por la tecnología con más de X años de experiencia 
    en el desarrollo de aplicaciones web y móviles. Me especializo en crear soluciones 
    escalables y mantenibles que resuelven problemas reales.
    
    Mi enfoque se centra en escribir código limpio, seguir las mejores prácticas 
    y mantenerme actualizado con las últimas tecnologías del mercado.`,
    highlights: [
      "Arquitectura de software escalable",
      "Desarrollo Full Stack",
      "Metodologías ágiles",
      "Trabajo en equipo y liderazgo técnico",
    ],
  },

  // Experience Section
  experience: [
    {
      id: 1,
      role: "Senior Software Engineer",
      company: "Empresa Tecnológica",
      location: "Madrid, España",
      period: "2022 - Presente",
      description:
        "Desarrollo de aplicaciones web escalables utilizando React, Node.js y AWS. Liderazgo técnico de un equipo de 5 desarrolladores.",
      achievements: [
        "Reducción del tiempo de carga en un 40%",
        "Implementación de CI/CD pipelines",
        "Migración a arquitectura de microservicios",
      ],
      technologies: ["React", "Node.js", "AWS", "PostgreSQL", "Docker"],
    },
    {
      id: 2,
      role: "Full Stack Developer",
      company: "Startup Innovadora",
      location: "Barcelona, España",
      period: "2020 - 2022",
      description:
        "Desarrollo de la plataforma principal de la empresa desde cero, incluyendo frontend, backend y base de datos.",
      achievements: [
        "Lanzamiento del MVP en 3 meses",
        "Crecimiento de 0 a 10,000 usuarios",
        "Integración con múltiples APIs de terceros",
      ],
      technologies: ["Vue.js", "Python", "Django", "MongoDB", "Redis"],
    },
    {
      id: 3,
      role: "Junior Developer",
      company: "Consultora IT",
      location: "Valencia, España",
      period: "2018 - 2020",
      description:
        "Desarrollo de soluciones personalizadas para clientes de diversos sectores.",
      achievements: [
        "Participación en más de 15 proyectos",
        "Certificación en metodologías ágiles",
        "Formación continua en nuevas tecnologías",
      ],
      technologies: ["JavaScript", "PHP", "MySQL", "Laravel"],
    },
  ],

  // Skills Section
  skills: {
    technical: [
      { name: "JavaScript/TypeScript", level: 95 },
      { name: "React/Next.js", level: 90 },
      { name: "Node.js", level: 85 },
      { name: "Python", level: 80 },
      { name: "SQL/NoSQL Databases", level: 85 },
      { name: "AWS/Cloud Services", level: 75 },
      { name: "Docker/Kubernetes", level: 70 },
      { name: "Git/CI-CD", level: 90 },
    ],
    soft: [
      "Problem Solving",
      "Team Leadership",
      "Agile Methodologies",
      "Communication",
      "Continuous Learning",
      "Adaptability",
    ],
    languages: [
      { name: "Español", level: "Nativo" },
      { name: "Inglés", level: "Profesional (C1)" },
      { name: "Francés", level: "Básico (A2)" },
    ],
  },

  // Hobbies Section
  hobbies: [
    {
      name: "Open Source",
      icon: "code",
      description: "Contribuyo a proyectos de código abierto y mantengo mis propias librerías.",
    },
    {
      name: "Gaming",
      icon: "gamepad",
      description: "Disfruto de videojuegos estratégicos y de rol en mi tiempo libre.",
    },
    {
      name: "Reading",
      icon: "book",
      description: "Leo sobre tecnología, productividad y desarrollo personal.",
    },
    {
      name: "Photography",
      icon: "camera",
      description: "Capturando momentos y paisajes con mi cámara.",
    },
    {
      name: "Fitness",
      icon: "dumbbell",
      description: "Mantengo un estilo de vida activo con ejercicio regular.",
    },
    {
      name: "Travel",
      icon: "plane",
      description: "Explorar nuevas culturas y lugares me inspira creativamente.",
    },
  ],

  // Certifications (for Credly section)
  certifications: [
    {
      name: "AWS Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      credlyUrl: "https://www.credly.com/badges/...",
    },
    {
      name: "Professional Scrum Master",
      issuer: "Scrum.org",
      date: "2022",
      credlyUrl: "https://www.credly.com/badges/...",
    },
    {
      name: "Google Cloud Professional",
      issuer: "Google",
      date: "2023",
      credlyUrl: "https://www.credly.com/badges/...",
    },
  ],
}

// Navigation items for the menu
export const navigationItems = [
  { id: "about", label: "About Me", icon: "user" },
  { id: "experience", label: "Experience", icon: "briefcase" },
  { id: "skills", label: "Skills", icon: "zap" },
  { id: "hobbies", label: "Hobbies", icon: "heart" },
  { id: "certifications", label: "Certifications", icon: "award" },
]
