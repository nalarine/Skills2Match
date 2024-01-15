import React, {useEffect} from 'react'
import './home.css'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])

  return (
    <section className='home'>
      <div className="secContainer container">

        <div className="homeText">

          <h1 data-aos="fade-up" className="title">
              Connecting Potential with Possibilities
          </h1>

          <p data-aos="fade-up" data-aos-duration="2500" className="subTitle">
            Bridging Dreams and Career for Every Youth
          </p>

          <button data-aos="fade-up" data-aos-duration="3000" className="btn">
            <a href="#">Match Job</a>
          </button>
        </div>

        <div className="homeCard grid">

          <div data-aos="fade-right" data-aos-duration="2000" className="locationDiv">
            <label htmlFor="location">Keyword</label>
            <input type="text" placeholder='Keyword'/>
          </div>

          <div data-aos="fade-right" data-aos-duration="2500" className="distDiv">
            <label htmlFor="distance">Categories</label>
            <input type="text" placeholder='Categories'/>
          </div>

          <div data-aos="fade-right" data-aos-duration="3000" className="priceDiv">
            <label htmlFor="price">Location</label>
            <input type="text" placeholder='Location'/>
          </div>

          <button data-aos="fade-left" data-aos-duration="2000" className='btn'>
            Search
          </button>

        </div>
      </div>
    </section>
  )
}

export default Home