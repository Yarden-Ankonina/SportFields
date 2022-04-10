import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  return (
      <>
        <main>
            <h2>About Our App</h2>
            <p>SportField is a app that helps you find sport fields/facilities near you</p>
        </main>
        <nav>
        <Link to="/">Home</Link>
        </nav>
      </>
    
  )
}
