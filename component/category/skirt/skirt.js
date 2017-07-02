/**
 * Created by YZTC on 2017/6/30.
 */
angular.module("skirtModule",["ui.router"])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('category.skirt', {
                url: '/skirt',
                templateUrl: 'component/category/skirt/skirt.html',
                controller:'skirtCtrl',
                css:'component/category/skirt/skirt.css'
            })
    })
    .controller('skirtCtrl',['$scope','$http',function($scope,$http){
                $http.get("json/category/cateacm.json").then(function (res) {

                    $scope.arr1 = res.data.value.category_1.list;
                    $scope.arr2 = res.data.value.category_2.list;
                    $scope.mean = {show:true};
                    $scope.pop ={show:false};
                    $scope.knock = function () {
                              $scope.mean = {show:false};
                        $scope.pop ={show:true};
                    }
                    $http.get("json/category/tsconfig.json").then(function (sos) {
                        console.log(sos.data.data.list);
                        $scope.arr3 = sos.data.data.list;

                    })
                    $scope.opo = function () {

                    }
                        
                    
                 })




    }])