angular.module('shopcarModule',['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('shopcar', {
                url: '/shopcar',
                templateUrl: 'component/shopcar/shopcar.html',
//              controller:'shopcarCtrl',
                css:'component/shopcar/shopcar.css'
            })
    })