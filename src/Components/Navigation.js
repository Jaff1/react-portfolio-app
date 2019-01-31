import React from 'react';
import{ NavLink } from 'react-router-dom';

export default function Navigation() {
    return (
        <div>
            <p>Navigation Thingy Start</p>
            <NavLink to='/'>Home </NavLink>
            <p>Navigation Border</p>
            <NavLink to='/about '>About</NavLink>
            <p>Navigation Border</p>
            <NavLink to='/blog '>Blog</NavLink>
            <NavLink to='/portfolio '>Portfolio</NavLink>
            <NavLink to='/technology '>Technology</NavLink>
            <NavLink to='/intrests'>Intrests</NavLink>
            <NavLink to='/contact '>Contact</NavLink>
            <p>Navigation Thingy End</p>
        </div>
    );
};