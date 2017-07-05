angular.module('homeModule',['ui.router'])
    .config(function($stateProvider,$urlRouterProvider){
        // $state.go('home.popular')
        $stateProvider
            .state('home',{
                url:'/home',
                templateUrl:'component/home/home.html',
                controller:'homeCtrl',
                css:'component/home/home.css'
            })
            .state('home.popular',{
                url:'/popular',
                templateUrl:'component/home/popular/popular.html',
                css:'component/home/home.css'
            })
            .state('home.newStyle',{
                url:'/newStyle',
                templateUrl:'component/home/newStyle/newStyle.html',
                css:'component/home/home.css'
            })
            .state('home.handpick',{
                url:'/handpick',
                templateUrl:'component/home/handpick/handpick.html',
                css:'component/home/home.css'
            })
            $urlRouterProvider.otherwise('/home/popular');
        })

    .controller('homeCtrl',['$scope','$state','$http','$timeout','$interval',function($scope,$state,$http,$timeout,$interval){
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

        /*当点击查看更多的时候跳转是否需要下载客户端*/
        $scope.checkMore = function(){
                                   confirm("亲，请先下载美丽说客户端~");
                                }

         /*倒计时特效*/
    $scope.time = 1498699935;
        $interval(function(){
            $scope.hours = parseInt($scope.time/60/60%24);
            $scope.mintues = parseInt(($scope.time/60)%60);
            $scope.seconds = parseInt($scope.time%60);
            $scope.time -= 1;
        },1000);


/*好物组货*/
       $http.get("json/home2.json").then(function(res){
             console.log(res);
             $scope.initData4 = res.data.data;
             $scope.initData5 = res.data.data[0].goodsList;
             console.log($scope.initData5);
        });


       /*流行*/
        $http.get("json/popular.json").then(function(res){
               console.log(res);
               $scope.initDatas = res.data.data.list;

          });

        /*新款*/
           $http.get("json/newStyle.json").then(function(res){
               console.log(res);
               $scope.initDatas2 = res.data.data.list;
           })

        /*精选页面*/
            $http.get("json/handpick.json").then(function(res){
                console.log(res);
                $scope.initDatas3 = res.data.data.list;
            })

    /*回到顶部功能*/
        // 当网页滑动到一部分的时候才显示回到顶部的按钮
            $("#backTop").click(function(){
                   jQuery('html,body').animate({scrollTop:0}, 700);
                 })


    }])


