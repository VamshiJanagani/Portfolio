// App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './Header';
import Home from './Home.js';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import Experience from './Experience';
import Skills from './Skills';
function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Routes>
      <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />

      </Routes>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
