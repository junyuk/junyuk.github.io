 $(function(){

    var eleWidth=$(".frame>ul>li").innerWidth(); 
    //padding을 써서 한번 이동할때 얼만큼 이동시킬꺼냐의 변수 (만약 마진을 썼으면 outerWidth를 사용해야함)
    var state=false; //상태를 나타내는 변수들
    var playOn=false; //상태를 나타내는 변수들
    var direction="left"; //상태를 나타내는 변수들
    var bannerAuto;//이 시간안에 슬라이딩해라 셋 인터벌
    
    function play(){
        if(!playOn){
            playOn=true;
            bannerAuto=setInterval(function(){
                if(direction=="left"){
                    $(".right").click();//강제로 이벤트만 실행
                }else{
                    $(".right").click();//강제로 이벤트만 실행
                }
            },5000);//이 시간안에 슬라이딩해라 셋 인터벌
        }//if
        if(playOn){
            $(".frame>ul>li>div").mouseover(function(){
                stop();
            });
        }
    }//play()

    function stop(){
        if(playOn){
            playOn=false;
            clearInterval(bannerAuto);// 메모리에서 지워라
            //변수를 사용 안하면(지정해서 넣지않으면) 모든게 다 멈춘다.
            //지금은 bannerAuto만 해당
        }
        $(".frame>ul>li>div").mouseout(function(){
            //플레이 되고 있는 상태에서만 멈출 수 있는것
            play();
        });
        $(".frame>ul>li>div").click(function(){
            location.href;
        });
    }//stop()

    function left(){
        stop();
        direction="left";
        $(".frame>ul>li:last").insertBefore($(".frame>ul>li:first"));
        //마지막 li를 첫번째 li 앞에 이동
        $(".frame>ul").css("left",eleWidth*-1);
        //-px를 사용할 수가 없어서
        $(".frame>ul").animate({left:0},500,
            function(){ //콜백함수
                state=false;
                play();
            }
        );
    }//left()

    function right(){
        stop();
        direction="right";
        $(".frame>ul").animate({left:eleWidth*-1},500,
            function(){ //콜백함수
                $(this).children("li:first").insertAfter($(this).children("li:last"));
                //첫번째 li를 마지막 li 뒤에 붙여넣겠다
                $(this).css("left",0);
                //li가 다시 ul왼쪽 끝에 딱 붙게끔 
                state=false;
                play();
            }
        );
    }//right()

    $(".left").click(function(){
        if(!state){ //false가 아니라면
            state=true;
            left();
        }
    });

    $(".right").click(function(){
        if(!state){
            state=true;
            right();
        }
    });

    $(".stop").click(function(){
        stop();
    });

    $(".play").click(function(){
        play();
    });

    $(".play").click()//최초 자동실행 강제로
});