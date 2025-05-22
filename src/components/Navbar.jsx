import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

import logo from '../assets/logo.svg';
import searchIcon from '../assets/searchIcon.svg';
import menuIcon from '../assets/menuIcon.svg';
import closeIcon from '../assets/closeIcon.svg';
import { useClerk, useUser, UserButton } from '@clerk/clerk-react';

const BookIcon = () => (
  <svg className="w-4 h-4 text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
      d="M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13H7a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M9 3v14m7 0v4" />
  </svg>
);

const Navbar = () => {
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Hotels', path: '/rooms' },
    { name: 'Experience', path: '/' },
    { name: 'About', path: '/' },
  ];

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { openSignIn } = useClerk();
  const { user } = useUser();
  const navigate = useNavigate();
  const location = useLocation();

 useEffect(() => {
  const shouldScrollEffectApply = location.pathname === '/';

  const handleScroll = () => {
    if (shouldScrollEffectApply) {
      setIsScrolled(window.scrollY > 10);
    } else {
      setIsScrolled(true);
    }
  };

  // Call once to set initial scroll state
  handleScroll();

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, [location.pathname]);


  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
  }, [isMenuOpen]);

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 px-4 md:px-16 lg:px-24 xl:px-32 flex items-center justify-between 
        ${isScrolled ? "bg-white/80 shadow-md text-gray-700 backdrop-blur-lg py-3 md:py-4" : "text-white py-4 md:py-6"}`}>

        {/* Logo */}
        <Link to="/" aria-label="Homepage">
          <img src={logo} alt="Logo" className={`h-9 ${isScrolled ? "invert opacity-80" : ""}`} />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4 lg:gap-8">
          {navLinks.map((link, i) => (
            <Link key={i} to={link.path} className="group flex flex-col gap-0.5">
              {link.name}
              <div className={`h-0.5 w-0 group-hover:w-full transition-all duration-300 ${isScrolled ? "bg-gray-700" : "bg-white"}`} />
            </Link>
          ))}
          <button
            onClick={() => navigate('/owner')}
            className={`border px-4 py-1 text-sm font-light rounded-full transition-all 
            ${isScrolled ? 'text-black border-black' : 'text-white border-white'}`}
          >
            Dashboard
          </button>
        </div>

        {/* Desktop Right Side */}
        <div className="hidden md:flex items-center gap-4">
          <img src={searchIcon} alt="Search" className={`h-7 transition-all duration-500 ${isScrolled ? "invert" : ""}`} />

          {user ? (
            <div className="relative group">
              <UserButton afterSignOutUrl="/" />
              <div className="absolute right-0 mt-2 hidden group-hover:flex flex-col bg-white shadow-lg border rounded-md min-w-[180px] z-50">
                <Link
                  to="/my-bookings"
                  className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2"
                >
                  <BookIcon />
                  My Bookings
                </Link>
              </div>
            </div>
          ) : (
            <button
              onClick={openSignIn}
              className="bg-black text-white px-8 py-2.5 rounded-full transition-all duration-500 ml-4"
            >
              Login
            </button>
          )}
        </div>

        {/* Mobile Toggle + UserButton */}
        <div className="md:hidden flex items-center gap-3">
          <img
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            src={isMenuOpen ? closeIcon : menuIcon}
            alt="Menu Toggle"
            className={`h-6 cursor-pointer transition-all duration-300 ${isScrolled ? "invert" : ""}`}
            role="button"
            aria-label="Toggle menu"
          />
          {user && (
            <UserButton afterSignOutUrl="/" />
          )}
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed top-0 left-0 w-full h-screen bg-gradient-to-t from-gray-100 to-white text-base flex flex-col items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 z-40 transform ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
        {navLinks.map((link, i) => (
          <Link key={i} to={link.path} onClick={() => setIsMenuOpen(false)}>
            {link.name}
          </Link>
        ))}

        {user && (
          <Link to="/my-bookings" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2">
            <BookIcon />
            My Bookings
          </Link>
        )}

        <button
          onClick={() => {
            setIsMenuOpen(false);
            navigate('/owner');
          }}
          className="border px-4 py-1 text-sm font-light rounded-full transition-all"
        >
          Dashboard
        </button>

        {!user && (
          <button
            onClick={openSignIn}
            className="bg-black text-white px-8 py-2.5 rounded-full transition-all duration-500"
          >
            Login
          </button>
        )}
      </div>
    </>
  );
};

export default Navbar;
