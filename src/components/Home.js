import React from 'react'
import Footer from './Footer'
import NavBar from './NavBar'
import heroImage from '../assets/restauranfood.jpg'

const HeroSection = () => {
  return (
    <section className='hero-section'>
      <div className='hero-details'>
        <div className='hero-title'>Little Lemon</div>
        <div className='hero-address'>Chicago</div>
        <div className='hero-subtitle'>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </div>
        <button className='hero-button'>Reserve a Table</button>
      </div>
      <img className='hero-image' src={heroImage} alt='Restaurant Food' />
    </section>
  )
}

const Home = () => {
  return (
    <>
      <header></header>
      <NavBar />
      <main>
        <HeroSection />
      </main>
      <Footer />
    </>
  )
}

export default Home
