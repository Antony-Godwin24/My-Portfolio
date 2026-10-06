import myselfTextUrl from "../assets/About/Myself.txt";
import skillsTextUrl from "../assets/About/SKILLS.txt";

// Updated profile photo (new upload)
import profileImage from "../assets/PROFILE PHOTO/ANTONY_GODWIN_S_PHOTO.png";
// Updated resume (new upload)
import resumePdf from "../assets/Resume/ANTONY_GODWIN_S_RESUME.pdf";

import clariduxInfoUrl from "../assets/PROJECTS/CLARIDUX/info.txt";
import clariduxImage1 from "../assets/PROJECTS/CLARIDUX/Screenshot 2026-04-07 215233.png";
import clariduxImage2 from "../assets/PROJECTS/CLARIDUX/Screenshot 2026-04-07 215317.png";
import clariduxImage3 from "../assets/PROJECTS/CLARIDUX/Screenshot 2026-04-07 215457.png";

import internshipEngineInfoUrl from "../assets/PROJECTS/AI-Based Internship Recommendation Engine (SIH 2025)/INFO.txt";
import waterCanInfoUrl from "../assets/PROJECTS/SMART WATER CAN SYSTEM/INFO.txt";

// Internships (listed chronologically: Zoho → Amizhth → Techpuram)
import zohoInfoUrl from "../assets/INTERN/ZOHO/INFO.txt";
import zohoOfferPdf from "../assets/INTERN/ZOHO/Antony Godwin.pdf";
import zohoImage from "../assets/INTERN/ZOHO/WhatsApp Image 2025-08-19 at 19.59.56_04f75ada.jpg";

import amizhthInfoUrl from "../assets/INTERN/AMIZHTH TECHNO SOLUTIONS/INFO.txt";
import techpuramInfoUrl from "../assets/INTERN/TECHPURAM/INFO.txt";
import techpuramOfferPdf from "../assets/INTERN/TECHPURAM/ANTONYGODWINS_offer_letter_techpuram.pdf";

// Hackathons (chronological: AURA'24 → TECHELITE'26 → ZYRON'26)
import auraInfoUrl from "../assets/HACKATHONS/AURA'26/INFO.txt";
import auraImage from "../assets/HACKATHONS/AURA'26/BIT 3RD PRIZE.jpg";

import techeliteInfoUrl from "../assets/HACKATHONS/TECHELITE'26/INFO.txt";
import techeliteImage1 from "../assets/HACKATHONS/TECHELITE'26/WhatsApp Image 2026-04-09 at 21.48.37.jpeg";
import techeliteImage2 from "../assets/HACKATHONS/TECHELITE'26/ANTONY GODWIN  S (BHARATHI COLLEGE HACKATHON FIRST PRIZE).jpg.jpeg";

import zyronInfoUrl from "../assets/HACKATHONS/ZYRON'26/INFO.txt";
import zyronImage1 from "../assets/HACKATHONS/ZYRON'26/WhatsApp Image 2026-04-09 at 21.20.26.jpeg";
import zyronImage2 from "../assets/HACKATHONS/ZYRON'26/WhatsApp Image 2026-04-09 at 21.23.47.jpeg";

// Certificates (chronological: Java Full Stack → AWS)
import awsInfoUrl from "../assets/CERTIFICATES/AWS CERTIFICATE/INFO.txt";
import awsPdf from "../assets/CERTIFICATES/AWS CERTIFICATE/AWS Certified Cloud Practitioner certificate.pdf";
import javaFullStackImage from "../assets/CERTIFICATES/JAVA FULL STACK/JAVA FULL STACK COURSE.jpeg";

export const externalLinks = {
  github: "https://github.com/Antony-Godwin24",
  linkedin: "https://www.linkedin.com/in/antony-godwin-s-7143ab2a4/",
  leetcode: "https://leetcode.com/u/Antony_Godwin/",
  email: "mailto:antonygodwin08@gmail.com",
};

export const profileAssets = {
  profileImage,
  resumePdf,
  aboutTextUrl: myselfTextUrl,
  skillsTextUrl,
};

// Only 3 projects from the updated resume
export const projectSources = [
  {
    slug: "claridux",
    textUrl: clariduxInfoUrl,
    images: [clariduxImage1, clariduxImage2, clariduxImage3],
    featured: true,
    github: "https://github.com/Antony-Godwin24/Claridux/",
    live: "https://claridux.vercel.app/",
    dateRange: "Sep 2025 – Apr 2026",
  },
  {
    slug: "internship-recommendation-engine",
    textUrl: internshipEngineInfoUrl,
    images: [],
    github: "https://github.com/Antony-Godwin24/Al-Based-Internship-Recommendation-Engine-for-PM-Internship-Scheme",
    live: "",
    dateRange: "Sep 2025 – Nov 2025",
  },
  {
    slug: "smart-water-can",
    textUrl: waterCanInfoUrl,
    images: [],
    github: "",
    live: "",
    dateRange: "Jul 2024 – Dec 2024",
    patentApplied: true,
    isConcept: true,
    titleOverride: "Smart QR Water Can Monitoring System (Proposed Concept)",
    summaryOverride: "Proposed a QR-based water-can lifecycle monitoring architecture for tracking usage cycles, refill limits, and quality verification. Formulated into a patent application filed in Nov 2024.",
  },
];

// Internships in chronological order: oldest → most recent
export const internshipSources = [
  {
    slug: "zoho",
    textUrl: zohoInfoUrl,
    images: [zohoImage],
    documents: [{ label: "Completion Certificate", url: zohoOfferPdf }],
  },
  {
    slug: "amizhth-techno-solutions",
    textUrl: amizhthInfoUrl,
    images: [],
    documents: [],
  },
  {
    slug: "techpuram",
    textUrl: techpuramInfoUrl,
    images: [],
    documents: [{ label: "Offer Letter", url: techpuramOfferPdf }],
  },
];

// Hackathons in chronological order: oldest → most recent
export const hackathonSources = [
  {
    slug: "aura-24",
    textUrl: auraInfoUrl,
    media: [{ type: "image", url: auraImage }],
    fallback: {
      event: "AURA'24",
      level: "Technical Hackathon",
      organizedBy: "Bannari Amman Institute of Technology",
      date: "27 Aug 2024",
      achievement: "Third Prize",
      project: "Smart QR Water Can Monitoring System",
      summary:
        "Secured Third Prize for proposing a QR-based water-can lifecycle monitoring system for usage and quality tracking.",
    },
  },
  {
    slug: "techelite-26",
    textUrl: techeliteInfoUrl,
    media: [
      { type: "image", url: techeliteImage1 },
      { type: "image", url: techeliteImage2 },
    ],
  },
  {
    slug: "zyron-26",
    textUrl: zyronInfoUrl,
    media: [
      { type: "image", url: zyronImage1 },
      { type: "image", url: zyronImage2 },
    ],
  },
];

// Certificates in chronological order: Java Full Stack → AWS
export const certificateSources = [
  {
    slug: "java-full-stack",
    media: [{ type: "image", url: javaFullStackImage, label: "View Certificate" }],
    // Hardcoded data — no txt file needed
    hardcoded: {
      title: "Java Full Stack Development",
      issuedBy: "STEPFORCODE",
      date: "Oct 2025 – Nov 2025",
      summary:
        "Completed an intensive Java Full Stack Development program covering core Java, Spring Boot, REST API development, React.js front-end, and MySQL database integration.",
    },
  },
  {
    slug: "aws-cloud-practitioner",
    textUrl: awsInfoUrl,
    media: [{ type: "pdf", url: awsPdf, label: "View Certificate" }],
  },
];
