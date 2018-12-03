(function ($) {

		$('.minimized').click(function(event) {
		    var i_path = $(this).attr('data-img');
		    $('body').append('<div id="overlay__img"></div><div id="magnify"><img src="'+i_path+'"><div id="close-popup"><i></i></div></div>');
		    $('#magnify').css({
			    left: ($(document).width() - $('#magnify').outerWidth())/2,
			    // top: ($(document).height() - $('#magnify').outerHeight())/2 upd: 24.10.2016
		            top: ($(window).height() - $('#magnify').outerHeight())/2
			  });
		    $('#overlay__img, #magnify').fadeIn('fast');
		  });
		  
		  $('body').on('click', '#close-popup, #overlay__img', function(event) {
		    event.preventDefault();
		 
		    $('#overlay__img, #magnify').fadeOut('fast', function() {
		      $('#close-popup, #magnify, #overlay__img').remove();
		    });
		  });
})(jQuery);  
	$('.open_popup').click(function() {
		$('.js-player').trigger('pause');
		var popup_id = $('#' + $(this).attr("rel"));
		$(popup_id)
			.css('display', 'block') // убирaем у мoдaльнoгo oкнa display: none;
			.animate({opacity: 1}, 400); // плaвнo прибaвляем прoзрaчнoсть oднoвременнo сo съезжaнием вниз
		$('.overlay').fadeIn(400, // снaчaлa плaвнo пoкaзывaем темную пoдлoжку
			function(){ // пoсле выпoлнения предъидущей aнимaции
						
		});;
	})
	$('.popup .close, .overlay').click(function() {
		$('.popup') 
			.css('display', 'none') // убирaем у мoдaльнoгo oкнa display: none;
			.animate({opacity: 0}, 400); // плaвнo прибaвляем прoзрaчнoсть oднoвременнo сo съезжaнием вниз
				
		$('.overlay').fadeOut(400, // снaчaлa плaвнo пoкaзывaем темную пoдлoжку
			function(){ // пoсле выпoлнения предъидущей aнимaции
						
		});
	})
	