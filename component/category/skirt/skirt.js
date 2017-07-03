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

        $scope.mean = {show:true};
        $scope.pop ={show:false};
        $scope.knock = function () {
            $scope.mean = {show:false};
            $scope.pop ={show:true};
        }
        $http.get("json/category/cateacm.json").then(function (res) {

            $scope.arr1 = res.data.value.category_1.list;
            $scope.arr2 = res.data.value.category_2.list;

            $http.get("json/category/tsconfig.json").then(function (sos) {

                $scope.arr3 = sos.data.data.list;

            })
        })
         $scope.warp1 ={show:true};
        $scope.warp2 = {show:false};

        $scope.opo = function () {
            $scope.isfilled = true;
            $scope.isSencod = false;
            $scope.isfire = false;
              check();
            $scope.warp1 ={show:true};
            $scope.warp2 = {show:false};
            $scope.flag = false;
        }
        $scope.hsale = function () {
            $scope.isfilled = false;
            $scope.isSencod = true;
            // $scope.isfire = false;
            check();
            $scope.warp1 ={show:false};
            $scope.warp2 = {show:true};
        }
        $scope.flag = false;
        $scope.toggles = function () {
            $scope.isfilled = false;
            // $scope.isSencod = false;
            $scope.isfire = true;
             $scope.flag = !$scope.flag;
            check();
        }
        function check() {
            if($scope.isfire==false&&$scope.isSencod==false)
            {
                $scope.isfilled = true;
            }
            if($scope.isfilled==false&&$scope.isfire==false)
            {
                $scope.isSencod = true;
            }
            if ($scope.isfilled==false&&$scope.isSencod==false)
            {
                $scope.isfire = true;
            }

        }



    }])