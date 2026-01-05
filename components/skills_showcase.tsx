import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { resume } from "@/data/resume";

export function SkillsShowcase() {
  const tools = resume.skills.tools.split(", ");
  const languages = resume.skills.languages.split(", ");

  return (
    <section className="relative py-16 flex justify-center overflow-hidden">
      {/* Simple subtle background */}
      <div 
        className="absolute inset-0 -z-10"
        style={{
          background: 'rgba(242, 227, 213, 0.05)'
        }}
      />
      
      <div className="w-full max-w-6xl px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold md:text-4xl lg:text-5xl mb-4 text-teal-darkest">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building secure and scalable solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Programming Languages */}
          <Card className="border-teal-light/30 hover:border-teal-medium/50 transition-all duration-300 bg-cream/20">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4 text-teal-dark">Programming Languages & Frameworks</h3>
              <div className="flex flex-wrap gap-2">
                {languages.map((lang, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary"
                    className="bg-teal-light/20 text-teal-darkest hover:bg-teal-light/30 border-teal-light/40 transition-all duration-300 hover:scale-110 cursor-pointer"
                  >
                    {lang.trim()}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Tools & Platforms */}
          <Card className="border-teal-light/30 hover:border-teal-medium/50 transition-all duration-300 bg-cream/20">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4 text-teal-dark">Tools & Platforms</h3>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary"
                    className="bg-teal-light/20 text-teal-darkest hover:bg-teal-light/30 border-teal-light/40 transition-all duration-300 hover:scale-110 cursor-pointer"
                  >
                    {tool.trim()}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

