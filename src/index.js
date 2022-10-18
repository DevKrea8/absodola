$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 100) {
          $(".mynav").css("background" , "#141c42");
        }
  
        else{
            $(".mynav").css("background" , "transparent");  	
        }
    })
  })