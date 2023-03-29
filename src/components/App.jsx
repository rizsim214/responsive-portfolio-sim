import React from 'react'
import '../assets/styles/main.css';
import Header from './Header/Header';
import Home from './Home/Home';
import About from './About/About';
import Skills from './Skills/Skills';
import Services from './Services/Services';
import Qualification from './Qualification/Qualification';
import Testimonials from './Testimonials/Testimonials';

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
      </main>
    </>
  )
}

export default App
