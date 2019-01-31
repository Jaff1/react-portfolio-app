import React from 'react';
import{ NavLink } from 'react-router-dom';

export default function Navigation() {
    return (
        <div>
            <p>Navigation Thingy Start</p>
            <NavLink to='/'>Home </NavLink>
            <p>Navigation Border</p>
            <NavLink to='about'>About</NavLink>
            <p>Navigation Border</p>
            <NavLink to='blog'>Blog</NavLink>
            <p>Navigation Border</p>
            <NavLink to='portfolio'>Portfolio</NavLink>
            <p>Navigation Border</p>
            <NavLink to='technology'>Technology</NavLink>
            <p>Navigation Border</p>
            <NavLink to='intrests'>Intrests</NavLink>
            <p>Navigation Border</p>
            <NavLink to='contact'>Contact</NavLink>
            <p>Navigation Thingy End</p>
        </div>
    );
};