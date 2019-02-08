import React from 'react';
import{ NavLink } from 'react-router-dom';

export default function Navigation() {
    return (
        <div>
            <p>Navigation Thingy Start</p>
            <li className="liItem"> <NavLink to='/'>Home </NavLink> </li>
            <li className="liItem"> <NavLink to='about'>About</NavLink> </li>
            <li className="liItem"> <NavLink to='blog'>Blog</NavLink> </li>
            <li className="liItem"> <NavLink to='portfolio'>Portfolio</NavLink> </li>
            <li className="liItem"> <NavLink to='technology'>Technology</NavLink> </li>
            <li className="liItem"> <NavLink to='intrests'>Intrests</NavLink> </li>
            <li className="liItem"> <NavLink to='contact'>Contact</NavLink> </li>
            <p>Navigation Thingy End</p>
        </div>
    );
};
