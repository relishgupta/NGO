import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

import logo from '../assets/acc.png';

const Navbar = () => {
    const [navb, setNavb] = useState(false);
    const navigate = useNavigate();

    const ToHome = () => {
        navigate('/')
       
        setNavb(false);
    }
    const ToMission=()=>{
        navigate('/mission')
        setNavb(false);
    }
    const ToGallery=()=>{
        navigate('/gallery')
        setNavb(false);
    }
    const ToServices=()=>{
        navigate('/')
        setNavb(false);
    }
    return (
        <>
                {navb && (
                    <>
                        <div onClick={()=>{setNavb(false)}} className='fixed left-0 top-0 h-full w-full'/>
                        <ul className='fixed z-30 w-[27rem] bg-gray-400 text-blue-800'>
                        <FaTimes size={30} className="absolute right-8 mt-8 text-black cursor-pointer" onClick={()=>{setNavb(false)}}/>
                        <img src={logo} alt='logo' className='h-20 ml-6 mt-2 cursor-pointer' onClick={ToHome} />
                        <li className="border-t border-black px-10 cursor-pointer capitalize py-5 text-2xl hover:underline hover:text-green-800">
                            <Link to='home' smooth duration={500} onClick={ToHome}>home</Link>
                        </li>
                        <li className="border-t border-black px-10 cursor-pointer capitalize py-5 text-2xl hover:underline hover:text-green-800">
                            <Link to='' smooth duration={500} onClick={ToMission}>mission</Link>
                        </li>
                        <li className="border-t border-black px-10 cursor-pointer capitalize py-5 text-2xl hover:underline hover:text-green-800">
                            <Link to='services' smooth duration={500} onClick={ToServices}>services</Link>
                        </li>
                        <li className="border-t border-black px-10 cursor-pointer capitalize py-5 text-2xl hover:underline hover:text-green-800">
                            <Link to='gallery' smooth duration={500} onClick={ToGallery} >gallery</Link>
                        </li>
                        <li className="border-t border-black px-10 cursor-pointer capitalize py-5 text-2xl hover:underline hover:text-green-800">
                            <Link to='contact' onClick={()=>setNavb(false)} smooth duration={500}>contact</Link>
                        </li>
                        </ul>
                    </>
                )}
                <div className="p-2 flex justify-center ">
                    <div className='fixed bg-gray-400 rounded-full w-80 md:w-full xl:w-[76rem] flex justify-between items-center z-10'>
                        <Link to='home' smooth duration={500}>
                            <img src={logo} alt='logo' className='h-20 ml-6 cursor-pointer' onClick={ToHome} />
                        </Link>
                        <h3 className='hidden lg:flex text-5xl acc text-orange-600 underline'>Anmolculturalclub</h3>
                        <ul className='hidden md:flex text-2xl mr-6'>
                                <li className='p-4 capitalize cursor-pointer text-blue-800 hover:underline hover:text-green-800 hover:scale-125 duration-200'>
                                    <Link to='home' smooth duration={500} onClick={ToHome}>home</Link>
                                </li>
                                <li className='p-4 capitalize cursor-pointer text-blue-800 hover:underline hover:text-green-800 hover:scale-125 duration-200'>
                                    <Link to='' smooth duration={500} onClick={ToMission}>mission</Link>
                                </li>
                                <li className='p-4 capitalize cursor-pointer text-blue-800 hover:underline hover:text-green-800 hover:scale-125 duration-200'>
                                    <Link to='services' smooth duration={500} onClick={ToServices}>services</Link>
                                </li>
                                <li className='p-4 capitalize cursor-pointer text-blue-800 hover:underline hover:text-green-800 hover:scale-125 duration-200'>
                                    <Link to='gallery' smooth duration={500} onClick={ToGallery} >gallery</Link>
                                </li>
                                <li className='p-4 capitalize cursor-pointer text-blue-800 hover:underline hover:text-green-800 hover:scale-125 duration-200'>
                                    <Link to='contact' smooth duration={500}>contact</Link>
                                </li>
                        </ul>

                        <div onClick={() => setNavb(true)} className='absolute right-10 cursor-pointer text-black md:hidden z-100'>
                            <FaBars size={30} />
                        </div>
                    </div>
                </div>
            <Outlet />
        </>
    )
}
export default Navbar;
