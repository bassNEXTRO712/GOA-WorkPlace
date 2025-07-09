import { useState } from 'react'
import ShowUserRole from './userRole'
import RoleContext from './roleContext'
import './App.css'

function App() {
const [role,setRole] = useState('guest')

  return (
    <>
   <main>
        <RoleContext.Provider value={role}>
          <div className='parent'>
            <ShowUserRole/>
            <div className='child'>
        <button onClick={() => setRole('guest')}>Guest</button>
        <button onClick={() => setRole('member')}>Member</button>
        <button onClick={() => setRole('Admin')}>Admin</button>
        </div>
        </div>
        </RoleContext.Provider>
      </main>
    </>
  )
}

export default App
