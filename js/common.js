$(document).ready(function() {

	// function element exists
	jQuery.fn.exists = function() {
		return $(this).length;
	}

	//.product
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

	//.popup
	$('.popup__close').click(function(){
		$(this).parent().fadeOut('fast');
	});

	//product-list
	$('.product .product__nav li').click(function(){
		if (!($(this).hasClass('active'))) {
			asd = $(this).index();
			$('.product .slides').cycle(asd);
		};
		return false;
	});

	//checkbox
	$('.check input:checkbox').delegate($(this), 'change', function(){ $(this).attr('checked') ? $(this).parent().addClass('checked') : $(this).parent().removeClass('checked')});

	//file
	$('.btn_file').click(function() {
		$(this).next('input:file').click();
		return false;
	});

	//select
	$('.select select').change(function() {
		$(this).prev('.select__text').html($(this).val());
	});

	//scrollbar
	if ($('#scrollbar').exists()){
		$('#scrollbar').tinyscrollbar({ sizethumb: 54 });
	};

});