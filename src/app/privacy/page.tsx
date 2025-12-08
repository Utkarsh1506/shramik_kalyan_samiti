import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Jharkhand Shramik Kalyan Samiti",
  description: "Privacy policy and data protection practices."
};

export default function Privacy() {
  return (
    <>
      <Section className="bg-hero-gradient text-white pt-32 pb-20">
        <Container>
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-sand/90">Last updated: December 2024</p>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container className="max-w-3xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-ink mt-8 mb-4">1. Introduction</h2>
            <p className="text-slate mb-6">
              Jharkhand Shramik Kalyan Samiti ("we", "us", "the organization") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information.
            </p>

            <h2 className="text-2xl font-bold text-ink mt-8 mb-4">2. Information We Collect</h2>
            <p className="text-slate mb-4">
              We may collect information about you in a variety of ways. The information we may collect on our site includes:
            </p>
            <ul className="list-disc list-inside text-slate space-y-2 mb-6">
              <li>Personal identification information (name, email, phone)</li>
              <li>Organizational information</li>
              <li>Voluntary messages and inquiries</li>
              <li>Technical data (IP address, browser type, usage patterns)</li>
            </ul>

            <h2 className="text-2xl font-bold text-ink mt-8 mb-4">3. Use of Your Information</h2>
            <p className="text-slate mb-4">
              Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
            </p>
            <ul className="list-disc list-inside text-slate space-y-2 mb-6">
              <li>Respond to your inquiries and communications</li>
              <li>Process partnership and donation requests</li>
              <li>Generate analytics to improve our website</li>
              <li>Conduct marketing and promotional activities (with your consent)</li>
            </ul>

            <h2 className="text-2xl font-bold text-ink mt-8 mb-4">4. Data Security</h2>
            <p className="text-slate mb-6">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h2 className="text-2xl font-bold text-ink mt-8 mb-4">5. Contact Us</h2>
            <p className="text-slate">
              If you have questions about this Privacy Policy, please contact us at:
              <br />
              Email: brajendrabhaskaran1@gmail.com
              <br />
              Phone: +91 6206490476
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
