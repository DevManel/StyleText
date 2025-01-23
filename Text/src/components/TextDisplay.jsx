import React from 'react';
import { useTextContext } from '../context/TextContex.jsx';

const TextDisplay = () => {
  const { texts, dispatch } = useTextContext();

  const handleDelete = (index) => {
    dispatch({ type: 'DELETE_TEXT', index });
  };

  return (
    <div>
      {texts.map((textItem, index) => (
        <div key={index} style={{ color: textItem.color, fontSize: `${textItem.size}px` }}>
          <p>{textItem.text}</p>
          <button onClick={() => handleDelete(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default TextDisplay;
