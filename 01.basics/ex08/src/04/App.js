import React, {Fragment } from 'react';          //여러개 리턴안돼서 빈껍데기 만들어줘야함 : 개별적으로 받기위해 Fragment 넣어줌
import Header from './Header.js'
import Content from './Content.js'

export default function() {
    return (
        // <Fragment>
        //    <Header />
        //    <Content />
        // </Fragment>
        React.createElement(
            Fragment,
            null, 
            React.createElement(Header, null), 
            React.createElement(Content, null))
    )
}