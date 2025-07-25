import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import { ToastContainer } from 'react-toastify';

const AuthLayout = () => {
    return (
        <div>
                        <ToastContainer />
            <header className=' sticky top-0 z-10'>
                <Navbar></Navbar>
            </header>
            <main className='max-w-7xl mx-auto min-h-screen'>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default AuthLayout;