const path = require('path');

module.exports = {
    mode: 'development', 
    entry: path.resolve('./src/index'),     //의존성 분석을 src밑에 index.js부터한다
    output: {
        path: path.resolve('public'),
        filename: 'bundle.js'
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