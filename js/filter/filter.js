/**
 * Created by hama on 2015/10/17.
 */
define(['app'],function(app){
    app.filter('filter1',function(){
        return function(item){
            return item + '[追加的内容:单参数在此过滤!]';
        }

    });
    app.filter('filter2',function(){
        return function(item,num){
            for(var i=0;i<num;i++){
                item = item + '!';
            }
            return item;
        }
    });
    app.filter('filter3',function(){
        return function(items){
            angular.forEach(items,function(item, i){
                item = i+'、'+ item + '===';
            });
            return items;
        }
    });
    app.filter('filter4',function(){
        return function(input){
            //根据空格来把字符串切割成数组
            var words = input.split(' ');
            for(var i=0;i<words.length;i++){
                words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
            }
            return words.join(' ');
        }
    });
    app.filter('beSafeHtml', ['$sce', function($sce) {
        return function(html) {
            return $sce.trustAsHtml(html);
        };
    }]);

    app.filter('trustHtml', ['$sceDelegate', '$sce', function($sceDelegate, $sce) {
        return function(html) {
            return $sceDelegate.trustAs($sce.HTML, html);
        };
    }]);


})