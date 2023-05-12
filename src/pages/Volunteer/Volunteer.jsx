import React from 'react'
import Hero from '../../components/Hero/Hero'
import NaveVolunteer from '../../components/Navebar/NaveVolunteer'
import Portfolio from '../../components/Portfolio/Portfolio'
import Footer from '../../components/Footer/Footer'

const Volunteer = () => {
  return (
    <div>
        <NaveVolunteer/>
        <Hero/>
        <Portfolio/>
        <Footer/>
    </div>
  )
}

export default Volunteer