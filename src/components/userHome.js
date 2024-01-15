import React from 'react';

const UserHome = ({ userData }) => {
  const logOut = () => {
    // Clear localStorage on logout
    window.localStorage.clear();
    
    // Redirect to the sign-in page
    window.location.href = './sign-in';
  };

  return (
    <div className="navbar-section">
      <div className="navbar-inner">
        <div className="user-details">
          <h1>Welcome, {userData.fname}</h1>
          <p>Email: {userData.email}</p>
        </div>

        <div className="logout-btn">
          <button onClick={logOut} className="btn btn-primary">
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
