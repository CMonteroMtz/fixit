import './Sidebar.scss';
import { MenuItem } from '../HeaderTypes';
import { flatten } from '../../../util/utils';
import React from 'react';

interface SidebarProps {
  menu: MenuItem[];
  sidebarState: boolean;
  setSidebarState: React.Dispatch<React.SetStateAction<boolean>>;
};

const Sidebar = ({menu, sidebarState, setSidebarState}: SidebarProps) => {

  const toggleSidebar = () => {
    setSidebarState(!sidebarState);
  };

  return (
    <div className={`sidebar ${!sidebarState ? 'hide' : ''}`}>
      <div className="sidebar-content">
        {
          menu.map(menuItem => {
            if(menuItem.submenu)
              return menuItem.submenu.map(item => (<li className='sidebar-item'>{item.title}</li>));
            else
              return <li className='sidebar-item'>{menuItem.title}</li>
          })
        }
      </div>
      <div onClick={toggleSidebar} className="sidebar-overlay"/>
    </div>
  );
};

export default Sidebar;