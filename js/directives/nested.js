/**
 * Created by hama on 2015/10/14.
 */
define(['jquery','app'],function($,app){
    app.directive('hello',[function(){
        return {
            restrict:'E',
            replace:true,
            //指令想要嵌套，第一步是设置transclude属性为true
            transclude:true,
            controller:function($scope){
                //这里定义指令当中的数据
                //只能在内部找到$scope
                //$scope.name = 'lzy';
                //如果想让外部的指令访问的到，就必须用this,这样指令和指令之间就可以进行交互了
                this.name = 'lzy';
            },
            template:'<div>hello angular<h1 ng-transclude></h1></div>'
        }


    }])
    app.directive('hi',[function(){
        return {
            restrict:'E',
            replace:true,
            //引入那个指令,^代表父级，直接写是在自身上,?就不会报错了
            require:'^hello',
            template:'<span>hi angular</span>',
            //用到指令当中的数据的情况
            link:function(scope,element,attr,reController){
                //console.log(reController.name);

            }
        }
    }])

})