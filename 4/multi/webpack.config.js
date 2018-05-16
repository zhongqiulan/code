const path = require('path')
const webpack = require('webpack')
module.exports = {
    entry: './entry.js', //配置打包的入口文件
    output: { //出口
        path: path.join(__dirname), //打包的东西放在哪个文件夹下
        filename: 'bundle.js' //最终打包生成文件名称
    },
    module: { //loader的配置
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin('This file is created by zhongqiulan')
      ]
}