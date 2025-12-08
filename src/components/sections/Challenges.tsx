"use client";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { motion } from "framer-motion";
import { AlertTriangle, Droplet, Shield, Users, Trees, TrendingDown } from "lucide-react";

const challenges = [
  {
    icon: AlertTriangle,
    title: "Illegal Mining Prevalence",
    metric: "20%",
    description:
      "Jharkhand accounts for over 20% of India's illegal mining cases with 5,000+ violations annually.",
    impact: "₹1,000+ crore in lost state revenue"
  },
  {
    icon: Shield,
    title: "Occupational Health Hazards",
    metric: "40%",
    description:
      "40% of mining workers exposed to hazardous dust and toxic emissions, with 30% higher respiratory illness rates.",
    impact: "Above-norm workplace accidents & fatalities"
  },
  {
    icon: TrendingDown,
    title: "Compliance & Oversight Gaps",
    metric: "95%",
    description:
      "95% of mining outsourced to contractors with only 1 in 4 operations undergoing regular audits.",
    impact: "Unchecked pollution & labor exploitation"
  },
  {
    icon: Users,
    title: "Community Displacement",
    metric: "15,000+",
    description:
      "Over 15,000 families displaced in Jharkhand's past decade with inadequate rehabilitation.",
    impact: "Long-term socio-economic distress"
  },
  {
    icon: Trees,
    title: "Environmental Degradation",
    metric: "Critical",
    description:
      "Severe deforestation, contaminated water sources, and declining soil quality threatening agriculture.",
    impact: "Biodiversity loss in key mining districts"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

export default function Challenges() {
  return (
    <Section id="challenges" className="bg-sky/30">
      <Container>
        <motion.div
          className="mb-12 md:mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
            The Challenges We Address
          </h2>
          <p className="text-lg text-slate max-w-2xl">
            Mining in Jharkhand faces critical compliance, health, and environmental challenges requiring coordinated intervention.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {challenges.map((challenge, idx) => {
            const Icon = challenge.icon;
            return (
              <motion.div key={idx} variants={itemVariants}>
                <Card hover className="h-full border-accent/20">
                  <CardHeader>
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-lg mb-4">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-lg font-bold text-ink">{challenge.title}</h3>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <p className="text-2xl font-bold text-accent mb-1">{challenge.metric}</p>
                      <p className="text-sm text-slate">{challenge.description}</p>
                    </div>
                    <div className="pt-4 border-t border-stone/10">
                      <p className="text-xs font-semibold text-accent uppercase tracking-wide">Impact</p>
                      <p className="text-sm text-ink mt-1">{challenge.impact}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </Section>
  );
}
