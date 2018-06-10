



$("a.active").on('click', function(e) {
            e.preventDefault();
        });

$(".main__content__banner").hover(
    function () {
        $(this).children(".blink").removeClass('out').addClass('over');
    },
    function () {
        $(this).children(".blink").removeClass('over').addClass('out');
    }
   
	);

    $(".slide__in").click(
    	function() {
    		$("#menu").slideToggle(300);
    	}
    );
    $(".sub__link > a").on('click', function(e) {
			e.preventDefault();
		});
    if(window.innerWidth < 980){
		$(".sub__link > a").on('click', function() {
			$(".sub__menu").slideToggle(300);
		});
	};