/* exprensive calculation   aris gamotvla and funqcia romelic moitxovs did monacemebs da dros konkretul web site-shi*/
/* useMemo aris mexsiereba romelic inaxavs pasuxs da funcqias ar adzlevbs sashvalebas xelaxla gaeshvas tu amis sachiroeba araaa */
/* cache aris informaciis shenaxva rata momavalshi ar gaxdes sachiro tavidan migeba */


import React, { useState, useMemo } from 'react';

function findPrimesUpTo(n) {
  const primes = [];
  for (let i = 2; i <= n; i++) {
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) primes.push(i);
  }

  console.log("re-calculations", primes);
  return primes;
}

const PrimeComponent = () => {
  const [number, setNumber] = useState(50);
  const [otherState, setOtherState] = useState(0);

  
  const primeNumbers = useMemo(() => findPrimesUpTo(number), [number]);

  return (
    <div>
      <h2>Nums: {number}:</h2>
      <p>{primeNumbers.join(', ')}</p>

      <button onClick={() => setNumber(prev => prev + 10)}>
       Plus 10
      </button>

      <button onClick={() => setOtherState(prev => prev + 1)}>
       Plus 1 ({otherState})
      </button>
    </div>
  );
};

export default PrimeComponent;
