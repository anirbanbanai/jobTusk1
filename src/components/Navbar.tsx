import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div className='navbar blue '>
            <Link className='deconone ' href="/">
                <h3>Home</h3>
            </Link>
            <Link className='deconone' href="/add">
                <h3>Add</h3>
            </Link>
            <Link className='deconone' href="/">
                <h3>deleted</h3>
            </Link>
        </div>
    );
};

export default Navbar;