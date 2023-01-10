import React from 'react'
import {BsArrowLeft} from "react-icons/bs"
import { useNavigate } from 'react-router-dom'
import {AiOutlineClose} from "react-icons/ai"
const Test2 = () => {
    const navigate = useNavigate();
    const handleclick =()=>{
        navigate("/test1")
    }
    const handleclose =()=>{
        navigate("/")
    }
  return (
    <div>
         <div style={{marginLeft:"90%"}}><button style={{background:"none", border:"none", fontSize:"34px",cursor:"pointer"}} onClick={handleclose}><AiOutlineClose/></button></div>
    <div id="ques1">
        <img src="https://en.testometrika.com/upload/questions/61f/61f8311dc95818b190b639bb10e7ff0a.svg" alt="" />
    </div>
    <h1 style={{color:"white",textAlign:'center'}}>2. Which shape should be in the rightmost cell with</h1>
    <h1  style={{color:"white",textAlign:'center', marginTop:"-20px"}}>a question mark?</h1>
    
    <div id='ans'>
        <div style={{width:"140px"}}><img src="https://en.testometrika.com/upload/answers/9a3/9a3eb223416f61ff5b9177914b70bd60.svg" alt="" /></div>
        <div style={{width:"140px"}}><img src="https://en.testometrika.com/upload/answers/c4d/c4d606c7c886fc53ecee625417464a02.svg" alt="" /></div>
        <div style={{width:"140px"}}><img src="https://en.testometrika.com/upload/answers/b78/b7854d51e6fc99a7051b4eafe549ccdd.svg" alt="" /></div>
        <div style={{width:"140px"}}><img src="https://en.testometrika.com/upload/answers/b9d/b9db4988f489cc0410930f09bb287963.svg" alt="" /></div>
        <div style={{width:"140px"}}><img src="https://en.testometrika.com/upload/answers/174/174cc63476713040f570f0ffabf5d5a4.svg" alt="" /></div>
        <div style={{width:"140px"}}><img src="https://en.testometrika.com/upload/answers/75b/75b18f06da1aeff34f41634dcb126b57.svg" alt="" /></div>
       
    </div>
    <div className='btnn' style={{width:"100px", marginLeft:"40px"}}><button onClick={handleclick} style={{width:"100px"}} id='btn'><BsArrowLeft/></button></div>
    </div>
  )
}

export default Test2