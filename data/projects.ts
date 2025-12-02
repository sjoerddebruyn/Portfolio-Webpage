export type Project = {
  id: string;
  title: string;
  summary: string;
  label: string;
  author: string;
  published: string;
  url: string;
  image: string;
  featured?: boolean;
  card?: string;
};

export const projects: Project[] = [
  {
    id: "project-portfolio",
    title: "Personal Portfolio Website",
    summary:
      "A responsive portfolio built with Next.js, TypeScript, and Tailwind CSS to showcase my work and experience.",
    label: "Featured",
    author: "Sjoerd De Bruyn",
    published: "2025",
    url: "#",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
    featured: true,
    card: "",
  },
  {
    id: "project-dashboard",
    title: "Analytics Dashboard",
    summary:
      "Interactive dashboard with charts and filters for visualizing key metrics in real time.",
    label: "Web App",
    author: "Sjoerd De Bruyn",
    published: "2025",
    url: "#",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
    featured: true,
    card: "",
  },
  {
    id: "project-ecommerce",
    title: "E-commerce Storefront",
    summary:
      "Modern storefront UI focused on performance, accessibility, and great shopping experience.",
    label: "E-commerce",
    author: "Sjoerd De Bruyn",
    published: "2025",
    url: "#",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
    featured: true,
    card: "",
  },
  {
    id: "project-internal-tools",
    title: "Internal Tools Suite",
    summary:
      "Custom internal tools that streamline workflows and automate repetitive tasks.",
    label: "Internal Tools",
    author: "Sjoerd De Bruyn",
    published: "2025",
    url: "#",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
    featured: false,
    card: "",
  },
];


