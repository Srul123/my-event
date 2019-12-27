import React from 'react'

export default function Navbar() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo right">
            My-Event
          </a>
          <ul id="nav-mobile" className="left hide-on-med-and-down">
            <li>
              <a href="#">רשימת המוזמנים שלי</a>
            </li>
            <li>
              <a href="#">אישורי ההגעה שלי</a>
            </li>
            <li>
              <a href="#">סידורי ההושבה שלי</a>
            </li>
          </ul>
        </div>
      </nav>
    );
}
