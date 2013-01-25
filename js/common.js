$(document).ready(function() {
	$('.product .slides').cycle({ 
		fx:     'scrollHorz', 
		prev:   '.slider .slider__prev', 
		next:   '.slider .slider__next', 
		timeout: 0,
		api:true,
		before: function(curr){
			$(this).parents('.product').find('.product__nav li').eq($(this).index()).addClass('active').siblings().removeClass('active');
		}
	});
	$('.product .product__nav li').click(function(){
		if (!($(this).hasClass('active'))) {
			asd = $(this).index();
			$('.product .slides').cycle(asd);
		};
		return false;
	});
});