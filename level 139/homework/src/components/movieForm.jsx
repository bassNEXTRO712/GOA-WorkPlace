import { useState } from "react"
const SearchMovie = ({onSearch}) => {
    const [title,setTitle] = useState('');


    const handClick = (e) => {
        e.preventDefault();
        if(title.trim()){
            onSearch(title);
        }
    }
    return(
        <>
        <div>
            <form onSubmit={handClick}>
                <input type="text" value={title} placeholder="Search Your Movie..."  onChange={e => setTitle(e.target.value)}/>
                <button type="submit">Search</button>
            </form>
        </div>
        
        </>
    )
};

export default SearchMovie;