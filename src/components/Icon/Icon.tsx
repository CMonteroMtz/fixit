import SearchIcon from '@mui/icons-material/Search';

export interface IconProps{
  icon?: string;
};

const Icon = ({icon}: IconProps) => {
  switch(icon){
    case 'search': return (<div><SearchIcon/></div>);
    default: return (<div></div>);
  }
};

export default Icon;