angular.module("babyModule",["ui.router"])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('baby', {
                url: '/baby',
                templateUrl: 'component/mine/baby/baby.html',
//              controller:'babyCtrl',
                css:'component/mine/baby/baby.css'
            })
    })