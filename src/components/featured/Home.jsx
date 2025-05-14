import React from 'react'
import '../../css/featured/Home.css'
import Header from '../shared/Header'
import Logo from '../../assets/pictures/logo-black.png'
import HeroSec from '../shared/HeroSec'
import Overview from '../shared/Overview'
import WhatWePromise from '../shared/WhatWePromise'
import Ancors from '../shared/Ancors'
import Footer from '../shared/Footer'
import CountrySlider from '../shared/CountrySlider'

const Home = () => {
  return (
    <>
    <Header logo={Logo} page="home"/>
    <HeroSec />
    <Overview/>
    <WhatWePromise/>
    <Ancors/>
    <CountrySlider/>
    <Footer/>
    </>
  )
}

export default Home