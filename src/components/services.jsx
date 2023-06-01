import awareness from '../assets/awareness.png';
import environment from '../assets/environment.png';
import blood from '../assets/blood.png';
import plantation from '../assets/plantation.png';
import ration from '../assets/ration.png';
import youth from '../assets/youth.png';

const Services = () => {
  const services=[
  {
    id:1,
    src:awareness,
    title:'Youth affairs',
    style:'px-28 md:px-32'
  },
  {
    id:2,
    src:environment,
    title:'Disaster management',
    style:'px-20'
  },
  {
    id:3,
    src:blood,
    title:'Health and Family welfare',
    style:'px-14 lg:px-20'
  },
  {
    id:4,
    src:plantation,
    title:'Plantation drive',
    style:'px-24 md:px-28'
  },
  {
    id:5,
    src:ration,
    title:'Women empowerment',
    style:'px-14 md:px-20'
  },
  {
    id:6,
    src:youth,
    title:'Education and Literacy',
    style:'px-14 md:px-20'
  }
]
  return (
    <div name='services' className="pt-4 min-h-screen w-full bg-gradient-to-b from-green-400 to-green-800">
      <span className="acc relative top-24 sz:top-28 z-20 mx-5 md:mx-20 border-l-4 border-orange-600 pl-2 md:pl-8 text-4xl md:text-7xl text-blue-800 underline">
        Our Programmes
      </span>
      <div className='grid grid-rows-6 sm:grid-rows-3 xl:grid-rows-2 grid-flow-col gap-10 cursor-pointer pt-36 sz:pt-40 text-xl pb-20'>
      {services.map(({id,src,title,style})=>(
          <span key='id' className='flex flex-col items-center'>
          <img src={src} alt="" className='border-2 border-gr h-96 w-80 hover:scale-105 duration-200'/>
          <span className={`border border-gray-800 bg-gray-800 text-white text-lg rounded-lg + ${style}`} >{title}</span>
          </span>
        
      ))}
      </div>
    </div>
  )
}

export default Services;
