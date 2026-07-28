// src/data/projects.ts
// Single source of truth for portfolio projects.
// Consumed by the homepage (featured subset), the /projects index, and the
// per-project case-study pages at /projects/[slug].

export interface Project {
  /** URL slug for the project's detail page (/projects/<slug>). */
  slug: string;
  title: string;
  status: "In Progress" | "Completed" | "Archived";
  /** One-line summary used on cards. */
  description: string;
  githubUrl?: string;
  liveUrl?: string;
  tags?: string[];
  /** Surface this project in the homepage "Featured work" grid. */
  featured?: boolean;

  // --- Case-study fields (optional; rendered on the detail page when present) ---
  /** The problem the project set out to solve. */
  problem?: string;
  /** The approach taken and how it works. */
  approach?: string;
  /** Concrete, defensible highlights (no invented metrics). */
  highlights?: string[];
  /** My role / responsibility on the project. */
  role?: string;
  /** Any honest caveat, e.g. proprietary source. */
  note?: string;
}

export const projects: Project[] = [
  {
    slug: "agrimesh-autonomous",
    title: "AgriMesh Autonomous",
    status: "In Progress",
    description:
      "Agent-driven Farm OS for Zimbabwe that designs and simulates smart agricultural layouts from geospatial land selection.",
    githubUrl: "https://github.com/Sycolee78/agrimesh-autonomous",
    tags: ["Python", "AI/ML", "Simulation", "Agriculture", "FastAPI"],
    featured: true,
    problem:
      "Farms in Zimbabwe are often planned with limited data, which makes it hard to decide what to grow, where to place livestock, and how to use land profitably.",
    approach:
      "An autonomous farm-intelligence system that takes a geospatial land selection and designs and simulates a smart farm layout. It combines AI planning, environmental modeling, and agent-based positioning to optimize crop selection, livestock placement, and overall farm profitability, exposed through a FastAPI service.",
    highlights: [
      "Geospatial land selection drives automatic layout generation.",
      "Agent-based positioning for crops and livestock.",
      "Environmental modeling feeds the planning decisions.",
      "FastAPI service wrapping the planning and simulation engine.",
    ],
    role: "Designing and building the planning and simulation engine.",
  },
  {
    slug: "online-classroom-platform",
    title: "Online Classroom Platform",
    status: "Completed",
    description:
      "Secure internal learning platform built at Accenture — live sessions, resource sharing, and progress tracking.",
    tags: ["Spring Boot", "Java", "React", "MongoDB", "REST API"],
    featured: true,
    problem:
      "Accenture needed a secure internal learning platform where staff could run live sessions, share resources, and track progress.",
    approach:
      "A full-stack platform with Spring Boot and Node.js services on the backend, MongoDB for data, and a React frontend tied together with REST APIs — built to enterprise performance, code-review, and system-design standards.",
    highlights: [
      "Built full-stack features across backend and frontend.",
      "Developed and deployed secure internal learning-platform modules.",
      "Improved reliability, usability, and deployment workflows.",
    ],
    role: "Software Engineer (part-time project).",
    note: "Internal enterprise project — the source code is proprietary to Accenture and is not public.",
  },
  {
    slug: "tank-failure-pressure-prediction",
    title: "Tank Failure Pressure Prediction",
    status: "Completed",
    description:
      "Machine learning model that predicts the target failure pressure (bar) of a tank from engineering and process features.",
    githubUrl: "https://github.com/Sycolee78/Tank-Failure-Pressure-Prediction",
    tags: ["Python", "Machine Learning", "Data Science", "Engineering"],
    featured: true,
    problem:
      "Estimating the pressure at which a tank will fail is safety-critical and difficult to derive analytically from raw engineering and process data.",
    approach:
      "A supervised machine-learning pipeline that learns from engineering and process features to predict the target failure pressure (bar), intended to support safety-critical decision-making.",
    highlights: [
      "Feature engineering from structural and process data.",
      "ML models predicting target failure pressure in bar.",
      "Framed for safety-critical engineering use cases.",
    ],
    role: "Built the data pipeline and modeling.",
  },
  {
    slug: "blog-management-system",
    title: "Blog Management System",
    status: "Completed",
    description:
      "Full-stack blog application with a responsive grid UI, thumbnail uploads, categories, and complete CRUD.",
    githubUrl: "https://github.com/Sycolee78/Blog-Management",
    tags: ["Full-Stack", "REST API", "CRUD", "Responsive Design"],
    problem:
      "A content author needs a clean, self-hostable way to manage blog posts — with categories, images, and excerpts — without a heavyweight CMS.",
    approach:
      "A full-stack application built on a RESTful API with a clean architecture and a portfolio-style responsive grid UI. Supports thumbnail uploads, categories, excerpts, and complete CRUD, with validation and loading states throughout.",
    highlights: [
      "Complete CRUD over posts, categories, and media.",
      "RESTful API with a clean, layered architecture.",
      "Responsive grid UI with validation and loading states.",
    ],
    role: "Full-stack developer.",
  },
  {
    slug: "avail-sport",
    title: "Avail Sport Application",
    status: "In Progress",
    description:
      "A FlutterFlow app connecting users with sports, gym, and educational activities in Mauritius.",
    tags: ["FlutterFlow", "Firebase", "Mobile App", "Figma"],
    problem:
      "People in Mauritius lack a single place to discover and book sports, gym, and educational activities.",
    approach:
      "A cross-platform mobile app built in FlutterFlow with a Firebase backend, offering activity discovery, a booking system, and user profiles, designed in Figma.",
    highlights: [
      "Activity discovery and booking flow.",
      "User profiles backed by Firebase.",
      "Designed in Figma and built in FlutterFlow.",
    ],
    role: "Building the app and its Firebase backend.",
  },
];
