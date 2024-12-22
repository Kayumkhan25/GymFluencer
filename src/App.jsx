import React from 'react';
import Navbar from './components/Navbar';
import TopIntro from './components/TopIntro';
import Scrolling from './components/Scrolling';
import Stats from './components/Stats';
import Services from './components/Services';
import Benifits from './components/Benifits';
import Personalized from './components/Personalized';
import Transformation from './components/Transformation';
import Location from './components/Location';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Blogs from './components/Blogs';
import Says from './components/Says';


const App = () => {
  
  
  return (
    <div className='grid gap-16'>
      <Navbar />
      <TopIntro />
      <Scrolling />
      <Stats/>
      <Services />
      <Benifits />
      <Personalized />
      <Transformation />
      <Says />
      <Location />
      <Blogs />
      <FAQ />
      <Footer />
    </div>
  )
}

export default App