import React from 'react'
import Navbar from '../component/Navbar'
import Hero from '../component/Hero'
import AboutUs from '../component/AboutUs'
import { Skills } from '../component/Skills'
import Timeline from '../component/Timeline'
import ContactUs from '../component/ContactUs'
import Projects from '../component/Projects'

const Home = () => {
  return (
    <div className='bg-neutral-900'>
      <Navbar/>
      <Hero/>
      <AboutUs/>
      <Skills/>
      <Timeline/>
      <Projects/>
      <ContactUs/>
    </div>
  )
}

export default Home
