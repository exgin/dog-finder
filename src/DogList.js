import React from 'react';
import Dog from './Dog';

const DogList = ({ dogs }) => {
  return (
    <div className='DogList'>
      <h1 className='DogList-title'>All Dogs!</h1>
      <ul>
        {dogs.map((el) => (
          <Dog name={el.name} age={el.age} src={el.src} />
        ))}
      </ul>
    </div>
  );
};

export default DogList;
