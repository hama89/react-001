import {Link} from "react-router-dom";
import React from 'react';

const NavBar = () => {
  return (
    <nav className="bg-gray-900 p-4">
        
      
      <div className="container mx-auto flex justify-between items-center">
      <Link className="text-indigo-50  p-1 rounded-sm" to={"/Home"}> Smart CarParking System</Link>
        <div>
          <ul className="flex space-x-3">
           
            <li> <Link className="text-indigo-50  hover:bg-gray-600 p-1 rounded-sm" to={"/"}> Home</Link>   </li>
            <li> <Link className="text-indigo-50 hover:bg-gray-600 p-1 rounded-sm" to={"/Myreservation"}> My Reservation</Link>   </li>
            <li> <Link className="text-indigo-50 hover:bg-gray-600 p-1 rounded-sm" to={"/Aboutus"}> About Us</Link>   </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;