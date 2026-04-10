import myselfTextUrl from "../assets/About/Myself.txt";
import skillsTextUrl from "../assets/About/SKILLS.txt";

import profileImage from "../assets/PROFILE PHOTO/profile.png";
import resumePdf from "../assets/Resume/ANTONY GODWIN S.pdf";

import clariduxInfoUrl from "../assets/PROJECTS/CLARIDUX/info.txt";
import clariduxImage1 from "../assets/PROJECTS/CLARIDUX/Screenshot 2026-04-07 215233.png";
import clariduxImage2 from "../assets/PROJECTS/CLARIDUX/Screenshot 2026-04-07 215317.png";
import clariduxImage3 from "../assets/PROJECTS/CLARIDUX/Screenshot 2026-04-07 215457.png";

import trafficInfoUrl from "../assets/PROJECTS/TRAFFIC VIOLATION DETECTION SYSTEM/INFO.txt";
import farmingInfoUrl from "../assets/PROJECTS/AI-Powered Personal Farming Assistant (SIH 2025)/INFO.txt";
import internshipEngineInfoUrl from "../assets/PROJECTS/AI-Based Internship Recommendation Engine (SIH 2025)/INFO.txt";
import waterCanInfoUrl from "../assets/PROJECTS/SMART WATER CAN SYSTEM/INFO.txt";

import zohoInfoUrl from "../assets/INTERN/ZOHO/INFO.txt";
import zohoOfferPdf from "../assets/INTERN/ZOHO/Antony Godwin.pdf";
import zohoImage from "../assets/INTERN/ZOHO/WhatsApp Image 2025-08-19 at 19.59.56_04f75ada.jpg";

import amizhthInfoUrl from "../assets/INTERN/AMIZHTH TECHNO SOLUTIONS/INFO.txt";
import techpuramInfoUrl from "../assets/INTERN/TECHPURAM/INFO.txt";
import techpuramOfferPdf from "../assets/INTERN/TECHPURAM/ANTONYGODWINS_offer_letter_techpuram.pdf";

import techeliteInfoUrl from "../assets/HACKATHONS/TECHELITE'26/INFO.txt";
import techeliteImage1 from "../assets/HACKATHONS/TECHELITE'26/WhatsApp Image 2026-04-09 at 21.48.37.jpeg";
import techeliteImage2 from "../assets/HACKATHONS/TECHELITE'26/ANTONY GODWIN  S (BHARATHI COLLEGE HACKATHON FIRST PRIZE).jpg.jpeg";

import zyronInfoUrl from "../assets/HACKATHONS/ZYRON'26/INFO.txt";
import zyronImage1 from "../assets/HACKATHONS/ZYRON'26/WhatsApp Image 2026-04-09 at 21.20.26.jpeg";
import zyronImage2 from "../assets/HACKATHONS/ZYRON'26/WhatsApp Image 2026-04-09 at 21.23.47.jpeg";

import auraInfoUrl from "../assets/HACKATHONS/AURA'26/INFO.txt";
import auraImage from "../assets/HACKATHONS/AURA'26/BIT 3RD PRIZE.jpg";

import awsInfoUrl from "../assets/CERTIFICATES/AWS CERTIFICATE/INFO.txt";
import awsPdf from "../assets/CERTIFICATES/AWS CERTIFICATE/AWS Certified Cloud Practitioner certificate.pdf";
import datascienceInfoUrl from "../assets/CERTIFICATES/DATASCIENCE/INFO.txt";
import dataSciencePdf from "../assets/CERTIFICATES/DATASCIENCE/DATASCIENCE CERTIFICATE.pdf";

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

export const projectSources = [
  {
    slug: "claridux",
    textUrl: clariduxInfoUrl,
    images: [clariduxImage1, clariduxImage2, clariduxImage3],
    featured: true,
    github: "https://github.com/Antony-Godwin24/Claridux/",
    live: "https://claridux.vercel.app/",
  },
  {
    slug: "traffic-violation-detection",
    textUrl: trafficInfoUrl,
    images: [],
    github: "https://github.com/Antony-Godwin24/TrafficViolationSystem",
    live: "",
  },
  {
    slug: "personal-farming-assistant",
    textUrl: farmingInfoUrl,
    images: [],
    github: "https://github.com/Antony-Godwin24/Al-Powered-Personal-Farming-Assistant-for-Kerala-Farmers",
    live: "",
  },
  {
    slug: "internship-recommendation-engine",
    textUrl: internshipEngineInfoUrl,
    images: [],
    github: "https://github.com/Antony-Godwin24/Al-Based-Internship-Recommendation-Engine-for-PM-Internship-Scheme",
    live: "",
  },
  {
    slug: "smart-water-can",
    textUrl: waterCanInfoUrl,
    images: [],
    github: "",
    live: "",
  },
];

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

export const hackathonSources = [
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
  {
    slug: "aura-26",
    textUrl: auraInfoUrl,
    media: [{ type: "image", url: auraImage }],
    fallback: {
      event: "AURA'24",
      level: "Technical Hackathon",
      date: "2024",
      achievement: "Third Prize",
      summary: "Secured third prize for the Smart QR Water Can Monitoring System and presented the public-health impact model.",
      project: "Smart QR Water Can Monitoring System",
    },
  },
];

export const certificateSources = [
  {
    slug: "aws-cloud-practitioner",
    textUrl: awsInfoUrl,
    media: [{ type: "pdf", url: awsPdf, label: "View Certificate" }],
  },
  {
    slug: "data-science-for-beginners",
    textUrl: datascienceInfoUrl,
    media: [{ type: "pdf", url: dataSciencePdf, label: "View Certificate" }],
  },
];
