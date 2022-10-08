export interface MenuItem {
  id: string;
  title?: string;
  icon?: string;
  submenu?: MenuItem[];
};

export interface NavbarProps {
  menu: MenuItem[];
};

export interface MenuItemProps {
  menuItem: MenuItem;
};