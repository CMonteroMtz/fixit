import './NavItem.scss';
import { MenuItemProps } from '../HeaderTypes';
import Icon from '../../Icon/Icon';
import NavDropdown from '../NavDropdown/NavDropdown';
import { useState } from 'react';

const NavItem = ({menuItem}: MenuItemProps) => {

  const [ dropdownState, setDropdownState ] = useState(false);

  return (
    <div className="nav-item"
      onMouseEnter={() => setDropdownState(true)}
      onMouseLeave={() => setDropdownState(false)}
    >
      <button>
        { menuItem.icon &&  <Icon icon={menuItem.icon}/> }
        { menuItem.title &&  <span>{menuItem.title}</span> }
      </button>
      { menuItem.submenu && dropdownState &&  <NavDropdown menu={menuItem.submenu} /> }
    </div>
  );
};

export default NavItem;