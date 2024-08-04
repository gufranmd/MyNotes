import React, { useContext, useEffect, useRef, useState } from 'react'
import { IoSunnyOutline } from "react-icons/io5";
import { MdDarkMode } from "react-icons/md";
import NoteContext from './NoteContext';
const Navbar=React.memo(() => {
const {isDark,setDark}=useContext(NoteContext);
const handleDarkState=()=>{
  console.log("preior "+isDark);
const value=!isDark?true:false;
setDark(value);
localStorage.setItem("dark",JSON.stringify(value));
}

  return (
    <nav className={isDark?"navbar custom-bg-dark custom-navbar-shadow":"navbar custom-navbar-shadow"}>
    <div className="container-fluid">
      <h3>QuickNoteSpace</h3>
        <div class="form-check form-switch position-relative"> 
        <input className="form-check-input toggle-btn position-relative" type='checkbox' onChange={handleDarkState} role="switch" id="flexSwitchCheckChecked"  checked={isDark}/>
        {isDark?<IoSunnyOutline className='position-absolute sun' />:
        <MdDarkMode className='position-absolute moon'/>}
  </div>  
    </div>
  </nav>

  )
});

export default Navbar;