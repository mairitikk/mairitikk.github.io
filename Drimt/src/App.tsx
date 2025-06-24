//import React from 'react'
import Navbar from './components/navbar/navbar'
import Hero from './components/hero/hero'
import About from './components/about/about'
import Services from './components/services/services'
import MyWork from './components/mywork/mywork'
import Contact from './components/contact/contact'

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Services></Services>
      <MyWork></MyWork>
      <Contact></Contact>
    </div>
  )
}

export default App
