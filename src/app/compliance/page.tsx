import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Compliance & Governance | Jharkhand Shramik Kalyan Samiti",
  description: "NGO registration, certifications, and compliance information."
};

export default function Compliance() {
  return (
    <>
      <Section className="bg-hero-gradient text-white pt-32 pb-20">
        <Container>
          <h1 className="text-4xl font-bold mb-4">Compliance & Governance</h1>
          <p className="text-sand/90">NGO registrations, certifications, and regulatory disclosures</p>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container className="max-w-3xl">
          <h2 className="text-2xl font-bold text-ink mt-8 mb-6">Official Registrations</h2>
          
          <div className="space-y-6 mb-12">
            <div className="border-l-4 border-moss pl-6">
              <p className="text-sm text-slate uppercase font-bold mb-1">NGO Registration</p>
              <p className="text-lg font-bold text-ink">[NGO Registration Number]</p>
              <p className="text-slate text-sm">Registered under Societies Registration Act, 1860</p>
            </div>

            <div className="border-l-4 border-moss pl-6">
              <p className="text-sm text-slate uppercase font-bold mb-1">UDYAM/MSME Registration</p>
              <p className="text-lg font-bold text-ink">[UDYAM ID]</p>
              <p className="text-slate text-sm">Ministry of Micro, Small & Medium Enterprises</p>
            </div>

            <div className="border-l-4 border-moss pl-6">
              <p className="text-sm text-slate uppercase font-bold mb-1">PAN (Permanent Account Number)</p>
              <p className="text-lg font-bold text-ink">[PAN NUMBER]</p>
              <p className="text-slate text-sm">Indian Income Tax Department</p>
            </div>

            <div className="border-l-4 border-moss pl-6">
              <p className="text-sm text-slate uppercase font-bold mb-1">Section 80G Recognition</p>
              <p className="text-lg font-bold text-ink">[80G Certificate Number]</p>
              <p className="text-slate text-sm">Tax-exempt donation certificate under Income Tax Act</p>
            </div>

            <div className="border-l-4 border-moss pl-6">
              <p className="text-sm text-slate uppercase font-bold mb-1">Section 12A Recognition</p>
              <p className="text-lg font-bold text-ink">[12A Certificate Number]</p>
              <p className="text-slate text-sm">Tax-exempt status certificate</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-ink mt-12 mb-6">CSR & Compliance Status</h2>
          
          <div className="space-y-4 mb-12">
            <div className="flex justify-between items-start py-3 border-b border-stone/20">
              <span className="font-semibold text-ink">CSR 1 Registration Status</span>
              <span className="text-moss font-bold">Active</span>
            </div>
            <div className="flex justify-between items-start py-3 border-b border-stone/20">
              <span className="font-semibold text-ink">DARPAN Registration</span>
              <span className="text-moss font-bold">Registered</span>
            </div>
            <div className="flex justify-between items-start py-3 border-b border-stone/20">
              <span className="font-semibold text-ink">MoU with Government</span>
              <span className="text-moss font-bold">In Place</span>
            </div>
            <div className="flex justify-between items-start py-3 border-b border-stone/20">
              <span className="font-semibold text-ink">Annual Audit</span>
              <span className="text-moss font-bold">Conducted</span>
            </div>
            <div className="flex justify-between items-start py-3">
              <span className="font-semibold text-ink">Last Compliance Verification</span>
              <span className="text-moss font-bold">December 2024</span>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-ink mt-12 mb-6">Governance & Board</h2>
          
          <div className="space-y-4 mb-12">
            <p className="text-slate leading-relaxed">
              Jharkhand Shramik Kalyan Samiti is governed by a Board of Trustees comprising experienced individuals from diverse backgrounds including mining compliance, environmental science, occupational health, and community development.
            </p>
            <p className="text-slate leading-relaxed">
              Our governance structure ensures:
            </p>
            <ul className="list-disc list-inside text-slate space-y-2">
              <li>Transparent decision-making and resource allocation</li>
              <li>Regular audits and financial reviews</li>
              <li>Accountability to donors, beneficiaries, and regulatory bodies</li>
              <li>Ethical conduct and conflict of interest management</li>
              <li>Annual reporting and impact documentation</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-ink mt-12 mb-6">Financial Transparency</h2>
          
          <p className="text-slate mb-6 leading-relaxed">
            Jharkhand Shramik Kalyan Samiti is committed to financial transparency. Annual audited financial statements, donation disclosures, and major donor information are available upon request and published in accordance with regulatory requirements.
          </p>

          <div className="bg-sky/30 rounded-lg p-6 border border-moss/20">
            <p className="text-sm text-slate mb-4">
              For access to financial documents, compliance certificates, or audit reports, please contact:
            </p>
            <p className="font-semibold text-ink">
              brajendrabhaskaran1@gmail.com
              <br />
              +91 6206490476
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
