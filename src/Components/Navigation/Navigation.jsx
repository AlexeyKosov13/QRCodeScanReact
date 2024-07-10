import React from 'react'
import { Link } from 'react-router-dom'
import './Navigation.css'

const Navigation = () => {
  return (
    <nav className='navigation'>
        <Link className='link' to="/generate">генерировать QR код</Link>
        <Link className='link' to="/scan">Сканировать QR код</Link>
        <Link className='link' to="/scanHistory">История генерирования</Link>
        <Link className='link' to="/generateHistory">История сканирования</Link>
    </nav>
  )
}

export default Navigation