import React from 'react'
import "./Test.css"
import { useNavigate } from 'react-router-dom'
import {AiOutlineClose} from "react-icons/ai"
let counter = JSON.parse(localStorage.getItem("count"))||false;
const Test1 = () => {
    const navigate = useNavigate();
    const handleclick =()=>{
        navigate("/")
    }
    const handleans = ()=>{
        navigate("/test2")
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
      <div style={{marginLeft:"90%"}}><button style={{background:"none", border:"none",cursor:"pointer", fontSize:"34px"}} onClick={handleclick}><AiOutlineClose/></button></div>
    <div id="ques1">
        <img src="https://en.testometrika.com/upload/questions/9a3/9a3e5c664c57fefe9781ed343a0b4224.svg" alt="" />
    </div>
    <h1 style={{color:"white",textAlign:'center'}}>1. Which shape should be in the rightmost cell with</h1>
    <h1  style={{color:"white",textAlign:'center', marginTop:"-20px"}}>a question mark?</h1>
    
    <div id='ans' onClick={handleans}>
        <div style={{width:"140px"}}><img src="https://en.testometrika.com/upload/answers/2ad/2ad96527ff3bdffc254b05985d90e670.svg" alt="" /></div>
        <div style={{width:"140px"}}><img src="https://en.testometrika.com/upload/answers/743/743c194ea591850121774bbcea728cb7.svg" alt="" /></div>
        <div style={{width:"140px"}}><img src="https://en.testometrika.com/upload/answers/3f4/3f48e60b405fe3a20ae80b4c1effe5be.svg" alt="" /></div>
        <div onClick={count} style={{width:"140px"}}><img src="https://en.testometrika.com/upload/answers/af1/af154b81388bbe80d95a6c2d958090d3.svg" alt="" /></div>
        <div style={{width:"140px"}}><img src="https://en.testometrika.com/upload/answers/282/2829b67f1ddb1c64a70b4ac754fc03c9.svg" alt="" /></div>
        <div style={{width:"140px"}}><img src="https://en.testometrika.com/upload/answers/d63/d635d6a11058a01b5b6760b6638342fa.svg" alt="" /></div>
    </div>
    </div>
  )
}

export default Test1