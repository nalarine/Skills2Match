import React, { useState } from 'react';
import './Create.css';

function CreateProfileModule(props) {
  const [nationality, setNationality] = useState("");
  const [residingIn, setResidingIn] = useState("");
  const [state, setState] = useState("");
  const [jobPosition, setJobPosition] = useState("");
  const [jobLocation, setJobLocation] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const handleNextClick = () => {
    if (currentPage < 3) {
      setCurrentPage(currentPage + 1);
    } else {
      // Redirect to the next page or perform any other action
    }
  };

  const handleCreateAccount = () => {
    // Handle account creation based on the selected user type
    console.log('Creating profile with details:', {
      nationality,
      residingIn,
      state,
      jobPosition,
      jobLocation
    });
  };

  return (
    <div className="auth-wrapper">
      <div className="content-container">
        {/* Blue box with fields */}
        <div className="auth-inner">
          <h2 className="title text-center">
            Leverage your profile,
            magnetize valuable opportunities
            propel your path to success.
          </h2>
          <p className="paragraph text-center text-muted">
            Get connected to various career opportunities.
          </p>
          <div className="details-container">

            <label className="custom-control-label">Nationality</label>
            <select
              className="form-control"
              value={nationality}
              onChange={(e) => setNationality(e.target.value)}
            >
              <option value="country1">Country 1</option>
              <option value="country2">Country 2</option>
            </select>
          </div>
          <div className="details-container">
            <label className="custom-control-label">Currently residing in</label>
            <select
              className="form-control"
              value={residingIn}
              onChange={(e) => setResidingIn(e.target.value)}
            >
              <option value="city1">City 1</option>
              <option value="city2">City 2</option>
            </select>
          </div>

          <div className="details-container">
            <label className="custom-control-label">State</label>
            <select
              className="form-control"
              value={state}
              onChange={(e) => setState(e.target.value)}
            >
              <option value="state1">State 1</option>
              <option value="state2">State 2</option>
            </select>
          </div>

          <div className={`mb-3`}>
            <label className="custom-control-label">Preferred Job Position</label>
            <input
              type="text"
              className="form-control"
              value={jobPosition}
              onChange={(e) => setJobPosition(e.target.value)}
            />
          </div>
          <div className={`mb-3`}>
            <label className="custom-control-label">Preferred Job Location</label>
            <input
              type="text"
              className="form-control"
              value={jobLocation}
              onChange={(e) => setJobLocation(e.target.value)}
            />
          </div>

          <div className="d-grid">
            <button
              onClick={handleNextClick}
              disabled={!nationality || !residingIn || !state || !jobPosition || !jobLocation}
              className="modern-button"
              style={{ backgroundColor: '#86AED1' }}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateProfileModule;
