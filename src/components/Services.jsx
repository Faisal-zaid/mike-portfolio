import React from 'react'
import "./Services.css"

export default function Skills({services}) {
  return (
    <div className='services'>
      <ul>
        {services.map((service)=>(
        <li key={service.id}>{service.name}</li>
        ))}
      </ul>
    </div>
  )
}
