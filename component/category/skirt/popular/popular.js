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
            $scope.arr = res.data.result.itemInfo.topImages;
            console.log(res.data.result.itemInfo.topImages);
              for (var i=0;i<res.data.result.itemInfo.topImages.length;i++)
              {
                  (function (i) {
                     $scope.num = i;
                      console.log(i);

                  })(i);
              }

                // var mySwiper = new Swiper('.swiper-container', {
                //     autoplay:2500,
                //     loop:true,
                //     autoplayDisableOnInteraction:false,
                //     pagination : '.swiper-pagination',
                //     paginationClickable: true,
                //     longSwipesRatio: 0.3,
                //     touchRatio:1,
                //     observer:true,//修改swiper自己或子元素时，自动初始化swiper
                //     observeParents:true,//修改swiper的父元素时，自动初始化swiper
                // })



        })
    }])