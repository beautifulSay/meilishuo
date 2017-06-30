angular.module('homeModule',['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'component/home/home.html',
//              controller:'homeCtrl',
                css:'component/home/home.css'
            })
    })