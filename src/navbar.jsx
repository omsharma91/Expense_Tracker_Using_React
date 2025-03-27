import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <div className='navbar'>
      <ul className='nav-list'>
      <Link to={"/"}><li>HOME</li></Link>
      <Link to={"/expense_track"}><li>Expense_Track</li></Link>
      <Link to={"/expense_filter"}><li>Expense_Filter</li></Link>
        <li>Expense_Filter</li>
        <li>ABOUT</li>
        <li>CONTACT</li>
        <li>LOG IN</li>

      </ul>
    </div>
  )
}
