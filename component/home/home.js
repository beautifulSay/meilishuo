angular.module('homeModule',['ui.router'])
    .config(function($stateProvider,$urlRouterProvider){
        $stateProvider
            .state('home',{
                url:'/home',
                templateUrl:'component/home/home.html',
                controller:'homeCtrl',
                css:'component/home/home.css'
            })
    })
    .controller('homeCtrl',['$scope','$state','$http','$timeout',function($scope,$state,$http,$timeout){
        $http.get("json/home.json").then(function(res){
            console.log(res);
            $scope.swiperData = res.data.data[20114].list;
            console.log($scope.swiperData);
            $timeout(function(){
                var mySwiper = new Swiper('.swiper-container', {
                    loop: true,
                    autoplay:500,
                    // 如果需要分页器
                    pagination: '.swiper-pagination'
                })
            },50);
            /*热销单品*/
            $scope.initData = res.data.data[13730].list;
            console.log($scope.initData);

           /*限时特惠下面的图片*/
            $scope.initData2 = res.data.data[42287].list;
            console.log($scope.initData2);


         /*本周流行*/
           $scope.initData3 = res.data.data[5868].list;

        });

        /*倒计时特效*/
      /*  $scope.time = 1498699935;
        /!*实现倒计时的效果*!/
        setInterval(function(){
            $scope.hours = parseInt($scope.time/3600%24);
            $scope.mintues = parseInt(($scope.time%3600000)/3600%24);
            $scope.seconds = parseInt(($scope.time%3600000)/1000%60);
            console.log("还剩"+ $scope.hours + "时" +  $scope.mintues + "分" +  $scope.seconds + "秒");
            $scope.time -= 1000;
        },1000);*/


       $http.get("json/home2.json").then(function(res){
             console.log(res);
             $scope.initData4 = res.data.data;
             $scope.initData5 = res.data.data[0].goodsList;
             console.log($scope.initData5);
        });



       /*新款*/
        $http.get("json/popular.json").then(function(res){
               console.log(res);
              /* $scope.initDatas = res.data.dealJson;*/
          });

    /*回到顶部功能*/
        // 当网页滑动到一部分的时候才显示回到顶部的按钮
            $("#backTop").click(function(){
                   jQuery('html,body').animate({scrollTop:0}, 700);
                 })


    }])


