import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    return(
        <div className='navbar'>
            <NavLink to='/' activeClassName='selected'>Home</NavLink>
            <NavLink to='/smurf-form' activeClassName='selected'>Form</NavLink>
        </div>
    )
}

export default Navbar; 