import React ,{useState}from 'react';
import QRCode from 'react-qr-code';




export default function Myreservation() {

const[platenumber,setPlateNumber]=useState("");
const[qrcodevalue,setQrCodeValue]=useState("");

const generateQrCode=()=>
{
  setQrCodeValue(platenumber);
};


  return (
    <center className=' flex  flex-col justify-center items-center gap-2'>

      <div className='text-6xl ' id="doc" >This Is My Reservation Page</div>
        <br/>
       <h1 className='timwer text-4xl text-black ' value={"#"}  >This is Timer <b>10:00</b></h1>
        <br/>
        <QRCode  size="200" id="qrCodeEl" value={qrcodevalue}/>  
       
        <input className='bg-gray-200 rounded-lg p-1 text-gray-700 text-center  text-xl w-48' placeholder='Enter Plate Here' type='text'  id="val"  onChange={e=>setPlateNumber(e.target.value)}/>
        <input   className='bg-gray-900 text-gray-50 pl-6 pr-6 pt-2 pb-2 rounded-lg hover:bg-gray-600 w-48 text-2xl'  type='button' value="generate" onClick={generateQrCode} />
        <input   className='border-gray-400 border-2 pl-6 pr-6 pt-2 pb-2 rounded-lg text-gray-400 m-2 w-48 text-2xl hover:bg-gray-200  '  type='button' value="Download" onClick={""} />
      
    </center>
  )
}
