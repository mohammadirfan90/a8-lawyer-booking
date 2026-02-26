import React from "react";
import { Link } from "react-router";
import { FaFacebook, FaXTwitter, FaLinkedin, FaYoutube } from "react-icons/fa6";
const Footer = () => {
  const links = (
    <>
      <Link to="/">
        <li className="mr-10">Home</li>
      </Link>
      <Link to="/my-bookings">
        <li className="mr-10">My-Bookings</li>
      </Link>
      <Link to="/blogs">
        <li className="mr-10">Blogs</li>
      </Link>
      <Link to="/contact">
        <li className="mr-10">Contact Us</li>
      </Link>
    </>
  );
  return (
    <footer className="footer footer-horizontal footer-center bg-[#0F0F0F] text-primary-content p-10">
      <aside>
        <a className="btn btn-ghost text-xl">
          <div className="flex items-center gap-2">
            <img src="../assets/logo-footer.png" alt="" />{" "}
            <span className="font-bold text-2xl">Law.BD</span>
          </div>
        </a>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a href="https://www.facebook.com/mohammadirfan.mig29/">
            <FaFacebook className="text-2xl" />
          </a>
          <a href="https://x.com/Im97Irfanmd">
            <FaXTwitter className="text-2xl" />
          </a>
          <a href="https://www.linkedin.com/in/mohammad-irfan-smuct/">
            <FaLinkedin className="text-2xl" />
          </a>
          <a href="https://www.youtube.com/@learnwithirfan-w1q">
            <FaYoutube className="text-2xl" />
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
