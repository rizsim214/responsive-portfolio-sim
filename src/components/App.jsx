import React from 'react'
import '../assets/styles/main.css';
import Header from './Header/Header';
import Home from './Home/Home';
import About from './About/About';

const App = () => {
  return (
    <>
      <Header />
      <main className="main">
          <Home />
          <About />
      </main>
    </>
  )
}

export default App
