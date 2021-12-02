import React, { useState } from 'react';
import RegisterForm from './RegisterForm';
import SerachBar from './SearchBar';
import './assets/scss/App.scss';
import Emaillist from './Emaillist';

import data from './assets/json/data.json'

export default function() {
  const [keyword, setKeyword] = useState('');

  const notifyKeywordChanged = (keyword) => {
    console.log(keyword);
    setKeyword(keyword);
  }
    return (
        <div className={'App'}>
          <RegisterForm />
          <SerachBar callback={notifyKeywordChanged}/>         
          <Emaillist keyword = {keyword} emails={data}/> 
        </div>
    )
}