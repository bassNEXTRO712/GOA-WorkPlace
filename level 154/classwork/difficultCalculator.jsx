import React, { useState, useMemo } from 'react';

// უზარმაზარი ფაქტორიალი
const calculateExpensiveValue = (num) => {
  console.log("Calculating...");
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
    // თავიდან ავიცილოთ ინფინიტ ლუპი დიდ რიცხვებზე
    if (result === Infinity) break;
  }
  return result;
};

const ExpensiveCalculator = () => {
  const [number, setNumber] = useState(1);
  const [text, setText] = useState('');

  // useMemo იყენებს მხოლოდ მაშინ, როცა number იცვლება
  const expensiveResult = useMemo(() => {
    return calculateExpensiveValue(number);
  }, [number]);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>Expensive Calculator 🧠</h2>
      
      <div>
        <label>
          Number:
          <input
            type="number"
            value={number}
            onChange={(e) => setNumber(Number(e.target.value))}
            style={{ marginLeft: '10px' }}
          />
        </label>
      </div>

      <div style={{ marginTop: '10px' }}>
        <label>
         Text:
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            style={{ marginLeft: '10px' }}
          />
        </label>
      </div>

      <div style={{ marginTop: '20px' }}>
        <strong>Resulth:</strong> {expensiveResult}
      </div>
    </div>
  );
};

export default ExpensiveCalculator;
