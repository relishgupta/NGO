import awareness from '../assets/awareness.png';
import environment from '../assets/environment.png';
import blood from '../assets/blood.png';
import plantation from '../assets/plantation.png';
import ration from '../assets/ration.png';
import youth from '../assets/youth.png';

const Services = () => {
  return (
    <div name='services' className="pt-4 min-h-screen w-full bg-gra">

      <span className="acc relative top-28 sz:top-40 z-20 mx-5 md:mx-20 border-l-4 border-orange-600 pl-2 md:pl-8 text-4xl md:text-7xl text-blue-800 underline">
        Our Programmes
      </span>
      <div className='grid grid-rows-2 grid-flow-col gap-10 mx-16 sz:mx-[30rem] cursor-pointer'>
        <span>
          <img src={awareness} alt=""/>
          <span>Youth affairs</span>
        </span>
        <span>
          <img src={environment} alt=""/>
          <span>Disaster management</span>
        </span>
        <span>
          <img src={blood} alt=""/>
          <span>Health and Family welfare</span>
        </span>
        <span>
          <img src={plantation} alt=""/>
          <span>Plantation drive</span>
        </span>
        <span>
          <img src={ration} alt=""/>
          <span>Women empowerment</span>
        </span>
        <span>
          <img src={youth} alt=""/>
          <span>Education and Literacy</span>
        </span>
      </div>
    </div>
  )
}

export default Services;
