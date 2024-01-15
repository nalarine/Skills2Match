import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import { Link } from 'react-router-dom'; // Assuming you're using React Router for the Link component
import { AiFillCloseCircle } from 'react-icons/ai'; // Import AiFillCloseCircle component
import {RxHamburgerMenu} from 'react-icons/rx'
import {ImFacebook} from 'react-icons/im'
import {BsTwitter} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'
import img from '../../images/header.png'
import logo from '../../images/logo2.png'
import target from '../../images/target.png'
import vision from '../../images/vision.png'
import footerimg from '../../images/header.png'
import './AboutPage.css'


import Aos from 'aos'
import 'aos/dist/aos.css'

function AboutPage() {

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
  
//   READ MORE TOGGLE
    const [isExpanded, setIsExpanded] = useState(false);
  
    const toggleReadMore = () => {
      setIsExpanded(!isExpanded);
    };

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
              <a href="/AboutPage" className="navLink">About</a>
            </li>

            <li className="navItem">
              <Link to="/ContactPage" className="navLink">Contact</Link>
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
              Get to Know Us
          </h1>

          <p data-aos="fade-up" data-aos-duration="2500" className="subTitle">
            Discover what drives us, what fuels our passion, and the driving force behind everything we stand for.
          </p>
        </div>

      </div>
  </div>

  {/* HOME SECTION END--------------------------------- */}

  {/* ABOUT US START ---------------------------------- */}

  <div>
      <section>
        <div className="cont">
          <div data-aos="fade-right" data-aos-duration="2000" className="hero-content">
            <h2>Welcome to Skills 2.0 Match</h2>
            <p>
              At Skills 2.0 Match, we believe in the boundless potential of every individual, and we're committed to transforming aspirations into achievements. We're more than just a job portal – we're a catalyst for change, a bridge to opportunities, and a community that empowers Out-of-School Youth (OSY) to navigate their journey towards a brighter future.
              {isExpanded && (
                <>
                  <br />
                  <br />
                  Our story is one of innovation, collaboration, and a shared vision to create a world where educational backgrounds don't define destiny. With the unwavering support of Technological Institute of the Philippines and the partnership of the United States Agency for International Development (USAID), we've embarked on a mission to revolutionize the way OSY candidates access meaningful employment.
                  <br />
                  <br />
                  Our platform isn't just about finding jobs; it's about unlocking potential, nurturing talents, and making dreams achievable. Through cutting-edge technology, personalized guidance, and a commitment to social responsibility, we're here to rewrite the narrative of youth unemployment. Join us as we shape careers, empower lives, and build a stronger future together.
                </>
              )}
            </p>
            <button onClick={toggleReadMore} id="myBtn">
              {isExpanded ? 'Read less' : 'Read more'}
            </button>
          </div>
          <div data-aos="fade-left" data-aos-duration="2500" className="hero-image">
            <img src={logo} alt="" />
          </div>
        </div>
      </section>

      <div className="section">
        <div className="cont1">
          <div className="title">
            <h1 data-aos="fade-up" data-aos-duration="3000">Guiding Principles</h1>
          </div>
        </div>
      </div>

      <div className="wrapper">
        <div data-aos="fade-down" data-aos-duration="3500" className="team">
          <div className="team_mem">
            <div className="team_img">
              <img src={target} alt="" />
            </div>
            <h3>Mission Statement</h3>
            <p className="role">
              Empowering Out-of-School Youth (OSY) by connecting them with meaningful employment opportunities, Skills 2.0 Match is dedicated to fostering a platform where skills meet opportunity. We are committed to addressing the unique challenges faced by OSY candidates and providing them with a pathway to economic independence and personal growth. Through innovative technology, personalized support, and strategic partnerships, we aim to build a community that unlocks potential, nurtures careers, and contributes to a brighter future for all.
            </p>
          </div>
          <div className="team_mem wow fadeInUp" data-wow-delay="0.1s">
            <div className="team_img">
              <img src={vision} alt="" />
            </div>
            <h3>Vision Statement</h3>
            <p className="role">
              Our vision at Skills 2.0 Match is to create a world where every Out-of-School Youth has equal access to opportunities that align with their talents and aspirations. We envision a society where the talents of OSY candidates are recognized and valued, contributing to a thriving workforce and sustainable growth. By pioneering a platform that bridges the gap between skills and job vacancies, we aspire to empower a generation of OSY individuals, transforming their lives and shaping a more inclusive and prosperous future.
            </p>
          </div>
        </div>
      </div>
    </div>

  {/* ABOUT US END ------------------------------------ */}

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
  )
}

export default AboutPage
