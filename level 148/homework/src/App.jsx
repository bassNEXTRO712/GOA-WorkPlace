/*     */

import { useState } from 'react'
import reactLogo from './components/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greet from './components/Greeting'
import LanguageContext from './components/language'
/*
import Language from './components/language'
import Greeting from './components/sayhello'
*/
function App() {
  const [language,setLanguage] = useState('Defaulth')

  return (
    <>
    <LanguageContext.Provider value={language} >
      <Greet/>
    <button onClick={() => setLanguage('English')}>English</button>
    <button onClick={() => setLanguage('Spanish')}>Spanish</button>
    <button onClick={() => setLanguage('French')}>French</button>


    </LanguageContext.Provider>
    </>
  )
}

export default App;
