import { useState } from 'react'
import Counter from './counter'
import useInput from './userinput'


function App() {
  const name =  useInput('')
  const email = useInput('')


  const[count,setCount] = useState(0)
  const handlePlus = () => {
    setCount(count + 1)
  }

  const handleZero = () => {
    setCount(0)
  }
  return (
    <>

    <div>
      <label htmlFor="name">Name:</label>
      <input id='name' type='text' {...name} />
      <label htmlFor="email">Email:</label>
      <input id='email' type="email" {...email} />

      <h3>Entered Data:</h3>
        <p>Name: {name.value}</p>
        <p>Email: {email.value}</p>
    </div>
     <div>
      <h1>UseState() Hook</h1>
      <p>Count:{count}</p>
      <button onClick={handlePlus}>Click To + 1</button>
      <button onClick={handleZero}>Restart</button>
      <h1>Custom Hook()</h1>
      <Counter/>
     </div>
     
    </>
  )
}

export default App
