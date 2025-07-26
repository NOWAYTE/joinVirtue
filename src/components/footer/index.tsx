import React from 'react';
import Link from 'next/link';
import { Twitter, Linkedin, Instagram, MessageCircleMore } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-background text-muted-foreground py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo / Brand */}
          <Link href="/" className="text-2xl font-bold text-white">
            Virtue
          </Link>

          {/* Social Icons */}
          <div className="flex gap-4">
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <Twitter size={20} />
            </Link>
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <Instagram size={20} />
            </Link>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <Linkedin size={20} />
            </Link>
            <Link href="https://discord.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <MessageCircleMore size={20} />
            </Link>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-6 text-center text-xs">
          &copy; {new Date().getFullYear()} Virtue. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
