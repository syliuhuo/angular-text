/**
 * 建立angular.module
 */
define(['angular'], function (angular) {
    //后边引入插件或者是模块
    var app = angular.module('lzyapp', ['ngAnimate','ui.router']);
    //初始化全局的一些数据
    app.run(['$rootScope',function($rootScope){
        //挂载一些全局的变量和方法
    }]);
    return app;
});

