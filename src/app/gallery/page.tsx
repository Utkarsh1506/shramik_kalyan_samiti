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
  { src: '/21.jpg', alt: 'Community welfare event', category: 'Community' },
  { src: '/22.jpg', alt: 'Worker health screening', category: 'Health' },
  { src: '/23.jpg', alt: 'Environmental awareness program', category: 'Environment' },
  { src: '/24.jpg', alt: 'Skills development training', category: 'Training' },
  { src: '/25.jpg', alt: 'Community health workshop', category: 'Health' },
  { src: '/26.jpg', alt: 'Environmental awareness drive with youth', category: 'Environment' },
  { src: '/27.jpg', alt: 'Women empowerment and training circle', category: 'Training' },
  { src: '/28.jpg', alt: 'Safety gear distribution at site', category: 'Programs' },
  { src: '/31.jpg', alt: 'Reforestation volunteers restoring green cover', category: 'Environment' },
  { src: '/32.jpg', alt: 'Skill-building classroom session', category: 'Training' },
  { src: '/33.jpg', alt: 'Mine safety inspection and briefing', category: 'Programs' },
  { src: '/34.jpg', alt: 'Child education and support initiative', category: 'Community' },
  { src: '/35.jpg', alt: 'Green belt plantation activity', category: 'Environment' },
  { src: '/36.jpg', alt: 'Occupational safety drill for workers', category: 'Training' },
  { src: '/37.jpg', alt: 'Women self-help group meeting', category: 'Community' },
  { src: '/38.jpg', alt: 'Water quality testing near mining area', category: 'Environment' },
  { src: '/39.jpg', alt: 'ICT-led learning and awareness session', category: 'Training' },
  { src: '/40.jpg', alt: 'Livelihood support fair for families', category: 'Programs' },
  { src: '/42.jpg', alt: 'Community kitchen and relief support', category: 'Community' },
  { src: '/45.jpg', alt: 'Support services desk for miners', category: 'Programs' },
  { src: '/46.jpg', alt: 'Women volunteers coordinating outreach', category: 'Community' },
  { src: '/47.jpg', alt: 'Health awareness poster session', category: 'Health' },
  { src: '/48.jpg', alt: 'Riverbank cleanup and restoration', category: 'Environment' },
  { src: '/49.jpg', alt: 'Youth leadership workshop', category: 'Training' },
  { src: '/50.jpg', alt: 'Site readiness and safety checklist', category: 'Programs' },
  { src: '/IMG-20251208-WA0012.jpg', alt: 'Team briefing before outreach', category: 'Programs' },
  { src: '/IMG-20251208-WA0016.jpg', alt: 'Health volunteers preparing materials', category: 'Health' },
  { src: '/IMG-20251208-WA0017.jpg', alt: 'Community feedback circle', category: 'Community' },
  { src: '/IMG-20251208-WA0018.jpg', alt: 'Tree planting and soil care', category: 'Environment' },
  { src: '/IMG-20251208-WA0019.jpg', alt: 'Skill lab with digital tools', category: 'Training' },
  { src: '/IMG-20251208-WA0021.jpg', alt: 'Emergency preparedness drill', category: 'Programs' },
  { src: '/IMG-20251208-WA0023.jpg', alt: 'Medical screening documentation', category: 'Health' },
  { src: '/IMG-20251208-WA0025.jpg', alt: 'Community leaders coordination meet', category: 'Community' },
  { src: '/IMG-20251208-WA0029.jpg', alt: 'Eco-restoration site walkthrough', category: 'Environment' },
  { src: '/IMG-20251208-WA0031.jpg', alt: 'Hands-on vocational training', category: 'Training' },
  { src: '/IMG-20251208-WA0032.jpg', alt: 'Skills training program', category: 'Training' },
  { src: '/IMG-20251208-WA0033.jpg', alt: 'Worker safety seminar', category: 'Programs' },
  { src: '/IMG-20251208-WA0036.jpg', alt: 'Community gathering', category: 'Community' },
  { src: '/IMG-20251208-WA0037.jpg', alt: 'Health camp session', category: 'Health' },
  { src: '/IMG-20251208-WA0038.jpg', alt: 'Green zone restoration', category: 'Environment' },
  { src: '/IMG-20251208-WA0043.jpg', alt: 'Community support program', category: 'Community' },
  { src: '/IMG-20251208-WA0062.jpg', alt: 'Training session', category: 'Training' },
  { src: '/IMG-20251208-WA0064.jpg', alt: 'Community meeting', category: 'Community' },
  { src: '/IMG-20251208-WA0065.jpg', alt: 'Health awareness drive', category: 'Health' },
  { src: '/IMG-20251208-WA0066.jpg', alt: 'Restoration activity', category: 'Environment' },
  { src: '/IMG-20251208-WA0067.jpg', alt: 'Skills development', category: 'Training' },
  { src: '/IMG-20251208-WA0068.jpg', alt: 'Worker outreach', category: 'Programs' },
  { src: '/IMG-20251208-WA0069.jpg', alt: 'Community engagement', category: 'Community' },
  { src: '/IMG-20251208-WA0070.jpg', alt: 'Medical services', category: 'Health' },
  { src: '/IMG-20251208-WA0071.jpg', alt: 'Environmental initiative', category: 'Environment' },
  { src: '/IMG-20251208-WA0072.jpg', alt: 'Training program', category: 'Training' },
  { src: '/IMG-20251208-WA0073.jpg', alt: 'Safety briefing', category: 'Programs' },
  { src: '/IMG-20251208-WA0074.jpg', alt: 'Community support', category: 'Community' },
  { src: '/IMG-20251208-WA0076.jpg', alt: 'Health initiative', category: 'Health' },
  { src: '/IMG-20251208-WA0077.jpg', alt: 'Green initiative', category: 'Environment' },
  { src: '/IMG-20251208-WA0079.jpg', alt: 'Worker program', category: 'Programs' },
  { src: '/IMG-20251208-WA0083.jpg', alt: 'Education program', category: 'Training' },
  { src: '/WhatsApp Image 2025-12-11 .jpeg', alt: 'Community welfare initiative', category: 'Community' },
  { src: '/WhatsApp Image 2025-12-11 at 9.00.32 PM.jpeg', alt: 'Health awareness session', category: 'Health' },
  { src: '/WhatsApp Image 2025-12-11 at 9.00.36 PM.jpeg', alt: 'Environmental restoration drive', category: 'Environment' },
  { src: '/WhatsApp Image 2025-12-11 at 9.01.14 PM.jpeg', alt: 'Training workshop for workers', category: 'Training' },
  { src: '/WhatsApp Image 2025-12-11 at 9.01.32 PM.jpeg', alt: 'Worker support program', category: 'Programs' },
  { src: '/WhatsApp Image 2025-12-11 at 9.01.34 PM.jpeg', alt: 'Community gathering and engagement', category: 'Community' },
  { src: '/WhatsApp Image 2025-12-11 at 9.01.36 PM.jpeg', alt: 'Medical health camp', category: 'Health' },
  { src: '/WhatsApp Image 2025-12-11 at 9.01.40 PM.jpeg', alt: 'Green initiative and eco restoration', category: 'Environment' },
  { src: '/WhatsApp Image 2025-12-11 at 9.01.43 PM.jpeg', alt: 'Skills development program', category: 'Training' },
  { src: '/WhatsApp Image 2025-12-11 at 9.02.50 PM.jpeg', alt: 'Community outreach activity', category: 'Programs' },
  { src: '/WhatsApp Image 2025-12-11 at 9.02.51 PM.jpeg', alt: 'Welfare support initiative', category: 'Community' }
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
      <Section className="bg-gradient-to-b from-sky/30 via-sky/20 to-white py-8">
        <Container>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-moss to-amber text-white shadow-lg scale-105'
                    : 'bg-white text-ink hover:bg-gradient-to-r hover:from-sky hover:to-sky/50 border border-moss/20 shadow-sm hover:shadow-md'
                }`}
              >
                {category}
              </motion.button>
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
                transition={{ duration: 0.3, delay: index * 0.02 }}
                className="relative aspect-square cursor-pointer group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all"
                onClick={() => setSelectedImage(image.src)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-125"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="inline-block px-3 py-1 bg-gradient-to-r from-amber to-yellow-400 text-ink text-xs font-bold rounded-full">
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
