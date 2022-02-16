import React from 'react';

const ServicesCardHover = ({ url, alt, title, content }) => {
  return (
    <div>
      <a className='card'>
        <img src={url} className='card__image' alt={alt} />
        <div className='card__overlay'>
          <div className='card__header'>
            <svg className='card__arc' xmlns='http://www.w3.org/2000/svg'>
              <path />
            </svg>
            <div className='card__header-text'>
              <h3 className='card__title'>{title}</h3>
            </div>
          </div>
          <p className='card__description'>{content}</p>
        </div>
      </a>
    </div>
  );
};

export default ServicesCardHover;
