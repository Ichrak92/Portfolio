import React from 'react';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import About from './components/About';
import Home from './components/Home';
import './App.css';
import Skills from './components/Skills';
import Tools from './components/Tools';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Projects/> 
      <Skills/>
      <Tools/>
      <Footer/>
    </div>
  );
}

export default App;


