// ============================================
// PROFILE DATA - Edit your information here
// ============================================

export const profileData = {
  // Personal Information
  personal: {
    name: "Marian Díaz Romero",
    title: "Systems Engineer | Technology Advisory consultant",
    subtitle: "Systems Engineer | Technology Advisory consultant",
    tagline: "I turn complex enterprise challenges into scalable, intelligent systems—from architecture to deployment.",
    email: "mariandiazrom@gmail.com",
    location: "Sydney, Australia",
    phone: "+34 648 533 117",
    linkedin: "https://www.linkedin.com/in/mariandiazromero/",
    github: "https://github.com/Marian9746",
    credly: "https://www.credly.com/users/marian-diaz-romero",
    portfolio: "https://mariandiazromero.vercel.app",
    cvUrl: "/cv/Marian_Diaz_Romero_CV.pdf",
  },

  // About Me Section
  about: {
    headline: "Systems Engineer & TOGAF® Certified Architect",
    description: `I am a Systems Engineer and TOGAF® Certified Architect with a strong background in Tech Advisory at global firms.
    I’ve always been fascinated by how technology can solve real-world problems. I love the fact that tech allows us to achieve things we once thought were impossible; in a world that never stops evolving, I’m thrilled to be part of that change.`,

    areasOfExpertise: [
      {
        title: "Digital Transformation & Enterprise Architecture",
        description:
          "Designing enterprise-wide architectures and transformation roadmaps that align technology with business strategy.",
        note: "TOGAF® Certified Architect",
      },
      {
        title: "AI & Automation",
        description:
          "Building AI-powered agents and automation pipelines that remove manual work from real business processes.",
      },
      {
        title: "IoT & Digital Twin",
        description:
          "Engineering connected, real-time digital twin systems for industrial and enterprise environments.",
      },
      {
        title: "Cloud Migration & Modernization",
        description:
          "Migrating legacy mainframe systems into modern, scalable cloud-native architectures.",
      },
    ],
  },

  // Experience Section
  experience: [
    {
      id: 1,
      role: "Tech Advisory Consultant - IoT & Digital Twins",
      company: "NTT Data",
      location: "Madrid, Spain",
      period: "Apr 2025 - Present",
      description:
        "Designing end-to-end IoT solutions for industrial environments using React, Node.js, and AWS.",
      achievements: [
        "Reduced load time by 40%",
        "Implemented CI/CD pipelines",
        "Developed real-time monitoring applications",
      ],
      technologies: ["IoT", "Digital Twins", "Agentic AI", "Automation", "React", "Node.js", "AWS", "PostgreSQL", "Docker", "frontend", "backend"],
    },
    {
      id: 2,
      role: "Technology Consulting Analyst - Cloud & Migration",
      company: "Accenture",
      location: "Madrid, Spain",
      period: "Nov 2023 - Apr 2025",
      description:
        "Specialized in Cloud Migration and legacy system modernization within the Financial and Retail sectors.",
      achievements: [
        "Automated 80% of data validation using Python.",
        "Implemented Infrastructure as Code (IaC) for cloud deployments.",
        "Implemented Git-based CI/CD in legacy systems.",
      ],
      technologies: [ "Python", "Cobol", "CI-CD", "Cloud Migration", "AWS", "Mainframe"],
    },
    {
      id: 3,
      role: "Digital MBA Collaborating Lecturer",
      company: "ISDI Business School",
      location: "Madrid, Spain",
      period: "Jan 2026 - Mar 2026",
      description:
        "Delivering the Technology module for the Digital MBA, covering Digital Transformation and emerging innovation frameworks.",
      achievements: [
        "Simplified complex technical concepts for business-oriented audiences.",
        "Mentored final student projects from concept to MVP",
        "Delivered Digital Twin & IoT modules 100% in English",
        "Adapted complex IoT architectures for business use-cases",
      ],
      technologies: ["AI Strategy", "Digital Transformation", "Business Innovation", "Cloud Ecosystem"],
    },
  ],

  // Education Section
  // Exchange programs are nested under their corresponding degree as secondary
  // info (not independent timeline milestones) — see `exchange` field below.
  education: [
    {
      id: 1,
      degree: "Master’s Degree in Telecommunication Engineering",
      institution: "Comillas Pontificia University, ICAI",
      location: "Madrid, Spain",
      period: "Sep 2021 – Jun 2023",
      description:
        "Focused on advanced telecommunications, systems engineering, and digital innovation strategies.",
      highlights: [
        "Strengthened expertise in network engineering, digital systems, and technology strategy.",
        "Completed the program with a strong academic foundation in engineering and architecture principles.",
      ],
      exchange: {
        institution: "Universidad Pontificia Católica de Chile",
        location: "Santiago, Chile",
        period: "Jan 2023 – Jul 2023",
      },
    },
    {
      id: 2,
      degree: "Bachelor’s Degree in Telecommunication Engineering",
      institution: "ETSIIT",
      location: "Granada, Spain",
      period: "Sep 2017 – Jun 2021",
      description:
        "Completed a comprehensive engineering degree with a strong base in telecommunications, systems, and applied technology.",
      highlights: [
        "Developed solid knowledge in communications systems, software, and engineering fundamentals.",
        "Built the technical foundation that later supported my consulting and digital transformation work.",
      ],
      exchange: {
        institution: "Linköping University",
        location: "Linköping, Sweden",
        period: "Sep 2019 – Jul 2020",
      },
    },
  ],

  // Skills Section
  skills: {
    technical: [
      { name: "Python" },
      { name: "JavaScript/TypeScript" },
      { name: "React" },
      { name: "Next.js" },
      { name: "Node.js" },
      { name: "MySQL" },
      { name: "MongoDB" },
      { name: "AWS/Cloud Services" },
      { name: "Docker" },
      { name: "Kubernetes" },
      { name: "Git/CI-CD" },
      { name: "AI-Agents" },
    ],
    languages: [
      { name: "Spanish", level: "Native" },
      { name: "English", level: "Professional (C1)" },
      { name: "French", level: "Basic (A2)" },
    ],
  },

  // Hobbies Section
  hobbies: [

    {
      name: "Tech Education",
      icon: "book",
      description: "Passion for mentoring and teaching emerging technologies.",
    },
    {
      name: "Sports",
      icon: "surfing",
      description: " Practicing various sports to stay active and healthy.",
    },
    {
      name: "Kayak",
      icon: "kayak",
      description: "Former Kayak Instructor during summer seasons.",
    },
    {
      name: "Fitness",
      icon: "dumbbell",
      description: "Maintaining an active lifestyle with regular exercise.",
    },
    {
      name: "Piano",
      icon: "piano",
      description: "Completed Elemental Conservatory of Music (Piano)",
    },
    {
      name: "Open Source",
      icon: "code",
      description: "I contribute to open source projects and maintain my own libraries.",
    },
  ],

  // Certifications
  // Use 'credlyUrl' for Credly badges or 'certificateUrl' for local PDFs
  // For PDFs: save them in /public/certificates/ and use '/certificates/filename.pdf'
  certifications: [
    {
      name: "TOGAF® Enterprise Architecture Foundation",
      issuer: "The Open Group",
      date: "2025",
      credlyUrl: "https://www.credly.com/badges/2c6936da-dc95-4fcf-b5c9-c221ee08e493",
    },
    {
      name: "Digital Cloud Transformation Program",
      issuer: "ISDI Business School",
      date: "2023",
      certificateUrl: "/certificates/ISDI-diploma-mariandr.pdf", 
    },
    {
      name: "Micro Focus COBOL Fundamentals",
      issuer: "AMC",
      date: "2023",
      certificateUrl: "/certificates/Certificate-AMC-MicroFocus.pdf",
    },
    {
      name: "ALM01F - Application Lifecycle Management (ALM/QC)",
      issuer: "VP Global Learning Services",
      date: "2023",
      certificateUrl: "/certificates/Certificate ALM01F.pdf",
    },
  ],

  // Projects Section
  projects: [
    {
      id: 1,
      name: "Industrial Digital Twin Platform",
      description:
        "Designed and developed a Digital Twin platform integrating IoT devices, real-time telemetry and cloud services. Built end-to-end solutions using React, Node.js, MQTT and AWS to enable monitoring, analytics and data-driven operational decisions.",
      tech: ["Digital Twins", "IoT", "React", "Node.js", "AWS", "MQTT", "Docker"],
      image: "/projects/placeholder-project-1.png",
      link: { type: "linkedin", label: "View on LinkedIn" },
    },
    {
      id: 2,
      name: "Personal Portfolio — Design & Coding",
      description:
        "Designed and developed a modern portfolio focused on user experience, performance and personal branding. Built with Next.js and TypeScript, featuring reusable components, responsive layouts and subtle interactions inspired by Vercel and modern product design.",
      tech: ["Next.js", "React", "TypeScript", "UX", "Tailwind", "Vercel"],
      image: "/projects/portfolio-placeholder.png",
      link: { type: "github", label: "Code" },
    },
    {
      id: 3,
      name: "Digital Twins Masterclass for ISDI Digital MBA",
      description:
        "Designed and delivered the Digital Twins module for the ISDI Digital MBA, creating the course content from scratch and teaching multiple cohorts. The program combined technical concepts with business strategy, helping students understand how digital replicas enable better business decisions. The session combined technical concepts with practical frameworks, guiding participants from data collection to \"what-if\" simulations and strategic decision-making in real-world scenarios.",
      tech: ["Digital Twins", "Technology Strategy", "Enterprise Architecture", "Teaching"],
      image: "/projects/isdi-placeholder.jpg",
      link: {
        type: "external",
        label: "View Presentation",
        url: "https://drive.google.com/file/d/1QM9DQJKE7Bcn9fEAkJbx_Qi6ctuNwup4/view?usp=drive_link",
      },
    },
  ],

  // Recommendation Letters Section
  recommendationLetters: [
    {
      fromName: "David Díez Cebollero",
      fromRole: "Digital Technology Director — NTT DATA Spain",
      linkedin: "https://www.linkedin.com/in/daviddiezcebollero/",
      date: "Madrid, 1 July 2026",
      body: `What I value most about Marian is her autonomy and reliability. She is the kind of person you can hand an ambitious, poorly defined problem to, confident it will come back solved, documented, and better framed than it started. She doesn't need constant oversight; she needs context, and from there she moves forward with sound judgement and a consistent commitment to the quality of what she delivers.

I recommend Marian with complete confidence. Whoever hires her will gain a solid, dependable professional with tremendous room to grow.`,
      highlightPhrases: ["autonomy and reliability", "solid, dependable professional"],
      files: {
        en: "/certificates/recommendation_letter_marian_diaz_en.pdf",
        es: "/certificates/carta_recomendacion_marian_diaz_es.pdf",
      },
    },
    {
      // PLACEHOLDER — replace with the real second recommendation letter
      fromName: "Available Upon Request",
      fromRole: "Reference",
      linkedin: "",
      date: "",
      body: `Request additional references and recommendations directly. I'm happy to connect you with colleagues, managers, and clients who can speak to my work and impact.`,
      files: {
        en: "",
        es: "",
      },
    },
  ],
}

// Anchor navigation items for the sticky one-page nav.
// Each id must match a <section id="..."> exactly.
export const navigationItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "recommendation", label: "Recommendation" },
  { id: "contact", label: "Contact" },
]
