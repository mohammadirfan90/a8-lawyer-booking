import React from "react";
import Navbar from "../../components/Header/Navbar";
import { Link } from "react-router";

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <div className="flex-grow flex flex-col items-center justify-center text-center px-4">
                <h1 className="text-9xl font-extrabold text-[#0EA106]">404</h1>
                <div className="bg-accent px-2 text-sm rounded rotate-12 absolute mb-40">
                    Page Not Found
                </div>
                <h2 className="text-3xl md:text-5xl font-bold mt-8 text-gray-800">
                    Oops! You've strayed too far.
                </h2>
                <p className="mt-4 text-lg text-gray-600 max-w-md">
                    The page you are looking for doesn't exist or has been moved.
                    Don't worry, our legal experts can help you find your way back.
                </p>
                <Link
                    to="/"
                    className="mt-10 px-8 py-3 bg-[#0EA106] text-white font-bold rounded-full hover:bg-[#0c8a05] transition-all shadow-xl hover:scale-105 active:scale-95"
                >
                    Back to Homepage
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;
