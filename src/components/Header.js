import { Close, MenuOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import './styles/Header.scss';

const Header = () => {

    const [active, setActive] = useState(false)

    const showMenu = () => {
        setActive(!active)
    }




  return (
    <div className="header">
      <div className="headerLogo">
        <h1>.bry</h1>
      </div>

      <nav className={active ? 'navbar active' : 'navbar'}>
        <ul>

          <div className="closed">
            <Close className="close" onClick={showMenu} />
          </div>

          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#section">About</a>
          </li>
          <li>
            <a href="#projects">Portfolio</a>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          
        </ul>
      </nav>

      <div className='changer'>
          <MenuOutlined className='menu' onClick={showMenu}/>
      </div>






    </div>
  );
}

export default Header