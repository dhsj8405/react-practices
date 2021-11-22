const path = require('path');

module.exports = {
    entry: path.resolve('./src/index'),     //의존성 분석을 src밑에 index.js부터한다
    output: {
        path: path.resolve('public'),
        filename: 'bundle.js'
    }
}