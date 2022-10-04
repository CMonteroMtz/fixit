import './Header.scss';
import MenuIcon from '@mui/icons-material/Menu';

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
      </div>
    </header>
  );
};

export default Header;