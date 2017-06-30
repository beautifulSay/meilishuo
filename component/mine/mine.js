angular.module('mineModule',['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('mine', {
                url: '/mine',
                templateUrl: 'component/mine/mine.html',
//              controller:'mineCtrl',
                css:'component/mine/mine.css'
            })
    })