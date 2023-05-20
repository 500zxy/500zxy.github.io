document.write('<div id="21a34cf9-f287-4be6-b337-d5d1f64c20a8"  style="position:absolute;z-index:999999"><a href="https://www.ncss.cn/" target="_blank"><img alt="" src="https://www.cqcvc.edu.cn/Uploadfiles/Picture/2022-5-6/2022561727165321.png" height="170" width="350" border="0" /></a><span class="iconfont" id="close-dock"  onclick="closeDocks()">&#xe689;</span></div>')




$(document).ready(function(){
$(window).scroll(function (){
var offsetTop = $(window).scrollTop() + 80 +"px";
$("#21a34cf9-f287-4be6-b337-d5d1f64c20a8").animate({top : offsetTop },{ duration:100 , queue:false  });
}); 
});  


          //new AdMove('21a34cf9-f287-4be6-b337-d5d1f64c20a8').Run();
function closeDocks(){jQuery('#21a34cf9-f287-4be6-b337-d5d1f64c20a8').remove();} 