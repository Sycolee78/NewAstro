// src/data/certifications.ts
// Single source of truth for certifications.
// Certificate PDFs live in /public/certifications and are served from the site root.

export interface Certification {
  title: string;
  issuer: string;
  /** Human-readable issue date as printed on the certificate. */
  issued: string;
  /** Optional expiry / "valid until" date. */
  validUntil?: string;
  /** Credential / certificate identifier printed on the certificate. */
  credentialId?: string;
  /** Path to the certificate PDF (served from /public). */
  file: string;
  /** "certification" (exam credential) or "training" (course completion). Defaults to certification. */
  kind?: "certification" | "training";
  /** Training duration, e.g. "32 hours". */
  hours?: string;
}

export const certifications: Certification[] = [
  {
    title: "Oracle Cloud Infrastructure Certified Architect Associate",
    issuer: "Oracle",
    issued: "July 26, 2026",
    validUntil: "July 26, 2028",
    credentialId: "323126759OCI26CAA",
    file: "/certifications/oci-architect-associate.pdf",
  },
  {
    title:
      "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    issuer: "Oracle",
    issued: "October 18, 2025",
    validUntil: "October 18, 2027",
    credentialId: "323126759OCI25AICFA",
    file: "/certifications/oci-ai-foundations-associate.pdf",
  },
  {
    title: "Oracle Cloud Infrastructure Certified Foundations Associate",
    issuer: "Oracle",
    issued: "July 26, 2026",
    validUntil: "July 26, 2028",
    credentialId: "323126759OCI26FNDCFA",
    file: "/certifications/oci-foundations-associate.pdf",
  },
  {
    title: "CCNA: Enterprise Networking, Security, and Automation (ENSA)",
    issuer: "Cisco",
    issued: "June 21, 2024",
    file: "/certifications/ccna-ensa.pdf",
  },
  {
    title: "ICH Good Clinical Practice E6(R3)",
    issuer: "Global Health Training Centre",
    issued: "August 17, 2025",
    credentialId: "eadc3ccf-1e82-4f55-b61e-9261980d8547",
    file: "/certifications/ich-good-clinical-practice.pdf",
  },
  {
    kind: "training",
    title:
      "Oracle Cloud Infrastructure Developer Professional (2026): Hands-on Workshop",
    issuer: "Oracle University",
    issued: "August 28, 2026",
    hours: "32 hours",
    credentialId: "Event ID 276933",
    file: "/certifications/oci-developer-professional-workshop.pdf",
  },
  {
    kind: "training",
    title:
      "Oracle Cloud Infrastructure DevOps Professional (Ed 4, Live Virtual Class)",
    issuer: "Oracle University",
    issued: "September 21, 2026",
    hours: "40 hours",
    credentialId: "Event ID 276934",
    file: "/certifications/oci-devops-professional-lvc.pdf",
  },
];
