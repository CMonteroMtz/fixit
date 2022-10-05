export type MenuOption = {
  id: string;
  title?: string;
  icon?: string;
  submenu?: MenuOption[];
};