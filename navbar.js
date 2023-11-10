import {Link} from "react-router-dom";
import React from 'react';

const NavBar = () => {
  return (
    <nav className="bg-gray-900 p-4">
        
      
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white" >Smart Car Parking System</div>
        <div>
          <ul className="flex space-x-3">
           
            <li> <Link className="text-indigo-50" to={"/"}> Home</Link>   </li>
            <li> <Link className="text-indigo-50" to={"/Myreservation"}> My Reservation</Link>   </li>
            <li> <Link className="text-indigo-50" to={"/Aboutus"}> About Us</Link>   </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;