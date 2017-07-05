angular.module('searchModule',['ui.router'])
    .config(function($stateProvider,$urlRouterProvider){
        $stateProvider
            .state('search',{
                        url:'/search',
                        templateUrl:'component/home/search/search.html',
                        controller:'searchCtrl',
                        css:'component/home/search/search.css'
                    })
              })
    .controller('searchCtrl',['$scope','$state','$http',function($scope,$state,$http){
           $http.get("json/search.json").then(function (res) {
                console.log(res);
                $scope.initData = res.data.data[5868].list;
           });

    }])