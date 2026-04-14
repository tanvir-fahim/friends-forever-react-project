import React from 'react';
import Navbar from '../components/shared/Navbar/Navbar';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div>
            <nav className="fixed top-0 left-0 w-full z-50">
                <Navbar />
            </nav>

            <main className=""> 
                <Outlet />
            </main>
        </div>
    );
};

export default MainLayout;