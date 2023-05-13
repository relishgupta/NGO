// import {Link} from 'react-router-dom';
import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import {Link} from 'react-scroll';
import {FaBars,FaTimes} from 'react-icons/fa';

import logo from '../assets/acc.png';

const Navbar = () => {
    const [nav,setNav]=useState(false);
    const navigate=useNavigate();
    const li=[
        {
            id:1,
            link:'about'
        },
        {
            id:2,
            link:'mission'
        },
        {
            id:3,
            link:'services'
        },
        {
            id:4,
            link:'team'
        },
        {
            id:5,
            link:'contact'
        }
    ]

    const Navigate=()=>navigate('/')
  return (
    <>
        <div className='fixed flex justify-between items-center h-20 w-full text-white bg-gr z-10'>
            <div className='flex items-center'>
                <Link to='home' smooth duration={500}>
                    <img src={logo} alt='logo' className='h-20 w-20 ml-5 cursor-pointer' onClick={Navigate} />
                </Link> 
                <h3 className='hidden xl:block cursive ml-4 text-5xl text-blue-800'>Anmolculturalclub</h3>
            </div>
            <ul className='hidden md:flex text-2xl mr-6'>
                {li.map(({id,link})=>(
                    <li key={id} className='p-7 capitalize cursor-pointer hover:text-blue-800 hover:scale-125 duration-200'>
                    <Link to={link} onClick={Navigate} smooth duration={500}>{link}</Link>
                    </li>
                ))}
            </ul>

            <div onClick={()=>setNav(!nav)} className='absolute right-6 cursor-pointer text-white md:hidden'>
            {nav?<FaTimes size={30} />:<FaBars size={30} />}
            </div>

            {nav && (
            <ul className=' flex flex-col justify-center items-center mt-[27.8rem] bg-green-800 text-white'>
            {li.map(({id,link})=>(
                <li key={id} className="border-b px-10 cursor-pointer capitalize py-5 text-2xl">
                    <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>
                        {link}
                    </Link>
                </li>
            ))}
            </ul>
            )}
        </div>
        <Outlet/>
    </>
  )
}
export default Navbar;
