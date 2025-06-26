import { useState } from "react"


const Parent = () => {
    const [text,setText] = useState('Click here, useEffect')

    const handleClick = () => {
        setText('Clicked')
    }
    return(
        <div>
        <p>Loading...</p>
        <p>{text}</p>
        <button onClick={handleClick}>Click To Change Text</button>
        </div>
    )
};

export default Parent;