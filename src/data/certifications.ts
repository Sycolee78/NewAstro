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
    title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
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
];
