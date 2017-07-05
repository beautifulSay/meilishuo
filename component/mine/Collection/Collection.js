angular.module("CollectionModule",["ui.router"])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('Collection', {
                url: '/Collection',
                templateUrl: 'component/mine/Collection/Collection.html',
//              controller:'babyCtrl',
                css:'component/mine/Collection/Collection.css'
            })
    })