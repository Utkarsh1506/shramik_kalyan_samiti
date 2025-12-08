"use client";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <Section className="bg-gradient-to-r from-ink via-midnight to-slate">
      <Container>
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Mining Practices?
          </h2>
          <p className="text-lg text-sand/90 mb-10 max-w-2xl mx-auto">
            Partner with us to deliver sustainable, compliance-driven solutions that protect workers and communities while ensuring business continuity.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="group">
              Partner With Us
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
              Request a Consultation
            </Button>
          </div>

          <motion.div
            className="mt-12 pt-12 border-t border-white/10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-sand/70 text-sm mb-6">Trusted by leading organizations</p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12 items-center">
              {["Coal India Limited", "Tata Power", "Valley Corporation", "State Govt."].map(
                (partner, idx) => (
                  <div key={idx} className="text-sand/60 font-medium text-sm">
                    {partner}
                  </div>
                )
              )}
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
