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

    const toggleOffcanvas = () => {
    setNavb(!navb);
    };
    return (
        <>
          <div>
            {navb && (
              <>
                <div className="fixed left-0 top-0 w-full h-full bg-black opacity-50 z-40" onClick={toggleOffcanvas}/>
                  <div className="fixed left-0 top-0 w-64 bg-gray-400 h-screen transform translate-x-0 transition-transform duration-300 ease-in-out z-50">
                    <h1 className='p-3 acc text-3xl text-orange-600 underline '>Anmolculturalclub</h1>
                    <button className="absolute right-4 top-4 text-blue-800" onClick={toggleOffcanvas}>
                      <FaTimes />
                    </button>                    
                    <ul className="py-8 text-xl">
                      <li className="pl-6 py-2">
                        <Link
                          to="home"
                          smooth
                          duration={500}
                          onClick={ToHome}
                          className="text-blue-800 hover:text-gr hover:underline cursor-pointer"
                        >
                          Home
                        </Link>
                      </li>
                      <li className="pl-6 py-2">
                        <Link
                          to="mission"
                          smooth
                          duration={500}
                          onClick={ToMission}
                          className="text-blue-800 hover:text-gr hover:underline cursor-pointer"
                        >
                          Mission
                        </Link>
                      </li>
                      <li className="pl-6 py-2">
                        <Link
                          to="services"
                          smooth
                          duration={500}
                          onClick={ToServices}
                          className="text-blue-800 hover:text-gr hover:underline cursor-pointer"
                        >
                          Services
                        </Link>
                      </li>
                      <li className="pl-6 py-2">
                        <Link
                          to="gallery"
                          smooth
                          duration={500}
                          onClick={ToGallery}
                          className="text-blue-800 hover:text-gr hover:underline cursor-pointer"
                        >
                          Gallery
                        </Link>
                      </li>
                      <li className="pl-6 py-2">
                        <Link
                          to="contact"
                          smooth
                          duration={500}
                          onClick={toggleOffcanvas}
                          className="text-blue-800 hover:text-gr hover:underline cursor-pointer"
                        >
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </div>
            </>
            )}
          </div>
                <div className="p-2 flex justify-center ">
                    <div className='fixed bg-gray-400 rounded-full w-80 md:w-full xl:w-[76rem] sz:w-[90rem] flex justify-between items-center z-30'>
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

                        <button className="absolute right-10 cursor-pointer z-50 md:hidden" onClick={toggleOffcanvas}>
                          {navb ? <FaTimes/> : <FaBars size={25}/>}
                        </button>
                    </div>
                </div>
            <Outlet />
        </>
    )
}
export default Navbar;
