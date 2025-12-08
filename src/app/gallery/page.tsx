'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Container, Section } from '@/components/ui';
import { useState } from 'react';
import { X, Download } from 'lucide-react';

const galleryImages = [
  { src: '/3.jpg', alt: 'Community welfare and development program', category: 'Programs' },
  { src: '/4.jpg', alt: 'Worker safety and health initiative', category: 'Health' },
  { src: '/5.jpg', alt: 'Community engagement session', category: 'Community' },
  { src: '/6.jpg', alt: 'Environmental restoration project', category: 'Environment' },
  { src: '/7.jpg', alt: 'Worker training and education', category: 'Training' },
  { src: '/9.jpg', alt: 'Medical health screening camp', category: 'Health' },
  { src: '/10.jpg', alt: 'Community outreach program', category: 'Community' },
  { src: '/11.jpg', alt: 'Safety equipment distribution', category: 'Programs' },
  { src: '/12.jpg', alt: 'Worker welfare initiative', category: 'Programs' },
  { src: '/13.jpg', alt: 'Community development meeting', category: 'Community' },
  { src: '/15.jpg', alt: 'Health and safety training', category: 'Training' },
  { src: '/16.jpg', alt: 'Environmental conservation effort', category: 'Environment' },
  { src: '/17.jpg', alt: 'Worker support services', category: 'Programs' },
  { src: '/18.jpg', alt: 'Community empowerment program', category: 'Community' },
  { src: '/19.jpg', alt: 'Medical assistance camp', category: 'Health' },
  { src: '/20.jpg', alt: 'Training and capacity building', category: 'Training' },
  { src: '/21.jpg', alt: 'Community welfare event', category: 'Community' },
  { src: '/22.jpg', alt: 'Worker health screening', category: 'Health' },
  { src: '/23.jpg', alt: 'Environmental awareness program', category: 'Environment' },
  { src: '/24.jpg', alt: 'Skills development training', category: 'Training' },
];

const categories = ['All', 'Programs', 'Health', 'Community', 'Environment', 'Training'];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-ink via-midnight to-ink text-white pt-32 pb-16">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Work in <span className="text-amber">Action</span>
            </h1>
            <p className="text-lg text-sand/90">
              Witness the positive impact we're making in communities across Jharkhand through our programs, 
              health initiatives, and environmental restoration efforts.
            </p>
          </motion.div>
        </Container>
      </Section>

      {/* Filter Section */}
      <Section className="bg-sky/30 py-8">
        <Container>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-moss text-white shadow-md scale-105'
                    : 'bg-white text-ink hover:bg-moss/10 border border-moss/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </Container>
      </Section>

      {/* Gallery Grid */}
      <Section className="bg-gradient-to-b from-white to-sky/20">
        <Container>
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.src}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                className="relative aspect-square cursor-pointer group overflow-hidden rounded-xl shadow-card hover:shadow-xl transition-all"
                onClick={() => setSelectedImage(image.src)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="inline-block px-3 py-1 bg-amber text-white text-xs font-semibold rounded-full">
                      {image.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredImages.length === 0 && (
            <div className="text-center py-16">
              <p className="text-slate text-lg">No images found in this category.</p>
            </div>
          )}
        </Container>
      </Section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white bg-ink/50 hover:bg-ink/70 rounded-full p-3 transition-colors z-10"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
          >
            <X size={24} />
          </button>

          <div className="relative max-w-7xl max-h-[90vh] w-full h-full" onClick={(e) => e.stopPropagation()}>
            <Image
              src={selectedImage}
              alt="Gallery image"
              fill
              className="object-contain"
              sizes="90vw"
              priority
            />
          </div>

          <a
            href={selectedImage}
            download
            className="absolute bottom-4 right-4 text-white bg-moss hover:bg-moss/80 rounded-full p-3 transition-colors z-10 flex items-center gap-2"
            onClick={(e) => e.stopPropagation()}
          >
            <Download size={20} />
            <span className="hidden sm:inline text-sm font-medium">Download</span>
          </a>
        </motion.div>
      )}
    </>
  );
}
