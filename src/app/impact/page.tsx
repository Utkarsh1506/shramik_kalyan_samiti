import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { Metadata } from "next";
import { TrendingUp, Layers, MapPin, Trophy } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Impact & Data | Jharkhand Shramik Kalyan Samiti",
  description:
    "Measurable impact metrics, competitive positioning, and market opportunity for mining sector transformation."
};

export default function Impact() {
  return (
    <>
      {/* Hero */}
      <Section className="bg-hero-gradient text-white pt-32 pb-20">
        <Container>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Impact & Data</h1>
          <p className="text-lg text-sand/90 max-w-2xl">
            Measurable outcomes, market leadership, and scalability across India's mining sector.
          </p>
        </Container>
      </Section>

      {/* Key Metrics */}
      <Section className="bg-white">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { value: "2,000+", label: "Workers Reached", context: "directly benefited" },
              { value: "3,000+", label: "Families Supported", context: "rehabilitation programs" },
              { value: "50+", label: "Compliance Audits", context: "conducted annually" },
              { value: "1,200+", label: "Health Screenings", context: "occupational health camps" }
            ].map((metric, idx) => (
              <Card key={idx} hover className="text-center">
                <CardContent className="pt-6">
                  <p className="text-3xl font-bold text-moss mb-2">{metric.value}</p>
                  <p className="font-semibold text-ink mb-1">{metric.label}</p>
                  <p className="text-xs text-slate">{metric.context}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Competitive Positioning */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-ink mb-8 text-center">
              Where Jharkhand Shramik Kalyan Samiti Stands Apart
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm md:text-base">
                <thead>
                  <tr className="border-b-2 border-moss/30">
                    <th className="text-left py-3 px-4 font-bold text-ink">Feature</th>
                    <th className="text-center py-3 px-4 font-bold text-moss">Shramik Kalyan Samiti</th>
                    <th className="text-center py-3 px-4 font-bold text-slate">Sankhla</th>
                    <th className="text-center py-3 px-4 font-bold text-slate">Shiva Analytics</th>
                    <th className="text-center py-3 px-4 font-bold text-slate">Vedanta</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: "Regulatory Compliance", jsks: "✓✓✓", others: ["✓✓", "✓", "✓✓"] },
                    { feature: "Illegal Mining Curbing", jsks: "✓✓✓", others: ["✓", "✓✓", "✓"] },
                    { feature: "Worker Health & Safety", jsks: "✓✓✓", others: ["✓", "✓✓", "✓✓"] },
                    { feature: "Community Rehabilitation", jsks: "✓✓✓", others: ["✓", "✓", "✓✓"] },
                    { feature: "Environmental Restoration", jsks: "✓✓✓", others: ["✓", "✓", "✓✓"] },
                    { feature: "Technology Integration", jsks: "✓✓✓", others: ["✓", "✓✓✓", "✓"] },
                    { feature: "CSR Implementation", jsks: "✓✓✓", others: ["✓", "✓", "✓✓"] }
                  ].map((row, idx) => (
                    <tr
                      key={idx}
                      className={idx % 2 === 0 ? "bg-sky/20" : "bg-white"}
                    >
                      <td className="py-3 px-4 font-semibold text-ink">{row.feature}</td>
                      <td className="py-3 px-4 text-center bg-moss/10 font-bold text-moss">
                        {row.jsks}
                      </td>
                      <td className="py-3 px-4 text-center text-slate">{row.others[0]}</td>
                      <td className="py-3 px-4 text-center text-slate">{row.others[1]}</td>
                      <td className="py-3 px-4 text-center text-slate">{row.others[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Market Opportunity */}
          <div className="bg-gradient-to-br from-ink to-midnight text-white rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Market Opportunity</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <p className="text-amber text-sm font-bold uppercase mb-2">TAM</p>
                <p className="text-4xl font-bold text-sand mb-3">₹75,358 Cr</p>
                <p className="text-sm text-sand/70">
                  Total welfare, compliance & health market in Jharkhand mining
                </p>
              </div>
              <div>
                <p className="text-amber text-sm font-bold uppercase mb-2">SAM</p>
                <p className="text-4xl font-bold text-sand mb-3">₹19,300 Cr</p>
                <p className="text-sm text-sand/70">
                  Active mines & communities served (~20K workers, ~15K families)
                </p>
              </div>
              <div>
                <p className="text-amber text-sm font-bold uppercase mb-2">SOM</p>
                <p className="text-4xl font-bold text-sand mb-3">₹380 Cr</p>
                <p className="text-sm text-sand/70">
                  Achievable in 3 years (~2K workers, 3K+ families annually)
                </p>
              </div>
            </div>
            <p className="text-sand/70 text-sm border-t border-white/10 pt-6">
              Based on realistic market penetration and conservative growth assumptions. Scalable to other mining regions and high-risk industries.
            </p>
          </div>
        </Container>
      </Section>

      {/* Exit Strategy */}
      <Section className="bg-white">
        <Container>
          <h2 className="text-3xl font-bold text-ink mb-12 text-center">Exit Strategy for Investors</h2>
          <div className="space-y-6">
            {[
              {
                stage: "Most Likely",
                title: "Strategic Partnership / Buyout",
                desc: "Industry leader or larger NGO acquires JSKS for scale. Timeline: 3-5 years. Valuation based on impact metrics and recurring revenue."
              },
              {
                stage: "Moderately Likely",
                title: "Merger or Joint Venture",
                desc: "Merge with complementary organization or form JV with industry partner. Timeline: 3-6 years. Hybrid governance model."
              },
              {
                stage: "Moderately Likely",
                title: "Grant/CSR Program Transition",
                desc: "Transition to sustainable CSR funding from primary partner. Timeline: 4-7 years. Reduced external equity needs."
              },
              {
                stage: "Lower Likelihood",
                title: "Management Buyback",
                desc: "JSKS team buys back investor equity with retained earnings. Timeline: 5-10 years. High sustainability."
              },
              {
                stage: "Lower Likelihood",
                title: "Impact Exit (Wind-Down)",
                desc: "Organization continues independently as mature NGO, or transitions to local ownership. Timeline: 7+ years."
              }
            ].map((option, idx) => (
              <Card key={idx} hover className="border-moss/20">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-bold text-ink flex-grow">{option.title}</h3>
                    <span className="text-xs font-bold text-amber uppercase px-2 py-1 bg-amber/10 rounded">
                      {option.stage}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate">{option.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="bg-ink text-white text-center">
        <Container>
          <h2 className="text-3xl font-bold mb-6">Explore Partnership Opportunities</h2>
          <p className="text-lg text-sand/90 mb-8 max-w-2xl mx-auto">
            Review our detailed impact reports, business model, and investment opportunities.
          </p>
          <Link href="https://wa.me/916206490476" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-white text-ink hover:bg-sand">
              Contact on WhatsApp
            </Button>
          </Link>
        </Container>
      </Section>
    </>
  );
}
