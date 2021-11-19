$(function(){

    var list=$(".list_num>a");
    var li=$(".frame").find("li");
    //$(".banner>.frame>ul>li")
    var i=0;//항상 제일 처음에 있는게 보여져라
    var playOn=false;
    var bannerAuto;
    li.hide();

    list.click(function(){//list를 클릭했을때의 조건
        var index=list.index(this);//리스트 현재 인덱스
        if(list.state){
            //state는 현재 내가 보고있는것 
            //무한긍정 일단 하나라도 나와있다고 판단
            //state는 변수가 아니라 상태를 나타내는것
            stop();
            imgOff(list.state);
            //기존에 선택되어있는 버튼컬러를 비활성화 컬러로 변경
            imgOn(this);
            //비활성화 되어있던 버튼컬러를 활성화 컬러로 변경
            $(li.state).hide();
            $(li[index]).show(); //여기까지하면 색상변경
            i=index; //인덱스는 this만 받을수 있어서
            play();
        }else{
            //오류를 미리 잡으려고 / 만약 아무것도 잡힌게 없을때
            imgOn(this);
            $(li[index]).show();
            play();
        }

        list.state=this; 
        li.state=li[index]; 
        return false; //a의 고유기능을 해제 

    });
    //list_click
    //pager 색상변경

    $(".left").click(function(){
        i--;
        if(i<0){
            i=list.length-1;//리스트의 갯수 = 4-1
        }
        list[i].click();
    });//left_click

    $(".right").click(function(){
        i++;
        if(i>list.length-1){
            i=0;
        }
        list[i].click();
    });//right_click

    $(".play").click(function(){
        play();
    });
    $(".stop").click(function(){
        stop();
    });

    function play(){
        if(!playOn){
            playOn=true;
            bannerAuto=setInterval(function(){
                $(".right").click();
            },4000);
        }
        if(playOn){
            $(".frame>ul>li>a").mouseover(function(){
                stop();
            });
        }
        //사진에 마우스 오버시 스탑
        if(playOn){
            $(".list_num>a").mouseover(function(){
                stop();
            });
        }
        //페이저에 마우스 오버시 스탑
    }//play()

    function stop(){
        if(playOn){
            playOn=false;
            clearInterval(bannerAuto);
            // 메모리에서 지워라
            //변수를 사용 안하면(지정해서 넣지않으면) 모든게 다 멈춘다.
            //지금은 bannerAuto만 해당
        }
    }//stop()

    function imgOn(t){//this의 준말
        $(t).find("img").attr("src",$(t).find("img").attr("src").replace("off","on"));
    }
    
    function imgOff(t){
        $(t).find("img").attr("src",$(t).find("img").attr("src").replace("on","off"));
    }

    list[0].click();

});//jQuery_function