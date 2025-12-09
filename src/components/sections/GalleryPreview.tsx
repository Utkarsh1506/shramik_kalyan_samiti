'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Section, Container, Button } from '@/components/ui';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const galleryImages = [
  '/5.jpg', '/6.jpg', '/7.jpg', '/9.jpg', '/10.jpg', '/11.jpg',
];

export function GalleryPreview() {
  return (
    <Section className="bg-gradient-to-b from-white to-sky/20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
            Our Work in <span className="text-moss">Action</span>
          </h2>
          <p className="text-slate text-lg max-w-2xl mx-auto">
            Witness the positive impact we're making in communities across Jharkhand
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="relative aspect-square cursor-pointer group overflow-hidden rounded-lg"
            >
              <Image
                src={image}
                alt="Gallery image"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/gallery">
            <Button size="lg" className="group">
              View Gallery
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </Container>
    </Section>
  );
}
