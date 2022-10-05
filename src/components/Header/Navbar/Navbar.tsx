import './Navbar.scss';


// TODO: Why do I have to declare a new interface for NavbarProps instead of destructuring and use MenuOption[]

type MenuOption = {
  id: string;
  title?: string;
  icon?: string;
  submenu?: MenuOption[];
};

interface NavbarProps {
  menu: MenuOption[];
}

const Navbar = (props: NavbarProps) => {
  return (
    <nav>
      <ul className='menu'>
        {
          props.menu.map((option: any) => (
            <li className='menu-option' key={option.id}>{ option.title }</li>
          ))
        }
      </ul>
    </nav>
  );
};

export default Navbar;