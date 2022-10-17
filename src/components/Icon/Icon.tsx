import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export interface IconProps{
  icon?: string;
};

const Icon = ({icon}: IconProps) => {
  switch(icon){
    case 'search': return (<div><SearchIcon/></div>);
    case 'account': return (<div><AccountCircleIcon/></div>);
    default: return (<div></div>);
  }
};

export default Icon;