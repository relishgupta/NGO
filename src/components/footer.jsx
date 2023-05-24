import {FaLinkedin, FaUser } from "react-icons/fa";
import { HiOutlineMail,HiLocationMarker } from "react-icons/hi";
import {BsFillTelephoneFill} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";

const Footer = () => {
  const navigate=useNavigate();
  const ToGallery=()=>navigate('/gallery');
  const ToMissions=()=>navigate('/missions');
  const ToHome=()=>navigate('/');

  return (
    <>
      <div name='contact' className="w-full bg-mrn">
        <div className="border-white border-b pb-11 pt-1 flex flex-col md:flex-row md:justify-evenly">
          <span className="pt-1 pl-2 md:pl-0">
            <p className="flex text-green-400 text-lg">
              <HiLocationMarker size={26} className="animate-bounce"/>
              <span className="border-b text-black">
                Office at village Ainpur, Tehsil: Bhajwal, Sunderbani, District: Rajouri, J&K, India 
              </span><br/>
            </p>
            <p className="pt-2 flex text-lg">
              <FaUser size={20} className="animate-bounce"/>
              <span className="pl-1 border-b text-black">
                Chairman/President: Zorawar Singh Khalsa
              </span>
            </p>
          </span>
          <span className="flex flex-col pl-6 md:pl-0">
            <h1 className="md:border-b pt-4 md:pt-1 text-xl text-black">Quick links</h1>
            <p onClick={ToGallery} className="cursor-pointer text-lg text-yellow-400">Gallery</p>
            <Link onClick={ToHome} to='about' className="cursor-pointer text-lg text-gray-300">About</Link>
            <Link to='missions' smooth duration={500} onClick={ToMissions} className="cursor-pointer text-lg text-gray-300">Missions</Link>
            <Link onClick={ToHome} to='projects' className="cursor-pointer text-lg text-gray-300">Projects</Link>
          </span>
          <span className="text-center md:text-start -mb-9">
            <p className="flex justify-center md:justify-start pt-2 text-md md:text-lg text-black">
              <BsFillTelephoneFill className="animate-bounce" size={20} />
              <span className="md:border-b pl-1 text-md md:text-lg">
                9419131723, 9622360431
              </span>
            </p>
            <a href="mailto:mrzsingh43Gmail.com" className="flex justify-center md:justify-start text-lg text-black" target="_blank" rel="noreferrer">
              <HiOutlineMail size={20} className='text-green-400 animate-bounce' />
              <span className="md:border-b pl-1 text-md md:text-lg hover:text-white">
                mrzsingh43@gmail.com
              </span>
            </a>
          </span>
        </div>
        <div className="mt-2 flex flex-col items-center md:flex-row md:justify-evenly text-black text-md md:text-lg">
          <p>©2023 anmolculturalclub. All Rights Reserved</p>
          <p className="flex items-center">
            Designed by relishgupta
            <a href='https://www.linkedin.com/in/relish-gupta-165692234/' target="_blank" rel="noreferrer">
              <FaLinkedin size={20} className='mx-2 text-sky-400 animate-bounce' />
            </a>
            <a href="mailto:guptarelish333Gmail.com" target="_blank" rel="noreferrer"><HiOutlineMail size={20} className='animate-bounce text-green-400' /></a>
          </p>
        </div>
      </div>
    </>
  )
}

export default Footer;
