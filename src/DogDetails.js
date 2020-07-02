import React, { useRef } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Dog from './Dog';
import { v4 as uuid } from 'uuid';

function undef() {
  return undefined;
}

const DogDetails = ({ dogs }) => {
  const { name } = useParams();
  const dogId = useRef();
  const history = useHistory();
  //  match dog url param to our dog data | params must be a capitlized letter

  dogId.current = name;

  //   check if there is a value in our data structure that matches the current dogid
  let oneDog = dogs.map((el) => {
    if (Object.values(el).includes(dogId.current)) {
      return <Dog key={uuid()} name={el.name} age={el.age} src={el.src} facts={el.facts} />;
    }
  });

  //   check if all elements are undefined, if so, go back to /dogs | NOT WORKING
  if (oneDog.every(undef)) {
    return history.push('/');
  }
  return (
    <div>
      <h1>Meet {name}</h1>
      <p>{oneDog}</p>
    </div>
  );
};

export default DogDetails;
