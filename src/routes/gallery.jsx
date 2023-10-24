import { Outlet } from "react-router-dom";
import imageGy from '../assets/gallery.jpg';
import banner from '../assets/banner.jpg';
import rc from '../assets/rc.jpg';
import award from '../assets/award.jpg';
import a1 from '../assets/1.jpg';
import a2 from '../assets/2.jpg';
import a3 from '../assets/3.jpg';
import a4 from '../assets/4.jpg';
import a5 from '../assets/5.jpg';
import a6 from '../assets/6.jpg';
import a7 from '../assets/7.jpg';
import a8 from '../assets/8.jpg';
import a9 from '../assets/9.jpg';
import a10 from '../assets/10.jpg';
import a11 from '../assets/11.jpg';
import a12 from '../assets/12.jpg';
import a13 from '../assets/13.jpg';
import a14 from '../assets/14.jpg';
import a15 from '../assets/15.jpg';
import a16 from '../assets/16.jpg';
import a17 from '../assets/17.jpg';
import a18 from '../assets/18.jpg';
import a19 from '../assets/19.jpg';
import a20 from '../assets/20.jpg';
import a21 from '../assets/21.jpg';
import a22 from '../assets/22.jpg';
import a23 from '../assets/23.jpg';
import a24 from '../assets/24.jpg';
import a25 from '../assets/25.jpg';
import a26 from '../assets/26.jpg';
import a27 from '../assets/27.jpg';
import a28 from '../assets/28.jpg';
import a29 from '../assets/29.jpg';
import a30 from '../assets/30.jpg';
import a31 from '../assets/31.jpg';
import a32 from '../assets/32.jpg';
import a33 from '../assets/33.jpg';
import a34 from '../assets/34.jpg';
import a35 from '../assets/35.jpg';
import a36 from '../assets/36.jpg';
import a37 from '../assets/37.jpg';
import a38 from '../assets/38.jpg';
import a39 from '../assets/39.jpg';
import a40 from '../assets/40.jpg';
import a41 from '../assets/41.jpg';
import a42 from '../assets/42.jpg';
import a43 from '../assets/43.jpg';
import a44 from '../assets/44.jpg';
import a45 from '../assets/45.jpg';
import a46 from '../assets/46.jpg';
import a47 from '../assets/47.jpg';
import a48 from '../assets/48.jpg';
import a49 from '../assets/49.jpg';
import a50 from '../assets/50.jpg';
import a51 from '../assets/51.jpg';
import a52 from '../assets/52.jpg';
import a53 from '../assets/53.jpg';
import a54 from '../assets/54.jpg';
import a55 from '../assets/55.jpg';
import a56 from '../assets/56.jpg';
import a57 from '../assets/57.jpg';
import a58 from '../assets/58.jpg';
import a59 from '../assets/59.jpg';
import a60 from '../assets/60.jpg';
import a61 from '../assets/61.jpg';
import a62 from '../assets/62.jpg';
import a63 from '../assets/63.jpg';
import a64 from '../assets/64.jpg';
import a65 from '../assets/65.jpg';
import a68 from '../assets/68.jpg';
import a69 from '../assets/69.jpg';
import a70 from '../assets/70.jpg';
import a71 from '../assets/71.jpg';
import a72 from '../assets/72.jpg';
import a73 from '../assets/73.jpg';
import a74 from '../assets/74.jpg';
import a75 from '../assets/75.jpg';

const Gallery = () => {
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
      src:a9,
    },
    {
      id:10,
      src:a10,
    },
    {
      id:11,
      src:a11,
    },
    {
      id:12,
      src:a12,
    },
    {
      id:13,
      src:a13,
    },
    {
      id:14,
      src:a14,
    },
    {
      id:15,
      src:a15,
    },
    {
      id:16,
      src:a16,
    },
    {
      id:17,
      src:a17,
    },
    {
      id:18,
      src:a18,
    },
    {
      id:19,
      src:a19,
    },
    {
      id:20,
      src:a20,
    },
    {
      id:21,
      src:a21,
    },
    {
      id:22,
      src:a22,
    },
    {
      id:23,
      src:a23,
    },
    {
      id:24,
      src:a24,
    },
    {
      id:25,
      src:a25,
    },
    {
      id:26,
      src:a26,
    },
    {
      id:27,
      src:a27,
    },
    {
      id:28,
      src:a28,
    },
    {
      id:29,
      src:a29,
    },
    {
      id:30,
      src:a30,
    },
    {
      id:31,
      src:a31,
    },
    {
      id:32,
      src:a32,
    },
    {
      id:33,
      src:a33,
    },
    {
      id:34,
      src:a34,
    },
    {
      id:35,
      src:a35,
    },
    {
      id:36,
      src:a36,
    },
    {
      id:37,
      src:a37,
    },
    {
      id:38,
      src:a38,
    },
    {
      id:39,
      src:a39,
    },
    {
      id:40,
      src:a40,
    },
    {
      id:41,
      src:a41,
    },
    {
      id:42,
      src:a42,
    },
    {
      id:43,
      src:a43,
    },
    {
      id:44,
      src:a44,
    },
    {
      id:45,
      src:a45,
    },
    {
      id:46,
      src:a46,
    },
    {
      id:47,
      src:a47,
    },
    {
      id:48,
      src:a48,
    },
    {
      id:49,
      src:a49,
    },
    {
      id:50,
      src:a50,
    },
    {
      id:51,
      src:a51,
    },
    {
      id:52,
      src:a52,
    },
    {
      id:53,
      src:a53,
    },
    {
      id:54,
      src:a54,
    },
    {
      id:55,
      src:a55,
    },
    {
      id:56,
      src:a56,
    },
    {
      id:57,
      src:a57,
    },
    {
      id:58,
      src:a58,
    },
    {
      id:59,
      src:a59,
    },
    {
      id:60,
      src:a60,
    },
    {
      id:61,
      src:a61,
    },
    {
      id:62,
      src:a62,
    },
    {
      id:63,
      src:a63,
    },
    {
      id:64,
      src:a64,
    },
    {
      id:65,
      src:a65,
    },
    {
      id:66,
      src:banner,
    },
    {
      id:67,
      src:rc,
    },
    {
      id:68,
      src:award,
    },
    {
      id:69,
      src:a68,
    },
    {
      id:70,
      src:a69,
    },
    {
      id:71,
      src:a70,
    },
    {
      id:72,
      src:a71,
    },
    {
      id:73,
      src:a72,
    },
    {
      id:74,
      src:a73,
    },
    {
      id:75,
      src:a74,
    },
    {
      id:76,
      src:a75,
    },
  ]
  return (
    <>
    <div name="gallery" className="min-h-screen w-full -mt-4 bg-crm">
      <div className="h-48 " style={{backgroundImage:`url(${imageGy})`,backgroundRepeat:'no-repeat',backgroundSize:'cover' }}>
        <span className="acc flex justify-start mx-10 md:mx-20 pt-28 text-6xl underline text-black">
          GALLERY
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

export default Gallery;
