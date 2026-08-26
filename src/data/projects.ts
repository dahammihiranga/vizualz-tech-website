export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  description: string;
  image: string;
  url?: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    slug: "chathu-wedding-planners",
    title: "Chathu Wedding Planners",
    category: "Website Design & Development",
    year: "2026",
    description:
      "A modern wedding planning website designed to showcase services, build trust and turn visitors into enquiries through a premium digital experience.",
    image: "/projects/chathu-wedding-planners.PNG",
    url: "https://chathuweddingplanners.com/",
    tags: ["Next.js", "Responsive Design", "UI / UX", "Vercel"],
  },
];