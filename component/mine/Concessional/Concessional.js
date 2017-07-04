angular.module("ConcessionalModule",["ui.router"])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('Concessional', {
                url: '/Concessional',
                templateUrl: 'component/mine/Concessional/Concessional.html',
//              controller:'babyCtrl',
                css:'component/mine/Concessional/Concessional.css'
            })
    })
    
    //点击事件
	$(function(){
//			  $('.oul6>li').on('click',function(){
//			  	      $(this).css("color","red");
//			  })
			  
			  
			    $('#opend').on('click',function(){			    	
			            $('#smoll').hide();			       
			  })
			  
			
	  	          $('#smoll').on('click',function(){
		  	             $("#opend").show();
			  })
			  
			  
})



