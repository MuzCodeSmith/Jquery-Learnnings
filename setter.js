$(document).ready(function(){
   $('.signin').html('<span>modified tag</span>');
   $('.signin').attr('class','error');

   $('.container p').first().text('paragraph modified');
   
   $('#email').val('please enter your email');
   $('#password').val('please enter password');
})