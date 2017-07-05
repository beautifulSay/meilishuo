angular.module('checkMoreModule',['ui.router','detailModule'])
    .config(function($stateProvider,$urlRouterProvider){
         $stateProvider
             .state('checkMore',{
             url:'/checkMore',
             templateUrl:'component/home/checkMore/checkMore.html',
             controller:'checkMoreCtrl',
             css:'component/home/checkMore/checkMore.css'
              })
       })

     .controller('checkMoreCtrl',['$scope','$state','$http','$interval',function($scope,$state,$http,$interval){
             $http.get("json/moreLimit.json").then(function(res){
                   console.log(res);
                   /*立即抢购*/
                      $scope.initData = res.data.data.list;
                 })
             $http.get("json/more.json").then(function(res){
                  console.log(res);
                   $scope.initData2 = res.data.data[39447].list;
               })

         /*倒计时特效*/
                    $scope.time = 1498699935;
         $interval(function(){
                                 $scope.hours= parseInt($scope.time/60/60%24);
                                 $scope.mintues = parseInt(($scope.time/60)%60);
                                 $scope.seconds = parseInt($scope.time%60);
                                 $scope.time -= 1;
                                 $scope.hours<=9?'0'+ $scope.hours:$scope.hours+'0';
                             },1000);


        }])

