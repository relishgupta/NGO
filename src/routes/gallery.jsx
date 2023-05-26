import { Outlet } from "react-router-dom";
import gallery from '../assets/gallery.jpg';

const Gallery = () => {
  return (
    <>
    <div name="gallery" className="min-h-screen -mt-4 bg-crm">
      <div name="gallery"  className="opacity-70 h-48" style={{backgroundImage:`url(${gallery})`,backgroundRepeat:'no-repeat',backgroundSize:'cover' }}>
        <span className="acc flex justify-start mx-10 md:mx-20 pt-28 text-6xl underline text-black">
          GALLERY
        </span>
      </div>
    </div>
    <Outlet/>
    </>
  )
}

export default Gallery;
