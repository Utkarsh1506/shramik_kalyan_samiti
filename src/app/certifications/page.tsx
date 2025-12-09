import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { Metadata } from "next";
import { Download, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Resources & Reports | Jharkhand Shramik Kalyan Samiti",
  description: "Annual reports, impact reports, policy briefs, and compliance documentation."
};

const resources = [
  {
    category: "Annual Reports",
    items: [
      { title: "Annual Report 2023-24", year: "2024", type: "PDF", size: "2.4 MB" },
      { title: "Annual Report 2022-23", year: "2023", type: "PDF", size: "2.1 MB" },
      { title: "Annual Report 2021-22", year: "2022", type: "PDF", size: "1.9 MB" }
    ]
  },
  {
    category: "Impact Reports",
    items: [
      { title: "Health Program Impact 2024", year: "2024", type: "PDF", size: "1.8 MB" },
      { title: "Environmental Restoration 2024", year: "2024", type: "PDF", size: "1.5 MB" },
      { title: "Community Rehabilitation Study 2023", year: "2023", type: "PDF", size: "2.2 MB" }
    ]
  },
  {
    category: "Policy Briefs",
    items: [
      { title: "Illegal Mining in Jharkhand: Challenges & Solutions", year: "2024", type: "PDF", size: "1.2 MB" },
      { title: "Occupational Health in Mining: Framework for Action", year: "2023", type: "PDF", size: "1.4 MB" },
      { title: "Environmental Restoration Best Practices", year: "2023", type: "PDF", size: "1.1 MB" }
    ]
  },
  {
    category: "Compliance Documents",
    items: [
      { title: "Privacy Policy", year: "2024", type: "PDF", size: "0.8 MB" },
      { title: "Financial Transparency Report", year: "2024", type: "PDF", size: "1.3 MB" },
      { title: "Major Donors List (FY 2023-24)", year: "2024", type: "PDF", size: "0.5 MB" }
    ]
  }
];

export default function Resources() {
  return (
    <>
      {/* Hero */}
      <Section className="bg-hero-gradient text-white pt-32 pb-20">
        <Container>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Resources & Reports</h1>
          <p className="text-lg text-sand/90 max-w-2xl">
            Transparent documentation of our impact, financials, and commitment to accountability.
          </p>
        </Container>
      </Section>

      {/* Resources Grid */}
      <Section className="bg-white">
        <Container>
          <div className="space-y-12">
            {resources.map((category, catIdx) => (
              <div key={catIdx}>
                <h2 className="text-2xl font-bold text-ink mb-6">{category.category}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((item, idx) => (
                    <Card key={idx} hover>
                      <CardHeader>
                        <div className="flex gap-3 items-start">
                          <FileText className="w-6 h-6 text-moss flex-shrink-0 mt-1" />
                          <div className="flex-grow">
                            <h3 className="font-bold text-ink text-sm md:text-base">{item.title}</h3>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex justify-between items-center text-xs text-slate mb-4">
                          <span>{item.year}</span>
                          <span className="bg-sky px-2 py-1 rounded text-ink font-semibold">
                            {item.size}
                          </span>
                        </div>
                        <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-moss/10 text-moss font-semibold rounded-lg hover:bg-moss/20 transition-colors">
                          <Download className="w-4 h-4" />
                          Download
                        </button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Information Note */}
          <div className="mt-16 bg-sky/30 rounded-2xl p-8 border border-moss/20">
            <h2 className="text-xl font-bold text-ink mb-4">NGO Compliance & Registration</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-slate">
              <div>
                <p className="font-semibold text-ink mb-2">Official Registrations:</p>
                <ul className="space-y-1 text-sm">
                  <li>NGO Registration: [REG. NO. - Under 12A/80G]</li>
                  <li>UDYAM/MSME: [UDYAM ID]</li>
                  <li>PAN: [PAN NUMBER]</li>
                  <li>80G Recognition: [80G CERT NO.]</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-ink mb-2">Audits & Compliance:</p>
                <ul className="space-y-1 text-sm">
                  <li>Annual Audits: Conducted by [Auditor Name]</li>
                  <li>CSR Certification: [CSR STATUS]</li>
                  <li>Regulatory Status: [STATUS]</li>
                  <li>Last Updated: December 2024</li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
