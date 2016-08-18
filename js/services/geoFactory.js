/**
 * Created by hama on 2015/9/22.
 */
define(['app'],function(app){
    //自定义的服务放在最后，并且不使用$来进行命名
    //这种服务的定义，是无法进行初始化操作的，也就是说无法达到复用的作用
   /* return app.factory('geoFactory',[function(){
        //服务是需要返回的，并且依赖注入
        //返回一个生成随机数的一个服务，并注入进控制器中去
        return function(num1,num2){
            return Math.random()*(num2 - num1) +num1;
        }
    }]);*/
    //这样，我们可以对我们的指令app.config中进行初始化，达到复用的一个作用
    //angular服务的相关初始化配置
    return app.provider('geoFactory',[function(){
        return {
            //为这个对象创建一个name属性
            name:'hello',
            $get:function(){
                    return {
                    name:this.name,
                    show:function(){
                        return this.name + 'angular';
                    }
                }
            }

        }

    }]);
});