import { MenuItem } from '../HeaderTypes';
import NavItem from '../NavItem/NavItem';
import './NavDropdown.scss';

interface NavDropdownProps {
  menu: MenuItem[];
};

const NavDropdown = ({menu}: NavDropdownProps) => {

  return (
    <div className="nav-dropdown">
      {
          menu.map((menuItem) => (
            <li className='menu-option' key={menuItem.id}>
              <NavItem menuItem={menuItem} />
            </li>
          ))
        }
    </div>
  );
};

export default NavDropdown;