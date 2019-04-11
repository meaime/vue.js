//项目的js入口文件

//1.导入jquery
//es6和node的语法浏览器执行不了，要用webpack编译。
//webpack4 使用的命令有所变化，  webpack .\src\main.js -o .\dist\bundle.js，
// 如果直接使用会被认为是两个需要打包的文件，而不是一个输入，一个输出，
// -o指定输出的文件

import $ from 'jquery'
// const $ = require('jquery')

$(function () {
    $('li:odd').css('backgroundColor', 'yellow')
    $('li:even').css('backgroundColor', function () {
        return '#' + 'D97634'
    })
})