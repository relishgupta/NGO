import { Route, Routes } from "react-router-dom";
import Navbar from "./routes/navbar";
import Gallery from "./routes/gallery";
import Homepage from "./routes/homepage";
import Footer from "./components/footer";
import Mission from "./routes/mission";
import Docs from "./routes/docs";

const App=()=> {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navbar/>}>
          <Route index element={<Homepage />} />
          <Route path='gallery' element={<Gallery />}>
            <Route index element={<Footer />} />
          </Route>
          <Route path='mission' element={<Mission />}>
            <Route index element={<Footer />} />
          </Route>
          <Route path='docs' element={<Docs />}>
            <Route index element={<Footer />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
