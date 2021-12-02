import React from 'react';
import RegisterForm from './RegisterForm';
import SerachBar from './SearchBar';
import './assets/scss/App.scss';
import Emaillist from './Emaillist';


export default function() {
    return (
        <div className={'App'}>
          <RegisterForm />
          <SerachBar />         
          <Emaillist /> 
        </div>
    )
}