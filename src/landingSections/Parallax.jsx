import Fade from 'react-reveal/Fade';
import Rotate from 'react-reveal/Rotate';

const Parallax = ({ url, children, subtitle }) => {
  return (
    <div
      className='container-fluid box top_arrow'
      style={{
        background:
          'linear-gradient(rgba(0,0,0,0.3) 20%, rgba(0,0,0,0.3) 100%), url( ' +
          url +
          ' ) center center / cover no-repeat',

        backgroundAttachment: 'fixed',
        padding: '100px 0px 75px 0px',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        display: 'block',
        height: '100vh',
        width: '100%',
        whiteSpace: 'nowrap',
      }}
    >
      <Rotate top left>
        <h1
          style={{
            textShadow: '2px 2px 2px black',
            fontWeight: '600',
            textTransform: 'uppercase',
          }}
          className='parallax_text_main display-1 text-white position-absolute top-50 start-50 translate-middle'
        >
          {children}
        </h1>
      </Rotate>
      <Fade bottom>
        <h2
          style={{
            textShadow: '2px 2px 2px black',
            display: 'flex',
            justifyContent: 'center',
          }}
          className='parallax_subtitle text-white position-relative top-50 start-50 translate-middle'
        >
          {subtitle}
        </h2>
      </Fade>
    </div>
  );
};

export default Parallax;
