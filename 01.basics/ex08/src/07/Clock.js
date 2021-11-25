import React, {createElement, Fragment} from 'react';

export default function() {

    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    
    const htmls = 
    "<span>" +
    ('0'+hours).slice(-2) +
     ":" +
     ('0'+minutes).slice(-2) +
     ":" +
     ('0'+seconds).slice(-2) +
     "</span>"

    return (
        //
        // HTML 태그를 동적으로 생성하여 JSX element의 특정 속성으로 추가하는 작업을 금지하고 있지만,
        // XSS(Corss-Site Scription) 보호기능을 끄고 사용할 수 있따.
        //
        <div dangerouslySetInnerHTML={ {__html: htmls}} />
          
    )
}


