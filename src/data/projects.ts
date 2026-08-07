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
    slug: "architect",
    title: "Architect",
    status: "In Progress",
    description:
      "Terrain-aware generative design engine for houses — a plot and a client brief go in; a sited, planned, structurally screened, serviced, code-checked and costed proposal comes out.",
    tags: [
      "Python",
      "Django",
      "React Native",
      "PostgreSQL",
      "Generative Design",
      "IFC/BIM",
    ],
    featured: true,
    problem:
      "Most of what makes a house buildable is decided before anyone draws it, and those decisions are coupled: where the building sits sets the earthworks, which set the floor level, which decides whether it can drain by gravity, while the plan decides where columns can land and therefore the spans. A designer resolves these in sequence over weeks and discovers the contradictions late.",
    approach:
      "A deterministic engineering core with AI only at the edges. A six-stage pipeline (site, layout, structure, services, codes, quantities) resolves the coupled decisions in seconds and reports the contradictions immediately, always returning a proposal — viable or not — with every blocker attached. Floor plans are searched as slicing trees that tile the footprint by construction; building codes and cost rates live in reviewable data packs rather than in the engine; and IFC 4 is the canonical deliverable, with disclaimers embedded inside the model. The engine is a library wrapped by a Django/DRF service on PostgreSQL, with React web and React Native (Expo) clients sharing an OpenAPI-generated type contract.",
    highlights: [
      "Six-stage pipeline whose joins report which upstream assumption to revisit — e.g. drainage failing is reported as the millimetres the platform must rise.",
      "Pareto trade-off search over briefs returns the frontier of options, not a single weighted answer.",
      "Building codes and cost rates modelled as reviewable, dated data packs, making the system multi-market.",
      "IFC 4.3 export with disclaimers carried inside the model as property sets.",
      "Full stack: engine library, Django/DRF service with Celery/Redis, React web app, and React Native mobile client on one API.",
    ],
    role: "Designed and built the engine, service, and both clients.",
    note: "Scheme-stage screening only — nothing it produces is for construction, and every engineering output carries an explicit disclaimer. Source is currently private.",
  },
  {
    slug: "koste",
    title: "Koste",
    status: "Completed",
    description:
      "Smart bill-splitting mobile app for the Mauritian dining market — scan a receipt, split by item at the table, and settle up through local payment rails. Fully coded and tested, now seeking investment to launch.",
    tags: ["React Native", "Expo", "TypeScript", "Supabase", "PostgreSQL", "Mobile App"],
    featured: true,
    problem:
      "Splitting a restaurant bill fairly is tedious: working out who had what, handling shared items, adding VAT and service charge, and then settling up across different payment methods.",
    approach:
      "A cross-platform mobile app (React Native + Expo, TypeScript) backed by Supabase — PostgreSQL with row-level security, auth, storage, and edge functions. Diners scan a receipt with on-device OCR (Google ML Kit, bilingual EN/FR), start a session others join by QR code with real-time sync, and assign items — including shared items by fraction. The split engine distributes Mauritius VAT (15%) and service charge proportionally to each person's subtotal, and payments settle through local rails.",
    highlights: [
      "On-device receipt OCR with a bilingual EN/FR parser (Google ML Kit) — no data leaves the phone.",
      "QR-code dining sessions with real-time sync across all participants (Supabase Realtime).",
      "Split engine distributes 15% VAT and service charge proportionally, with shared-item fractions.",
      "Local payments via MCB PaySmart / MIPS, POP bank-to-bank, Apple Pay, and Google Pay.",
      "Offline Bluetooth session sharing that auto-syncs to the backend when connectivity returns.",
      "Built for Mauritius compliance — DPA 2017, PCI DSS (SAQ A), and Bank of Mauritius payment rules.",
    ],
    role: "Worked on the mobile app and Supabase backend.",
    note: "Investment pitch: Koste is fully coded and tested, purpose-built for the Mauritian market (MUR currency, +230 phone auth, local payment rails, EN/FR receipts). The concept is now seeking investment and launch partners — reach out via the contact section to discuss.",
  },
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
