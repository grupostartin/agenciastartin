import React from 'react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  deliverables: string[];
}

export interface Project {
  id: string;
  title: string;
  client: string;
  category: string;
  imageUrl: string;
  tags: string[];
  description?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
}

export interface Creator {
  id: string;
  name: string;
  specialties: string[];
  imageUrl: string;
  bio: string;
  instagram?: string;
  tiktok?: string;
}

export enum ContactServiceType {
  VIDEOMAKER = 'Videomaker Mobile',
  SITES = 'Sites e Landing Pages',
  TRAFEGO = 'Gestão de Tráfego',
  UGC = 'Agenciamento de UGC\'s',
  OUTROS = 'Outros'
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  service: ContactServiceType | '';
  message?: string;
  consent: boolean;
}