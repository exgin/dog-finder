import React from 'react';
import Dog from './Dog';
import './DogList.css';
import { v4 as uuid } from 'uuid';

const DogList = ({ dogs }) => {
  return (
    <div className='DogList'>
      <h1 className='DogList-title'>All Dogs!</h1>
      <ul className='DogList-list'>
        {dogs.map((el) => (
          <Dog key={uuid()} name={el.name} age={el.age} src={el.src} facts={el.facts} />
        ))}
      </ul>
    </div>
  );
};

export default DogList;
