import './Navbar.scss';
import { NavbarProps } from '../HeaderTypes';
import NavItem from '../NavItem/NavItem';
import Icon from '../../Icon/Icon';

const Navbar = ({menu}: NavbarProps) => {
  return (
    <div className="div-header">
      <div className="left-section">
        <nav>
              <ul className='menu'>
                {
                  menu.map((menuItem) => (
                    <li className='menu-option' key={menuItem.id}>
                      <NavItem menuItem={menuItem} />
                    </li>
                  ))
                }
              </ul>            
        </nav>
      </div>
      <div className="right-section">
        <button className='req-button'>Ask for a requisition</button>
        <div className="login">
            <Icon icon={"account"}/> 
            <a href="">Login</a>
        </div>

      </div>
    </div>
   
  );
};

export default Navbar;