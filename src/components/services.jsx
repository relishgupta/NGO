import awareness from '../assets/awareness.png';
import environment from '../assets/environment.png';
import blood from '../assets/blood.png';
import plantation from '../assets/plantation.png';
import ration from '../assets/ration.png';
import youth from '../assets/youth.png';

const Services = () => {
//   const services=[
//   {
//     id:1,
//     src:'awareness',
//     title:'Youth affairs',
//   },
//   {
//     id:2,
//     src:'environment',
//     title:'Disaster management',
//   },
//   {
//     id:3,
//     src:'awareness',
//     title:'Youth affairs',
//   }
// ]
  return (
    <div name='services' className="pt-4 min-h-screen w-full bg-pnk">
      <span className="acc relative top-24 sz:top-28 z-20 mx-5 md:mx-20 border-l-4 border-orange-600 pl-2 md:pl-8 text-4xl md:text-7xl text-blue-800 underline">
        Our Programmes
      </span>
      <div className='grid grid-rows-6 sm:grid-rows-3 xl:grid-rows-2 grid-flow-col gap-10 cursor-pointer pt-36 sz:pt-40 text-xl pb-20'>
        <span className='flex flex-col items-center '>
          <img src={awareness} alt="" className='border-2 border-gr h-96 w-80 hover:scale-105 duration-200'/>
          <span className='border border-gray-800 bg-gray-800 text-white text-lg px-32 rounded-lg'>Youth affairs</span>
        </span>
        <span className='flex flex-col items-center'>
          <img src={environment} alt="" className='border-2 border-gr h-96 w-80 hover:scale-105 duration-200'/>
          <span className='border border-gray-800 bg-gray-800 text-white text-lg px-20 rounded-lg'>Disaster management</span>
        </span>
        <span className='flex flex-col items-center'>
          <img src={blood} alt="" className='border-2 border-gr h-96 w-80 hover:scale-105 duration-200'/>
          <span className='border border-gray-800 bg-gray-800 text-white text-lg px-14 lg:px-20 rounded-lg'>Health and Family welfare</span>
        </span>
        <span className='flex flex-col items-center'>
          <img src={plantation} alt="" className='border-2 border-gr h-96 w-80 hover:scale-105 duration-200'/>
          <span className='border border-gray-800 bg-gray-800 text-white text-lg px-28 rounded-lg'>Plantation drive</span>
        </span>
        <span className='flex flex-col items-center'>
          <img src={ration} alt="" className='border-2 border-gr h-96 w-80 hover:scale-105 duration-200'/>
          <span className='border border-gray-800 bg-gray-800 text-white text-lg px-20 rounded-lg'>Women empowerment</span>
        </span>
        <span className='flex flex-col items-center'>
          <img src={youth} alt="" className='border-2 border-gr h-96 w-80 hover:scale-105 duration-200'/>
          <span className='border border-gray-800 bg-gray-800 text-white text-lg px-20 rounded-lg'>Education and Literacy</span>
        </span>
      </div>
    </div>
  )
}

export default Services;
