import { Outlet } from "react-router-dom";

const Gallery = () => {
  return (
    <>
    <div name="gallery" className="min-h-screen w-full -mt-4 bg-ltgr">
      <div className="h-52 bg-gr">
        <h1 className="flex justify-center pt-32 text-6xl underline">
          GALLERY
        </h1>
      </div>
    </div>
    <Outlet/>
    </>
  )
}

export default Gallery;
