import React, { useState, useEffect } from 'react';

const Skills = () => {
    const [counter, setCounter] = useState(0);
    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);
    const [counter3, setCounter3] = useState(0);
    useEffect(() => {
      const interval = setInterval(() => {
        if (counter === 65) {
          clearInterval(interval);
        } else {
          setCounter((prevCounter) => prevCounter + 1);
        }
      }, 20);
  
      return () => {
        clearInterval(interval); // Cleanup the interval on component unmount
      };
    }, [counter]);
    useEffect(() => {
        const interval = setInterval(() => {
          if (counter1 === 100) {
            clearInterval(interval);
          } else {
            setCounter1((prevCounter) => prevCounter + 1);
          }
        }, 20);
    
        return () => {
          clearInterval(interval); // Cleanup the interval on component unmount
        };
      }, [counter1]);
      useEffect(() => {
        const interval = setInterval(() => {
          if (counter2 === 80) {
            clearInterval(interval);
          } else {
            setCounter2((prevCounter) => prevCounter + 1);
          }
        }, 20);
    
        return () => {
          clearInterval(interval); // Cleanup the interval on component unmount
        };
      }, [counter2]);
      useEffect(() => {
        const interval = setInterval(() => {
          if (counter3 === 70) {
            clearInterval(interval);
          } else {
            setCounter3((prevCounter) => prevCounter + 1);
          }
        }, 20);
    
        return () => {
          clearInterval(interval); // Cleanup the interval on component unmount
        };
      }, [counter3]);
  return (
    <div className="skills">
        <div className='main-text'>
            <h2>My Skills</h2>
        </div>
        <div className='skill-main'>
            <div className='skill-left'>
            <h3>Technical Skills</h3>
            <div className='skill-bar'>
                <div className='info'>
                    <p>HTML</p>
                    <p>72%</p>
                </div>
                <div className='bar'>
                    <span className='html'></span>
                </div>
            </div>
            <div className='skill-bar'>
                <div className='info'>
                    <p>CSS</p>
                    <p>90%</p>
                </div>
                <div className='bar'>
                    <span className='css'></span>
                </div>
            </div>
            <div className='skill-bar'>
                <div className='info'>
                    <p>JavaScript</p>
                    <p>80%</p>
                </div>
                <div className='bar'>
                    <span className='javascript'></span>
                </div>
            </div>
            <div className='skill-bar'>
                <div className='info'>
                    <p>React</p>
                    <p>62%</p>
                </div>
                <div className='bar'>
                    <span className='react'></span>
                </div>
            </div>
            </div>
            <div className='skill-right'>
                <h3>Professional Skills</h3>
                <div className='professional'>
                    <div className='outer'>
                        <div className='inner'>
                            <div id='number'>
                            {counter}%
                            </div>
                        </div>
                    </div>

                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                        <defs>
                        <linearGradient id="GradientColor">
                            <stop offset="0%" stop-color="#e91e63" />
                            <stop offset="100%" stop-color="#673ab7" />
                        </linearGradient>
                        </defs>
                        <circle cx="80" cy="80" r="70" stroke-linecap="round" />
                    </svg>    
                    <p>Creativity</p>
                </div>
            </div>
                <div className='professional1'>
                    <div className='outer1'>
                        <div className='inner1'>
                            <div id='number1'>
                            {counter1}%
                            </div>
                        </div>
                    </div>
                    <div className='second'>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                        <defs>
                        <linearGradient id="GradientColor">
                            <stop offset="0%" stop-color="#e91e63" />
                            <stop offset="100%" stop-color="#673ab7" />
                        </linearGradient>
                        </defs>
                        <circle cx="80" cy="80" r="70" stroke-linecap="round" />
                    </svg>
                  </div>
                    <p>Team work</p>
                </div>
                <div className='professional2'>
                    <div className='outer2'>
                        <div className='inner2'>
                            <div id='number2'>
                            {counter2}%
                            </div>
                        </div>
                    </div>
                    <div className='third'>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                        <defs>
                        <linearGradient id="GradientColor">
                            <stop offset="0%" stop-color="#e91e63" />
                            <stop offset="100%" stop-color="#673ab7" />
                        </linearGradient>
                        </defs>
                        <circle cx="80" cy="80" r="70" stroke-linecap="round" />
                    </svg>
                  </div>
                    <p>Communication</p>
                </div>

                <div className='professional3'>
                    <div className='outer3'>
                        <div className='inner3'>
                            <div id='number3'>
                            {counter3}%
                            </div>
                        </div>
                    </div>
                    <div className='last'>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                        <defs>
                        <linearGradient id="GradientColor">
                            <stop offset="0%" stop-color="#e91e63" />
                            <stop offset="100%" stop-color="#673ab7" />
                        </linearGradient>
                        </defs>
                        <circle cx="80" cy="80" r="70" stroke-linecap="round" />
                    </svg>
                  </div>
                    <p>Project Management</p>
                </div>
            </div>
        </div>
  );
};


export default Skills;
