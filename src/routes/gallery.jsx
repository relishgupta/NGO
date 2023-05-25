import { Outlet } from "react-router-dom";

const Gallery = () => {
  return (
    <>
    <div name="gallery" className="min-h-screen w-full -mt-4 bg-crm">
      <div className="h-48 bg-gr">
        <h1 className="acc flex justify-start mx-10 md:mx-20 pt-28 text-6xl underline text-black">
          GALLERY
        </h1>
      </div>
    </div>
    <Outlet/>
    </>
  )
}

export default Gallery;
