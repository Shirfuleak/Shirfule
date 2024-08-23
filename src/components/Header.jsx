import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Logo from '../assests/images/logo.jpg';
const Header = () => {
  return (
    <div className="">
      <nav className="navbar d-flex align-items-center justify-content-between">
        {/* Logo on the left */}
        <div className="d-flex align-items-center">
          <a href="Akash">
            <img src={Logo} alt="Logo" className="navbar-logo px-2" />
          </a>
          {/* <h1> Shirfule Farm</h1> */}
        </div>

        {/* Menu items on the right */}
        <ul className="menu d-flex justify-content-end">
          <li className="menu-1 mx-2">
            <Link to="/home">Home</Link>
          </li>
          <li className="menu-2 mx-2">
            <Link to="/shop">Shop</Link>
          </li>
          <li className="menu-3 mx-2">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="menu-4 mx-3">
            <Link to="/gallery">Gallery</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;



// import React from "react";
// import { Link } from "react-router-dom";
// import "./Header.css";
// import Logo from '../assests/images/logo.jpg'
// const Header = () => {
//   return (
//     <div>
//       <nav className="d-flex">
//       <li>
//             <a class=" d-flex align-items-left" href="#">
//               <img
//                 src={Logo}
//                 alt="Logo"
//               />
//             </a>
//           </li>
//         <ul className="menu d-flex justify-content-end mx-5 my-2">
//           <li className="menu-1">
//             <Link to="/home">Home</Link>
//           </li>
//           <li className="menu-2">
//             <Link to="/shop">Shop</Link>
//           </li>
//           <li className="menu-3">
//             <Link to="/contact">Contact</Link>
//           </li>
//           <li className="menu-4">
//             <Link to="/gallery">Gallery</Link>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default Header;
