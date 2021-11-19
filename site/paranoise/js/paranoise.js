$(function(){

    jQuery( '#background' ).YTPlayer();
    // 메인 영상 쿼리

    AOS.init();

    $(".nav").each(function(){
        var win=$(window);
        var nav=$(".flower01");
        var target=nav.offset().top; 

        $(win).on("scroll",function(){
            if(win.scrollTop()>target) { 
                //window값이 스크롤해서 400보다 커졌다면
                $(".nav").addClass("nav_color");
            }else{ 
              //window값이 스크롤해서 타겟수치인 400보다 적다면
                $(".nav").removeClass("nav_color");
            }
        }); //scroll_lnb
    });//lnb 스크롤시 백그라운드 변경

    var box02=$(".section01_box").offset().top-150;
    var box04=$(".draw").offset().top-100;
    var box05=$(".section05").offset().top;

    $('#main').click(function(){
        $("html, body").animate({scrollTop:0},500);
    });//top_move
    $('#about').click(function(){
        $("html, body").animate({scrollTop:box02},500);
    });//top_move
    $('#draw').click(function(){
        $("html, body").animate({scrollTop:box04},500);
    });//top_move
    $('#in_seoul').click(function(){
        $("html, body").animate({scrollTop:box05},500);
    });//top_move
    //lnb 해당버튼 클릴시 스무스하게 이동 동작

    var win=$(window);

    win.scroll(function(){
        if(win.scrollTop()>=0 && win.scrollTop()<=720){
            $(".scroll_bar>p:nth-child(1)").fadeIn(200);
        }
    });
    //스크롤시 스크롤바 텍스트 변경 동작

    $(document).on('click', '[data-toggle="lightbox"]', function(event) {
        event.preventDefault();
        $(this).ekkoLightbox();
      });
    // 이미지 모달 동작
    // https://wonpaper.tistory.com/223?category=867319
    // 사이트 이거 치면 나옴

    $(document).on('click', '[data-toggle="light"]', function(event) {
        event.preventDefault();
        $(this).ekkoLightbox();
      });
    // 이미지 모달 동작
    // https://wonpaper.tistory.com/223?category=867319
    // 사이트 이거 치면 나옴

});