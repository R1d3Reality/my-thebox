'use client'
import Image from 'next/image';
import React, {useRef} from 'react';
import Link from 'next/link';
import {FaBars, FaTimes} from 'react-icons/fa';


const Header = () => {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle(
            "responsive_nav"
        );
    };
    return (
        <header className='header'>
            <div className='header-logo'>
                <Image
                    src='/images/Logo.svg'
                    alt='Logo'
                    width={38}
                    height={47}
                />
                <p className='header-text'>
                    The<span className='header-text-span'>Box</span>
                </p>
            </div>
            <nav className='nav' ref={navRef}>
                <ul className='nav-elem'>
                    <li className='nav-elem-item'>
                        <Link
                            className='link'
                            href='/'>
                            Home
                        </Link>
                    </li>
                    <li className='nav-elem-item'>
                        <Link
                            className='link'
                            href='#about'>
                            About us
                        </Link>
                    </li>
                    <li className='nav-elem-item'>
                        <Link
                            className='link'
                            href='#about'>
                            Projects
                        </Link>
                    </li>
                    <li className='nav-elem-item'>
                        <Link
                            className='link'
                            href='#about'>
                            Services
                        </Link>
                    </li>
                    <li className='nav-elem-item'>
                        <Link
                            className='link'
                            href='#about'>
                            Contact us
                        </Link>
                    </li>
                </ul>
                <button
                    className="nav-btn nav-close-btn"
                    onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button
                className="nav-btn"
                onClick={showNavbar}>
                <FaBars />
            </button>
        </header>
    )
}

export default Header;