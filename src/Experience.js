// Experience.js
import React from 'react';
// Import your CSS file for styling

const Experience = () => {
  return (
    <div className="experience-container">
      <h2 className="experience-heading">My Experience</h2>
      <div className="experience">
        <h3>Project Trainee</h3>
        <p>
          <span className="date">March 2022 - August 2022</span>
          <br />
          Bitwise Solutions Private Limited
        </p>
        <p>
          Worked with other team members in establishing and sharing design and development techniques of the ETL process. Supported other ETL developers; technical assistance, troubleshooting and alternative development solutions. Worked on ETL tools like Control - Workload Automation to manage and monitor jobs.
        </p>
      </div>
      <div className="experience">
        <h3>Cloud Infrastructure-As-A-Service (IAAS) - Associate</h3>
        <p>
          <span className="date">October 2022 - Present</span>
          <br />
          Hitachi Vantara
        </p>
        <p>
        I've engaged in diverse projects that demanded collaborative excellence. As a Front-End Developer, I fostered teamwork between front-end and back-end teams to deliver seamless user interfaces. Currently, as a SOC Engineer, I've embarked on a cybersecurity adventure, actively managing security alerts from SIEM consoles and various sources. This role has deepened my expertise in cybersecurity, emphasizing the significance of proactive vigilance. These experiences collectively enriched my skill set and contributed to my professional journey at Hitachi Vantara.
        </p>
      </div>
    </div>
  );
};

export default Experience;
