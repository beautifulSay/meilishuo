//配置路由固定模式（目的实现跳转总配置）、

angular.module('mls',['ui.router','angularCSS','me-lazyload','homeModule',
    'categoryModule','shopcarModule','mineModule','skirtModule','popularModule'])

angular.module('mls',['ui.router','angularCSS','me-lazyload','homeModule','categoryModule','shopcarModule','mineModule','skirtModule','popularModule','babyModule'])

  .config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/home');
  })



  
      	




