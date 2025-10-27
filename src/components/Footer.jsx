import React from 'react'
import "./Footer.css"

export default function Footer({contact}) {
  return (
    <div className='footer'>
        <h3> call me on : {contact.phone}</h3>
        <h3> Email on : {contact.email}</h3>
    </div>
  )
}
