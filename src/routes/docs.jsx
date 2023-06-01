import { Outlet } from "react-router-dom";
import imageD from '../assets/docs.jpg';

import a1 from '../assets/d1.jpg';
import a2 from '../assets/d2.jpg';
import a3 from '../assets/d3.jpg';
import a4 from '../assets/d4.jpg';
import a5 from '../assets/d5.jpg';
import a6 from '../assets/d6.jpg';
import a7 from '../assets/d7.jpg';
import a8 from '../assets/d8.jpg';
import a9 from '../assets/d9.jpg';

const Docs = () => {
  const images=[
    {
      id:1,
      src:a1,
    },
    {
      id:2,
      src:a2,
    },
    {
      id:3,
      src:a3,
    },
    {
      id:4,
      src:a4,
    },
    {
      id:5,
      src:a5,
    },
    {
      id:6,
      src:a6,
    },
    {
      id:7,
      src:a7,
    },
    {
      id:8,
      src:a8,
    },
    {
      id:9,
      src:a9
    }   
  ]
  return (
    <>
    <div name="docs" className="min-h-screen w-full -mt-4 bg-crm">
        <div className="h-48 " style={{backgroundImage:`url(${imageD})`,backgroundRepeat:'no-repeat',backgroundSize:'cover' }}>
        <span className="acc flex justify-start mx-10 md:mx-20 pt-28 text-6xl underline text-black">
          Documents
        </span>
        </div>
      <div className="grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sz:grid-cols-5 md:grid-flow-row gap-10 px-20 py-14 ">
          {images.map(({id,src})=>(
            <div key={id}>
              <img src={src} alt="" className="border border-black cursor-pointer hover:scale-110 duration-200" />
            </div>
          ))}
      </div>
    </div>
    <Outlet/>
    </>
  )
}

export default Docs;
