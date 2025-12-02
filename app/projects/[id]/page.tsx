import { notFound } from "next/navigation";
import { Blogpost1 } from "@/components/project_post";
import { projects } from "@/data/projects";

function mapProjectToPost(project: (typeof projects)[number]) {
  return {
    title: project.title,
    authorName: project.author,
    image: project.image,
    pubDate: new Date(project.published),
    description: project.summary,
    authorImage: "", // set if you add author images
  };
}

export default async function ProjectPage({ params }: { params: { id: string } }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) return notFound();

  return <Blogpost1 post={mapProjectToPost(project)} />;
}

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}
