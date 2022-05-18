import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [Index, setIndex] = useState(0);
  const { name, job, image, text } = people[Index]; // destructuring values according to the Index value

  const prePerson = () => {
    let updatedIndex = checkIndex(Index - 1);
    setIndex(updatedIndex);
  }
  const nextPerson = () => {
    let updatedIndex = checkIndex(Index + 1);
    setIndex(updatedIndex);
  }
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);

    if (randomNumber === Index) {
      // if the number turns out to be the same as Index
      randomNumber++;
    }

    let updatedIndex = checkIndex(randomNumber);
    setIndex(updatedIndex);
  }
  // taking care of cases where Index value is out of bounds
  const checkIndex = (i) => {
    if (i > people.length - 1) {
      return 0;
    }
    if (i < 0) {
      return people.length - 1;
    }
    return i;
  }

  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button
          onClick={prePerson}
          className='prev-btn'>
          <FaChevronLeft />
        </button>
        <button
          onClick={nextPerson}
          className='next-btn'>
          <FaChevronRight />
        </button>
      </div>
      <button
        onClick={randomPerson}
        className='random-btn'>
        surprise me
      </button>
    </article>
  );
};

export default Review;
