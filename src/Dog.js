import React from 'react';

const Dog = ({ name, age, src, facts }) => {
  return (
    <>
      <li>
        I'm {name} and I'm {age} years old! <br />
        <img src={src} alt='a cute pup' height='250' width='250' />
        <p>{facts}</p>
      </li>
      <hr />
    </>
  );
};

export default Dog;
