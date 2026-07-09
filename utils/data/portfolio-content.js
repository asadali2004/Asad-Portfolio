export const profile = {
  name: "Asad Ali",
  role: "Software Engineer",
  domain: "https://iamasad.me",
  email: "aliasad07518@gmail.com",
  github: "https://github.com/asadali2004",
  linkedIn: "https://linkedin.com/in/asadalli",
  leetcode: "https://leetcode.com/u/asadali04/",
  resume:
    "https://drive.google.com/file/d/11HeIj-NNkHSjfkktB3_BxjYt8fFZ9oWd/view?usp=sharing",
  profileImage: "/image/Profile-photo.png",
  headline:
    "Software Engineer focused on .NET, ASP.NET Core, microservices, Angular, AWS, Docker, and CI/CD.",
  summary:
    "I build backend-heavy web systems with clean APIs, clear boundaries, and practical cloud deployment workflows.",
};

export const heroStats = [
  { label: "LeetCode problems", value: "400+" },
  { label: "CGPA", value: "8.39" },
  { label: "IBM certifications", value: "12" },
  { label: "Focus", value: ".NET Cloud" },
];

export const aboutTimeline = [
  {
    year: "2022",
    title: "Started B.Tech CSE at LPU",
    description:
      "Built fundamentals in programming, databases, web engineering, and problem solving.",
  },
  {
    year: "2024",
    title: "Explored AI-backed products",
    description:
      "Built ChatMate, AdoptiPaws, and Rekno while strengthening full-stack delivery.",
  },
  {
    year: "2025",
    title: "Broadridge x LPU Industry Immersion",
    description:
      "Studied cloud, DevOps, software engineering, Agile, Scrum, AWS, Terraform, Docker, Jenkins, and Datadog.",
  },
  {
    year: "2025-26",
    title: "QSpiders .NET Full Stack",
    description:
      "Focused on ASP.NET Core, Angular, SQL Server, REST APIs, and enterprise application patterns.",
  },
  {
    year: "2026",
    title: "Built ZyntraPay",
    description:
      "Designed a microservices payment platform with RabbitMQ, Docker, GitHub Actions, JWT, RBAC, and unit testing.",
  },
];

export const skillGroups = [
  {
    category: "Languages",
    skills: [
      { name: "C#", level: "Primary", description: "Backend services, domain models, APIs" },
      { name: "Java", level: "Strong", description: "OOP, data structures, backend fundamentals" },
      { name: "JavaScript", level: "Strong", description: "Frontend behavior and full-stack projects" },
      { name: "SQL", level: "Strong", description: "Relational data modeling and querying" },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "Angular", level: "Primary", description: "Component-driven enterprise UI" },
      { name: "HTML", level: "Strong", description: "Semantic, accessible page structure" },
      { name: "CSS", level: "Strong", description: "Responsive layouts and polished interfaces" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "ASP.NET Core", level: "Primary", description: "REST APIs and service boundaries" },
      { name: "Web API", level: "Primary", description: "HTTP endpoints and contract design" },
      { name: "Entity Framework Core", level: "Strong", description: "ORM workflows and persistence" },
      { name: "LINQ", level: "Strong", description: "Typed querying and data transforms" },
      { name: "REST APIs", level: "Primary", description: "Resource modeling and integration" },
      { name: "Microservices", level: "Focused", description: "Service decomposition and messaging" },
    ],
  },
  {
    category: "Database",
    skills: [
      { name: "SQL Server", level: "Primary", description: "Schemas, joins, transactions" },
      { name: "MongoDB", level: "Working", description: "Document storage for MERN projects" },
    ],
  },
  {
    category: "Cloud and DevOps",
    skills: [
      { name: "AWS", level: "Working", description: "Cloud services and deployment foundations" },
      { name: "Docker", level: "Strong", description: "Containerized local and deployable apps" },
      { name: "Terraform", level: "Working", description: "Infrastructure as code basics" },
      { name: "GitHub Actions", level: "Strong", description: "Build and test automation" },
      { name: "Jenkins", level: "Working", description: "CI/CD pipeline practice" },
      { name: "Linux", level: "Working", description: "CLI, shell, and server basics" },
    ],
  },
  {
    category: "Tools and Concepts",
    skills: [
      { name: "Git", level: "Strong", description: "Branching, commits, collaboration" },
      { name: "Swagger", level: "Strong", description: "API docs and contract testing" },
      { name: "Postman", level: "Strong", description: "API testing workflows" },
      { name: "Datadog", level: "Working", description: "Observability foundations" },
      { name: "Jira", level: "Working", description: "Agile tracking and delivery" },
      { name: "SOLID", level: "Strong", description: "Maintainable object-oriented design" },
      { name: "Repository Pattern", level: "Strong", description: "Data access separation" },
      { name: "JWT", level: "Strong", description: "Token-based authentication" },
      { name: "RBAC", level: "Strong", description: "Role-based authorization" },
      { name: "Clean Architecture", level: "Focused", description: "Layered boundaries and testability" },
      { name: "CI/CD", level: "Strong", description: "Automated delivery habits" },
      { name: "Agile", level: "Working", description: "Iterative team delivery" },
    ],
  },
];

export const featuredProject = {
  name: "ZyntraPay",
  label: "Featured microservices project",
  description:
    "A payment-platform project built to practice production-style service boundaries, authentication, messaging, automated delivery, and testable backend architecture.",
  image: "/image/ZyntraPay-img.png",
  repo: "https://github.com/asadali2004/ZyntraPay",
  demo: "https://iamasad.me",
  stack: [
    "ASP.NET Core",
    "Angular",
    "Microservices",
    "RabbitMQ",
    "Docker",
    "GitHub Actions",
    "JWT",
    "RBAC",
    "REST APIs",
    "Unit Testing",
  ],
  highlights: [
    "Service-oriented backend with clear API contracts",
    "RabbitMQ-based asynchronous communication",
    "JWT authentication and role-based access control",
    "Dockerized services with CI/CD through GitHub Actions",
    "Unit-tested backend flows and clean architecture practices",
  ],
};

export const projects = [
  {
    name: "ChatMate",
    description:
      "AI chat application exploring conversational UX, API integration, and full-stack application flow.",
    stack: ["MongoDB", "Express.js", "React", "Node.js", "JavaScript"],
    repo: "https://github.com/asadali2004/ChatMate.git",
    demo: "https://chatmate-ivory.vercel.app/",
  },
  {
    name: "Rekno",
    description:
      "Knowledge graph and memory simulator for mapping ideas, relationships, and concept reinforcement.",
    stack: ["Java", "Gson", "JavaScript", "vis.js", "JSON"],
    repo: "https://github.com/asadali2004/Rekno.git",
    demo: "https://web-production-75e1d.up.railway.app/",
  },
  {
    name: "AdoptiPaws",
    description:
      "Pet adoption platform connecting NGOs and adopters with search, listings, and user flows.",
    stack: ["React", "PHP", "MySQL", "Bootstrap", "JavaScript"],
    repo: "https://github.com/asadali2004/adoptipaws_landing_page.git",
    demo: "https://www.adoptipaws.social/",
  },
];

export const certificates = [
  {
    title: "Modern DevOps: Foundations to Observability",
    issuer: "IBM",
    detail: "12-course IBM certificate set covering DevOps foundations, CI/CD, containers, Git, Agile, cloud, and observability.",
    image: "/image/IBM-devops-thumnail.jpg",
    count: "12 certificates",
    driveUrl: "https://drive.google.com/file/d/1IwE0DNpeM5ucInk81tS50E3-7fQfsIKX/view?usp=sharing",
  },
  {
    title: "Industry Immersion Program",
    issuer: "Broadridge x LPU",
    detail: "Industry-led training across cloud, DevOps, software engineering, Agile, Scrum, AWS, Terraform, Docker, Jenkins, and Datadog.",
    image: "/image/Broadridge-certificate-thumbnail.jpg",
    count: "Program certificate",
    driveUrl: "https://drive.google.com/file/d/1haI1zbWZ5M04Cbb3Nwmjuq1QwXEga9kS/view?usp=sharing",
  },
  {
    title: "HCI and Cloud Computing",
    issuer: "NPTEL",
    detail: "Academic certificates covering Human Computer Interaction and Cloud Computing fundamentals.",
    image: "/image/NPTEL-thumbnail.jpg",
    count: "2 certificates",
    driveUrl: "https://drive.google.com/file/d/1Qd4btHPXpCnYRw_GTGf7Lh4jnSY1d-gG/view?usp=sharing",
  },
  {
    title: "MERN + GenAI",
    issuer: "Flames'24 W3grads",
    detail: "Full-stack MERN and Generative AI program focused on modern web applications and AI-assisted features.",
    image: "/image/Mern+Genai-thumbnai.jpg",
    count: "Program certificate",
    driveUrl: "https://drive.google.com/file/d/10-Ti93R1kc5ioMjyfKLqgrJUNLfjl0To/view?usp=sharing",
  },
  {
    title: "Generative AI Fundamentals",
    issuer: "Coursera",
    detail: "Set of seven courses covering Generative AI, LLM foundations, prompt engineering, and applied AI workflows.",
    image: "/image/Genai Fundamental thumbnail.jpg",
    count: "7 courses",
    driveUrl: "https://drive.google.com/file/d/1bijljZYSPalzsJXp_gq0VBfRqIBoOSxv/view?usp=sharing",
  },
];

export const achievements = [
  "400+ LeetCode problems solved",
  "12 IBM certifications",
  "CGPA 8.39",
  "Broadridge industry immersion",
];
