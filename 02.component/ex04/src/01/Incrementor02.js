import React, {useState} from 'react';

export default function ({ begin, step }) {
    const [stateVal, setVal] = useState(begin);         // begin : 초기값, useState의 리턴값 =  배열을(setVal:우리가지정하는변수)하나 리턴해줌 ,stateVal: 분해된 배열
    //const [stateStep] = useState(step);                 // 참조,안쓰겠다. readonly상태 , 필요없음

    return (
        <div>
            <button onClick={(e) => {
                setVal(stateVal + stateStep);
            }}>
                <strong>+</strong>
            </button>
            {' '}
            <span>{ stateVal }</span>
            {' '}
            <button>
                <strong>+</strong>
            </button>
        </div>
    );
}