// import {Link} from 'react-router-dom';
import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import home1 from '../assets/home1.jpg'

import logo from '../assets/acc.png';

const Navbar = () => {
    const [navb, setNavb] = useState(false);
    const navigate = useNavigate();
    const li = [
        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'mission'
        },
        {
            id: 3,
            link: 'services'
        },
        {
            id: 4,
            link: 'gallery',
        },
        {
            id: 5,
            link: 'contact'
        }
    ]

    const Navigate = () => {
        navigate('/');
        setNavb(!navb);
    }
    return (
        <>
            <nav className='h-screen bg-cover bg-center' style={{ backgroundImage: `url(${home1})` }}>
                {navb && (
                    <>
                        <div onClick={()=>{setNavb(false)}} className='fixed left-0 top-0 h-full w-full'/>
                        <ul className='fixed z-30 w-[27rem] bg-gray-400 text-blue-800'>
                        <FaTimes size={30} className="absolute right-8 mt-8 text-black cursor-pointer" onClick={()=>{setNavb(false)}}/>
                        <img src={logo} alt='logo' className='h-20 ml-6 mt-2 cursor-pointer' onClick={Navigate} />
                        {li.map(({ id, link }) => (
                        <li key={id} className="border-t border-black px-10 cursor-pointer capitalize py-5 text-2xl hover:underline hover:text-green-800">
                            <Link to={link}>
                                {link}
                            </Link>
                        </li>
                        ))}
                        </ul>
                    </>
                )}
                <div className="p-2 flex justify-center ">
                    <div className='fixed bg-gray-400 rounded-full w-80 md:w-full xl:w-[76rem] flex justify-between items-center z-10'>
                        <Link to='home' smooth duration={500}>
                            <img src={logo} alt='logo' className='h-20 ml-6 cursor-pointer' onClick={Navigate} />
                        </Link>
                        <h3 className='hidden lg:flex text-5xl acc text-orange-600 underline'>Anmolculturalclub</h3>
                        <ul className='hidden md:flex text-2xl mr-6'>
                            {li.map(({ id, link}) => (
                                <li key={id} className='p-4 capitalize cursor-pointer text-blue-800 hover:underline hover:text-green-800 hover:scale-125 duration-200'>
                                    <Link to={link} smooth duration={500}>{link}</Link>
                                </li>
                            ))}
                        </ul>

                        <div onClick={() => setNavb(true)} className='absolute right-10 cursor-pointer text-black md:hidden z-100'>
                            <FaBars size={30} />
                        </div>

                    </div>
                </div>
            </nav>
            <Outlet />
        </>
    )
}
export default Navbar;
