/**
 * Created by hama on 2015/10/13.
 */
define(['jquery','app'],function($,app){
    app.directive('myDrag',[function(){
        return {
            //属性方法
            restrict:'A',
            replace:true,
            scope:{},
            controller:['$scope',function($scope){

            }],
            link:function(scope,element,attr){
                //这个我们使用jq来进行操作
                var disX = 0;
                var disY = 0;
                attr.myDrag = angular.equals(attr.myDrag,'true');
                element.on('mousedown',function(ev){
                    var This = this;
                    disX = ev.pageX - $(This).offset().left;
                    disY = ev.pageY - $(This).offset().top;
                    if(attr.myDrag){
                        var $line = $('<div>');
                        $line.css({
                            width:$(this).outerWidth(),
                            height:$(this).outerHeight(),
                            position:'absolute',
                            left:$(this).offset().left,
                            top:$(this).offset().top,
                            border:'1px dotted gray',
                        });
                        $('body').append($line);
                    }
                    $(document).on('mousemove',function(ev){
                        if(attr.myDrag){
                            $line.css('left',ev.pageX - disX);
                            $line.css('top',ev.pageY - disY);

                        }else{
                            $(This).css('left', ev.pageX - disX);
                            $(This).css('top', ev.pageY - disY);
                        }
                    });
                    $(document).on('mouseup',function(){
                        $(document).off();
                        if(attr.myDrag){
                            $(This).css('left',$line.offset().left);
                            $(This).css('top',$line.offset().top);
                            $line.remove();
                        }
                    });
                    return false;



                });




            }

        }
    }])
})
