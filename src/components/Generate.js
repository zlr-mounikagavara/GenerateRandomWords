import React, { useState } from 'react';
import GenerateArray from './GenerateArray';

function RandomWordsGenerator() {
  const [randomWordsArray, setRandomWordsArray] = useState([]);

  const generateRandomWordsArray = () => {
    if (GenerateArray.length === 0) {
      console.log('No more arrays to select.');
      return;
    }
    const randomArrayIndex = Math.floor(Math.random() * GenerateArray.length);
    const selectedArray = [...GenerateArray[randomArrayIndex]];
    GenerateArray.splice(randomArrayIndex, 1);
    setRandomWordsArray(selectedArray);
  };

  return (
    <div>
      <button onClick={generateRandomWordsArray}>Generate Random Words</button>
      <ul>
        {randomWordsArray.map((word, index) => (
          <h2 key={index}>{word}</h2>
        ))}
      </ul>
    </div>
  );
}

export default RandomWordsGenerator;
