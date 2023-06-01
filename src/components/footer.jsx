import { FaLinkedin, FaUser } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { SiGmail } from "react-icons/si"
import { BsFillTelephoneFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import m1 from '../assets/m1.jpg';
// import m2 from '../assets/m2.jpg';
// import m3 from '../assets/m3.jpg';

const Footer = () => {
  const team=[
    {
      id:1,
      name:'Zorawar Singh Khalsa',
      designation:'President',
      src:m1,
    },
    {
      id:2,
      name:'Zorawar Singh Khalsa',
      designation:'President',
      src:m1,
    },
    {
      id:3,
      name:'Zorawar Singh Khalsa',
      designation:'President',
      src:m1,
    },
  ]
  const navigate = useNavigate();
  const ToGallery = () => {
    navigate('/gallery');
    
  }
  const ToMissions = () => navigate('/mission');
  const ToHome = () => navigate('/');

  return (
    <>
      <div className="acc w-full bg-mrn">
      <div className="flex flex-col md:flex-row py-2">
        {team.map(({id,name,designation,src})=>(
        <div className="flex md:flex-col xl:flex-row p-5 md:mx-auto">
          <img src={src} alt="" className="rounded-full w-32 h-32"/>
        <span className="p-5 text-2xl">
          <h2>{name}</h2>
          <h2>{designation}</h2>
        </span>
        </div>
        ))}
      </div>
        <div className="border-black border-b-2 pb-11 pt-1 flex flex-col lg:flex-row lg:justify-evenly">
          <span className="pt-1 pl-2 md:pl-0">
            <p className="flex text-yellow-500 text-lg">
              <HiLocationMarker size={30} className="" />
              <span className="lg:border-b border-black  text-crm text-2xl">
                Office at village Ainpur, Tehsil: Bhajwal, Sunderbani, District: Rajouri, J&K, India
              </span><br />
            </p>
            <p className="pt-2 flex text-lg pl-1">
              <FaUser size={20} className=" text-black" />
              <span className="pl-1 lg:border-b border-black  text-crm text-2xl">
                Chairman/President: Zorawar Singh Khalsa
              </span>
            </p>
          </span>
          <span className="flex flex-col pl-7 lg:pl-0">
            <h1 className="lg:border-b border-black pt-8 md:pt-1 text-2xl text-black ">Quick links</h1>
            <p onClick={ToGallery} className="cursor-pointer text-xl pt-1 text-crm">Gallery</p>
            <Link onClick={ToHome} to='about' smooth duration={500} className="cursor-pointer text-xl text-crm">About</Link>
            <Link to='mission' smooth duration={500} onClick={ToMissions} className="cursor-pointer text-xl text-crm">Mission</Link>
            <Link onClick={ToHome} smooth duration={500} to='services' className="cursor-pointer text-xl text-crm">Services</Link>
          </span>
          <span className="mt-8 md:mt-0 text-center md:text-start -mb-9">
            <p className="flex justify-center lg:justify-start pt-2 text-md md:text-lg">
              <BsFillTelephoneFill className=" text-green-500" size={20} />
              <span className="lg:border-b border-black  pl-2 text-lg md:text-2xl text-crm">
                9419131723, 9622360431
              </span>
            </p>
            <a href="mailto:mrzsingh43Gmail.com" className="flex justify-center lg:justify-start text-lg text-crm" target="_blank" rel="noreferrer">
              <SiGmail size={20} className='text-orange-300' />
              <span className="lg:border-b border-black pl-2 text-lg md:text-2xl hover:text-black">
                mrzsingh43@gmail.com
              </span>
            </a>
          </span>
        </div>
        <div className="flex flex-col items-center md:flex-row md:justify-evenly text-crm text-lg md:text-2xl bg-red-800">
          <p>©2023 anmolculturalclub. All Rights Reserved</p>
          <p className="flex items-center">
            Designed by relishgupta
            <a href='https://www.linkedin.com/in/relish-gupta-165692234/' target="_blank" rel="noreferrer">
              <FaLinkedin size={20} className='mx-2 text-sky-500' />
            </a>
            <a href="mailto:guptarelish333Gmail.com" target="_blank" rel="noreferrer"><SiGmail size={20} className=' text-orange-300' /></a>
          </p>
        </div>
      </div>
    </>
  )
}

export default Footer;
