"use client";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32">
      {/* Banner Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/3.jpg"
          alt="Shramik Kalyan Samiti banner"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-ink/90 via-midnight/85 to-ink/90" />
      </div>
      {/* Background mesh animation */}
      <div className="absolute inset-0 opacity-20 z-[1]">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-moss/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-amber/20 rounded-full blur-3xl"></div>
      </div>

      <Container className="relative z-10">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="px-4 py-2 bg-sky border border-moss/30 rounded-full text-sm font-medium text-ink">
              ✓ Compliance-Driven • Technology-Enabled • Community-Focused
            </span>
          </motion.div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 tracking-tight">
            Rebuilding Mining with{" "}
            <span className="bg-gradient-to-r from-amber to-yellow-200 bg-clip-text text-transparent">
              Compliance, Health & Dignity
            </span>
          </h1>

          <p className="text-lg md:text-xl text-sand/90 mb-8 leading-relaxed max-w-2xl">
            Jharkhand Shramik Kalyan Samiti Trust partners with industry leaders and global experts to deliver sustainable, compliance-driven solutions that protect workers and communities in mining regions across India.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/programs">
              <Button size="lg" className="group">
                Explore Programs
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/certifications">
              <Button variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
                View Certifications
              </Button>
            </Link>
          </div>

          <motion.div
            className="mt-16 grid grid-cols-3 gap-8 md:gap-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div>
              <p className="text-2xl md:text-3xl font-bold text-amber">20%</p>
              <p className="text-sm text-sand/70">of India's illegal mining cases</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-amber">5,000+</p>
              <p className="text-sm text-sand/70">annual violations monitored</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-amber">15,000+</p>
              <p className="text-sm text-sand/70">families in focus area</p>
            </div>
          </motion.div>
        </motion.div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-sand/40 rounded-full flex items-start justify-center pt-2">
          <div className="w-1 h-2 bg-sand/40 rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
}
