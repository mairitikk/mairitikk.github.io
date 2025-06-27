

import { Routes, Route } from 'react-router-dom'; 

// Import your components
import Navbar from './components/navbar/navbar';
import Hero from './components/hero/hero'; 
import About from './components/about/about';
import Services from './components/services/services';
import MyWork from './components/mywork/mywork'; 
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';



const HomePage = () => {
  return (
    <>
      <Hero /></>
  );
};


const App = () => {
  return (
    <div>
      <Navbar /> 

      <main> 
        <Routes>
        
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<MyWork />} /> 
          <Route path="/contact" element={<Contact />} />

        
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;
