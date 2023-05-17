import React from 'react'
import NavCoordinator from '../../components/Navebar/NavCoordinator'
import Footer from '../../components/Footer/Footer'
import AddVolAttentence from '../../components/Coordinator/AddVolAttentence'

const AddAttentence = () => {
  return (
    <div><NavCoordinator/>
    <AddVolAttentence/>
    <Footer/></div>
  )
}

export default AddAttentence