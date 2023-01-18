import React from "react";
import { Link } from "react-router-dom";

const JoinPage = () => {
    return (
        <div className="container">
            <div className='navbar_content'>
                <h1 className='title' >
                    📚 Go book
                </h1>
                <div class="mypage">

                    <Link to='/login'>login </Link>
                    <Link to=''>마이페이지</Link>

                </div>

            </div>
         
                <div className="inside">
            <div className="text-table">
                <h2 className="join-logo">회원가입</h2>
                    <div className="join_box1">
                        <h3 className="email-title">이메일주소⁕</h3>
                        <div className="email-input">
                            <input className="input-email" placeholder="아이디를 입력하세요"></input>
                        </div>
                    </div>
            </div>
            </div>
          
        </div>
    )
}
export default JoinPage;