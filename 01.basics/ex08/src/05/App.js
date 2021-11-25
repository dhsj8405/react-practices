import React, {Fragment, Component } from 'react';          //여러개 리턴안돼서 빈껍데기 만들어줘야함 : 개별적으로 받기위해 Fragment 넣어줌
import Header from './Header.js'
import Content from './Content.js'

export default class extends Component() {
    return (){
        return(
        <Fragment>
            <Header />
            <Content />
         </Fragment>
         );
        
     }
}