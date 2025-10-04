import React from 'react';
import './index.css'
import './App.css'
import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import Portfolio from './Portfolio'
import Articles from './Articles'
import Contact from './Contact'
import Footer from './Footer'

function App() {
  return (
    <div className="bg-gray-50 text-gray-800">
      <Navbar />
      <Hero />
      <main>
        <About />
        <Portfolio />
        <Articles />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;