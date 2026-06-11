"use client"

import React from 'react';
import { LogoData, FooterData, SocialMediaData } from '@/lib/types';
import { cn } from '@/lib/utils';

interface FooterProps {
  logo?: LogoData;
  footer?: FooterData;
  socials?: SocialMediaData;
}

export function Footer({ logo, footer, socials }: FooterProps) {
  return (
    <footer className="footer bg-[#0d2e1c] text-white py-16 px-[5%] border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
        <div className="footer-logo flex items-center gap-3">
          <i className={cn(logo?.icon || "fas fa-mosque", "text-3xl text-[#f9e79f]")}></i>
          <h3 className="text-2xl font-headline font-bold uppercase tracking-tight">
            {logo?.nama || 'TPA AL IMAN'}
          </h3>
        </div>

        <div className="social-links flex gap-4">
          {socials?.items.map((social, index) => (
            <a 
              key={index} 
              href={social.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white/10 w-11 h-11 rounded-full flex items-center justify-center hover:bg-[#f9e79f] hover:text-[#1e8449] transition-all duration-300 shadow-lg"
            >
              <i className={social.icon}></i>
            </a>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto pt-8 border-t border-white/10 text-center">
        <p className="text-white/40 text-sm">
          &copy; {footer?.copyright || new Date().getFullYear()} {logo?.nama || 'TPA AL IMAN'} {footer?.tagline ? `| ${footer?.tagline}` : ''}
        </p>
      </div>
    </footer>
  );
}
