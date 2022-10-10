import './Header.scss';
import MenuIcon from '@mui/icons-material/Menu';
import Navbar from './Navbar/Navbar';
import menuOptions from './menu-data';
import Sidebar from './Sidebar/Sidebar';
import { useState } from 'react';

const Header = () => {

  const [ sidebarState, setSidebarState ] = useState(false);

  const toggleSidebar = () => {
    setSidebarState(!sidebarState);
  };

  return (
    <header>
      <div className="mobile-version">
        <Sidebar sidebarState={sidebarState} setSidebarState={setSidebarState} menu={menuOptions}/>
        <span className="header-brand">Fixit</span>
        <button onClick={toggleSidebar} className='header-btn'>
          <MenuIcon fontSize='large'/>
        </button>
      </div>
      <div className="desktop-version">
        <span className="header-brand">Fixit</span>
        <Navbar menu={menuOptions}/>
      </div>
    </header>
  );
};

export default Header;