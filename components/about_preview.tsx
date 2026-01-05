import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function AboutPreview() {
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
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-semibold md:text-4xl lg:text-5xl mb-6 text-teal-darkest">
              About Me
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              I'm a Computer Science student with hands-on experience in cybersecurity, enterprise technologies, and data analysis. 
              I'm passionate about building secure and scalable systems, and I love diving deep into complex technical challenges.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              When I'm not coding or working on security projects, you'll find me exploring new technologies, 
              contributing to open source, or sharing knowledge with others in the tech community.
            </p>
            <div className="flex gap-4">
              <Button asChild className="bg-teal-medium hover:bg-teal-dark text-white">
                <Link href="/about">
                  Learn More About Me
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-teal-medium text-teal-dark hover:bg-teal-light/10">
                <Link href="/experience">
                  View My Experience
                </Link>
              </Button>
            </div>
          </div>
          
          <Card className="border-teal-light/30 bg-cream/10">
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-teal-dark mb-2">Current Focus</h3>
                  <p className="text-muted-foreground">
                    SOC Analyst at Oregon State University, working on penetration testing, network security, 
                    and threat analysis.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-teal-dark mb-2">Education</h3>
                  <p className="text-muted-foreground">
                    Bachelor of Science in Computer Science at Oregon State University (Expected June 2026)
                  </p>
                  <p className="text-teal-medium font-medium mt-1">GPA: 3.76</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-teal-dark mb-2">Certifications</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-sm bg-teal-light/20 text-teal-darkest px-3 py-1 rounded-full border border-teal-light/40">
                      Splunk Certified Core User
                    </span>
                    <span className="text-sm bg-teal-light/20 text-teal-darkest px-3 py-1 rounded-full border border-teal-light/40">
                      Splunk Certified Power User
                    </span>
                    <span className="text-sm bg-teal-light/20 text-teal-darkest px-3 py-1 rounded-full border border-teal-light/40">
                      Splunk Certified Admin
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

