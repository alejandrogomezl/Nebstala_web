import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import BenefitsSection from '../components/BenefitsSection';
import FaqSection from '../components/FaqSection';
import DomoticsBenefits from '../components/DomoticsBenefits';
import ContactSection from '../components/ContactSection';


const Home = () => (
  <div>
    <HeroSection />
    <FeaturesSection />
    <BenefitsSection />
    <DomoticsBenefits />
    <FaqSection />
    <ContactSection />
  </div>
);

export default Home;
