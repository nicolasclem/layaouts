import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>  
    <h1>LOGGIN -app</h1>
    <nav>
        <ul>
          <li>
            <Link to="/">Home </Link>
          </li>
          <li>
            <Link to="/loggin">Loggin </Link>
          </li>
          <li>
            <Link to="/loggin2">Loggin2 </Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard </Link>
          </li>
          <li>
            <Link to="/register">Register </Link>
          </li>
        </ul>
      </nav>
    <hr />
    <Outlet />
    </div>
  )
}

export default Layout
