var path = require('path');
var webpack = require('webpack')

module.exports = {
    entry: './entry.js', //打包的入口文件
    output: {//出口
        path: path.resolve(__dirname, ''),
        filename: 'bundle.js'
    },
    module: {//loader
        rules: [
            {
                test: /\.css$/, //正则表达式
                use: ['style-loader', 'css-loader'] //使用对应的loader
            }
        ]
    },
    plugins:[
        new webpack.BannerPlugin('这个bundle是被Huang Sir生成了!!!我是一名党员')
    ]
}