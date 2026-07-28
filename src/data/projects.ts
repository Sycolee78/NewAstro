// src/data/projects.ts
// Single source of truth for portfolio projects.
// Consumed by the homepage (featured subset) and the /projects page.

export interface Project {
  title: string;
  status: "In Progress" | "Completed" | "Archived";
  description: string;
  githubUrl?: string;
  liveUrl?: string;
  tags?: string[];
  /** Surface this project in the homepage "Featured work" grid. */
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "AgriMesh Autonomous",
    status: "In Progress",
    description:
      "Agent-driven Farm OS for Zimbabwe. An autonomous farm intelligence system that designs and simulates smart agricultural layouts based on geospatial land selection. Integrates AI planning, environmental modeling, and agent-based positioning to optimize crop selection, livestock placement, and farm profitability.",
    githubUrl: "https://github.com/Sycolee78/agrimesh-autonomous",
    tags: ["Python", "AI/ML", "Simulation", "Agriculture", "FastAPI"],
    featured: true,
  },
  {
    title: "Online Classroom Platform",
    status: "Completed",
    description:
      "Internal learning platform built at Accenture, featuring live sessions, resource sharing, and progress tracking. Designed with enterprise-grade architecture and a maintainable full-stack codebase.",
    tags: ["Spring Boot", "Java", "React.js", "MongoDB", "REST API"],
    featured: true,
  },
  {
    title: "Tank Failure Pressure Prediction",
    status: "Completed",
    description:
      "Machine learning project that predicts target pressure (bar) for tank failure from engineering and process features. Uses ML models to analyze structural data and estimate failure points for safety-critical applications.",
    githubUrl: "https://github.com/Sycolee78/Tank-Failure-Pressure-Prediction",
    tags: ["Python", "Machine Learning", "Data Science", "Engineering"],
    featured: true,
  },
  {
    title: "Blog Management System",
    status: "Completed",
    description:
      "Modern full-stack blog application with a portfolio-style responsive grid UI. Supports thumbnail uploads, categories, excerpts, and complete CRUD operations. Built with a RESTful API, clean architecture, and intuitive UX featuring validation, loading states, and responsive design.",
    githubUrl: "https://github.com/Sycolee78/Blog-Management",
    tags: ["Full-Stack", "REST API", "CRUD", "Responsive Design"],
  },
  {
    title: "Avail Sport Application",
    status: "In Progress",
    description:
      "A FlutterFlow app connecting users with sports, gym, and educational activities in Mauritius. Features activity discovery, a booking system, and user profiles.",
    tags: ["FlutterFlow", "Firebase", "Mobile App", "Figma"],
  },
];
