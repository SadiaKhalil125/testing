import React, { useState, useEffect } from 'react';

// Step 1: Import all three banner images from the assets folder
import bannerImage1 from '../src/assets/banner1.jpg'
import bannerImage2 from '../src/assets/banner2.jpg'
import bannerImage3 from '../src/assets/banner3.png'

// Step 2: Create an array of the imported images
const slideImages = [bannerImage2, bannerImage1, bannerImage3];

const Hero = () => {
  // Step 3: Set up state to track the current slide index
  const [currentSlide, setCurrentSlide] = useState(0);

  // Step 4: Use useEffect to create an interval that changes the slide
  useEffect(() => {
    // Set an interval to advance the slide every 5 seconds (5000 milliseconds)
    const timer = setInterval(() => {
      // Calculate the next slide index, looping back to 0 if at the end
      const nextSlide = (currentSlide + 1) % slideImages.length;
      setCurrentSlide(nextSlide);
    }, 3000);

    // Clean up the interval when the component is unmounted
    return () => clearInterval(timer);
  }, [currentSlide]); // Re-run the effect when the currentSlide changes

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Slideshow Container */}
      {slideImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}
      
      {/* Light Opacity Overlay - This sits on top of the images */}
      <div className="absolute inset-0 bg-white opacity-70"></div>
      
      {/* Text Content - This sits on top of the overlay */}
      <div className="relative z-10 h-full flex items-center justify-center text-center text-gray-900 p-4">
        <div>
          <h1 className="text-6xl md:text-8xl font-serif font-bold mb-4 opacity-90">Khalil Ahmad</h1>
          <p className="text-xl md:text-2xl font-sans font-light">Master Artisan in Custom Furniture Stitching</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;