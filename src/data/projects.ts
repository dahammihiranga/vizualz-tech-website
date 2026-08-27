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
];