export type Service = {
  number: string;
  title: string;
  shortTitle: string;
  description: string;
  tags: string[];
};

export const services: Service[] = [
  {
    number: "01",
    title: "Web Development",
    shortTitle: "WEB",
    description:
      "Modern, responsive and high-performance websites designed to make your business stand out and turn visitors into customers.",
    tags: ["Next.js", "React", "Responsive", "SEO"],
  },
  {
    number: "02",
    title: "Web Applications",
    shortTitle: "APPS",
    description:
      "Powerful web applications built around real business requirements, combining intuitive interfaces with scalable technology.",
    tags: ["SaaS", "Dashboards", "APIs", "Full Stack"],
  },
  {
    number: "03",
    title: "Custom Software",
    shortTitle: "CODE",
    description:
      "Purpose-built software solutions that simplify workflows, solve business problems and support long-term growth.",
    tags: ["Automation", "Systems", "APIs", "Scalable"],
  },
  {
    number: "04",
    title: "E-Commerce",
    shortTitle: "SHOP",
    description:
      "Fast, secure and conversion-focused online stores designed to create seamless shopping experiences across every device.",
    tags: ["Storefronts", "Payments", "Checkout", "Commerce"],
  },
  {
    number: "05",
    title: "UI / UX Design",
    shortTitle: "DESIGN",
    description:
      "Clean, modern interfaces shaped around real users, strong visual identity and effortless digital experiences.",
    tags: ["UI Design", "UX", "Prototyping", "Design Systems"],
  },
  {
    number: "06",
    title: "Digital Solutions",
    shortTitle: "DIGITAL",
    description:
      "Smart digital solutions that connect technology, design and strategy to help businesses operate and grow more effectively.",
    tags: ["Strategy", "Integration", "Consulting", "Technology"],
  },
];