import NavBR from "./navbar";
//import Home from "./home";
import Myreservation from "./myreservation";
import Aboutus from "./aboutus";
import P404 from "./404";
import Mianhome from "./mainhome";
import { useState,useEffect } from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";


function App() {
  useEffect(() => {
    // Load data from localStorage on component mount
    const savedData = localStorage.getItem('qrData');
    if (savedData) {
      setQrData(savedData);
    }
  }, []);


  const[qrData,setQrData]=useState("");

  const handleInputChange = (data) => 
  {
    setQrData(data);
  };
  const handleGenerateClick = () => {
    // Handle any other logic before updating QR code data
    // For now, just set the QR code data directly
    setQrData(qrData);
  };
  
 
  
  return (
    <div className="App">
      <BrowserRouter>
      <NavBR />
        <Routes>
          <Route path="/" element={<Mianhome /* platenumber={platenumber} setPlateNumber={setPlateNumber} setQrCodeValue={setQrCodeValue}*/ onInputChange={handleInputChange} onGenerateClick={handleGenerateClick} />}/>
          <Route path="/Myreservation" element={<Myreservation /* qrcodevalue={qrcodevalue}*/ qrData={qrData}  />}/>
          <Route path="/Aboutus" element={<Aboutus />}/>
          <Route path="*" element={<P404 />}/>
        </Routes>
      </BrowserRouter>

      
    </div>
  );
}



export default App;
