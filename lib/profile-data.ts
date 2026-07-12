// ============================================
// PROFILE DATA - Edit your information here
// ============================================

export const profileData = {
  // Personal Information
  personal: {
    name: "Marian Díaz Romero",
    title: "Systems Engineer | Technology Advisory consultant",
    subtitle: "Systems Engineer | Technology Advisory consultant",
    tagline: "Engineering cloud, AI and digital-twin systems that turn ambiguous problems into shipped products.",
    email: "mariandiazrom@gmail.com",
    location: "Sydney, Australia",
    phone: "+34 648 533 117",
    linkedin: "https://www.linkedin.com/in/mariandiazromero/",
    github: "https://github.com/Marian9746",
    credly: "https://www.credly.com/users/marian-diaz-romero",
    portfolio: "https://tu-portfolio.com",
  },

  // About Me Section
  about: {
    headline: "Engineer by profession, curious by nature. ",
    description: `I am a Systems Engineer and TOGAF® Certified Architect with a strong background in Tech Advisory at global firms. 
    I’ve always been fascinated by how technology can solve real-world problems. I love the fact that tech allows us to achieve things we once thought were impossible; in a world that never stops evolving, I’m thrilled to be part of that change.`,

    highlights: [
      "Enterprise Architecture (TOGAF® Certified)",
      "AI Implementation & Automation",
      "IoT & Digital Twin Implementation",
      "Cloud Migration & Modernization",
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
    },
    {
      id: 2,
      degree: "Exchange Program",
      institution: "Universidad Pontificia Católica de Chile",
      location: "Santiago, Chile",
      period: "Jan 2023 – Jul 2023",
      description:
        "Academic exchange experience that broadened my international perspective and cross-cultural collaboration skills.",
      highlights: [
        "Expanded academic exposure in a different engineering and research environment.",
        "Built global connections and adapted to an international academic setting.",
      ],
    },
    {
      id: 3,
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
    },
    {
      id: 4,
      degree: "Exchange Program",
      institution: "Linköping University",
      location: "Linköping, Sweden",
      period: "Sep 2019 – Jul 2020",
      description:
        "International exchange that enriched my studies with a different academic and cultural perspective.",
      highlights: [
        "Strengthened adaptability and international collaboration in a European academic environment.",
        "Gained exposure to new technical and academic approaches.",
      ],
    },
  ],

  // Skills Section
  skills: {
    technical: [
      { name: "Python", level: 95 },
      { name: "JavaScript/TypeScript", level: 80 },
      { name: "React/Next.js", level: 90 },
      { name: "Node.js", level: 85 },
      { name: "SQL/NoSQL Databases", level: 80 },
      { name: "AWS/Cloud Services", level: 75 },
      { name: "Docker/Kubernetes", level: 80 },
      { name: "Git/CI-CD", level: 90 },
      { name: "AI-Agents", level: 85 },
    ],
    soft: [
      "Problem Solving",
      "Team Leadership",
      "Agile Methodologies",
      "Communication",
      "Continuous Learning",
      "Adaptability",
      "Team Leadership",
      "Effective Communication",
      "Frontend & 3D Visualization",
      "Digital Transformation Strategy", 
      "Enterprise Architecture",
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
  // PLACEHOLDER DATA — replace with real projects (name, description, tech, links, image)
  projects: [
    {
      id: 1,
      name: "Project Placeholder One",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A short placeholder description of what this project does, the problem it solves, and the impact it had.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS"],
      image: "/projects/placeholder-1.svg",
      links: { github: "https://github.com/Marian9746", live: "" },
    },
    {
      id: 2,
      name: "Project Placeholder Two",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Placeholder copy describing the architecture and outcome.",
      tech: ["Python", "AWS", "Docker"],
      image: "/projects/placeholder-2.svg",
      links: { github: "https://github.com/Marian9746", live: "" },
    },
    {
      id: 3,
      name: "Project Placeholder Three",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placeholder copy for a third representative project and its core capabilities.",
      tech: ["IoT", "React", "Node.js"],
      image: "/projects/placeholder-3.svg",
      links: { github: "https://github.com/Marian9746", live: "" },
    },
  ],

  // Recommendation Letter Section
  // PLACEHOLDER DATA — replace body/fromName/fromRole with the real letter
  recommendationLetter: {
    fromName: "Placeholder Referee Name",
    fromRole: "Engineering Manager, Placeholder Company",
    date: "2026",
    body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  },
}

// Anchor navigation items for the sticky one-page nav.
// Each id must match a <section id="..."> exactly.
export const navigationItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "recommendation", label: "Recommendation" },
  { id: "contact", label: "Contact" },
]
