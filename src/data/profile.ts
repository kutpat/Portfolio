export const profile = {
  name: "Taylan Kutbay",
  title: "B.Sc. Computer Science @ RWTH Aachen University",
  location: "Cologne, Germany",
  email: "taylan.kutbay@rwth-aachen.de",
  headline: "B.Sc. Computer Science Student @ RWTH Aachen",
  summary:
    "Computer Science student with hands-on experience in time series ML pipelines, Discord-based operational systems, and embedded C. Interested in robust ML for time-dependent data and AI security.",
  links: {
  github: "https://github.com/kutpat",
  linkedin: "",
},
};

export const education = [
  {
    school: "RWTH Aachen University",
    degree: "B.Sc. Computer Science",
    meta: "Expected graduation: 2026",
    bullets: [
      "Relevant coursework: Machine Learning, Process Intelligence, IT Security, Software Engineering, Mathematical Logic",
    ],
  },
  {
    school: "German University of Technology (GUtech), Oman",
    degree: "Study Abroad Semester",
    meta: "Focus: Artificial Intelligence and Cybersecurity",
    bullets: ["Selected coursework: Advanced Machine Learning, Multi-Agent Systems, Ethical Hacking"],
  },
];

export const skills: Record<string, string[]> = {
  Programming: ["Python (advanced)", "Java", "C", "C++"],
  "Machine Learning": [
    "Supervised learning",
    "Time series analysis",
    "Feature engineering",
    "Model evaluation",
    "Multi-horizon classification",
  ],
  "Data Engineering": ["Time series processing", "Labeling pipelines", "Data quality validation"],
  "Distributed Systems": ["Basic networking", "Client–server models", "Communication protocols"],
  "Tools & Frameworks": ["PyTorch", "NumPy", "Pandas", "Git", "Linux", "Jupyter Notebook"],
  Databases: ["SQL", "NoSQL"],
  "Process Mining": ["Event log generation", "Celonis integration"],
};

export const projects = [
  {
    name: "Temporal Fusion Transformer for Financial Time Series Prediction",
    period: "2025",
    oneLiner: "Multi-horizon classification of market regimes with an end-to-end time series pipeline.",
    bullets: [
      "Designed end-to-end ML pipeline for time series modeling",
      "Engineered temporal + technical features; walk-forward validation",
      "Implemented TFT-based modeling and evaluation",
    ],
    tech: ["Python", "PyTorch", "Time Series", "Feature Engineering"],
    links: { repo: "https://github.com/kutpat/TFT_Crypto_Trading_Model", demo: "" },
  },
  {
    name: "Axion Discord Bot (Community Management & Operations)",
    period: "2021–present",
    oneLiner: "Scalable operations tooling for a crypto trading community.",
    bullets: [
      "Implemented subscription + payment handling",
      "Built moderation workflows (ticket system) and analyst tracking",
      "Modular architecture with Discord APIs and NoSQL backend",
    ],
    tech: ["Python", "Discord API", "NoSQL", "Modular Architecture"],
    links: { repo: "", demo: "" },
  },
  {
    name: "Event Logging & Process Mining Pipeline for Discord Operations",
    period: "2025",
    oneLiner: "Event tracking and structured logs exported to Celonis for process mining (~90k users).",
    bullets: [
      "Tracked fine-grained events: subscriptions, ticket lifecycles, moderation, analyst activity",
      "Designed event-based schemas and export pipeline",
      "Enabled end-to-end visibility via process mining",
    ],
    tech: ["Python", "NoSQL", "Event Schemas", "Celonis"],
    links: { repo: "", demo: "" },
  },
  {
    name: "Bio-inspired SNN for Bird vs. Drone Classification",
    period: "2025",
    oneLiner: "Energy-efficient event-based classification using SNN + Ant Colony Optimization.",
    bullets: [
      "Combined Spiking Neural Networks with Ant Colony Optimization for feature selection",
      "Applied bio-inspired optimization + neuromorphic learning principles",
    ],
    tech: ["SNN", "Optimization", "ML"],
    links: { repo: "https://github.com/kutpat/Bird_vs_Drone_AML_Project", demo: "" },
  },
{
  name: "SabrBot — Bybit Trading Framework",
  period: "2024-present",
  oneLiner: "Event-driven Python framework using Bybit WebSockets for real-time market + account data.",
  bullets: [
    "Maintains live internal state (orders, positions, balances) from private and public WebSocket streams",
    "Triggers commands on defined events (fills, position updates, market conditions) with reliable routing",
    "Pluggable strategy interface: drop-in strategies without changing core infrastructure",
  ],
  tech: ["Python", "Bybit API", "WebSockets", "asyncio", "Event-driven Systems"],
  links: { repo: "", demo: "" }, // falls Repo privat: leer lassen
},
  {
    name: "Signal Classificator (Discord-based Trading Signal Extraction)",
    period: "2025",
    oneLiner: "Extracted structured trading signals from unstructured analyst messages.",
    bullets: [
      "Parsed free-text to detect symbols, direction, entries, targets, updates",
      "Used OpenAI API + rule-based NLP + structured schemas",
    ],
    tech: ["Python", "NLP", "OpenAI API", "Schemas"],
    links: { repo: "", demo: "" },
  },
  {
    name: "Multi-Agent Sokoban Simulation",
    period: "2025",
    oneLiner: "Cooperative multi-agent problem-solving in a constrained environment.",
    bullets: [
      "Designed autonomous agents with distributed decision-making",
      "Implemented coordination and goal-driven behavior",
    ],
    tech: ["Multi-Agent Systems", "Coordination"],
    links: { repo: "https://github.com/kutpat/sokoban-dmas-project", demo: "" },
  },
{
  name: "BLL — Digital Helpers for Classroom Management",
  period: "2022–2023",
  oneLiner: "Desktop tooling for teachers: classroom management workflows with a seat-plan generator and GUI.",
  bullets: [
    "Built a desktop application to support teachers with structured classroom workflows",
    "Implemented a seat-plan generator based on student preferences and constraints",
    "Added GUI/CLI workflows and data import for class setup",
  ],
  tech: ["Python", "Tkinter", "Desktop App", "Optimization", "Data Import"],
  links: { repo: "https://github.com/kutpat/BLL", demo: "" },
},

];

export const experience = [
  {
    role: "Systems Programming Internship — Embedded Operating System in C",
    org: "RWTH Aachen University",
    bullets: [
      "Built a minimal embedded OS running on an ATmega microcontroller",
      "Implemented low-level I/O, direct register access, interrupts, timers, cooperative scheduler",
      "Worked close to hardware under real-time constraints",
    ],
    tech: ["C", "Embedded", "Microcontroller", "Low-level I/O"],
  },
  {
    role: "AI Text Adventure — Multi-Agent System Internship",
    org: "RWTH Aachen University",
    bullets: [
      "Built an interactive AI-driven text adventure with coordinated agent behavior",
      "Designed multiple communicating agents with distinct roles",
      "Implemented prompt orchestration and communication patterns",
    ],
    tech: ["Python", "Multi-Agent", "OpenAI API"],
  },
];

export const interests = [
  "Time series analysis and forecasting",
  "Data-driven systems and data engineering",
  "Robust ML for time-dependent data",
  "Security and robustness of AI systems",
  "Distributed and multi-agent systems",
];
