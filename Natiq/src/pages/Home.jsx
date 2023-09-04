import React from 'react';
import Navbar from '../components/Navbar';
import HomeContents from '../components/HomeContents';
import CTA from '../components/HomeCTA';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <div className='bg-primary w-full h-full overflow-auto'>
            <Navbar />
            <HomeContents />
            <CTA />
            <Footer />
        </div>
    );
}

{/* <header className="bg-white shadow-sm">
            <div className="container mx-auto px-4 py-4">
                <nav className="flex justify-between items-center">
                    <Link to="/" className="flex items-center">
                        <img src="https://bitnine.net/wp-content/uploads/2021/02/b_logo.png" alt="Bitnine logo" className="h-auto w-auto mr-32" />
                    </Link>
                    <div className="hidden md:flex items-center">
                        <ul className="flex">
                            <li className="mx-3">
                                <Link to="/" className="text-gray-600 hover:text-gray-800">Home</Link>
                            </li>
                            <li className="mx-3">
                                <Link to="/products" className="text-gray-600 hover:text-gray-800">Products</Link>
                            </li>
                            <li className="mx-3">
                                <Link to="/solutions" className="text-gray-600 hover:text-gray-800">Solutions</Link>
                            </li>
                            <li className="mx-3">
                                <Link to="/about" className="text-gray-600 hover:text-gray-800">About Us</Link>
                            </li>
                        </ul>
                        <Link to="/contact" className="ml-4 text-white bg-blue-500 hover:bg-blue-600 rounded-full py-2 px-4 font-bold">Contact Us</Link>
                    </div>
                    <button className="md:hidden focus:outline-none">
                        <svg className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </nav>
            </div>
        </header> */}