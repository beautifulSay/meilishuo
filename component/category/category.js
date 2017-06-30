angular.module('categoryModule',['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('category', {
                url: '/category',
                templateUrl: 'component/category/category.html',
//              controller:'categoryCtrl',
                css:'component/category/category.css'
            })
    })