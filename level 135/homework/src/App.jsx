import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const [list, setList] = useState([]);

  const addToList = (e) => {
    e.preventDefault();
    if (text.trim()) {
      setList([...list, text]);
      setText('');
    }
  };

  const deleteItem = (index) => {
    const newList = list.filter((_, i) => i !== index); // Remove item by index
    setList(newList);
  };

  return (
    <>
      <div>
        <form onSubmit={addToList}>
          <input
            type="text"
            placeholder="Please Enter Your Favorite Film!"
            name="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <br />
          <button type="submit">Submit</button>
        </form>

        <ul>
          {list.map((item, i) => (
            <li key={i}>
              {item}
              <button onClick={() => deleteItem(i)} style={{ marginLeft: '10px' }}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
