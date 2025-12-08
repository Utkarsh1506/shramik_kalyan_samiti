'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Section, Container } from '@/components/ui';
import { useState } from 'react';

const galleryImages = [
  { src: '/5.jpg', alt: 'Community welfare program' },
  { src: '/6.jpg', alt: 'Worker safety initiative' },
  { src: '/7.jpg', alt: 'Health screening camp' },
  { src: '/9.jpg', alt: 'Environmental restoration' },
  { src: '/10.jpg', alt: 'Training session' },
  { src: '/11.jpg', alt: 'Community meeting' },
  { src: '/12.jpg', alt: 'Medical assistance' },
  { src: '/13.jpg', alt: 'Safety equipment distribution' },
  { src: '/15.jpg', alt: 'Rehabilitation program' },
  { src: '/16.jpg', alt: 'Education initiative' },
  { src: '/17.jpg', alt: 'Community support' },
  { src: '/18.jpg', alt: 'Worker welfare event' },
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <Section className="bg-gradient-to-b from-white to-sky/30">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
              Our Work in Action
            </h2>
            <p className="text-slate text-lg max-w-2xl mx-auto">
              Witness the positive impact we're making in communities across Jharkhand
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.src}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="relative aspect-square cursor-pointer group overflow-hidden rounded-lg"
                onClick={() => setSelectedImage(image.src)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl max-h-[90vh] w-full h-full">
            <Image
              src={selectedImage}
              alt="Gallery image"
              fill
              className="object-contain"
              sizes="90vw"
            />
            <button
              className="absolute top-4 right-4 text-white bg-ink/50 hover:bg-ink/70 rounded-full p-2 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
