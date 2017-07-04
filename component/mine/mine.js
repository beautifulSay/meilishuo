angular.module('mineModule',['ui.router',"babyModule",'CollectionModule'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('mine', {
                url: '/mine',
                templateUrl: 'component/mine/mine.html',
//              controller:'mineCtrl',
                css:'component/mine/mine.css'
            })
    })
    

    //mine页面回到顶部
    $(function(){   	
		   	 $("#Top").click(function(){
		                   jQuery('.Personal').animate({scrollTop:0}, 200);	                 
		                 })
    
    })

    
 
