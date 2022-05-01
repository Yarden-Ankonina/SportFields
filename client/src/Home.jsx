import React, { useEffect, useState } from 'react'
import { Routes,Route,Link } from 'react-router-dom'
import {
  MapContainer,
  TileLayer,
  useMap,
} from 'https://cdn.esm.sh/react-leaflet'
import MyMap from './MyMap'

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
        <main>
            <h2>Home</h2>
            {/* <div>
              {(typeof backendData.users === 'undefined')?(
                <p>Loading.... wait for server</p>
              ):(
                backendData.users.map((user,i)=>(
                  <p key={i}>{user}</p>
                ))
              )}
            </div> */}
            {/* <div className='Map'>
              <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
               </MapContainer>
            </div> */}
        </main>
        <MyMap/>
    </div>
      
      
  )
}
