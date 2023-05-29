import banner from '../assets/banner.jpg';
import rc from '../assets/rc.jpg';
import award from '../assets/award.jpg';

const About = () => {
  return (
      <div name='about' className="pt-32 flex flex-col -mt-4 min-h-screen w-full bg-snake">
      <div className='pt-3 bg-orange-500 h-96'>
        <div className="acc mx-5 md:mx-20 border-l-4 border-snake pl-2 md:pl-8 text-5xl md:text-7xl text-black underline">
          About us
        </div>
        <div className=''>
        <p className='p-4 xl:text-2xl sz:text-3xl xl:pl-28 text-white'>
          Anmol Cultural Club is a registered non-governmental organization (NGO) working the field of Art & Culture, etc. The NGO works towards the promotion of sustainable development. The NGO was established in 2003. The registration number of the organization is: 4226-S. The organization is operational in Jammu and Kashmir, India. 
        </p>
        <div className='-z-30 flex flex-col md:flex-row justify-around items-center sz:mt-20 '>
          <img src={banner} alt="banner" className='drop-shadow-2xl h-60 md:h-80 w-80 md:w-[35rem]'/>
          <img src={rc} alt="registration" className='hidden xl:block drop-shadow-2xl h-96 w-72'/>
          <img src={award} alt="award" className='hidden xl:block drop-shadow-2xl h-80'/>
        </div>
        </div>
      </div>
      </div>
  
  )
}
export default About;
