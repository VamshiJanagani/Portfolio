// Projects.js
import React from 'react';
// Import your CSS file for styling

const Projects = () => {
  return (
    <div className="projects-container">
      <h2 className="projects-heading">My Projects</h2>
      <div className="project">
        <h3>Loan Status Prediction</h3>
        <p>
          In India, the number of people applying for loans has increased for
          various reasons in recent years. The bank employees are not able to
          analyze or predict whether the customer can pay back the amount or
          not (good customer or bad customer) for the given interest rate. The
          aim is to find the nature of the client applying for a personal loan.
        </p>
        <p>
          <strong>Skills used:</strong> Python, Machine learning, HTML, CSS,
          JavaScript
        </p>
      </div>
      <div className="project">
        <h3>Intelligent Handwritten Digit Identification System</h3>
        <p>
          We use Artificial neural networks to train these images and build a
          deep learning model. A web application is created where the user can
          upload an image of a handwritten digit. This image is analyzed by the
          model, and the detected result is returned onto the UI.
        </p>
        <p>
          <strong>Skills used:</strong> Python, Machine Learning, HTML, CSS,
          JavaScript
        </p>
      </div>
    </div>
  );
};

export default Projects;
