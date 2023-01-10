import React from 'react'
import {BsArrowLeft} from "react-icons/bs"
import { useNavigate } from 'react-router-dom'
import {AiOutlineClose} from "react-icons/ai"
let counter = JSON.parse(localStorage.getItem("count"))||false;
const Test3 = () => {
    const navigate = useNavigate();
    const handleclick =()=>{
        navigate("/test2")
    }
    const handleclose =()=>{
        navigate("/")
    }
    const handleans = ()=>{
        navigate("/test4")
     }
 
     
     const count = ()=>{
         if(counter){
         localStorage.setItem("count",JSON.stringify(counter+1));
         }else{
             localStorage.setItem("count",JSON.stringify(1));
         }
      }
  return (
    <div>
         <div style={{marginLeft:"90%"}}><button style={{background:"none", border:"none", fontSize:"34px",cursor:"pointer"}} onClick={handleclose}><AiOutlineClose/></button></div>
    <div id="ques1">
        <img src="https://en.testometrika.com/upload/questions/857/85779e2ee0f5a8c6874284c8dc7f040a.svg" alt="" />
    </div>
    <h1 style={{color:"white",textAlign:'center'}}>3. Which shape should be in the rightmost cell with</h1>
    <h1  style={{color:"white",textAlign:'center', marginTop:"-20px"}}>a question mark?</h1>
    
    <div id='ans' onClick={handleans}>
        <div style={{width:"140px"}}><img src="https://en.testometrika.com/upload/answers/833/8333eeab5e38a9e4cb24412453f29f7b.svg" alt="" /></div>
        <div style={{width:"140px"}}><img src="https://en.testometrika.com/upload/answers/292/29281ad823bd13e1f99a39e04685e6ed.svg" alt="" /></div>
        <div style={{width:"140px"}}><img src="https://en.testometrika.com/upload/answers/5ef/5ef20f3121c4d9e38517522535eb298c.svg" alt="" /></div>
        <div style={{width:"140px"}}><img src="https://en.testometrika.com/upload/answers/376/3763c71fffa9648c4aa1f1c53aa06bce.svg" alt="" /></div>
        <div style={{width:"140px"}}><img src="https://en.testometrika.com/upload/answers/fe5/fe52d92ce882e1571d445b0951b2d887.svg" alt="" /></div>
        <div onClick={count} style={{width:"140px"}}><img src="https://en.testometrika.com/upload/answers/81f/81ffd37c5b0c47314c5c35d90cc410f3.svg" alt="" /></div>
       
    </div>
    <div className='btnn' style={{width:"100px", marginLeft:"40px"}}><button onClick={handleclick} style={{width:"100px"}} id='btn'><BsArrowLeft/></button></div>
    </div>
  )
}

export default Test3