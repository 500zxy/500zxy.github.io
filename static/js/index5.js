jQuery(function() {
	var max = jQuery(".banner .item").length;
	var ibmax = jQuery(".inbanner .initem").length;
	jQuery(".numble .end").html(ibmax);
	var $banner = jQuery(".banner"),
		$bannerItem = $banner.find(".item");
	$bannerImg = jQuery(".banner .item .pimg");
	$head_top = $(".header").height();
	$('.banner').on('init', function(event, slick, currentSlide, nextSlide) {
		$(".item").first().removeClass("slick-current");
		setTimeout(function() {
			$(".item").first().addClass("slick-current");
		}, 200);
	});
	jQuery(".banner").slick({
		slide: ".item",
		autoplay: true,
		arrows: false,
		dots: true,
		infinite: true,
		easing: "easeInOutExpo",
		speed: 800,
		autoplaySpeed: 4800,
		pauseOnHover: false,
		fade: true
	}).on({
		'beforeChange': function(event, slick, currentSlide, nextSlide) {
			var _item = $(this).find(".item");
			_item.eq(nextSlide).addClass("show").siblings().removeClass("show");
		}
	});
	setTimeout(function() {
		$banner.find(".item").eq(0).addClass("show");
	}, 1);
    // 通知公告
	jQuery(".ib2banner").slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		centerPadding: '0',
		arrows: true,
		speed: 1000,
		autoplaySpeed: 3000,
		dots: false,
		infinite: true,
		centerMode: false,
		autoplay: true,
		focusOnSelect: true,
		nextArrow: $('.ibnext'),
		prevArrow: $('.ibprev'),
		responsive: [{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 640,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			}
		]
	});
	// 工会动态
	jQuery(".idleft").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		centerPadding: '0',
		arrows: true,
		speed: 1000,
		dots: false,
		infinite: true,
		centerMode: false,
		autoplay: false,
		focusOnSelect: true,
		fade: true
	});

});