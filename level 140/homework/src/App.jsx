import { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const [excludeSpaces, setExcludeSpaces] = useState(false);
  const [setCharLimit, setSetCharLimit] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const CHAR_LIMIT = 100; // you can change the limit here

  // Character count with for-loop and space exclusion
  const lenChar = (input) => {
    let count = 0;
    for (let i = 0; i < input.length; i++) {
      if (excludeSpaces) {
        if (input[i] !== ' ') count++;
      } else {
        count++;
      }
    }
    return count;
  };

  const wordCount = (input) => {
    const words = input.trim().match(/\b\w+\b/g);
    return words ? words.length : 0;
  };

  const sentenceCount = (input) => {
    const sentences = input.match(/[^.!?]+[.!?]+/g);
    return sentences ? sentences.length : (input.trim() ? 1 : 0);
  };

  // Handle input change with optional character limit
  const handleTextChange = (e) => {
    const newText = e.target.value;
    if (setCharLimit && lenChar(newText) > CHAR_LIMIT) {
      // If limit reached, don't update text further
      return;
    }
    setText(newText);
  };

  return (
    <main className={darkMode ? 'dark-mode' : 'light-mode'}>
      <div className='topbar'>
        <h2>Text Analyzer</h2>
        <label className="mode-toggle">
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
          {darkMode ? '🌙 Dark' : '☀️ Light'}
        </label>
      </div>

      <div className='parentdiv'>
        <h1>Analyze your text <br /> in real time</h1>

        <textarea
          name="text"
          id="text"
          placeholder="Enter Your Sentence!"
          value={text}
          onChange={handleTextChange}
        />

        <form>
          <label>
            <input
              type="checkbox"
              checked={excludeSpaces}
              onChange={(e) => setExcludeSpaces(e.target.checked)}
            />
            Exclude Spaces
          </label>

          <label>
            <input
              type="checkbox"
              checked={setCharLimit}
              onChange={(e) => setSetCharLimit(e.target.checked)}
            />
            Set Character Limit ({CHAR_LIMIT})
          </label>
        </form>

        <div className='child'>
          <div className='minichild1'>
            <p>{lenChar(text)} <br /> total characters</p>
          </div>

          <div className='minichild2'>
            <p>{wordCount(text)} <br /> total words</p>
          </div>

          <div className='minichild3'>
            <p>{sentenceCount(text)} <br /> total sentences</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
