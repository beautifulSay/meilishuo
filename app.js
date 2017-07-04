//配置路由固定模式（目的实现跳转总配置）、
<<<<<<< HEAD
angular.module('mls',['ui.router','angularCSS','me-lazyload','homeModule','categoryModule','shopcarModule','mineModule','skirtModule','popularModule','babyModule','CollectionModule','ConcessionalModule','addressModule','PreservationModule'])
=======

angular.module('mls',['ui.router','angularCSS','me-lazyload','homeModule','categoryModule','shopcarModule','mineModule','skirtModule','popularModule','babyModule'])

>>>>>>> e1074a307fbc36969d23e2fbe2fe6d05ec647eba
  .config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/home');
  })



  
      	




