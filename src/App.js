import { Route, Routes } from "react-router-dom";
import Navbar from "./routes/navbar";
import Gallery from "./routes/gallery";
import Homepage from "./routes/homepage";
import Footer from "./components/footer";
import Missions from "./routes/missions";

const App=()=> {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navbar/>}>
          <Route index element={<Homepage />} />
          <Route path='gallery' element={<Gallery />}>
            <Route index element={<Footer />} />
          </Route>
          <Route path='missions' element={<Missions />}>
            <Route index element={<Footer />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
