import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team | Jharkhand Shramik Kalyan Samiti",
  description: "Meet the leadership team driving mining sector transformation and community welfare."
};

const team = [
  {
    name: "Neelima Tripathi",
    role: "President",
    expertise: "15+ years in mining compliance, environmental policy, and NGO leadership."
  },
  {
    name: "Upendra Nath Pathak",
    role: "Trustee",
    expertise: "Mining sector expert with deep government and industry relationships."
  },
  {
    name: "Nooresa Khatoon",
    role: "Trustee",
    expertise: "Community development specialist and women's welfare advocate."
  },
  {
    name: "Md Ali Ansari",
    role: "Vice President",
    expertise: "10+ years in occupational health, health program design, and field operations."
  },
  {
    name: "Lalbabu Yadav",
    role: "Trustee",
    expertise: "Environmental scientist and conservation program manager."
  },
  {
    name: "Sajjad Ansari",
    role: "Trustee",
    expertise: "Technology and digital transformation in social sector."
  },
  {
    name: "Mtiaz Khan",
    role: "Secretary cum Treasurer",
    expertise: "Financial management, compliance, and administrative oversight."
  }
];

export default function Team() {
  return (
    <>
      {/* Hero */}
      <Section className="bg-hero-gradient text-white pt-32 pb-20">
        <Container>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Team</h1>
          <p className="text-lg text-sand/90 max-w-2xl">
            Experienced leaders and subject matter experts committed to transforming mining practices and improving community welfare.
          </p>
        </Container>
      </Section>

      {/* Team Grid */}
      <Section className="bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, idx) => (
              <Card key={idx} hover>
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-moss to-amber rounded-lg flex items-center justify-center text-white font-bold text-xl mb-4">
                    {member.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <h3 className="text-lg font-bold text-ink">{member.name}</h3>
                  <p className="text-sm text-moss font-semibold">{member.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-slate text-sm leading-relaxed">{member.expertise}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Advisory Note */}
          <div className="mt-16 bg-sky/30 rounded-2xl p-8 border border-moss/20">
            <h2 className="text-2xl font-bold text-ink mb-4">Global Advisory Network</h2>
            <p className="text-slate mb-4">
              Jharkhand Shramik Kalyan Samiti is supported by an international advisory network including mining engineers, occupational health specialists, environmental scientists, and compliance experts from leading organizations and universities.
            </p>
            <p className="text-slate">
              Our advisors guide program design, technology implementation, and best practice integration to ensure global standards are met while respecting local contexts.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
