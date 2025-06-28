import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

  };

  useEffect(() => {
    console.log("Form data updated:", formData);
  }, [formData]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={formData.email}
          type="email"
          name="email"
          id="email"
          placeholder="Enter Your Email Here!"
        />
        <input
          onChange={handleChange}
          value={formData.password}
          type="password"
          name="password"
          id="password"
          placeholder="Enter Your Password Here!"
        />
        <button type="submit">Submit</button>
      </form>
      <p>Email: {formData.email}</p>
      <p>Password: {formData.password}</p>
    </div>
  );
}

export default App;
