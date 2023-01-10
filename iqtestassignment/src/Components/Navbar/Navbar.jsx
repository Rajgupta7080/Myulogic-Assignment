import React from 'react'
import "./Navbar.css"
import {GiHamburgerMenu} from "react-icons/gi"
import {BiUserCircle} from "react-icons/bi"
const Navbar = () => {
  return (
    <div className='navbar'>
       <div style={{display:"flex", alignItems:"center", marginLeft:"30px"}}> 
        <div style={{fontSize:"40px" }}><GiHamburgerMenu style={{color: "#00a1eb"}}/> </div>
        <div><p style={{color:"#5e5c74", fontSize:"23px", fontWeight:'1000',marginLeft:"20px"}}>testometrika</p></div>
        </div>
        <div style={{display:"flex", alignItems:"center",marginRight:"30px"}}>
        <div>
            <input type="text" placeholder='Search among 366 test' name="" id="inp" />
        </div>
        <div><BiUserCircle style={{fontSize:"60px", color:"#E7edf2"}}/></div> 
        </div>
    </div>
  )
}

export default Navbar