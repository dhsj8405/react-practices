import React, { useState } from 'react';

export default function TitelBar02() {
    useState()
    const onClickHandler = (e) =>{
        // no VS state.no
        console.log('TitleBar01 clicked');
    }

    return (
        <h1
         
        onClick={onClickHandler}
        style ={{cursor: 'pointer'}}>
        ex03 - Functional Event Handler(Functional Component)</h1>
    )
}