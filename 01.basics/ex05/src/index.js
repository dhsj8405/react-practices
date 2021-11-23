import ReactDOM from 'react-dom';
import {App} from './App.js';           // ex6의 언어적인 모듈시스템 : 언어적으로 표현

// document
//     .getElementById('root')
//     .appendChild(App());
ReactDOM.render(App(), document.getElementById('root') )