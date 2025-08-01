import React, { useEffect } from 'react'
import HeroSection from './HeroSection'
import Service from './Service'
import AboutSection from './AboutSection'
import Popular__Departments from './Popular__Departments'
import Offers from './Offers'
import Team from './Team'
import ContactUs from './ContactUs'




const LandingPage = () => {


  return (
    <>
      <HeroSection />
      <Service />
      <AboutSection />
      <Popular__Departments isHomePage={true} />
      <Offers />
      <Team />
      <ContactUs />
    </>
  )
}

export default LandingPage

