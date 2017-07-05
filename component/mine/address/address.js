angular.module("addressModule",["ui.router"])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('address', {
                url: '/address',
                templateUrl: 'component/mine/address/address.html',
//              controller:'babyCtrl',
                css:'component/mine/address/address.css'
            })
    })