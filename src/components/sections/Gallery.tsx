"use client"

import React from 'react';
import { GalleryData } from '@/lib/types';
import Image from 'next/image';

interface GalleryProps {
  data: GalleryData;
}

export function Gallery({ data }: GalleryProps) {
  return (
    <section id="gallery" className="section section-green py-20 px-[5%] bg-[#f0f7f0]">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">
          <i className="fas fa-images mr-3"></i> Gallery Kegiatan
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.items.map((item, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group cursor-pointer hover:-translate-y-2"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.caption}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-6 text-center font-bold text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                {item.caption}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
