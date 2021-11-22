import './assets/css/App.css';

const App = function() {
    const app = document.createElement('h1');
    app.className = 'Header';
    app.textContent = 'Hello World';
    return app;
}

export { App }