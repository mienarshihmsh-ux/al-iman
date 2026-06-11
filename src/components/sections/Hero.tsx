"use client"

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { HeroData, HeroCarouselData } from '@/lib/types';
import Image from 'next/image';

interface HeroProps {
  hero: HeroData;
  carousel: HeroCarouselData;
}

export function Hero({ hero, carousel }: HeroProps) {
  return (
    <section id="beranda" className="relative w-full aspect-[4/3] sm:aspect-video overflow-hidden bg-[#145a32]">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full h-full"
      >
        {carousel.items.map((item, index) => (
          <SwiperSlide key={index} className="relative w-full h-full cursor-pointer">
            <Image
              src={item.image}
              alt={item.caption}
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
              priority={index === 0}
            />
            <div className="slide-caption">
              {item.caption}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute inset-0 pointer-events-none z-[5] bg-gradient-to-t from-[#145a32]/70 to-transparent flex flex-col justify-center items-center text-center p-6">
        <h1 className="text-white text-3xl md:text-6xl font-headline font-bold mb-4 drop-shadow-xl max-w-4xl tracking-tight">
          {hero.title || 'TPA AL IMAN'}
        </h1>
        <p className="text-white/95 text-lg md:text-2xl max-w-2xl drop-shadow-lg font-medium">
          {hero.subtitle || 'Tempat Pendidikan Al-Qur\'an'}
        </p>
      </div>
    </section>
  );
}
