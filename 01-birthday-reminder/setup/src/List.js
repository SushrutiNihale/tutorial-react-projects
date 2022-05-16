import React from 'react';

const List = ({ people }) => { // destructuring people from the props passed
  return (
    <>
      {people.map((e) => {
        const { id, name, age, image } = e;
        return (
          <article key={id} className='person'>
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
          </article>
        )
      })}
    </>
  );
};

export default List;
