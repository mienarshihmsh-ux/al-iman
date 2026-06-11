"use client"

import React, { useState } from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription,
  DialogFooter
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { cn } from '@/lib/utils';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  appsScriptUrl: string;
}

export function RegistrationModal({ isOpen, onClose, appsScriptUrl }: RegistrationModalProps) {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    nama: '',
    nisn: '',
    nik: '',
  });

  const [files, setFiles] = useState<{
    foto: File | null;
    ijazah: File | null;
    kk: File | null;
  }>({
    foto: null,
    ijazah: null,
    kk: null,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    if (id === 'nisn') {
      setFormData(prev => ({ ...prev, nisn: value.replace(/\D/g, '').slice(0, 10) }));
    } else if (id === 'nik') {
      setFormData(prev => ({ ...prev, nik: value.replace(/\D/g, '').slice(0, 16) }));
    } else {
      setFormData(prev => ({ ...prev, [id]: value }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, files: selectedFiles } = e.target;
    if (selectedFiles && selectedFiles[0]) {
      setFiles(prev => ({ ...prev, [id]: selectedFiles[0] }));
    }
  };

  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(String(reader.result).split(',')[1]);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validations
    if (!formData.nama || !formData.nisn || !formData.nik || !files.foto || !files.ijazah || !files.kk) {
      toast({
        title: "Form Tidak Lengkap",
        description: "Semua kolom wajib diisi!",
        variant: "destructive"
      });
      return;
    }

    if (!/^\d{10}$/.test(formData.nisn)) {
      toast({ title: "NISN Tidak Valid", description: "NISN harus berupa 10 digit angka!", variant: "destructive" });
      return;
    }

    if (!/^\d{16}$/.test(formData.nik)) {
      toast({ title: "NIK Tidak Valid", description: "NIK harus berupa 16 digit angka!", variant: "destructive" });
      return;
    }

    setLoading(true);

    try {
      const fotoBase64 = await fileToBase64(files.foto);
      const ijazahBase64 = await fileToBase64(files.ijazah);
      const kkBase64 = await fileToBase64(files.kk);

      const body = new FormData();
      body.append('nama', formData.nama);
      body.append('nisn', formData.nisn);
      body.append('nik', formData.nik);
      body.append('foto', fotoBase64);
      body.append('fotoExt', files.foto.name.split('.').pop() || 'jpg');
      body.append('ijazah', ijazahBase64);
      body.append('kk', kkBase64);

      const response = await fetch(appsScriptUrl, {
        method: 'POST',
        body: body,
      });

      const result = await response.json();

      if (result.result === 'success') {
        toast({
          title: "Pendaftaran Berhasil!",
          description: `Data ${formData.nama} berhasil disimpan. Terima kasih telah mendaftar di TPA AL IMAN.`,
        });
        onClose();
        // Reset form
        setFormData({ nama: '', nisn: '', nik: '' });
        setFiles({ foto: null, ijazah: null, kk: null });
      } else {
        throw new Error(result.message || 'Gagal mengirim pendaftaran');
      }
    } catch (error: any) {
      toast({
        title: "Pendaftaran Gagal",
        description: error.message || "Terjadi kesalahan saat mengirim data.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[650px] max-h-[95vh] overflow-y-auto rounded-3xl p-8 border-none shadow-2xl">
        <DialogHeader className="mb-6">
          <DialogTitle className="text-2xl font-headline font-bold text-primary flex items-center gap-3">
            <i className="fas fa-paper-plane"></i> Form Pendaftaran Santri Baru
          </DialogTitle>
          <DialogDescription className="text-base">
            Silakan isi formulir di bawah ini dengan lengkap dan benar.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="nama" className="flex items-center gap-2 text-foreground font-semibold">
              <i className="fas fa-user text-primary"></i> Nama Lengkap <span className="text-red-500">*</span>
            </Label>
            <Input 
              id="nama" 
              placeholder="Contoh: Ibrahim Hassan" 
              className="h-12 border-2 focus:border-primary transition-all rounded-xl"
              value={formData.nama}
              onChange={handleInputChange}
              required 
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="nisn" className="flex items-center gap-2 text-foreground font-semibold">
                <i className="fas fa-id-card text-primary"></i> NISN <span className="text-red-500">*</span>
              </Label>
              <Input 
                id="nisn" 
                placeholder="10 digit angka" 
                className="h-12 border-2 focus:border-primary transition-all rounded-xl"
                value={formData.nisn}
                onChange={handleInputChange}
                required 
              />
              <p className="text-[10px] text-muted-foreground flex items-center gap-1 mt-1">
                <i className="fas fa-info-circle"></i> Nomor Induk Siswa Nasional (10 digit angka)
              </p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="nik" className="flex items-center gap-2 text-foreground font-semibold">
                <i className="fas fa-id-card text-primary"></i> NIK <span className="text-red-500">*</span>
              </Label>
              <Input 
                id="nik" 
                placeholder="16 digit angka" 
                className="h-12 border-2 focus:border-primary transition-all rounded-xl"
                value={formData.nik}
                onChange={handleInputChange}
                required 
              />
              <p className="text-[10px] text-muted-foreground flex items-center gap-1 mt-1">
                <i className="fas fa-info-circle"></i> Nomor Induk Kependudukan (16 digit angka)
              </p>
            </div>
          </div>

          <div className="space-y-5 bg-muted/30 p-6 rounded-2xl border border-dashed border-primary/20">
            <div className="space-y-2">
              <Label htmlFor="foto" className="flex items-center gap-2 text-foreground font-semibold">
                <i className="fas fa-camera text-primary"></i> Foto Santri <span className="text-red-500">*</span>
              </Label>
              <Input id="foto" type="file" accept=".jpg,.jpeg,.png" onChange={handleFileChange} className="bg-white border-2 rounded-xl cursor-pointer" required />
              <div className="flex justify-between items-center text-[10px] text-muted-foreground">
                <span>Format: JPG, PNG</span>
                <span>Maks 2MB</span>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="ijazah" className="flex items-center gap-2 text-foreground font-semibold">
                <i className="fas fa-graduation-cap text-primary"></i> Ijazah / Surat Keterangan <span className="text-red-500">*</span>
              </Label>
              <Input id="ijazah" type="file" accept=".pdf" onChange={handleFileChange} className="bg-white border-2 rounded-xl cursor-pointer" required />
              <div className="flex justify-between items-center text-[10px] text-muted-foreground">
                <span>Format: PDF</span>
                <span>Maks 2MB</span>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="kk" className="flex items-center gap-2 text-foreground font-semibold">
                <i className="fas fa-users text-primary"></i> Kartu Keluarga <span className="text-red-500">*</span>
              </Label>
              <Input id="kk" type="file" accept=".pdf" onChange={handleFileChange} className="bg-white border-2 rounded-xl cursor-pointer" required />
              <div className="flex justify-between items-center text-[10px] text-muted-foreground">
                <span>Format: PDF</span>
                <span>Maks 2MB</span>
              </div>
            </div>
          </div>

          <DialogFooter>
            <Button 
              type="submit" 
              className={cn(
                "w-full h-14 text-lg font-bold rounded-xl shadow-lg transition-all hero-gradient hover:scale-[1.02]",
                loading && "opacity-80"
              )} 
              disabled={loading}
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <i className="fas fa-spinner animate-spin"></i> Mengirim...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <i className="fas fa-paper-plane"></i> Kirim Pendaftaran
                </span>
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
