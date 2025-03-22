$(document).ready(function(){
    $('.signin').on({
        "mouseover":function(){
            $(this).addClass('mouseover');
        },
        "click":function(){
            $(this).toggleClass('clicked');
        },
        "mouseout":function(){
        $(this).removeClass('mouseover')
        }
    })

    $('#remove').click(function(){
        $('.signin').off("mouseover mouseout click")
    })
})