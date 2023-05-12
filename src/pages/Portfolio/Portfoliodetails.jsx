import React from 'react'

import Portfolioheading from '../../components/Portfolio/Portfolioheading'
import Portfolioimage from '../../components/Portfolio/Portfolioimage'


const Portfoliodetails = () => {
  return (
    <div>
        <main id="main">
  
  <section id="breadcrumbs" className="breadcrumbs">
    <Portfolioheading/>
  </section>

  <section id="portfolio-details" className="portfolio-details">
    <Portfolioimage/>
  </section>


</main>

    </div>
  )
}

export default Portfoliodetails