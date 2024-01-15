import React, {useEffect} from 'react'
import './footer.css'
import {ImFacebook} from 'react-icons/im'
import {BsTwitter} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'

//import images
import footerimg from '../../images/header.png'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])

  return (
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
            <a href="AboutPage">About</a>
          </li>
          <li>
            <a href="ContactPage">Contact</a>
          </li>
          <li>
            <a href="Feedback">Feedback</a>
          </li>
        </div>

        <div data-aos="fade-up" data-aos-duration="4000" className="footerLinks">
          <span className="linkTitle">
            Quick Links
          </span>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Terms & Conditions</a>
          </li>
        </div>
        
        <div data-aos="fade-up" data-aos-duration="5000" className="footerLinks">
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
  )
}

export default Footer