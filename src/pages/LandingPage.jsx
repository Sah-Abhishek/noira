import React from 'react'
import HeroSection from '../components/HeroSection'
import Services from '../components/Services'
import Featuredtherapists from '../components/FeaturedTherapist.jsx'
import CtaSection from '../components/CtaSection.jsx'
import Footer from '../components/FooterSection.jsx'
import HowItWorks from '../components/HowItWorks.jsx'
import Galleryhome from '../components/Galleryhome.jsx'

const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <Services />
      <Galleryhome /> 
      <HowItWorks />
      <Featuredtherapists />
      <CtaSection />
      <Footer />
    </div>
  )
}

export default LandingPage
