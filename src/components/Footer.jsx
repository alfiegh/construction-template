import React from 'react';

const Footer = () => {
  return (
    <footer className='pt-5 bg-black'>
      <div className='container-fluid'>
        <div className='row'>
          <div
            // style={{ fontWeight: 800, fontSize: '1.5rem' }}
            className='col-md-4 mt-3 display-5 text-white text-center'
          >
            DMH STRUCTURAL
          </div>
          <div
            className='col-md-4 d-flex justify-content-center align-items-center'
            style={{ color: 'white' }}
          >
            <img
              className='img-fluid'
              style={{ maxHeight: '120px' }}
              src={require('../images/logo1.png')}
              alt='Int Design Logo'
            />
          </div>

          <div className='col-md-4 text-white text-center pt-4'>
            <p>Call us on 0000 000 000</p>
            <a href='mailto:yourcompanyname@email.com'>
              <p>company@email.com</p>
            </a>

            <a href='https://alfonsoeg.com'>
              <i className='px-3 bi bi-instagram' />
            </a>
            <a href='https://alfonsoeg.com'>
              <i className='px-3 bi bi-facebook ' />
            </a>
            <a href='https://alfonsoeg.com'>
              <i className='px-3 bi bi-twitter' />
            </a>
            <a href='https://alfonsoeg.com'>
              <i className='px-3 bi bi-pinterest' />
            </a>
          </div>
          <div className='d-flex flex-column text-center pt-4'>
            <p className='text-white'>
              Copyright [Year] [Brand name]. All rights reserved
            </p>
            <p>
              <a href='#'>Terms of Service</a>{' '}
              <a
                style={{ borderLeft: '1px solid white' }}
                className='px-1'
                href='#'
              >
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
        <hr />
      </div>
    </footer>
  );
};

export default Footer;
