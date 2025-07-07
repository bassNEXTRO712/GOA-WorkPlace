import { useState } from "react";

const Counter = ({initial = 0}) => {
 const [count,setCount] = useState(initial)


 const plusone = () => {
    setCount(prev => prev + 1)
 }

 const reset = () => {
    setCount(initial)
 }

 return(
    <>
    <div>
        <p>Count: {count}</p>
        <button onClick={plusone}> Plus 1</button>
        <button onClick={reset}>Reset</button>
    </div>
    </>
 )
};


export default Counter