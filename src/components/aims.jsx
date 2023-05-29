import { Link } from 'react-router-dom';
import mission from '../assets/mission.jpg';
import {BsArrowDownCircleFill} from 'react-icons/bs';
const Aims = () => {
  return (
    <div name='aims' className="pt-4 min-h-screen w-full bg-ltgr"> 
      <div className='blur-sm opacity-30 -top-4 relative min-h-screen bg-cover bg-center' style={{ backgroundImage: `url(${mission})` }} /> 
      <span className="acc relative -top-[41rem] sz:-top-[50rem] z-20 mx-5 md:mx-20 border-l-4 border-orange-600 pl-2 md:pl-8 text-4xl xl:text-7xl text-blue-800 underline">
        Our values, vision, strategy
      </span>
      <span className='flex p-6 md:p-10 xl:p-32 -mt-[41rem] z-20 text-xl xl:text-2xl'>
      Our vision is to create a society where people from diverse backgrounds can come together, appreciate different cultures, and foster a sense 
      of unity and understanding. Through our vision, strategy, and collaborative initiatives, we aim to inspire, empower, and create a society where 
      cultural heritage is cherished, artistic expression thrives, and everyone feels a sense of belonging.We actively engage with local communities, 
      particularly those facing social challenges, by organizing educational programs, skill-building workshops, and awareness campaigns. 
      By empowering individuals and fostering social cohesion, we strive to make a positive impact on the lives of community members.


      </span>
      <Link to='/mission' className=' flex justify-center md:pr-20 text-orange-700 hover:underline hover:text-blue-800 cursor-pointer text-xl'>
        Know more <BsArrowDownCircleFill size={25} className='pl-2 text-black animate-bounce'/>
      </Link>
    </div>
  )
}

export default Aims;
