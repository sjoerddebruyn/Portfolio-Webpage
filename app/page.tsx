import { Hero1 } from "@/components/hero";
import { Gallery6 } from "@/components/gallery";
import { SkillsShowcase } from "@/components/skills_showcase";
import { AboutPreview } from "@/components/about_preview";
import { StatsSection } from "@/components/stats_section";
import { SectionDivider } from "@/components/section_divider";
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
          description="I'm a US based cyber security professional with a passion for building secure and scalable systems."
          buttons={{
            primary: { text: "View my projects", url: "/projects" },
            secondary: { text: "Contact me", url: "/contact" },
          }}
          image={{
            src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
            alt: "Preview of Sjoerd's portfolio projects",
          }}
        />

        <SectionDivider />

        <StatsSection />

        <SectionDivider />

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

        <SectionDivider />

        <SkillsShowcase />

        <SectionDivider />

        <AboutPreview />
      </main>
    </>
  );
}
