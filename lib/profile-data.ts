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
    headline: "Bridging the gap between Complex Infrastructure and Business Value",
    description: `I am a Systems Engineer and TOGAF® Certified Architect with a strong background in Tech Advisory at global firms. 
    I specialize in designing scalable, secure, and efficient IT solutions that drive business success. With a passion for technology and a commitment to excellence, I thrive in dynamic environments where I can leverage my expertise to solve complex challenges and deliver impactful results.`,

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
        "Automated data validation and migration processes using custom Python tools.",
        "Implemented Infrastructure as Code (IaC) for cloud deployments.",
        "Integrated DevOps practices (Git/CI-CD) into legacy Enterprise environments .",
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
        "Certified in Agile methodologies",
        "Continuous learning in new technologies",
      ],
      technologies: ["AI Strategy", "Digital Transformation", "Business Innovation", "Cloud Ecosystem"],
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
      "Team Leadership",
      "Effective Communication",
      "Continuous Learning",
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
  { id: "hobbies", label: "Hobbies", icon: "heart" },
  { id: "certifications", label: "Certifications", icon: "award" },
]
