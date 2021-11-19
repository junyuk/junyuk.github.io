$(function(){
    
		$(document).ready(function(){
			$('.visual').bxSlider({
				mode: 'horizontal',
				moveSlides: 1,
				slideMargin: 40,
				infiniteLoop: true,
				slideWidth: 2100, //프레임위드
				minSlides: 1,
				maxSlides: 1,
				speed: 800,
			});
		});
        //비주얼 배너 스크립트

		AOS.init();
		//스크롤시 동적요소
});