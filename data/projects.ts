export type Project = {
  id: string;
  title: string;
  summary: string;
  label: string;
  author: string;
  published: string;
  url: string;
  image: string;
  featured?: boolean;
  card?: string;
  tags?: string[];
  details?: {
    description: string[];
    technologies?: string[];
    note?: string;
  };
};

export const projects: Project[] = [
  {
    id: "project-portfolio",
    title: "Personal Portfolio Website",
    summary:
      "A responsive portfolio built with Next.js, TypeScript, and Tailwind CSS to showcase my work and experience.",
    label: "Featured",
    author: "Sjoerd De Bruyn",
    published: "2025",
    url: "#",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
    featured: true,
    card: "",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    details: {
      description: [
        "A responsive portfolio built with Next.js, TypeScript, and Tailwind CSS to showcase my work and experience.",
      ],
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    },
  },
  {
    id: "online-encryption-service",
    title: "Online Encryption Service with Microservices — AES-256, Key Management",
    summary:
      "A microservice-driven web application for secure file encryption and decryption with user registration, authentication, and encrypted storage.",
    label: "Security",
    author: "Sjoerd De Bruyn",
    published: "2025",
    url: "#",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
    featured: true,
    card: "",
    tags: ["Microservices", "AES-256", "Encryption", "Key Management", "Security", "Backend"],
    details: {
      description: [
        "Built a microservice-driven web application for secure file encryption and decryption with user registration, authentication, and encrypted storage for up to 50 files per user.",
        "Integrated AES-256 encryption with automated private-key generation and secure key handling workflows to ensure confidentiality and resilience against brute-force attacks.",
        "Designed and implemented a secure backend key-management database following industry best practices, including encrypted key storage, access-controlled retrieval, and audit-ready logging.",
      ],
      technologies: ["AES-256", "Microservices", "Key Management", "Database", "Security"],
    },
  },
  {
    id: "interactive-exploration-platform",
    title: "Interactive Exploration and Engagement Platform",
    summary:
      "A modern web platform visualizing curated local points of interest with interactive map elements and community-driven content expansion.",
    label: "Web App",
    author: "Sjoerd De Bruyn",
    published: "2025",
    url: "#",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
    featured: true,
    card: "",
    tags: ["Web Platform", "Interactive Maps", "Frontend", "Community Features"],
    details: {
      description: [
        "Developed a modern web platform visualizing 30 curated local points of interest using custom icons, metadata, and interactive map elements.",
        "Implemented a recommendations page enabling users to submit new locations, facilitating community-driven content expansion.",
        "Designed flexible content schemas and frontend components supporting search, filtering, and dynamic rendering.",
      ],
      technologies: ["JavaScript", "HTML", "CSS", "Frontend", "Maps API"],
    },
  },
  {
    id: "shell-terminal",
    title: "Shell Terminal (C)",
    summary:
      "A fully functional Unix-like shell in C supporting command execution, piping, background processes, and directory utilities.",
    label: "Systems Programming",
    author: "Sjoerd De Bruyn",
    published: "2024",
    url: "#",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
    featured: true,
    card: "",
    tags: ["C", "Unix", "Shell", "Systems Programming", "Process Management"],
    details: {
      description: [
        "Developed a fully functional Unix-like shell in C supporting command execution, piping, background processes, forks, and directory utilities (e.g., ls).",
        "Implemented process management, signal handling, IO redirection, and job control to mirror standard shell behaviors.",
        "Added display and formatting options for improved usability and command visibility.",
      ],
      technologies: ["C", "Unix", "Process Management", "Signal Handling"],
    },
  },
  {
    id: "risc-v-os-development",
    title: "RISC-V Operating System Development (xv6 enhancements)",
    summary:
      "Extended the xv6 operating system with system calls, paging, traps, kernel threads, network drivers, and filesystem improvements.",
    label: "Operating Systems",
    author: "Sjoerd De Bruyn",
    published: "2024",
    url: "#",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
    featured: true,
    card: "",
    tags: ["RISC-V", "Operating Systems", "xv6", "Kernel", "System Calls", "Assembly"],
    details: {
      description: [
        "System Calls: Implemented syscall tracing, sysinfo, and optimizations to reduce syscall latency.",
        "Paging: Added page-table printing utilities and logic to detect accessed pages for memory tracking.",
        "Traps & Exceptions: Wrote trap handlers in RISC-V assembly, implemented backtrace support and alarm/timer handling.",
        "Kernel Threads: Extended the kernel with thread support using a clone() implementation modeled on fork(), created a user-level threading library and lock primitives.",
        "Net Driver: Implemented a functional E1000 network driver enabling packet transmission/reception.",
        "Filesystems: Added support for large files and symbolic links to improve POSIX-like behavior.",
      ],
      technologies: ["RISC-V", "Assembly", "C", "xv6", "Kernel Development"],
    },
  },
  {
    id: "ai-dlp-program",
    title: "AI Data Loss Prevention Program",
    summary:
      "A cross-platform DLP agent that connects to AI platforms via Firefox to detect and prevent sensitive data leakage.",
    label: "Security",
    author: "Sjoerd De Bruyn",
    published: "2025",
    url: "#",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
    featured: true,
    card: "",
    tags: ["DLP", "Security", "Firefox", "Cross-platform", "Regex", "Data Protection"],
    details: {
      description: [
        "Built a cross-platform DLP agent that connected to AI platforms via Firefox to detect outbound text and prevent sensitive data leakage.",
        "Developed a command-line interface to edit a custom website blacklist and a file allow-list for safe types.",
        "Compiled advanced regex rulesets to identify sensitive data patterns (credentials, financial identifiers, PII).",
        "Implemented a file-analysis agent to scan selected directories and flag confidential or sensitive files.",
      ],
      technologies: ["Python", "Firefox", "Regex", "CLI", "Cross-platform"],
    },
  },
  {
    id: "network-security-architecture",
    title: "Network Security Architecture – Enterprise Defenses",
    summary:
      "A comprehensive enterprise defense plan addressing modern attack vectors with layered security strategies and operational recommendations.",
    label: "Security Architecture",
    author: "Sjoerd De Bruyn",
    published: "2025",
    url: "#",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
    featured: false,
    card: "",
    tags: ["Network Security", "Enterprise", "NIST", "Security Architecture", "Defense Strategy"],
    details: {
      description: [
        "Designed a comprehensive enterprise defense plan addressing modern attack vectors (scanning, MITM, session hijacking, credential theft, routing attacks).",
        "Specified vulnerability scanning strategy, IDS/IPS deployment, DDoS mitigation priorities, MFA, key management, and encryption policies aligned with best practices.",
        "Proposed firewall, proxy, VPN architecture, redundancy models, and covert-channel detection strategies for layered defense.",
        "Developed operational recommendations for logging, onion-routing detection, beaconing host isolation, and incident response.",
      ],
      technologies: ["Network Security", "NIST", "IDS/IPS", "Firewall", "VPN"],
      note: "School Project • Spring 2025",
    },
  },
  {
    id: "mern-application",
    title: "Full Stack MERN Application — React, Node, MongoDB",
    summary:
      "A full-stack movie-management application with React frontend, Node.js backend, and MongoDB database supporting full CRUD operations.",
    label: "Full Stack",
    author: "Sjoerd De Bruyn",
    published: "2024",
    url: "#",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
    featured: true,
    card: "",
    tags: ["MERN", "React", "Node.js", "MongoDB", "Full Stack", "REST API"],
    details: {
      description: [
        "Built a React front end that sends HTTP requests to a REST API to perform full CRUD operations.",
        "Engineered a movie-management UI with dynamic components and state-driven rendering using the Fetch API.",
        "Implemented server-side CRUD, integrated database persistence, and deployed the application to cloud hosting.",
      ],
      technologies: ["React", "Node.js", "MongoDB", "JavaScript", "REST API"],
    },
  },
  {
    id: "rest-api-project",
    title: "REST API Project",
    summary:
      "A RESTful API with endpoints supporting resource creation, retrieval, updates, and deletion with robust error handling and validation.",
    label: "Backend",
    author: "Sjoerd De Bruyn",
    published: "2024",
    url: "#",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
    featured: false,
    card: "",
    tags: ["REST API", "Backend", "Node.js", "JSON", "API Design"],
    details: {
      description: [
        "Designed and implemented RESTful endpoints supporting resource creation, retrieval, updates, and deletion.",
        "Added route validation, robust error handling, and JSON-based data interchange for reliable client communication.",
        "Structured the API for modularity and scalability to support frontend and microservice consumers.",
      ],
      technologies: ["Node.js", "REST", "JSON", "API Design"],
    },
  },
  {
    id: "relational-database-system",
    title: "Integrated Relational Database Web System",
    summary:
      "A normalized 7-entity relational database for a mock marketplace with dynamic UI components for data management.",
    label: "Database",
    author: "Sjoerd De Bruyn",
    published: "2024",
    url: "#",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
    featured: false,
    card: "",
    tags: ["SQL", "Database", "Relational Database", "Web System", "CRUD"],
    details: {
      description: [
        "Designed a normalized 7-entity relational database for a mock marketplace, modeling customers, products, orders, and relationships.",
        "Implemented schema constraints, foreign-key cascades, indexing strategies, and full SQL CRUD operations for all entities.",
        "Built dynamic UI components enabling users to view, add, and manage data linked to the relational model.",
      ],
      technologies: ["SQL", "Database Design", "Relational Database", "HTML", "CSS", "JavaScript"],
    },
  },
  {
    id: "atomic-chess",
    title: "Atomic Chess Game",
    summary:
      "A playable Atomic Chess implementation with custom movement logic, explosion-based capture mechanics, and interactive interface.",
    label: "Game Development",
    author: "Sjoerd De Bruyn",
    published: "2024",
    url: "#",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
    featured: false,
    card: "",
    tags: ["Game Development", "Chess", "Algorithm", "GUI", "CLI"],
    details: {
      description: [
        "Developed a playable Atomic Chess implementation with custom movement logic and explosion-based capture mechanics.",
        "Implemented board-state management, legal move validation, and win-condition detection while maintaining performance.",
        "Provided an interactive interface (CLI or GUI) to play full matches and test variant rules.",
      ],
      technologies: ["C++", "Game Development", "Algorithms", "GUI"],
    },
  },
];
