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
            link:'about us'
        },
        {
            id:2,
            link:'mission'
        },
        {
            id:3,
            link:'projects'
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
        <div className='fixed flex justify-between items-center h-20 w-full text-white bg-gradient-to-r from-green-400 to-orange-500'>
            <div className='flex items-center'>
                <img src={logo} alt='logo' className='h-20 w-20 ml-5 cursor-pointer' onClick={Navigate} />
                <h3 className='hidden sm:block cursive ml-5 text-5xl text-blue-700'>Anmolculturalclub</h3>
            </div>
            <ul className='hidden lg:flex text-2xl'>
                {li.map(({id,link})=>(
                    <li key={id} className='p-8 capitalize cursor-pointer hover:text-blue-700 hover:scale-125 duration-200'>
                    <Link to={link} onClick={Navigate} smooth duration={500}>{link}</Link>
                    </li>
                ))}
            </ul>

            <div onClick={()=>setNav(!nav)} className='cursor-pointer pr-5 z-10 text-white lg:hidden'>
            {nav?<FaTimes size={30} />:<FaBars size={30} />}
            </div>

            {nav && (
            <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-orange-500 to-green-500 text-white'>
            {li.map(({id,link})=>(
                <li key={id} className="px-4 cursor-pointer capitalize py-6 text-4xl">
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
