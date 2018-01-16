import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({ match }) => (
  <div>
    <p>logo here</p>
    <h3>Reactor News</h3>
    <nav>
      <div>
        <Link to="/">new</Link>
        <span> | </span>
        <Link to="/comments">comments</Link>
        <span> | </span>
        <Link to="/show">show</Link>
        <span> | </span>
        <Link to="/ask">ask</Link>
        <span> | </span>
        <Link to="/jobs">jobs</Link>
        <span> | </span>
        <Link to="/submit">submit</Link>
      </div>
      <Link to='/login'>login</Link>
    </nav>
  </div>
)

export default Navbar
