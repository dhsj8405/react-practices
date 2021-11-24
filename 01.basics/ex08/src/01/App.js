import React from 'react';

export default function() {
    return (
        <div>
            <h2>App01</h2>
            <p>JSX Tutorials - 특징1: HTML과 차이점</p>
            {/*
                1. 속성은 Camel Case
            */}
            <input type='text' maxLength='10' />
            {/*
                2. Element는 꼭 닫혀야 한다.
                오류) <br>, <hr>, <input type='text'>, <img src=''>
            */}
            <br/>
            <br/>
            <img src='https://i.pinimg.com/474x/cf/78/d0/cf78d004d72aae79823e40d87ded742b.jpg' />
            {/*
                3. 속성 이름은 DOM API 기반이다.
                    <div id='box' class ='box'>....</div>
                    document.getElementById('box').className = 'box'
            */}
            <div id='box' className ='box'>
                box 입니다.
            </div>
        </div>
    )
}