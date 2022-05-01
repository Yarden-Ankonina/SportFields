import React, { useEffect, useState } from 'react'
import { Routes,Route,Link } from 'react-router-dom'

export default function Home() {
  // const [backendData, setBackendData] = useState([{}])

  // useEffect(() =>{
  //   fetch("/api").then(
  //     response => response.json()
  //   ).then(
  //     data => {
  //       setBackendData(data)
  //     }
  //   )
  // }, [])

    
  return (
    <div>
        <main>
            <h2>Home</h2>
            {/* <div>
              {
                backendData.users.map((user,i)=>(
                  <p>{user}</p>
                ))
              }
            </div> */}
            <div className='Map'>
            </div>
        </main>
        <nav>
            <ul>
                <li>
                <Link to="/About">About</Link>
                </li>
                <li>
                <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/LandingPage">LandingPage</Link>
                </li>
                <li>
                <Link to="/NotFound">NotFound</Link>
                </li>
                <li>
                <Link to="/Login">Login</Link>
                </li>
            </ul>
        </nav>
    </div>
      
      
  )
}
