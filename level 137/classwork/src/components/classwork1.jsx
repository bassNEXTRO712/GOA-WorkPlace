import {useState,useEffect} from "react";

function GetCatsInfo(){
    const[catFacts,setcatFacts] = useState('')
    const [click, setClick] = useState(false)
    


    const fetchData = async  () => {
        try{
            const response = await fetch('https://catfact.ninja/fact');
            const data = await response.json();
            setcatFacts(data.fact)
        }catch(error){
            console.log("There Is Something Erorr!", error)
        }
    }


useEffect(() => {
    fetchData();
}, [])


return(
    <div>
        <h1>Facts On The Cats!</h1>
        <p>{catFacts}</p>
        <button onClick = {() => {
            fetchData();
            setClick(prev => !prev)
        }}>Click To Change!</button>
    </div>
)
};

export default GetCatsInfo