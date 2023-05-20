var bLeft = false;
function change()
{
			recreate();
}

function OnChangePlace()
{
	if(bLeft == true)
	{
		document.getElementsByClassName('optCon')[0].style.right = 0;
		document.getElementsByClassName('optCon')[0].style.left = 'initial';
	}
	else
	{
		document.getElementsByClassName('optCon')[0].style.left = 0;
		document.getElementsByClassName('optCon')[0].style.right = 'initial';
	}
	bLeft = !bLeft;
}
function hackie8()
{
	
	if  (!document.getElementsByClassName) {
		 document.getElementsByClassName =  function  (className, element) {
			 var  children = (element || document).getElementsByTagName( '*' );
			 var  elements =  new  Array();
			 for  ( var  i = 0; i < children.length; i++) {
				 var  child = children[i];
				 var  classNames = child.className.split( ' ' );
				 for  ( var  j = 0; j < classNames.length; j++) {
					 if  (classNames[j] == className) {
						 elements.push(child);
						 break ;
					 }
				 }
			 }
			 return  elements;
		 };
	}

}
function recreate()
{
	hackie8()
	var container = getCotainer(document.getElementById('text1').value);
	if(container == null)
	{
		alert("指定容器不存在");
		return;
	}
	var options1 ={
	   container: document.getElementById('text1').value,
	   position: document.getElementById('text2').value, // 定位方式 absolute为浮动，relative在文档流中占空间
	   top: document.getElementById('text3').value, // 位置
	   bottom: document.getElementById('text4').value, // 位置,可以不配置
	   left: document.getElementById('text5').value, // 位置
	   right: document.getElementById('text6').value,// 位置,可以不配置
	   width:document.getElementById('text7').value, //大小
	   height: document.getElementById('text8').value,
	   front: document.getElementById('text12').value ,// dom结构中div位置，默认前置，false为后置
	   subject: document.getElementById('text10').value,
	}
	var con = options1.container.replace(/(^\s*)|(\s*$)/g, "")
	var suf = con.charAt(0)
	
	if(document.getElementsByClassName('d_search_box')[0]){
	    var preParent =document.getElementsByClassName('d_search_box')[0].parentNode
		if(suf.indexOf(['.','#']<0)){
			preParent.removeChild(document.getElementsByClassName('d_search_box')[0])
		}
	}
	var activeoOpt = window.searchBoxD(options1)
	
	var activeFrag = "var options2 ={</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;container: '"+activeoOpt.container+"',</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; position: '"+activeoOpt.position+"',</br>"+
		   "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; top: "+activeoOpt.top+",</br>"+
		   "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; left: "+activeoOpt.left+",</br>"+
		   "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; width: "+activeoOpt.width+",</br>"+
		   "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; height: "+activeoOpt.height+",</br>"+
		   "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; subject: '"+activeoOpt.subject+"',</br>"+
		  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; front: "+activeoOpt.front+",</br>"+
		"}</br>window.searchBoxD(options2)"
	
	document.getElementById('code').innerHTML = activeFrag
}
 
        // 动态插入 CSS 代码
		 function dynamInsertCss(classStr) {
			 // IE 浏览器
			 if (document.all) {
				 var styleSheet = document.createStyleSheet("");
				 styleSheet.cssText = classStr;
			 } else {
				 var styleDom = document.createElement('style');
				 styleDom.type = 'text/css';
				 styleDom.innerHTML = classStr;
				 document.getElementsByTagName('HEAD').item(0).appendChild(styleDom)
			 }
		 }
		 
		function insetCss () {
			 
			var css_str=".optCon{padding: 20px;width:300px;position: absolute; right: 0px;top: 0px;  background: beige;z-index: 999;} input, select{-webkit-appearance:auto;border:inherit;background:white}.acitveCode {border: 1px solid #ccc; margin-top: 15px;padding: 15px;}";
			// 调用
		    dynamInsertCss(css_str);

			//style.id="search_box_Style2";
			//document.getElementsByTagName("HEAD").item(0).appendChild(style); 
		}
		 
		
		insetCss ();
		var generatedDiv = "<div class='optCon'><button onclick='OnChangePlace()'>把我挪个地方</button><p>容器 class: .xxx, id: #xxx, tag标签: body...</p><input type='text' id='text1' value='body' /><button onclick='recreate()'>确定</button><div style='margin:20px 0 0 0;'><span>定位方式：</span><select id='text2' onchange='change()'><option value='absolute'>不占据空间</option><option value='relative'>占据空间</option></select></div><p>相对位置1：</p><div>     上：<input type='range' min='0' max='500' value='30' style='width:200px;' oninput='change()' onchange='change()' id='text3' /></div><div>     左：<input type='range' min='0' max='1200' value='30' style='width:200px;' oninput='change()' onchange='change()' id='text5' /></div><div>     下：<input type='range' min='0' max='100' value='30' style='width:200px;' oninput='change()' onchange='change()' id='text4' /></div><div>     右：<input type='range' min='0' max='100' value='30' style='width:100px;' oninput='change()' onchange='change()' id='text6' /></div><div><br /><span>相对位置2:</span><select id='text12' onchange='change()'><option value='true'>放在最前面(占据空间时有效)</option><option value='false'>放在最后面(占据空间时有效)</option></select></div><br /><div><span>大小:</span><div>      宽：<input type='range' min='0' max='1000' value='300' style='width:200px;' oninput='change()' onchange='change()' id='text7' /></div><div>      高：<input type='range' min='0' max='100' value='30' style='width:200px;' oninput='change()' onchange='change()' id='text8' /></div></div><br /><div><span>产品类型:</span><select id='text10' onchange='change()'><option value=''>全球学术快报</option><option value='WKDBCHKD'>全球医学快报</option></select><br /><div><div style='display:none;'><p>跳转链接参数<br />korder默认SU，subject默认WKDBCHKD， ddbcode默认SCDB</p> korder：<input type='text' id='text9' value='SU' style='width:30px;' /> subject：<input type='text' id='text10' value='WKDBCHKD' style='width:30px;' /> ddbcode：<input type='text' id='text11' value='SCDB' style='width:30px;' /></div><input type='button' id='button' value='点击生成搜索框' style='display:none;height: 35px; font-size: 15px;margin-top: 30px' /></div></div><p>以下代码自动生成：</p><div class='acitveCode' id='code'>     var options2 ={<br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;container: '.con2',<br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; position: 'relative',<br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; top: 30,<br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; left: 50,<br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; width: 300,<br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; height: 35,<br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; subject: 'WKDBCHKD',<br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; front: false,<br /> }<br /> window.searchBoxD(options2)</div></div> ";
		//获取父节点
		function getCotainer(str) {
			str = str.replace(/(^\s*)|(\s*$)/g, "")
			var suffix = str.charAt(0);
			var newname = str.split(suffix)[1];
			var wrapper;
			switch (suffix) {
	　　　　　　case '#':
	　　　　　　　　wrapper = document.getElementById(newname);
	　　　　　　break;
	　　　　　　case '.':
	　　　　　　　　wrapper = document.getElementsByClassName(newname)[0];
	　　　　　　break;
	　　　　　　default:
	　　　　　　　　wrapper = document.getElementsByTagName(str)[0];
				break;
				
			}
			return wrapper
		}
		
		window.onload = function(){
				if(window.location.href.indexOf("show_search_tool") >= 0)
				 {
					 var divCreate = document.createElement("div"); 
					divCreate.innerHTML = generatedDiv;
					document.body.appendChild(divCreate);
					recreate();
				 }
		}
	
		 
		
		 
		 
		 
 