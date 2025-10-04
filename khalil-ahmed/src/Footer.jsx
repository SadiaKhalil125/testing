import React from 'react';
// Import the icons again for the footer
import { Instagram, Facebook, MessageSquare } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="container mx-auto px-6 text-center">
        
        {/* --- SOCIAL ICONS ADDED TO FOOTER --- */}
        <div className="flex justify-center space-x-6 mb-4">
          <a 
            href="https://wa.me/+923218834031" // <-- Add your WhatsApp link here
            aria-label="WhatsApp" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-300"
          >
            <MessageSquare size={24} />
          </a>
          <a 
            href="https://instagram.com/customize_outdoor_stitch" // <-- Add your Instagram link here
            aria-label="Instagram" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-300"
          >
            <Instagram size={24} />
          </a>
          <a 
            href="https://facebook.com/khalil.ahmed.648354" // <-- Add your Facebook link here
            aria-label="Facebook" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-300"
          >
            <Facebook size={24} />
          </a>
        </div>
        
        <p>&copy; {currentYear} Khalil Ahmad. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;