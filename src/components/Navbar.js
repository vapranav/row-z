import { Link } from "gatsby";
import React, { Component } from "react";
import Toggle from "../components/themeToggle";

let Navbar = () => {
  return (
    <nav className='flex justify-between items-center h-16 bg-white dark:bg-dark-gray text-white sticky top-0 z-40'>
      <Link
        to='/'
        className='pl-8 text-xl font-raleway font-bold text-black dark:text-white'
      >
        row-z
      </Link>
      <div className='text-black dark:text-white textpx-4 cursor-pointer md:hidden relative'>
        <Toggle />
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6 mr-4'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M4 6h16M4 12h16M4 18h16'
          />
        </svg>
      </div>
      <div className='pr-8 md:block hidden relative'>
        <Link
          className='p-4 font-raleway text-black dark:text-white'
          to='/Homepage2'
        >
          Blog
        </Link>
        <Link
          className='p-4 mr-8 font-raleway text-black dark:text-white'
          to='/'
        >
          About
        </Link>
        <Toggle />
      </div>
    </nav>
  );
};

export default Navbar;
