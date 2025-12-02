import { Hero1 } from "@/components/hero";
import { Gallery6 } from "@/components/gallery";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <>
      {/* ============================================ */}
      {/* MAIN SECTION - Hero + Featured Projects */}
      {/* ============================================ */}
      <main>
        <Hero1
          heading="Hi, I'm Sjoerd De Bruyn"
          description="I design and build modern web experiences with Next.js, TypeScript, and Tailwind CSS."
          buttons={{
            primary: { text: "View my projects", url: "/projects" },
            secondary: { text: "Contact me", url: "/contact" },
          }}
          image={{
            src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
            alt: "Preview of Sjoerd's portfolio projects",
          }}
        />

        <Gallery6
          heading="Featured Projects"
          demoUrl="/projects"
          items={projects
            .filter((project) => project.featured)
            .map((project) => ({
              id: project.id,
              title: project.title,
              summary: project.summary,
              url: `/projects/${project.id}`,
              image: project.image,
            }))}
        />
      </main>
    </>
  );
}
