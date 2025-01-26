// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import icon from "../assets/imgs/cres.png"
// import twofive from "../assets/imgs/25.png"
// import sit from "../assets/imgs/SITlogo.png"

// function NavBar() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <>
//       {/* Navbar with Logo and Toggler */}
//       <nav className="navbar">
//         {/* <div className="navbar-logo">
//           <Link to="/">Icon</Link>
//         </div> */}
//         <div className="navbar-logo">
//           <img src={icon} alt="Logo 1" className="logo" />
//           <img src={sit} alt="Logo 1" className="logo" />
//           <img src={twofive} alt="Logo 2" className="logo" />
//         </div>
//         <div className="menu-toggle" onClick={toggleSidebar}>
//           <span className="bar"></span>
//           <span className="bar"></span>
//           <span className="bar"></span>
//         </div>
//       </nav>

//       {/* Sidebar */}
//       <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
//         <button className="close-btn" onClick={toggleSidebar}>
//           &times;
//         </button>
//         <ul className="sidebar-links">
//           <li><Link to="/" onClick={toggleSidebar}>Home</Link></li>
//           <li><Link to="/registration" onClick={toggleSidebar}>Registration</Link></li>
//           <li className="dropdown">
//             Technical Events
//             <ul className="dropdown-menu">
//               <li><Link to="/event/PaperPress-unfold" onClick={toggleSidebar}>PaperPres</Link></li>
//               <li><Link to="/event/CodeRoulette" onClick={toggleSidebar}>CodeRoulette</Link></li>
//               <li><Link to="/event/tech-trivia" onClick={toggleSidebar}>Tech Trivia</Link></li>
//               <li><Link to="/event/Interface" onClick={toggleSidebar}>Interface</Link></li>
//               <li><Link to="/event/TechQuest" onClick={toggleSidebar}>Cyber Sleuth</Link></li>
//             </ul>
//           </li>
//           <li className="dropdown">
//             Non-Technical Events
//             <ul className="dropdown-menu">
//               <li><Link to="/event/snap-seek" onClick={toggleSidebar}>Snap Seek</Link></li>
//               <li><Link to="/event/BoxCricket" onClick={toggleSidebar}>Film Frenzy</Link></li>
//               <li><Link to="/event/apex-conquest" onClick={toggleSidebar}>ESports</Link></li>
//             </ul>
//           </li>
//         </ul>
//       </div>
//     </>
//   );
// }

// export default NavBar;

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import icon from "../assets/imgs/cres.png"
// import twofive from "../assets/imgs/25.png"
// import sit from "../assets/imgs/SITlogo.png"

// function NavBar() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <>
//       {/* Navbar with Toggler */}
//       <nav className="navbar">
//         <div className="menu-toggle" onClick={toggleSidebar}>
//           <span className="bar"></span>
//           <span className="bar"></span>
//           <span className="bar"></span>
//         </div>
//       </nav>

//       {/* Sidebar */}
//       <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
//         <button className="close-btn" onClick={toggleSidebar}>
//           &times;
//         </button>
//         <ul className="sidebar-links">
//           <li><Link to="/" onClick={toggleSidebar}>Home</Link></li>
//           <li><Link to="/registration" onClick={toggleSidebar}>Registration</Link></li>
//           <li className="dropdown">
//             Technical Events
//             <ul className="dropdown-menu">
//               <li><Link to="/event/PaperPress-unfold" onClick={toggleSidebar}>PaperPres</Link></li>
//               <li><Link to="/event/CodeRoulette" onClick={toggleSidebar}>CodeRoulette</Link></li>
//               <li><Link to="/event/tech-trivia" onClick={toggleSidebar}>Tech Trivia</Link></li>
//               <li><Link to="/event/Interface" onClick={toggleSidebar}>Interface</Link></li>
//               <li><Link to="/event/TechQuest" onClick={toggleSidebar}>Cyber Sleuth</Link></li>
//             </ul>
//           </li>
//           <li className="dropdown">
//             Non-Technical Events
//             <ul className="dropdown-menu">
//               <li><Link to="/event/snap-seek" onClick={toggleSidebar}>Snap Seek</Link></li>
//               <li><Link to="/event/BoxCricket" onClick={toggleSidebar}>Film Frenzy</Link></li>
//               <li><Link to="/event/apex-conquest" onClick={toggleSidebar}>ESports</Link></li>
//             </ul>
//           </li>
//         </ul>

//         {/* Logos at the bottom of the sidebar */}
//         <div className="sidebar-logos">
//           <img src={icon} alt="Logo 1" className="logo" />
//           <img src={sit} alt="Logo 2" className="logo" />
//           <img src={twofive} alt="Logo 3" className="logo" />
//         </div>
//       </div>
//     </>
//   );
// }

// export default NavBar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import icon from "../assets/imgs/cres.png";
import twofive from "../assets/imgs/25.png";
import sit from "../assets/imgs/SITlogo.png";
import ieee from "../assets/imgs/ieee.png";

function NavBar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Navbar with Toggler */}
      <nav className="navbar">
        <div className="navbar-left">
          <img src={icon} alt="Left Logo" className="logos" />
        </div>
        <div className="navbar-center">
          <img src={sit} alt="Center Logo" className="logos" />
        </div>
        <div className="navbar-right">
          <img src={ieee} alt="Right Logo" className="logos" />
        </div>
        <div className="navbar-right">
          <img src={twofive} alt="Right Logo" className="logos" />
        </div>
        <div className="menu-toggle" onClick={toggleSidebar}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
      </nav>

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={toggleSidebar}>
          &times;
        </button>
        <ul className="sidebar-links">
          <li>
            <Link to="/" onClick={toggleSidebar}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/registration" onClick={toggleSidebar}>
              Registration
            </Link>
          </li>
          <li className="dropdown">
            Technical Events
            <ul className="dropdown-menu">
              <li>
                <Link to="/event/PaperPress-unfold" onClick={toggleSidebar}>
                  PaperPres
                </Link>
              </li>
              <li>
                <Link to="/event/CodeRoulette" onClick={toggleSidebar}>
                  CodeRoulette
                </Link>
              </li>
              <li>
                <Link to="/event/tech-trivia" onClick={toggleSidebar}>
                  Tech Trivia
                </Link>
              </li>
              <li>
                <Link to="/event/Interface" onClick={toggleSidebar}>
                  Interface
                </Link>
              </li>
              <li>
                <Link to="/event/TechQuest" onClick={toggleSidebar}>
                  Cyber Sleuth
                </Link>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            Non-Technical Events
            <ul className="dropdown-menu">
              <li>
                <Link to="/event/snap-seek" onClick={toggleSidebar}>
                  Snap Seek
                </Link>
              </li>
              <li>
                <Link to="/event/BoxCricket" onClick={toggleSidebar}>
                  Film Frenzy
                </Link>
              </li>
              <li>
                <Link to="/event/apex-conquest" onClick={toggleSidebar}>
                  ESports
                </Link>
              </li>
            </ul>
          </li>
        </ul>

        {/* Logos at the bottom of the sidebar */}
        <div className="sidebar-logos">
          <img src={icon} alt="Logo 1" className="logo" />
          <img src={sit} alt="Logo 2" className="logo" />
          <img src={twofive} alt="Logo 3" className="logo" />
        </div>
      </div>
    </>
  );
}

export default NavBar;
