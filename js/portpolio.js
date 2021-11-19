$(function(){

    var win=$(window);

    $(".full").mousewheel(function(event, delta){
        if(delta>0){
            var prev=$(this).prev().offset().top;
            $("html, body").stop().animate({scrollTop:prev},1000);
        }else if(delta<0) {
            var next=$(this).next().offset().top;
            $("html, body").stop().animate({scrollTop:next},1000);
            // ^^^ html안에 모든걸 뜻함 
        }
    });
    //스크롤시 풀페이지 스크롤

    AOS.init();
    // 스크롤 동적요소

    var box01=$(".section02_box").offset().top;
    var box02=$(".section03_box").offset().top;
    var box03=$(".section04_box").offset().top;
    var box04=$(".section05_box").offset().top;
    var box05=$(".section06_box").offset().top;

    $('#about').click(function(){
        $("html, body").animate({scrollTop:box01},500);
    });//top_move
    $('#site').click(function(){
        $("html, body").animate({scrollTop:box02},500);
    });//top_move
    $('#works').click(function(){
        $("html, body").animate({scrollTop:box03},500);
    });//top_move
    $('#story').click(function(){
        $("html, body").animate({scrollTop:box04},500);
    });//top_move
    $('#contect').click(function(){
        $("html, body").animate({scrollTop:box05},500);
    });//top_move
    //lnb 해당버튼 클릴시 스무스하게 이동 동작


    win.scroll(function(){
        if(win.scrollTop()>=1200){
            $('.chart1').easyPieChart({
                barColor: '#aec4d2', //차트가 그려질 색
                trackColor: '#fbf3f0', //여백색
                scaleColor: '#fbf3f0', //가쪽에 눈금 색
                lineCap: 'butt',
                // 차트 선의 모양 butt round square
                lineWidth: 8, // 차트 선의 두께
                size: 90, // 차트크기
                animate: 1000, // 그려지는 시간 
                onStart: $.noop,
                onStop: $.noop
            });
            $('.chart2').easyPieChart({
                barColor: '#aec4d2', //차트가 그려질 색
                trackColor: '#fbf3f0', //여백색
                scaleColor: '#fbf3f0', //가쪽에 눈금 색
                lineCap: 'butt',
                // 차트 선의 모양 butt round square
                lineWidth: 8, // 차트 선의 두께
                size: 90, // 차트크기
                animate: 1000, // 그려지는 시간 
                onStart: $.noop,
                onStop: $.noop
            });
            $('.chart3').easyPieChart({
                barColor: '#aec4d2', //차트가 그려질 색
                trackColor: '#fbf3f0', //여백색
                scaleColor: '#fbf3f0', //가쪽에 눈금 색
                lineCap: 'butt',
                // 차트 선의 모양 butt round square
                lineWidth: 8, // 차트 선의 두께
                size: 90, // 차트크기
                animate: 1000, // 그려지는 시간 
                onStart: $.noop,
                onStop: $.noop
            });
            $('.chart4').easyPieChart({
                barColor: '#aec4d2', //차트가 그려질 색
                trackColor: '#fbf3f0', //여백색
                scaleColor: '#fbf3f0', //가쪽에 눈금 색
                lineCap: 'butt',
                // 차트 선의 모양 butt round square
                lineWidth: 8, // 차트 선의 두께
                size: 90, // 차트크기
                animate: 1000, // 그려지는 시간 
                onStart: $.noop,
                onStop: $.noop
            });
            $('.chart5').easyPieChart({
                barColor: '#aec4d2', //차트가 그려질 색
                trackColor: '#fbf3f0', //여백색
                scaleColor: '#fbf3f0', //가쪽에 눈금 색
                lineCap: 'butt',
                // 차트 선의 모양 butt round square
                lineWidth: 8, // 차트 선의 두께s
                size: 90, // 차트크기
                animate: 1000, // 그려지는 시간 
                onStart: $.noop,
                onStop: $.noop
            });
        }else{

        }
    }); //스킬 원형 그래프 쿼리 


    var lnbTxt=$(".menu");
    $(lnbTxt).each(function(){
        var win=$(window);
        var sec02=$(".section02_box");
        // var sec06=$(".section06_box");
        var target=sec02.offset().top;
        // var target02=sec06.offset().top;

        $(win).on("scroll",function(){
            if(win.scrollTop()>=target) { 
            //window 높이값이 스크롤해서 section02_box 보다 커졌다면
               lnbTxt.addClass("lnb_color");
            }
            else{
               lnbTxt.removeClass("lnb_color");
            }
        });
    });//스크롤 내릴시 lnb 전체컬러 변경

    $(lnbTxt).each(function(){
        var win=$(window);
        var sec06=$(".section06_box");
        var target=sec06.offset().top;

        $(win).on("scroll",function(){
            if(win.scrollTop()>=target) { 
            //window 높이값이 스크롤해서 section02_box 보다 커졌다면
               lnbTxt.removeClass("lnb_color");
            }

        });
    });//마지막 섹션에서 다시 lnb컬러변경

    
    var menu=$(".lnb>p>a");//lnb 각각 버튼
    var content=$(".wrap>.n");//각 섹션

    win.scroll(function(){
        var point=$(window).scrollTop();
        content.each(function(){ 
            var target=$(this);//현재 섹션
            var i=target.index();//현재 섹션의 인덱스값
            if(target.offset().top<=point+10){
                //인디케이트 인지가 몇 픽셀 차이일경우 +,-값으로 조절가능
                menu.removeClass("on");
                menu.eq(i).addClass("on");
            } else if(point<1200){
                menu.removeClass("on");
            }
        });//섹션의 함수
    });//윈도우 스크롤
    //스크롤시 해당섹션에 맞는 lnb 컬러 변경

    $(".logo").click(function(){
        $("html, body").animate({scrollTop:0},500);
    });//top_move
    //로고 클릭시 제일 위로 슬라이드 이동

    var mySlider=$("#publishing").bxSlider({
        mode:"horizontal",   
        speed:500,              
        pager:false,            
        moveSlides:1,         
        slideWidth:250,        
        minSlides:4,           
        maxSlides:4,          
        slideMargin:0,      
        auto:true,            
        autoHover:true,    
        controls:false        
    });
    //publishing 박스 슬라이드
  
    $("#prevBtn").on("click",function(){
        mySlider.goToPrevSlide();  
        return false; 
    });

    $("#nextBtn").on("click",function(){
        mySlider.goToNextSlide(); 
        return false;
    });
    //publishing 박스 슬라이드 버튼

    $(document).on('click', '[data-toggle="photoshop"]', function(event) {
        event.preventDefault();
        $(this).ekkoLightbox();
    });

    $(document).on('click', '[data-toggle="illustrator"]', function(event) {
        event.preventDefault();
        $(this).ekkoLightbox();
    });

    $(document).on('click', '[data-toggle="photography"]', function(event) {
        event.preventDefault();
        $(this).ekkoLightbox();
    });    
    // 이미지 모달 동작
    // https://wonpaper.tistory.com/224?category=867319
    // 사이트 이거 치면 나옴


});//전체펑션