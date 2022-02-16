import React from 'react';

const ProjectsCard = ({ url, title, description }) => {
  return (
    <div className='col-md-8 offset-md-2 d-flex justify-content-center flex-column'>
      <div>
        <img
          className='img-fluid'
          //   style={{ maxWidth: '500px' }}
          src={url}
          alt=''
        />
      </div>
      <h3 className='mt-4'>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ProjectsCard;
