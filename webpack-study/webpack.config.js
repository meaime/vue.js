//自动打包需要在根目录下面新建配置文件，webpack.config.js
//这个配置文件，其实就是一个js文件，通过node中的模块，向外暴露了一个配置对象
const path=require('path')

module.exports = {
    entry: path.join(__dirname, './src/main.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    }
}

//使用webpack-dev-server这个工具，来实现自动打包变异的功能
//1. 运行npm i webpack-dev-server -D把这个工具安装到项目的本地开发依赖
//2. 安装完毕后，这个工具的用法，和webpack命令的用法，完全一样
//3. 由于，我们是在项目中本地安装的webpack-dev-server,所以无法把他当做脚本命令，在powershell终端命令
//   运行(只有全局-g安装的工具，才能在终端正常执行)
//5. webpack-dev-server帮我们打包生成的bundle.js文件，并美欧实际存放到实际的物理磁盘上；而是直接托管到
//   了电脑的内存中，所以我们在项目根目录中，根本找不到这个打包好的bundle.js文件
//6. 我们可以认为，webpack-dev-server把打包好的文件，以一种虚拟的形式，托管到了咱们项目的根目录中，虽然我们
//   看不到他们，但是，我们可以认为，和dist src平级，有一个看不见的文件，叫做bundle.js


// "dev":"webpack-dev-server --open --port 3000 --contentBase src --hot" 
//--hot 页面异步刷新，对js文件修改不生效，css文件有效