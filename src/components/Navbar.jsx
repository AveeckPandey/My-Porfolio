// Navbar.jsx
import React, { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Smooth scrolling function
  const smoothScrollTo = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    // Close mobile menu if open
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Aveeck</a>
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a onClick={() => smoothScrollTo('Hero')} className="hover:text-gray-800 cursor-pointer">Home</a></li>
          <li><a onClick={() => smoothScrollTo('About')} className="hover:text-gray-800 cursor-pointer">About</a></li>
          <li><a onClick={() => smoothScrollTo('Skills')} className="hover:text-gray-800 cursor-pointer">Skills</a></li>
          <li><a onClick={() => smoothScrollTo('Projects')} className="hover:text-gray-800 cursor-pointer">Projects</a></li>
          <li><a onClick={() => smoothScrollTo('Contact')} className="hover:text-gray-800 cursor-pointer">Contact Me</a></li>
        </ul>
      </div>

      {/* Desktop Theme Dropdown */}
      <div className="hidden md:flex ml-2">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn m-1 animate-pulse vibrate-2-normal ">
            Theme
            <svg
              width="12px"
              height="12px"
              className="inline-block h-2 w-2 fill-current opacity-60"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 2048 2048">
              <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
            </svg>
          </div>
          <ul tabIndex={0} className="dropdown-content bg-base-300 rounded-box z-[1] w-52 p-2 shadow-2xl">
            <li>
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
                aria-label="Default"
                value="default"
              />
            </li>
            <li>
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
                aria-label="Synthwave"
                value="synthwave
"
              />
                        <li>
            <input
              type="radio"
              name="mobile-theme"
              className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
              aria-label="Abyss"
              value="abyss"
              onClick={toggleMobileMenu}
            />
          </li>
            </li>
            <li>
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
                aria-label="Aqua"
                value="aqua"
              />
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Hamburger Menu Button */}
      <div className="flex md:hidden"> {/* Show only on mobile */}
        <button className="btn btn-square btn-ghost" onClick={toggleMobileMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-5 w-5 stroke-current">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      {/* Mobile Off-Canvas Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-transparent backdrop-blur-xl z-[999] transform transition-transform duration-300 ease-in-out
          ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
          md:hidden`} // Hidden on desktop
      >
        <div className="flex justify-end p-4">
          <button className="btn btn-square btn-ghost" onClick={toggleMobileMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-5 w-5 stroke-current">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <ul className="menu p-4 overflow-y-auto">
          <li><a onClick={() => smoothScrollTo('Hero')} className="hover:text-gray-800 cursor-pointer">Home</a></li>
          <li><a onClick={() => smoothScrollTo('About')} className="hover:text-gray-800 cursor-pointer">About Me</a></li>
          <li><a onClick={() => smoothScrollTo('Skills')} className="hover:text-gray-800 cursor-pointer">Skills</a></li>
          <li><a onClick={() => smoothScrollTo('Projects')} className="hover:text-gray-800 cursor-pointer">Project</a></li>
          <li><a onClick={() => smoothScrollTo('Contact')} className="hover:text-gray-800 cursor-pointer">Contact</a></li>
       
          <li className="menu-title mt-4">Theme</li>
          <li>
            <input
              type="radio"
              name="mobile-theme"
              className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
              aria-label="Default"
              value="default"
              onClick={toggleMobileMenu}
            />
          </li>

          <li>
            <input
              type="radio"
              name="mobile-theme"
              className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
              aria-label="Synthwave"
              value="synthwave"
              onClick={toggleMobileMenu}
            />
          </li>
                    <li>
            <input
              type="radio"
              name="mobile-theme"
              className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
              aria-label="Abyss"
              value="abyss"
              onClick={toggleMobileMenu}
            />
          </li>
          <li>
            <input
              type="radio"
              name="mobile-theme"
              className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
              aria-label="Aqua"
              value="aqua"
              onClick={toggleMobileMenu}
            />
          </li>
        </ul>
      </div>

      {/* Overlay to close menu when clicked outside */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-[900] md:hidden"
          onClick={toggleMobileMenu}
        ></div>
      )}
    </div>
  );
};

export default Navbar;