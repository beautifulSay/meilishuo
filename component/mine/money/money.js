angular.module("moneyModule",["ui.router"])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('money', {
                url: '/money',
                templateUrl: 'component/mine/money/money.html',
//              controller:'babyCtrl',
                css:'component/mine/money/money.css'
            })
    })
    