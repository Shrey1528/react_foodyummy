import React,{useEffect} from 'react'
import Footer from './Components/Footer'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import Newsletter from './Components/Newsletter'
import Portfolio from './Components/Portfolio'
import Products from './Components/Products'
import ScrollToTop from './Components/ScrollToTop'
import Services from './Components/Services'
import Testimonials from './Components/Testimonials'
import ScrollReveal from 'scrollreveal'

export default function App() {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: false,
    });
    sr.reveal(
      `
        nav,
        #home,
        #services,
        #portfolio,
        #testimonials,
        #products,
        #newsletter,
        .footer
    `,
      {
        opacity: 0,
        interval: 200,
      }
    );
  },[])
  return (
  <>
    <ScrollToTop />
    <Navbar />
    <Hero />
    <Services />
    <Portfolio />
    <Testimonials />
    <Products />
    <Newsletter />
    <Footer />
  </>
  )
}

