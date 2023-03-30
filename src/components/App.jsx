import React from 'react'
import '../assets/styles/main.css';
import Header from './Header/Header';
import Home from './Home/Home';
import About from './About/About';
import Skills from './Skills/Skills';
import Services from './Services/Services';
import Qualification from './Qualification/Qualification';
import Testimonials from './Testimonials/Testimonials';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import ScrollUp from './ScrollUp/ScrollUp';

const App = () => {
  return (
    <>
      <Header />
      <main className="main">
          <Home />
          <About />
          <Skills />
          <Services />
          <Qualification />
          <Testimonials />
          <Contact />
      </main>
          <Footer />
          <ScrollUp />
    </>
  )
}

export default App
