import React from 'react';
import Navbar from '../components/shared/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/shared/Footer/Footer';

const MainLayout = () => {
    return (
        <div className="flex flex-col min-h-screen bg-[#F8FAFC]">

            <nav className="fixed top-0 left-0 w-full z-50">
                <Navbar />
            </nav>

            <main className="grow pt-20">
                <Outlet/>
            </main>

            <Footer />

        </div>
    );
};

export default MainLayout;