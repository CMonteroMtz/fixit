import { MenuOption } from "./HeaderTypes";

const menuOptions: MenuOption[] = [
  {
    id: '1',
    title: 'Professional Directory'
  },
  {
    id: '2',
    title: 'Price Guide'
  },
  {
    id: '3',
    title: 'Community',
    submenu: [
      {
        id: 'com-1',
        title: 'Questions',
        icon: 'questions'
      },
      {
        id: 'com-2',
        title: 'Ideas and Projects',
        icon: 'light-bulb'
      },
      {
        id: 'com-3',
        title: 'Gallery',
        icon: 'gallery'
      },
      {
        id: 'com-4',
        title: 'Procenter',
        icon: 'newspaper'
      },
    ]
  },
  {
    id: '4',
    icon: 'search'
  }
];

export default menuOptions;