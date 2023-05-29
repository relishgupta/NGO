import mission from '../assets/mission.jpg';

const Team = () => {
  return (
    <div name='team' className="pt-4 h-screen w-full bg-crm">
    <div className='blur-sm opacity-30 -top-4 relative min-h-screen bg-cover bg-center' style={{ backgroundImage: `url(${mission})` }} /> 
      <span className="acc relative -top-[41rem] sz:-top-[50rem] z-20 mx-5 md:mx-20 border-l-4 border-orange-600 pl-2 md:pl-8 text-4xl md:text-7xl text-blue-800 underline">
        Our Team
      </span>
      <div>
        {/* <span><img src={mission} alt="" /></span> */}
      </div>
    </div>
  )
}

export default Team;
