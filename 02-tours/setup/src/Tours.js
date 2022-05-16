import React from 'react';
import Tour from './Tour';
const Tours = ({ tours }) => {
  return (
    <section>
      <div className='title'>
        <h2>Our Tours</h2>
        <div className='underline'></div>
      </div>
      <div>
        {tours.map((e) => {
          return <Tour key={e.id} {...e} />
        })}
      </div>
    </section>
  );
};

export default Tours;
