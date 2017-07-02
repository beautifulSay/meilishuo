angular.module('categoryModule',['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('category', {
                url: '/category',
                templateUrl: 'component/category/category.html',
               controller:'categoryCtrl',
                css:'component/category/category.css'
            })
    }).controller("categoryCtrl",["$scope","$http",function ($scope,$http) {
             $http.get("json/category/catelist.json").then(function (res) {

               // $scope.arr = res.value;

                  $scope.init = res.data.value;

             })

}])