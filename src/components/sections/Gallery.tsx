"use client"

import React, { useState } from 'react';
import { GalleryData, GalleryItem } from '@/lib/types';
import Image from 'next/image';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

interface GalleryProps {
  data: GalleryData;
}

export function Gallery({ data }: GalleryProps) {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

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
              onClick={() => setSelectedItem(item)}
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

      <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
        <DialogContent className="max-w-[95vw] md:max-w-4xl p-0 overflow-hidden border-none bg-transparent shadow-none flex items-center justify-center">
          <DialogHeader>
            <VisuallyHidden>
              <DialogTitle>{selectedItem?.caption || 'Detail Gambar'}</DialogTitle>
              <DialogDescription>Tampilan penuh gambar galeri kegiatan</DialogDescription>
            </VisuallyHidden>
          </DialogHeader>
          
          {selectedItem && (
            <div className="relative w-full h-[70vh] md:h-[85vh] flex items-center justify-center group">
              <div className="relative w-full h-full">
                <Image
                  src={selectedItem.image}
                  alt={selectedItem.caption}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-md text-white px-8 py-3 rounded-full text-center font-medium shadow-2xl transition-opacity duration-300 border border-white/10">
                {selectedItem.caption}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
