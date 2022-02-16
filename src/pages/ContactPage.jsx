import React from 'react';
import { Modal } from 'antd';

const ContactPage = () => {
  return (
    <section
      className='container
    '
    >
      <div className='text-center mb-5' style={{ paddingTop: '5rem' }}>
        <h1 className='text-uppercase fw-bold'>Contact Us</h1>
        <h2 style={{ fontWeight: '300', color: 'black' }}>
          We are here for you.
        </h2>
      </div>
      <div
        className='col-md-6 offset-md-3 text-center pt-5'
        style={{ borderTop: '2px solid rgb(73, 161, 243)' }}
      >
        <h3 style={{ fontWeight: 200 }}>We are located in [ADDRESS]</h3>
        <h4 style={{ fontWeight: 200 }}>
          Feel free to give us a call on 0000 000 000
        </h4>
        <p className='mt-5'>
          You can use our contact form to tell us more about your project,
          attach your designs, working drawings and we will get back to you
          shortly.
        </p>
      </div>
      <form className='mt-3 mb-5 col-md-6 offset-md-3'>
        <div className='form-group mb-3'>
          <label className='form-label'>Name</label>
          <input
            type='text'
            className='form-control'
            placeholder='Enter your name'
          />
        </div>

        <div className='form-group mb-3'>
          <label className='form-label'>Email</label>
          <input
            type='email'
            className='form-control'
            placeholder='Enter your email'
          />
        </div>
        <div className='form-group mb-3'>
          <label className='form-label'>Phone</label>
          <input
            type='text'
            className='form-control'
            placeholder='Phone number'
          />
        </div>
        <div className='form-group mb-3'>
          <label htmlFor='comments'>Comments:</label>

          <textarea
            className='container-fluid '
            name='comments'
            cols={90}
            rows={4}
            style={{ resize: 'none', overflow: 'scroll' }}
          ></textarea>
        </div>
        <button
          disabled={!'email' || !'password'}
          className='btn btn-primary container'
        >
          Send
        </button>
      </form>
      <Modal
        title='Message sent!'
        // visible={ok}
        // onCancel={() => setOk(false)}
        footer={null}
      >
        <p> We will get back to you as soon as possible.</p>
      </Modal>
    </section>
  );
};

export default ContactPage;
