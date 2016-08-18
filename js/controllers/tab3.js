/**
 * Created by hama on 2015/9/28.
 */
define(['app'],function(app){
    return app.controller('tab3',['$scope','$rootScope','$http',function($scope,$rootScope,$http){
        //控制器的逻辑
        $scope.content = '这里是tab3里面的内容，归tab3控制器来控制';


    }])
})