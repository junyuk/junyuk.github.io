$(document).ready(function(){
    $('.visual').bxSlider({
        mode: 'horizontal',
        moveSlides: 1,
        slideMargin: 40,
        infiniteLoop: true,
        slideWidth: 1032,
        minSlides: 1,
        maxSlides: 1,
        speed: 2000,//이동속도
    });
    //비주얼배너 동적요소

    
    var mySlider=$("#noodle").bxSlider({
        mode:"horizontal",   
        speed:1500,              
        pager:false,            
        moveSlides:1,         
        slideWidth:684,        
        minSlides:1,           
        maxSlides:1,          
        slideMargin:10,      
        auto:false,            
        autoHover:true,    
        controls:false        
     });
  
     $("#prevBtn").on("click",function(){
      mySlider.goToPrevSlide();  
      return false; 
     });
  
     $("#nextBtn").on("click",function(){
      mySlider.goToNextSlide(); 
      return false;
     });
    // 별미국수 슬라이드 동적요소

    AOS.init();
    // 스크롤 동적요소

    var win=$(window);

    win.scroll(function(){
        if(win.scrollTop()>200) {
            $(".top").fadeIn("200");
        } else {
            $(".top").fadeOut("200");
        }
    }); //scroll_event_top
    //만약에 스크롤 값이 100px보다 커진다면
    //스크롤되었을때 클래스 탑을

    $(".top").click(function(){
        $("html, body").animate({scrollTop:0},500);
    });//top_move

}); 
