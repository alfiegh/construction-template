import React from 'react';
import { RollbackOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const ReturnHome = ({ fn }) => {
  const navigate = useNavigate();

  return (
    <div
      style={{ cursor: 'pointer' }}
      className='col-md-6 offset-md-3 d-flex justify-content-center mb-4'
    >
      <RollbackOutlined className='display-5' onClick={fn} />
      {/* <p className='text-center'>Return Home</p> */}
    </div>
  );
};

export default ReturnHome;
