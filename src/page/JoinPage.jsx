import React from "react";
import { Link } from "react-router-dom";

const JoinPage = () => {
    return (
        <div className="container">
            <div className='navbar_content'>
                <h1 className='title' >
                    π Go book
                </h1>
                <div class="mypage">

                    <Link to='/login'>login </Link>
                    <Link to=''>λ§μ΄νμ΄μ§</Link>

                </div>

            </div>
         
                <div className="inside">
            <div className="text-table">
                <h2 className="join-logo">νμκ°μ</h2>
                    <div className="join_box1">
                        <h3 className="email-title">μ΄λ©μΌμ£Όμβ</h3>
                        <div className="email-input">
                            <input className="input-email" placeholder="μμ΄λλ₯Ό μλ ₯νμΈμ"></input>
                        </div>
                    </div>
            </div>
            </div>
          
        </div>
    )
}
export default JoinPage;