$(document).ready(function(){
    // $('.container h1').css('color','red');
    // $('.container h1').text('Student Signup');
    // $('.container p').first().text('please fill all the details');
    var header = $('.container h1').text();
    var formBody = $('.form-box').html();

    
    $('.form-box').submit(function (event){
        event.preventDefault();
        var email=$('#email').val();
        var password=$('#password').val();

        for(let pair of formData.entries()){
            // console.log( pair[1]);
        }
    })

    console.log("header:",header);
    console.log("formBody:",formBody);

})