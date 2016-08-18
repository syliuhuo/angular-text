/**
 * Created by hama on 2015/9/28.
 */
define(['app'],function(app){
    return app.controller('tab2',['$scope','$rootScope','$http','$sce',function($scope,$rootScope,$http,$sce){
        //控制器的逻辑
        $scope.names = [
            {name:'a张三',age:'25'},
            {name:'b李四',age:'40'},
            {name:'C王五',age:'30'},
            {name:'d赵六',age:'64'}
        ];
        $scope.infoList = [
            {
                title:'预期年化收益率',
                p2p:'7%-14%',
                bank:'约4%-5.5%',
                yeb:'约3%-4%'
            },
            {
                title:'买如当天生息',
                p2p:true,
                bank:false,
                yeb:false
            },
            {
                title:'买如次日开始付息',
                p2p:true,
                bank:false,
                yeb:false
            },
            {
                title:'每日付息',
                p2p:true,
                bank:false,
                yeb:true
            },
            {
                title:'每日利息自动复投',
                p2p:true,
                bank:false,
                yeb:false
            },
            {
                title:'期限灵活，随时可取',
                p2p:true,
                bank:false,
                yeb:false
            },
            {
                title:'可以零钱增投',
                p2p:true,
                bank:false,
                yeb:false
            }
        ];
        $scope.footballData = [
            {Round: 1, Team1: '杭州绿城', Team2: '广州富力', Score1: 1, Score2: 2, Flag1: 'http://www.sinaimg.cn/lf/sports/logo85/264.png', Flag2: 'http://www.sinaimg.cn/ty/opta/85/6905.png', date: '2015-03-07', time: '15:35', MatchCity: '杭州', Situation: '黄龙体育场', status_cn: '完赛'},
            {Round: 1, Team1: '上海上港', Team2: '江苏舜天', Score1: 2, Score2: 1, Flag1: 'http://www.sinaimg.cn/lf/sports/logo85/41300.png', Flag2: 'http://www.sinaimg.cn/lf/sports/logo85/179.png', date: '2015-03-07', time: '15:35', MatchCity: '上海', Situation: '上海体育场', status_cn: '完赛'},
            {Round: 1, Team1: '贵州人和', Team2: '辽宁宏运', Score1: 0, Score2: 1, Flag1: 'http://www.sinaimg.cn/lf/sports/logo85/170.png', Flag2: 'http://www.sinaimg.cn/lf/sports/logo85/139.png', date: '2015-03-07', time: '19:35', MatchCity: '贵阳', Situation: '奥体中心球场', status_cn: '完赛'},
            {Round: 1, Team1: '重庆力帆', Team2: '北京国安', Score1: 0, Score2: 3, Flag1: 'http://www.sinaimg.cn/lf/sports/logo85/151.png', Flag2: 'http://www.sinaimg.cn/lf/sports/logo85/136.png', date: '2015-03-08', time: '15:35', MatchCity: '重庆', Situation: '重庆奥体中心', status_cn: '完赛'},
            {Round: 1, Team1: '山东鲁能', Team2: '长春亚泰', Score1: 2, Score2: 0, Flag1: 'http://www.sinaimg.cn/lf/sports/logo85/153.png', Flag2: 'http://www.sinaimg.cn/lf/sports/logo85/172.png', date: '2015-03-08', time: '19:35', MatchCity: '济南', Situation: '鲁能大球场', status_cn: '完赛'},
            {Round: 1, Team1: '河南建业', Team2: '天津泰达', Score1: 3, Score2: 1, Flag1: 'http://www.sinaimg.cn/lf/sports/logo85/178.png', Flag2: 'http://www.sinaimg.cn/lf/sports/logo85/148.png', date: '2015-03-08', time: '19:45', MatchCity: '郑州', Situation: '航海体育场', status_cn: '完赛'},
            {Round: 1, Team1: '上海申花', Team2: '上海申鑫', Score1: 6, Score2: 2, Flag1: 'http://www.sinaimg.cn/lf/sports/logo85/144.png', Flag2: 'http://www.sinaimg.cn/ty/opta/85/6911.png', date: '2015-03-08', time: '19:45', MatchCity: '上海', Situation: '虹口体育场', status_cn: '完赛'},
            {Round: 1, Team1: '广州恒大', Team2: '石家庄永昌', Score1: 2, Score2: 1, Flag1: 'http://www.sinaimg.cn/lf/sports/logo85/5065.png', Flag2: 'http://www.sinaimg.cn/lf/sports/logo85/55816.png', date: '2015-03-09', time: '20:00', MatchCity: '广东', Situation: '天河体育场', status_cn: '完赛'},
            {Round: 2, Team1: '辽宁宏运', Team2: '山东鲁能', Score1: 3, Score2: 2, Flag1: 'http://www.sinaimg.cn/lf/sports/logo85/139.png', Flag2: 'http://www.sinaimg.cn/lf/sports/logo85/153.png', date: '2015-03-13', time: '14:35', MatchCity: '辽宁', Situation: '铁西体育场', status_cn: '完赛'},
            {Round: 2, Team1: '北京国安', Team2: '河南建业', Score1: 1, Score2: 0, Flag1: 'http://www.sinaimg.cn/lf/sports/logo85/136.png', Flag2: 'http://www.sinaimg.cn/lf/sports/logo85/178.png', date: '2015-03-13', time: '19:35', MatchCity: '北京', Situation: '工人体育场', status_cn: '完赛'},
            {Round: 2, Team1: '广州富力', Team2: '上海申花', Score1: 0, Score2: 1, Flag1: 'http://www.sinaimg.cn/ty/opta/85/6905.png', Flag2: 'http://www.sinaimg.cn/lf/sports/logo85/144.png', date: '2015-03-13', time: '19:35', MatchCity: '广州', Situation: '越秀山体育场', status_cn: '完赛'},
            {Round: 2, Team1: '重庆力帆', Team2: '广州恒大', Score1: 1, Score2: 2, Flag1: 'http://www.sinaimg.cn/lf/sports/logo85/151.png', Flag2: 'http://www.sinaimg.cn/lf/sports/logo85/5065.png', date: '2015-03-14', time: '15:35', MatchCity: '重庆', Situation: '重庆奥体中心', status_cn: '完赛'},
            {Round: 2, Team1: '江苏舜天', Team2: '贵州人和', Score1: 2, Score2: 0, Flag1: 'http://www.sinaimg.cn/lf/sports/logo85/179.png', Flag2: 'http://www.sinaimg.cn/lf/sports/logo85/170.png', date: '2015-03-14', time: '19:45', MatchCity: '南京', Situation: '奥体中心球场', status_cn: '完赛'},
            {Round: 2, Team1: '上海申鑫', Team2: '上海上港', Score1: 0, Score2: 2, Flag1: 'http://www.sinaimg.cn/ty/opta/85/6911.png', Flag2: 'http://www.sinaimg.cn/ty/2015/0309/U6521P6DT20150309172332.png', date: '2015-03-15', time: '16:00', MatchCity: '上海', Situation: '金山体育场', status_cn: '完赛'},
            {Round: 2, Team1: '天津泰达', Team2: '杭州绿城', Score1: 0, Score2: 0, Flag1: 'http://www.sinaimg.cn/lf/sports/logo85/148.png', Flag2: 'http://www.sinaimg.cn/lf/sports/logo85/264.png', date: '2015-03-15', time: '19:35', MatchCity: '天津', Situation: '泰达足球场', status_cn: '完赛'},
            {Round: 2, Team1: '长春亚泰', Team2: '石家庄永昌', Score1: 0, Score2: 3, Flag1: 'http://www.sinaimg.cn/lf/sports/logo85/172.png', Flag2: 'http://www.sinaimg.cn/lf/sports/logo85/55816.png', date: '2015-08-01', time: '19:00', MatchCity: '长春', Situation: '经开体育场', status_cn: '完赛'},
            {Round: 3, Team1: '贵州人和', Team2: '上海申鑫', Score1: 2, Score2: 1, Flag1: 'http://www.sinaimg.cn/lf/sports/logo85/170.png', Flag2: 'http://www.sinaimg.cn/ty/opta/85/6911.png', date: '2015-03-21', time: '19:35', MatchCity: '贵阳', Situation: '奥体中心球场', status_cn: '完赛'},
            {Round: 3, Team1: '石家庄永昌', Team2: '辽宁宏运', Score1: 1, Score2: 1, Flag1: 'http://www.sinaimg.cn/lf/sports/logo85/55816.png', Flag2: 'http://www.sinaimg.cn/lf/sports/logo85/139.png', date: '2015-03-21', time: '19:35', MatchCity: '石家庄', Situation: '裕彤体育中心', status_cn: '完赛'},
            {Round: 3, Team1: '杭州绿城', Team2: '北京国安', Score1: 1, Score2: 1, Flag1: 'http://www.sinaimg.cn/lf/sports/logo85/264.png', Flag2: 'http://www.sinaimg.cn/lf/sports/logo85/136.png', date: '2015-03-22', time: '15:35', MatchCity: '杭州', Situation: '黄龙体育场', status_cn: '完赛'},
            {Round: 3, Team1: '上海上港', Team2: '广州富力', Score1: 2, Score2: 1, Flag1: 'http://www.sinaimg.cn/ty/2015/0309/U6521P6DT20150309172332.png', Flag2: 'http://www.sinaimg.cn/ty/opta/85/6905.png', date: '2015-03-22', time: '15:35', MatchCity: '上海', Situation: '上海体育场', status_cn: '完赛'},
            {Round: 3, Team1: '上海申花', Team2: '天津泰达', Score1: 1, Score2: 0, Flag1: 'http://www.sinaimg.cn/lf/sports/logo85/144.png', Flag2: 'http://www.sinaimg.cn/lf/sports/logo85/148.png', date: '2015-03-22', time: '19:35', MatchCity: '上海', Situation: '虹口体育场', status_cn: '完赛'},
            {Round: 3, Team1: '山东鲁能', Team2: '江苏舜天', Score1: 5, Score2: 1, Flag1: 'http://www.sinaimg.cn/lf/sports/logo85/153.png', Flag2: 'http://www.sinaimg.cn/lf/sports/logo85/179.png', date: '2015-03-22', time: '19:35', MatchCity: '济南', Situation: '鲁能大球场', status_cn: '完赛'},
            {Round: 3, Team1: '河南建业', Team2: '重庆力帆', Score1: 3, Score2: 3, Flag1: 'http://www.sinaimg.cn/lf/sports/logo85/178.png', Flag2: 'http://www.sinaimg.cn/lf/sports/logo85/151.png', date: '2015-03-22', time: '19:45', MatchCity: '郑州', Situation: '航海体育场', status_cn: '完赛'},
            {Round: 3, Team1: '广州恒大', Team2: '长春亚泰', Score1: 1, Score2: 1, Flag1: 'http://www.sinaimg.cn/lf/sports/logo85/5065.png', Flag2: 'http://www.sinaimg.cn/lf/sports/logo85/172.png', date: '2015-03-22', time: '20:00', MatchCity: '广东', Situation: '天河体育场', status_cn: '完赛'},
            {Round: 4, Team1: '上海申鑫', Team2: '山东鲁能', Score1: 1, Score2: 2, Flag1: 'http://www.sinaimg.cn/ty/opta/85/6911.png', Flag2: 'http://www.sinaimg.cn/lf/sports/logo85/153.png', date: '2015-04-03', time: '16:00', MatchCity: '上海', Situation: '金山体育场', status_cn: '完赛'},
            {Round: 4, Team1: '广州富力', Team2: '贵州人和', Score1: 4, Score2: 0, Flag1: 'http://www.sinaimg.cn/ty/opta/85/6905.png', Flag2: 'http://www.sinaimg.cn/lf/sports/logo85/170.png', date: '2015-04-03', time: '19:30', MatchCity: '广州', Situation: '越秀山体育场', status_cn: '完赛'},
            {Round: 4, Team1: '北京国安', Team2: '上海申花', Score1: 2, Score2: 0, Flag1: 'http://www.sinaimg.cn/lf/sports/logo85/136.png', Flag2: 'http://www.sinaimg.cn/lf/sports/logo85/144.png', date: '2015-04-03', time: '19:35', MatchCity: '北京', Situation: '工人体育场', status_cn: '完赛'},
            {Round: 4, Team1: '河南建业', Team2: '广州恒大', Score1: 2, Score2: 1, Flag1: 'http://www.sinaimg.cn/lf/sports/logo85/178.png', Flag2: 'http://www.sinaimg.cn/lf/sports/logo85/5065.png', date: '2015-04-03', time: '19:45', MatchCity: '郑州', Situation: '航海体育场', status_cn: '完赛'},
            {Round: 4, Team1: '辽宁宏运', Team2: '长春亚泰', Score1: 2, Score2: 2, Flag1: 'http://www.sinaimg.cn/lf/sports/logo85/139.png', Flag2: 'http://www.sinaimg.cn/lf/sports/logo85/172.png', date: '2015-04-04', time: '14:35', MatchCity: '辽宁', Situation: '铁西体育场', status_cn: '完赛'},
            {Round: 4, Team1: '重庆力帆', Team2: '杭州绿城', Score1: 1, Score2: 2, Flag1: 'http://www.sinaimg.cn/lf/sports/logo85/151.png', Flag2: 'http://www.sinaimg.cn/lf/sports/logo85/264.png', date: '2015-04-04', time: '19:35', MatchCity: '重庆', Situation: '重庆奥体中心', status_cn: '完赛'},
            {Round: 4, Team1: '天津泰达', Team2: '上海上港', Score1: 0, Score2: 0, Flag1: 'http://www.sinaimg.cn/lf/sports/logo85/148.png', Flag2: 'http://www.sinaimg.cn/ty/2015/0309/U6521P6DT20150309172332.png', date: '2015-04-05', time: '19:35', MatchCity: '天津', Situation: '泰达足球场', status_cn: '完赛'},
            {Round: 4, Team1: '江苏舜天', Team2: '石家庄永昌', Score1: 2, Score2: 1, Flag1: 'http://www.sinaimg.cn/lf/sports/logo85/179.png', Flag2: 'http://www.sinaimg.cn/lf/sports/logo85/55816.png', date: '2015-04-05', time: '19:45', MatchCity: '南京', Situation: '奥体中心球场', status_cn: '完赛'},
            {Round: 5, Team1: '贵州人和', Team2: '天津泰达', Score1: 0, Score2: 1, Flag1: 'http://www.sinaimg.cn/lf/sports/logo85/170.png', Flag2: 'http://www.sinaimg.cn/lf/sports/logo85/148.png', date: '2015-04-11', time: '19:35', MatchCity: '贵阳', Situation: '奥体中心球场', status_cn: '完赛'},
            {Round: 5, Team1: '石家庄永昌', Team2: '上海申鑫', Score1: 2, Score2: 1, Flag1: 'http://www.sinaimg.cn/lf/sports/logo85/55816.png', Flag2: 'http://www.sinaimg.cn/ty/opta/85/6911.png', date: '2015-04-11', time: '19:35', MatchCity: '石家庄', Situation: '裕彤体育中心', status_cn: '完赛'},
            {Round: 5, Team1: '上海申花', Team2: '重庆力帆', Score1: 2, Score2: 2, Flag1: 'http://www.sinaimg.cn/lf/sports/logo85/144.png', Flag2: 'http://www.sinaimg.cn/lf/sports/logo85/151.png', date: '2015-04-11', time: '19:45', MatchCity: '上海', Situation: '虹口体育场', status_cn: '完赛'},
            {Round: 5, Team1: '长春亚泰', Team2: '江苏舜天', Score1: 2, Score2: 2, Flag1: 'http://www.sinaimg.cn/lf/sports/logo85/172.png', Flag2: 'http://www.sinaimg.cn/lf/sports/logo85/179.png', date: '2015-04-12', time: '15:00', MatchCity: '长春', Situation: '经开体育场', status_cn: '完赛'},
            {Round: 5, Team1: '上海上港', Team2: '北京国安', Score1: 1, Score2: 1, Flag1: 'http://www.sinaimg.cn/ty/2015/0309/U6521P6DT20150309172332.png', Flag2: 'http://www.sinaimg.cn/lf/sports/logo85/136.png', date: '2015-04-12', time: '17:00', MatchCity: '上海', Situation: '上海体育场', status_cn: '完赛'},
            {Round: 5, Team1: '山东鲁能', Team2: '广州富力', Score1: 1, Score2: 2, Flag1: 'http://www.sinaimg.cn/lf/sports/logo85/153.png', Flag2: 'http://www.sinaimg.cn/ty/opta/85/6905.png', date: '2015-04-12', time: '19:35', MatchCity: '济南', Situation: '鲁能大球场', status_cn: '完赛'},
            {Round: 5, Team1: '广州恒大', Team2: '辽宁宏运', Score1: 6, Score2: 1, Flag1: 'http://www.sinaimg.cn/lf/sports/logo85/5065.png', Flag2: 'http://www.sinaimg.cn/lf/sports/logo85/139.png', date: '2015-04-12', time: '20:00', MatchCity: '广东', Situation: '天河体育场', status_cn: '完赛'},
            {Round: 5, Team1: '杭州绿城', Team2: '河南建业', Score1: 0, Score2: 0, Flag1: 'http://www.sinaimg.cn/lf/sports/logo85/264.png', Flag2: 'http://www.sinaimg.cn/lf/sports/logo85/178.png', date: '2015-04-13', time: '19:35', MatchCity: '杭州', Situation: '黄龙体育场', status_cn: '完赛'},
            {Round: 6, Team1: '北京国安', Team2: '贵州人和', Score1: 2, Score2: 2, Flag1: 'http://www.sinaimg.cn/lf/sports/logo85/136.png', Flag2: 'http://www.sinaimg.cn/lf/sports/logo85/170.png', date: '2015-04-17', time: '19:35', MatchCity: '北京', Situation: '工人体育场', status_cn: '完赛'},
            {Round: 6, Team1: '山东鲁能', Team2: '天津泰达', Score1: 2, Score2: 3, Flag1: 'http://www.sinaimg.cn/lf/sports/logo85/153.png', Flag2: 'http://www.sinaimg.cn/lf/sports/logo85/148.png', date: '2015-04-17', time: '19:35', MatchCity: '济南', Situation: '鲁能大球场', status_cn: '完赛'},
            {Round: 6, Team1: '广州恒大', Team2: '杭州绿城', Score1: 1, Score2: 0, Flag1: 'http://www.sinaimg.cn/lf/sports/logo85/5065.png', Flag2: 'http://www.sinaimg.cn/lf/sports/logo85/264.png', date: '2015-04-17', time: '20:00', MatchCity: '广东', Situation: '天河体育场', status_cn: '完赛'},
            {Round: 6, Team1: '上海申鑫', Team2: '长春亚泰', Score1: 1, Score2: 4, Flag1: 'http://www.sinaimg.cn/ty/opta/85/6911.png', Flag2: 'http://www.sinaimg.cn/lf/sports/logo85/172.png', date: '2015-04-18', time: '15:30', MatchCity: '上海', Situation: '金山体育场', status_cn: '完赛'},
            {Round: 6, Team1: '广州富力', Team2: '石家庄永昌', Score1: 0, Score2: 0, Flag1: 'http://www.sinaimg.cn/ty/opta/85/6905.png', Flag2: 'http://www.sinaimg.cn/lf/sports/logo85/55816.png', date: '2015-04-18', time: '19:30', MatchCity: '广州', Situation: '越秀山体育场', status_cn: '完赛'},
            {Round: 6, Team1: '江苏舜天', Team2: '辽宁宏运', Score1: 2, Score2: 1, Flag1: 'http://www.sinaimg.cn/lf/sports/logo85/179.png', Flag2: 'http://www.sinaimg.cn/lf/sports/logo85/139.png', date: '2015-04-18', time: '19:45', MatchCity: '南京', Situation: '奥体中心球场', status_cn: '完赛'},
            {Round: 6, Team1: '上海上港', Team2: '重庆力帆', Score1: 2, Score2: 1, Flag1: 'http://www.sinaimg.cn/ty/2015/0309/U6521P6DT20150309172332.png', Flag2: 'http://www.sinaimg.cn/lf/sports/logo85/151.png', date: '2015-04-19', time: '15:35', MatchCity: '上海', Situation: '上海体育场', status_cn: '完赛'},
            {Round: 6, Team1: '河南建业', Team2: '上海申花', Score1: 2, Score2: 1, Flag1: 'http://www.sinaimg.cn/lf/sports/logo85/178.png', Flag2: 'http://www.sinaimg.cn/lf/sports/logo85/144.png', date: '2015-04-19', time: '19:45', MatchCity: '郑州', Situation: '航海体育场', status_cn: '完赛'},
            {Round: 7, Team1: '石家庄永昌', Team2: '天津泰达', Score1: 4, Score2: 3, Flag1: 'http://www.sinaimg.cn/lf/sports/logo85/55816.png', Flag2: 'http://www.sinaimg.cn/lf/sports/logo85/148.png', date: '2015-04-24', time: '19:35', MatchCity: '石家庄', Situation: '裕彤体育中心', status_cn: '完赛'},
            {Round: 7, Team1: '辽宁宏运', Team2: '上海申鑫', Score1: 1, Score2: 1, Flag1: 'http://www.sinaimg.cn/lf/sports/logo85/139.png', Flag2: 'http://www.sinaimg.cn/ty/opta/85/6911.png', date: '2015-04-25', time: '15:35', MatchCity: '辽宁', Situation: '铁西体育场', status_cn: '完赛'},
            {Round: 7, Team1: '贵州人和', Team2: '重庆力帆', Score1: 0, Score2: 1, Flag1: 'http://www.sinaimg.cn/lf/sports/logo85/170.png', Flag2: 'http://www.sinaimg.cn/lf/sports/logo85/151.png', date: '2015-04-25', time: '19:35', MatchCity: '贵阳', Situation: '奥体中心球场', status_cn: '完赛'},
            {Round: 7, Team1: '上海申花', Team2: '杭州绿城', Score1: 2, Score2: 0, Flag1: 'http://www.sinaimg.cn/lf/sports/logo85/144.png', Flag2: 'http://www.sinaimg.cn/lf/sports/logo85/264.png', date: '2015-04-25', time: '19:45', MatchCity: '上海', Situation: '虹口体育场', status_cn: '完赛'},
            {Round: 7, Team1: '长春亚泰', Team2: '广州富力', Score1: 1, Score2: 2, Flag1: 'http://www.sinaimg.cn/lf/sports/logo85/172.png', Flag2: 'http://www.sinaimg.cn/ty/opta/85/6905.png', date: '2015-04-26', time: '15:35', MatchCity: '长春', Situation: '经开体育场', status_cn: '完赛'},
            {Round: 7, Team1: '上海上港', Team2: '河南建业', Score1: 3, Score2: 0, Flag1: 'http://www.sinaimg.cn/ty/2015/0309/U6521P6DT20150309172332.png', Flag2: 'http://www.sinaimg.cn/lf/sports/logo85/178.png', date: '2015-04-26', time: '15:35', MatchCity: '上海', Situation: '上海体育场', status_cn: '完赛'},
            {Round: 7, Team1: '山东鲁能', Team2: '北京国安', Score1: 3, Score2: 0, Flag1: 'http://www.sinaimg.cn/lf/sports/logo85/153.png', Flag2: 'http://www.sinaimg.cn/lf/sports/logo85/136.png', date: '2015-04-26', time: '19:35', MatchCity: '济南', Situation: '鲁能大球场', status_cn: '完赛'},
            {Round: 7, Team1: '广州恒大', Team2: '江苏舜天', Score1: 3, Score2: 3, Flag1: 'http://www.sinaimg.cn/lf/sports/logo85/5065.png', Flag2: 'http://www.sinaimg.cn/lf/sports/logo85/179.png', date: '2015-04-26', time: '20:00', MatchCity: '广东', Situation: '天河体育场', status_cn: '完赛'},
            {Round: 8, Team1: '广州富力', Team2: '辽宁宏运', Score1: 0, Score2: 0, Flag1: 'http://www.sinaimg.cn/ty/opta/85/6905.png', Flag2: 'http://www.sinaimg.cn/lf/sports/logo85/139.png', date: '2015-05-01', time: '19:30', MatchCity: '广州', Situation: '越秀山体育场', status_cn: '完赛'},
            {Round: 8, Team1: '北京国安', Team2: '石家庄永昌', Score1: 3, Score2: 1, Flag1: 'http://www.sinaimg.cn/lf/sports/logo85/136.png', Flag2: 'http://www.sinaimg.cn/lf/sports/logo85/55816.png', date: '2015-05-01', time: '19:35', MatchCity: '北京', Situation: '工人体育场', status_cn: '完赛'},
            {Round: 8, Team1: '上海申花', Team2: '广州恒大', Score1: 0, Score2: 3, Flag1: 'http://www.sinaimg.cn/lf/sports/logo85/144.png', Flag2: 'http://www.sinaimg.cn/lf/sports/logo85/5065.png', date: '2015-05-01', time: '19:45', MatchCity: '上海', Situation: '虹口体育场', status_cn: '完赛'},
            {Round: 8, Team1: '重庆力帆', Team2: '山东鲁能', Score1: 2, Score2: 2, Flag1: 'http://www.sinaimg.cn/lf/sports/logo85/151.png', Flag2: 'http://www.sinaimg.cn/lf/sports/logo85/153.png', date: '2015-05-02', time: '19:35', MatchCity: '重庆', Situation: '重庆奥体中心', status_cn: '完赛'},
            {Round: 8, Team1: '河南建业', Team2: '贵州人和', Score1: 1, Score2: 1, Flag1: 'http://www.sinaimg.cn/lf/sports/logo85/178.png', Flag2: 'http://www.sinaimg.cn/lf/sports/logo85/170.png', date: '2015-05-02', time: '19:45', MatchCity: '郑州', Situation: '航海体育场', status_cn: '完赛'},
            {Round: 8, Team1: '江苏舜天', Team2: '上海申鑫', Score1: 1, Score2: 0, Flag1: 'http://www.sinaimg.cn/lf/sports/logo85/179.png', Flag2: 'http://www.sinaimg.cn/ty/opta/85/6911.png', date: '2015-05-02', time: '19:45', MatchCity: '南京', Situation: '奥体中心球场', status_cn: '完赛'},
            {Round: 8, Team1: '杭州绿城', Team2: '上海上港', Score1: 1, Score2: 1, Flag1: 'http://www.sinaimg.cn/lf/sports/logo85/264.png', Flag2: 'http://www.sinaimg.cn/ty/2015/0309/U6521P6DT20150309172332.png', date: '2015-05-03', time: '19:35', MatchCity: '杭州', Situation: '黄龙体育场', status_cn: '完赛'},
            {Round: 8, Team1: '天津泰达', Team2: '长春亚泰', Score1: 1, Score2: 1, Flag1: 'http://www.sinaimg.cn/lf/sports/logo85/148.png', Flag2: 'http://www.sinaimg.cn/lf/sports/logo85/172.png', date: '2015-05-03', time: '19:35', MatchCity: '天津', Situation: '泰达足球场', status_cn: '完赛'},
            {Round: 9, Team1: '辽宁宏运', Team2: '天津泰达', Score1: 3, Score2: 2, Flag1: 'http://www.sinaimg.cn/lf/sports/logo85/139.png', Flag2: 'http://www.sinaimg.cn/lf/sports/logo85/148.png', date: '2015-05-09', time: '15:35', MatchCity: '辽宁', Situation: '铁西体育场', status_cn: '完赛'},
            {Round: 9, Team1: '杭州绿城', Team2: '贵州人和', Score1: 1, Score2: 0, Flag1: 'http://www.sinaimg.cn/lf/sports/logo85/264.png', Flag2: 'http://www.sinaimg.cn/lf/sports/logo85/170.png', date: '2015-05-09', time: '19:35', MatchCity: '杭州', Situation: '黄龙体育场', status_cn: '完赛'},
            {Round: 9, Team1: '石家庄永昌', Team2: '重庆力帆', Score1: 2, Score2: 0, Flag1: 'http://www.sinaimg.cn/lf/sports/logo85/55816.png', Flag2: 'http://www.sinaimg.cn/lf/sports/logo85/151.png', date: '2015-05-09', time: '19:35', MatchCity: '石家庄', Situation: '裕彤体育中心', status_cn: '完赛'},
            {Round: 9, Team1: '上海上港', Team2: '上海申花', Score1: 5, Score2: 0, Flag1: 'http://www.sinaimg.cn/ty/2015/0309/U6521P6DT20150309172332.png', Flag2: 'http://www.sinaimg.cn/lf/sports/logo85/144.png', date: '2015-05-09', time: '19:45', MatchCity: '上海', Situation: '上海体育场', status_cn: '完赛'},
            {Round: 9, Team1: '长春亚泰', Team2: '北京国安', Score1: 1, Score2: 2, Flag1: 'http://www.sinaimg.cn/lf/sports/logo85/172.png', Flag2: 'http://www.sinaimg.cn/lf/sports/logo85/136.png', date: '2015-05-10', time: '15:35', MatchCity: '长春', Situation: '经开体育场', status_cn: '完赛'},
            {Round: 9, Team1: '山东鲁能', Team2: '河南建业', Score1: 2, Score2: 1, Flag1: 'http://www.sinaimg.cn/lf/sports/logo85/153.png', Flag2: 'http://www.sinaimg.cn/lf/sports/logo85/178.png', date: '2015-05-10', time: '19:35', MatchCity: '济南', Situation: '鲁能大球场', status_cn: '完赛'},
            {Round: 9, Team1: '江苏舜天', Team2: '广州富力', Score1: 2, Score2: 2, Flag1: 'http://www.sinaimg.cn/lf/sports/logo85/179.png', Flag2: 'http://www.sinaimg.cn/ty/opta/85/6905.png', date: '2015-05-10', time: '19:45', MatchCity: '南京', Situation: '奥体中心球场', status_cn: '完赛'},
            {Round: 9, Team1: '广州恒大', Team2: '上海申鑫', Score1: 6, Score2: 1, Flag1: 'http://www.sinaimg.cn/lf/sports/logo85/5065.png', Flag2: 'http://www.sinaimg.cn/ty/opta/85/6911.png', date: '2015-05-10', time: '20:00', MatchCity: '广东', Situation: '天河体育场', status_cn: '完赛'},
            {Round: 10, Team1: '广州恒大', Team2: '上海上港', Score1: 1, Score2: 1, Flag1: 'http://www.sinaimg.cn/lf/sports/logo85/5065.png', Flag2: 'http://www.sinaimg.cn/ty/2015/0309/U6521P6DT20150309172332.png', date: '2015-05-15', time: '20:00', MatchCity: '广东', Situation: '天河体育场', status_cn: '完赛'},
            {Round: 10, Team1: '北京国安', Team2: '辽宁宏运', Score1: 2, Score2: 0, Flag1: 'http://www.sinaimg.cn/lf/sports/logo85/136.png', Flag2: 'http://www.sinaimg.cn/lf/sports/logo85/139.png', date: '2015-05-16', time: '19:35', MatchCity: '北京', Situation: '工人体育场', status_cn: '完赛'},
            {Round: 10, Team1: '广州富力', Team2: '上海申鑫', Score1: 1, Score2: 3, Flag1: 'http://www.sinaimg.cn/ty/opta/85/6905.png', Flag2: 'http://www.sinaimg.cn/ty/opta/85/6911.png', date: '2015-05-16', time: '19:35', MatchCity: '广州', Situation: '大学城体育场', status_cn: '完赛'},
            {Round: 10, Team1: '杭州绿城', Team2: '山东鲁能', Score1: 0, Score2: 1, Flag1: 'http://www.sinaimg.cn/lf/sports/logo85/264.png', Flag2: 'http://www.sinaimg.cn/lf/sports/logo85/153.png', date: '2015-05-16', time: '19:35', MatchCity: '杭州', Situation: '黄龙体育场', status_cn: '完赛'},
            {Round: 10, Team1: '重庆力帆', Team2: '长春亚泰', Score1: 2, Score2: 1, Flag1: 'http://www.sinaimg.cn/lf/sports/logo85/151.png', Flag2: 'http://www.sinaimg.cn/lf/sports/logo85/172.png', date: '2015-05-16', time: '19:35', MatchCity: '重庆', Situation: '重庆奥体中心', status_cn: '完赛'},
            {Round: 10, Team1: '河南建业', Team2: '石家庄永昌', Score1: 0, Score2: 1, Flag1: 'http://www.sinaimg.cn/lf/sports/logo85/178.png', Flag2: 'http://www.sinaimg.cn/lf/sports/logo85/55816.png', date: '2015-05-16', time: '19:45', MatchCity: '郑州', Situation: '航海体育场', status_cn: '完赛'},
            {Round: 10, Team1: '天津泰达', Team2: '江苏舜天', Score1: 1, Score2: 0, Flag1: 'http://www.sinaimg.cn/lf/sports/logo85/148.png', Flag2: 'http://www.sinaimg.cn/lf/sports/logo85/179.png', date: '2015-05-17', time: '19:35', MatchCity: '天津', Situation: '泰达足球场', status_cn: '完赛'},
            {Round: 10, Team1: '上海申花', Team2: '贵州人和', Score1: 1, Score2: 1, Flag1: 'http://www.sinaimg.cn/lf/sports/logo85/144.png', Flag2: 'http://www.sinaimg.cn/lf/sports/logo85/170.png', date: '2015-05-17', time: '19:45', MatchCity: '上海', Situation: '虹口体育场', status_cn: '完赛'},
            {Round: 11, Team1: '贵州人和', Team2: '上海上港', Score1: 2, Score2: 0, Flag1: 'http://www.sinaimg.cn/lf/sports/logo85/170.png', Flag2: 'http://www.sinaimg.cn/ty/2015/0309/U6521P6DT20150309172332.png', date: '2015-05-22', time: '19:35', MatchCity: '贵阳', Situation: '奥体中心球场', status_cn: '完赛'},
            {Round: 11, Team1: '石家庄永昌', Team2: '杭州绿城', Score1: 0, Score2: 0, Flag1: 'http://www.sinaimg.cn/lf/sports/logo85/55816.png', Flag2: 'http://www.sinaimg.cn/lf/sports/logo85/264.png', date: '2015-05-22', time: '19:35', MatchCity: '石家庄', Situation: '裕彤体育中心', status_cn: '完赛'},
            {Round: 11, Team1: '山东鲁能', Team2: '上海申花', Score1: 2, Score2: 0, Flag1: 'http://www.sinaimg.cn/lf/sports/logo85/153.png', Flag2: 'http://www.sinaimg.cn/lf/sports/logo85/144.png', date: '2015-05-23', time: '19:35', MatchCity: '济南', Situation: '鲁能大球场', status_cn: '完赛'},
            {Round: 11, Team1: '江苏舜天', Team2: '北京国安', Score1: 0, Score2: 0, Flag1: 'http://www.sinaimg.cn/lf/sports/logo85/179.png', Flag2: 'http://www.sinaimg.cn/lf/sports/logo85/136.png', date: '2015-05-23', time: '19:45', MatchCity: '南京', Situation: '奥体中心球场', status_cn: '完赛'},
            {Round: 11, Team1: '广州恒大', Team2: '广州富力', Score1: 2, Score2: 2, Flag1: 'http://www.sinaimg.cn/lf/sports/logo85/5065.png', Flag2: 'http://www.sinaimg.cn/ty/opta/85/6905.png', date: '2015-05-23', time: '20:00', MatchCity: '广东', Situation: '天河体育场', status_cn: '完赛'},
            {Round: 11, Team1: '长春亚泰', Team2: '河南建业', Score1: 2, Score2: 0, Flag1: 'http://www.sinaimg.cn/lf/sports/logo85/172.png', Flag2: 'http://www.sinaimg.cn/lf/sports/logo85/178.png', date: '2015-05-24', time: '15:35', MatchCity: '长春', Situation: '经开体育场', status_cn: '完赛'},
            {Round: 11, Team1: '辽宁宏运', Team2: '重庆力帆', Score1: 1, Score2: 1, Flag1: 'http://www.sinaimg.cn/lf/sports/logo85/139.png', Flag2: 'http://www.sinaimg.cn/lf/sports/logo85/151.png', date: '2015-05-24', time: '15:35', MatchCity: '辽宁', Situation: '铁西体育场', status_cn: '完赛'},
            {Round: 11, Team1: '上海申鑫', Team2: '天津泰达', Score1: 0, Score2: 1, Flag1: 'http://www.sinaimg.cn/ty/opta/85/6911.png', Flag2: 'http://www.sinaimg.cn/lf/sports/logo85/148.png', date: '2015-05-24', time: '19:45', MatchCity: '上海', Situation: '金山体育场', status_cn: '完赛'},
            {Round: 12, Team1: '上海上港', Team2: '山东鲁能', Score1: 3, Score2: 4, Flag1: 'http://www.sinaimg.cn/ty/2015/0309/U6521P6DT20150309172332.png', Flag2: 'http://www.sinaimg.cn/lf/sports/logo85/153.png', date: '2015-05-29', time: '19:45', MatchCity: '上海', Situation: '上海体育场', status_cn: '完赛'},
            {Round: 12, Team1: '杭州绿城', Team2: '长春亚泰', Score1: 0, Score2: 1, Flag1: 'http://www.sinaimg.cn/lf/sports/logo85/264.png', Flag2: 'http://www.sinaimg.cn/lf/sports/logo85/172.png', date: '2015-05-30', time: '19:35', MatchCity: '杭州', Situation: '黄龙体育场', status_cn: '完赛'},
            {Round: 12, Team1: '重庆力帆', Team2: '江苏舜天', Score1: 2, Score2: 3, Flag1: 'http://www.sinaimg.cn/lf/sports/logo85/151.png', Flag2: 'http://www.sinaimg.cn/lf/sports/logo85/179.png', date: '2015-05-30', time: '19:35', MatchCity: '重庆', Situation: '重庆奥体中心', status_cn: '完赛'},
            {Round: 12, Team1: '上海申花', Team2: '石家庄永昌', Score1: 0, Score2: 0, Flag1: 'http://www.sinaimg.cn/lf/sports/logo85/144.png', Flag2: 'http://www.sinaimg.cn/lf/sports/logo85/55816.png', date: '2015-05-30', time: '19:45', MatchCity: '上海', Situation: '虹口体育场', status_cn: '完赛'},
            {Round: 12, Team1: '天津泰达', Team2: '广州富力', Score1: 2, Score2: 0, Flag1: 'http://www.sinaimg.cn/lf/sports/logo85/148.png', Flag2: 'http://www.sinaimg.cn/ty/opta/85/6905.png', date: '2015-05-31', time: '19:35', MatchCity: '天津', Situation: '泰达足球场', status_cn: '完赛'},
            {Round: 12, Team1: '河南建业', Team2: '辽宁宏运', Score1: 1, Score2: 1, Flag1: 'http://www.sinaimg.cn/lf/sports/logo85/178.png', Flag2: 'http://www.sinaimg.cn/lf/sports/logo85/139.png', date: '2015-05-31', time: '19:45', MatchCity: '郑州', Situation: '航海体育场', status_cn: '完赛'},
            {Round: 12, Team1: '广州恒大', Team2: '贵州人和', Score1: 3, Score2: 0, Flag1: 'http://www.sinaimg.cn/lf/sports/logo85/5065.png', Flag2: 'http://www.sinaimg.cn/lf/sports/logo85/170.png', date: '2015-05-31', time: '20:00', MatchCity: '广东', Situation: '天河体育场', status_cn: '完赛'},
            {Round: 12, Team1: '北京国安', Team2: '上海申鑫', Score1: 2, Score2: 1, Flag1: 'http://www.sinaimg.cn/lf/sports/logo85/136.png', Flag2: 'http://www.sinaimg.cn/ty/opta/85/6911.png', date: '2015-06-01', time: '19:35', MatchCity: '北京', Situation: '工人体育场', status_cn: '完赛'},
            {Round: 13, Team1: '长春亚泰', Team2: '上海申花', Score1: 3, Score2: 1, Flag1: 'http://www.sinaimg.cn/lf/sports/logo85/172.png', Flag2: 'http://www.sinaimg.cn/lf/sports/logo85/144.png', date: '2015-06-03', time: '19:00', MatchCity: '长春', Situation: '经开体育场', status_cn: '完赛'},
            {Round: 13, Team1: '石家庄永昌', Team2: '上海上港', Score1: 2, Score2: 2, Flag1: 'http://www.sinaimg.cn/lf/sports/logo85/55816.png', Flag2: 'http://www.sinaimg.cn/ty/2015/0309/U6521P6DT20150309172332.png', date: '2015-06-03', time: '19:35', MatchCity: '石家庄', Situation: '裕彤体育中心', status_cn: '完赛'},
        ];
        //这里是存放过滤后的数据
        $scope.teamInfo = {};
        //如果我没有进行任何的选择，则要过滤的数据为空
        $scope.resetFilter = function(v) {
            if (!v) $scope.teamInfo = {};
        };

        //过滤数据的函数,参数1为数据，参数2为要查询的内容
        var uniqueValueInArray = function(arr,obj){
            var n = {},r = [];
            for(var i = 0;i < arr.length;i++){
                //循环所有的数据，每一条数据中，查询内容是否存在，如果存在则赋值给VAL，如果不存在，则返回原本的值
                //val返回的是每一条数据当中的某个相关字段的值
                var val = obj ? arr[i][obj] : arr[i];
                //如果没被定义
                if(!n[val]){
                    n[val] = true;
                    r.push(val);
                }
            }
            //将所有的数据当中的某个字段单独拿出来使用，例如场次啊，比分啊，等等
            return r;

        };
        //场次数据
        $scope.uniqueRound = uniqueValueInArray($scope.footballData,'Round');
        //时间数据
        $scope.uniqueDate = uniqueValueInArray($scope.footballData,'date');
        $scope.names = [
            {name: 'a乔乐', tel:'15800000000'},
            {name: 'b周迅', tel:'18900000000'},
            {name: 'c魏瑞', tel:'18900000000'},
            {name: 'd展昭', tel:'19800000000'},
            {name: 'd暖暖', tel:'15800000000'}
        ];
        $scope.people = [
            {
                id: 0,
                name: '乔乐',
                interest: [
                    '爬山',
                    '游泳',
                    '旅游',
                    '美食'
                ]
            },
            {
                id: 1,
                name: 'Chris',
                interest: [
                    '音乐',
                    '美食',
                    'Coffee',
                    '看书'
                ]
            },
            {
                id: 2,
                name: '魏瑞',
                interest: [
                    '音乐',
                    '电影',
                    '中国好声音',
                    '爸爸去哪了',
                    '非常静距离'
                ]
            },
            {
                id: 3,
                name: '小飞子',
                interest: [
                    '游泳',
                    '游戏',
                    '宅家里'
                ]
            }
        ];
        $scope.selectedYourPeople = $scope.people[0].name;
        $scope.seleted = '';
        $scope.animals = [
            {
                id: '00001',
                name: '猫',
                sex: '雌',
                food: '鱼',
                favor: '玩球'
            },
            {
                id: '00002',
                name: '狗',
                sex: '雄',
                food: '骨头',
                favor: '接盘子'
            },
            {
                id: '00003',
                name: '兔',
                sex: '雌',
                food: '胡萝卜',
                favor: '刨洞'
            },
            {
                id: '00004',
                name: '狮',
                sex: '雄',
                food: '肉',
                favor: '猎物'
            }
        ];
        $scope.myPet = '猫';
        $scope.yourPet = '鼠';
        $scope.taPet = '虎';
        $scope.animalArr = ['蚁', '虎', '猫', '狗', '鼠'];
        $scope.article = {
            title: '英国上演<b>“鸟人”</b>飞行大赛 选手奇装异服吸睛',
            content: '<img src="http://file.ynet.com/2/1508/17/10311502-500.jpg" border="0" alt="希克斯驾驶他的“天空之战”主题战机参赛。"><p>国际在线专稿：据英国《每日邮报》8月16日报道，上周末，一年一度的沃辛国际鸟人大赛在英国苏塞克斯的一个海边小镇举行。“鸟人”选手们不仅带来造型奇特的飞行装置，还身着搞笑服装以吸引观众注意，无数次将气氛推上高潮。</p><p>图为参赛者乔尔·希克斯驾驶他的“天空之战”主题战机参赛。</p>'
        };
        $scope.getCurrFocus = function(target) {
            $scope.currFocus = target.getAttribute('name');
            $scope.jQCurrFocus = $(target).attr('name');
        };
        $scope.your = {
            province:'',
            city:''
        };
        $scope.chinaCities = [
            { py: 'sh', province: '上海', cities: ['上海'] },
            { py: 'bj', province: '北京', cities: ['北京'] },
            { py: 'hb', province: '湖北', cities: ['武汉','鄂州','恩施','黄冈','黄石','荆门','荆州','十堰','随州','咸宁','襄阳','孝感','宜昌'] },
            { py: 'zj', province: '浙江', cities: ['杭州','宁波','湖州','嘉兴','金华','绍兴','台州','温州','舟山','衢州','丽水'] },
            { py: 'nmg', province: '内蒙古', cities: ['呼和浩特','包头','阿拉善','巴彦淖尔','赤峰','呼伦贝尔','乌海','乌兰察布','锡林郭勒','兴安','鄂尔多斯','通辽'] },
            { py: 'yn', province: '云南', cities: ['昆明','西双版纳','保山','楚雄','大理','德宏','红河','丽江','临沧','怒江','曲靖','思茅','文山','玉溪','昭通','迪庆州'] }
        ];
        //your是我的选择，默认是province第一条数据，city是第一条数据的第一个城市
        $scope.your.province = $scope.chinaCities[0];
        $scope.your.city = $scope.chinaCities[0].cities[0];
        //传入数据的ID，如果数据存在的话，将city的值改为这条数据的city第一个
        $scope.selectedFirstValue = function(province) {
            $scope.your.city = province ? province.cities[0] : '';
        };
        $scope.cityList = [
            {
                city: '襄阳',
                description: '襄阳，湖北省下辖地级市、中国历史文化名城、楚文化、汉文化、三国文化的发源地，已有2800多年历史，历代为经济军事要地。素有“华夏第一城池、铁打的襄阳、兵家必争之地”之称。[1-3]<br/>地理位于湖北省西北部，汉江中游平原腹地。襄阳因地处襄水之阳而得名，汉水穿城而过，分出南北两岸的襄阳、樊城，隔江相望。两城历史上都是军事与商业重镇。1949年以后两城合二为一称襄樊市，分设襄城、樊城两区。2010年12月9日，襄樊市正式更名为襄阳市。境辖3个城区（襄州、襄城、樊城）、3个县级市（枣阳、宜城、老河口）、3个县（南漳、保康、谷城）和3个开发区（国家级高新技术产业开发区、国家级经济技术开发区、鱼梁洲旅游经济开发区），总面积1.97万平方公里。'
            },
            {
                city: '武汉',
                description: '武汉，简称“汉”，中国湖北省省会[1]  。地处江汉平原东部。世界第三大河长江及其最大支流汉水横贯市境中央，将武汉城区一分为三，形成了武昌、汉口、汉阳三镇隔江鼎立的格局。唐朝诗人李白曾在此写下“黄鹤楼中吹玉笛，江城五月落梅花”，因此武汉自古又称江城。[2]  全市现辖13个城区，3个国家级开发区，面积8467平方公里，境内江河纵横、湖港交织，上百座大小山峦，166个湖泊座落其间，水域面积，占全市面积四分之一，构成了极具特色的滨江滨湖水域生态环境。'
            },
            {
                city: '上海',
                description: '上海（Shanghai），简称“沪”或“申”，中华人民共和国直辖市，地处长江入海口，隔东中国海与日本九州岛相望，南濒杭州湾，西与江苏、浙江两省相接。[1-2]<br/>上海是一座国家历史文化名城，拥有深厚的近代城市文化底蕴和众多历史古迹。江南的吴越传统文化与各地移民带入的多样文化相融合，形成了特有的海派文化。上海市已经成功举办了2010年世界博览会、中国上海国际艺术节、上海国际电影节等大型国际活动。[3-4] '
            },
            {
                city: '重庆',
                description: '重庆，简称巴和渝，别称山城、渝都、桥都，雾都，是中华人民共和国中央直辖市。重庆因嘉陵江古称“渝水”，故重庆简称“渝”。北宋崇宁元年（1102年），改渝州为恭州。南宋淳熙16年（1189年）正月，孝宗之子赵惇先封恭王，二月即帝位为宋光宗皇帝，称为“双重喜庆”，遂升恭州为重庆府，重庆由此而得名。'
            },
            {
                city: '纽约',
                description: '纽约（New York），是纽约都会区的核心，也是美国最大城市，同时也是世界最大的城市之一。为了与其所在的纽约州相区分，被称为纽约市（New York City，官方名称为：The City of New York）。[1]<br/>纽约位于美国东海岸的东北部，是美国人口最多的城市，也是个多族裔聚居的多元化城市，拥有来自97个国家和地区的移民，在此使用的语言达到800种。截至2012年，纽约大约有800万人，居住在789平方千米的土地上。[2] '
            },
            {
                city: '日本',
                description: '日本（Japan），全称日本国，位于亚洲东部、太平洋西北。国名意为“日出之国”，领土由本州、四国、九州、北海道四大岛及7200多个小岛组成，总面积37.8万平方千米。主体民族为和族，通用日语，总人口约1.26亿。<br/>公元3世纪中叶，其境内出现较大的国家“大和国”。公元645年，日本向中国唐朝学习，进行大化改新。12世纪后期，进入幕府时代。'
            },
            {
                city: '台湾',
                description: '台湾（Taiwan）位于中国大陆东南沿海的大陆架上，东临太平洋，[1]  东北邻琉球群岛，[2]  南界巴士海峡与菲律宾群岛相对，[3]  西隔台湾海峡与福建省相望，[4-5]  总面积约3.6万平方千米，包括台湾岛及兰屿、绿岛、钓鱼岛等21个附属岛屿和澎湖列岛64个岛屿。台湾岛面积35882.6258平方千米，[6]  是中国第一大岛，[7]  7成为山地与丘陵，平原主要集中于西部沿海，地形海拔变化大。由于地处热带及亚热带气候之交界，自然景观与生态资源丰富多元。人口约2350万，逾7成集中于西部5大都会区，[8]  其中以首要都市台北为中心的台北都会区最大。'
            },
            {
                city: '悉尼',
                description: '悉尼（Sydney，台湾及海外华人聚居区译为“雪梨”），澳大利亚第一大城市及新南威尔士州首府，澳大利亚经济、金融、航运和旅游中心，是南半球最大的城市和重要的港口、世界著名的国际大都市。'
            },
            {
                city: '西双版纳',
                description: '西双版纳傣族自治州，位于中华人民共和国云南省最南端，是云南省下辖的一个少数民族自治州。地处北纬约21°10’，东经99°55’至101°50’之间，属北回归线以南的热带湿润区。东西面与江城县、普洱市相连；西北面与澜沧县为邻；东南部、南部和西南部分别与老挝、缅甸山水相连，邻近泰国和越南，与泰国的直线距离仅200余公里。东距太平洋的北部湾400多公里，西距印度洋的孟加拉湾600余公里。边界线长达966.3公里，约等于云南省边境线总长的1/4。'
            },
            {
                city: '宁夏回族自治区',
                description: '宁夏回族自治区，简称宁，是中国五大少数民族自治区之一。处在中国西部的黄河上游地区，东邻陕西省，西部、北部接内蒙古自治区，南部与甘肃省相连。南北相距约456公里，东西相距约250公里，总面积为6.6万多平方千米。自治区首府银川。'
            },
            {
                city: '香格里拉',
                description: '香格里拉市是迪庆藏族自治州下辖市之一，市境位于云南省西北部，是滇、川及西藏三省区交汇处，也是“三江并流”风景区腹地。截止到2014年，香格里拉市总面积11613平方公里，辖4个镇、7个乡，共有6个社区、58个行政村。'
            },
            {
                city: '武汉',
                description: '武汉，简称“汉”，中国湖北省省会[1]  。地处江汉平原东部。世界第三大河长江及其最大支流汉水横贯市境中央，将武汉城区一分为三，形成了武昌、汉口、汉阳三镇隔江鼎立的格局。唐朝诗人李白曾在此写下“黄鹤楼中吹玉笛，江城五月落梅花”，因此武汉自古又称江城。[2]  全市现辖13个城区，3个国家级开发区，面积8467平方公里，境内江河纵横、湖港交织，上百座大小山峦，166个湖泊座落其间，水域面积，占全市面积四分之一，构成了极具特色的滨江滨湖水域生态环境。'
            },
            {
                city: '呼和浩特',
                description: '呼和浩特是内蒙古自治区首府，是内蒙古的经济、文化、科教和金融中心，呼包银城市群核心城市，呼包鄂城市群中心城市。<br/>呼和浩特有着悠久的历史和光辉灿烂的文化，是华夏文明的发祥地之一，旧称为归绥，原为绥远省省会，蒙绥合并后，自治区首府由乌兰浩特迁入呼和浩特。[1]  呼和浩特是蒙古语，意为“青色的城市”。呼和浩特是以蒙古族为主体，汉族占多数，回、满、达斡尔、鄂温克等41个民族聚居的城市。有国际列车航线通往乌兰巴托。<br/>呼和浩特是国家历史文化名城、国家森林城市、国家创新型试点城市、全国民族团结进步模范城市、全国双拥模范城市、中国优秀旅游城市和中国经济实力百强城市，被誉为“中国乳都”。'
            },
            {
                city: '新西兰',
                description: '新西兰（New Zealand），又译纽西兰，是一个资本主义国家，政治体制实行君主立宪制混合英国式议会民主制，现为英联邦成员国之一。新西兰位于太平洋西南部，领土由南岛、北岛两大岛屿组成，以库克海峡分隔，南岛邻近南极洲，北岛与斐济及汤加相望。首都惠灵顿以及最大城市奥克兰均位于北岛[1]  。'
            }
        ];
        //保存第一条数据
        $scope.curInfo = $scope.cityList[0];
        //根据传参来选择哪条数据
        $scope.switchInfo = function(info) {
            $scope.curInfo = info;
        };

        $scope.trustHtml = function(html) {
            var cnSpace = '　　';
            html = cnSpace + html.replace(/(<br\/>)/g, '$1$1' + cnSpace);
            return $sce.trustAsHtml(html);
        };
        $scope.clock = new Date();
        var updateClock = function() {
            $scope.clock = new Date();
        };
        setInterval(function() {
            $scope.$apply(updateClock);
        }, 1000);
        updateClock();
        $scope.registerSuccess = false;
        $scope.submitForm = function() {
            $scope.registerSuccess = true;
            console.log($scope.user);
        };









    }])
})