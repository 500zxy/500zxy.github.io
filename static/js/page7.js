let _ = function (select) {
    return document.querySelector(select);
};

let _$ = function (select) {
    return document.querySelectorAll(select);
};

let w = document.body.offsetWidth;
let h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;    

const clickEvent = (function() {
    if ('ontouchstart' in document.documentElement === true)
      return 'touchstart';
    else
      return 'mousedown';
})();
var isMobile = false,
	mobile = false,
	win_width = 0,
	win_height = 0,
	navItem = 0,
	atH = 90,
	$menuBtn = jQuery('.menu-handler'),
	$menuOverlay = jQuery('.menu-overlay'),
	menuM = jQuery(".menuMoblie"),
	pageNavNum = 0,
	scrollNav = 0;

var pageInit = {
		init: function() {
			win_width = $(window).width();
			win_height = $(window).height();
			if(win_width <= 1200) {
				isMobile = true;
				atH = 54;
			} else if(win_width > 1200) {
				isMobile = false;
				atH = 86;
				menu.close();
			};
		},
		setImgMax: function(img, imgW, imgH, tW, tH) {
			var tWidth = tW || win_width;
			var tHeight = tH || win_height;
			var coe = imgH / imgW;
			var coe2 = tHeight / tWidth;
			if(coe < coe2) {
				var imgWidth = tHeight / coe;
				img.css({
					height: tHeight,
					width: imgWidth,
					left: -(imgWidth - tWidth) / 2,
					top: 0
				});
			} else {
				var imgHeight = tWidth * coe;
				img.css({
					height: imgHeight,
					width: tWidth,
					left: 0,
					top: -(imgHeight - tHeight) / 2
				});
			};
		},
		setScroll: function(anchorCur) {
			if(jQuery(anchorCur).length >= 1) {
				jQuery("html,body").animate({
					scrollTop: jQuery(anchorCur).offset().top - atH
				}, 0);
			}
		},
		setErmbox: function(obj, title) {
			obj.click(function() {
				var str = '<div class="ermsblack"><div class="ermSBox"><div class="img"><img src="' + obj.attr("data-img") +
					'"/></div><div class="t">' + title + '</div></div></div>';
				$("body").append(str);
				jQuery(".ermsblack").fadeIn();
				jQuery(".ermSBox").animate({
					marginTop: "-132"
				}, 400);
				$(".ermSBox .close").click(function() {
					$(".ermsblack").remove();
				});
				jQuery(".ermsblack").click(function() {
					$(".ermsblack").remove();
				});
				return false;
			})
		},
		setSplit: function(el) {
			var n = el;
			for(var e = 0, t = n.length; e < t; e++) {
				var a = n[e],
					r = a.textContent.trim();
				a.innerHTML = "";
				i(a, r)
			}

			function i(n, e) {
				for(var t in e) {
					var a = document.createElement("span");
					a.innerHTML = e[t] === " " ? "&nbsp;" : e[t];
					n.appendChild(a);
				}
			}
		},
		setTimeDelay: function(el, time, delay, reverse) {
			var _span = el;
			_span.each(function(i) {
				var _i = $(this).find('span');
				_i.each(function(j) {
					if(reverse) {
						j = _i.length - j - 1;
					}
					$(this).css({
						'animation-delay': delay + time * j + 'ms',
						'-webkit-animation-delay': delay + time * j + 'ms'
					})
				})
			})
		},
		showbox: function(htmlAddress) {
			$.ajax({
				url: htmlAddress,
				dataType: "html",
				success: function(data) {
					if(data == "" || data == null) {
						return;
					} else {
						if(jQuery(".sm-content").length >= 1) {
							jQuery('html').removeClass('sm-show');
							jQuery('.sm-content').remove();
						};
						$('.sm-modal .vertical-inner').append(data);
						$("html").addClass("sm-showb");
						setTimeout(function() {
							$("html").addClass("sm-show");
						}, 50);
						jQuery('.sm-close').bind('click', function(e) {
							jQuery('html').removeClass('sm-show');
							setTimeout(function() {
								$("html").removeClass("sm-showb");
								jQuery('.sm-content').remove();
							}, 400);
						});
						jQuery('.sm-modal .vertical-inner').bind('click', function(e) {
							if($(e.target).hasClass('vertical-inner')) {
								jQuery('html').removeClass('sm-show');
								setTimeout(function() {
									$("html").removeClass("sm-showb");
									jQuery('.sm-content').remove();
								}, 400);
							}
						});
					}
				},
				error: function(XMLHttpRequest, textStatus, errorThrown) {
					jQuery('html').removeClass('sm-show');
					setTimeout(function() {
						$("html").removeClass("sm-showb");
						jQuery('.sm-content').remove();
					}, 400);
				}
			});
		},
		pbanner: function() {}
	},
	nav = {
		init: function() {}
	},
	menu = {
		init: function() {
			jQuery(".menu-handler").click(function() {
				if(navItem == 0) {
					jQuery(this).addClass("active");
					jQuery("html").addClass("menuOpen");
					navItem = 1;
				} else {
					jQuery(this).removeClass("active");
					jQuery("html").removeClass("menuOpen");
					navItem = 0;
				}
			});
			$(document).on("click", ".menuMoblie .nav-link", function(e) {
				var mnavcur = $(this);
				var mnavbox = $(this).parents("li");
				if(mnavbox.find(".subnav").length > 0) {
					if(mnavbox.hasClass("cur")) {
						mnavbox.find(".subnav").stop(false, false).slideUp();
						mnavbox.removeClass("cur");
					} else {
						jQuery(".menuMoblie li").removeClass("cur");
						jQuery(".subnav").stop(false, false).slideUp();
						mnavbox.find(".subnav").stop(false, false).slideDown();
						mnavbox.addClass("cur");
						e.preventDefault();
					}
				}
			});
			$(document).on("click", ".menuMoblie a", function(e) {
				var $this = jQuery(this);
				var hash = $this.attr("href").split("#")[1];
				if(hash && jQuery("#" + hash).length >= 1) {
					e.preventDefault();
					jQuery("html,body").animate({
						scrollTop: jQuery("#" + hash).offset().top - atH
					}, 0);
					menu.close();
				}
			});
			$(".pusher-black").click(function() {
				if(navItem == 1) {
					menu.close();
				};
			});
		},
		close: function() {
			$menuBtn.removeClass("active");
			jQuery("html").removeClass("menuOpen");
			navItem = 0;
		}
	},
	pbanner = {
		init: function() {}
	},
	pageNav = {
		init: function() {
			jQuery(".insides-menu a").click(function(e) {
				var $this = jQuery(this);
				var hash = $this.attr("href").split("#")[1];
				if(hash && jQuery("#" + hash).length >= 1) {
					e.preventDefault();
					jQuery("html,body").animate({
						scrollTop: jQuery("#" + hash).offset().top - atH
					}, 600, 'easeInOutExpo');
				}
			});
		}
	};
jQuery(window).resize(function() {
	pageInit.init();
	pbanner.init();
});
pageInit.init();
$(document).ready(function() {
	nav.init();
	menu.init();
	pbanner.init();
	pageNav.init();
	pageInit.setErmbox(jQuery('.ermItem'), "扫描此二维码关注我们");
});
$(window).on('load', function() {
	var head_height = $(".header").height();
	var hash = location.href.split("#")[1];
	if(hash) {
		jQuery("html,body").animate({
			scrollTop: jQuery("#" + hash).offset().top - head_height
		}, 600);
	}
});

// 头部
var index_head = $(".yj-bot li.active").index();
var length_ = $(".yj-bot li.active").length;
$(".yj-bot li").hover(function() {
	var yb_index = $(this).index();
	$(this).addClass("active").siblings().removeClass('active');
}).mouseleave(function() {
	if(length_ > 0) {
		$(".yj-bot li").removeClass('active').eq(index_head).addClass('active');
	} else {
		$(".yj-bot li").removeClass('active');
	}
});
jQuery(function() {});
// 向上
$('.upjt').click(function() {
	$('html,body').animate({
		scrollTop: '0px'
	}, 800);
});
function footer3linkitembox(){
    let w = document.body.offsetWidth || document.body.clientWidth;
    let z = _$('.footer3linkitem');
    let a = _$('.footer3linkitembox');
    if(!z){return};
    if(w > 860){
        let h = [];
        for(let i = 0;i<a.length;i++){
            let b = a[i].querySelectorAll('li h6');
            let f;
            Array.prototype.forEach.call(b, function (item) {
                let d = [];
                let e;
                for (let k = 0; k < b.length; k++) {
                    d.push(b[k].offsetWidth);
                    e = Math.max.apply(null, d);
                    f = e * 3 + 30 * 3;
                }
            });
            a[i].style.left = z[i].offsetLeft + z[i].offsetWidth + 'px';
            a[i].style.top = z[i].offsetTop + z[i].offsetHeight + 8 + 'px';
            a[i].style.width = f + 'px';

            h.push(a[i].offsetHeight);
            a[i].style.height = 0;
            z[i].addEventListener('mouseover',function(){
                for(let i = 0;i<a.length;i++){
                    a[i].classList.remove('active');
                    a[i].style.height = 0;
                }
                a[i].classList.add('active');
                a[i].style.height = h[i] + 'px';
            });
            z[i].addEventListener('mouseout',function(){
                a[i].classList.remove('active');
                a[i].style.height = 0;
            });
        }
    }else{
        let h = [];
        for(let j = 0;j<a.length;j++){
            a[j].style.height = 'auto';
            h.push(getComputedStyle(a[j]).height);
            a[j].style.height = '0px';
        }
        let item = _$('.footer3linkitem h5');
        for(let i = 0;i<a.length;i++){
            item[i].addEventListener('click',function(){
                if(item[i].classList.contains('active')){
                    a[i].style.height = 0;
                    item[i].classList.remove('active');
                }else{
                    item[i].classList.add('active');
                    a[i].style.height = h[i];
                }

            });
        }
    }
};
footer3linkitembox();
