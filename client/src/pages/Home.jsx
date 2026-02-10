import React from 'react'
import Banner from '../Components/Home/Banner.jsx'
import Hero from '../Components/Home/Hero.jsx'
import Features from '../Components/Home/Features.jsx'
import Testimonials from '../Components/Home/testimonials.jsx'
import CalltoAction from '../Components/Home/CalltoAction.jsx'
import Footer from '../Components/Home/Footer.jsx'
const Home = () => {
  return (
    <div>
      <Banner />
      <Hero/>
      <Features />
      <Testimonials />
      <CalltoAction/>
      <Footer/>

    </div>
  )
}

export default Home
