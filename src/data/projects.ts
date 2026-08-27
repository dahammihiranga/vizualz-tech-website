export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  description: string;
  image: string;
  url?: string;
  tags: string[];

  client?: string;
  services?: string[];
  challenge?: string;
  solution?: string;
  features?: string[];
  gallery?: string[];
};

export const projects: Project[] = [
  {
    slug: "chathu-wedding-planners-website",
    title: "Chathu Wedding Planners",
    category: "Website Design & Development",
    year: "2026",

    description:
      "A modern wedding planning website designed to showcase services, build trust and turn visitors into enquiries through a premium digital experience.",

    image: "/projects/chathu-wedding-planners.PNG",

    url: "https://chathuweddingplanners.com/",

    tags: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Responsive Design",
      "UI / UX",
      "Vercel",
    ],

    client: "Chathu Wedding Planners",

    services: [
      "Website Design",
      "Frontend Development",
      "Responsive Development",
      "UI / UX",
      "Deployment",
    ],

    challenge:
      "The goal was to create a premium digital presence for a wedding planning business while clearly presenting services, building trust with couples and making it easy for potential clients to get in touch.",

    solution:
      "We created a modern, responsive website with a strong visual identity, clear service presentation, smooth interactions and a mobile-first experience. The design focuses on elegance while keeping enquiries and business information easy to access.",

    features: [
      "Responsive multi-device experience",
      "Wedding service presentation",
      "Modern landing page design",
      "Portfolio and visual storytelling",
      "Contact and appointment flow",
      "Performance-focused Next.js build",
      "Vercel deployment",
    ],

    gallery: [
      "/projects/chathu-wedding-site/home.PNG",
      "/projects/chathu-wedding-site/services.PNG",
      "/projects/chathu-wedding-site/mobile.png",
    ],
  },

  {
  slug: "chathu-wedding-planners-admin-panel",

  title: "Chathu Wedding Planners Admin Panel",

  category: "Custom Web Application",

  year: "2026",

  description:
    "A custom internal management platform built for Chathu Wedding Planners to organize wedding inquiries, client information, booking statuses, payments and planning data from one centralized dashboard.",

  image: "/projects/dashboard.png",

  tags: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "FastAPI",
    "Turso",
    "Responsive Design",
    "Vercel",
  ],

  client: "Chathu Wedding Planners",

  services: [
    "Web Application Development",
    "Admin Dashboard Design",
    "Frontend Development",
    "Backend Development",
    "Database Integration",
    "Deployment",
  ],

  challenge:
    "Managing wedding inquiries, booking information, client details, payment information and wedding schedules manually can quickly become difficult as the number of clients grows. The goal was to create a centralized internal system that makes it easier to manage the full enquiry and planning workflow.",

  solution:
    "We designed and developed a custom admin web application that brings wedding inquiries, client information, booking statuses, pricing details and scheduling tools into one responsive dashboard. The system was built around the actual workflow of Chathu Wedding Planners, making day-to-day administration faster and easier to manage.",

  features: [
    "Centralized wedding inquiry management",
    "Active, completed and deleted inquiry workflows",
    "Client and wedding information management",
    "Booking status tracking",
    "Package price and discount management",
    "Advance payment tracking",
    "Search and advanced filtering",
    "Wedding calendar and event overview",
    "Responsive desktop and mobile interface",
    "Custom backend API and database integration",
  ],

  gallery: [
    "/projects/chathu-wedding-admin-panel/login-page.PNG",
    "/projects/chathu-wedding-admin-panel/dashboard.png",
    "/projects/chathu-wedding-admin-panel/new-inquiry.PNG",
    "/projects/chathu-wedding-admin-panel/customers.png",
    "/projects/chathu-wedding-admin-panel/vendors.png",
    "/projects/chathu-wedding-admin-panel/vendor-commission.png",
    "/projects/chathu-wedding-admin-panel/payments.png",
    "/projects/chathu-wedding-admin-panel/calendar.png",
    "/projects/chathu-wedding-admin-panel/mobile-1.jpeg",
    "/projects/chathu-wedding-admin-panel/mobile-2.jpeg",
  ],
},
];