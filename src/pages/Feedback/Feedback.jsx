import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import { Link } from 'react-router-dom'; // Assuming you're using React Router for the Link component
import { AiFillCloseCircle } from 'react-icons/ai';
import { RxHamburgerMenu } from 'react-icons/rx';
import { FaStar } from "react-icons/fa";
import img1 from '../../images/header.png';
import footerimg from '../../images/header.png';
import img2 from '../../photos/logo (3).png';

import Aos from 'aos'
import 'aos/dist/aos.css'

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9"
};

const Feedback = () => {
     // NAVBAR------------------------------------->

  // Define state variables for 'active' and 'transparent'
  const [active, setActive] = useState('navBar');
  const [transparent, setTransparent] = useState('header');

  // Add a useEffect to handle the scroll event
  useEffect(() => {
    const addBg = () => {
      if (window.scrollY >= 10) {
        setTransparent('header activeHeader');
      } else {
        setTransparent('header');
      }
    };
    window.addEventListener('scroll', addBg);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', addBg);
    };
  }, []); // Pass an empty dependency array to ensure it runs only once

  const showNav = () => {
    setActive('navBar activeNavBar');
  };

  const removeNav = () => {
    setActive('navBar');
  };

  // home animation ------------------------>
  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])
  // home animation end ------------------------>

  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0);

  const handleClick = (value) => {
    setCurrentValue(value);
  };

  const handleMouseOver = (newHoverValue) => {
    setHoverValue(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your logic for handling form submission here
    console.log("Form submitted!");
  };

  return (
    <section className='navBarSection'>
      {/* Assuming 'transparent' and 'active' are classes for styling */}
      <div className={transparent}>
        <div className="logoNav">
          <a href="#" className="logo">
            <img src={img1} alt="" />
          </a>
        </div>

        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <Link to="/" className="navLink">Home</Link>
            </li>

            <li className="navItem">
              <a href="/about" className="navLink">About</a>
            </li>

            <li className="navItem">
              <Link to="/contact" className="navLink">Contact</Link>
            </li>

            <div className="headerBtns flex">
              <button className='btn loginBtn'>
                <a href="#">Login</a>
              </button>
            </div>

            <div className="headerBtns flex">
              <button className='btn'>
                <a href="#">Register</a> {/* Fixed the typo 'Regsiter' */}
              </button>
            </div>
          </ul>

          <div onClick={removeNav} className="closeNavbar">
            <AiFillCloseCircle className="icon" />
          </div>
        </div>

        <div onClick={showNav} className="toggleNavbar">
          <RxHamburgerMenu className="icon" />
        </div>
      </div>
<br>
</br>
<br>
</br>
      <div className="auth-wrapper">
        <div className="auth-inner">
          <form onSubmit={handleSubmit}>
            <div className="logoDiv">
              <a href="#" className="logo">
                <img src={img2} alt="" />
              </a>
            </div>
            <div style={styles.container}>
              <h2>Leave a Review</h2>
              <h2>Accuracy</h2>
              <p>How accurate were the job recommendations?</p>
              <div style={styles.stars}>
                {stars.map((_, index) => (
                  <FaStar
                    key={index}
                    size={24}
                    onClick={() => handleClick(index + 1)}
                    onMouseOver={() => handleMouseOver(index + 1)}
                    onMouseLeave={handleMouseLeave}
                    color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
                    style={{
                      marginRight: 10,
                      cursor: "pointer"
                    }}
                  />
                ))}
              </div>
              <br>
              </br>
              <h2>Reliability</h2>
              <p>Did the app successfully match your skills and qualifications with relevant job opportunities?</p>
              <div style={styles.stars}>
                {stars.map((_, index) => (
                  <FaStar
                    key={index}
                    size={24}
                    onClick={() => handleClick(index + 1)}
                    onMouseOver={() => handleMouseOver(index + 1)}
                    onMouseLeave={handleMouseLeave}
                    color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
                    style={{
                      marginRight: 10,
                      cursor: "pointer"
                    }}
                  />
                ))}
              </div>
              <br>
              </br>
              <h2>Security</h2>
              <p>How secure is the app in terms of protecting personal and sensitive information?</p>
              <div style={styles.stars}>
                {stars.map((_, index) => (
                  <FaStar
                    key={index}
                    size={24}
                    onClick={() => handleClick(index + 1)}
                    onMouseOver={() => handleMouseOver(index + 1)}
                    onMouseLeave={handleMouseLeave}
                    color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
                    style={{
                      marginRight: 10,
                      cursor: "pointer"
                    }}
                  />
                ))}
              </div>
              <textarea
                placeholder="What's your experience?"
                style={styles.textarea}
              />

              <button
                style={styles.button}
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
<br>
</br>
<br>
</br>
      {/* FOOTER START ------------------------------------ */}
      <div className="footer">
        <div className="secContainer container grid">
          <div data-aos="fade-up" data-aos-duration="2000" className="logoDiv">
            <div data-aos="fade-up" data-aos-duration="2000" className="footerLogo">
              <a href="#" className="logo">
                <img src={footerimg} alt="" />
              </a>
            </div>
            <div data-aos="fade-up" data-aos-duration="3000" className="socials flex">
              {/* Add your social media icons here */}
            </div>
          </div>

          <div data-aos="fade-up" data-aos-duration="3000" className="footerLinks">
            <span className="linkTitle">
              Quick Links
            </span>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
          </div>

          <div data-aos="fade-up" data-aos-duration="4000" className="footerLinks">
            <span className="linkTitle">
              Quick Links
            </span>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
          </div>

          <div data-aos="fade-up" data-aos-duration="4500" className="footerLinks">
            <span className="linkTitle">
              Contact Us
            </span>
            <span className="phone">(02) 8911 0964</span>
            <span className="email">info@tip.edu.ph</span>
            <span className="address">938 Aurora Blvd, Cubao, Quezon City, Metro Manila, PH</span>
          </div>
        </div>
      </div>
      {/* FOOTER END -------------------------------------- */}
    </section>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  stars: {
    display: "flex",
    flexDirection: "row",
  },
  textarea: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    padding: 10,
    margin: "20px 0",
    minHeight: 100,
    width: 300
  },
  button: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    width: 300,
    padding: 10,
    cursor: "pointer",
    backgroundColor: "#4CAF50",
    color: "white",
    marginTop: 20
  }
};

export default Feedback;
