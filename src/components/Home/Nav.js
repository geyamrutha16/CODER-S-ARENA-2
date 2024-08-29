import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import LoadingBar from './LoadingBar';
import image from '../../assets/cclogo.gif';
import '../../App.css';

const Nav = () => {
    const Links = [
        { name: "HOME", link: "/" },
        { name: "ABOUT", link: "/about" },
        { name: "EVENTS", link: "/events" },
        { name: "CALENDAR", link: "/calendar" },
    ];

    const [open1, setOpen1] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [loading, setLoading] = useState(false);
    const dropdownRef = useRef(null);

    // Handle dropdown toggle
    const handleDropdownClick = (dropdown) => {
        setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
    };

    // Handle click outside dropdown
    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setActiveDropdown(null);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        if (loading) {
            const timer = setTimeout(() => setLoading(false), 1000);
            return () => clearTimeout(timer);
        }
    }, [loading]);

    const handleLinkClick = () => {
        setLoading(true);
    };

    return (
        <>
            {loading && <LoadingBar />}
            <div className='shadow-md w-100 fixed top-0 left-0 ' style={{ zIndex: "1000" }}>
                <div className="flex flex-col md:flex-row items-center justify-between bg-white md:px-10 px-7">
                    <div className='navbar-brand font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800'>
                        <div className='flex items-center' style={{ marginLeft: "0px", marginRight: "80px" }}>
                            <span className='text-3xl text-indigo-600 mr-1 pt-1'>
                                {/* <ion-icon name="logo-ionic"></ion-icon> */}
                                <img src={image} style={{ width: "60px", marginBottom: "10px", marginRight: "2px" }} alt='2024' />
                            </span>
                            <h1 style={{ fontSize: "1rem" }}>Coder's Arena</h1>
                        </div>

                        <div onClick={() => setOpen1(!open1)} className="text-3xl cursor-pointer md:hidden">
                            <ion-icon
                                name={open1 ? 'close' : 'menu'}
                                style={{ marginTop: '10px' }}
                            ></ion-icon>
                        </div>

                    </div>

                    <ul className={`md:flex md:items-center md:justify-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open1 ? 'top-10' : 'top-[-490px]'}`}>
                        {Links.map((link) => (
                            <li key={link.name} className='md:ml-8 text-l md:my-0 my-7' onClick={() => { setOpen1(false); handleLinkClick(); }}>
                                <Link to={link.link} className='text-gray-800  duration-500'>{link.name}</Link>
                            </li>
                        ))}
                        <li className='md:ml-8 text-l md:my-0 my-7 relative' ref={dropdownRef}>
                            <div className='text-gray-800 duration-500 cursor-pointer' onClick={() => handleDropdownClick('resources')}>
                                RESOURCES
                                <FontAwesomeIcon icon={faCaretDown} style={{ color: "#000000", paddingLeft: "10px" }} />
                            </div>
                            {activeDropdown === 'resources' && (
                                <ul className='absolute bg-white shadow-md mt-3 w-40 border border-secondary-subtle' style={{ zIndex: "200" }}>
                                    <li className='px-4 py-2 hover:bg-gray-100' onClick={() => { setOpen1(false); handleLinkClick(); }}>
                                        <Link to="/resources" className='text-gray-700 hover:text-blue-400 duration-500'>Java</Link>
                                    </li>
                                    <li className='px-4 py-2 hover:bg-gray-100' onClick={() => { setOpen1(false); handleLinkClick(); }}>
                                        <Link to="/resources" className='text-gray-700 hover:text-blue-400 duration-500'>Python</Link>
                                    </li>
                                    <li className='px-4 py-2 hover:bg-gray-100' onClick={() => { setOpen1(false); handleLinkClick(); }}>
                                        <Link to="/resources" className='text-gray-700 hover:text-blue-400 duration-500'>Weekly Codes</Link>
                                    </li>
                                </ul>
                            )}
                        </li>
                        <Button style={{ padding: 0 }}>
                            <Link to="/join" onClick={() => { setOpen1(false); handleLinkClick(); }}>Join Now</Link>
                        </Button>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Nav;

