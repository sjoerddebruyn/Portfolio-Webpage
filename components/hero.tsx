import { ArrowRight, ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";

interface Hero1Props {
  badge?: string;
  heading: string;
  description: string;
  buttons?: {
    primary?: {
      text: string;
      url: string;
    };
    secondary?: {
      text: string;
      url: string;
    };
  };
  image: {
    src: string;
    alt: string;
  };
}

const Hero1 = ({
  heading = "Blocks Built With Shadcn & Tailwind",
  description = "Finely crafted components built with React, Tailwind and Shadcn UI. Developers can copy and paste these blocks directly into their project.",
  buttons = {
    primary: {
      text: "Discover all components",
      url: "https://www.shadcnblocks.com",
    },
    secondary: {
      text: "View on GitHub",
      url: "https://www.shadcnblocks.com",
    },
  },
  image = {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
    alt: "Hero section demo image showing interface components",
  },
}: Hero1Props) => {
  return (
    <section className="relative py-24 flex items-center justify-center overflow-hidden">
      {/* Unified background gradient that flows into next section */}
      <div 
        className="absolute inset-0 -z-10"
        style={{
          background: 'linear-gradient(to bottom, rgba(242, 227, 213, 0.25), rgba(242, 227, 213, 0.15), rgba(60, 166, 166, 0.08), rgba(2, 103, 115, 0.05))'
        }}
      />
      
      {/* Decorative colored shapes */}
      <div 
        className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl -z-10"
        style={{ backgroundColor: 'rgba(60, 166, 166, 0.15)' }}
      />
      <div 
        className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl -z-10"
        style={{ backgroundColor: 'rgba(2, 103, 115, 0.12)' }}
      />
      
      <div className="w-full max-w-7xl px-4 relative z-10">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="flex flex-col items-center text-center">
            {/* Accent line */}
            <div 
              className="w-20 h-1 mb-6 rounded-full"
              style={{
                background: 'linear-gradient(to right, #3CA6A6, #026773, #024959)'
              }}
            />
            
            <h1 className="my-6 text-pretty text-4xl font-bold lg:text-6xl text-teal-darkest">
              {heading}
            </h1>
            <p className="text-muted-foreground mb-8 max-w-xl lg:text-xl">
              {description}
            </p>
            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-center">
              {buttons.primary && (
                <Button 
                  asChild 
                  className="w-full sm:w-auto bg-teal-medium hover:bg-teal-dark text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <a href={buttons.primary.url}>{buttons.primary.text}</a>
                </Button>
              )}
              {buttons.secondary && (
                <Button 
                  asChild 
                  variant="outline" 
                  className="w-full sm:w-auto border-teal-medium text-teal-dark hover:bg-teal-light/10 hover:border-teal-dark transition-all duration-300"
                >
                  <a href={buttons.secondary.url}>
                    {buttons.secondary.text}
                    <ArrowRight className="size-4" />
                  </a>
                </Button>
              )}
            </div>
          </div>
          <div className="relative">
            {/* Colored border accent */}
            <div 
              className="absolute -inset-2 rounded-lg opacity-20 blur-sm"
              style={{
                background: 'linear-gradient(to bottom right, #3CA6A6, #026773, #024959)'
              }}
            />
            <img
              src={image.src}
              alt={image.alt}
              className="relative max-h-96 w-full rounded-lg object-cover mx-auto shadow-2xl"
              style={{
                border: '2px solid rgba(60, 166, 166, 0.3)'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero1 };
