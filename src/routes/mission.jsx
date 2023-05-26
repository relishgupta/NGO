import { Outlet } from "react-router-dom";
import missions from '../assets/missions.jpg';
import mssn from '../assets/mssn.jpg';

const Mission = () => {
  return (
    <>
    <div className="min-h-screen -mt-4 bg-crm">
      <div name="mission"  className="opacity-70 h-48" style={{backgroundImage:`url(${missions})`,backgroundRepeat:'no-repeat',backgroundSize:'cover' }}>
      <span className="acc flex justify-start mx-10 md:mx-20 pt-28 text-7xl underline text-black">
          Mission
        </span>
      </div>
      <div className="pt-5 pl-5 text-2xl text-black">
          <img src={mssn} alt='' className="border-black mx-auto h-96 p-3 md:p-5 w-[60rem] md:w-[40rem]" />
          <div className="pb-8">
            <p className='border-l-4 border-orange-500 pl-6'> To work for the upliftment of youth community to organise Youth activities for National Character building. Give financial help to poor and needful people.</p><br/>
            <p className='border-l-4 border-blue-500 pl-6'> To promote the cause of education on modern and scientific lines and make educational institute such as school buildings and make memorial places and other works for Martyrs.</p><br/>
            <p className='border-l-4 border-gr pl-6'> To make good environment with plantation drive in every area and also make resources such as hand pumps, ponds and in dry areas.</p><br/>
            <p className='border-l-4 border-yellow-600 pl-6'> To provide cheques/cash payments to BPL families, widows and orphans/poor girls for running their smooth life. Also provide cheques/cash payment to long illness poor people and in the marriage of orphan girls.</p><br/>
            <p className='border-l-4 border-red-500 pl-6'> To improve the health standard of the people by organising the camps for AIDS population and opening of small dispensaries and financially help poor people for their treatment in rural and urban areas.</p><br/>
            <p className='border-l-4 border-ltgr pl-6'> To provide the facilities for promotion and development for technology and application of Science and technology in women development in rural and urban areas and make toilet complex and home for homeless, BPL families, widows and war widows.</p><br/>          
            <p className='border-l-4 border-gray-500 pl-6'> To undertake its activities in agriculture and horticultural products development and cultivation.</p><br/>
            <p className='border-l-4 border-ltgr pl-6'> To work for animals and birds and make shed for pet animals of BPL category people and manage instruments for handicapped people.</p><br/>
            <p className='border-l-4 border-red-500 pl-6'> To set up and manage Khadi and village industries work centres for poor and needy people and manage instruments for handicapped people.</p><br/>
            <p className='border-l-4 border-yellow-600 pl-6'> To work for the upliftment of people belonging to scheduled caste, schedule tribees, other economically weaker sections of society and people residing in the far flung areas of state of J&K.</p><br/>
            <p className='border-l-4 border-gr pl-6'> To make all states green with plantation surrounding cities and both sides of all national highways in J&K and other states.</p><br/>
            <p className='border-l-4 border-blue-500 pl-6'> To run vocational training centers of youth, women child labour, weaker sections ST, SC, Minorties and BPL people and pension to elderly men and women.</p><br/>
            <p className='border-l-4 border-orange-500 pl-6'> Distribute relief such as dry ration and other items to needy peoples on natural disaster time and relief to border areas people during the violation of cease fire and during COVID-19.</p><br/>
          </div>
      </div>
    </div>
    <Outlet/>
    </>
  )
}

export default Mission;
