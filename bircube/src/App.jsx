import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Technoles from '../components/Technoles'
import Projects from '../components/Projects'
import Contect from '../components/Contect'
import Footer from '../components/Footer'

const App = () => {
  return (
    <div className='dark:bg-[#151515] dark:text-white'>
      <div className='sticky top-0'>
      <Navbar />
      </div>
      <Hero />
      <Technoles />
      <Projects />
      <Contect />
      <Footer />
    </div>
  )
}

export default App