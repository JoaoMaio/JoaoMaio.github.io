'use client'; // Mark this as a Client Component

import { usePathname } from 'next/navigation';
import en from '@/public/locales/en.json';
import pt from '@/public/locales/pt.json';
import { Metadata } from 'next';

export const useLanguage = () => {
  const pathname = usePathname(); // Get the current path (e.g., '/en' or '/pt')
  const lang = pathname.split('/')[1]; // Extract the language from the path
  return lang || 'en'; // Default to 'en' if no language is found
};

export const metadata: Metadata = {
  title: "Joao Maio Portfolio",
  description: "Showcasing my work and projects",
};