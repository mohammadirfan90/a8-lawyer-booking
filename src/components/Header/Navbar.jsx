import React from 'react'
import { Link } from 'react-router'
const Navbar = () => {
    const links = (
        <>
            <Link to="/"><li className="mr-10">Home</li></Link>
            <Link to="/my-bookings"><li className="mr-10">My-Bookings</li></Link>
            <Link to="/blogs"><li className="mr-10">Blogs</li></Link>
            <Link to="/contact-us"><li className="mr-10">Contact Us</li></Link>
        </>
    );
    return (
        <div className="bg-base-100 shadow-sm  ">
            <div className="navbar container mx-auto ">
                <div className="navbar-start my-2">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl"><div className='flex items-center gap-2'><img src="/assets/logo.png" alt="" /> <span className='font-bold text-2xl'>Law.BD</span></div></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className="btn btn-active btn-accent rounded-full text-lg text-white bg-[#0EA106] p-5">Contact Us</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar