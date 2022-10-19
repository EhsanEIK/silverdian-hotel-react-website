import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/UserContext';
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [open, setOpen] = useState(false);

    const handleLogOut = () => {
        logOut().then(r => { }).catch(error => console.error(error));
    }

    return (
        <div className={`navbar bg-base-100 ${open ? 'pb-20' : 'pb-0'}`}>
            <div className='container mx-auto'>
                <div className="flex-1">
                    <Link className="btn btn-ghost normal-case text-xl md:mb-0 mb-3" to='/'>Silverdian Hotel</Link>
                </div>
                {user?.email || user?.displayName ? < p className='text-blue-500 font-semibold text-center mr-5'>Welcome, {user?.email || user?.displayName}</p>
                    : ''}
                <div onClick={() => setOpen(!open)} className='cursor-pointer md:hidden block'>
                    {
                        open ? <FaTimes /> : <FaBars />
                    }
                </div>
                <div className={`md:flex-none md:static absolute duration-500 ${open ? 'top-10' : '-top-96'}`}>
                    <ul className="menu menu-horizontal flex-wrap md:w-auto w-96 p-0 md:mt-0 mt-3">
                        <li><Link to='/home'>Home</Link></li>
                        <li><Link to='/rooms'>Rooms</Link></li>
                        <li><Link to='/about'>About Us</Link></li>
                        <li><Link to='/contact'>Contact Us</Link></li>
                        {
                            user?.uid ? <li onClick={handleLogOut}><Link>Logout</Link></li>
                                : <li><Link to='/login'>Login</Link></li>
                        }
                    </ul>
                </div>
            </div>
        </div >
    );
};

export default Navbar;