import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import location from './assets/location.png'; 
import link from './assets/link.png'; 
import office from './assets/office.png'; 
import twitter from './assets/twitter.png'; 

const App = () => {
  const [user, setUser] = useState(null);
   const [darkMode, setDarkMode] = useState(false);

  const handleSearch = async (username) => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const data = await response.json();
      setUser(data);
      console.log(data)
    } catch (err) {
      console.error(err);
      
    }
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target.username.value.trim();
    if (username) {
      handleSearch(username);
      e.target.reset();
    }
  };

  return (
    <>
      
    
    <main className={darkMode ? 'dark-mode' : 'light-mode'}>
      <h1>Devfinder</h1>
<button className='colorButton' onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
      </button>
    
      <div className='searchdiv'>
      <section id="search">
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Search GitHub username…" name="username" required />
          <button type="submit">Search</button>
        </form>
      </section>
      </div>

      <div className='parentdiv'>
      <section id="top">
        {/*<p>Dark <img src="./src/assets/icon-moon.svg" alt="Dark mode icon" /></p> */}
       
      </section>


<div className='informationdiv'>
      <section id="info">
        {user ? (
          <div className='userMainInfo'>
            <p id='createdTime'>{user.created_at}</p>
            <h2>{user.login}</h2>
            <p id='userGithubName'><a href={user.html_url} target='_blank'>@{user.name}</a></p>
            
            <p id='userBio'>{user.bio || "This profile has no bio"}</p>
            
            <img id='mainImg' src={user.avatar_url} alt={`${user.login}'s avatar`} width="100" />

            <div className='centerInfo'>
                <p>Repos <br />{user.public_repos}</p>
                <p>Followers <br /> {user.followers}</p>
                <p>Following <br /> {user.following}</p>
            </div>
            <div className='srcs'>
              <p><img src="./src/assets/location.png"/>{user.location || "Not Location Avaliable"}</p>
              <p><img src="./src/assets/twitter.png"/>{user.twitter_username || 'Twitter Not Avaliable'}</p>
              <p><img src="./src/assets/link.png"/>{user.url}</p>
              <p><img src="./src/assets/office.png"/>{user.company || "Company Not Avaliable"}</p>
          </div>
          </div>
        ) : (
          <p>Please search for a user</p>
        )}
      </section>
      </div>
      </div>
    </main>
    </>
  );
};

export default App;
