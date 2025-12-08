import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { Metadata } from "next";
import { Zap, Users, Database, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Technology & Innovation | JSKS Trust",
  description:
    "Our technology-driven approach: IoT monitoring, digital health records, professional training, and integrated compliance systems."
};

const features = [
  {
    icon: Database,
    title: "Real-Time Monitoring System",
    description:
      "IoT-based surveillance and sensors for illegal mining detection, compliance tracking, and environmental monitoring.",
    details: [
      "Satellite monitoring",
      "Ground sensors",
      "Community vigilance network",
      "Automated alerts"
    ]
  },
  {
    icon: Globe,
    title: "Digital Health Platform",
    description:
      "Integrated health records, occupational disease tracking, and preventive care management for mining workers.",
    details: [
      "Health records",
      "Disease tracking",
      "Preventive care",
      "Telemedicine support"
    ]
  },
  {
    icon: Users,
    title: "Professional Training",
    description:
      "Global best practices in mining safety, compliance, community health, and occupational wellness delivered by international experts.",
    details: [
      "Expert onboarding",
      "Global standards",
      "Certification programs",
      "Knowledge transfer"
    ]
  },
  {
    icon: Zap,
    title: "Compliance Dashboard",
    description:
      "Unified platform for regulatory reporting, audit management, and stakeholder communication.",
    details: [
      "Real-time reporting",
      "Audit tracking",
      "Document management",
      "Stakeholder portal"
    ]
  }
];

export default function Technology() {
  return (
    <>
      {/* Hero */}
      <Section className="bg-hero-gradient text-white pt-32 pb-20">
        <Container>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Technology & Innovation</h1>
          <p className="text-lg text-sand/90 max-w-2xl">
            Advanced systems and global expertise integrated to deliver measurable impact in mining sector compliance and welfare.
          </p>
        </Container>
      </Section>

      {/* Features */}
      <Section className="bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <Card key={idx} hover>
                  <CardHeader>
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-moss/10 rounded-lg mb-4">
                      <Icon className="w-6 h-6 text-moss" />
                    </div>
                    <h3 className="text-xl font-bold text-ink">{feature.title}</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate mb-6">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.details.map((detail, didx) => (
                        <li key={didx} className="flex gap-2 text-sm text-slate">
                          <span className="text-moss font-bold">→</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Why It Works */}
          <div className="bg-sky/30 rounded-2xl p-8 md:p-12 border border-moss/20">
            <h2 className="text-2xl md:text-3xl font-bold text-ink mb-8">Why Our Approach Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-ink mb-3">Integrated Systems</h4>
                <p className="text-slate">
                  All platforms communicate seamlessly—monitoring feeds into compliance, health data informs program design, and real-time alerts trigger rapid response.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-ink mb-3">Global Standards</h4>
                <p className="text-slate">
                  We implement internationally recognized best practices in safety, compliance, and health management adapted for India's mining context.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-ink mb-3">Community-Centered</h4>
                <p className="text-slate">
                  Technology enhances (not replaces) community involvement through mobile alerts, training apps, and feedback mechanisms.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-ink mb-3">Scalability</h4>
                <p className="text-slate">
                  Cloud-based architecture allows rapid deployment across new mining districts without rebuilding infrastructure.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Implementation Timeline */}
      <Section className="bg-white">
        <Container>
          <h2 className="text-3xl font-bold text-ink mb-12 text-center">Implementation Journey</h2>
          <div className="space-y-6">
            {[
              { month: "Month 1-2", title: "Onboarding & Assessment", desc: "Partner engagement, needs analysis, system setup" },
              { month: "Month 3-4", title: "Infrastructure Setup", desc: "Deploy monitoring systems, establish digital platforms" },
              { month: "Month 5-6", title: "Training & Launch", desc: "Professional training, community engagement, go-live" },
              { month: "Month 7+", title: "Scaling & Optimization", desc: "Expand to new areas, refine based on data insights" }
            ].map((phase, idx) => (
              <div key={idx} className="flex gap-6 md:gap-12">
                <div className="flex-shrink-0 w-32">
                  <span className="inline-block px-4 py-2 bg-moss text-white rounded-lg font-bold text-sm">
                    {phase.month}
                  </span>
                </div>
                <div className="flex-grow border-l-2 border-moss/30 pl-6 pb-6">
                  <h3 className="font-bold text-ink text-lg mb-2">{phase.title}</h3>
                  <p className="text-slate">{phase.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="bg-ink text-white text-center">
        <Container>
          <h2 className="text-3xl font-bold mb-6">Ready to Go Digital?</h2>
          <p className="text-lg text-sand/90 mb-8 max-w-2xl mx-auto">
            Let us show you how technology can transform your mining operations and improve worker safety.
          </p>
          <Button size="lg" className="bg-white text-ink hover:bg-sand">
            Schedule a Demo
          </Button>
        </Container>
      </Section>
    </>
  );
}
