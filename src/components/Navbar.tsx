import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div className='navbar blue f'>
            <Link className='deconone ' href="/">
                <h2>Home</h2>
            </Link>
            <Link className='deconone' href="/add">
                <h2>Add</h2>
            </Link>
        </div>
    );
};

export default Navbar;