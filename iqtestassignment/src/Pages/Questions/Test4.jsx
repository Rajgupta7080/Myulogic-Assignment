import React from 'react'
import {BsArrowLeft} from "react-icons/bs"
import { useNavigate } from 'react-router-dom';
import {AiOutlineClose} from "react-icons/ai"
const Test4 = () => {
    const navigate = useNavigate();
    const handleclick =()=>{
        navigate("/test3")
    }
    const handleclose =()=>{
        navigate("/")
    }
  return (
    <div>
         <div style={{marginLeft:"90%"}}><button style={{background:"none", border:"none", fontSize:"34px",cursor:"pointer"}} onClick={handleclose}><AiOutlineClose/></button></div>
    <div id="ques1">
        <img src="https://en.testometrika.com/upload/questions/56e/56e7575fce5c66102f68965309041c81.svg" alt="" />
    </div>
    <h1 style={{color:"white",textAlign:'center'}}>4. Which shape should be in the rightmost cell with</h1>
    <h1  style={{color:"white",textAlign:'center', marginTop:"-20px"}}>a question mark?</h1>
    
    <div id='ans'>
        <div style={{width:"140px"}}><img src="https://en.testometrika.com/upload/answers/7f1/7f11134a286731f010982d5d79e8cd26.svg" alt="" /></div>
        <div style={{width:"140px"}}><img src="https://en.testometrika.com/upload/answers/e3c/e3c50d49dd3e826c711e33eed9e6b9cb.svg" alt="" /></div>
        <div style={{width:"140px"}}><img src="https://en.testometrika.com/upload/answers/370/370cd583ba4fe1ed516fa59e729ddf69.svg" alt="" /></div>
        <div style={{width:"140px"}}><img src="https://en.testometrika.com/upload/answers/078/078f9d02c28538a24e685aa90ef651e3.svg" alt="" /></div>
        <div style={{width:"140px"}}><img src="https://en.testometrika.com/upload/answers/52e/52e67d35e0f5d7ac65d639f7d74737b1.svg" alt="" /></div>
        <div style={{width:"140px"}}><img src="https://en.testometrika.com/upload/answers/110/1108829aabfbc040dee01c20198f57be.svg" alt="" /></div>
       
    </div>
    <div className='btnn' style={{width:"100px", marginLeft:"40px"}}><button onClick={handleclick} style={{width:"100px"}} id='btn'><BsArrowLeft/></button></div>
    </div>
  )
}
export default Test4