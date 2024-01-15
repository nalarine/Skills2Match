import React, { useState } from 'react';
import './Create.css';

import iconEmployer from '../images/icon-employer.png'; 
import iconRecruit from '../images/icon-recruit.png'; 

function Create() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleCreateAccount = () => {
    if (selectedOption === 'employer') {
      // Handle employer account creation
      console.log('Creating employer account...');
      // Redirect to employer login page
      window.location.href = '/client-login'; // Replace with the actual route for employer login
    } else if (selectedOption === 'applicant') {
      // Handle applicant account creation
      console.log('Creating applicant account...');
      // Redirect to applicant login page
      window.location.href = '/sign-in'; // Replace with the actual route for applicant login
    }
    // You can perform additional logic or actions here if needed
  };

  return (
    <div className="create-container">
      <div className="background-layer"></div>
      <div className="content-container">
        <div className="custom-rectangle-container">
          <div className={`custom-rectangle green ${selectedOption === 'employer' ? 'selected' : ''}`}>
            <div className="custom-radiobox-container">
              <input
                type="radio"
                name="userType"
                id="employerRadio"
                checked={selectedOption === 'employer'}
                onChange={() => handleOptionChange('employer')}
                className="custom-control-input"
              />
              <img
                src={iconRecruit}
                alt="Briefcase Icon"
                className="icon-image"
              />
              <label htmlFor="employerRadio" className="custom-control-label">
                I'm an Employer, Hiring for my Company
              </label>
            </div>
          </div>
          <div className={`custom-rectangle green ${selectedOption === 'applicant' ? 'selected' : ''}`}>
            <div className="custom-radiobox-container">
              <input
                type="radio"
                name="userType"
                id="applicantRadio"
                checked={selectedOption === 'applicant'}
                onChange={() => handleOptionChange('applicant')}
                className="custom-control-input"
              />
              <img
                src={iconEmployer}
                alt="User Icon"
                className="icon-image"
              />
              <label htmlFor="applicantRadio" className="custom-control-label">
                I'm an Applicant, Looking for a Job
              </label>
            </div>
          </div>
        </div>
        <div className="bottom-text left-text">
          <p>Join as Client or Applicant</p>
        </div>
        <div className="button-container">
          <button
            onClick={handleCreateAccount}
            disabled={!selectedOption}
            className="modern-button"
          >
            {selectedOption === 'employer' ? 'Join as a Client' : 'Join as an Applicant'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Create;
