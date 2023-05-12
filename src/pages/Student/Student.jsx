import React from 'react'
import Hero from '../../components/Hero/Hero'
import Portfolio from '../../components/Portfolio/Portfolio'
import NaveStudent from '../../components/Navebar/NaveStudent'
import Footer from '../../components/Footer/Footer'

const Student = () => {
  return (
    <div>
        <NaveStudent />
        <Hero />
        <Portfolio />
        <Footer/>
    </div>
  )
}

export default Student