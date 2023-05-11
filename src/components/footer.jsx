import {FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import {BsFillTelephoneFill} from "react-icons/bs";

const Footer = () => {

  return (
    <>
      <div name='contact' className="w-full bg-4ltgr">
        <div className="border-white border-b pb-11 pt-1 flex flex-col md:flex-row md:justify-evenly">
          <span className="pl-4">
            <h1 className="text-xl text-black">Address</h1>
            <p className="text-lg text-violet-800">
              Office at village Ainpur, Tehsil: Bhajwal, Sunderbani, District: Rajouri, J&K <br/>
              Chairman/President: Zorawar Singh Khalsa
            </p>
          </span>
          <span className="pl-4">
            <h1 className="pt-4 md:pt-1 text-xl text-black">Quick links</h1>
            <p className="text-lg text-violet-800">Gallery</p>
            <p className="text-lg text-violet-800">About</p>
            <p className="text-lg text-violet-800">Missions</p>
            <p className="text-lg text-violet-800">Projects</p>
          </span>
          <span className="text-center md:text-start -mb-9">
            <h1 className="text-xl text-black">Contact Us</h1>
            <p className="flex justify-center md:justify-start pt-2 text-lg text-black"><BsFillTelephoneFill className="animate-bounce" size={20} /><span className="pl-1">9419131723 | 9622360431</span></p>
            <a href="mailto:mrzsingh43Gmail.com" className="flex justify-center md:justify-start text-lg text-black" target="_blank" rel="noreferrer">
              <HiOutlineMail size={20} className='text-red-600 animate-bounce' /><span className="pl-1">mrzsingh43@gmail.com</span>
            </a>
          </span>
        </div>
        <div className="mt-2 flex flex-col items-center md:flex-row md:justify-evenly text-black text-lg">
          <p>©2023 anmolculturalclub. All Rights Reserved</p>
          <p className="flex items-center">
            Designed by relishgupta
            <a href='https://www.linkedin.com/in/relish-gupta-165692234/' target="_blank" rel="noreferrer"><FaLinkedin size={20} className='mx-2 text-blue-800 animate-bounce' /></a>
            <a href="mailto:guptarelish333Gmail.com" target="_blank" rel="noreferrer"><HiOutlineMail size={20} className='animate-bounce text-red-600' /></a>
          </p>
        </div>
      </div>
    </>
  )
}

export default Footer;
