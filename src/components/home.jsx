import home from '../assets/home.jpg';

const Home = () => {
  return (
    <div name='home' className="pt-20 h-screen w-full bg-gr">
      <img src={home} alt='' className='h-88 md:h-full w-full'/>
    </div>
  )
}

export default Home;
