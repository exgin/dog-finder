import React from 'react';

const Dog = ({ name, age, src }) => {
  return (
    <li>
      {name} {age} <img src={src} alt='a cute pup' />
    </li>
  );
};

export default Dog;
