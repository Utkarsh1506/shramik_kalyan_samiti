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
    category: "NGO Certifications & Registration",
    items: [
      { title: "NITI AAYOG Certificate", year: "2025", type: "PDF", size: "1.2 MB", file: "NITI AAYOG CERTIFICATE_JHARKHAND SHRAMIK KALYAN SAMITY TRUST.pdf" },
      { title: "E-ANUDAN Certificate", year: "2025", type: "PDF", size: "1.1 MB", file: "E-ANUDAN CERTIFICATE_JHARKHAND SHRAMIK KALYAN SAMITY TRUST.pdf" },
      { title: "Trust Deed", year: "2024", type: "PDF", size: "2.3 MB", file: "Trust Deed.pdf" },
      { title: "Udyam Adhaar Registration", year: "2024", type: "PDF", size: "0.9 MB", file: "Udyam Adhaar.pdf" }
    ]
  },
  {
    category: "Financial & Tax Documents",
    items: [
      { title: "Income Tax Return (ITR)", year: "2024", type: "PDF", size: "1.8 MB", file: "ITR .pdf" },
      { title: "Computation of Total Income", year: "2024", type: "PDF", size: "1.5 MB", file: "Computation Of Total Income.pdf" },
      { title: "CSR Approval Letter - Form CSR1", year: "2024", type: "PDF", size: "1.2 MB", file: "Approval Letter for form CSR1.PDF" },
      { title: "10AC Form (Section 10AC)", year: "2024", type: "PDF", size: "0.8 MB", file: "10AC.pdf" }
    ]
  },
  {
    category: "Annual Reports",
    items: [
      { title: "Annual Report 2023-24", year: "2024", type: "PDF", size: "2.4 MB", file: undefined },
      { title: "Annual Report 2022-23", year: "2023", type: "PDF", size: "2.1 MB", file: undefined },
      { title: "Annual Report 2021-22", year: "2022", type: "PDF", size: "1.9 MB", file: undefined }
    ]
  },
  {
    category: "Impact Reports",
    items: [
      { title: "Health Program Impact 2024", year: "2024", type: "PDF", size: "1.8 MB", file: undefined },
      { title: "Environmental Restoration 2024", year: "2024", type: "PDF", size: "1.5 MB", file: undefined },
      { title: "Community Rehabilitation Study 2023", year: "2023", type: "PDF", size: "2.2 MB", file: undefined }
    ]
  },
  {
    category: "Policy Briefs",
    items: [
      { title: "Illegal Mining in Jharkhand: Challenges & Solutions", year: "2024", type: "PDF", size: "1.2 MB", file: undefined },
      { title: "Occupational Health in Mining: Framework for Action", year: "2023", type: "PDF", size: "1.4 MB", file: undefined },
      { title: "Environmental Restoration Best Practices", year: "2023", type: "PDF", size: "1.1 MB", file: undefined }
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
                        {item.file ? (
                          <a href={`/${item.file}`} download className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-moss to-amber text-white font-semibold rounded-lg hover:from-amber hover:to-moss transition-all shadow-md">
                            <Download className="w-4 h-4" />
                            Download
                          </a>
                        ) : (
                          <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-moss to-amber text-white font-semibold rounded-lg hover:from-amber hover:to-moss transition-all shadow-md">
                            <Download className="w-4 h-4" />
                            Coming Soon
                          </button>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Information Note */}
          <div className="mt-16 bg-gradient-to-br from-sky/40 via-sky/20 to-white rounded-2xl p-8 border border-moss/20">
            <h2 className="text-2xl font-bold text-ink mb-6">NGO Compliance & Registration Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-slate">
              <div className="bg-white/70 rounded-xl p-6 border border-moss/10">
                <p className="font-bold text-ink mb-4">Official Registrations:</p>
                <ul className="space-y-2 text-sm">
                  <li><span className="font-semibold text-ink">NGO DARPAN ID:</span> JH/2025/0615181</li>
                  <li><span className="font-semibold text-ink">PAN:</span> AAFTJ0785J</li>
                  <li><span className="font-semibold text-ink">UDYAM Registration:</span> Active</li>
                  <li><span className="font-semibold text-ink">NITI AAYOG Registered:</span> Yes</li>
                </ul>
              </div>
              <div className="bg-white/70 rounded-xl p-6 border border-moss/10">
                <p className="font-bold text-ink mb-4">Certifications & Status:</p>
                <ul className="space-y-2 text-sm">
                  <li><span className="font-semibold text-ink">E-ANUDAN:</span> Certified</li>
                  <li><span className="font-semibold text-ink">CSR Eligible:</span> Form CSR-1 Approved</li>
                  <li><span className="font-semibold text-ink">Tax Status:</span> ITR Filed</li>
                  <li><span className="font-semibold text-ink">Last Updated:</span> December 2024</li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
