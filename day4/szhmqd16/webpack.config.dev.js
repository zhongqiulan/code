const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry:'./src/main.js',//入口
    module:{
        rules:[
            {
                test:/\.vue$/,
                use:['vue-loader']
            }
        ]
    },
    plugins:[
        //将来以template为模版，生成一个index.html并且发布到webpack-dev-server开启的node服务器上面去
        new HtmlWebpackPlugin({
            template:'./template.html'
        })
    ]
}