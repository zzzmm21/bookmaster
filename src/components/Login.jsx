import { Link } from "react-router-dom";
import styles from "./Login.modules.css";
const Login = () => {
    return (
        <div id="container">
            <div className="content">
                <div className="Login-wrap">
                    <ul className="menu-wrap" role="tablist">
                        <li className="temp" role="presentation">
                            <Link to="/login" className="menu_id1">
                            <span className="menu-text">ID 로그인</span>
                            </Link>
                        </li>
                        {/*로그인 바*/}
                        <li className="temp" role="presentation">
                            <span className="menu-text">1️⃣ 일회용 번호</span>
                        </li>
                        <li className="temp" role="presentation">
                            <span className="menu-text">👀QR코드</span>
                        </li>
                    </ul>
                    {/*아이디 비밀번호 input */}
                    <form action="">
                        <ul className="panel-wrap">
                            <li className="p-item" >
                                <div className="p-inner">
                                    <div className="id-pw">
                                        <div className="input-row" id="id-line" >
                                            <div className="icon-cell"></div>
                                            <input type='text' id="id" placeholder="아이디"></input>
                                        </div>
                                        <div className="input-row" id="pw-line" >
                                            <div className="icon-cell"></div>
                                            <input type='text' id="id" placeholder="비밀번호"></input>
                                        </div>
                                    </div>
                                    <div className="login_uder" id="login_uder">
                                        <div className="keep_check">
                                            <input type="checkbox" id="keep" className="input_keep"></input>
                                            <label for="keep" className="keep_text">로그인상태유지</label>
                                        </div>
                                    </div>
                                    <div className="btn_login">
                                        <button type="sumbit" className="btn1" id="log.login">
                                            <span className="btn_text">로그인</span></button>
                                    </div>

                                </div>
                            </li>





                        </ul>
                    </form>

                </div>
                <ul className="find">
                <li>
                    <Link to=""target="_blank" className="find_text" >아이디찾기</Link>
                    
                    
                </li>
                <li>
                 |
                    <Link to="/join" target="_blank" className="find_text" >회원가입</Link>
                   
                </li>
                </ul>
            <div className="gladbanner">
                <div className="banner2">
                <img src="https://designnas.com/portfolio/moblie_poromotion/baskin/image/style03.png"></img>
                </div>
                
            </div>
          
            </div>
        </div>
    )
}
export default Login;