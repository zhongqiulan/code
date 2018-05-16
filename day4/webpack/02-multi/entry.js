document.write('It works我是入口文件222.<br/>')
document.write(require('./module.js')) // 添加模块

//方式1
// require('!style-loader!css-loader!./style.css')

//方式2
require("./style.css")