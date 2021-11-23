import './assets/scss/App.scss';                //전체 스타일로 사용하는것 밑에 class='App-logo'라 씀 리액트처럼 import {App} from ~~ 하면 밑에 class = App.logo로 가져옴
import logo from './assets/images/logo.svg';

const App = function() {
    const app = document.createElement('div');
    app.className = 'App';
    app.innerHTML = 
    `<header class='App-header'>
        <img src='${logo}' class='App-logo' alt='logo' />
        <p>Hello World</p>
    </header>`;
    return app;
}

export { App }