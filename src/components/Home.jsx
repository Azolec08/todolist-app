import { Link } from 'react-router-dom'
import '../style/back.scss'


const Home = () => {
  return (
    <>
      <div className="container">
        <Link to="/Todolist">
              <button style={{
              padding:"10px",
              cursor:"pointer",
              border:"none",
              fontWeight:"bold",
              fontSize:"20px",
              lineHeight:"28px",
              background:"#444",
              color:"yellow",
            
              }}>Click Here to Create Todolist</button>
        </Link>
      </div>
    </>
  )
}

export default Home