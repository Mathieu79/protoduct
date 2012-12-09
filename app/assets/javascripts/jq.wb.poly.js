 /*
  *
  * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
  *
  */

jQuery.easing["jswing"]=jQuery.easing["swing"];jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(a,b,c,d,e){return jQuery.easing[jQuery.easing.def](a,b,c,d,e)},easeInQuad:function(a,b,c,d,e){return d*(b/=e)*b+c},easeOutQuad:function(a,b,c,d,e){return-d*(b/=e)*(b-2)+c},easeInOutQuad:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b+c;return-d/2*(--b*(b-2)-1)+c},easeInCubic:function(a,b,c,d,e){return d*(b/=e)*b*b+c},easeOutCubic:function(a,b,c,d,e){return d*((b=b/e-1)*b*b+1)+c},easeInOutCubic:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b+c;return d/2*((b-=2)*b*b+2)+c},easeInQuart:function(a,b,c,d,e){return d*(b/=e)*b*b*b+c},easeOutQuart:function(a,b,c,d,e){return-d*((b=b/e-1)*b*b*b-1)+c},easeInOutQuart:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b*b+c;return-d/2*((b-=2)*b*b*b-2)+c},easeInQuint:function(a,b,c,d,e){return d*(b/=e)*b*b*b*b+c},easeOutQuint:function(a,b,c,d,e){return d*((b=b/e-1)*b*b*b*b+1)+c},easeInOutQuint:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b*b*b+c;return d/2*((b-=2)*b*b*b*b+2)+c},easeInSine:function(a,b,c,d,e){return-d*Math.cos(b/e*(Math.PI/2))+d+c},easeOutSine:function(a,b,c,d,e){return d*Math.sin(b/e*(Math.PI/2))+c},easeInOutSine:function(a,b,c,d,e){return-d/2*(Math.cos(Math.PI*b/e)-1)+c},easeInExpo:function(a,b,c,d,e){return b==0?c:d*Math.pow(2,10*(b/e-1))+c},easeOutExpo:function(a,b,c,d,e){return b==e?c+d:d*(-Math.pow(2,-10*b/e)+1)+c},easeInOutExpo:function(a,b,c,d,e){if(b==0)return c;if(b==e)return c+d;if((b/=e/2)<1)return d/2*Math.pow(2,10*(b-1))+c;return d/2*(-Math.pow(2,-10*--b)+2)+c},easeInCirc:function(a,b,c,d,e){return-d*(Math.sqrt(1-(b/=e)*b)-1)+c},easeOutCirc:function(a,b,c,d,e){return d*Math.sqrt(1-(b=b/e-1)*b)+c},easeInOutCirc:function(a,b,c,d,e){if((b/=e/2)<1)return-d/2*(Math.sqrt(1-b*b)-1)+c;return d/2*(Math.sqrt(1-(b-=2)*b)+1)+c},easeInElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e)==1)return c+d;if(!g)g=e*.3;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return-(h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g))+c},easeOutElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e)==1)return c+d;if(!g)g=e*.3;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return h*Math.pow(2,-10*b)*Math.sin((b*e-f)*2*Math.PI/g)+d+c},easeInOutElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e/2)==2)return c+d;if(!g)g=e*.3*1.5;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);if(b<1)return-.5*h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)+c;return h*Math.pow(2,-10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)*.5+d+c},easeInBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;return d*(b/=e)*b*((f+1)*b-f)+c},easeOutBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;return d*((b=b/e-1)*b*((f+1)*b+f)+1)+c},easeInOutBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;if((b/=e/2)<1)return d/2*b*b*(((f*=1.525)+1)*b-f)+c;return d/2*((b-=2)*b*(((f*=1.525)+1)*b+f)+2)+c},easeInBounce:function(a,b,c,d,e){return d-jQuery.easing.easeOutBounce(a,e-b,0,d,e)+c},easeOutBounce:function(a,b,c,d,e){if((b/=e)<1/2.75){return d*7.5625*b*b+c}else if(b<2/2.75){return d*(7.5625*(b-=1.5/2.75)*b+.75)+c}else if(b<2.5/2.75){return d*(7.5625*(b-=2.25/2.75)*b+.9375)+c}else{return d*(7.5625*(b-=2.625/2.75)*b+.984375)+c}},easeInOutBounce:function(a,b,c,d,e){if(b<e/2)return jQuery.easing.easeInBounce(a,b*2,0,d,e)*.5+c;return jQuery.easing.easeOutBounce(a,b*2-e,0,d,e)*.5+d*.5+c}});

/*
jquery.animate-enhanced plugin v0.97
---
http://github.com/benbarnett/jQuery-Animate-Enhanced
http://benbarnett.net
@benpbarnett
*/
(function(b,I,J){function N(a,b,j,l,k,d,c,n,q){var p=!1,c=!0===c&&!0===n,b=b||{};b.original||(b.original={},p=!0);b.properties=b.properties||{};b.secondary=b.secondary||{};for(var n=b.meta,m=b.original,g=b.properties,O=b.secondary,B=r.length-1;0<=B;B--){var D=r[B]+"transition-property",E=r[B]+"transition-duration",e=r[B]+"transition-timing-function",j=c?r[B]+"transform":j;p&&(m[D]=a.css(D)||"",m[E]=a.css(E)||"",m[e]=a.css(e)||"");O[j]=c?(!0===q||!0===y&&!1!==q)&&K?"translate3d("+n.left+"px, "+n.top+
"px, 0)":"translate("+n.left+"px,"+n.top+"px)":d;g[D]=(g[D]?g[D]+",":"")+j;g[E]=(g[E]?g[E]+",":"")+l+"ms";g[e]=(g[e]?g[e]+",":"")+k}return b}function z(a){for(var b in a)return!1;return!0}function G(a){return parseFloat(a.replace(a.match(/\D+$/),""))}var P="top right bottom left opacity height width".split(" "),H=["top","right","bottom","left"],r=["-webkit-","-moz-","-o-",""],Q=["avoidTransforms","useTranslate3d","leaveTransforms"],R=/^([+-]=)?([\d+-.]+)(.*)$/,S=/([A-Z])/g,T={secondary:{},meta:{top:0,
right:0,bottom:0,left:0}},L=null,F=!1,A=(document.body||document.documentElement).style,M=void 0!==A.WebkitTransition||void 0!==A.MozTransition||void 0!==A.OTransition||void 0!==A.transition,K="WebKitCSSMatrix"in window&&"m11"in new WebKitCSSMatrix,y=K;b.expr&&b.expr.filters&&(L=b.expr.filters.animated,b.expr.filters.animated=function(a){return b(a).data("events")&&b(a).data("events")["webkitTransitionEnd oTransitionEnd transitionend"]?!0:L.call(this,a)});b.extend({toggle3DByDefault:function(){return y=
!y},toggleDisabledByDefault:function(){return F=!F}});b.fn.translation=function(){if(!this[0])return null;var a=window.getComputedStyle(this[0],null),b={x:0,y:0};if(a)for(var j=r.length-1;0<=j;j--){var l=a.getPropertyValue(r[j]+"transform");if(l&&/matrix/i.test(l)){a=l.replace(/^matrix\(/i,"").split(/, |\)$/g);b={x:parseInt(a[4],10),y:parseInt(a[5],10)};break}}return b};b.fn.animate=function(a,v,j,l){var a=a||{},k=!("undefined"!==typeof a.bottom||"undefined"!==typeof a.right),d=b.speed(v,j,l),c=this,
n=0,q=function(){n--;0===n&&"function"===typeof d.complete&&d.complete.apply(c,arguments)},p;if(!(p=!0===("undefined"!==typeof a.avoidCSSTransitions?a.avoidCSSTransitions:F)))if(!(p=!M))if(!(p=z(a))){var m;a:{for(m in a)if(("width"==m||"height"==m)&&("show"==a[m]||"hide"==a[m]||"toggle"==a[m])){m=!0;break a}m=!1}p=m||0>=d.duration||!0===b.fn.animate.defaults.avoidTransforms&&!1!==a.avoidTransforms}return p?I.apply(this,arguments):this[!0===d.queue?"queue":"each"](function(){var g=b(this),c=b.extend({},
d),l=function(c){var f=g.data("jQe")||{original:{}},e={};if(2==c.eventPhase){if(!0!==a.leaveTransforms){for(c=r.length-1;0<=c;c--)e[r[c]+"transform"]="";if(k&&"undefined"!==typeof f.meta)for(var c=0,d;d=H[c];++c)e[d]=f.meta[d+"_o"]+"px",b(this).css(d,e[d])}g.unbind("webkitTransitionEnd oTransitionEnd transitionend").css(f.original).css(e).data("jQe",null);"hide"===a.opacity&&g.css({display:"none",opacity:""});q.call(this)}},j={bounce:"cubic-bezier(0.0, 0.35, .5, 1.3)",linear:"linear",swing:"ease-in-out",
easeInQuad:"cubic-bezier(0.550, 0.085, 0.680, 0.530)",easeInCubic:"cubic-bezier(0.550, 0.055, 0.675, 0.190)",easeInQuart:"cubic-bezier(0.895, 0.030, 0.685, 0.220)",easeInQuint:"cubic-bezier(0.755, 0.050, 0.855, 0.060)",easeInSine:"cubic-bezier(0.470, 0.000, 0.745, 0.715)",easeInExpo:"cubic-bezier(0.950, 0.050, 0.795, 0.035)",easeInCirc:"cubic-bezier(0.600, 0.040, 0.980, 0.335)",easeInBack:"cubic-bezier(0.600, -0.280, 0.735, 0.045)",easeOutQuad:"cubic-bezier(0.250, 0.460, 0.450, 0.940)",easeOutCubic:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",
easeOutQuart:"cubic-bezier(0.165, 0.840, 0.440, 1.000)",easeOutQuint:"cubic-bezier(0.230, 1.000, 0.320, 1.000)",easeOutSine:"cubic-bezier(0.390, 0.575, 0.565, 1.000)",easeOutExpo:"cubic-bezier(0.190, 1.000, 0.220, 1.000)",easeOutCirc:"cubic-bezier(0.075, 0.820, 0.165, 1.000)",easeOutBack:"cubic-bezier(0.175, 0.885, 0.320, 1.275)",easeInOutQuad:"cubic-bezier(0.455, 0.030, 0.515, 0.955)",easeInOutCubic:"cubic-bezier(0.645, 0.045, 0.355, 1.000)",easeInOutQuart:"cubic-bezier(0.770, 0.000, 0.175, 1.000)",
easeInOutQuint:"cubic-bezier(0.860, 0.000, 0.070, 1.000)",easeInOutSine:"cubic-bezier(0.445, 0.050, 0.550, 0.950)",easeInOutExpo:"cubic-bezier(1.000, 0.000, 0.000, 1.000)",easeInOutCirc:"cubic-bezier(0.785, 0.135, 0.150, 0.860)",easeInOutBack:"cubic-bezier(0.680, -0.550, 0.265, 1.550)"},m={},j=j[c.easing||"swing"]?j[c.easing||"swing"]:c.easing||"swing",e;for(e in a)if(-1===b.inArray(e,Q)){var p=-1<b.inArray(e,H),h;var i=g,w=a[e],t=e,s=p&&!0!==a.avoidTransforms;if("d"==t)h=void 0;else{var f=R.exec(w);
h="auto"===i.css(t)?0:i.css(t);h="string"==typeof h?G(h):h;"string"==typeof w&&G(w);var s=!0===s?0:h,v=i.is(":hidden"),u=i.translation();"left"==t&&(s=parseInt(h,10)+u.x);"right"==t&&(s=parseInt(h,10)+u.x);"top"==t&&(s=parseInt(h,10)+u.y);"bottom"==t&&(s=parseInt(h,10)+u.y);!f&&"show"==w?(s=1,v&&i.css({display:"block",opacity:0})):!f&&"hide"==w&&(s=0);f?(i=parseFloat(f[2]),f[1]&&(i=("-="===f[1]?-1:1)*i+parseInt(s,10)),h=i):h=s}if(f=!0!==a.avoidTransforms){f=e;i=h;w=g;t=-1<b.inArray(f,P);if(("width"==
f||"height"==f||"opacity"==f)&&parseFloat(i)===parseFloat(w.css(f)))t=!1;f=t}if(f){f=g;i=e;w=c.duration;t=j;h=p&&!0===a.avoidTransforms?h+"px":h;var p=p&&!0!==a.avoidTransforms,s=k,v=!0===a.useTranslate3d,u=(u=f.data("jQe"))&&!z(u)?u:b.extend(!0,{},T),x=h;if(-1<b.inArray(i,H)){var C=u.meta,A=G(f.css(i))||0,y=i+"_o",x=h-A;C[i]=x;C[y]="auto"==f.css(i)?0+x:A+x||0;u.meta=C;s&&0===x&&(x=0-C[y],C[i]=x,C[y]=0)}f.data("jQe",N(f,u,i,w,t,x,p,s,v))}else m[e]=a[e]}g.unbind("webkitTransitionEnd oTransitionEnd transitionend");
if((e=g.data("jQe"))&&!z(e)&&!z(e.secondary)){n++;g.css(e.properties);var F=e.secondary;setTimeout(function(){g.bind("webkitTransitionEnd oTransitionEnd transitionend",l).css(F)})}else c.queue=!1;z(m)||(n++,I.apply(g,[m,{duration:c.duration,easing:b.easing[c.easing]?c.easing:b.easing.swing?"swing":"linear",complete:q,queue:c.queue}]));return!0})};b.fn.animate.defaults={};b.fn.stop=function(a,v,j){if(!M)return J.apply(this,[a,v]);a&&this.queue([]);this.each(function(){var l=b(this),k=l.data("jQe");
if(k&&!z(k)){var d,c={};if(v){if(c=k.secondary,!j&&void 0!==typeof k.meta.left_o||void 0!==typeof k.meta.top_o){c.left=void 0!==typeof k.meta.left_o?k.meta.left_o:"auto";c.top=void 0!==typeof k.meta.top_o?k.meta.top_o:"auto";for(d=r.length-1;0<=d;d--)c[r[d]+"transform"]=""}}else if(!z(k.secondary)){var n=window.getComputedStyle(l[0],null);if(n)for(var q in k.secondary)if(k.secondary.hasOwnProperty(q)&&(q=q.replace(S,"-$1").toLowerCase(),c[q]=n.getPropertyValue(q),!j&&/matrix/i.test(c[q]))){d=c[q].replace(/^matrix\(/i,
"").split(/, |\)$/g);c.left=parseFloat(d[4])+parseFloat(l.css("left"))+"px"||"auto";c.top=parseFloat(d[5])+parseFloat(l.css("top"))+"px"||"auto";for(d=r.length-1;0<=d;d--)c[r[d]+"transform"]=""}}l.unbind("webkitTransitionEnd oTransitionEnd transitionend");l.css(k.original).css(c).data("jQe",null)}else J.apply(l,[a,v])});return this}})(jQuery,jQuery.fn.animate,jQuery.fn.stop);

 /*******
 
 	***	Original function: 'jQuery Tooltip plugin 1.3' by Jörn Zaefferer ***
 	*** http://brandonaaron.net ***
 	*** Copyright (c) 2006 - 2008 Jörn Zaefferer
 	*** Dual licensed under the MIT and GPL licenses:
 			http://www.opensource.org/licenses/mit-license.php
 			http://www.gnu.org/licenses/gpl.html
 *****/
 
 ;(function($){var helper={},current,title,tID,IE=$.browser.msie&&/MSIE\s(5\.5|6\.)/.test(navigator.userAgent),track=false;$.tooltip={blocked:false,defaults:{delay:200,fade:false,showURL:true,extraClass:"",top:15,left:15,id:"tooltip"},block:function(){$.tooltip.blocked=!$.tooltip.blocked;}};$.fn.extend({tooltip:function(settings){settings=$.extend({},$.tooltip.defaults,settings);createHelper(settings);return this.each(function(){$.data(this,"tooltip",settings);this.tOpacity=helper.parent.css("opacity");this.tooltipText=this.title;$(this).removeAttr("title");this.alt="";}).mouseover(save).mouseout(hide).click(hide);},fixPNG:IE?function(){return this.each(function(){var image=$(this).css('backgroundImage');if(image.match(/^url\(["']?(.*\.png)["']?\)$/i)){image=RegExp.$1;$(this).css({'backgroundImage':'none','filter':"progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true, sizingMethod=crop, src='"+image+"')"}).each(function(){var position=$(this).css('position');if(position!='absolute'&&position!='relative')$(this).css('position','relative');});}});}:function(){return this;},unfixPNG:IE?function(){return this.each(function(){$(this).css({'filter':'',backgroundImage:''});});}:function(){return this;},hideWhenEmpty:function(){return this.each(function(){$(this)[$(this).html()?"show":"hide"]();});},url:function(){return this.attr('href')||this.attr('src');}});function createHelper(settings){if(helper.parent)return;helper.parent=$('<div id="'+settings.id+'"><h3></h3><div class="body"></div><div class="url"></div></div>').appendTo(document.body).hide();if($.fn.bgiframe)helper.parent.bgiframe();helper.title=$('h3',helper.parent);helper.body=$('div.body',helper.parent);helper.url=$('div.url',helper.parent);}function settings(element){return $.data(element,"tooltip");}function handle(event){if(settings(this).delay)tID=setTimeout(show,settings(this).delay);else
show();track=!!settings(this).track;$(document.body).bind('mousemove',update);update(event);}function save(){if($.tooltip.blocked||this==current||(!this.tooltipText&&!settings(this).bodyHandler))return;current=this;title=this.tooltipText;if(settings(this).bodyHandler){helper.title.hide();var bodyContent=settings(this).bodyHandler.call(this);if(bodyContent.nodeType||bodyContent.jquery){helper.body.empty().append(bodyContent)}else{helper.body.html(bodyContent);}helper.body.show();}else if(settings(this).showBody){var parts=title.split(settings(this).showBody);helper.title.html(parts.shift()).show();helper.body.empty();for(var i=0,part;(part=parts[i]);i++){if(i>0)helper.body.append("<br/>");helper.body.append(part);}helper.body.hideWhenEmpty();}else{helper.title.html(title).show();helper.body.hide();}if(settings(this).showURL&&$(this).url())helper.url.html($(this).url().replace('http://','')).show();else
helper.url.hide();helper.parent.addClass(settings(this).extraClass);if(settings(this).fixPNG)helper.parent.fixPNG();handle.apply(this,arguments);}function show(){tID=null;if((!IE||!$.fn.bgiframe)&&settings(current).fade){if(helper.parent.is(":animated"))helper.parent.stop().show().fadeTo(settings(current).fade,current.tOpacity);else
helper.parent.is(':visible')?helper.parent.fadeTo(settings(current).fade,current.tOpacity):helper.parent.fadeIn(settings(current).fade);}else{helper.parent.show();}update();}function update(event){if($.tooltip.blocked)return;if(event&&event.target.tagName=="OPTION"){return;}if(!track&&helper.parent.is(":visible")){$(document.body).unbind('mousemove',update)}if(current==null){$(document.body).unbind('mousemove',update);return;}helper.parent.removeClass("viewport-right").removeClass("viewport-bottom");var left=helper.parent[0].offsetLeft;var top=helper.parent[0].offsetTop;if(event){left=event.pageX+settings(current).left;top=event.pageY+settings(current).top;var right='auto';if(settings(current).positionLeft){right=$(window).width()-left;left='auto';}helper.parent.css({left:left,right:right,top:top});}var v=viewport(),h=helper.parent[0];if(v.x+v.cx<h.offsetLeft+h.offsetWidth){left-=h.offsetWidth+20+settings(current).left;helper.parent.css({left:left+'px'}).addClass("viewport-right");}if(v.y+v.cy<h.offsetTop+h.offsetHeight){top-=h.offsetHeight+20+settings(current).top;helper.parent.css({top:top+'px'}).addClass("viewport-bottom");}}function viewport(){return{x:$(window).scrollLeft(),y:$(window).scrollTop(),cx:$(window).width(),cy:$(window).height()};}function hide(event){if($.tooltip.blocked)return;if(tID)clearTimeout(tID);current=null;var tsettings=settings(this);function complete(){helper.parent.removeClass(tsettings.extraClass).hide().css("opacity","");}if((!IE||!$.fn.bgiframe)&&tsettings.fade){if(helper.parent.is(':animated'))helper.parent.stop().fadeTo(tsettings.fade,0,complete);else
helper.parent.stop().fadeOut(tsettings.fade,complete);}else
complete();if(settings(this).fixPNG)helper.parent.unfixPNG();}})(jQuery);