
(function($) {
var currenttabs = 1;

$(function() {

	$('ul.tabs').delegate('li:not(.current)', 'click', function() {
		currenttabs = $(this).attr('data');
		$(this).addClass('current').siblings().removeClass('current')
			.parents('div.section').find('div.box').hide().eq($(this).index()).fadeIn(300);
	})
	$('.next__tab').on('click', function() {
		currenttabs++;
		if (currenttabs ==4 ) {
			currenttabs = 1;
		}
		$('ul.tabs li[data="'+currenttabs+'"]').addClass('current').siblings().removeClass('current')
			.parents('div.section').find('div.box').hide().eq($('ul.tabs li[data="'+currenttabs+'"]').index()).fadeIn(300);

	})
	$('.prev__tab').on('click', function() {
		currenttabs--;
		if (currenttabs ==0 ) {
			currenttabs = 3;
		}
		$('ul.tabs li[data="'+currenttabs+'"]').addClass('current').siblings().removeClass('current')
			.parents('div.section').find('div.box').hide().eq($('ul.tabs li[data="'+currenttabs+'"]').index()).fadeIn(300);

	})
})
})(jQuery)