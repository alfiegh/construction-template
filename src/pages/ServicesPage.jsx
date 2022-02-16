import React from 'react';
import ReturnHome from '../components/ReturnHome';

const ServicesPage = () => {
  return (
    <section className='container'>
      <div className='text-center mb-5' style={{ paddingTop: '5rem' }}>
        <h1 className='text-uppercase fw-bold'>Services we provide</h1>
        {/* <h2 style={{ fontWeight: '300' }}>To meet all your needs</h2> */}
      </div>
      <div className='col-md-6 offset-md-3 '>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          reprehenderit placeat quibusdam vero ipsam dolore voluptas blanditiis
          laudantium expedita? Fugit corrupti ad quasi iste expedita maiores
          dolorum sequi cum similique!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
          commodi quasi deserunt omnis at molestias ipsa nostrum itaque quaerat!
          Architecto sapiente beatae suscipit molestiae nam exercitationem alias
          vitae deserunt inventore?
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          fuga doloribus ipsa vitae. Perferendis consequuntur adipisci vero
          quibusdam labore, tempore iure reprehenderit vitae corrupti numquam
          ducimus eaque dolore id illo.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia non
          a quia delectus! Dicta, reiciendis. Odio voluptatum nostrum fugit
          excepturi veniam assumenda sequi provident. Similique voluptatem
          veritatis nisi alias perspiciatis:
        </p>
      </div>
      <div className='col-md-6 offset-md-3'>
        <ul>
          <li> Shop & site drawings</li>
          <li>3D modelling </li>
          <li>HD bolt plans & details</li>
          <li>Plans & elevations</li>
          <li>Assembly and part drawings</li>
          <li>Reports</li>
          <li>DXF & NC files</li>
          <li>Material & bolt lists</li>
          <li>PDF & CAD drawings files</li>
          <li>3D IFC models</li>
        </ul>
      </div>
      {/* <ReturnHome /> */}
    </section>
  );
};

export default ServicesPage;
