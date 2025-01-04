import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  const socialLinks = [
    {
      icon: <Facebook className="h-5 w-5" />,
      href: "https://facebook.com/ezsumm",
      label: "Facebook"
    },
    {
      icon: <Instagram className="h-5 w-5" />,
      href: "https://instagram.com/ezsumm",
      label: "Instagram"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://linkedin.com/company/ezsumm",
      label: "LinkedIn"
    },
    {
      icon: <Twitter className="h-5 w-5" />,
      href: "https://x.com/ezsumm",
      label: "X (Twitter)"
    }
  ];

  return (
    <footer className="mt-12 pb-8">
      <div className="max-w-3xl mx-auto px-4">
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col items-center space-y-4">
            <div className="flex space-x-6">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-indigo-600 transition-colors duration-300"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} ezsumm | All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}