import home from '../assets/home.jpg';
import award from '../assets/award.png';
import { Link } from 'react-router-dom';
import {BsArrowDownShort} from 'react-icons/bs';

const Home = () => {
  return (
    <div name='home' className="flex flex-col md:flex pt-20 h-screen w-full bg-gr">
      <img src={home} alt='banner' className='h-88 md:h-full w-full'/>
      <img src={award} alt='award' className='h-88 md:hidden pt-3 w-full'/>
      <span className='justify-center bg-gradient-to-r from-orange-400 to-green-600 rounded-full py-1 px-4 mt-4 mx-auto sm:hidden'>
        <Link to='gallery' className='flex'>
          Gallery
          <BsArrowDownShort size={30} className='animate-bounce text-blue-800' />
        </Link>
      </span>
    </div>
  )
}

export default Home;
