import React, { useState } from 'react';
import '../css/navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <div>
      <nav>
        <span>Portfolio</span>
        <ul className={click ? 'active' : ''}>
          <li><Link className='nav' to="/">HOME</Link></li>
          <li><Link className='nav' to="About">ABOUT</Link></li>
          <li><Link className='nav' to="Tech">TECHNOLOGY</Link></li>
          <li><Link className='nav' to="Certificate">CERTIFICATES</Link></li>
        </ul>
        <div className={`bar ${click ? 'open' : ''}`} onClick={handleClick}>
          <span className='barline'></span>
          <span className='barline'></span>
          <span className='barline'></span>
        </div>
        <Link to="/feedback" className={`feedback ${click ? 'block': ''}`}>feedback</Link>
      </nav>
    </div>
  );
}

export default Navbar;
