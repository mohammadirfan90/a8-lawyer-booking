import React, { Suspense } from 'react'
import Navbar from '../../components/Header/Navbar'
import { Outlet, useLocation, useNavigation } from 'react-router'
import { useEffect } from 'react'
import Footer from '../../components/Footer/Footer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Loading from '../../components/Loading/Loading'

const Root = () => {
    const navigation = useNavigation();
    const location = useLocation();

    useEffect(() => {
        const path = location.pathname;
        if (path === '/') {
            document.title = 'Home | Law.BD';
        } else if (path === '/my-bookings') {
            document.title = 'Booking';
        } else if (path === '/blogs') {
            document.title = 'Blogs | Law.BD';
        } else if (path === '/contact-us') {
            document.title = 'Contact Us | Law.BD';
        }
    }, [location]);

    return (
        <div>
            <ToastContainer position="top-center" autoClose={3000} />
            <Navbar></Navbar>
            {navigation.state === "loading" ? (
                <Loading />
            ) : (
                <Suspense fallback={<Loading />}>
                    <Outlet />
                </Suspense>
            )}
            <Footer></Footer>
        </div>
    )
}

export default Root