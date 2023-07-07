import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import "../NavBar/nav-app.css"


const NavBar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <nav className='header'>
        <ul className='ul-inicio'>
        <li className='inicio-li'><Link to="/">INICIO</Link></li>
        </ul>
                <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        style={{flexDirection:"column", color:"white"}}
      >
        CATEGORIAS
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={handleClose} ><Link to="/catalogo">Catalogo</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to="/categoria/campera">Camperas</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to="/categoria/remeras">Remeras</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to="/categoria/pantalones">Pantalones</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to="/categoria/buzos">Buzos</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to="/categoria/gorras">Gorras</Link></MenuItem>
      </Menu>
      <Link className='widget' to="/cart"><CartWidget/></Link>
      
        </nav>
    </div>
  );
}

export default NavBar


// import React from "react";
// import "../NavBar/navStyle.css"
// import { Link } from "react-router-dom";
// import CartWidget from "../CartWidget/CartWidget";


// const NavBar = () => {

  
    
//     return(
//         <div>
//             <nav className="navApp">
//                 <ul>
//                     <li><Link to="/">Inicio</Link></li>
//                     <li><Link to="/catalogo">Catalogo</Link></li>
//                     <li><Link to="/categoria/campera">campera</Link></li>
//                     <li><Link to="/categoria/remeras">Remeras</Link></li>
//                     <li><Link to="/categoria/pantalones">Pantalones</Link></li>
//                     <li><Link to="/categoria/buzos">Buzos</Link></li>
//                     <li><Link to="/categoria/gorras">Gorras</Link></li> 
//                     <li><Link to="/cart"><CartWidget/></Link></li>
                    
//                 </ul>
                
//             </nav>
//         </div>
//     );
// };

// export default NavBar;