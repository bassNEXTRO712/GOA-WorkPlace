import { useState } from 'react'
import './App.css'
import FormChange from './assets/components/forms'

function App() {
  const colorit = {
    backgroundColor:'black',
    color:'red'
  }

  return (
    
    <>
      <div>
      <h1 style={{backgroundColor:'Lime'}}>Hello Man!!</h1>
      <h2 style={colorit}>Hello Again!!</h2>
      <h3>Hello Dude XAXAA!!</h3>
      </div>

      <div>
        <FormChange />
       
      </div>
    </>
  )
}

export default App
