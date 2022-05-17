import React, { useState } from 'react';

const Tour = ({ id, image, info, price, name, removeTour }) => {
  const [ReadMore, setReadMore] = useState(false);

  return (
    <article className='single-tour'>
      <img src={image} alt={name} />
      <footer>
        <div className='tour-info'>
          <h4>{name}</h4>
          <h4 className='tour-price'>${price}</h4>
        </div>
        <p>{ReadMore ? info : `${info.substring(0, 230)}...`}</p>
        {/* button to toggle the text displayed */}
        <button
          onClick={() => setReadMore(!ReadMore)}>
          {ReadMore ? `See Less` : `See More`}
        </button>
        <button
          onClick={() => removeTour(id)}
          className='delete-btn'>
          Not Interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
