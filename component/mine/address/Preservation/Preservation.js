angular.module("PreservationModule",["ui.router"])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('Preservation', {
                url: '/Preservation',
                templateUrl: 'component/mine/address/Preservation/Preservation.html',
                controller:'PreservationCtrl',
                css:'component/mine/address/Preservation/Preservation.css'
            })
   })    
    

     .controller('PreservationCtrl',['$scope','$http',function($scope,$http){
         
  }])


