import React from 'react';
// Import the icons from lucide-react
import { Instagram, Facebook, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold">Get In Touch</h2>
          <div className="w-24 h-1 bg-white mx-auto mt-4"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg font-sans mb-8">
            We are currently available for custom projects and collaborations. If you have a vision, let's work together to bring it to life.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
            <a href="mailto:ka8418044@gmail.com" className="text-xl hover:text-gray-300">ka8418044@gmail.com</a>
            <span className="text-xl">+92 (321) 8834031</span>
          </div>
          
          {/* --- ICON SECTION UPDATED --- */}
          <div className="flex justify-center space-x-6">
            {/* WhatsApp Link */}
            <a 
              href="https://wa.me/+923218834031" // <-- Add your WhatsApp number link here
              aria-label="WhatsApp" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors duration-300"
            >
              <MessageCircle size={32} strokeWidth={1.5} />
            </a>
            
            {/* Instagram Link */}
            <a 
              href="https://instagram.com/customize_outdoor_stitch" // <-- Add your Instagram profile link here
              aria-label="Instagram" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors duration-300"
            >
              <Instagram size={32} strokeWidth={1.5} />
            </a>
            
            {/* Facebook Link */}
            <a 
              href="https://facebook.com/khalil.ahmed.648354" // <-- Add your Facebook profile link here
              aria-label="Facebook" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors duration-300"
            >
              <Facebook size={32} strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;