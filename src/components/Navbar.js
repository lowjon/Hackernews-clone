import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => (
  <div className='nav-bar'>
    <div className='left-block'>
      <img className='react-logo' src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K' />
      <h4 id='page-title'>Reactor News</h4>
      <nav className='nav-links'>
        <Link className='nav-link' to='/'> new </Link>
        <span> | </span>
        <Link className='nav-link' to='/comments'> comments </Link>
        <span> | </span>
        <Link className='nav-link' to='/show'> show </Link>
        <span> | </span>
        <Link className='nav-link' to='/ask'> ask </Link>
        <span> | </span>
        <Link className='nav-link' to='/jobs'> jobs </Link>
        <span> | </span>
        <Link className='nav-link' to='/submit'> submit </Link>
      </nav>
    </div>
    <div>
      <Link className='login-link' to='/login'>login</Link>
    </div>
  </div>
)

export default Navbar
