import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import BenefitsSection from '../components/BenefitsSection';
import FaqSection from '../components/FaqSection';
import DomoticsBenefits from '../components/DomoticsBenefits';
import ContactForm from '../components/ContactForm';


const Home = () => (
  <div>
    <HeroSection />
    <FeaturesSection />
    <BenefitsSection />
    <DomoticsBenefits />
    <FaqSection />
    <ContactForm />
  </div>
);

export default Home;
