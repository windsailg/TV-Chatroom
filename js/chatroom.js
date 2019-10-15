$(document).ready(function(){

   $('.enter_key_false').keypress(function(e) {
      code = e.keyCode ? e.keyCode : e.which; // in case of browser compatibility
      if(code == 13) {
         e.preventDefault();
      }
   });


});