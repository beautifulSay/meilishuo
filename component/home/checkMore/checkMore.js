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

     .controller('checkMoreCtrl',['$scope','$state','$http',function($scope,$state,$http){
             $http.get("json/moreLimit.json").then(function(res){
                   console.log(res);
                   /*立即抢购*/
                      $scope.initData = res.data.data.list;
                 })
             $http.get("json/more.json").then(function(res){
                  console.log(res);
                   $scope.initData2 = res.data.data[39447].list;
               })

        }])

