import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { ArrowRightOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const GalleryMain = () => {
  const navigate = useNavigate();
  return (
    <section href='gallerry' className='container'>
      <div className='text-center mb-5' style={{ paddingTop: '5rem' }}>
        <h1 className='text-uppercase fw-bold'>Gallery</h1>
        <h2 className='text-black' style={{ fontWeight: '300' }}>
          Some of our work
        </h2>
      </div>
      <div className='col-md-8 offset-md-2'>
        <Carousel showArrows={true}>
          <div>
            <img src={require('../images/cad2.png')} alt='' />
          </div>
          <div>
            <img src={require('../images/cad3.jpg')} alt='' />
          </div>
          <div>
            <img src={require('../images/cad7.png')} alt='' />
          </div>
          <div>
            <img src={require('../images/cad4.jpg')} alt='' />
          </div>
          <div>
            <img src={require('../images/cad5.jpg')} alt='' />
          </div>
          <div>
            <img src={require('../images/cad6.png')} alt='' />
          </div>
        </Carousel>
      </div>
      <div className='d-flex justify-content-center'>
        <button
          onClick={() => navigate('/projects')}
          style={{
            width: 'auto',
            border: '1px solid rgb(73, 161, 243)',
            borderRadius: '20px',
            fontWeight: '400',
            fontSize: '22px',
          }}
          className='btn text-uppercase m-5 hover_effect text-black '
        >
          {' '}
          our projects
          <ArrowRightOutlined
            className='fw-bold text-black px-2
        d-inline-flex justify-content-center align-items-center'
          />{' '}
        </button>
      </div>
    </section>
  );
};

export default GalleryMain;
