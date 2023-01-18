import React from 'react';
import BookList from '../components/BookList';
import LiBrary from '../components/LiBrary';
import Mainbuild from '../components/Mainbuild';
import Order from '../components/Order';

const MainPage = () => {
  return (
    <div>
      {' '}
      <Mainbuild/>
      <div className='banner log'></div>
                <img src='https://img.freepik.com/premium-vector/word-reading-banner_66675-159.jpg?w=1800'></img>
            <div className='bane'></div>
      <LiBrary>
        
        
        <BookList />
      </LiBrary>
      
      <Order />
    </div>
  );
};

export default MainPage;
