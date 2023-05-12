import { Outlet } from "react-router-dom";

const Gallery = () => {
  return (
    <>
    <div name="gallery" className="pt-20 h-screen w-full bg-ltgr">Gallery</div>
    <Outlet/>
    </>
  )
}

export default Gallery;
