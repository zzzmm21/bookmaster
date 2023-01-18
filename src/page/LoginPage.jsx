import React from "react"
import { Link } from "react-router-dom";
import Login from "../components/Login"

const LoginPage = () => {
    return (
        <div className='navbar_content'>
        <h1 className='title' >
            📚 Go book 
            </h1>
        <div class="mypage">
          
            <Link to='/login'>login </Link>
            <Link to=''>마이페이지</Link>
    
        </div>
            <Login>
            <div className='LoginBox'>
            </div>
            </Login>
        
        </div>
            
    )
}
export default LoginPage;