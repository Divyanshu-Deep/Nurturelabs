import React from 'react'
import "./style.css";
import {FaArrowRight} from "react-icons/fa";

const Navbar = () => {
    return (
        <div className="navbar">
           <div className="keyword">
           KEYWORDS
           </div>
           <div className="submit">
               <span className="submit-span">Submit</span>
               <span className="submit-icon"><FaArrowRight size="20"/></span>
           </div>
           <div className="avatar-p">
           <div className="avatar">
               A
           </div>
           </div>
        </div>
    )
}

export default Navbar
