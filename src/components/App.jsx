import React from 'react'
import '../assets/styles/main.css';
import Header from './Header/Header';
import Home from './Home/Home';
import About from './About/About';
import Skills from './Skills/Skills';

const App = () => {
  return (
    <>
      <Header />
      <main className="main">
          <Home />
          <About />
          <Skills />
      </main>
    </>
  )
}

export default App
