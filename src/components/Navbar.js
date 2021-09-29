import React from 'react';
import { Link } from 'react-router-dom';
// import 'bootstrap';

export default function Navbar() {
  return (
    <header>
      <div>MyVaccine</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/makeapt">Make Appointment</Link>
          </li>
          <li>
            <Link to="/findapt">Find Appointment</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
