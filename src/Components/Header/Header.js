import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='mt-6'>
            <Link className='border-orange-700 m-5 rounded-md font-bold bg-blue-600 p-2 hover:bg-emerald-400 active:bg-emerald-400' to='/'>Home</Link>
            <Link className='border-orange-700 m-5 rounded-md font-bold bg-blue-600 p-2 hover:bg-emerald-400 active:bg-emerald-400' to='/orders'>Orders</Link>
            <Link className=' border-orange-700 mt-5 rounded-md font-bold bg-blue-600 p-2 hover:bg-emerald-400 active:bg-emerald-400' to='/about'>About</Link>
        </div>
    );
};

export default Header;