import React, { useState } from 'react';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';

const ServicesCard = ({ url, alt, title, paragraph }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className='p-1 mb-3 service_card'>
      <div className='d-flex justify-content-center'>
        <img
          style={{
            minHeight: '100px',
            minWidth: '100px',
            height: '220px',
            width: '220px',
            maxWidth: '300px',
            maxHeight: '300px',
            borderRadius: '5px',
            marginTop: '14px',
          }}
          src={url}
          alt={alt}
        />
      </div>

      <hr style={{ height: '5px', color: 'rgb(73, 161, 243)' }} />
      <h3
        onClick={() => setIsActive(!isActive)}
        className='text-uppercase d-flex justify-content-center
         align-items-center'
        style={{ fontWeight: '400', cursor: 'pointer' }}
      >
        {title}{' '}
        <span
          className='d-flex justify-content-center
         align-items-center px-2'
        >
          {isActive ? <MinusOutlined /> : <PlusOutlined />}
        </span>
      </h3>
      {isActive && <p style={{ textAlign: 'center' }}>{paragraph}</p>}
    </div>
  );
};

export default ServicesCard;
