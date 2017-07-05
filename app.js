<<<<<<< HEAD
//配置路由固定模式（目的实现跳转总配置）
angular.module('mls',['ui.router','angularCSS','me-lazyload','homeModule','categoryModule','shopcarModule','mineModule','skirtModule','popularModule','searchModule','checkMoreModule'])
=======
//配置路由固定模式（目的实现跳转总配置）、

angular.module('mls',['ui.router','angularCSS','me-lazyload','homeModule','categoryModule','shopcarModule','mineModule','skirtModule','popularModule','babyModule','CollectionModule','ConcessionalModule','addressModule','PreservationModule','moneyModule'])


>>>>>>> 22946cd3de59fed8f8c867973ab7a7cf657ad212
  .config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/home');
  })



  
      	




