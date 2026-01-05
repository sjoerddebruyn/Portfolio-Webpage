import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

interface Stat {
  label: string;
  value: string;
  description?: string;
  url: string;
}

const stats: Stat[] = [
  {
    label: "Projects",
    value: "11+",
    description: "Completed projects",
    url: "/projects"
  },
  {
    label: "Certifications",
    value: "4",
    description: "Splunk certifications",
    url: "/experience#certifications"
  },
  {
    label: "NCL Ranking",
    value: "Top 500",
    description: "National Cyber League 2025",
    url: "/experience#awards"
  },
];

export function StatsSection() {
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
            By The Numbers
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A snapshot of my achievements and experience
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <Link key={index} href={stat.url} className="group">
              <Card 
                className="relative border-teal-light/30 hover:border-teal-medium transition-all duration-300 bg-cream/10 text-center cursor-pointer h-full shadow-lg hover:shadow-2xl hover:shadow-teal-light/20 overflow-hidden hover:scale-105"
              >
                {/* Colored gradient overlay on hover - same as featured projects */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                  style={{
                    background: 'linear-gradient(135deg, rgba(60, 166, 166, 0.15), rgba(2, 103, 115, 0.1))'
                  }}
                />
                {/* Top overlay gradient - same as featured projects */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none"
                  style={{
                    background: 'linear-gradient(to top, rgba(1, 46, 64, 0.3), transparent)'
                  }}
                />
                <CardContent className="pt-6 relative z-0">
                  <div className="text-4xl font-bold text-teal-medium mb-2 group-hover:text-teal-dark transition-colors duration-300 relative z-20">
                    {stat.value}
                  </div>
                  <div className="text-lg font-semibold text-teal-darkest mb-1 group-hover:text-teal-medium transition-colors duration-300 relative z-20">
                    {stat.label}
                  </div>
                  {stat.description && (
                    <div className="text-sm text-muted-foreground relative z-20">
                      {stat.description}
                    </div>
                  )}
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

