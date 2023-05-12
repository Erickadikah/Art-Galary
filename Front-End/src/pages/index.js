import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { HomeObjOne, HomeObjTwo, HomeObjThree } from '../components/InfoSection/Data';
import Services from '../components/Services';
import Footer from '../components/Footer';
import Sidebar from '../components/Navbar/Sidebar';

const Home = () => {
    const [isOpen, setIsOpen ] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    };

  return (
    <>
  <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...HomeObjOne}/>
      <InfoSection {...HomeObjTwo}/>
      <InfoSection {...HomeObjThree}/>
      <Services />
      <Footer />
    </>
  );
};

export default Home;