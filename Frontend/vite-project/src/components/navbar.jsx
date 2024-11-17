import {useNavigate} from "react-router-dom"
import logo from "../assets/logo.jpg"


export const Navbar=()=>
{
    let navigate=useNavigate()
    return(
        <header className="rs">
        <nav>
          <img src={logo} alt="" style={{width:"80px"}}/>
          <div>
          <button onClick={()=>{navigate("/")}}>Home</button>
            <button onClick={()=>{navigate("/register")}}>Register</button>
            <button onClick={()=>{navigate("/login")}}>Login</button>
            <button onClick={()=>{navigate("/")}}>Logout</button>
          </div>
        </nav>
      </header>
    )
}