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
    }).controller('popularCtrl',['$scope','$http',function($scope,$http) {

        $http.get("json/category/myshop.json").then(function (res) {
         var data = res.data.result.itemInfo;
            $scope.arr = res.data.result.itemInfo.topImages;
            console.log(res.data.result.itemInfo.topImages);
              $scope.columss = res.data.result.columns;
            console.log(res);
            var mySwiper = new Swiper('.swiper-container', {

                    loop:true,
                    autoplayDisableOnInteraction:false,
                    pagination : '.swiper-pagination',
                    paginationClickable: true,
                    longSwipesRatio: 0.3,
                    touchRatio:1,
                    observer:true,//修改swiper自己或子元素时，自动初始化swiper
                    observeParents:true,//修改swiper的父元素时，自动初始化swiper
                })
            $scope.title = data.desc;



        })
    }])