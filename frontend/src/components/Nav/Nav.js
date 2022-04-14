import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <>
            <nav className='navs' id='nav-genres'>
                <ul className='nav-ul'>
                    <Link to='/list'>
                        <li className='nav-link'>Current Inventory</li>
                    </Link>
                    <Link to='/eaten'>
                        <li className='nav-link'>What I Have Eaten</li>
                    </Link>
                </ul>
                <Link to='/add-grocery'>
                    <button id='add-grocery'>Add a grocery item</button>
                </Link>
            </nav>
        </>
    );
}

export default Nav;
