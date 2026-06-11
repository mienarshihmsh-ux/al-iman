"use client"

import React from 'react';

export function LoadingScreen({ text }: { text: string }) {
  return (
    <div className="fixed inset-0 z-[9999] hero-gradient flex flex-col items-center justify-center text-white transition-opacity duration-500">
      <div className="text-center">
        <i className="fas fa-spinner text-6xl text-[#f9e79f] animate-spin mb-6"></i>
        <h2 className="text-xl font-headline font-semibold mb-2">{text}</h2>
        <p className="text-white/60 text-sm animate-pulse">Menghubungkan ke sistem...</p>
      </div>
    </div>
  );
}
