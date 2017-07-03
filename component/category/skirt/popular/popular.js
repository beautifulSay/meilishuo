/**
 * Created by YZTC on 2017/6/30.
 */
angular.module("popularModule",["ui.router"])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('category.skirt.popular', {
                url: '/popular',
                templateUrl: 'component/category/skirt/popular/popular.html',
                controller:'popularCtrl',
                css:'component/category/skirt/popular/popular.css'
            })
    })
    .controller('popularCtrl',['$scope','$http',function($scope,$http){





    }])