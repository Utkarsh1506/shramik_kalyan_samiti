import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use | Jharkhand Shramik Kalyan Samiti",
  description: "Terms of use and conditions for Jharkhand Shramik Kalyan Samiti website."
};

export default function Terms() {
  return (
    <>
      <Section className="bg-hero-gradient text-white pt-32 pb-20">
        <Container>
          <h1 className="text-4xl font-bold mb-4">Terms of Use</h1>
          <p className="text-sand/90">Last updated: December 2024</p>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container className="max-w-3xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-ink mt-8 mb-4">1. Agreement to Terms</h2>
            <p className="text-slate mb-6">
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>

            <h2 className="text-2xl font-bold text-ink mt-8 mb-4">2. Use License</h2>
            <p className="text-slate mb-4">
              Permission is granted to temporarily download one copy of the materials (information or software) on JSKS Trust's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc list-inside text-slate space-y-2 mb-6">
              <li>Modifying or copying the materials</li>
              <li>Using the materials for any commercial purpose or for any public display</li>
              <li>Attempting to decompile or reverse engineer any software contained on the website</li>
              <li>Removing any copyright or other proprietary notations from the materials</li>
              <li>Transferring the materials to another person or "mirroring" the materials on any other server</li>
            </ul>

            <h2 className="text-2xl font-bold text-ink mt-8 mb-4">3. Disclaimer</h2>
            <p className="text-slate mb-6">
              The materials on JSKS Trust's website are provided "as is". JSKS Trust makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>

            <h2 className="text-2xl font-bold text-ink mt-8 mb-4">4. Limitations</h2>
            <p className="text-slate mb-6">
              In no event shall JSKS Trust or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on JSKS Trust's website.
            </p>

            <h2 className="text-2xl font-bold text-ink mt-8 mb-4">5. Governing Law</h2>
            <p className="text-slate mb-6">
              These terms and conditions are governed by and construed in accordance with the laws of India, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>

            <h2 className="text-2xl font-bold text-ink mt-8 mb-4">6. Contact</h2>
            <p className="text-slate">
              If you have any questions about these Terms, please contact us at brajendrabhaskaran1@gmail.com
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
