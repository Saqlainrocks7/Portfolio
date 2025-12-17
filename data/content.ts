export type Experience = {
  title: string;
  org: string;
  location: string;
  start: string;
  end: string;
  bullets: string[];
  tags: string[];
  accent: "teal" | "indigo";
};

export type Project = {
  name: string;
  accent: "green" | "purple" | "yellow";
  blurb: string;
  bullets: string[];
  stackLine: string;
  extraCount: number;
  links: { github?: string; live?: string };
};

export type SkillGroup = {
  title: string;
  icon: "code" | "wrench" | "db" | "cloud";
  items: { name: string; pct: number }[];
};

export const profile = {
  logo: "<SA/>",
  name: "Saqlain",
  fullName: "Sk Saqlain Ali",
  role: "Full-Stack Software Developer",
  tagline: "Crafting scalable web applications with modern technologies.",
  degreeLine: "MS Computer Science @ Iowa State University",
  location: "Ames, Iowa",
  phone: "(515) 735-0339",
  email: "skabroad2020@gmail.com",
  links: {
    linkedin: "https://linkedin.com/in/sksaqlainali",
    github: "https://github.com/Saqlainrocks7"
  }
};

export const nav = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Research Area", href: "#research" },
  { label: "Publications", href: "#publications" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" }
];

export const experience: Experience[] = [
  {
    title: "Web Developer",
    org: "Iowa State University • Physical Activity Intervention Platform",
    location: "Ames, IA",
    start: "Aug 2024",
    end: "May 2025",
    bullets: [
      "Modified the platform's content system to include gamification features (games, videos, questions), enhancing user engagement by 30%.",
      "Integrated specialized self-efficacy tools/resources to support controlled research studies while improving user health and wellness outcomes.",
      "Leveraged Python and Django to develop, maintain, and ensure high-performance operations across the web app."
    ],
    tags: ["Python", "Django", "PostgreSQL"],
    accent: "teal"
  },
  {
    title: "Software Developer Intern",
    org: "College Sports Evaluation",
    location: "Fort Collins, CO",
    start: "Jun 2023",
    end: "Aug 2023",
    bullets: [
      "Developed core backend modules using Python and Django: robust database models, dynamic views, and reliable API endpoints.",
      "Optimized data retrieval with complex SQL queries, improving overall database performance by 15%.",
      "Engineered Python scripts to parse/process high-volume JSON athlete data, increasing data handling efficiency by 25%."
    ],
    tags: ["Python", "Django", "SQL", "REST API"],
    accent: "indigo"
  }
];

export const projects: Project[] = [
  {
    name: "EcoSync",
    accent: "green",
    blurb: "A full-stack, real-time resource-sharing platform with geo-spatial querying capabilities, deployed on AWS ECS with CI/CD pipeline.",
    bullets: [
      "Built with Next.js and PostgreSQL with PostGIS integration",
      "Docker containerization with AWS ECS deployment",
      "Real-time updates via WebSockets"
    ],
    stackLine: "TypeScript · Next.js · Node.js · PostgreSQL",
    extraCount: 3,
    links: { github: "https://github.com/Saqlainrocks7" }
  },
  {
    name: "CodeSage",
    accent: "purple",
    blurb: "An AI Developer Assistant utilizing a RAG system for context-aware code and documentation analysis with secure, self-hosted LLM integration.",
    bullets: [
      "Custom RAG implementation with Vector Database",
      "Multi-step data ingestion pipeline",
      "Self-hosted LLM with FastAPI backend"
    ],
    stackLine: "Python · React · OpenAI API · ChromaDB",
    extraCount: 2,
    links: { github: "https://github.com/Saqlainrocks7" }
  },
  {
    name: "AuraVision",
    accent: "yellow",
    blurb: "A multimodal diagnostic web app with real-time AI pipeline for industrial component identification and an AR-like visual overlay.",
    bullets: [
      "Real-time video processing with WebRTC",
      "Fine-tuned YOLOv8 for object recognition",
      "SSE streaming for low-latency predictions"
    ],
    stackLine: "Python · React · WebRTC API · Canvas API",
    extraCount: 2,
    links: { github: "https://github.com/Saqlainrocks7" }
  }
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    icon: "code",
    items: [
      { name: "Python", pct: 95 },
      { name: "TypeScript", pct: 90 },
      { name: "JavaScript", pct: 90 },
      { name: "SQL", pct: 85 },
      { name: "HTML/CSS", pct: 88 }
    ]
  },
  {
    title: "Frameworks",
    icon: "wrench",
    items: [
      { name: "Django", pct: 92 },
      { name: "React", pct: 90 },
      { name: "Next.js", pct: 85 },
      { name: "FastAPI", pct: 88 },
      { name: "Flask", pct: 82 }
    ]
  },
  {
    title: "Databases",
    icon: "db",
    items: [
      { name: "PostgreSQL", pct: 90 },
      { name: "Redis", pct: 80 },
      { name: "ChromaDB", pct: 75 }
    ]
  },
  {
    title: "DevOps & Tools",
    icon: "cloud",
    items: [
      { name: "AWS", pct: 82 },
      { name: "Docker", pct: 88 },
      { name: "Git", pct: 92 },
      { name: "Node.js", pct: 85 }
    ]
  }
];

export const alsoExperienced = ["Socket.io", "REST API", "WebRTC", "Canvas API", "WebSockets", "PostGIS", "SSE"];

export const education = [
  {
    degree: "Master of Science in Computer Science",
    school: "Iowa State University",
    location: "Ames, IA",
    dates: "Aug 2021 — May 2026",
    badge: "Current"
  },
  {
    degree: "Bachelor of Science in Computer Science",
    school: "Institute of Engineering and Management",
    location: "Kolkata, India",
    dates: "Aug 2016 — Jun 2020",
    badge: ""
  }
];

export const researchAreas = [
  {
    title: "VR Privacy & Security Audits",
    desc: "Threat modeling and automated privacy audits for immersive applications, including network behavior characterization and policy-to-code consistency checks."
  },
  {
    title: "Static + Dynamic App Analysis",
    desc: "Building pipelines that combine call-graph extraction, data-flow analysis, and runtime instrumentation to detect sensitive data flows."
  },
  {
    title: "Compliance Automation",
    desc: "Mapping technical findings to legal requirements (e.g., GDPR-like principles) to produce actionable risk scores and evidence."
  }
];

export const publications = [
  {
    title: "Toward Automated Privacy Auditing for Immersive Apps",
    venue: "Preprint (dummy)",
    year: "2025",
    authors: "Saqlain Ali, Coauthors",
    note: "A study on integrating static analysis and policy parsing for scalable VR audits."
  },
  {
    title: "A Retrieval-Augmented Assistant for Secure Dev Workflows",
    venue: "Workshop (dummy)",
    year: "2024",
    authors: "Saqlain Ali, Coauthors",
    note: "Explores RAG pipelines with traceability, citations, and access-control aware retrieval."
  },
  {
    title: "Low-Latency Vision Pipelines in the Browser",
    venue: "Tech report (dummy)",
    year: "2023",
    authors: "Saqlain Ali",
    note: "Practical patterns for WebRTC ingestion, SSE streaming, and UI overlays."
  }
];
