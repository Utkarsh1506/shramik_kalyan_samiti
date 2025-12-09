"use client";

import { useState } from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Gallery", href: "/gallery" },
  { label: "Impact", href: "/impact" },
  { label: "Team", href: "/team" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" }
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-stone/10 shadow-sm">
      <Container>
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-2 font-bold text-ink hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-moss to-amber rounded-lg flex items-center justify-center text-white font-bold text-sm">
              SK
            </div>
            <div className="hidden sm:inline text-xs md:text-sm leading-tight">
              <div className="font-bold text-ink">JSKS Trust</div>
              <div className="text-[10px] md:text-xs text-slate/70 font-medium">Jharkhand Shramik<br />Kalyan Samiti</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-ink hover:text-moss transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 md:gap-4">
            <Button
              variant="secondary"
              size="sm"
              className="hidden sm:inline-flex text-xs md:text-sm"
            >
              Donate
            </Button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-ink hover:bg-stone/10 rounded-lg transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <nav className="md:hidden pb-4 border-t border-stone/10">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-3 text-ink hover:bg-sky transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="px-4 py-3">
              <Button variant="secondary" className="w-full text-sm">
                Donate Now
              </Button>
            </div>
          </nav>
        )}
      </Container>
    </header>
  );
}
