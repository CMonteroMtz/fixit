import './Navbar.scss';
import { NavbarProps } from '../HeaderTypes';
import NavItem from '../NavItem/NavItem';

const Navbar = ({menu}: NavbarProps) => {
  return (
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
  );
};

export default Navbar;