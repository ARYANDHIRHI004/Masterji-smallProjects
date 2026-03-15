import React from 'react'
import HeroSection from '../components/HeroSection'
import FooterSection from '../components/FooterSection'
import Navbar from '../components/Navbar'
import Items from './Items'
import AllItems from './AllItems'
import BentoGrid from '../components/BentoGrid'

const LandingPage = () => {
  return (
    <>
        <Navbar />
        <HeroSection />
        <Items/>
        <AllItems/>
        <BentoGrid/>
        <FooterSection />
    </>
  )
}

export default LandingPage