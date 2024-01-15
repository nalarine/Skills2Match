import React, {useEffect} from 'react';
import './about.css';

//import images
import icon1 from '../../images/discover.png'
import icon2 from '../../images/sched.png'
import icon3 from '../../images/success.png'
import about from '../../images/about 1.0.png'

import Aos from 'aos'
import 'aos/dist/aos.css'

const About = () => {

    useEffect(()=>{
        Aos.init({duration: 2000})
      }, [])

  return(
    <div className="about section">
        <div className="secContainer">
            <h2 data-aos="fade-right" data-aos-duration="2000" className="title">
                Join, Work, and Succeed
            </h2>

            <div className="mainContent container grid">
                <div data-aos="fade-up" data-aos-duration="2000" className="singleItem">
                    <img src={icon1} alt="" />

                    <h3>Discover possibilities at every step of your adventure</h3>

                    <p>Embrace the journey of self-discovery as you find your path to a brighter future. Unleash your hidden potential and seize opportunities that will shape the destiny you envision.</p>

                </div>

                <div data-aos="fade-up" data-aos-duration="2500" className="singleItem">
                    <img src={icon2} alt="" />

                    <h3>Take charge of your work schedule, location, and methods.</h3>

                    <p>Empowers individuals with the authority to determine when, where, and how they work, promoting a culture of flexibility and self-determination, ultimately enhancing their work-life balance and productivity.</p>

                </div>

                <div data-aos="fade-up" data-aos-duration="3000" className="singleItem">
                    <img src={icon3} alt="" />

                    <h3>Building Pathways to Success for Out-of-School Youth</h3>

                    <p>Dedicated effort to create structured avenues and support systems for young people who are not currently engaged in formal education, providing them with opportunities and resources to chart a path towards a successful future and brighter prospects.</p>

                </div>

            </div>

            <div className="videoCard container">
                <div className="cardContent grid">

                    <div data-aos="fade-right" data-aos-duration="2000" className="cardText">
                        <h2>Crafting Careers, Inspiring Success</h2>
                        <p>Harness your unique strengths and abilities as you find the tools to build your own future. With each career crafted, you inspire a journey of success that resonates with your individuality.</p>
                    </div>

                    <div data-aos="fade-left" data-aos-duration="2000" className="cardVideo">
                        <img src={about} alt="" />
                    </div>

                </div>
            </div>

        </div>
    </div>
  )
};


export default About;
