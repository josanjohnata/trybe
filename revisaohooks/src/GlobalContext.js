import React, { useState } from 'react';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({children}) => {
  const [contar, setContar] = useState(0);
  const titulo = 'Clicou';

  const obtValue = {
    contar,
    setContar,
    titulo,
  };
  return (
    <GlobalContext.Provider value={obtValue}>
      { children }
    </GlobalContext.Provider>
  );
};
