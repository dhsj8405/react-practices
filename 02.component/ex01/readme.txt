ex01: Property

01. props(property)


02. FoodList src/01 : 클래스 컴포넌트
03. FoodList src/02 : Data Flow(top->down) : 클래스 컴포넌트
04. FoodList src/03 : Data Flow(top->down) : 함수 컴포넌트
05. 클래스 컴포넌트 만들기
06. FoodList src/04 : validation 

설치:
$ npm i -D webpack webpack-cli webpack-dev-server babel-loader style-loader css-loader sass-loader node-sass @babel/core @babel/cli @babel/cli @babel/preset-env @babel/preset-react
$ npm i react react-dom

설정:
babel: babel.config.json
webpack: webpack.config.js

package.json의 스크립트 추가하기{
    "scripts" :{
        "debug": "npx webpack serve --progress --mode development --env",
        "build": "npx webpack --mode production"
    }

}
실행
npm run debug src={01|02|03|04|...}