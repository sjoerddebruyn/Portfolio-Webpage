import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { aboutData } from "@/data/about";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Introduction */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-6 text-teal-darkest">About Me</h1>
          <div className="space-y-4 text-muted-foreground">
            {aboutData.introduction.map((paragraph, index) => (
              <p key={index} className="text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-6">
          {aboutData.sections.map((section) => (
            <Card key={section.id} className="mb-6">
              <CardHeader>
                <h2 className="text-2xl font-semibold">{section.title}</h2>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {section.content.length > 0 ? (
                    section.content.map((paragraph, index) => (
                      <p
                        key={index}
                        className="text-muted-foreground leading-relaxed"
                      >
                        {paragraph}
                      </p>
                    ))
                  ) : (
                    <p className="text-muted-foreground italic">
                      Content coming soon...
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Conclusion */}
        <Card className="mt-6">
          <CardContent className="pt-6">
            <p className="text-muted-foreground text-lg italic text-center">
              {aboutData.conclusion}
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
