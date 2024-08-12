import React from 'react';
import {Nav,NavLink,NavMenu} from './NavbarElements';
import { NavbarBrand } from 'react-bootstrap';



const Navbar=()=>{
    return(
       <div>
        <Nav>
            <NavMenu >
               
                <NavbarBrand style={{color:'white',fontsize:'large'}}>Notes Manager</NavbarBrand>
                 <NavLink to='/'activestyle>Home</NavLink>
                 <NavLink to='/register'>Register</NavLink>
                 <NavLink to='/login'>Login</NavLink>
            </NavMenu>
        </Nav>
       </div>
    );
};
export default Navbar;