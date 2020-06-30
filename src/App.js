import React from 'react';
import './App.css';
import dogs from './dogs';
import DogList from './DogList';

function App() {
  return (
    <div className='App'>
      <DogList dogs={dogs} />
    </div>
  );
}

export default App;
