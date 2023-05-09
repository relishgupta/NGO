import { Outlet } from "react-router-dom";

const Gallery = () => {
  return (
    <>
    <Outlet/>
    <div className="pt-20 h-screen w-full bg-green-600">Gallery</div>
    </>
  )
}

export default Gallery;
