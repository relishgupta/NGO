import { Route, Routes } from "react-router-dom";
import Navbar from "./routes/navbar";
import Gallery from "./routes/gallery";
import Homepage from "./routes/homepage";

const App=()=> {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navbar/>}>
          <Route index element={<Homepage />} />
          <Route path='gallery' element={<Gallery />} />
          {/* <Route index element={<About />} />
          <Route index element={<Mission />} />
          <Route index element={<Projects />} /> 
          <Route index element={<Services />} />
          <Route index element={<Footer />} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
