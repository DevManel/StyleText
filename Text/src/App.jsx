import React from 'react';
import { TextProvider } from './context/TextContex.jsx';
import TextForm from './components/TextForm.jsx';
import TextDisplay from './components/TextDisplay.jsx';
import './App.css';

function App() {
  return (
    <TextProvider>
      <div className="App">
        <h1>Application de rendu de texte</h1>
        <TextForm />
        <TextDisplay />
      </div>
    </TextProvider>
  );
}

export default App;
