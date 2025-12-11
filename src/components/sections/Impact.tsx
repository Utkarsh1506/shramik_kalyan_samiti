"use client";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { motion } from "framer-motion";
import { formatNumber, formatCurrency } from "@/lib/utils";

interface Metric {
  label: string;
  value: string | number;
  context: string;
}

const metrics: Metric[] = [
  {
    label: "Workers Impacted",
    value: formatNumber(2000),
    context: "Directly reached annually"
  },
  {
    label: "Families Supported",
    value: formatNumber(3000),
    context: "Rehabilitation & livelihood"
  },
  {
    label: "Compliance Audits",
    value: "50+",
    context: "Conducted per year"
  },
  {
    label: "Health Screenings",
    value: "1,200+",
    context: "Occupational health camps"
  }
];

const businessModel = [
  {
    title: "Revenue Streams",
    items: ["Government grants", "CSR consulting fees", "Training programs", "Strategic donations"]
  },
  {
    title: "Service Delivery",
    items: ["Welfare programs", "Health camps", "Compliance audits", "Professional training"]
  },
  {
    title: "Target Stakeholders",
    items: ["Mining companies", "Government agencies", "Contract workers", "Local communities"]
  },
  {
    title: "Key Partnerships",
    items: ["Coal India Limited", "Maithan Power", "Damodar Valley Corporation", "State departments"]
  }
];

export default function Impact() {
  return (
    <Section id="impact" className="bg-white">
      <Container>
        {/* Metrics Grid */}
        <motion.div
          className="mb-16 md:mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-12 text-center">
            Measurable <span className="text-moss">Impact</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {metrics.map((metric, idx) => (
              <motion.div
                key={idx}
                className="bg-sky/30 rounded-xl p-6 text-center border border-moss/10 hover:border-moss/30 transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <motion.p
                  className="text-2xl md:text-3xl font-bold text-moss mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 + 0.2 }}
                >
                  {metric.value}
                </motion.p>
                <p className="text-sm font-semibold text-ink mb-1">{metric.label}</p>
                <p className="text-xs text-slate">{metric.context}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Market Opportunity */}
        <motion.div
          className="mb-16 md:mb-20 bg-gradient-to-br from-ink to-midnight rounded-2xl p-8 md:p-12 text-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-8">Market Opportunity</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <p className="text-amber text-xl font-bold mb-2">TAM</p>
              <p className="text-3xl font-bold text-sand mb-2">₹75,358 Cr</p>
              <p className="text-sm text-sand/70">
                Total Addressable Market: Entire welfare, compliance & community health space in Jharkhand mining
              </p>
            </div>
            <div>
              <p className="text-amber text-xl font-bold mb-2">SAM</p>
              <p className="text-3xl font-bold text-sand mb-2">₹19,300 Cr</p>
              <p className="text-sm text-sand/70">
                Serviceable Market: Active mines + impacted communities (~20K workers, ~15K families)
              </p>
            </div>
            <div>
              <p className="text-amber text-xl font-bold mb-2">SOM</p>
              <p className="text-3xl font-bold text-sand mb-2">₹380 Cr</p>
              <p className="text-sm text-sand/70">
                Serviceable Obtainable: 2% SAM over 3 years (~2K workers, 3K+ families annually)
              </p>
            </div>
          </div>
        </motion.div>

        {/* Business Model */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-ink mb-12 text-center">
            Business Model <span className="text-moss">Canvas</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessModel.map((section, idx) => (
              <motion.div
                key={idx}
                className="bg-sky/30 rounded-xl p-6 border border-moss/20 hover:border-moss/50 transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <h4 className="font-bold text-ink mb-4">{section.title}</h4>
                <ul className="space-y-2">
                  {section.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex gap-2 text-sm text-slate">
                      <span className="text-moss font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
