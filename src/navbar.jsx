import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <ul className="nav-list">
        <Link to={"/"}>
          <li className="text-decoration-none text-black">HOME</li>
        </Link>
        <Link to={"/expense_track"}>
          <li className="text-decoration-none text-black">Expense_Track</li>
        </Link>
        <Link to={"/expense_filter"}>
          <li className="text-decoration-none text-black">Expense_Filter</li>
        </Link>
        <li>ABOUT</li>
        <li>CONTACT</li>
        <li>LOG IN</li>
      </ul>
    </div>
  );
}
