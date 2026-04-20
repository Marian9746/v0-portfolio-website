// ============================================
// PROFILE DATA - Edit your information here
// ============================================

export const profileData = {
  // Personal Information
  personal: {
    name: "Marian Díaz Romero",
    title: "Systems Engineer | Technology Advisory consultant",
    subtitle: "Systems Engineer | Technology Advisory consultant",
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
    headline: "Engineer by profession, curious by nature. 👋",
    description: `I am a Systems Engineer and TOGAF® Certified Architect with a strong background in Tech Advisory at global firms. 
    I’ve always been fascinated by how technology can solve real-world problems. I love the fact that tech allows us to achieve things we once thought were impossible; in a world that never stops evolving, I’m thrilled to be part of that change.`,

    highlights: [
      "Enterprise Architecture (TOGAF® Certified)",
      "AI Implementation & Automation:",
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
}

// Navigation items for the menu
export const navigationItems = [
  { id: "about", label: "About Me", icon: "user" },
  { id: "experience", label: "Experience", icon: "briefcase" },
  { id: "skills", label: "Skills", icon: "zap" },
  { id: "certifications", label: "Certifications", icon: "award" },
  { id: "hobbies", label: "Hobbies", icon: "heart" },
]
