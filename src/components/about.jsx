import banner from '../assets/banner.jpg';
import rc from '../assets/rc.jpg';
import award from '../assets/award.png';
// import home1 from '../assets/home1.jpg';

const About = () => {
  return (
      <div name='about' className="pt-32 flex flex-col -mt-4 min-h-screen w-full bg-snake">
      <div className='pt-3 bg-orange-500 h-96'>
        <div className="z-100 acc mx-5 md:mx-20 border-l-4 border-snake pl-2 md:pl-8 text-5xl md:text-7xl text-black underline">
          About us
        </div>
        <div className=''>
        <p className='p-4 xl:text-2xl xl:pl-28 text-white'>
          The name of organisation is Anmol Cultural Club situated at Sunderbani, district Rajouri, J&K. The office of the organisation shall be at Sunderbani and Jammu Head Office(J&K UT).
          The area of operation of organisation shall be J&K UT and other states in particular and Media general.
        </p>
        <div className='flex flex-col md:flex-row justify-around items-center mt-5 sz:mt-32'>
          <img src={banner} alt="banner" className='drop-shadow-2xl h-80'/>
          <img src={rc} alt="registration" className='hidden xl:block drop-shadow-2xl h-96 w-72'/>
          <img src={award} alt="award" className='hidden xl:block drop-shadow-2xl h-80'/>
        </div>
        </div>
      </div>
      </div>
  
  )
}
export default About;
