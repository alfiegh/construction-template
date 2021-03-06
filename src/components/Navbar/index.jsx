import React from 'react';
import { FaBars } from 'react-icons/fa';

import logo from '../../images/logo1.png';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  Logo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
  NavLinksS,
} from './NavbarElements';

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to='/'>
            <Logo src={logo} />
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to='/'>Home</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='/services'>Services</NavLinks>
              {/* <NavLinksS to='/services'></NavLinksS> */}
            </NavItem>
            <NavItem>
              <NavLinks to='/about'>About Us</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='/projects'>Projects</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to='/contact'>Contact</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;

// Nav,
//   NavLink,
//   Logo,
//   Bars,
//   NavMenu,
//   NavBtn,
//   NavBtnLink,

//  <Nav>
//    <NavLink to='/'>
//      <Logo src={require('../../images/logo.png')} alt='logo' />
//    </NavLink>
//    <Bars />
//    <NavMenu>
//      <NavLink to='/about' activeStyle>
//        About
//      </NavLink>
//      <NavLink to='/services' activeStyle>
//        Services
//      </NavLink>
//      <NavLink to='/contact-us' activeStyle>
//        Contact Us
//      </NavLink>
//      <NavLink to='/sign-up' activeStyle>
//        Sign Up
//      </NavLink>
//    </NavMenu>
//    <NavBtn>
//      <NavBtnLink to='/signin'>Sign In</NavBtnLink>
//    </NavBtn>
//  </Nav>;
