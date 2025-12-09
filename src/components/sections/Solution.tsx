"use client";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { motion } from "framer-motion";
import { CheckCircle2, Monitor, Heart, BarChart3, Leaf, ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";

const solutions = [
  {
    icon: Monitor,
    title: "Real-Time Monitoring & Vigilance",
    description: "Curb illegal mining through IoT-based surveillance and community-led monitoring systems"
  },
  {
    icon: Heart,
    title: "Fair Rehabilitation",
    description: "Facilitate structured compensation and livelihood restoration for displaced families"
  },
  {
    icon: CheckCircle2,
    title: "Worker Health & Safety",
    description: "Enhance occupational health via regular screenings, training, and comprehensive PPE"
  },
  {
    icon: BarChart3,
    title: "Streamlined Compliance",
    description: "Integrate digital tools and global best practices into regulatory workflows"
  },
  {
    icon: Leaf,
    title: "Sustainable Mining",
    description: "Balance economic growth with environmental restoration and community well-being"
  }
];

export default function Solution() {
  return (
    <Section id="solution" className="bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Visual/Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-6 leading-tight">
              Our Comprehensive <span className="text-moss">Solution</span>
            </h2>
            <p className="text-lg text-slate mb-8 leading-relaxed">
              Jharkhand Shramik Kalyan Samiti delivers a compliance-driven, technology-enabled welfare model that partners with industry and global experts to address mining sector challenges holistically.
            </p>

            <div className="space-y-4">
              {[
                "Community-centric welfare programs",
                "International best practices integration",
                "Real-time digital monitoring",
                "Structured stakeholder partnerships"
              ].map((point, idx) => (
                <motion.div
                  key={idx}
                  className="flex gap-3 items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <CheckCircle2 className="w-6 h-6 text-moss flex-shrink-0 mt-0.5" />
                  <span className="text-ink font-medium">{point}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Solution Cards Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {solutions.map((solution, idx) => {
              const Icon = solution.icon;
              return (
                <motion.div
                  key={idx}
                  className="bg-sky/50 rounded-xl p-6 border border-moss/20 hover:border-moss/50 hover:shadow-card transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                >
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-moss/10 rounded-lg mb-3">
                    <Icon className="w-5 h-5 text-moss" />
                  </div>
                  <h3 className="font-bold text-ink mb-2">{solution.title}</h3>
                  <p className="text-sm text-slate">{solution.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
        >
          <Link href="/programs">
            <Button size="lg" className="group">
              Explore Programs
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Button 
            variant="outline" 
            size="lg" 
            className="text-ink border-ink hover:bg-ink/5"
            onClick={() => window.open('https://wa.me/916206490476', '_blank')}
          >
            <MessageCircle className="mr-2 w-5 h-5" />
            Contact on WhatsApp
          </Button>
        </motion.div>
      </Container>
    </Section>
  );
}
