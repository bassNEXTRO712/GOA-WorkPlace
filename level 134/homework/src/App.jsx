import React, { useState } from 'react';
import './App.css';

function App() {
  const [lightOn, setLightOn] = useState(false);

  const handleClick = () => {
    setLightOn(prevState => !prevState);
  };

  return (
    <>
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>{lightOn ? 'The Light Is ON' : 'The Light Is OFF'}</h1>
        <button onClick={handleClick}>
          {lightOn ? 'Turn The Light OFF' : 'Turn The Light ON'}
        </button>
      </div>
    </>
  );
}

export default App;