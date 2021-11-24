import React from 'react';

export default function() {
    /*
        리액트 컴포넌트 단일 루트 노드만 렌더링 할 수 있다.
        오류
        <h2>App02</h2>
        <p>JSX Tutorials - 특징2: Single Root node</p>
    */
    return (
        <div id="App">
            <h2>App02</h2>
            <p>JSX Tutorials - 특징2: Single Root node</p>
           
        </div>
    )
}