import React, { useState } from 'react';
import './WordCount.css';

const WordCount = () => {
  const [text, setText] = useState('');
  
  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;

  return (
    <div>
      <textarea
        rows="30"
        cols="50"
        value={text}
        onChange={handleTextChange}
        placeholder="Type your text here..."
      />
      <p>Word Count: {wordCount}</p>
    </div>
  );
};

export default WordCount;