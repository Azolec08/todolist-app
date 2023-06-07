import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="home-container" style={{height:"100vh",
     width:"100%", 
     background:"pink", 
     display:"flex",
     alignItems:"center",
     justifyContent:"center"
     }}>
        <Link to="/Todolist">
            <button style={{
            padding:"20px",
            cursor:"pointer",
            border:"none",
            fontWeight:"bold",
            fontSize:"20px",
            lineHeight:"28px",
            background:"violet",
            color:"yellow",
            borderRadius:"8px"
            }}>Create Your Todo <br/> List Now!</button>
        </Link>
    </div>
  )
}

export default Home