import React, { useState } from 'react';
import { useTextContext } from '../context/TextContex.jsx';

const TextForm = () => {
  const [text, setText] = useState('');
  const [color, setColor] = useState('palevioletred');
  const [size, setSize] = useState(15);

  const { dispatch } = useTextContext();

  const handleSubmit = () => {
    if (text.trim() !== '') {
      dispatch({
        type: 'ADD_TEXT',
        payload: { text, color, size }
      });
      setText(''); // Réinitialise le champ de texte
    }
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Saisir le texte"
      />
      <br />
      <label>
        Sélectionnez un rendu :
        <select value={color} onChange={(e) => setColor(e.target.value)}>
          <option value="palevioletred">palevioletred</option>
          <option value="tomato">tomato</option>
        </select>
      </label>
      <br />
      <label>
        Taille du texte :
        <select value={size} onChange={(e) => setSize(Number(e.target.value))}>
          {[15, 16, 17, 18, 19, 20].map((sizeOption) => (
            <option key={sizeOption} value={sizeOption}>
              {sizeOption}px
            </option>
          ))}
        </select>
      </label>
      <br />
      <button onClick={handleSubmit}>Valider</button>
    </div>
  );
};

export default TextForm;
