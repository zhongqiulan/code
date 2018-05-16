# 内容回顾

## 过滤器

### 私有（局部）过滤器
	写在和data同级
	filters:{
		过滤器函数(input,xxx){
			过滤操作
			
			return 过滤之后的结果
		}
	}
	
	调用:{{原始数据 | 过滤器函数名(参数)}}

### 全局过滤器
	Vue.filter(过滤器函数名称,(input,xxx)=>{
		过滤操作
			
		return 过滤之后的结果
	})
	
	调用:{{原始数据 | 过滤器函数名(参数)}}

----------------------

## let&const 箭头函数
	声明变量，用来替代var
	
	特性:
		1、const定义是常量，不能改，初始化的时候，必须赋值
		2、没有变量提升
		3、支持块级作用域
	
	语法:
		const 函数名称 = (xxx,yyy) => {
			函数体
		}

	注意：
		1、this的指向，需要注意一下
		2、参数在只有唯一一个的时候，可以省略`()`，其它情况，不能省略
		3、函数体如果只有一句话，可以省略`{}`，如果`{}`里面有return，就必须一起省略，但是结果依旧会返回
		
----------------------

## 网络请求

### vue-resource
	基于vue的，所以在导入，必须要先导入vue
	
	GET:
		this.$http.get(url).then(response=>{
			response.body
		},err=>{
		
		})
		
	POST:
		this.$http.post(url,{请求的参数}).then(response=>{
			response.body
		},err=>{
		
		})
		
	JSONP:
		this.$http.jsonp(url).then(response=>{
			response.body
		},err=>{
		
		})

### axios
	导入axios.js
	
	GET:
		axios.get(url).then(response=>{
			response.data
		},err=>{
		
		})
		
	POST:
		axios.post(url,{username:'zhangsan'}/"username=zhangsan").then(response=>{
			response.data
		},err=>{
		
		})

----------------------

## 品牌管理-网络版

----------------------

## 路由
	作用:
		实现单页面的内容切换
		
	代码实现:
		HTML:
			<router-link to="这个要和路由规则中写的一致"></router-link>
			<router-view></router-view>
		
		JS:
			1、定义好组件
				var 组件1 = Vue.extend({})
				var 组件2 = {}
				
			2、创建路由对象，设置路由规则
				const router = new VueRouter({
					routes:[
						{path:'/',redirect:'路径1'},
						{path:'路径1',component:组件1},
						{path:'路径2',component:组件2}
					]
				})
				
			3、把路由对象，注入到根实例中
				new Vue({
					router
				}).$mount('#app')


----------------------

# 今日课程目标【理解+拷贝】

## webpack【能看懂，会配置就行】
	说明:关于webpack上课听懂，自己练习的时候，能够拷贝正确，运行起来即可	
	
	参考：http://zhaoda.net/webpack-handbook/
	
### webpack它是什么?
	官方文档：
		https://webpack.js.org/
		
	Webpack 是当下最热门的前端资源模块化管理和打包工具。它可以将许多松散的模块按照依赖和规则打包成符合生产环境部署的前端资源。还可以将按需加载的模块进行代码分隔，等到实际需要的时候再异步加载。通过 loader 的转换，任何形式的资源都可以视作模块，比如 CommonJs 模块、 AMD 模块、 ES6 模块、CSS、图片、 JSON、Coffeescript、 LESS 等。
	
	首屏

### webpack它能做什么?
	browerify
	gulp

	可以把我们项目的源代码，通过webpack打包，打包成符合上线的静态资源【打包工具】

### webpack怎么做?
	前提:
		安装 webpack 全局包
		npm/cnpm i webpack@3.11.0 -g
		
		检测webpack的版本
		webpack -v
		
### webpack的核心概念
	参考:
		https://doc.webpack-china.org/concepts/
		
	入口:entry
		webpack打包的入口文件
		
	出口:output
		项目打包之后得到的文件，开发阶段，得到的就是bundle.js
		
	loader:
		可以让webpack打包非js文件
		参考:
			https://doc.webpack-china.org/loaders/
		
	插件:plugins
		让webpack更牛逼，好用到飞起来
		
### 练习webpack如果打包
	webpack打包单个js文件
		1、在项目中创建一个入口文件，写好内容
		
		2、切换到项目根目录，使用 webpack 入口文件名称 输出文件名称
			webpack entry.js bundle.js
			
		3、在项目根目录，创建一个index.html，在里面导入bundle.js，就可以运行看到效果了
	
	webpack打包具有依赖关系的两个js文件
		1、在项目根目录中，创建好两个js文件，entry.js module.js，写好内容
			
			
		2、切换到项目根目录，使用 webpack 入口文件名称 输出文件名称
			webpack entry.js bundle.js
			
		3、在项目根目录，创建一个index.html，在里面导入bundle.js，就可以运行看到效果了
	
	webpack打包css结尾的文件(非js结尾文件)、loader
		1、在上面的基础上，我在项目根目录下创建一个style.css，里面写上内容
		
		2、在entry.js导入style.css
		
		3、切换到项目根目录，使用 webpack 入口文件名称 输出文件名称
			webpack entry.js bundle.js
			
		4、上面打包会失败，需要再次进行如下处理，即可打包
			4.1、在项目上安装两个本地包 style-loader css-loader
				cnpm i style-loader css-loader -D（开发环境）
				
			4.2、在导入css的时候，在它前面加上打包css需要使用的loader
				require("!style-loader!css-loader!./style.css") // 载入 style.css
				
			补充:
				如果不想在导入css的时候，在它前面加loader，可以在打包的时候，告诉
				webpack，css使用什么loader来打包
				
				webpack entry.js bundle.js --module-bind "css=style-loader!css-loader"
				
		5、再次打包就ok了
	
	webpack打包的配置文件
		作用：
			简化我们在终端中输入的又长又不好记的那些打包指令
			
		步骤:
			1、在项目根目录下，创建好一个名字叫webpack.config.js的webpack配置文件
			
			2、在webpack.config.js中配置代码【会拷贝】
				entry
				output
				loader
				
			3、切换到根目录，直接使用 webpack 回车打包即可
	
	webpack中插件的使用
		步骤:
			1、现在本地安装webpack这个包
				cnpm i webpack@3.11.0 -D
				
			2、在plugins中，配置，配置见代码
	
		注意：
			插件(plugins)是和entry、output、module同级的，不要写错了
	
	webpack打包参数的使用
		webpack --progress 查看打包进度
		webpack -p 压缩，项目真正打包上线的时候，使用webpack自带的压缩插件
		webpack --config 文件名称 指定webpack打包的文件名称
		webpack --watch 监控源文件，当源文件更改保存之后，会自动打包	
			好处：更改了谁，就只打包谁，速度快
		
		注意：
			这些指令是可以接在一起使用的

----------------------

## webpack & webpack-dev-server

### webpack
	这个包用在生产阶段，到时候使用它进行打包，生成一大堆可以上线的静态资源
	
### webpack-dev-server
	封装了一个轻量级的Node服务器
	
	这个包用在开发阶段，使用它，会自动把打包好的bundle.js发布到它内部开启的node服务中
	
	webpack-dev-server 它是在webpack+node进行构建的，所以webpack有的指令，它都有
	并且还是有webpack没有的指令

----------------------

## webpack-dev-server + vue 搭建我们的项目【尽可能听明白、敲出来】
	热重载/热替换/热更新
	目的:在页面上看到一个 Hello Vue，并且实现热重载
	
### 先创建必要的文件和文件夹
	szhmqd15_vue
		|-src 源代码所在目录
			|- main.js 项目打包的入口文件
			|- App.vue 项目启动看到的第一个组件(项目的根组件)
			
		|-package.json 项目的配置文件（记录安装了哪些包）
		|-webpack.config.dev.js 开发阶段webpack配置文件

### 写好里面文件中的内容
	App.vue:
		见代码
		
	main.js 
		导入根组件、渲染根组件
		导入:http://es6.ruanyifeng.com/#docs/module#import-%E5%91%BD%E4%BB%A4
		
		渲染根组件:
			1、安装Vue
				cnpm i vue -S
			
			2、渲染
				new Vue({
				    el:"#app",
				    render:function(createElement){
				        return createElement(App)
				    }
				})
				
	webpack.config.dev.js
		entry
		output
		loader
			1、安装 vue-loader vue-template-compiler css-loader style-loader
			
			2、loader的配置，见代码
			

### html-webpack-plugin 插件 & webpack-dev-server 打包  一起运行
	html-webpack-plugin（生成一个页面，将来运行bundle.js）
		1、安装 html-webpack-plugin
		
		2、在项目根目录下，创建一个参照文件template.html，
		里面写上id=app的div就行了
		
		3、在plugins中写代码
		
	webpack-dev-server
		webpack-dev-server --progress --config webpack.config.dev.js --open --port 6008 --hot
		
		--open 自动打开浏览器
		--port 端口号，指定node启动的端口号
		--hot 热更新/热重载/热替换
		
		在package.json中的scripts中记录一下
		
		切换到根目录，直接使用 npm run dev 就可以运行
		
## 在公司中，项目怎么搭建
	1、一般情况下，你去公司项目已经搭建好了，你只需要写业务代码
		
	2、把我们今天你自己写的，或是我写的，拷贝过去
	
----------------------

## 搭建项目使用到的包
	第一次安装:
		包名：vue
		应用场景：当我们在main.js中，创建根实例的使用用到
		安装方式:cnpm i vue -S/--save
		
	第二次安装：
		包名:vue-loader vue-template-compiler css-loader style-loader
		应用场景：让项目支持打包.vue结尾的文件
		安装方式:cnpm i vue-loader vue-template-compiler css-loader style-loader -D/--save-dev
		
	第三次安装：
		包名:html-webpack-plugin webpack@3.11.0 webpack-dev-server@2.11.1
		应用场景:要声称html页面
		安装方式:cnpm i html-webpack-plugin webpack@3.11.0 webpack-dev-server@2.11.1 -D
