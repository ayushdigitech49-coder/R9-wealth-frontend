'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Building, MapPin, Sparkles, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const REAL_ESTATE_PROJECTS = [
  {
    title: '66 Downtown',
    slug: '/66-downtown',
    category: 'Commercial & Retail Hub',
    location: 'Prime Business Corridor',
    highlights: 'Ultra-modern Grade-A office spaces & high-footfall retail avenues.',
    image: '/images/real_estate_downtown.jpg',
    badgeColor: 'bg-amber-400 text-slate-900',
  },
  {
    title: 'Amstoria Verti Greens & Gaia Residences',
    slug: '/amstoria-verti-greens-gaia-residences',
    category: 'Eco-Luxury Residences',
    location: 'Exclusive Green Zone',
    highlights: 'Vertical garden apartments with biophilic architectural design.',
    image: '/images/real_estate_amstoria.jpg',
    badgeColor: 'bg-emerald-400 text-slate-900',
  },
  {
    title: 'Tonino Lamborghini',
    slug: '/tonino-lamborghini',
    category: 'Italian Signature Luxury',
    location: 'Iconic Address',
    highlights: 'Bespoke Italian-designed luxury residences with private concierge.',
    image: '/images/real_estate_lambo.jpg',
    badgeColor: 'bg-rose-400 text-slate-900',
  },
  {
    title: 'TARC ISHVA',
    slug: '/tarc-ishva',
    category: 'High-Rise Sky Villas',
    location: 'Urban Skyline',
    highlights: 'Lavish 4 & 5 BHK sky mansions with 360-degree panoramic views.',
    image: '/images/real_estate_tarc.jpg',
    badgeColor: 'bg-blue-400 text-slate-900',
  },
  {
    title: 'LA FORET',
    slug: '/la-foret',
    category: 'Forest Estate Villas',
    location: 'Nature Sanctuary',
    highlights: 'Private sanctuary villas enveloped by lush forest landscaping.',
    image: '/images/real_estate_foret.jpg',
    badgeColor: 'bg-teal-400 text-slate-900',
  },
];

export const RealEstateSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#07091B] text-white relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Premium Real Estate Assets</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl font-extrabold text-white"
            >
              Exclusive Real Estate <span className="text-amber-400">Portfolio</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-sm max-w-md"
          >
            Hover over any project to reveal exclusive property preview photos. Curated luxury developments powered by R9 Wealth.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {REAL_ESTATE_PROJECTS.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative rounded-3xl overflow-hidden border border-white/10 bg-slate-900/90 shadow-2xl flex flex-col justify-between h-[380px]"
            >
              {/* Background Image on Hover & Default Dim */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover opacity-20 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out"
                />
                {/* Gradient Overlays for Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#07091B] via-[#07091B]/80 to-[#07091B]/40 group-hover:via-[#07091B]/60 group-hover:to-black/30 transition-all duration-500" />
              </div>

              {/* Card Content Layer */}
              <div className="relative z-10 p-7 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-md ${project.badgeColor}`}>
                      {project.category}
                    </span>
                    <div className="p-2 rounded-full bg-white/10 backdrop-blur-md text-amber-400 group-hover:bg-amber-400 group-hover:text-slate-900 transition-all duration-300">
                      <Building className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-extrabold text-white group-hover:text-amber-300 transition-colors mb-2 drop-shadow-md">
                    {project.title}
                  </h3>

                  <div className="flex items-center gap-1.5 text-slate-300 text-xs mb-3 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" />
                    <span>{project.location}</span>
                  </div>

                  <p className="text-slate-300 group-hover:text-slate-100 text-xs sm:text-sm leading-relaxed transition-colors duration-300 line-clamp-3">
                    {project.highlights}
                  </p>
                </div>

                <Link
                  href={project.slug}
                  className="inline-flex items-center justify-between w-full pt-4 border-t border-white/20 text-xs font-bold text-amber-400 group-hover:text-amber-300 transition-colors"
                >
                  <span>Explore Project Details</span>
                  <div className="p-1.5 rounded-full bg-amber-400/20 group-hover:bg-amber-400 group-hover:text-slate-900 transition-all">
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
