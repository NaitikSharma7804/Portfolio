/**
 * =========================================================================
 * NAITIK SHARMA — PORTFOLIO CONFIGURATION & DATA
 * =========================================================================
 * Centralized data source for easy maintenance and recruiter readiness.
 * Edit this file to update project links, contact info, or skill entries.
 */

const PORTFOLIO_CONFIG = {
  personal: {
    name: "Naitik Sharma",
    shortName: "NS.",
    headline: "AI Engineer in the Making",
    positioning: "Computer Science Engineering Student | AI & Machine Learning | LLM Applications | Full-Stack Engineering",
    location: "Pune, Maharashtra, India",
    email: "naitik1726@gmail.com",
    contactFormEndpoint: "https://formsubmit.co/ajax/naitik1726@gmail.com",
    phone: "+91 8114473426",
    github: "https://github.com/NaitikSharma7804",
    // Configurable LinkedIn profile URL (editable placeholder)
    linkedin: "https://www.linkedin.com/in/naitik-sharma-ai",
    resumePdf: "assets/Naitik_Sharma_Resume.pdf",
    availability: "Open to AI/ML Internships & Engineering Opportunities",
    education: {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "MIT World Peace University",
      shortInstitution: "MIT-WPU, Pune",
      cgpa: "9.1 / 10",
      period: "August 2024 – July 2028",
      status: "Expected Graduation: July 2028"
    },
    stats: {
      projects: "10+",
      hackathons: "8+",
      technologies: "40+",
      eventsOrganized: "15+",
      certificates: "10+"
    }
  },

  projects: [
    {
      id: "01",
      title: "SOMed-AI Pharmacovigilance & ADR Reporting Portal",
      category: "APPLIED AI · LLM INTEGRATION · FULL-STACK",
      description: "An AI-powered pharmacovigilance and adverse drug reaction reporting platform designed to support structured reporting workflows for patients, pharmacists, and health authorities.",
      technologies: ["Node.js", "Express.js", "MySQL", "OpenRouter API", "REST APIs", "Voice AI"],
      aiFocus: "LLM integration, structured extraction, applied AI workflows, API integration, and AI-assisted reporting.",
      keyContributions: [
        "Integrated OpenRouter LLMs for structured information extraction from unorganized clinical narratives.",
        "Implemented voice-based adverse event reporting capabilities with real-time speech processing.",
        "Designed multi-tier reporting workflows and automated case routing across patients, pharmacists, and regulatory bodies.",
        "Engineered relational database schema in MySQL for audit-compliant clinical case management."
      ],
      // Verified live deployment from resume annotations
      liveUrl: "https://somed-ai-portal-ns-d7c2.vercel.app/",
      // Configurable GitHub link
      githubUrl: "https://github.com/NaitikSharma7804",
      badge: "Featured AI System",
      imageType: "architecture"
    },
    {
      id: "02",
      title: "EcoRevive",
      category: "SUSTAINABILITY TECH · FULL-STACK ENGINEERING",
      description: "A sustainable thrift e-commerce platform that combines a marketplace experience with environmental impact tracking.",
      technologies: ["React.js", "TypeScript", "Node.js", "MongoDB", "REST APIs"],
      aiFocus: "Full-stack architecture, asynchronous processing, database design, payment integration, and data visualization.",
      keyContributions: [
        "Built full-stack marketplace functionality using modular, reusable application architecture.",
        "Implemented RESTful APIs, secure payment integration workflows, and an in-app reward credit system.",
        "Developed Life Cycle Assessment (LCA) based carbon and environmental impact tracking for pre-loved goods.",
        "Engineered asynchronous processing, data aggregation pipelines, and real-time impact visualizations."
      ],
      liveUrl: null, // Configurable placeholder
      githubUrl: "https://github.com/NaitikSharma7804/EcoRevive",
      badge: "Sustainable Commerce",
      imageType: "branding"
    },
    {
      id: "03",
      title: "EV Charging Station Management System",
      category: "SMART MOBILITY · AI INTEGRATION · FULL-STACK",
      description: "A full-stack EV charging platform designed to support station discovery, charging-slot booking, payments, and booking management.",
      technologies: ["React.js", "Node.js", "Express.js", "MySQL", "REST APIs", "Maps API", "AI"],
      aiFocus: "API integration, relational databases, geospatial interfaces, booking workflows, and AI-assisted recommendations.",
      keyContributions: [
        "Developed end-to-end charging-station discovery and time-slotted booking workflows.",
        "Integrated geospatial mapping functionality for interactive station discovery and live route navigation.",
        "Integrated AI-powered slot recommendations based on charger velocity, tariff windows, and queue telemetry.",
        "Created administration workflows for managing users, charging hardware, real-time power metrics, and bookings."
      ],
      liveUrl: null, // Configurable placeholder
      githubUrl: "https://github.com/NaitikSharma7804/SMART-EV-CHARGING-MANAGEMENT-SYSTEM",
      badge: "Smart Mobility",
      imageType: "screenshot",
      imageSrc: "assets/img/project-ev-charging.png"
    }
  ],

  experience: [
    {
      role: "Frontend Development Intern",
      organization: "CodeOrbit Tech",
      period: "April 2026 – June 2026",
      type: "Internship",
      description: [
        "Developed responsive web interfaces using HTML, CSS, JavaScript, and React.js.",
        "Contributed to real-world frontend development workflows and team engineering standards.",
        "Collaborated on feature implementation, UI debugging, component optimization, and Git-based collaboration."
      ],
      skills: ["React.js", "JavaScript", "HTML5", "CSS3", "Git", "Responsive Design"]
    },
    {
      role: "Research Intern — Pharmacovigilance & ADR Reporting",
      organization: "MIT World Peace University (Under Faculty Guidance)",
      period: "August 2025 – October 2025",
      type: "Academic Research",
      description: [
        "Researched pharmacovigilance and adverse drug reaction reporting workflows across healthcare stakeholders.",
        "Translated clinical case collection, severity assessment, and compliance reporting into technical software specifications.",
        "Explored AI-assisted data extraction, structured case management, REST APIs, and database design for a digital ADR reporting platform."
      ],
      skills: ["Applied AI", "LLM Extraction", "Healthcare Tech", "REST APIs", "MySQL", "Software Architecture"]
    }
  ],

  leadership: [
    {
      title: "Overall Coordinator — Industry–Academia Relations",
      organization: "MIT World Peace University",
      highlight: "Led a team of 200+ students",
      points: [
        "Coordinated end-to-end planning, logistics, and execution of major university events.",
        "Managed high-level interactions with industry leaders, corporate executives, and visiting CXOs.",
        "Oversaw event operations, student team dispatching, and technical conference workflows."
      ]
    },
    {
      title: "President & Founding Member",
      organization: "Funkaar Creative Community",
      highlight: "2-Year Leadership Tenure",
      points: [
        "Founded and led a vibrant multidisciplinary creative community across universities.",
        "Fostered collaboration among multidisciplinary artists across various technical and artistic domains.",
        "Organized community projects, productions, cultural showcases, and outreach initiatives."
      ]
    }
  ],

  achievements: [
    {
      title: "Runner-Up — Coder's Arena",
      issuer: "Intra-College Hackathon",
      description: "Secured 2nd place for building rapid full-stack software solutions under tight competitive deadlines."
    },
    {
      title: "Full-Stack Specialization Certification",
      issuer: "Coursera",
      description: "Demonstrated proficiency in end-to-end full-stack software development and MERN technologies."
    },
    {
      title: "Award of Recognition",
      issuer: "Funkaar Community",
      description: "Honored for outstanding leadership, team stewardship, and impactful initiatives across a 2-year tenure."
    }
  ]
};

// Expose globally
if (typeof window !== "undefined") {
  window.PORTFOLIO_CONFIG = PORTFOLIO_CONFIG;
}
