;(function(){
	var index= 0;
	var searchBox = function (option) {
	
		var that = this;
		var defaults ={
			container: '',
			position:'relative',
			top: 0,
			left:0,
			bottom: 0,
			right: 0,
			width:300,
			height: 35,
			front: true,
			korder: 'SU', 
		    subject: '',
		    dbcode: 'SCDB',
			placeholder:'全球学术快报'
		}
		var options = {};
		var options = extend(defaults, option);
		options.position = options.position.toLowerCase();
		//处理成小写
		
		insetCss();
		var par = getCotainer(options.container);
		setDom(par);
		
		//设置位置
		function setPosition (dom, parent) {
			var _dom = document.getElementById("d_search_box_" + index);
			if (options.position == 'relative') {
				_dom.style.position = options.position;
				_dom.style.marginTop = options.top;
				_dom.style.marginLeft = options.left;
				_dom.style.marginRight = options.right;
				_dom.style.marginBottom = options.bottom;
				
				//$('#'+dom).css({'position': options.position, 'margin-top': options.top, 'margin-left': options.left, 'margin-bottom': options.bototm, 'marign-right': options.bottom});
			} else {
				// var _way = $(parent).css('position') 
				var _way = getCss(parent, 'position')
				//添加indexOf方法
				if (!Array.indexOf) {
					Array.prototype.indexOf = function (obj) {
						for(var i = 0;i < this.length;i++){
							if (this[i] == obj) {
								return i;
							}
						}
						return -1;
					}
				}
				if (['relative','absolute'].indexOf(_way) <0) {
					parent.style.position = 'relative'
				}
				_dom.style.position = options.position;
				_dom.style.top = options.top + "px";
				_dom.style.left = options.left + "px";
				_dom.style.right = options.right + "px";
				_dom.style.bottom = options.bottom + "px";
				// $('#'+dom).css({'position': options.position, 'top': options.top, 'left': options.left, 'bottom': options.bototm, 'right': options.bottom})
			}

		}
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
		
		// extend 
		function extend() {
			var length = arguments.length;
			var target = arguments[0] || {};
			if (typeof target!="object" && typeof target != "function") {
				target = {};
			}
			if (length == 1) {
				target = this;
				i--;
			}
			for (var i = 1; i < length; i++) { 
				var source = arguments[i]; 
				for (var key in source) { 
					if (Object.prototype.hasOwnProperty.call(source, key)) { 
						target[key] = source[key]; 
					} 
				} 
			}
			return target; 
		}
		//获取属性
		function getCss(curElement, attr) {
			var reg = null;
			var val = null;
			if (window.getComputedStyle) {
				val = window.getComputedStyle(curElement, null)[attr];
			}
			else {
				val = curElement.currentStyle[attr];
			}
			//reg：判断得到的属性值是否带有px，pt，rem，em等值，如果有则去掉只保留数字。
			reg = /^(-?\d+(\.\d+)?)(px|pt|rem|em)?$/;
			return reg.test(val) ? parseFloat(val) : val;
		}
		
		//toLowerCase
		function toLower () {
			//toLowerCase
		}
		function hackie8(obj)
		{
			
			if  (!obj.getElementsByClassName) {
				 obj.getElementsByClassName =  function  (className, element) {
					 var  children = (element || obj).getElementsByTagName( '*' );
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
		//添加事件
		function addEvent () {
			var _btn = document.getElementById('d_search_btn_' + index)
			_btn.onclick = function(e) {
				var e= e || event;
				var target = e.target || e.srcElement;
				 
				if ( e && e.stopPropagation ) {
					e.preventDefault();
					e.stopPropagation();
				} else { 
					 
					window.event.cancelBubble = true;
				}
				hackie8(target.parentNode); 
				var val = target.parentNode.getElementsByClassName('d_search_txt')[0].value;
				var href = "https://whkbd.cnki.net/kns/DefaultResult/Index?dbcode="+options.dbcode+"&kw="+ val +"&korder="+ options.korder +"&subject=" + options.subject
				if(options.subject == '')
				{
					href = "https://kns.cnki.net/kns8/defaultresult/index?dbcode="+options.dbcode+"&kw="+ val
				}
				window.open(href)
				return false
			}
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
		//注入css
		function insetCss () {
			 
			var cssstr=".d_search_box{width: 300px;height: 35px;border: 1px solid #d2d2d2; background: #fff; z-index: 10;border-radius:6px}"+
			".d_search_box input{border: none;outline: none;-webkit-appearance: none;box-sizing:border-box;}"+
			".d_search_box .d_search_txt{float: left;width: 200px;height: 100%;padding: 0 15px;font-size: 14px;color: #333;background: transparent;}"+
			".d_search_box .d_search_btn{float: left;width: 100px;height: 100%;border: none;border-radius: 0 6px 6px 0;outline: none;cursor: pointer;border-left: 1px solid #d2d2d2;color: #fff; background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RUYyMjM1NzVCQUY2MTFFNzgwOUVGOTAyMjQ4QUUyNDEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RUYyMjM1NzZCQUY2MTFFNzgwOUVGOTAyMjQ4QUUyNDEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFRjIyMzU3M0JBRjYxMUU3ODA5RUY5MDIyNDhBRTI0MSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpFRjIyMzU3NEJBRjYxMUU3ODA5RUY5MDIyNDhBRTI0MSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PmLWRfMAAANuSURBVHjajFRdaB1FGD0zu3vnmrBJkAv1J8Fe24c+mZbU1j+kedKAqOAPKJSKxYKtb634or4UH/RNWn2qUJD4oGDbi+JPNRZqa0OrtCVtRUsr/hajvUlumuze3ZnPM3O9KQEfHJjd2Zn5zne+M2cWIoLrvV1zVkz3+/dfS7mWSX35nv/uyjkxfEJB52A7ecG+35hcfGLP8RyiNLtCvddh8waDZx+o3nnjQHQKy5ozYKwSsWGQLcotb300/9vuw47BBBZAqYg5LBwBLedW9mq8ubnn7Oi6ZIMCcjgYx4FWIJBr1wS69er+PNvzTR5mh3ottmysYLCWwIrC5PcFxs84tImeOOCTndXGxjXJkwJb8ZwUkhacK2Xi2wUZ2DYrfduuytOvz8qfM260U3uROjJ2ImbiVHGm77kZGdjalLW7mnJtoRDGLumpBRHe+bKElAVWpjH2vdBza61fHYfAlFzz2iknGB2Jh999xuQOGpdmHCa+syyfGgaNWMhfsw6NHywQaWzfFMP0SMvXT9qIIW1KZXw63x6+p1q9b1CDafHp6cyLmJFWWNNXmwV01PkYuV3zGbdD3SoKp0iNGaZBUsahSOtUlMi4OM15gmgdh33aaTKzCQNUkE17TFqCWVNvClEsgQx9Ci1JW0cgI8WiWXaEatcEetVNBTd7BgpfTYW5zBEthmp5BTrMqAOP2NM7+iNV5fqqFb7cjvcCUJIk1S1rvfEivPbFIi5NezmlQjeZ7kZHUb1nxo/k2eV5G9g/epc5G/TrAmmNfPuYecWb0FHgx9+Yx9RleVlD0do29Yb1hmucyGZ3vOfl0xgZjHH3mmQsmPLfprwHCpS1vR/k07s/pzI8ISUWY6sNHloX45emxZFzJY79AV8uPWNpE8GBl/q23rZCj3dZB6Bu2/dxJjsPtL2qDHFBu5InU1EmsK33afw051nFGEpLNHb1o35zrJaAmCQto9IkvCp/N+36/YeLrz+bWsSJKzQ/gx5cDTx1b29r03oMn7wgBx/bO3eH5f2r9yscejEFmakOI2rBs2wt3WcKHTRadsODpHS2NUdPl9kjb2fhpIdokoME0x2lPEhns1hntLjKdZAyDToEnznjHXT/cFz98PkbeE/b+HlOcP5iCfyfn5a/vCV/eI7v8O3K8J48vyCHjmXix/8IMACnKgIwgZZpYwAAAABJRU5ErkJggg==\");background-repeat:no-repeat;background-position:center}";
			dynamInsertCss(cssstr);
		}
		
		//形成检索框
		function setDom (ele) {
			index =index + 1;
			var fontSize,
			    buttonWidth,
			    inputWidth,
			    inputFont;
			if (options.width > 300){
			  fontSize = '15px';
			  inputFont = '15px';
			  buttonWidth= '64px';
			  inputWidth = options.width - 64
			}else {
			  fontSize = '14px';
			  inputFont = '14px';
			  buttonWidth= '32px'
			  inputWidth = options.width - 32
			}
			
			var frag = document.createElement('div')
			frag.setAttribute('id', 'd_search_box_' + index)
			frag.setAttribute('class', 'd_search_box')
			frag.style.width = options.width + 'px';
			frag.style.height = options.height + 'px';
			
			var frag2 = document.createElement('input');
			frag2.setAttribute('type', 'text');
			frag2.setAttribute('id',  'd_search_txt_' + index);
			frag2.setAttribute('class', 'd_search_txt');
			frag2.setAttribute('style', 'width:'+inputWidth +'px; font-size:' + inputFont);
			
			frag2.setAttribute('placeholder', '全球学术快报');
			if(options.subject == "WKDBCHKD")
				frag2.setAttribute('placeholder', '全球医学快报');
			frag.appendChild(frag2)
			
			var frag3 = document.createElement('input');
			frag3.setAttribute('type', 'button');
			frag3.setAttribute('id',  'd_search_btn_' + index);
			frag3.setAttribute('class', 'd_search_btn d_search_btn_' + index);
			frag3.setAttribute('value', '');
			frag3.setAttribute('style', 'width:'+ buttonWidth + '; font-size:'+fontSize);
		
			
			frag.appendChild(frag3);
			
			if (options.front== 'true' || options.front == true || options.front=='TRUE') {
				ele.insertBefore(frag, ele.childNodes[0])
			} else {
				ele.appendChild(frag);
			}
			// (options.front == true) && ele.insertBefore(frag, ele.childNodes[0]);
			// !(options.front == false) && ele.appendChild(frag);
			
			hackie8(document);
			setPosition('d_search_box_'+ index, ele);
			
			addEvent();
			
		}
		return options
	}
	
	window.searchBoxD = searchBox
	
})();