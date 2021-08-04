import { useContext, useEffect } from 'react';
import './App.css';
import { GlobalContext } from './GlobalContext';

function App() {
  const { contar, setContar, titulo } = useContext(GlobalContext)
  useEffect(() => {
    document.title = titulo + ': ' + contar;
  }, [contar, titulo]);

  return (
    <button type="button" onClick={() => setContar(contar + 1)}>
      { contar }
    </button>
  );
}

export default App;
