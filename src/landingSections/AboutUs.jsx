import React from 'react';
import { ArrowRightOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const AboutUs = () => {
  let navigate = useNavigate();
  return (
    <section style={{ background: 'black' }}>
      <div className='text-center mb-5' style={{ paddingTop: '5rem' }}>
        <h1 className='text-uppercase fw-bold text-white'>About Us</h1>
        <h2 className='text-white' style={{ fontWeight: '300' }}>
          Our process
        </h2>
      </div>

      <div>
        <div className='row1-container'>
          <div className='square box-down cyan'>
            <h2>Working Together</h2>
            <p>
              We offer an end-to-end client experience that includes seamless
              communication, and solid, quality handiwork every time.
            </p>
            {/* <img
              src='https://assets.codepen.io/2301174/icon-supervisor.svg'
              alt
            /> */}
          </div>
          <div className='square red'>
            <h2>What we do</h2>
            <p>
              Produce structural steel shop and erection drawings for
              fabricators, contractors, builders and architectural firms.
            </p>
            {/* <img
              src='https://assets.codepen.io/2301174/icon-team-builder.svg'
              alt
            /> */}
          </div>
          <div className='square box-down blue'>
            <h2>Why Choose Us?</h2>
            <p>
              We are experienced team of engineers and BIM drafters who
              integrate their knowledge to ensure cost effective solutions.
            </p>
            {/* <img
              src='https://assets.codepen.io/2301174/icon-calculator.svg'
              alt
            /> */}
          </div>
        </div>
        <div className='row2-container'>
          <div className='square orange'>
            <h2>Quality Assurance</h2>
            <p>
              We aim to provide work that meet the highest quality above
              industry standards and deliver projects in a timely fashion.
            </p>
            {/* <img src='https://assets.codepen.io/2301174/icon-karma.svg' alt /> */}
          </div>
        </div>
      </div>
      <div className='d-flex justify-content-center'>
        <button
          onClick={() => navigate('/about')}
          style={{
            width: 'auto',
            border: '1px solid white',
            borderRadius: '20px',
            fontWeight: '400',
            fontSize: '22px',
          }}
          className='btn text-uppercase m-5 hover_effect text-white'
        >
          {' '}
          Meet the team
          <ArrowRightOutlined
            className='fw-bold text-white px-2
        d-inline-flex justify-content-center align-items-center'
          />
        </button>
      </div>
    </section>
  );
};

export default AboutUs;
