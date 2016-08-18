/**
 * 路由
 */
define(['app','geoFactory'], function(app,geoFactory){

    return app.config(['$stateProvider', '$urlRouterProvider','geoFactoryProvider',function($stateProvider,$urlRouterProvider,geoFactoryProvider) {
        $urlRouterProvider
            .when('','/home')
            .when('/home','/home/tab1')
        ;
        //理解多视图和嵌套视图的用法
        //多视图用views,也就是说一个页面里头有好多个ui-views，我们可以对应不同的模板文件
        //@用来绑定视图的名字，也就是说一个视图我们不需要命名，多个视图我们需要命名！！！！！！
        //嵌套视图用 父视图.子视图 ,激活的话，可以用ui-sref,也可以在控制器中用$state.go来进行跳转

        $stateProvider
            .state('home',{
                url:'/home',
                templateUrl:'js/views/home.html',
                controller:'homeCtl'
            })
            .state('about',{
                url:'/about',
                templateUrl:'js/views/about.html',
                controller:'aboutCtl'
            })
            .state('home.tab1',{
                url:'/tab1',
                views:{
                    '':{
                        templateUrl:'js/views/home/tab1.html',
                    },
                    'content@home.tab1':{
                        templateUrl:'js/views/home/content.html',
                    },
                    'ad@home.tab1':{
                        templateUrl:'js/views/home/ad.html'
                    }
                },
                controller:'tab1'
            })
            .state('home.tab2',{
                url:'/tab2',
                templateUrl:'js/views/home/tab2.html',
                controller:'tab2'
            })
            .state('home.tab3',{
                url:'/tab3',
                templateUrl:'js/views/home/tab3.html',
                controller:'tab3'
            });

        //设置服务初始化的操作
        //console.log(geoFactoryProvider);
        //改变内部的name的值
        geoFactoryProvider.name = 'hi';





    }])



})