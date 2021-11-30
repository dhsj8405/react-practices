const path = require('path');

module.exports = function(env) {

    const entry = path.resolve(`src/${env.src}/index.js`);
    
    return {
        mode: 'development', 
        entry: entry,     //환경변수에 src 주기: 주는방법 npm start --evn src=01
        output: {
            path: path.resolve('public'),
            filename: 'bundle.js',
            assetModuleFilename: 'assets/images/[hash][ext]'       //모듈에 이미지 걸리면 퍼블릭으로 옮기면서 이름 해싱해서보냄
        },
        module:{
            rules: [{
                test: /\.js$/i,      
                exclude: /node_modules/, //정규표현식 //트랜스파일링하는데 node_modules라이브러리들은 빼라 
                loader: 'babel-loader',
                options: {
                    configFile: path.resolve('config/babel.config.json')
                }
            },{


        
       
                test: /\.(sa|sc|c)ss$/i,              //sass,scss,css로 끝나는 모든파일 : .을 쓰기위해 이스케이프(\) 써줌 i:ignorecase, sass가 scss편하게쓰게해주는것
                use: [
                    'style-loader',
                    {loader: 'css-loader', options: { modules: env['css-modules'] !== 'fasle'} },
                     'sass-loader']  //순서중요
            },{
                test: /\.(png|gif|jpe?g|svg|ico|tiff?|bmp)$/i,         //$ :끝        e?g e가없어도됨 
                type: 'asset/resource'
            }]
        },
        devtool: "eval-source-map",                     //에러났을때 에러위치를 번들링.js로 표시해서 원래소스랑 매핑해주는것
        devServer: {
            // contentBase: path.resolve('public'),
            host: '0.0.0.0',
            port: 9999,
            // inline: true,
            hot: false,
            compress: true,
            historyApiFallback: true            // 가상~~ 404 났을때 메인으로도림
        }
    };
}