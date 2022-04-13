import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Nav({ classState }) {
    return (
        <>
            <nav className={`${classState}` + ' nav'} id='nav-genres'>
                <ul className='nav-ul'>
                    <Link to='/books'>
                        <li className='nav-link'>Current Inventory</li>
                    </Link>
                    <Link to='/grocery/Eaten'>
                        <li className='nav-link'>What I Have Eaten</li>
                    </Link>
                </ul>
                <Link to='/add-book'>
                    <button id='add-book'>Add a grocery item</button>
                </Link>
            </nav>
        </>
    );
}

export default Nav;

