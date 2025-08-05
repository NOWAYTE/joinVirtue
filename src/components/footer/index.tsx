import React from 'react';
import Link from 'next/link';
import { Twitter, Linkedin, Instagram, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-background py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-background rounded-xl shadow-sm overflow-hidden">
          <div className="p-8 md:p-10">
            {/* Logo and Tagline */}
            <div className="text-center mb-8">
              <Link href="/" className="inline-block">
                <span className="text-2xl font-bold text-themeTextWhite">Virtue</span>
              </Link>
              <p className="mt-2 text-themeTextGray">Empowering entrepreneurs to build successful online businesses</p>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center gap-6 mb-8">
              <Link 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-themeTextGray hover:text-themeTextWhite transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </Link>
              <Link 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-themeTextGray hover:text-themeTextWhite transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </Link>
              <Link 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-themeTextGray hover:text-themeTextWhite transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </Link>
              <Link 
                href="https://discord.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-themeTextGray hover:text-themeTextWhite transition-colors"
                aria-label="Discord"
              >
                <MessageCircle size={20} />
              </Link>
            </div>

            {/* Copyright and Links */}
            <div className="border-t border-gray-700 pt-6">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-xs text-themeTextGray">
                  &copy; {new Date().getFullYear()} Virtue. All rights reserved.
                </p>
                <div className="flex gap-4">
                  <Link href="/privacy" className="text-xs text-themeTextGray hover:text-themeTextWhite transition-colors">
                    Privacy Policy
                  </Link>
                  <Link href="/terms" className="text-xs text-themeTextGray hover:text-themeTextWhite transition-colors">
                    Terms of Service
                  </Link>
                  <Link href="/contact" className="text-xs text-themeTextGray hover:text-themeTextWhite transition-colors">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
