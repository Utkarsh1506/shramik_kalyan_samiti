import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Team | Jharkhand Shramik Kalyan Samiti",
  description: "Meet the leadership team driving mining sector transformation and community welfare."
};

const team = [
  {
    name: "Neelima Tripathi",
    role: "President",
    expertise: "15+ years in mining compliance, environmental policy, and NGO leadership.",
    image: "/Neelima Tripathi - President.png"
  },
  {
    name: "Upendra Nath Pathak",
    role: "Trustee",
    expertise: "Mining sector expert with deep government and industry relationships.",
    image: "/Upendra Nath Pathak - Trustee.png"
  },
  {
    name: "Nooresa Khatoon",
    role: "Trustee",
    expertise: "Community development specialist and women's welfare advocate.",
    image: "/Nooresa Khaatoon - Trustee.png"
  },
  {
    name: "Md Ali Ansari",
    role: "Vice President",
    expertise: "10+ years in occupational health, health program design, and field operations.",
    image: "/Md Ali Ansari - Trustee.png"
  },
  {
    name: "Lalbabu Yadav",
    role: "Trustee",
    expertise: "Environmental scientist and conservation program manager.",
    image: "/Lalbabu Yadav - Trustee.png"
  },
  {
    name: "Sajjad Ansari",
    role: "Trustee",
    expertise: "Technology and digital transformation in social sector.",
    image: "/Sajjad Ansari - Vice President.png"
  },
  {
    name: "Mtiaz Khan",
    role: "Secretary cum Treasurer",
    expertise: "Financial management, compliance, and administrative oversight.",
    image: "/Mtiaz Ali - Secretary Cum. Treasurer.png"
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
              <Card key={idx} hover className="overflow-hidden">
                <div className="relative w-full h-64 bg-gradient-to-br from-moss to-amber">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <CardHeader>
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
