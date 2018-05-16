document.write('It works,我是用的配置文件打包的哦999.<br/>')
document.write(require('./module.js')) // 添加模块
// require('!style-loader!css-loader!./style.css') //导入css

require('./style.css') //导入css