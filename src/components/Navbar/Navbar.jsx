import React, { useState, useEffect } from 'react';
import AdminHome from '../adminHome'; // Import the AdminHome component
import UserHome from '../userHome'; // Import the UserHome component
import './navbar.css';
import { AiFillCloseCircle } from 'react-icons/ai';
import { RxHamburgerMenu } from 'react-icons/rx';

// Import images
import img from '../../images/header.png';

const Navbar = () => {
  const [userData, setUserData] = useState(null);
  const [admin, setAdmin] = useState(false);
  const [active, setActive] = useState('navBar');
  const [transparent, setTransparent] = useState('header');

  const showNav = () => {
    setActive('navBar activeNavBar');
  };

  const removeNav = () => {
    setActive('navBar');
  };

  const addBg = () => {
    if (window.scrollY >= 10) {
      setTransparent('header activeHeader');
    } else {
      setTransparent('header');
    }
  }

  window.addEventListener('scroll', addBg)


  useEffect(() => {
    // Fetch user data
    fetch('http://localhost:5000/userData', {
      method: 'POST',
      crossDomain: true,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        token: window.localStorage.getItem('token'),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, 'userData');
        if (data.data.userType === 'Admin') {
          setAdmin(true);
        }

        setUserData(data.data);

        if (data.data === 'token expired') {
          alert('Token expired login again');
          window.localStorage.clear();
          window.location.href = './sign-in';
        }
      });
  }, []);

  const logOut = () => {
    window.localStorage.clear();
    window.location.href = './sign-in';
  };

  return (
    <section className='navBarSection'>
     <div className={transparent}>
     
        <div className="logoNav">
          <a href="/Main" className="logo">
            <img src={img} alt="" />
          </a>
        </div>

        {userData ? (
          admin ? (
            <AdminHome />
          ) : (
            <div className={active}>
            <ul className="navLists flex">
            <li className="navItem">
              <h2>Welcome, {userData.fname}</h2>
              </li>
              
            <li className="navItem">
              <button onClick={logOut} className="btn btn-primary">
                Log Out
              </button>
              </li>
              </ul>
              </div>
          )
        ) : (
          <div className={active}>
            <ul className="navLists flex">
              <li className="navItem">
                <a href="#" className="navLink">
                  Home
                </a>
              </li>

              <li className="navItem">
                <a href="/AboutPage" className="navLink">
                  About
                </a>
              </li>

              <li className="navItem">
                <a href="/ContactPage" className="navLink">
                  Contact
                </a>
              </li>

              <div className="headerBtns flex">
                <button className="btn loginBtn">
                  <a href="/Create">Login</a>
                </button>
              </div>

              <div className="headerBtns flex">
                <button className="btn registerBtn">
                  <a href="sign-up">Register</a>
                </button>
              </div>
            </ul>

            <div onClick={removeNav} className="closeNavbar">
              <AiFillCloseCircle className="icon" />
            </div>
          </div>
        )}

        <div onClick={showNav} className="toggleNavbar">
          <RxHamburgerMenu className="icon" />
        </div>
      </div>
    </section>
  );
};

export default Navbar;
