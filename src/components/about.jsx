import about from '../assets/about.png';

const About = () => {
  return (
    <div name='about' className="flex flex-col pt-28 h-screen w-full bg-gr">
      <div className="underline border-gray-500 pl-5 xl:pl-80 xl:pt-10 sz:pt-28 text-5xl md:text-6xl text-blue-800 ">
        About
      </div>
      <div className='flex flex-col xl:flex-row place-items-end xl:items-start'>
      <p className='p-4 xl:text-xl xl:pl-60 sz:pl-80'>
        The name of organisation is Anmol Cultural Club situated at Sunderbani, district Rajouri, J&K. The office of the organisation shall be at Sunderbani and Jammu Head Office(J&K UT).
        The area of operation of organisation shall be J&K UT and other states in particular and Media general.
      </p>
      <img src={about} alt="about" className='drop-shadow-2xl pr-10 xl:pr-80 sz:pr-96 h-72 xl:h-96 sz:h-[30rem]'/>
      </div>
    </div>
  )
}
export default About;
