import React, {useEffect}  from 'react'
import './categories.css'
import {BsArrowRightShort} from 'react-icons/bs'


//Import images===================
import img19 from '../../images/retail.png'
import img1 from '../../images/customer.jpg'
import img2 from '../../images/food.jpg'
import img3 from '../../images/construction.jpg'
import img4 from '../../images/domestic.png'
import img5 from '../../images/informal.jpg'
import img6 from '../../images/manufacturing.jpg'
import img7 from '../../images/security.jpg'
import img8 from '../../images/delivery.jpg'
import img9 from '../../images/warehouse.jpg'
import img10 from '../../images/childcare.jpg'
import img11 from '../../images/data entry.jpg'
import img12 from '../../images/entrylevel.jpg'
import img13 from '../../images/fitness.jpg'
import img14 from '../../images/event staff.jpg'
import img15 from '../../images/photography.jpg'
import img16 from '../../images/research.jpg'
import img17 from '../../images/social worker.jpg'
import img18 from '../../images/pet.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Data = [
  {
    id: 19,
    imgSrc: img19,
    destTitle: 'Retail and Sales',
    desc:'Jobs involving the sale of products or services to customers, often in stores or online.',
  },
  {
    id: 1,
    imgSrc: img1,
    destTitle: 'Customer Service',
    desc:'Roles dedicated to assisting and resolving customer inquiries to ensure a positive experience.',
  },
  {
    id: 2,
    imgSrc: img2,
    destTitle: 'Food Service and Hospitality',
    desc:'Positions in the food and hospitality industry, where employees provide food, accommodation, and service to guests.',
  },
  {
    id: 3,
    imgSrc: img3,
    destTitle: 'Construction and Manual Labor',
    desc:'Labor-intensive jobs in construction and related fields that require physical work.',
  },
  {
    id: 4,
    imgSrc: img4,
    destTitle: 'Domestic Labor',
    desc:'Household-related occupations, such as cleaning, cooking, and caregiving, usually performed in private residences.',
  },
  {
    id: 5,
    imgSrc: img5,
    destTitle: 'Informal Sector Jobs',
    desc:'Unregulated and often temporary work across various sectors, often without formal contracts or protections.',
  },
  {
    id: 6,
    imgSrc: img6,
    destTitle: 'Manufacturing and Factory Work',
    desc:'Employment in factories and production facilities, involving the assembly or manufacturing of goods.',
  },
  {
    id: 7,
    imgSrc: img7,
    destTitle: 'Security Guard Services',
    desc:'Roles focused on protecting individuals and property through surveillance and security measures.',
  },
  {
    id: 8,
    imgSrc: img8,
    destTitle: 'Delivery Driver',
    desc:'Jobs involving the transportation and delivery of goods to customers or businesses.',
  },
  {
    id: 9,
    imgSrc: img9,
    destTitle: 'Warehouse Worker',
    desc:' Positions responsible for managing and organizing inventory in storage facilities.',
  },
  {
    id: 10,
    imgSrc: img10,
    destTitle: 'Childcare Assistant',
    desc:'Roles in childcare and early childhood education, assisting in caring for and nurturing children.',
  },
  {
    id: 11,
    imgSrc: img11,
    destTitle: 'Data Entry Clerk',
    desc:'Jobs that entail inputting and managing data in computer systems.',
  },
  {
    id: 12,
    imgSrc: img12,
    destTitle: 'Entry-Level Tradesperson',
    desc:'Beginner-level positions in skilled trades like plumbing, electrical work, or carpentry.',
  },
  {
    id: 13,
    imgSrc: img13,
    destTitle: 'Fitness Instructor',
    desc:'Roles centered on leading and guiding fitness and exercise activities.',
  },
  {
    id: 14,
    imgSrc: img14,
    destTitle: 'Event Staff',
    desc:'Workers responsible for various tasks at events, including setup, customer service, and cleanup.',
  },
  {
    id: 15,
    imgSrc: img15,
    destTitle: 'Photography Assistant',
    desc:'Jobs supporting photographers in studios or on-location shoots.',
  },
  {
    id: 16,
    imgSrc: img16,
    destTitle: 'Research Assistant',
    desc:'Positions providing support to researchers in conducting experiments, collecting data, and aiding research projects.',
  },
  {
    id: 17,
    imgSrc: img17,
    destTitle: 'Social Service Aid',
    desc:'Jobs focused on assisting individuals and communities in need, often in social work or counseling contexts.',
  },
  {
    id: 18,
    imgSrc: img18,
    destTitle: 'Pet Caretaker',
    desc:'Roles involving the care and well-being of animals, such as pet sitting and grooming.',
  },
  
]

const Categories = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])


  return (
    <section className='popular section container'>
      <div className="secContainer">

        <div className="secHeader flex">
          <div data-aos="fade-right" data-aos-duration="2500" className="textDiv">
            <h2 className="secTitle">
            You deserve to love your job – let's find it.
            </h2>
          </div>
        </div>

        <div className="mainContent grid">
          {
            Data.map(({id,imgSrc,destTitle,desc,})=>{
              return(
                <div data-aos="fade-up" className="singleDestination">
                  <div className="destImage">

                    <img src={imgSrc} alt="TitleImage" />

                      <div className="overlayInfo">
                        <h3>{destTitle}</h3>
                        <p>
                          {desc}
                        </p>

                        <BsArrowRightShort className="icon"/>

                      </div>

                  </div>

                  <div className="destFooter">
                    

                    <div className="destText flex">
                      <h6>
                        {destTitle}
                      </h6>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>

      </div>
    </section>
  )
}

export default Categories