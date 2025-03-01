import React from 'react'

import { FaUserCircle } from 'react-icons/fa';
const Navbar = () => {
  return (

        <nav className="flex justify-between items-center p-4 border-b border-gray-300">
          {/* Logo */}
          <div className="text-lg tracking-widest " style={{ fontFamily: "'Doto'",
          fontSize: '24px', 
          fontWeight: 'bold', 
          color: '#333'
            
          }}>
            <span className="text-black">N</span>
            <span className="text-black">O</span>
            <span className="text-black">T</span>
            <span className="text-black">H</span>
            <span className="text-black">I</span>
            <span className="text-black">N</span>
            <span className="text-black">G</span>
          </div>
    
          {/* Navigation Links */}
          <div className="flex space-x-6 text-black">
            <a href="#" className="hover:underline">Phone</a>
            <a href="#" className="hover:underline">Audio</a>
            <a href="#" className="hover:underline">CMF</a>
            <a href="#" className="hover:underline">Store</a>
            <a href="#" className="hover:underline">Community</a>
            <a href="#" className="hover:underline">Support</a>
          </div>
    
          {/* Profile Icon */}
          <div>
            <FaUserCircle size={28} className="text-black" />
          </div>
        </nav>
      );
  
}

export default Navbar













//   return (
//     <div
//       className={`fixed top-0 left-0 w-full bg-black text-white p-4 transition-transform duration-300 ${
//         showNavbar ? "translate-y-0" : "-translate-y-full"
//       }`}
//     >
//       <nav className="container mx-auto flex justify-between items-center">
//         <div className="text-2xl font-bold">Logo</div>
//         <ul className="flex space-x-6">
//           <li><a href="#" className="hover:text-gray-400">Home</a></li>
//           <li><a href="#" className="hover:text-gray-400">About</a></li>
//           <li><a href="#" className="hover:text-gray-400">Services</a></li>
//           <li><a href="#" className="hover:text-gray-400">Contact</a></li>
//         </ul>
//       </nav>
//     </div>
//   );
// }