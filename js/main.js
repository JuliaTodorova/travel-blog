jQuery(document).ready(function($){
	var MQL = 1170;

	$('.cd-primary-nav-trigger').on('click', function(){
		$('.cd-menu-icon').toggleClass('is-clicked'); 
		$('.cd-header').toggleClass('menu-is-open');
		
		if( $('.cd-primary-nav').hasClass('is-visible') ) {
			$('.cd-primary-nav').removeClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
				$('body').removeClass('overflow-hidden');
			});
		} else {
			$('.cd-primary-nav').addClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
				$('body').addClass('overflow-hidden');
			});	
		}
	});
});

$(document).ready(function(){
	$(".cd-primary-nav-trigger").click(function(){
		$(".hide").fadeToggle('fast');
	});

	$('#arrow-down').click(function(){
		$('html, body').animate({
			scrollTop:$('#city-index-container').offset().top
		}, 800);
	});
});

