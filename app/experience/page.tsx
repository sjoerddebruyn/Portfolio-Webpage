import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { resume } from "@/data/resume";

export default function ExperiencePage() {
  const formatDateRange = (start: string, end: string) => {
    if (!end) return start;
    return `${start} – ${end}`;
  };

  return (
    <main className="min-h-screen bg-background py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2 text-teal-darkest">Sjoerd De Bruyn</h1>
          <div className="text-muted-foreground space-y-1">
            <p>
              {resume.contact.phone} | {resume.contact.email} | {resume.contact.linkedin}
            </p>
            <p>{resume.contact.address}</p>
          </div>
        </div>

        {/* Summary */}
        <Card id="summary" className="mb-6 scroll-mt-20">
          <CardHeader>
            <h2 className="text-2xl font-semibold">Summary</h2>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">{resume.summary}</p>
          </CardContent>
        </Card>

        {/* Education */}
        <Card id="education" className="mb-6 scroll-mt-20">
          <CardHeader>
            <h2 className="text-2xl font-semibold">Education</h2>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {resume.education.map((edu, index) => (
                <div key={index}>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold text-lg">{edu.institution}</h3>
                      <p className="text-muted-foreground">{edu.location}</p>
                    </div>
                    <span className="text-muted-foreground">{edu.graduationDate}</span>
                  </div>
                  <p className="text-muted-foreground">
                    {edu.degree}
                    {edu.gpa && `; GPA: ${edu.gpa}`}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Experience */}
        <Card id="experience" className="mb-6 scroll-mt-20">
          <CardHeader>
            <h2 className="text-2xl font-semibold">Experience</h2>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {resume.experience.map((exp, index) => (
                <div key={index}>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold text-lg">{exp.title}</h3>
                      <p className="text-muted-foreground">{exp.company}</p>
                      <p className="text-sm text-muted-foreground">{exp.location}</p>
                    </div>
                    <span className="text-muted-foreground whitespace-nowrap ml-4">
                      {formatDateRange(exp.startDate, exp.endDate)}
                    </span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground mt-2">
                    {exp.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex}>{resp}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Projects */}
        <Card id="projects" className="mb-6 scroll-mt-20">
          <CardHeader>
            <h2 className="text-2xl font-semibold">Projects</h2>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {resume.projects.map((project, index) => (
                <div key={index}>
                  <h3 className="font-semibold text-lg mb-2">
                    {project.title}
                    {project.note && (
                      <span className="text-sm font-normal text-muted-foreground">
                        {" "}
                        ({project.note})
                      </span>
                    )}
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    {project.description.map((desc, descIndex) => (
                      <li key={descIndex}>{desc}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Skills */}
        <Card id="skills" className="mb-6 scroll-mt-20">
          <CardHeader>
            <h2 className="text-2xl font-semibold">Skills</h2>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Technical Tools & Platforms:</h3>
                <p className="text-muted-foreground">{resume.skills.tools}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Programming Languages & Frameworks:</h3>
                <p className="text-muted-foreground">{resume.skills.languages}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Other:</h3>
                <p className="text-muted-foreground">{resume.skills.other}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Professional Training */}
        <Card id="certifications" className="mb-6 scroll-mt-20">
          <CardHeader>
            <h2 className="text-2xl font-semibold">Professional Training</h2>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-muted-foreground">
              {resume.certifications.map((cert, index) => (
                <p key={index}>{cert.name}</p>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Awards & Honors */}
        <Card id="awards" className="mb-6 scroll-mt-20">
          <CardHeader>
            <h2 className="text-2xl font-semibold">Awards & Honors</h2>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              {resume.awards.map((award, index) => (
                <li key={index}>{award.name}</li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Professional Affiliations */}
        <Card id="affiliations" className="mb-6 scroll-mt-20">
          <CardHeader>
            <h2 className="text-2xl font-semibold">Professional Affiliations</h2>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              {resume.affiliations.map((affiliation, index) => (
                <li key={index}>{affiliation.name}</li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Languages & Travel */}
        <Card id="languages-travel" className="mb-6 scroll-mt-20">
          <CardHeader>
            <h2 className="text-2xl font-semibold">Languages & Travel</h2>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Languages:</h3>
                <p className="text-muted-foreground">
                  {resume.languages
                    .map((lang) => `${lang.name} — ${lang.proficiency}`)
                    .join("; ")}
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Travel:</h3>
                <p className="text-muted-foreground">{resume.travel.description}</p>
                <p className="text-muted-foreground">{resume.travel.details}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Activities */}
        <Card id="activities" className="mb-6 scroll-mt-20">
          <CardHeader>
            <h2 className="text-2xl font-semibold">Activities</h2>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              {resume.activities.map((activity, index) => (
                <li key={index}>{activity.name}</li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Additional Avocations / Hobbies */}
        <Card id="hobbies" className="mb-6 scroll-mt-20">
          <CardHeader>
            <h2 className="text-2xl font-semibold">Additional Avocations / Hobbies</h2>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{resume.hobbies}</p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
