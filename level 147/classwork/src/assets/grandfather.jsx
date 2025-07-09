import React, { useState } from "react";
import ThemeContext from "./themeContext";
import Parent from "./parent";

function GrandFa() {
  const [theme, setTheme] = useState('light');

  const ChangeTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div style={{
      backgroundColor: theme === 'light' ? '#fff' : '#333',
      color: theme === 'light' ? '#000' : '#fff',
      padding: '20px',
      minHeight: '100vh',
    }}>
      <ThemeContext.Provider value={theme}>
        <h1>Grandparent Component</h1>
        <button onClick={ChangeTheme}>
          Toggle Theme (Current: {theme})
        </button>
        <Parent />
      </ThemeContext.Provider>
    </div>
  );
}

export default GrandFa;
