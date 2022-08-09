import React from 'react';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import About from './components/About';
import Home from './components/Home';
import './App.css';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Projects/> 
      <Skills/>
      <Footer/>
    </div>
  );
}

export default App;


