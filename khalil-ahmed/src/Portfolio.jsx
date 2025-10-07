import React from 'react';
import work1 from '../src/assets/work1.jpg';
import work2 from '../src/assets/work2.jpg';
import work3 from '../src/assets/work3.jpg';
import work4 from '../src/assets/work4.jpg';
import work5 from '../src/assets/work5.jpg';

// Placeholder data - replace with your actual portfolio items
const portfolioItems = [
  { id: 1, category: 'Indoor', title: 'Velvet Sofa Stitching', imageUrl: work1 },
  { id: 2, category: 'Outdoor', title: 'Weatherproof Patio Chair', imageUrl: work3 },
  { id: 3, category: 'Indoor', title: 'Leather Armchair Detail', imageUrl: work2 },
  { id: 4, category: 'Indoor', title: 'Custom Headboard Tufting', imageUrl: work5 },
  { id: 5, category: 'Outdoor', title: 'Durable Outdoor Lounge', imageUrl: work4 },
  { id: 6, category: 'Outdoor', title: 'Marine-Grade Upholstery', imageUrl: work3 },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold">Our Work</h2>
          <div className="w-24 h-1 bg-gray-800 mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map(item => (
            <div 
              key={item.id} 
              className="group relative overflow-hidden rounded-lg shadow-lg focus:outline-none"
              tabIndex="0" // Makes the div focusable, allowing it to be tapped on mobile
            >
              {/* --- Image with hover/focus zoom effect --- */}
              <img 
                src={item.imageUrl} 
                alt={item.title} 
                className="w-full h-full object-cover transform group-hover:scale-110 group-focus:scale-110 transition-transform duration-500" 
              />
              
              {/* --- Subtle gradient overlay for text readability --- */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

              {/* --- Container for the text bubbles, animated on hover/focus --- */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white 
                           opacity-0 group-hover:opacity-100 group-focus:opacity-100
                           transform translate-y-4 group-hover:translate-y-0 group-focus:translate-y-0
                           transition-all duration-300 ease-in-out">
                
                {/* --- The Category "Bubble" --- */}
                <span className="text-sm font-medium bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full self-start">
                  {item.category}
                </span>
                
                {/* --- The Title Text --- */}
                <h3 className="text-2xl font-serif font-semibold mt-2 drop-shadow-md">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;