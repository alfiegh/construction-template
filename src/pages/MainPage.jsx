import React from 'react';
import Parallax from '../landingSections/Parallax';
import OurServices from '../landingSections/OurServices';
import AboutUs from '../landingSections/AboutUs';
import GalleryMain from '../landingSections/GalleryMain';
import { useState } from 'react';

const MainPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Parallax
        url={require('../../src/images/parallax.jpg')}
        children='DMH Structural'
        subtitle={'Solutions for the construction industry'}
        id='parallaxMain'
      />
      <OurServices id='ourServicesMain' />
      <AboutUs id='aboutUsMain' />
      <GalleryMain id='galleryMain' />
    </>
  );
};

export default MainPage;
