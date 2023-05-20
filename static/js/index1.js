console.log("%c :)","font-size:16px")
/*
 * @Author: Chin 
 * @Date: 2020-03-31 16:56:09 
 * @Last Modified by: feelChin
 * @Last Modified time: 2021-04-12 10:40:40
 */
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

// $('.comeback').click(function(){
//     $('html , body').animate({scrollTop: 0},800);
// });

// $('.counter').countUp({
//     delay: 100,
//     time: 2300
// });

// data-stellar-background-ratio="0.5" 
// $.stellar({
//     horizontalScrolling: false,
//     responsive: true,
// });

// $('.comesback').click(function(){
//     $('html , body').animate({scrollTop: 0},800);
// });

// $('#aclick3').click(function(){
//     $('html,body').animate({scrollTop: $('#a3').offset().top - $('.zhanwei').height()},500);
// });

function zhanwei(){
    let a = _('header');
    let b = _('.zhanwei');
    if (!b) {return};
    b.style.height = a.offsetHeight + 'px';
};
function yqlj(){
    let a = _('.yqlj');
    let b = _('.yqlj ul');
    if(!a){return};
    a.addEventListener(clickEvent,function(){
        b.classList.add('active');
    });
    document.body.addEventListener(clickEvent,function(){
        b.classList.remove('active');
    },true);
};
function culture(){
    let indexs = 999;
    let w = window.screen.width;
    const culture = _('.culture');
    const items = _$('.culture .item');
    if (!items) {return};
    if (w> 1024) {
        for(let i =0;i<items.length;i++){
            items[i].index = i; 
            items[i].onmouseover = function Updatepan() {
                if(indexs == this.index){
                    setTimeout(function(i){
                        items[i].classList.remove('active');
                    },100,this.index)
                    return
                }
                if(indexs !== this.index){
                    for(let i = 0;i<items.length;i++){
                        items[i].classList.remove('active');
                    }
                    setTimeout(function(i){
                        indexs = i;
                        items[i].classList.add('active');
                    },100,this.index)
                }
            }
            culture.onmouseout = function(){
                for(let i = 0;i<items.length;i++){
                    items[i].classList.remove('active');
                }
            }
        };
    }else{
        return
    };
};
function follow_nav(){
    let nav = _$('.subnavbody > li');
    let nav_item = _$('.subnavbody > li a');
    let follow = _('.follow');
    let nav_active = _('.subnavbody > li.active');
    let nav_active_h = _('.subnavbody > li.active a');
    if(!follow){
        return
    }
    follow.style.width = nav_active_h.offsetWidth + 'px';
    follow.style.left = nav_active.offsetLeft + nav_active_h.offsetLeft + 'px';
    for(let i = 0;i<nav.length;i++){
        nav[i].index = i;
        nav[i].onmouseover = function(){
            follow.style.width =nav_item[this.index].offsetWidth + 'px';
            follow.style.left=  nav_item[this.index].offsetLeft +  nav[this.index].offsetLeft + 'px';
        }
        nav[i].onmouseout = function(){
            follow.style.width = nav_active_h.offsetWidth + 'px';
            follow.style.left = nav_active.offsetLeft + nav_active_h.offsetLeft + 'px';
        }
    }
};
function photoActives(){
    let photoActives = _$('.photoActives');
    let section = document.createElement('section');
    section.classList.add('photoActive');
    if(!photoActives){
        return
    }
    for(let i = 0 ;i < photoActives.length; i++){
        photoActives[i].appendChild(section.cloneNode());
    }
};
function wechat_component(){
    let qrCode = _$('.wechatClick'),
        wechat = _('.wechat');
    if(!wechat){return}
    for(let i =0;i< qrCode.length;i++){
        qrCode[i].addEventListener(clickEvent,function(e){
            e.preventDefault();
            wechat.classList.add('active');
            document.documentElement.style.overflowY='hidden';
        });
    };
    wechat.addEventListener(clickEvent,function(){
        wechat.classList.remove('active');
        document.documentElement.style.overflowY='scroll';
    });       
};
function mobileMenu(){
    let a = _('.mobileMenuBox');
    let b = _('.mobileNav');
    b.style.display = 'block';
    let isOpen = true;
    a.addEventListener(clickEvent,function(){
        if (isOpen == true) {
            a.classList.add('active');
            b.classList.add('active');
            document.documentElement.style.overflowY='hidden';
            isOpen = false;
        }else{
            a.classList.remove('active');
            b.classList.remove('active');
            document.documentElement.style.overflowY='scroll';  
            isOpen = true;
        };
        // document.addEventListener("touchmove", function() { 
        //     if(this.isOpen ===true){
        //         event.preventDefault();
        //     }else{
        //         return true
        //     }
        // }, {passive: false});
    });
};
function chinatextlist() {
    Array.prototype.forEach.call(_$('.chinalist'), function (item) {
        let Arrays = item.innerHTML.replace(/<br>/g, "\n").replace(/&amp;/g, "&").split("");  
        // .replace(/\s*/g, "") 去掉空格
        item.innerHTML = '';
        let delays = 300;
        Array.prototype.forEach.call(Arrays,function(letter, i) {
            let span = document.createElement("span");
            let br = document.createElement("br");
            if(letter.indexOf("\n") >= 0){
                item.appendChild(br);
                return
            }
            span.innerHTML = letter;
            delays += 100;
            span.style.animationDelay = delays + 'ms';
            // let random = Math.random();
            // span.style.animationDelay = delays * random + 'ms'; 随机延迟
            item.appendChild(span);
        });
    });
};
function uktextlist() {
    Array.prototype.forEach.call(_$('.uklist'), function (item) {
        let Arrays = item.innerHTML.replace(/<br>/g, "\n").replace(/&amp;/g, "&").split("");
        item.innerHTML = '';
        let delays = 300;
        Array.prototype.forEach.call(Arrays,function(letter, i) {
            let span = document.createElement("span");
            let br = document.createElement("br");
            span.innerHTML = letter;
            delays += 100;
            span.style.animationDelay = delays + 'ms';
            item.appendChild(span);
        });
    });
};
function autoHeightClick(){
    let height = [];
    let mobileNavitems = _$('.mobileNavitems');
    let items = _$('.mobileNavitems .item');
    let item = _$('.mobileNavitems ol');
    for(let j = 0;j<item.length;j++){
        item[j].style.height = 'auto';
        height.push(getComputedStyle(item[j]).height);
        item[j].style.height = '0px';
    }
    for(let i =0;i<items.length;i++){
        if(items[i].classList.contains('active')){
            item[i].style.height = height[i];
            items[i].classList.add('active');
            item[i].classList.add('active');
        }
        items[i].addEventListener(clickEvent,function(){
            if (item[i].style.height == '0px'){
                for(let i =0;i<item.length;i++){
                    item[i].style.height = 0;
                    items[i].classList.remove('active');
                    item[i].classList.remove('active');
                }
                item[i].style.height = height[i];
                items[i].classList.add('active');
                item[i].classList.add('active');
            }else{
                item[i].style.height = 0 ;
                items[i].classList.remove('active');
            }
        });
        item[i].addEventListener('click',function(){
            location.reload();
        });
    }
};
function itemAnimates(){
    let itemAnimates = _$(".itemAnimates");
    if(!itemAnimates){return}
    for (let i = 0; i < itemAnimates.length; i++) {
      let itemAnimate = itemAnimates[i].querySelectorAll('.itemAnimate');
      let delay = 0;
      for (let j = 0; j < itemAnimate.length; j++) {
          delay += 300;
          itemAnimate[j].style.animationDelay = delay + "ms";
      }
    }
};
function newspaper(){
    Array.prototype.forEach.call(_$('.newspaper table'), function(el) {
        let section = document.createElement('section');
        section.className = 'tablebox';
        el.parentNode.replaceChild(section, el);
        section.appendChild(el);
    });
    // Array.prototype.forEach.call(_$('.newspaper img'), function(el) {
    //     let section = document.createElement('section');
    //     section.className = 'photoActives';
    //     el.parentNode.replaceChild(section, el);
    //     section.appendChild(el);
    // });
};
function gotoweb(){
    let root = _('.root');
    let gotoweb = _$('.gotoweb');
    let gotowebSection = _('.gotowebSection');
    for(let i = 0;i<gotoweb.length;i++){
        gotoweb[i].index = i;
        gotoweb[i].addEventListener(clickEvent,function(e){
            e.preventDefault();
            root.classList.add('active');
            setTimeout(function(){
                root.classList.add('actives');
            },50);
            root.addEventListener('transitionend',function(){
                gotowebSection.classList.add('active');
            })
            gotowebSection.addEventListener('transitionend',tiaozhuang.bind(this,this.index));
        },false)
    };
    function tiaozhuang(index){
        window.location.href = gotoweb[index].href;
    };
};
function scrollAnimate() {
    const viewHeight =window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;    
    Array.prototype.forEach.call(_$('.flags'),function(slider){
        const top = slider.getBoundingClientRect().top;
        if (top + 100 <= viewHeight ) {
            slider.classList.add('flag');
        }
    });
    Array.prototype.forEach.call(_$('.X50'),function(slider){
        const top = slider.getBoundingClientRect().top;
        if (top + 100 <= viewHeight ) {
            slider.classList.add('X0');
        }
    });
    Array.prototype.forEach.call(_$('.Y100'),function(slider){
        const top = slider.getBoundingClientRect().top;
        if (top + 100 <= viewHeight ) {
            slider.classList.add('Y0');
        }
    });
    Array.prototype.forEach.call(_$('.Y50'),function(slider){
        const top = slider.getBoundingClientRect().top;
        if (top + 100 <= viewHeight ) {
            slider.classList.add('Y0');
        }
    });
    Array.prototype.forEach.call(_$('.Y30'),function(slider){
        const top = slider.getBoundingClientRect().top;
        if (top + 100 <= viewHeight ) {
            slider.classList.add('Y0');
        }
    });
    Array.prototype.forEach.call(_$('.X_50'),function(slider){
        const top = slider.getBoundingClientRect().top;
        if (top + 100 <= viewHeight ) {
            slider.classList.add('X0');
        }
    });
    Array.prototype.forEach.call(_$('.uklist'), function (item) {
        const top = item.getBoundingClientRect().top;
        if (top <= viewHeight) {
            item.classList.add("active");
        }
    });
    Array.prototype.forEach.call(_$('.chinalist'), function (item) {
        const top = item.getBoundingClientRect().top;
        if (top <= viewHeight) {
            item.classList.add("active");
        }
    });
    Array.prototype.forEach.call(_$('.photoActives'),function(slider){
        const top = slider.getBoundingClientRect().top;
        if (top + 100 <= viewHeight ) {
            slider.classList.add('reset_photoActive');
        }
    });
    Array.prototype.forEach.call(_$('.itemAnimates'),function(slider){
        const top = slider.getBoundingClientRect().top;
        if (top + 100 <= viewHeight ) {
            slider.classList.add('animates');
        }
    });
    Array.prototype.forEach.call(_$('.opacitys'),function(slider){
        const top = slider.getBoundingClientRect().top;
        if (top + 100 <= viewHeight ) {
            slider.classList.add('reset_opacitys');
        }
    });
};
function headerli(){
    let a = _$('.headerlink li'),
        b = _('.headerlink li.active'),
        c = _$('.headerlink li .linkitems');
    for(let i =0;i<a.length;i++){
        a[i].index = i;
        a[i].onmouseover = function(){
            for(let i =0;i<a.length;i++){
                a[i].classList.remove('active');
            }
            a[this.index].classList.add('active');
            c[this.index].classList.add('active');
        }
        a[i].onmouseout = function(){
            for(let i =0;i<a.length;i++){
                a[i].classList.remove('active');
                c[i].classList.remove('active');
            }
            if(b){
                b.classList.add('active');
            }
        }
    }
};
function subnavbody(){
    let a = _$('.subnavbody li'),
        b = _('.subnavbody li.active'),
        c = _('.subnavbody');
    if(!c){
        return
    }
    c.scrollLeft = b.offsetLeft;
    for(let i =0;i<a.length;i++){
        a[i].index = i;
        a[i].onmouseover = function(){
            for(let i =0;i<a.length;i++){
                a[i].classList.remove('active');
            }
            a[this.index].classList.add('active');
        }
        a[i].onmouseout = function(){
            for(let i =0;i<a.length;i++){
                a[i].classList.remove('active');
            }
            if(b){
                b.classList.add('active');
            }
        }
    }
};


function bannerimg() {
    if(!_('.bannerimg img')){
        return
    }
    let a = _('.bannerimg img'),
        w = window.screen.width;
        
    if (w >= 1024) {
        a.style.width = '100%';
        a.style.height = 'auto';
    }
    if (w <= 1024) {
        a.style.width = 'auto';
        a.style.height = '300px';
    }
    if (w <= 640) {
        a.style.width = 'auto';
        a.style.height = '180px';
    }
    window.addEventListener('scroll', function () {
        let top = document.body.scrollTop || document.documentElement.scrollTop;
        a.style.transform = 'translate(-50%,' + top / 2.2 + 'px)';
    });
};
function subnavbodyfxied(){
    if(!_('.subnavbody')){return}
    let a = _('.subnavbody'),
        c = _('.subnavHead'),
        y = window.scrollY,
        t = c.offsetHeight - a.offsetHeight,
        top = a.getBoundingClientRect().top;
    if(top <=0 ){
        a.style.position = 'fixed';
        a.style.top = 0 + 'px';
        a.classList.add('active');
    }
    if(y <= t){
        a.style.position = 'absolute';
        a.style.top =  'initial';
        a.classList.remove('active');
    }
};
function randomdots(){
    let root = _$('.randomdots');
    if(!root){
        return
    }
    Array.prototype.forEach.call(root, function(el) {
        let a = document.createElement('div');
        a.className = 'randomdot';
        el.appendChild(a);
        el.addEventListener('mouseenter',function(event){
            a.style.left = event.offsetX + 'px';
            a.style.top = event.offsetY + 'px';
            setTimeout(function(){
                a.classList.add('active');
            },10)
        });
        el.addEventListener('mouseleave',function(event){
            a.classList.remove('active');
        });
    });
};

function zoomjs(){
    let a = document.querySelectorAll('.smallbox'),
    b = document.querySelectorAll('.smallbox_mark'),
    c = document.querySelectorAll('.bigbox'),
    d = document.querySelectorAll('.bigbox img');
    if(w <= 750){
        return
    }
    for(let i = 0;i<a.length;i++){
        a[i].index = i;
        a[i].addEventListener('mouseover',function(){
            b[i].classList.add('active');
            c[i].classList.add('active');
        }); 
        a[i].addEventListener('mouseout',function(){
            b[i].classList.remove('active');
            c[i].classList.remove('active');
        });
        a[i].addEventListener('mousemove',function(e){
            let left = e.offsetX - b[this.index].offsetWidth / 2,
                top = e.offsetY - b[this.index].offsetHeight / 2,
                w = a[this.index].offsetWidth - b[this.index].offsetWidth,
                h = a[this.index].offsetHeight - b[this.index].offsetHeight,
                bigw = d[this.index].offsetWidth - c[this.index].offsetWidth,
                bigh = d[this.index].offsetHeight - c[this.index].offsetHeight;
            if (left < 0) {
                left = 0;
            } else if (left > w) {
                left = w;
            }
            if (top < 0) {
                top = 0;
            } else if (top > h) {
                top = h;
            }
            b[this.index].style.left = left + "px"; 
            b[this.index].style.top = top + "px";
            //图片移动
            let X = left / w;
            let Y = top / h;
            d[this.index].style.left = - X * bigw + "px";
            d[this.index].style.top = - Y * bigh + "px";
        });
    };
};

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
            item[i].addEventListener(clickEvent,function(){
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

function subnavbodybox(){
    let a = _('.subnavbodybox'),
        b = _('header'),
        c = _('.subnavHead .bannerimg img');
        if(!a) return
    a.style.top = b.offsetHeight + c.offsetHeight - a.offsetHeight + 'px';
};

function headerindex2bg(){
    if(window.pageYOffset > 0){
        _('header').classList.add('active');
    }else{
        _('header').classList.remove('active');
    }
};
headerindex2bg();

function bgimgmb(issues){
    if(!_('.tformybox')){
        return
    }
    let arr = 0;
    if(!issues){
        issues = 0;
    }else{
        let str = String(issues);
        let num = str.replace(/px/g, "");
        arr = Number(num);
    }
    let a = _('.bgimgmb'),
        b = _('.tformybox'),
        c = _('.bgimg'),
        d = b.offsetHeight - c.offsetHeight + arr + 20 + 'px',
        e = _('.bgimgbox');
    e.style.height = getComputedStyle(b).paddingBottom;
    a.style.background = "linear-gradient(to bottom,#F5F5F5 " + d + ",transparent 100%)";
};

function ads(){
    if(w <= 1024){
        let div = document.createElement('div');
        div.className = 'pla';
        let img = document.createElement('img');
        if(_('.xiaoxun img')){
            img.src = _('.xiaoxun img').getAttribute('src');
            div.appendChild(img);
            insertAfter(div,_('.zhanwei'));
        }

        function insertAfter(newElement,targetElement) {
            var parent = targetElement.parentNode;
             if (parent.lastChild == targetElement) {// 如果最后的节点是目标元素，则直接添加。因为默认是最后
              parent.appendChild(newElement);
             } else {
              parent.insertBefore(newElement,targetElement.nextSibling);//如果不是，则插入在目标元素的下一个兄弟节点的前面。也就是目标元素的后面。
             }
          }
    }
}
ads();

bgimgmb();
zhanwei();//头部占位
headerli(); //一级导航
subnavbody(); //二级导航
// subnavbodyfxied() //二级导航滚动固定定位
bannerimg(); //二级banner假定位
newspaper(); //文章创建效果之类
chinatextlist(); //中文字分割
uktextlist(); //英文字分割
// yqlj();//底部友情链接
randomdots() //鼠标位置圆形变色
// culture();//鼠标移上去图片flex放大其他变小
// follow_nav();//鼠标移动导航条跟随
// wechat_component();//点击微信图标弹出二维码
photoActives();//给img添加动效 配合滚动使用
mobileMenu(); //移动端按钮弹出
autoHeightClick(); //自动高度
// zoomjs() 图片放大镜
// itemAnimates(); //对多个项目进行动画延迟处理
// gotoweb(); //跳转链接时执行动画
scrollAnimate();//滚动到可视区域出现效果

window.onload = function(){
    // subnavbodyfxied();
    subnavbodybox();
};

window.addEventListener('scroll',function(){
    scrollAnimate();
    headerindex2bg();
});
window.addEventListener('resize',function () {
    w = document.body.offsetWidth;
    h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;    
    bannerimg();
    zhanwei();
    subnavbodybox();
    bgimgmb();
    // subnavbodyfxied()
});