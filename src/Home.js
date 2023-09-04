// Home.js
import React from 'react';
import img1 from './images/img1.png';
import git from './images/git.png';
import linkedin from './images/linkedin.png';
import insta from './images/insta.png';
const Home = () => {

  const handleDownloadClick = () => {
    const url = 'http://localhost:3000/Vamshi_Resume.pdf'; // Path wrong
    const link = document.createElement('a');
    link.href = url;
    link.target = '_blank'; // Open in a new tab
    link.download = 'Vamshi Resume.pdf'; // You can set the desired filename here
    link.click();
  };

  return (
    <div>
    <section id="home">
      <h2 className='hello'>Hello, It's Me</h2>
      <h1 className='name'>Vamshi Krishna Janagani</h1>
      <h2 className='job'>And I'm a <span>Software Engineer</span></h2>
      <p className='ptext'>I am a highly motivated and results-driven 
        professional with a background in computer 
        science currently working as an Associate in 
        Hitachi vantara. I believe in utilizing my free 
        time to pursue my interests and hobbies which helps me to stay fresh, 
        motivated and energized.</p>
        <a href="https://instagram.com/vamshi_janagani22?utm_source=qr&igshid=NGExMmI2YTkyZg==" target="_blank" rel="noopener noreferrer">
        <img className='insta' src={insta} alt="Insta" />
        </a>
        <a href="https://www.linkedin.com/in/vamshi-krishna-janagani-5484761b1" target="_blank" rel="noopener noreferrer">
        <img className='linkedin' src={linkedin} alt="linkedin" />
        </a>
        <a href="https://github.com/VamshiJanagani" target="_blank" rel="noopener noreferrer">
        <img className='git' src={git} alt="Github" />
        </a>
    <button className='download' onClick={handleDownloadClick}>Download CV</button>
    </section>
    <section className='image'>
    <img className='bomma' src={img1} alt="My Suit Pic" />
    </section>
    </div>
  );
};

export default Home;
