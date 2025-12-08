'use client';

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { Heart, Leaf, Shield, Users, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const programs = [
  {
    icon: Heart,
    title: "Occupational Health & Safety",
    description:
      "Regular health screenings, respiratory disease management, PPE provision, and workplace safety training for mining workers.",
    highlights: ["Health camps", "Disease screening", "PPE distribution", "Safety training"],
    color: "from-red-500/10 to-pink-500/10 border-red-200"
  },
  {
    icon: Leaf,
    title: "Environmental Restoration",
    description:
      "Deforestation reversal, water decontamination, soil restoration, and biodiversity protection in mining-affected areas.",
    highlights: ["Tree planting", "Water remediation", "Soil restoration", "Monitoring"],
    color: "from-green-500/10 to-emerald-500/10 border-green-200"
  },
  {
    icon: Shield,
    title: "Compliance & Regulatory",
    description:
      "Compliance audits, regulatory documentation, best practice implementation, and structured monitoring systems.",
    highlights: ["Audit services", "Documentation", "Best practices", "Monitoring"],
    color: "from-blue-500/10 to-cyan-500/10 border-blue-200"
  },
  {
    icon: Users,
    title: "Community Rehabilitation",
    description:
      "Fair compensation, livelihood restoration programs, skills training, and long-term socio-economic support for displaced families.",
    highlights: ["Compensation", "Livelihood training", "Skills development", "Support services"],
    color: "from-amber-500/10 to-orange-500/10 border-amber-200"
  }
];

export default function Programs() {
  return (
    <>
      {/* Hero */}
      <Section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/6.jpg"
            alt="Our Programs"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-ink/92 via-midnight/88 to-moss/85" />
        </div>
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our <span className="text-amber">Programs</span>
            </h1>
            <p className="text-lg md:text-xl text-sand/90 max-w-2xl leading-relaxed">
              Comprehensive welfare, compliance, and environmental programs designed to address the complex challenges in Jharkhand's mining sector.
            </p>
          </motion.div>
        </Container>
      </Section>

      {/* Programs Grid */}
      <Section className="bg-gradient-to-b from-white via-sky/10 to-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((program, idx) => {
              const Icon = program.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <Card hover className={`h-full bg-gradient-to-br ${program.color} border`}>
                    <CardHeader>
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-xl shadow-md mb-4">
                        <Icon className="w-8 h-8 text-moss" />
                      </div>
                      <h3 className="text-2xl font-bold text-ink">{program.title}</h3>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate mb-6 leading-relaxed">{program.description}</p>
                      <div>
                        <p className="text-xs font-semibold text-moss uppercase tracking-wide mb-3">
                          Key Services
                        </p>
                        <ul className="space-y-2">
                          {program.highlights.map((highlight, hidx) => (
                            <li key={hidx} className="flex items-center gap-2 text-sm text-slate">
                              <CheckCircle2 className="w-4 h-4 text-moss flex-shrink-0" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </Section>
    </>
  );
}
