import React from 'react';
import logo from '../src/assets/logo3.891Z.png'
const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold">About Us</h2>
          <div className="w-24 h-1 bg-gray-800 mx-auto mt-4"></div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3">
            <img src={logo} alt="Khalil Ahmad" className="rounded-full shadow-lg mx-auto" />
          </div>
          <div className="md:w-2/3 text-lg font-sans text-gray-700 leading-relaxed">
            <p>
              With over a decade of dedicated experience, we have honed our craft in the art of furniture stitching. Our passion lies in transforming high-quality materials into durable, beautiful, and comfortable pieces for both indoor and outdoor spaces.
            </p>
            <p className="mt-4">
              We specialize in a variety of stitching techniques, working meticulously to ensure every seam, welt, and detail meets the highest standards of quality and design. Our work is not just about function; it's about bringing a vision to life with precision and artistry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;