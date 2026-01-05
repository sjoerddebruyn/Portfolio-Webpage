import { notFound } from "next/navigation";
import { format } from "date-fns";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/projects";

export default async function ProjectPage({ params }: { params: { id: string } }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) return notFound();

  const { title, author, image, published, summary, tags, details } = project;

  return (
    <section className="py-20 flex justify-center">
      <div className="w-full max-w-3xl px-4">
        {/* Top post summary */}
        <div className="flex flex-col items-center gap-4 text-center">
          <h1 className="max-w-2xl text-pretty text-4xl font-semibold md:text-5xl mb-2 text-teal-darkest">
            {title}
          </h1>
          <h3 className="text-muted-foreground max-w-2xl text-lg md:text-xl mb-2">
            {summary}
          </h3>
          <div className="flex items-center gap-3 text-sm md:text-base mb-2">
            <Avatar className="h-8 w-8 border">
              <AvatarImage src="" />
              <AvatarFallback>{author.charAt(0)}</AvatarFallback>
            </Avatar>
            <span>
              <span className="font-semibold">{author}</span>
              <span className="ml-1">on {format(new Date(published), "MMMM d, yyyy")}</span>
            </span>
          </div>
          
          {/* Tags */}
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2 justify-center mb-4">
              {tags.map((tag, index) => (
                <Badge key={index} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          )}

          <img
            src={image}
            alt={title}
            className="mb-6 mt-3 aspect-video w-full max-w-2xl rounded-lg border object-cover"
          />
        </div>

        {/* Project Details */}
        {details && (
          <div className="prose dark:prose-invert mx-auto max-w-2xl">
            {details.note && (
              <p className="text-sm text-muted-foreground italic mb-4 text-center">
                {details.note}
              </p>
            )}

            <h2 className="text-3xl font-extrabold mb-4 text-teal-dark">Project Details</h2>
            
            <div className="space-y-4">
              {details.description.map((paragraph, index) => (
                <p key={index} className="text-muted-foreground leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {details.technologies && details.technologies.length > 0 && (
              <div className="mt-8">
                <h3 className="text-2xl font-semibold mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {details.technologies.map((tech, index) => (
                    <Badge key={index} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Fallback if no details */}
        {!details && (
          <div className="prose dark:prose-invert mx-auto max-w-2xl">
            <p className="text-muted-foreground text-center">
              More details about this project coming soon...
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}
