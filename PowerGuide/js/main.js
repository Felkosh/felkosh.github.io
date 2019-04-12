 $(document).ready(function () {
 	




 	var swiper__logo = new Swiper('.swiper__logo', {
 		slidesPerView: 'auto',
      	spaceBetween: 25,
      	centeredSlides: true,
      	loop: true,
      	speed: 1000,
			autoplay: {
				delay: 5000,
				waitForTransition: false,
				disableOnInteraction: false
			},
 	});
    //initialize swiper when document ready
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 'auto',
      centeredSlides: true,
      spaceBetween: 115,
      
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      speed: 1000,
			autoplay: {
				delay: 8000,
				waitForTransition: false,
				disableOnInteraction: false
			},
      pagination: {
				clickable: true,
				el: '.swiper-dots',
				bulletClass: 'swiper-dot',
				bulletActiveClass: 'active',
				modifierClass: 'swiper-dot-',
				renderBullet: function renderBullet(index, className) {
					var bulletNum = index++ < 10 ? '' + index++ : index++;
					return '\n          <div class="' + className + '">\n            <span class="number">' + bulletNum + '</span>\n            <svg><circle class="outer" cx="20" cy="20" r="18"/></svg>\n            <span class="bullet"></span>\n          </div>\n        ';
				}
			}
    });

    
    swiper.on('slideChangeTransitionStart', function() {
    		$('.swiper-button-next').addClass('arrow__anim');
    		$('.swiper-button-prev').addClass('arrow__anim__prev');
			$('.swiper-dot.active').siblings().removeClass('tick-tack');
			$('.swiper-dot.active').addClass('tick-tack');
			if (swiper.isEnd) $('.swiper-start').addClass('active');
			else $('.swiper-start').removeClass('active');
		});
     swiper.on('slideChangeTransitionEnd', function() {
    		$('.swiper-button-next').removeClass('arrow__anim');
    		$('.swiper-button-prev').removeClass('arrow__anim__prev');
			
		});
     // ============================================================Gamburger=================================================================
	
	var Menu = {
	  
	  el: {
	    ham: $('.mobile_menu'),
	    menuTop: $('.menu-top'),
	    menuMiddle: $('.menu-middle'),
	    menuBottom: $('.menu-bottom')
	  },
	  
	  init: function() {
	    Menu.bindUIactions();
	  },
	  
	  bindUIactions: function() {
	    Menu.el.ham
	        .on(
	          'click',
	        function(event) {
	        Menu.activateMenu(event);
	        event.preventDefault();
	      }
	    );
	    $('.mobile_menu_overlay')
	        .on(
	          'click',
	        function(event) {
	        Menu.activateMenu(event);
	        event.preventDefault();
	      }
	    );
	    $('.menu a')
	        .on(
	          'click',
	        function(event) {
	        Menu.activateMenu(event);
	        event.preventDefault();
	      }
	    );
	  },
	  
	  activateMenu: function() {
	    Menu.el.menuTop.toggleClass('menu-top-click');
	    Menu.el.menuMiddle.toggleClass('menu-middle-click');
	    Menu.el.menuBottom.toggleClass('menu-bottom-click'); 
	    $('.menu').toggleClass('active');
	    $('.mobile_menu_overlay').fadeToggle();
	  }
	};

	Menu.init();
  });
$(function() {
$('.swiper-dot.active').addClass('tick-tack');

$(window).scroll(function() {
	var scroll__flex = $(window).scrollTop() + $(window).height() -100;
	$('.advantage__flex__text').each(function() {
 			if ($(this).offset().top < scroll__flex)
 				{
 					$(this).addClass('active');
 				}
 			else {
 				$(this).removeClass('active');
 			}
 		});
});
}); 
// =============================================Scroll==========================================================================================
// $(function() {
// 	var scroll__flex =  $(window).scrollTop();
// 	$(window).scroll(function() {
// 		$('.advantage__flex__text').each(function() {
// 			if ($(this).offset().top < scroll__flex) {
// 				$(this).addClass('active')
// 			};
// 		});
// 	});
	
// });
