import React from 'react'
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import Service from './Components/Service'
import About from './Components/About'
import Portfolio from './Components/Portfolio'
import Review from './Components/Review'
import Blog from './Components/Blog'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div>
      <Header/>
      <Service/>
      <About/>
      <Portfolio/>
      <Review/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App
