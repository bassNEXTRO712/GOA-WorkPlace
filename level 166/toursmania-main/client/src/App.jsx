import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/tours');
        const data = await response.json();
        console.log(data);
        setTours(data);
      } catch (error) {
        console.log('There is Some Error!!', error);
      }
    };
    fetchData();
  }, []);

  if (!tours.length) {
    return <p>We Could Not Find Any Information About That</p>;
  }

  return (
    <div className="container">
      <h1>Available Tours</h1>
      <ul className="grid">
        {tours.map((tour) => (
          <li className="card" key={tour.id}>
            <strong>Name:</strong> {tour.name} <br />
            <strong>Difficulty:</strong> {tour.difficulty} <br />
            <strong>ID:</strong> {tour.id} <br />
            <strong>Max People:</strong> {tour.maxGroupSize}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
