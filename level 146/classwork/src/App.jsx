import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useTheme from './theme'

function App() {
  const {isDark,ChangeColor} = useTheme();
  
  const themeStyle = {
    backgroundColor: isDark ? '#1a1a1a' : '#ffffff',
    color: isDark ? '#ffffff' : '#000000',
    height: '100vh',
    padding: '20px',
    transition: 'all 0.3s ease',
  }

  return (
    <>
   
    <div style={themeStyle}> 
        <h1>{isDark ? '🌙 Dark Theme' : '☀️ Light Theme'}</h1>
        <button onClick={ChangeColor}>Dark Or White Theme</button>

    </div>
    </>
  )
}

export default App
