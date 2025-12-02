import { Blog7 } from "@/components/all_projects";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen pt-0 pb-24">
      <Blog7
        tagline="Projects"
        heading="All Projects"
        description="A collection of projects showcasing my work with Next.js, TypeScript, and modern UI design."
        buttonText="Back to homepage"
        buttonUrl="/" 
        posts={projects}
      />
    </main>
  );
}
