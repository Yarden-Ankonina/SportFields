import React from 'react'
import { Routes,Route,Link } from 'react-router-dom'

export default function Home() {
  return (
      <>
        <main>
            <h2>Home</h2>
        </main>
        <nav>
            <ul>
                <li>
                <Link to="/About">About</Link>
                </li>
            </ul>
        </nav>
      </>
      
  )
}
