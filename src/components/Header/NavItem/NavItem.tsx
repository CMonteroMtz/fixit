import './NavItem.scss';
import { MenuItemProps } from '../HeaderTypes';
import Icon from '../../Icon/Icon';

const NavItem = ({menuItem}: MenuItemProps) => {
  return (
    <div className="nav-item">
      {
        menuItem.submenu ? (
          <span>Has Submenu</span>
        ) : (
          <button>
            <Icon icon={menuItem.icon} />
            <span>{menuItem.title}</span>
          </button>
        )
      }
    </div>
  );
};

export default NavItem;