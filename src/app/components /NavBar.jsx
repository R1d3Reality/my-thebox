// 'use client'
// import React, {useRef} from 'react';
// import NavLink from '@/app/components /NavLink';
// import {FaBars, FaTimes} from 'react-icons/fa';
//
//
// const navLinks = [
//     {
//         title: 'Home',
//         path: '/'
//     },
//     {
//         title: 'About us',
//         path: '#about'
//     },
//     {
//         title: 'Projects',
//         path: '#projects'
//     },
//     {
//         title: 'Services.jsx',
//         path: '#services'
//     },
//     {
//         title: 'Contact us',
//         path: '#contact'
//     }
//
// ]
//
// const NavBar = () => {
//
//     const navRef = useRef();
//
//
//
//
//     return (
//         <nav className='nav' ref={navRef}>
//             <ul className='nav-elem'>
//                 { navLinks.map((link, index) => (
//                     <li className='nav-elem-item'
//                         key={index}>
//                         <NavLink href={link.path} title={link.title} />
//                     </li>
//                 ))}
//                 <button
//                     className='nav-btn nav-close-btn'
//                     onClick={showNavBar}>
//                     <FaTimes />
//                 </button>
//             </ul>
//             <button
//                 className='nav-btn'
//                 onClick={showNavBar}>
//                 <FaBars />
//             </button>
//         </nav>
//     )
// }
//
// export default NavBar;