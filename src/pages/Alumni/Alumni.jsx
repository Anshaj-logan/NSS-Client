import React from 'react'
import Hero from '../../components/Hero/Hero'
import NaveAlumni from '../../components/Navebar/NaveAlumni'
import Portfolio from '../../components/Portfolio/Portfolio'
import Footer from '../../components/Footer/Footer'

const Alumni = () => {
  return (
    <div>
        <NaveAlumni />
        <Hero />
        <Portfolio />
        <Footer/>
    </div>
  )
}

export default Alumni