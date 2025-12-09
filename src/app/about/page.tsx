'use client';

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { ArrowRight, Target, Eye, Heart, Shield, Users, Zap } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <Section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/4.jpg"
            alt="About Shramik Kalyan Samiti"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-ink/95 via-midnight/90 to-ink/95" />
        </div>
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl text-white"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              About <span className="text-amber">Jharkhand Shramik</span><br />Kalyan Samiti
            </h1>
            <p className="text-lg md:text-xl text-sand/90 leading-relaxed">
              A compliance-driven, technology-enabled trust dedicated to improving mining sector practices and protecting both workers and communities across India.
            </p>
          </motion.div>
        </Container>
      </Section>

      {/* Mission, Vision, Values */}
      <Section className="bg-gradient-to-b from-white to-sky/20">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card hover className="h-full bg-gradient-to-br from-moss/5 to-moss/10 border-moss/20">
                <CardHeader>
                  <Target className="w-12 h-12 text-moss mb-4" />
                  <h3 className="text-2xl font-bold text-ink">Our Mission</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-slate leading-relaxed">
                    To improve mining sector practices in India by addressing illegal mining, environmental damage, and occupational health hazards through compliance-driven, technology-enabled interventions.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card hover className="h-full bg-gradient-to-br from-amber/5 to-amber/10 border-amber/20">
                <CardHeader>
                  <Eye className="w-12 h-12 text-amber mb-4" />
                  <h3 className="text-2xl font-bold text-ink">Our Vision</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-slate leading-relaxed">
                    A mining sector where workers are safe, communities are thriving, compliance is embedded, and environmental stewardship is prioritized alongside economic growth.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card hover className="h-full bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20">
                <CardHeader>
                  <Heart className="w-12 h-12 text-accent mb-4" />
                  <h3 className="text-2xl font-bold text-ink">Our Values</h3>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-slate">
                    <li className="flex items-center gap-2">
                      <Shield className="w-5 h-5 text-moss flex-shrink-0" />
                      <span>Integrity & Transparency</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-moss flex-shrink-0" />
                      <span>Community-First Approach</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Zap className="w-5 h-5 text-moss flex-shrink-0" />
                      <span>Innovation & Excellence</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Target className="w-5 h-5 text-moss flex-shrink-0" />
                      <span>Accountability</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Core Statement */}
      <Section className="bg-sky/30">
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-ink mb-6">Who We Are</h2>
            <p className="text-lg text-slate mb-6 leading-relaxed">
              Jharkhand Shramik Kalyan Samiti Trust is a registered NGO dedicated to improving mining sector practices in India by addressing critical challenges: illegal mining, environmental damage, occupational health hazards, and community displacement.
            </p>
            <p className="text-lg text-slate leading-relaxed">
              We partner with industry leaders and global experts to implement sustainable, compliance-driven solutions that protect workers and local communities while ensuring regulatory adherence and business continuity.
            </p>
          </div>
        </Container>
      </Section>

      {/* Why JSKS */}
      <Section className="bg-white">
        <Container>
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-12 text-center">
            Why Choose <span className="text-moss">Jharkhand Shramik Kalyan Samiti</span>?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Integrated Approach",
                description:
                  "We address compliance, health, environment, and community welfare holistically, not in silos."
              },
              {
                title: "Global Expertise",
                description:
                  "Access to international best practices and professional training in mining safety, compliance, and health."
              },
              {
                title: "Technology-Driven",
                description:
                  "IoT monitoring, digital health records, and real-time surveillance systems for transparency and accountability."
              },
              {
                title: "Scalable Model",
                description:
                  "Proven framework designed to expand across Jharkhand and replicable for other high-risk industries."
              },
              {
                title: "Structured Partnerships",
                description:
                  "Collaborations with Coal India, Tata Power, government agencies, and community organizations."
              },
              {
                title: "Impact-Focused",
                description:
                  "Clear metrics, transparent reporting, and accountability to all stakeholders including donors and beneficiaries."
              }
            ].map((item, idx) => (
              <Card key={idx} hover>
                <CardHeader>
                  <h3 className="text-lg font-bold text-ink">{item.title}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-slate">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="bg-ink text-white">
        <Container className="text-center">
          <h2 className="text-3xl font-bold mb-6">Learn More About Our Work</h2>
          <p className="text-lg text-sand/90 mb-8 max-w-2xl mx-auto">
            Explore our comprehensive programs, impact data, and partnership opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/programs">
              <Button size="lg" className="bg-white text-ink hover:bg-sand">
                Explore Programs
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/certifications">
              <Button variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
                View Certifications
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
