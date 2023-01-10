import React from 'react'
import "./Homepage.css"
import { useNavigate } from 'react-router-dom'
const Homepage = () => {
    const navigate = useNavigate();
    const handleclick =()=>{
        navigate("/test1")
    }
  return (
    <div className='homepage'>
        <div id='imgDiv'><img src="https://en.testometrika.com/upload/uf/066/066f89ecf51a3df5cbb83dcebebe5d7e.svg" alt="" /></div>
        <h1  style={{color:"white",textAlign:'center'}}>IQ Test for kids from 7 to 16 year old</h1>
        <div className='btnn'><button onClick={handleclick} id='btn'>Start Game</button></div>
        </div>
  )
}

export default Homepage