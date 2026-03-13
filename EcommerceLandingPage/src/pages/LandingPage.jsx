import React from 'react'
import HeroSection from '../components/HeroSection'
import FooterSection from '../components/FooterSection'
import Navbar from '../components/Navbar'
import Items from './Items'
import AllItems from './AllItems'

const LandingPage = () => {
  return (
    <>
        <Navbar />
        <HeroSection />
        <Items/>
        <AllItems/>
        <FooterSection />
    </>
  )
}

export default LandingPage