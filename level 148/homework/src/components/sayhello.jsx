/* import { useState} from "react"

const Greeting = () => {
  const [language,setLanguage] = useState('')
    

  const handleSubmit = (e) => {
    e.preventDefault();
    if (language === 'English'){
    setLanguage('Hello!')
  } 
  else if (language === 'Spanish'){
    setLanguage('¡Hola!')
  } 
  else if (language === 'French'){
    setLanguage('Bonjour!')
  } 
 
  }
 
  return(
    <div>
      <form onSubmit={handleSubmit}>
      <input  type="text" name="name" placeholder="Enter Your Name"
      

        onChange={(e) => setLanguage(e.target.value)}
      />
      <button>Submit</button>
      <p>Hello New User: {language}</p>
     </form>
    </div>
  ) 
};
export default Greeting;
*/


