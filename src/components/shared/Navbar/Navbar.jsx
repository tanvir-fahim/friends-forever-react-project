import React from 'react';
import { ImStatsBars } from 'react-icons/im';
import { IoMdHome } from 'react-icons/io';
import { RiTimeLine } from 'react-icons/ri';
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <nav className='bg-base-100 shadow-sm '>
            <div className="navbar container mx-auto">
                <div className="flex-1">
                    <h2 className="text-xl"><span className='font-bold'>Keen</span>Keeper</h2>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal gap-1">
                        <li><NavLink to="/" className={({ isActive }) => isActive ? "bg-[#244D3F] text-white" : ""}><IoMdHome />Home</NavLink></li>
                        <li><NavLink to="/timeline" className={({ isActive }) => isActive ? "bg-[#244D3F] text-white" : ""}><RiTimeLine />Timeline</NavLink></li>
                        <li><NavLink to="/stats" className={({ isActive }) => isActive ? "bg-[#244D3F] text-white" : ""}><ImStatsBars />Stats</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;