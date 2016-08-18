/**
 * Created by hama on 2015/9/27.
 */
//控制器一般不需要jquery，都是angular的多些,指令会需要jquery多些
define(['app'],function(app){
    return app.controller('aboutCtl',['$scope','$rootScope','$http',function($scope,$rootScope,$http){
        //控制器的逻辑
        $scope.user = {
            name:'李志远',
            age:'29',
            email:'148334733@qq.com',
            address:'河南省安阳市龙安区',
            work:'前端工程师'
        }

    }])
})