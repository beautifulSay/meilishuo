//配置路由固定模式（目的实现跳转总配置）、
angular.module('mls',['ui.router','angularCSS','me-lazyload','homeModule','categoryModule','shopcarModule','mineModule','skirtModule'])
  .config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/home');
  })
  
// .directive('myDirective', function () {
//          return {
//              restrict: 'E',
//              replace: true,
//              templateUrl: 'component/home/home.html',
//          }
//      });
//      
  
      	
      



