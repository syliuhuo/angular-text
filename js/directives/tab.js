/**
 * Created by hama on 2015/9/22.
 */
define(['jquery','app'],function($,app){
    app.directive('myTab',[function(){
        return {
            //返回一个方法
            restrict:'E',
            replace:true,
            templateUrl:'templates/temp1.html',
            //隔离了外部controller下的作用域
            scope:{
                //指令传递过来的值我们可以在这里被接收
                myId:'@',//@绑定的就是普通的字符串
               /* myName:'=',//=号绑定的就是数据了,控制器中的数据
                myFn:'&' //绑定控制器中的函数*/
                myData:'=',
            },
            link:function(scope,element,attr){
                //console.log(scope.name) 这里是指令控制器中的数据
                //console.log(element) 这里是容器的DIV
                //console.log(attr) 这里是指令的自定义属性mydata ,myid
                //angularJS当中内置了一个简化版的JQ，我们可以通过element来使用,也可以使用JQ
                element.delegate('input','click',function(){
                    $(this).attr('class','active').siblings('input').attr('class','');
                    $(this).siblings('div').eq($(this).index()).css('display','block').siblings('div').css('display','none');
                });
            },
            //指令当中的控制器，专门为自定义指令内部使用
            controller:['$scope',function($scope){
                //指令当中共享的数据
                $scope.name='lizhiyuan';
            }],
        }
    }])
})