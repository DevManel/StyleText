import React, { createContext, useContext, useReducer } from 'react';
import { textReducer, initialState } from '../reducer/TextReducer.jsx';

// Création du contexte
const TextContext = createContext();

// Fournisseur de contexte pour gérer l'état global
export const TextProvider = ({ children }) => {
  const [texts, dispatch] = useReducer(textReducer, initialState);

  return (
    <TextContext.Provider value={{ texts, dispatch }}>
      {children}
    </TextContext.Provider>
  );
};

// Hook personnalisé pour accéder facilement au contexte
export const useTextContext = () => {
  const context = useContext(TextContext);
  if (!context) {
    throw new Error('useTextContext must be used within a TextProvider');
  }
  return context;
};
