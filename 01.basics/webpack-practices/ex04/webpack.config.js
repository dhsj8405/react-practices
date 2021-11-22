const path = require('path');

module.exports = {
    mode: 'development', 
    entry: path.resolve('./src/index'),     //의존성 분석을 src밑에 index.js부터한다
    output: {
        path: path.resolve('public'),
        filename: 'bundle.js'
    },
    module:{
        rules: [{
            test: /\.css$/i,              //css로 끝나는 모든파일 .을 쓰기위해 이스케이프(\) 써줌 i:ignorecase
            use: ['style-loader', 'css-loader']
        }]
    },
    devServer: {
        // contentBase: path.resolve('public'),
        host: '0.0.0.0',
        port: 9999,
        // inline: true,
        liveReload: true,
        hot: false,
        compress: true
    }
}