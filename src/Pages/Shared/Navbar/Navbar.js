import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/UserContext';

const Navbar = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className="navbar bg-base-100">
            <div className='container mx-auto'>
                <div className="flex-1">
                    <Link className="btn btn-ghost normal-case text-xl" to='/'>Silverdian Hotel</Link>
                </div>
                {user?.email || user?.displayName ? < p className='text-blue-500 font-semibold mr-5'>Welcome, {user?.email || user?.displayName}</p>
                    : ''}
                <div className="flex-none">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to='/home'>Home</Link></li>
                        <li><Link to='/rooms'>Rooms</Link></li>
                        <li><Link to='/about'>About Us</Link></li>
                        <li><Link to='/contact'>Contact Us</Link></li>
                        <li><Link to='/login'>Login</Link></li>
                    </ul>
                </div>
            </div>
        </div >
    );
};

export default Navbar;