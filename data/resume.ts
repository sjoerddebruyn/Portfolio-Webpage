export type ContactInfo = {
  phone: string;
  email: string;
  linkedin: string;
  address: string;
};

export type Education = {
  institution: string;
  location: string;
  degree: string;
  gpa?: string;
  graduationDate: string;
};

export type ExperienceItem = {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
};

export type Project = {
  title: string;
  description: string[];
  note?: string;
};

export type Skills = {
  tools: string;
  languages: string;
  other: string;
};

export type Certification = {
  name: string;
};

export type Award = {
  name: string;
};

export type Affiliation = {
  name: string;
};

export type Language = {
  name: string;
  proficiency: string;
};

export type Travel = {
  description: string;
  details: string;
};

export type Activity = {
  name: string;
};

export type Resume = {
  contact: ContactInfo;
  summary: string;
  education: Education[];
  experience: ExperienceItem[];
  projects: Project[];
  skills: Skills;
  certifications: Certification[];
  awards: Award[];
  affiliations: Affiliation[];
  languages: Language[];
  travel: Travel;
  activities: Activity[];
  hobbies: string;
};

export const resume: Resume = {
  contact: {
    phone: "503-583-3174",
    email: "Sjoerddebruyn03@gmail.com",
    linkedin: "linkedin.com/in/sjoerd-de-bruyn",
    address: "1363 NW Monroe Ave Apt #1, Corvallis, OR",
  },
  summary:
    "Computer Science student with hands-on experience in cybersecurity, enterprise technologies, and data analysis. Proficient in Splunk administration, network security architecture, and digital forensics, with the ability to design layered defense strategies and analyze complex systems. Skilled in programming, database management, and technical instruction, supported by certifications as a Splunk Core User, Power User, and Enterprise Admin. Motivated team player with a strong academic record and a drive for continuous learning and improvement.",
  education: [
    {
      institution: "Oregon State University",
      location: "Corvallis, OR",
      degree: "Bachelor of Science in Computer Science",
      gpa: "3.76",
      graduationDate: "Expected June 2026",
    },
  ],
  experience: [
    {
      title: "SOC Analyst",
      company: "Oregon State University",
      location: "Corvallis, OR",
      startDate: "Sept. 2025",
      endDate: "Present",
      responsibilities: [
        "Rotated through six SOC teams including penetration testing, network security, detection engineering, and threat analysis.",
        "Performed two local penetration tests on Linux systems and one on a client network and authored detailed technical reports with remediation guidance.",
        "Completed an on-site threat assessment for a client, mapped findings to NIST controls, and identified compliance and remediation priorities.",
        "Developed proficiency in SIEM operations, alert investigation, incident documentation, and foundational SOC workflows.",
      ],
    },
    {
      title: "Technical Instructor Intern",
      company: "Splunk, a Cisco Company",
      location: "Remote",
      startDate: "June 2025",
      endDate: "Sept. 2025",
      responsibilities: [
        "Delivered a 3-hour live technical training session to customers and instructors, improving product fluency and adoption.",
        "Participated in User Acceptance Testing for new course content; documented bugs and recommended improvements.",
        "Analyzed Splunk's education platform performance and presented findings and remediation suggestions to leadership.",
        "Contributed to a social awareness analytics project using Splunk to analyze and visualize real-world datasets.",
        "Attended weekly technical lectures on Splunk and Cisco enterprise systems to deepen product knowledge.",
      ],
    },
    {
      title: "Undergraduate Learning Assistant",
      company: "Oregon State University",
      location: "Corvallis, OR",
      startDate: "June 2024",
      endDate: "Present",
      responsibilities: [
        "Coordinated with faculty and ULAs to support over 300 students across six distinct projects and coursework modules.",
        "Graded 30–60 programming assignments weekly, providing code-level feedback to accelerate student learning.",
        "Led 30+ office hours and tutoring calls per term, offering one-on-one assistance and debugging support.",
      ],
    },
    {
      title: "Head Lifeguard & Swim Instructor",
      company: "Villasport Athletic Club & Spa",
      location: "Beaverton, OR",
      startDate: "June 2023",
      endDate: "Dec. 2024",
      responsibilities: [
        "Ensured the safety of 200+ swimmers by supervising multiple aquatics areas and serving as primary emergency responder.",
        "Managed a team of 20 lifeguards: organized weekly staff meetings, ran bi-monthly trainings, delegated daily duties, and created cost-efficient schedules.",
        "Led a relaunch of the aquatics program through improved outreach and scheduling processes, increasing department revenue.",
        "Instructed 10–15 swim students weekly, contributing approximately $11,000 in program revenue.",
      ],
    },
    {
      title: "Office Assistant",
      company: "Orange Media Network",
      location: "Corvallis, OR",
      startDate: "Various Dates",
      endDate: "",
      responsibilities: [
        "Provided administrative and operational support across office tasks and event preparation.",
      ],
    },
    {
      title: "Baker",
      company: "Crumbl Cookie",
      location: "Oregon",
      startDate: "Various Dates",
      endDate: "",
      responsibilities: [
        "Prepared baked goods, maintained quality control, and supported inventory and production workflows.",
      ],
    },
    {
      title: "Hotline Cook",
      company: "Roxy's Island Grill",
      location: "Oregon",
      startDate: "Various Dates",
      endDate: "",
      responsibilities: [
        "Executed high-volume food production with quality and timing responsibilities in a fast-paced kitchen environment.",
      ],
    },
    {
      title: "Host & Dishwasher",
      company: "Top Burmese",
      location: "Oregon",
      startDate: "Various Dates",
      endDate: "",
      responsibilities: [
        "Managed front-of-house tasks and supported back-of-house cleaning and sanitation.",
      ],
    },
    {
      title: "Team Member",
      company: "Menchie's",
      location: "Oregon",
      startDate: "Various Dates",
      endDate: "",
      responsibilities: [
        "Performed customer service tasks and supported daily operations.",
      ],
    },
  ],
  projects: [
    {
      title: "Online Encryption Service with Microservices — AES-256, Key Management",
      description: [
        "Built a microservice-driven web application for secure file encryption and decryption with user registration, authentication, and encrypted storage for up to 50 files per user.",
        "Integrated AES-256 encryption with automated private-key generation and secure key handling workflows to ensure confidentiality and resilience against brute-force attacks.",
        "Designed and implemented a secure backend key-management database following industry best practices, including encrypted key storage, access-controlled retrieval, and audit-ready logging.",
      ],
    },
    {
      title: "Interactive Exploration and Engagement Platform",
      description: [
        "Developed a modern web platform visualizing 30 curated local points of interest using custom icons, metadata, and interactive map elements.",
        "Implemented a recommendations page enabling users to submit new locations, facilitating community-driven content expansion.",
        "Designed flexible content schemas and frontend components supporting search, filtering, and dynamic rendering.",
      ],
    },
    {
      title: "Shell Terminal (C)",
      description: [
        "Developed a fully functional Unix-like shell in C supporting command execution, piping, background processes, forks, and directory utilities (e.g., ls).",
        "Implemented process management, signal handling, IO redirection, and job control to mirror standard shell behaviors.",
        "Added display and formatting options for improved usability and command visibility.",
      ],
    },
    {
      title: "RISC-V Operating System Development (xv6 enhancements)",
      description: [
        "System Calls: Implemented syscall tracing, sysinfo, and optimizations to reduce syscall latency.",
        "Paging: Added page-table printing utilities and logic to detect accessed pages for memory tracking.",
        "Traps & Exceptions: Wrote trap handlers in RISC-V assembly, implemented backtrace support and alarm/timer handling.",
        "Kernel Threads: Extended the kernel with thread support using a clone() implementation modeled on fork(), created a user-level threading library and lock primitives.",
        "Net Driver: Implemented a functional E1000 network driver enabling packet transmission/reception.",
        "Filesystems: Added support for large files and symbolic links to improve POSIX-like behavior.",
      ],
    },
    {
      title: "AI Data Loss Prevention Program",
      description: [
        "Built a cross-platform DLP agent that connected to AI platforms via Firefox to detect outbound text and prevent sensitive data leakage.",
        "Developed a command-line interface to edit a custom website blacklist and a file allow-list for safe types.",
        "Compiled advanced regex rulesets to identify sensitive data patterns (credentials, financial identifiers, PII).",
        "Implemented a file-analysis agent to scan selected directories and flag confidential or sensitive files.",
      ],
    },
    {
      title: "Network Security Architecture – Enterprise Defenses",
      description: [
        "Designed a comprehensive enterprise defense plan addressing modern attack vectors (scanning, MITM, session hijacking, credential theft, routing attacks).",
        "Specified vulnerability scanning strategy, IDS/IPS deployment, DDoS mitigation priorities, MFA, key management, and encryption policies aligned with best practices.",
        "Proposed firewall, proxy, VPN architecture, redundancy models, and covert-channel detection strategies for layered defense.",
        "Developed operational recommendations for logging, onion-routing detection, beaconing host isolation, and incident response.",
      ],
      note: "School Project • Spring 2025",
    },
    {
      title: "Full Stack MERN Application — React, Node, MongoDB",
      description: [
        "Built a React front end that sends HTTP requests to a REST API to perform full CRUD operations.",
        "Engineered a movie-management UI with dynamic components and state-driven rendering using the Fetch API.",
        "Implemented server-side CRUD, integrated database persistence, and deployed the application to cloud hosting.",
      ],
    },
    {
      title: "REST API Project",
      description: [
        "Designed and implemented RESTful endpoints supporting resource creation, retrieval, updates, and deletion.",
        "Added route validation, robust error handling, and JSON-based data interchange for reliable client communication.",
        "Structured the API for modularity and scalability to support frontend and microservice consumers.",
      ],
    },
    {
      title: "Integrated Relational Database Web System",
      description: [
        "Designed a normalized 7-entity relational database for a mock marketplace, modeling customers, products, orders, and relationships.",
        "Implemented schema constraints, foreign-key cascades, indexing strategies, and full SQL CRUD operations for all entities.",
        "Built dynamic UI components enabling users to view, add, and manage data linked to the relational model.",
      ],
    },
    {
      title: "Atomic Chess Game",
      description: [
        "Developed a playable Atomic Chess implementation with custom movement logic and explosion-based capture mechanics.",
        "Implemented board-state management, legal move validation, and win-condition detection while maintaining performance.",
        "Provided an interactive interface (CLI or GUI) to play full matches and test variant rules.",
      ],
    },
  ],
  skills: {
    tools: "Splunk, Linux, SQL, MongoDB, MariaDB, CLI, Django, Power BI, MATLAB, Autopsy, FTK Imager",
    languages: "C++, C, Python, JavaScript, MASM, HTML, CSS, React, Node.js",
    other: "Git, debugging tools, system administration fundamentals",
  },
  certifications: [
    { name: "Splunk Certified Core User" },
    { name: "Splunk Certified Power User" },
    { name: "Splunk Certified Admin" },
    { name: "Splunk Certified Instructor" },
  ],
  awards: [
    { name: "8× Dean's List" },
    { name: "Finley Academic Excellence Scholarship" },
    { name: "Top 500 National Cyber League Player (2025)" },
  ],
  affiliations: [
    { name: "Oregon State University Security Club" },
    { name: "Oregon State University Hackathon Club" },
    { name: "Oregon State University Cyber Defense Club" },
  ],
  languages: [
    { name: "Dutch", proficiency: "Native" },
    { name: "English", proficiency: "Native" },
    { name: "German", proficiency: "Beginner" },
    { name: "Spanish", proficiency: "Beginner" },
  ],
  travel: {
    description: "Traveled to 16 countries across 3 continents.",
    details:
      "Lived in the Netherlands for 5 years; spent 3 months in Belgium; 2 weeks in Japan; 1 week in South Korea; 2 weeks in Italy.",
  },
  activities: [
    { name: "Oregon Cyber Resilience Summit 2024, Eugene, OR" },
    { name: "BSides Portland Security Conference 2025" },
    {
      name: "National Cyber League (NCL) 2025 — 94th percentile (Individual), 95th percentile (Team)",
    },
  ],
  hobbies: "Cooking; Backpacking/Hiking/Mountaineering; Guitar; Sewing; Travel; Jazz enthusiast",
};

