"use client"

import React from 'react';
import { KontakData } from '@/lib/types';
import { cn } from '@/lib/utils';

interface KontakProps {
  data: KontakData;
}

export function Kontak({ data }: KontakProps) {
  return (
    <section id="kontak" className="section section-light py-20 px-[5%] bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">
          <i className="fas fa-address-card mr-3"></i> Hubungi Kami
        </h2>

        <div className="max-w-2xl mx-auto">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold flex items-center gap-3 text-primary mb-8">
              <i className="fas fa-map-marker-alt"></i> Informasi Kontak
            </h3>
            
            <div className="flex flex-col gap-5">
              <ContactItem 
                icon="fas fa-map-pin" 
                title="Alamat" 
                content={data.alamat || '-'} 
              />
              <ContactItem 
                icon="fas fa-envelope" 
                title="Email" 
                content={
                  <>
                    {data.email1 && <div>{data.email1}</div>}
                    {data.email2 && <div>{data.email2}</div>}
                  </>
                } 
              />
              <ContactItem 
                icon="fas fa-phone-alt" 
                title="Telepon" 
                content={
                  <>
                    {data.telpon1 && <div>{data.telpon1}</div>}
                    {data.telpon2 && <div>{data.telpon2}</div>}
                  </>
                } 
              />
              <ContactItem 
                icon="fas fa-clock" 
                title="Jam Operasional" 
                content={data.jam_operasional || '-'} 
                isMultiLine
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const ContactItem = ({ icon, title, content, isMultiLine }: { icon: string; title: string; content: React.ReactNode; isMultiLine?: boolean }) => (
  <div className="info-item">
    <div className="text-primary w-12 flex justify-center text-2xl">
      <i className={icon}></i>
    </div>
    <div>
      <h4 className="font-bold text-sm uppercase tracking-wider text-muted-foreground/60 mb-0.5">{title}</h4>
      <div className={cn("text-base font-semibold text-foreground", isMultiLine && "whitespace-pre-line")}>
        {content}
      </div>
    </div>
  </div>
);
