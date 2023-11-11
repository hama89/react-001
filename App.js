import NavBR from "./navbar";
//import Home from "./home";
import Myreservation from "./myreservation";
import Aboutus from "./aboutus";
import P404 from "./404";
import Mianhome from "./mainhome";



import { BrowserRouter,Routes,Route } from "react-router-dom";


function App(props) {

  return (
    <div className="App">
      <BrowserRouter>
      <NavBR />
        <Routes>
          <Route path="/Home" element={<Mianhome  />}/>
          <Route path="/Myreservation" element={<Myreservation />}/>
          <Route path="/Aboutus" element={<Aboutus />}/>
          <Route path="*" element={<P404 />}/>
        </Routes>
      </BrowserRouter>

      
    </div>
  );
}



export default App;
