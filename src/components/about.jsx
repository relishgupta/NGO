import about from '../assets/about.png';

const About = () => {
  return (
    <div name='about' className="flex flex-col pt-28 h-screen w-full bg-ltgr">
      <div className="pl-5 text-6xl text-blue-800">
        About
      </div>
      <div className='flex flex-col md:flex-row place-items-end'>
      <p className='p-4'>
        Decide which quality the resulting image should have. The better the quality, the higher the file size. A lower quality will thus also reduce the file size.
        This free online image converter can convert images from over 120 input formats to PNG (Portable Network Graphics).
      </p>
      <img src={about} alt="about" className='drop-shadow-2xl pr-10 h-72'/>
      </div>
    </div>
  )
}
export default About;
