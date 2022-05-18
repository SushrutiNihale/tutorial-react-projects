import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  return (
    <main>
      <div className='container'>
        <h3>questions and answers about login</h3>
        <section className='info'>
          {data.map((e) => {
            return <SingleQuestion key={e.id} {...e} /> // passing id as key and the rest of the data as props
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
