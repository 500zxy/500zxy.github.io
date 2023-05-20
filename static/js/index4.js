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
		arrows: true,
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

});