import React, {useEffect}  from "react"
import './companies.css'

import { FiMapPin, FiBriefcase, FiLink } from 'react-icons/fi';

//import images
import logo1 from '../../images/dell logo.jpg'
import logo2 from '../../images/accenture logo.png'

import Aos from 'aos'
import 'aos/dist/aos.css'

const list = [
    {
      id: 1,
      name: 'Dell Technologies',
      location: '5th Avenue, Taguig City',
      industry: 'Tech',
      description: 'Dell Inc. is an American based technology company. It develops, sells, repairs, and supports computers and related products and services. Dell is owned by its parent company, Dell Technologies.',
      website: 'https://www.dell.com/en-ph',
      logoUrl: logo1,
      employees: 500,
      founded: 2000,
    },
        {
      id: 1,
      name: 'Accenture',
      location: 'Quezon City',
      industry: 'Call Center',
      description: 'Accenture embraces the power of change to create 360° value and shared success for our clients, people, shareholders, partners and communities.',
      website: 'https://www.accenture.com/ph-en',
      logoUrl: logo2,
    },
    // Add more company objects as needed
  ];

const Companies = () => {

    useEffect(()=>{
        Aos.init({duration: 2000})
      }, [])

    return(
        <section className="offer container section">
            <div className="secContainer">

                <div className="secIntro">
                    <h2 data-aos="fade-right" data-aos-duration="2000" className="secTitle">
                        Explore Our Employer Directory
                    </h2>
                </div>

                <div className="mainContent grid">                 
                    <div data-aos="fade-up" data-aos-duration="2500" className="company-list">
                        {list.map((list) => (
                            <div key={list.id} className="company">
                                <button className="details-button">More Details</button>
                                <img src={list.logoUrl} alt={list.name} className="company-logo" />
                                <div className="company-details">
                                    <h3>{list.name}</h3>
                                    <p>
                                        <FiMapPin className="icon" /> Location: {list.location}
                                    </p>
                                    <p>
                                        <FiBriefcase className="icon" /> Industry: {list.industry}
                                    </p>
                                    <p>
                                        <FiLink className="icon" />{' '}
                                    <a href={list.website} target="_blank" rel="noopener noreferrer">
                                        Visit Website
                                    </a>
                                    </p>
                                    <p className="company-description">{list.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Companies