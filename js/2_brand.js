$(document).ready(function(){	

    let result = convertSpeed('article .inner');    
   
    $('ul li').on('click',function(){
        let i = $(this).index();

        $('ul li').removeClass('on');
        $('ul li').eq(i).addClass('on');
     
        $('article.upper').removeClass('upper').addClass('lower');

        $('article').eq(i).addClass('upper');

        setTimeout(function(){
            $('article.lower').removeClass('lower');
        },result);
    });    

    function convertSpeed(selector){
        let dur = $(selector).css('transition-duration');
        dur = dur.split('s');
        dur = dur[0];
        dur = parseFloat(dur);
        dur = dur*1000;
        return dur;
    }
});
