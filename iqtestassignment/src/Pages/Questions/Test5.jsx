import React from 'react'
import {BsArrowLeft} from "react-icons/bs"
import { useNavigate } from 'react-router-dom';
import {AiOutlineClose} from "react-icons/ai"
let counter = JSON.parse(localStorage.getItem("count"))||false;
const Test5 = () => {
    const navigate = useNavigate();
    const handleclick =()=>{
        navigate("/test4")
    }
    const handleclose =()=>{
        navigate("/")
    }
    const handleans = ()=>{
       navigate("/")
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
        <img src="https://en.testometrika.com/upload/questions/86c/86c577fabc67aed0dbd84df222f0685a.svg" alt="" />
    </div>
    <h1 style={{color:"white",textAlign:'center'}}>5. Which shape should be in the rightmost cell with</h1>
    <h1  style={{color:"white",textAlign:'center', marginTop:"-20px"}}>a question mark?</h1>
    
    <div id='ans' onClick={handleans}>
        <div style={{width:"140px"}}><img  src="https://en.testometrika.com/upload/answers/2f5/2f5bb5003870c7d81339a60fc9ee0abf.svg" alt="" /></div>
        <div style={{width:"140px"}}><img  src="https://en.testometrika.com/upload/answers/405/405fc59bd9ca9b483046be0f5641c585.svg" alt="" /></div>
        <div style={{width:"140px"}}><img  src="https://en.testometrika.com/upload/answers/4e2/4e23e2df71d493fccae53c20760642c0.svg" alt="" /></div>
        <div onClick={count} style={{width:"140px"}}><img  src="https://en.testometrika.com/upload/answers/7df/7dfcfdb549c39a7d6c3cde429291bd03.svg" alt="" /></div>
        <div style={{width:"140px"}}><img  src="https://en.testometrika.com/upload/answers/4f9/4f98b73c7fa56a9753c4f3d68b697fe1.svg" alt="" /></div>
        <div style={{width:"140px"}}><img  src="https://en.testometrika.com/upload/answers/468/468e4cededf71527edda5d3253dd5a9b.svg" alt="" /></div>
    </div>
    <div className='btnn' style={{width:"100px", marginLeft:"40px"}}><button onClick={handleclick} style={{width:"100px"}} id='btn'><BsArrowLeft/></button></div>
    </div>
  )
}

export default Test5