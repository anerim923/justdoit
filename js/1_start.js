$(document).ready(function(){  

    let speed = 500;
    let $btn1 = $('.btn1');
    let $top = $('.top');
    let $right = $('.right');
    let $bottom = $('.bottom');
    let $left = $('.left');
    let $con = $('.con');
    let $close1 = $('.close1');
    let $btn2 = $('.btn2');
    let $wrap2 = $('#wrap2');
    let $close2 = $('.close2');
    let $dear2 = $('.dear2');
    let $anerim2 = $('.anerim2')
    let $startNext = $('.startNext')
    let $plusWrite = $('.plusWrite')
    
    //열기1 이벤트
    $btn1.on('click',function(e){ 
        e.preventDefault();
        resetBox();
        openBox1();     
    });

    //닫기1버튼 이벤트
    $close1.on('click',function(e){
        e.preventDefault();
        closeBox1();           
    });

    //열기2 버튼 이벤트
    $btn2.on('click',function(e){    
        e.preventDefault();
        resetBox();
        openBox2();
    });

    //닫기2 버튼 이벤트
    $close2.on('click',function(e){
        e.preventDefault();
        closeBox2();
    });


    function openBox1(){
        $top.animate({'width':'100%'},speed,function(){
            $right.animate({'height':'100%'},speed,function(){
                $bottom.animate({'width':'100%'},speed,function(){
                    $left.animate({'height':'100%'},speed,function(){
                        $con.fadeIn(1500);
                    });
                })
            });
        }); 
    }

    function closeBox1(){
        $con.fadeOut(speed*2,function(){
            $top.animate({'width':'0%'},speed/2);
            $bottom.animate({'width':'0%'},speed/2);
            $left.animate({'height':'0%'},speed/2);
            $right.animate({'height':'0%'},speed/2); 
        });  
    }

    function openBox2(){
        $wrap2.animate({'height':'400px', 'margin-top':'-200px'},speed);
        $close2.css({'display':'block'});
        $dear2.css({'display':'block'});
        $anerim2.css({'display':'block'});
        $plusWrite.css({'display':'block'});
        $startNext.css({'display':'block'});
    }

    function closeBox2(){
        $wrap2.animate({'height':'0px', 'margin-top':'0px'},speed); 
        $close2.css({'display':'none'});
        $dear2.css({'display':'none'});
        $anerim2.css({'display':'none'});
        $plusWrite.css({'display':'none'});
        $startNext.css({'display':'none'});
    }

    function resetBox(){
        closeBox1();
        closeBox2();
    }
	
});












