import React, {useState, useEffect, useContext} from 'react'

import Navbar from '../components/interface/navbar/Navbar'
import Footer from '../components/interface/footer/Footer'
import CardsList from '../components/CardsList'


function Home() {

  return (
    <>
      <Navbar />
      <CardsList />
      <Footer />
    </>
  )
}

export default Home