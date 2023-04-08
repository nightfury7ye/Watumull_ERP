 import React,{useState} from 'react';
import './navbar.css';
import FacultyModal from './FacultyModal';
import Eoamd from './Eoamd';
import { Link } from "react-router-dom";

const Navbar = () => {
  const [eoaOpen, setEoaOpen] = useState(false);
  return (
    <>
        <nav className='navv'>
          {/* <Eoamd/> */}
          {eoaOpen && <Eoamd setOpenModal={setEoaOpen} />}
          <div className='logo'>
            <h2>WATUMULL</h2>
          </div>
          <div className='main_link'>
            <ul className="main_link_ul">
              <li className="nav_menu-item">
                {/* <a href='#'>Home</a> */}
                <Link to="/">Home</Link>
              </li>
              <li className="nav_menu-item">
                <a href='#'>Management</a>
                <ul className="nav_submenu">
                  <li className="nav_submenu-item " onClick={() => {setEoaOpen(true)}}>
                    <p>EOA</p>
                  </li>
                  <li className="nav_submenu-item ">
                    <a href="#">MD</a>
                  </li>
                  <li className="nav_submenu-item ">
                    {/* <a href="../pages/Faculty">Faculty</a> */}
                    <Link to="/faculty">Faculty</Link>
                  </li>
                </ul>
              </li>
              <li className="nav_menu-item">
                {/* <a href='#'>About Us</a> */}
                <Link to="/aboutus">About Us</Link>
              </li>
              <li className="nav_menu-item">
                {/* <a href='#'>Contact Us</a> */}
                <Link to="/contactus">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className='login_btn'>
            <button className='portal_btn' onClick={() => window.open("http://localhost:3000", "_self")}>Portal</button>
            {/* <ul className="nav_submenu">
              <li className="nav_submenu-item ">
                <a href="#">Student login</a>
              </li>
              <li className="nav_submenu-item ">
                <a href="#">Staff login</a>
              </li>
              <li className="nav_submenu-item ">
                <a href="#">Admin</a>
              </li>
            </ul> */}
          </div>
        </nav>
    </>
  )
}

export default Navbar;