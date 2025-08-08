import React from 'react'
import HeroSection from '../components/HeroSection'
import Services from '../components/Services'
import Featuredtherapists from '../components/FeaturedTherapist.jsx'
import CtaSection from '../components/CtaSection.jsx'
import Footer from '../components/FooterSection.jsx'
import BrandShowcase from '../components/BrandShowCase.jsx'


const LandingPage = () => {
  return (
    <div>
      {/* Hero Section */}
      {/* Ensure the HeroSection is at the top of the page */}  
      <HeroSection />
 
      <Services />
      <BrandShowcase />
      <Featuredtherapists />
      <CtaSection />
      <Footer />
    </div>
  )
}

export default LandingPage
