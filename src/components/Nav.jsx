import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
<div className="navbar bg-base-100 shadow">
  <div className="flex-1">
   <Link to="/"> <a className="btn btn-ghost normal-case text-xl">Valorant</a></Link>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal p-0">
      <li><Link to="/agents"><a>Agents</a></Link></li>
      <li><Link to="/weapons"><a>Weapons</a></Link></li>
      <li><Link to="/maps"><a>Maps</a></Link></li>
      
    </ul>
  </div>
</div>
  )
}

export { Nav }