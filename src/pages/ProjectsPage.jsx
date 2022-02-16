import React from 'react';
import ProjectsCard from '../cards/ProjectsCard';
import { useState } from 'react';
import ReturnHome from '../components/ReturnHome';
import { useHref, useNavigate } from 'react-router-dom';

const ProjectsPage = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [btnActive, setBtnActive] = useState(0);

  const navigate = useNavigate();

  const selector = () => {
    switch (currentProject) {
      case 0:
        return (
          <ProjectsCard
            url={require('../images/cad2.png')}
            title={'Tension and measurements'}
            description={
              'For this project we worked with the developer for...Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid earum hic necessitatibus eos laborum sequi incidunt cupiditate praesentium ducimus maxime voluptatum consequatur, veritatis quia, ipsa, velit unde fuga sed quasi!'
            }
          />
        );
      case 1:
        return (
          <ProjectsCard
            url={require('../images/cad3.jpg')}
            title={'Beams modeling for warehouse'}
            description={
              'For this project we worked with the developer for...Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid earum hic necessitatibus eos laborum sequi incidunt cupiditate praesentium ducimus maxime voluptatum consequatur, veritatis quia, ipsa, velit unde fuga sed quasi!'
            }
          />
        );
      case 2:
        return (
          <ProjectsCard
            url={require('../images/cad4.jpg')}
            title={'CAD modeling for Vic Parks'}
            description={
              'For this project we worked with the developer for...Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid earum hic necessitatibus eos laborum sequi incidunt cupiditate praesentium ducimus maxime voluptatum consequatur, veritatis quia, ipsa, velit unde fuga sed quasi!'
            }
          />
        );
      case 3:
        return (
          <ProjectsCard
            url={require('../images/cad5.jpg')}
            title={'CAD Infrastructure'}
            description={
              'For this project we worked with the developer for...Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid earum hic necessitatibus eos laborum sequi incidunt cupiditate praesentium ducimus maxime voluptatum consequatur, veritatis quia, ipsa, velit unde fuga sed quasi!'
            }
          />
        );
    }
  };

  const btnLength = [0, 1, 2, 3];

  const sliderAndBtn = (i) => {
    setCurrentProject(i);
    setBtnActive(i);
  };

  return (
    <section className='container'>
      <div className='text-center mb-5' style={{ paddingTop: '5rem' }}>
        <h1 className='text-uppercase fw-bold'>Projects</h1>
        <h2 style={{ fontWeight: '300', color: 'black' }}>
          Tailored for your needs
        </h2>
        {/* <h3 style={{ fontWeight: '300' }}>(and a brief team introduction)</h3> */}
      </div>
      <div className='col-md-8 offset-md-2' style={{ textAlign: 'justify' }}>
        <p>
          These are somne of the projects we have worked on. We accomodate to
          your needs because we understand every project is different. Click on
          a project for more details:
        </p>

        <ul
          style={{ paddingLeft: '0' }}
          className='d-flex justify-content-evenly '
        >
          {btnLength.map((name, i) => (
            <li key={name}>
              <button
                onClick={() => {
                  sliderAndBtn(i);
                  // setCurrentProject(i);
                  // setBtnActive(!btnActive);
                }}
                className={btnActive === i ? 'active_btn' : 'projects_btns'}
              >
                Project {name + 1}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className='col-md-8 offset-md-2 pb-4index.js'>{selector()}</div>
      {/* <ReturnHome fn={() => navigate('/')} /> */}
    </section>
  );
};

export default ProjectsPage;
