import React from 'react';
import work3 from '../src/assets/work3.jpg'
import work4 from '../src/assets/work4.jpg'
// Placeholder data
const articles = [
  { id: 1, title: 'Choosing the Right Fabric for Outdoor Furniture', excerpt: 'Learn about durability, UV resistance, and maintenance for fabrics that last.', imageUrl: work3 },
  { id: 2, title: 'The Art of Diamond Tufting: A Deep Dive', excerpt: 'A look into the intricate process of creating elegant, tufted furniture pieces.', imageUrl: work4 },
];

const Articles = () => {
  return (
    <section id="articles" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold">Articles & Insights</h2>
          <div className="w-24 h-1 bg-gray-800 mx-auto mt-4"></div>
        </div>
        <div className="space-y-16">
          {articles.map((article, index) => (
            <div key={article.id} className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className="md:w-1/2">
                <img src={article.imageUrl} alt={article.title} className="rounded-lg shadow-xl w-full" />
              </div>
              <div className="md:w-1/2">
                <h3 className="text-3xl font-serif font-semibold mb-4">{article.title}</h3>
                <p className="text-gray-600 font-sans leading-relaxed mb-6">{article.excerpt}</p>
                <a href="#!" className="font-bold font-sans text-gray-900 hover:underline">Read More &rarr;</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;