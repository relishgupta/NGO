import mission from '../assets/mission.jpg';

const Aims = () => {
  return (
    <div name='aims' className="pt-4 min-h-screen w-full bg-ltgr"> 
      <div name='home' className='blur-sm opacity-30 -top-4 relative h-screen bg-cover bg-center' style={{ backgroundImage: `url(${mission})` }} /> 
      <span className="acc relative -top-[41rem] sz:-top-[50rem] z-20 mx-5 md:mx-20 border-l-4 border-orange-600 pl-2 md:pl-8 text-5xl md:text-7xl text-blue-800 underline">
        Our values, vision, strategy
      </span>
      <span className='z-5 absolute left-28 right-96 text-2xl -mt-[33rem]'>
      To set the background image of the div element with the class name "h-48" and prevent it from repeating, you can use CSS. Here's an example of how you can achieve that:
      In the code above, missions is assumed to be a variable or a reference to the image URL. The backgroundRepeat property is set to "no-repeat" to prevent the background image from repeating.
      In the code above, missions is assumed to be a variable or a reference to the image URL. The backgroundRepeat property is set to "no-repeat" to prevent the background image from repeating.
      In the code above, missions is assumed to be a variable or a reference to the image URL. The backgroundRepeat property is set to "no-repeat" to prevent the background image from repeating.
      In the code above, missions is assumed to be a variable or a reference to the image URL. The backgroundRepeat property is set to "no-repeat" to prevent the background image from repeating.
      </span>
    </div>
  )
}

export default Aims;
