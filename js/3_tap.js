$(document).ready(function(){	

    $('#tap dt a').on('click focusin',function(e){
        e.preventDefault();

        var target = $(this).attr('href');

        $('#tap dd').hide().removeClass('on');
        $(target).show();
        setTimeout(function(){
            $(target).addClass('on');
        },100);

        $('#tap dt a').removeClass('on');
        $(this).addClass('on');
    });
});