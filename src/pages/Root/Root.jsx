import React, { Suspense } from 'react'
import Navbar from '../../components/Header/Navbar'
import { Outlet, useNavigation } from 'react-router'
import Footer from '../../components/Footer/Footer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Loading from '../../components/Loading/Loading'

const Root = () => {
    const navigation = useNavigation();

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