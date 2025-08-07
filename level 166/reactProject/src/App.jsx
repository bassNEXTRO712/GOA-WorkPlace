import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [tours, setTours] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
      
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await response.json()
        setTours(data)
      } catch (error) {
        console.log('There is Some Error!!', error)
      }
    }
    fetchData()
  }, [])

  if (!tours.length) {
    return <p>We Could Not Find Any Information About That</p>
  }

  return (
    <div>
      <h1>Available Tours</h1>
      <ul>
        {tours.map((tour) => (
          <li key={tour.id}>{tour.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
