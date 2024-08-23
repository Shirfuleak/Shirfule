import React from 'react'
import Banner from '../assests/images/banner.jpg'
import './Home.css'
const Home = () => {
  return (
    <div>
         <div className="banner">
        <img src={Banner} alt="Banner" className="banner-image" />
        <div className="banner-heading">
          <h1>Welcome to Shirfule Farms</h1>
        </div>
        </div>
    </div>
  )
}

export default Home