import React from 'react'

export default function Mianhome() {
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
                <input type="text" className='p-2 rounded-xl border-2 text-gray-400 m-2 w-64  bg-gray-200' placeholder='Plate Number... text'  />
                <br/>
                <button className='p-2 rounded-xl bg-gray-900  text-white m-2 w-64 text-2xl hover:bg-gray-600'>Reserve</button>
                <br/>
                <button className='p-2 rounded-xl border-2 text-gray-400 m-2 w-64 text-2xl hover:bg-gray-200 '>Cancle</button>
            </div>
         </div>    
      </div>
      <div className='flex justify-center items-center '>
      {/*<p className=' align-middle '>Parking Lots</p>*/}
        <div className='Card_Right  grid grid-rows-2 grid-cols-2 gap-8 w-full p-10'>
          <h1 className=' p-6 text-7xl bg-gray-900  m-2  rounded-2xl text-center text-white'>P-1</h1>
          <h1 className=' p-6 text-7xl bg-gray-900  m-2  rounded-2xl text-center text-white'>P-2</h1>
          <h1 className=' p-6 text-7xl bg-gray-900  m-2  rounded-2xl text-center text-white'>P-3</h1>
          <h1 className=' p-6 text-7xl bg-gray-900  m-2  rounded-2xl text-center text-white'>P-4</h1>
        </div>
      </div>
   </div>
    
    </home>
  )
}
