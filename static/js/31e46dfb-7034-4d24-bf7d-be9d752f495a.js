document.write('<div id="31e46dfb-7034-4d24-bf7d-be9d752f495a"  style="position:absolute;z-index:999999"><a href="https://cqcvc.jiuyeqiao.cn/" target="_blank"><img alt="" src="https://www.cqcvc.edu.cn/Uploadfiles/Picture/2022-4-27/20224271528597338.jpg" height="170" width="350" border="0" /></a><span class="iconfont" id="close-dock"  onclick="closeDock()">&#xe689;</span></div>')



$(document).ready(function(){
$(window).scroll(function (){
var offsetTop = $(window).scrollTop() + 320 +"px";
$("#31e46dfb-7034-4d24-bf7d-be9d752f495a").animate({top : offsetTop },{ duration:100 , queue:false });
}); 
});  



         // new AdMove('31e46dfb-7034-4d24-bf7d-be9d752f495a').Run();
function closeDock(){jQuery('#31e46dfb-7034-4d24-bf7d-be9d752f495a').remove();} 