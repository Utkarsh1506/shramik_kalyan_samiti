"use client";

import Container from "@/components/ui/Container";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";

const footerLinks = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Team", href: "/team" },
    { label: "Impact", href: "/impact" },
    { label: "Careers", href: "/careers" }
  ],
  work: [
    { label: "Programs", href: "/programs" },
    { label: "Gallery", href: "/gallery" },
    { label: "Certifications", href: "/certifications" },
    { label: "Impact", href: "/impact" }
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Use", href: "/terms" },
    { label: "Compliance", href: "/compliance" },
    { label: "Annual Reports", href: "/reports" }
  ]
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ink text-sand border-t border-midnight">
      <Container className="py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="relative w-12 h-12 mb-4 flex-shrink-0">
              <Image
                src="/logo.jpg"
                alt="JSKS Logo"
                fill
                className="object-contain"
                sizes="48px"
              />
            </div>
            <h3 className="font-bold text-lg mb-2">Shramik Kalyan Samiti</h3>
            <p className="text-sand/70 text-sm leading-relaxed">
              Compliance-driven welfare trust improving mining sector practices across India.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sand/70 hover:text-sand text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Work Links */}
          <div>
            <h4 className="font-semibold mb-4">Our Work</h4>
            <ul className="space-y-2">
              {footerLinks.work.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sand/70 hover:text-sand text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold mb-4">Legal & Compliance</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sand/70 hover:text-sand text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Get In Touch</h4>
            <ul className="space-y-3 text-sm text-sand/70">
              <li className="flex gap-2">
                <Phone size={16} className="flex-shrink-0 mt-0.5" />
                <span>+91 6206490476</span>
              </li>
              <li className="flex gap-2">
                <Mail size={16} className="flex-shrink-0 mt-0.5" />
                <span>brajendrabhaskaran1@gmail.com</span>
              </li>
              <li className="flex gap-2">
                <MapPin size={16} className="flex-shrink-0 mt-0.5" />
                <span>Kanchandih Kapsara Po Mugma<br />Thana: Nirsa, District Dhanbad<br />Jharkhand 828204, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-midnight pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-sand/60">
            <p>&copy; {currentYear} Jharkhand Shramik Kalyan Samiti Trust. All rights reserved.</p>
            <div className="flex flex-col md:flex-row md:justify-end gap-4">
              <p>
                <span className="font-semibold">NGO DARPAN:</span> JH/2025/0615181
              </p>
              <p>
                <span className="font-semibold">PAN:</span> AAFTJ0785J
              </p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
