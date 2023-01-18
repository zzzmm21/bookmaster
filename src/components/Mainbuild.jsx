import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Mainbuild = () => {
    let [글제목,] = useState(['도서 추천', '니나'])
    let [따봉, 따봉변경] = useState(0)
    return (
        <nav className='p-navbar' href="/">
            <div className='navbar_content'>
                <h1 className='title' >
                    📚 Go book 
                    </h1>
                <div class="mypage">
                  
                    <Link to='/login'>login </Link>
                    <Link to=''>마이페이지</Link>
                
                </div>
                <ul className='navbar-menu'>
                <li class="p-navbar_item"><Link to='/'>home</Link></li>
                    <li class="p-navbar_item"><Link to='/Meeting'>모임</Link></li>
                    <li class="p-navbar_item"><a href=''>독서노트</a></li>
                    <li class="p-navbar_item"><a href=''>커뮤니티</a></li>
                </ul>
            </div>
          
            <div className='list'>


                <h3>{글제목[0]}<span onClick={() => { 따봉변경(따봉 + 1) }}>👍</span>{따봉}</h3>
            </div>
        </nav>
    )
}
export default Mainbuild;