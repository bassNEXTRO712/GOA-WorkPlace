import React, { useState, useMemo } from 'react';

function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return num >= 2;
}

function findPrimesUpTo(n) {
  return Array.from({ length: n - 1 }, (_, i) => i + 2).filter(isPrime);
}

const PrimeCalculator = () => {
  const [n, setN] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  const parsedN = parseInt(n);

  const primes = useMemo(() => {
    if (isNaN(parsedN) || parsedN < 2) return [];
    return findPrimesUpTo(parsedN);
  }, [parsedN]); // ✅ გათვლები მხოლოდ n-ის ცვლილებაზე

  const toggleTheme = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <div
      style={{
        backgroundColor: darkMode ? '#121212' : '#ffffff',
        color: darkMode ? '#ffffff' : '#000000',
        minHeight: '100vh',
        padding: '20px',
      }}
    >
      <h2>მარტივი რიცხვები 2-დან n-მდე</h2>

      <input
        type="number"
        placeholder="შეიყვანე რიცხვი"
        value={n}
        onChange={(e) => setN(e.target.value)}
      />
      <br /><br />

      <button onClick={toggleTheme}>
        {darkMode ? 'გადადი ღია თემაზე' : 'გადადი მუქ თემაზე'}
      </button>
      <br /><br />

      <div>
        <strong>მარტივი რიცხვები:</strong>{' '}
        {primes.length > 0 ? primes.join(', ') : 'ვერ მოიძებნა'}
      </div>
    </div>
  );
};

export default PrimeCalculator;
