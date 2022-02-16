import React from 'react';
import { TeamCardOne, TeamCardTwo, TeamCardThree } from '../cards/TeamCard';

const AboutTeam = () => {
  return (
    <section className='container-fluid' style={{ background: 'black' }}>
      <div className='text-center mb-5' style={{ paddingTop: '5rem' }}>
        <h1 className='text-uppercase fw-bold text-white'>About Us!</h1>
        <h2 style={{ fontWeight: '300', color: 'white' }}>
          More on what we do
        </h2>
        <h3 style={{ fontWeight: '400', color: 'white' }}>
          (and a brief team introduction)
        </h3>
      </div>
      <div className='col-md-8 offset-md-2 text-white'>
        <p>
          Founded in Melbourne in 2021 we are a group of people with extensive
          knowledge on... Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Excepturi, deserunt veritatis, eos officiis odio omnis
          accusantium sunt illo itaque et atque, facere quod nihil earum
          architecto aspernatur nesciunt unde! Asperiores!{' '}
        </p>
        <p>
          That's why we decided to create this company, we are passionate about
          bringing people affordable and high quality solutions... Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Similique voluptatibus ex
          beatae, quae non, explicabo quibusdam porro, fugiat voluptatum
          voluptas et dolorem corrupti id doloremque impedit distinctio!
          Voluptatum, maxime amet.
        </p>
        <p>
          We would be delighted to work with you in providing all our
          knowledge... Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Similique alias, laudantium voluptas at possimus illum magni fugiat
          rerum, ducimus ullam, excepturi dolore quia libero voluptatum. Unde,
          inventore eos. Similique, dolor!
        </p>
        <p>
          And just so you know who you will working with, allow us to present
          you the core team:
        </p>
      </div>
      <div className='container'>
        <div className='row pb-5 d-flex justify-content-center'>
          <div className='col-md-3 mb-3 d-flex justify-content-center'>
            <TeamCardOne />
          </div>
          <div className='col-md-3 mb-3 d-flex justify-content-center'>
            <TeamCardTwo />{' '}
          </div>
          <div className='col-md-3 mb-3 d-flex justify-content-center'>
            <TeamCardThree />{' '}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
