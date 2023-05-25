import { FaLinkedin, FaUser } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { SiGmail } from "react-icons/si"
import { BsFillTelephoneFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";

const Footer = () => {
  const navigate = useNavigate();
  const ToGallery = () => {
    navigate('/gallery');
    
  }
  const ToMissions = () => navigate('/mission');
  const ToHome = () => navigate('/');

  return (
    <>
      <div name='contact' className="acc w-full bg-mrn">
        <div className="border-black border-b-2 pb-11 pt-1 flex flex-col lg:flex-row lg:justify-evenly">
          <span className="pt-1 pl-2 md:pl-0">
            <p className="flex text-yellow-500 text-lg">
              <HiLocationMarker size={30} className="" />
              <span className="md:border-b border-black  text-crm text-2xl">
                Office at village Ainpur, Tehsil: Bhajwal, Sunderbani, District: Rajouri, J&K, India
              </span><br />
            </p>
            <p className="pt-2 flex text-lg">
              <FaUser size={20} className="text-black" />
              <span className="pl-1 md:border-b border-black  text-crm text-2xl">
                Chairman/President: Zorawar Singh Khalsa
              </span>
            </p>
          </span>
          <span className="flex flex-col pl-7 md:pl-0">
            <h1 className="md:border-b border-black pt-8 md:pt-1 text-2xl text-black ">Quick links</h1>
            <p onClick={ToGallery} className="cursor-pointer text-xl pt-1 text-crm">Gallery</p>
            <Link onClick={ToHome} to='about' smooth duration={500} className="cursor-pointer text-xl text-crm">About</Link>
            <Link to='mission' smooth duration={500} onClick={ToMissions} className="cursor-pointer text-xl text-crm">Mission</Link>
            <Link onClick={ToHome} smooth duration={500} to='services' className="cursor-pointer text-xl text-crm">Services</Link>
          </span>
          <span className="mt-8 md:mt-0 text-center md:text-start -mb-9">
            <p className="flex justify-center md:justify-start pt-2 text-md md:text-lg">
              <BsFillTelephoneFill className=" text-green-500" size={20} />
              <span className="md:border-b border-black  pl-2 text-lg md:text-2xl text-crm">
                9419131723, 9622360431
              </span>
            </p>
            <a href="mailto:mrzsingh43Gmail.com" className="flex justify-center md:justify-start text-lg text-crm" target="_blank" rel="noreferrer">
              <SiGmail size={20} className='text-orange-300' />
              <span className="md:border-b border-black lack pl-2 text-lg md:text-2xl hover:text-black">
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
