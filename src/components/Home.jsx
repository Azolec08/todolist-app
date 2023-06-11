import '../style/home.css'
import { Link } from 'react-router-dom'



const Home = () => {
  return (
    <>
    <div className='container' >

        <Link to="/Todolist">
            <button style={{
            padding:"20px",
            cursor:"pointer",
            border:"none",
            fontWeight:"bold",
            fontSize:"20px",
            lineHeight:"28px",
            background:"#444",
            color:"yellow",
            borderRadius:"8px"
            }}>Click mo para hindi masuka si Jervic</button>
        </Link>
       
      
    </div>
    </>
  )
}

export default Home