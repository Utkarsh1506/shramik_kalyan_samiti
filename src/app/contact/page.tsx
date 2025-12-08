'use client';

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Contact() {
  return (
    <>
      {/* Hero */}
      <Section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/12.jpg"
            alt="Contact Us"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-ink/93 via-moss/80 to-midnight/90" />
        </div>
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Get In <span className="text-amber">Touch</span>
            </h1>
            <p className="text-lg md:text-xl text-sand/90 max-w-2xl leading-relaxed">
              Contact us for partnerships, donations, compliance audits, or any inquiries about our work.
            </p>
          </motion.div>
        </Container>
      </Section>

      {/* Contact Info + Form */}
      <Section className="bg-gradient-to-b from-sky/10 to-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-ink mb-8">Contact Information</h2>

              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="flex gap-4 p-4 bg-white rounded-xl shadow-card hover:shadow-lg transition-shadow"
                >
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-br from-moss to-moss/70">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-ink mb-1">Email</h3>
                    <a href="mailto:brajendrabhaskaran1@gmail.com" className="text-moss hover:text-moss/80 transition-colors">
                      brajendrabhaskaran1@gmail.com
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex gap-4 p-4 bg-white rounded-xl shadow-card hover:shadow-lg transition-shadow"
                >
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-br from-amber to-amber/70">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-ink mb-1">Phone</h3>
                    <a href="tel:+916206490476" className="text-slate hover:text-moss transition-colors">
                      +91 6206490476
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex gap-4 p-4 bg-white rounded-xl shadow-card hover:shadow-lg transition-shadow"
                >
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-br from-accent to-accent/70">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-ink mb-1">Address</h3>
                    <p className="text-slate">
                      Jharkhand Shramik Kalyan Samiti<br />
                      Ranchi, Jharkhand, India
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="flex gap-4 p-4 bg-white rounded-xl shadow-card hover:shadow-lg transition-shadow"
                >
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-br from-sky-500 to-sky-600">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-ink mb-1">Office Hours</h3>
                    <p className="text-slate">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-2xl shadow-xl"
            >
              <h2 className="text-3xl font-bold text-ink mb-6">Send a Message</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-ink mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-slate/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-moss focus:border-transparent transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-ink mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-slate/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-moss focus:border-transparent transition-all"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-ink mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-3 border border-slate/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-moss focus:border-transparent transition-all"
                    placeholder="Tell us about your inquiry..."
                  />
                </div>
                <Button size="lg" className="w-full group">
                  Send Message
                  <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Next Steps */}
      <Section className="bg-white">
        <Container>
          <h2 className="text-3xl font-bold text-ink mb-12 text-center">Next Steps</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: 1, title: "Submit Inquiry", desc: "Fill out the form with your details and inquiry type." },
              { step: 2, title: "Review & Response", desc: "We'll review and respond within 2-3 business days." },
              { step: 3, title: "Schedule Meeting", desc: "Discuss opportunities and explore collaboration pathways." }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-moss to-amber text-white rounded-full font-bold text-xl mb-4 shadow-lg">
                  {item.step}
                </div>
                <h3 className="font-bold text-ink mb-2 text-lg">{item.title}</h3>
                <p className="text-slate leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
