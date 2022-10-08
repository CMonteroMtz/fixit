import './Header.scss';
import MenuIcon from '@mui/icons-material/Menu';
import Navbar from './Navbar/Navbar';
import menuOptions from './menu-data';

const Header = () => {
  return (
    <header>
      <div className="mobile-version">
        <span className="header-brand">Fixit</span>
        <button className='header-btn'>
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