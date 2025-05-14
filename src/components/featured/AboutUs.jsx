import React from 'react'
import '../../css/featured/AboutUs.css'
import Header from '../shared/Header'
import Footer from '../shared/Footer'
import Logo from '../../assets/pictures/logo-white.png'
import AboutusHero from '../shared/AboutusHero'
import WhoWeAre from '../shared/WhoWeAre'
import OurCommitment from '../shared/OurCommitment'

const AboutUs = () => {
  return (
    <>
    <Header logo={Logo} page="about"/>
    <AboutusHero/>
    <WhoWeAre/>
    <OurCommitment/>
    <Footer />
    </>
  )
}

export default AboutUs