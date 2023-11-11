import React from 'react'
import { useState,useEffect } from 'react';


export default function Mianhome({onInputChange,onGenerateClick }) {
  
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    onInputChange(value); // Pass the data to the parent component
  };

  
  return (
    <home >
    <div className='Home_Page flex justify-center items-center gap-50'>
      <div className='All_Right  p-10 flex justify-end flex-col items-end'>
              <div className='big_right_number_And_its_Text flex flex-col justify-center items-center  '>
                <h1 className='    text-gray-400 text-2xl '>Available Spots</h1>
                <h1 className=' p-6 text-9xl bg-gray-900  m-2 w-64 rounded-2xl text-center text-white'>0</h1>
                <br/>
               </div>

          <div className='flex justify-end'>
             <div className="plate_info ">
                <input type="text" className='p-2 rounded-xl border-2 text-gray-400 m-2 w-64  bg-gray-200' value={inputValue}  placeholder='Plate Number... text' onChange={handleChange} />
                <br/>
                <input className='p-2 rounded-xl bg-gray-900  text-white m-2 w-64 text-2xl text-center hover:bg-gray-600' value="Reserve"  type='button' onClick={onGenerateClick} />
                <br/>
                <input className='p-2 rounded-xl border-2 text-gray-400 m-2 w-64 text-2xl text-center  hover:bg-gray-200 ' value="cancel"  type='button'/>
            </div>

         </div>    
      </div>
      <div className='flex justify-center items-center '>
      {/*<p className=' align-middle '>Parking Lots</p>*/}
        <div className='Card_Right  grid grid-rows-2 grid-cols-2 gap-8 w-full p-10'>
          <h1 className=' p-6 text-7xl bg-gray-300  m-2  rounded-2xl text-center text-gray-400 '>P-1</h1>
          <h1 className=' p-6 text-7xl bg-gray-300  m-2  rounded-2xl text-center text-gray-400'>P-2</h1>
          <h1 className=' p-6 text-7xl bg-gray-300  m-2  rounded-2xl text-center text-gray-400'>P-3</h1>
          <h1 className=' p-6 text-7xl bg-gray-300  m-2  rounded-2xl text-center text-gray-400'>P-4</h1>
        </div>
      </div>
   </div>
    
    </home>
  )
}
