angular.module('detailModule',[])
    .config(function($stateProvider,$urlRouterProvider){
        $stateProvider
             .state('detail',{
                 url:'/detail',
                 templateUrl:'component/home/checkMore/detail/detail.html',
                 controller:'detailCtrl',
                 css:'component/home/checkMore/detail/detail.css'
              })
    })
     .controller('detailCtrl',['$scope','$state','$http',function($scope,$state,$http){
         var swiper = new Swiper('.swiper-container', {
             pagination: '.swiper-pagination',
             paginationType : 'fraction',
             paginationFractionRender: function (swiper, currentClassName, totalClassName) {
                 return '<span class="' + currentClassName + '"></span>' +
                     ' / ' +
                     '<span class="' + totalClassName + '"></span>';
             }
         });

              }])
