$(document).ready(function (){
    $('#first').click(function(){
        $('ol').prepend('<li>banana</li>');
    })
    $('#last').click(function(){
        $('ol').append('<li>honey</li>');
    })
})