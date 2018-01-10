document.body.onload = function() {
	setTimeout(function() {
		var preloader = document.getElementById('preloader');
		if(!preloader.classList.contains('done')) {
			preloader.classList.add('done');
		}
	}, 2000);
}

$(document).ready(function(){
   var destination = $(window).height();
   	  
   $("#glyphicon").effect( "pulsate", {
                  times: 100,
                  distance: 100
    });

   $('#glyphicon').click(function() {
   		$('html, body').animate({scrollTop: destination}, 1800);
        
         $('#glyphicon').css('visibility', 'hidden');
   });

   $(window).scroll(function() {

      if($(window).scrollTop() === 0) {
         $('#glyphicon').css('visibility', 'visible');
      }

   });

   $('.contact').click(function() {
      window.location = 'https://mail.google.com';
   });
});

   
 


  