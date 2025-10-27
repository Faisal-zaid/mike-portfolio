import React from 'react'
import "./About.css"

export default function About({about}) {
  return (
    <div className='about'>
        <h1>{about.description}</h1>
    </div>
  )
}
