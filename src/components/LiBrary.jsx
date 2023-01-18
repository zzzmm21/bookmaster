import React, { useState } from 'react';
import styled from 'styled-components';
import useBooks from '../hooks/useBooks';
import BookList from './BookList';
import styles from "./LiBray.modules.css";


const LiBrary = () => {
  const { searchBook } = useBooks();
  const [text, setText] = useState('');

  // 엔터를 눌렀을 때 호출되는 함수
  const onEnter = (e) => {
    if (e.keyCode === 13) {
      searchBook(text);
    }
  };
  // text 검색어가 바뀔 때 호출되는 함수
  const onTextUpdate = (e) => {
    setText(e.target.value);
  };
  return (
    <LiBraryWrapper>
      <div className='searchBox'>
        <input
          type='search'
          placeholder='검색어를 입력해 주세요.'
          name='query'
          onKeyDown={onEnter} // enter
          onChange={onTextUpdate} // change
          value={text} // view
          className='input_search'
        />
      </div>
      <ul>
        <BookList />
      </ul>
    </LiBraryWrapper>
  );
};
const LiBraryWrapper = styled.div`
  
  .books {
    display: flex;
  }

  .searchBox {
    position: relative;
    width: 70%;
    height: 5rem;
    padding: 0 10rem;
    margin: 4rem auto;
    background: #fff;
    text-align: left;
    box-sizing: border-box;
  }
 
`;

export default LiBrary;
