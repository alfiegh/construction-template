import React from 'react';
import ServicesCard from '../cards/ServicesCard';
import { ArrowRightOutlined } from '@ant-design/icons';
import ServicesCardHover from '../cards/ServicesCardHover';
import { Link, useNavigate } from 'react-router-dom';

const OurServices = () => {
  let navigate = useNavigate();
  return (
    <section className='container-fluid box_arrow bottom_arrow '>
      <div className='text-center mb-5' style={{ paddingTop: '5rem' }}>
        <h1 className='text-uppercase fw-bold'>Wide range of services</h1>
        <h2 style={{ fontWeight: '300', color: 'black' }}>
          To meet all your needs
        </h2>
      </div>
      <div className='row d-flex justify-content-evenly mb-5 landing_services_firstThree'>
        <div className='col-md-3 mb-2 '>
          <ServicesCardHover
            url={require('../images/shopDrawings.jpg')}
            alt='shop drawings'
            title={'drawings'}
            content='We provide all drawings neccesary according to your project.'
          />
        </div>
        <div className='col-md-3 mb-2'>
          <ServicesCardHover
            url={require('../images/3dmodel.jpg')}
            alt='3d model'
            title={'3d modeling'}
            content='For a professional preview and analysis of the structure.'
          />
        </div>
        <div className='col-md-3 mb-2'>
          <ServicesCardHover
            url={require('../images/boltplans.jpg')}
            alt='bolt plans'
            title={'Bolt plans '}
            content='That meet industry standards and accomodate your needs.'
          />
        </div>
      </div>
      <div className='row d-flex justify-content-evenly'>
        <div className='col-md-3 mb-2 '>
          <ServicesCardHover
            url={require('../images/plansElevations.jpg')}
            alt='plans and elevations'
            title={'elevations'}
            content='Designed by our in-house architect for a streamlined process.'
          />
        </div>
        <div className='col-md-3 mb-2'>
          <ServicesCardHover
            url={require('../images/partsDrawing.jpg')}
            alt='parts drawings'
            title={'Assembly'}
            content='Parts drawing for correct assembling of the required structures.'
          />
        </div>
        <div className='col-md-3 mb-2'>
          <ServicesCardHover
            url={require('../images/reports.jpg')}
            alt='reports'
            title={'reports'}
            content='We provide all reports in standarised industry formats.'
          />
        </div>
      </div>
      <div className='d-flex justify-content-center'>
        <button
          onClick={() => navigate('/services')}
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
          Learn more
          <ArrowRightOutlined
            className='fw-bold text-black px-2
        d-inline-flex justify-content-center align-items-center'
          />{' '}
        </button>
      </div>
    </section>
  );
};

export default OurServices;
