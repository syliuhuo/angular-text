/**
 * Created by hama on 2015/9/28.
 */
define(['app'],function(app){
    return app.controller('tab1',['$scope','$rootScope','$http','$location','$anchorScroll','$cacheFactory','$log','$interpolate','$q','geoFactory',function($scope,$rootScope,$http,$location,$anchorScroll,$cacheFactory,$log,$interpolate,$q,geoFactory){
        //控制器的逻辑
        $scope.data1 = [
            {title:'数学',content:'1111111'},
            {title:'语文',content:'2222222'},
            {title:'英语',content:'3333333'}
        ];
        $scope.data2 = [
            {title:'物理',content:'4444444'},
            {title:'化学',content:'5555555'},
        ];
        //简单的$http服务的使用
       /* $http({
            method:'GET',
            url:'data.php',
        }).success(function(data){
            console.log(data);
        }).error(function(data){
            console.log(data);
        });*/
        //$location服务的使用
        //当前的URL信息,非常完整的URL路径
        var a = $location.absUrl();
        //console.log(a);
        //返回URL当中的路径，基本是针对路由的,如果给path()中传参的话，就设置路径
        var a1 = $location.path(); //加replace方法会替换掉之前的路径，也就是不会按返回键返回
        //console.log(a1);
       /* 添加哈希值
        var a2 = $location.hash('hello');
        console.log(a2);
        设置URL键值对
        var a3 = $location.search({'age':'200'});
        console.log(a3);*/
        //得到相对路径,也就是不包括头部的一些路径片段
        var a4 = $location.url();
        //console.log(a4);
        //主机名
        var a5 = $location.host();
        //console.log(a5);
        //端口号
        var a6 = $location.port();
        //console.log(a6);
        //协议
        var a7 = $location.protocol();
        //console.log(a7);
        //跳转制定的锚点操作
        //引入$anchorScroll服务
        $scope.change = function(id){
            //ID是每个盒子的ID值，div1,div2,div3...
            $location.hash(id);
            //这里存在一个问题，如果拉上去，再次点击不会运行ID值相同，所以，我们需要手动运行一下
            $anchorScroll();
        }
        //引入$cacheFactory缓存操作服务
        //参数 capacity是限制条数 {capacity:2}
        /*var cache = $cacheFactory('myCache');
        //创建一个缓存数据
        cache.put('name','hello');
        cache.put('age','20');
        cache.put('job','it');*/
        //console.log(cache.info());
        //获取用
        //console.log(cache.get('name'));
        //console.log(cache.get('age'));
        //删除用
        //cache.remove('name');
        //$log的运用
        /*$log.log('hello');
        $log.warn('hello');
        $log.error('hello');*/


        //延迟加载$q的运用
        //创建一个defer对象
        var dfd = $q.defer();
        function show(){
            setTimeout(function(){
                //defer的方法
                //resolve成功触发
                //reject 失败触发
                //notify  通知处理
                //then 回调处理
                dfd.resolve();


            },2000);
            return dfd.promise;
        };
        show().then(function(){
            //成功触发
            //alert('成功');

        },function(){
            //失败触发
            //alert('失败');
        });

        //$interpolate的运用
        //监听body数据的变化
        $scope.$watch('bb',function(newBody){
            if(newBody){
                var temp = $interpolate(newBody);
                $scope.showText = temp({ mytext:$scope.mytext });
            }
        });
        //自定义的服务geoFactory
        //console.log(geoFactory(-3,6));
        console.log(geoFactory.show());




















    }])
})