import home from '../assets/home.jpg';
import award from '../assets/award.png';
import { Link } from 'react-router-dom';
import {BsArrowDownShort} from 'react-icons/bs';

const Home = () => {
  return (
    <div name='home' className="flex flex-col md:flex pt-20 h-screen w-full bg-gr">
      <img src={home} alt='banner' className='h-88 md:h-full w-full'/>
      <img src={award} alt='award' className='h-88 md:hidden pt-3 w-full'/>
      <span className='flex justify-center bg-orange-500 rounded-full py-1 px-4 mt-4 mx-auto sm:hidden'>
        <Link to='gallery'>
          Gallery
        </Link>
        <BsArrowDownShort size={30} className='animate-bounce text-blue-800' />
      </span>
    </div>
  )
}

export default Home;
