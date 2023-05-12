import React from 'react'
import Hero from '../../components/Hero/Hero'

import Navebar from '../../components/Navebar/Navebar'
import Portfolio from '../../components/Portfolio/Portfolio'
import Footer from '../../components/Footer/Footer'


const Home = () => {
  return (
    <div>
      <Navebar />
      <Hero/>
      <Portfolio/>
      <Footer/>
     
   
    </div>
  )
}

export default Home