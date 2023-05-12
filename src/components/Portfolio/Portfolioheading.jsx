import React from 'react'
import { Link } from 'react-router-dom'

const Portfolioheading = () => {
  return (
    <div className="container">
  <div className="d-flex justify-content-between align-items-center">
    <h2>Portfolio Details</h2>
    <ol>
      <li>
        <Link to={'/home'}><a href="">Home</a></Link>
      </li>
      <li>Portfolio Details</li>
    </ol>
  </div>
</div>

  )
}

export default Portfolioheading