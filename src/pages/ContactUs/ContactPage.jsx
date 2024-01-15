import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import { Link } from 'react-router-dom'; // Assuming you're using React Router for the Link component
import { AiFillCloseCircle } from 'react-icons/ai'; // Import AiFillCloseCircle component
import {RxHamburgerMenu} from 'react-icons/rx'
import { HiOutlineMail, HiOutlineLocationMarker, HiOutlinePhone } from 'react-icons/hi';
import {ImFacebook} from 'react-icons/im'
import {BsTwitter} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'
import img from '../../images/header.png'
import footerimg from '../../images/header.png'
import './ContactPage.css'

import Aos from 'aos'
import 'aos/dist/aos.css'

const ContactPage = () => {

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

  return (
    <section className='navBarSection'>
      <div className={transparent}>
        <div className="logoNav">
          <a href="#" className="logo">
            <img src={img} alt="" />
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
    
    {/* // END OF NAVBAR -------------------------------------------

    // HOME SECTION--------------------------------------------- */}

    <div className='home'>
      <div className="secContainer container">

        <div className="homeText">

          <h1 data-aos="fade-up" className="title">
              Navigate to Our Inbox
          </h1>

          <p data-aos="fade-up" data-aos-duration="2500" className="subTitle">
            We look forward to hearing from you and addressing your needs—stay connected with us!
          </p>
        </div>

      </div>
  </div>

  {/* HOME SECTION END--------------------------------- */}

  {/* CONTACT PAGE START ------------------------------ */}

    <div className="contact-container">
      <div data-aos="fade-up" data-aos-duration="2000" className="message-form">
        <h2>Contact Form</h2>
        <form>
          <div className="form-field">
            <input type="text" placeholder="First Name" />
          </div>
          <div className="form-field">
            <input type="text" placeholder="Last Name" />
          </div>
          <div className="form-field">
            <input type="email" placeholder="Email Address" />
          </div>
          <div className="form-field">
            <input type="tel" placeholder="Mobile Number" />
          </div>
          <div className="form-field">
            <textarea placeholder="Message" />
          </div>
          <div className="form-field">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
      <div className="contact-info-map">
        <div data-aos="fade-right" data-aos-duration="2500" className="contact-info">
          <h1>Contact Us</h1>
          <div className="info-item">
            <HiOutlineMail className="icon" />
            <p>info@tip.edu.ph</p>
          </div>
          <div className="info-item">
            <HiOutlineLocationMarker className="icon" style={{fontSize: 1}} />
            <p>938 Aurora Blvd, Cubao, Quezon City, Metro Manila, Philippines</p>
          </div>
          <div className="info-item">
            <HiOutlinePhone className="icon" />
            <p>(123) 456-7890</p>
          </div>
        </div>
        <div data-aos="fade-right" data-aos-duration="3000" className="map">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.5310646710013!2d121.05914687400974!3d14.625768976462146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b796aecb8763%3A0xaa026ea7350f82e7!2sTechnological%20Institute%20of%20the%20Philippines%20-%20Quezon%20City!5e0!3m2!1sen!2sph!4v1693490583960!5m2!1sen!2sph"
            allowFullScreen
          />
        </div>
      </div>
    </div>

  {/* CONTACT PAGE END -------------------------------- */}

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
            <ImFacebook className="icon"/>
            <BsTwitter className="icon"/>
            <AiFillInstagram className="icon"/>
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
            <a href="#">Aout</a>
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
            <a href="#">Aout</a>
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
          <span className="address">938 Aurora Blvd, Cubao, Quezon City, Metro Manila, PH

</span>
        </div>

      </div>
    </div>

  {/* FOOTER END -------------------------------------- */}

  </section>

    // HOME SECTION END--------------------------------------------->

  );
};

export default ContactPage;
