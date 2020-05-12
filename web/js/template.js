// /*
//
// /!*!
//  * jQuery Cookie Plugin v1.4.1
//  * https://github.com/carhartl/jquery-cookie
//  *
//  * Copyright 2006, 2014 Klaus Hartl
//  * Released under the MIT license
//  *!/
//
// (function (factory) {
//     if (typeof define === 'function' && define.amd) {
//         // AMD (Register as an anonymous module)
//         define(['jquery'], factory);
//     } else if (typeof exports === 'object') {
//         // Node/CommonJS
//         module.exports = factory(require('jquery'));
//     } else {
//         // Browser globals
//         factory(jQuery);
//     }
// }(function ($) {
//
//     var pluses = /\+/g;
//
//     function encode(s) {
//         return config.raw ? s : encodeURIComponent(s);
//     }
//
//     function decode(s) {
//         return config.raw ? s : decodeURIComponent(s);
//     }
//
//     function stringifyCookieValue(value) {
//         return encode(config.json ? JSON.stringify(value) : String(value));
//     }
//
//     function parseCookieValue(s) {
//         if (s.indexOf('"') === 0) {
//             // This is a quoted cookie as according to RFC2068, unescape...
//             s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
//         }
//
//         try {
//             // Replace server-side written pluses with spaces.
//             // If we can't decode the cookie, ignore it, it's unusable.
//             // If we can't parse the cookie, ignore it, it's unusable.
//             s = decodeURIComponent(s.replace(pluses, ' '));
//             return config.json ? JSON.parse(s) : s;
//         } catch(e) {}
//     }
//
//     function read(s, converter) {
//         var value = config.raw ? s : parseCookieValue(s);
//         return $.isFunction(converter) ? converter(value) : value;
//     }
//
//     var config = $.cookie = function (key, value, options) {
//
//         // Write
//
//         if (arguments.length > 1 && !$.isFunction(value)) {
//             options = $.extend({}, config.defaults, options);
//
//             if (typeof options.expires === 'number') {
//                 var days = options.expires, t = options.expires = new Date();
//                 t.setMilliseconds(t.getMilliseconds() + days * 864e+5);
//             }
//
//             return (document.cookie = [
//                 encode(key), '=', stringifyCookieValue(value),
//                 options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
//                 options.path    ? '; path=' + options.path : '',
//                 options.domain  ? '; domain=' + options.domain : '',
//                 options.secure  ? '; secure' : ''
//             ].join(''));
//         }
//
//         // Read
//
//         var result = key ? undefined : {},
//             // To prevent the for loop in the first place assign an empty array
//             // in case there are no cookies at all. Also prevents odd result when
//             // calling $.cookie().
//             cookies = document.cookie ? document.cookie.split('; ') : [],
//             i = 0,
//             l = cookies.length;
//
//         for (; i < l; i++) {
//             var parts = cookies[i].split('='),
//                 name = decode(parts.shift()),
//                 cookie = parts.join('=');
//
//             if (key === name) {
//                 // If second argument (value) is a function it's a converter...
//                 result = read(cookie, value);
//                 break;
//             }
//
//             // Prevent storing a cookie that we couldn't decode.
//             if (!key && (cookie = read(cookie)) !== undefined) {
//                 result[name] = cookie;
//             }
//         }
//
//         return result;
//     };
//
//     config.defaults = {};
//
//     $.removeCookie = function (key, options) {
//         // Must not alter options, thus extending a fresh object...
//         $.cookie(key, '', $.extend({}, options, { expires: -1 }));
//         return !$.cookie(key);
//     };
//
// }));
//
// !function(t){var e,a;return a="undefined"!=typeof window&&null!==window?window:global,a.BarRating=e=function(){function e(){var e=this,a=function(){e.$elem.wrap(t("<div />",{"class":e.options.wrapperClass}))},n=function(){e.$elem.unwrap()},r=function(){var a;return a=e.options.initialRating?t('option[value="'+e.options.initialRating+'"]',e.$elem):t("option:selected",e.$elem)},i=function(){var t=r();e.$elem.data("barrating",{userOptions:e.options,currentRatingValue:t.val(),currentRatingText:t.data("html")?t.data("html"):t.text(),originalRatingValue:t.val(),originalRatingText:t.data("html")?t.data("html"):t.text()}),e.$elem.data("barrating").deselectable=e.$elem.find("option:first").val()?!1:!0},s=function(){e.$elem.removeData("barrating")},l=function(){var a=t("<div />",{"class":"br-widget"});return e.$elem.find("option").each(function(){var n,r,i,s,l;n=t(this).val(),n&&(r=t(this).text(),i=t(this).data("html"),i&&(r=i),s=t("<a />",{href:"#","data-rating-value":n,"data-rating-text":r}),l=t("<span />",{html:e.options.showValues?r:""}),a.append(s.append(l)))}),e.options.showSelectedRating&&a.append(t("<div />",{text:"","class":"br-current-rating"})),e.options.reverse&&a.addClass("br-reverse"),e.options.readonly&&a.addClass("br-readonly"),a},o=function(){return e.options.reverse?"nextAll":"prevAll"},u=function(t){e.$elem.find('option[value="'+t+'"]').prop("selected",!0),e.$elem.change()},d=function(t){t=t?t:e.$elem.data("barrating").currentRatingText,e.options.showSelectedRating&&e.$elem.parent().find(".br-current-rating").text(t)},c=function(t){t.find("a").removeClass("br-selected br-current"),t.find('a[data-rating-value="'+e.$elem.data("barrating").currentRatingValue+'"]').addClass("br-selected br-current")[o()]().addClass("br-selected")},g=function(a){a.on("click",function(n){var r,i,s=t(this);return n.preventDefault(),a.removeClass("br-active br-selected"),s.addClass("br-selected")[o()]().addClass("br-selected"),r=s.attr("data-rating-value"),i=s.attr("data-rating-text"),s.hasClass("br-current")&&e.$elem.data("barrating").deselectable?(s.removeClass("br-selected br-current")[o()]().removeClass("br-selected br-current"),r="",i=""):(a.removeClass("br-current"),s.addClass("br-current")),e.$elem.data("barrating").currentRatingValue=r,e.$elem.data("barrating").currentRatingText=i,u(r),d(i),e.options.onSelect.call(this,e.$elem.data("barrating").currentRatingValue,e.$elem.data("barrating").currentRatingText),!1})},h=function(e){e.on({mouseenter:function(){var a=t(this);e.removeClass("br-active br-selected"),a.addClass("br-active")[o()]().addClass("br-active"),d(a.attr("data-rating-text"))}})},f=function(t,e){e.on({mouseleave:function(){t.removeClass("br-active"),d(),c(e)}})},b=function(e){e.on("touchstart",function(e){e.preventDefault(),e.stopPropagation(),t(this).click()})},m=function(t){t.on("click",function(t){t.preventDefault()})};this.show=function(){var t,n;e.$elem.data("barrating")||(a(),i(),t=l(),t.insertAfter(e.$elem),c(t),d(),n=t.find("a"),e.options.fastClicks&&b(n),e.options.readonly?m(n):(g(n),h(n),f(n,t)),e.$elem.hide())},this.set=function(t){this.$elem.find('option[value="'+t+'"]').val()&&(this.$elem.data("barrating").currentRatingValue=t,this.$elem.data("barrating").currentRatingText=this.$elem.find('option[value="'+t+'"]').text(),u(this.$elem.data("barrating").currentRatingValue),d(this.$elem.data("barrating").currentRatingText),c(this.$widget))},this.clear=function(){this.$elem.data("barrating").currentRatingValue=this.$elem.data("barrating").originalRatingValue,this.$elem.data("barrating").currentRatingText=this.$elem.data("barrating").originalRatingText,u(this.$elem.data("barrating").currentRatingValue),d(this.$elem.data("barrating").currentRatingText),c(this.$widget),this.$elem.data("barrating").userOptions.onClear.call(this,this.$elem.data("barrating").currentRatingValue,this.$elem.data("barrating").currentRatingText)},this.destroy=function(){var t=this.$elem.data("barrating").currentRatingValue,e=this.$elem.data("barrating").currentRatingText,a=this.$elem.data("barrating").userOptions;this.$widget.off().remove(),s(),n(),this.$elem.show(),a.onDestroy.call(this,t,e)}}return e.prototype.init=function(e,a){return this.$elem=t(a),this.options=t.extend({},t.fn.barrating.defaults,e),this.options},e}(),t.fn.barrating=function(a,n){return this.each(function(){var r=new e;if(t(this).is("select")||t.error("Sorry, this plugin only works with select fields."),r.hasOwnProperty(a)){if(r.init(n,this),"show"===a)return r.show(n);if(r.$elem.data("barrating"))return r.$widget=t(this).next(".br-widget"),r[a](n)}else{if("object"==typeof a||!a)return n=a,r.init(n,this),r.show();t.error("Method "+a+" does not exist on jQuery.barrating")}})},t.fn.barrating.defaults={initialRating:null,showValues:!1,showSelectedRating:!0,reverse:!1,readonly:!1,fastClicks:!0,wrapperClass:"br-wrapper",onSelect:function(t,e){},onClear:function(t,e){},onDestroy:function(t,e){}},t.fn.barrating.defaults}(jQuery);
// //# sourceMappingURL=jquery.barrating.min.js.map
// /!*
// 	Masked Input plugin for jQuery
// 	Copyright (c) 2007-2013 Josh Bush (digitalbush.com)
// 	Licensed under the MIT license (http://digitalbush.com/projects/masked-input-plugin/#license)
// 	Version: 1.3.1
// *!/
// (function(e){function t(){var e=document.createElement("input"),t="onpaste";return e.setAttribute(t,""),"function"==typeof e[t]?"paste":"input"}var n,a=t()+".mask",r=navigator.userAgent,i=/iphone/i.test(r),o=/android/i.test(r);e.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},dataName:"rawMaskFn",placeholder:"_"},e.fn.extend({caret:function(e,t){var n;if(0!==this.length&&!this.is(":hidden"))return"number"==typeof e?(t="number"==typeof t?t:e,this.each(function(){this.setSelectionRange?this.setSelectionRange(e,t):this.createTextRange&&(n=this.createTextRange(),n.collapse(!0),n.moveEnd("character",t),n.moveStart("character",e),n.select())})):(this[0].setSelectionRange?(e=this[0].selectionStart,t=this[0].selectionEnd):document.selection&&document.selection.createRange&&(n=document.selection.createRange(),e=0-n.duplicate().moveStart("character",-1e5),t=e+n.text.length),{begin:e,end:t})},unmask:function(){return this.trigger("unmask")},mask:function(t,r){var c,l,s,u,f,h;return!t&&this.length>0?(c=e(this[0]),c.data(e.mask.dataName)()):(r=e.extend({placeholder:e.mask.placeholder,completed:null},r),l=e.mask.definitions,s=[],u=h=t.length,f=null,e.each(t.split(""),function(e,t){"?"==t?(h--,u=e):l[t]?(s.push(RegExp(l[t])),null===f&&(f=s.length-1)):s.push(null)}),this.trigger("unmask").each(function(){function c(e){for(;h>++e&&!s[e];);return e}function d(e){for(;--e>=0&&!s[e];);return e}function m(e,t){var n,a;if(!(0>e)){for(n=e,a=c(t);h>n;n++)if(s[n]){if(!(h>a&&s[n].test(R[a])))break;R[n]=R[a],R[a]=r.placeholder,a=c(a)}b(),x.caret(Math.max(f,e))}}function p(e){var t,n,a,i;for(t=e,n=r.placeholder;h>t;t++)if(s[t]){if(a=c(t),i=R[t],R[t]=n,!(h>a&&s[a].test(i)))break;n=i}}function g(e){var t,n,a,r=e.which;8===r||46===r||i&&127===r?(t=x.caret(),n=t.begin,a=t.end,0===a-n&&(n=46!==r?d(n):a=c(n-1),a=46===r?c(a):a),k(n,a),m(n,a-1),e.preventDefault()):27==r&&(x.val(S),x.caret(0,y()),e.preventDefault())}function v(t){var n,a,i,l=t.which,u=x.caret();t.ctrlKey||t.altKey||t.metaKey||32>l||l&&(0!==u.end-u.begin&&(k(u.begin,u.end),m(u.begin,u.end-1)),n=c(u.begin-1),h>n&&(a=String.fromCharCode(l),s[n].test(a)&&(p(n),R[n]=a,b(),i=c(n),o?setTimeout(e.proxy(e.fn.caret,x,i),0):x.caret(i),r.completed&&i>=h&&r.completed.call(x))),t.preventDefault())}function k(e,t){var n;for(n=e;t>n&&h>n;n++)s[n]&&(R[n]=r.placeholder)}function b(){x.val(R.join(""))}function y(e){var t,n,a=x.val(),i=-1;for(t=0,pos=0;h>t;t++)if(s[t]){for(R[t]=r.placeholder;pos++<a.length;)if(n=a.charAt(pos-1),s[t].test(n)){R[t]=n,i=t;break}if(pos>a.length)break}else R[t]===a.charAt(pos)&&t!==u&&(pos++,i=t);return e?b():u>i+1?(x.val(""),k(0,h)):(b(),x.val(x.val().substring(0,i+1))),u?t:f}var x=e(this),R=e.map(t.split(""),function(e){return"?"!=e?l[e]?r.placeholder:e:void 0}),S=x.val();x.data(e.mask.dataName,function(){return e.map(R,function(e,t){return s[t]&&e!=r.placeholder?e:null}).join("")}),x.attr("readonly")||x.one("unmask",function(){x.unbind(".mask").removeData(e.mask.dataName)}).bind("focus.mask",function(){clearTimeout(n);var e;S=x.val(),e=y(),n=setTimeout(function(){b(),e==t.length?x.caret(0,e):x.caret(e)},10)}).bind("blur.mask",function(){y(),x.val()!=S&&x.change()}).bind("keydown.mask",g).bind("keypress.mask",v).bind(a,function(){setTimeout(function(){var e=y(!0);x.caret(e),r.completed&&e==x.val().length&&r.completed.call(x)},0)}),y()}))}})})(jQuery);
// /!*! nouislider - 8.0.2 - 2015-07-06 13:22:09 *!/
//
// !function(a){if("function"==typeof define&&define.amd)define([],a);else if("object"==typeof exports){var b=require("fs");module.exports=a(),module.exports.css=function(){return b.readFileSync(__dirname+"/nouislider.min.css","utf8")}}else window.noUiSlider=a()}(function(){"use strict";function a(a){return a.filter(function(a){return this[a]?!1:this[a]=!0},{})}function b(a,b){return Math.round(a/b)*b}function c(a){var b=a.getBoundingClientRect(),c=a.ownerDocument,d=c.defaultView||c.parentWindow,e=c.documentElement,f=d.pageXOffset;return/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)&&(f=0),{top:b.top+d.pageYOffset-e.clientTop,left:b.left+f-e.clientLeft}}function d(a){return"number"==typeof a&&!isNaN(a)&&isFinite(a)}function e(a){var b=Math.pow(10,7);return Number((Math.round(a*b)/b).toFixed(7))}function f(a,b,c){j(a,b),setTimeout(function(){k(a,b)},c)}function g(a){return Math.max(Math.min(a,100),0)}function h(a){return Array.isArray(a)?a:[a]}function i(a){var b=a.split(".");return b.length>1?b[1].length:0}function j(a,b){a.classList?a.classList.add(b):a.className+=" "+b}function k(a,b){a.classList?a.classList.remove(b):a.className=a.className.replace(new RegExp("(^|\\b)"+b.split(" ").join("|")+"(\\b|$)","gi")," ")}function l(a,b){a.classList?a.classList.contains(b):new RegExp("(^| )"+b+"( |$)","gi").test(a.className)}function m(a,b){return 100/(b-a)}function n(a,b){return 100*b/(a[1]-a[0])}function o(a,b){return n(a,a[0]<0?b+Math.abs(a[0]):b-a[0])}function p(a,b){return b*(a[1]-a[0])/100+a[0]}function q(a,b){for(var c=1;a>=b[c];)c+=1;return c}function r(a,b,c){if(c>=a.slice(-1)[0])return 100;var d,e,f,g,h=q(c,a);return d=a[h-1],e=a[h],f=b[h-1],g=b[h],f+o([d,e],c)/m(f,g)}function s(a,b,c){if(c>=100)return a.slice(-1)[0];var d,e,f,g,h=q(c,b);return d=a[h-1],e=a[h],f=b[h-1],g=b[h],p([d,e],(c-f)*m(f,g))}function t(a,c,d,e){if(100===e)return e;var f,g,h=q(e,a);return d?(f=a[h-1],g=a[h],e-f>(g-f)/2?g:f):c[h-1]?a[h-1]+b(e-a[h-1],c[h-1]):e}function u(a,b,c){var e;if("number"==typeof b&&(b=[b]),"[object Array]"!==Object.prototype.toString.call(b))throw new Error("noUiSlider: 'range' contains invalid value.");if(e="min"===a?0:"max"===a?100:parseFloat(a),!d(e)||!d(b[0]))throw new Error("noUiSlider: 'range' value isn't numeric.");c.xPct.push(e),c.xVal.push(b[0]),e?c.xSteps.push(isNaN(b[1])?!1:b[1]):isNaN(b[1])||(c.xSteps[0]=b[1])}function v(a,b,c){return b?void(c.xSteps[a]=n([c.xVal[a],c.xVal[a+1]],b)/m(c.xPct[a],c.xPct[a+1])):!0}function w(a,b,c,d){this.xPct=[],this.xVal=[],this.xSteps=[d||!1],this.xNumSteps=[!1],this.snap=b,this.direction=c;var e,f=[];for(e in a)a.hasOwnProperty(e)&&f.push([a[e],e]);for(f.sort(function(a,b){return a[0]-b[0]}),e=0;e<f.length;e++)u(f[e][1],f[e][0],this);for(this.xNumSteps=this.xSteps.slice(0),e=0;e<this.xNumSteps.length;e++)v(e,this.xNumSteps[e],this)}function x(a,b){if(!d(b))throw new Error("noUiSlider: 'step' is not numeric.");a.singleStep=b}function y(a,b){if("object"!=typeof b||Array.isArray(b))throw new Error("noUiSlider: 'range' is not an object.");if(void 0===b.min||void 0===b.max)throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");a.spectrum=new w(b,a.snap,a.dir,a.singleStep)}function z(a,b){if(b=h(b),!Array.isArray(b)||!b.length||b.length>2)throw new Error("noUiSlider: 'start' option is incorrect.");a.handles=b.length,a.start=b}function A(a,b){if(a.snap=b,"boolean"!=typeof b)throw new Error("noUiSlider: 'snap' option must be a boolean.")}function B(a,b){if(a.animate=b,"boolean"!=typeof b)throw new Error("noUiSlider: 'animate' option must be a boolean.")}function C(a,b){if("lower"===b&&1===a.handles)a.connect=1;else if("upper"===b&&1===a.handles)a.connect=2;else if(b===!0&&2===a.handles)a.connect=3;else{if(b!==!1)throw new Error("noUiSlider: 'connect' option doesn't match handle count.");a.connect=0}}function D(a,b){switch(b){case"horizontal":a.ort=0;break;case"vertical":a.ort=1;break;default:throw new Error("noUiSlider: 'orientation' option is invalid.")}}function E(a,b){if(!d(b))throw new Error("noUiSlider: 'margin' option must be numeric.");if(a.margin=a.spectrum.getMargin(b),!a.margin)throw new Error("noUiSlider: 'margin' option is only supported on linear sliders.")}function F(a,b){if(!d(b))throw new Error("noUiSlider: 'limit' option must be numeric.");if(a.limit=a.spectrum.getMargin(b),!a.limit)throw new Error("noUiSlider: 'limit' option is only supported on linear sliders.")}function G(a,b){switch(b){case"ltr":a.dir=0;break;case"rtl":a.dir=1,a.connect=[0,2,1,3][a.connect];break;default:throw new Error("noUiSlider: 'direction' option was not recognized.")}}function H(a,b){if("string"!=typeof b)throw new Error("noUiSlider: 'behaviour' must be a string containing options.");var c=b.indexOf("tap")>=0,d=b.indexOf("drag")>=0,e=b.indexOf("fixed")>=0,f=b.indexOf("snap")>=0;a.events={tap:c||f,drag:d,fixed:e,snap:f}}function I(a,b){if(a.format=b,"function"==typeof b.to&&"function"==typeof b.from)return!0;throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.")}function J(a){var b,c={margin:0,limit:0,animate:!0,format:U};b={step:{r:!1,t:x},start:{r:!0,t:z},connect:{r:!0,t:C},direction:{r:!0,t:G},snap:{r:!1,t:A},animate:{r:!1,t:B},range:{r:!0,t:y},orientation:{r:!1,t:D},margin:{r:!1,t:E},limit:{r:!1,t:F},behaviour:{r:!0,t:H},format:{r:!1,t:I}};var d={connect:!1,direction:"ltr",behaviour:"tap",orientation:"horizontal"};return Object.keys(d).forEach(function(b){void 0===a[b]&&(a[b]=d[b])}),Object.keys(b).forEach(function(d){var e=b[d];if(void 0===a[d]){if(e.r)throw new Error("noUiSlider: '"+d+"' is required.");return!0}e.t(c,a[d])}),c.pips=a.pips,c.style=c.ort?"top":"left",c}function K(a,b,c){var d=a+b[0],e=a+b[1];return c?(0>d&&(e+=Math.abs(d)),e>100&&(d-=e-100),[g(d),g(e)]):[d,e]}function L(a){a.preventDefault();var b,c,d=0===a.type.indexOf("touch"),e=0===a.type.indexOf("mouse"),f=0===a.type.indexOf("pointer"),g=a;return 0===a.type.indexOf("MSPointer")&&(f=!0),d&&(b=a.changedTouches[0].pageX,c=a.changedTouches[0].pageY),(e||f)&&(b=a.clientX+window.pageXOffset,c=a.clientY+window.pageYOffset),g.points=[b,c],g.cursor=e||f,g}function M(a,b){var c=document.createElement("div"),d=document.createElement("div"),e=["-lower","-upper"];return a&&e.reverse(),j(d,T[3]),j(d,T[3]+e[b]),j(c,T[2]),c.appendChild(d),c}function N(a,b,c){switch(a){case 1:j(b,T[7]),j(c[0],T[6]);break;case 3:j(c[1],T[6]);case 2:j(c[0],T[7]);case 0:j(b,T[6])}}function O(a,b,c){var d,e=[];for(d=0;a>d;d+=1)e.push(c.appendChild(M(b,d)));return e}function P(a,b,c){j(c,T[0]),j(c,T[8+a]),j(c,T[4+b]);var d=document.createElement("div");return j(d,T[1]),c.appendChild(d),d}function Q(b,d){function e(a,b,c){if("range"===a||"steps"===a)return M.xVal;if("count"===a){var d,e=100/(b-1),f=0;for(b=[];(d=f++*e)<=100;)b.push(d);a="positions"}return"positions"===a?b.map(function(a){return M.fromStepping(c?M.getStep(a):a)}):"values"===a?c?b.map(function(a){return M.fromStepping(M.getStep(M.toStepping(a)))}):b:void 0}function m(b,c,d){var e=M.direction,f={},g=M.xVal[0],h=M.xVal[M.xVal.length-1],i=!1,j=!1,k=0;return M.direction=0,d=a(d.slice().sort(function(a,b){return a-b})),d[0]!==g&&(d.unshift(g),i=!0),d[d.length-1]!==h&&(d.push(h),j=!0),d.forEach(function(a,e){var g,h,l,m,n,o,p,q,r,s,t=a,u=d[e+1];if("steps"===c&&(g=M.xNumSteps[e]),g||(g=u-t),t!==!1&&void 0!==u)for(h=t;u>=h;h+=g){for(m=M.toStepping(h),n=m-k,q=n/b,r=Math.round(q),s=n/r,l=1;r>=l;l+=1)o=k+l*s,f[o.toFixed(5)]=["x",0];p=d.indexOf(h)>-1?1:"steps"===c?2:0,!e&&i&&(p=0),h===u&&j||(f[m.toFixed(5)]=[h,p]),k=m}}),M.direction=e,f}function n(a,b,c){function e(a){return["-normal","-large","-sub"][a]}function f(a,b,c){return'class="'+b+" "+b+"-"+h+" "+b+e(c[1])+'" style="'+d.style+": "+a+'%"'}function g(a,d){M.direction&&(a=100-a),d[1]=d[1]&&b?b(d[0],d[1]):d[1],i.innerHTML+="<div "+f(a,"noUi-marker",d)+"></div>",d[1]&&(i.innerHTML+="<div "+f(a,"noUi-value",d)+">"+c.to(d[0])+"</div>")}var h=["horizontal","vertical"][d.ort],i=document.createElement("div");return j(i,"noUi-pips"),j(i,"noUi-pips-"+h),Object.keys(a).forEach(function(b){g(b,a[b])}),i}function o(a){var b=a.mode,c=a.density||1,d=a.filter||!1,f=a.values||!1,g=a.stepped||!1,h=e(b,f,g),i=m(c,b,h),j=a.format||{to:Math.round};return I.appendChild(n(i,d,j))}function p(){return G["offset"+["Width","Height"][d.ort]]}function q(a,b){void 0!==b&&(b=Math.abs(b-d.dir)),Object.keys(R).forEach(function(c){var d=c.split(".")[0];a===d&&R[c].forEach(function(a){a(h(B()),b,r(Array.prototype.slice.call(Q)))})})}function r(a){return 1===a.length?a[0]:d.dir?a.reverse():a}function s(a,b,c,e){var f=function(b){return I.hasAttribute("disabled")?!1:l(I,T[14])?!1:(b=L(b),a===S.start&&void 0!==b.buttons&&b.buttons>1?!1:(b.calcPoint=b.points[d.ort],void c(b,e)))},g=[];return a.split(" ").forEach(function(a){b.addEventListener(a,f,!1),g.push([a,f])}),g}function t(a,b){var c,d,e=b.handles||H,f=!1,g=100*(a.calcPoint-b.start)/p(),h=e[0]===H[0]?0:1;if(c=K(g,b.positions,e.length>1),f=y(e[0],c[h],1===e.length),e.length>1){if(f=y(e[1],c[h?0:1],!1)||f)for(d=0;d<b.handles.length;d++)q("slide",d)}else f&&q("slide",h)}function u(a,b){var c=G.getElementsByClassName(T[15]),d=b.handles[0]===H[0]?0:1;c.length&&k(c[0],T[15]),a.cursor&&(document.body.style.cursor="",document.body.removeEventListener("selectstart",document.body.noUiListener));var e=document.documentElement;e.noUiListeners.forEach(function(a){e.removeEventListener(a[0],a[1])}),k(I,T[12]),q("set",d),q("change",d)}function v(a,b){var c=document.documentElement;if(1===b.handles.length&&(j(b.handles[0].children[0],T[15]),b.handles[0].hasAttribute("disabled")))return!1;a.stopPropagation();var d=s(S.move,c,t,{start:a.calcPoint,handles:b.handles,positions:[J[0],J[H.length-1]]}),e=s(S.end,c,u,{handles:b.handles});if(c.noUiListeners=d.concat(e),a.cursor){document.body.style.cursor=getComputedStyle(a.target).cursor,H.length>1&&j(I,T[12]);var f=function(){return!1};document.body.noUiListener=f,document.body.addEventListener("selectstart",f,!1)}}function w(a){var b,e,g=a.calcPoint,h=0;return a.stopPropagation(),H.forEach(function(a){h+=c(a)[d.style]}),b=h/2>g||1===H.length?0:1,g-=c(G)[d.style],e=100*g/p(),d.events.snap||f(I,T[14],300),H[b].hasAttribute("disabled")?!1:(y(H[b],e),q("slide",b),q("set",b),q("change",b),void(d.events.snap&&v(a,{handles:[H[h]]})))}function x(a){var b,c;if(!a.fixed)for(b=0;b<H.length;b+=1)s(S.start,H[b].children[0],v,{handles:[H[b]]});a.tap&&s(S.start,G,w,{handles:H}),a.drag&&(c=[G.getElementsByClassName(T[7])[0]],j(c[0],T[10]),a.fixed&&c.push(H[c[0]===H[0]?1:0].children[0]),c.forEach(function(a){s(S.start,a,v,{handles:H})}))}function y(a,b,c){var e=a!==H[0]?1:0,f=J[0]+d.margin,h=J[1]-d.margin,i=J[0]+d.limit,l=J[1]-d.limit;return H.length>1&&(b=e?Math.max(b,f):Math.min(b,h)),c!==!1&&d.limit&&H.length>1&&(b=e?Math.min(b,i):Math.max(b,l)),b=M.getStep(b),b=g(parseFloat(b.toFixed(7))),b===J[e]?!1:(a.style[d.style]=b+"%",a.previousSibling||(k(a,T[17]),b>50&&j(a,T[17])),J[e]=b,Q[e]=M.fromStepping(b),q("update",e),!0)}function z(a,b){var c,e,f;for(d.limit&&(a+=1),c=0;a>c;c+=1)e=c%2,f=b[e],null!==f&&f!==!1&&("number"==typeof f&&(f=String(f)),f=d.format.from(f),(f===!1||isNaN(f)||y(H[e],M.toStepping(f),c===3-d.dir)===!1)&&q("update",e))}function A(a){var b,c,e=h(a);for(d.dir&&d.handles>1&&e.reverse(),d.animate&&-1!==J[0]&&f(I,T[14],300),b=H.length>1?3:1,1===e.length&&(b=1),z(b,e),c=0;c<H.length;c++)q("set",c)}function B(){var a,b=[];for(a=0;a<d.handles;a+=1)b[a]=d.format.to(Q[a]);return r(b)}function C(){T.forEach(function(a){a&&k(I,a)}),I.innerHTML="",delete I.noUiSlider}function D(){var a=J.map(function(a,b){var c=M.getApplicableStep(a),d=i(String(c[2])),e=Q[b],f=100===a?null:c[2],g=Number((e-c[2]).toFixed(d)),h=0===a?null:g>=c[1]?c[2]:c[0]||!1;return[h,f]});return r(a)}function E(a,b){R[a]=R[a]||[],R[a].push(b),"update"===a.split(".")[0]&&H.forEach(function(a,b){q("update",b)})}function F(a){var b=a.split(".")[0],c=a.substring(b.length);Object.keys(R).forEach(function(a){var d=a.split(".")[0],e=a.substring(d.length);b&&b!==d||c&&c!==e||delete R[a]})}var G,H,I=b,J=[-1,-1],M=d.spectrum,Q=[],R={};if(I.noUiSlider)throw new Error("Slider was already initialized.");return G=P(d.dir,d.ort,I),H=O(d.handles,d.dir,G),N(d.connect,I,H),x(d.events),d.pips&&o(d.pips),{destroy:C,steps:D,on:E,off:F,get:B,set:A}}function R(a,b){if(!a.nodeName)throw new Error("noUiSlider.create requires a single element.");var c=J(b,a),d=Q(a,c);d.set(c.start),a.noUiSlider=d}var S=window.navigator.pointerEnabled?{start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled?{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}:{start:"mousedown touchstart",move:"mousemove touchmove",end:"mouseup touchend"},T=["noUi-target","noUi-base","noUi-origin","noUi-handle","noUi-horizontal","noUi-vertical","noUi-background","noUi-connect","noUi-ltr","noUi-rtl","noUi-dragable","","noUi-state-drag","","noUi-state-tap","noUi-active","","noUi-stacking"];w.prototype.getMargin=function(a){return 2===this.xPct.length?n(this.xVal,a):!1},w.prototype.toStepping=function(a){return a=r(this.xVal,this.xPct,a),this.direction&&(a=100-a),a},w.prototype.fromStepping=function(a){return this.direction&&(a=100-a),e(s(this.xVal,this.xPct,a))},w.prototype.getStep=function(a){return this.direction&&(a=100-a),a=t(this.xPct,this.xSteps,this.snap,a),this.direction&&(a=100-a),a},w.prototype.getApplicableStep=function(a){var b=q(a,this.xPct),c=100===a?2:1;return[this.xNumSteps[b-2],this.xVal[b-c],this.xNumSteps[b-c]]},w.prototype.convert=function(a){return this.getStep(this.toStepping(a))};var U={to:function(a){return a.toFixed(2)},from:Number};return{create:R}});
// /!**
//  * Copyright (c) 2007-2015 Ariel Flesler - aflesler<a>gmail<d>com | http://flesler.blogspot.com
//  * Licensed under MIT
//  * @author Ariel Flesler
//  * @version 2.1.1
//  *!/
// ;(function(f){"use strict";"function"===typeof define&&define.amd?define(["jquery"],f):"undefined"!==typeof module&&module.exports?module.exports=f(require("jquery")):f(jQuery)})(function($){"use strict";function n(a){return!a.nodeName||-1!==$.inArray(a.nodeName.toLowerCase(),["iframe","#document","html","body"])}function h(a){return $.isFunction(a)||$.isPlainObject(a)?a:{top:a,left:a}}var p=$.scrollTo=function(a,d,b){return $(window).scrollTo(a,d,b)};p.defaults={axis:"xy",duration:0,limit:!0};$.fn.scrollTo=function(a,d,b){"object"=== typeof d&&(b=d,d=0);"function"===typeof b&&(b={onAfter:b});"max"===a&&(a=9E9);b=$.extend({},p.defaults,b);d=d||b.duration;var u=b.queue&&1<b.axis.length;u&&(d/=2);b.offset=h(b.offset);b.over=h(b.over);return this.each(function(){function k(a){var k=$.extend({},b,{queue:!0,duration:d,complete:a&&function(){a.call(q,e,b)}});r.animate(f,k)}if(null!==a){var l=n(this),q=l?this.contentWindow||window:this,r=$(q),e=a,f={},t;switch(typeof e){case "number":case "string":if(/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(e)){e= h(e);break}e=l?$(e):$(e,q);if(!e.length)return;case "object":if(e.is||e.style)t=(e=$(e)).offset()}var v=$.isFunction(b.offset)&&b.offset(q,e)||b.offset;$.each(b.axis.split(""),function(a,c){var d="x"===c?"Left":"Top",m=d.toLowerCase(),g="scroll"+d,h=r[g](),n=p.max(q,c);t?(f[g]=t[m]+(l?0:h-r.offset()[m]),b.margin&&(f[g]-=parseInt(e.css("margin"+d),10)||0,f[g]-=parseInt(e.css("border"+d+"Width"),10)||0),f[g]+=v[m]||0,b.over[m]&&(f[g]+=e["x"===c?"width":"height"]()*b.over[m])):(d=e[m],f[g]=d.slice&& "%"===d.slice(-1)?parseFloat(d)/100*n:d);b.limit&&/^\d+$/.test(f[g])&&(f[g]=0>=f[g]?0:Math.min(f[g],n));!a&&1<b.axis.length&&(h===f[g]?f={}:u&&(k(b.onAfterFirst),f={}))});k(b.onAfter)}})};p.max=function(a,d){var b="x"===d?"Width":"Height",h="scroll"+b;if(!n(a))return a[h]-$(a)[b.toLowerCase()]();var b="client"+b,k=a.ownerDocument||a.document,l=k.documentElement,k=k.body;return Math.max(l[h],k[h])-Math.min(l[b],k[b])};$.Tween.propHooks.scrollLeft=$.Tween.propHooks.scrollTop={get:function(a){return $(a.elem)[a.prop]()}, set:function(a){var d=this.get(a);if(a.options.interrupt&&a._last&&a._last!==d)return $(a.elem).stop();var b=Math.round(a.now);d!==b&&($(a.elem)[a.prop](b),a._last=this.get(a))}};return p});
// "use strict";
// /!*!
//  * jQuery Mobile Events
//  * by Ben Major (www.ben-major.co.uk)
//  *
//  * Copyright 2011, Ben Major
//  * Licensed under the MIT License:
//  *
//  * Permission is hereby granted, free of charge, to any person obtaining a copy
//  * of this software and associated documentation files (the "Software"), to deal
//  * in the Software without restriction, including without limitation the rights
//  * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
//  * copies of the Software, and to permit persons to whom the Software is
//  * furnished to do so, subject to the following conditions:
//  *
//  * The above copyright notice and this permission notice shall be included in
//  * all copies or substantial portions of the Software.
//  *
//  * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
//  * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//  * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
//  * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//  * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
//  * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
//  * THE SOFTWARE.
//  *
//  *!/
// (function(n){function l(){var n=e();n!==s&&(s=n,f.trigger("orientationchange"))}function i(t,i,r,u){var f=r.type;r.type=i;n.event.dispatch.call(t,r,u);r.type=f}var f,g,e,s,h,c,o;n.attrFn=n.attrFn||{};var r=navigator.userAgent.toLowerCase(),u=r.indexOf("chrome")>-1&&(r.indexOf("windows")>-1||r.indexOf("macintosh")>-1||r.indexOf("linux")>-1)&&r.indexOf("mobile")<0&&r.indexOf("android")<0,t={tap_pixel_range:5,swipe_h_threshold:50,swipe_v_threshold:50,taphold_threshold:750,doubletap_int:500,touch_capable:window.navigator.msPointerEnabled?!1:"ontouchstart"in window&&!u,orientation_support:"orientation"in window&&"onorientationchange"in window,startevent:window.navigator.msPointerEnabled?"MSPointerDown":"ontouchstart"in window&&!u?"touchstart":"mousedown",endevent:window.navigator.msPointerEnabled?"MSPointerUp":"ontouchstart"in window&&!u?"touchend":"mouseup",moveevent:window.navigator.msPointerEnabled?"MSPointerMove":"ontouchstart"in window&&!u?"touchmove":"mousemove",tapevent:"ontouchstart"in window&&!u?"tap":"click",scrollevent:"ontouchstart"in window&&!u?"touchmove":"scroll",hold_timer:null,tap_timer:null};if(n.isTouchCapable=function(){return t.touch_capable},n.getStartEvent=function(){return t.startevent},n.getEndEvent=function(){return t.endevent},n.getMoveEvent=function(){return t.moveevent},n.getTapEvent=function(){return t.tapevent},n.getScrollEvent=function(){return t.scrollevent},n.each(["tapstart","tapend","tapmove","tap","tap2","tap3","tap4","singletap","doubletap","taphold","swipe","swipeup","swiperight","swipedown","swipeleft","swipeend","scrollstart","scrollend","orientationchange"],function(t,i){n.fn[i]=function(n){return n?this.on(i,n):this.trigger(i)};n.attrFn[i]=!0}),n.event.special.tapstart={setup:function(){var r=this,u=n(r);u.on(t.startevent,function f(n){if(u.data("callee",f),n.which&&n.which!==1)return!1;var e=n.originalEvent,o={position:{x:t.touch_capable?e.touches[0].screenX:n.screenX,y:t.touch_capable?e.touches[0].screenY:n.screenY},offset:{x:t.touch_capable?e.touches[0].pageX-e.touches[0].target.offsetLeft:n.offsetX,y:t.touch_capable?e.touches[0].pageY-e.touches[0].target.offsetTop:n.offsetY},time:Date.now(),target:n.target};return i(r,"tapstart",n,o),!0})},remove:function(){n(this).off(t.startevent,n(this).data.callee)}},n.event.special.tapmove={setup:function(){var r=this,u=n(r);u.on(t.moveevent,function f(n){u.data("callee",f);var e=n.originalEvent,o={position:{x:t.touch_capable?e.touches[0].screenX:n.screenX,y:t.touch_capable?e.touches[0].screenY:n.screenY},offset:{x:t.touch_capable?e.touches[0].pageX-e.touches[0].target.offsetLeft:n.offsetX,y:t.touch_capable?e.touches[0].pageY-e.touches[0].target.offsetTop:n.offsetY},time:Date.now(),target:n.target};return i(r,"tapmove",n,o),!0})},remove:function(){n(this).off(t.moveevent,n(this).data.callee)}},n.event.special.tapend={setup:function(){var r=this,u=n(r);u.on(t.endevent,function f(n){u.data("callee",f);var e=n.originalEvent,o={position:{x:t.touch_capable?e.changedTouches[0].screenX:n.screenX,y:t.touch_capable?e.changedTouches[0].screenY:n.screenY},offset:{x:t.touch_capable?e.changedTouches[0].pageX-e.changedTouches[0].target.offsetLeft:n.offsetX,y:t.touch_capable?e.changedTouches[0].pageY-e.changedTouches[0].target.offsetTop:n.offsetY},time:Date.now(),target:n.target};return i(r,"tapend",n,o),!0})},remove:function(){n(this).off(t.endevent,n(this).data.callee)}},n.event.special.taphold={setup:function(){var o=this,u=n(o),s,r={x:0,y:0},f=0,e=0;u.on(t.startevent,function h(n){if(n.which&&n.which!==1)return!1;u.data("tapheld",!1);s=n.target;var c=n.originalEvent,l=Date.now(),a={x:t.touch_capable?c.touches[0].screenX:n.screenX,y:t.touch_capable?c.touches[0].screenY:n.screenY},v={x:t.touch_capable?c.touches[0].pageX-c.touches[0].target.offsetLeft:n.offsetX,y:t.touch_capable?c.touches[0].pageY-c.touches[0].target.offsetTop:n.offsetY};return r.x=n.originalEvent.targetTouches?n.originalEvent.targetTouches[0].pageX:n.pageX,r.y=n.originalEvent.targetTouches?n.originalEvent.targetTouches[0].pageY:n.pageY,f=r.x,e=r.y,t.hold_timer=window.setTimeout(function(){var y=r.x-f,p=r.y-e;if(n.target==s&&(r.x==f&&r.y==e||y>=-t.tap_pixel_range&&y<=t.tap_pixel_range&&p>=-t.tap_pixel_range&&p<=t.tap_pixel_range)){u.data("tapheld",!0);var w=Date.now(),b={x:t.touch_capable?c.touches[0].screenX:n.screenX,y:t.touch_capable?c.touches[0].screenY:n.screenY},k={x:t.touch_capable?c.touches[0].pageX-c.touches[0].target.offsetLeft:n.offsetX,y:t.touch_capable?c.touches[0].pageY-c.touches[0].target.offsetTop:n.offsetY},d=w-l,g={startTime:l,endTime:w,startPosition:a,startOffset:v,endPosition:b,endOffset:k,duration:d,target:n.target};u.data("callee1",h);i(o,"taphold",n,g)}},t.taphold_threshold),!0}).on(t.endevent,function c(){u.data("callee2",c);u.data("tapheld",!1);window.clearTimeout(t.hold_timer)}).on(t.moveevent,function l(n){u.data("callee3",l);f=n.originalEvent.targetTouches?n.originalEvent.targetTouches[0].pageX:n.pageX;e=n.originalEvent.targetTouches?n.originalEvent.targetTouches[0].pageY:n.pageY})},remove:function(){n(this).off(t.startevent,n(this).data.callee1).off(t.endevent,n(this).data.callee2).off(t.moveevent,n(this).data.callee3)}},n.event.special.doubletap={setup:function(){var s=this,r=n(s),h,f,e,u,c,o=!1;r.on(t.startevent,function l(n){return n.which&&n.which!==1?!1:(r.data("doubletapped",!1),h=n.target,r.data("callee1",l),u=n.originalEvent,e={position:{x:t.touch_capable?u.touches[0].screenX:n.screenX,y:t.touch_capable?u.touches[0].screenY:n.screenY},offset:{x:t.touch_capable?u.touches[0].pageX-u.touches[0].target.offsetLeft:n.offsetX,y:t.touch_capable?u.touches[0].pageY-u.touches[0].target.offsetTop:n.offsetY},time:Date.now(),target:n.target},!0)}).on(t.endevent,function a(n){var u=Date.now(),p=r.data("lastTouch")||u+1,v=u-p,l,y;window.clearTimeout(f);r.data("callee2",a);v<t.doubletap_int&&n.target==h&&v>100?(r.data("doubletapped",!0),window.clearTimeout(t.tap_timer),l={position:{x:t.touch_capable?n.originalEvent.changedTouches[0].screenX:n.screenX,y:t.touch_capable?n.originalEvent.changedTouches[0].screenY:n.screenY},offset:{x:t.touch_capable?n.originalEvent.changedTouches[0].pageX-n.originalEvent.changedTouches[0].target.offsetLeft:n.offsetX,y:t.touch_capable?n.originalEvent.changedTouches[0].pageY-n.originalEvent.changedTouches[0].target.offsetTop:n.offsetY},time:Date.now(),target:n.target},y={firstTap:e,secondTap:l,interval:l.time-e.time},o||i(s,"doubletap",n,y),o=!0,c=window.setTimeout(function(){o=!1},t.doubletap_int)):(r.data("lastTouch",u),f=window.setTimeout(function(){window.clearTimeout(f)},t.doubletap_int,[n]));r.data("lastTouch",u)})},remove:function(){n(this).off(t.startevent,n(this).data.callee1).off(t.endevent,n(this).data.callee2)}},n.event.special.singletap={setup:function(){var f=this,r=n(f),e=null,o=null,u={x:0,y:0};r.on(t.startevent,function s(n){return n.which&&n.which!==1?!1:(o=Date.now(),e=n.target,r.data("callee1",s),u.x=n.originalEvent.targetTouches?n.originalEvent.targetTouches[0].pageX:n.pageX,u.y=n.originalEvent.targetTouches?n.originalEvent.targetTouches[0].pageY:n.pageY,!0)}).on(t.endevent,function h(n){if(r.data("callee2",h),n.target==e){var s=n.originalEvent.changedTouches?n.originalEvent.changedTouches[0].pageX:n.pageX,c=n.originalEvent.changedTouches?n.originalEvent.changedTouches[0].pageY:n.pageY;t.tap_timer=window.setTimeout(function(){if(!r.data("doubletapped")&&!r.data("tapheld")&&u.x==s&&u.y==c){var e=n.originalEvent,h={position:{x:t.touch_capable?e.changedTouches[0].screenX:n.screenX,y:t.touch_capable?e.changedTouches[0].screenY:n.screenY},offset:{x:t.touch_capable?e.changedTouches[0].pageX-e.changedTouches[0].target.offsetLeft:n.offsetX,y:t.touch_capable?e.changedTouches[0].pageY-e.changedTouches[0].target.offsetTop:n.offsetY},time:Date.now(),target:n.target};h.time-o<t.taphold_threshold&&i(f,"singletap",n,h)}},t.doubletap_int)}})},remove:function(){n(this).off(t.startevent,n(this).data.callee1).off(t.endevent,n(this).data.callee2)}},n.event.special.tap={setup:function(){var e=this,u=n(e),o=!1,s=null,h,r={x:0,y:0},f;u.on(t.startevent,function c(n){return u.data("callee1",c),n.which&&n.which!==1?!1:(o=!0,r.x=n.originalEvent.targetTouches?n.originalEvent.targetTouches[0].pageX:n.pageX,r.y=n.originalEvent.targetTouches?n.originalEvent.targetTouches[0].pageY:n.pageY,h=Date.now(),s=n.target,f=n.originalEvent.targetTouches?n.originalEvent.targetTouches:[n],!0)}).on(t.endevent,function l(n){var a,y,c,d;u.data("callee2",l);var p=n.originalEvent.targetTouches?n.originalEvent.changedTouches[0].pageX:n.pageX,w=n.originalEvent.targetTouches?n.originalEvent.changedTouches[0].pageY:n.pageY,b=r.x-p,k=r.y-w,v;if(s==n.target&&o&&Date.now()-h<t.taphold_threshold&&(r.x==p&&r.y==w||b>=-t.tap_pixel_range&&b<=t.tap_pixel_range&&k>=-t.tap_pixel_range&&k<=t.tap_pixel_range)){for(a=n.originalEvent,y=[],c=0;c<f.length;c++)d={position:{x:t.touch_capable?a.changedTouches[c].screenX:n.screenX,y:t.touch_capable?a.changedTouches[c].screenY:n.screenY},offset:{x:t.touch_capable?a.changedTouches[c].pageX-a.changedTouches[c].target.offsetLeft:n.offsetX,y:t.touch_capable?a.changedTouches[c].pageY-a.changedTouches[c].target.offsetTop:n.offsetY},time:Date.now(),target:n.target},y.push(d);switch(f.length){case 1:v="tap";break;case 2:v="tap2";break;case 3:v="tap3";break;case 4:v="tap4"}i(e,v,n,y)}})},remove:function(){n(this).off(t.startevent,n(this).data.callee1).off(t.endevent,n(this).data.callee2)}},n.event.special.swipe={setup:function(){function s(o){i=n(o.currentTarget);i.data("callee1",s);u.x=o.originalEvent.targetTouches?o.originalEvent.targetTouches[0].pageX:o.pageX;u.y=o.originalEvent.targetTouches?o.originalEvent.targetTouches[0].pageY:o.pageY;f.x=u.x;f.y=u.y;e=!0;var h=o.originalEvent;r={position:{x:t.touch_capable?h.touches[0].screenX:o.screenX,y:t.touch_capable?h.touches[0].screenY:o.screenY},offset:{x:t.touch_capable?h.touches[0].pageX-h.touches[0].target.offsetLeft:o.offsetX,y:t.touch_capable?h.touches[0].pageY-h.touches[0].target.offsetTop:o.offsetY},time:Date.now(),target:o.target}}function h(s){i=n(s.currentTarget);i.data("callee2",h);f.x=s.originalEvent.targetTouches?s.originalEvent.targetTouches[0].pageX:s.pageX;f.y=s.originalEvent.targetTouches?s.originalEvent.targetTouches[0].pageY:s.pageY;var c,a=i.parent().data("xthreshold")?i.parent().data("xthreshold"):i.data("xthreshold"),v=i.parent().data("ythreshold")?i.parent().data("ythreshold"):i.data("ythreshold"),p=typeof a!="undefined"&&a!==!1&&parseInt(a)?parseInt(a):t.swipe_h_threshold,w=typeof v!="undefined"&&v!==!1&&parseInt(v)?parseInt(v):t.swipe_v_threshold;if(u.y>f.y&&u.y-f.y>w&&(c="swipeup"),u.x<f.x&&f.x-u.x>p&&(c="swiperight"),u.y<f.y&&f.y-u.y>w&&(c="swipedown"),u.x>f.x&&u.x-f.x>p&&(c="swipeleft"),c!=undefined&&e){u.x=0;u.y=0;f.x=0;f.y=0;e=!1;var l=s.originalEvent,y={position:{x:t.touch_capable?l.touches[0].screenX:s.screenX,y:t.touch_capable?l.touches[0].screenY:s.screenY},offset:{x:t.touch_capable?l.touches[0].pageX-l.touches[0].target.offsetLeft:s.offsetX,y:t.touch_capable?l.touches[0].pageY-l.touches[0].target.offsetTop:s.offsetY},time:Date.now(),target:s.target},k=Math.abs(r.position.x-y.position.x),d=Math.abs(r.position.y-y.position.y),b={startEvnt:r,endEvnt:y,direction:c.replace("swipe",""),xAmount:k,yAmount:d,duration:y.time-r.time};o=!0;i.trigger("swipe",b).trigger(c,b)}}function c(u){var s;if(i=n(u.currentTarget),s="",i.data("callee3",c),o){var l=i.data("xthreshold"),a=i.data("ythreshold"),v=typeof l!="undefined"&&l!==!1&&parseInt(l)?parseInt(l):t.swipe_h_threshold,y=typeof a!="undefined"&&a!==!1&&parseInt(a)?parseInt(a):t.swipe_v_threshold,h=u.originalEvent,f={position:{x:t.touch_capable?h.changedTouches[0].screenX:u.screenX,y:t.touch_capable?h.changedTouches[0].screenY:u.screenY},offset:{x:t.touch_capable?h.changedTouches[0].pageX-h.changedTouches[0].target.offsetLeft:u.offsetX,y:t.touch_capable?h.changedTouches[0].pageY-h.changedTouches[0].target.offsetTop:u.offsetY},time:Date.now(),target:u.target};r.position.y>f.position.y&&r.position.y-f.position.y>y&&(s="swipeup");r.position.x<f.position.x&&f.position.x-r.position.x>v&&(s="swiperight");r.position.y<f.position.y&&f.position.y-r.position.y>y&&(s="swipedown");r.position.x>f.position.x&&r.position.x-f.position.x>v&&(s="swipeleft");var p=Math.abs(r.position.x-f.position.x),w=Math.abs(r.position.y-f.position.y),b={startEvnt:r,endEvnt:f,direction:s.replace("swipe",""),xAmount:p,yAmount:w,duration:f.time-r.time};i.trigger("swipeend",b)}e=!1;o=!1}var l=this,i=n(l),e=!1,o=!1,u={x:0,y:0},f={x:0,y:0},r;i.on(t.startevent,s);i.on(t.moveevent,h);i.on(t.endevent,c)},remove:function(){n(this).off(t.startevent,n(this).data.callee1).off(t.moveevent,n(this).data.callee2).off(t.endevent,n(this).data.callee3)}},n.event.special.scrollstart={setup:function(){function o(n,t){r=t;i(u,r?"scrollstart":"scrollend",n)}var u=this,f=n(u),r,e;f.on(t.scrollevent,function s(n){f.data("callee",s);r||o(n,!0);clearTimeout(e);e=setTimeout(function(){o(n,!1)},50)})},remove:function(){n(this).off(t.scrollevent,n(this).data.callee)}},f=n(window),o={"0":!0,"180":!0},t.orientation_support){var p=window.innerWidth||f.width(),w=window.innerHeight||f.height();h=p>w&&p-w>50;c=o[window.orientation];(h&&c||!h&&!c)&&(o={"-90":!0,"90":!0})}n.event.special.orientationchange=g={setup:function(){if(t.orientation_support)return!1;s=e();f.on("throttledresize",l);return!0},teardown:function(){return t.orientation_support?!1:(f.off("throttledresize",l),!0)},add:function(n){var t=n.handler;n.handler=function(n){return n.orientation=e(),t.apply(this,arguments)}}};n.event.special.orientationchange.orientation=e=function(){var i=!0,n=document.documentElement;return i=t.orientation_support?o[window.orientation]:n&&n.clientWidth/n.clientHeight<1.1,i?"portrait":"landscape"};n.event.special.throttledresize={setup:function(){n(this).on("resize",k)},teardown:function(){n(this).off("resize",k)}};var b=250,k=function(){v=Date.now();y=v-d;y>=b?(d=v,n(this).trigger("throttledresize")):(a&&window.clearTimeout(a),a=window.setTimeout(l,b-y))},d=0,a,v,y;n.each({scrollend:"scrollstart",swipeup:"swipe",swiperight:"swipe",swipedown:"swipe",swipeleft:"swipe",swipeend:"swipe",tap2:"tap"},function(t,i){n.event.special[t]={setup:function(){n(this).on(i,n.noop)}}})})(jQuery)
//
// /!**
//  * Owl carousel
//  * @version 2.0.0-beta.3
//  * @author Bartosz Wojciechowski
//  * @license The MIT License (MIT)
//  * @todo Lazy Load Icon
//  * @todo prevent animationend bubling
//  * @todo itemsScaleUp
//  * @todo Test Zepto
//  * @todo stagePadding calculate wrong active classes
//  *!/
// ;(function($, window, document, undefined) {
//
//     /!**
//      * Creates a carousel.
//      * @class The Owl Carousel.
//      * @public
//      * @param {HTMLElement|jQuery} element - The element to create the carousel for.
//      * @param {Object} [options] - The options
//      *!/
//     function Owl(element, options) {
//
//         /!**
//          * Current settings for the carousel.
//          * @public
//          *!/
//         this.settings = null;
//
//         /!**
//          * Current options set by the caller including defaults.
//          * @public
//          *!/
//         this.options = $.extend({}, Owl.Defaults, options);
//
//         /!**
//          * Plugin element.
//          * @public
//          *!/
//         this.$element = $(element);
//
//         /!**
//          * Proxied event handlers.
//          * @protected
//          *!/
//         this._handlers = {};
//
//         /!**
//          * References to the running plugins of this carousel.
//          * @protected
//          *!/
//         this._plugins = {};
//
//         /!**
//          * Currently suppressed events to prevent them from beeing retriggered.
//          * @protected
//          *!/
//         this._supress = {};
//
//         /!**
//          * Absolute current position.
//          * @protected
//          *!/
//         this._current = null;
//
//         /!**
//          * Animation speed in milliseconds.
//          * @protected
//          *!/
//         this._speed = null;
//
//         /!**
//          * Coordinates of all items in pixel.
//          * @todo The name of this member is missleading.
//          * @protected
//          *!/
//         this._coordinates = [];
//
//         /!**
//          * Current breakpoint.
//          * @todo Real media queries would be nice.
//          * @protected
//          *!/
//         this._breakpoint = null;
//
//         /!**
//          * Current width of the plugin element.
//          *!/
//         this._width = null;
//
//         /!**
//          * All real items.
//          * @protected
//          *!/
//         this._items = [];
//
//         /!**
//          * All cloned items.
//          * @protected
//          *!/
//         this._clones = [];
//
//         /!**
//          * Merge values of all items.
//          * @todo Maybe this could be part of a plugin.
//          * @protected
//          *!/
//         this._mergers = [];
//
//         /!**
//          * Widths of all items.
//          *!/
//         this._widths = [];
//
//         /!**
//          * Invalidated parts within the update process.
//          * @protected
//          *!/
//         this._invalidated = {};
//
//         /!**
//          * Ordered list of workers for the update process.
//          * @protected
//          *!/
//         this._pipe = [];
//
//         /!**
//          * Current state information for the drag operation.
//          * @todo #261
//          * @protected
//          *!/
//         this._drag = {
//             time: null,
//             target: null,
//             pointer: null,
//             stage: {
//                 start: null,
//                 current: null
//             },
//             direction: null
//         };
//
//         /!**
//          * Current state information and their tags.
//          * @type {Object}
//          * @protected
//          *!/
//         this._states = {
//             current: {},
//             tags: {
//                 'initializing': [ 'busy' ],
//                 'animating': [ 'busy' ],
//                 'dragging': [ 'interacting' ]
//             }
//         };
//
//         $.each([ 'onResize', 'onThrottledResize' ], $.proxy(function(i, handler) {
//             this._handlers[handler] = $.proxy(this[handler], this);
//         }, this));
//
//         $.each(Owl.Plugins, $.proxy(function(key, plugin) {
//             this._plugins[key.charAt(0).toLowerCase() + key.slice(1)]
//                 = new plugin(this);
//         }, this));
//
//         $.each(Owl.Workers, $.proxy(function(priority, worker) {
//             this._pipe.push({
//                 'filter': worker.filter,
//                 'run': $.proxy(worker.run, this)
//             });
//         }, this));
//
//         this.setup();
//         this.initialize();
//     }
//
//     /!**
//      * Default options for the carousel.
//      * @public
//      *!/
//     Owl.Defaults = {
//         items: 3,
//         loop: false,
//         center: false,
//         rewind: false,
//
//         mouseDrag: true,
//         touchDrag: true,
//         pullDrag: true,
//         freeDrag: false,
//
//         margin: 0,
//         stagePadding: 0,
//
//         merge: false,
//         mergeFit: true,
//         autoWidth: false,
//
//         startPosition: 0,
//         rtl: false,
//
//         smartSpeed: 250,
//         fluidSpeed: false,
//         dragEndSpeed: false,
//
//         responsive: {},
//         responsiveRefreshRate: 200,
//         responsiveBaseElement: window,
//
//         fallbackEasing: 'swing',
//
//         info: false,
//
//         nestedItemSelector: false,
//         itemElement: 'div',
//         stageElement: 'div',
//
//         refreshClass: 'owl-refresh',
//         loadedClass: 'owl-loaded',
//         loadingClass: 'owl-loading',
//         rtlClass: 'owl-rtl',
//         responsiveClass: 'owl-responsive',
//         dragClass: 'owl-drag',
//         itemClass: 'owl-item',
//         stageClass: 'owl-stage',
//         stageOuterClass: 'owl-stage-outer',
//         grabClass: 'owl-grab'
//     };
//
//     /!**
//      * Enumeration for width.
//      * @public
//      * @readonly
//      * @enum {String}
//      *!/
//     Owl.Width = {
//         Default: 'default',
//         Inner: 'inner',
//         Outer: 'outer'
//     };
//
//     /!**
//      * Enumeration for types.
//      * @public
//      * @readonly
//      * @enum {String}
//      *!/
//     Owl.Type = {
//         Event: 'event',
//         State: 'state'
//     };
//
//     /!**
//      * Contains all registered plugins.
//      * @public
//      *!/
//     Owl.Plugins = {};
//
//     /!**
//      * List of workers involved in the update process.
//      *!/
//     Owl.Workers = [ {
//         filter: [ 'width', 'settings' ],
//         run: function() {
//             this._width = this.$element.width();
//         }
//     }, {
//         filter: [ 'width', 'items', 'settings' ],
//         run: function(cache) {
//             cache.current = this._items && this._items[this.relative(this._current)];
//         }
//     }, {
//         filter: [ 'items', 'settings' ],
//         run: function() {
//             this.$stage.children('.cloned').remove();
//         }
//     }, {
//         filter: [ 'width', 'items', 'settings' ],
//         run: function(cache) {
//             var margin = this.settings.margin || '',
//                 grid = !this.settings.autoWidth,
//                 rtl = this.settings.rtl,
//                 css = {
//                     'width': 'auto',
//                     'margin-left': rtl ? margin : '',
//                     'margin-right': rtl ? '' : margin
//                 };
//
//             !grid && this.$stage.children().css(css);
//
//             cache.css = css;
//         }
//     }, {
//         filter: [ 'width', 'items', 'settings' ],
//         run: function(cache) {
//             var width = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
//                 merge = null,
//                 iterator = this._items.length,
//                 grid = !this.settings.autoWidth,
//                 widths = [];
//
//             cache.items = {
//                 merge: false,
//                 width: width
//             };
//
//             while (iterator--) {
//                 merge = this._mergers[iterator];
//                 merge = this.settings.mergeFit && Math.min(merge, this.settings.items) || merge;
//
//                 cache.items.merge = merge > 1 || cache.items.merge;
//
//                 widths[iterator] = !grid ? this._items[iterator].width() : width * merge;
//             }
//
//             this._widths = widths;
//         }
//     }, {
//         filter: [ 'items', 'settings' ],
//         run: function() {
//             var clones = [],
//                 items = this._items,
//                 settings = this.settings,
//                 view = Math.max(settings.items * 2, 4),
//                 size = Math.ceil(items.length / 2) * 2,
//                 repeat = settings.loop && items.length ? settings.rewind ? view : Math.max(view, size) : 0,
//                 append = '',
//                 prepend = '';
//
//             repeat /= 2;
//
//             while (repeat--) {
//                 clones.push(this.normalize(clones.length / 2, true));
//                 append = append + items[clones[clones.length - 1]][0].outerHTML;
//                 clones.push(this.normalize(items.length - 1 - (clones.length - 1) / 2, true));
//                 prepend = items[clones[clones.length - 1]][0].outerHTML + prepend;
//             }
//
//             this._clones = clones;
//
//             $(append).addClass('cloned').appendTo(this.$stage);
//             $(prepend).addClass('cloned').prependTo(this.$stage);
//         }
//     }, {
//         filter: [ 'width', 'items', 'settings' ],
//         run: function() {
//             var rtl = this.settings.rtl ? 1 : -1,
//                 size = this._clones.length + this._items.length,
//                 iterator = -1,
//                 previous = 0,
//                 current = 0,
//                 coordinates = [];
//
//             while (++iterator < size) {
//                 previous = coordinates[iterator - 1] || 0;
//                 current = this._widths[this.relative(iterator)] + this.settings.margin;
//                 coordinates.push(previous + current * rtl);
//             }
//
//             this._coordinates = coordinates;
//         }
//     }, {
//         filter: [ 'width', 'items', 'settings' ],
//         run: function() {
//             var padding = this.settings.stagePadding,
//                 coordinates = this._coordinates,
//                 css = {
//                     'width': Math.ceil(Math.abs(coordinates[coordinates.length - 1])) + padding * 2,
//                     'padding-left': padding || '',
//                     'padding-right': padding || ''
//                 };
//
//             this.$stage.css(css);
//         }
//     }, {
//         filter: [ 'width', 'items', 'settings' ],
//         run: function(cache) {
//             var iterator = this._coordinates.length,
//                 grid = !this.settings.autoWidth,
//                 items = this.$stage.children();
//
//             if (grid && cache.items.merge) {
//                 while (iterator--) {
//                     cache.css.width = this._widths[this.relative(iterator)];
//                     items.eq(iterator).css(cache.css);
//                 }
//             } else if (grid) {
//                 cache.css.width = cache.items.width;
//                 items.css(cache.css);
//             }
//         }
//     }, {
//         filter: [ 'items' ],
//         run: function() {
//             this._coordinates.length < 1 && this.$stage.removeAttr('style');
//         }
//     }, {
//         filter: [ 'width', 'items', 'settings' ],
//         run: function(cache) {
//             cache.current = cache.current ? this.$stage.children().index(cache.current) : 0;
//             cache.current = Math.max(this.minimum(), Math.min(this.maximum(), cache.current));
//             this.reset(cache.current);
//         }
//     }, {
//         filter: [ 'position' ],
//         run: function() {
//             this.animate(this.coordinates(this._current));
//         }
//     }, {
//         filter: [ 'width', 'position', 'items', 'settings' ],
//         run: function() {
//             var rtl = this.settings.rtl ? 1 : -1,
//                 padding = this.settings.stagePadding * 2,
//                 begin = this.coordinates(this.current()) + padding,
//                 end = begin + this.width() * rtl,
//                 inner, outer, matches = [], i, n;
//
//             for (i = 0, n = this._coordinates.length; i < n; i++) {
//                 inner = this._coordinates[i - 1] || 0;
//                 outer = Math.abs(this._coordinates[i]) + padding * rtl;
//
//                 if ((this.op(inner, '<=', begin) && (this.op(inner, '>', end)))
//                     || (this.op(outer, '<', begin) && this.op(outer, '>', end))) {
//                     matches.push(i);
//                 }
//             }
//
//             this.$stage.children('.active').removeClass('active');
//             this.$stage.children(':eq(' + matches.join('), :eq(') + ')').addClass('active');
//
//             if (this.settings.center) {
//                 this.$stage.children('.center').removeClass('center');
//                 this.$stage.children().eq(this.current()).addClass('center');
//             }
//         }
//     } ];
//
//     /!**
//      * Initializes the carousel.
//      * @protected
//      *!/
//     Owl.prototype.initialize = function() {
//         this.enter('initializing');
//         this.trigger('initialize');
//
//         this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl);
//
//         if (this.settings.autoWidth && !this.is('pre-loading')) {
//             var imgs, nestedSelector, width;
//             imgs = this.$element.find('img');
//             nestedSelector = this.settings.nestedItemSelector ? '.' + this.settings.nestedItemSelector : undefined;
//             width = this.$element.children(nestedSelector).width();
//
//             if (imgs.length && width <= 0) {
//                 this.preloadAutoWidthImages(imgs);
//             }
//         }
//
//         this.$element.addClass(this.options.loadingClass);
//
//         // create stage
//         this.$stage = $('<' + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>')
//             .wrap('<div class="' + this.settings.stageOuterClass + '"/>');
//
//         // append stage
//         this.$element.append(this.$stage.parent());
//
//         // append content
//         this.replace(this.$element.children().not(this.$stage.parent()));
//
//         // check visibility
//         if (this.$element.is(':visible')) {
//             // update view
//             this.refresh();
//         } else {
//             // invalidate width
//             this.invalidate('width');
//         }
//
//         this.$element
//             .removeClass(this.options.loadingClass)
//             .addClass(this.options.loadedClass);
//
//         // register event handlers
//         this.registerEventHandlers();
//
//         this.leave('initializing');
//         this.trigger('initialized');
//     };
//
//     /!**
//      * Setups the current settings.
//      * @todo Remove responsive classes. Why should adaptive designs be brought into IE8?
//      * @todo Support for media queries by using `matchMedia` would be nice.
//      * @public
//      *!/
//     Owl.prototype.setup = function() {
//         var viewport = this.viewport(),
//             overwrites = this.options.responsive,
//             match = -1,
//             settings = null;
//
//         if (!overwrites) {
//             settings = $.extend({}, this.options);
//         } else {
//             $.each(overwrites, function(breakpoint) {
//                 if (breakpoint <= viewport && breakpoint > match) {
//                     match = Number(breakpoint);
//                 }
//             });
//
//             settings = $.extend({}, this.options, overwrites[match]);
//             delete settings.responsive;
//
//             // responsive class
//             if (settings.responsiveClass) {
//                 this.$element.attr('class',
//                     this.$element.attr('class').replace(new RegExp('(' + this.options.responsiveClass + '-)\\S+\\s', 'g'), '$1' + match)
//                 );
//             }
//         }
//
//         if (this.settings === null || this._breakpoint !== match) {
//             this.trigger('change', { property: { name: 'settings', value: settings } });
//             this._breakpoint = match;
//             this.settings = settings;
//             this.invalidate('settings');
//             this.trigger('changed', { property: { name: 'settings', value: this.settings } });
//         }
//     };
//
//     /!**
//      * Updates option logic if necessery.
//      * @protected
//      *!/
//     Owl.prototype.optionsLogic = function() {
//         if (this.settings.autoWidth) {
//             this.settings.stagePadding = false;
//             this.settings.merge = false;
//         }
//     };
//
//     /!**
//      * Prepares an item before add.
//      * @todo Rename event parameter `content` to `item`.
//      * @protected
//      * @returns {jQuery|HTMLElement} - The item container.
//      *!/
//     Owl.prototype.prepare = function(item) {
//         var event = this.trigger('prepare', { content: item });
//
//         if (!event.data) {
//             event.data = $('<' + this.settings.itemElement + '/>')
//                 .addClass(this.options.itemClass).append(item)
//         }
//
//         this.trigger('prepared', { content: event.data });
//
//         return event.data;
//     };
//
//     /!**
//      * Updates the view.
//      * @public
//      *!/
//     Owl.prototype.update = function() {
//         var i = 0,
//             n = this._pipe.length,
//             filter = $.proxy(function(p) { return this[p] }, this._invalidated),
//             cache = {};
//
//         while (i < n) {
//             if (this._invalidated.all || $.grep(this._pipe[i].filter, filter).length > 0) {
//                 this._pipe[i].run(cache);
//             }
//             i++;
//         }
//
//         this._invalidated = {};
//
//         !this.is('valid') && this.enter('valid');
//     };
//
//     /!**
//      * Gets the width of the view.
//      * @public
//      * @param {Owl.Width} [dimension=Owl.Width.Default] - The dimension to return.
//      * @returns {Number} - The width of the view in pixel.
//      *!/
//     Owl.prototype.width = function(dimension) {
//         dimension = dimension || Owl.Width.Default;
//         switch (dimension) {
//             case Owl.Width.Inner:
//             case Owl.Width.Outer:
//                 return this._width;
//             default:
//                 return this._width - this.settings.stagePadding * 2 + this.settings.margin;
//         }
//     };
//
//     /!**
//      * Refreshes the carousel primarily for adaptive purposes.
//      * @public
//      *!/
//     Owl.prototype.refresh = function() {
//         this.enter('refreshing');
//         this.trigger('refresh');
//
//         this.setup();
//
//         this.optionsLogic();
//
//         this.$element.addClass(this.options.refreshClass);
//
//         this.update();
//
//         this.$element.removeClass(this.options.refreshClass);
//
//         this.leave('refreshing');
//         this.trigger('refreshed');
//     };
//
//     /!**
//      * Checks window `resize` event.
//      * @protected
//      *!/
//     Owl.prototype.onThrottledResize = function() {
//         window.clearTimeout(this.resizeTimer);
//         this.resizeTimer = window.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate);
//     };
//
//     /!**
//      * Checks window `resize` event.
//      * @protected
//      *!/
//     Owl.prototype.onResize = function() {
//         if (!this._items.length) {
//             return false;
//         }
//
//         if (this._width === this.$element.width()) {
//             return false;
//         }
//
//         if (!this.$element.is(':visible')) {
//             return false;
//         }
//
//         this.enter('resizing');
//
//         if (this.trigger('resize').isDefaultPrevented()) {
//             this.leave('resizing');
//             return false;
//         }
//
//         this.invalidate('width');
//
//         this.refresh();
//
//         this.leave('resizing');
//         this.trigger('resized');
//     };
//
//     /!**
//      * Registers event handlers.
//      * @todo Check `msPointerEnabled`
//      * @todo #261
//      * @protected
//      *!/
//     Owl.prototype.registerEventHandlers = function() {
//         if ($.support.transition) {
//             this.$stage.on($.support.transition.end + '.owl.core', $.proxy(this.onTransitionEnd, this));
//         }
//
//         if (this.settings.responsive !== false) {
//             this.on(window, 'resize', this._handlers.onThrottledResize);
//         }
//
//         if (this.settings.mouseDrag) {
//             this.$element.addClass(this.options.dragClass);
//             this.$stage.on('mousedown.owl.core', $.proxy(this.onDragStart, this));
//             this.$stage.on('dragstart.owl.core selectstart.owl.core', function() { return false });
//         }
//
//         if (this.settings.touchDrag){
//             this.$stage.on('touchstart.owl.core', $.proxy(this.onDragStart, this));
//             this.$stage.on('touchcancel.owl.core', $.proxy(this.onDragEnd, this));
//         }
//     };
//
//     /!**
//      * Handles `touchstart` and `mousedown` events.
//      * @todo Horizontal swipe threshold as option
//      * @todo #261
//      * @protected
//      * @param {Event} event - The event arguments.
//      *!/
//     Owl.prototype.onDragStart = function(event) {
//         var stage = null;
//
//         if (event.which === 3) {
//             return;
//         }
//
//         if ($.support.transform) {
//             stage = this.$stage.css('transform').replace(/.*\(|\)| /g, '').split(',');
//             stage = {
//                 x: stage[stage.length === 16 ? 12 : 4],
//                 y: stage[stage.length === 16 ? 13 : 5]
//             };
//         } else {
//             stage = this.$stage.position();
//             stage = {
//                 x: this.settings.rtl ?
//                     stage.left + this.$stage.width() - this.width() + this.settings.margin :
//                     stage.left,
//                 y: stage.top
//             };
//         }
//
//         if (this.is('animating')) {
//             $.support.transform ? this.animate(stage.x) : this.$stage.stop()
//             this.invalidate('position');
//         }
//
//         this.$element.toggleClass(this.options.grabClass, event.type === 'mousedown');
//
//         this.speed(0);
//
//         this._drag.time = new Date().getTime();
//         this._drag.target = $(event.target);
//         this._drag.stage.start = stage;
//         this._drag.stage.current = stage;
//         this._drag.pointer = this.pointer(event);
//
//         $(document).on('mouseup.owl.core touchend.owl.core', $.proxy(this.onDragEnd, this));
//
//         $(document).one('mousemove.owl.core touchmove.owl.core', $.proxy(function(event) {
//             var delta = this.difference(this._drag.pointer, this.pointer(event));
//
//             $(document).on('mousemove.owl.core touchmove.owl.core', $.proxy(this.onDragMove, this));
//
//             if (Math.abs(delta.x) < Math.abs(delta.y) && this.is('valid')) {
//                 return;
//             }
//
//             event.preventDefault();
//
//             this.enter('dragging');
//             this.trigger('drag');
//         }, this));
//     };
//
//     /!**
//      * Handles the `touchmove` and `mousemove` events.
//      * @todo #261
//      * @protected
//      * @param {Event} event - The event arguments.
//      *!/
//     Owl.prototype.onDragMove = function(event) {
//         var minimum = null,
//             maximum = null,
//             pull = null,
//             delta = this.difference(this._drag.pointer, this.pointer(event)),
//             stage = this.difference(this._drag.stage.start, delta);
//
//         if (!this.is('dragging')) {
//             return;
//         }
//
//         event.preventDefault();
//
//         if (this.settings.loop) {
//             minimum = this.coordinates(this.minimum());
//             maximum = this.coordinates(this.maximum() + 1) - minimum;
//             stage.x = (((stage.x - minimum) % maximum + maximum) % maximum) + minimum;
//         } else {
//             minimum = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum());
//             maximum = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum());
//             pull = this.settings.pullDrag ? -1 * delta.x / 5 : 0;
//             stage.x = Math.max(Math.min(stage.x, minimum + pull), maximum + pull);
//         }
//
//         this._drag.stage.current = stage;
//
//         this.animate(stage.x);
//     };
//
//     /!**
//      * Handles the `touchend` and `mouseup` events.
//      * @todo #261
//      * @todo Threshold for click event
//      * @protected
//      * @param {Event} event - The event arguments.
//      *!/
//     Owl.prototype.onDragEnd = function(event) {
//         var delta = this.difference(this._drag.pointer, this.pointer(event)),
//             stage = this._drag.stage.current,
//             direction = delta.x > 0 ^ this.settings.rtl ? 'left' : 'right';
//
//         $(document).off('.owl.core');
//
//         this.$element.removeClass(this.options.grabClass);
//
//         if (delta.x !== 0 && this.is('dragging') || !this.is('valid')) {
//             this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed);
//             this.current(this.closest(stage.x, delta.x !== 0 ? direction : this._drag.direction));
//             this.invalidate('position');
//             this.update();
//
//             this._drag.direction = direction;
//
//             if (Math.abs(delta.x) > 3 || new Date().getTime() - this._drag.time > 300) {
//                 this._drag.target.one('click.owl.core', function() { return false; });
//             }
//         }
//
//         if (!this.is('dragging')) {
//             return;
//         }
//
//         this.leave('dragging');
//         this.trigger('dragged');
//     };
//
//     /!**
//      * Gets absolute position of the closest item for a coordinate.
//      * @todo Setting `freeDrag` makes `closest` not reusable. See #165.
//      * @protected
//      * @param {Number} coordinate - The coordinate in pixel.
//      * @param {String} direction - The direction to check for the closest item. Ether `left` or `right`.
//      * @return {Number} - The absolute position of the closest item.
//      *!/
//     Owl.prototype.closest = function(coordinate, direction) {
//         var position = -1,
//             pull = 30,
//             width = this.width(),
//             coordinates = this.coordinates();
//
//         if (!this.settings.freeDrag) {
//             // check closest item
//             $.each(coordinates, $.proxy(function(index, value) {
//                 if (coordinate > value - pull && coordinate < value + pull) {
//                     position = index;
//                 } else if (this.op(coordinate, '<', value)
//                     && this.op(coordinate, '>', coordinates[index + 1] || value - width)) {
//                     position = direction === 'left' ? index + 1 : index;
//                 }
//                 return position === -1;
//             }, this));
//         }
//
//         if (!this.settings.loop) {
//             // non loop boundries
//             if (this.op(coordinate, '>', coordinates[this.minimum()])) {
//                 position = coordinate = this.minimum();
//             } else if (this.op(coordinate, '<', coordinates[this.maximum()])) {
//                 position = coordinate = this.maximum();
//             }
//         }
//
//         return position;
//     };
//
//     /!**
//      * Animates the stage.
//      * @todo #270
//      * @public
//      * @param {Number} coordinate - The coordinate in pixels.
//      *!/
//     Owl.prototype.animate = function(coordinate) {
//         var animate = this.speed() > 0;
//
//         this.is('animating') && this.onTransitionEnd();
//
//         if (animate) {
//             this.enter('animating');
//             this.trigger('translate');
//         }
//
//         if ($.support.transform3d && $.support.transition) {
//             this.$stage.css({
//                 transform: 'translate3d(' + coordinate + 'px,0px,0px)',
//                 transition: (this.speed() / 1000) + 's'
//             });
//         } else if (animate) {
//             this.$stage.animate({
//                 left: coordinate + 'px'
//             }, this.speed(), this.settings.fallbackEasing, $.proxy(this.onTransitionEnd, this));
//         } else {
//             this.$stage.css({
//                 left: coordinate + 'px'
//             });
//         }
//     };
//
//     /!**
//      * Checks whether the carousel is in a specific state or not.
//      * @param {String} state - The state to check.
//      * @returns {Boolean} - The flag which indicates if the carousel is busy.
//      *!/
//     Owl.prototype.is = function(state) {
//         return this._states.current[state] && this._states.current[state] > 0;
//     };
//
//     /!**
//      * Sets the absolute position of the current item.
//      * @public
//      * @param {Number} [position] - The new absolute position or nothing to leave it unchanged.
//      * @returns {Number} - The absolute position of the current item.
//      *!/
//     Owl.prototype.current = function(position) {
//         if (position === undefined) {
//             return this._current;
//         }
//
//         if (this._items.length === 0) {
//             return undefined;
//         }
//
//         position = this.normalize(position);
//
//         if (this._current !== position) {
//             var event = this.trigger('change', { property: { name: 'position', value: position } });
//
//             if (event.data !== undefined) {
//                 position = this.normalize(event.data);
//             }
//
//             this._current = position;
//
//             this.invalidate('position');
//
//             this.trigger('changed', { property: { name: 'position', value: this._current } });
//         }
//
//         return this._current;
//     };
//
//     /!**
//      * Invalidates the given part of the update routine.
//      * @param {String} [part] - The part to invalidate.
//      * @returns {Array.<String>} - The invalidated parts.
//      *!/
//     Owl.prototype.invalidate = function(part) {
//         if ($.type(part) === 'string') {
//             this._invalidated[part] = true;
//             this.is('valid') && this.leave('valid');
//         }
//         return $.map(this._invalidated, function(v, i) { return i });
//     };
//
//     /!**
//      * Resets the absolute position of the current item.
//      * @public
//      * @param {Number} position - The absolute position of the new item.
//      *!/
//     Owl.prototype.reset = function(position) {
//         position = this.normalize(position);
//
//         if (position === undefined) {
//             return;
//         }
//
//         this._speed = 0;
//         this._current = position;
//
//         this.suppress([ 'translate', 'translated' ]);
//
//         this.animate(this.coordinates(position));
//
//         this.release([ 'translate', 'translated' ]);
//     };
//
//     /!**
//      * Normalizes an absolute or a relative position of an item.
//      * @public
//      * @param {Number} position - The absolute or relative position to normalize.
//      * @param {Boolean} [relative=false] - Whether the given position is relative or not.
//      * @returns {Number} - The normalized position.
//      *!/
//     Owl.prototype.normalize = function(position, relative) {
//         var n = this._items.length,
//             m = relative ? 0 : this._clones.length;
//
//         if (!$.isNumeric(position) || n < 1) {
//             position = undefined;
//         } else if (position < 0 || position >= n + m) {
//             position = ((position - m / 2) % n + n) % n + m / 2;
//         }
//
//         return position;
//     };
//
//     /!**
//      * Converts an absolute position of an item into a relative one.
//      * @public
//      * @param {Number} position - The absolute position to convert.
//      * @returns {Number} - The converted position.
//      *!/
//     Owl.prototype.relative = function(position) {
//         position -= this._clones.length / 2;
//         return this.normalize(position, true);
//     };
//
//     /!**
//      * Gets the maximum position for the current item.
//      * @public
//      * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
//      * @returns {Number}
//      *!/
//     Owl.prototype.maximum = function(relative) {
//         var settings = this.settings,
//             maximum = this._coordinates.length,
//             boundary = Math.abs(this._coordinates[maximum - 1]) - this._width,
//             i = -1, j;
//
//         if (settings.loop) {
//             maximum = this._clones.length / 2 + this._items.length - 1;
//         } else if (settings.autoWidth || settings.merge) {
//             // binary search
//             while (maximum - i > 1) {
//                 Math.abs(this._coordinates[j = maximum + i >> 1]) < boundary
//                     ? i = j : maximum = j;
//             }
//         } else if (settings.center) {
//             maximum = this._items.length - 1;
//         } else {
//             maximum = this._items.length - settings.items;
//         }
//
//         if (relative) {
//             maximum -= this._clones.length / 2;
//         }
//
//         return Math.max(maximum, 0);
//     };
//
//     /!**
//      * Gets the minimum position for the current item.
//      * @public
//      * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
//      * @returns {Number}
//      *!/
//     Owl.prototype.minimum = function(relative) {
//         return relative ? 0 : this._clones.length / 2;
//     };
//
//     /!**
//      * Gets an item at the specified relative position.
//      * @public
//      * @param {Number} [position] - The relative position of the item.
//      * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
//      *!/
//     Owl.prototype.items = function(position) {
//         if (position === undefined) {
//             return this._items.slice();
//         }
//
//         position = this.normalize(position, true);
//         return this._items[position];
//     };
//
//     /!**
//      * Gets an item at the specified relative position.
//      * @public
//      * @param {Number} [position] - The relative position of the item.
//      * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
//      *!/
//     Owl.prototype.mergers = function(position) {
//         if (position === undefined) {
//             return this._mergers.slice();
//         }
//
//         position = this.normalize(position, true);
//         return this._mergers[position];
//     };
//
//     /!**
//      * Gets the absolute positions of clones for an item.
//      * @public
//      * @param {Number} [position] - The relative position of the item.
//      * @returns {Array.<Number>} - The absolute positions of clones for the item or all if no position was given.
//      *!/
//     Owl.prototype.clones = function(position) {
//         var odd = this._clones.length / 2,
//             even = odd + this._items.length,
//             map = function(index) { return index % 2 === 0 ? even + index / 2 : odd - (index + 1) / 2 };
//
//         if (position === undefined) {
//             return $.map(this._clones, function(v, i) { return map(i) });
//         }
//
//         return $.map(this._clones, function(v, i) { return v === position ? map(i) : null });
//     };
//
//     /!**
//      * Sets the current animation speed.
//      * @public
//      * @param {Number} [speed] - The animation speed in milliseconds or nothing to leave it unchanged.
//      * @returns {Number} - The current animation speed in milliseconds.
//      *!/
//     Owl.prototype.speed = function(speed) {
//         if (speed !== undefined) {
//             this._speed = speed;
//         }
//
//         return this._speed;
//     };
//
//     /!**
//      * Gets the coordinate of an item.
//      * @todo The name of this method is missleanding.
//      * @public
//      * @param {Number} position - The absolute position of the item within `minimum()` and `maximum()`.
//      * @returns {Number|Array.<Number>} - The coordinate of the item in pixel or all coordinates.
//      *!/
//     Owl.prototype.coordinates = function(position) {
//         var coordinate = null;
//
//         if (position === undefined) {
//             return $.map(this._coordinates, $.proxy(function(coordinate, index) {
//                 return this.coordinates(index);
//             }, this));
//         }
//
//         if (this.settings.center) {
//             coordinate = this._coordinates[position];
//             coordinate += (this.width() - coordinate + (this._coordinates[position - 1] || 0)) / 2 * (this.settings.rtl ? -1 : 1);
//         } else {
//             coordinate = this._coordinates[position - 1] || 0;
//         }
//
//         return coordinate;
//     };
//
//     /!**
//      * Calculates the speed for a translation.
//      * @protected
//      * @param {Number} from - The absolute position of the start item.
//      * @param {Number} to - The absolute position of the target item.
//      * @param {Number} [factor=undefined] - The time factor in milliseconds.
//      * @returns {Number} - The time in milliseconds for the translation.
//      *!/
//     Owl.prototype.duration = function(from, to, factor) {
//         return Math.min(Math.max(Math.abs(to - from), 1), 6) * Math.abs((factor || this.settings.smartSpeed));
//     };
//
//     /!**
//      * Slides to the specified item.
//      * @public
//      * @param {Number} position - The position of the item.
//      * @param {Number} [speed] - The time in milliseconds for the transition.
//      *!/
//     Owl.prototype.to = function(position, speed) {
//         var current = this.current(),
//             revert = null,
//             distance = position - this.relative(current),
//             direction = (distance > 0) - (distance < 0),
//             items = this._items.length,
//             minimum = this.minimum(),
//             maximum = this.maximum();
//
//         if (this.settings.loop) {
//             if (!this.settings.rewind && Math.abs(distance) > items / 2) {
//                 distance += direction * -1 * items;
//             }
//
//             position = current + distance;
//             revert = ((position - minimum) % items + items) % items + minimum;
//
//             if (revert !== position && revert - distance <= maximum && revert - distance > 0) {
//                 current = revert - distance;
//                 position = revert;
//                 this.reset(current);
//             }
//         } else if (this.settings.rewind) {
//             maximum += 1;
//             position = (position % maximum + maximum) % maximum;
//         } else {
//             position = Math.max(minimum, Math.min(maximum, position));
//         }
//
//         this.speed(this.duration(current, position, speed));
//         this.current(position);
//
//         if (this.$element.is(':visible')) {
//             this.update();
//         }
//     };
//
//     /!**
//      * Slides to the next item.
//      * @public
//      * @param {Number} [speed] - The time in milliseconds for the transition.
//      *!/
//     Owl.prototype.next = function(speed) {
//         speed = speed || false;
//         this.to(this.relative(this.current()) + 1, speed);
//     };
//
//     /!**
//      * Slides to the previous item.
//      * @public
//      * @param {Number} [speed] - The time in milliseconds for the transition.
//      *!/
//     Owl.prototype.prev = function(speed) {
//         speed = speed || false;
//         this.to(this.relative(this.current()) - 1, speed);
//     };
//
//     /!**
//      * Handles the end of an animation.
//      * @protected
//      * @param {Event} event - The event arguments.
//      *!/
//     Owl.prototype.onTransitionEnd = function(event) {
//
//         // if css2 animation then event object is undefined
//         if (event !== undefined) {
//             event.stopPropagation();
//
//             // Catch only owl-stage transitionEnd event
//             if ((event.target || event.srcElement || event.originalTarget) !== this.$stage.get(0)) {
//                 return false;
//             }
//         }
//
//         this.leave('animating');
//         this.trigger('translated');
//     };
//
//     /!**
//      * Gets viewport width.
//      * @protected
//      * @return {Number} - The width in pixel.
//      *!/
//     Owl.prototype.viewport = function() {
//         var width;
//         if (this.options.responsiveBaseElement !== window) {
//             width = $(this.options.responsiveBaseElement).width();
//         } else if (window.innerWidth) {
//             width = window.innerWidth;
//         } else if (document.documentElement && document.documentElement.clientWidth) {
//             width = document.documentElement.clientWidth;
//         } else {
//             throw 'Can not detect viewport width.';
//         }
//         return width;
//     };
//
//     /!**
//      * Replaces the current content.
//      * @public
//      * @param {HTMLElement|jQuery|String} content - The new content.
//      *!/
//     Owl.prototype.replace = function(content) {
//         this.$stage.empty();
//         this._items = [];
//
//         if (content) {
//             content = (content instanceof jQuery) ? content : $(content);
//         }
//
//         if (this.settings.nestedItemSelector) {
//             content = content.find('.' + this.settings.nestedItemSelector);
//         }
//
//         content.filter(function() {
//             return this.nodeType === 1;
//         }).each($.proxy(function(index, item) {
//             item = this.prepare(item);
//             this.$stage.append(item);
//             this._items.push(item);
//             this._mergers.push(item.find('[data-merge]').andSelf('[data-merge]').attr('data-merge') * 1 || 1);
//         }, this));
//
//         this.reset($.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0);
//
//         this.invalidate('items');
//     };
//
//     /!**
//      * Adds an item.
//      * @todo Use `item` instead of `content` for the event arguments.
//      * @public
//      * @param {HTMLElement|jQuery|String} content - The item content to add.
//      * @param {Number} [position] - The relative position at which to insert the item otherwise the item will be added to the end.
//      *!/
//     Owl.prototype.add = function(content, position) {
//         var current = this.relative(this._current);
//
//         position = position === undefined ? this._items.length : this.normalize(position, true);
//         content = content instanceof jQuery ? content : $(content);
//
//         this.trigger('add', { content: content, position: position });
//
//         content = this.prepare(content);
//
//         if (this._items.length === 0 || position === this._items.length) {
//             this._items.length === 0 && this.$stage.append(content);
//             this._items.length !== 0 && this._items[position - 1].after(content);
//             this._items.push(content);
//             this._mergers.push(content.find('[data-merge]').andSelf('[data-merge]').attr('data-merge') * 1 || 1);
//         } else {
//             this._items[position].before(content);
//             this._items.splice(position, 0, content);
//             this._mergers.splice(position, 0, content.find('[data-merge]').andSelf('[data-merge]').attr('data-merge') * 1 || 1);
//         }
//
//         this._items[current] && this.reset(this._items[current].index());
//
//         this.invalidate('items');
//
//         this.trigger('added', { content: content, position: position });
//     };
//
//     /!**
//      * Removes an item by its position.
//      * @todo Use `item` instead of `content` for the event arguments.
//      * @public
//      * @param {Number} position - The relative position of the item to remove.
//      *!/
//     Owl.prototype.remove = function(position) {
//         position = this.normalize(position, true);
//
//         if (position === undefined) {
//             return;
//         }
//
//         this.trigger('remove', { content: this._items[position], position: position });
//
//         this._items[position].remove();
//         this._items.splice(position, 1);
//         this._mergers.splice(position, 1);
//
//         this.invalidate('items');
//
//         this.trigger('removed', { content: null, position: position });
//     };
//
//     /!**
//      * Preloads images with auto width.
//      * @todo Replace by a more generic approach
//      * @protected
//      *!/
//     Owl.prototype.preloadAutoWidthImages = function(images) {
//         images.each($.proxy(function(i, element) {
//             this.enter('pre-loading');
//             element = $(element);
//             $(new Image()).one('load', $.proxy(function(e) {
//                 element.attr('src', e.target.src);
//                 element.css('opacity', 1);
//                 this.leave('pre-loading');
//                 !this.is('pre-loading') && !this.is('initializing') && this.refresh();
//             }, this)).attr('src', element.attr('src') || element.attr('data-src') || element.attr('data-src-retina'));
//         }, this));
//     };
//
//     /!**
//      * Destroys the carousel.
//      * @public
//      *!/
//     Owl.prototype.destroy = function() {
//
//         this.$element.off('.owl.core');
//         this.$stage.off('.owl.core');
//         $(document).off('.owl.core');
//
//         if (this.settings.responsive !== false) {
//             window.clearTimeout(this.resizeTimer);
//             this.off(window, 'resize', this._handlers.onThrottledResize);
//         }
//
//         for (var i in this._plugins) {
//             this._plugins[i].destroy();
//         }
//
//         this.$stage.children('.cloned').remove();
//
//         this.$stage.unwrap();
//         this.$stage.children().contents().unwrap();
//         this.$stage.children().unwrap();
//
//         this.$element
//             .removeClass(this.options.refreshClass)
//             .removeClass(this.options.loadingClass)
//             .removeClass(this.options.loadedClass)
//             .removeClass(this.options.rtlClass)
//             .removeClass(this.options.dragClass)
//             .removeClass(this.options.grabClass)
//             .attr('class', this.$element.attr('class').replace(new RegExp(this.options.responsiveClass + '-\\S+\\s', 'g'), ''))
//             .removeData('owl.carousel');
//     };
//
//     /!**
//      * Operators to calculate right-to-left and left-to-right.
//      * @protected
//      * @param {Number} [a] - The left side operand.
//      * @param {String} [o] - The operator.
//      * @param {Number} [b] - The right side operand.
//      *!/
//     Owl.prototype.op = function(a, o, b) {
//         var rtl = this.settings.rtl;
//         switch (o) {
//             case '<':
//                 return rtl ? a > b : a < b;
//             case '>':
//                 return rtl ? a < b : a > b;
//             case '>=':
//                 return rtl ? a <= b : a >= b;
//             case '<=':
//                 return rtl ? a >= b : a <= b;
//             default:
//                 break;
//         }
//     };
//
//     /!**
//      * Attaches to an internal event.
//      * @protected
//      * @param {HTMLElement} element - The event source.
//      * @param {String} event - The event name.
//      * @param {Function} listener - The event handler to attach.
//      * @param {Boolean} capture - Wether the event should be handled at the capturing phase or not.
//      *!/
//     Owl.prototype.on = function(element, event, listener, capture) {
//         if (element.addEventListener) {
//             element.addEventListener(event, listener, capture);
//         } else if (element.attachEvent) {
//             element.attachEvent('on' + event, listener);
//         }
//     };
//
//     /!**
//      * Detaches from an internal event.
//      * @protected
//      * @param {HTMLElement} element - The event source.
//      * @param {String} event - The event name.
//      * @param {Function} listener - The attached event handler to detach.
//      * @param {Boolean} capture - Wether the attached event handler was registered as a capturing listener or not.
//      *!/
//     Owl.prototype.off = function(element, event, listener, capture) {
//         if (element.removeEventListener) {
//             element.removeEventListener(event, listener, capture);
//         } else if (element.detachEvent) {
//             element.detachEvent('on' + event, listener);
//         }
//     };
//
//     /!**
//      * Triggers a public event.
//      * @todo Remove `status`, `relatedTarget` should be used instead.
//      * @protected
//      * @param {String} name - The event name.
//      * @param {*} [data=null] - The event data.
//      * @param {String} [namespace=carousel] - The event namespace.
//      * @param {String} [state] - The state which is associated with the event.
//      * @param {Boolean} [enter=false] - Indicates if the call enters the specified state or not.
//      * @returns {Event} - The event arguments.
//      *!/
//     Owl.prototype.trigger = function(name, data, namespace, state, enter) {
//         var status = {
//             item: { count: this._items.length, index: this.current() }
//         }, handler = $.camelCase(
//             $.grep([ 'on', name, namespace ], function(v) { return v })
//                 .join('-').toLowerCase()
//         ), event = $.Event(
//             [ name, 'owl', namespace || 'carousel' ].join('.').toLowerCase(),
//             $.extend({ relatedTarget: this }, status, data)
//         );
//
//         if (!this._supress[name]) {
//             $.each(this._plugins, function(name, plugin) {
//                 if (plugin.onTrigger) {
//                     plugin.onTrigger(event);
//                 }
//             });
//
//             this.register({ type: Owl.Type.Event, name: name });
//             this.$element.trigger(event);
//
//             if (this.settings && typeof this.settings[handler] === 'function') {
//                 this.settings[handler].call(this, event);
//             }
//         }
//
//         return event;
//     };
//
//     /!**
//      * Enters a state.
//      * @param name - The state name.
//      *!/
//     Owl.prototype.enter = function(name) {
//         $.each([ name ].concat(this._states.tags[name] || []), $.proxy(function(i, name) {
//             if (this._states.current[name] === undefined) {
//                 this._states.current[name] = 0;
//             }
//
//             this._states.current[name]++;
//         }, this));
//     };
//
//     /!**
//      * Leaves a state.
//      * @param name - The state name.
//      *!/
//     Owl.prototype.leave = function(name) {
//         $.each([ name ].concat(this._states.tags[name] || []), $.proxy(function(i, name) {
//             this._states.current[name]--;
//         }, this));
//     };
//
//     /!**
//      * Registers an event or state.
//      * @public
//      * @param {Object} object - The event or state to register.
//      *!/
//     Owl.prototype.register = function(object) {
//         if (object.type === Owl.Type.Event) {
//             if (!$.event.special[object.name]) {
//                 $.event.special[object.name] = {};
//             }
//
//             if (!$.event.special[object.name].owl) {
//                 var _default = $.event.special[object.name]._default;
//                 $.event.special[object.name]._default = function(e) {
//                     if (_default && _default.apply && (!e.namespace || e.namespace.indexOf('owl') === -1)) {
//                         return _default.apply(this, arguments);
//                     }
//                     return e.namespace && e.namespace.indexOf('owl') > -1;
//                 };
//                 $.event.special[object.name].owl = true;
//             }
//         } else if (object.type === Owl.Type.State) {
//             if (!this._states.tags[object.name]) {
//                 this._states.tags[object.name] = object.tags;
//             } else {
//                 this._states.tags[object.name] = this._states.tags[object.name].concat(object.tags);
//             }
//
//             this._states.tags[object.name] = $.grep(this._states.tags[object.name], $.proxy(function(tag, i) {
//                 return $.inArray(tag, this._states.tags[object.name]) === i;
//             }, this));
//         }
//     };
//
//     /!**
//      * Suppresses events.
//      * @protected
//      * @param {Array.<String>} events - The events to suppress.
//      *!/
//     Owl.prototype.suppress = function(events) {
//         $.each(events, $.proxy(function(index, event) {
//             this._supress[event] = true;
//         }, this));
//     };
//
//     /!**
//      * Releases suppressed events.
//      * @protected
//      * @param {Array.<String>} events - The events to release.
//      *!/
//     Owl.prototype.release = function(events) {
//         $.each(events, $.proxy(function(index, event) {
//             delete this._supress[event];
//         }, this));
//     };
//
//     /!**
//      * Gets unified pointer coordinates from event.
//      * @todo #261
//      * @protected
//      * @param {Event} - The `mousedown` or `touchstart` event.
//      * @returns {Object} - Contains `x` and `y` coordinates of current pointer position.
//      *!/
//     Owl.prototype.pointer = function(event) {
//         var result = { x: null, y: null };
//
//         event = event.originalEvent || event || window.event;
//
//         event = event.touches && event.touches.length ?
//             event.touches[0] : event.changedTouches && event.changedTouches.length ?
//                 event.changedTouches[0] : event;
//
//         if (event.pageX) {
//             result.x = event.pageX;
//             result.y = event.pageY;
//         } else {
//             result.x = event.clientX;
//             result.y = event.clientY;
//         }
//
//         return result;
//     };
//
//     /!**
//      * Gets the difference of two vectors.
//      * @todo #261
//      * @protected
//      * @param {Object} - The first vector.
//      * @param {Object} - The second vector.
//      * @returns {Object} - The difference.
//      *!/
//     Owl.prototype.difference = function(first, second) {
//         return {
//             x: first.x - second.x,
//             y: first.y - second.y
//         };
//     };
//
//     /!**
//      * The jQuery Plugin for the Owl Carousel
//      * @todo Navigation plugin `next` and `prev`
//      * @public
//      *!/
//     $.fn.owlCarousel = function(option) {
//         var args = Array.prototype.slice.call(arguments, 1);
//
//         return this.each(function() {
//             var $this = $(this),
//                 data = $this.data('owl.carousel');
//
//             if (!data) {
//                 data = new Owl(this, typeof option == 'object' && option);
//                 $this.data('owl.carousel', data);
//
//                 $.each([
//                     'next', 'prev', 'to', 'destroy', 'refresh', 'replace', 'add', 'remove'
//                 ], function(i, event) {
//                     data.register({ type: Owl.Type.Event, name: event });
//                     data.$element.on(event + '.owl.carousel.core', $.proxy(function(e) {
//                         if (e.namespace && e.relatedTarget !== this) {
//                             this.suppress([ event ]);
//                             data[event].apply(this, [].slice.call(arguments, 1));
//                             this.release([ event ]);
//                         }
//                     }, data));
//                 });
//             }
//
//             if (typeof option == 'string' && option.charAt(0) !== '_') {
//                 data[option].apply(data, args);
//             }
//         });
//     };
//
//     /!**
//      * The constructor for the jQuery Plugin
//      * @public
//      *!/
//     $.fn.owlCarousel.Constructor = Owl;
//
// })(window.Zepto || window.jQuery, window, document);
//
// /!**
//  * AutoRefresh Plugin
//  * @version 2.0.0-beta.3
//  * @author Artus Kolanowski
//  * @license The MIT License (MIT)
//  *!/
// ;(function($, window, document, undefined) {
//
//     /!**
//      * Creates the auto refresh plugin.
//      * @class The Auto Refresh Plugin
//      * @param {Owl} carousel - The Owl Carousel
//      *!/
//     var AutoRefresh = function(carousel) {
//         /!**
//          * Reference to the core.
//          * @protected
//          * @type {Owl}
//          *!/
//         this._core = carousel;
//
//         /!**
//          * Refresh interval.
//          * @protected
//          * @type {number}
//          *!/
//         this._interval = null;
//
//         /!**
//          * Whether the element is currently visible or not.
//          * @protected
//          * @type {Boolean}
//          *!/
//         this._visible = null;
//
//         /!**
//          * All event handlers.
//          * @protected
//          * @type {Object}
//          *!/
//         this._handlers = {
//             'initialized.owl.carousel': $.proxy(function(e) {
//                 if (e.namespace && this._core.settings.autoRefresh) {
//                     this.watch();
//                 }
//             }, this)
//         };
//
//         // set default options
//         this._core.options = $.extend({}, AutoRefresh.Defaults, this._core.options);
//
//         // register event handlers
//         this._core.$element.on(this._handlers);
//     };
//
//     /!**
//      * Default options.
//      * @public
//      *!/
//     AutoRefresh.Defaults = {
//         autoRefresh: true,
//         autoRefreshInterval: 500
//     };
//
//     /!**
//      * Watches the element.
//      *!/
//     AutoRefresh.prototype.watch = function() {
//         if (this._interval) {
//             return;
//         }
//
//         this._visible = this._core.$element.is(':visible');
//         this._interval = window.setInterval($.proxy(this.refresh, this), this._core.settings.autoRefreshInterval);
//     };
//
//     /!**
//      * Refreshes the element.
//      *!/
//     AutoRefresh.prototype.refresh = function() {
//         if (this._core.$element.is(':visible') === this._visible) {
//             return;
//         }
//
//         this._visible = !this._visible;
//
//         this._core.$element.toggleClass('owl-hidden', !this._visible);
//
//         this._visible && (this._core.invalidate('width') && this._core.refresh());
//     };
//
//     /!**
//      * Destroys the plugin.
//      *!/
//     AutoRefresh.prototype.destroy = function() {
//         var handler, property;
//
//         window.clearInterval(this._interval);
//
//         for (handler in this._handlers) {
//             this._core.$element.off(handler, this._handlers[handler]);
//         }
//         for (property in Object.getOwnPropertyNames(this)) {
//             typeof this[property] != 'function' && (this[property] = null);
//         }
//     };
//
//     $.fn.owlCarousel.Constructor.Plugins.AutoRefresh = AutoRefresh;
//
// })(window.Zepto || window.jQuery, window, document);
//
// /!**
//  * Lazy Plugin
//  * @version 2.0.0-beta.3
//  * @author Bartosz Wojciechowski
//  * @license The MIT License (MIT)
//  *!/
// ;(function($, window, document, undefined) {
//
//     /!**
//      * Creates the lazy plugin.
//      * @class The Lazy Plugin
//      * @param {Owl} carousel - The Owl Carousel
//      *!/
//     var Lazy = function(carousel) {
//
//         /!**
//          * Reference to the core.
//          * @protected
//          * @type {Owl}
//          *!/
//         this._core = carousel;
//
//         /!**
//          * Already loaded items.
//          * @protected
//          * @type {Array.<jQuery>}
//          *!/
//         this._loaded = [];
//
//         /!**
//          * Event handlers.
//          * @protected
//          * @type {Object}
//          *!/
//         this._handlers = {
//             'initialized.owl.carousel change.owl.carousel': $.proxy(function(e) {
//                 if (!e.namespace) {
//                     return;
//                 }
//
//                 if (!this._core.settings || !this._core.settings.lazyLoad) {
//                     return;
//                 }
//
//                 if ((e.property && e.property.name == 'position') || e.type == 'initialized') {
//                     var settings = this._core.settings,
//                         n = (settings.center && Math.ceil(settings.items / 2) || settings.items),
//                         i = ((settings.center && n * -1) || 0),
//                         position = ((e.property && e.property.value) || this._core.current()) + i,
//                         clones = this._core.clones().length,
//                         load = $.proxy(function(i, v) { this.load(v) }, this);
//
//                     while (i++ < n) {
//                         this.load(clones / 2 + this._core.relative(position));
//                         clones && $.each(this._core.clones(this._core.relative(position)), load);
//                         position++;
//                     }
//                 }
//             }, this)
//         };
//
//         // set the default options
//         this._core.options = $.extend({}, Lazy.Defaults, this._core.options);
//
//         // register event handler
//         this._core.$element.on(this._handlers);
//     }
//
//     /!**
//      * Default options.
//      * @public
//      *!/
//     Lazy.Defaults = {
//         lazyLoad: false
//     }
//
//     /!**
//      * Loads all resources of an item at the specified position.
//      * @param {Number} position - The absolute position of the item.
//      * @protected
//      *!/
//     Lazy.prototype.load = function(position) {
//         var $item = this._core.$stage.children().eq(position),
//             $elements = $item && $item.find('.owl-lazy');
//
//         if (!$elements || $.inArray($item.get(0), this._loaded) > -1) {
//             return;
//         }
//
//         $elements.each($.proxy(function(index, element) {
//             var $element = $(element), image,
//                 url = (window.devicePixelRatio > 1 && $element.attr('data-src-retina')) || $element.attr('data-src');
//
//             this._core.trigger('load', { element: $element, url: url }, 'lazy');
//
//             if ($element.is('img')) {
//                 $element.one('load.owl.lazy', $.proxy(function() {
//                     $element.css('opacity', 1);
//                     this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
//                 }, this)).attr('src', url);
//             } else {
//                 image = new Image();
//                 image.onload = $.proxy(function() {
//                     $element.css({
//                         'background-image': 'url(' + url + ')',
//                         'opacity': '1'
//                     });
//                     this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
//                 }, this);
//                 image.src = url;
//             }
//         }, this));
//
//         this._loaded.push($item.get(0));
//     }
//
//     /!**
//      * Destroys the plugin.
//      * @public
//      *!/
//     Lazy.prototype.destroy = function() {
//         var handler, property;
//
//         for (handler in this.handlers) {
//             this._core.$element.off(handler, this.handlers[handler]);
//         }
//         for (property in Object.getOwnPropertyNames(this)) {
//             typeof this[property] != 'function' && (this[property] = null);
//         }
//     };
//
//     $.fn.owlCarousel.Constructor.Plugins.Lazy = Lazy;
//
// })(window.Zepto || window.jQuery, window, document);
//
// /!**
//  * AutoHeight Plugin
//  * @version 2.0.0-beta.3
//  * @author Bartosz Wojciechowski
//  * @license The MIT License (MIT)
//  *!/
// ;(function($, window, document, undefined) {
//
//     /!**
//      * Creates the auto height plugin.
//      * @class The Auto Height Plugin
//      * @param {Owl} carousel - The Owl Carousel
//      *!/
//     var AutoHeight = function(carousel) {
//         /!**
//          * Reference to the core.
//          * @protected
//          * @type {Owl}
//          *!/
//         this._core = carousel;
//
//         /!**
//          * All event handlers.
//          * @protected
//          * @type {Object}
//          *!/
//         this._handlers = {
//             'initialized.owl.carousel refreshed.owl.carousel': $.proxy(function(e) {
//                 if (e.namespace && this._core.settings.autoHeight) {
//                     this.update();
//                 }
//             }, this),
//             'changed.owl.carousel': $.proxy(function(e) {
//                 if (e.namespace && this._core.settings.autoHeight && e.property.name == 'position'){
//                     this.update();
//                 }
//             }, this),
//             'loaded.owl.lazy': $.proxy(function(e) {
//                 if (e.namespace && this._core.settings.autoHeight
//                     && e.element.closest('.' + this._core.settings.itemClass).index() === this._core.current()) {
//                     this.update();
//                 }
//             }, this)
//         };
//
//         // set default options
//         this._core.options = $.extend({}, AutoHeight.Defaults, this._core.options);
//
//         // register event handlers
//         this._core.$element.on(this._handlers);
//     };
//
//     /!**
//      * Default options.
//      * @public
//      *!/
//     AutoHeight.Defaults = {
//         autoHeight: false,
//         autoHeightClass: 'owl-height'
//     };
//
//     /!**
//      * Updates the view.
//      *!/
//     AutoHeight.prototype.update = function() {
//         var start = this._core._current,
//             end = start + this._core.settings.items,
//             visible = this._core.$stage.children().toArray().slice(start, end);
//         heights = [],
//             maxheight = 0;
//
//         $.each(visible, function(index, item) {
//             heights.push($(item).height());
//         });
//
//         maxheight = Math.max.apply(null, heights);
//
//         this._core.$stage.parent()
//             .height(maxheight)
//             .addClass(this._core.settings.autoHeightClass);
//     };
//
//     AutoHeight.prototype.destroy = function() {
//         var handler, property;
//
//         for (handler in this._handlers) {
//             this._core.$element.off(handler, this._handlers[handler]);
//         }
//         for (property in Object.getOwnPropertyNames(this)) {
//             typeof this[property] != 'function' && (this[property] = null);
//         }
//     };
//
//     $.fn.owlCarousel.Constructor.Plugins.AutoHeight = AutoHeight;
//
// })(window.Zepto || window.jQuery, window, document);
//
// /!**
//  * Video Plugin
//  * @version 2.0.0-beta.3
//  * @author Bartosz Wojciechowski
//  * @license The MIT License (MIT)
//  *!/
// ;(function($, window, document, undefined) {
//
//     /!**
//      * Creates the video plugin.
//      * @class The Video Plugin
//      * @param {Owl} carousel - The Owl Carousel
//      *!/
//     var Video = function(carousel) {
//         /!**
//          * Reference to the core.
//          * @protected
//          * @type {Owl}
//          *!/
//         this._core = carousel;
//
//         /!**
//          * Cache all video URLs.
//          * @protected
//          * @type {Object}
//          *!/
//         this._videos = {};
//
//         /!**
//          * Current playing item.
//          * @protected
//          * @type {jQuery}
//          *!/
//         this._playing = null;
//
//         /!**
//          * All event handlers.
//          * @todo The cloned content removale is too late
//          * @protected
//          * @type {Object}
//          *!/
//         this._handlers = {
//             'initialized.owl.carousel': $.proxy(function(e) {
//                 if (e.namespace) {
//                     this._core.register({ type: 'state', name: 'playing', tags: [ 'interacting' ] });
//                 }
//             }, this),
//             'resize.owl.carousel': $.proxy(function(e) {
//                 if (e.namespace && this._core.settings.video && this.isInFullScreen()) {
//                     e.preventDefault();
//                 }
//             }, this),
//             'refreshed.owl.carousel': $.proxy(function(e) {
//                 if (e.namespace && this._core.is('resizing')) {
//                     this._core.$stage.find('.cloned .owl-video-frame').remove();
//                 }
//             }, this),
//             'changed.owl.carousel': $.proxy(function(e) {
//                 if (e.namespace && e.property.name === 'position' && this._playing) {
//                     this.stop();
//                 }
//             }, this),
//             'prepared.owl.carousel': $.proxy(function(e) {
//                 if (!e.namespace) {
//                     return;
//                 }
//
//                 var $element = $(e.content).find('.owl-video');
//
//                 if ($element.length) {
//                     $element.css('display', 'none');
//                     this.fetch($element, $(e.content));
//                 }
//             }, this)
//         };
//
//         // set default options
//         this._core.options = $.extend({}, Video.Defaults, this._core.options);
//
//         // register event handlers
//         this._core.$element.on(this._handlers);
//
//         this._core.$element.on('click.owl.video', '.owl-video-play-icon', $.proxy(function(e) {
//             this.play(e);
//         }, this));
//     };
//
//     /!**
//      * Default options.
//      * @public
//      *!/
//     Video.Defaults = {
//         video: false,
//         videoHeight: false,
//         videoWidth: false
//     };
//
//     /!**
//      * Gets the video ID and the type (YouTube/Vimeo only).
//      * @protected
//      * @param {jQuery} target - The target containing the video data.
//      * @param {jQuery} item - The item containing the video.
//      *!/
//     Video.prototype.fetch = function(target, item) {
//         var type = target.attr('data-vimeo-id') ? 'vimeo' : 'youtube',
//             id = target.attr('data-vimeo-id') || target.attr('data-youtube-id'),
//             width = target.attr('data-width') || this._core.settings.videoWidth,
//             height = target.attr('data-height') || this._core.settings.videoHeight,
//             url = target.attr('href');
//
//         if (url) {
//             id = url.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/);
//
//             if (id[3].indexOf('youtu') > -1) {
//                 type = 'youtube';
//             } else if (id[3].indexOf('vimeo') > -1) {
//                 type = 'vimeo';
//             } else {
//                 throw new Error('Video URL not supported.');
//             }
//             id = id[6];
//         } else {
//             throw new Error('Missing video URL.');
//         }
//
//         this._videos[url] = {
//             type: type,
//             id: id,
//             width: width,
//             height: height
//         };
//
//         item.attr('data-video', url);
//
//         this.thumbnail(target, this._videos[url]);
//     };
//
//     /!**
//      * Creates video thumbnail.
//      * @protected
//      * @param {jQuery} target - The target containing the video data.
//      * @param {Object} info - The video info object.
//      * @see `fetch`
//      *!/
//     Video.prototype.thumbnail = function(target, video) {
//         var tnLink,
//             icon,
//             path,
//             dimensions = video.width && video.height ? 'style="width:' + video.width + 'px;height:' + video.height + 'px;"' : '',
//             customTn = target.find('img'),
//             srcType = 'src',
//             lazyClass = '',
//             settings = this._core.settings,
//             create = function(path) {
//                 icon = '<div class="owl-video-play-icon"></div>';
//
//                 if (settings.lazyLoad) {
//                     tnLink = '<div class="owl-video-tn ' + lazyClass + '" ' + srcType + '="' + path + '"></div>';
//                 } else {
//                     tnLink = '<div class="owl-video-tn" style="opacity:1;background-image:url(' + path + ')"></div>';
//                 }
//                 target.after(tnLink);
//                 target.after(icon);
//             };
//
//         // wrap video content into owl-video-wrapper div
//         target.wrap('<div class="owl-video-wrapper"' + dimensions + '></div>');
//
//         if (this._core.settings.lazyLoad) {
//             srcType = 'data-src';
//             lazyClass = 'owl-lazy';
//         }
//
//         // custom thumbnail
//         if (customTn.length) {
//             create(customTn.attr(srcType));
//             customTn.remove();
//             return false;
//         }
//
//         if (video.type === 'youtube') {
//             path = "http://img.youtube.com/vi/" + video.id + "/hqdefault.jpg";
//             create(path);
//         } else if (video.type === 'vimeo') {
//             $.ajax({
//                 type: 'GET',
//                 url: 'http://vimeo.com/api/v2/video/' + video.id + '.json',
//                 jsonp: 'callback',
//                 dataType: 'jsonp',
//                 success: function(data) {
//                     path = data[0].thumbnail_large;
//                     create(path);
//                 }
//             });
//         }
//     };
//
//     /!**
//      * Stops the current video.
//      * @public
//      *!/
//     Video.prototype.stop = function() {
//         this._core.trigger('stop', null, 'video');
//         this._playing.find('.owl-video-frame').remove();
//         this._playing.removeClass('owl-video-playing');
//         this._playing = null;
//         this._core.leave('playing');
//         this._core.trigger('stopped', null, 'video');
//     };
//
//     /!**
//      * Starts the current video.
//      * @public
//      * @param {Event} event - The event arguments.
//      *!/
//     Video.prototype.play = function(event) {
//         var target = $(event.target),
//             item = target.closest('.' + this._core.settings.itemClass),
//             video = this._videos[item.attr('data-video')],
//             width = video.width || '100%',
//             height = video.height || this._core.$stage.height(),
//             html;
//
//         if (this._playing) {
//             return;
//         }
//
//         this._core.enter('playing');
//         this._core.trigger('play', null, 'video');
//
//         item = this._core.items(this._core.relative(item.index()));
//
//         this._core.reset(item.index());
//
//         if (video.type === 'youtube') {
//             html = '<iframe width="' + width + '" height="' + height + '" src="http://www.youtube.com/embed/' +
//                 video.id + '?autoplay=1&v=' + video.id + '" frameborder="0" allowfullscreen></iframe>';
//         } else if (video.type === 'vimeo') {
//             html = '<iframe src="http://player.vimeo.com/video/' + video.id +
//                 '?autoplay=1" width="' + width + '" height="' + height +
//                 '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
//         }
//
//         $('<div class="owl-video-frame">' + html + '</div>').insertAfter(item.find('.owl-video'));
//
//         this._playing = item.addClass('owl-video-playing');
//     };
//
//     /!**
//      * Checks whether an video is currently in full screen mode or not.
//      * @todo Bad style because looks like a readonly method but changes members.
//      * @protected
//      * @returns {Boolean}
//      *!/
//     Video.prototype.isInFullScreen = function() {
//         var element = document.fullscreenElement || document.mozFullScreenElement ||
//             document.webkitFullscreenElement;
//
//         return element && $(element).parent().hasClass('owl-video-frame');
//     };
//
//     /!**
//      * Destroys the plugin.
//      *!/
//     Video.prototype.destroy = function() {
//         var handler, property;
//
//         this._core.$element.off('click.owl.video');
//
//         for (handler in this._handlers) {
//             this._core.$element.off(handler, this._handlers[handler]);
//         }
//         for (property in Object.getOwnPropertyNames(this)) {
//             typeof this[property] != 'function' && (this[property] = null);
//         }
//     };
//
//     $.fn.owlCarousel.Constructor.Plugins.Video = Video;
//
// })(window.Zepto || window.jQuery, window, document);
//
// /!**
//  * Animate Plugin
//  * @version 2.0.0-beta.3
//  * @author Bartosz Wojciechowski
//  * @license The MIT License (MIT)
//  *!/
// ;(function($, window, document, undefined) {
//
//     /!**
//      * Creates the animate plugin.
//      * @class The Navigation Plugin
//      * @param {Owl} scope - The Owl Carousel
//      *!/
//     var Animate = function(scope) {
//         this.core = scope;
//         this.core.options = $.extend({}, Animate.Defaults, this.core.options);
//         this.swapping = true;
//         this.previous = undefined;
//         this.next = undefined;
//
//         this.handlers = {
//             'change.owl.carousel': $.proxy(function(e) {
//                 if (e.namespace && e.property.name == 'position') {
//                     this.previous = this.core.current();
//                     this.next = e.property.value;
//                 }
//             }, this),
//             'drag.owl.carousel dragged.owl.carousel translated.owl.carousel': $.proxy(function(e) {
//                 if (e.namespace) {
//                     this.swapping = e.type == 'translated';
//                 }
//             }, this),
//             'translate.owl.carousel': $.proxy(function(e) {
//                 if (e.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn)) {
//                     this.swap();
//                 }
//             }, this)
//         };
//
//         this.core.$element.on(this.handlers);
//     };
//
//     /!**
//      * Default options.
//      * @public
//      *!/
//     Animate.Defaults = {
//         animateOut: false,
//         animateIn: false
//     };
//
//     /!**
//      * Toggles the animation classes whenever an translations starts.
//      * @protected
//      * @returns {Boolean|undefined}
//      *!/
//     Animate.prototype.swap = function() {
//
//         if (this.core.settings.items !== 1) {
//             return;
//         }
//
//         if (!$.support.animation || !$.support.transition) {
//             return;
//         }
//
//         this.core.speed(0);
//
//         var left,
//             clear = $.proxy(this.clear, this),
//             previous = this.core.$stage.children().eq(this.previous),
//             next = this.core.$stage.children().eq(this.next),
//             incoming = this.core.settings.animateIn,
//             outgoing = this.core.settings.animateOut;
//
//         if (this.core.current() === this.previous) {
//             return;
//         }
//
//         if (outgoing) {
//             left = this.core.coordinates(this.previous) - this.core.coordinates(this.next);
//             previous.one($.support.animation.end, clear)
//                 .css( { 'left': left + 'px' } )
//                 .addClass('animated owl-animated-out')
//                 .addClass(outgoing);
//         }
//
//         if (incoming) {
//             next.one($.support.animation.end, clear)
//                 .addClass('animated owl-animated-in')
//                 .addClass(incoming);
//         }
//     };
//
//     Animate.prototype.clear = function(e) {
//         $(e.target).css( { 'left': '' } )
//             .removeClass('animated owl-animated-out owl-animated-in')
//             .removeClass(this.core.settings.animateIn)
//             .removeClass(this.core.settings.animateOut);
//         this.core.onTransitionEnd();
//     };
//
//     /!**
//      * Destroys the plugin.
//      * @public
//      *!/
//     Animate.prototype.destroy = function() {
//         var handler, property;
//
//         for (handler in this.handlers) {
//             this.core.$element.off(handler, this.handlers[handler]);
//         }
//         for (property in Object.getOwnPropertyNames(this)) {
//             typeof this[property] != 'function' && (this[property] = null);
//         }
//     };
//
//     $.fn.owlCarousel.Constructor.Plugins.Animate = Animate;
//
// })(window.Zepto || window.jQuery, window, document);
//
// /!**
//  * Autoplay Plugin
//  * @version 2.0.0-beta.3
//  * @author Bartosz Wojciechowski
//  * @author Artus Kolanowski
//  * @license The MIT License (MIT)
//  *!/
// ;(function($, window, document, undefined) {
//
//     /!**
//      * Creates the autoplay plugin.
//      * @class The Autoplay Plugin
//      * @param {Owl} scope - The Owl Carousel
//      *!/
//     var Autoplay = function(carousel) {
//         /!**
//          * Reference to the core.
//          * @protected
//          * @type {Owl}
//          *!/
//         this._core = carousel;
//
//         /!**
//          * The autoplay interval.
//          * @type {Number}
//          *!/
//         this._interval = null;
//
//         /!**
//          * Indicates whenever the autoplay is paused.
//          * @type {Boolean}
//          *!/
//         this._paused = false;
//
//         /!**
//          * All event handlers.
//          * @protected
//          * @type {Object}
//          *!/
//         this._handlers = {
//             'changed.owl.carousel': $.proxy(function(e) {
//                 if (e.namespace && e.property.name === 'settings') {
//                     if (this._core.settings.autoplay) {
//                         this.play();
//                     } else {
//                         this.stop();
//                     }
//                 }
//             }, this),
//             'initialized.owl.carousel': $.proxy(function(e) {
//                 if (e.namespace && this._core.settings.autoplay) {
//                     this.play();
//                 }
//             }, this),
//             'play.owl.autoplay': $.proxy(function(e, t, s) {
//                 if (e.namespace) {
//                     this.play(t, s);
//                 }
//             }, this),
//             'stop.owl.autoplay': $.proxy(function(e) {
//                 if (e.namespace) {
//                     this.stop();
//                 }
//             }, this),
//             'mouseover.owl.autoplay': $.proxy(function() {
//                 if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
//                     this.pause();
//                 }
//             }, this),
//             'mouseleave.owl.autoplay': $.proxy(function() {
//                 if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
//                     this.play();
//                 }
//             }, this)
//         };
//
//         // register event handlers
//         this._core.$element.on(this._handlers);
//
//         // set default options
//         this._core.options = $.extend({}, Autoplay.Defaults, this._core.options);
//     };
//
//     /!**
//      * Default options.
//      * @public
//      *!/
//     Autoplay.Defaults = {
//         autoplay: false,
//         autoplayTimeout: 5000,
//         autoplayHoverPause: false,
//         autoplaySpeed: false
//     };
//
//     /!**
//      * Starts the autoplay.
//      * @public
//      * @param {Number} [timeout] - The interval before the next animation starts.
//      * @param {Number} [speed] - The animation speed for the animations.
//      *!/
//     Autoplay.prototype.play = function(timeout, speed) {
//         this._paused = false;
//
//         if (this._core.is('rotating')) {
//             return;
//         }
//
//         this._core.enter('rotating');
//
//         this._interval = window.setInterval($.proxy(function() {
//             if (this._paused || this._core.is('busy') || this._core.is('interacting') || document.hidden) {
//                 return;
//             }
//             this._core.next(speed || this._core.settings.autoplaySpeed);
//         }, this), timeout || this._core.settings.autoplayTimeout);
//     };
//
//     /!**
//      * Stops the autoplay.
//      * @public
//      *!/
//     Autoplay.prototype.stop = function() {
//         if (!this._core.is('rotating')) {
//             return;
//         }
//
//         window.clearInterval(this._interval);
//         this._core.leave('rotating');
//     };
//
//     /!**
//      * Stops the autoplay.
//      * @public
//      *!/
//     Autoplay.prototype.pause = function() {
//         if (!this._core.is('rotating')) {
//             return;
//         }
//
//         this._paused = true;
//     };
//
//     /!**
//      * Destroys the plugin.
//      *!/
//     Autoplay.prototype.destroy = function() {
//         var handler, property;
//
//         this.stop();
//
//         for (handler in this._handlers) {
//             this._core.$element.off(handler, this._handlers[handler]);
//         }
//         for (property in Object.getOwnPropertyNames(this)) {
//             typeof this[property] != 'function' && (this[property] = null);
//         }
//     };
//
//     $.fn.owlCarousel.Constructor.Plugins.autoplay = Autoplay;
//
// })(window.Zepto || window.jQuery, window, document);
//
// /!**
//  * Navigation Plugin
//  * @version 2.0.0-beta.3
//  * @author Artus Kolanowski
//  * @license The MIT License (MIT)
//  *!/
// ;(function($, window, document, undefined) {
//     'use strict';
//
//     /!**
//      * Creates the navigation plugin.
//      * @class The Navigation Plugin
//      * @param {Owl} carousel - The Owl Carousel.
//      *!/
//     var Navigation = function(carousel) {
//         /!**
//          * Reference to the core.
//          * @protected
//          * @type {Owl}
//          *!/
//         this._core = carousel;
//
//         /!**
//          * Indicates whether the plugin is initialized or not.
//          * @protected
//          * @type {Boolean}
//          *!/
//         this._initialized = false;
//
//         /!**
//          * The current paging indexes.
//          * @protected
//          * @type {Array}
//          *!/
//         this._pages = [];
//
//         /!**
//          * All DOM elements of the user interface.
//          * @protected
//          * @type {Object}
//          *!/
//         this._controls = {};
//
//         /!**
//          * Markup for an indicator.
//          * @protected
//          * @type {Array.<String>}
//          *!/
//         this._templates = [];
//
//         /!**
//          * The carousel element.
//          * @type {jQuery}
//          *!/
//         this.$element = this._core.$element;
//
//         /!**
//          * Overridden methods of the carousel.
//          * @protected
//          * @type {Object}
//          *!/
//         this._overrides = {
//             next: this._core.next,
//             prev: this._core.prev,
//             to: this._core.to
//         };
//
//         /!**
//          * All event handlers.
//          * @protected
//          * @type {Object}
//          *!/
//         this._handlers = {
//             'prepared.owl.carousel': $.proxy(function(e) {
//                 if (e.namespace && this._core.settings.dotsData) {
//                     this._templates.push('<div class="' + this._core.settings.dotClass + '">' +
//                         $(e.content).find('[data-dot]').andSelf('[data-dot]').attr('data-dot') + '</div>');
//                 }
//             }, this),
//             'added.owl.carousel': $.proxy(function(e) {
//                 if (e.namespace && this._core.settings.dotsData) {
//                     this._templates.splice(e.position, 0, this._templates.pop());
//                 }
//             }, this),
//             'remove.owl.carousel': $.proxy(function(e) {
//                 if (e.namespace && this._core.settings.dotsData) {
//                     this._templates.splice(e.position, 1);
//                 }
//             }, this),
//             'changed.owl.carousel': $.proxy(function(e) {
//                 if (e.namespace && e.property.name == 'position') {
//                     this.draw();
//                 }
//             }, this),
//             'initialized.owl.carousel': $.proxy(function(e) {
//                 if (e.namespace && !this._initialized) {
//                     this._core.trigger('initialize', null, 'navigation');
//                     this.initialize();
//                     this.update();
//                     this.draw();
//                     this._initialized = true;
//                     this._core.trigger('initialized', null, 'navigation');
//                 }
//             }, this),
//             'refreshed.owl.carousel': $.proxy(function(e) {
//                 if (e.namespace && this._initialized) {
//                     this._core.trigger('refresh', null, 'navigation');
//                     this.update();
//                     this.draw();
//                     this._core.trigger('refreshed', null, 'navigation');
//                 }
//             }, this)
//         };
//
//         // set default options
//         this._core.options = $.extend({}, Navigation.Defaults, this._core.options);
//
//         // register event handlers
//         this.$element.on(this._handlers);
//     };
//
//     /!**
//      * Default options.
//      * @public
//      * @todo Rename `slideBy` to `navBy`
//      *!/
//     Navigation.Defaults = {
//         nav: true,
//         navText: [ '<i class="fa fa-chevron-left" />', '<i class="fa fa-chevron-right" />' ],
//         navSpeed: false,
//         navElement: 'div',
//         navContainer: false,
//         navContainerClass: '',
//         navBaseContainerClass: 'owl-nav slider-control',
//         navClass: [ '', '' ],
//         navBaseClass: [ 'owl-prev slider-left', 'owl-next slider-right' ],
//         slideBy: 1,
//         dotClass: '',
//         dotBaseClass: 'owl-dot slider-dot',
//         dotsClass: '',
//         dotsBaseClass: 'owl-dots slider-dots',
//         dots: false,
//         dotsEach: false,
//         dotsData: false,
//         dotsSpeed: false,
//         dotsContainer: false
//     };
//
//     /!**
//      * Initializes the layout of the plugin and extends the carousel.
//      * @protected
//      *!/
//     Navigation.prototype.initialize = function() {
//         var override,
//             settings = this._core.settings;
//
//         // create DOM structure for relative navigation
//         this._controls.$relative = (settings.navContainer ? $(settings.navContainer)
//             : $('<div>').addClass(settings.navContainerClass).addClass(settings.navBaseContainerClass).appendTo(this.$element)).addClass('disabled');
//
//         this._controls.$previous = $('<' + settings.navElement + '>')
//             .addClass(settings.navClass[0])
//             .addClass(settings.navBaseClass[0])
//             .html(settings.navText[0])
//             .prependTo(this._controls.$relative)
//             .on('click', $.proxy(function(e) {
//                 this.prev(settings.navSpeed);
//             }, this));
//         this._controls.$next = $('<' + settings.navElement + '>')
//             .addClass(settings.navClass[1])
//             .addClass(settings.navBaseClass[1])
//             .html(settings.navText[1])
//             .appendTo(this._controls.$relative)
//             .on('click', $.proxy(function(e) {
//                 this.next(settings.navSpeed);
//             }, this));
//
//         // create DOM structure for absolute navigation
//         if (!settings.dotsData) {
//             this._templates = [ $('<div>')
//                 .addClass(settings.dotClass)
//                 .addClass(settings.dotBaseClass)
//                 .append($('<span>'))
//                 .prop('outerHTML') ];
//         }
//
//         this._controls.$absolute = (settings.dotsContainer ? $(settings.dotsContainer)
//             : $('<div>').addClass(settings.dotsClass).addClass(settings.dotsClass).appendTo(this.$element)).addClass('disabled');
//
//         this._controls.$absolute.on('click', 'div', $.proxy(function(e) {
//             var index = $(e.target).parent().is(this._controls.$absolute)
//                 ? $(e.target).index() : $(e.target).parent().index();
//
//             e.preventDefault();
//
//             this.to(index, settings.dotsSpeed);
//         }, this));
//
//         // override public methods of the carousel
//         for (override in this._overrides) {
//             this._core[override] = $.proxy(this[override], this);
//         }
//     };
//
//     /!**
//      * Destroys the plugin.
//      * @protected
//      *!/
//     Navigation.prototype.destroy = function() {
//         var handler, control, property, override;
//
//         for (handler in this._handlers) {
//             this.$element.off(handler, this._handlers[handler]);
//         }
//         for (control in this._controls) {
//             this._controls[control].remove();
//         }
//         for (override in this.overides) {
//             this._core[override] = this._overrides[override];
//         }
//         for (property in Object.getOwnPropertyNames(this)) {
//             typeof this[property] != 'function' && (this[property] = null);
//         }
//     };
//
//     /!**
//      * Updates the internal state.
//      * @protected
//      *!/
//     Navigation.prototype.update = function() {
//         var i, j, k,
//             lower = this._core.clones().length / 2,
//             upper = lower + this._core.items().length,
//             maximum = this._core.maximum(true),
//             settings = this._core.settings,
//             size = settings.center || settings.autoWidth || settings.dotsData
//                 ? 1 : settings.dotsEach || settings.items;
//
//         if (settings.slideBy !== 'page') {
//             settings.slideBy = Math.min(settings.slideBy, settings.items);
//         }
//
//         if (settings.dots || settings.slideBy == 'page') {
//             this._pages = [];
//
//             for (i = lower, j = 0, k = 0; i < upper; i++) {
//                 if (j >= size || j === 0) {
//                     this._pages.push({
//                         start: Math.min(maximum, i - lower),
//                         end: i - lower + size - 1
//                     });
//                     if (Math.min(maximum, i - lower) === maximum) {
//                         break;
//                     }
//                     j = 0, ++k;
//                 }
//                 j += this._core.mergers(this._core.relative(i));
//             }
//         }
//     };
//
//     /!**
//      * Draws the user interface.
//      * @todo The option `dotsData` wont work.
//      * @protected
//      *!/
//     Navigation.prototype.draw = function() {
//         var difference,
//             settings = this._core.settings,
//             disabled = this._core.items().length <= settings.items,
//             index = this._core.relative(this._core.current()),
//             loop = settings.loop || settings.rewind;
//
//         this._controls.$relative.toggleClass('disabled', !settings.nav || disabled);
//
//         if (settings.nav) {
//             this._controls.$previous.toggleClass('disabled', !loop && index <= this._core.minimum(true));
//             this._controls.$next.toggleClass('disabled', !loop && index >= this._core.maximum(true));
//         }
//
//         this._controls.$absolute.toggleClass('disabled', !settings.dots || disabled);
//
//         if (settings.dots) {
//             difference = this._pages.length - this._controls.$absolute.children().length;
//
//             if (settings.dotsData && difference !== 0) {
//                 this._controls.$absolute.html(this._templates.join(''));
//             } else if (difference > 0) {
//                 this._controls.$absolute.append(new Array(difference + 1).join(this._templates[0]));
//             } else if (difference < 0) {
//                 this._controls.$absolute.children().slice(difference).remove();
//             }
//
//             this._controls.$absolute.find('.active').removeClass('active');
//             this._controls.$absolute.children().eq($.inArray(this.current(), this._pages)).addClass('active');
//         }
//     };
//
//     /!**
//      * Extends event data.
//      * @protected
//      * @param {Event} event - The event object which gets thrown.
//      *!/
//     Navigation.prototype.onTrigger = function(event) {
//         var settings = this._core.settings;
//
//         event.page = {
//             index: $.inArray(this.current(), this._pages),
//             count: this._pages.length,
//             size: settings && (settings.center || settings.autoWidth || settings.dotsData
//                 ? 1 : settings.dotsEach || settings.items)
//         };
//     };
//
//     /!**
//      * Gets the current page position of the carousel.
//      * @protected
//      * @returns {Number}
//      *!/
//     Navigation.prototype.current = function() {
//         var current = this._core.relative(this._core.current());
//         return $.grep(this._pages, $.proxy(function(page, index) {
//             return page.start <= current && page.end >= current;
//         }, this)).pop();
//     };
//
//     /!**
//      * Gets the current succesor/predecessor position.
//      * @protected
//      * @returns {Number}
//      *!/
//     Navigation.prototype.getPosition = function(successor) {
//         var position, length,
//             settings = this._core.settings;
//
//         if (settings.slideBy == 'page') {
//             position = $.inArray(this.current(), this._pages);
//             length = this._pages.length;
//             successor ? ++position : --position;
//             position = this._pages[((position % length) + length) % length].start;
//         } else {
//             position = this._core.relative(this._core.current());
//             length = this._core.items().length;
//             successor ? position += settings.slideBy : position -= settings.slideBy;
//         }
//
//         return position;
//     };
//
//     /!**
//      * Slides to the next item or page.
//      * @public
//      * @param {Number} [speed=false] - The time in milliseconds for the transition.
//      *!/
//     Navigation.prototype.next = function(speed) {
//         $.proxy(this._overrides.to, this._core)(this.getPosition(true), speed);
//     };
//
//     /!**
//      * Slides to the previous item or page.
//      * @public
//      * @param {Number} [speed=false] - The time in milliseconds for the transition.
//      *!/
//     Navigation.prototype.prev = function(speed) {
//         $.proxy(this._overrides.to, this._core)(this.getPosition(false), speed);
//     };
//
//     /!**
//      * Slides to the specified item or page.
//      * @public
//      * @param {Number} position - The position of the item or page.
//      * @param {Number} [speed] - The time in milliseconds for the transition.
//      * @param {Boolean} [standard=false] - Whether to use the standard behaviour or not.
//      *!/
//     Navigation.prototype.to = function(position, speed, standard) {
//         var length;
//
//         if (!standard) {
//             length = this._pages.length;
//             $.proxy(this._overrides.to, this._core)(this._pages[((position % length) + length) % length].start, speed);
//         } else {
//             $.proxy(this._overrides.to, this._core)(position, speed);
//         }
//     };
//
//     $.fn.owlCarousel.Constructor.Plugins.Navigation = Navigation;
//
// })(window.Zepto || window.jQuery, window, document);
//
// /!**
//  * Hash Plugin
//  * @version 2.0.0-beta.3
//  * @author Artus Kolanowski
//  * @license The MIT License (MIT)
//  *!/
// ;(function($, window, document, undefined) {
//     'use strict';
//
//     /!**
//      * Creates the hash plugin.
//      * @class The Hash Plugin
//      * @param {Owl} carousel - The Owl Carousel
//      *!/
//     var Hash = function(carousel) {
//         /!**
//          * Reference to the core.
//          * @protected
//          * @type {Owl}
//          *!/
//         this._core = carousel;
//
//         /!**
//          * Hash index for the items.
//          * @protected
//          * @type {Object}
//          *!/
//         this._hashes = {};
//
//         /!**
//          * The carousel element.
//          * @type {jQuery}
//          *!/
//         this.$element = this._core.$element;
//
//         /!**
//          * All event handlers.
//          * @protected
//          * @type {Object}
//          *!/
//         this._handlers = {
//             'initialized.owl.carousel': $.proxy(function(e) {
//                 if (e.namespace && this._core.settings.startPosition === 'URLHash') {
//                     $(window).trigger('hashchange.owl.navigation');
//                 }
//             }, this),
//             'prepared.owl.carousel': $.proxy(function(e) {
//                 if (e.namespace) {
//                     var hash = $(e.content).find('[data-hash]').andSelf('[data-hash]').attr('data-hash');
//
//                     if (!hash) {
//                         return;
//                     }
//
//                     this._hashes[hash] = e.content;
//                 }
//             }, this),
//             'changed.owl.carousel': $.proxy(function(e) {
//                 if (e.namespace && e.property.name === 'position') {
//                     var current = this._core.items(this._core.relative(this._core.current())),
//                         hash = $.map(this._hashes, function(item, hash) {
//                             return item === current ? hash : null;
//                         }).join();
//
//                     if (!hash || window.location.hash.slice(1) === hash) {
//                         return;
//                     }
//
//                     window.location.hash = hash;
//                 }
//             }, this)
//         };
//
//         // set default options
//         this._core.options = $.extend({}, Hash.Defaults, this._core.options);
//
//         // register the event handlers
//         this.$element.on(this._handlers);
//
//         // register event listener for hash navigation
//         $(window).on('hashchange.owl.navigation', $.proxy(function(e) {
//             var hash = window.location.hash.substring(1),
//                 items = this._core.$stage.children(),
//                 position = this._hashes[hash] && items.index(this._hashes[hash]);
//
//             if (position === undefined || position === this._core.current()) {
//                 return;
//             }
//
//             this._core.to(this._core.relative(position), false, true);
//         }, this));
//     };
//
//     /!**
//      * Default options.
//      * @public
//      *!/
//     Hash.Defaults = {
//         URLhashListener: false
//     };
//
//     /!**
//      * Destroys the plugin.
//      * @public
//      *!/
//     Hash.prototype.destroy = function() {
//         var handler, property;
//
//         $(window).off('hashchange.owl.navigation');
//
//         for (handler in this._handlers) {
//             this._core.$element.off(handler, this._handlers[handler]);
//         }
//         for (property in Object.getOwnPropertyNames(this)) {
//             typeof this[property] != 'function' && (this[property] = null);
//         }
//     };
//
//     $.fn.owlCarousel.Constructor.Plugins.Hash = Hash;
//
// })(window.Zepto || window.jQuery, window, document);
//
// /!**
//  * Support Plugin
//  *
//  * @version 2.0.0-beta.3
//  * @author Vivid Planet Software GmbH
//  * @author Artus Kolanowski
//  * @license The MIT License (MIT)
//  *!/
// ;(function($, window, document, undefined) {
//
//     var style = $('<support>').get(0).style,
//         prefixes = 'Webkit Moz O ms'.split(' '),
//         events = {
//             transition: {
//                 end: {
//                     WebkitTransition: 'webkitTransitionEnd',
//                     MozTransition: 'transitionend',
//                     OTransition: 'oTransitionEnd',
//                     transition: 'transitionend'
//                 }
//             },
//             animation: {
//                 end: {
//                     WebkitAnimation: 'webkitAnimationEnd',
//                     MozAnimation: 'animationend',
//                     OAnimation: 'oAnimationEnd',
//                     animation: 'animationend'
//                 }
//             }
//         },
//         tests = {
//             csstransforms: function() {
//                 return !!test('transform');
//             },
//             csstransforms3d: function() {
//                 return !!test('perspective');
//             },
//             csstransitions: function() {
//                 return !!test('transition');
//             },
//             cssanimations: function() {
//                 return !!test('animation');
//             }
//         };
//
//     function test(property, prefixed) {
//         var result = false,
//             upper = property.charAt(0).toUpperCase() + property.slice(1);
//
//         $.each((property + ' ' + prefixes.join(upper + ' ') + upper).split(' '), function(i, property) {
//             if (style[property] !== undefined) {
//                 result = prefixed ? property : true;
//                 return false;
//             }
//         });
//
//         return result;
//     }
//
//     function prefixed(property) {
//         return test(property, true);
//     }
//
//     if (tests.csstransitions()) {
//         /!* jshint -W053 *!/
//         $.support.transition = new String(prefixed('transition'))
//         $.support.transition.end = events.transition.end[ $.support.transition ];
//     }
//
//     if (tests.cssanimations()) {
//         /!* jshint -W053 *!/
//         $.support.animation = new String(prefixed('animation'))
//         $.support.animation.end = events.animation.end[ $.support.animation ];
//     }
//
//     if (tests.csstransforms()) {
//         /!* jshint -W053 *!/
//         $.support.transform = new String(prefixed('transform'));
//         $.support.transform3d = tests.csstransforms3d();
//     }
//
// })(window.Zepto || window.jQuery, window, document);
//
// /!*
//
//
//    Magic Zoom Plus v5.0.8
//    Copyright 2015 Magic Toolbox
//    Buy a license: https://www.magictoolbox.com/magiczoomplus/
//    License agreement: https://www.magictoolbox.com/license/
//
//
// *!/
// eval(function(m,a,g,i,c,k){c=function(e){return(e<a?'':c(parseInt(e/a)))+((e=e%a)>35?String.fromCharCode(e+29):e.toString(36))};if(!''.replace(/^/,String)){while(g--){k[c(g)]=i[g]||c(g)}i=[function(e){return k[e]}];c=function(){return'\\w+'};g=1};while(g--){if(i[g]){m=m.replace(new RegExp('\\b'+c(g)+'\\b','g'),i[g])}}return m}('1j.8P=(17(){1c w,y;w=y=(17(){1c S={4q:"fx.3-b3-8-fy",eC:0,7J:{},$aH:17(W){1a(W.$5U||(W.$5U=++M.eC))},9v:17(W){1a(M.7J[W]||(M.7J[W]={}))},$F:17(){},$1n:17(){1a 1n},$1r:17(){1a 1r},es:"dD-"+1o.6e(1o.6O()*1t a5().eo()),3o:17(W){1a(2D!=W)},aF:17(X,W){1a(2D!=X)?X:W},8X:17(W){1a!!(W)},1P:17(W){if(!M.3o(W)){1a 1n}if(W.$4G){1a W.$4G}if(!!W.5M){if(1==W.5M){1a"5Z"}if(3==W.5M){1a"ek"}}if(W.1I&&W.eK){1a"fb"}if(W.1I&&W.9N){1a"29"}if((W 5g 1j.eM||W 5g 1j.bC)&&W.57===M.3y){1a"3M"}if(W 5g 1j.69){1a"4b"}if(W 5g 1j.bC){1a"17"}if(W 5g 1j.5W){1a"1O"}if(M.1e.4K){if(M.3o(W.cd)){1a"1z"}}1k{if(W===1j.1z||W.57==1j.1u||W.57==1j.eb||W.57==1j.dJ||W.57==1j.fj||W.57==1j.fh){1a"1z"}}if(W 5g 1j.a5){1a"eP"}if(W 5g 1j.dd){1a"fe"}if(W===1j){1a"1j"}if(W===1m){1a"1m"}1a 93(W)},1X:17(ab,aa){if(!(ab 5g 1j.69)){ab=[ab]}if(!aa){1a ab[0]}1S(1c Z=0,X=ab.1I;Z<X;Z++){if(!M.3o(ab)){7G}1S(1c Y in aa){if(!eM.2w.41.2b(aa,Y)){7G}3x{ab[Z][Y]=aa[Y]}3R(W){}}}1a ab[0]},9U:17(aa,Z){if(!(aa 5g 1j.69)){aa=[aa]}1S(1c Y=0,W=aa.1I;Y<W;Y++){if(!M.3o(aa[Y])){7G}if(!aa[Y].2w){7G}1S(1c X in(Z||{})){if(!aa[Y].2w[X]){aa[Y].2w[X]=Z[X]}}}1a aa[0]},em:17(Y,X){if(!M.3o(Y)){1a Y}1S(1c W in(X||{})){if(!Y[W]){Y[W]=X[W]}}1a Y},$3x:17(){1S(1c X=0,W=29.1I;X<W;X++){3x{1a 29[X]()}3R(Y){}}1a 1h},$A:17(Y){if(!M.3o(Y)){1a M.$([])}if(Y.eL){1a M.$(Y.eL())}if(Y.eK){1c X=Y.1I||0,W=1t 69(X);5l(X--){W[X]=Y[X]}1a M.$(W)}1a M.$(69.2w.ao.2b(Y))},6q:17(){1a 1t a5().eo()},4a:17(aa){1c Y;4r(M.1P(aa)){1B"8O":Y={};1S(1c Z in aa){Y[Z]=M.4a(aa[Z])}1G;1B"4b":Y=[];1S(1c X=0,W=aa.1I;X<W;X++){Y[X]=M.4a(aa[X])}1G;1R:1a aa}1a M.$(Y)},$:17(Y){1c W=1r;if(!M.3o(Y)){1a 1h}if(Y.$aL){1a Y}4r(M.1P(Y)){1B"4b":Y=M.em(Y,M.1X(M.69,{$aL:M.$F}));Y.36=Y.ds;1a Y;1G;1B"1O":1c X=1m.cW(Y);if(M.3o(X)){1a M.$(X)}1a 1h;1G;1B"1j":1B"1m":M.$aH(Y);Y=M.1X(Y,M.3v);1G;1B"5Z":M.$aH(Y);Y=M.1X(Y,M.3Y);1G;1B"1z":Y=M.1X(Y,M.1u);1G;1B"ek":1B"17":1B"4b":1B"eP":1R:W=1n;1G}if(W){1a M.1X(Y,{$aL:M.$F})}1k{1a Y}},$1t:17(W,Y,X){1a M.$(M.cv.7L(W)).bK(Y||{}).1x(X||{})},76:17(X,Z,ad){1c aa,Y,ab,ac=[],W=-1;ad||(ad=M.es);aa=M.$(ad)||M.$1t("2l",{id:ad,1y:"9T/6M"}).1Z((1m.fO||1m.3H),"1H");Y=aa.f8||aa.eV;if("1O"!=M.1P(Z)){1S(1c ab in Z){ac.38(ab+":"+Z[ab])}Z=ac.6Y(";")}if(Y.eO){W=Y.eO(X+" {"+Z+"}",Y.fL.1I)}1k{W=Y.fP(X,Z)}1a W},fE:17(Z,W){1c Y,X;Y=M.$(Z);if("5Z"!==M.1P(Y)){1a}X=Y.f8||Y.eV;if(X.f2){X.f2(W)}1k{if(X.eY){X.eY(W)}}},fX:17(){1a"fd-fv-fq-fi-fo".4v(/[g7]/g,17(Y){1c X=1o.6O()*16|0,W=Y=="x"?X:(X&3|8);1a W.8p(16)}).9b()},6b:(17(){1c W;1a 17(X){if(!W){W=1m.7L("a")}W.3T("6K",X);1a("!!"+W.6K).4v("!!","")}})(),fY:17(Y){1c Z=0,W=Y.1I;1S(1c X=0;X<W;++X){Z=31*Z+Y.ex(X);Z%=fV}1a Z}};1c M=S;1c N=S.$;if(!1j.dG){1j.dG=S;1j.$dD=S.$}M.69={$4G:"4b",6a:17(Z,aa){1c W=13.1I;1S(1c X=13.1I,Y=(aa<0)?1o.1V(0,X+aa):aa||0;Y<X;Y++){if(13[Y]===Z){1a Y}}1a-1},5F:17(W,X){1a 13.6a(W,X)!=-1},ds:17(W,Z){1S(1c Y=0,X=13.1I;Y<X;Y++){if(Y in 13){W.2b(Z,13[Y],Y,13)}}},2V:17(W,ab){1c aa=[];1S(1c Z=0,X=13.1I;Z<X;Z++){if(Z in 13){1c Y=13[Z];if(W.2b(ab,13[Z],Z,13)){aa.38(Y)}}}1a aa},fJ:17(W,aa){1c Z=[];1S(1c Y=0,X=13.1I;Y<X;Y++){if(Y in 13){Z[Y]=W.2b(aa,13[Y],Y,13)}}1a Z}};M.9U(5W,{$4G:"1O",4X:17(){1a 13.4v(/^\\s+|\\s+$/g,"")},eq:17(W,X){1a(X||1n)?(13.8p()===W.8p()):(13.5u().8p()===W.5u().8p())},5A:17(){1a 13.4v(/-\\D/g,17(W){1a W.9g(1).9b()})},9Z:17(){1a 13.4v(/[A-Z]/g,17(W){1a("-"+W.9g(0).5u())})},fU:17(W){1a 5D(13,W||10)},fM:17(){1a 2F(13)},cS:17(){1a!13.4v(/1r/i,"").4X()},4F:17(X,W){W=W||"";1a(W+13+W).6a(W+X+W)>-1}});S.9U(bC,{$4G:"17",1E:17(){1c X=M.$A(29),W=13,Y=X.6Q();1a 17(){1a W.6i(Y||1h,X.5E(M.$A(29)))}},2E:17(){1c X=M.$A(29),W=13,Y=X.6Q();1a 17(Z){1a W.6i(Y||1h,M.$([Z||(M.1e.2n?1j.1z:1h)]).5E(X))}},2y:17(){1c X=M.$A(29),W=13,Y=X.6Q();1a 1j.4D(17(){1a W.6i(W,X)},Y||0)},cB:17(){1c X=M.$A(29),W=13;1a 17(){1a W.2y.6i(W,X)}},c7:17(){1c X=M.$A(29),W=13,Y=X.6Q();1a 1j.f6(17(){1a W.6i(W,X)},Y||0)}});1c T={},L=2H.fN.5u(),K=L.3s(/(3W|5K|4K|bF)\\/(\\d+\\.?\\d*)/i),P=L.3s(/(fQ|ap)\\/(\\d+\\.?\\d*)/i)||L.3s(/(eu|4l|8L|dV|6h|ap)\\/(\\d+\\.?\\d*)/i),R=L.3s(/4q\\/(\\d+\\.?\\d*)/i),G=1m.6k.2l;17 H(X){1c W=X.9g(0).9b()+X.ao(1);1a X in G||("er"+W)in G||("ev"+W)in G||("7D"+W)in G||("O"+W)in G}M.1e={2L:{fK:!!(1m.fD),fC:!!(1j.et),bl:!!(1m.ei),4Z:!!(1m.fF||1m.fG||1m.9K||1m.eN||1m.fI||1m.fH||1m.fR||1m.fS||1m.g2),cl:!!(1j.g1)&&!!(1j.g3)&&(1j.8K&&"g6"in 1t 8K),1Y:H("1Y"),2g:H("2g"),8V:H("8V"),ef:H("ef"),4Y:1n,eW:1n,8q:1n,75:(17(){1a 1m.g0.fZ("bU://bV.b1.b8/fB/fT/fW#f9","1.1")})()},cY:17(){1a"fa"in 1j||(1j.dY&&1m 5g dY)}(),3t:L.3s(/(6y|bb\\d+|fu).+|fp|fs\\/|fr|fw|fm|ft|fA|fc|fg|ip(dr|df|ad)|ff|hQ|hj |hi|hh|hf|3t.+dV|hg|6h m(hk|in)i|hp( ho)?|e9|p(hn|hd)\\/|h1|h2|h9|hq(4|6)0|g8|hr|hL\\.(1e|43)|hP|hN|hM (ce|e9)|hw|hs/)?1r:1n,7n:(K&&K[1])?K[1].5u():(1j.6h)?"bF":!!(1j.h0)?"4K":(2D!==1m.gp||1h!=1j.go)?"5K":(1h!==1j.gt||!2H.gx)?"3W":"gw",4q:(K&&K[2])?2F(K[2]):0,3B:(P&&P[1])?P[1].5u():"",7l:(P&&P[2])?2F(P[2]):0,8a:"",aw:"",4W:"",2n:0,4N:L.3s(/ip(?:ad|df|dr)/)?"8R":(L.3s(/(?:gv|6y)/)||2H.4N.3s(/gm|8Y|gl/i)||["gd"])[0].5u(),ej:1m.8U&&"dI"==1m.8U.5u(),f1:0,49:17(){1a(1m.8U&&"dI"==1m.8U.5u())?1m.3H:1m.6k},4Y:1j.4Y||1j.gc||1j.gb||1j.g9||1j.ge||2D,9s:1j.9s||1j.eU||1j.eU||1j.gf||1j.gk||1j.gj||2D,2i:1n,7p:17(){if(M.1e.2i){1a}1c Z,Y;M.1e.2i=1r;M.3H=M.$(1m.3H);M.8Y=M.$(1j);3x{1c X=M.$1t("2Y").1x({1f:2N,1g:2N,5d:"5O",2e:"5C",1H:-gi}).1Z(1m.3H);M.1e.f1=X.d8-X.cZ;X.2P()}3R(W){}3x{Z=M.$1t("2Y");Y=Z.2l;Y.eQ="eR:2d(a8://),2d(a8://),gg 2d(a8://)";M.1e.2L.eW=(/(2d\\s*\\(.*?){3}/).3e(Y.eR);Y=1h;Z=1h}3R(W){}if(!M.1e.7v){M.1e.7v=M.9Q("2g").9Z()}3x{Z=M.$1t("2Y");Z.2l.eQ=M.9Q("2V").9Z()+":5e(gh);";M.1e.2L.8q=!!Z.2l.1I&&(!M.1e.2n||M.1e.2n>9);Z=1h}3R(W){}if(!M.1e.2L.8q){M.$(1m.6k).1A("6E-gz-3p")}if(2D===1j.gS&&2D!==1j.gQ){T.2S="gO"}M.3v.2U.2b(M.$(1m),"9z")}};(17(){1c aa=[],Z,Y,X;17 W(){1a!!(29.9N.bT)}4r(M.1e.7n){1B"4K":if(!M.1e.4q){M.1e.4q=!!(1j.8K)?3:2}1G;1B"5K":M.1e.4q=(P&&P[2])?2F(P[2]):0;1G}M.1e[M.1e.7n]=1r;if(P&&"eu"===P[1]){M.1e.3B="4l"}if(!!1j.4l){M.1e.4l=1r}if(P&&"ap"===P[1]){M.1e.3B="6h";M.1e.6h=1r}if("8L"===M.1e.3B&&(R&&R[1])){M.1e.7l=2F(R[1])}if("6y"==M.1e.4N&&M.1e.3W&&(R&&R[1])){M.1e.6u=1r}Z=({5K:["-ew-","ev","ew"],3W:["-3W-","er","3W"],4K:["-7D-","7D","7D"],bF:["-o-","O","o"]})[M.1e.7n]||["","",""];M.1e.8a=Z[0];M.1e.aw=Z[1];M.1e.4W=Z[2];M.1e.2n=(!M.1e.4K)?2D:(1m.ep)?1m.ep:17(){1c ab=0;if(M.1e.ej){1a 5}4r(M.1e.4q){1B 2:ab=6;1G;1B 3:ab=7;1G}1a ab}();aa.38(M.1e.4N+"-3p");if(M.1e.3t){aa.38("3t-3p")}if(M.1e.6u){aa.38("6y-1e-3p")}if(M.1e.2n){M.1e.3B="ie";M.1e.7l=M.1e.2n;aa.38("ie"+M.1e.2n+"-3p");1S(Y=11;Y>M.1e.2n;Y--){aa.38("gY-ie"+Y+"-3p")}}if(M.1e.3W&&M.1e.4q<gX){M.1e.2L.4Z=1n}if(M.1e.4Y){M.1e.4Y.2b(1j,17(){M.1e.2L.4Y=1r})}if(M.1e.2L.75){aa.38("75-3p")}1k{aa.38("6E-75-3p")}X=(1m.6k.5L||"").3s(/\\S+/g)||[];1m.6k.5L=M.$(X).5E(aa).6Y(" ");if(M.1e.2n&&M.1e.2n<9){1m.7L("8c");1m.7L("dE")}})();(17(){M.1e.4Z={9w:M.1e.2L.4Z,5p:17(){1a!!(1m.gW||1m[M.1e.4W+"gV"]||1m.4Z||1m.gN||1m[M.1e.4W+"gM"])},bH:17(W,X){X||(X={});if(13.9w){M.$(1m).1C(13.aT,13.ez=17(Y){if(13.5p()){X.bE&&X.bE()}1k{M.$(1m).1N(13.aT,13.ez);X.bB&&X.bB()}}.2E(13));M.$(1m).1C(13.b2,13.5S=17(Y){X.8y&&X.8y();M.$(1m).1N(13.b2,13.5S)}.2E(13));(W[M.1e.4W+"gE"]||W[M.1e.4W+"gD"]||W.gC||17(){}).2b(W)}1k{if(X.8y){X.8y()}}},dL:(1m.9K||1m.eN||1m[M.1e.4W+"gB"]||1m[M.1e.4W+"gF"]||17(){}).1E(1m),aT:1m.eE?"gG":(1m.9K?"":M.1e.4W)+"gK",b2:1m.eE?"gH":(1m.9K?"":M.1e.4W)+"gI",gJ:M.1e.4W,gL:1h}})();1c V=/\\S+/g,J=/^(3G(c2|c0|bY|d9)gA)|((78|7X)(c2|c0|bY|d9))$/,O={"gU":("2D"===93(G.cO))?"gT":"cO"},Q={dH:1r,gP:1r,2r:1r,dF:1r,1l:1r},I=(1j.cP)?17(Y,W){1c X=1j.cP(Y,1h);1a X?X.gR(W)||X[W]:1h}:17(Z,X){1c Y=Z.gy,W=1h;W=Y?Y[X]:1h;if(1h==W&&Z.2l&&Z.2l[X]){W=Z.2l[X]}1a W};17 U(Y){1c W,X;X=(M.1e.3W&&"2V"==Y)?1n:(Y in G);if(!X){W=M.1e.aw+Y.9g(0).9b()+Y.ao(1);if(W in G){1a W}}1a Y}M.9Q=U;M.3Y={cG:17(W){1a!(W||"").4F(" ")&&(13.5L||"").4F(W," ")},1A:17(aa){1c X=(13.5L||"").3s(V)||[],Z=(aa||"").3s(V)||[],W=Z.1I,Y=0;1S(;Y<W;Y++){if(!M.$(X).5F(Z[Y])){X.38(Z[Y])}}13.5L=X.6Y(" ");1a 13},1T:17(ab){1c X=(13.5L||"").3s(V)||[],aa=(ab||"").3s(V)||[],W=aa.1I,Z=0,Y;1S(;Z<W;Z++){if((Y=M.$(X).6a(aa[Z]))>-1){X.9X(Y,1)}}13.5L=ab?X.6Y(" "):"";1a 13},ga:17(W){1a 13.cG(W)?13.1T(W):13.1A(W)},3K:17(X){1c Y=X.5A(),W=1h;X=O[Y]||(O[Y]=U(Y));W=I(13,X);if("2t"===W){W=1h}if(1h!==W){if("2r"==X){1a M.3o(W)?2F(W):1}if(J.3e(X)){W=5D(W,10)?W:"5Q"}}1a W},3F:17(X,W){1c Z=X.5A();3x{if("2r"==X){13.cH(W);1a 13}X=O[Z]||(O[Z]=U(Z));13.2l[X]=W+(("63"==M.1P(W)&&!Q[Z])?"2v":"")}3R(Y){}1a 13},1x:17(X){1S(1c W in X){13.3F(W,X[W])}1a 13},gu:17(){1c W={};M.$A(29).36(17(X){W[X]=13.3K(X)},13);1a W},cH:17(Y,W){1c X;W=W||1n;13.2l.2r=Y;Y=5D(2F(Y)*2N);if(W){if(0===Y){if("3f"!=13.2l.5a){13.2l.5a="3f"}}1k{if("6n"!=13.2l.5a){13.2l.5a="6n"}}}if(M.1e.2n&&M.1e.2n<9){if(!9x(Y)){if(!~13.2l.2V.6a("bw")){13.2l.2V+=" cK:cT.d4.bw(8B="+Y+")"}1k{13.2l.2V=13.2l.2V.4v(/8B=\\d*!/i,"8B="+Y)}}1k{13.2l.2V=13.2l.2V.4v(/cK:cT.d4.bw\\(8B=\\d*\\)/i,"").4X();if(""===13.2l.2V){13.2l.5B("2V")}}}1a 13},bK:17(W){1S(1c X in W){if("3M"===X){13.1A(""+W[X])}1k{13.3T(X,""+W[X])}}1a 13},4i:17(){1a 13.1x({7A:"3k",5a:"3f"})},5q:17(){1a 13.1x({7A:"",5a:"6n"})},1F:17(){1a{1f:13.d8,1g:13.gs}},8u:17(X){1c W=13.1F();W.1f-=(2F(13.3K("3G-1M-1f")||0)+2F(13.3K("3G-2R-1f")||0));W.1g-=(2F(13.3K("3G-1H-1f")||0)+2F(13.3K("3G-2Q-1f")||0));if(!X){W.1f-=(2F(13.3K("78-1M")||0)+2F(13.3K("78-2R")||0));W.1g-=(2F(13.3K("78-1H")||0)+2F(13.3K("78-2Q")||0))}1a W},6X:17(){1a{1H:13.7W,1M:13.80}},gn:17(){1c W=13,X={1H:0,1M:0};do{X.1M+=W.80||0;X.1H+=W.7W||0;W=W.4H}5l(W);1a X},8b:17(){1c aa=13,X=0,Z=0;if(M.3o(1m.6k.7I)){1c W=13.7I(),Y=M.$(1m).6X(),ab=M.1e.49();1a{1H:W.1H+Y.y-ab.gq,1M:W.1M+Y.x-ab.gr}}do{X+=aa.gZ||0;Z+=aa.hz||0;aa=aa.hA}5l(aa&&!(/^(?:3H|hB)$/i).3e(aa.a9));1a{1H:Z,1M:X}},7S:17(){1c X=13.8b();1c W=13.1F();1a{1H:X.1H,2Q:X.1H+W.1g,1M:X.1M,2R:X.1M+W.1f}},5k:17(X){3x{13.hC=X}3R(W){13.hy=X}1a 13},2P:17(){1a(13.4H)?13.4H.ak(13):13},5i:17(){M.$A(13.hx).36(17(W){if(3==W.5M||8==W.5M){1a}M.$(W).5i()});13.2P();13.bo();if(13.$5U){M.7J[13.$5U]=1h;4P M.7J[13.$5U]}1a 1h},3n:17(Y,X){X=X||"2Q";1c W=13.4h;("1H"==X&&W)?13.ht(Y,W):13.b5(Y);1a 13},1Z:17(Y,X){1c W=M.$(Y).3n(13,X);1a 13},eg:17(W){13.3n(W.4H.b0(13,W));1a 13},9O:17(W){if("5Z"!==M.1P("1O"==M.1P(W)?W=1m.cW(W):W)){1a 1n}1a(13==W)?1n:(13.5F&&!(M.1e.d0))?(13.5F(W)):(13.cX)?!!(13.cX(W)&16):M.$A(13.7T(W.a9)).5F(W)}};M.3Y.hu=M.3Y.3K;M.3Y.hv=M.3Y.1x;if(!1j.3Y){1j.3Y=M.$F;if(M.1e.7n.3W){1j.1m.7L("hD")}1j.3Y.2w=(M.1e.7n.3W)?1j["[[hE.2w]]"]:{}}M.9U(1j.3Y,{$4G:"5Z"});M.3v={1F:17(){if(M.1e.cY||M.1e.hO||M.1e.d0){1a{1f:1j.5f,1g:1j.4J}}1a{1f:M.1e.49().cZ,1g:M.1e.49().hK}},6X:17(){1a{x:1j.hG||M.1e.49().80,y:1j.hF||M.1e.49().7W}},hH:17(){1c W=13.1F();1a{1f:1o.1V(M.1e.49().hI,W.1f),1g:1o.1V(M.1e.49().hJ,W.1g)}}};M.1X(1m,{$4G:"1m"});M.1X(1j,{$4G:"1j"});M.1X([M.3Y,M.3v],{26:17(Z,X){1c W=M.9v(13.$5U),Y=W[Z];if(2D!==X&&2D===Y){Y=W[Z]=X}1a(M.3o(Y)?Y:1h)},34:17(Y,X){1c W=M.9v(13.$5U);W[Y]=X;1a 13},2X:17(X){1c W=M.9v(13.$5U);4P W[X];1a 13}});if(!(1j.aS&&1j.aS.2w&&1j.aS.2w.bj)){M.1X([M.3Y,M.3v],{bj:17(W){1a M.$A(13.9p("*")).2V(17(Y){3x{1a(1==Y.5M&&Y.5L.4F(W," "))}3R(X){}})}})}M.1X([M.3Y,M.3v],{9u:17(){1a 13.bj(29[0])},7T:17(){1a 13.9p(29[0])}});if(M.1e.4Z.9w&&!1m.cD){M.3Y.cD=17(){M.1e.4Z.bH(13)}}M.1u={$4G:"1z",62:M.$1n,2a:17(){1a 13.5c().3z()},5c:17(){if(13.cC){13.cC()}1k{13.cd=1r}1a 13},3z:17(){if(13.ch){13.ch()}1k{13.h8=1n}1a 13},4I:17(){13.62=M.$1r;1a 13},7K:17(){1c X,W;X=((/3A/i).3e(13.1y))?13.2C[0]:13;1a(!M.3o(X))?{x:0,y:0}:{x:X.2O,y:X.2K}},6j:17(){1c X,W;X=((/3A/i).3e(13.1y))?13.2C[0]:13;1a(!M.3o(X))?{x:0,y:0}:{x:X.5n||X.2O+M.1e.49().80,y:X.5o||X.2K+M.1e.49().7W}},bf:17(){1c W=13.4e||13.ha;5l(W&&3==W.5M){W=W.4H}1a W},7Y:17(){1c X=1h;4r(13.1y){1B"7x":1B"hb":1B"hc":X=13.9D||13.h7;1G;1B"8k":1B"ba":1B"ee":X=13.9D||13.h6;1G;1R:1a X}3x{5l(X&&3==X.5M){X=X.4H}}3R(W){X=1h}1a X},6D:17(){if(!13.cj&&13.2o!==2D){1a(13.2o&1?1:(13.2o&2?3:(13.2o&4?2:0)))}1a 13.cj},h3:17(){1a(13.2k&&("3A"===13.2k||13.2k===13.59))||(/3A/i).3e(13.1y)},h4:17(){1a 13.2k?(("3A"===13.2k||13.59===13.2k)&&13.9Y):1===13.2C.1I&&(13.6d.1I?13.6d[0].3D==13.2C[0].3D:1r)}};M.bd="ci";M.bk="h5";M.9q="";if(!1m.ci){M.bd="he";M.bk="hm";M.9q="8f"}M.1u.1w={1y:"",x:1h,y:1h,2I:1h,2o:1h,4e:1h,9D:1h,$4G:"1z.4k",62:M.$1n,5G:M.$([]),4d:17(W){1c X=W;13.5G.38(X)},2a:17(){1a 13.5c().3z()},5c:17(){13.5G.36(17(X){3x{X.5c()}3R(W){}});1a 13},3z:17(){13.5G.36(17(X){3x{X.3z()}3R(W){}});1a 13},4I:17(){13.62=M.$1r;1a 13},7K:17(){1a{x:13.2O,y:13.2K}},6j:17(){1a{x:13.x,y:13.y}},bf:17(){1a 13.4e},7Y:17(){1a 13.9D},6D:17(){1a 13.2o},e3:17(){1a 13.5G.1I>0?13.5G[0].bf():2D}};M.1X([M.3Y,M.3v],{1C:17(Y,aa,ab,ae){1c ad,W,Z,ac,X;if("1O"==M.1P(Y)){X=Y.7H(" ");if(X.1I>1){Y=X}}if(M.1P(Y)=="4b"){M.$(Y).36(13.1C.2E(13,aa,ab,ae));1a 13}if(!Y||!aa||M.1P(Y)!="1O"||M.1P(aa)!="17"){1a 13}if(Y=="9z"&&M.1e.2i){aa.2b(13);1a 13}Y=T[Y]||Y;ab=5D(ab||50);if(!aa.$9C){aa.$9C=1o.6e(1o.6O()*M.6q())}ad=M.3v.26.2b(13,"8l",{});W=ad[Y];if(!W){ad[Y]=W=M.$([]);Z=13;if(M.1u.1w[Y]){M.1u.1w[Y].1K.5m.2b(13,ae)}1k{W.3j=17(af){af=M.1X(af||1j.e,{$4G:"1z"});M.3v.2U.2b(Z,Y,M.$(af))};13[M.bd](M.9q+Y,W.3j,1n)}}ac={1y:Y,fn:aa,bc:ab,cc:aa.$9C};W.38(ac);W.hl(17(ag,af){1a ag.bc-af.bc});1a 13},1N:17(ac){1c aa=M.3v.26.2b(13,"8l",{}),Y,W,X,ad,ab,Z;ab=29.1I>1?29[1]:-2N;if("1O"==M.1P(ac)){Z=ac.7H(" ");if(Z.1I>1){ac=Z}}if(M.1P(ac)=="4b"){M.$(ac).36(13.1N.2E(13,ab));1a 13}ac=T[ac]||ac;if(!ac||M.1P(ac)!="1O"||!aa||!aa[ac]){1a 13}Y=aa[ac]||[];1S(X=0;X<Y.1I;X++){W=Y[X];if(-2N==ab||!!ab&&ab.$9C===W.cc){ad=Y.9X(X--,1)}}if(0===Y.1I){if(M.1u.1w[ac]){M.1u.1w[ac].1K.2P.2b(13)}1k{13[M.bk](M.9q+ac,Y.3j,1n)}4P aa[ac]}1a 13},2U:17(aa,ac){1c Z=M.3v.26.2b(13,"8l",{}),Y,W,X;aa=T[aa]||aa;if(!aa||M.1P(aa)!="1O"||!Z||!Z[aa]){1a 13}3x{ac=M.1X(ac||{},{1y:aa})}3R(ab){}if(2D===ac.2I){ac.2I=M.6q()}Y=Z[aa]||[];1S(X=0;X<Y.1I&&!(ac.62&&ac.62());X++){Y[X].fn.2b(13,ac)}},bt:17(X,W){1c aa=("9z"==X)?1n:1r,Z=13,Y;X=T[X]||X;if(!aa){M.3v.2U.2b(13,X);1a 13}if(Z===1m&&1m.9M&&!Z.aG){Z=1m.6k}if(1m.9M){Y=1m.9M(X);Y.5T(W,1r,1r)}1k{Y=1m.fz();Y.9R=X}if(1m.9M){Z.aG(Y)}1k{Z.fl("8f"+W,Y)}1a Y},bo:17(){1c X=M.3v.26.2b(13,"8l");if(!X){1a 13}1S(1c W in X){M.3v.1N.2b(13,W)}M.3v.2X.2b(13,"8l");1a 13}});(17(W){if("8j"===1m.8m){1a W.1e.7p.2y(1)}if(W.1e.3W&&W.1e.4q<fk){(17(){(W.$(["2f","8j"]).5F(1m.8m))?W.1e.7p():29.9N.2y(50)})()}1k{if(W.1e.4K&&W.1e.2n<9&&1j==1H){(17(){(W.$3x(17(){W.1e.49().g5("1M");1a 1r}))?W.1e.7p():29.9N.2y(50)})()}1k{W.3v.1C.2b(W.$(1m),"g4",W.1e.7p);W.3v.1C.2b(W.$(1j),"5X",W.1e.7p)}}})(S);M.3y=17(){1c aa=1h,X=M.$A(29);if("3M"==M.1P(X[0])){aa=X.6Q()}1c W=17(){1S(1c ad in 13){13[ad]=M.4a(13[ad])}if(13.57.$3I){13.$3I={};1c af=13.57.$3I;1S(1c ae in af){1c ac=af[ae];4r(M.1P(ac)){1B"17":13.$3I[ae]=M.3y.cy(13,ac);1G;1B"8O":13.$3I[ae]=M.4a(ac);1G;1B"4b":13.$3I[ae]=M.4a(ac);1G}}}1c ab=(13.3J)?13.3J.6i(13,29):13;4P 13.bT;1a ab};if(!W.2w.3J){W.2w.3J=M.$F}if(aa){1c Z=17(){};Z.2w=aa.2w;W.2w=1t Z;W.$3I={};1S(1c Y in aa.2w){W.$3I[Y]=aa.2w[Y]}}1k{W.$3I=1h}W.57=M.3y;W.2w.57=W;M.1X(W.2w,X[0]);M.1X(W,{$4G:"3M"});1a W};S.3y.cy=17(W,X){1a 17(){1c Z=13.bT;1c Y=X.6i(W,29);1a Y}};(17(Z){1c Y=Z.$;1c W=5,X=aZ;Z.1u.1w.1Q=1t Z.3y(Z.1X(Z.1u.1w,{1y:"1Q",3J:17(ac,ab){1c aa=ab.6j();13.x=aa.x;13.y=aa.y;13.2O=ab.2O;13.2K=ab.2K;13.2I=ab.2I;13.2o=ab.6D();13.4e=ac;13.4d(ab)}}));Z.1u.1w.1Q.1K={1v:{7e:X,2o:1},5m:17(aa){13.34("1z:1Q:1v",Z.1X(Z.4a(Z.1u.1w.1Q.1K.1v),aa||{}));13.1C("6B",Z.1u.1w.1Q.1K.3j,1);13.1C("5Y",Z.1u.1w.1Q.1K.3j,1);13.1C("2W",Z.1u.1w.1Q.1K.bz,1);if(Z.1e.4K&&Z.1e.2n<9){13.1C("9a",Z.1u.1w.1Q.1K.3j,1)}},2P:17(){13.1N("6B",Z.1u.1w.1Q.1K.3j);13.1N("5Y",Z.1u.1w.1Q.1K.3j);13.1N("2W",Z.1u.1w.1Q.1K.bz);if(Z.1e.4K&&Z.1e.2n<9){13.1N("9a",Z.1u.1w.1Q.1K.3j)}},bz:17(aa){aa.3z()},3j:17(ad){1c ac,aa,ab;aa=13.26("1z:1Q:1v");if(ad.1y!="9a"&&ad.6D()!=aa.2o){1a}if(13.26("1z:1Q:ax")){13.2X("1z:1Q:ax");1a}if("6B"==ad.1y){ac=1t Z.1u.1w.1Q(13,ad);13.34("1z:1Q:9y",ac)}1k{if("5Y"==ad.1y){ac=13.26("1z:1Q:9y");if(!ac){1a}ab=ad.6j();13.2X("1z:1Q:9y");ac.4d(ad);if(ad.2I-ac.2I<=aa.7e&&1o.8z(1o.4z(ab.x-ac.x,2)+1o.4z(ab.y-ac.y,2))<=W){13.2U("1Q",ac)}1m.2U("5Y",ad)}1k{if(ad.1y=="9a"){ac=1t Z.1u.1w.1Q(13,ad);13.2U("1Q",ac)}}}}}})(S);(17(X){1c W=X.$;X.1u.1w.2J=1t X.3y(X.1X(X.1u.1w,{1y:"2J",2m:"3E",6l:1n,3J:17(ab,aa,Z){1c Y=aa.6j();13.x=Y.x;13.y=Y.y;13.2O=aa.2O;13.2K=aa.2K;13.2I=aa.2I;13.2o=aa.6D();13.4e=ab;13.4d(aa);13.2m=Z}}));X.1u.1w.2J.1K={5m:17(){1c Z=X.1u.1w.2J.1K.cu.2E(13),Y=X.1u.1w.2J.1K.92.2E(13);13.1C("6B",X.1u.1w.2J.1K.bG,1);13.1C("5Y",X.1u.1w.2J.1K.92,1);1m.1C("7E",Z,1);1m.1C("5Y",Y,1);13.34("1z:2J:4t:1m:5s",Z);13.34("1z:2J:4t:1m:7j",Y)},2P:17(){13.1N("6B",X.1u.1w.2J.1K.bG);13.1N("5Y",X.1u.1w.2J.1K.92);W(1m).1N("7E",13.26("1z:2J:4t:1m:5s")||X.$F);W(1m).1N("5Y",13.26("1z:2J:4t:1m:7j")||X.$F);13.2X("1z:2J:4t:1m:5s");13.2X("1z:2J:4t:1m:7j")},bG:17(Z){1c Y;if(1!=Z.6D()){1a}Z.3z();Y=1t X.1u.1w.2J(13,Z,"3E");13.34("1z:2J:3E",Y)},92:17(Z){1c Y;Y=13.26("1z:2J:3E");if(!Y){1a}Z.3z();Y=1t X.1u.1w.2J(13,Z,"9I");13.2X("1z:2J:3E");13.2U("2J",Y)},cu:17(Z){1c Y;Y=13.26("1z:2J:3E");if(!Y){1a}Z.3z();if(!Y.6l){Y.6l=1r;13.2U("2J",Y)}Y=1t X.1u.1w.2J(13,Z,"cs");13.2U("2J",Y)}}})(S);(17(X){1c W=X.$;X.1u.1w.4f=1t X.3y(X.1X(X.1u.1w,{1y:"4f",7d:1n,73:1h,3J:17(aa,Z){1c Y=Z.6j();13.x=Y.x;13.y=Y.y;13.2O=Z.2O;13.2K=Z.2K;13.2I=Z.2I;13.2o=Z.6D();13.4e=aa;13.4d(Z)}}));X.1u.1w.4f.1K={1v:{7e:7s},5m:17(Y){13.34("1z:4f:1v",X.1X(X.4a(X.1u.1w.4f.1K.1v),Y||{}));13.1C("1Q",X.1u.1w.4f.1K.3j,1)},2P:17(){13.1N("1Q",X.1u.1w.4f.1K.3j)},3j:17(aa){1c Z,Y;Z=13.26("1z:4f:1z");Y=13.26("1z:4f:1v");if(!Z){Z=1t X.1u.1w.4f(13,aa);Z.73=4D(17(){Z.7d=1r;aa.62=X.$1n;13.2U("1Q",aa);13.2X("1z:4f:1z")}.1E(13),Y.7e+10);13.34("1z:4f:1z",Z);aa.4I()}1k{3P(Z.73);13.2X("1z:4f:1z");if(!Z.7d){Z.4d(aa);aa.4I().2a();13.2U("4f",Z)}1k{}}}}})(S);(17(ac){1c ab=ac.$;17 W(ad){1a ad.2k?(("3A"===ad.2k||ad.59===ad.2k)&&ad.9Y):1===ad.2C.1I&&(ad.6d.1I?ad.6d[0].3D==ad.2C[0].3D:1r)}17 Y(ad){if(ad.2k){1a("3A"===ad.2k||ad.59===ad.2k)?ad.9J:1h}1k{1a ad.2C[0].3D}}17 Z(ad){if(ad.2k){1a("3A"===ad.2k||ad.59===ad.2k)?ad:1h}1k{1a ad.2C[0]}}ac.1u.1w.21=1t ac.3y(ac.1X(ac.1u.1w,{1y:"21",id:1h,3J:17(ae,ad){1c af=Z(ad);13.id=af.9J||af.3D;13.x=af.5n;13.y=af.5o;13.5n=af.5n;13.5o=af.5o;13.2O=af.2O;13.2K=af.2K;13.2I=ad.2I;13.2o=0;13.4e=ae;13.4d(ad)}}));1c X=10,aa=7s;ac.1u.1w.21.1K={5m:17(ad){13.1C(["51",1j.2H.3b?"7Q":"7R"],ac.1u.1w.21.1K.72,1);13.1C(["5R",1j.2H.3b?"6o":"6v"],ac.1u.1w.21.1K.6T,1);13.1C("2W",ac.1u.1w.21.1K.az,1)},2P:17(){13.1N(["51",1j.2H.3b?"7Q":"7R"],ac.1u.1w.21.1K.72);13.1N(["5R",1j.2H.3b?"6o":"6v"],ac.1u.1w.21.1K.6T);13.1N("2W",ac.1u.1w.21.1K.az)},az:17(ad){ad.3z()},72:17(ad){if(!W(ad)){13.2X("1z:21:1z");1a}13.34("1z:21:1z",1t ac.1u.1w.21(13,ad));13.34("1z:1Q:ax",1r)},6T:17(ag){1c ae=ac.6q(),af=13.26("1z:21:1z"),ad=13.26("1z:21:1v");if(!af||!W(ag)){1a}13.2X("1z:21:1z");if(af.id==Y(ag)&&ag.2I-af.2I<=aa&&1o.8z(1o.4z(Z(ag).5n-af.x,2)+1o.4z(Z(ag).5o-af.y,2))<=X){13.2X("1z:1Q:9y");ag.2a();af.4d(ag);13.2U("21",af)}}}})(S);M.1u.1w.3q=1t M.3y(M.1X(M.1u.1w,{1y:"3q",7d:1n,73:1h,3J:17(X,W){13.x=W.x;13.y=W.y;13.2O=W.2O;13.2K=W.2K;13.2I=W.2I;13.2o=0;13.4e=X;13.4d(W)}}));M.1u.1w.3q.1K={1v:{7e:aZ},5m:17(W){13.34("1z:3q:1v",M.1X(M.4a(M.1u.1w.3q.1K.1v),W||{}));13.1C("21",M.1u.1w.3q.1K.3j,1)},2P:17(){13.1N("21",M.1u.1w.3q.1K.3j)},3j:17(Y){1c X,W;X=13.26("1z:3q:1z");W=13.26("1z:3q:1v");if(!X){X=1t M.1u.1w.3q(13,Y);X.73=4D(17(){X.7d=1r;Y.62=M.$1n;13.2U("21",Y)}.1E(13),W.7e+10);13.34("1z:3q:1z",X);Y.4I()}1k{3P(X.73);13.2X("1z:3q:1z");if(!X.7d){X.4d(Y);Y.4I().2a();13.2U("3q",X)}1k{}}}};(17(ab){1c aa=ab.$;17 W(ac){1a ac.2k?(("3A"===ac.2k||ac.59===ac.2k)&&ac.9Y):1===ac.2C.1I&&(ac.6d.1I?ac.6d[0].3D==ac.2C[0].3D:1r)}17 Y(ac){if(ac.2k){1a("3A"===ac.2k||ac.59===ac.2k)?ac.9J:1h}1k{1a ac.2C[0].3D}}17 Z(ac){if(ac.2k){1a("3A"===ac.2k||ac.59===ac.2k)?ac:1h}1k{1a ac.2C[0]}}1c X=10;ab.1u.1w.2p=1t ab.3y(ab.1X(ab.1u.1w,{1y:"2p",2m:"3E",id:1h,6l:1n,3J:17(ae,ad,ac){1c af=Z(ad);13.id=af.9J||af.3D;13.2O=af.2O;13.2K=af.2K;13.5n=af.5n;13.5o=af.5o;13.x=af.5n;13.y=af.5o;13.2I=ad.2I;13.2o=0;13.4e=ae;13.4d(ad);13.2m=ac}}));ab.1u.1w.2p.1K={5m:17(){1c ad=ab.1u.1w.2p.1K.9G.1E(13),ac=ab.1u.1w.2p.1K.6T.1E(13);13.1C(["51",1j.2H.3b?"7Q":"7R"],ab.1u.1w.2p.1K.72,1);13.1C(["5R",1j.2H.3b?"6o":"6v"],ab.1u.1w.2p.1K.6T,1);13.1C(["7N",1j.2H.3b?"6r":"7h"],ab.1u.1w.2p.1K.9G,1);13.34("1z:2p:4t:1m:5s",ad);13.34("1z:2p:4t:1m:7j",ac);aa(1m).1C(1j.2H.3b?"6r":"7h",ad,1);aa(1m).1C(1j.2H.3b?"6o":"6v",ac,1)},2P:17(){13.1N(["51",1j.2H.3b?"7Q":"7R"],ab.1u.1w.2p.1K.72);13.1N(["5R",1j.2H.3b?"6o":"6v"],ab.1u.1w.2p.1K.6T);13.1N(["7N",1j.2H.3b?"6r":"7h"],ab.1u.1w.2p.1K.9G);aa(1m).1N(1j.2H.3b?"6r":"7h",13.26("1z:2p:4t:1m:5s")||ab.$F,1);aa(1m).1N(1j.2H.3b?"6o":"6v",13.26("1z:2p:4t:1m:7j")||ab.$F,1);13.2X("1z:2p:4t:1m:5s");13.2X("1z:2p:4t:1m:7j")},72:17(ad){1c ac;if(!W(ad)){1a}ac=1t ab.1u.1w.2p(13,ad,"3E");13.34("1z:2p:3E",ac)},6T:17(ad){1c ac;ac=13.26("1z:2p:3E");if(!ac||!ac.6l||ac.id!=Y(ad)){1a}ac=1t ab.1u.1w.2p(13,ad,"9I");13.2X("1z:2p:3E");13.2U("2p",ac)},9G:17(ad){1c ac;ac=13.26("1z:2p:3E");if(!ac||!W(ad)){1a}if(ac.id!=Y(ad)){13.2X("1z:2p:3E");1a}if(!ac.6l&&1o.8z(1o.4z(Z(ad).5n-ac.x,2)+1o.4z(Z(ad).5o-ac.y,2))>X){ac.6l=1r;13.2U("2p",ac)}if(!ac.6l){1a}ac=1t ab.1u.1w.2p(13,ad,"cs");13.2U("2p",ac)}}})(S);M.1u.1w.3Z=1t M.3y(M.1X(M.1u.1w,{1y:"3Z",4c:1,a7:1,cq:1,2m:"iH",3J:17(X,W){13.2I=W.2I;13.2o=0;13.4e=X;13.x=W.4o[0].2O+(W.4o[1].2O-W.4o[0].2O)/2;13.y=W.4o[0].2K+(W.4o[1].2K-W.4o[0].2K)/2;13.ct=1o.8z(1o.4z(W.4o[0].2O-W.4o[1].2O,2)+1o.4z(W.4o[0].2K-W.4o[1].2K,2));13.4d(W)},40:17(W){1c X;13.2m="jW";if(W.2C[0].3D!=13.5G[0].4o[0].3D||W.2C[1].3D!=13.5G[0].4o[1].3D){1a}X=1o.8z(1o.4z(W.2C[0].2O-W.2C[1].2O,2)+1o.4z(W.2C[0].2K-W.2C[1].2K,2));13.a7=13.4c;13.4c=X/13.ct;13.cq=13.4c/13.a7;13.x=W.2C[0].2O+(W.2C[1].2O-W.2C[0].2O)/2;13.y=W.2C[0].2K+(W.2C[1].2K-W.2C[0].2K)/2;13.4d(W)}}));M.1u.1w.3Z.1K={5m:17(){13.1C("51",M.1u.1w.3Z.1K.a1,1);13.1C("5R",M.1u.1w.3Z.1K.aJ,1);13.1C("7N",M.1u.1w.3Z.1K.aD,1)},2P:17(){13.1N("51",M.1u.1w.3Z.1K.a1);13.1N("5R",M.1u.1w.3Z.1K.aJ);13.1N("7N",M.1u.1w.3Z.1K.aD)},a1:17(X){1c W;if(X.4o.1I!=2){1a}X.3z();W=1t M.1u.1w.3Z(13,X);13.34("1z:3Z:1z",W)},aJ:17(X){1c W;W=13.26("1z:3Z:1z");if(!W){1a}X.3z();13.2X("1z:3Z:1z")},aD:17(X){1c W;W=13.26("1z:3Z:1z");if(!W){1a}X.3z();W.40(X);13.2U("3Z",W)}};(17(ab){1c Z=ab.$;ab.1u.1w.4x=1t ab.3y(ab.1X(ab.1u.1w,{1y:"4x",3J:17(ah,ag,aj,ad,ac,ai,ae){1c af=ag.6j();13.x=af.x;13.y=af.y;13.2I=ag.2I;13.4e=ah;13.jX=aj||0;13.as=ad||0;13.7V=ac||0;13.jY=ai||0;13.jV=ae||0;13.bD=ag.bD||0;13.aX=1n;13.4d(ag)}}));1c aa,X;17 W(){aa=1h}17 Y(ac,ad){1a(ac>50)||(1===ad&&!("8Y"==ab.1e.4N&&ac<1))||(0===ac%12)||(0==ac%4.jU)}ab.1u.1w.4x.1K={9R:"jQ"in 1m||ab.1e.2n>8?"jR":"jS",5m:17(){13.1C(ab.1u.1w.4x.1K.9R,ab.1u.1w.4x.1K.3j,1)},2P:17(){13.1N(ab.1u.1w.4x.1K.9R,ab.1u.1w.4x.1K.3j,1)},3j:17(ah){1c ai=0,af=0,ad=0,ac=0,ag,ae;if(ah.cp){ad=ah.cp*-1}if(ah.cm!==2D){ad=ah.cm}if(ah.cn!==2D){ad=ah.cn}if(ah.co!==2D){af=ah.co*-1}if(ah.7V){ad=-1*ah.7V}if(ah.as){af=ah.as}if(0===ad&&0===af){1a}ai=0===ad?af:ad;ac=1o.1V(1o.3w(ad),1o.3w(af));if(!aa||ac<aa){aa=ac}ag=ai>0?"6e":"3N";ai=1o[ag](ai/aa);af=1o[ag](af/aa);ad=1o[ag](ad/aa);if(X){3P(X)}X=4D(W,7s);ae=1t ab.1u.1w.4x(13,ah,ai,af,ad,0,aa);ae.aX=Y(aa,ah.bD||0);13.2U("4x",ae)}}})(S);M.8Y=M.$(1j);M.cv=M.$(1m);1a S})();(17(I){if(!I){67"6I 6H 6G"}1c H=I.$;1c G=1j.jT||1j.jZ||1h;w.a6=1t I.3y({24:1h,2i:1n,1v:{9j:I.$F,6c:I.$F,by:I.$F,5S:I.$F,7a:I.$F,cw:I.$F,9P:1n,cA:1r},1D:1h,8i:1h,bu:0,7k:{9j:17(J){if(J.4e&&(7s===J.4e.9W||cx===J.4e.9W)&&J.k0){13.1v.9j.1E(1h,(J.2f-(13.1v.cA?13.bu:0))/J.k7).2y(1);13.bu=J.2f}},6c:17(J){if(J){H(J).2a()}13.8h();if(13.2i){1a}13.2i=1r;13.81();!13.1v.9P&&13.1v.9j.1E(1h,1).2y(1);13.1v.6c.1E(1h,13).2y(1);13.1v.7a.1E(1h,13).2y(1)},by:17(J){if(J){H(J).2a()}13.8h();13.2i=1n;13.81();13.1v.by.1E(1h,13).2y(1);13.1v.7a.1E(1h,13).2y(1)},5S:17(J){if(J){H(J).2a()}13.8h();13.2i=1n;13.81();13.1v.5S.1E(1h,13).2y(1);13.1v.7a.1E(1h,13).2y(1)}},9L:17(){H(["5X","bM","cz"]).36(17(J){13.24.1C(J,13.7k["8f"+J].2E(13).cB(1))},13)},8h:17(){if(13.8i){3x{3P(13.8i)}3R(J){}13.8i=1h}H(["5X","bM","cz"]).36(17(K){13.24.1N(K)},13)},81:17(){13.1F();if(13.24.26("1t")){1c J=13.24.4H;13.24.2P().2X("1t").1x({2e:"k8",1H:"2t"});J.5i()}},ck:17(K){1c L=1t 8K(),J;H(["bM","k9"]).36(17(M){L["8f"+M]=H(17(N){13.7k["8f"+M].2b(13,N)}).1E(13)},13);L.5S=H(17(){13.1v.cw.1E(1h,13).2y(1);13.1v.9P=1n;13.9L();13.24.1U=K}).1E(13);L.6c=H(17(){if(7s!==L.9W&&cx!==L.9W){13.7k.5S.2b(13);1a}J=L.k6;13.9L();if(G&&!I.1e.4K&&!("8R"===I.1e.4N&&I.1e.4q<k5)){13.24.3T("1U",G.k1(J))}1k{13.24.1U=K}}).1E(13);L.a4("k2",K);L.k3="k4";L.jP()},3J:17(K,J){13.1v=I.1X(13.1v,J);13.24=H(K)||I.$1t("24",{},{"1V-1f":"3k","1V-1g":"3k"}).1Z(I.$1t("2Y").1A("3p-at-24").1x({2e:"5C",1H:-dA,1f:10,1g:10,5d:"3f"}).1Z(1m.3H)).34("1t",1r);if(I.1e.2L.cl&&13.1v.9P&&"1O"==I.1P(K)){13.ck(K);1a}1c L=17(){if(13.ca()){13.7k.6c.2b(13)}1k{13.7k.5S.2b(13)}L=1h}.1E(13);13.9L();if("1O"==I.1P(K)){13.24.1U=K}1k{if(I.1e.4K&&5==I.1e.4q&&I.1e.2n<9){13.24.c9=17(){if(/2f|8j/.3e(13.24.8m)){13.24.c9=1h;L&&L()}}.1E(13)}13.24.1U=K.2q("1U")}13.24&&13.24.8j&&L&&(13.8i=L.2y(2N))},jO:17(){13.8h();13.81();13.2i=1n;1a 13},ca:17(){1c J=13.24;1a(J.9r)?(J.9r>0):(J.8m)?("8j"==J.8m):J.1f>0},1F:17(){1a 13.1D||(13.1D={1f:13.24.9r||13.24.1f,1g:13.24.c1||13.24.1g})}})})(w);(17(H){if(!H){67"6I 6H 6G"}if(H.5w){1a}1c G=H.$;H.5w=1t H.3y({3J:17(J,I){1c K;13.el=H.$(J);13.1v=H.1X(13.1v,I);13.5t=1n;13.7f=13.br;K=H.5w.7P[13.1v.1Y]||13.1v.1Y;if("17"===H.1P(K)){13.7f=K}1k{13.5J=13.8w(K)||13.8w("66")}if("1O"==H.1P(13.1v.71)){13.1v.71="jz"===13.1v.71?6m:5D(13.1v.71)||1}},1v:{c3:60,5z:8g,1Y:"66",71:1,4U:"jA",c8:H.$F,7m:H.$F,bR:H.$F,c6:H.$F,9A:1n,jB:1n},4g:1h,5J:1h,7f:1h,jC:17(I){13.1v.1Y=I;I=H.5w.7P[13.1v.1Y]||13.1v.1Y;if("17"===H.1P(I)){13.7f=I}1k{13.7f=13.br;13.5J=13.8w(I)||13.8w("66")}},4V:17(K){1c I=/\\%$/,J;13.4g=K;13.bi=0;13.2m=0;13.jy=0;13.8T={};13.7y="7y"===13.1v.4U||"7y-4p"===13.1v.4U;13.7w="7w"===13.1v.4U||"7w-4p"===13.1v.4U;1S(J in 13.4g){I.3e(13.4g[J][0])&&(13.8T[J]=1r);if("4p"===13.1v.4U||"7y-4p"===13.1v.4U||"7w-4p"===13.1v.4U){13.4g[J].4p()}}13.bm=H.6q();13.c5=13.bm+13.1v.5z;13.1v.c8.2b();if(0===13.1v.5z){13.6p(1);13.1v.7m.2b()}1k{13.9H=13.c4.1E(13);if(!13.1v.9A&&H.1e.2L.4Y){13.5t=H.1e.4Y.2b(1j,13.9H)}1k{13.5t=13.9H.c7(1o.5y(jx/13.1v.c3))}}1a 13},bn:17(){if(13.5t){if(!13.1v.9A&&H.1e.2L.4Y&&H.1e.9s){H.1e.9s.2b(1j,13.5t)}1k{dM(13.5t)}13.5t=1n}},2a:17(I){I=H.3o(I)?I:1n;13.bn();if(I){13.6p(1);13.1v.7m.2y(10)}1a 13},b9:17(K,J,I){K=2F(K);J=2F(J);1a(J-K)*I+K},c4:17(){1c J=H.6q(),I=(J-13.bm)/13.1v.5z,K=1o.6e(I);if(J>=13.c5&&K>=13.1v.71){13.bn();13.6p(1);13.1v.7m.2y(10);1a 13}if(13.7y&&13.bi<K){1S(1c L in 13.4g){13.4g[L].4p()}}13.bi=K;if(!13.1v.9A&&H.1e.2L.4Y){13.5t=H.1e.4Y.2b(1j,13.9H)}13.6p((13.7w?K:0)+13.7f(I%1))},6p:17(I){1c J={},L=I;1S(1c K in 13.4g){if("2r"===K){J[K]=1o.5y(13.b9(13.4g[K][0],13.4g[K][1],I)*2N)/2N}1k{J[K]=13.b9(13.4g[K][0],13.4g[K][1],I);13.8T[K]&&(J[K]+="%")}}13.1v.bR(J,13.el);13.7g(J);13.1v.c6(J,13.el)},7g:17(I){1a 13.el.1x(I)},8w:17(I){1c J,K=1h;if("1O"!==H.1P(I)){1a 1h}4r(I){1B"8D":K=G([0,0,1,1]);1G;1B"66":K=G([0.25,0.1,0.25,1]);1G;1B"66-in":K=G([0.42,0,1,1]);1G;1B"66-cb":K=G([0,0,0.58,1]);1G;1B"66-in-cb":K=G([0.42,0,0.58,1]);1G;1B"d1":K=G([0.47,0,0.jt,0.ju]);1G;1B"d2":K=G([0.39,0.jv,0.kb,1]);1G;1B"jw":K=G([0.jD,0.aQ,0.55,0.95]);1G;1B"d5":K=G([0.55,0.jE,0.68,0.53]);1G;1B"d3":K=G([0.25,0.46,0.45,0.94]);1G;1B"jL":K=G([0.jM,0.cf,0.jN,0.jK]);1G;1B"cU":K=G([0.55,0.jJ,0.jF,0.19]);1G;1B"cJ":K=G([0.jG,0.61,0.cg,1]);1G;1B"jI":K=G([0.ka,0.9V,0.cg,1]);1G;1B"kf":K=G([0.e1,0.cf,0.ed,0.22]);1G;1B"kB":K=G([0.cV,0.84,0.44,1]);1G;1B"kA":K=G([0.77,0,0.88,1]);1G;1B"kz":K=G([0.kC,0.aQ,0.kx,0.ki]);1G;1B"kj":K=G([0.23,1,0.32,1]);1G;1B"kk":K=G([0.86,0,0.kl,1]);1G;1B"d7":K=G([0.95,0.aQ,0.kh,0.kg]);1G;1B"d6":K=G([0.19,1,0.22,1]);1G;1B"kd":K=G([1,0,0,1]);1G;1B"ke":K=G([0.6,0.ky,0.98,0.km]);1G;1B"kn":K=G([0.ku,0.82,0.cV,1]);1G;1B"kw":K=G([0.kt,0.ks,0.15,0.86]);1G;1B"cI":K=G([0.6,-0.28,0.aW,0.9V]);1G;1B"cE":K=G([0.88,0.9c,0.32,1.ay]);1G;1B"kp":K=G([0.68,-0.55,0.kq,1.55]);1G;1R:I=I.4v(/\\s/g,"");if(I.3s(/^4S-4T\\((?:-?[0-9\\.]{0,}[0-9]{1,},){3}(?:-?[0-9\\.]{0,}[0-9]{1,})\\)$/)){K=I.4v(/^4S-4T\\s*\\(|\\)$/g,"").7H(",");1S(J=K.1I-1;J>=0;J--){K[J]=2F(K[J])}}}1a G(K)},br:17(U){1c I=0,T=0,Q=0,V=0,S=0,O=0,P=13.1v.5z;17 N(W){1a((I*W+T)*W+Q)*W}17 M(W){1a((V*W+S)*W+O)*W}17 K(W){1a(3*I*W+2*T)*W+Q}17 R(W){1a 1/(7s*W)}17 J(W,X){1a M(L(W,X))}17 L(ad,ae){1c ac,ab,aa,X,W,Z;17 Y(af){if(af>=0){1a af}1k{1a 0-af}}1S(aa=ad,Z=0;Z<8;Z++){X=N(aa)-ad;if(Y(X)<ae){1a aa}W=K(aa);if(Y(W)<0.be){1G}aa=aa-X/W}ac=0;ab=1;aa=ad;if(aa<ac){1a ac}if(aa>ab){1a ab}5l(ac<ab){X=N(aa);if(Y(X-ad)<ae){1a aa}if(ad>X){ac=aa}1k{ab=aa}aa=(ab-ac)*0.5+ac}1a aa}Q=3*13.5J[0];T=3*(13.5J[2]-13.5J[0])-Q;I=1-Q-T;O=3*13.5J[1];S=3*(13.5J[3]-13.5J[1])-O;V=1-O-S;1a J(U,R(P))}});H.5w.7P={8D:"8D",jr:"d1",ir:"d2",is:"d7",it:"d6",iu:"d5",iq:"d3",io:"cU",ij:"cJ",ik:"cI",il:"cE",cF:17(J,I){I=I||[];1a 1o.4z(2,10*--J)*1o.eB(20*J*1o.eG*(I[0]||1)/3)},im:17(J,I){1a 1-H.5w.7P.cF(1-J,I)},cL:17(K){1S(1c J=0,I=1;1;J+=I,I/=2){if(K>=(7-4*J)/11){1a I*I-1o.4z((11-6*J-11*K)/4,2)}}},iv:17(I){1a 1-H.5w.7P.cL(1-I)},3k:17(I){1a 0}}})(w);(17(H){if(!H){67"6I 6H 6G"}if(H.8E){1a}1c G=H.$;H.8E=1t H.3y(H.5w,{3J:17(I,J){13.an=I;13.1v=H.1X(13.1v,J);13.5t=1n;13.$3I.3J()},4V:17(M){1c I=/\\%$/,L,K,J=M.1I;13.aq=M;13.8W=1t 69(J);1S(K=0;K<J;K++){13.8W[K]={};1S(L in M[K]){I.3e(M[K][L][0])&&(13.8W[K][L]=1r);if("4p"===13.1v.4U||"7y-4p"===13.1v.4U||"7w-4p"===13.1v.4U){13.aq[K][L].4p()}}}13.$3I.4V([]);1a 13},6p:17(I){1S(1c J=0;J<13.an.1I;J++){13.el=H.$(13.an[J]);13.4g=13.aq[J];13.8T=13.8W[J];13.$3I.6p(I)}}})})(w);(17(H){if(!H){67"6I 6H 6G";1a}if(H.ar){1a}1c G=H.$;H.ar=17(J,K){1c I=13.74=H.$1t("2Y",1h,{2e:"5C","z-8J":cM}).1A("iD");H.$(J).1C("7x",17(){I.1Z(1m.3H)});H.$(J).1C("8k",17(){I.2P()});H.$(J).1C("7E",17(P){1c R=20,O=H.$(P).6j(),N=I.1F(),M=H.$(1j).1F(),Q=H.$(1j).6X();17 L(U,S,T){1a(T<(U-S)/2)?T:((T>(U+S)/2)?(T-S):(U-S)/2)}I.1x({1M:Q.x+L(M.1f,N.1f+2*R,O.x-Q.x)+R,1H:Q.y+L(M.1g,N.1g+2*R,O.y-Q.y)+R})});13.9T(K)};H.ar.2w.9T=17(I){13.74.4h&&13.74.ak(13.74.4h);13.74.3n(1m.bx(I))}})(w);(17(H){if(!H){67"6I 6H 6G";1a}if(H.iE){1a}1c G=H.$;H.8M=17(L,K,J,I){13.8G=1h;13.52=H.$1t("bQ",1h,{2e:"5C","z-8J":cM,5a:"3f",2r:0.8}).1A(I||"").1Z(J||1m.3H);13.cR(L);13.5q(K)};H.8M.2w.5q=17(I){13.52.5q();13.8G=13.4i.1E(13).2y(H.aF(I,iF))};H.8M.2w.4i=17(I){3P(13.8G);13.8G=1h;if(13.52&&!13.av){13.av=1t w.5w(13.52,{5z:H.aF(I,eD),7m:17(){13.52.5i();4P 13.52;13.av=1h}.1E(13)}).4V({2r:[13.52.3K("2r"),0]})}};H.8M.2w.cR=17(I){13.52.4h&&13.74.ak(13.52.4h);13.52.3n(1m.bx(I))}})(w);(17(H){if(!H){67"6I 6H 6G"}if(H.7c){1a}1c K=H.$,G=1h,O={"3u":1,4b:2,63:3,"17":4,1O:2N},I={"3u":17(R,Q,P){if("3u"!=H.1P(Q)){if(P||"1O"!=H.1P(Q)){1a 1n}1k{if(!/^(1r|1n)$/.3e(Q)){1a 1n}1k{Q=Q.cS()}}}if(R.41("2u")&&!K(R["2u"]).5F(Q)){1a 1n}G=Q;1a 1r},1O:17(R,Q,P){if("1O"!==H.1P(Q)){1a 1n}1k{if(R.41("2u")&&!K(R["2u"]).5F(Q)){1a 1n}1k{G=""+Q;1a 1r}}},63:17(S,R,Q){1c P=1n,U=/%$/,T=(H.1P(R)=="1O"&&U.3e(R));if(Q&&!"63"==93 R){1a 1n}R=2F(R);if(9x(R)){1a 1n}if(9x(S.7r)){S.7r=cQ.iC}if(9x(S.aC)){S.aC=cQ.js}if(S.41("2u")&&!K(S["2u"]).5F(R)){1a 1n}if(S.7r>R||R>S.aC){1a 1n}G=T?(R+"%"):R;1a 1r},4b:17(S,Q,P){if("1O"===H.1P(Q)){3x{Q=1j.iB.ix(Q)}3R(R){1a 1n}}if(H.1P(Q)==="4b"){G=Q;1a 1r}1k{1a 1n}},"17":17(R,Q,P){if(H.1P(Q)==="17"){G=Q;1a 1r}1k{1a 1n}}},J=17(U,T,Q){1c S;S=U.41("33")?U.33:[U];if("4b"!=H.1P(S)){1a 1n}1S(1c R=0,P=S.1I-1;R<=P;R++){if(I[S[R].1y](S[R],T,Q)){1a 1r}}1a 1n},M=17(U){1c S,R,T,P,Q;if(U.41("33")){P=U.33.1I;1S(S=0;S<P;S++){1S(R=S+1;R<P;R++){if(O[U.33[S]["1y"]]>O[U.33[R].1y]){Q=U.33[S];U.33[S]=U.33[R];U.33[R]=Q}}}}1a U},N=17(S){1c R;R=S.41("33")?S.33:[S];if("4b"!=H.1P(R)){1a 1n}1S(1c Q=R.1I-1;Q>=0;Q--){if(!R[Q].1y||!O.41(R[Q].1y)){1a 1n}if(H.3o(R[Q]["2u"])){if("4b"!==H.1P(R[Q]["2u"])){1a 1n}1S(1c P=R[Q]["2u"].1I-1;P>=0;P--){if(!I[R[Q].1y]({1y:R[Q].1y},R[Q]["2u"][P],1r)){1a 1n}}}}if(S.41("1R")&&!J(S,S["1R"],1r)){1a 1n}1a 1r},L=17(P){13.4B={};13.1v={};13.cN(P)};H.1X(L.2w,{cN:17(R){1c Q,P,S;1S(Q in R){if(!R.41(Q)){7G}P=(Q+"").4X().5A();if(!13.4B.41(P)){13.4B[P]=M(R[Q]);if(!N(13.4B[P])){67"iy iz iA ii \'"+Q+"\' ih in "+R}13.1v[P]=2D}}},7g:17(Q,P){Q=(Q+"").4X().5A();if(H.1P(P)=="1O"){P=P.4X()}if(13.4B.41(Q)){G=P;if(J(13.4B[Q],P)){13.1v[Q]=G}G=1h}},eZ:17(P){P=(P+"").4X().5A();if(13.4B.41(P)){1a H.3o(13.1v[P])?13.1v[P]:13.4B[P]["1R"]}},7M:17(Q){1S(1c P in Q){13.7g(P,Q[P])}},eX:17(){1c Q=H.1X({},13.1v);1S(1c P in Q){if(2D===Q[P]&&2D!==13.4B[P]["1R"]){Q[P]=13.4B[P]["1R"]}}1a Q},8S:17(P){K(P.7H(";")).36(K(17(Q){Q=Q.7H(":");13.7g(Q.6Q().4X(),Q.6Y(":"))}).1E(13))},8X:17(P){P=(P+"").4X().5A();1a 13.4B.41(P)},hY:17(P){P=(P+"").4X().5A();1a 13.8X(P)&&H.3o(13.1v[P])},2P:17(P){P=(P+"").4X().5A();if(13.8X(P)){4P 13.1v[P];4P 13.4B[P]}}});H.7c=L}(w));(17(K){if(!K){67"6I 6H 6G";1a}1c J=K.$;if(K.8Z){1a}1c I="bU://bV.b1.b8/hZ/75",H="bU://bV.b1.b8/i0/i1";1c G=17(L){13.6t={};13.7i=J(L);13.7C=J(1m.9S(I,"75"));13.7C.3T("1f",13.7i.9r||13.7i.1f);13.7C.3T("1g",13.7i.c1||13.7i.1g);13.1i=J(1m.9S(I,"1i"));13.1i.hX(H,"6K",13.7i.2q("1U"));13.1i.3T("1f","2N%");13.1i.3T("1g","2N%");13.1i.1Z(13.7C)};G.2w.6C=17(){1a 13.7C};G.2w.5e=17(L){if(1o.5y(L)<1){1a}if(!13.6t.5e){13.6t.5e=J(1m.9S(I,"2V"));13.6t.5e.3T("id","bX");13.6t.5e.b5(J(1m.9S(I,"hW")).bK({"in":"hS",bZ:L}));13.6t.5e.1Z(13.7C);13.1i.3T("2V","2d(#bX)")}1k{13.6t.5e.4h.3T("bZ",L)}1a 13};K.8Z=G}(w));1c r=(17(I){1c H=I.$;1c G=17(K,J){13.3h={8a:"3p",3r:"7Z",2e:"2Q",1D:{hT:"2v",1f:"2t",1g:"2t"},hU:["1g","1f"]};13.3I=K;13.4u=1h;13.6S=1h;13.2G=1h;13.2M={};13.eF=[];13.5P=1h;13.aK=1h;13.5H=1h;13.3h=I.1X(13.3h,J);13.3g=13.3h.8a+"-aP";13.8n=13.3h.8a+"-6N";13.ec()};G.2w={ec:17(){13.4u=I.$1t("2Y").1A(13.3g).1A(13.3g+"-"+13.3h.3r).1x({5a:"3f"});13.6S=I.$1t("2Y").1A(13.3g+"-6S").1Z(13.4u);13.4u.1Z(13.3I);H(["4C","4y"]).36(17(J){13.2M[J]=I.$1t("2o").1A(13.3g+"-2o").1A(13.3g+"-2o-"+J).1Z(13.4u).1C("1Q 21",(17(L,K){H(L).5G[0].2a().4I();H(L).5c();13.5O(K)}).2E(13,J))}.1E(13));13.2M.4C.1A(13.3g+"-2o-4O");13.2G=I.$1t("hV").1C("1Q 21",17(J){J.2a()})},dS:17(K){1c J=I.$1t("i2").1A(13.8n).3n(K).1Z(13.2G);1t I.a6(K,{7a:13.9B.1E(13)});13.eF.38(J);1a J},dk:17(K){1c J=13.5P||13.2G.9u(13.8n+"-6L")[0];if(J){H(J).1T(13.8n+"-6L")}13.5P=H(K);if(!13.5P){1a}13.5P.1A(13.8n+"-6L");13.5O(13.5P)},bP:17(){if(13.6S!==13.2G.4H){H(13.2G).1Z(13.6S);13.eA();H(1j).1C("7t",13.5H=13.9B.1E(13));13.bP.1E(13).2y(1);1a}1c J=13.3I.1F();if(J.1g>0&&J.1g>J.1f){13.7O("4Q")}1k{13.7O("7Z")}13.9B();13.4u.1x({5a:""})},2a:17(){if(13.5H){H(1j).1N("7t",13.5H)}13.4u.5i()},5O:17(W,M){1c O={x:0,y:0},Z="4Q"==13.3h.3r?"1H":"1M",R="4Q"==13.3h.3r?"1g":"1f",N="4Q"==13.3h.3r?"y":"x",V=13.2G.4H.1F()[R],S=13.2G.4H.8b(),L=13.2G.1F()[R],U,J,Y,P,K,T,Q,X=[];if(13.aK){13.aK.2a()}1k{13.2G.1x("1Y",I.1e.7v+5W.79(32)+"6Z")}if(2D===M){M=8g}U=13.2G.8b();if("1O"==I.1P(W)){O[N]=("4y"==W)?1o.1V(U[Z]-S[Z]-V,V-L):1o.2h(U[Z]-S[Z]+V,0)}1k{if("5Z"==I.1P(W)){J=W.1F();Y=W.8b();O[N]=1o.2h(0,1o.1V(V-L,U[Z]+V/2-Y[Z]-J[R]/2))}1k{1a}}if(I.1e.5K&&"6y"==I.1e.4N||I.1e.2n&&I.1e.2n<10){if("1O"==I.1P(W)&&O[N]==U[Z]-S[Z]){U[Z]+=0===U[Z]-S[Z]?30:-30}O["7X-"+Z]=[((L<=V)?0:(U[Z]-S[Z])),O[N]];4P O.x;4P O.y;if(!13.bA){13.bA=1t I.8E([13.2G],{5z:eD})}X.38(O);13.bA.4V(X);Q=O["7X-"+Z][1]}1k{13.2G.1x({1Y:I.1e.7v+5W.79(32)+M+"7D 66",2g:"4m("+O.x+"2v, "+O.y+"2v, 0)"});Q=O[N]}if(Q>=0){13.2M.4C.1A(13.3g+"-2o-4O")}1k{13.2M.4C.1T(13.3g+"-2o-4O")}if(Q<=V-L){13.2M.4y.1A(13.3g+"-2o-4O")}1k{13.2M.4y.1T(13.3g+"-2o-4O")}Q=1h},eA:17(){1c L,K,M,T,S,V,N,R,Q,U,aa,X,Y,W={x:0,y:0},J,P,O=aZ,Z=17(ad){1c ac,ab=0;1S(ac=1.5;ac<=90;ac+=1.5){ab+=(ad*1o.eB(ac/1o.eG/2))}(T<0)&&(ab*=(-1));1a ab};S=H(17(ab){W={x:0,y:0};J="4Q"==13.3h.3r?"1H":"1M";P="4Q"==13.3h.3r?"1g":"1f";L="4Q"==13.3h.3r?"y":"x";X=13.2G.4H.1F()[P];aa=13.2G.1F()[P];M=X-aa;if(M>=0){1a}if(ab.2m=="3E"){if(2D===Y){Y=0}13.2G.3F("1Y",I.1e.7v+5W.79(32)+"e5");V=ab[L];Q=ab.y;R=ab.x;U=1n}1k{if("9I"==ab.2m){if(U){1a}N=Z(1o.3w(T));Y+=N;(Y<=M)&&(Y=M);(Y>=0)&&(Y=0);W[L]=Y;13.2G.3F("1Y",I.1e.7v+5W.79(32)+O+"7D  4S-4T(.0, .0, .0, 1)");13.2G.3F("2g","4m("+W.x+"2v, "+W.y+"2v, 5Q)");T=0}1k{if(U){1a}if("7Z"==13.3h.3r&&1o.3w(ab.x-R)>1o.3w(ab.y-Q)||"4Q"==13.3h.3r&&1o.3w(ab.x-R)<1o.3w(ab.y-Q)){ab.2a();T=ab[L]-V;Y+=T;W[L]=Y;13.2G.3F("2g","4m("+W.x+"2v, "+W.y+"2v, 5Q)");if(Y>=0){13.2M.4C.1A(13.3g+"-2o-4O")}1k{13.2M.4C.1T(13.3g+"-2o-4O")}if(Y<=M){13.2M.4y.1A(13.3g+"-2o-4O")}1k{13.2M.4y.1T(13.3g+"-2o-4O")}}1k{U=1r}}V=ab[L]}}).1E(13);13.2G.1C("2p",S)},9B:17(){1c M,L,J,K=13.3I.1F();if(K.1g>0&&K.1g>K.1f){13.7O("4Q")}1k{13.7O("7Z")}M="4Q"==13.3h.3r?"1g":"1f";L=13.2G.1F()[M];J=13.4u.1F()[M];if(L<=J){13.4u.1A("6E-2M");13.2G.3F("1Y","").1F();13.2G.3F("2g","4m(0,0,0)");13.2M.4C.1A(13.3g+"-2o-4O");13.2M.4y.1T(13.3g+"-2o-4O")}1k{13.4u.1T("6E-2M")}if(13.5P){13.5O(13.5P,0)}},7O:17(J){if("4Q"!==J&&"7Z"!==J||J==13.3h.3r){1a}13.4u.1T(13.3g+"-"+13.3h.3r);13.3h.3r=J;13.4u.1A(13.3g+"-"+13.3h.3r);13.2G.3F("1Y","3k").1F();13.2G.3F("2g","").3F("7X","")}};1a G})(w);1c h=y.$;if(!y.1e.87){y.1e.87=y.9Q("2g").9Z()}1c o={4A:{1y:"1O","2u":["2W","7z"],"1R":"7z"},3O:{33:[{1y:"1O","2u":["1l","2B","48","3L"],"1R":"1l"},{1y:"3u","2u":[1n]}],"1R":"1l"},eh:{33:[{1y:"1O","2u":["2t"]},{1y:"63",7r:1}],"1R":"2t"},dh:{33:[{1y:"1O","2u":["2t"]},{1y:"63",7r:1}],"1R":"2t"},91:{1y:"1O","1R":"2R"},ib:{1y:"63",7r:0,"1R":15},7F:{33:[{1y:"1O","2u":["2Q","1H","3L"],"1R":"3L"},{1y:"3u","2u":[1n]}],"1R":"3L"},2A:{33:[{1y:"1O","2u":["1j","dq","3L"]},{1y:"3u","2u":[1n]}],"1R":"1j"},65:{33:[{1y:"1O","2u":["1l","2B","3L"],"1R":"1l"},{1y:"3u","2u":[1n]}],"1R":"1l"},3V:{1y:"1O","2u":["2W","3i"],"1R":"2W"},3X:{1y:"3u","1R":1r},e8:{1y:"3u","1R":1r},3a:{33:[{1y:"1O","2u":["aM","3i","3L"]},{1y:"3u","2u":[1n]}],"1R":"aM"},e2:{1y:"3u","1R":1r},e0:{1y:"3u","1R":1n},9f:{1y:"3u","1R":1n},a2:{1y:"3u","1R":1r},dz:{1y:"3u","1R":1n},dp:{1y:"3u","1R":1r},aV:{1y:"1O","2u":["2W","7z"],"1R":"2W"},5x:{1y:"1O"},bO:{1y:"1O","1R":"ic 6F 1l"},8H:{1y:"1O","1R":"eJ 6F 1l"},8Q:{1y:"1O","1R":"eJ 6F 2A"},ig:{1y:"1O","1R":"i9"},i8:{1y:"1O","1R":"i4"},i5:{1y:"1O","1R":"i6"}};1c l={3O:{33:[{1y:"1O","2u":["1l","2B","3L"],"1R":"1l"},{1y:"3u","2u":[1n]}],"1R":"1l"},3V:{1y:"1O","2u":["2W"],"1R":"2W"},8Q:{1y:"1O","1R":"hR 6F 2A"},bO:{1y:"1O","1R":"i7 6F 1l"},8H:{1y:"1O","1R":"iG 21 6F 1l"}};1c n="8P",B="1q",b=20,z=["db","de","dP","dO","e7","dl"];1c t,p={},D=h([]),F,e=1j.jc||1,E,x=1r,f=y.1e.2L.8V?"4m(":"9d(",A=y.1e.2L.8V?",0)":")",m=1h;1c q=(17(){1c H,K,J,I,G;1a G})();17 v(I){1c H,G;H="";1S(G=0;G<I.1I;G++){H+=5W.79(14^I.ex(G))}1a H}17 i(I){1c H=[],G=1h;(I&&(G=h(I)))&&(H=D.2V(17(J){1a J.3U===G}));1a H.1I?H[0]:1h}17 a(I){1c H=h(1j).1F(),G=h(1j).6X();I=I||0;1a{1M:I,2R:H.1f-I,1H:I,2Q:H.1g-I,x:G.x,y:G.y}}17 c(G){1a(G.2k&&("3A"===G.2k||G.2k===G.59))||(/3A/i).3e(G.1y)}17 g(G){1a G.2k?(("3A"===G.2k||G.59===G.2k)&&G.9Y):1===G.2C.1I&&(G.6d.1I?G.6d[0].3D==G.2C[0].3D:1r)}17 s(){1c I=y.$A(29),H=I.6Q(),G=p[H];if(G){1S(1c J=0;J<G.1I;J++){G[J].6i(1h,I)}}}17 C(){1c K=29[0],G,J,H=[];3x{do{J=K.a9;if(/^[A-am-z]*$/.3e(J)){if(G=K.2q("id")){if(/^[A-am-z][-A-am-je-jf]*!/.3e(G)){J+="#"+G}}H.38(J)}K=K.4H}5l(K&&K!==1m.6k);H=H.4p();y.76(H.6Y(" ")+"> .1q-8c > 24",{1f:"2N% !2s;"},"1q-et-6M",1r)}3R(I){}}17 u(){1c H=1h,I=1h,G=17(){1j.jb(1m.3H.80,1m.3H.7W);1j.aG(1t 1u("7t"))};I=f6(17(){1c L=1j.3r==90||1j.3r==-90,K=1j.4J,J=(L?f5.ja:f5.j6)*0.85;if((H==1h||H==1n)&&((L&&K<J)||(!L&&K<J))){H=1r;G()}1k{if((H==1h||H==1r)&&((L&&K>J)||(!L&&K>J))){H=1n;G()}}},j7);1a I}17 d(){y.76(".3p-3f-6S, .3p-at-24",{7A:"eS !2s","2h-1g":"0 !2s","2h-1f":"0 !2s","1V-1g":"3k !2s","1V-1f":"3k !2s",1f:"f4 !2s",1g:"f4 !2s",2e:"5C !2s",1H:"-a3 !2s",1M:"0 !2s",5d:"3f !2s","-3W-2g":"3k !2s",2g:"3k !2s","-3W-1Y":"3k !2s",1Y:"3k !2s"},"9o-8C-6M");y.76(".3p-at-24 24",{7A:"dC-eS !2s",3G:"0 !2s",78:"0 !2s","2h-1g":"0 !2s","2h-1f":"0 !2s","1V-1g":"3k !2s","1V-1f":"3k !2s","-3W-2g":"3k !2s",2g:"3k !2s","-3W-1Y":"3k !2s",1Y:"3k !2s"},"9o-8C-6M");if(y.1e.6u){y.76(".3t-3p .1q-2A .1q-2A-bg",{7A:"3k !2s"},"9o-8C-6M")}if(y.1e.6u&&("4l"!==y.1e.3B||44==y.1e.7l)){y.76(".3t-3p .1q-1l-1j.1q-2B, .3t-3p .1q-1l-1j.1q-2B:j8",{"3G-j9":"0 !2s"},"9o-8C-6M")}}1c k=17(J,K,H,I,G){13.1J={1U:1h,2d:1h,64:1,1d:1h,2m:0,1D:{1f:0,1g:0},2f:1n};13.1l={1U:1h,2d:1h,64:1,1d:1h,2m:0,1D:{1f:0,1g:0},2f:1n};if("8O"==y.1P(J)){13.1J=J}1k{if("1O"==y.1P(J)){13.1J.2d=y.6b(J)}}if("8O"==y.1P(K)){13.1l=K}1k{if("1O"==y.1P(K)){13.1l.2d=y.6b(K)}}13.3m=H;13.1v=I;13.4n=G;13.7b=1h;13.43=1h;13.1d=1h};k.2w={9t:17(I,H,G){1c J=I.7T("24")[0];if(G){13.1J.1d=J||y.$1t("24").1Z(I)}if(e>1){13.1J.2d=I.2q("3Q-1i-2x");if(13.1J.2d){13.1J.64=2}13.1l.2d=I.2q("3Q-1l-1i-2x");if(13.1l.2d){13.1l.64=2}}13.1J.1U=I.2q("3Q-1i")||I.2q("jg")||(J?J.2q("1U"):1h);if(13.1J.1U){13.1J.1U=y.6b(13.1J.1U)}13.1J.2d=13.1J.2d||13.1J.1U;if(13.1J.2d){13.1J.2d=y.6b(13.1J.2d)}13.1l.1U=I.2q("3Q-1l-1i")||I.2q("6K");if(13.1l.1U){13.1l.1U=y.6b(13.1l.1U)}13.1l.2d=13.1l.2d||13.1l.1U;if(13.1l.2d){13.1l.2d=y.6b(13.1l.2d)}13.3m=I.2q("3Q-3m")||I.2q("8x")||H;13.43=I.2q("3Q-43");13.4n=I;1a 13},aI:17(G){1c H=1h;if(29.1I>1&&"17"===y.1P(29[1])){H=29[1]}if(0!==13[G].2m){if(13[G].2f){13.6c(H)}1a}if(13[G].2d&&13[G].1d&&!13[G].1d.2q("1U")&&!13[G].1d.2q("jh")){13[G].1d.3T("1U",13[G].2d)}13[G].2m=1;1t y.a6(13[G].1d||13[G].2d,{7a:h(17(I){13[G].2f=1r;13[G].2m=I.2i?2:-1;if(I.2i){13[G].1D=I.1F();if(!13[G].1d){13[G].1d=h(I.24);13[G].1d.2q("2l");13[G].1d.5B("2l");13[G].1D.1f/=13[G].64;13[G].1D.1g/=13[G].64}1k{13[G].1d.1x({"1V-1f":13[G].1D.1f,"1V-1g":13[G].1D.1g});if(13[G].1d.9m&&13[G].1d.9m!=13[G].1d.1U){13[G].2d=13[G].1d.9m}1k{if(y.6b(13[G].1d.2q("1U")||"")!=13[G].2d){13[G].1d.3T("1U",13[G].2d)}}}}13.6c(H)}).1E(13)})},9e:17(){13.aI("1J",29[0])},bJ:17(){13.aI("1l",29[0])},5X:17(){13.7b=1h;if(29.1I>0&&"17"===y.1P(29[0])){13.7b=29[0]}13.9e();13.bJ()},6c:17(G){if(G){G.2b(1h,13)}if(13.7b&&13.1J.2f&&13.1l.2f){13.7b.2b(1h,13);13.7b=1h;1a}},2f:17(){1a(13.1J.2f&&13.1l.2f)},2i:17(){1a(2===13.1J.2m&&2===13.1l.2m)},8v:17(H){1c G="1J"==H?"1l":"1J";if(!13[H].2f||(13[H].2f&&2===13[H].2m)){1a 13[H].2d}1k{if(!13[G].2f||(13[G].2f&&2===13[G].2m)){1a 13[G].2d}1k{1a 1h}}},6C:17(H){1c G="1J"==H?"1l":"1J";if(!13[H].2f||(13[H].2f&&2===13[H].2m)){1a 13[H].1d}1k{if(!13[G].2f||(13[G].2f&&2===13[G].2m)){1a 13[G].1d}1k{1a 1h}}},1F:17(H){1c G="1J"==H?"1l":"1J";if(!13[H].2f||(13[H].2f&&2===13[H].2m)){1a 13[H].1D}1k{if(!13[G].2f||(13[G].2f&&2===13[G].2m)){1a 13[G].1D}1k{1a{1f:0,1g:0}}}},jo:17(H){1c G="1J"==H?"1l":"1J";if(!13[H].2f||(13[H].2f&&2===13[H].2m)){1a 13[H].64}1k{if(!13[G].2f||(13[G].2f&&2===13[G].2m)){1a 13[G].64}1k{1a 1}}},6z:17(G){13.1d=13.6C(G)}};1c j=17(H,G){13.1v=1t y.7c(o);13.1p=h(17(){if(29.1I>1){1a 13.7g(29[0],29[1])}1k{1a 13.eZ(29[0])}}).1E(13.1v);13.f0=1t y.7c(l);13.3C=[];13.1i=1h;13.6P=1h;13.3U=h(H).1C("3E jp 2W",17(I){I.2a()});13.id=1h;13.1d=1h;13.6W=1h;13.9k=1h;13.6x=1h;13.7q={1f:0,1g:0};13.1D={1f:0,1g:0};13.2c={1f:0,1g:0};13.3d={1f:0,1g:0};13.2j={1H:0,1M:0,2Q:0,2R:0};13.2i=1n;13.1L=1n;13.5I=1h;13.aA=1h;13.5H=h(17(){if(13.1L){13.1i.1d.1x({"1V-1g":1o.2h(13.1i.1F("1l").1g,13.6A())});13.1i.1d.1x({"1V-1f":1o.2h(13.1i.1F("1l").1f,13.7B())})}13.bh(29[0])}).1E(13);13.bp=h(17(I){3P(13.aA);13.aA=h(13.5H).2y(10,"5O"===I.1y)}).2E(13);13.1s=1h;13.1b=1h;13.3a=1h;13.bq=1h;13.6U=0;13.bW=1r;13.6g=1h;13.5r=1h;13.6N=1h;13.3c=1h;13.3S=1h;13.3X=1h;13.5h=1h;13.8r=1h;13.4R=1h;13.8t=1h;13.56=1h;13.4j=1h;13.4L=[];13.2M={};13.4V(G)};j.2w={eT:17(G){13.1v.7M(1j[B+"7c"]||{});13.1v.8S(13.3U.2q("3Q-1v")||"");if(y.1e.3t){13.1v.7M(13.f0.eX());13.1v.7M(1j[B+"jq"]||{});13.1v.8S(13.3U.2q("3Q-3t-1v")||"")}if("1O"==y.1P(G)){13.1v.8S(G||"")}1k{13.1v.7M(G||{})}if(13.1p("5x")){13.1p("5x",13.1p("5x").4v(","," "))}if(1n===13.1p("7F")){13.1p("7F","3L")}if(1n===13.1p("3a")){13.1p("3a","3L")}4r(13.1p("3a")){1B"3L":13.6U=0;1G;1B"aM":13.6U=2;1G;1B"3i":13.6U=6m;1G}if("3L"===13.1p("3O")){13.1p("3O",1n)}if("3L"===13.1p("2A")){13.1p("2A",1n)}if("3L"===13.1p("65")){13.1p("65",1n)}if(E){if("1l"==13.1p("3O")){13.1p("91","2z")}}if(y.1e.3t&&"1l"==13.1p("3O")&&"2z"==13.1p("91")){if(13.1p("2A")){13.1p("3O",1n)}1k{13.1p("4A","2W")}}},4V:17(H){1c G;13.eT(H);if(x&&!13.1p("a2")){1a}13.id=13.3U.2q("id")||"1q-"+1o.6e(1o.6O()*y.6q());13.3U.3T("id",13.id);13.1d=y.$1t("8c").1A("1q-8c");C(13.3U);13.6W=13.3U.ei("24");13.9k=13.6W?13.6W.2q("1U"):1h;13.6x=h(13.3U).2q("8x");h(13.3U).5B("8x");13.6P=1t k().9t(13.3U,13.6x,1r);13.1i=13.6P;13.1d.eg(13.1i.1J.1d).1A(13.1p("5x"));if(1r!==13.1p("dz")){13.1d.1C("jn",17(I){I.2a();1a 1n})}13.1d.1A("1q-"+13.1p("4A")+"-1l");if(!13.1p("2A")){13.1d.1A("1q-6E-2A")}13.1s={1d:y.$1t("2Y",{"3M":"1q-1s"},{1H:0}).1Z(13.1d),1i:y.$1t("24",{1U:"3Q:1i/dw;dv,dt/du="},{2e:"5C",1H:0,1M:0}),1f:0,1g:0,2Z:{x:0,y:0},5v:{x:0,y:0},1D:{1f:0,1g:0},3G:{x:0,y:0},dx:0,dy:0,5N:1n,4i:17(){if(y.1e.2L.2g){13.1d.1x({2g:"9d(-a3,-a3)"})}1k{13.1d.1x({1H:-dA})}}};13.1s.4i();13.1s.1d.3n(13.1s.1i);13.1b={1d:y.$1t("2Y",{"3M":"1q-1l-1j"},{1H:-dB}).1A(13.1p("5x")).1Z(F),1i:y.$1t("24",{1U:"3Q:1i/dw;dv,dt/du="},{2e:"5C"}),a0:0,1f:0,1g:0,5f:0,4J:0,1D:{1f:"2t",6R:"2v",1g:"2t",6w:"2v"},1W:13.1p("3O"),2e:13.1p("91"),4k:1n,2T:1n,3l:1n,5p:1n,6J:h(17(){13.1b.5p=1n!==29[0];13.1d[13.1b.5p?"1T":"1A"]("1q-6E-1l")}).1E(13),4i:h(17(){1c I=h(13.1d).26("cr");13.1b.1d.1N("2S");13.1b.1d.1x({1H:-dB}).1Z(F);13.1b.1d.1T("1q-9F 1q-p-"+("1l"==13.1b.1W?13.1b.2e:13.1b.1W));if(!13.1L&&I){I.2P()}13.1b.1i.2q("2l");13.1b.1i.5B("2l")}).1E(13),9h:h(17(I){13.1d[1n===I?"1A":"1T"]("1q-6E-1l");13.1d["2B"==I?"1A":"1T"]("1q-2B-1l");13.1b.1d["2B"==I?"1A":"1T"]("1q-2B");13.1b.1d["48"==I?"1A":"1T"]("1q-48");if("1l"!=I){13.1d.1T("1q-2z-1l");13.1b.1d.1T("1q-2z")}13.1b.1W=I;if(1n===I){13.1b.6J(1n)}1k{if("48"===I){13.1b.6J(1r)}}}).1E(13)};13.1b.1d.3n(13.1b.1i);13.1b.9h(13.1p("3O"));13.1b.1i.5B("1f");13.1b.1i.5B("1g");if("2D"!==93(q)){h(13.1d).34("cr",y.$1t(((1o.6e(1o.6O()*bN)+1)%2)?"bQ":"2Y").1x({7A:"dC",5d:"3f",5a:"6n",jm:q[1],ji:q[2],dH:q[3],jj:"jk-jl",2e:"5C",1H:8,1M:8,7X:"2t",1f:"2t",j5:"2R","j4-1g":"iO",dF:iP}).5k(v(q[0])));if(h(h(13.1d).26("cr")).7T("a")[0]){h(h(h(13.1d).26("cr")).7T("a")[0]).1C("21 1Q",17(I){I.5c();1j.a4(13.6K)})}}if((G=(""+13.1p("eh")).3s(/^([0-9]+)?(2v|%)?$/))){13.1b.1D.6R=G[2]||"2v";13.1b.1D.1f=(2F(G[1])||"2t")}if((G=(""+13.1p("dh")).3s(/^([0-9]+)?(2v|%)?$/))){13.1b.1D.6w=G[2]||"2v";13.1b.1D.1g=(2F(G[1])||"2t")}if("2B"==13.1b.1W){13.1d.1A("1q-2B-1l");13.1b.1d.1A("1q-2B");if("2t"===13.1b.1D.1f){13.1b.1D.6R="%";13.1b.1D.1f=70}if("2t"===13.1b.1D.1g){13.1b.1D.6w="%"}}1k{if(13.1p("1l-2e").3s(/^#/)){if(13.1b.4k=h(13.1p("1l-2e").4v(/^#/,""))){if(h(13.1b.4k).1F().1g>50){if("2t"===13.1b.1D.1f){13.1b.1D.6R="%";13.1b.1D.1f=2N}if("2t"===13.1b.1D.1g){13.1b.1D.6w="%";13.1b.1D.1g=2N}}}1k{13.1p("1l-2e","2R")}}if("48"==13.1b.1W){if("2t"===13.1b.1D.1f){13.1b.1D.6R="2v"}if("2t"===13.1b.1D.1g){13.1b.1D.6w="2v"}}if("1l"==13.1b.1W){if("2t"===13.1b.1D.1f||"2z"==13.1p("1l-2e")){13.1b.1D.6R="%";13.1b.1D.1f=2N}if("2t"===13.1b.1D.1g||"2z"==13.1p("1l-2e")){13.1b.1D.6w="%";13.1b.1D.1g=2N}}if("2z"==13.1p("1l-2e")){13.1d.1A("1q-2z-1l")}}13.1b.2e=13.1b.4k?"4k":13.1p("1l-2e");13.1s.3G.x=2F(13.1s.1d.3K("3G-1M-1f")||"0");13.1s.3G.y=2F(13.1s.1d.3K("3G-1H-1f")||"0");13.1i.9e(17(){if(2!==13.1i.1J.2m){1a}13.1i.6z("1J");13.1D=13.1i.1d.1F();13.ea();13.2i=1r;if(1r===13.1p("9f")){13.6V()}}.1E(13));if(1r!==13.1p("9f")||"3i"==13.1p("4A")){13.1i.5X(h(17(I){13.7o(I,1r)}).1E(13));13.5r=h(13.8o).1E(13).2y(8d)}13.dc()},2a:17(){13.dR();if(13.1b){13.1b.1d.5i()}if(13.4j){13.4j.2a();13.4j=1h}if(13.3c){13.3c.5i()}if(13.1L){h(y.1e.49()).1x({5d:""})}h(13.3C).36(17(G){h(G.4n).1T("1q-6N-6L").1T(13.1p("5x")||"1q-$iQ-6M-3M-6F-2P$")},13);if(13.6W){13.3U.3n(13.6W);if(13.9k){13.6W.3T("1U",13.9k)}}if(13.6x){13.3U.3T("8x",13.6x)}if(13.1d){13.1d.5i()}},7o:17(I,J){1c H=13.5T,G=13.1i;13.5T=1h;if(2!==I.1l.2m){13.1i=I;13.2i=1r;13.1b.6J(1n);1a}13.1i=I;13.1i.6z(13.1L?"1l":"1J");13.1b.1i.1U=13.1i.8v("1l");13.1b.1d.1T("1q-48");13.1b.1i.2q("2l");13.1b.1i.5B("2l");13.1b.1d.1F();4D(h(17(){1c L=13.1b.1i.1F(),K;13.3d=13.1i.1F("1l");if(L.1f*L.1g>1&&L.1f*L.1g<13.3d.1f*13.3d.1g){13.3d=L}13.2c=y.4a(13.3d);if("48"==13.1b.1W){13.1b.1d.1A("1q-48")}13.da();13.1s.1i.1U=13.1i.1d.9m||13.1i.1d.1U;13.1b.6J(13.1b.1W&&!(13.1L&&"48"==13.1b.1W));13.2i=1r;13.5I=1h;13.5H();13.1d.1A("1q-2i");13.aY();if(G!==13.1i){s("de",13.id,G.4n,13.1i.4n);if(13.9n){K=13.9n;13.9n=1h;13.40(K.1i,K.dj)}}1k{s("db",13.id)}if(H){13.1d.2U(H.1y,H)}1k{if(13.1L&&"3i"==13.1p("3V")){13.4w()}1k{if(!!J){13.6V()}}}}).1E(13),iR)},dc:17(){1c H=13.id,G,I;I=1t dd("1l\\\\-id(\\\\s+)?:(\\\\s+)?"+H+"($|;)");if(y.1e.2L.bl){G=y.$A(1m.b7(\'[3Q-1l-id="\'+13.id+\'"]\'));G=h(G).5E(y.$A(1m.b7(\'[aO*="1l-id"]\')).2V(17(J){1a I.3e(J.2q("aO")||"")}))}1k{G=y.$A(1m.9p("A")).2V(17(J){1a H==J.2q("3Q-1l-id")||I.3e(J.2q("aO")||"")})}h(G).36(17(K){1c J,L;h(K).1C("2W",17(M){M.3z()});J=1t k().9t(K,13.6x);if(13.1i.1l.1U.4F(J.1l.1U)&&13.1i.1J.1U.4F(J.1J.1U)){h(J.4n).1A("1q-6N-6L");J=13.1i;J.4n=K}if(!J.43&&13.1i.43){J.43=13.1i.43}L=h(17(){13.40(J)}).1E(13);h(K).1C("6B",17(M){if("di"in M){M.di()}},5);h(K).1C("21 "+("7z"==13.1p("aV")?"7x 8k":"1Q"),h(17(N,M){if(13.5V){3P(13.5V)}13.5V=1n;if("7x"==N.1y){13.5V=h(L).2y(M)}1k{if("21"==N.1y||"1Q"==N.1y){L()}}}).2E(13,60)).1A(13.1p("5x")).1A("1q-6N");J.9e();if(1r!==13.1p("9f")){J.bJ()}13.3C.38(J)},13)},40:17(G,H){if(!13.2i){13.9n={1i:G,dj:H};1a}if(!G||G===13.1i){1a 1n}13.4E(1h,1r);13.2i=1n;13.1d.1T("1q-2i");13.5r=h(13.8o).1E(13).2y(8d);G.5X(h(17(O){1c I,P,N,K,J,M,L=(y.1e.2n<10)?"1F":"7I";13.aY();O.6z("1J");if(!O.1d){13.2i=1r;13.1d.1A("1q-2i");1a}13.8I(O);I=13.1i.1d[L]();if(13.1L){O.6z("1l");N=y.$1t("2Y").1A("1q-2A-bg");if(y.1e.2L.8q||y.1e.2n<10){N.3n(y.$1t("24",{1U:O.8v("1l")}).1x({2r:0}))}1k{N.3n(1t y.8Z(O.1d).5e(b).6C().1x({2r:0}))}h(N).1x({"z-8J":-99}).1Z(13.3c)}if(13.1L&&"1l"===13.1b.1W&&"3i"===13.1p("3V")){h(O.1d).1x({2r:0}).1Z(13.1d);P=I;J=[O.1d,13.1i.1d];M=[{2r:[0,1]},{2r:[1,0]}];h(O.1d).1x({"1V-1f":1o.2h(O.1F("1l").1f,13.7B()),"1V-1g":1o.2h(O.1F("1l").1g,13.6A())})}1k{13.1d.1x({1g:13.1d[L]().1g});13.1i.1d.1x({2e:"5C",1H:0,1M:0,2Q:0,2R:0,1f:"2N%",1g:"2N%","1V-1f":"","1V-1g":""});h(O.1d).1x({"1V-1f":1o.2h(O.1F(13.1L?"1l":"1J").1f,13.1L?13.7B():6m),"1V-1g":1o.2h(O.1F(13.1L?"1l":"1J").1g,13.1L?13.6A():6m),2e:"iN",1H:0,1M:0,2r:0,2g:""}).1Z(13.1d);P=h(O.1d)[L]();if(!H){h(O.1d).1x({"2h-1f":I.1f,1g:I.1g,"1V-1f":I.1f,"1V-1g":""})}13.1d.1x({1g:"",5d:""}).1F();h(O.1d).1F();J=[O.1d,13.1i.1d];M=[y.1X({2r:[0,1]},H?{4c:[0.6,1]}:{"2h-1f":[I.1f,P.1f],"1V-1f":[I.1f,P.1f],1g:[I.1g,P.1g]}),{2r:[1,0]}]}if(13.1L){if(13.3S.4h&&N.4h){K=h(13.3S.4h).3K("2r");if(y.1e.5K){J=J.5E([N.4h]);M=M.5E([{2r:[0.bS,K]}])}1k{J=J.5E([N.4h,13.3S.4h]);M=M.5E([{2r:[0.bS,K]},{2r:[K,0.bS]}])}}}1t y.8E(J,{5z:(H||13.1p("dp"))?H?8d:iM:0,1Y:H?"4S-4T(0.88, 0.9c, 0.aB, 1.ay)":(I.1f==P.1f)?"8D":"4S-4T(0.25, .1, .1, 1)",7m:h(17(){13.1i.1d.2P().2q("2l");13.1i.1d.5B("2l");h(O.1d).1x(13.1L?{1f:"2t",1g:"2t"}:{1f:"",1g:""}).1x({"2h-1f":"","2h-1g":"",2r:"","1V-1f":1o.2h(O.1F(13.1L?"1l":"1J").1f,13.1L?13.7B():6m),"1V-1g":1o.2h(O.1F(13.1L?"1l":"1J").1g,13.1L?13.6A():6m)});if(13.1L){13.3S.2P();13.3S=2D;13.3S=N.3F("z-8J",-2N);h(13.3S.4h).1x({2r:""});if(13.3X){if(O.3m){if(O.43){13.3X.5k("").3n(y.$1t("a",{6K:O.43}).1C("21 1Q",13.8N.1E(13)).5k(O.3m))}1k{13.3X.5k(O.3m).1A("1q-5q")}}1k{13.3X.1T("1q-5q")}}}13.7o(O)}).1E(13),bR:h(17(Q,R){if(2D!==Q.4c){R.3F("2g","4c("+Q.4c+")")}})}).4V(M)}).1E(13))},8I:17(H){1c G=1n;h(13.3C).36(17(I){h(I.4n).1T("1q-6N-6L");if(I===H){G=1r}});if(G&&H.4n){h(H.4n).1A("1q-6N-6L")}if(13.4j){13.4j.dk(H.dT)}},da:17(G){if(13.1i.3m&&"3L"!==13.1p("7F")&&"2B"!==13.1b.1W){if(!13.1b.3m){13.1b.3m=y.$1t("2Y",{"3M":"1q-3m"}).1Z(13.1b.1d.1A("3m-"+13.1p("7F")))}13.1b.3m.5k(13.1i.3m)}},6V:17(G,I){1c H;if(!13.1L){if(13.6U<=0){1a}13.6U--}if(2D===I){if(!13.1b.2T&&!13.1b.3l){if(13.1p("3O")){if("7z"==13.1p("4A")){I=13.1p("bO")}1k{if("2W"==13.1p("4A")){I=13.1p("8H")}}}1k{I=13.1p("2A")?13.1p("8Q"):""}}1k{I=13.1p("2A")?13.1p("8Q"):""}}if(!I){13.b4();1a}H=13.1d;if(!13.3a){13.3a=y.$1t("2Y",{"3M":"1q-3a"});13.bq=y.$1t("bQ",{"3M":"1q-3a-iI"}).3n(1m.bx(I)).1Z(13.3a);h(13.3a).1Z(13.1d)}1k{h(13.bq).5k(I)}13.3a.1x({"1Y-dK":""}).1T("1q-3a-3f");if(13.1L){H=13.4R}1k{if((13.1b.2T||13.1b.3l)&&"2B"!==13.1b.1W&&"2z"==13.1b.2e){H=13.1b.1d}}if(1r===G){4D(h(17(){13.3a.1A("1q-3a-3f")}).1E(13),16)}13.3a.1Z(H)},b4:17(){if(13.3a){13.3a.1x({"1Y-dK":"e5"}).1A("1q-3a-3f")}},8o:17(){if(!13.6g){13.6g=y.$1t("2Y",{"3M":"1q-iJ"});13.1d.3n(13.6g);13.6g.1F()}13.6g.1A("e4")},aY:17(){3P(13.5r);13.5r=1h;if(13.6g){h(13.6g).1T("e4")}},7u:17(I,M){1c L=y.4a(13.1b.1D),K=(!13.1L&&13.1b.4k)?h(13.1b.4k).1F():{1f:0,1g:0},H,G,J=13.1D,N={x:0,y:0};M=M||13.1b.2e;13.7q=13.1i.1d.1F();13.1D=13.1i.1d.1F();13.2j=13.1i.1d.7I();if(!K.1g){K=13.1D}if(1n===13.1p("e2")||1n===13.1b.1W||"48"===13.1b.1W){I=1n}if("48"==13.1b.1W){if("2t"===L.1f){L.1f=13.3d.1f}if("2t"===L.1g){L.1g=13.3d.1g}}if(13.1L&&"2B"==13.1b.1W){L.1f=70;L.1g="2t"}if("2B"==13.1b.1W&&"2t"===L.1g){13.1b.1f=2F(L.1f/2N)*1o.2h(K.1f,K.1g);13.1b.1g=13.1b.1f}1k{if("1l"==13.1b.1W&&"2z"==M){13.1D=13.1d.1F();K=13.1D;13.2j=13.1d.7I();13.1b.1f=K.1f;13.1b.1g=K.1g}1k{13.1b.1f=("%"===L.6R)?2F(L.1f/2N)*K.1f:5D(L.1f);13.1b.1g=("%"===L.6w)?2F(L.1g/2N)*K.1g:5D(L.1g)}}if("48"==13.1b.1W){G=1o.2h(1o.2h(13.1b.1f/13.3d.1f,13.1b.1g/13.3d.1g),1);13.1b.1f=13.3d.1f*G;13.1b.1g=13.3d.1g*G}13.1b.1f=1o.3N(13.1b.1f);13.1b.1g=1o.3N(13.1b.1g);13.1b.a0=13.1b.1f/13.1b.1g;13.1b.1d.1x({1f:13.1b.1f,1g:13.1b.1g});if(I){K=13.1L?13.3c.1F():13.1b.1d.1F();if(!13.1L&&(13.7q.1f*13.7q.1g)/(13.3d.1f*13.3d.1g)>0.8){13.2c.1f=1.5*13.3d.1f;13.2c.1g=1.5*13.3d.1g}1k{13.2c=y.4a(13.3d)}}if(1n!==13.1b.1W&&!13.1b.2T&&!(13.1L&&"3i"==13.1p("3V"))){if((13.7q.1f*13.7q.1g)/(13.2c.1f*13.2c.1g)>0.8){13.2c=y.4a(13.3d);13.1b.6J(1n)}1k{13.1b.6J(1r)}}13.1b.1i.1x({1f:13.2c.1f,1g:13.2c.1g});H=13.1b.1d.8u();13.1b.5f=1o.3N(H.1f);13.1b.4J=1o.3N(H.1g);13.1s.1f=1o.3N(13.1b.5f/(13.2c.1f/13.1D.1f));13.1s.1g=1o.3N(13.1b.4J/(13.2c.1g/13.1D.1g));13.1s.1d.1x({1f:13.1s.1f,1g:13.1s.1g});13.1s.1i.1x(13.1D);y.1X(13.1s,13.1s.1d.1F());if(13.1b.2T){3P(13.4M);13.4M=1h;if(13.1s.5N){13.1s.2Z.x*=(13.1D.1f/J.1f);13.1s.2Z.y*=(13.1D.1g/J.1g);N.x=13.1s.5v.x;N.y=13.1s.5v.y}1k{N.x=13.2j.1M+13.1s.1f/2+(13.1s.2Z.x*(13.1D.1f/J.1f));N.y=13.2j.1H+13.1s.1g/2+(13.1s.2Z.y*(13.1D.1g/J.1g))}13.7U(1h,N)}},bh:17(K){1c N,M,G,L,J,I,H=h(13.1d).26("cr");G=a(5);J=13.1b.2e;L=13.1L?"2z":13.1b.4k?"4k":13.1p("1l-2e");I=13.1L&&"1l"==13.1b.1W?13.3c:1m.3H;if(13.1L){G.y=0;G.x=0}if(!K){13.7u(1r,L)}if(!13.1b.3l&&!13.1b.2T){1a}N=13.2j.1H;if("2B"!==13.1b.1W){if(K){13.7u(1n);1a}4r(L){1B"2z":1B"4k":N=0;M=0;1G;1B"1H":N=13.2j.1H-13.1b.1g-13.1p("1l-5b");if(G.1H>N){N=13.2j.2Q+13.1p("1l-5b");L="2Q"}M=13.2j.1M;1G;1B"2Q":N=13.2j.2Q+13.1p("1l-5b");if(G.2Q<N+13.1b.1g){N=13.2j.1H-13.1b.1g-13.1p("1l-5b");L="1H"}M=13.2j.1M;1G;1B"1M":M=13.2j.1M-13.1b.1f-13.1p("1l-5b");if(G.1M>M&&G.2R>=13.2j.2R+13.1p("1l-5b")+13.1b.1f){M=13.2j.2R+13.1p("1l-5b");L="2R"}1G;1B"2R":1R:M=13.2j.2R+13.1p("1l-5b");if(G.2R<M+13.1b.1f&&G.1M<=13.2j.1M-13.1b.1f-13.1p("1l-5b")){M=13.2j.1M-13.1b.1f-13.1p("1l-5b");L="1M"}1G}4r(13.1p("1l-2e")){1B"1H":1B"2Q":if(G.1H>N||G.2Q<N+13.1b.1g){L="2z"}1G;1B"1M":1B"2R":if(G.1M>M||G.2R<M+13.1b.1f){L="2z"}1G}13.1b.2e=L;13.7u(1n);if(K){1a}if("4k"==L){I=13.1b.4k;G.y=0;G.x=0}if("2z"==L){if("48"!==13.1b.1W){13.1b.1d.1A("1q-2z");13.1d.1A("1q-2z-1l")}13.1s.4i();N=13.2j.1H+G.y;M=13.2j.1M+G.x;if(!13.1L&&y.1e.2n&&y.1e.2n<11){N=0;M=0;I=13.1d}}1k{N+=G.y;M+=G.x;13.1d.1T("1q-2z-1l");13.1b.1d.1T("1q-2z")}13.1b.1d.1x({1H:N,1M:M})}1k{13.7u(1n);if(y.1e.2n&&y.1e.2n<11){I=13.1d}}13.1b.1d[13.1L?"1A":"1T"]("1q-1L");if(!13.1L&&H){H.1Z("1l"==13.1b.1W&&"2z"==L?13.1b.1d:13.1d,((1o.6e(1o.6O()*bN)+1)%2)?"1H":"2Q")}13.1b.1d.1Z(I)},dQ:17(M){1c I,G,K,J,L=1n,H=M.aX?5:3/54;h(M).2a();H=(2N+H*1o.3w(M.7V))/2N;if(M.7V<0){H=1/H}if("2B"==13.1b.1W){G=1o.1V(2N,1o.5y(13.1b.1f*H));G=1o.2h(G,13.1D.1f*0.9);K=G/13.1b.a0;13.1b.1f=1o.3N(G);13.1b.1g=1o.3N(K);13.1b.1d.1x({1f:13.1b.1f,1g:13.1b.1g});I=13.1b.1d.8u();13.1b.5f=1o.3N(I.1f);13.1b.4J=1o.3N(I.1g);L=1r}1k{if(!13.1L&&"1l"==13.1b.1W){G=1o.1V(50,1o.5y(13.1s.1f*H));G=1o.2h(G,13.1D.1f*0.9);K=G/13.1b.a0;13.2c.1f=1o.3N((13.1b.5f/G)*13.1D.1f);13.2c.1g=1o.3N((13.1b.4J/K)*13.1D.1g);13.1b.1i.1x({1f:13.2c.1f,1g:13.2c.1g})}1k{1a}}J=h(1j).6X();13.1s.1f=1o.3N(13.1b.5f/(13.2c.1f/13.1D.1f));13.1s.1g=1o.3N(13.1b.4J/(13.2c.1g/13.1D.1g));13.1s.1d.1x({1f:13.1s.1f,1g:13.1s.1g});y.1X(13.1s,13.1s.1d.1F());if(13.1b.2T){3P(13.4M);13.4M=1h;if(L){13.4M=1r}13.7U(1h,{x:M.x-J.x,y:M.y-J.y});if(L){13.4M=1h}}},9i:17(I){1c H,G=I?"3q 1Q":"51"+(!y.1e.3t?(1j.2H.3b?" 6r":1j.2H.b6?" 7h":" 7E"):""),J=13.1d.26("1q:5j:4w:fn",(!I)?h(17(K){H=(y.1e.2n<9)?y.1X({},K):K;if(!13.5I){3P(13.5I);13.5I=4D(h(17(){13.4w(H)}).1E(13),iK)}}).2E(13):h(13.4w).2E(13));13.1d.34("1q:5j:4w:1z",G).1C(G,J,10)},bv:17(H){1c G=13.1d.26("1q:5j:4w:1z"),I=13.1d.26("1q:5j:4w:fn");13.1d.1N(G,I);13.1d.2X("1q:5j:4w:fn")},9l:17(H){1c G=H?"3q 1Q":"5R"+(!y.1e.3t?(1j.2H.3b?" ba":1j.2H.b6?" ee":" 8k"):""),I=13.1d.26("1q:5j:4E:fn",h(17(J){if(c(J)&&!g(J)){1a}if(13.1b.1d!==J.7Y()&&!(("2z"==13.1b.2e||"2B"==13.1b.1W)&&13.1b.1d.9O(J.7Y()))&&!13.1d.9O(J.7Y())){13.4E(J)}}).2E(13));13.1d.34("1q:5j:4E:1z",G).1C(G,I,20)},bs:17(){1c G=13.1d.26("1q:5j:4E:1z"),H=13.1d.26("1q:5j:4E:fn");13.1d.1N(G,H);13.1d.2X("1q:5j:4E:fn")},ea:17(){13.dW=13.5s.1E(13);13.1d.1C(["51",1j.2H.3b?"7Q":"7R"],h(17(G){if((y.1e.6u||"6y"===y.1e.4N&&y.1e.5K)&&13.1p("3O")&&"2W"!==13.1p("4A")&&"51"===G.1y){G.3z();if(y.1e.5K){G.5c()}}if(!13.1b.2T){1a}if("2z"===13.1b.2e){13.1s.5v=G.7K()}}).2E(13),10);13.1d.1C(["5R",1j.2H.3b?"6o":"6v"],h(17(G){if(c(G)&&g(G)){13.1s.9E=1n}}).2E(13),10);13.1d.1C("7N "+("6y"===y.1e.4N?"":1j.2H.3b?"6r":1j.2H.b6?"7h":"7E"),h(13.7U).2E(13));if(13.1p("3O")){13.9i("2W"===13.1p("4A"));13.9l("2W"===13.1p("4A")&&!13.1p("2A"))}13.1d.1C("6B",17(G){G.5c()},10).1C("1Q",h(17(G){13.1d.bt("eb","2W");if(13.1L){13.3c.2U("1Q",G)}}).1E(13),15);if(13.1p("2A")){13.1d.1C("21 1Q",h(13.2A).2E(13),15)}1k{13.1d.1C("21 1Q",h(13.8N).2E(13),15)}if(13.3C.1I>1){13.bL()}if(!y.1e.3t&&13.1p("e0")){13.1d.1C("4x",13.dQ.2E(13))}h(1j).1C("7t 5O",13.bp)},dR:17(){if(13.1d){13.1d.1N("4x")}h(1j).1N("7t 5O",13.bp);h(13.3C).36(17(G){h(G.4n).bo()})},4w:17(M){1c N,L,J,K,G,H=0,I=0;if(!13.2i||!13.1b.5p||13.1b.2T||13.1b.3l){if(!13.1i.2f()){if(M){13.5T=y.1X({},M);M.4I()}13.1i.5X(13.7o.1E(13));if(!13.5r){13.5r=h(13.8o).1E(13).2y(8d)}}1a}if(M&&"6r"==M.1y&&"3A"==M.2k){1a}if(!13.1p("3O")&&13.1p("2A")&&!13.1L){13.1b.2T=1r;1a}13.1b.3l=1r;if(13.1L&&"1l"==13.1b.1W){K=13.1i.1d.7S();13.5h.1A("1q-1l-in");G=13.4R.7S();I=((K.1M+K.2R)/2-(G.1M+G.2R)/2);H=((K.1H+K.2Q)/2-(G.1H+G.2Q)/2)}13.1b.1i.1N("2S");13.1b.1d.1T("1q-9F").1N("2S");13.1b.1d.1A("1q-3l");13.1d.1A("1q-3l");13.bh();L=("1l"==13.1b.1W)?13.1b.2e:13.1b.1W;if(y.1e.2L.1Y&&!(13.1L&&"3i"==13.1p("3V"))){if("2z"==L){J=13.1i.1d.1F();13.1b.1i.1x({2g:"4m(0,"+H+"2v, 0) 4c("+J.1f/13.2c.1f+", "+J.1g/13.2c.1g+")"}).1F();13.1b.1i.1C("2S",h(17(){13.1b.1i.1N("2S");13.1b.1d.1T("1q-3l 1q-p-"+L);13.1b.3l=1n;13.1b.2T=1r}).1E(13));13.1b.1d.1A("1q-p-"+L).1F();if(!y.1e.3t&&y.1e.4l&&("4l"===y.1e.3B||"6h"===y.1e.3B)){13.1b.3l=1n;13.1b.2T=1r}}1k{13.1b.1d.1C("2S",h(17(){13.1b.1d.1N("2S");13.1b.1d.1T("1q-3l 1q-p-"+L)}).1E(13));13.1b.1d.1A("1q-p-"+L).1F();13.1b.1d.1T("1q-p-"+L);13.1b.3l=1n;13.1b.2T=1r}}1k{13.1b.1d.1T("1q-3l");13.1b.3l=1n;13.1b.2T=1r}if(!13.1L){13.6V(1r)}if(M){M.2a().4I();N=M.7K();if("2B"==13.1b.1W&&(/21/i).3e(M.1y)){N.y-=13.1b.1g/2+10}if("2z"==L&&((/21/i).3e(M.1y)||c(M))){13.1s.2Z={x:0,y:0};N.x=-(N.x-13.2j.1M-13.1D.1f/2)*(13.2c.1f/13.1D.1f);N.y=-(N.y-13.2j.1H-13.1D.1g/2)*(13.2c.1g/13.1D.1g)}}1k{N={x:13.2j.1M+(13.2j.2R-13.2j.1M)/2,y:13.2j.1H+(13.2j.2Q-13.2j.1H)/2}}13.1d.1T("1q-3l").1A("1q-2T");N.x+=-I;N.y+=-H;13.1s.5v={x:0,y:0};13.1s.dx=0;13.1s.dy=0;13.7U(M,N,1r);s("dP",13.id)},4E:17(I,N){1c L,J,G,H,K=0,M=0,O=13.1b.2T;13.5T=1h;if(!13.2i){1a}if(I&&"ba"==I.1y&&"3A"==I.2k){1a}3P(13.4M);13.4M=1h;3P(13.5I);13.5I=1h;13.1b.3l=1n;13.1b.2T=1n;if(1r!==N&&!13.1L){if(O){13.6V()}}if(!13.1b.5p){1a}if(I){I.2a()}13.1b.1i.1N("2S");13.1b.1d.1T("1q-3l").1N("2S");if(13.1L){H=13.4R.7S();if("3i"!==13.1p("3V")){13.5h.1T("1q-1l-in")}13.1i.1d.1x({"1V-1g":13.6A()});G=13.1i.1d.7S();M=((G.1M+G.2R)/2-(H.1M+H.2R)/2);K=((G.1H+G.2Q)/2-(H.1H+H.2Q)/2)}L=("1l"==13.1b.1W)?13.1b.2e:13.1b.1W;if(y.1e.2L.1Y&&I&&!(13.1L&&"3i"==13.1p("3V"))){if("2z"==L){13.1b.1i.1C("2S",h(17(){13.1b.1i.1N("2S");13.1d.1T("1q-2T");4D(h(17(){13.1b.4i()}).1E(13),32)}).1E(13));J=13.1i.1d.1F();13.1b.1d.1A("1q-9F 1q-p-"+L).1F();13.1b.1i.1x({2g:"4m(0,"+K+"2v,0) 4c("+J.1f/13.2c.1f+", "+J.1g/13.2c.1g+")"})}1k{13.1b.1d.1C("2S",h(17(){13.1b.4i();13.1d.1T("1q-2T")}).1E(13));13.1b.1d.3K("2r");13.1b.1d.1A("1q-9F 1q-p-"+L);13.1d.1T("1q-2T")}}1k{13.1b.4i();13.1d.1T("1q-2T")}13.1s.dx=0;13.1s.dy=0;13.1s.5v={x:0,y:0};13.1s.4i();if(O){s("dO",13.id)}},7U:17(Q,P,O){1c I=P,K,J,M=0,H,L=0,G,R,N=1n;if(13.5T&&!13.1i.2f()){13.5T=Q}if(!13.1b.2T&&!O){1a}if(Q){h(Q).3z().5c();if(c(Q)&&!g(Q)){1a}N=(/21/i).3e(Q.1y)||c(Q);if(N&&!13.1s.9E){13.1s.9E=N}if(!I){I=Q.7K()}}if("48"==13.1b.1W){1a}if("1l"==13.1b.1W&&"2z"===13.1b.2e&&(Q&&N||!Q&&13.1s.5N)){13.1s.5N=1r;K=13.1s.2Z.x+(I.x-13.1s.5v.x);J=13.1s.2Z.y+(I.y-13.1s.5v.y);13.1s.5v=I;M=1o.2h(0,13.1b.5f-13.2c.1f)/2;H=-M;L=1o.2h(0,13.1b.4J-13.2c.1g)/2;G=-L}1k{13.1s.5N=1n;K=I.x-13.2j.1M;J=I.y-13.2j.1H;H=13.1D.1f-13.1s.1f;G=13.1D.1g-13.1s.1g;K-=13.1s.1f/2;J-=13.1s.1g/2}if("2B"!==13.1b.1W){K=1o.1V(M,1o.2h(K,H));J=1o.1V(L,1o.2h(J,G))}13.1s.2Z.x=K=1o.5y(K);13.1s.2Z.y=J=1o.5y(J);if("1l"==13.1b.1W&&"2z"!=13.1b.2e){if(y.1e.2L.2g){13.1s.1d.1x({2g:"9d("+13.1s.2Z.x+"2v,"+13.1s.2Z.y+"2v)"});13.1s.1i.1x({2g:"9d("+-(13.1s.2Z.x+13.1s.3G.x)+"2v, "+-(13.1s.2Z.y+13.1s.3G.y)+"2v)"})}1k{13.1s.1d.1x({1H:13.1s.2Z.y,1M:13.1s.2Z.x});13.1s.1i.1x({1H:-(13.1s.2Z.y+13.1s.3G.y),1M:-(13.1s.2Z.x+13.1s.3G.x)})}}if("2B"==13.1b.1W){if(13.1s.9E&&!(Q&&"3q"==Q.1y)){I.y-=13.1b.1g/2+10}R=h(1j).6X();13.1b.1d.1x((y.1e.2n&&y.1e.2n<11)?{1H:I.y-13.2j.1H-13.1b.1g/2,1M:I.x-13.2j.1M-13.1b.1f/2}:{1H:I.y+R.y-13.1b.1g/2,1M:I.x+R.x-13.1b.1f/2})}if(!13.4M){13.1s.dx=0;13.1s.dy=0;13.5s(1)}},5s:17(I){1c H,G;if(!j0(I)){I=13.1s.5N?0.2:0.1}H=((13.1s.2Z.x-13.1s.dx)*I);G=((13.1s.2Z.y-13.1s.dy)*I);13.1s.dx+=H;13.1s.dy+=G;if(!13.4M||1o.3w(H)>0.be||1o.3w(G)>0.be){13.1b.1i.1x(y.1e.2L.2g?{2g:f+(13.1s.5N?13.1s.dx:-(13.1s.dx*(13.2c.1f/13.1D.1f)-1o.1V(0,13.2c.1f-13.1b.5f)/2))+"2v,"+(13.1s.5N?13.1s.dy:-(13.1s.dy*(13.2c.1g/13.1D.1g)-1o.1V(0,13.2c.1g-13.1b.4J)/2))+"2v"+A+" 4c(1)"}:{1M:-(13.1s.dx*(13.2c.1f/13.1D.1f)+1o.2h(0,13.2c.1f-13.1b.5f)/2),1H:-(13.1s.dy*(13.2c.1g/13.1D.1g)+1o.2h(0,13.2c.1g-13.1b.4J)/2)})}if("2B"==13.1b.1W){1a}13.4M=4D(13.dW,16)},bL:17(){1c S,I,N=30,K=j3,P,Q="",H={},G,M,R=0,T={1Y:y.1e.87+5W.79(32)+"dX 4S-4T(.18,.35,.58,1)"},J,O,L=h(17(U){if(!13.2i||13.1b.2T){1a}if(U.2m=="3E"){3P(13.5I);13.5I=1h;R=0;H={x:U.x,y:U.y,dg:U.2I};S=13.1D.1f;I=S/2;13.1i.1d.1N("2S");13.1i.1d.3F("1Y","");13.1i.1d.3F("2g","4m(0, 0, 0)");O=1h}1k{G=(U.x-H.x);M={x:0,y:0,z:0};if(1h===O){O=(1o.3w(U.x-H.x)<1o.3w(U.y-H.y))}if(O){1a}U.2a();if("9I"==U.2m){R=0;J=1h;P=U.2I-H.dg;if(1o.3w(G)>I||(P<K&&1o.3w(G)>N)){if((Q=(G>0)?"dU":(G<=0)?"iW":"")){if(Q=="dU"){J=13.83();R+=S*10}1k{J=13.89();R-=S*10}}}M.x=R;M.dZ=-90*(M.x/S);13.1i.1d.1C("2S",h(17(V){13.1i.1d.1N("2S");13.1i.1d.3F("1Y","");if(J){13.1i.1d.1x({2g:"4m("+M.x+"2v, 5Q, 5Q)"});13.40(J,1r)}}).1E(13));13.1i.1d.1x(T);13.1i.1d.1x({"1Y-5z":M.x?"iX":"dX",2r:1-0.7*1o.3w(M.x/S),2g:"4m("+M.x+"2v, 5Q, 5Q)"});G=0;1a}M.x=G;M.z=-50*1o.3w(M.x/I);M.dZ=-60*(M.x/I);13.1i.1d.1x({2r:1-0.7*1o.3w(M.x/I),2g:"4m("+M.x+"2v, 5Q, "+M.z+"2v)"})}}).1E(13);13.1d.1C("2p",L)},dn:17(){1c H,G;if(13.3C.1I){13.4L=13.3C}1k{H=13.3U.2q("3Q-aU");if(H){if(y.1e.2L.bl){G=y.$A(1m.b7(\'.8P[3Q-aU="\'+H+\'"]\'))}1k{G=y.$A(1m.9p("A")).2V(17(I){1a H==I.2q("3Q-aU")})}h(G).36(17(J){1c I,K;I=i(J);if(I&&I.3C.1I>0){1a}if(I){K=1t k(I.1i.1J.2d,I.1i.1l.2d,I.1i.3m,1h,I.1i.4n)}1k{K=1t k().9t(J,I?I.6x:1h)}if(13.1i.1l.1U.4F(K.1l.1U)&&13.1i.1J.1U.4F(K.1J.1U)){K=13.1i}13.4L.38(K)},13);13.6P=13.1i}}if(13.4L.1I>1){13.5h.1A("dN-aP");13.56=y.$1t("2Y",{"3M":"1q-2A-iV"}).1Z(13.5h);13.4j=1t r(13.56);h(13.4L).36(17(I){1c J=h(17(K){13.8I(I);13.40(I)}).1E(13);I.dT=13.4j.dS(y.$1t("24",{1U:I.8v("1J")}).1C("21 1Q",17(K){K.2a()}).1C("21 "+("7z"==13.1p("aV")?"7x 8k":"1Q"),h(17(L,K){if(13.5V){3P(13.5V)}13.5V=1n;if("7x"==L.1y){13.5V=h(J).2y(K)}1k{if("21"==L.1y||"1Q"==L.1y){J()}}}).2E(13,60)))},13);13.2M.4y.5q();13.2M.4C.5q()}1k{13.5h.1T("dN-aP");13.2M.4y.4i();13.2M.4C.4i()}},e6:17(){1c G;if(13.4j){13.4j.2a();13.4j=1h}if(13.56){13.56.2P();13.56=1h}if(13.4L.1I>1&&!13.3C.1I){13.1d.1N("2p");13.1i.1d.2P().2q("2l");13.1i.1d.5B("2l");13.6P.1d.1Z(13.1d);13.7o(13.6P);5l(G=13.4L.iU()){if(G!==13.6P){if(G.1J.1d){G.1J.1d.5i();G.1J.1d=1h}if(G.1l.1d){G.1l.1d.5i();G.1l.1d=1h}G=1h}}}13.4L=[]},6f:17(){if(!13.2i||!13.1L){1a}if("8R"==y.1e.4N&&"8L"==y.1e.3B&&7==5D(y.1e.7l)){dM(m);m=1h}h(1m).1N("bI",13.8F);13.4E(1h,1r);13.2i=1n;if(w.1e.4Z.9w&&w.1e.4Z.5p()){w.1e.4Z.dL()}1k{if(y.1e.2L.1Y){13.1d.1N("2S").1x({1Y:""});13.1d.1C("2S",13.8A);if(y.1e.4l&&("4l"===y.1e.3B||"6h"===y.1e.3B)){4D(h(17(){13.8A()}).1E(13),8g)}13.3S.1N("2S").1x({1Y:""});13.3S.1x({1Y:"aR 0.6s 4S-4T(0.e1, 0.iY, 0.ed, 0.iZ) 0.6Z"}).1F();if(y.1e.6u&&"4l"!==y.1e.3B){13.1d.1x({1Y:"aR .4s 4S-4T(0.8g, 0, 0.aW, 0.9V) 6Z"}).1F()}1k{13.1d.1x({1Y:"aR .4s 4S-4T(0.8g, -0.j2, 0.aW, 0.9V) 6Z"}).1F()}if("3i"==13.1p("3V")&&"2B"!==13.1p("65")){13.1i.1d.1x({"1V-1g":13.1i.1F("1l").1g});13.1i.1d.1x({"1V-1f":13.1i.1F("1l").1f})}13.3S.1x({2r:0.4});13.1d.1x({2r:0.j1,2g:"4c(0.4)"})}1k{13.8A()}}},2A:17(I){if(!13.1i.2f()||!13.2i||13.1L){if(!13.1i.2f()){if(I){13.5T=y.1X({},I);I.4I()}13.1i.5X(13.7o.1E(13));if(!13.5r){13.5r=h(13.8o).1E(13).2y(8d)}}1a}if(I){I.4I()}1c G=h(13.1d).26("cr"),H=1m.iT();13.b4();13.6U--;13.4E(1h,1r);13.bv();13.bs();13.2i=1n;if(!13.3c){13.3c=y.$1t("2Y").1A("1q-2A").1A(13.1p("5x")).1x({2r:0});13.5h=y.$1t("2Y").1A("1q-2A-dm").1Z(13.3c);13.8t=y.$1t("2Y").1A("1q-2A-iS").1Z(13.5h);h(["4C","4y","6f"]).36(17(K){1c J="1q-2o";13.2M[K]=y.$1t("2o",{8x:13.1p("9T-iL-"+K)}).1A(J).1A(J+"-"+K);H.b5(13.2M[K]);4r(K){1B"4C":13.2M[K].1C("21 1Q",17(L){L.2a();13.40(13.83())}.2E(13));1G;1B"4y":13.2M[K].1C("21 1Q",17(L){L.2a();13.40(13.89())}.2E(13));1G;1B"6f":13.2M[K].1C("21 1Q",17(L){L.2a();13.6f()}.2E(13));1G}},13);13.8t.3n(H);13.3c.1C("4x 51 3q",h(17(J){h(J).2a()}));if(13.1p("e8")){13.3c.1C("21 1Q",17(J){if("3i"!==13.1p("3V")&&13.1d.9O(J.e3())){1a}J.2a();13.6f()}.2E(13))}13.8F=h(17(K){1c J=1h;if(27!==K.8s&&37!==K.8s&&39!==K.8s){1a}h(K).2a();if(27===K.8s){13.6f()}1k{J=(37===K.8s)?13.83():13.89();if(J){13.40(J)}}}).2E(13);13.8e=h(17(){1c J;13.1d.1N("2S").1x({1Y:"",2g:"4m(0,0,0)"});if(13.1L){1a}13.1L=1r;13.3c.1x({2r:1});13.1b.9h(13.1p("65"));13.2c=y.4a(13.3d);13.5H();if(13.3X&&13.1i.3m){if(13.1i.43){13.3X.3n(y.$1t("a",{6K:13.1i.43}).1C("21 1Q",13.8N.1E(13)).5k(13.1i.3m))}1k{13.3X.5k(13.1i.3m)}13.3X.1A("1q-5q")}if("3i"!==13.1p("3V")){13.9i(1r);13.9l(1r)}13.2i=1r;if("3i"===13.1p("3V")){13.4w()}if(y.1e.3t&&13.bW&&13.1b.5p){13.6V(1r,13.1p("8H"));13.bW=1n}13.8t.1T("1q-3f").1A("1q-97 1q-6n");13.56&&13.56.1T("1q-3f").1A("1q-97 1q-6n");if(13.4j){13.4j.bP();13.8I(13.1i)}if(G){G.1Z(13.3c,((1o.6e(1o.6O()*bN)+1)%2)?"1H":"2Q")}if(13.4L.1I&&!13.3C.1I){13.bL()}h(1m).1C("bI",13.8F);if("8R"==y.1e.4N&&"8L"==y.1e.3B&&7==5D(y.1e.7l)){m=u()}s("e7",13.id)}).1E(13);13.8A=h(17(){13.1d.1N("2S");if(!13.1L){1a}if(13.1L){h(1m).1N("bI",13.8F);13.4E(1h,1r)}13.e6();13.1L=1n;13.1b.9h(13.1p("3O"));13.1d.b0(13.1i.6C("1J"),13.1i.1d);13.1i.6z("1J");h(13.1i.1d).1x({1f:"",1g:"","1V-1f":1o.2h(13.1i.1F("1J").1f),"1V-1g":1o.2h(13.1i.1F("1J").1g)});13.1d.1x({2r:"",1Y:""});13.1d.1x({2g:"4m(0,0,0)"});13.1d.1Z(13.3U);13.7u(1r);if(13.3X){13.3X.2P();13.3X=1h}13.bv();13.bs();if("3i"==13.1p("4A")){13.4w()}1k{if(1n!==13.1p("3O")){13.9i("2W"===13.1p("4A"));13.9l("2W"===13.1p("4A")&&!13.1p("2A"))}}13.6V();13.3S.1N("2S");13.3c.2P();13.3S.2P();13.3S=1h;h(y.1e.49()).1x({5d:""});h(1m.3H).1x({5d:""});13.2i=1r;if(y.1e.2n<10){13.5H()}1k{h(1j).bt("dJ","7t")}s("dl",13.id)}).1E(13);13.8r=y.$1t("2Y",{"3M":"1q-1i-dm"}).1Z(13.5h);13.4R=y.$1t("8c").1Z(13.8r)}13.dn();h(y.1e.49()).1x({5d:"3f"});h(1m.3H).1x({5d:"3f"}).1F();if("dq"==13.1p("2A")){13.aE();w.1e.4Z.bH(13.3c,{bE:h(17(){13.8e()}).1E(13),bB:13.8A,8y:h(17(){13.aN()}).1E(13)})}1k{4D(h(17(){13.aN()}).1E(13),96)}},aE:17(){1c G;G=y.$1t("24",{1U:13.1i.8v("1l")});13.3S=y.$1t("2Y").1A("1q-2A-bg").3n((y.1e.2L.8q||y.1e.2n<10)?G:1t y.8Z(G).5e(b).6C()).1Z(13.3c);if("3i"===13.1p("3V")){13.5h.1A("1q-3i-1l"+("1l"===13.1p("65")?" 1q-1l-in":"")).1F()}13.1d.b0(13.1i.6C("1l"),13.1i.1d);13.1i.6z("1l");13.3c.1Z(1m.3H);13.7B=17(){1c H=13.8r;if(h(13.4R).1F().1f>50){H=13.4R}1a 17(){1a"3i"==13.1p("3V")&&"2B"!==13.1p("65")?6m:1o.5y(h(H).8u().1f)}}.2b(13);13.6A=17(){1c H=13.8r;if(h(13.4R).1F().1g>50){H=13.4R}1a 17(){1a"3i"==13.1p("3V")&&"2B"!==13.1p("65")?6m:1o.5y(h(H).8u().1g)}}.2b(13);13.8t.1T("1q-97 1q-6n").1A("1q-3f");13.56&&13.56.1T("1q-97 1q-6n").1A("1q-3f");13.1i.1d.1x({"1V-1g":1o.2h(13.1i.1F("1l").1g,13.6A())});13.1i.1d.1x({"1V-1f":1o.2h(13.1i.1F("1l").1f,13.7B())});13.4R.3n(13.1d);if(13.1p("3X")){13.3X=y.$1t("dE",{"3M":"1q-3m"}).1Z(13.4R)}},aN:17(){13.aE();13.1d.1x({1Y:""});13.1d.1x({2g:"4c(0.6)"}).1F();if(y.1e.6u&&"4l"!==y.1e.3B){13.1d.1x({1Y:y.1e.87+" 0.6s 4S-4T(0.88, 0.9c, 0.aB, 1) 6Z"})}1k{13.1d.1x({1Y:y.1e.87+" 0.6s 4S-4T(0.88, 0.9c, 0.aB, 1.ay) 6Z"})}if(y.1e.2L.1Y){13.1d.1C("2S",13.8e);if(y.1e.4l&&("4l"===y.1e.3B||"6h"===y.1e.3B)){4D(h(17(){13.8e()}).1E(13),jd)}}1k{13.8e.2y(16,13)}13.3c.1x({2r:1});13.1d.1x({2g:"4c(1)"})},8N:17(){if(13.1i.43){1j.a4(13.1i.43,"ia")}},89:17(){1c G=(13.1L?13.4L:13.3C).2V(17(J){1a(-1!==J.1J.2m||-1!==J.1l.2m)}),H=G.1I,I=h(G).6a(13.1i)+1;1a(1>=H)?1h:G[(I>=H)?0:I]},83:17(){1c G=(13.1L?13.4L:13.3C).2V(17(J){1a(-1!==J.1J.2m||-1!==J.1l.2m)}),H=G.1I,I=h(G).6a(13.1i)-1;1a(1>=H)?1h:G[(I<0)?H-1:I]},f3:17(H,I){1c G=13.3C.2V(17(J){1a((J.1l.1U.4F(H)||J.1l.2d.4F(H))&&(J.1J.1U.4F(I)||J.1J.2d.4F(I)))})||[];1a G[0]||((I&&H&&"1O"===y.1P(I)&&"1O"===y.1P(H))?1t k(I,H):1h)},au:17(H){1c G=13.3C.2V(17(I){1a(I.4n===H)})||[];1a G[0]},f7:17(G){1a 13.3C[G]}};t={4q:"i3.0.8",4V:17(J,H){1c I=1h,G=[];y.$A((J?[h(J)]:y.$A(1m.9u("8P")).5E(y.$A(1m.9u("al"))))).36((17(K){if(h(K)){if(!i(K)){I=1t j(K,H);if(x&&!I.1p("a2")){I.2a();I=1h}1k{D.38(I);G.38(I)}}}}).1E(13));1a J?G[0]:G},2a:17(J){1c H,I,G;if(J){(I=i(J))&&(I=D.9X(D.6a(I),1))&&I[0].2a()&&(4P I[0]);1a}5l(H=D.1I){I=D.9X(H-1,1);I[0].2a();4P I[0]}},iw:17(G){13.2a(G);1a 13.4V(G)},40:17(L,K,J,H){1c I=i(L),G;if(I){G="5Z"===y.1P(K)?I.au(K):I.f3(K,J);if(G){I.40(G)}}},kr:17(J,I){1c H=i(J),G;if(H){4r(y.1P(I)){1B"5Z":G=H.au(I);1G;1B"63":G=H.f7(I);1G;1R:}if(G){H.40(G)}}},4C:17(H){1c G;(G=i(H))&&G.40(G.83())},4y:17(H){1c G;(G=i(H))&&G.40(G.89())},ko:17(H){1c G;(G=i(H))&&G.4w()},kv:17(H){1c G;(G=i(H))&&G.4E()},2A:17(H){1c G;(G=i(H))&&G.2A()},6f:17(H){1c G;(G=i(H))&&G.6f()},eH:17(G,H){if(!p[G]){p[G]=[]}if("17"==y.1P(H)){p[G].38(H)}},kc:17(G){1a!!i(G)}};h(1m).1C("9z",17(){1c H=1j[B+"7c"]||{};d();F=y.$1t("2Y",{"3M":"3p-3f-6S"}).1Z(1m.3H);E=(y.1e.3t&&1j.en&&1j.en("(1V-ey-1f: eI), (1V-ey-1g: eI)").jH);if(y.1e.3t){y.1X(o,l)}1S(1c G=0;G<z.1I;G++){if(H[z[G]]&&y.$F!==H[z[G]]){t.eH(z[G],H[z[G]])}}t.4V();x=1n});1j.al=1j.al||{};1a t})();',62,1279,'|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||this||||function|||return|zoomBox|var|node|jBrowser|width|height|null|image|window|else|zoom|document|false|Math|option|mz|true|lens|new|Event|options|Custom|jSetCss|type|event|jAddClass|case|jAddEvent|size|jBind|jGetSize|break|top|length|small|handler|expanded|left|jRemoveEvent|string|jTypeOf|btnclick|default|for|jRemoveClass|src|max|mode|extend|transition|jAppendTo||tap|||img||jFetch|||arguments|stop|call|zoomSize|url|position|loaded|transform|min|ready|boundaries|pointerType|style|state|ieMode|button|touchdrag|getAttribute|opacity|important|auto|enum|px|prototype||jDelay|inner|expand|magnifier|changedTouches|undefined|jBindAsEvent|parseFloat|context|navigator|timeStamp|mousedrag|clientY|features|buttons|100|clientX|jRemove|bottom|right|transitionend|active|jCallEvent|filter|click|jDel|div|pos||||oneOf|jStore||jEach||push||hint|pointerEnabled|expandBox|zoomSizeOrigin|test|hidden|rootCSS|settings|always|handle|none|activating|caption|append|defined|magic|dbltap|orientation|match|mobile|boolean|Doc|abs|try|Class|stopDefaults|touch|uaName|additionalImages|identifier|dragstart|jSetCssProp|border|body|parent|init|jGetCss|off|class|ceil|zoomMode|clearTimeout|data|catch|expandBg|setAttribute|placeholder|expandZoomOn|webkit|expandCaption|Element|touchpinch|update|hasOwnProperty||link|||||preview|getDoc|detach|array|scale|pushToEvents|target|dblbtnclick|styles|firstChild|hide|expandThumbs|custom|chrome|translate3d|origin|touches|reverse|version|switch||listeners|root|replace|activate|mousescroll|next|pow|zoomOn|schema|prev|setTimeout|deactivate|has|J_TYPE|parentNode|stopQueue|innerHeight|trident|expandGallery|moveTimer|platform|disabled|delete|vertical|expandFigure|cubic|bezier|direction|start|domPrefix|jTrim|requestAnimationFrame|fullScreen||touchstart|messageBox||||expandNav|constructor||MSPOINTER_TYPE_TOUCH|visibility|distance|stopDistribution|overflow|blur|innerWidth|instanceof|expandStage|kill|handlers|changeContent|while|add|pageX|pageY|enabled|show|loadTimer|move|timer|toLowerCase|spos|FX|cssClass|round|duration|jCamelize|removeAttribute|absolute|parseInt|concat|contains|events|resizeCallback|activateTimer|cubicBezier|gecko|className|nodeType|innertouch|scroll|selectedItem|0px|touchend|onerror|initEvent|J_UUID|updateTimer|String|load|mouseup|element|||isQueueStopped|number|dppx|expandZoomMode|ease|throw||Array|indexOf|getAbsoluteURL|onload|targetTouches|floor|close|loadingBox|opera|apply|jGetPageXY|documentElement|dragged|Infinity|visible|pointerup|render|now|pointermove||filters|androidBrowser|MSPointerUp|hunits|originalTitle|android|setCurNode|expandMaxHeight|mousedown|getNode|getButton|no|to|found|not|MagicJS|enable|href|selected|css|thumb|random|primaryImage|shift|wunits|wrapper|onTouchEnd|hintRuns|showHint|originalImg|jGetScroll|join|0s||cycles|onTouchStart|tm|tooltip|svg|addCSS||padding|fromCharCode|oncomplete|callback|Options|timedout|threshold|easeFn|set|MSPointerMove|originalImage|end|_handlers|uaVersion|onComplete|engine|setupZoom|onready|normalSize|minimum|200|resize|setSize|cssTransformProp|continuous|mouseover|alternate|hover|display|expandMaxWidth|canvas|ms|mousemove|zoomCaption|continue|split|getBoundingClientRect|storage|getClientXY|createElement|fromJSON|touchmove|setOrientation|Transition|pointerdown|MSPointerDown|jGetRect|byTag|animate|deltaY|scrollTop|margin|getRelated|horizontal|scrollLeft|_cleanup||getPrev||||cssTransform|175|getNext|cssPrefix|jGetPosition|figure|400|onExpand|on|600|_unbind|_timer|complete|mouseout|_EVENTS_|readyState|itemCSS|showLoading|toString|cssFilters|expandImageStage|keyCode|expandControls|getInnerSize|getURL|parseCubicBezier|title|fallback|sqrt|onClose|Opacity|reset|linear|PFX|keyboardCallback|hideTimer|textClickZoomHint|setActiveThumb|index|XMLHttpRequest|safari|Message|openLink|object|MagicZoom|textExpandHint|ios|fromString|pStyles|compatMode|perspective|pStyles_arr|exists|win|SVGImage||zoomPosition|handleMouseUp|typeof||||fade|||dblclick|toUpperCase|885|translate|loadSmall|lazyZoom|charAt|setMode|registerActivateEvent|onprogress|originalImgSrc|registerDeactivateEvent|currentSrc|nextImage|magiczoom|getElementsByTagName|_event_prefix_|naturalWidth|cancelAnimationFrame|parseNode|byClass|getStorage|capable|isNaN|btnclickEvent|domready|forceAnimation|reflow|J_EUID|relatedTarget|touchmovement|deactivating|onTouchMove|loopBind|dragend|pointerId|exitFullscreen|_bind|createEvent|callee|hasChild|xhr|normalizeCSS|eventType|createElementNS|text|implement|045|status|splice|isPrimary|dashize|aspectRatio|handleTouchStart|autostart|10000px|open|Date|ImageLoader|previousScale|https|tagName|||||||||||removeChild|MagicZoomPlus|Za|el_arr|slice|opr|styles_arr|Tooltip|deltaX|temporary|imageByOrigin|hideFX|cssDomPrefix|ignore|275|onClick|resizeTimer|320|maximum|handleTouchMove|prepareExpandedView|ifndef|dispatchEvent|uuid|loadImg|handleTouchEnd|scrollFX|J_EXT|once|expandToWindow|rel|thumbs|05|all|HTMLElement|changeEventName|gallery|selectorTrigger|735|isMouse|hideLoading|300|replaceChild|w3|errorEventName||hideHint|appendChild|msPointerEnabled|querySelectorAll|org|calc|pointerout||priority|_event_add_|000001|getTarget||reflowZoom|cycle|getElementsByClassName|_event_del_|query|startTime|stopAnimation|jClearEvents|onResize|hintMessage|cubicBezierAtTime|unregisterDeactivateEvent|jRaiseEvent|loadedBytes|unregisterActivateEvent|Alpha|createTextNode|onabort|onclick|selectorsMoveFX|onExit|Function|deltaMode|onEnter|presto|handleMouseDown|request|keydown|loadZoom|setProps|swipe|abort|101|textHoverZoomHint|run|span|onBeforeRender|0001|caller|http|www|mobileZoomHint|filterBlur|Left|stdDeviation|Bottom|naturalHeight|Top|fps|loop|finishTime|onAfterRender|interval|onStart|onreadystatechange|isReady|out|euid|cancelBubble||03|355|preventDefault|addEventListener|which|loadBlob|xhr2|wheelDelta|wheelDeltaY|wheelDeltaX|detail|curScale||dragmove|_initialDistance|handleMouseMove|doc|onxhrerror|304|wrap|error|progressiveLoad|jDefer|stopPropagation|requestFullScreen|easeOutBack|elasticIn|jHasClass|jSetOpacity|easeInBack|easeOutCubic|progid|bounceIn|999|parseSchema|styleFloat|getComputedStyle|Number|setMessage|jToBool|DXImageTransform|easeInCubic|165|getElementById|compareDocumentPosition|touchScreen|clientWidth|webkit419|easeInSine|easeOutSine|easeOutQuad|Microsoft|easeInQuad|easeOutExpo|easeInExpo|offsetWidth|Right|setCaption|onZoomReady|setupSelectors|RegExp|onUpdate|od|ts|zoomHeight|stopImmediatePropagation|onswipe|selectItem|onExpandClose|stage|setupExpandGallery||transitionEffect|fullscreen|hone|forEach|R0lGODlhAQABAAD|ACwAAAAAAQABAAACADs|base64|gif|||rightClick|10000|100000|inline|mjs|figcaption|zIndex|magicJS|fontWeight|backcompat|UIEvent|delay|cancel|clearInterval|with|onZoomOut|onZoomIn|changeZoomLevel|unregisterEvents|addItem|selector|backward|firefox|moveBind|300ms|DocumentTouch|deg|variableZoom|895|upscale|getOriginalTarget|shown|0ms|destroyExpandGallery|onExpandOpen|closeOnClickOutside|phone|registerEvents|MouseEvent|setupContent|685|MSPointerOut|animation|enclose|zoomWidth|querySelector|backCompat|textnode||nativize|matchMedia|getTime|documentMode||Webkit|stylesId|runtime|crios|Moz|moz|charCodeAt|device|onchange|initDrag|cos|UUID|500|msExitFullscreen|items|PI|registerCallback|767px|Click|item|toArray|Object|cancelFullScreen|insertRule|date|cssText|background|block|loadOptions|mozCancelAnimationFrame|styleSheet|multibackground|getJSON|removeRule|get|touchOptions|scrollbarsWidth|deleteRule|imageByURL|10px|screen|setInterval|imageByIndex|sheet|Image|ontouchstart|collection|hiptop|xxxxxxxx|regexp|iris|iemobile|KeyEvent|yxxx|KeyboardEvent|420|fireEvent|compal||xxxxxxxxxxxx|avantgo|4xxx|blackberry|bada|elaine|meego|xxxx|blazer|v3|g4bc9bfe|createEventObject|fennec|TR|air|evaluate|removeCSS|fullscreenEnabled|msFullscreenEnabled|webkitCancelFullScreen|webkitexitFullscreen|map|xpath|cssRules|toFloat|userAgent|head|addRule|edge|mozCancelFullScreen|oCancelFullScreen|SVG11|jToInt|4294967296|feature|generateUUID|getHashCode|hasFeature|implementation|ProgressEvent|msCancelFullScreen|FormData|DOMContentLoaded|doScroll|withCredentials|xy|symbian|oRequestAnimationFrame|jToggleClass|webkitRequestAnimationFrame|mozRequestAnimationFrame|other|msRequestAnimationFrame|oCancelAnimationFrame|red|2px|9999|webkitCancelRequestAnimationFrame|msCancelAnimationFrame|linux|mac|jGetFullScroll|mozInnerScreenY|getBoxObjectFor|clientTop|clientLeft|offsetHeight|WebKitPoint|jGetStyles|webos|unknown|taintEnabled|currentStyle|cssfilters|Width|ExitFullscreen|requestFullscreen|RequestFullScreen|RequestFullscreen|CancelFullScreen|MSFullscreenChange|MSFullscreenError|fullscreenerror|prefix|fullscreenchange|activeElement|FullScreen|webkitIsFullScreen|webkitTransitionEnd|lineHeight|WebKitTransitionEvent|getPropertyValue|TransitionEvent|cssFloat|float|FullscreenElement|fullscreenElement|536|lt|offsetLeft|ActiveXObject|plucker|pocket|isTouchEvent|isPrimaryTouch|removeEventListener|toElement|fromElement|returnValue|psp|srcElement|pointerover|MSPointerOver|re|attachEvent|mmp|netfront|midp|maemo|lge|ob|sort|detachEvent|ixi|os|palm|series|treo|xiino|insertBefore|jGetStyle|jSetStyle|xda|childNodes|innerText|offsetTop|offsetParent|html|innerHTML|iframe|DOMElement|pageYOffset|pageXOffset|jGetFullSize|scrollWidth|scrollHeight|clientHeight|up|windows|wap|presto925|vodafone|kindle|Tap|SourceGraphic|units|sides|ul|feGaussianBlur|setAttributeNS|isset|2000|1999|xlink|li|v5|Next|textBtnPrev|Previous|Touch|textBtnNext|Close|_self|zoomDistance|Hover||||textBtnClose|parameter|the|cubicOut|backIn|backOut|elasticOut||cubicIn||quadOut|sineOut|expoIn|expoOut|quadIn|bounceOut|refresh|parse|Incorrect|definition|of|JSON|NEGATIVE_INFINITY|MagicToolboxTooltip|MessageBox|5000|Double|pinchstart|message|loading|120|btn|350|relative|2em|2147483647|dummy|256|controls|createDocumentFragment|pop|thumbnails|forward|100ms|030|220|isFinite|01|280|201|line|textAlign|availHeight|250|before|radius|availWidth|scrollTo|devicePixelRatio|800|z0|9_|rev|srcset|fontSize|fontFamily|sans|serif|color|contextmenu|getRatio|selectstart|MobileOptions|sineIn|POSITIVE_INFINITY|745|715|575|easeInOutSine|1000|curFrame|infinite|normal|roundCss|setTransition|445|085|675|215|matches|easeInOutCubic|055|955|easeInOutQuad|455|515|destroy|send|onwheel|wheel|mousewheel|URL|000244140625|deltaFactor|pinchupdate|delta|deltaZ|webkitURL|lengthComputable|createObjectURL|GET|responseType|blob|537|response|total|static|progress|645|565|running|easeInOutExpo|easeInCirc|easeInQuart|035|795|06|easeOutQuint|easeInOutQuint|07|335|easeOutCirc|zoomIn|easeInOutBack|265|switchTo|135|785|075|zoomOut|easeInOutCirc|855|04|easeInQuint|easeInOutQuart|easeOutQuart|755'.split('|'),0,{}))
//
// /!*! device.js 0.2.7 *!/
// ;(function(){var a,b,c,d,e,f,g,h,i,j;b=window.device,a={},window.device=a,d=window.document.documentElement,j=window.navigator.userAgent.toLowerCase(),a.ios=function(){return a.iphone()||a.ipod()||a.ipad()},a.iphone=function(){return!a.windows()&&e("iphone")},a.ipod=function(){return e("ipod")},a.ipad=function(){return e("ipad")},a.android=function(){return!a.windows()&&e("android")},a.androidPhone=function(){return a.android()&&e("mobile")},a.androidTablet=function(){return a.android()&&!e("mobile")},a.blackberry=function(){return e("blackberry")||e("bb10")||e("rim")},a.blackberryPhone=function(){return a.blackberry()&&!e("tablet")},a.blackberryTablet=function(){return a.blackberry()&&e("tablet")},a.windows=function(){return e("windows")},a.windowsPhone=function(){return a.windows()&&e("phone")},a.windowsTablet=function(){return a.windows()&&e("touch")&&!a.windowsPhone()},a.fxos=function(){return(e("(mobile;")||e("(tablet;"))&&e("; rv:")},a.fxosPhone=function(){return a.fxos()&&e("mobile")},a.fxosTablet=function(){return a.fxos()&&e("tablet")},a.meego=function(){return e("meego")},a.cordova=function(){return window.cordova&&"file:"===location.protocol},a.nodeWebkit=function(){return"object"==typeof window.process},a.mobile=function(){return a.androidPhone()||a.iphone()||a.ipod()||a.windowsPhone()||a.blackberryPhone()||a.fxosPhone()||a.meego()},a.tablet=function(){return a.ipad()||a.androidTablet()||a.blackberryTablet()||a.windowsTablet()||a.fxosTablet()},a.desktop=function(){return!a.tablet()&&!a.mobile()},a.television=function(){var a;for(television=["googletv","viera","smarttv","internet.tv","netcast","nettv","appletv","boxee","kylo","roku","dlnadoc","roku","pov_tv","hbbtv","ce-html"],a=0;a<television.length;){if(e(television[a]))return!0;a++}return!1},a.portrait=function(){return window.innerHeight/window.innerWidth>1},a.landscape=function(){return window.innerHeight/window.innerWidth<1},a.noConflict=function(){return window.device=b,this},e=function(a){return-1!==j.indexOf(a)},g=function(a){var b;return b=new RegExp(a,"i"),d.className.match(b)},c=function(a){var b=null;g(a)||(b=d.className.replace(/^\s+|\s+$/g,""),d.className=b+" "+a)},i=function(a){g(a)&&(d.className=d.className.replace(" "+a,""))},a.ios()?a.ipad()?c("ios ipad tablet"):a.iphone()?c("ios iphone mobile"):a.ipod()&&c("ios ipod mobile"):a.android()?c(a.androidTablet()?"android tablet":"android mobile"):a.blackberry()?c(a.blackberryTablet()?"blackberry tablet":"blackberry mobile"):a.windows()?c(a.windowsTablet()?"windows tablet":a.windowsPhone()?"windows mobile":"desktop"):a.fxos()?c(a.fxosTablet()?"fxos tablet":"fxos mobile"):a.meego()?c("meego mobile"):a.nodeWebkit()?c("node-webkit"):a.television()?c("television"):a.desktop()&&c("desktop"),a.cordova()&&c("cordova"),f=function(){a.landscape()?(i("portrait"),c("landscape")):(i("landscape"),c("portrait"))},h=Object.prototype.hasOwnProperty.call(window,"onorientationchange")?"orientationchange":"resize",window.addEventListener?window.addEventListener(h,f,!1):window.attachEvent?window.attachEvent(h,f):window[h]=f,f(),"function"==typeof define&&"object"==typeof define.amd&&define.amd?define(function(){return a}):"undefined"!=typeof module&&module.exports?module.exports=a:window.device=a}).call(this);
// /!*	jQuery.flexMenu 1.2
// 	https://github.com/352Media/flexMenu
// 	Description: If a list is too long for all items to fit on one line, display a popup menu instead.
// 	Dependencies: jQuery, Modernizr (optional). Without Modernizr, the menu can only be shown on click (not hover). *!/
//
//
// (function (factory) {
//     if (typeof define === 'function' && define.amd) {
//         // AMD. Register as an anonymous module.
//         define(['jquery'], factory);
//     } else {
//         // Browser globals
//         factory(jQuery);
//     }
// }(function ($) {
//     var flexObjects = [], // Array of all flexMenu objects
//         resizeTimeout;
//     // When the page is resized, adjust the flexMenus.
//     function adjustFlexMenu() {
//         $(flexObjects).each(function () {
//             $(this).flexMenu({
//                 'undo' : true
//             }).flexMenu(this.options);
//         });
//     }
//     function collapseAllExcept($menuToAvoid) {
//         var $activeMenus,
//             $menusToCollapse;
//         $activeMenus = $('li.flexMenu-viewMore.active');
//         $menusToCollapse = $activeMenus.not($menuToAvoid);
//         $menusToCollapse.removeClass('active').find('> ul');//.hide();
//         //console.log( $menusToCollapse );
//     }
//     $(window).resize(function () {
//         adjustFlexMenu();
//         /!*
//     clearTimeout(resizeTimeout);
// 		resizeTimeout = setTimeout(function () {
// 		}, 100);*!/
//     });
//     $.fn.flexMenu = function (options) {
//         var checkFlexObject,
//             s = $.extend({
//                 // [integer] If there are this many items or fewer in the list, we will not display a "View More" link and will instead let the list break to the next line. This is useful in cases where adding a "view more" link would actually cause more things to break  to the next line.
//                 'threshold' : 2,
//                 // [integer] If there is space for this many or fewer items outside our "more" popup, just move everything into the more menu. In that case, also use linkTextAll and linkTitleAll instead of linkText and linkTitle. To disable this feature, just set this value to 0.
//                 'cutoff' : 2,
//                 // [string] What text should we display on the "view more" link?
//                 'linkText' : 'More',
//                 // [string] What should the title of the "view more" button be?
//                 'linkTitle' : 'View More',
//                 // [string] If we hit the cutoff, what text should we display on the "view more" link?
//                 'linkTextAll' : 'Menu',
//                 // [string] If we hit the cutoff, what should the title of the "view more" button be?
//                 'linkTitleAll' : 'Open/Close Menu',
//                 // [boolean] Should we we show the menu on hover? If not, we'll require a click. If we're on a touch device - or if Modernizr is not available - we'll ignore this setting and only show the menu on click. The reason for this is that touch devices emulate hover events in unpredictable ways, causing some taps to do nothing.
//                 'showOnHover' : true,
//                 // [boolean] Should we absolutely position the popup? Usually this is a good idea. That way, the popup can appear over other content and spill outside a parent that has overflow: hidden set. If you want to do something different from this in CSS, just set this option to false.
//                 'popupAbsolute' : true,
//                 // [boolean] Move the list items back to where they were before, and remove the "View More" link.
//                 'undo' : false,
//                 'markerClass' : 'fa-chevron-down',
//                 'viewMore': 'flexMenu-viewMore',
//                 'dropdownMod': '',
//                 'nodeMod': '',
//                 'linkMode': '',
//                 'menuClassPattern': '',
//                 'menuMod': '',
//             }, options);
//         // Set options on object
//         this.options = s;
//         // Checks if this object is already in the flexObjects array
//         checkFlexObject = $.inArray(this, flexObjects);
//         if (checkFlexObject >= 0) {
//             // Remove this object if found
//             flexObjects.splice(checkFlexObject, 1);
//         } else {
//             // Add this object to the flexObjects array
//             flexObjects.push(this);
//         }
//         return this.each(function () {
//             var $this = $(this),
//                 $items = $this.find('> li'),
//                 $self = $this,
//                 $firstItem = $items.first(),
//                 $lastItem = $items.last(),
//                 numItems = $this.find('li').length,
//                 firstItemTop = Math.floor($firstItem.offset().top),
//                 firstItemHeight = Math.floor($firstItem.outerHeight(true)),
//                 $lastChild,
//                 keepLooking,
//                 $moreItem,
//                 $moreLink,
//                 numToRemove,
//                 allInPopup = false,
//                 $menu,
//                 i;
//             function needsMenu($itemOfInterest) {
//                 // Values may be calculated from em and give us something other than round numbers. Browsers may round these inconsistently. So, let's round numbers to make it easier to trigger flexMenu.
//                 var result = (Math.ceil($itemOfInterest.offset().top) >= (firstItemTop + firstItemHeight)) ? true : false;
//                 return result;
//             }
//
//             $this.removeClass( s.menuMod );
//             if (needsMenu($lastItem) && numItems > s.threshold && !s.undo && $this.is(':visible')) {
//                 var $popup = $('<ul class="flexMenu-popup menu menu--dropdown '+ s.dropdownMod +'"></ul>'),
//                     // Move all list items after the first to this new popup ul
//                     firstItemOffset = $firstItem.offset().top;
//                 for (i = numItems; i > 1; i--) {
//                     // Find all of the list items that have been pushed below the first item. Put those items into the popup menu. Put one additional item into the popup menu to cover situations where the last item is shorter than the "more" text.
//                     $lastChild = $this.find('> li:last-child');
//                     keepLooking = (needsMenu($lastChild));
//                     $lastChild.appendTo($popup);
//                     // If there only a few items left in the navigation bar, move them all to the popup menu.
//                     if ((i - 1) <= s.cutoff) { // We've removed the ith item, so i - 1 gives us the number of items remaining.
//                         $($this.children().get().reverse()).appendTo($popup);
//                         allInPopup = true;
//                         break;
//                     }
//                     if (!keepLooking) {
//                         break;
//                     }
//                 }
//                 if (allInPopup) {
//                     $this.append('<li class="'+ s.viewMore +' flexMenu-allInPopup menu-node '+ s.nodeMod +'"><button class="menu-link" title="' + s.linkTitleAll + '">' + s.linkTextAll + '</button></li>');
//                 } else {
//                     $this.append('<li class="'+ s.viewMore +' menu-node '+ s.nodeMod +'"><button class="menu-link" title="' + s.linkTitle + '">' + s.linkText + '<span class="menu-marker"><i class="fa '+ s.markerClass +'"></i></span></button></li>');
//                 }
//                 $moreItem = $this.find('> li.flexMenu-viewMore');
//                 /// Check to see whether the more link has been pushed down. This might happen if the link immediately before it is especially wide.
//                 if (needsMenu($moreItem)) {
//                     $this.find('> li:nth-last-child(2)').appendTo($popup);
//                 }
//                 // Our popup menu is currently in reverse order. Let's fix that.
//                 $popup.children().each(function (i, li) {
//                     $popup.prepend(li);
//                 });
//                 $moreItem.append($popup);
//                 $moreLink = $this.find('> li.'+ s.viewMore +' > a');
//                 $moreLink.click(function (e) {
//                     // Collapsing any other open flexMenu
//                     collapseAllExcept($moreItem);
//                     //Open and Set active the one being interacted with.
//                     $popup.toggle();
//                     $moreItem.toggleClass('active');
//                     e.preventDefault();
//                 });
//                 // If requireClick is false AND touch is unsupported, then show the menu on hover. If Modernizr is not available, assume that touch is unsupported. Through the magic of lazy evaluation, we can check for Modernizr and start using it in the same if statement. Reversing the order of these variables would produce an error.
//                 if (s.showOnHover && (typeof Modernizr !== 'undefined') && !Modernizr.touch) {
//                     $moreItem.hover(
//                         function () {
//                             $popup.show();
//                             $(this).addClass('active');
//                         },
//                         function () {
//                             //$popup.hide();
//                             $(this).removeClass('active');
//                         });
//                 }
//             } else if (s.undo && $this.find('ul.flexMenu-popup')) {
//                 $menu = $this.find('ul.flexMenu-popup');
//                 numToRemove = $menu.find('li').length;
//                 for (i = 1; i <= numToRemove; i++) {
//                     $menu.find('> li:first-child').appendTo($this);
//                 }
//                 $menu.remove();
//                 $this.find('> li.flexMenu-viewMore').remove();
//             }
//         });
//     };
// }));
// (function( document ){
//     "use strict";
//
//     /!**
//      * Класс события Tap
//      *
//      * @class TapEvents
//      * @example
//      * // Добавляем код в основной файл:
//      * // <script type="text/javascript" src="js/tapEvents.js"></script>
//      * //
//      * // Используем событие tap:
//      *  document.getElementById('tapBtn').addEventListener('tap', function(e){
//      *		console.log('TAP - catched on #tapBtn');
//      *	}, false);
//      *
//      *  document.addEventListener('tap', function(e){
//      *		console.log('TAP - catched on document');
//      *	}, false);
//      *
//      *!/
//     var TapEvents = function() {
//         var self = this;
//
//         /!**
//          * Определяем является ли текущее событие tap или нет.
//          *
//          * @private
//          * @memberof TapEvents
//          * @type {Boolean}
//          *!/
//         var thisIsTap = true;
//
//         /!**
//          * Тут будет храниться объект принимающий событие tap
//          *
//          * @private
//          * @memberof TapEvents
//          * @type {Object}
//          *!/
//         var touchstartTargetElement = null;
//
//         /!**
//          * основной объект с новым событием tap
//          *
//          * @private
//          * @memberof TapEvents
//          * @type {Object}
//          *!/
//         var TapEvent = null;
//
//         /!**
//          * Имя события<br>
//          * по-умолчанию будет называться "tap", но возможно, что будут причины сменить его
//          *
//          * @private
//          * @memberof TapEvents
//          * @type {String}
//          *!/
//         var tapEventName = 'tap';
//
//         /!**
//          * Инициализация класса
//          *
//          * @function init
//          * @public
//          * @memberof TapEvents
//          *!/
//         this.init = function() {
//             bindEvents();
//             registerTapEvent();
//         };
//
//         /!**
//          * Регистрируем базовые события в  DOM
//          *
//          * @function bindEvents
//          * @private
//          * @memberof TapEvents
//          *!/
//         function bindEvents() {
//
//             // В момент начала нажатия я записываю целевой объект DOM
//             document.addEventListener('touchstart', function(e){
//                 thisIsTap = true;
//                 touchstartTargetElement = e.target;
//             }, false);
//
//             // После того, как нажатие закончилось я проверяю является ли текущее событие tap или было отменено
//             document.addEventListener('touchend', function() {
//                 if ( thisIsTap && touchstartTargetElement != null && TapEvent != null ) {
//                     touchstartTargetElement.dispatchEvent( TapEvent );
//                 }
//             }, false);
//
//             // Отменяем событие tap
//             document.addEventListener('touchmove', cancelTouch, false);
//             document.addEventListener('touchleave', cancelTouch, false);
//             document.addEventListener('touchcancel', cancelTouch, false);
//         };
//
//         /!**
//          * Регистрируем новое имя для события - tap
//          *
//          * @function registerTapEvent
//          * @private
//          * @memberof TapEvents
//          *!/
//         function registerTapEvent() {
//             TapEvent = new Event( tapEventName );
//         };
//
//         /!**
//          * Нынешнее событие не является tap
//          *
//          * @function cancelTouch
//          * @private
//          * @memberof TapEvents
//          *!/
//         function cancelTouch() {
//             thisIsTap = false;
//             touchstartTargetElement = null;
//         };
//     };
//
//     /!*
// 	 * Ждем пока DOM будет готов.
// 	 * Все браузеры кроме IE<9 поддерживают это событие.
// 	 *!/
//     document.addEventListener( "DOMContentLoaded", function(){
//         var _te = new TapEvents();
//         _te.init();
//     }, false );
//
// })( document );
// // =====================================================================================
// //                                 INIT GLOBAL VARIABLES
// // =====================================================================================
//
// // cv_currency_format - исторический хвост, в него из liquid сбрасываем значение {{ money_with_currency_format }}
//
// // Cart           - глобальный (!) объект корзины, через него ведем всю работу с корзиной
// // Compare        - глобальный (!) объект для работы со сравнением
// // InSales        - глобальный (!) объект для подключения 'API'
// // Site           - глобальный (!) объект, в который сваливаем все переменные и флаги из liquid, которые нам могут понадобиться для работы js
//
// // CurrencyFormat - объект в который сваливаем разобраный и сконфигуренный формат денег для InSales.formatMoney()
// // EventsList     - список событий
// // TemplateList   - объект с шаблонами для виджетов и прочей ереси js
//
// var
//     cv_currency_format = '',
//     Cart               = {},
//     Compare            = {},
//     InSales            = {},
//     CurrencyFormat     = {},
//     EventsList         = {},
//     TemplateList       = {};
//
// if( !Site ){
//     var
//         Site = {};
// }
//
// // =====================================================================================
// //                                UTILITY FUNCTIONS
// // =====================================================================================
//
// // дополнительный метод, упрощает сборку плагинов для jQuery
// Object.create = function( obj ){
//     function F() {}
//     F.prototype = obj;
//     return new F();
// };
//
// // правильное написание "товар" в зависимости от количества
// ProductsCount = function( items_count ){
//     var
//         str = 'товар';
//
//     if ( items_count > 4 || items_count === 0 ){
//         str = 'товаров';
//     } else if( items_count != 1 ){
//         str = 'товара';
//     }
//
//     return str;
// };
//
// // вспомогательная функция, точно определяет тип переменной, исходя из ее прототипа
// // свой маленький велосипедик для упрощения работы некоторых кусков кода
// type_of = function( $obj ){
//     var
//         string = Object.prototype.toString.call( $obj ),
//         temp   = string.split( ' ' ),
//         type   = '';
//
//     if( $obj.jquery ){
//         type = 'jQuery';
//     } else {
//         type = temp[ 1 ].replace( ']', '' );
//     }
//
//     return type;
// };
//
// // подготовка для json
// //
// // делает валидный? Json из строки data-params DOM элемента
//
// prepareJSON = function( string ){
//     if( !string ){
//         return {};
//     }
//
//     var
//         temp   = [],
//         result = [];
//
//     string = string.replace(/\s+/g, '').split(';');
//
//     for( var i = 0; i < string.length; i++ ){
//         if( string[i] !== '' ){
//             temp = string[i].split( ':' );
//
//             result.push( '"'+ temp[0] +'":'+ temp[1].replace( /\'/g, '"' ) );
//         }
//     }
//
//     return $.parseJSON( '{'+ result.join(',') +'}' );
// };
//
// // забираем data-params DOM элемента
// getParams = function( $obj ){
//     var
//         readyParams = $obj.data( 'readyParams' ),
//         params;
//
//     // есть ли у нас разобранный объект?
//     if( !$.isEmptyObject( readyParams ) ){
//         return readyParams;
//     }
//
//     // если нет, то
//     // разбираем строку и сохраняем готовый объект
//     params = prepareJSON( $obj.attr( 'data-params' ) );
//     $obj
//         .data( 'readyParams', params );
//
//     return params;
// };
//
// setParams = function( $obj, params ){
//     $obj
//         .data( 'readyParams', params );
// };
//
// // производим транслитерацию строки
// translit = function( string ){
//     var
//         space     = '_',
//         $translit = {
//             'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'e', 'ж': 'zh',
//             'з': 'z', 'и': 'i', 'й': 'j', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n',
//             'о': 'o', 'п': 'p', 'р': 'r','с': 's', 'т': 't', 'у': 'u', 'ф': 'f', 'х': 'h',
//             'ц': 'c', 'ч': 'ch', 'ш': 'sh', 'щ': 'sh','ъ': space, 'ы': 'y', 'ь': space, 'э': 'e', 'ю': 'yu', 'я': 'ya',
//             ' ': space, '_': space, '`': space, '~': space, '!': space, '@': space,
//             '#': space, '$': space, '%': space, '^': space, '&': space, '*': space,
//             '(': space, ')': space,'-': space, '\=': space, '+': space, '[': space,
//             ']': space, '\\': space, '|': space, '/': space,'.': space, ',': space,
//             '{': space, '}': space, '\'': space, '"': space, ';': space, ':': space,
//             '?': space, '<': space, '>': space, '№':space
//         },
//         result  = '',
//         current = '';
//
//     string = string.toLowerCase();
//
//     for( i = 0; i < string.length; i++ ){
//         if( $translit[ string[ i ] ] !== undefined ){
//             result += $translit[ string[i] ];
//         }else{
//             result += string[ i ];
//         }
//     }
//
//     return result;
// };
//
// // хелпер для позиционирования разного рода всплывашек
// changeCss = function( $obj ){
//     var
//         modalHeight  = parseInt( $obj.height() ),
//         modalWidth   = parseInt( $obj.width() ),
//         windowWidth  = parseInt( $(window).width() ),
//         windowHeight = parseInt( $(window).height() );
//
//     $obj.css({
//         'left': ( windowWidth - modalWidth ) / 2 ,
//         'top':  ( windowHeight - modalHeight ) / 2,
//     });
// };
//
// // разбираем location.search на ключи
// if( !Site.urlKeys ){
//     Site.urlKeys = {};
//
//     var
//         search = window.location.search.replace( '?', '' ).split( '&' );
//
//     $.each( search, function( index, part ){
//         if( part !== '' ){
//             part = part.split( '=' );
//
//             Site.urlKeys[ part[ 0 ] ] = part[ 1 ];
//         }
//     });
// }
//
// // забираем значение по ключу
// getUrlValuy = function( key ){
//     if( Site.urlKeys[ key ] ){
//         return Site.urlKeys[ key ];
//     }else{
//         return false;
//     }
// };
//
// // разворачиваем массив продуктов в объект для более прозрачного доступа к информации
// convertProducts = function( array ){
//     var
//         obj = {};
//
//     $.each( array, function( index, product ){
//         obj[ product.id ] = product;
//     });
//
//     return obj;
// };
//
// // формируем объект ответа
// makeData = function( $input, $data ){
//     $data = $data || {};
//
//     // выкидываем из ответа функции и прочее, нам нужна просто голая информация
//     $.each( $input, function( key, value ){
//         if( typeof( value ) !== 'function' ){
//             $data[ key ] = value;
//         }
//     });
//
//     return $data;
// };
// /!**
//  * CoffeeScript Compiler v1.9.2
//  * http://coffeescript.org
//  *
//  * Copyright 2011, Jeremy Ashkenas
//  * Released under the MIT License
//  *!/
//
// (function(root){var CoffeeScript=function(){function require(e){return require[e]}return require["./helpers"]=function(){var e={},t={exports:e};return function(){var t,n,i,r,s,o;e.starts=function(e,t,n){return t===e.substr(n,t.length)},e.ends=function(e,t,n){var i;return i=t.length,t===e.substr(e.length-i-(n||0),i)},e.repeat=s=function(e,t){var n;for(n="";t>0;)1&t&&(n+=e),t>>>=1,e+=e;return n},e.compact=function(e){var t,n,i,r;for(r=[],t=0,i=e.length;i>t;t++)n=e[t],n&&r.push(n);return r},e.count=function(e,t){var n,i;if(n=i=0,!t.length)return 1/0;for(;i=1+e.indexOf(t,i);)n++;return n},e.merge=function(e,t){return n(n({},e),t)},n=e.extend=function(e,t){var n,i;for(n in t)i=t[n],e[n]=i;return e},e.flatten=i=function(e){var t,n,r,s;for(n=[],r=0,s=e.length;s>r;r++)t=e[r],t instanceof Array?n=n.concat(i(t)):n.push(t);return n},e.del=function(e,t){var n;return n=e[t],delete e[t],n},e.some=null!=(r=Array.prototype.some)?r:function(e){var t,n,i;for(n=0,i=this.length;i>n;n++)if(t=this[n],e(t))return!0;return!1},e.invertLiterate=function(e){var t,n,i;return i=!0,n=function(){var n,r,s,o;for(s=e.split("\n"),o=[],n=0,r=s.length;r>n;n++)t=s[n],i&&/^([ ]{4}|[ ]{0,3}\t)/.test(t)?o.push(t):(i=/^\s*$/.test(t))?o.push(t):o.push("# "+t);return o}(),n.join("\n")},t=function(e,t){return t?{first_line:e.first_line,first_column:e.first_column,last_line:t.last_line,last_column:t.last_column}:e},e.addLocationDataFn=function(e,n){return function(i){return"object"==typeof i&&i.updateLocationDataIfMissing&&i.updateLocationDataIfMissing(t(e,n)),i}},e.locationDataToString=function(e){var t;return"2"in e&&"first_line"in e[2]?t=e[2]:"first_line"in e&&(t=e),t?t.first_line+1+":"+(t.first_column+1)+"-"+(t.last_line+1+":"+(t.last_column+1)):"No location data"},e.baseFileName=function(e,t,n){var i,r;return null==t&&(t=!1),null==n&&(n=!1),r=n?/\\|\//:/\//,i=e.split(r),e=i[i.length-1],t&&e.indexOf(".")>=0?(i=e.split("."),i.pop(),"coffee"===i[i.length-1]&&i.length>1&&i.pop(),i.join(".")):e},e.isCoffee=function(e){return/\.((lit)?coffee|coffee\.md)$/.test(e)},e.isLiterate=function(e){return/\.(litcoffee|coffee\.md)$/.test(e)},e.throwSyntaxError=function(e,t){var n;throw n=new SyntaxError(e),n.location=t,n.toString=o,n.stack=""+n,n},e.updateSyntaxError=function(e,t,n){return e.toString===o&&(e.code||(e.code=t),e.filename||(e.filename=n),e.stack=""+e),e},o=function(){var e,t,n,i,r,o,a,c,l,h,u,p,d,f,m;return this.code&&this.location?(u=this.location,a=u.first_line,o=u.first_column,l=u.last_line,c=u.last_column,null==l&&(l=a),null==c&&(c=o),r=this.filename||"[stdin]",e=this.code.split("\n")[a],m=o,i=a===l?c+1:e.length,h=e.slice(0,m).replace(/[^\s]/g," ")+s("^",i-m),"undefined"!=typeof process&&null!==process&&(n=(null!=(p=process.stdout)?p.isTTY:void 0)&&!(null!=(d=process.env)?d.NODE_DISABLE_COLORS:void 0)),(null!=(f=this.colorful)?f:n)&&(t=function(e){return"[1;31m"+e+"[0m"},e=e.slice(0,m)+t(e.slice(m,i))+e.slice(i),h=t(h)),r+":"+(a+1)+":"+(o+1)+": error: "+this.message+"\n"+e+"\n"+h):Error.prototype.toString.call(this)},e.nameWhitespaceCharacter=function(e){switch(e){case" ":return"space";case"\n":return"newline";case"\r":return"carriage return";case"	":return"tab";default:return e}}}.call(this),t.exports}(),require["./rewriter"]=function(){var e={},t={exports:e};return function(){var t,n,i,r,s,o,a,c,l,h,u,p,d,f,m,g,v,y,b,k=[].indexOf||function(e){for(var t=0,n=this.length;n>t;t++)if(t in this&&this[t]===e)return t;return-1},w=[].slice;for(f=function(e,t,n){var i;return i=[e,t],i.generated=!0,n&&(i.origin=n),i},e.Rewriter=function(){function e(){}return e.prototype.rewrite=function(e){return this.tokens=e,this.removeLeadingNewlines(),this.closeOpenCalls(),this.closeOpenIndexes(),this.normalizeLines(),this.tagPostfixConditionals(),this.addImplicitBracesAndParens(),this.addLocationDataToGeneratedTokens(),this.tokens},e.prototype.scanTokens=function(e){var t,n,i;for(i=this.tokens,t=0;n=i[t];)t+=e.call(this,n,t,i);return!0},e.prototype.detectEnd=function(e,t,n){var i,o,a,c,l;for(l=this.tokens,i=0;c=l[e];){if(0===i&&t.call(this,c,e))return n.call(this,c,e);if(!c||0>i)return n.call(this,c,e-1);o=c[0],k.call(s,o)>=0?i+=1:(a=c[0],k.call(r,a)>=0&&(i-=1)),e+=1}return e-1},e.prototype.removeLeadingNewlines=function(){var e,t,n,i,r;for(i=this.tokens,e=t=0,n=i.length;n>t&&(r=i[e][0],"TERMINATOR"===r);e=++t);return e?this.tokens.splice(0,e):void 0},e.prototype.closeOpenCalls=function(){var e,t;return t=function(e,t){var n;return")"===(n=e[0])||"CALL_END"===n||"OUTDENT"===e[0]&&")"===this.tag(t-1)},e=function(e,t){return this.tokens["OUTDENT"===e[0]?t-1:t][0]="CALL_END"},this.scanTokens(function(n,i){return"CALL_START"===n[0]&&this.detectEnd(i+1,t,e),1})},e.prototype.closeOpenIndexes=function(){var e,t;return t=function(e){var t;return"]"===(t=e[0])||"INDEX_END"===t},e=function(e){return e[0]="INDEX_END"},this.scanTokens(function(n,i){return"INDEX_START"===n[0]&&this.detectEnd(i+1,t,e),1})},e.prototype.indexOfTag=function(){var e,t,n,i,r,s,o;for(t=arguments[0],r=arguments.length>=2?w.call(arguments,1):[],e=0,n=i=0,s=r.length;s>=0?s>i:i>s;n=s>=0?++i:--i){for(;"HERECOMMENT"===this.tag(t+n+e);)e+=2;if(null!=r[n]&&("string"==typeof r[n]&&(r[n]=[r[n]]),o=this.tag(t+n+e),0>k.call(r[n],o)))return-1}return t+n+e-1},e.prototype.looksObjectish=function(e){var t,n;return this.indexOfTag(e,"@",null,":")>-1||this.indexOfTag(e,null,":")>-1?!0:(n=this.indexOfTag(e,s),n>-1&&(t=null,this.detectEnd(n+1,function(e){var t;return t=e[0],k.call(r,t)>=0},function(e,n){return t=n}),":"===this.tag(t+1))?!0:!1)},e.prototype.findTagsBackwards=function(e,t){var n,i,o,a,c,l,h;for(n=[];e>=0&&(n.length||(a=this.tag(e),0>k.call(t,a)&&(c=this.tag(e),0>k.call(s,c)||this.tokens[e].generated)&&(l=this.tag(e),0>k.call(u,l))));)i=this.tag(e),k.call(r,i)>=0&&n.push(this.tag(e)),o=this.tag(e),k.call(s,o)>=0&&n.length&&n.pop(),e-=1;return h=this.tag(e),k.call(t,h)>=0},e.prototype.addImplicitBracesAndParens=function(){var e,t;return e=[],t=null,this.scanTokens(function(i,h,p){var d,m,g,v,y,b,w,T,C,E,F,N,L,x,S,D,R,A,I,_,O,$,j,M,B,V,P,U;if(U=i[0],F=(N=h>0?p[h-1]:[])[0],C=(p.length-1>h?p[h+1]:[])[0],j=function(){return e[e.length-1]},M=h,g=function(e){return h-M+e},v=function(){var e,t;return null!=(e=j())?null!=(t=e[2])?t.ours:void 0:void 0},y=function(){var e;return v()&&"("===(null!=(e=j())?e[0]:void 0)},w=function(){var e;return v()&&"{"===(null!=(e=j())?e[0]:void 0)},b=function(){var e;return v&&"CONTROL"===(null!=(e=j())?e[0]:void 0)},B=function(t){var n;return n=null!=t?t:h,e.push(["(",n,{ours:!0}]),p.splice(n,0,f("CALL_START","(")),null==t?h+=1:void 0},d=function(){return e.pop(),p.splice(h,0,f("CALL_END",")",["","end of input",i[2]])),h+=1},V=function(t,n){var r,s;return null==n&&(n=!0),r=null!=t?t:h,e.push(["{",r,{sameLine:!0,startsLine:n,ours:!0}]),s=new String("{"),s.generated=!0,p.splice(r,0,f("{",s,i)),null==t?h+=1:void 0},m=function(t){return t=null!=t?t:h,e.pop(),p.splice(t,0,f("}","}",i)),h+=1},y()&&("IF"===U||"TRY"===U||"FINALLY"===U||"CATCH"===U||"CLASS"===U||"SWITCH"===U))return e.push(["CONTROL",h,{ours:!0}]),g(1);if("INDENT"===U&&v()){if("=>"!==F&&"->"!==F&&"["!==F&&"("!==F&&","!==F&&"{"!==F&&"TRY"!==F&&"ELSE"!==F&&"="!==F)for(;y();)d();return b()&&e.pop(),e.push([U,h]),g(1)}if(k.call(s,U)>=0)return e.push([U,h]),g(1);if(k.call(r,U)>=0){for(;v();)y()?d():w()?m():e.pop();t=e.pop()}if((k.call(c,U)>=0&&i.spaced||"?"===U&&h>0&&!p[h-1].spaced)&&(k.call(o,C)>=0||k.call(l,C)>=0&&!(null!=(L=p[h+1])?L.spaced:void 0)&&!(null!=(x=p[h+1])?x.newLine:void 0)))return"?"===U&&(U=i[0]="FUNC_EXIST"),B(h+1),g(2);if(k.call(c,U)>=0&&this.indexOfTag(h+1,"INDENT",null,":")>-1&&!this.findTagsBackwards(h,["CLASS","EXTENDS","IF","CATCH","SWITCH","LEADING_WHEN","FOR","WHILE","UNTIL"]))return B(h+1),e.push(["INDENT",h+2]),g(3);if(":"===U){for(I=function(){var e;switch(!1){case e=this.tag(h-1),0>k.call(r,e):return t[1];case"@"!==this.tag(h-2):return h-2;default:return h-1}}.call(this);"HERECOMMENT"===this.tag(I-2);)I-=2;return this.insideForDeclaration="FOR"===C,P=0===I||(S=this.tag(I-1),k.call(u,S)>=0)||p[I-1].newLine,j()&&(D=j(),$=D[0],O=D[1],("{"===$||"INDENT"===$&&"{"===this.tag(O-1))&&(P||","===this.tag(I-1)||"{"===this.tag(I-1)))?g(1):(V(I,!!P),g(2))}if(w()&&k.call(u,U)>=0&&(j()[2].sameLine=!1),T="OUTDENT"===F||N.newLine,k.call(a,U)>=0||k.call(n,U)>=0&&T)for(;v();)if(R=j(),$=R[0],O=R[1],A=R[2],_=A.sameLine,P=A.startsLine,y()&&","!==F)d();else if(w()&&!this.insideForDeclaration&&_&&"TERMINATOR"!==U&&":"!==F)m();else{if(!w()||"TERMINATOR"!==U||","===F||P&&this.looksObjectish(h+1))break;if("HERECOMMENT"===C)return g(1);m()}if(!(","!==U||this.looksObjectish(h+1)||!w()||this.insideForDeclaration||"TERMINATOR"===C&&this.looksObjectish(h+2)))for(E="OUTDENT"===C?1:0;w();)m(h+E);return g(1)})},e.prototype.addLocationDataToGeneratedTokens=function(){return this.scanTokens(function(e,t,n){var i,r,s,o,a,c;return e[2]?1:e.generated||e.explicit?("{"===e[0]&&(s=null!=(a=n[t+1])?a[2]:void 0)?(r=s.first_line,i=s.first_column):(o=null!=(c=n[t-1])?c[2]:void 0)?(r=o.last_line,i=o.last_column):r=i=0,e[2]={first_line:r,first_column:i,last_line:r,last_column:i},1):1})},e.prototype.normalizeLines=function(){var e,t,r,s,o;return o=r=s=null,t=function(e,t){var r,s,a,c;return";"!==e[1]&&(r=e[0],k.call(p,r)>=0)&&!("TERMINATOR"===e[0]&&(s=this.tag(t+1),k.call(i,s)>=0))&&!("ELSE"===e[0]&&"THEN"!==o)&&!!("CATCH"!==(a=e[0])&&"FINALLY"!==a||"->"!==o&&"=>"!==o)||(c=e[0],k.call(n,c)>=0&&this.tokens[t-1].newLine)},e=function(e,t){return this.tokens.splice(","===this.tag(t-1)?t-1:t,0,s)},this.scanTokens(function(n,a,c){var l,h,u,p,f,m;if(m=n[0],"TERMINATOR"===m){if("ELSE"===this.tag(a+1)&&"OUTDENT"!==this.tag(a-1))return c.splice.apply(c,[a,1].concat(w.call(this.indentation()))),1;if(u=this.tag(a+1),k.call(i,u)>=0)return c.splice(a,1),0}if("CATCH"===m)for(l=h=1;2>=h;l=++h)if("OUTDENT"===(p=this.tag(a+l))||"TERMINATOR"===p||"FINALLY"===p)return c.splice.apply(c,[a+l,0].concat(w.call(this.indentation()))),2+l;return k.call(d,m)>=0&&"INDENT"!==this.tag(a+1)&&("ELSE"!==m||"IF"!==this.tag(a+1))?(o=m,f=this.indentation(c[a]),r=f[0],s=f[1],"THEN"===o&&(r.fromThen=!0),c.splice(a+1,0,r),this.detectEnd(a+2,t,e),"THEN"===m&&c.splice(a,1),1):1})},e.prototype.tagPostfixConditionals=function(){var e,t,n;return n=null,t=function(e,t){var n,i;return i=e[0],n=this.tokens[t-1][0],"TERMINATOR"===i||"INDENT"===i&&0>k.call(d,n)},e=function(e){return"INDENT"!==e[0]||e.generated&&!e.fromThen?n[0]="POST_"+n[0]:void 0},this.scanTokens(function(i,r){return"IF"!==i[0]?1:(n=i,this.detectEnd(r+1,t,e),1)})},e.prototype.indentation=function(e){var t,n;return t=["INDENT",2],n=["OUTDENT",2],e?(t.generated=n.generated=!0,t.origin=n.origin=e):t.explicit=n.explicit=!0,[t,n]},e.prototype.generate=f,e.prototype.tag=function(e){var t;return null!=(t=this.tokens[e])?t[0]:void 0},e}(),t=[["(",")"],["[","]"],["{","}"],["INDENT","OUTDENT"],["CALL_START","CALL_END"],["PARAM_START","PARAM_END"],["INDEX_START","INDEX_END"],["STRING_START","STRING_END"],["REGEX_START","REGEX_END"]],e.INVERSES=h={},s=[],r=[],m=0,v=t.length;v>m;m++)y=t[m],g=y[0],b=y[1],s.push(h[b]=g),r.push(h[g]=b);i=["CATCH","THEN","ELSE","FINALLY"].concat(r),c=["IDENTIFIER","SUPER",")","CALL_END","]","INDEX_END","@","THIS"],o=["IDENTIFIER","NUMBER","STRING","STRING_START","JS","REGEX","REGEX_START","NEW","PARAM_START","CLASS","IF","TRY","SWITCH","THIS","BOOL","NULL","UNDEFINED","UNARY","YIELD","UNARY_MATH","SUPER","THROW","@","->","=>","[","(","{","--","++"],l=["+","-"],a=["POST_IF","FOR","WHILE","UNTIL","WHEN","BY","LOOP","TERMINATOR"],d=["ELSE","->","=>","TRY","FINALLY","THEN"],p=["TERMINATOR","CATCH","FINALLY","ELSE","OUTDENT","LEADING_WHEN"],u=["TERMINATOR","INDENT","OUTDENT"],n=[".","?.","::","?::"]}.call(this),t.exports}(),require["./lexer"]=function(){var e={},t={exports:e};return function(){var t,n,i,r,s,o,a,c,l,h,u,p,d,f,m,g,v,y,b,k,w,T,C,E,F,N,L,x,S,D,R,A,I,_,O,$,j,M,B,V,P,U,G,H,q,X,W,Y,K,z,J,Q,Z,et,tt,nt,it,rt,st,ot,at,ct,lt,ht,ut=[].indexOf||function(e){for(var t=0,n=this.length;n>t;t++)if(t in this&&this[t]===e)return t;return-1};ot=require("./rewriter"),P=ot.Rewriter,w=ot.INVERSES,at=require("./helpers"),nt=at.count,lt=at.starts,tt=at.compact,ct=at.repeat,it=at.invertLiterate,st=at.locationDataToString,ht=at.throwSyntaxError,e.Lexer=S=function(){function e(){}return e.prototype.tokenize=function(e,t){var n,i,r,s;for(null==t&&(t={}),this.literate=t.literate,this.indent=0,this.baseIndent=0,this.indebt=0,this.outdebt=0,this.indents=[],this.ends=[],this.tokens=[],this.chunkLine=t.line||0,this.chunkColumn=t.column||0,e=this.clean(e),r=0;this.chunk=e.slice(r);)if(n=this.identifierToken()||this.commentToken()||this.whitespaceToken()||this.lineToken()||this.stringToken()||this.numberToken()||this.regexToken()||this.jsToken()||this.literalToken(),s=this.getLineAndColumnFromChunk(n),this.chunkLine=s[0],this.chunkColumn=s[1],r+=n,t.untilBalanced&&0===this.ends.length)return{tokens:this.tokens,index:r};return this.closeIndentation(),(i=this.ends.pop())&&this.error("missing "+i.tag,i.origin[2]),t.rewrite===!1?this.tokens:(new P).rewrite(this.tokens)},e.prototype.clean=function(e){return e.charCodeAt(0)===t&&(e=e.slice(1)),e=e.replace(/\r/g,"").replace(z,""),et.test(e)&&(e="\n"+e,this.chunkLine--),this.literate&&(e=it(e)),e},e.prototype.identifierToken=function(){var e,t,n,i,r,c,l,h,u,p,d,f,m,g,y;return(l=v.exec(this.chunk))?(c=l[0],i=l[1],e=l[2],r=i.length,h=void 0,"own"===i&&"FOR"===this.tag()?(this.token("OWN",i),i.length):"from"===i&&"YIELD"===this.tag()?(this.token("FROM",i),i.length):(p=this.tokens,u=p[p.length-1],n=e||null!=u&&("."===(d=u[0])||"?."===d||"::"===d||"?::"===d||!u.spaced&&"@"===u[0]),g="IDENTIFIER",!n&&(ut.call(E,i)>=0||ut.call(a,i)>=0)&&(g=i.toUpperCase(),"WHEN"===g&&(f=this.tag(),ut.call(N,f)>=0)?g="LEADING_WHEN":"FOR"===g?this.seenFor=!0:"UNLESS"===g?g="IF":ut.call(J,g)>=0?g="UNARY":ut.call(B,g)>=0&&("INSTANCEOF"!==g&&this.seenFor?(g="FOR"+g,this.seenFor=!1):(g="RELATION","!"===this.value()&&(h=this.tokens.pop(),i="!"+i)))),ut.call(C,i)>=0&&(n?(g="IDENTIFIER",i=new String(i),i.reserved=!0):ut.call(V,i)>=0&&this.error("reserved word '"+i+"'",{length:i.length})),n||(ut.call(s,i)>=0&&(i=o[i]),g=function(){switch(i){case"!":return"UNARY";case"==":case"!=":return"COMPARE";case"&&":case"||":return"LOGIC";case"true":case"false":return"BOOL";case"break":case"continue":return"STATEMENT";default:return g}}()),y=this.token(g,i,0,r),y.variable=!n,h&&(m=[h[2].first_line,h[2].first_column],y[2].first_line=m[0],y[2].first_column=m[1]),e&&(t=c.lastIndexOf(":"),this.token(":",":",t,e.length)),c.length)):0},e.prototype.numberToken=function(){var e,t,n,i,r;return(n=I.exec(this.chunk))?(i=n[0],t=i.length,/^0[BOX]/.test(i)?this.error("radix prefix in '"+i+"' must be lowercase",{offset:1}):/E/.test(i)&&!/^0x/.test(i)?this.error("exponential notation in '"+i+"' must be indicated with a lowercase 'e'",{offset:i.indexOf("E")}):/^0\d*[89]/.test(i)?this.error("decimal literal '"+i+"' must not be prefixed with '0'",{length:t}):/^0\d+/.test(i)&&this.error("octal literal '"+i+"' must be prefixed with '0o'",{length:t}),(r=/^0o([0-7]+)/.exec(i))&&(i="0x"+parseInt(r[1],8).toString(16)),(e=/^0b([01]+)/.exec(i))&&(i="0x"+parseInt(e[1],2).toString(16)),this.token("NUMBER",i,0,t),t):0},e.prototype.stringToken=function(){var e,t,n,i,r,s,o,a,c,l,h,u,m,g,v,y;if(h=(Y.exec(this.chunk)||[])[0],!h)return 0;if(g=function(){switch(h){case"'":return W;case'"':return q;case"'''":return f;case'"""':return p}}(),s=3===h.length,u=this.matchWithInterpolations(g,h),y=u.tokens,r=u.index,e=y.length-1,n=h.charAt(0),s){for(a=null,i=function(){var e,t,n;for(n=[],o=e=0,t=y.length;t>e;o=++e)v=y[o],"NEOSTRING"===v[0]&&n.push(v[1]);return n}().join("#{}");l=d.exec(i);)t=l[1],(null===a||(m=t.length)>0&&a.length>m)&&(a=t);a&&(c=RegExp("^"+a,"gm")),this.mergeInterpolationTokens(y,{delimiter:n},function(t){return function(n,i){return n=t.formatString(n),0===i&&(n=n.replace(F,"")),i===e&&(n=n.replace(K,"")),c&&(n=n.replace(c,"")),n}}(this))}else this.mergeInterpolationTokens(y,{delimiter:n},function(t){return function(n,i){return n=t.formatString(n),n=n.replace(G,function(t,r){return 0===i&&0===r||i===e&&r+t.length===n.length?"":" "})}}(this));return r},e.prototype.commentToken=function(){var e,t,n;return(n=this.chunk.match(c))?(e=n[0],t=n[1],t&&((n=u.exec(e))&&this.error("block comments cannot contain "+n[0],{offset:n.index,length:n[0].length}),t.indexOf("\n")>=0&&(t=t.replace(RegExp("\\n"+ct(" ",this.indent),"g"),"\n")),this.token("HERECOMMENT",t,0,e.length)),e.length):0},e.prototype.jsToken=function(){var e,t;return"`"===this.chunk.charAt(0)&&(e=T.exec(this.chunk))?(this.token("JS",(t=e[0]).slice(1,-1),0,t.length),t.length):0},e.prototype.regexToken=function(){var e,t,n,r,s,o,a,c,l,h,u,p,d;switch(!1){case!(o=M.exec(this.chunk)):this.error("regular expressions cannot begin with "+o[2],{offset:o.index+o[1].length});break;case!(o=this.matchWithInterpolations(m,"///")):d=o.tokens,s=o.index;break;case!(o=$.exec(this.chunk)):if(p=o[0],e=o[1],t=o[2],this.validateEscapes(e,{isRegex:!0,offsetInChunk:1}),s=p.length,l=this.tokens,c=l[l.length-1],c)if(c.spaced&&(h=c[0],ut.call(i,h)>=0)){if(!t||O.test(p))return 0}else if(u=c[0],ut.call(A,u)>=0)return 0;t||this.error("missing / (unclosed regex)");break;default:return 0}switch(r=j.exec(this.chunk.slice(s))[0],n=s+r.length,a=this.makeToken("REGEX",null,0,n),!1){case!!Z.test(r):this.error("invalid regular expression flags "+r,{offset:s,length:r.length});break;case!(p||1===d.length):null==e&&(e=this.formatHeregex(d[0][1])),this.token("REGEX",""+this.makeDelimitedLiteral(e,{delimiter:"/"})+r,0,n,a);break;default:this.token("REGEX_START","(",0,0,a),this.token("IDENTIFIER","RegExp",0,0),this.token("CALL_START","(",0,0),this.mergeInterpolationTokens(d,{delimiter:'"',"double":!0},this.formatHeregex),r&&(this.token(",",",",s,0),this.token("STRING",'"'+r+'"',s,r.length)),this.token(")",")",n,0),this.token("REGEX_END",")",n,0)}return n},e.prototype.lineToken=function(){var e,t,n,i,r;if(!(n=R.exec(this.chunk)))return 0;if(t=n[0],this.seenFor=!1,r=t.length-1-t.lastIndexOf("\n"),i=this.unfinished(),r-this.indebt===this.indent)return i?this.suppressNewlines():this.newlineToken(0),t.length;if(r>this.indent){if(i)return this.indebt=r-this.indent,this.suppressNewlines(),t.length;if(!this.tokens.length)return this.baseIndent=this.indent=r,t.length;e=r-this.indent+this.outdebt,this.token("INDENT",e,t.length-r,r),this.indents.push(e),this.ends.push({tag:"OUTDENT"}),this.outdebt=this.indebt=0,this.indent=r}else this.baseIndent>r?this.error("missing indentation",{offset:t.length}):(this.indebt=0,this.outdentToken(this.indent-r,i,t.length));return t.length},e.prototype.outdentToken=function(e,t,n){var i,r,s,o;for(i=this.indent-e;e>0;)s=this.indents[this.indents.length-1],s?s===this.outdebt?(e-=this.outdebt,this.outdebt=0):this.outdebt>s?(this.outdebt-=s,e-=s):(r=this.indents.pop()+this.outdebt,n&&(o=this.chunk[n],ut.call(y,o)>=0)&&(i-=r-e,e=r),this.outdebt=0,this.pair("OUTDENT"),this.token("OUTDENT",e,0,n),e-=r):e=0;for(r&&(this.outdebt-=e);";"===this.value();)this.tokens.pop();return"TERMINATOR"===this.tag()||t||this.token("TERMINATOR","\n",n,0),this.indent=i,this},e.prototype.whitespaceToken=function(){var e,t,n,i;return(e=et.exec(this.chunk))||(t="\n"===this.chunk.charAt(0))?(i=this.tokens,n=i[i.length-1],n&&(n[e?"spaced":"newLine"]=!0),e?e[0].length:0):0},e.prototype.newlineToken=function(e){for(;";"===this.value();)this.tokens.pop();return"TERMINATOR"!==this.tag()&&this.token("TERMINATOR","\n",e,0),this},e.prototype.suppressNewlines=function(){return"\\"===this.value()&&this.tokens.pop(),this},e.prototype.literalToken=function(){var e,t,n,s,o,a,c,u,p,d;if((e=_.exec(this.chunk))?(d=e[0],r.test(d)&&this.tagParameters()):d=this.chunk.charAt(0),u=d,n=this.tokens,t=n[n.length-1],"="===d&&t&&(!t[1].reserved&&(s=t[1],ut.call(C,s)>=0)&&this.error("reserved word '"+t[1]+"' can't be assigned",t[2]),"||"===(o=t[1])||"&&"===o))return t[0]="COMPOUND_ASSIGN",t[1]+="=",d.length;if(";"===d)this.seenFor=!1,u="TERMINATOR";else if(ut.call(D,d)>=0)u="MATH";else if(ut.call(l,d)>=0)u="COMPARE";else if(ut.call(h,d)>=0)u="COMPOUND_ASSIGN";else if(ut.call(J,d)>=0)u="UNARY";else if(ut.call(Q,d)>=0)u="UNARY_MATH";else if(ut.call(U,d)>=0)u="SHIFT";else if(ut.call(x,d)>=0||"?"===d&&(null!=t?t.spaced:void 0))u="LOGIC";else if(t&&!t.spaced)if("("===d&&(a=t[0],ut.call(i,a)>=0))"?"===t[0]&&(t[0]="FUNC_EXIST"),u="CALL_START";else if("["===d&&(c=t[0],ut.call(b,c)>=0))switch(u="INDEX_START",t[0]){case"?":t[0]="INDEX_SOAK"}switch(p=this.makeToken(u,d),d){case"(":case"{":case"[":this.ends.push({tag:w[d],origin:p});break;case")":case"}":case"]":this.pair(d)}return this.tokens.push(p),d.length},e.prototype.tagParameters=function(){var e,t,n,i;if(")"!==this.tag())return this;for(t=[],i=this.tokens,e=i.length,i[--e][0]="PARAM_END";n=i[--e];)switch(n[0]){case")":t.push(n);break;case"(":case"CALL_START":if(!t.length)return"("===n[0]?(n[0]="PARAM_START",this):this;t.pop()}return this},e.prototype.closeIndentation=function(){return this.outdentToken(this.indent)},e.prototype.matchWithInterpolations=function(t,n){var i,r,s,o,a,c,l,h,u,p,d,f,m,g,v;if(v=[],h=n.length,this.chunk.slice(0,h)!==n)return null;for(m=this.chunk.slice(h);;){if(g=t.exec(m)[0],this.validateEscapes(g,{isRegex:"/"===n.charAt(0),offsetInChunk:h}),v.push(this.makeToken("NEOSTRING",g,h)),m=m.slice(g.length),h+=g.length,"#{"!==m.slice(0,2))break;p=this.getLineAndColumnFromChunk(h+1),c=p[0],r=p[1],d=(new e).tokenize(m.slice(1),{line:c,column:r,untilBalanced:!0}),l=d.tokens,o=d.index,o+=1,u=l[0],i=l[l.length-1],u[0]=u[1]="(",i[0]=i[1]=")",i.origin=["","end of interpolation",i[2]],"TERMINATOR"===(null!=(f=l[1])?f[0]:void 0)&&l.splice(1,1),v.push(["TOKENS",l]),m=m.slice(o),h+=o}return m.slice(0,n.length)!==n&&this.error("missing "+n,{length:n.length}),s=v[0],a=v[v.length-1],s[2].first_column-=n.length,a[2].last_column+=n.length,0===a[1].length&&(a[2].last_column-=1),{tokens:v,index:h+n.length}},e.prototype.mergeInterpolationTokens=function(e,t,n){var i,r,s,o,a,c,l,h,u,p,d,f,m,g,v,y;for(e.length>1&&(u=this.token("STRING_START","(",0,0)),s=this.tokens.length,o=a=0,l=e.length;l>a;o=++a){switch(g=e[o],m=g[0],y=g[1],m){case"TOKENS":if(2===y.length)continue;h=y[0],v=y;break;case"NEOSTRING":if(i=n(g[1],o),0===i.length){if(0!==o)continue;r=this.tokens.length}2===o&&null!=r&&this.tokens.splice(r,2),g[0]="STRING",g[1]=this.makeDelimitedLiteral(i,t),h=g,v=[g]}this.tokens.length>s&&(p=this.token("+","+"),p[2]={first_line:h[2].first_line,first_column:h[2].first_column,last_line:h[2].first_line,last_column:h[2].first_column}),(d=this.tokens).push.apply(d,v)}return u?(c=e[e.length-1],u.origin=["STRING",null,{first_line:u[2].first_line,first_column:u[2].first_column,last_line:c[2].last_line,last_column:c[2].last_column}],f=this.token("STRING_END",")"),f[2]={first_line:c[2].last_line,first_column:c[2].last_column,last_line:c[2].last_line,last_column:c[2].last_column}):void 0},e.prototype.pair=function(e){var t,n,i,r,s;return i=this.ends,n=i[i.length-1],e!==(s=null!=n?n.tag:void 0)?("OUTDENT"!==s&&this.error("unmatched "+e),r=this.indents,t=r[r.length-1],this.outdentToken(t,!0),this.pair(e)):this.ends.pop()},e.prototype.getLineAndColumnFromChunk=function(e){var t,n,i,r,s;return 0===e?[this.chunkLine,this.chunkColumn]:(s=e>=this.chunk.length?this.chunk:this.chunk.slice(0,+(e-1)+1||9e9),i=nt(s,"\n"),t=this.chunkColumn,i>0?(r=s.split("\n"),n=r[r.length-1],t=n.length):t+=s.length,[this.chunkLine+i,t])},e.prototype.makeToken=function(e,t,n,i){var r,s,o,a,c;return null==n&&(n=0),null==i&&(i=t.length),s={},o=this.getLineAndColumnFromChunk(n),s.first_line=o[0],s.first_column=o[1],r=Math.max(0,i-1),a=this.getLineAndColumnFromChunk(n+r),s.last_line=a[0],s.last_column=a[1],c=[e,t,s]},e.prototype.token=function(e,t,n,i,r){var s;return s=this.makeToken(e,t,n,i),r&&(s.origin=r),this.tokens.push(s),s},e.prototype.tag=function(){var e,t;return e=this.tokens,t=e[e.length-1],null!=t?t[0]:void 0},e.prototype.value=function(){var e,t;return e=this.tokens,t=e[e.length-1],null!=t?t[1]:void 0},e.prototype.unfinished=function(){var e;return L.test(this.chunk)||"\\"===(e=this.tag())||"."===e||"?."===e||"?::"===e||"UNARY"===e||"MATH"===e||"UNARY_MATH"===e||"+"===e||"-"===e||"YIELD"===e||"**"===e||"SHIFT"===e||"RELATION"===e||"COMPARE"===e||"LOGIC"===e||"THROW"===e||"EXTENDS"===e},e.prototype.formatString=function(e){return e.replace(X,"$1")},e.prototype.formatHeregex=function(e){return e.replace(g,"$1$2")},e.prototype.validateEscapes=function(e,t){var n,i,r,s,o,a,c,l;return null==t&&(t={}),s=k.exec(e),!s||(s[0],n=s[1],a=s[2],i=s[3],l=s[4],t.isRegex&&a&&"0"!==a.charAt(0))?void 0:(o=a?"octal escape sequences are not allowed":"invalid escape sequence",r="\\"+(a||i||l),this.error(o+" "+r,{offset:(null!=(c=t.offsetInChunk)?c:0)+s.index+n.length,length:r.length}))},e.prototype.makeDelimitedLiteral=function(e,t){var n;return null==t&&(t={}),""===e&&"/"===t.delimiter&&(e="(?:)"),n=RegExp("(\\\\\\\\)|(\\\\0(?=[1-7]))|\\\\?("+t.delimiter+")|\\\\?(?:(\\n)|(\\r)|(\\u2028)|(\\u2029))|(\\\\.)","g"),e=e.replace(n,function(e,n,i,r,s,o,a,c,l){switch(!1){case!n:return t.double?n+n:n;case!i:return"\\x00";case!r:return"\\"+r;case!s:return"\\n";case!o:return"\\r";case!a:return"\\u2028";case!c:return"\\u2029";case!l:return t.double?"\\"+l:l}}),""+t.delimiter+e+t.delimiter},e.prototype.error=function(e,t){var n,i,r,s,o,a;return null==t&&(t={}),r="first_line"in t?t:(o=this.getLineAndColumnFromChunk(null!=(s=t.offset)?s:0),i=o[0],n=o[1],o,{first_line:i,first_column:n,last_column:n+(null!=(a=t.length)?a:1)-1}),ht(e,r)},e}(),E=["true","false","null","this","new","delete","typeof","in","instanceof","return","throw","break","continue","debugger","yield","if","else","switch","for","while","do","try","catch","finally","class","extends","super"],a=["undefined","then","unless","until","loop","of","by","when"],o={and:"&&",or:"||",is:"==",isnt:"!=",not:"!",yes:"true",no:"false",on:"true",off:"false"},s=function(){var e;e=[];for(rt in o)e.push(rt);return e}(),a=a.concat(s),V=["case","default","function","var","void","with","const","let","enum","export","import","native","implements","interface","package","private","protected","public","static"],H=["arguments","eval","yield*"],C=E.concat(V).concat(H),e.RESERVED=V.concat(E).concat(a).concat(H),e.STRICT_PROSCRIBED=H,t=65279,v=/^(?!\d)((?:(?!\s)[$\w\x7f-\uffff])+)([^\n\S]*:(?!:))?/,I=/^0b[01]+|^0o[0-7]+|^0x[\da-f]+|^\d*\.?\d+(?:e[+-]?\d+)?/i,_=/^(?:[-=]>|[-+*\/%<>&|^!?=]=|>>>=?|([-+:])\1|([&|<>*\/%])\2=?|\?(\.|::)|\.{2,3})/,et=/^[^\n\S]+/,c=/^###([^#][\s\S]*?)(?:###[^\n\S]*|###$)|^(?:\s*#(?!##[^#]).*)+/,r=/^[-=]>/,R=/^(?:\n[^\n\S]*)+/,T=/^`[^\\`]*(?:\\.[^\\`]*)*`/,Y=/^(?:'''|"""|'|")/,W=/^(?:[^\\']|\\[\s\S])*!/,q=/^(?:[^\\"#]|\\[\s\S]|\#(?!\{))*!/,f=/^(?:[^\\']|\\[\s\S]|'(?!''))*!/,p=/^(?:[^\\"#]|\\[\s\S]|"(?!"")|\#(?!\{))*!/,X=/((?:\\\\)+)|\\[^\S\n]*\n\s*!/g,G=/\s*\n\s*!/g,d=/\n+([^\n\S]*)(?=\S)/g,$=/^\/(?!\/)((?:[^[\/\n\\]|\\[^\n]|\[(?:\\[^\n]|[^\]\n\\])*\])*)(\/)?/,j=/^\w*!/,Z=/^(?!.*(.).*\1)[imgy]*$/,m=/^(?:[^\\\/#]|\\[\s\S]|\/(?!\/\/)|\#(?!\{))*!/,g=/((?:\\\\)+)|\\(\s)|\s+(?:#.*)?/g,M=/^(\/|\/{3}\s*)(\*)/,O=/^\/=?\s/,u=/\*\//,L=/^\s*(?:,|\??\.(?![.\d])|::)/,k=/((?:^|[^\\])(?:\\\\)*)\\(?:(0[0-7]|[1-7])|(x(?![\da-fA-F]{2}).{0,2})|(u(?![\da-fA-F]{4}).{0,4}))/,F=/^[^\n\S]*\n/,K=/\n[^\n\S]*$/,z=/\s+$/,h=["-=","+=","/=","*=","%=","||=","&&=","?=","<<=",">>=",">>>=","&=","^=","|=","**=","//=","%%="],J=["NEW","TYPEOF","DELETE","DO"],Q=["!","~"],x=["&&","||","&","|","^"],U=["<<",">>",">>>"],l=["==","!=","<",">","<=",">="],D=["*","/","%","//","%%"],B=["IN","OF","INSTANCEOF"],n=["TRUE","FALSE"],i=["IDENTIFIER",")","]","?","@","THIS","SUPER"],b=i.concat(["NUMBER","STRING","STRING_END","REGEX","REGEX_END","BOOL","NULL","UNDEFINED","}","::"]),A=b.concat(["++","--"]),N=["INDENT","OUTDENT","TERMINATOR"],y=[")","}","]"]}.call(this),t.exports}(),require["./parser"]=function(){var e={},t={exports:e},n=function(){function e(){this.yy={}}var t=function(e,t,n,i){for(n=n||{},i=e.length;i--;n[e[i]]=t);return n},n=[1,20],i=[1,75],r=[1,71],s=[1,76],o=[1,77],a=[1,73],c=[1,74],l=[1,50],h=[1,52],u=[1,53],p=[1,54],d=[1,55],f=[1,45],m=[1,46],g=[1,27],v=[1,60],y=[1,61],b=[1,70],k=[1,43],w=[1,26],T=[1,58],C=[1,59],E=[1,57],F=[1,38],N=[1,44],L=[1,56],x=[1,65],S=[1,66],D=[1,67],R=[1,68],A=[1,42],I=[1,64],_=[1,29],O=[1,30],$=[1,31],j=[1,32],M=[1,33],B=[1,34],V=[1,35],P=[1,78],U=[1,6,26,34,108],G=[1,88],H=[1,81],q=[1,80],X=[1,79],W=[1,82],Y=[1,83],K=[1,84],z=[1,85],J=[1,86],Q=[1,87],Z=[1,91],et=[1,6,25,26,34,55,60,63,79,84,92,97,99,108,110,111,112,116,117,132,135,136,141,142,143,144,145,146,147],tt=[1,97],nt=[1,98],it=[1,99],rt=[1,100],st=[1,102],ot=[1,103],at=[1,96],ct=[2,112],lt=[1,6,25,26,34,55,60,63,72,73,74,75,77,79,80,84,90,91,92,97,99,108,110,111,112,116,117,132,135,136,141,142,143,144,145,146,147],ht=[2,79],ut=[1,108],pt=[2,58],dt=[1,112],ft=[1,117],mt=[1,118],gt=[1,120],vt=[1,6,25,26,34,46,55,60,63,72,73,74,75,77,79,80,84,90,91,92,97,99,108,110,111,112,116,117,132,135,136,141,142,143,144,145,146,147],yt=[2,76],bt=[1,6,26,34,55,60,63,79,84,92,97,99,108,110,111,112,116,117,132,135,136,141,142,143,144,145,146,147],kt=[1,155],wt=[1,157],Tt=[1,152],Ct=[1,6,25,26,34,46,55,60,63,72,73,74,75,77,79,80,84,86,90,91,92,97,99,108,110,111,112,116,117,132,135,136,139,140,141,142,143,144,145,146,147,148],Et=[2,95],Ft=[1,6,25,26,34,49,55,60,63,72,73,74,75,77,79,80,84,90,91,92,97,99,108,110,111,112,116,117,132,135,136,141,142,143,144,145,146,147],Nt=[1,6,25,26,34,46,49,55,60,63,72,73,74,75,77,79,80,84,86,90,91,92,97,99,108,110,111,112,116,117,123,124,132,135,136,139,140,141,142,143,144,145,146,147,148],Lt=[1,206],xt=[1,205],St=[1,6,25,26,34,38,55,60,63,72,73,74,75,77,79,80,84,90,91,92,97,99,108,110,111,112,116,117,132,135,136,141,142,143,144,145,146,147],Dt=[2,56],Rt=[1,216],At=[6,25,26,55,60],It=[6,25,26,46,55,60,63],_t=[1,6,25,26,34,55,60,63,79,84,92,97,99,108,110,111,112,116,117,132,135,136,142,144,145,146,147],Ot=[1,6,25,26,34,55,60,63,79,84,92,97,99,108,110,111,112,116,117,132],$t=[72,73,74,75,77,80,90,91],jt=[1,235],Mt=[2,133],Bt=[1,6,25,26,34,46,55,60,63,72,73,74,75,77,79,80,84,90,91,92,97,99,108,110,111,112,116,117,123,124,132,135,136,141,142,143,144,145,146,147],Vt=[1,244],Pt=[6,25,26,60,92,97],Ut=[1,6,25,26,34,55,60,63,79,84,92,97,99,108,117,132],Gt=[1,6,25,26,34,55,60,63,79,84,92,97,99,108,111,117,132],Ht=[123,124],qt=[60,123,124],Xt=[1,255],Wt=[6,25,26,60,84],Yt=[6,25,26,49,60,84],Kt=[1,6,25,26,34,55,60,63,79,84,92,97,99,108,110,111,112,116,117,132,135,136,144,145,146,147],zt=[11,28,30,32,33,36,37,40,41,42,43,44,51,52,53,57,58,79,82,85,89,94,95,96,102,106,107,110,112,114,116,125,131,133,134,135,136,137,139,140],Jt=[2,122],Qt=[6,25,26],Zt=[2,57],en=[1,268],tn=[1,269],nn=[1,6,25,26,34,55,60,63,79,84,92,97,99,104,105,108,110,111,112,116,117,127,129,132,135,136,141,142,143,144,145,146,147],rn=[26,127,129],sn=[1,6,26,34,55,60,63,79,84,92,97,99,108,111,117,132],on=[2,71],an=[1,291],cn=[1,292],ln=[1,6,25,26,34,55,60,63,79,84,92,97,99,108,110,111,112,116,117,127,132,135,136,141,142,143,144,145,146,147],hn=[1,6,25,26,34,55,60,63,79,84,92,97,99,108,110,112,116,117,132],un=[1,303],pn=[1,304],dn=[6,25,26,60],fn=[1,6,25,26,34,55,60,63,79,84,92,97,99,104,108,110,111,112,116,117,132,135,136,141,142,143,144,145,146,147],mn=[25,60],gn={trace:function(){},yy:{},symbols_:{error:2,Root:3,Body:4,Line:5,TERMINATOR:6,Expression:7,Statement:8,Return:9,Comment:10,STATEMENT:11,Value:12,Invocation:13,Code:14,Operation:15,Assign:16,If:17,Try:18,While:19,For:20,Switch:21,Class:22,Throw:23,Block:24,INDENT:25,OUTDENT:26,Identifier:27,IDENTIFIER:28,AlphaNumeric:29,NUMBER:30,String:31,STRING:32,STRING_START:33,STRING_END:34,Regex:35,REGEX:36,REGEX_START:37,REGEX_END:38,Literal:39,JS:40,DEBUGGER:41,UNDEFINED:42,NULL:43,BOOL:44,Assignable:45,"=":46,AssignObj:47,ObjAssignable:48,":":49,ThisProperty:50,RETURN:51,HERECOMMENT:52,PARAM_START:53,ParamList:54,PARAM_END:55,FuncGlyph:56,"->":57,"=>":58,OptComma:59,",":60,Param:61,ParamVar:62,"...":63,Array:64,Object:65,Splat:66,SimpleAssignable:67,Accessor:68,Parenthetical:69,Range:70,This:71,".":72,"?.":73,"::":74,"?::":75,Index:76,INDEX_START:77,IndexValue:78,INDEX_END:79,INDEX_SOAK:80,Slice:81,"{":82,AssignList:83,"}":84,CLASS:85,EXTENDS:86,OptFuncExist:87,Arguments:88,SUPER:89,FUNC_EXIST:90,CALL_START:91,CALL_END:92,ArgList:93,THIS:94,"@":95,"[":96,"]":97,RangeDots:98,"..":99,Arg:100,SimpleArgs:101,TRY:102,Catch:103,FINALLY:104,CATCH:105,THROW:106,"(":107,")":108,WhileSource:109,WHILE:110,WHEN:111,UNTIL:112,Loop:113,LOOP:114,ForBody:115,FOR:116,BY:117,ForStart:118,ForSource:119,ForVariables:120,OWN:121,ForValue:122,FORIN:123,FOROF:124,SWITCH:125,Whens:126,ELSE:127,When:128,LEADING_WHEN:129,IfBlock:130,IF:131,POST_IF:132,UNARY:133,UNARY_MATH:134,"-":135,"+":136,YIELD:137,FROM:138,"--":139,"++":140,"?":141,MATH:142,"**":143,SHIFT:144,COMPARE:145,LOGIC:146,RELATION:147,COMPOUND_ASSIGN:148,$accept:0,$end:1},terminals_:{2:"error",6:"TERMINATOR",11:"STATEMENT",25:"INDENT",26:"OUTDENT",28:"IDENTIFIER",30:"NUMBER",32:"STRING",33:"STRING_START",34:"STRING_END",36:"REGEX",37:"REGEX_START",38:"REGEX_END",40:"JS",41:"DEBUGGER",42:"UNDEFINED",43:"NULL",44:"BOOL",46:"=",49:":",51:"RETURN",52:"HERECOMMENT",53:"PARAM_START",55:"PARAM_END",57:"->",58:"=>",60:",",63:"...",72:".",73:"?.",74:"::",75:"?::",77:"INDEX_START",79:"INDEX_END",80:"INDEX_SOAK",82:"{",84:"}",85:"CLASS",86:"EXTENDS",89:"SUPER",90:"FUNC_EXIST",91:"CALL_START",92:"CALL_END",94:"THIS",95:"@",96:"[",97:"]",99:"..",102:"TRY",104:"FINALLY",105:"CATCH",106:"THROW",107:"(",108:")",110:"WHILE",111:"WHEN",112:"UNTIL",114:"LOOP",116:"FOR",117:"BY",121:"OWN",123:"FORIN",124:"FOROF",125:"SWITCH",127:"ELSE",129:"LEADING_WHEN",131:"IF",132:"POST_IF",133:"UNARY",134:"UNARY_MATH",135:"-",136:"+",137:"YIELD",138:"FROM",139:"--",140:"++",141:"?",142:"MATH",143:"**",144:"SHIFT",145:"COMPARE",146:"LOGIC",147:"RELATION",148:"COMPOUND_ASSIGN"},productions_:[0,[3,0],[3,1],[4,1],[4,3],[4,2],[5,1],[5,1],[8,1],[8,1],[8,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[24,2],[24,3],[27,1],[29,1],[29,1],[31,1],[31,3],[35,1],[35,3],[39,1],[39,1],[39,1],[39,1],[39,1],[39,1],[39,1],[16,3],[16,4],[16,5],[47,1],[47,3],[47,5],[47,1],[48,1],[48,1],[48,1],[9,2],[9,1],[10,1],[14,5],[14,2],[56,1],[56,1],[59,0],[59,1],[54,0],[54,1],[54,3],[54,4],[54,6],[61,1],[61,2],[61,3],[61,1],[62,1],[62,1],[62,1],[62,1],[66,2],[67,1],[67,2],[67,2],[67,1],[45,1],[45,1],[45,1],[12,1],[12,1],[12,1],[12,1],[12,1],[68,2],[68,2],[68,2],[68,2],[68,1],[68,1],[76,3],[76,2],[78,1],[78,1],[65,4],[83,0],[83,1],[83,3],[83,4],[83,6],[22,1],[22,2],[22,3],[22,4],[22,2],[22,3],[22,4],[22,5],[13,3],[13,3],[13,1],[13,2],[87,0],[87,1],[88,2],[88,4],[71,1],[71,1],[50,2],[64,2],[64,4],[98,1],[98,1],[70,5],[81,3],[81,2],[81,2],[81,1],[93,1],[93,3],[93,4],[93,4],[93,6],[100,1],[100,1],[100,1],[101,1],[101,3],[18,2],[18,3],[18,4],[18,5],[103,3],[103,3],[103,2],[23,2],[69,3],[69,5],[109,2],[109,4],[109,2],[109,4],[19,2],[19,2],[19,2],[19,1],[113,2],[113,2],[20,2],[20,2],[20,2],[115,2],[115,4],[115,2],[118,2],[118,3],[122,1],[122,1],[122,1],[122,1],[120,1],[120,3],[119,2],[119,2],[119,4],[119,4],[119,4],[119,6],[119,6],[21,5],[21,7],[21,4],[21,6],[126,1],[126,2],[128,3],[128,4],[130,3],[130,5],[17,1],[17,3],[17,3],[17,3],[15,2],[15,2],[15,2],[15,2],[15,2],[15,2],[15,3],[15,2],[15,2],[15,2],[15,2],[15,2],[15,3],[15,3],[15,3],[15,3],[15,3],[15,3],[15,3],[15,3],[15,3],[15,5],[15,4],[15,3]],performAction:function(e,t,n,i,r,s,o){var a=s.length-1;
//         switch(r){case 1:return this.$=i.addLocationDataFn(o[a],o[a])(new i.Block);case 2:return this.$=s[a];case 3:this.$=i.addLocationDataFn(o[a],o[a])(i.Block.wrap([s[a]]));break;case 4:this.$=i.addLocationDataFn(o[a-2],o[a])(s[a-2].push(s[a]));break;case 5:this.$=s[a-1];break;case 6:case 7:case 8:case 9:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 27:case 32:case 34:case 45:case 46:case 47:case 48:case 56:case 57:case 67:case 68:case 69:case 70:case 75:case 76:case 79:case 83:case 89:case 133:case 134:case 136:case 166:case 167:case 183:case 189:this.$=s[a];break;case 10:case 25:case 26:case 28:case 30:case 33:case 35:this.$=i.addLocationDataFn(o[a],o[a])(new i.Literal(s[a]));break;case 23:this.$=i.addLocationDataFn(o[a-1],o[a])(new i.Block);break;case 24:case 31:case 90:this.$=i.addLocationDataFn(o[a-2],o[a])(s[a-1]);break;case 29:case 146:this.$=i.addLocationDataFn(o[a-2],o[a])(new i.Parens(s[a-1]));break;case 36:this.$=i.addLocationDataFn(o[a],o[a])(new i.Undefined);break;case 37:this.$=i.addLocationDataFn(o[a],o[a])(new i.Null);break;case 38:this.$=i.addLocationDataFn(o[a],o[a])(new i.Bool(s[a]));break;case 39:this.$=i.addLocationDataFn(o[a-2],o[a])(new i.Assign(s[a-2],s[a]));break;case 40:this.$=i.addLocationDataFn(o[a-3],o[a])(new i.Assign(s[a-3],s[a]));break;case 41:this.$=i.addLocationDataFn(o[a-4],o[a])(new i.Assign(s[a-4],s[a-1]));break;case 42:case 72:case 77:case 78:case 80:case 81:case 82:case 168:case 169:this.$=i.addLocationDataFn(o[a],o[a])(new i.Value(s[a]));break;case 43:this.$=i.addLocationDataFn(o[a-2],o[a])(new i.Assign(i.addLocationDataFn(o[a-2])(new i.Value(s[a-2])),s[a],"object"));break;case 44:this.$=i.addLocationDataFn(o[a-4],o[a])(new i.Assign(i.addLocationDataFn(o[a-4])(new i.Value(s[a-4])),s[a-1],"object"));break;case 49:this.$=i.addLocationDataFn(o[a-1],o[a])(new i.Return(s[a]));break;case 50:this.$=i.addLocationDataFn(o[a],o[a])(new i.Return);break;case 51:this.$=i.addLocationDataFn(o[a],o[a])(new i.Comment(s[a]));break;case 52:this.$=i.addLocationDataFn(o[a-4],o[a])(new i.Code(s[a-3],s[a],s[a-1]));break;case 53:this.$=i.addLocationDataFn(o[a-1],o[a])(new i.Code([],s[a],s[a-1]));break;case 54:this.$=i.addLocationDataFn(o[a],o[a])("func");break;case 55:this.$=i.addLocationDataFn(o[a],o[a])("boundfunc");break;case 58:case 95:this.$=i.addLocationDataFn(o[a],o[a])([]);break;case 59:case 96:case 128:case 170:this.$=i.addLocationDataFn(o[a],o[a])([s[a]]);break;case 60:case 97:case 129:this.$=i.addLocationDataFn(o[a-2],o[a])(s[a-2].concat(s[a]));break;case 61:case 98:case 130:this.$=i.addLocationDataFn(o[a-3],o[a])(s[a-3].concat(s[a]));break;case 62:case 99:case 132:this.$=i.addLocationDataFn(o[a-5],o[a])(s[a-5].concat(s[a-2]));break;case 63:this.$=i.addLocationDataFn(o[a],o[a])(new i.Param(s[a]));break;case 64:this.$=i.addLocationDataFn(o[a-1],o[a])(new i.Param(s[a-1],null,!0));break;case 65:this.$=i.addLocationDataFn(o[a-2],o[a])(new i.Param(s[a-2],s[a]));break;case 66:case 135:this.$=i.addLocationDataFn(o[a],o[a])(new i.Expansion);break;case 71:this.$=i.addLocationDataFn(o[a-1],o[a])(new i.Splat(s[a-1]));break;case 73:this.$=i.addLocationDataFn(o[a-1],o[a])(s[a-1].add(s[a]));break;case 74:this.$=i.addLocationDataFn(o[a-1],o[a])(new i.Value(s[a-1],[].concat(s[a])));break;case 84:this.$=i.addLocationDataFn(o[a-1],o[a])(new i.Access(s[a]));break;case 85:this.$=i.addLocationDataFn(o[a-1],o[a])(new i.Access(s[a],"soak"));break;case 86:this.$=i.addLocationDataFn(o[a-1],o[a])([i.addLocationDataFn(o[a-1])(new i.Access(new i.Literal("prototype"))),i.addLocationDataFn(o[a])(new i.Access(s[a]))]);break;case 87:this.$=i.addLocationDataFn(o[a-1],o[a])([i.addLocationDataFn(o[a-1])(new i.Access(new i.Literal("prototype"),"soak")),i.addLocationDataFn(o[a])(new i.Access(s[a]))]);break;case 88:this.$=i.addLocationDataFn(o[a],o[a])(new i.Access(new i.Literal("prototype")));break;case 91:this.$=i.addLocationDataFn(o[a-1],o[a])(i.extend(s[a],{soak:!0}));break;case 92:this.$=i.addLocationDataFn(o[a],o[a])(new i.Index(s[a]));break;case 93:this.$=i.addLocationDataFn(o[a],o[a])(new i.Slice(s[a]));break;case 94:this.$=i.addLocationDataFn(o[a-3],o[a])(new i.Obj(s[a-2],s[a-3].generated));break;case 100:this.$=i.addLocationDataFn(o[a],o[a])(new i.Class);break;case 101:this.$=i.addLocationDataFn(o[a-1],o[a])(new i.Class(null,null,s[a]));break;case 102:this.$=i.addLocationDataFn(o[a-2],o[a])(new i.Class(null,s[a]));break;case 103:this.$=i.addLocationDataFn(o[a-3],o[a])(new i.Class(null,s[a-1],s[a]));break;case 104:this.$=i.addLocationDataFn(o[a-1],o[a])(new i.Class(s[a]));break;case 105:this.$=i.addLocationDataFn(o[a-2],o[a])(new i.Class(s[a-1],null,s[a]));break;case 106:this.$=i.addLocationDataFn(o[a-3],o[a])(new i.Class(s[a-2],s[a]));break;case 107:this.$=i.addLocationDataFn(o[a-4],o[a])(new i.Class(s[a-3],s[a-1],s[a]));break;case 108:case 109:this.$=i.addLocationDataFn(o[a-2],o[a])(new i.Call(s[a-2],s[a],s[a-1]));break;case 110:this.$=i.addLocationDataFn(o[a],o[a])(new i.Call("super",[new i.Splat(new i.Literal("arguments"))]));break;case 111:this.$=i.addLocationDataFn(o[a-1],o[a])(new i.Call("super",s[a]));break;case 112:this.$=i.addLocationDataFn(o[a],o[a])(!1);break;case 113:this.$=i.addLocationDataFn(o[a],o[a])(!0);break;case 114:this.$=i.addLocationDataFn(o[a-1],o[a])([]);break;case 115:case 131:this.$=i.addLocationDataFn(o[a-3],o[a])(s[a-2]);break;case 116:case 117:this.$=i.addLocationDataFn(o[a],o[a])(new i.Value(new i.Literal("this")));break;case 118:this.$=i.addLocationDataFn(o[a-1],o[a])(new i.Value(i.addLocationDataFn(o[a-1])(new i.Literal("this")),[i.addLocationDataFn(o[a])(new i.Access(s[a]))],"this"));break;case 119:this.$=i.addLocationDataFn(o[a-1],o[a])(new i.Arr([]));break;case 120:this.$=i.addLocationDataFn(o[a-3],o[a])(new i.Arr(s[a-2]));break;case 121:this.$=i.addLocationDataFn(o[a],o[a])("inclusive");break;case 122:this.$=i.addLocationDataFn(o[a],o[a])("exclusive");break;case 123:this.$=i.addLocationDataFn(o[a-4],o[a])(new i.Range(s[a-3],s[a-1],s[a-2]));break;case 124:this.$=i.addLocationDataFn(o[a-2],o[a])(new i.Range(s[a-2],s[a],s[a-1]));break;case 125:this.$=i.addLocationDataFn(o[a-1],o[a])(new i.Range(s[a-1],null,s[a]));break;case 126:this.$=i.addLocationDataFn(o[a-1],o[a])(new i.Range(null,s[a],s[a-1]));break;case 127:this.$=i.addLocationDataFn(o[a],o[a])(new i.Range(null,null,s[a]));break;case 137:this.$=i.addLocationDataFn(o[a-2],o[a])([].concat(s[a-2],s[a]));break;case 138:this.$=i.addLocationDataFn(o[a-1],o[a])(new i.Try(s[a]));break;case 139:this.$=i.addLocationDataFn(o[a-2],o[a])(new i.Try(s[a-1],s[a][0],s[a][1]));break;case 140:this.$=i.addLocationDataFn(o[a-3],o[a])(new i.Try(s[a-2],null,null,s[a]));break;case 141:this.$=i.addLocationDataFn(o[a-4],o[a])(new i.Try(s[a-3],s[a-2][0],s[a-2][1],s[a]));break;case 142:this.$=i.addLocationDataFn(o[a-2],o[a])([s[a-1],s[a]]);break;case 143:this.$=i.addLocationDataFn(o[a-2],o[a])([i.addLocationDataFn(o[a-1])(new i.Value(s[a-1])),s[a]]);break;case 144:this.$=i.addLocationDataFn(o[a-1],o[a])([null,s[a]]);break;case 145:this.$=i.addLocationDataFn(o[a-1],o[a])(new i.Throw(s[a]));break;case 147:this.$=i.addLocationDataFn(o[a-4],o[a])(new i.Parens(s[a-2]));break;case 148:this.$=i.addLocationDataFn(o[a-1],o[a])(new i.While(s[a]));break;case 149:this.$=i.addLocationDataFn(o[a-3],o[a])(new i.While(s[a-2],{guard:s[a]}));break;case 150:this.$=i.addLocationDataFn(o[a-1],o[a])(new i.While(s[a],{invert:!0}));break;case 151:this.$=i.addLocationDataFn(o[a-3],o[a])(new i.While(s[a-2],{invert:!0,guard:s[a]}));break;case 152:this.$=i.addLocationDataFn(o[a-1],o[a])(s[a-1].addBody(s[a]));break;case 153:case 154:this.$=i.addLocationDataFn(o[a-1],o[a])(s[a].addBody(i.addLocationDataFn(o[a-1])(i.Block.wrap([s[a-1]]))));break;case 155:this.$=i.addLocationDataFn(o[a],o[a])(s[a]);break;case 156:this.$=i.addLocationDataFn(o[a-1],o[a])(new i.While(i.addLocationDataFn(o[a-1])(new i.Literal("true"))).addBody(s[a]));break;case 157:this.$=i.addLocationDataFn(o[a-1],o[a])(new i.While(i.addLocationDataFn(o[a-1])(new i.Literal("true"))).addBody(i.addLocationDataFn(o[a])(i.Block.wrap([s[a]]))));break;case 158:case 159:this.$=i.addLocationDataFn(o[a-1],o[a])(new i.For(s[a-1],s[a]));break;case 160:this.$=i.addLocationDataFn(o[a-1],o[a])(new i.For(s[a],s[a-1]));break;case 161:this.$=i.addLocationDataFn(o[a-1],o[a])({source:i.addLocationDataFn(o[a])(new i.Value(s[a]))});break;case 162:this.$=i.addLocationDataFn(o[a-3],o[a])({source:i.addLocationDataFn(o[a-2])(new i.Value(s[a-2])),step:s[a]});break;case 163:this.$=i.addLocationDataFn(o[a-1],o[a])(function(){return s[a].own=s[a-1].own,s[a].name=s[a-1][0],s[a].index=s[a-1][1],s[a]}());break;case 164:this.$=i.addLocationDataFn(o[a-1],o[a])(s[a]);break;case 165:this.$=i.addLocationDataFn(o[a-2],o[a])(function(){return s[a].own=!0,s[a]}());break;case 171:this.$=i.addLocationDataFn(o[a-2],o[a])([s[a-2],s[a]]);break;case 172:this.$=i.addLocationDataFn(o[a-1],o[a])({source:s[a]});break;case 173:this.$=i.addLocationDataFn(o[a-1],o[a])({source:s[a],object:!0});break;case 174:this.$=i.addLocationDataFn(o[a-3],o[a])({source:s[a-2],guard:s[a]});break;case 175:this.$=i.addLocationDataFn(o[a-3],o[a])({source:s[a-2],guard:s[a],object:!0});break;case 176:this.$=i.addLocationDataFn(o[a-3],o[a])({source:s[a-2],step:s[a]});break;case 177:this.$=i.addLocationDataFn(o[a-5],o[a])({source:s[a-4],guard:s[a-2],step:s[a]});break;case 178:this.$=i.addLocationDataFn(o[a-5],o[a])({source:s[a-4],step:s[a-2],guard:s[a]});break;case 179:this.$=i.addLocationDataFn(o[a-4],o[a])(new i.Switch(s[a-3],s[a-1]));break;case 180:this.$=i.addLocationDataFn(o[a-6],o[a])(new i.Switch(s[a-5],s[a-3],s[a-1]));break;case 181:this.$=i.addLocationDataFn(o[a-3],o[a])(new i.Switch(null,s[a-1]));break;case 182:this.$=i.addLocationDataFn(o[a-5],o[a])(new i.Switch(null,s[a-3],s[a-1]));break;case 184:this.$=i.addLocationDataFn(o[a-1],o[a])(s[a-1].concat(s[a]));break;case 185:this.$=i.addLocationDataFn(o[a-2],o[a])([[s[a-1],s[a]]]);break;case 186:this.$=i.addLocationDataFn(o[a-3],o[a])([[s[a-2],s[a-1]]]);break;case 187:this.$=i.addLocationDataFn(o[a-2],o[a])(new i.If(s[a-1],s[a],{type:s[a-2]}));break;case 188:this.$=i.addLocationDataFn(o[a-4],o[a])(s[a-4].addElse(i.addLocationDataFn(o[a-2],o[a])(new i.If(s[a-1],s[a],{type:s[a-2]}))));break;case 190:this.$=i.addLocationDataFn(o[a-2],o[a])(s[a-2].addElse(s[a]));break;case 191:case 192:this.$=i.addLocationDataFn(o[a-2],o[a])(new i.If(s[a],i.addLocationDataFn(o[a-2])(i.Block.wrap([s[a-2]])),{type:s[a-1],statement:!0}));break;case 193:case 194:case 197:case 198:this.$=i.addLocationDataFn(o[a-1],o[a])(new i.Op(s[a-1],s[a]));break;case 195:this.$=i.addLocationDataFn(o[a-1],o[a])(new i.Op("-",s[a]));break;case 196:this.$=i.addLocationDataFn(o[a-1],o[a])(new i.Op("+",s[a]));break;case 199:this.$=i.addLocationDataFn(o[a-2],o[a])(new i.Op(s[a-2].concat(s[a-1]),s[a]));break;case 200:this.$=i.addLocationDataFn(o[a-1],o[a])(new i.Op("--",s[a]));break;case 201:this.$=i.addLocationDataFn(o[a-1],o[a])(new i.Op("++",s[a]));break;case 202:this.$=i.addLocationDataFn(o[a-1],o[a])(new i.Op("--",s[a-1],null,!0));break;case 203:this.$=i.addLocationDataFn(o[a-1],o[a])(new i.Op("++",s[a-1],null,!0));break;case 204:this.$=i.addLocationDataFn(o[a-1],o[a])(new i.Existence(s[a-1]));break;case 205:this.$=i.addLocationDataFn(o[a-2],o[a])(new i.Op("+",s[a-2],s[a]));break;case 206:this.$=i.addLocationDataFn(o[a-2],o[a])(new i.Op("-",s[a-2],s[a]));break;case 207:case 208:case 209:case 210:case 211:this.$=i.addLocationDataFn(o[a-2],o[a])(new i.Op(s[a-1],s[a-2],s[a]));break;case 212:this.$=i.addLocationDataFn(o[a-2],o[a])(function(){return"!"===s[a-1].charAt(0)?new i.Op(s[a-1].slice(1),s[a-2],s[a]).invert():new i.Op(s[a-1],s[a-2],s[a])}());break;case 213:this.$=i.addLocationDataFn(o[a-2],o[a])(new i.Assign(s[a-2],s[a],s[a-1]));break;case 214:this.$=i.addLocationDataFn(o[a-4],o[a])(new i.Assign(s[a-4],s[a-1],s[a-3]));break;case 215:this.$=i.addLocationDataFn(o[a-3],o[a])(new i.Assign(s[a-3],s[a],s[a-2]));break;case 216:this.$=i.addLocationDataFn(o[a-2],o[a])(new i.Extends(s[a-2],s[a]))}},table:[{1:[2,1],3:1,4:2,5:3,7:4,8:5,9:18,10:19,11:n,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,27:62,28:i,29:49,30:r,31:72,32:s,33:o,35:51,36:a,37:c,39:22,40:l,41:h,42:u,43:p,44:d,45:21,50:63,51:f,52:m,53:g,56:28,57:v,58:y,64:47,65:48,67:36,69:23,70:24,71:25,82:b,85:k,89:w,94:T,95:C,96:E,102:F,106:N,107:L,109:39,110:x,112:S,113:40,114:D,115:41,116:R,118:69,125:A,130:37,131:I,133:_,134:O,135:$,136:j,137:M,139:B,140:V},{1:[3]},{1:[2,2],6:P},t(U,[2,3]),t(U,[2,6],{118:69,109:89,115:90,110:x,112:S,116:R,132:G,135:H,136:q,141:X,142:W,143:Y,144:K,145:z,146:J,147:Q}),t(U,[2,7],{118:69,109:92,115:93,110:x,112:S,116:R,132:Z}),t(et,[2,11],{87:94,68:95,76:101,72:tt,73:nt,74:it,75:rt,77:st,80:ot,90:at,91:ct}),t(et,[2,12],{76:101,87:104,68:105,72:tt,73:nt,74:it,75:rt,77:st,80:ot,90:at,91:ct}),t(et,[2,13]),t(et,[2,14]),t(et,[2,15]),t(et,[2,16]),t(et,[2,17]),t(et,[2,18]),t(et,[2,19]),t(et,[2,20]),t(et,[2,21]),t(et,[2,22]),t(et,[2,8]),t(et,[2,9]),t(et,[2,10]),t(lt,ht,{46:[1,106]}),t(lt,[2,80]),t(lt,[2,81]),t(lt,[2,82]),t(lt,[2,83]),t([1,6,25,26,34,38,55,60,63,72,73,74,75,77,79,80,84,90,92,97,99,108,110,111,112,116,117,132,135,136,141,142,143,144,145,146,147],[2,110],{88:107,91:ut}),t([6,25,55,60],pt,{54:109,61:110,62:111,27:113,50:114,64:115,65:116,28:i,63:dt,82:b,95:ft,96:mt}),{24:119,25:gt},{7:121,8:122,9:18,10:19,11:n,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,27:62,28:i,29:49,30:r,31:72,32:s,33:o,35:51,36:a,37:c,39:22,40:l,41:h,42:u,43:p,44:d,45:21,50:63,51:f,52:m,53:g,56:28,57:v,58:y,64:47,65:48,67:36,69:23,70:24,71:25,82:b,85:k,89:w,94:T,95:C,96:E,102:F,106:N,107:L,109:39,110:x,112:S,113:40,114:D,115:41,116:R,118:69,125:A,130:37,131:I,133:_,134:O,135:$,136:j,137:M,139:B,140:V},{7:123,8:122,9:18,10:19,11:n,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,27:62,28:i,29:49,30:r,31:72,32:s,33:o,35:51,36:a,37:c,39:22,40:l,41:h,42:u,43:p,44:d,45:21,50:63,51:f,52:m,53:g,56:28,57:v,58:y,64:47,65:48,67:36,69:23,70:24,71:25,82:b,85:k,89:w,94:T,95:C,96:E,102:F,106:N,107:L,109:39,110:x,112:S,113:40,114:D,115:41,116:R,118:69,125:A,130:37,131:I,133:_,134:O,135:$,136:j,137:M,139:B,140:V},{7:124,8:122,9:18,10:19,11:n,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,27:62,28:i,29:49,30:r,31:72,32:s,33:o,35:51,36:a,37:c,39:22,40:l,41:h,42:u,43:p,44:d,45:21,50:63,51:f,52:m,53:g,56:28,57:v,58:y,64:47,65:48,67:36,69:23,70:24,71:25,82:b,85:k,89:w,94:T,95:C,96:E,102:F,106:N,107:L,109:39,110:x,112:S,113:40,114:D,115:41,116:R,118:69,125:A,130:37,131:I,133:_,134:O,135:$,136:j,137:M,139:B,140:V},{7:125,8:122,9:18,10:19,11:n,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,27:62,28:i,29:49,30:r,31:72,32:s,33:o,35:51,36:a,37:c,39:22,40:l,41:h,42:u,43:p,44:d,45:21,50:63,51:f,52:m,53:g,56:28,57:v,58:y,64:47,65:48,67:36,69:23,70:24,71:25,82:b,85:k,89:w,94:T,95:C,96:E,102:F,106:N,107:L,109:39,110:x,112:S,113:40,114:D,115:41,116:R,118:69,125:A,130:37,131:I,133:_,134:O,135:$,136:j,137:M,139:B,140:V},{7:127,8:126,9:18,10:19,11:n,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,27:62,28:i,29:49,30:r,31:72,32:s,33:o,35:51,36:a,37:c,39:22,40:l,41:h,42:u,43:p,44:d,45:21,50:63,51:f,52:m,53:g,56:28,57:v,58:y,64:47,65:48,67:36,69:23,70:24,71:25,82:b,85:k,89:w,94:T,95:C,96:E,102:F,106:N,107:L,109:39,110:x,112:S,113:40,114:D,115:41,116:R,118:69,125:A,130:37,131:I,133:_,134:O,135:$,136:j,137:M,138:[1,128],139:B,140:V},{12:130,13:131,27:62,28:i,29:49,30:r,31:72,32:s,33:o,35:51,36:a,37:c,39:22,40:l,41:h,42:u,43:p,44:d,45:132,50:63,64:47,65:48,67:129,69:23,70:24,71:25,82:b,89:w,94:T,95:C,96:E,107:L},{12:130,13:131,27:62,28:i,29:49,30:r,31:72,32:s,33:o,35:51,36:a,37:c,39:22,40:l,41:h,42:u,43:p,44:d,45:132,50:63,64:47,65:48,67:133,69:23,70:24,71:25,82:b,89:w,94:T,95:C,96:E,107:L},t(vt,yt,{86:[1,137],139:[1,134],140:[1,135],148:[1,136]}),t(et,[2,189],{127:[1,138]}),{24:139,25:gt},{24:140,25:gt},t(et,[2,155]),{24:141,25:gt},{7:142,8:122,9:18,10:19,11:n,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,25:[1,143],27:62,28:i,29:49,30:r,31:72,32:s,33:o,35:51,36:a,37:c,39:22,40:l,41:h,42:u,43:p,44:d,45:21,50:63,51:f,52:m,53:g,56:28,57:v,58:y,64:47,65:48,67:36,69:23,70:24,71:25,82:b,85:k,89:w,94:T,95:C,96:E,102:F,106:N,107:L,109:39,110:x,112:S,113:40,114:D,115:41,116:R,118:69,125:A,130:37,131:I,133:_,134:O,135:$,136:j,137:M,139:B,140:V},t(bt,[2,100],{39:22,69:23,70:24,71:25,64:47,65:48,29:49,35:51,27:62,50:63,31:72,12:130,13:131,45:132,24:144,67:146,25:gt,28:i,30:r,32:s,33:o,36:a,37:c,40:l,41:h,42:u,43:p,44:d,82:b,86:[1,145],89:w,94:T,95:C,96:E,107:L}),{7:147,8:122,9:18,10:19,11:n,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,27:62,28:i,29:49,30:r,31:72,32:s,33:o,35:51,36:a,37:c,39:22,40:l,41:h,42:u,43:p,44:d,45:21,50:63,51:f,52:m,53:g,56:28,57:v,58:y,64:47,65:48,67:36,69:23,70:24,71:25,82:b,85:k,89:w,94:T,95:C,96:E,102:F,106:N,107:L,109:39,110:x,112:S,113:40,114:D,115:41,116:R,118:69,125:A,130:37,131:I,133:_,134:O,135:$,136:j,137:M,139:B,140:V},t([1,6,25,26,34,55,60,63,79,84,92,97,99,108,110,111,112,116,117,132,141,142,143,144,145,146,147],[2,50],{12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,9:18,10:19,45:21,39:22,69:23,70:24,71:25,56:28,67:36,130:37,109:39,113:40,115:41,64:47,65:48,29:49,35:51,27:62,50:63,118:69,31:72,8:122,7:148,11:n,28:i,30:r,32:s,33:o,36:a,37:c,40:l,41:h,42:u,43:p,44:d,51:f,52:m,53:g,57:v,58:y,82:b,85:k,89:w,94:T,95:C,96:E,102:F,106:N,107:L,114:D,125:A,131:I,133:_,134:O,135:$,136:j,137:M,139:B,140:V}),t(et,[2,51]),t(vt,[2,77]),t(vt,[2,78]),t(lt,[2,32]),t(lt,[2,33]),t(lt,[2,34]),t(lt,[2,35]),t(lt,[2,36]),t(lt,[2,37]),t(lt,[2,38]),{4:149,5:3,7:4,8:5,9:18,10:19,11:n,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,25:[1,150],27:62,28:i,29:49,30:r,31:72,32:s,33:o,35:51,36:a,37:c,39:22,40:l,41:h,42:u,43:p,44:d,45:21,50:63,51:f,52:m,53:g,56:28,57:v,58:y,64:47,65:48,67:36,69:23,70:24,71:25,82:b,85:k,89:w,94:T,95:C,96:E,102:F,106:N,107:L,109:39,110:x,112:S,113:40,114:D,115:41,116:R,118:69,125:A,130:37,131:I,133:_,134:O,135:$,136:j,137:M,139:B,140:V},{7:151,8:122,9:18,10:19,11:n,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,25:kt,27:62,28:i,29:49,30:r,31:72,32:s,33:o,35:51,36:a,37:c,39:22,40:l,41:h,42:u,43:p,44:d,45:21,50:63,51:f,52:m,53:g,56:28,57:v,58:y,63:wt,64:47,65:48,66:156,67:36,69:23,70:24,71:25,82:b,85:k,89:w,93:153,94:T,95:C,96:E,97:Tt,100:154,102:F,106:N,107:L,109:39,110:x,112:S,113:40,114:D,115:41,116:R,118:69,125:A,130:37,131:I,133:_,134:O,135:$,136:j,137:M,139:B,140:V},t(lt,[2,116]),t(lt,[2,117],{27:158,28:i}),{25:[2,54]},{25:[2,55]},t(Ct,[2,72]),t(Ct,[2,75]),{7:159,8:122,9:18,10:19,11:n,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,27:62,28:i,29:49,30:r,31:72,32:s,33:o,35:51,36:a,37:c,39:22,40:l,41:h,42:u,43:p,44:d,45:21,50:63,51:f,52:m,53:g,56:28,57:v,58:y,64:47,65:48,67:36,69:23,70:24,71:25,82:b,85:k,89:w,94:T,95:C,96:E,102:F,106:N,107:L,109:39,110:x,112:S,113:40,114:D,115:41,116:R,118:69,125:A,130:37,131:I,133:_,134:O,135:$,136:j,137:M,139:B,140:V},{7:160,8:122,9:18,10:19,11:n,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,27:62,28:i,29:49,30:r,31:72,32:s,33:o,35:51,36:a,37:c,39:22,40:l,41:h,42:u,43:p,44:d,45:21,50:63,51:f,52:m,53:g,56:28,57:v,58:y,64:47,65:48,67:36,69:23,70:24,71:25,82:b,85:k,89:w,94:T,95:C,96:E,102:F,106:N,107:L,109:39,110:x,112:S,113:40,114:D,115:41,116:R,118:69,125:A,130:37,131:I,133:_,134:O,135:$,136:j,137:M,139:B,140:V},{7:161,8:122,9:18,10:19,11:n,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,27:62,28:i,29:49,30:r,31:72,32:s,33:o,35:51,36:a,37:c,39:22,40:l,41:h,42:u,43:p,44:d,45:21,50:63,51:f,52:m,53:g,56:28,57:v,58:y,64:47,65:48,67:36,69:23,70:24,71:25,82:b,85:k,89:w,94:T,95:C,96:E,102:F,106:N,107:L,109:39,110:x,112:S,113:40,114:D,115:41,116:R,118:69,125:A,130:37,131:I,133:_,134:O,135:$,136:j,137:M,139:B,140:V},{7:163,8:122,9:18,10:19,11:n,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,24:162,25:gt,27:62,28:i,29:49,30:r,31:72,32:s,33:o,35:51,36:a,37:c,39:22,40:l,41:h,42:u,43:p,44:d,45:21,50:63,51:f,52:m,53:g,56:28,57:v,58:y,64:47,65:48,67:36,69:23,70:24,71:25,82:b,85:k,89:w,94:T,95:C,96:E,102:F,106:N,107:L,109:39,110:x,112:S,113:40,114:D,115:41,116:R,118:69,125:A,130:37,131:I,133:_,134:O,135:$,136:j,137:M,139:B,140:V},{27:168,28:i,50:169,64:170,65:171,70:164,82:b,95:ft,96:E,120:165,121:[1,166],122:167},{119:172,123:[1,173],124:[1,174]},t([6,25,60,84],Et,{31:72,83:175,47:176,48:177,10:178,27:179,29:180,50:181,28:i,30:r,32:s,33:o,52:m,95:ft}),t(Ft,[2,26]),t(Ft,[2,27]),t(lt,[2,30]),{12:130,13:182,27:62,28:i,29:49,30:r,31:72,32:s,33:o,35:51,36:a,37:c,39:22,40:l,41:h,42:u,43:p,44:d,45:132,50:63,64:47,65:48,67:183,69:23,70:24,71:25,82:b,89:w,94:T,95:C,96:E,107:L},t(Nt,[2,25]),t(Ft,[2,28]),{4:184,5:3,7:4,8:5,9:18,10:19,11:n,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,27:62,28:i,29:49,30:r,31:72,32:s,33:o,35:51,36:a,37:c,39:22,40:l,41:h,42:u,43:p,44:d,45:21,50:63,51:f,52:m,53:g,56:28,57:v,58:y,64:47,65:48,67:36,69:23,70:24,71:25,82:b,85:k,89:w,94:T,95:C,96:E,102:F,106:N,107:L,109:39,110:x,112:S,113:40,114:D,115:41,116:R,118:69,125:A,130:37,131:I,133:_,134:O,135:$,136:j,137:M,139:B,140:V},t(U,[2,5],{7:4,8:5,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,9:18,10:19,45:21,39:22,69:23,70:24,71:25,56:28,67:36,130:37,109:39,113:40,115:41,64:47,65:48,29:49,35:51,27:62,50:63,118:69,31:72,5:185,11:n,28:i,30:r,32:s,33:o,36:a,37:c,40:l,41:h,42:u,43:p,44:d,51:f,52:m,53:g,57:v,58:y,82:b,85:k,89:w,94:T,95:C,96:E,102:F,106:N,107:L,110:x,112:S,114:D,116:R,125:A,131:I,133:_,134:O,135:$,136:j,137:M,139:B,140:V}),t(et,[2,204]),{7:186,8:122,9:18,10:19,11:n,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,27:62,28:i,29:49,30:r,31:72,32:s,33:o,35:51,36:a,37:c,39:22,40:l,41:h,42:u,43:p,44:d,45:21,50:63,51:f,52:m,53:g,56:28,57:v,58:y,64:47,65:48,67:36,69:23,70:24,71:25,82:b,85:k,89:w,94:T,95:C,96:E,102:F,106:N,107:L,109:39,110:x,112:S,113:40,114:D,115:41,116:R,118:69,125:A,130:37,131:I,133:_,134:O,135:$,136:j,137:M,139:B,140:V},{7:187,8:122,9:18,10:19,11:n,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,27:62,28:i,29:49,30:r,31:72,32:s,33:o,35:51,36:a,37:c,39:22,40:l,41:h,42:u,43:p,44:d,45:21,50:63,51:f,52:m,53:g,56:28,57:v,58:y,64:47,65:48,67:36,69:23,70:24,71:25,82:b,85:k,89:w,94:T,95:C,96:E,102:F,106:N,107:L,109:39,110:x,112:S,113:40,114:D,115:41,116:R,118:69,125:A,130:37,131:I,133:_,134:O,135:$,136:j,137:M,139:B,140:V},{7:188,8:122,9:18,10:19,11:n,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,27:62,28:i,29:49,30:r,31:72,32:s,33:o,35:51,36:a,37:c,39:22,40:l,41:h,42:u,43:p,44:d,45:21,50:63,51:f,52:m,53:g,56:28,57:v,58:y,64:47,65:48,67:36,69:23,70:24,71:25,82:b,85:k,89:w,94:T,95:C,96:E,102:F,106:N,107:L,109:39,110:x,112:S,113:40,114:D,115:41,116:R,118:69,125:A,130:37,131:I,133:_,134:O,135:$,136:j,137:M,139:B,140:V},{7:189,8:122,9:18,10:19,11:n,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,27:62,28:i,29:49,30:r,31:72,32:s,33:o,35:51,36:a,37:c,39:22,40:l,41:h,42:u,43:p,44:d,45:21,50:63,51:f,52:m,53:g,56:28,57:v,58:y,64:47,65:48,67:36,69:23,70:24,71:25,82:b,85:k,89:w,94:T,95:C,96:E,102:F,106:N,107:L,109:39,110:x,112:S,113:40,114:D,115:41,116:R,118:69,125:A,130:37,131:I,133:_,134:O,135:$,136:j,137:M,139:B,140:V},{7:190,8:122,9:18,10:19,11:n,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,27:62,28:i,29:49,30:r,31:72,32:s,33:o,35:51,36:a,37:c,39:22,40:l,41:h,42:u,43:p,44:d,45:21,50:63,51:f,52:m,53:g,56:28,57:v,58:y,64:47,65:48,67:36,69:23,70:24,71:25,82:b,85:k,89:w,94:T,95:C,96:E,102:F,106:N,107:L,109:39,110:x,112:S,113:40,114:D,115:41,116:R,118:69,125:A,130:37,131:I,133:_,134:O,135:$,136:j,137:M,139:B,140:V},{7:191,8:122,9:18,10:19,11:n,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,27:62,28:i,29:49,30:r,31:72,32:s,33:o,35:51,36:a,37:c,39:22,40:l,41:h,42:u,43:p,44:d,45:21,50:63,51:f,52:m,53:g,56:28,57:v,58:y,64:47,65:48,67:36,69:23,70:24,71:25,82:b,85:k,89:w,94:T,95:C,96:E,102:F,106:N,107:L,109:39,110:x,112:S,113:40,114:D,115:41,116:R,118:69,125:A,130:37,131:I,133:_,134:O,135:$,136:j,137:M,139:B,140:V},{7:192,8:122,9:18,10:19,11:n,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,27:62,28:i,29:49,30:r,31:72,32:s,33:o,35:51,36:a,37:c,39:22,40:l,41:h,42:u,43:p,44:d,45:21,50:63,51:f,52:m,53:g,56:28,57:v,58:y,64:47,65:48,67:36,69:23,70:24,71:25,82:b,85:k,89:w,94:T,95:C,96:E,102:F,106:N,107:L,109:39,110:x,112:S,113:40,114:D,115:41,116:R,118:69,125:A,130:37,131:I,133:_,134:O,135:$,136:j,137:M,139:B,140:V},{7:193,8:122,9:18,10:19,11:n,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,27:62,28:i,29:49,30:r,31:72,32:s,33:o,35:51,36:a,37:c,39:22,40:l,41:h,42:u,43:p,44:d,45:21,50:63,51:f,52:m,53:g,56:28,57:v,58:y,64:47,65:48,67:36,69:23,70:24,71:25,82:b,85:k,89:w,94:T,95:C,96:E,102:F,106:N,107:L,109:39,110:x,112:S,113:40,114:D,115:41,116:R,118:69,125:A,130:37,131:I,133:_,134:O,135:$,136:j,137:M,139:B,140:V},{7:194,8:122,9:18,10:19,11:n,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,27:62,28:i,29:49,30:r,31:72,32:s,33:o,35:51,36:a,37:c,39:22,40:l,41:h,42:u,43:p,44:d,45:21,50:63,51:f,52:m,53:g,56:28,57:v,58:y,64:47,65:48,67:36,69:23,70:24,71:25,82:b,85:k,89:w,94:T,95:C,96:E,102:F,106:N,107:L,109:39,110:x,112:S,113:40,114:D,115:41,116:R,118:69,125:A,130:37,131:I,133:_,134:O,135:$,136:j,137:M,139:B,140:V},t(et,[2,154]),t(et,[2,159]),{7:195,8:122,9:18,10:19,11:n,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,27:62,28:i,29:49,30:r,31:72,32:s,33:o,35:51,36:a,37:c,39:22,40:l,41:h,42:u,43:p,44:d,45:21,50:63,51:f,52:m,53:g,56:28,57:v,58:y,64:47,65:48,67:36,69:23,70:24,71:25,82:b,85:k,89:w,94:T,95:C,96:E,102:F,106:N,107:L,109:39,110:x,112:S,113:40,114:D,115:41,116:R,118:69,125:A,130:37,131:I,133:_,134:O,135:$,136:j,137:M,139:B,140:V},t(et,[2,153]),t(et,[2,158]),{88:196,91:ut},t(Ct,[2,73]),{91:[2,113]},{27:197,28:i},{27:198,28:i},t(Ct,[2,88],{27:199,28:i}),{27:200,28:i},t(Ct,[2,89]),{7:202,8:122,9:18,10:19,11:n,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,27:62,28:i,29:49,30:r,31:72,32:s,33:o,35:51,36:a,37:c,39:22,40:l,41:h,42:u,43:p,44:d,45:21,50:63,51:f,52:m,53:g,56:28,57:v,58:y,63:Lt,64:47,65:48,67:36,69:23,70:24,71:25,78:201,81:203,82:b,85:k,89:w,94:T,95:C,96:E,98:204,99:xt,102:F,106:N,107:L,109:39,110:x,112:S,113:40,114:D,115:41,116:R,118:69,125:A,130:37,131:I,133:_,134:O,135:$,136:j,137:M,139:B,140:V},{76:207,77:st,80:ot},{88:208,91:ut},t(Ct,[2,74]),{6:[1,210],7:209,8:122,9:18,10:19,11:n,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,25:[1,211],27:62,28:i,29:49,30:r,31:72,32:s,33:o,35:51,36:a,37:c,39:22,40:l,41:h,42:u,43:p,44:d,45:21,50:63,51:f,52:m,53:g,56:28,57:v,58:y,64:47,65:48,67:36,69:23,70:24,71:25,82:b,85:k,89:w,94:T,95:C,96:E,102:F,106:N,107:L,109:39,110:x,112:S,113:40,114:D,115:41,116:R,118:69,125:A,130:37,131:I,133:_,134:O,135:$,136:j,137:M,139:B,140:V},t(St,[2,111]),{7:214,8:122,9:18,10:19,11:n,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,25:kt,27:62,28:i,29:49,30:r,31:72,32:s,33:o,35:51,36:a,37:c,39:22,40:l,41:h,42:u,43:p,44:d,45:21,50:63,51:f,52:m,53:g,56:28,57:v,58:y,63:wt,64:47,65:48,66:156,67:36,69:23,70:24,71:25,82:b,85:k,89:w,92:[1,212],93:213,94:T,95:C,96:E,100:154,102:F,106:N,107:L,109:39,110:x,112:S,113:40,114:D,115:41,116:R,118:69,125:A,130:37,131:I,133:_,134:O,135:$,136:j,137:M,139:B,140:V},t([6,25],Dt,{59:217,55:[1,215],60:Rt}),t(At,[2,59]),t(At,[2,63],{46:[1,219],63:[1,218]}),t(At,[2,66]),t(It,[2,67]),t(It,[2,68]),t(It,[2,69]),t(It,[2,70]),{27:158,28:i},{7:214,8:122,9:18,10:19,11:n,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,25:kt,27:62,28:i,29:49,30:r,31:72,32:s,33:o,35:51,36:a,37:c,39:22,40:l,41:h,42:u,43:p,44:d,45:21,50:63,51:f,52:m,53:g,56:28,57:v,58:y,63:wt,64:47,65:48,66:156,67:36,69:23,70:24,71:25,82:b,85:k,89:w,93:153,94:T,95:C,96:E,97:Tt,100:154,102:F,106:N,107:L,109:39,110:x,112:S,113:40,114:D,115:41,116:R,118:69,125:A,130:37,131:I,133:_,134:O,135:$,136:j,137:M,139:B,140:V},t(et,[2,53]),{4:221,5:3,7:4,8:5,9:18,10:19,11:n,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,26:[1,220],27:62,28:i,29:49,30:r,31:72,32:s,33:o,35:51,36:a,37:c,39:22,40:l,41:h,42:u,43:p,44:d,45:21,50:63,51:f,52:m,53:g,56:28,57:v,58:y,64:47,65:48,67:36,69:23,70:24,71:25,82:b,85:k,89:w,94:T,95:C,96:E,102:F,106:N,107:L,109:39,110:x,112:S,113:40,114:D,115:41,116:R,118:69,125:A,130:37,131:I,133:_,134:O,135:$,136:j,137:M,139:B,140:V},t([1,6,25,26,34,55,60,63,79,84,92,97,99,108,110,111,112,116,117,132,135,136,142,143,144,145,146,147],[2,193],{118:69,109:89,115:90,141:X}),{109:92,110:x,112:S,115:93,116:R,118:69,132:Z},t(_t,[2,194],{118:69,109:89,115:90,141:X,143:Y}),t(_t,[2,195],{118:69,109:89,115:90,141:X,143:Y}),t(_t,[2,196],{118:69,109:89,115:90,141:X,143:Y}),t(et,[2,197],{118:69,109:92,115:93}),t(Ot,[2,198],{118:69,109:89,115:90,135:H,136:q,141:X,142:W,143:Y,144:K,145:z,146:J,147:Q}),{7:222,8:122,9:18,10:19,11:n,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,27:62,28:i,29:49,30:r,31:72,32:s,33:o,35:51,36:a,37:c,39:22,40:l,41:h,42:u,43:p,44:d,45:21,50:63,51:f,52:m,53:g,56:28,57:v,58:y,64:47,65:48,67:36,69:23,70:24,71:25,82:b,85:k,89:w,94:T,95:C,96:E,102:F,106:N,107:L,109:39,110:x,112:S,113:40,114:D,115:41,116:R,118:69,125:A,130:37,131:I,133:_,134:O,135:$,136:j,137:M,139:B,140:V},t(et,[2,200],{72:yt,73:yt,74:yt,75:yt,77:yt,80:yt,90:yt,91:yt}),{68:95,72:tt,73:nt,74:it,75:rt,76:101,77:st,80:ot,87:94,90:at,91:ct},{68:105,72:tt,73:nt,74:it,75:rt,76:101,77:st,80:ot,87:104,90:at,91:ct},t($t,ht),t(et,[2,201],{72:yt,73:yt,74:yt,75:yt,77:yt,80:yt,90:yt,91:yt}),t(et,[2,202]),t(et,[2,203]),{6:[1,225],7:223,8:122,9:18,10:19,11:n,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,25:[1,224],27:62,28:i,29:49,30:r,31:72,32:s,33:o,35:51,36:a,37:c,39:22,40:l,41:h,42:u,43:p,44:d,45:21,50:63,51:f,52:m,53:g,56:28,57:v,58:y,64:47,65:48,67:36,69:23,70:24,71:25,82:b,85:k,89:w,94:T,95:C,96:E,102:F,106:N,107:L,109:39,110:x,112:S,113:40,114:D,115:41,116:R,118:69,125:A,130:37,131:I,133:_,134:O,135:$,136:j,137:M,139:B,140:V},{7:226,8:122,9:18,10:19,11:n,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,27:62,28:i,29:49,30:r,31:72,32:s,33:o,35:51,36:a,37:c,39:22,40:l,41:h,42:u,43:p,44:d,45:21,50:63,51:f,52:m,53:g,56:28,57:v,58:y,64:47,65:48,67:36,69:23,70:24,71:25,82:b,85:k,89:w,94:T,95:C,96:E,102:F,106:N,107:L,109:39,110:x,112:S,113:40,114:D,115:41,116:R,118:69,125:A,130:37,131:I,133:_,134:O,135:$,136:j,137:M,139:B,140:V},{24:227,25:gt,131:[1,228]},t(et,[2,138],{103:229,104:[1,230],105:[1,231]}),t(et,[2,152]),t(et,[2,160]),{25:[1,232],109:89,110:x,112:S,115:90,116:R,118:69,132:G,135:H,136:q,141:X,142:W,143:Y,144:K,145:z,146:J,147:Q},{126:233,128:234,129:jt},t(et,[2,101]),{7:236,8:122,9:18,10:19,11:n,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,27:62,28:i,29:49,30:r,31:72,32:s,33:o,35:51,36:a,37:c,39:22,40:l,41:h,42:u,43:p,44:d,45:21,50:63,51:f,52:m,53:g,56:28,57:v,58:y,64:47,65:48,67:36,69:23,70:24,71:25,82:b,85:k,89:w,94:T,95:C,96:E,102:F,106:N,107:L,109:39,110:x,112:S,113:40,114:D,115:41,116:R,118:69,125:A,130:37,131:I,133:_,134:O,135:$,136:j,137:M,139:B,140:V},t(bt,[2,104],{24:237,25:gt,72:yt,73:yt,74:yt,75:yt,77:yt,80:yt,90:yt,91:yt,86:[1,238]}),t(Ot,[2,145],{118:69,109:89,115:90,135:H,136:q,141:X,142:W,143:Y,144:K,145:z,146:J,147:Q}),t(Ot,[2,49],{118:69,109:89,115:90,135:H,136:q,141:X,142:W,143:Y,144:K,145:z,146:J,147:Q}),{6:P,108:[1,239]},{4:240,5:3,7:4,8:5,9:18,10:19,11:n,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,27:62,28:i,29:49,30:r,31:72,32:s,33:o,35:51,36:a,37:c,39:22,40:l,41:h,42:u,43:p,44:d,45:21,50:63,51:f,52:m,53:g,56:28,57:v,58:y,64:47,65:48,67:36,69:23,70:24,71:25,82:b,85:k,89:w,94:T,95:C,96:E,102:F,106:N,107:L,109:39,110:x,112:S,113:40,114:D,115:41,116:R,118:69,125:A,130:37,131:I,133:_,134:O,135:$,136:j,137:M,139:B,140:V},t([6,25,60,97],Mt,{118:69,109:89,115:90,98:241,63:[1,242],99:xt,110:x,112:S,116:R,132:G,135:H,136:q,141:X,142:W,143:Y,144:K,145:z,146:J,147:Q}),t(Bt,[2,119]),t([6,25,97],Dt,{59:243,60:Vt}),t(Pt,[2,128]),{7:214,8:122,9:18,10:19,11:n,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,25:kt,27:62,28:i,29:49,30:r,31:72,32:s,33:o,35:51,36:a,37:c,39:22,40:l,41:h,42:u,43:p,44:d,45:21,50:63,51:f,52:m,53:g,56:28,57:v,58:y,63:wt,64:47,65:48,66:156,67:36,69:23,70:24,71:25,82:b,85:k,89:w,93:245,94:T,95:C,96:E,100:154,102:F,106:N,107:L,109:39,110:x,112:S,113:40,114:D,115:41,116:R,118:69,125:A,130:37,131:I,133:_,134:O,135:$,136:j,137:M,139:B,140:V},t(Pt,[2,134]),t(Pt,[2,135]),t(Nt,[2,118]),{24:246,25:gt,109:89,110:x,112:S,115:90,116:R,118:69,132:G,135:H,136:q,141:X,142:W,143:Y,144:K,145:z,146:J,147:Q},t(Ut,[2,148],{118:69,109:89,115:90,110:x,111:[1,247],112:S,116:R,135:H,136:q,141:X,142:W,143:Y,144:K,145:z,146:J,147:Q}),t(Ut,[2,150],{118:69,109:89,115:90,110:x,111:[1,248],112:S,116:R,135:H,136:q,141:X,142:W,143:Y,144:K,145:z,146:J,147:Q}),t(et,[2,156]),t(Gt,[2,157],{118:69,109:89,115:90,110:x,112:S,116:R,135:H,136:q,141:X,142:W,143:Y,144:K,145:z,146:J,147:Q}),t([1,6,25,26,34,55,60,63,79,84,92,97,99,108,110,111,112,116,132,135,136,141,142,143,144,145,146,147],[2,161],{117:[1,249]}),t(Ht,[2,164]),{27:168,28:i,50:169,64:170,65:171,82:b,95:ft,96:mt,120:250,122:167},t(Ht,[2,170],{60:[1,251]}),t(qt,[2,166]),t(qt,[2,167]),t(qt,[2,168]),t(qt,[2,169]),t(et,[2,163]),{7:252,8:122,9:18,10:19,11:n,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,27:62,28:i,29:49,30:r,31:72,32:s,33:o,35:51,36:a,37:c,39:22,40:l,41:h,42:u,43:p,44:d,45:21,50:63,51:f,52:m,53:g,56:28,57:v,58:y,64:47,65:48,67:36,69:23,70:24,71:25,82:b,85:k,89:w,94:T,95:C,96:E,102:F,106:N,107:L,109:39,110:x,112:S,113:40,114:D,115:41,116:R,118:69,125:A,130:37,131:I,133:_,134:O,135:$,136:j,137:M,139:B,140:V},{7:253,8:122,9:18,10:19,11:n,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,27:62,28:i,29:49,30:r,31:72,32:s,33:o,35:51,36:a,37:c,39:22,40:l,41:h,42:u,43:p,44:d,45:21,50:63,51:f,52:m,53:g,56:28,57:v,58:y,64:47,65:48,67:36,69:23,70:24,71:25,82:b,85:k,89:w,94:T,95:C,96:E,102:F,106:N,107:L,109:39,110:x,112:S,113:40,114:D,115:41,116:R,118:69,125:A,130:37,131:I,133:_,134:O,135:$,136:j,137:M,139:B,140:V},t([6,25,84],Dt,{59:254,60:Xt}),t(Wt,[2,96]),t(Wt,[2,42],{49:[1,256]}),t(Wt,[2,45]),t(Yt,[2,46]),t(Yt,[2,47]),t(Yt,[2,48]),{38:[1,257],68:105,72:tt,73:nt,74:it,75:rt,76:101,77:st,80:ot,87:104,90:at,91:ct},t($t,yt),{6:P,34:[1,258]},t(U,[2,4]),t(Kt,[2,205],{118:69,109:89,115:90,141:X,142:W,143:Y}),t(Kt,[2,206],{118:69,109:89,115:90,141:X,142:W,143:Y}),t(_t,[2,207],{118:69,109:89,115:90,141:X,143:Y}),t(_t,[2,208],{118:69,109:89,115:90,141:X,143:Y}),t([1,6,25,26,34,55,60,63,79,84,92,97,99,108,110,111,112,116,117,132,144,145,146,147],[2,209],{118:69,109:89,115:90,135:H,136:q,141:X,142:W,143:Y}),t([1,6,25,26,34,55,60,63,79,84,92,97,99,108,110,111,112,116,117,132,145,146],[2,210],{118:69,109:89,115:90,135:H,136:q,141:X,142:W,143:Y,144:K,147:Q}),t([1,6,25,26,34,55,60,63,79,84,92,97,99,108,110,111,112,116,117,132,146],[2,211],{118:69,109:89,115:90,135:H,136:q,141:X,142:W,143:Y,144:K,145:z,147:Q}),t([1,6,25,26,34,55,60,63,79,84,92,97,99,108,110,111,112,116,117,132,145,146,147],[2,212],{118:69,109:89,115:90,135:H,136:q,141:X,142:W,143:Y,144:K}),t(Gt,[2,192],{118:69,109:89,115:90,110:x,112:S,116:R,135:H,136:q,141:X,142:W,143:Y,144:K,145:z,146:J,147:Q}),t(Gt,[2,191],{118:69,109:89,115:90,110:x,112:S,116:R,135:H,136:q,141:X,142:W,143:Y,144:K,145:z,146:J,147:Q}),t(St,[2,108]),t(Ct,[2,84]),t(Ct,[2,85]),t(Ct,[2,86]),t(Ct,[2,87]),{79:[1,259]},{63:Lt,79:[2,92],98:260,99:xt,109:89,110:x,112:S,115:90,116:R,118:69,132:G,135:H,136:q,141:X,142:W,143:Y,144:K,145:z,146:J,147:Q},{79:[2,93]},{7:261,8:122,9:18,10:19,11:n,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,27:62,28:i,29:49,30:r,31:72,32:s,33:o,35:51,36:a,37:c,39:22,40:l,41:h,42:u,43:p,44:d,45:21,50:63,51:f,52:m,53:g,56:28,57:v,58:y,64:47,65:48,67:36,69:23,70:24,71:25,79:[2,127],82:b,85:k,89:w,94:T,95:C,96:E,102:F,106:N,107:L,109:39,110:x,112:S,113:40,114:D,115:41,116:R,118:69,125:A,130:37,131:I,133:_,134:O,135:$,136:j,137:M,139:B,140:V},t(zt,[2,121]),t(zt,Jt),t(Ct,[2,91]),t(St,[2,109]),t(Ot,[2,39],{118:69,109:89,115:90,135:H,136:q,141:X,142:W,143:Y,144:K,145:z,146:J,147:Q}),{7:262,8:122,9:18,10:19,11:n,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,27:62,28:i,29:49,30:r,31:72,32:s,33:o,35:51,36:a,37:c,39:22,40:l,41:h,42:u,43:p,44:d,45:21,50:63,51:f,52:m,53:g,56:28,57:v,58:y,64:47,65:48,67:36,69:23,70:24,71:25,82:b,85:k,89:w,94:T,95:C,96:E,102:F,106:N,107:L,109:39,110:x,112:S,113:40,114:D,115:41,116:R,118:69,125:A,130:37,131:I,133:_,134:O,135:$,136:j,137:M,139:B,140:V},{7:263,8:122,9:18,10:19,11:n,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,27:62,28:i,29:49,30:r,31:72,32:s,33:o,35:51,36:a,37:c,39:22,40:l,41:h,42:u,43:p,44:d,45:21,50:63,51:f,52:m,53:g,56:28,57:v,58:y,64:47,65:48,67:36,69:23,70:24,71:25,82:b,85:k,89:w,94:T,95:C,96:E,102:F,106:N,107:L,109:39,110:x,112:S,113:40,114:D,115:41,116:R,118:69,125:A,130:37,131:I,133:_,134:O,135:$,136:j,137:M,139:B,140:V},t(St,[2,114]),t([6,25,92],Dt,{59:264,60:Vt}),t(Pt,Mt,{118:69,109:89,115:90,63:[1,265],110:x,112:S,116:R,132:G,135:H,136:q,141:X,142:W,143:Y,144:K,145:z,146:J,147:Q}),{56:266,57:v,58:y},t(Qt,Zt,{62:111,27:113,50:114,64:115,65:116,61:267,28:i,63:dt,82:b,95:ft,96:mt}),{6:en,25:tn},t(At,[2,64]),{7:270,8:122,9:18,10:19,11:n,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,27:62,28:i,29:49,30:r,31:72,32:s,33:o,35:51,36:a,37:c,39:22,40:l,41:h,42:u,43:p,44:d,45:21,50:63,51:f,52:m,53:g,56:28,57:v,58:y,64:47,65:48,67:36,69:23,70:24,71:25,82:b,85:k,89:w,94:T,95:C,96:E,102:F,106:N,107:L,109:39,110:x,112:S,113:40,114:D,115:41,116:R,118:69,125:A,130:37,131:I,133:_,134:O,135:$,136:j,137:M,139:B,140:V},t(nn,[2,23]),{6:P,26:[1,271]},t(Ot,[2,199],{118:69,109:89,115:90,135:H,136:q,141:X,142:W,143:Y,144:K,145:z,146:J,147:Q}),t(Ot,[2,213],{118:69,109:89,115:90,135:H,136:q,141:X,142:W,143:Y,144:K,145:z,146:J,147:Q}),{7:272,8:122,9:18,10:19,11:n,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,27:62,28:i,29:49,30:r,31:72,32:s,33:o,35:51,36:a,37:c,39:22,40:l,41:h,42:u,43:p,44:d,45:21,50:63,51:f,52:m,53:g,56:28,57:v,58:y,64:47,65:48,67:36,69:23,70:24,71:25,82:b,85:k,89:w,94:T,95:C,96:E,102:F,106:N,107:L,109:39,110:x,112:S,113:40,114:D,115:41,116:R,118:69,125:A,130:37,131:I,133:_,134:O,135:$,136:j,137:M,139:B,140:V},{7:273,8:122,9:18,10:19,11:n,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,27:62,28:i,29:49,30:r,31:72,32:s,33:o,35:51,36:a,37:c,39:22,40:l,41:h,42:u,43:p,44:d,45:21,50:63,51:f,52:m,53:g,56:28,57:v,58:y,64:47,65:48,67:36,69:23,70:24,71:25,82:b,85:k,89:w,94:T,95:C,96:E,102:F,106:N,107:L,109:39,110:x,112:S,113:40,114:D,115:41,116:R,118:69,125:A,130:37,131:I,133:_,134:O,135:$,136:j,137:M,139:B,140:V},t(Ot,[2,216],{118:69,109:89,115:90,135:H,136:q,141:X,142:W,143:Y,144:K,145:z,146:J,147:Q}),t(et,[2,190]),{7:274,8:122,9:18,10:19,11:n,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,27:62,28:i,29:49,30:r,31:72,32:s,33:o,35:51,36:a,37:c,39:22,40:l,41:h,42:u,43:p,44:d,45:21,50:63,51:f,52:m,53:g,56:28,57:v,58:y,64:47,65:48,67:36,69:23,70:24,71:25,82:b,85:k,89:w,94:T,95:C,96:E,102:F,106:N,107:L,109:39,110:x,112:S,113:40,114:D,115:41,116:R,118:69,125:A,130:37,131:I,133:_,134:O,135:$,136:j,137:M,139:B,140:V},t(et,[2,139],{104:[1,275]}),{24:276,25:gt},{24:279,25:gt,27:277,28:i,65:278,82:b},{126:280,128:234,129:jt},{26:[1,281],127:[1,282],128:283,129:jt},t(rn,[2,183]),{7:285,8:122,9:18,10:19,11:n,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,27:62,28:i,29:49,30:r,31:72,32:s,33:o,35:51,36:a,37:c,39:22,40:l,41:h,42:u,43:p,44:d,45:21,50:63,51:f,52:m,53:g,56:28,57:v,58:y,64:47,65:48,67:36,69:23,70:24,71:25,82:b,85:k,89:w,94:T,95:C,96:E,101:284,102:F,106:N,107:L,109:39,110:x,112:S,113:40,114:D,115:41,116:R,118:69,125:A,130:37,131:I,133:_,134:O,135:$,136:j,137:M,139:B,140:V},t(sn,[2,102],{118:69,109:89,115:90,24:286,25:gt,110:x,112:S,116:R,135:H,136:q,141:X,142:W,143:Y,144:K,145:z,146:J,147:Q}),t(et,[2,105]),{7:287,8:122,9:18,10:19,11:n,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,27:62,28:i,29:49,30:r,31:72,32:s,33:o,35:51,36:a,37:c,39:22,40:l,41:h,42:u,43:p,44:d,45:21,50:63,51:f,52:m,53:g,56:28,57:v,58:y,64:47,65:48,67:36,69:23,70:24,71:25,82:b,85:k,89:w,94:T,95:C,96:E,102:F,106:N,107:L,109:39,110:x,112:S,113:40,114:D,115:41,116:R,118:69,125:A,130:37,131:I,133:_,134:O,135:$,136:j,137:M,139:B,140:V},t(lt,[2,146]),{6:P,26:[1,288]},{7:289,8:122,9:18,10:19,11:n,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,27:62,28:i,29:49,30:r,31:72,32:s,33:o,35:51,36:a,37:c,39:22,40:l,41:h,42:u,43:p,44:d,45:21,50:63,51:f,52:m,53:g,56:28,57:v,58:y,64:47,65:48,67:36,69:23,70:24,71:25,82:b,85:k,89:w,94:T,95:C,96:E,102:F,106:N,107:L,109:39,110:x,112:S,113:40,114:D,115:41,116:R,118:69,125:A,130:37,131:I,133:_,134:O,135:$,136:j,137:M,139:B,140:V},t([11,28,30,32,33,36,37,40,41,42,43,44,51,52,53,57,58,82,85,89,94,95,96,102,106,107,110,112,114,116,125,131,133,134,135,136,137,139,140],Jt,{6:on,25:on,60:on,97:on}),{6:an,25:cn,97:[1,290]},t([6,25,26,92,97],Zt,{12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,9:18,10:19,45:21,39:22,69:23,70:24,71:25,56:28,67:36,130:37,109:39,113:40,115:41,64:47,65:48,29:49,35:51,27:62,50:63,118:69,31:72,8:122,66:156,7:214,100:293,11:n,28:i,30:r,32:s,33:o,36:a,37:c,40:l,41:h,42:u,43:p,44:d,51:f,52:m,53:g,57:v,58:y,63:wt,82:b,85:k,89:w,94:T,95:C,96:E,102:F,106:N,107:L,110:x,112:S,114:D,116:R,125:A,131:I,133:_,134:O,135:$,136:j,137:M,139:B,140:V}),t(Qt,Dt,{59:294,60:Vt}),t(ln,[2,187]),{7:295,8:122,9:18,10:19,11:n,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,27:62,28:i,29:49,30:r,31:72,32:s,33:o,35:51,36:a,37:c,39:22,40:l,41:h,42:u,43:p,44:d,45:21,50:63,51:f,52:m,53:g,56:28,57:v,58:y,64:47,65:48,67:36,69:23,70:24,71:25,82:b,85:k,89:w,94:T,95:C,96:E,102:F,106:N,107:L,109:39,110:x,112:S,113:40,114:D,115:41,116:R,118:69,125:A,130:37,131:I,133:_,134:O,135:$,136:j,137:M,139:B,140:V},{7:296,8:122,9:18,10:19,11:n,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,27:62,28:i,29:49,30:r,31:72,32:s,33:o,35:51,36:a,37:c,39:22,40:l,41:h,42:u,43:p,44:d,45:21,50:63,51:f,52:m,53:g,56:28,57:v,58:y,64:47,65:48,67:36,69:23,70:24,71:25,82:b,85:k,89:w,94:T,95:C,96:E,102:F,106:N,107:L,109:39,110:x,112:S,113:40,114:D,115:41,116:R,118:69,125:A,130:37,131:I,133:_,134:O,135:$,136:j,137:M,139:B,140:V},{7:297,8:122,9:18,10:19,11:n,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,27:62,28:i,29:49,30:r,31:72,32:s,33:o,35:51,36:a,37:c,39:22,40:l,41:h,42:u,43:p,44:d,45:21,50:63,51:f,52:m,53:g,56:28,57:v,58:y,64:47,65:48,67:36,69:23,70:24,71:25,82:b,85:k,89:w,94:T,95:C,96:E,102:F,106:N,107:L,109:39,110:x,112:S,113:40,114:D,115:41,116:R,118:69,125:A,130:37,131:I,133:_,134:O,135:$,136:j,137:M,139:B,140:V},t(Ht,[2,165]),{27:168,28:i,50:169,64:170,65:171,82:b,95:ft,96:mt,122:298},t([1,6,25,26,34,55,60,63,79,84,92,97,99,108,110,112,116,132],[2,172],{118:69,109:89,115:90,111:[1,299],117:[1,300],135:H,136:q,141:X,142:W,143:Y,144:K,145:z,146:J,147:Q}),t(hn,[2,173],{118:69,109:89,115:90,111:[1,301],135:H,136:q,141:X,142:W,143:Y,144:K,145:z,146:J,147:Q}),{6:un,25:pn,84:[1,302]},t([6,25,26,84],Zt,{31:72,48:177,10:178,27:179,29:180,50:181,47:305,28:i,30:r,32:s,33:o,52:m,95:ft}),{7:306,8:122,9:18,10:19,11:n,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,25:[1,307],27:62,28:i,29:49,30:r,31:72,32:s,33:o,35:51,36:a,37:c,39:22,40:l,41:h,42:u,43:p,44:d,45:21,50:63,51:f,52:m,53:g,56:28,57:v,58:y,64:47,65:48,67:36,69:23,70:24,71:25,82:b,85:k,89:w,94:T,95:C,96:E,102:F,106:N,107:L,109:39,110:x,112:S,113:40,114:D,115:41,116:R,118:69,125:A,130:37,131:I,133:_,134:O,135:$,136:j,137:M,139:B,140:V},t(lt,[2,31]),t(Ft,[2,29]),t(Ct,[2,90]),{7:308,8:122,9:18,10:19,11:n,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,27:62,28:i,29:49,30:r,31:72,32:s,33:o,35:51,36:a,37:c,39:22,40:l,41:h,42:u,43:p,44:d,45:21,50:63,51:f,52:m,53:g,56:28,57:v,58:y,64:47,65:48,67:36,69:23,70:24,71:25,79:[2,125],82:b,85:k,89:w,94:T,95:C,96:E,102:F,106:N,107:L,109:39,110:x,112:S,113:40,114:D,115:41,116:R,118:69,125:A,130:37,131:I,133:_,134:O,135:$,136:j,137:M,139:B,140:V},{79:[2,126],109:89,110:x,112:S,115:90,116:R,118:69,132:G,135:H,136:q,141:X,142:W,143:Y,144:K,145:z,146:J,147:Q},t(Ot,[2,40],{118:69,109:89,115:90,135:H,136:q,141:X,142:W,143:Y,144:K,145:z,146:J,147:Q}),{26:[1,309],109:89,110:x,112:S,115:90,116:R,118:69,132:G,135:H,136:q,141:X,142:W,143:Y,144:K,145:z,146:J,147:Q},{6:an,25:cn,92:[1,310]},t(Pt,on),{24:311,25:gt},t(At,[2,60]),{27:113,28:i,50:114,61:312,62:111,63:dt,64:115,65:116,82:b,95:ft,96:mt},t(dn,pt,{61:110,62:111,27:113,50:114,64:115,65:116,54:313,28:i,63:dt,82:b,95:ft,96:mt}),t(At,[2,65],{118:69,109:89,115:90,110:x,112:S,116:R,132:G,135:H,136:q,141:X,142:W,143:Y,144:K,145:z,146:J,147:Q}),t(nn,[2,24]),{26:[1,314],109:89,110:x,112:S,115:90,116:R,118:69,132:G,135:H,136:q,141:X,142:W,143:Y,144:K,145:z,146:J,147:Q},t(Ot,[2,215],{118:69,109:89,115:90,135:H,136:q,141:X,142:W,143:Y,144:K,145:z,146:J,147:Q}),{24:315,25:gt,109:89,110:x,112:S,115:90,116:R,118:69,132:G,135:H,136:q,141:X,142:W,143:Y,144:K,145:z,146:J,147:Q},{24:316,25:gt},t(et,[2,140]),{24:317,25:gt},{24:318,25:gt},t(fn,[2,144]),{26:[1,319],127:[1,320],128:283,129:jt},t(et,[2,181]),{24:321,25:gt},t(rn,[2,184]),{24:322,25:gt,60:[1,323]},t(mn,[2,136],{118:69,109:89,115:90,110:x,112:S,116:R,132:G,135:H,136:q,141:X,142:W,143:Y,144:K,145:z,146:J,147:Q}),t(et,[2,103]),t(sn,[2,106],{118:69,109:89,115:90,24:324,25:gt,110:x,112:S,116:R,135:H,136:q,141:X,142:W,143:Y,144:K,145:z,146:J,147:Q}),{108:[1,325]},{97:[1,326],109:89,110:x,112:S,115:90,116:R,118:69,132:G,135:H,136:q,141:X,142:W,143:Y,144:K,145:z,146:J,147:Q},t(Bt,[2,120]),{7:214,8:122,9:18,10:19,11:n,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,27:62,28:i,29:49,30:r,31:72,32:s,33:o,35:51,36:a,37:c,39:22,40:l,41:h,42:u,43:p,44:d,45:21,50:63,51:f,52:m,53:g,56:28,57:v,58:y,63:wt,64:47,65:48,66:156,67:36,69:23,70:24,71:25,82:b,85:k,89:w,94:T,95:C,96:E,100:327,102:F,106:N,107:L,109:39,110:x,112:S,113:40,114:D,115:41,116:R,118:69,125:A,130:37,131:I,133:_,134:O,135:$,136:j,137:M,139:B,140:V},{7:214,8:122,9:18,10:19,11:n,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,25:kt,27:62,28:i,29:49,30:r,31:72,32:s,33:o,35:51,36:a,37:c,39:22,40:l,41:h,42:u,43:p,44:d,45:21,50:63,51:f,52:m,53:g,56:28,57:v,58:y,63:wt,64:47,65:48,66:156,67:36,69:23,70:24,71:25,82:b,85:k,89:w,93:328,94:T,95:C,96:E,100:154,102:F,106:N,107:L,109:39,110:x,112:S,113:40,114:D,115:41,116:R,118:69,125:A,130:37,131:I,133:_,134:O,135:$,136:j,137:M,139:B,140:V},t(Pt,[2,129]),{6:an,25:cn,26:[1,329]},t(Gt,[2,149],{118:69,109:89,115:90,110:x,112:S,116:R,135:H,136:q,141:X,142:W,143:Y,144:K,145:z,146:J,147:Q}),t(Gt,[2,151],{118:69,109:89,115:90,110:x,112:S,116:R,135:H,136:q,141:X,142:W,143:Y,144:K,145:z,146:J,147:Q}),t(Gt,[2,162],{118:69,109:89,115:90,110:x,112:S,116:R,135:H,136:q,141:X,142:W,143:Y,144:K,145:z,146:J,147:Q}),t(Ht,[2,171]),{7:330,8:122,9:18,10:19,11:n,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,27:62,28:i,29:49,30:r,31:72,32:s,33:o,35:51,36:a,37:c,39:22,40:l,41:h,42:u,43:p,44:d,45:21,50:63,51:f,52:m,53:g,56:28,57:v,58:y,64:47,65:48,67:36,69:23,70:24,71:25,82:b,85:k,89:w,94:T,95:C,96:E,102:F,106:N,107:L,109:39,110:x,112:S,113:40,114:D,115:41,116:R,118:69,125:A,130:37,131:I,133:_,134:O,135:$,136:j,137:M,139:B,140:V},{7:331,8:122,9:18,10:19,11:n,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,27:62,28:i,29:49,30:r,31:72,32:s,33:o,35:51,36:a,37:c,39:22,40:l,41:h,42:u,43:p,44:d,45:21,50:63,51:f,52:m,53:g,56:28,57:v,58:y,64:47,65:48,67:36,69:23,70:24,71:25,82:b,85:k,89:w,94:T,95:C,96:E,102:F,106:N,107:L,109:39,110:x,112:S,113:40,114:D,115:41,116:R,118:69,125:A,130:37,131:I,133:_,134:O,135:$,136:j,137:M,139:B,140:V},{7:332,8:122,9:18,10:19,11:n,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,27:62,28:i,29:49,30:r,31:72,32:s,33:o,35:51,36:a,37:c,39:22,40:l,41:h,42:u,43:p,44:d,45:21,50:63,51:f,52:m,53:g,56:28,57:v,58:y,64:47,65:48,67:36,69:23,70:24,71:25,82:b,85:k,89:w,94:T,95:C,96:E,102:F,106:N,107:L,109:39,110:x,112:S,113:40,114:D,115:41,116:R,118:69,125:A,130:37,131:I,133:_,134:O,135:$,136:j,137:M,139:B,140:V},t(Bt,[2,94]),{10:178,27:179,28:i,29:180,30:r,31:72,32:s,33:o,47:333,48:177,50:181,52:m,95:ft},t(dn,Et,{31:72,47:176,48:177,10:178,27:179,29:180,50:181,83:334,28:i,30:r,32:s,33:o,52:m,95:ft}),t(Wt,[2,97]),t(Wt,[2,43],{118:69,109:89,115:90,110:x,112:S,116:R,132:G,135:H,136:q,141:X,142:W,143:Y,144:K,145:z,146:J,147:Q}),{7:335,8:122,9:18,10:19,11:n,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,27:62,28:i,29:49,30:r,31:72,32:s,33:o,35:51,36:a,37:c,39:22,40:l,41:h,42:u,43:p,44:d,45:21,50:63,51:f,52:m,53:g,56:28,57:v,58:y,64:47,65:48,67:36,69:23,70:24,71:25,82:b,85:k,89:w,94:T,95:C,96:E,102:F,106:N,107:L,109:39,110:x,112:S,113:40,114:D,115:41,116:R,118:69,125:A,130:37,131:I,133:_,134:O,135:$,136:j,137:M,139:B,140:V},{79:[2,124],109:89,110:x,112:S,115:90,116:R,118:69,132:G,135:H,136:q,141:X,142:W,143:Y,144:K,145:z,146:J,147:Q},t(et,[2,41]),t(St,[2,115]),t(et,[2,52]),t(At,[2,61]),t(Qt,Dt,{59:336,60:Rt}),t(et,[2,214]),t(ln,[2,188]),t(et,[2,141]),t(fn,[2,142]),t(fn,[2,143]),t(et,[2,179]),{24:337,25:gt},{26:[1,338]},t(rn,[2,185],{6:[1,339]}),{7:340,8:122,9:18,10:19,11:n,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,27:62,28:i,29:49,30:r,31:72,32:s,33:o,35:51,36:a,37:c,39:22,40:l,41:h,42:u,43:p,44:d,45:21,50:63,51:f,52:m,53:g,56:28,57:v,58:y,64:47,65:48,67:36,69:23,70:24,71:25,82:b,85:k,89:w,94:T,95:C,96:E,102:F,106:N,107:L,109:39,110:x,112:S,113:40,114:D,115:41,116:R,118:69,125:A,130:37,131:I,133:_,134:O,135:$,136:j,137:M,139:B,140:V},t(et,[2,107]),t(lt,[2,147]),t(lt,[2,123]),t(Pt,[2,130]),t(Qt,Dt,{59:341,60:Vt}),t(Pt,[2,131]),t([1,6,25,26,34,55,60,63,79,84,92,97,99,108,110,111,112,116,132],[2,174],{118:69,109:89,115:90,117:[1,342],135:H,136:q,141:X,142:W,143:Y,144:K,145:z,146:J,147:Q}),t(hn,[2,176],{118:69,109:89,115:90,111:[1,343],135:H,136:q,141:X,142:W,143:Y,144:K,145:z,146:J,147:Q}),t(Ot,[2,175],{118:69,109:89,115:90,135:H,136:q,141:X,142:W,143:Y,144:K,145:z,146:J,147:Q}),t(Wt,[2,98]),t(Qt,Dt,{59:344,60:Xt}),{26:[1,345],109:89,110:x,112:S,115:90,116:R,118:69,132:G,135:H,136:q,141:X,142:W,143:Y,144:K,145:z,146:J,147:Q},{6:en,25:tn,26:[1,346]},{26:[1,347]},t(et,[2,182]),t(rn,[2,186]),t(mn,[2,137],{118:69,109:89,115:90,110:x,112:S,116:R,132:G,135:H,136:q,141:X,142:W,143:Y,144:K,145:z,146:J,147:Q}),{6:an,25:cn,26:[1,348]},{7:349,8:122,9:18,10:19,11:n,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,27:62,28:i,29:49,30:r,31:72,32:s,33:o,35:51,36:a,37:c,39:22,40:l,41:h,42:u,43:p,44:d,45:21,50:63,51:f,52:m,53:g,56:28,57:v,58:y,64:47,65:48,67:36,69:23,70:24,71:25,82:b,85:k,89:w,94:T,95:C,96:E,102:F,106:N,107:L,109:39,110:x,112:S,113:40,114:D,115:41,116:R,118:69,125:A,130:37,131:I,133:_,134:O,135:$,136:j,137:M,139:B,140:V},{7:350,8:122,9:18,10:19,11:n,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,27:62,28:i,29:49,30:r,31:72,32:s,33:o,35:51,36:a,37:c,39:22,40:l,41:h,42:u,43:p,44:d,45:21,50:63,51:f,52:m,53:g,56:28,57:v,58:y,64:47,65:48,67:36,69:23,70:24,71:25,82:b,85:k,89:w,94:T,95:C,96:E,102:F,106:N,107:L,109:39,110:x,112:S,113:40,114:D,115:41,116:R,118:69,125:A,130:37,131:I,133:_,134:O,135:$,136:j,137:M,139:B,140:V},{6:un,25:pn,26:[1,351]},t(Wt,[2,44]),t(At,[2,62]),t(et,[2,180]),t(Pt,[2,132]),t(Ot,[2,177],{118:69,109:89,115:90,135:H,136:q,141:X,142:W,143:Y,144:K,145:z,146:J,147:Q}),t(Ot,[2,178],{118:69,109:89,115:90,135:H,136:q,141:X,142:W,143:Y,144:K,145:z,146:J,147:Q}),t(Wt,[2,99])],defaultActions:{60:[2,54],61:[2,55],96:[2,113],203:[2,93]},parseError:function(e,t){if(!t.recoverable)throw Error(e);
//         this.trace(e)},parse:function(e){function t(){var e;return e=f.lex()||p,"number"!=typeof e&&(e=n.symbols_[e]||e),e}var n=this,i=[0],r=[null],s=[],o=this.table,a="",c=0,l=0,h=0,u=2,p=1,d=s.slice.call(arguments,1),f=Object.create(this.lexer),m={yy:{}};for(var g in this.yy)Object.prototype.hasOwnProperty.call(this.yy,g)&&(m.yy[g]=this.yy[g]);f.setInput(e,m.yy),m.yy.lexer=f,m.yy.parser=this,f.yylloc===void 0&&(f.yylloc={});var v=f.yylloc;s.push(v);var y=f.options&&f.options.ranges;this.parseError="function"==typeof m.yy.parseError?m.yy.parseError:Object.getPrototypeOf(this).parseError;for(var b,k,w,T,C,E,F,N,L,x={};;){if(w=i[i.length-1],this.defaultActions[w]?T=this.defaultActions[w]:((null===b||b===void 0)&&(b=t()),T=o[w]&&o[w][b]),T===void 0||!T.length||!T[0]){var S="";L=[];for(E in o[w])this.terminals_[E]&&E>u&&L.push("'"+this.terminals_[E]+"'");S=f.showPosition?"Parse error on line "+(c+1)+":\n"+f.showPosition()+"\nExpecting "+L.join(", ")+", got '"+(this.terminals_[b]||b)+"'":"Parse error on line "+(c+1)+": Unexpected "+(b==p?"end of input":"'"+(this.terminals_[b]||b)+"'"),this.parseError(S,{text:f.match,token:this.terminals_[b]||b,line:f.yylineno,loc:v,expected:L})}if(T[0]instanceof Array&&T.length>1)throw Error("Parse Error: multiple actions possible at state: "+w+", token: "+b);switch(T[0]){case 1:i.push(b),r.push(f.yytext),s.push(f.yylloc),i.push(T[1]),b=null,k?(b=k,k=null):(l=f.yyleng,a=f.yytext,c=f.yylineno,v=f.yylloc,h>0&&h--);break;case 2:if(F=this.productions_[T[1]][1],x.$=r[r.length-F],x._$={first_line:s[s.length-(F||1)].first_line,last_line:s[s.length-1].last_line,first_column:s[s.length-(F||1)].first_column,last_column:s[s.length-1].last_column},y&&(x._$.range=[s[s.length-(F||1)].range[0],s[s.length-1].range[1]]),C=this.performAction.apply(x,[a,l,c,m.yy,T[1],r,s].concat(d)),C!==void 0)return C;F&&(i=i.slice(0,2*-1*F),r=r.slice(0,-1*F),s=s.slice(0,-1*F)),i.push(this.productions_[T[1]][0]),r.push(x.$),s.push(x._$),N=o[i[i.length-2]][i[i.length-1]],i.push(N);break;case 3:return!0}}return!0}};return e.prototype=gn,gn.Parser=e,new e}();return require!==void 0&&e!==void 0&&(e.parser=n,e.Parser=n.Parser,e.parse=function(){return n.parse.apply(n,arguments)},e.main=function(t){t[1]||(console.log("Usage: "+t[0]+" FILE"),process.exit(1));var n=require("fs").readFileSync(require("path").normalize(t[1]),"utf8");return e.parser.parse(n)},t!==void 0&&require.main===t&&e.main(process.argv.slice(1))),t.exports}(),require["./scope"]=function(){var e={},t={exports:e};return function(){var t,n=[].indexOf||function(e){for(var t=0,n=this.length;n>t;t++)if(t in this&&this[t]===e)return t;return-1};e.Scope=t=function(){function e(e,t,n,i){var r,s;this.parent=e,this.expressions=t,this.method=n,this.referencedVars=i,this.variables=[{name:"arguments",type:"arguments"}],this.positions={},this.parent||(this.utilities={}),this.root=null!=(r=null!=(s=this.parent)?s.root:void 0)?r:this}return e.prototype.add=function(e,t,n){return this.shared&&!n?this.parent.add(e,t,n):Object.prototype.hasOwnProperty.call(this.positions,e)?this.variables[this.positions[e]].type=t:this.positions[e]=this.variables.push({name:e,type:t})-1},e.prototype.namedMethod=function(){var e;return(null!=(e=this.method)?e.name:void 0)||!this.parent?this.method:this.parent.namedMethod()},e.prototype.find=function(e){return this.check(e)?!0:(this.add(e,"var"),!1)},e.prototype.parameter=function(e){return this.shared&&this.parent.check(e,!0)?void 0:this.add(e,"param")},e.prototype.check=function(e){var t;return!!(this.type(e)||(null!=(t=this.parent)?t.check(e):void 0))},e.prototype.temporary=function(e,t,n){return null==n&&(n=!1),n?(t+parseInt(e,36)).toString(36).replace(/\d/g,"a"):e+(t||"")},e.prototype.type=function(e){var t,n,i,r;for(i=this.variables,t=0,n=i.length;n>t;t++)if(r=i[t],r.name===e)return r.type;return null},e.prototype.freeVariable=function(e,t){var i,r,s;for(null==t&&(t={}),i=0;;){if(s=this.temporary(e,i,t.single),!(this.check(s)||n.call(this.root.referencedVars,s)>=0))break;i++}return(null!=(r=t.reserve)?r:!0)&&this.add(s,"var",!0),s},e.prototype.assign=function(e,t){return this.add(e,{value:t,assigned:!0},!0),this.hasAssignments=!0},e.prototype.hasDeclarations=function(){return!!this.declaredVariables().length},e.prototype.declaredVariables=function(){var e;return function(){var t,n,i,r;for(i=this.variables,r=[],t=0,n=i.length;n>t;t++)e=i[t],"var"===e.type&&r.push(e.name);return r}.call(this).sort()},e.prototype.assignedVariables=function(){var e,t,n,i,r;for(n=this.variables,i=[],e=0,t=n.length;t>e;e++)r=n[e],r.type.assigned&&i.push(r.name+" = "+r.type.value);return i},e}()}.call(this),t.exports}(),require["./nodes"]=function(){var e={},t={exports:e};return function(){var t,n,i,r,s,o,a,c,l,h,u,p,d,f,m,g,v,y,b,k,w,T,C,E,F,N,L,x,S,D,R,A,I,_,O,$,j,M,B,V,P,U,G,H,q,X,W,Y,K,z,J,Q,Z,et,tt,nt,it,rt,st,ot,at,ct,lt,ht,ut,pt,dt,ft,mt,gt,vt,yt,bt,kt=function(e,t){function n(){this.constructor=e}for(var i in t)wt.call(t,i)&&(e[i]=t[i]);return n.prototype=t.prototype,e.prototype=new n,e.__super__=t.prototype,e},wt={}.hasOwnProperty,Tt=[].indexOf||function(e){for(var t=0,n=this.length;n>t;t++)if(t in this&&this[t]===e)return t;return-1},Ct=[].slice;Error.stackTraceLimit=1/0,P=require("./scope").Scope,dt=require("./lexer"),$=dt.RESERVED,V=dt.STRICT_PROSCRIBED,ft=require("./helpers"),et=ft.compact,rt=ft.flatten,it=ft.extend,ht=ft.merge,tt=ft.del,gt=ft.starts,nt=ft.ends,mt=ft.some,Z=ft.addLocationDataFn,lt=ft.locationDataToString,vt=ft.throwSyntaxError,e.extend=it,e.addLocationDataFn=Z,Q=function(){return!0},D=function(){return!1},X=function(){return this},S=function(){return this.negated=!this.negated,this},e.CodeFragment=l=function(){function e(e,t){var n;this.code=""+t,this.locationData=null!=e?e.locationData:void 0,this.type=(null!=e?null!=(n=e.constructor)?n.name:void 0:void 0)||"unknown"}return e.prototype.toString=function(){return""+this.code+(this.locationData?": "+lt(this.locationData):"")},e}(),st=function(e){var t;return function(){var n,i,r;for(r=[],n=0,i=e.length;i>n;n++)t=e[n],r.push(t.code);return r}().join("")},e.Base=r=function(){function e(){}return e.prototype.compile=function(e,t){return st(this.compileToFragments(e,t))},e.prototype.compileToFragments=function(e,t){var n;return e=it({},e),t&&(e.level=t),n=this.unfoldSoak(e)||this,n.tab=e.indent,e.level!==L&&n.isStatement(e)?n.compileClosure(e):n.compileNode(e)},e.prototype.compileClosure=function(e){var n,i,r,a,l,h,u;return(a=this.jumps())&&a.error("cannot use a pure statement in an expression"),e.sharedScope=!0,r=new c([],s.wrap([this])),n=[],((i=this.contains(at))||this.contains(ct))&&(n=[new x("this")],i?(l="apply",n.push(new x("arguments"))):l="call",r=new z(r,[new t(new x(l))])),h=new o(r,n).compileNode(e),(r.isGenerator||(null!=(u=r.base)?u.isGenerator:void 0))&&(h.unshift(this.makeCode("(yield* ")),h.push(this.makeCode(")"))),h},e.prototype.cache=function(e,t,n){var r,s,o;return r=null!=n?n(this):this.isComplex(),r?(s=new x(e.scope.freeVariable("ref")),o=new i(s,this),t?[o.compileToFragments(e,t),[this.makeCode(s.value)]]:[o,s]):(s=t?this.compileToFragments(e,t):this,[s,s])},e.prototype.cacheToCodeFragments=function(e){return[st(e[0]),st(e[1])]},e.prototype.makeReturn=function(e){var t;return t=this.unwrapAll(),e?new o(new x(e+".push"),[t]):new M(t)},e.prototype.contains=function(e){var t;return t=void 0,this.traverseChildren(!1,function(n){return e(n)?(t=n,!1):void 0}),t},e.prototype.lastNonComment=function(e){var t;for(t=e.length;t--;)if(!(e[t]instanceof h))return e[t];return null},e.prototype.toString=function(e,t){var n;return null==e&&(e=""),null==t&&(t=this.constructor.name),n="\n"+e+t,this.soak&&(n+="?"),this.eachChild(function(t){return n+=t.toString(e+q)}),n},e.prototype.eachChild=function(e){var t,n,i,r,s,o,a,c;if(!this.children)return this;for(a=this.children,i=0,s=a.length;s>i;i++)if(t=a[i],this[t])for(c=rt([this[t]]),r=0,o=c.length;o>r;r++)if(n=c[r],e(n)===!1)return this;return this},e.prototype.traverseChildren=function(e,t){return this.eachChild(function(n){var i;return i=t(n),i!==!1?n.traverseChildren(e,t):void 0})},e.prototype.invert=function(){return new I("!",this)},e.prototype.unwrapAll=function(){var e;for(e=this;e!==(e=e.unwrap()););return e},e.prototype.children=[],e.prototype.isStatement=D,e.prototype.jumps=D,e.prototype.isComplex=Q,e.prototype.isChainable=D,e.prototype.isAssignable=D,e.prototype.unwrap=X,e.prototype.unfoldSoak=D,e.prototype.assigns=D,e.prototype.updateLocationDataIfMissing=function(e){return this.locationData?this:(this.locationData=e,this.eachChild(function(t){return t.updateLocationDataIfMissing(e)}))},e.prototype.error=function(e){return vt(e,this.locationData)},e.prototype.makeCode=function(e){return new l(this,e)},e.prototype.wrapInBraces=function(e){return[].concat(this.makeCode("("),e,this.makeCode(")"))},e.prototype.joinFragmentArrays=function(e,t){var n,i,r,s,o;for(n=[],r=s=0,o=e.length;o>s;r=++s)i=e[r],r&&n.push(this.makeCode(t)),n=n.concat(i);return n},e}(),e.Block=s=function(e){function t(e){this.expressions=et(rt(e||[]))}return kt(t,e),t.prototype.children=["expressions"],t.prototype.push=function(e){return this.expressions.push(e),this},t.prototype.pop=function(){return this.expressions.pop()},t.prototype.unshift=function(e){return this.expressions.unshift(e),this},t.prototype.unwrap=function(){return 1===this.expressions.length?this.expressions[0]:this},t.prototype.isEmpty=function(){return!this.expressions.length},t.prototype.isStatement=function(e){var t,n,i,r;for(r=this.expressions,n=0,i=r.length;i>n;n++)if(t=r[n],t.isStatement(e))return!0;return!1},t.prototype.jumps=function(e){var t,n,i,r,s;for(s=this.expressions,n=0,r=s.length;r>n;n++)if(t=s[n],i=t.jumps(e))return i},t.prototype.makeReturn=function(e){var t,n;for(n=this.expressions.length;n--;)if(t=this.expressions[n],!(t instanceof h)){this.expressions[n]=t.makeReturn(e),t instanceof M&&!t.expression&&this.expressions.splice(n,1);break}return this},t.prototype.compileToFragments=function(e,n){return null==e&&(e={}),e.scope?t.__super__.compileToFragments.call(this,e,n):this.compileRoot(e)},t.prototype.compileNode=function(e){var n,i,r,s,o,a,c,l,h;for(this.tab=e.indent,h=e.level===L,i=[],l=this.expressions,s=o=0,a=l.length;a>o;s=++o)c=l[s],c=c.unwrapAll(),c=c.unfoldSoak(e)||c,c instanceof t?i.push(c.compileNode(e)):h?(c.front=!0,r=c.compileToFragments(e),c.isStatement(e)||(r.unshift(this.makeCode(""+this.tab)),r.push(this.makeCode(";"))),i.push(r)):i.push(c.compileToFragments(e,E));return h?this.spaced?[].concat(this.joinFragmentArrays(i,"\n\n"),this.makeCode("\n")):this.joinFragmentArrays(i,"\n"):(n=i.length?this.joinFragmentArrays(i,", "):[this.makeCode("void 0")],i.length>1&&e.level>=E?this.wrapInBraces(n):n)},t.prototype.compileRoot=function(e){var t,n,i,r,s,o,a,c,l,u,p;for(e.indent=e.bare?"":q,e.level=L,this.spaced=!0,e.scope=new P(null,this,null,null!=(l=e.referencedVars)?l:[]),u=e.locals||[],r=0,s=u.length;s>r;r++)o=u[r],e.scope.parameter(o);return a=[],e.bare||(c=function(){var e,n,r,s;for(r=this.expressions,s=[],i=e=0,n=r.length;n>e&&(t=r[i],t.unwrap()instanceof h);i=++e)s.push(t);return s}.call(this),p=this.expressions.slice(c.length),this.expressions=c,c.length&&(a=this.compileNode(ht(e,{indent:""})),a.push(this.makeCode("\n"))),this.expressions=p),n=this.compileWithDeclarations(e),e.bare?n:[].concat(a,this.makeCode("(function() {\n"),n,this.makeCode("\n}).call(this);\n"))},t.prototype.compileWithDeclarations=function(e){var t,n,i,r,s,o,a,c,l,u,p,d,f,m;for(r=[],c=[],l=this.expressions,s=o=0,a=l.length;a>o&&(i=l[s],i=i.unwrap(),i instanceof h||i instanceof x);s=++o);return e=ht(e,{level:L}),s&&(d=this.expressions.splice(s,9e9),u=[this.spaced,!1],m=u[0],this.spaced=u[1],p=[this.compileNode(e),m],r=p[0],this.spaced=p[1],this.expressions=d),c=this.compileNode(e),f=e.scope,f.expressions===this&&(n=e.scope.hasDeclarations(),t=f.hasAssignments,n||t?(s&&r.push(this.makeCode("\n")),r.push(this.makeCode(this.tab+"var ")),n&&r.push(this.makeCode(f.declaredVariables().join(", "))),t&&(n&&r.push(this.makeCode(",\n"+(this.tab+q))),r.push(this.makeCode(f.assignedVariables().join(",\n"+(this.tab+q))))),r.push(this.makeCode(";\n"+(this.spaced?"\n":"")))):r.length&&c.length&&r.push(this.makeCode("\n"))),r.concat(c)},t.wrap=function(e){return 1===e.length&&e[0]instanceof t?e[0]:new t(e)},t}(r),e.Literal=x=function(e){function t(e){this.value=e}return kt(t,e),t.prototype.makeReturn=function(){return this.isStatement()?this:t.__super__.makeReturn.apply(this,arguments)},t.prototype.isAssignable=function(){return g.test(this.value)},t.prototype.isStatement=function(){var e;return"break"===(e=this.value)||"continue"===e||"debugger"===e},t.prototype.isComplex=D,t.prototype.assigns=function(e){return e===this.value},t.prototype.jumps=function(e){return"break"!==this.value||(null!=e?e.loop:void 0)||(null!=e?e.block:void 0)?"continue"!==this.value||(null!=e?e.loop:void 0)?void 0:this:this},t.prototype.compileNode=function(e){var t,n,i;return n="this"===this.value?(null!=(i=e.scope.method)?i.bound:void 0)?e.scope.method.context:this.value:this.value.reserved?'"'+this.value+'"':this.value,t=this.isStatement()?""+this.tab+n+";":n,[this.makeCode(t)]},t.prototype.toString=function(){return' "'+this.value+'"'},t}(r),e.Undefined=function(e){function t(){return t.__super__.constructor.apply(this,arguments)}return kt(t,e),t.prototype.isAssignable=D,t.prototype.isComplex=D,t.prototype.compileNode=function(e){return[this.makeCode(e.level>=T?"(void 0)":"void 0")]},t}(r),e.Null=function(e){function t(){return t.__super__.constructor.apply(this,arguments)}return kt(t,e),t.prototype.isAssignable=D,t.prototype.isComplex=D,t.prototype.compileNode=function(){return[this.makeCode("null")]},t}(r),e.Bool=function(e){function t(e){this.val=e}return kt(t,e),t.prototype.isAssignable=D,t.prototype.isComplex=D,t.prototype.compileNode=function(){return[this.makeCode(this.val)]},t}(r),e.Return=M=function(e){function t(e){this.expression=e}return kt(t,e),t.prototype.children=["expression"],t.prototype.isStatement=Q,t.prototype.makeReturn=X,t.prototype.jumps=X,t.prototype.compileToFragments=function(e,n){var i,r;return i=null!=(r=this.expression)?r.makeReturn():void 0,!i||i instanceof t?t.__super__.compileToFragments.call(this,e,n):i.compileToFragments(e,n)},t.prototype.compileNode=function(e){var t,n,i;return t=[],n=null!=(i=this.expression)?"function"==typeof i.isYieldReturn?i.isYieldReturn():void 0:void 0,n||t.push(this.makeCode(this.tab+("return"+(this.expression?" ":"")))),this.expression&&(t=t.concat(this.expression.compileToFragments(e,N))),n||t.push(this.makeCode(";")),t},t}(r),e.Value=z=function(e){function t(e,n,i){return!n&&e instanceof t?e:(this.base=e,this.properties=n||[],i&&(this[i]=!0),this)}return kt(t,e),t.prototype.children=["base","properties"],t.prototype.add=function(e){return this.properties=this.properties.concat(e),this},t.prototype.hasProperties=function(){return!!this.properties.length},t.prototype.bareLiteral=function(e){return!this.properties.length&&this.base instanceof e},t.prototype.isArray=function(){return this.bareLiteral(n)},t.prototype.isRange=function(){return this.bareLiteral(j)},t.prototype.isComplex=function(){return this.hasProperties()||this.base.isComplex()},t.prototype.isAssignable=function(){return this.hasProperties()||this.base.isAssignable()},t.prototype.isSimpleNumber=function(){return this.bareLiteral(x)&&B.test(this.base.value)},t.prototype.isString=function(){return this.bareLiteral(x)&&y.test(this.base.value)},t.prototype.isRegex=function(){return this.bareLiteral(x)&&v.test(this.base.value)},t.prototype.isAtomic=function(){var e,t,n,i;for(i=this.properties.concat(this.base),e=0,t=i.length;t>e;e++)if(n=i[e],n.soak||n instanceof o)return!1;return!0},t.prototype.isNotCallable=function(){return this.isSimpleNumber()||this.isString()||this.isRegex()||this.isArray()||this.isRange()||this.isSplice()||this.isObject()},t.prototype.isStatement=function(e){return!this.properties.length&&this.base.isStatement(e)},t.prototype.assigns=function(e){return!this.properties.length&&this.base.assigns(e)},t.prototype.jumps=function(e){return!this.properties.length&&this.base.jumps(e)},t.prototype.isObject=function(e){return this.properties.length?!1:this.base instanceof A&&(!e||this.base.generated)},t.prototype.isSplice=function(){var e,t;return t=this.properties,e=t[t.length-1],e instanceof U},t.prototype.looksStatic=function(e){var t;return this.base.value===e&&1===this.properties.length&&"prototype"!==(null!=(t=this.properties[0].name)?t.value:void 0)},t.prototype.unwrap=function(){return this.properties.length?this:this.base},t.prototype.cacheReference=function(e){var n,r,s,o,a;return a=this.properties,s=a[a.length-1],2>this.properties.length&&!this.base.isComplex()&&!(null!=s?s.isComplex():void 0)?[this,this]:(n=new t(this.base,this.properties.slice(0,-1)),n.isComplex()&&(r=new x(e.scope.freeVariable("base")),n=new t(new O(new i(r,n)))),s?(s.isComplex()&&(o=new x(e.scope.freeVariable("name")),s=new w(new i(o,s.index)),o=new w(o)),[n.add(s),new t(r||n.base,[o||s])]):[n,r])},t.prototype.compileNode=function(e){var t,n,i,r,s;for(this.base.front=this.front,s=this.properties,t=this.base.compileToFragments(e,s.length?T:null),(this.base instanceof O||s.length)&&B.test(st(t))&&t.push(this.makeCode(".")),n=0,i=s.length;i>n;n++)r=s[n],t.push.apply(t,r.compileToFragments(e));return t},t.prototype.unfoldSoak=function(e){return null!=this.unfoldedSoak?this.unfoldedSoak:this.unfoldedSoak=function(n){return function(){var r,s,o,a,c,l,h,p,d,f;if(o=n.base.unfoldSoak(e))return(p=o.body.properties).push.apply(p,n.properties),o;for(d=n.properties,s=a=0,c=d.length;c>a;s=++a)if(l=d[s],l.soak)return l.soak=!1,r=new t(n.base,n.properties.slice(0,s)),f=new t(n.base,n.properties.slice(s)),r.isComplex()&&(h=new x(e.scope.freeVariable("ref")),r=new O(new i(h,r)),f.base=h),new b(new u(r),f,{soak:!0});return!1}}(this)()},t}(r),e.Comment=h=function(e){function t(e){this.comment=e}return kt(t,e),t.prototype.isStatement=Q,t.prototype.makeReturn=X,t.prototype.compileNode=function(e,t){var n,i;return i=this.comment.replace(/^(\s*)# /gm,"$1 * "),n="/!*"+ut(i,this.tab)+(Tt.call(i,"\n")>=0?"\n"+this.tab:"")+" *!/",(t||e.level)===L&&(n=e.indent+n),[this.makeCode("\n"),this.makeCode(n)]},t}(r),e.Call=o=function(e){function n(e,t,n){this.args=null!=t?t:[],this.soak=n,this.isNew=!1,this.isSuper="super"===e,this.variable=this.isSuper?null:e,e instanceof z&&e.isNotCallable()&&e.error("literal is not a function")}return kt(n,e),n.prototype.children=["variable","args"],n.prototype.newInstance=function(){var e,t;return e=(null!=(t=this.variable)?t.base:void 0)||this.variable,e instanceof n&&!e.isNew?e.newInstance():this.isNew=!0,this},n.prototype.superReference=function(e){var n,r,s,o,a,c,l,h;return a=e.scope.namedMethod(),(null!=a?a.klass:void 0)?(o=a.klass,c=a.name,h=a.variable,o.isComplex()&&(s=new x(e.scope.parent.freeVariable("base")),r=new z(new O(new i(s,o))),h.base=r,h.properties.splice(0,o.properties.length)),(c.isComplex()||c instanceof w&&c.index.isAssignable())&&(l=new x(e.scope.parent.freeVariable("name")),c=new w(new i(l,c.index)),h.properties.pop(),h.properties.push(c)),n=[new t(new x("__super__"))],a["static"]&&n.push(new t(new x("constructor"))),n.push(null!=l?new w(l):c),new z(null!=s?s:o,n).compile(e)):(null!=a?a.ctor:void 0)?a.name+".__super__.constructor":this.error("cannot call super outside of an instance method.")},n.prototype.superThis=function(e){var t;return t=e.scope.method,t&&!t.klass&&t.context||"this"},n.prototype.unfoldSoak=function(e){var t,i,r,s,o,a,c,l,h;if(this.soak){if(this.variable){if(i=yt(e,this,"variable"))return i;c=new z(this.variable).cacheReference(e),s=c[0],h=c[1]}else s=new x(this.superReference(e)),h=new z(s);return h=new n(h,this.args),h.isNew=this.isNew,s=new x("typeof "+s.compile(e)+' === "function"'),new b(s,new z(h),{soak:!0})}for(t=this,a=[];;)if(t.variable instanceof n)a.push(t),t=t.variable;else{if(!(t.variable instanceof z))break;if(a.push(t),!((t=t.variable.base)instanceof n))break}for(l=a.reverse(),r=0,o=l.length;o>r;r++)t=l[r],i&&(t.variable instanceof n?t.variable=i:t.variable.base=i),i=yt(e,t,"variable");return i},n.prototype.compileNode=function(e){var t,n,i,r,s,o,a,c,l,h;if(null!=(l=this.variable)&&(l.front=this.front),r=G.compileSplattedArray(e,this.args,!0),r.length)return this.compileSplat(e,r);for(i=[],h=this.args,n=o=0,a=h.length;a>o;n=++o)t=h[n],n&&i.push(this.makeCode(", ")),i.push.apply(i,t.compileToFragments(e,E));return s=[],this.isSuper?(c=this.superReference(e)+(".call("+this.superThis(e)),i.length&&(c+=", "),s.push(this.makeCode(c))):(this.isNew&&s.push(this.makeCode("new ")),s.push.apply(s,this.variable.compileToFragments(e,T)),s.push(this.makeCode("("))),s.push.apply(s,i),s.push(this.makeCode(")")),s},n.prototype.compileSplat=function(e,t){var n,i,r,s,o,a;return this.isSuper?[].concat(this.makeCode(this.superReference(e)+".apply("+this.superThis(e)+", "),t,this.makeCode(")")):this.isNew?(s=this.tab+q,[].concat(this.makeCode("(function(func, args, ctor) {\n"+s+"ctor.prototype = func.prototype;\n"+s+"var child = new ctor, result = func.apply(child, args);\n"+s+"return Object(result) === result ? result : child;\n"+this.tab+"})("),this.variable.compileToFragments(e,E),this.makeCode(", "),t,this.makeCode(", function(){})"))):(n=[],i=new z(this.variable),(o=i.properties.pop())&&i.isComplex()?(a=e.scope.freeVariable("ref"),n=n.concat(this.makeCode("("+a+" = "),i.compileToFragments(e,E),this.makeCode(")"),o.compileToFragments(e))):(r=i.compileToFragments(e,T),B.test(st(r))&&(r=this.wrapInBraces(r)),o?(a=st(r),r.push.apply(r,o.compileToFragments(e))):a="null",n=n.concat(r)),n=n.concat(this.makeCode(".apply("+a+", "),t,this.makeCode(")")))},n}(r),e.Extends=d=function(e){function t(e,t){this.child=e,this.parent=t}return kt(t,e),t.prototype.children=["child","parent"],t.prototype.compileToFragments=function(e){return new o(new z(new x(bt("extend",e))),[this.child,this.parent]).compileToFragments(e)},t}(r),e.Access=t=function(e){function t(e,t){this.name=e,this.name.asKey=!0,this.soak="soak"===t}return kt(t,e),t.prototype.children=["name"],t.prototype.compileToFragments=function(e){var t;return t=this.name.compileToFragments(e),g.test(st(t))?t.unshift(this.makeCode(".")):(t.unshift(this.makeCode("[")),t.push(this.makeCode("]"))),t},t.prototype.isComplex=D,t}(r),e.Index=w=function(e){function t(e){this.index=e}return kt(t,e),t.prototype.children=["index"],t.prototype.compileToFragments=function(e){return[].concat(this.makeCode("["),this.index.compileToFragments(e,N),this.makeCode("]"))},t.prototype.isComplex=function(){return this.index.isComplex()},t}(r),e.Range=j=function(e){function t(e,t,n){this.from=e,this.to=t,this.exclusive="exclusive"===n,this.equals=this.exclusive?"":"="}return kt(t,e),t.prototype.children=["from","to"],t.prototype.compileVariables=function(e){var t,n,i,r,s,o;return e=ht(e,{top:!0}),t=tt(e,"isComplex"),n=this.cacheToCodeFragments(this.from.cache(e,E,t)),this.fromC=n[0],this.fromVar=n[1],i=this.cacheToCodeFragments(this.to.cache(e,E,t)),this.toC=i[0],this.toVar=i[1],(o=tt(e,"step"))&&(r=this.cacheToCodeFragments(o.cache(e,E,t)),this.step=r[0],this.stepVar=r[1]),s=[this.fromVar.match(R),this.toVar.match(R)],this.fromNum=s[0],this.toNum=s[1],this.stepVar?this.stepNum=this.stepVar.match(R):void 0},t.prototype.compileNode=function(e){var t,n,i,r,s,o,a,c,l,h,u,p,d,f;return this.fromVar||this.compileVariables(e),e.index?(a=this.fromNum&&this.toNum,s=tt(e,"index"),o=tt(e,"name"),l=o&&o!==s,f=s+" = "+this.fromC,this.toC!==this.toVar&&(f+=", "+this.toC),this.step!==this.stepVar&&(f+=", "+this.step),h=[s+" <"+this.equals,s+" >"+this.equals],c=h[0],r=h[1],n=this.stepNum?pt(this.stepNum[0])>0?c+" "+this.toVar:r+" "+this.toVar:a?(u=[pt(this.fromNum[0]),pt(this.toNum[0])],i=u[0],d=u[1],u,d>=i?c+" "+d:r+" "+d):(t=this.stepVar?this.stepVar+" > 0":this.fromVar+" <= "+this.toVar,t+" ? "+c+" "+this.toVar+" : "+r+" "+this.toVar),p=this.stepVar?s+" += "+this.stepVar:a?l?d>=i?"++"+s:"--"+s:d>=i?s+"++":s+"--":l?t+" ? ++"+s+" : --"+s:t+" ? "+s+"++ : "+s+"--",l&&(f=o+" = "+f),l&&(p=o+" = "+p),[this.makeCode(f+"; "+n+"; "+p)]):this.compileArray(e)},t.prototype.compileArray=function(e){var t,n,i,r,s,o,a,c,l,h,u,p,d;return this.fromNum&&this.toNum&&20>=Math.abs(this.fromNum-this.toNum)?(l=function(){p=[];for(var e=h=+this.fromNum,t=+this.toNum;t>=h?t>=e:e>=t;t>=h?e++:e--)p.push(e);return p}.apply(this),this.exclusive&&l.pop(),[this.makeCode("["+l.join(", ")+"]")]):(o=this.tab+q,s=e.scope.freeVariable("i",{single:!0}),u=e.scope.freeVariable("results"),c="\n"+o+u+" = [];",this.fromNum&&this.toNum?(e.index=s,n=st(this.compileNode(e))):(d=s+" = "+this.fromC+(this.toC!==this.toVar?", "+this.toC:""),i=this.fromVar+" <= "+this.toVar,n="var "+d+"; "+i+" ? "+s+" <"+this.equals+" "+this.toVar+" : "+s+" >"+this.equals+" "+this.toVar+"; "+i+" ? "+s+"++ : "+s+"--"),a="{ "+u+".push("+s+"); }\n"+o+"return "+u+";\n"+e.indent,r=function(e){return null!=e?e.contains(at):void 0},(r(this.from)||r(this.to))&&(t=", arguments"),[this.makeCode("(function() {"+c+"\n"+o+"for ("+n+")"+a+"}).apply(this"+(null!=t?t:"")+")")])},t}(r),e.Slice=U=function(e){function t(e){this.range=e,t.__super__.constructor.call(this)}return kt(t,e),t.prototype.children=["range"],t.prototype.compileNode=function(e){var t,n,i,r,s,o,a;return s=this.range,o=s.to,i=s.from,r=i&&i.compileToFragments(e,N)||[this.makeCode("0")],o&&(t=o.compileToFragments(e,N),n=st(t),(this.range.exclusive||-1!==+n)&&(a=", "+(this.range.exclusive?n:B.test(n)?""+(+n+1):(t=o.compileToFragments(e,T),"+"+st(t)+" + 1 || 9e9")))),[this.makeCode(".slice("+st(r)+(a||"")+")")]},t}(r),e.Obj=A=function(e){function n(e,t){this.generated=null!=t?t:!1,this.objects=this.properties=e||[]}return kt(n,e),n.prototype.children=["properties"],n.prototype.compileNode=function(e){var n,r,s,o,a,c,l,u,p,d,f,m,g,v,y,b,k,w,T,C,E;if(T=this.properties,this.generated)for(l=0,g=T.length;g>l;l++)b=T[l],b instanceof z&&b.error("cannot have an implicit value in an implicit object");for(r=p=0,v=T.length;v>p&&(w=T[r],!((w.variable||w).base instanceof O));r=++p);for(s=T.length>r,a=e.indent+=q,m=this.lastNonComment(this.properties),n=[],s&&(k=e.scope.freeVariable("obj"),n.push(this.makeCode("(\n"+a+k+" = "))),n.push(this.makeCode("{"+(0===T.length||0===r?"}":"\n"))),o=f=0,y=T.length;y>f;o=++f)w=T[o],o===r&&(0!==o&&n.push(this.makeCode("\n"+a+"}")),n.push(this.makeCode(",\n"))),u=o===T.length-1||o===r-1?"":w===m||w instanceof h?"\n":",\n",c=w instanceof h?"":a,s&&r>o&&(c+=q),w instanceof i&&w.variable instanceof z&&w.variable.hasProperties()&&w.variable.error("Invalid object key"),w instanceof z&&w["this"]&&(w=new i(w.properties[0].name,w,"object")),w instanceof h||(r>o?(w instanceof i||(w=new i(w,w,"object")),(w.variable.base||w.variable).asKey=!0):(w instanceof i?(d=w.variable,E=w.value):(C=w.base.cache(e),d=C[0],E=C[1]),w=new i(new z(new x(k),[new t(d)]),E))),c&&n.push(this.makeCode(c)),n.push.apply(n,w.compileToFragments(e,L)),u&&n.push(this.makeCode(u));return s?n.push(this.makeCode(",\n"+a+k+"\n"+this.tab+")")):0!==T.length&&n.push(this.makeCode("\n"+this.tab+"}")),this.front&&!s?this.wrapInBraces(n):n},n.prototype.assigns=function(e){var t,n,i,r;for(r=this.properties,t=0,n=r.length;n>t;t++)if(i=r[t],i.assigns(e))return!0;return!1},n}(r),e.Arr=n=function(e){function t(e){this.objects=e||[]}return kt(t,e),t.prototype.children=["objects"],t.prototype.compileNode=function(e){var t,n,i,r,s,o,a;if(!this.objects.length)return[this.makeCode("[]")];if(e.indent+=q,t=G.compileSplattedArray(e,this.objects),t.length)return t;for(t=[],n=function(){var t,n,i,r;for(i=this.objects,r=[],t=0,n=i.length;n>t;t++)a=i[t],r.push(a.compileToFragments(e,E));return r}.call(this),r=s=0,o=n.length;o>s;r=++s)i=n[r],r&&t.push(this.makeCode(", ")),t.push.apply(t,i);return st(t).indexOf("\n")>=0?(t.unshift(this.makeCode("[\n"+e.indent)),t.push(this.makeCode("\n"+this.tab+"]"))):(t.unshift(this.makeCode("[")),t.push(this.makeCode("]"))),t},t.prototype.assigns=function(e){var t,n,i,r;for(r=this.objects,t=0,n=r.length;n>t;t++)if(i=r[t],i.assigns(e))return!0;return!1},t}(r),e.Class=a=function(e){function n(e,t,n){this.variable=e,this.parent=t,this.body=null!=n?n:new s,this.boundFuncs=[],this.body.classBody=!0}return kt(n,e),n.prototype.children=["variable","parent","body"],n.prototype.determineName=function(){var e,n,i;return this.variable?(n=this.variable.properties,i=n[n.length-1],e=i?i instanceof t&&i.name.value:this.variable.base.value,Tt.call(V,e)>=0&&this.variable.error("class variable name may not be "+e),e&&(e=g.test(e)&&e)):null},n.prototype.setContext=function(e){return this.body.traverseChildren(!1,function(t){return t.classBody?!1:t instanceof x&&"this"===t.value?t.value=e:t instanceof c&&t.bound?t.context=e:void 0})},n.prototype.addBoundFunctions=function(e){var n,i,r,s,o;for(o=this.boundFuncs,i=0,r=o.length;r>i;i++)n=o[i],s=new z(new x("this"),[new t(n)]).compile(e),this.ctor.body.unshift(new x(s+" = "+bt("bind",e)+"("+s+", this)"))},n.prototype.addProperties=function(e,n,r){var s,o,a,l,h,u;return u=e.base.properties.slice(0),l=function(){var e;for(e=[];o=u.shift();)o instanceof i&&(a=o.variable.base,delete o.context,h=o.value,"constructor"===a.value?(this.ctor&&o.error("cannot define more than one constructor in a class"),h.bound&&o.error("cannot define a constructor as a bound function"),h instanceof c?o=this.ctor=h:(this.externalCtor=r.classScope.freeVariable("class"),o=new i(new x(this.externalCtor),h))):o.variable["this"]?h["static"]=!0:(s=a.isComplex()?new w(a):new t(a),o.variable=new z(new x(n),[new t(new x("prototype")),s]),h instanceof c&&h.bound&&(this.boundFuncs.push(a),h.bound=!1))),e.push(o);return e}.call(this),et(l)},n.prototype.walkBody=function(e,t){return this.traverseChildren(!1,function(r){return function(o){var a,c,l,h,u,p,d;if(a=!0,o instanceof n)return!1;if(o instanceof s){for(d=c=o.expressions,l=h=0,u=d.length;u>h;l=++h)p=d[l],p instanceof i&&p.variable.looksStatic(e)?p.value["static"]=!0:p instanceof z&&p.isObject(!0)&&(a=!1,c[l]=r.addProperties(p,e,t));o.expressions=c=rt(c)}return a&&!(o instanceof n)}}(this))},n.prototype.hoistDirectivePrologue=function(){var e,t,n;for(t=0,e=this.body.expressions;(n=e[t])&&n instanceof h||n instanceof z&&n.isString();)++t;return this.directives=e.splice(0,t)},n.prototype.ensureConstructor=function(e){return this.ctor||(this.ctor=new c,this.externalCtor?this.ctor.body.push(new x(this.externalCtor+".apply(this, arguments)")):this.parent&&this.ctor.body.push(new x(e+".__super__.constructor.apply(this, arguments)")),this.ctor.body.makeReturn(),this.body.expressions.unshift(this.ctor)),this.ctor.ctor=this.ctor.name=e,this.ctor.klass=null,this.ctor.noReturn=!0},n.prototype.compileNode=function(e){var t,n,r,a,l,h,u,p,f;return(a=this.body.jumps())&&a.error("Class bodies cannot contain pure statements"),(n=this.body.contains(at))&&n.error("Class bodies shouldn't reference arguments"),u=this.determineName()||"_Class",u.reserved&&(u="_"+u),h=new x(u),r=new c([],s.wrap([this.body])),t=[],e.classScope=r.makeScope(e.scope),this.hoistDirectivePrologue(),this.setContext(u),this.walkBody(u,e),this.ensureConstructor(u),this.addBoundFunctions(e),this.body.spaced=!0,this.body.expressions.push(h),this.parent&&(f=new x(e.classScope.freeVariable("superClass",{reserve:!1})),this.body.expressions.unshift(new d(h,f)),r.params.push(new _(f)),t.push(this.parent)),(p=this.body.expressions).unshift.apply(p,this.directives),l=new O(new o(r,t)),this.variable&&(l=new i(this.variable,l)),l.compileToFragments(e)},n}(r),e.Assign=i=function(e){function n(e,t,n,i){var r,s,o;this.variable=e,this.value=t,this.context=n,this.param=i&&i.param,this.subpattern=i&&i.subpattern,o=s=this.variable.unwrapAll().value,r=Tt.call(V,o)>=0,r&&"object"!==this.context&&this.variable.error('variable name may not be "'+s+'"')}return kt(n,e),n.prototype.children=["variable","value"],n.prototype.isStatement=function(e){return(null!=e?e.level:void 0)===L&&null!=this.context&&Tt.call(this.context,"?")>=0
// },n.prototype.assigns=function(e){return this["object"===this.context?"value":"variable"].assigns(e)},n.prototype.unfoldSoak=function(e){return yt(e,this,"variable")},n.prototype.compileNode=function(e){var t,n,i,r,s,o,a,l,h,u,p,d,f,m;if(i=this.variable instanceof z){if(this.variable.isArray()||this.variable.isObject())return this.compilePatternMatch(e);if(this.variable.isSplice())return this.compileSplice(e);if("||="===(l=this.context)||"&&="===l||"?="===l)return this.compileConditional(e);if("**="===(h=this.context)||"//="===h||"%%="===h)return this.compileSpecialMath(e)}return this.value instanceof c&&(this.value["static"]?(this.value.klass=this.variable.base,this.value.name=this.variable.properties[0],this.value.variable=this.variable):(null!=(u=this.variable.properties)?u.length:void 0)>=2&&(p=this.variable.properties,o=p.length>=3?Ct.call(p,0,r=p.length-2):(r=0,[]),a=p[r++],s=p[r++],"prototype"===(null!=(d=a.name)?d.value:void 0)&&(this.value.klass=new z(this.variable.base,o),this.value.name=s,this.value.variable=this.variable))),this.context||(m=this.variable.unwrapAll(),m.isAssignable()||this.variable.error('"'+this.variable.compile(e)+'" cannot be assigned'),("function"==typeof m.hasProperties?m.hasProperties():void 0)||(this.param?e.scope.add(m.value,"var"):e.scope.find(m.value))),f=this.value.compileToFragments(e,E),n=this.variable.compileToFragments(e,E),"object"===this.context?n.concat(this.makeCode(": "),f):(t=n.concat(this.makeCode(" "+(this.context||"=")+" "),f),E>=e.level?t:this.wrapInBraces(t))},n.prototype.compilePatternMatch=function(e){var i,r,s,o,a,c,l,h,u,d,f,m,v,y,b,k,T,C,N,S,D,R,A,I,_,j,M,B;if(I=e.level===L,j=this.value,y=this.variable.base.objects,!(b=y.length))return s=j.compileToFragments(e),e.level>=F?this.wrapInBraces(s):s;if(h=this.variable.isObject(),I&&1===b&&!((v=y[0])instanceof G))return v instanceof n?(T=v,C=T.variable,l=C.base,v=T.value):l=h?v["this"]?v.properties[0].name:v:new x(0),i=g.test(l.unwrap().value||0),j=new z(j),j.properties.push(new(i?t:w)(l)),N=v.unwrap().value,Tt.call($,N)>=0&&v.error("assignment to a reserved word: "+v.compile(e)),new n(v,j,null,{param:this.param}).compileToFragments(e,L);for(M=j.compileToFragments(e,E),B=st(M),r=[],o=!1,(!g.test(B)||this.variable.assigns(B))&&(r.push([this.makeCode((k=e.scope.freeVariable("ref"))+" = ")].concat(Ct.call(M))),M=[this.makeCode(k)],B=k),c=d=0,f=y.length;f>d;c=++d){if(v=y[c],l=c,h&&(v instanceof n?(S=v,D=S.variable,l=D.base,v=S.value):v.base instanceof O?(R=new z(v.unwrapAll()).cacheReference(e),v=R[0],l=R[1]):l=v["this"]?v.properties[0].name:v),!o&&v instanceof G)m=v.name.unwrap().value,v=v.unwrap(),_=b+" <= "+B+".length ? "+bt("slice",e)+".call("+B+", "+c,(A=b-c-1)?(u=e.scope.freeVariable("i",{single:!0}),_+=", "+u+" = "+B+".length - "+A+") : ("+u+" = "+c+", [])"):_+=") : []",_=new x(_),o=u+"++";else{if(!o&&v instanceof p){(A=b-c-1)&&(1===A?o=B+".length - 1":(u=e.scope.freeVariable("i",{single:!0}),_=new x(u+" = "+B+".length - "+A),o=u+"++",r.push(_.compileToFragments(e,E))));continue}m=v.unwrap().value,(v instanceof G||v instanceof p)&&v.error("multiple splats/expansions are disallowed in an assignment"),"number"==typeof l?(l=new x(o||l),i=!1):i=h&&g.test(l.unwrap().value||0),_=new z(new x(B),[new(i?t:w)(l)])}null!=m&&Tt.call($,m)>=0&&v.error("assignment to a reserved word: "+v.compile(e)),r.push(new n(v,_,null,{param:this.param,subpattern:!0}).compileToFragments(e,E))}return I||this.subpattern||r.push(M),a=this.joinFragmentArrays(r,", "),E>e.level?a:this.wrapInBraces(a)},n.prototype.compileConditional=function(e){var t,i,r,s;return r=this.variable.cacheReference(e),i=r[0],s=r[1],!i.properties.length&&i.base instanceof x&&"this"!==i.base.value&&!e.scope.check(i.base.value)&&this.variable.error('the variable "'+i.base.value+"\" can't be assigned with "+this.context+" because it has not been declared before"),Tt.call(this.context,"?")>=0?(e.isExistentialEquals=!0,new b(new u(i),s,{type:"if"}).addElse(new n(s,this.value,"=")).compileToFragments(e)):(t=new I(this.context.slice(0,-1),i,new n(s,this.value,"=")).compileToFragments(e),E>=e.level?t:this.wrapInBraces(t))},n.prototype.compileSpecialMath=function(e){var t,i,r;return i=this.variable.cacheReference(e),t=i[0],r=i[1],new n(t,new I(this.context.slice(0,-1),r,this.value)).compileToFragments(e)},n.prototype.compileSplice=function(e){var t,n,i,r,s,o,a,c,l,h,u,p;return a=this.variable.properties.pop().range,i=a.from,h=a.to,n=a.exclusive,o=this.variable.compile(e),i?(c=this.cacheToCodeFragments(i.cache(e,F)),r=c[0],s=c[1]):r=s="0",h?i instanceof z&&i.isSimpleNumber()&&h instanceof z&&h.isSimpleNumber()?(h=h.compile(e)-s,n||(h+=1)):(h=h.compile(e,T)+" - "+s,n||(h+=" + 1")):h="9e9",l=this.value.cache(e,E),u=l[0],p=l[1],t=[].concat(this.makeCode("[].splice.apply("+o+", ["+r+", "+h+"].concat("),u,this.makeCode(")), "),p),e.level>L?this.wrapInBraces(t):t},n}(r),e.Code=c=function(e){function t(e,t,n){this.params=e||[],this.body=t||new s,this.bound="boundfunc"===n,this.isGenerator=!!this.body.contains(function(e){var t;return e instanceof I&&("yield"===(t=e.operator)||"yield*"===t)})}return kt(t,e),t.prototype.children=["params","body"],t.prototype.isStatement=function(){return!!this.ctor},t.prototype.jumps=D,t.prototype.makeScope=function(e){return new P(e,this.body,this)},t.prototype.compileNode=function(e){var r,a,c,l,h,u,d,f,m,g,v,y,k,w,C,E,F,N,L,S,D,R,A,O,$,j,M,B,V,P,U,G,H;if(this.bound&&(null!=(A=e.scope.method)?A.bound:void 0)&&(this.context=e.scope.method.context),this.bound&&!this.context)return this.context="_this",H=new t([new _(new x(this.context))],new s([this])),a=new o(H,[new x("this")]),a.updateLocationDataIfMissing(this.locationData),a.compileNode(e);for(e.scope=tt(e,"classScope")||this.makeScope(e.scope),e.scope.shared=tt(e,"sharedScope"),e.indent+=q,delete e.bare,delete e.isExistentialEquals,L=[],l=[],O=this.params,u=0,m=O.length;m>u;u++)N=O[u],N instanceof p||e.scope.parameter(N.asReference(e));for($=this.params,d=0,g=$.length;g>d;d++)if(N=$[d],N.splat||N instanceof p){for(j=this.params,f=0,v=j.length;v>f;f++)F=j[f],F instanceof p||!F.name.value||e.scope.add(F.name.value,"var",!0);V=new i(new z(new n(function(){var t,n,i,r;for(i=this.params,r=[],n=0,t=i.length;t>n;n++)F=i[n],r.push(F.asReference(e));return r}.call(this))),new z(new x("arguments")));break}for(M=this.params,E=0,y=M.length;y>E;E++)N=M[E],N.isComplex()?(U=R=N.asReference(e),N.value&&(U=new I("?",R,N.value)),l.push(new i(new z(N.name),U,"=",{param:!0}))):(R=N,N.value&&(C=new x(R.name.value+" == null"),U=new i(new z(N.name),N.value,"="),l.push(new b(C,U)))),V||L.push(R);for(G=this.body.isEmpty(),V&&l.unshift(V),l.length&&(B=this.body.expressions).unshift.apply(B,l),h=S=0,k=L.length;k>S;h=++S)F=L[h],L[h]=F.compileToFragments(e),e.scope.parameter(st(L[h]));for(P=[],this.eachParamName(function(e,t){return Tt.call(P,e)>=0&&t.error("multiple parameters named "+e),P.push(e)}),G||this.noReturn||this.body.makeReturn(),c="function",this.isGenerator&&(c+="*"),this.ctor&&(c+=" "+this.name),c+="(",r=[this.makeCode(c)],h=D=0,w=L.length;w>D;h=++D)F=L[h],h&&r.push(this.makeCode(", ")),r.push.apply(r,F);return r.push(this.makeCode(") {")),this.body.isEmpty()||(r=r.concat(this.makeCode("\n"),this.body.compileWithDeclarations(e),this.makeCode("\n"+this.tab))),r.push(this.makeCode("}")),this.ctor?[this.makeCode(this.tab)].concat(Ct.call(r)):this.front||e.level>=T?this.wrapInBraces(r):r},t.prototype.eachParamName=function(e){var t,n,i,r,s;for(r=this.params,s=[],t=0,n=r.length;n>t;t++)i=r[t],s.push(i.eachName(e));return s},t.prototype.traverseChildren=function(e,n){return e?t.__super__.traverseChildren.call(this,e,n):void 0},t}(r),e.Param=_=function(e){function t(e,t,n){var i,r;this.name=e,this.value=t,this.splat=n,r=i=this.name.unwrapAll().value,Tt.call(V,r)>=0&&this.name.error('parameter name "'+i+'" is not allowed')}return kt(t,e),t.prototype.children=["name","value"],t.prototype.compileToFragments=function(e){return this.name.compileToFragments(e,E)},t.prototype.asReference=function(e){var t,n;return this.reference?this.reference:(n=this.name,n["this"]?(t=n.properties[0].name.value,t.reserved&&(t="_"+t),n=new x(e.scope.freeVariable(t))):n.isComplex()&&(n=new x(e.scope.freeVariable("arg"))),n=new z(n),this.splat&&(n=new G(n)),n.updateLocationDataIfMissing(this.locationData),this.reference=n)},t.prototype.isComplex=function(){return this.name.isComplex()},t.prototype.eachName=function(e,t){var n,r,s,o,a,c;if(null==t&&(t=this.name),n=function(t){return e("@"+t.properties[0].name.value,t)},t instanceof x)return e(t.value,t);if(t instanceof z)return n(t);for(c=t.objects,r=0,s=c.length;s>r;r++)a=c[r],a instanceof i?this.eachName(e,a.value.unwrap()):a instanceof G?(o=a.name.unwrap(),e(o.value,o)):a instanceof z?a.isArray()||a.isObject()?this.eachName(e,a.base):a["this"]?n(a):e(a.base.value,a.base):a instanceof p||a.error("illegal parameter "+a.compile())},t}(r),e.Splat=G=function(e){function t(e){this.name=e.compile?e:new x(e)}return kt(t,e),t.prototype.children=["name"],t.prototype.isAssignable=Q,t.prototype.assigns=function(e){return this.name.assigns(e)},t.prototype.compileToFragments=function(e){return this.name.compileToFragments(e)},t.prototype.unwrap=function(){return this.name},t.compileSplattedArray=function(e,n,i){var r,s,o,a,c,l,h,u,p,d,f;for(h=-1;(f=n[++h])&&!(f instanceof t););if(h>=n.length)return[];if(1===n.length)return f=n[0],c=f.compileToFragments(e,E),i?c:[].concat(f.makeCode(bt("slice",e)+".call("),c,f.makeCode(")"));for(r=n.slice(h),l=u=0,d=r.length;d>u;l=++u)f=r[l],o=f.compileToFragments(e,E),r[l]=f instanceof t?[].concat(f.makeCode(bt("slice",e)+".call("),o,f.makeCode(")")):[].concat(f.makeCode("["),o,f.makeCode("]"));return 0===h?(f=n[0],a=f.joinFragmentArrays(r.slice(1),", "),r[0].concat(f.makeCode(".concat("),a,f.makeCode(")"))):(s=function(){var t,i,r,s;for(r=n.slice(0,h),s=[],t=0,i=r.length;i>t;t++)f=r[t],s.push(f.compileToFragments(e,E));return s}(),s=n[0].joinFragmentArrays(s,", "),a=n[h].joinFragmentArrays(r,", "),p=n[n.length-1],[].concat(n[0].makeCode("["),s,n[h].makeCode("].concat("),a,p.makeCode(")")))},t}(r),e.Expansion=p=function(e){function t(){return t.__super__.constructor.apply(this,arguments)}return kt(t,e),t.prototype.isComplex=D,t.prototype.compileNode=function(){return this.error("Expansion must be used inside a destructuring assignment or parameter list")},t.prototype.asReference=function(){return this},t.prototype.eachName=function(){},t}(r),e.While=J=function(e){function t(e,t){this.condition=(null!=t?t.invert:void 0)?e.invert():e,this.guard=null!=t?t.guard:void 0}return kt(t,e),t.prototype.children=["condition","guard","body"],t.prototype.isStatement=Q,t.prototype.makeReturn=function(e){return e?t.__super__.makeReturn.apply(this,arguments):(this.returns=!this.jumps({loop:!0}),this)},t.prototype.addBody=function(e){return this.body=e,this},t.prototype.jumps=function(){var e,t,n,i,r;if(e=this.body.expressions,!e.length)return!1;for(t=0,i=e.length;i>t;t++)if(r=e[t],n=r.jumps({loop:!0}))return n;return!1},t.prototype.compileNode=function(e){var t,n,i,r;return e.indent+=q,r="",n=this.body,n.isEmpty()?n=this.makeCode(""):(this.returns&&(n.makeReturn(i=e.scope.freeVariable("results")),r=""+this.tab+i+" = [];\n"),this.guard&&(n.expressions.length>1?n.expressions.unshift(new b(new O(this.guard).invert(),new x("continue"))):this.guard&&(n=s.wrap([new b(this.guard,n)]))),n=[].concat(this.makeCode("\n"),n.compileToFragments(e,L),this.makeCode("\n"+this.tab))),t=[].concat(this.makeCode(r+this.tab+"while ("),this.condition.compileToFragments(e,N),this.makeCode(") {"),n,this.makeCode("}")),this.returns&&t.push(this.makeCode("\n"+this.tab+"return "+i+";")),t},t}(r),e.Op=I=function(e){function n(e,t,n,i){if("in"===e)return new k(t,n);if("do"===e)return this.generateDo(t);if("new"===e){if(t instanceof o&&!t["do"]&&!t.isNew)return t.newInstance();(t instanceof c&&t.bound||t["do"])&&(t=new O(t))}return this.operator=r[e]||e,this.first=t,this.second=n,this.flip=!!i,this}var r,s;return kt(n,e),r={"==":"===","!=":"!==",of:"in",yieldfrom:"yield*"},s={"!==":"===","===":"!=="},n.prototype.children=["first","second"],n.prototype.isSimpleNumber=D,n.prototype.isYield=function(){var e;return"yield"===(e=this.operator)||"yield*"===e},n.prototype.isYieldReturn=function(){return this.isYield()&&this.first instanceof M},n.prototype.isUnary=function(){return!this.second},n.prototype.isComplex=function(){var e;return!(this.isUnary()&&("+"===(e=this.operator)||"-"===e)&&this.first instanceof z&&this.first.isSimpleNumber())},n.prototype.isChainable=function(){var e;return"<"===(e=this.operator)||">"===e||">="===e||"<="===e||"==="===e||"!=="===e},n.prototype.invert=function(){var e,t,i,r,o;if(this.isChainable()&&this.first.isChainable()){for(e=!0,t=this;t&&t.operator;)e&&(e=t.operator in s),t=t.first;if(!e)return new O(this).invert();for(t=this;t&&t.operator;)t.invert=!t.invert,t.operator=s[t.operator],t=t.first;return this}return(r=s[this.operator])?(this.operator=r,this.first.unwrap()instanceof n&&this.first.invert(),this):this.second?new O(this).invert():"!"===this.operator&&(i=this.first.unwrap())instanceof n&&("!"===(o=i.operator)||"in"===o||"instanceof"===o)?i:new n("!",this)},n.prototype.unfoldSoak=function(e){var t;return("++"===(t=this.operator)||"--"===t||"delete"===t)&&yt(e,this,"first")},n.prototype.generateDo=function(e){var t,n,r,s,a,l,h,u;for(l=[],n=e instanceof i&&(h=e.value.unwrap())instanceof c?h:e,u=n.params||[],r=0,s=u.length;s>r;r++)a=u[r],a.value?(l.push(a.value),delete a.value):l.push(a);return t=new o(e,l),t["do"]=!0,t},n.prototype.compileNode=function(e){var t,n,i,r,s,o;if(n=this.isChainable()&&this.first.isChainable(),n||(this.first.front=this.front),"delete"===this.operator&&e.scope.check(this.first.unwrapAll().value)&&this.error("delete operand may not be argument or var"),("--"===(r=this.operator)||"++"===r)&&(s=this.first.unwrapAll().value,Tt.call(V,s)>=0)&&this.error('cannot increment/decrement "'+this.first.unwrapAll().value+'"'),this.isYield())return this.compileYield(e);if(this.isUnary())return this.compileUnary(e);if(n)return this.compileChain(e);switch(this.operator){case"?":return this.compileExistence(e);case"**":return this.compilePower(e);case"//":return this.compileFloorDivision(e);case"%%":return this.compileModulo(e);default:return i=this.first.compileToFragments(e,F),o=this.second.compileToFragments(e,F),t=[].concat(i,this.makeCode(" "+this.operator+" "),o),F>=e.level?t:this.wrapInBraces(t)}},n.prototype.compileChain=function(e){var t,n,i,r;return i=this.first.second.cache(e),this.first.second=i[0],r=i[1],n=this.first.compileToFragments(e,F),t=n.concat(this.makeCode(" "+(this.invert?"&&":"||")+" "),r.compileToFragments(e),this.makeCode(" "+this.operator+" "),this.second.compileToFragments(e,F)),this.wrapInBraces(t)},n.prototype.compileExistence=function(e){var t,n;return this.first.isComplex()?(n=new x(e.scope.freeVariable("ref")),t=new O(new i(n,this.first))):(t=this.first,n=t),new b(new u(t),n,{type:"if"}).addElse(this.second).compileToFragments(e)},n.prototype.compileUnary=function(e){var t,i,r;return i=[],t=this.operator,i.push([this.makeCode(t)]),"!"===t&&this.first instanceof u?(this.first.negated=!this.first.negated,this.first.compileToFragments(e)):e.level>=T?new O(this).compileToFragments(e):(r="+"===t||"-"===t,("new"===t||"typeof"===t||"delete"===t||r&&this.first instanceof n&&this.first.operator===t)&&i.push([this.makeCode(" ")]),(r&&this.first instanceof n||"new"===t&&this.first.isStatement(e))&&(this.first=new O(this.first)),i.push(this.first.compileToFragments(e,F)),this.flip&&i.reverse(),this.joinFragmentArrays(i,""))},n.prototype.compileYield=function(e){var t,n;return n=[],t=this.operator,null==e.scope.parent&&this.error("yield statements must occur within a function generator."),Tt.call(Object.keys(this.first),"expression")>=0&&!(this.first instanceof W)?this.isYieldReturn()?n.push(this.first.compileToFragments(e,L)):null!=this.first.expression&&n.push(this.first.expression.compileToFragments(e,F)):(n.push([this.makeCode("("+t+" ")]),n.push(this.first.compileToFragments(e,F)),n.push([this.makeCode(")")])),this.joinFragmentArrays(n,"")},n.prototype.compilePower=function(e){var n;return n=new z(new x("Math"),[new t(new x("pow"))]),new o(n,[this.first,this.second]).compileToFragments(e)},n.prototype.compileFloorDivision=function(e){var i,r;return r=new z(new x("Math"),[new t(new x("floor"))]),i=new n("/",this.first,this.second),new o(r,[i]).compileToFragments(e)},n.prototype.compileModulo=function(e){var t;return t=new z(new x(bt("modulo",e))),new o(t,[this.first,this.second]).compileToFragments(e)},n.prototype.toString=function(e){return n.__super__.toString.call(this,e,this.constructor.name+" "+this.operator)},n}(r),e.In=k=function(e){function t(e,t){this.object=e,this.array=t}return kt(t,e),t.prototype.children=["object","array"],t.prototype.invert=S,t.prototype.compileNode=function(e){var t,n,i,r,s;if(this.array instanceof z&&this.array.isArray()&&this.array.base.objects.length){for(s=this.array.base.objects,n=0,i=s.length;i>n;n++)if(r=s[n],r instanceof G){t=!0;break}if(!t)return this.compileOrTest(e)}return this.compileLoopTest(e)},t.prototype.compileOrTest=function(e){var t,n,i,r,s,o,a,c,l,h,u,p;for(c=this.object.cache(e,F),u=c[0],a=c[1],l=this.negated?[" !== "," && "]:[" === "," || "],t=l[0],n=l[1],p=[],h=this.array.base.objects,i=s=0,o=h.length;o>s;i=++s)r=h[i],i&&p.push(this.makeCode(n)),p=p.concat(i?a:u,this.makeCode(t),r.compileToFragments(e,T));return F>e.level?p:this.wrapInBraces(p)},t.prototype.compileLoopTest=function(e){var t,n,i,r;return i=this.object.cache(e,E),r=i[0],n=i[1],t=[].concat(this.makeCode(bt("indexOf",e)+".call("),this.array.compileToFragments(e,E),this.makeCode(", "),n,this.makeCode(") "+(this.negated?"< 0":">= 0"))),st(r)===st(n)?t:(t=r.concat(this.makeCode(", "),t),E>e.level?t:this.wrapInBraces(t))},t.prototype.toString=function(e){return t.__super__.toString.call(this,e,this.constructor.name+(this.negated?"!":""))},t}(r),e.Try=Y=function(e){function t(e,t,n,i){this.attempt=e,this.errorVariable=t,this.recovery=n,this.ensure=i}return kt(t,e),t.prototype.children=["attempt","recovery","ensure"],t.prototype.isStatement=Q,t.prototype.jumps=function(e){var t;return this.attempt.jumps(e)||(null!=(t=this.recovery)?t.jumps(e):void 0)},t.prototype.makeReturn=function(e){return this.attempt&&(this.attempt=this.attempt.makeReturn(e)),this.recovery&&(this.recovery=this.recovery.makeReturn(e)),this},t.prototype.compileNode=function(e){var t,n,r,s;return e.indent+=q,s=this.attempt.compileToFragments(e,L),t=this.recovery?(r=new x("_error"),this.errorVariable?this.recovery.unshift(new i(this.errorVariable,r)):void 0,[].concat(this.makeCode(" catch ("),r.compileToFragments(e),this.makeCode(") {\n"),this.recovery.compileToFragments(e,L),this.makeCode("\n"+this.tab+"}"))):this.ensure||this.recovery?[]:[this.makeCode(" catch (_error) {}")],n=this.ensure?[].concat(this.makeCode(" finally {\n"),this.ensure.compileToFragments(e,L),this.makeCode("\n"+this.tab+"}")):[],[].concat(this.makeCode(this.tab+"try {\n"),s,this.makeCode("\n"+this.tab+"}"),t,n)},t}(r),e.Throw=W=function(e){function t(e){this.expression=e}return kt(t,e),t.prototype.children=["expression"],t.prototype.isStatement=Q,t.prototype.jumps=D,t.prototype.makeReturn=X,t.prototype.compileNode=function(e){return[].concat(this.makeCode(this.tab+"throw "),this.expression.compileToFragments(e),this.makeCode(";"))},t}(r),e.Existence=u=function(e){function t(e){this.expression=e}return kt(t,e),t.prototype.children=["expression"],t.prototype.invert=S,t.prototype.compileNode=function(e){var t,n,i,r;return this.expression.front=this.front,i=this.expression.compile(e,F),g.test(i)&&!e.scope.check(i)?(r=this.negated?["===","||"]:["!==","&&"],t=r[0],n=r[1],i="typeof "+i+" "+t+' "undefined" '+n+" "+i+" "+t+" null"):i=i+" "+(this.negated?"==":"!=")+" null",[this.makeCode(C>=e.level?i:"("+i+")")]},t}(r),e.Parens=O=function(e){function t(e){this.body=e}return kt(t,e),t.prototype.children=["body"],t.prototype.unwrap=function(){return this.body},t.prototype.isComplex=function(){return this.body.isComplex()},t.prototype.compileNode=function(e){var t,n,i;return n=this.body.unwrap(),n instanceof z&&n.isAtomic()?(n.front=this.front,n.compileToFragments(e)):(i=n.compileToFragments(e,N),t=F>e.level&&(n instanceof I||n instanceof o||n instanceof f&&n.returns),t?i:this.wrapInBraces(i))},t}(r),e.For=f=function(e){function t(e,t){var n;this.source=t.source,this.guard=t.guard,this.step=t.step,this.name=t.name,this.index=t.index,this.body=s.wrap([e]),this.own=!!t.own,this.object=!!t.object,this.object&&(n=[this.index,this.name],this.name=n[0],this.index=n[1]),this.index instanceof z&&this.index.error("index cannot be a pattern matching expression"),this.range=this.source instanceof z&&this.source.base instanceof j&&!this.source.properties.length,this.pattern=this.name instanceof z,this.range&&this.index&&this.index.error("indexes do not apply to range loops"),this.range&&this.pattern&&this.name.error("cannot pattern match over range loops"),this.own&&!this.object&&this.name.error("cannot use own with for-in"),this.returns=!1}return kt(t,e),t.prototype.children=["body","source","guard","step"],t.prototype.compileNode=function(e){var t,n,r,o,a,c,l,h,u,p,d,f,m,v,y,k,w,T,C,F,N,S,D,A,I,_,$,j,B,V,P,U,G,H;return t=s.wrap([this.body]),D=t.expressions,T=D[D.length-1],(null!=T?T.jumps():void 0)instanceof M&&(this.returns=!1),B=this.range?this.source.base:this.source,j=e.scope,this.pattern||(F=this.name&&this.name.compile(e,E)),v=this.index&&this.index.compile(e,E),F&&!this.pattern&&j.find(F),v&&j.find(v),this.returns&&($=j.freeVariable("results")),y=this.object&&v||j.freeVariable("i",{single:!0}),k=this.range&&F||v||y,w=k!==y?k+" = ":"",this.step&&!this.range&&(A=this.cacheToCodeFragments(this.step.cache(e,E,ot)),V=A[0],U=A[1],P=U.match(R)),this.pattern&&(F=y),H="",d="",l="",f=this.tab+q,this.range?p=B.compileToFragments(ht(e,{index:y,name:F,step:this.step,isComplex:ot})):(G=this.source.compile(e,E),!F&&!this.own||g.test(G)||(l+=""+this.tab+(S=j.freeVariable("ref"))+" = "+G+";\n",G=S),F&&!this.pattern&&(N=F+" = "+G+"["+k+"]"),this.object||(V!==U&&(l+=""+this.tab+V+";\n"),this.step&&P&&(u=0>pt(P[0]))||(C=j.freeVariable("len")),a=""+w+y+" = 0, "+C+" = "+G+".length",c=""+w+y+" = "+G+".length - 1",r=y+" < "+C,o=y+" >= 0",this.step?(P?u&&(r=o,a=c):(r=U+" > 0 ? "+r+" : "+o,a="("+U+" > 0 ? ("+a+") : "+c+")"),m=y+" += "+U):m=""+(k!==y?"++"+y:y+"++"),p=[this.makeCode(a+"; "+r+"; "+w+m)])),this.returns&&(I=""+this.tab+$+" = [];\n",_="\n"+this.tab+"return "+$+";",t.makeReturn($)),this.guard&&(t.expressions.length>1?t.expressions.unshift(new b(new O(this.guard).invert(),new x("continue"))):this.guard&&(t=s.wrap([new b(this.guard,t)]))),this.pattern&&t.expressions.unshift(new i(this.name,new x(G+"["+k+"]"))),h=[].concat(this.makeCode(l),this.pluckDirectCall(e,t)),N&&(H="\n"+f+N+";"),this.object&&(p=[this.makeCode(k+" in "+G)],this.own&&(d="\n"+f+"if (!"+bt("hasProp",e)+".call("+G+", "+k+")) continue;")),n=t.compileToFragments(ht(e,{indent:f}),L),n&&n.length>0&&(n=[].concat(this.makeCode("\n"),n,this.makeCode("\n"))),[].concat(h,this.makeCode(""+(I||"")+this.tab+"for ("),p,this.makeCode(") {"+d+H),n,this.makeCode(this.tab+"}"+(_||"")))},t.prototype.pluckDirectCall=function(e,t){var n,r,s,a,l,h,u,p,d,f,m,g,v,y,b,k;for(r=[],d=t.expressions,l=h=0,u=d.length;u>h;l=++h)s=d[l],s=s.unwrapAll(),s instanceof o&&(k=null!=(f=s.variable)?f.unwrapAll():void 0,(k instanceof c||k instanceof z&&(null!=(m=k.base)?m.unwrapAll():void 0)instanceof c&&1===k.properties.length&&("call"===(g=null!=(v=k.properties[0].name)?v.value:void 0)||"apply"===g))&&(a=(null!=(y=k.base)?y.unwrapAll():void 0)||k,p=new x(e.scope.freeVariable("fn")),n=new z(p),k.base&&(b=[n,k],k.base=b[0],n=b[1]),t.expressions[l]=new o(n,s.args),r=r.concat(this.makeCode(this.tab),new i(p,a).compileToFragments(e,L),this.makeCode(";\n"))));return r},t}(J),e.Switch=H=function(e){function t(e,t,n){this.subject=e,this.cases=t,this.otherwise=n}return kt(t,e),t.prototype.children=["subject","cases","otherwise"],t.prototype.isStatement=Q,t.prototype.jumps=function(e){var t,n,i,r,s,o,a,c;for(null==e&&(e={block:!0}),o=this.cases,i=0,s=o.length;s>i;i++)if(a=o[i],n=a[0],t=a[1],r=t.jumps(e))return r;return null!=(c=this.otherwise)?c.jumps(e):void 0},t.prototype.makeReturn=function(e){var t,n,i,r,o;for(r=this.cases,t=0,n=r.length;n>t;t++)i=r[t],i[1].makeReturn(e);return e&&(this.otherwise||(this.otherwise=new s([new x("void 0")]))),null!=(o=this.otherwise)&&o.makeReturn(e),this},t.prototype.compileNode=function(e){var t,n,i,r,s,o,a,c,l,h,u,p,d,f,m,g;for(c=e.indent+q,l=e.indent=c+q,o=[].concat(this.makeCode(this.tab+"switch ("),this.subject?this.subject.compileToFragments(e,N):this.makeCode("false"),this.makeCode(") {\n")),f=this.cases,a=h=0,p=f.length;p>h;a=++h){for(m=f[a],r=m[0],t=m[1],g=rt([r]),u=0,d=g.length;d>u;u++)i=g[u],this.subject||(i=i.invert()),o=o.concat(this.makeCode(c+"case "),i.compileToFragments(e,N),this.makeCode(":\n"));if((n=t.compileToFragments(e,L)).length>0&&(o=o.concat(n,this.makeCode("\n"))),a===this.cases.length-1&&!this.otherwise)break;s=this.lastNonComment(t.expressions),s instanceof M||s instanceof x&&s.jumps()&&"debugger"!==s.value||o.push(i.makeCode(l+"break;\n"))}return this.otherwise&&this.otherwise.expressions.length&&o.push.apply(o,[this.makeCode(c+"default:\n")].concat(Ct.call(this.otherwise.compileToFragments(e,L)),[this.makeCode("\n")])),o.push(this.makeCode(this.tab+"}")),o},t}(r),e.If=b=function(e){function t(e,t,n){this.body=t,null==n&&(n={}),this.condition="unless"===n.type?e.invert():e,this.elseBody=null,this.isChain=!1,this.soak=n.soak}return kt(t,e),t.prototype.children=["condition","body","elseBody"],t.prototype.bodyNode=function(){var e;return null!=(e=this.body)?e.unwrap():void 0},t.prototype.elseBodyNode=function(){var e;return null!=(e=this.elseBody)?e.unwrap():void 0},t.prototype.addElse=function(e){return this.isChain?this.elseBodyNode().addElse(e):(this.isChain=e instanceof t,this.elseBody=this.ensureBlock(e),this.elseBody.updateLocationDataIfMissing(e.locationData)),this},t.prototype.isStatement=function(e){var t;return(null!=e?e.level:void 0)===L||this.bodyNode().isStatement(e)||(null!=(t=this.elseBodyNode())?t.isStatement(e):void 0)},t.prototype.jumps=function(e){var t;return this.body.jumps(e)||(null!=(t=this.elseBody)?t.jumps(e):void 0)},t.prototype.compileNode=function(e){return this.isStatement(e)?this.compileStatement(e):this.compileExpression(e)},t.prototype.makeReturn=function(e){return e&&(this.elseBody||(this.elseBody=new s([new x("void 0")]))),this.body&&(this.body=new s([this.body.makeReturn(e)])),this.elseBody&&(this.elseBody=new s([this.elseBody.makeReturn(e)])),this},t.prototype.ensureBlock=function(e){return e instanceof s?e:new s([e])},t.prototype.compileStatement=function(e){var n,i,r,s,o,a,c;return r=tt(e,"chainChild"),(o=tt(e,"isExistentialEquals"))?new t(this.condition.invert(),this.elseBodyNode(),{type:"if"}).compileToFragments(e):(c=e.indent+q,s=this.condition.compileToFragments(e,N),i=this.ensureBlock(this.body).compileToFragments(ht(e,{indent:c})),a=[].concat(this.makeCode("if ("),s,this.makeCode(") {\n"),i,this.makeCode("\n"+this.tab+"}")),r||a.unshift(this.makeCode(this.tab)),this.elseBody?(n=a.concat(this.makeCode(" else ")),this.isChain?(e.chainChild=!0,n=n.concat(this.elseBody.unwrap().compileToFragments(e,L))):n=n.concat(this.makeCode("{\n"),this.elseBody.compileToFragments(ht(e,{indent:c}),L),this.makeCode("\n"+this.tab+"}")),n):a)},t.prototype.compileExpression=function(e){var t,n,i,r;return i=this.condition.compileToFragments(e,C),n=this.bodyNode().compileToFragments(e,E),t=this.elseBodyNode()?this.elseBodyNode().compileToFragments(e,E):[this.makeCode("void 0")],r=i.concat(this.makeCode(" ? "),n,this.makeCode(" : "),t),e.level>=C?this.wrapInBraces(r):r},t.prototype.unfoldSoak=function(){return this.soak&&this},t}(r),K={extend:function(e){return"function(child, parent) { for (var key in parent) { if ("+bt("hasProp",e)+".call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; }"},bind:function(){return"function(fn, me){ return function(){ return fn.apply(me, arguments); }; }"},indexOf:function(){return"[].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; }"},modulo:function(){return"function(a, b) { return (+a % (b = +b) + b) % b; }"},hasProp:function(){return"{}.hasOwnProperty"},slice:function(){return"[].slice"}},L=1,N=2,E=3,C=4,F=5,T=6,q="  ",g=/^(?!\d)[$\w\x7f-\uffff]+$/,B=/^[+-]?\d+$/,m=/^[+-]?0x[\da-f]+/i,R=/^[+-]?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)$/i,y=/^['"]/,v=/^\//,bt=function(e,t){var n,i;return i=t.scope.root,e in i.utilities?i.utilities[e]:(n=i.freeVariable(e),i.assign(n,K[e](t)),i.utilities[e]=n)},ut=function(e,t){return e=e.replace(/\n/g,"$&"+t),e.replace(/\s+$/,"")},pt=function(e){return null==e?0:e.match(m)?parseInt(e,16):parseFloat(e)},at=function(e){return e instanceof x&&"arguments"===e.value&&!e.asKey},ct=function(e){return e instanceof x&&"this"===e.value&&!e.asKey||e instanceof c&&e.bound||e instanceof o&&e.isSuper},ot=function(e){return e.isComplex()||("function"==typeof e.isAssignable?e.isAssignable():void 0)},yt=function(e,t,n){var i;if(i=t[n].unfoldSoak(e))return t[n]=i.body,i.body=new z(t),i}}.call(this),t.exports}(),require["./sourcemap"]=function(){var e={},t={exports:e};return function(){var e,n;e=function(){function e(e){this.line=e,this.columns=[]}return e.prototype.add=function(e,t,n){var i,r;return r=t[0],i=t[1],null==n&&(n={}),this.columns[e]&&n.noReplace?void 0:this.columns[e]={line:this.line,column:e,sourceLine:r,sourceColumn:i}},e.prototype.sourceLocation=function(e){for(var t;!((t=this.columns[e])||0>=e);)e--;return t&&[t.sourceLine,t.sourceColumn]},e}(),n=function(){function t(){this.lines=[]}var n,i,r,s;return t.prototype.add=function(t,n,i){var r,s,o,a;return null==i&&(i={}),o=n[0],s=n[1],a=(r=this.lines)[o]||(r[o]=new e(o)),a.add(s,t,i)},t.prototype.sourceLocation=function(e){var t,n,i;for(n=e[0],t=e[1];!((i=this.lines[n])||0>=n);)n--;return i&&i.sourceLocation(t)},t.prototype.generate=function(e,t){var n,i,r,s,o,a,c,l,h,u,p,d,f,m,g,v;for(null==e&&(e={}),null==t&&(t=null),v=0,s=0,a=0,o=0,d=!1,n="",f=this.lines,u=i=0,c=f.length;c>i;u=++i)if(h=f[u])for(m=h.columns,r=0,l=m.length;l>r;r++)if(p=m[r]){for(;p.line>v;)s=0,d=!1,n+=";",v++;d&&(n+=",",d=!1),n+=this.encodeVlq(p.column-s),s=p.column,n+=this.encodeVlq(0),n+=this.encodeVlq(p.sourceLine-a),a=p.sourceLine,n+=this.encodeVlq(p.sourceColumn-o),o=p.sourceColumn,d=!0}return g={version:3,file:e.generatedFile||"",sourceRoot:e.sourceRoot||"",sources:e.sourceFiles||[""],names:[],mappings:n},e.inline&&(g.sourcesContent=[t]),JSON.stringify(g,null,2)},r=5,i=1<<r,s=i-1,t.prototype.encodeVlq=function(e){var t,n,o,a;for(t="",o=0>e?1:0,a=(Math.abs(e)<<1)+o;a||!t;)n=a&s,a>>=r,a&&(n|=i),t+=this.encodeBase64(n);return t},n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",t.prototype.encodeBase64=function(e){return n[e]||function(){throw Error("Cannot Base64 encode value: "+e)}()},t}(),t.exports=n}.call(this),t.exports}(),require["./coffee-script"]=function(){var e={},t={exports:e};return function(){var t,n,i,r,s,o,a,c,l,h,u,p,d,f,m,g,v,y,b={}.hasOwnProperty,k=[].indexOf||function(e){for(var t=0,n=this.length;n>t;t++)if(t in this&&this[t]===e)return t;return-1};if(a=require("fs"),v=require("vm"),f=require("path"),t=require("./lexer").Lexer,d=require("./parser").parser,l=require("./helpers"),n=require("./sourcemap"),e.VERSION="1.9.2",e.FILE_EXTENSIONS=[".coffee",".litcoffee",".coffee.md"],e.helpers=l,y=function(e){return function(t,n){var i;null==n&&(n={});try{return e.call(this,t,n)
// }catch(r){throw i=r,l.updateSyntaxError(i,t,n.filename)}}},e.compile=r=y(function(e,t){var i,r,s,o,a,c,h,u,f,m,g,v,y,b,k;for(v=l.merge,o=l.extend,t=o({},t),t.sourceMap&&(g=new n),k=p.tokenize(e,t),t.referencedVars=function(){var e,t,n;for(n=[],e=0,t=k.length;t>e;e++)b=k[e],b.variable&&n.push(b[1]);return n}(),c=d.parse(k).compileToFragments(t),s=0,t.header&&(s+=1),t.shiftLine&&(s+=1),r=0,f="",u=0,m=c.length;m>u;u++)a=c[u],t.sourceMap&&(a.locationData&&g.add([a.locationData.first_line,a.locationData.first_column],[s,r],{noReplace:!0}),y=l.count(a.code,"\n"),s+=y,y?r=a.code.length-(a.code.lastIndexOf("\n")+1):r+=a.code.length),f+=a.code;return t.header&&(h="Generated by CoffeeScript "+this.VERSION,f="// "+h+"\n"+f),t.sourceMap?(i={js:f},i.sourceMap=g,i.v3SourceMap=g.generate(t,e),i):f}),e.tokens=y(function(e,t){return p.tokenize(e,t)}),e.nodes=y(function(e,t){return"string"==typeof e?d.parse(p.tokenize(e,t)):d.parse(e)}),e.run=function(e,t){var n,i,s,o;return null==t&&(t={}),s=require.main,s.filename=process.argv[1]=t.filename?a.realpathSync(t.filename):".",s.moduleCache&&(s.moduleCache={}),i=t.filename?f.dirname(a.realpathSync(t.filename)):a.realpathSync("."),s.paths=require("module")._nodeModulePaths(i),(!l.isCoffee(s.filename)||require.extensions)&&(n=r(e,t),e=null!=(o=n.js)?o:n),s._compile(e,s.filename)},e.eval=function(e,t){var n,i,s,o,a,c,l,h,u,p,d,m,g,y,k,w,T;if(null==t&&(t={}),e=e.trim()){if(o=null!=(m=v.Script.createContext)?m:v.createContext,c=null!=(g=v.isContext)?g:function(){return t.sandbox instanceof o().constructor},o){if(null!=t.sandbox){if(c(t.sandbox))w=t.sandbox;else{w=o(),y=t.sandbox;for(h in y)b.call(y,h)&&(T=y[h],w[h]=T)}w.global=w.root=w.GLOBAL=w}else w=global;if(w.__filename=t.filename||"eval",w.__dirname=f.dirname(w.__filename),w===global&&!w.module&&!w.require){for(n=require("module"),w.module=i=new n(t.modulename||"eval"),w.require=s=function(e){return n._load(e,i,!0)},i.filename=w.__filename,k=Object.getOwnPropertyNames(require),a=0,u=k.length;u>a;a++)d=k[a],"paths"!==d&&(s[d]=require[d]);s.paths=i.paths=n._nodeModulePaths(process.cwd()),s.resolve=function(e){return n._resolveFilename(e,i)}}}p={};for(h in t)b.call(t,h)&&(T=t[h],p[h]=T);return p.bare=!0,l=r(e,p),w===global?v.runInThisContext(l):v.runInContext(l,w)}},e.register=function(){return require("./register")},require.extensions)for(m=this.FILE_EXTENSIONS,h=0,u=m.length;u>h;h++)s=m[h],null==(i=require.extensions)[s]&&(i[s]=function(){throw Error("Use CoffeeScript.register() or require the coffee-script/register module to require "+s+" files.")});e._compileFile=function(e,t){var n,i,s,o;null==t&&(t=!1),s=a.readFileSync(e,"utf8"),o=65279===s.charCodeAt(0)?s.substring(1):s;try{n=r(o,{filename:e,sourceMap:t,literate:l.isLiterate(e)})}catch(c){throw i=c,l.updateSyntaxError(i,o,e)}return n},p=new t,d.lexer={lex:function(){var e,t;return t=d.tokens[this.pos++],t?(e=t[0],this.yytext=t[1],this.yylloc=t[2],d.errorToken=t.origin||t,this.yylineno=this.yylloc.first_line):e="",e},setInput:function(e){return d.tokens=e,this.pos=0},upcomingInput:function(){return""}},d.yy=require("./nodes"),d.yy.parseError=function(e,t){var n,i,r,s,o,a;return o=t.token,s=d.errorToken,a=d.tokens,i=s[0],r=s[1],n=s[2],r=function(){switch(!1){case s!==a[a.length-1]:return"end of input";case"INDENT"!==i&&"OUTDENT"!==i:return"indentation";case"IDENTIFIER"!==i&&"NUMBER"!==i&&"STRING"!==i&&"STRING_START"!==i&&"REGEX"!==i&&"REGEX_START"!==i:return i.replace(/_START$/,"").toLowerCase();default:return l.nameWhitespaceCharacter(r)}}(),l.throwSyntaxError("unexpected "+r,n)},o=function(e,t){var n,i,r,s,o,a,c,l,h,u,p,d;return s=void 0,r="",e.isNative()?r="native":(e.isEval()?(s=e.getScriptNameOrSourceURL(),s||(r=e.getEvalOrigin()+", ")):s=e.getFileName(),s||(s="<anonymous>"),l=e.getLineNumber(),i=e.getColumnNumber(),u=t(s,l,i),r=u?s+":"+u[0]+":"+u[1]:s+":"+l+":"+i),o=e.getFunctionName(),a=e.isConstructor(),c=!(e.isToplevel()||a),c?(h=e.getMethodName(),d=e.getTypeName(),o?(p=n="",d&&o.indexOf(d)&&(p=d+"."),h&&o.indexOf("."+h)!==o.length-h.length-1&&(n=" [as "+h+"]"),""+p+o+n+" ("+r+")"):d+"."+(h||"<anonymous>")+" ("+r+")"):a?"new "+(o||"<anonymous>")+" ("+r+")":o?o+" ("+r+")":r},g={},c=function(t){var n,i;if(g[t])return g[t];if(i=null!=f?f.extname(t):void 0,!(0>k.call(e.FILE_EXTENSIONS,i)))return n=e._compileFile(t,!0),g[t]=n.sourceMap},Error.prepareStackTrace=function(t,n){var i,r,s;return s=function(e,t,n){var i,r;return r=c(e),r&&(i=r.sourceLocation([t-1,n-1])),i?[i[0]+1,i[1]+1]:null},r=function(){var t,r,a;for(a=[],t=0,r=n.length;r>t&&(i=n[t],i.getFunction()!==e.run);t++)a.push("  at "+o(i,s));return a}(),""+t+"\n"+r.join("\n")+"\n"}}.call(this),t.exports}(),require["./browser"]=function(){var exports={},module={exports:exports};return function(){var CoffeeScript,compile,runScripts,indexOf=[].indexOf||function(e){for(var t=0,n=this.length;n>t;t++)if(t in this&&this[t]===e)return t;return-1};CoffeeScript=require("./coffee-script"),CoffeeScript.require=require,compile=CoffeeScript.compile,CoffeeScript.eval=function(code,options){return null==options&&(options={}),null==options.bare&&(options.bare=!0),eval(compile(code,options))},CoffeeScript.run=function(e,t){return null==t&&(t={}),t.bare=!0,t.shiftLine=!0,Function(compile(e,t))()},"undefined"!=typeof window&&null!==window&&("undefined"!=typeof btoa&&null!==btoa&&"undefined"!=typeof JSON&&null!==JSON&&"undefined"!=typeof unescape&&null!==unescape&&"undefined"!=typeof encodeURIComponent&&null!==encodeURIComponent&&(compile=function(e,t){var n,i,r;return null==t&&(t={}),t.sourceMap=!0,t.inline=!0,i=CoffeeScript.compile(e,t),n=i.js,r=i.v3SourceMap,n+"\n//# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(r)))+"\n//# sourceURL=coffeescript"}),CoffeeScript.load=function(e,t,n,i){var r;return null==n&&(n={}),null==i&&(i=!1),n.sourceFiles=[e],r=window.ActiveXObject?new window.ActiveXObject("Microsoft.XMLHTTP"):new window.XMLHttpRequest,r.open("GET",e,!0),"overrideMimeType"in r&&r.overrideMimeType("text/plain"),r.onreadystatechange=function(){var s,o;if(4===r.readyState){if(0!==(o=r.status)&&200!==o)throw Error("Could not load "+e);if(s=[r.responseText,n],i||CoffeeScript.run.apply(CoffeeScript,s),t)return t(s)}},r.send(null)},runScripts=function(){var e,t,n,i,r,s,o,a,c,l,h;for(h=window.document.getElementsByTagName("script"),t=["text/coffeescript","text/literate-coffeescript"],e=function(){var e,n,i,r;for(r=[],e=0,n=h.length;n>e;e++)c=h[e],i=c.type,indexOf.call(t,i)>=0&&r.push(c);return r}(),s=0,n=function(){var t;return t=e[s],t instanceof Array?(CoffeeScript.run.apply(CoffeeScript,t),s++,n()):void 0},i=function(i,r){var s,o;return s={literate:i.type===t[1]},o=i.src||i.getAttribute("data-src"),o?CoffeeScript.load(o,function(t){return e[r]=t,n()},s,!0):(s.sourceFiles=["embedded"],e[r]=[i.innerHTML,s])},r=o=0,a=e.length;a>o;r=++o)l=e[r],i(l,r);return n()},window.addEventListener?window.addEventListener("DOMContentLoaded",runScripts,!1):window.attachEvent("onload",runScripts))}.call(this),module.exports}(),require["./coffee-script"]}();"function"==typeof define&&define.amd?define(function(){return CoffeeScript}):root.CoffeeScript=CoffeeScript})(this);
// /!*!
//  * ECT CoffeeScript template engine v0.5.9
//  * https://github.com/baryshev/ect
//  *
//  * Copyright 2012-2014, Vadim M. Baryshev <vadimbaryshev@gmail.com>
//  * Licensed under the MIT license
//  * https://github.com/baryshev/ect/LICENSE
//  *
//  * Includes parts of node
//  * https://github.com/joyent/node
//  * Copyright Joyent, Inc. and other Node contributors
//  * Released under the MIT license
//  *
//  * Includes Cross-Browser Split 1.1.1
//  * http://xregexp.com/
//  * Copyright 2007-2012 Steven Levithan <stevenlevithan.com>
//  * Released under the MIT license
//  *!/
// (function(){"use strict";var fs;var path;var CoffeeScript;var ECT=function(options){if(!(this instanceof ECT)){return new ECT(options)}this.options={open:"<%",close:"%>",ext:"",cache:true,watch:false,root:""};var ect=this,trimExp=/^[ \t]+|[ \t]+$/g,newlineExp=/\n/g,cache={},watchers={},indentChars={":":":",">":">"},escapeExp=/[&<>"]/,escapeAmpExp=/&/g,escapeLtExp=/</g,escapeGtExp=/>/g,escapeQuotExp=/"/g,regExpEscape=function(str){return String(str).replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")},read=function(file){if(Object.prototype.toString.call(ect.options.root)==="[object Object]"){var data=file.split(".").reduce(function(currentContext,key){return currentContext[key]},ect.options.root);if(Object.prototype.toString.call(data)==="[object String]"){return data}else{throw new Error("Failed to load template "+file)}}else{try{return fs.readFileSync(file,"utf8")}catch(e){throw new Error("Failed to load template "+file)}}},compile=function(template){var lineNo=1,bufferStack=["__ectOutput"],bufferStackPointer=0,buffer=bufferStack[bufferStackPointer]+" = '",matches=template.split(new RegExp(regExpEscape(ect.options.open)+"((?:.|[\r\n])+?)(?:"+regExpEscape(ect.options.close)+"|$)")),output,text,command,line,prefix,postfix,newline,indentChar,indentation="",indent=false,indentStack=[],indentStackPointer=-1,baseIndent,lines,j;for(var i=0;i<matches.length;i++){text=matches[i];command="";if(i%2===1){line="__ectFileInfo.line = "+lineNo;switch(text.charAt(0)){case"=":prefix="' + ("+line+"\n'') + __ectTemplateContext.escape(";postfix=") + '";newline="";text=text.substr(1);output="escaped";break;case"-":prefix="' + ("+line+"\n'') + ((";postfix=") ? '') + '";newline="";text=text.substr(1);output="unescaped";break;default:prefix="'\n"+line;postfix="\n"+bufferStack[bufferStackPointer]+" += '";newline="\n";output="none"}text=text.replace(trimExp,"");command=text.split(/[^a-z]+/)[0];if(indentChar=indentChars[text.charAt(text.length-1)]){text=text.replace(/:$/,"").replace(trimExp,"");if(indentChar===">"){if(/[$a-z_][0-9a-z_$]*[^=]+(-|=)>/i.test(text.replace(/'.*'|".*"/,""))){indentStack.push("capture_output_"+output);indentStackPointer++}bufferStack.push("__ectFunction"+bufferStackPointer);bufferStackPointer++;postfix="\n"+bufferStack[bufferStackPointer]+" = '";command="function"}indentStack.push(command);indentStackPointer++;indent=true}switch(command){case"include":if(output==="none"){prefix="' + ("+line+"\n'') + (";postfix=") + '"}buffer+=prefix.replace(newlineExp,"\n"+indentation)+text+postfix.replace(newlineExp,"\n"+indentation);break;case"block":bufferStack.push("__ectTemplateContext.blocks['"+text.replace(/block\s+('|")([^'"]+)('|").*!/,"$2")+"']");bufferStackPointer++;prefix="'\n";postfix="\n"+bufferStack[bufferStackPointer]+" += '";text="if "+text;buffer+=prefix.replace(newlineExp,"\n"+indentation)+text;if(indent){indentation+="  ";indent=false}buffer+=postfix.replace(newlineExp,"\n"+indentation);break;case"content":if(output==="none"){prefix="' + ("+line+"\n'') + (";postfix=") + '"}if(text==="content"){text="content()"}buffer+=prefix.replace(newlineExp,"\n"+indentation)+text+postfix.replace(newlineExp,"\n"+indentation);break;case"end":prefix="'";switch(indentStack[indentStackPointer]){case"block":bufferStack.pop();bufferStackPointer--;prefix="'";postfix="\n"+bufferStack[bufferStackPointer]+" += '";buffer+=prefix.replace(newlineExp,"\n"+indentation);indentation=indentation.substr(2);buffer+=postfix.replace(newlineExp,"\n"+indentation);break;case"when":postfix="\n"+bufferStack[bufferStackPointer]+" += ''";buffer+=prefix.replace(newlineExp,"\n"+indentation)+postfix.replace(newlineExp,"\n"+indentation);indentation=indentation.substr(2);break;case"function":prefix="'\n"+bufferStack[bufferStackPointer];buffer+=prefix.replace(newlineExp,"\n"+indentation);indentation=indentation.substr(2);bufferStack.pop();bufferStackPointer--;postfix="\n"+bufferStack[bufferStackPointer]+" += '";switch(indentStack[indentStackPointer-1]){case"capture_output_escaped":indentStack.pop();indentStackPointer--;buffer+=")";break;case"capture_output_unescaped":indentStack.pop();indentStackPointer--;buffer+=") ? '')";break;case"capture_output_none":indentStack.pop();indentStackPointer--;break}buffer+=postfix.replace(newlineExp,"\n"+indentation);break;case"switch":prefix="\n"+line;default:if(indentStack[indentStackPointer-1]==="switch"){postfix=""}indentation=indentation.substr(2);buffer+=prefix.replace(newlineExp,"\n"+indentation)+postfix.replace(newlineExp,"\n"+indentation)}indentStack.pop();indentStackPointer--;break;case"else":if(indentStack[indentStackPointer-1]==="switch"){prefix=""}else{prefix="'"}buffer+=prefix.replace(newlineExp,"\n"+indentation);if(indentStack[indentStackPointer-1]==="if"||indentStack[indentStackPointer-1]==="else"||indentStack[indentStackPointer-1]==="unless"){indentStack.splice(-2,1);indentStackPointer--;indentation=indentation.substr(2)}buffer+=(newline.length?newline+indentation:"")+text;if(indent){indentation+="  ";indent=false}buffer+=postfix.replace(newlineExp,"\n"+indentation);break;case"switch":buffer+=prefix.replace(newlineExp,"\n"+indentation)+(newline.length?newline+indentation:"")+text;if(indent){indentation+="  ";indent=false}break;case"when":buffer+=(newline.length?newline+indentation:"")+text;if(indent){indentation+="  ";indent=false}buffer+=postfix.replace(newlineExp,"\n"+indentation);break;case"extend":text="__ectExtended = true\n__ectParent = "+text.replace(/extend\s+/,"");default:if(/\n/.test(text)){lines=text.split(/\n/);buffer+=prefix.replace(newlineExp,"\n"+indentation);for(j=0;j<lines.length;j++){if(/^\s*$/.test(lines[j])){continue}if(typeof baseIndent==="undefined"){baseIndent=new RegExp("^"+lines[j].substr(0,lines[j].search(/[^\s]/)))}buffer+=(newline.length?newline+indentation:"")+lines[j].replace(baseIndent,"")}lines=undefined;baseIndent=undefined}else{buffer+=prefix.replace(newlineExp,"\n"+indentation)+(newline.length?newline+indentation:"")+text}if(indent){indentation+="  ";indent=false}buffer+=postfix.replace(newlineExp,"\n"+indentation);break}}else{if(indentStack[indentStackPointer]!=="switch"){buffer+=text.replace(/[\\']/g,"\\$&").replace(/\r/g,"").replace(newlineExp,"\\n").replace(/^\\n/,"")}}lineNo+=text.split(newlineExp).length-1}buffer+="'\nif not __ectExtended\n  return __ectOutput\nelse\n  __ectContainer = __ectTemplateContext.load __ectParent\n  __ectFileInfo.file = __ectContainer.file\n  __ectFileInfo.line = 1\n  __ectTemplateContext.childContent = __ectOutput\n  return __ectContainer.compiled.call(this, __ectTemplateContext, __ectFileInfo, include, content, block)";buffer="__ectExtended = false\n"+buffer;return eval("(function __ectTemplate(__ectTemplateContext, __ectFileInfo, include, content, block) {\n"+CoffeeScript.compile(buffer,{bare:true})+"});")};var TemplateContext=function(data){this.blocks={};this.data=data||{};this.childContent=""};TemplateContext.prototype.escape=function(text){if(text==null){return""}var result=text.toString();if(!escapeExp.test(result)){return result}return result.replace(escapeAmpExp,"&#38;").replace(escapeLtExp,"&#60;").replace(escapeGtExp,"&#62;").replace(escapeQuotExp,"&#34;")};TemplateContext.prototype.block=function(name){if(!this.blocks[name]){this.blocks[name]=""}return!this.blocks[name].length};TemplateContext.prototype.content=function(block){if(block&&block.length){if(!this.blocks[block]){return""}return this.blocks[block]}else{return this.childContent}};TemplateContext.prototype.load=function(template){var file,compiled,container,data;if(ect.options.cache&&cache[template]){return cache[template]}else{var extExp=new RegExp(regExpEscape(ect.options.ext)+"$");if(Object.prototype.toString.call(ect.options.root)==="[object String]"){if(typeof process!=="undefined"&&process.platform==="win32"){file=path.normalize((ect.options.root.length&&template.charAt(0)!=="/"&&template.charAt(0)!=="\\"&&!/^[a-zA-Z]:/.test(template)?ect.options.root+"/":"")+template.replace(extExp,"")+ect.options.ext)}else{file=path.normalize((ect.options.root.length&&template.charAt(0)!=="/"?ect.options.root+"/":"")+template.replace(extExp,"")+ect.options.ext)}}else{file=template}data=read(file);if(data.substr(0,24)==="(function __ectTemplate("){try{compiled=eval(data)}catch(e){e.message=e.message+" in "+file;throw e}}else{try{compiled=compile(data)}catch(e){e.message=e.message.replace(/ on line \d+/,"")+" in "+file;throw e}}container={file:file,compiled:compiled,source:"("+compiled.toString()+");",lastModified:(new Date).toUTCString(),gzip:null};if(ect.options.cache){cache[template]=container;if(ect.options.watch&&typeof watchers[file]==="undefined"){watchers[file]=fs.watch(file,{persistent:false},function(){watchers[file].close();delete watchers[file];delete cache[template]})}}return container}};TemplateContext.prototype.render=function(template,data){var that=this;var container=this.load(template);var fileInfo={file:container.file,line:1};try{return container.compiled.call(data||this.data,this,fileInfo,function(){return that.render.apply(that,arguments)},function(){return that.content.apply(that,arguments)},function(){return that.block.apply(that,arguments)})}catch(e){if(!/ in /.test(e.message)){e.message=e.message+" in "+fileInfo.file+" on line "+fileInfo.line}throw e}};this.configure=function(options){options=options||{};for(var option in options){this.options[option]=options[option]}};this.compile=function(template){var compiled;try{compiled=compile(template);return compiled}catch(e){e.message=e.message.replace(/ on line \d+/,"");throw e}};this.render=function(template,data,callback){var context;if(typeof arguments[arguments.length-1]==="function"){if(arguments.length===2){callback=data;data={}}context=new TemplateContext(data);try{callback(undefined,context.render(template))}catch(e){callback(e)}}else{context=new TemplateContext(data);return context.render(template)}};this.clearCache=function(template){if(template){delete cache[template]}else{cache={}}};if(typeof module!=="undefined"&&module.exports){this.compiler=function(options){var zlib=require("zlib");options=options||{};options.root=options.root||"/";options.root="/"+options.root.replace(/^\//,"");options.root=options.root.replace(/\/$/,"")+"/";var rootExp=new RegExp("^"+regExpEscape(options.root));return function(req,res,next){if(req.method!=="GET"&&req.method!=="HEAD"){return next()}if(!options.root||req.url.substr(0,options.root.length)===options.root){var template=req.url.replace(rootExp,"");try{var context=new TemplateContext;var container=context.load(template);res.setHeader("Content-Type","application/x-javascript; charset=utf-8");res.setHeader("Last-Modified",container.lastModified);if(options.gzip){res.setHeader("Content-Encoding","gzip");if(container.gzip===null){zlib.gzip(container.source,function(err,buffer){if(!err){container.gzip=buffer;res.end(container.gzip)}else{next(err)}})}else{res.end(container.gzip)}}else{res.setHeader("Content-Length",typeof Buffer!=="undefined"?Buffer.byteLength(container.source,"utf8"):container.source.length);res.end(container.source)}}catch(e){next(e)}}else{next()}}}}this.configure(options)};if(typeof module!=="undefined"&&module.exports){fs=require("fs");path=require("path");if(typeof define==="function"&&define.amd){define("ect",["coffee-script"],function(cs){CoffeeScript=cs;return ECT})}else{CoffeeScript=require("coffee-script");module.exports=ECT}}else{if(!Array.prototype.filter){Array.prototype.filter=function filter(fun,thisp){var len=this.length>>0,res=[],i,val;if(typeof fun!=="function"){throw new TypeError}for(i=0;i<len;i++){if(i in this){val=this[i];if(fun.call(thisp,val,i,this)){res.push(val)}}}return res}}if(!Array.prototype.reduce){Array.prototype.reduce=function reduce(accumulator){if(this===null||this===undefined){throw new TypeError("Object is null or undefined")}var i=0,len=this.length>>0,curr;if(typeof accumulator!=="function"){throw new TypeError("First argument is not callable")}if(arguments.length<2){if(len===0){throw new TypeError("Array length is 0 and no second argument")}curr=this[0];i=1}else{curr=arguments[1]}while(i<len){if(i in this){curr=accumulator.call(undefined,curr,this[i],i,this)}++i}return curr}}var split;split=split||function(undef){var nativeSplit=String.prototype.split,compliantExecNpcg=/()??/.exec("")[1]===undef,self;self=function(str,separator,limit){if(Object.prototype.toString.call(separator)!=="[object RegExp]"){return nativeSplit.call(str,separator,limit)}var output=[],flags=(separator.ignoreCase?"i":"")+(separator.multiline?"m":"")+(separator.extended?"x":"")+(separator.sticky?"y":""),lastLastIndex=0,separator=new RegExp(separator.source,flags+"g"),separator2,match,lastIndex,lastLength;str+="";if(!compliantExecNpcg){separator2=new RegExp("^"+separator.source+"$(?!\\s)",flags)}limit=limit===undef?-1>>>0:limit>>>0;while(match=separator.exec(str)){lastIndex=match.index+match[0].length;if(lastIndex>lastLastIndex){output.push(str.slice(lastLastIndex,match.index));if(!compliantExecNpcg&&match.length>1){match[0].replace(separator2,function(){for(var i=1;i<arguments.length-2;i++){if(arguments[i]===undef){match[i]=undef}}})}if(match.length>1&&match.index<str.length){Array.prototype.push.apply(output,match.slice(1))}lastLength=match[0].length;lastLastIndex=lastIndex;if(output.length>=limit){break}}if(separator.lastIndex===match.index){separator.lastIndex++}}if(lastLastIndex===str.length){if(lastLength||!separator.test("")){output.push("")}}else{output.push(str.slice(lastLastIndex))}return output.length>limit?output.slice(0,limit):output};String.prototype.split=function(separator,limit){return self(this,separator,limit)};return self}();if(typeof define==="function"&&define.amd){define("ect",["coffee-script"],function(cs){CoffeeScript=cs;return ECT})}else{CoffeeScript=window.CoffeeScript;window.ECT=ECT}path=function(){var normalizeArray=function(parts,allowAboveRoot){var up=0,i,last;for(i=parts.length-1;i>=0;i--){last=parts[i];if(last==="."){parts.splice(i,1)}else if(last===".."){parts.splice(i,1);up++}else if(up){parts.splice(i,1);up--}}if(allowAboveRoot){while(up){parts.unshift("..");up--}}return parts},normalize=function(path){var isAbsolute=path.charAt(0)==="/",trailingSlash=path.slice(-1)==="/";path=normalizeArray(path.split("/").filter(function(p){return!!p}),!isAbsolute).join("/");if(!path&&!isAbsolute){path="."}if(path&&trailingSlash){path+="/"}return(isAbsolute?"/":"")+path};return{normalize:normalize}}();fs=function(){var readFileSync=function(file,encoding){var AJAX;if(window.XMLHttpRequest){AJAX=new XMLHttpRequest;if(AJAX.overrideMimeType){AJAX.overrideMimeType("text/html")}}else{AJAX=new ActiveXObject("Microsoft.XMLHTTP")}if(AJAX){AJAX.open("GET",file,false);AJAX.send(null);if(AJAX.status!==0&&(AJAX.status<200||AJAX.status>399)){throw new Error("Failed to load template "+file)}return AJAX.responseText}else{throw new Error("Failed to load template "+file)}},watch=function(){};return{readFileSync:readFileSync,watch:watch}}()}})();
// //# sourceMappingURL=../ect.min.map
// // ====================================================================================
// //                                  TEMPLATES
// // ====================================================================================
//
// // обертка для сборщика шаблонов.
// // handle - строка, содержащая название класса <template />
// // перебирает все <template /> с заданным классом, и забивает их шаблоны в структуру,
// // согласно id
// // например <template id='dropdown' class='basket' ></template>
// // занесется в список как вьюха 'dropdown' объекта 'basket'
// // TemplateList.basket -> dropdown
// InSales.Template = function( handle ){
//     var
//         $root = {};
//
//     $( 'script.'+ handle ).each( function(){
//         var
//             template = $(this).html();
//
//         $root[ $(this).attr( 'id' ) ] = template;
//     });
//
//     TemplateList[ handle ] = ECT({
//         root: $root
//     });
// };
//
// // обертка для рендера
// // вытаскивает нужную вьюху определенного объекта
// // здесь втыкаем общие хелперы
// // например, форматирование валюты в нужный вид, согласно настройкам БО
// InSales.Render = function( $data, class_name, view ){
//     $data.formatMoney = function( price ){
//         return InSales.formatMoney( price );
//     };
//
//     if( TemplateList[ class_name ] ){
//         return TemplateList[ class_name ].render( view, $data );
//     }else{
//         console.log( 'Вы не подключили шаблон', class_name );
//     }
// };
// // ================================================================================================
// //                                      EVENT BUS
// // ================================================================================================
//
// // реализуем шину событий для модулей
// //
// // идея заключается в том, что все кастомные события обрабатываются как $.deferred
// // как следствие - вне зависимости от порядка объявления слушателей события и вызова самого события,
// // все привязанные слушатели сработают даже если они были привязаны после срабатывания события
// //
// // id    - название события
// // flags - набор флагов, регулирующие логику работы подкписки, подробнее в доке jQuery
// //         всегда добавляйте memory, иначе не гарантируется корректная работа шины
//
// Events = function( id, flags ){
//     var
//         callbacks,
//         Event = id && EventsList[ id ];
//
//     flags = flags || 'memory';
//
//     if( !Event ){
//         callbacks = jQuery.Callbacks( flags );
//         Event = {
//             publish:     callbacks.fire,
//             subscribe:   callbacks.add,
//             unsubscribe: callbacks.remove
//         };
//         if( id ){
//             EventsList[ id ] = Event;
//         }
//     }
//
//     return Event;
// };
// // =========================================================================
// //                            JSON WRAPPERS
// // =========================================================================
//
//
// // TODO: проверить работоспособность всего
// // многие обертки - под вопросом
//
// // небольшая обертка для получения информации о товаре
// InSales.getProduct = function( id ){
//     var
//         path = '/product_by_id/'+ id +'.json';
//
//     return $.getJSON( path );
// };
//
// // получаем информацию о товарах
// //
// // id_array - массив или объект, содержащий id товаров
// InSales.getProductList = function( id_array ){
//
//     // хелпер для склейки
//     concatHelper = function( target, from ){
//         //console.log( from );
//         // делаем проверку, к нам пришло описание одного товара или пачки
//         if( from.product ){
//             target.push( from.product );
//         }else{
//             $.each( from.products, function( index, value ){
//                 target.push( value );
//             });
//         }
//
//         return target;
//     };
//
//     var
//         end   = 0,
//         paths = [],
//         ids   = [],
//         temp;
//
//     if( id_array === null ){
//         id_array = [];
//     }
//
//     // нормальизуем входной список
//     if( type_of( id_array ) == 'Object' ){
//         for( var id in id_array ) {
//             ids.push( id );
//         }
//     }else{
//         ids = id_array;
//     }
//
//     // разбиваем входной массив на пачки по 25 элементов
//     paths = ids.reduce( function( p, c, i ){
//         if( i % 25 === 0 ){
//             p.push([]);
//         }
//
//         p[ p.length - 1 ].push(c);
//         return p;
//     }, []);
//
//     // и генерим массив путей для json
//     $.each( paths, function( index, ids ){
//         paths[ index ] = '/products_by_id/'+ ids.join() +'.json';
//     });
//
//     // собираем задачи
//     promises = $.map( paths, function( path ) {
//         return $.ajax( path ).then( function( response ){
//             return response;
//         });
//     });
//
//     // в качель. микро чит. максимум в запрос - 100 товаров
//     // ну кто еще хочет забрать инфу о более чем 100 товарах,
//     // если в шаблон коллекции за раз отдается максимум 100??
//     // склеиваем ответы
//     temp = $.when.apply( this, promises )
//         .then( function( response_1, response_2, response_3, response_4 ){
//             var
//                 $result = [];
//
//             //console.log( response_1, response_2, response_3, response_4 );
//             if( response_1 ){
//                 $result = concatHelper( $result, response_1 );
//             }
//
//             if( response_2 ){
//                 $result = concatHelper( $result, response_2 );
//             }
//
//             if( response_3 ){
//                 $result = concatHelper( $result, response_3 );
//             }
//
//             if( response_4 ){
//                 $result = concatHelper( $result, response_4 );
//             }
//
//             return $result;
//         });
//
//     return temp;
// };
//
// // отправка почтовых сообщений в платформу
// // $message - объект JS или jQuery объект формы отправки
//
// InSales.sendMessage = function( $message ){
//     var
//         $data   = {},
//         $fields = {};
//
//     if( type_of( $message ) == 'jQuery' ){
//         $fields     = $message.serialize();
//         $data.jqObj = $message;
//     } else {
//         $fields   = $message;
//         $data.obj = $message;
//     }
//
//     return $.post( '/client_account/feedback.json', $fields );
// };
//
// // получение информации об аккаунте
//
// InSales.getAccount = function(){
//     return $.getJSON( '/client_account/contacts.json' );
// };
//
// // оформление заказа в обход стандартного checout'a
// // $checkout - JS объект с полями или jQuery объект формы
//
// InSales.fastCheckout = function( $checkout ){
//     var
//         $data   = {},
//         $fields = {};
//
//     if( type_of( $checkout ) == 'jQuery' ){
//         $feilds = $checkout.serialize();
//     } else {
//         $fields = $checkout;
//     }
//
//     $fields.pid_value = 1;
//
//     return $.post( '/fast_checkout.json', $fields );
// };
// // =====================================================================================
// //                                PRELOADER
// // =====================================================================================
//
//
// // TODO: причесать
//
// // Вывести индикатор работы (колесико)
// showPreloader = function() {
//     var
//         preloader = $('#own_preloader');
//
//     if ( !preloader.attr( "id" ) ) {
//         $('body').append( '<div id="own_preloader"><img src="/served_assets/loading.gif"/></div>' );
//         preloader = $('#own_preloader');
//     }
//
//     preloader.show();
//     changeCss( preloader );
//
//     $( window ).on( 'resize scroll', resizePreloader );
// };
//
// // Скрыть индикатор
// hidePreloader = function() {
//     var
//         preloader = $( '#own_preloader' );
//
//     if ( !preloader.attr( 'id' ) ) return;
//
//     $(window).off( 'resize scroll', resizePreloader );
//     preloader.remove();
// };
//
// resizePreloader = function(){
//     changeCss( $( '#own_preloader' ) );
// };
//
// // показываем сообщение
// showMessage = function( message, time ){
//     showPreloader();
//
//     var
//         preloader = $( '#own_preloader' );
//
//     time = time || 2000;
//
//     if ( !preloader.attr( 'id' ) ) return;
//
//     message =
//         '<div class="system_message">'+
//         message +
//         '<div>';
//
//     preloader.html( message );
//     changeCss( preloader );
//
//     window.setTimeout( hidePreloader, time );
// };
// // =====================================================================================
// //                            COLLAPSE BLOCK CONTROLLER?
// // =====================================================================================
//
// InSales.CollapseBlock = function( options ){
//     var
//         self = this;
//
//     // собираем опции
//     init = function(){
//         options = options || {};
//
//         // вытаскиваем все из опций и привязывем к контроллеру?
//         self.togglerClass = options.togglerClass;
//         self.wrapperClass = options.wrapperClass;
//         self.targetClass  = options.targetClass;
//         self.siblings     = options.siblings || false;
//
//         self.binding();
//
//         // если указываем blockType, то генерим плагин переключения
//         if( options.blockType ){
//             self.blockType    = 'collapse'+ options.blockType;
//             self.initPlugin();
//         }
//     };
//
//     // биндим события стандартного блока
//     self.binding = function(){
//         $( document ).on( '_click tap', '.'+ self.togglerClass, function( e ){
//             e.preventDefault();
//
//             var
//                 params    = getParams( $(this) ),
//                 animation = params.animate || 'toggle',
//                 speed     = parseInt( params.speed ) || false,
//
//                 $parent   = $(this).parents( '.'+ self.wrapperClass +':first' ),
//                 $target   = $parent.find( '.'+  self.targetClass +':first' );
//
//             if( speed ){
//                 $target[ animation ]( speed );
//             }else{
//                 $target[ animation ]();
//             }
//         });
//     };
//
//     // биндим плагин в jQuery
//     // TODO убрать чертову магию
//     self.initPlugin = function(){
//         (function ( $, window, document ){
//             // объявляем логику
//             var collapseBlock = {
//                 init: function( options, el, Block ){
//                     var
//                         self = this;
//
//                     options = options || {};
//
//                     // выставляем начальные значения
//                     self.wrapperSelector  = options.wrapper;
//
//                     // список классов дял переключения
//                     self.wrapperClass     = Block.wrapperClass;
//                     self.togglerClass     = Block.togglerClass;
//                     self.targetClass      = Block.targetClass;
//
//                     self.breakPoint       = options.breakpoint || 800;
//
//                     self.collapseEnabled  = false;
//                     self.collapseDisabled = true;
//
//                     // подтягиваем элементы
//                     self.togglerElement = $( el );
//                     self.wrapperElement = self.togglerElement.parents( self.wrapperSelector +':first' );
//                     self.targetElement  = self.wrapperElement.find( '.'+ Block.targetClass +':first' );
//
//                     //self.binding();
//                 },
//                 binding: function(){
//                     var
//                         self = this;
//
//                     // вешаем обработку события "resize"
//                     $( window )
//                         .on( 'resize', function(){
//                             if( $( window ).width() <= self.breakPoint ){
//                                 if( !self.collapseEnabled ){
//                                     self.collapseEnabled = true;
//                                     self.collapseDisabled = false;
//                                     self.changeState();
//                                 }
//                             }else{
//                                 if( !self.collapseDisabled ){
//                                     self.collapseDisabled = true;
//                                     self.collapseEnabled = false;
//                                     self.changeState();
//                                 }
//                             }
//                         })
//                         .trigger('resize');
//                 },
//                 changeState: function(){
//                     var
//                         self = this;
//
//                     // переключаем опорные классы
//                     self.wrapperElement
//                         .toggleClass( self.wrapperClass );
//                     self.togglerElement
//                         .toggleClass( self.togglerClass );
//
//                     self.targetElement
//                         .toggleClass( self.targetClass +'--collapse' )
//                         .removeAttr( 'style' );
//                 },
//             };
//
//             // запиливаем соответствующий jQuery плагин
//             $.fn[ self.blockType ] = function( options ){
//                 this.each( function(){
//                     var
//                         collapse  = Object.create( collapseBlock );
//
//                     collapse.init( options, this, self );
//                     collapse.binding();
//                     // и вот тут магия, эта строчка ду нот ворк
//                     //$.data( this, [ self.blockType ], collapse );
//                 });
//
//                 return this;
//             };
//
//         }( jQuery, window, document ));
//     };
//
//     init();
// };
// // ========================================================================
// //                                UI
// // ========================================================================
//
// // здесь расписан дефолтный функционал для блоков и всякие UI штуки.
// // всякие переключалки - вынесены в отдельные файлы шаблонов/блоков
//
// // подключаем функционал переключаемых блоков и их плагинов
// // менюшки
// var menuToggler = new InSales.CollapseBlock({
//     togglerClass: 'js-menu-toggler',
//     wrapperClass: 'js-menu-wrapper',
//     targetClass:  'menu',
//     blockType:    'Menu',
// });
//
// // секции фильтра
// /!*
// var filterSectionToggler = new InSales.CollapseBlock({
//     togglerClass: 'js-filter_section-toggler',
//     wrapperClass: 'js-filter_section-wrapper',
//     targetClass:  'filter_section-values',
//   });
//   *!/
//
// // скрытие группы секций фильтра
// /!*
// var filterToggler = new InSales.CollapseBlock({
//     togglerClass: 'js-filter-sections_toggler',
//     wrapperClass: 'js-filter-sections_wrapper',
//     targetClass:  'filter-hidden_sections',
//   });
//   *!/
//
// // сворачивающиеся блоки
// var accordionToggler = new InSales.CollapseBlock({
//     togglerClass: 'js-accordion-toggler',
//     wrapperClass: 'js-accordion-wrapper',
//     targetClass:  'accordion-content',
//     blockType:    'Accordion',
// });
//
// var filterToggler = new InSales.CollapseBlock({
//     togglerClass: 'js-filter-toggler',
//     wrapperClass: 'js-filter-wrapper',
//     targetClass:  'filter',
//     blockType:    'Filter',
//     breakPoint: 640,
// });
//
// // ========================================================================
// //                       COMMON TOGGLERS FUNCTION
// // ========================================================================
//
// triggerClass = function( obj, from_class, to_class, target_tag ){
//     target_tag = target_tag || 'i';
//
//     obj
//         .find( target_tag )
//         .toggleClass( from_class )
//         .toggleClass( to_class );
// };
//
// // ========================================================================
// //                              STYLE SELECT
// // ========================================================================
//
// styleSelect = function( selector ){
//     $( selector ).each( function(){
//         var
//             parent = $(this).parent();
//
//         if( !parent.hasClass( 'styled_select-wrapper' ) ){
//             $(this).wrap( '<div class="styled_select-wrapper" />' );
//         }
//     });
// };
//
// // ========================================================================
// //                        улучшайзинг стандартной обратной связи
// // ========================================================================
// $( function(){
//
//     var
//         $form = $( '#feedback_form');
//
//     if( $form.is( 'form' ) ){
//         // находим все элементы для стилизации
//         var
//             table     = $form.find( 'table' ),
//             notice    = $form.find( 'small' ),
//             button    = $form.find( '#feedback_commit' ),
//             textarea  = $form.find( 'textarea' ),
//             email     = $form.find( 'input[name="feedback[from]"]' );
//
//         // сносис инлайновые стили
//         $form
//             .removeAttr( 'style' );
//
//         table
//             .find( 'td' )
//             .removeAttr( 'style' );
//
//         // стилизуем поле сообщения и его подсказку
//         textarea
//             .removeAttr( 'style' )
//             .attr( 'title', 'Сообщение' )
//             .addClass('input-field')
//             .parents( 'p:first' )
//             .addClass( 'input input--required' )
//             .append('<div class="input-notice notice notice--danger">Заполните поле</div>')
//             .find( 'label' )
//             .addClass( 'input-label' );
//
//         // стилизуем поле ввода email
//         email
//             .removeAttr( 'size' )
//             .attr({ type: 'email', title: "E-mail" })
//             .addClass('input-field')
//             .parents( 'p:first' )
//             .addClass( 'input input--required' )
//             .append('<div class="input-notice notice notice--danger">E-mail неправильно заполнен</div>')
//             .find( 'label' )
//             .addClass( 'input-label' );
//
//         // чистим таблицу
//         table
//             .removeAttr( 'style' )
//             .find( 'br' )
//             .remove();
//
//         // форматируем начальные подсказки
//         notice
//             .parent()
//             .html( notice.html() )
//             .addClass( 'notice notice--info' );
//
//         // стилизуем кнопку ( отправить )
//         // вешаем обработку
//         button
//             .addClass('button button--action mc-grid-12')
//             .on( 'click', function( e ){
//                 e.preventDefault();
//
//                 sendForm({
//                     form: $form,
//                     from: email.val(),
//                     callback: function(){
//                         $form
//                             .find( '.input-field' )
//                             .val( '' );
//                     }
//                 });
//             });
//     }
// });
//
// // ==============================================================================
// //                            SLIDER ARROWS & ETC
// // ==============================================================================
//
// /!*
// $( document ).on( 'click', '.js-slider-left', function(){
//   $(this)
//     .parents( '.slider:first' )
//       .find( '.slider-container' )
//         .trigger( 'prev.owl.carousel' );
// });
//
// $( document ).on( 'click', '.js-slider-right', function(){
//   $(this)
//     .parents( '.slider:first' )
//       .find( '.slider-container' )
//         .trigger( 'next.owl.carousel' );
// });
// *!/
//
// // ========================================================================
// //                              TABS
// // ========================================================================
//
// $( '.tabs-node' ).on( 'click touchstart', function(){
//     var
//         $unit    = $(this),
//         $content = $unit.parents( '.tabs:first' ).find( '.tabs-content' ),
//         params   = getParams( $unit );
//
//     $unit
//         .siblings( '.tabs-node--active' )
//         .removeClass( 'tabs-node--active' );
//
//     $unit
//         .addClass( 'tabs-node--active' );
//
//     $content
//         .removeClass( 'tabs-content--active' );
//     $( params.target )
//         .addClass( 'tabs-content--active' );
// });
//
// // переключаемся на первую доступную вкладку
// $( function(){
//     $( '.tabs-node:first' )
//         .trigger( 'click' );
// });
//
// // ========================================================================
// //                          COLLECTION FILTER
// // ========================================================================
//
// // перехватваем нажатия на варианты значений
// var
//     targets = '.js-filter_section-value_input, .js-filter_section-value_link';
//
// $('html.desktop').on( 'click', targets, checkFilteValue );
// $('html:not(.desktop)').on('tap', targets, checkFilteValue );
//
// function checkFilteValue(e){
//     var
//         $section_value = $(this).parents( '.filter_section-value:first' ),
//         $checkbox      = $section_value.find( '.js-filter_section-value_input' ),
//         $input         = $section_value.find( '.js-filter_section-characteristic' );
//
//     if( !$(this).hasClass( 'js-filter_section-value_input' ) ){
//         e.preventDefault();
//
//         $checkbox
//             .prop( 'checked', function( i, val ){
//                 return !val;
//             });
//     }
//
//     $input
//         .trigger( 'change' );
// }
//
// // сброс фильтра
// $( document ).on( 'click touchstart', '.js-filter-clear_all', function( e ){
//     e.preventDefault();
//
//     var
//         $form = $(this).parents( 'form:first' );
//
//     $form
//         .find( 'input[type="hidden"]' )
//         .prop( 'disabled', true );
//
//     $form
//         .submit();
// });
//
// // ловим изменение значения в скрытых полях фильтра
// $( document ).on( 'change', '.js-filter_section-characteristic', function(){
//     var
//         $section_value = $(this).parents( '.filter_section-value:first' ),
//         $form          = $(this).parents( 'form:first' ),
//         params         = getParams( $form );
//
//     $(this)
//         .prop( 'disabled', function( i, val ){
//             return !val;
//         });
//
//     $section_value
//         .toggleClass( 'filter_section-value--current' );
//
//     if( params.submit ){
//         $form.submit();
//     }
// });
//
// // ========================================================================
// //                          COLLECTION SORT
// // ========================================================================
//
// $('.js-sort_by').change( function(){
//     $(this)
//         .parents( 'form:first' )
//         .submit();
// });
//
// // ========================================================================
// //                              COMPARE
// // ========================================================================
//
// // дефолтное поведение для переключателя в сравнении
// $( document ).on( 'click', '.js-compare-toggle_same', function( e ){
//     e.preventDefault();
//
//     $( '.js-compare_row--same' )
//         .toggle();
// });
// // ===================================================
// //                      MENU
// // ===================================================
//
// $(function(){
//     // прикручиваем переключение маркеров
//     $(document).on( '_click tap', '.js-menu-toggler', function( e ){
//         e.preventDefault();
//
//         triggerClass( $(this), 'fa-plus', 'fa-minus' );
//     });
//
//     setTimeout( function(){
//         var code = $( '#referer_code_block' ).text();
//         var source_code = $( '.js-referer_code_block' );
//         $.each( source_code, function(){
//             $(this).text( code );
//         });
//     }, 500 );
//
//     // прикручиваем плагин, которые переключает вид меню с брейкпоинта
//     $('.footer_block-title').collapseMenu({
//         wrapper: '.footer_block',
//     });
//
//     var $main_menu = $('.js-menu--main');
//     var $top_menu = $('.js-menu--top');
//
//     if( $main_menu.children().length > 0 ){
//         $main_menu.flexMenu({
//             linkText: "Ещё",
//             linkTextAll: "Каталог",
//             nodeMod: 'menu-node--main_lvl_1 menu-node--main_flex',
//             dropdownMod: 'menu--main_flex menu--main_lvl_2',
//             menuClassPattern: 'main_lvl_',
//             markerClass: 'fa-angle-down',
//             menuMod: 'menu--one_line'
//         });
//     }
//
//     if( $top_menu.children().length > 0 ){
//         $top_menu.flexMenu({
//             linkText: 'Ещё',
//             nodeMod: 'menu-node--top menu-node--top_flex',
//             dropdownMod: 'menu--top_dropdown menu--top_dropdown-left',
//             markerClass: 'fa-angle-down',
//             menuMod: 'menu--one_line'
//         });
//     }
// });
//
// // =================================================================================
// //                                  COLLECTION
// // =================================================================================
// $(function(){
//     // переключалка блока
//     $('.js-filter_section-toggler').on( '_click tap',function(){
//         triggerClass( $(this).find('.filter_section-toggler'), 'fa-chevron-down', 'fa-chevron-up' );
//     });
//
//     // запускаем диапазон. все диапазоны ;)
//     $( '.js-section-range' )
//         .rangeFilter();
//
//     $('.js-filter_section-toggler').on( '_click tap',function(e){
//         var $target = $(e.target);
//         console.log($target);
//         if( !$target.closest('.js-filter_section-clear').length ){
//             var $wrapper = $(this).parents('.js-filter_section-wrapper:first');
//             var $container = $wrapper.find('.filter_section-values');
//
//             filterSectionOpen( $container );
//         }
//     });
//
//     $('.js-filter_section-clear').on( 'click', function(e){
//         e.preventDefault();
//
//         var $wrapper = $(this).parents('.js-filter_section-wrapper:first');
//         var $checkbox = $wrapper.find( '.js-filter_section-characteristic:not(:disabled)' );
//
//         $.each( $checkbox, function(){
//             $(this)
//                 .prop( 'disabled', function( i, val ){
//                     return !val;
//                 });
//         });
//
//         $(this).parents('form:first').submit();
//     });
//
//     var $filter = $('.filter');
//     var breakPoint = $('html').hasClass('desktop') ? 625 : 640;
//
//     $(window).on( 'resize', function(){
//         console.log('resize');
//         if( $(window).width() <= breakPoint ){
//             if( !$filter.attr('style') ){
//                 $filter
//                     .hide();
//             }
//         }
//         else{
//             $filter
//                 .removeAttr('style');
//         }
//     });
//
//     $(window)
//         .trigger('resize');
//
//     if( !$('html').hasClass('desktop') ){
//         $filter.find('.js-filter_section-value_link')
//             .each( function(){
//                 $(this).removeAttr('href');
//             });
//     }
// });
//
//
// function filterSectionOpen( $obj ) {
//     $obj.toggleClass( 'filter_section-values--collapse' );
//
//     if( $obj.hasClass( 'filter_section-values--collapse' ) ){
//         $('body').trigger('tap');
//     }
//     else{
//         setTimeout( function(){
//             $('body').on( 'tap', $obj, filterSectionClose );
//         }, 400 );
//     }
//
// }
//
// function filterSectionClose( event ) {
//     var $obj = event.data;
//
//     if( $(event.target).closest( '.filter_section-values' ).length ) return;
//
//     var $wrapper = $obj.parents('.js-filter_section-wrapper:first');
//     var $toggler = $wrapper.find( '.filter_section-toggler' );
//
//     $toggler.find( 'i' )
//         .removeClass('fa-chevron-up')
//         .addClass('fa-chevron-down');
//
//     $obj.addClass( 'filter_section-values--collapse' );
//
//     $('body').off( 'tap', filterSectionClose );
// }
//
// // =======================================================================================
// //                                      SCROLL PAGE
// // =======================================================================================
//
// $(document).on( 'click', '.js-scrollTop', function(event){
//     //event.preventDefault();
//     console.log( 'click' );
//
//     $('html, body').animate({
//         scrollTop: 0
//     }, 400 );
// });
//
// // =======================================================================================
// //                                      AJAX SEARCH
// // =======================================================================================
//
// $(function(){
//     var ajaxSearch = new InSales.Search();
//
//     Events( 'onAjaxSearch' ).subscribe( function( $data ){
//         //console.log( $data );
//
//         $( '.js-ajax_search-wrapper' )
//             .html( InSales.Render( $data, 'search', 'ajax' ) );
//     });
//
//     // search_widget toggle
//     $( '.js-search_widget-wrapper' )
//         .hide();
//
//     $( document ).on( 'click', '.js-search_widget-toggler', function( e ){
//         e.preventDefault();
//
//         $( '.js-search_widget-wrapper' )
//             .toggle();
//     });
// });
// $( function(){
//     // ui для панели
//     $( '.js-panel-link' ).on( '_click tap', function( e ){
//         e.preventDefault();
//
//         if( $(this).hasClass( 'js-panel-close' ) ){
//             return;
//         }
//
//         var
//             params = getParams( $(this) ),
//             $unit  = $(this),
//             $panels_trig = $( '.js-panel-link.js-panel-close' );
//
//         if( $panels_trig.length > 0 ){
//             $panels_trig
//                 .trigger( 'click' );
//         }
//
//         // flag;
//         params.panel = true;
//
//         $( 'body' )
//             //.css( 'overflow', 'hidden' )
//             .addClass( 'lock_scroll' )
//             .append( '<div class="overlay" />');
//
//         $( params.target ).show();
//
//         setParams( $( '.overlay' ), params );
//
//
//         window.setTimeout( function(){
//             $unit
//                 .toggleClass( 'js-panel-close' );
//         }, 200 );
//     });
//
//     $( document ).on( '_click tap', '.js-panel-close, .overlay', function( e ){
//         e.preventDefault();
//         var
//             params = getParams( $( '.overlay' ) );
//
//         if( params.panel ){
//             $( params.target ).hide();
//             $( '.overlay' ).remove();
//             $( 'body' )
//                 .removeClass( 'lock_scroll' );
//
//             window.setTimeout( function(){
//                 $( '.js-panel-link' )
//                     .removeClass( 'js-panel-close' );
//             }, 200 );
//         }
//     });
//
//     $( window ).on( 'resize', function(){
//         if( $(window).width() > 800 ){
//             $( '.overlay' )
//                 .trigger( 'click' );
//         }
//     });
// });
// // =====================================================================================
// //                                  AJAX ADD TO CART
// // =====================================================================================
//
// // логика кнопки "Купить/в корзину"
// // событие возаращает jQuery-объект кнопки
//
// ajaxBuyButton = function( buttonSelector ){
//     $( document ).on( 'click', buttonSelector, function( e ){
//         e.preventDefault();
//
//         var
//             $data = {
//                 jqObj: $(this),
//             };
//
//         if( !$(this).hasClass( 'button--disabled' ) || $(this).attr( 'disabled' ) != 'disabled' ){
//             Events( 'onBuyButton_Active' ).publish( $data );
//
//             Cart.addItem( $(this).parents( 'form:first'), $(this) );
//         }else{
//             Events( 'onBuyButton_Inactive' ).publish( $data );
//         }
//     });
// };
// // =====================================================================================
// //                                FORM VALIDATION
// // =====================================================================================
//
//
// // TODO: подумать, что сюда надо добавить и как это должно работать
//
// // проверка формы, получает jQuery-объект формы
// checkForm = function( $form ){
//     var
//         $inputs = $form.find( '.input-field' ),
//         errors  = [],
//
//         email_reg = /^[\w-\.]+@[\w-]+\.[a-z]{2,3}$/i;
//
//     $inputs.each( function() {
//         var
//             $input      = $(this).parents( '.input:first' ),
//             is_required = false,
//             is_captcha  = false,
//             is_email    = false;
//
//         // поле обязательно?
//         if( $input.hasClass( 'input--required' ) || $(this).attr('required') ){
//             is_required = true;
//         }
//
//         // является капчей?
//         if( $input.hasClass( 'input--captcha' ) ){
//             is_captcha = true;
//         }
//
//         if( $(this).attr('type') == 'email' ){
//             is_email = true;
//         }
//
//         // если поле обязательно
//         if( is_required ){
//             // и поле незаполнено
//             if( $(this).val() === '' ){
//                 errors.push({
//                     title: $(this).attr('title'),
//                     jqObj: $(this),
//                 });
//             }
//             // или поле является почтой и там введена фигня
//             else if( is_email && !email_reg.test( $(this).val() ) ){
//                 errors.push({
//                     title: $(this).attr('title'),
//                     jqObj: $(this),
//                 });
//             }
//             // или капча и вбито не число
//             else if( is_captcha && !$.isNumeric( $(this).val() ) ){
//                 errors.push({
//                     title: $(this).attr('title'),
//                     jqObj: $(this),
//                 });
//             }
//         }
//     });
//
//     markFormErrors( errors );
//
//     return errors;
// };
//
// markFormErrors = function( $errors ){
//     $.each( $errors, function( index, error ){
//         //console.log( error.title );
//         error.jqObj
//             .parent()
//             .addClass('input--error');
//     });
// };
//
// $(function(){
//     $( document ).on( 'click', '.input-field', function(){
//         var
//             $input = $(this).parent();
//
//         if( $input.hasClass( 'input--error' ) ){
//             $input.removeClass( 'input--error' );
//         }
//     });
// });
//
// // принимает jQuery-объект формы
// sendForm = function( options ){
//     //$form, from, subject
//     var
//         $form    = options.form,
//         from     = options.from,
//         subject  = options.subject,
//         errors   = checkForm( $form ),
//         content  = '',
//         $message = {},
//         $inputs  = $form.find( '.input-field' );
//
//     // проверяем на ошибки
//     if( errors.length > 0 ){
//         return;
//     }
//
//     // собираем наше сообщение из формы в вид, которым оперирует платформа
//     $inputs.each( function( index, field ){
//         content +=
//             $(this).attr( 'title' ) +': '+ $(this).val() +'\n';
//     });
//
//     // собираем сообщение для платформы с правильными полями
//     $message[ 'feedback[content]' ] = content;
//
//     if( from ){
//         $message[ 'feedback[from]' ] = from;
//     }
//
//     if( subject ){
//         $message[ 'feedback[subject]' ] = subject;
//     }
//
//     showPreloader();
//
//     // возвращаем Deferred объект
//     InSales.sendMessage( $message )
//         .done( function( response ){
//             hidePreloader();
//
//             if( response.status == 'ok' ){
//
//                 if( options.callback ){
//                     options.callback();
//                 }
//
//                 showMessage( response.notice );
//             }
//         })
//         .fail( function(){
//             hidePreloader();
//         });
// };
// // ==============================================================================
// //                                  SLIDER
// // ==============================================================================
//
// $(function(){
//     $( '.js-slider--products' ).owlCarousel({
//         responsive: {
//             0:    { items: 1 },
//             480:  { items: 2 },
//             640:  { items: 3 },
//             800:  { items: 3 },
//             1100: { items: 4 },
//         },
//         slideBy: 'page',
//         navClass: [ 'button', 'button' ],
//         margin: 32,
//     });
//
//     $( '.js-slider--gallery' ).owlCarousel({
//         responsive: {
//             0:    { items: 1 },
//             480:  { items: 1 },
//             640:  { items: 1 },
//             800:  { items: 3 },
//             1100: { items: 3 },
//         },
//         slideBy: 'page',
//         navText: [ '<i class="fa fa-angle-left" />', '<i class="fa fa-angle-right" />' ],
//         margin: 16,
//     });
// });
// // =====================================================================================
// //                                QUANTITY
// // =====================================================================================
//
//
// // NOTE!!
// // терминальные случаи,
// // вроде того, что на складе доступно меньше минимального для счетчика количества товаров,
// // нужно обрабатывать в шалоне, например через liquid
//
// (function ( $, window, document ){
//
//     // объявляем логику
//     var quantity = {
//         // инициализация,
//         //
//         // options - настройки. можно передать классы элементов для поиск
//         //    - plusSelector, клас кнопки "минус"
//         //    - minusSelector, класс кнопки "плюс"
//         //    - inputSelector, класс поля ввода
//         //
//         // qntty_container - контейнер счетчика
//         init: function( options, qntty_container ){
//             var
//                 self    = this,
//                 params  = {},
//                 mod     = 0;
//
//             options = options || {};
//
//             options.plusSelector  = options.plusSelector  || '.js-quantity-plus';
//             options.minusSelector = options.minusSelector || '.js-quantity-minus';
//             options.inputSelector = options.inputSelector || '.js-quantity-input';
//
//             if( !options.units ){
//                 options.units = {
//                     "шт": 0,
//                     "кг": 1,
//                     "упак": 0,
//                     "л; дм3": 2,
//                     "м": 2,
//                     "м2": 2,
//                     "г": 0,
//                     "т": 3
//                 };
//             }
//
//             self.container  = $( qntty_container );
//
//             self.isLess = false;
//             self.isMore = false;
//
//             // привязываем кнопки и поле ввода
//             self.plusElement  = self.container.find( options.plusSelector );
//             self.minusElement = self.container.find( options.minusSelector );
//             self.inputElement = self.container.find( options.inputSelector );
//
//             // тянем параметры счетчика
//             params = getParams( self.inputElement );
//
//             // настройки упаковок товара
//             self.packSize = parseFloat( params.pack ) || 1;
//
//             // настройки единиц измерения
//             self.unit = params.unit || "шт";
//             self.decimal = options.units[ self.unit ];
//
//             // вариант логики.
//             // если указаны упаковки, то проверка для поля ввода должна происходить после .blur()
//             if( params.pack ){
//                 self.packLogic = true;
//             }else{
//                 self.packLogic = false;
//             }
//
//             // настройки минимума и максимума
//             // min & max - из параметров тега
//             // minCheck & maxCheck - параметры для сравнения. приводятся к кратному виду.
//             self.max = parseFloat( params.max ) || 100000000;
//             self.min = parseFloat( params.min ) || 1;
//
//             if( self.decimal === 0 ){
//                 self.min = parseFloat( params.min ) || 1;
//             }
//             else{
//                 self.min = parseFloat( params.min ) || 0;
//             }
//
//             /!*
//       if( self.min < self.packSize ){
//         self.min = self.packSize;
//       }
//       *!/
//             self.minCheck = self.min;
//
//             // правим максимум так, чтобы он был кратен,
//             self.maxCheck = self.max;
//             if( self.packLogic ){
//                 mod = self.max % self.packSize;
//                 if( mod !== 0 ){
//                     self.maxCheck = self.maxCheck - mod;
//                 }
//             }
//
//             // выставляем стартовое кол-во
//             self.current = parseFloat( self.inputElement.val() );
//
//             if( self.current < self.minCheck ){
//                 self.current = self.minCheck;
//             }
//
//             self.countCheck = self.current;
//
//             self.inputElement.val( self.current.toFixed( self.decimal ) );
//
//             // вешаем события на элементы
//             self.plusElement
//                 .on( 'click', function( e ){
//                     e.preventDefault();
//
//                     self.countCheck += self.packSize;
//                     self.check();
//                 });
//
//             self.minusElement
//                 .on( 'click', function( e ){
//                     e.preventDefault();
//
//                     self.countCheck -= self.packSize;
//                     self.check();
//                 });
//
//             self.inputElement
//                 /!*
//         .on( 'keyup', function( e ){
//           //
//           var
//             codes = {
//               //8:  true, //backspace
//               //46: true, // delete
//               37: true,
//               38: true,
//               39: true,
//               40: true,
//             };
//
//           self.countCheck = parseFloat( self.inputElement.val() );
//
//           // если нажали "функциональную клавишу" - забиваем
//           if( codes[ e.keyCode ] ){
//             return false;
//           }
//
//           // если вводим что-то кроме цифр - забиваем
//           if( isNaN( self.countCheck ) ){
//             self.inputElement.val( '' );
//             return false;
//           }
//
//           // если у нас не указаны упаковки,
//           // то проверяем корректность на вводе
//           // иначе - при потере фокуса
//           if( !self.packLogic ){
//             self.check();
//           }
//         })
//         *!/
//                 .on( 'blur', function( e ){
//                     self.countCheck = parseFloat( self.inputElement.val() );
//
//                     if( isNaN( self.countCheck ) ){
//                         self.countCheck = self.packSize;
//                     }
//
//                     self.check();
//                 });
//
//             // прибиваем настройки
//             self.options = $.extend( {}, self.container.data(), options );
//         },
//         check: function(){
//             var
//                 self   = this,
//                 mod = 0;
//
//             self.isLess = false;
//             self.isMore = false;
//
//             // приводим введеное кол-во к кратному виду
//             if( self.packLogic ){
//                 mod = self.countCheck % self.packSize;
//                 if( mod !== 0 ){
//                     self.countCheck = self.countCheck - mod + self.packSize;
//                 }
//             }
//
//             if( self.countCheck < self.minCheck ){
//                 self.countCheck = self.minCheck;
//                 self.isLess = true;
//             }
//
//             if( self.countCheck >= self.maxCheck ){
//                 self.countCheck = self.maxCheck;
//                 self.isMore = true;
//             }
//
//             self.current = self.countCheck;
//
//             $data = makeData( self );
//
//             self.inputElement
//                 .val( self.current.toFixed( self.decimal ) )
//                 .trigger( 'change' );
//
//             Events( 'onQuantity_Change' ).publish( $data );
//         },
//     };
//
//     // навешиваем все это на каждый объект
//     // так же проверяем, инициировали мы этот эелемент или еще нет
//     $.fn.quantity = function( options ){
//         this.each( function(){
//             if( !$(this).data( 'quantity' ) ) {
//                 var
//                     prices = Object.create( quantity );
//
//                 prices.init( options, this );
//                 $.data( this, "quantity", prices );
//             }
//         });
//
//         return this;
//     };
//
// }( jQuery, window, document ));
// // =====================================================================================
// //                                MODALS
// // =====================================================================================
//
// /!*
//   все function name тащим из modalHelper'a
//
//   closeCbk: function name   - что делаем при закрытии окна
//   confirmCbk: function name - что делаем при подтверждении
//   readyCbk: function name   - что делаем после полной отрисовки окна
// *!/
//
//
// modal = function () {
//     var
//         self = this;
//
//     // вывод модалки
//     self.show = function ($data) {
//         // добавляем данные в параметры
//         $data = self.makeData( $data );
//
//         // выводим шаблон модалки
//         self.render( $data );
//     };
//
//     // рендер модалки
//     self.render = function( $data ){
//         var
//             $modal = $( 'div.modal' );
//
//         $( 'body' ).append( InSales.Render( $data, 'modal', $data.template ) );
//
//         $modal = $( 'div.modal' );
//
//         // показываем оверлей
//         // либо дефолтный с бекграундом, либо прозрачный
//         if( $data.overlay ){
//             $( 'body' ).append( '<div class="overlay"></div>' );
//         }else{
//             $( 'body' ).append( '<div class="overlay overlay--opacity"></div>' );
//         }
//
//         // навешиваем параметры на элементы
//         setParams( $modal, $data );
//         setParams( $( '.overlay' ), $data );
//         setParams( $( '.js-modal-close' ), $data );
//         setParams( $( '.js-modal-confirm' ), $data );
//
//         changeCss( $modal );
//
//         $( window ).on( 'resize scroll', self.resizeModal );
//
//         // дергаем функцию после отрисовки.
//         if( $data.readyCbk ){
//             $data.readyCbk( $data );
//         }
//     };
//
//     // закрытие модалки
//     self.close = function(){
//         $( window ).off( 'resize scroll', self.resizeModal );
//
//         $( '.modal' ).remove();
//         $( '.overlay' ).remove();
//     };
//
//     self.resizeModal = function(){
//         changeCss( $( 'div.modal' ) );
//     };
//
//     // собираем данные и приводим в порядок
//     self.makeData = function( $data ){
//         // тянем верстку из целевого блока
//         if( $data.target ){
//             $data.content = $( $data.target ).html();
//         }
//
//         // надо собрать статичтику по задачам и решениям, и найти красивое решение
//         if( $data.readyCbk && typeof( $data.readyCbk ) != 'function' ){
//             $data.readyCbk = modalHelper[ $data.readyCbk ];
//         }
//
//         if( $data.confirmCbk && typeof( $data.confirmCbk ) != 'function' ){
//             $data.confirmCbk = modalHelper[ $data.confirmCbk ];
//         }
//
//         if( $data.closeCbk && typeof( $data.closeCbk ) != 'function' ){
//             $data.closeCbk = modalHelper[ $data.closeCbk ];
//         }
//
//         // если требуется показать шаблон формы
//         // прикручиваем колбек проверки и отправки
//         if( $data.template == 'form' ){
//             $data.confirmCbk = modalHelper.confirmForm;
//             $data.readyCbk   = modalHelper.readyForm;
//
//             // проходим по поляем и приводим их к единому виду
//             $.each( $data.fields, function( index, field ){
//                 field.type = field.type || 'text';
//
//                 if( field.name == 'email' ){
//                     field.type = 'email';
//                     field.error = 'не верно введен e-mail';
//                 }
//
//                 field.error = field.error || 'поле не заполнено';
//             });
//         }
//
//         return $data;
//     };
// };
//
// //  =================================================================================
// //                                    MODAL UI
// // ==================================================================================
//
// var
//     modal = new modal();
//
// // показываем модалку по клику
// $( document ).on( 'click', '.js-modal-link, js-modal-open', function( e ){
//     e.preventDefault();
//
//     var
//         params = getParams( $(this) );
//
//     // тянем title
//     params.title = params.title || $(this).attr( 'title' );
//
//     modal.show( params );
// });
//
// // закрытие модалки
// $( document ).on( 'click', '.js-modal-close, .overlay', function( e ){
//     e.preventDefault();
//     var
//         params = getParams( $(this) );
//
//     //closeCbk = $(this).data( 'params' ).closeCbk;
//     if( params.template ){
//         // проверяем, есть ли у нас какие-то действия на закрытие окна?
//         if( params && params.closeCbk ){
//             // если да, то запускаем callback и после этого закрываем окно
//             $.when( params.closeCbk( $( '.modal' ) ) )
//                 .done( closeModal() );
//         }else{
//             // либо просто закрываем окно
//             modal.close();
//         }
//     }
// });
//
// // кнопка подтверждения
// $( document ).on( 'click', '.js-modal-confirm', function( e ){
//     e.preventDefault();
//     var
//         $data  = getParams( $(this) );
//
//     console.log( $data );
//
//     if( $data.confirmCbk ){
//         $data.confirmCbk( $data );
//     }
// });
//
// // ====================================================================================
// //                              Helper
// // ====================================================================================
// var modalHelper = {
//     // дефолтный колбек для модалки с формой
//     confirmForm: function( $data ){
//         var
//             $form    = $( 'div.modal form' ),
//             errors   = checkForm( $form ),
//             content  = '',
//             $message = {};
//
//         sendForm({
//             form: $( 'div.modal form' ),
//             from: $data.from,
//             subject: $data.subject,
//             callback: modal.close
//         });
//
//         /!*
//     // проверяем на ошибки
//     if( errors.length > 0 ){
//       return;
//     }
//
//     // собираем наше сообщение из формы в вид, которым оперирует платформа
//     $.each( $data.fields, function( index, field ){
//       var
//         $input = $form.find( '[name="'+ field.name +'"]' );
//
//       content +=
//         field.title +': '+ $input.val() +'\n';
//     });
//
//     // собираем сообщение для платформы с правильными полями
//     $message[ 'feedback[content]' ] = content;
//
//     if( $data.from ){
//       $message[ 'feedback[from]' ] = $data.from;
//     }
//
//     if( $data.subject ){
//       $message[ 'feedback[subject]' ] = $data.subject;
//     }
//
//     // отправка и красивости
//     InSales.sendMessage( $message )
//       .done( function( response ){
//         console.log( response );
//         if( response.status == 'ok' ){
//
//           modal.close();
//           showMessage( response.notice );
//         }
//       });
//     *!/
//     },
//
//     // дергаем плагины после отрисовки модалки
//     readyForm: function( $data ){
//         $( 'div.modal form' )
//             .find( '[name="phone"]')
//             .mask('+7(999)999-99-99');
//     },
//
//     // скилет для сложных колбеков
//     modalCallbackSkelet: function( $data ){
//         var
//             dfd = $.Deferred();
//
//         // далее своя логика, ajax и прочее
//         // в том месте, где мы закончили собирать данные ставим
//         dfd.resolve( $data );
//
//         return dfd.promise();
//     },
// };
// $(function(){
//     $( '.js-popup-form' ).on( 'click', function(){
//         var
//             $data = {
//                 template: 'form',
//                 header: "Задайте Ваш вопрос",
//                 fields: [
//                     {
//                         required: true,
//                         label: 'Имя', title: 'Имя',
//                         name: 'name', placeholder: 'введите имя',
//                     },
//                     {
//                         required: true,
//                         label: 'E-mail', title: 'E-mail',
//                         name: 'email', placeholder: 'введите e-mail',
//                     },
//                     {
//                         required: true,
//                         label: 'Телефон', title: 'Телефон',
//                         name: 'phone', placeholder: 'введите телефон',
//                         error: 'Не правильно введен телефон',
//                     },
//                     {
//                         required: true,
//                         label: 'Ваш вопрос', title: 'Ваш вопрос',
//                         type: 'textarea', name: 'content', placeholder: 'Ваш вопрос',
//                     },
//                 ],
//                 from: 'test@poligon.ru',
//                 subject: 'test email',
//             };
//
//         modal.show( $data );
//     });
// });
// // ======================================================================================
// //                                              COMMENTS
// // ======================================================================================
//
// $(function(){
//     var anchor = document.location.hash;
//
//     console.log( anchor );
//
//     /!*
//   * учтите, что tap на не трогательных устройствах пораждает клик!!!
//   *!/
//
//     if( anchor == '#comments' || anchor == '#comment_form' || anchor == '#review_form' || anchor == '#reviewes' ){
//         $( '.js-tab-review' )
//             .trigger( 'click' )
//             .trigger( 'tap' );
//         $( '.js-accordion-review' )
//             .trigger( 'click' )
//             .trigger( 'tap' );
//         $( window ).scrollTo( '.review_form', 400 );
//     }
//
//     $( '.js-review-toggle' ).click( function(e){
//         e.preventDefault();
//         $( '.js-review' ).toggle();
//     });
//
//     /!* цепляем рейтинги *!/
//     $( '.js-rating' ).barrating();
//
//     $( '.js-rating-read_only' ).barrating({
//         readonly: true,
//     });
//
//     /!* вешаем проверку формы *!/
//     $( '.js-review-submit' ).on( 'click', function( e ){
//         e.preventDefault();
//
//         var
//             $form  = $(this).parents( 'form:first' ),
//             errors = checkForm( $form );
//
//         if( errors.length > 0 ){
//             return;
//         };
//
//         $form.submit();
//     });
// });
// $(function(){
//     // разметка для блоков
//     var $steps = $( '.set > .set-title' );
//     var is_step_checkout = false;
//
//     if( $steps.length == 4 ){
//         is_step_checkout = true;
//
//         $steps
//             .addClass( 'step-title row' );
//     }
//
//     var
//         is_checkout = !Site.template || Site.template == 'account.orders' || Site.template == 'order' || Site.template == 'checkout';
//
//     // если мы не в пошаговом офрмлении
//     if( !is_step_checkout ){
//         $( '.set:not(.wide_set) .set-block' )
//             .addClass( 'lg-grid-8 sm-grid-12 padded-sides padded-bottom' );
//     }else{
//         $( '.set' )
//             .addClass( 'lg-grid-8 sm-grid-12 padded-sides padded-bottom' );
//
//         // перелопачиваем верстку для шагов оформления заказа
//         $('.step-title').each(function(){
//             var cN = this.childNodes;
//             for (var i=0, l=cN&&cN.length||0; i<l; i++) {
//                 if (cN[i].nodeType == 3 && String(cN[i].nodeValue).split(/\s/).join('')) {
//                     str = cN[i].nodeValue;
//                     $( cN[i] ).remove();
//                 }
//             }
//
//             // оборачиваем название шага в свой класс
//             $(this).prepend( '<span class="step-name">'+ str + '</span>' );
//
//             $( '.past_step a' )
//                 .addClass( 'button' );
//         });
//     }
//
//     $( '.set-block' )
//         .addClass( 'row' );
//
//     $( '.body' )
//         .addClass( 'checkout' );
//
//     // если блок полноразмерный - ставим нужный класс
//     $( '.wide_set .set-block' )
//         .addClass( 'lg-grid-12' );
//
//     // делаем обертку с нормальным margin
//     $( '.wide_set' )
//         .parent()
//         .removeClass( 'grid-row' );
//
//     // выставляем классы для сайдбара
//     $( '.set-sidebar' )
//         .addClass( 'lg-grid-4 sm-grid-12 padded-sides' );
//
//     // форматируем блок "для новых пользовательй" в оформлении товара
//     $( '#registered_client' )
//         .addClass( 'lg-grid-6 xs-grid-12 lg-fr' )
//         .addClass( 'lg-padded-left xs-padded-zero-left' );
//
//     // определяем вид блока "для зарегистрированнх пользователей"
//     // тут есть тонкость, что на разных шаблонах она имеет разную верстку
//     // так же сделана защита от того, что мы можем быть на дргуой странице
//     // типа "вход с паролем" и т.п.
//
//     // если это одностраничник
//     if( !is_step_checkout ){
//         if( $( '#regular_client' ).parent().is( 'div' ) ){
//             $( '#regular_client' )
//                 .parent()
//                 .addClass( 'lg-grid-6 md-grid-6 sm-grid-6 xs-grid-12' )
//                 .addClass( 'lg-padded-right xs-padded-zero-right' );
//         }
//         // если это пошаговая
//     }else{
//         if( $( '#regular_client' ).parent().is( 'form' ) ){
//             $( '#regular_client' )
//                 .parent()
//                 .addClass( 'lg-grid-6 xs-grid-12' )
//                 .addClass( 'lg-padded-right xs-padded-zero-right' );
//         }
//     }
//
//     // поля ввода
//     var $input = $( '.field' );
//
//     $input.addClass( 'input' );
//     $input
//         .find( '.field-label' )
//         .addClass( 'input-label' )
//         .removeAttr( 'style' );
//
//     // перелопачиваем верстку для обязательных полей и вешаем свои классы
//     var $required = $input.find( '.input-label > span.warning' );
//
//     $required.each( function(){
//         $(this)
//             .parents( '.input:first' )
//             .addClass( 'input--required' );
//         $(this).remove();
//     });
//
//     // очищаем инлайновые стили
//     $input
//         .find( '.field-content input:not(.button, [type="checkbox"])' )
//         .addClass( 'input-field' )
//         .removeAttr( 'style' );
//     $input
//         .find( '.field-content textarea' )
//         .addClass( 'input-field' )
//         .removeAttr('style');
//
//     $input
//         .find( '.field-content' )
//         .removeAttr( 'style' );
//
//     $( '#captcha_challenge' )
//         .addClass( 'input-captcha' )
//         .parents( '.input:first' )
//         .addClass( 'input--captcha' );
//
//     // делаем клевые подсказки
//     var $input_notice = $( '.field-content' ).find( '.small' );
//
//     $input_notice.each( function(){
//         if( $(this).text().trim() !== '' ){
//             $(this)
//                 .addClass( 'notice notice--info' );
//         }
//     });
//
//     // украшаем наш селект
//     if( is_checkout ){
//         //styleSelect( 'select' );
//     }
//
//     // инитим то, что появляется позже
//     window.setTimeout( function(){
//         //styleSelect( 'select#shipping_address_state' );
//     }, 500 );
//
//     // фикс для страны доставки.
//     // есть странны, для которых корода выводятся в виде селекта
//     // а для других - поле ввода
//     $( '#shipping_address_country' )
//         .on( 'change', function(){
//             // нужен для того, чтобы отработать после плагина, который тянет данные и делает верстку
//             window.setTimeout( function(){
//                 var $state = $( '#shipping_address_state' );
//
//                 if( $state.is( 'input' ) ){
//                     //console.log( 'input' );
//                     $state
//                         .parent()
//                         .removeClass( 'styled_select-wrapper' );
//
//                     $state
//                         .addClass( 'input-field' );
//                 }
//                 else if( $state.is( 'select' ) ){
//                     //console.log( 'select' );
//                     //styleSelect( 'select#shipping_address_state' );
//                 }
//             }, 100 );
//         });
//
//     // цены
//     $( 'td.price' )
//         .addClass( 'prices' )
//         .find( 'span' )
//         .addClass( 'prices-current' );
//
//     $( 'p.price' )
//         .addClass( 'prices-current' );
//
//     // заголовки
//     $( '.set-title:not( .step-title )' )
//         .addClass( 'content-title' );
//     $( '.step-title > span' )
//         .addClass( 'step-name' );
//
//     // оборачиваем кнопку "Оформить заказ"
//     $( '#create_order' )
//         .removeAttr( 'style' )
//         .wrap( '<div class="center" />' );
//
//     // вешаем стилизацию для всяких статусов, сообщений подсказок
//     $( '.error, .red' )
//         .addClass( 'notice notice--danger' );
//
//     $( '.green' )
//         .addClass( 'notice notice--success' );
//
//     $( '.message .notice' )
//         .addClass( 'notice notice--info' );
//
//     // делаем "адаптивную" таблицу
//     $( '#orders_history, .table' )
//         .wrap( '<div class="table-responsive" />' );
//
//     // кнопоки
//     // вернутсья в магаз
//     $( '.back_to_shop' )
//         .addClass( 'button' );
//
//     // общие кнопки
//     $( 'input[type="submit"]' )
//         .addClass( 'mc-grid-12' );
//
//     // кнопки "действия"
//     $( '#create_order, [name="commit"], .back_to_shop' )
//         .addClass( 'button--buy_invert mc-grid-12' );
//
//     // Кнопка "разлогиниться""
//     $( 'a[data-method="delete"]' )
//         .addClass( 'button' )
//         .parent()
//         .siblings('#regular_client')
//         .css({
//             'line-height': '35px',
//             'margin-right': '0.5em'
//         });
//
//     var text = $( '.set-title.content-title:first' ).text();
//     if( text.indexOf( 'Состав заказа' ) > -1 ){
//         $( '.input' )
//             .addClass( 'input--titled' );
//
//         $( '.field-content' )
//             .addClass( 'input-value' );
//     }
//
//     $( 'a[href="/address/new"], a[href="/delivery/new"]' )
//         .addClass( 'button' );
//
//     // вешаем плагин на телефон
//     $( '#shipping_address_phone, #client_phone' )
//         .mask('+7(999)999-99-99');
//
//     // ломаем бонусную систему
//     $( '#order_client_bonus_system' )
//         .parents( 'td:first' )
//         .addClass( 'order_client_bonus_system' );
// });
// (function ( $, window, document ){
//
//     var Range = {
//         init: function( options, range_container ){
//             var
//                 self    = this,
//                 options = options || {},
//                 params  = {},
//                 temp;
//
//             // определяем классы элементов
//             options.min_textSelector  = options.min_textSelector  || '.js-range-min_text';
//             options.max_textSelector  = options.max_textSelector  || '.js-range-max_text';
//             options.min_inputSelector = options.min_inputSelector || '.js-range-min_input';
//             options.max_inputSelector = options.max_inputSelector || '.js-range-max_input';
//             options.rangeSelector     = options.rangeSelector     || '.js-range';
//
//             // прибиваем все элементы
//             self.container = $( range_container );
//             self.min_text  = self.container.find( options.min_textSelector );
//             self.max_text  = self.container.find( options.max_textSelector );
//             self.min_input = self.container.find( options.min_inputSelector );
//             self.max_input = self.container.find( options.max_inputSelector );
//             // тут немного магии - нам нужен конкретно сам DOM узел
//             temp              = self.container.find( options.rangeSelector );
//             self.rangeElement = temp.get( 0 );
//
//             // тащим параметры
//             params = getParams( temp );
//
//             self.type = params.type || 'property';
//
//             if( params.submit === false ){
//                 self.submit = false;
//             }else{
//                 self.submit = true;
//             }
//
//             temp = getParams( temp.parents( 'form:first' ) );
//             if( temp.submit === false ){
//                 self.submit = false;
//             }
//
//             self.step   = params.step   || false;
//             self.margin = params.margin || 1;
//
//             // тащим параметры для палгина
//             if( self.type == 'property' ){
//                 self.start = [
//                     params.start,
//                     params.end
//                 ];
//                 self.range = {
//                     'min': params.min,
//                     'max': params.max
//                 };
//             }else{
//                 self.start = [
//                     Site.filter.price_min,
//                     Site.filter.price_max
//                 ];
//                 self.range = {
//                     'min': Site.collection.price_min,
//                     'max': Site.collection.price_max
//                 };
//             }
//
//             // определяем, залочен он у нас или нет
//             if( ( self.range.min < self.start[ 0 ] ) || ( self.start[ 1 ] < self.range.max ) ){
//                 self.disabled = false;
//             }else{
//                 self.disabled = true;
//             }
//
//             self.slider();
//             self.binding();
//         },
//
//         slider: function(){
//             var
//                 self   = this,
//                 config = {};
//
//             config = {
//                 start:   self.start,
//                 range:   self.range,
//                 connect: true,
//                 margin:  self.margin,
//                 format:  {
//                     to: function ( value ) {
//                         return parseInt( value );
//                     },
//                     from: function ( value ) {
//                         return value.replace(',-', '');
//                     }
//                 }
//             };
//
//             if( self.step ){
//                 config.step = self.step;
//             }
//
//             noUiSlider.create( self.rangeElement, config );
//         },
//
//         binding: function(){
//             var
//                 self = this;
//
//             self.rangeElement
//                 .noUiSlider
//                 .on( 'update', function( values, handle ){
//                     var
//                         value = values[ handle ];
//
//                     if( handle ){
//                         // если дернули правый ползунок
//                         self.max_input.val( value );
//                         self.max_text
//                             .val( value )
//                             .text( value );
//                     }else{
//                         // если левый ползунок
//                         self.min_input.val( value );
//                         self.min_text
//                             .val( value )
//                             .text( value );
//                     }
//                 });
//
//             self.rangeElement
//                 .noUiSlider
//                 .on( 'set', function(){
//                     if( self.is_changed() ){
//                         self.min_input
//                             .removeAttr( 'disabled' );
//
//                         self.max_input
//                             .removeAttr( 'disabled' );
//
//                         if( self.submit ){
//                             self.container
//                                 .parents( 'form:first' ).submit();
//                         }
//                     }
//                 });
//
//             if( self.min_text.is( 'input' ) ){
//                 self.min_text
//                     .on( 'change', function(){
//                         self.rangeElement
//                             .noUiSlider
//                             .set( [ $(this).val(), null ] );
//                     });
//             }
//
//             if( self.max_text.is( 'input' ) ){
//                 self.max_text
//                     .on( 'change', function(){
//                         self.rangeElement
//                             .noUiSlider
//                             .set( [ null, $(this).val() ] );
//                     });
//             }
//
//             self.min_input
//                 .attr('disabled', self.disabled );
//             self.max_input
//                 .attr('disabled', self.disabled );
//         },
//         is_changed: function(){
//             return true;
//         }
//     };
//
//     // навешиваем все это на каждый объект
//     // так же проверяем, инициировали мы этот эелемент или еще нет
//     $.fn.rangeFilter = function( options ){
//         this.each( function(){
//             if( !$(this).data( 'rangeFilter' ) ) {
//                 var
//                     rangeFilter = Object.create( Range );
//
//                 rangeFilter.init( options, this );
//                 $.data( this, "rangeFilter", rangeFilter );
//             }
//         });
//
//         return this;
//     };
//
// }( jQuery, window, document ));
// // =======================================================================
// //                        OPTIONS SELECTOR
// // ver 0.9
// //
// // отличия:
// // - использование шаблонизатора ECT для рендера селекторов
// // - скрипт разбит на несколько функциональных блоков
// //
// // =======================================================================
//
// InSales.OptionSelectors = function( $config ){
//     var
//         Base = this;
//
//     // основная логика вывода и построения селекторов
//     build = function(){
//         // готовим общие переменные и прочие ништяки
//         var
//             $select_wrapper = Base.main_owner.find('div.option_selector'),
//             render_type     = '',
//             selectors       = '';
//
//         $select_wrapper.remove();
//
//         // проверяем, было ли измнено значение основного селекта внешним способом
//         if( Base.modification_select.val() != Base.treeHelpers.get_variant() ){
//             Base.optionsHelpers.set_by_variant( parseInt( Base.modification_select.val() ) );
//         };
//
//         // основной цикл отрисовки селетора
//         $.each( Base.options, function( option_index, $option ) {
//             var
//                 title           = $option.title.toLowerCase(),
//                 selected_option = $option.selected,
//                 option_title    = Base.settings.labels[ title ] || $option.title;
//             render_type     = Base.settings.params[ title ] || Base.settings.default_type,
//                 $variants       = Base.treeHelpers.get_level( option_index );
//
//             // сборка селектора
//             selectors +=
//                 '<div class="option_selector '+
//                 'option_selector--'+ $option.name +' ' +
//                 'option_selector--'+ render_type +'"">'+
//
//                 '<label class="option_selector-label '+
//                 'option_selector-label--'+ $option.name +'">'+
//                 option_title +
//                 '</label>'+
//
//                 '<div class="option_selector-container '+
//                 'option_selector-container--'+ $option.name +'" >'+
//                 Base.render[ render_type ]( $variants, option_index, selected_option ) +
//                 '</div>'+
//                 '</div>';
//         });
//
//         Base.main_owner.append(selectors);
//     };
//
//     init = function(){
//         // старт отрисовки
//         // готовим настройки, дерево вариантов модификаций, общие переменные и прочее
//         var
//             url_variant_id = getUrlValuy( 'variant_id' ),
//             $product       = $config.product;
//
//         Base.settings       = new InSales.selectorSettings( $config, Base );
//         Base.main_owner     = Base.modification_select.parent();
//         Base.treeHelpers    = new InSales.variantsTree( $product, Base );
//         Base.optionsHelpers = new InSales.productOptions( $product, Base );
//         Base.render         = new InSales.singleOption( Base );
//         Base.variants       = {};
//
//         $.each( $product.variants, function( index, $variant ){
//             Base.variants[ $variant.id ] = $variant;
//         });
//
//         // проверяем, есть ли в адресной строке выбранный вариант. Фикс для Яндекса
//         if( url_variant_id != '' ){
//             Base.modification_select.val( url_variant_id );
//         };
//
//         // запускаем отрисовку и вешаем обновление на первый селектор.
//         Base.modification_select
//             .hide()
//             .on( 'change', function(){
//                 build();
//
//                 // выполняем callback
//                 // возможно проще собрать нужную инфу и скинуть черз событие
//                 var
//                     variant_id = Base.treeHelpers.get_variant(),
//                     $data      = {};
//
//                 $data = {
//                     variant: Base.variants[ variant_id ],
//                     jqObj: Base.modification_select,
//                     is_disabled: Base.settings.disableOnStart(),
//                 };
//
//                 Events( 'onProductOption_Changed' ).publish( $data );
//             })
//             .trigger( 'change' );
//     };
//
//     init();
// };
// // функции для работы со свойствами модификаций
// InSales.productOptions = function( $product, Base ){
//     var
//         self = this;
//
//     // инициализация
//     self.init = function(){
//         var
//             $level = Base.tree;
//
//         Base.options = {};
//
//         $.each( $product.option_names, function( index, $option ){
//             var
//                 $first      = Base.treeHelpers.get_first( $level ),
//                 is_disabled = false;
//
//             if( Base.settings.disableOnStart() ){
//                 is_disabled = true;
//             };
//
//             Base.options[ index ] = {
//                 id:       $option.id,
//                 title:    $option.title,
//                 selected: $first.position,
//                 name:     translit( $option.title ),
//                 disabled: is_disabled,
//             };
//
//             $level = $first.tree;
//         });
//
//         //return self;
//     };
//
//     //  option_index - порядковый номер свойства
//     //  value - новое значение
//     self.set = function( option_index, value ){
//         var
//             $options     = Base.options,
//             option_index = parseInt( option_index ),
//             value        = parseInt( value );
//
//         Base.options[ option_index ].selected = value;
//         // фиксим опции, которые идут выше
//         var
//             $level = Base.treeHelpers.get_level( option_index ),
//             $leaf  = {};
//
//         $level.forEach( function( $variant ){
//             if( $variant.position == value ){
//                 $leaf = $variant.tree;
//             };
//         });
//
//         $.each( $options, function( index, $option ){
//             if( index > option_index ){
//                 var
//                     $first        = Base.treeHelpers.get_first( $leaf ),
//                     level         = Base.treeHelpers.get_level( index ),
//                     not_available = true;
//
//                 level.forEach( function( $variant ){
//                     if( $variant.position == $options[ index ].selected && $variant.available ){
//                         not_available = false;
//                     }
//                 });
//
//                 if( not_available ){
//                     Base.options[ index ].selected = $first.position;
//                 };
//
//                 $leaf = $first.tree;
//             };
//         });
//     };
//
//     //  получаем значение выбранной опции на уровне
//     //  option_index - уровень, который проверяем
//     self.get = function( option_index ){
//         return Base.options[ option_index ].selected;
//     };
//
//     //  обновляем выбранные опции исходя из варианта модификации
//     //  не дописана! используется, если у нас вариант выбран внешним образом, сразу в корневом select'е
//     //  new - дописано
//     self.set_by_variant = function( variant_id ){
//         by_variant( variant_id, Base.tree, 0 );
//     };
//
//     function by_variant( variant_id, $leaf, option_index ){
//         var
//             is_finded = false;
//
//         $.each( $leaf, function( index, $variant){
//             if( $variant.variant_id == variant_id ){
//                 is_finded = true;
//             }else{
//                 if( $variant.tree ){
//                     is_finded = by_variant( variant_id, $variant.tree, option_index + 1 );
//                 };
//             };
//
//             if( is_finded ){
//                 Base.options[ option_index ].selected = $variant.position;
//                 return false;
//             };
//         });
//
//         return is_finded;
//     };
//
//     // проверяем, было ли выбрано данное свойство
//     //  используется при start_disable
//     self.is_disabled = function( option_index ){
//         return Base.options[ option_index ].disabled;
//     };
//
//     // разлочиваем свойство
//     self.inable = function( option_index ){
//         Base.options[ option_index ].disabled = false;
//
//         var
//             is_disabled = false;
//
//         $.each( Base.options, function( key, $option ){
//             if( Base.options.disabled ){ is_disabled = true };
//         });
//
//         if( !is_disabled ){
//             Base.settings.start_disable.disable = false;
//         };
//
//         return is_disabled;
//     };
//
//     self.init();
// };
// InSales.selectorSettings = function( $config, Base ){
//     var
//         self = this,
//         $product = $config.product;
//
//     // инициализация настроек, установка дефолтов
//     self.init = function(){
//         Base.settings = self;
//
//         // инициализация параметров рендера
//         self.disable      = $config.settings.disable      || false;
//         self.default_type = $config.settings.default_type || 'select';
//         self.firstOption  = $config.settings.firstOption  || false;
//
//         // кусок магии на случай нежданчика
//         if( Base.url_variant_id != '' ){
//             self.firstOption = false;
//         };
//
//         self.labels = {};
//
//         if( $config.settings.labels ){
//             $.each( $config.settings.labels, function( index, value ){
//                 self.labels[ index.toLowerCase() ] = value;
//             });
//         };
//
//         // используем ли мы скрипт в коллекции?
//         self.collection = $config.settings.collection || false;
//
//         // выставляем настройки принудительного выбора модификации
//         self.start_disable         = $config.settings.start_disable  || {};
//         self.start_disable.disable = self.start_disable.disable || false;
//         self.start_disable.first   = true;
//
//         // дефолтный текст для селекторов
//         self.start_disable.default_text = self.start_disable.default_text || 'Выберите вариант';
//
//         // пишим свои надписи в селеты
//         var
//             $temp = {};
//
//         if( $config.settings.start_disable != undefined && $config.settings.start_disable.labels ){
//             $.each( $config.settings.start_disable.labels, function( index, value ){
//                 $temp[ index.toLowerCase() ] = value;
//             });
//         };
//
//         // делаем магию на случай, если не определяли этот пааметр во входных настройках
//         self.start_disable.labels = $temp;
//
//         // подготавливаем список типов рендера
//         self.params = {};
//
//         // добавляем настройки вывода из шаблона?
//         if( $config.settings.template ){
//             var
//                 span  = $config.settings.template.span  .replace( /\s+/g, '' ).split( ',' ),
//                 radio = $config.settings.template.radio .replace( /\s+/g, '' ).split( ',' ),
//                 color = $config.settings.template.color .replace( /\s+/g, '' ).split( ',' ),
//                 image = $config.settings.template.image .replace( /\s+/g, '' ).split( ',' );
//
//             $.each( span, function( index, value ){
//                 if( value != '' ){
//                     self.params[ value.toLowerCase() ] = 'span';
//                 };
//             });
//
//             $.each( radio, function( index, value ){
//                 if( value != '' ){
//                     self.params[ value.toLowerCase() ] = 'radio';
//                 };
//             });
//
//             $.each( color, function( index, value ){
//                 if( value != '' ){
//                     self.params[ value.toLowerCase() ] = 'color';
//                 };
//             });
//
//             $.each( image, function( index, value ){
//                 if( value != '' ){
//                     self.params[ value.toLowerCase() ] = 'image';
//                 };
//             });
//         };
//
//         // делаем lowCase входных данных, на всякий случай
//         if( $config.settings.params ){
//             $.each( $config.settings.params, function( index, value ){
//                 self.params[ index.toLowerCase() ] = value;
//             });
//         };
//
//         // настройки для файлов цветов из файлов file_url
//         self.color =  {};
//         if( $config.settings.color ){
//             $.each( $config.settings.color, function( index, value ){
//                 self.color[ index.toLowerCase() ] = value;
//             });
//         };
//
//         // настройки изображений из карточки товара
//         self.image         = $config.settings.image  || {};
//         self.image.size    = self.image.size    || 'small_url';
//         self.image.preview = self.image.preview || 'large_url';
//
//         // собираем необходимые пути изображений из карточки товара
//         self.images = {};
//
//         // сохраняем первую картинку товара
//         self.images[ 'first_image' ] = {
//             id:       $product.first_image.id,
//             url:      $product.first_image[ self.image.size ],
//             preview:  $product.first_image[ self.image.preview ],
//             original: $product.first_image.original_url,
//         };
//
//         var
//             $images = $product.images;
//
//         $.each( $images, function( index, $image ){
//             if( $image.title ){
//                 self.images[ $image.title.toLowerCase() ] = {
//                     id:       $image.id,
//                     url:      $image[ self.image.size ],
//                     preview:  $image[ self.image.preview ],
//                     original: $image.original_url,
//                 };
//             };
//         });
//
//         //  определяем глобального родителя в DOM в зависимости от шаблона.
//         //  для коллекции добавляем уточнение по форме. Требуется указать аттрибут data-product-id, куда закатываем id товара.
//         if( !self.collection ){
//             Base.modification_select = $( 'select'+ $config.selector );
//         }else{
//             Base.modification_select = $( 'form[data-product-id="'+ $product.id +'"]' ).find( 'select'+ $config.selector );
//         };
//
//         // отлавливаем вариант, когда в бек-офисе поставлена галочка "скрывать отсутствующие модификации"
//         if( $( 'option', Base.modification_select ).length < $product.variants.length ){
//             self.hide_unavailable = true;
//         }else{
//             self.hide_unavailable = false;
//         };
//
//         //return self;
//     };
//
//     self.disableOnStart = function(){
//         return self.start_disable.disable && self.start_disable.first;
//     };
//
//     self.init();
// };
// // Функции, связанные с рендером селекторов и обработкой их событий
//
// InSales.singleOption = function( Base ){
//     var
//         self = this;
//
//     // корректируем выбранное свойство на первое доступное
//     //
//     //  $variants     - массив вариантов для данного уровня свойств
//     //  option_id     - позиция выбранного вырианта
//     //  option_index  - исходный номер опции
//     self.firstAvailable = function( $variants, option_id, option_index ){
//         /!*
//     console.log( 'firstAvailable: $variants: ', $variants );
//     console.log( 'firstAvailable: start: option_id: ', option_id );
//     /!**!/
//
//         var
//             is_first            = true,
//             is_available        = false,
//             available_option_id = 0,
//             temp_id             = option_id;
//
//         $.each( $variants, function( index, $variant ){
//             // ищем первую доступную модификацию
//             if( is_first && $variant.available ){
//                 is_first = false;
//                 available_option_id = $variant.position;
//             };
//
//             // если дошли до выбранного варианта, проверяем доступен он или нет
//             if( $variant.position == option_id && $variant.available ){
//                 is_available = true;
//             };
//         });
//
//         // если выбранный вариант не доступен
//         if( !is_available ){
//             option_id = available_option_id;
//         };
//
//         //console.log( 'firstAvailable: end: option_id: ', option_id );
//         if( temp_id != option_id ){
//             Base.optionsHelpers.set( option_index, option_id );
//         };
//
//         return option_id;
//     };
//
//     // собираем объект с данными для шаблонизатора
//     self.makeData = function( $variants, index, option_id ){
//         var
//             title        = Base.options[ index ].title.toLowerCase(),
//             disable_text = Base.settings.start_disable.labels[ title ] || Base.settings.start_disable.default_text,
//             $data = new Object;
//
//         $data = {
//             options:       {},
//             settings:      {},
//             start_disable: {},
//         };
//
//         if( Base.settings.firstOption ){
//             option_id = self.firstAvailable( $variants, option_id, index );
//         };
//
//         $data.variants = $variants;
//
//         $data.options.selected    = option_id;
//         $data.options.index       = index;
//         $data.options.name        = Base.options[ index ].name;
//         $data.options.is_disabled = Base.optionsHelpers.is_disabled( index );
//
//         $data.settings.disable = Base.settings.disable;
//
//         $data.start_disable.disable = Base.settings.start_disable.disable;
//         $data.start_disable.text    = disable_text;
//
//         $data.color  = Base.settings.color;
//         $data.images = Base.settings.images;
//
//         // прикручиваем хелперы
//         // вытаскиваем цвет
//         $data.getColor = function( title ){
//             var
//                 image_name = title.toLowerCase(),
//                 color_path = this.color[ image_name ];
//
//             return color_path;
//         };
//
//         // вытаскиваем url картинки для пердпросмотра
//         $data.getGalleryPreview = function( title ){
//             var
//                 image = this.getImage( title );
//
//             return image.preview;
//         };
//
//         // вытаскиваем url оригинала картинки
//         $data.getGalleryOriginal = function( title ){
//             var
//                 image = this.getImage( title );
//
//             return image.original;
//         };
//
//         // вытаскиваем id картинки
//         $data.getImageId = function( title ){
//             var
//                 image = this.getImage( title );
//
//             return image.id;
//         };
//
//         // вытаскивае картинку для блока
//         $data.getBlockImage = function( title ){
//             var
//                 image = this.getImage( title );
//
//             return image.url;
//         };
//
//         // хелпер вытаскиваем нужную картинку
//         $data.getImage = function( title ){
//             var
//                 image_name = title.toLowerCase(),
//                 $images    = this.images,
//                 image      = {};
//
//             if( $images[ image_name ] ){
//                 image = $images[ image_name ];
//             }else{
//                 image = $images.first_image;
//             };
//
//             return image;
//         };
//
//         return $data;
//     };
//
//     //  рендер блоков со значениями
//     //
//     //  $variants  - объект c вариантами для данного уровня
//     //  index      - порядковый номер свойства модификации для которого производим отрисовку
//     //  option_id  - id варианта свойства, который выбран сейчас, на него навешивается .active
//     //
//     //  считать эталоном для дебага
//     self.span = function( $variants, index, option_id ){
//         /!*
//     console.log('render: span: $variants: ', $variants);
//     console.log('render: span: index: ', index);
//     console.log('render: span: option_id: ', option_id);
//     /!**!/
//
//         var
//             $data = self.makeData( $variants, index, option_id );
//
//         return InSales.Render( $data, 'selectors', 'span' );
//     };
//
//     //  рендер radio
//     self.radio = function( $variants, index, option_id ){
//         var
//             $data = self.makeData( $variants, index, option_id );
//
//         return InSales.Render( $data, 'selectors', 'radio' );
//     };
//
//     //  рендер select'а
//     self.select = function( $variants, index, option_id ){
//         var
//             $data = self.makeData( $variants, index, option_id );
//
//         return InSales.Render( $data, 'selectors', 'select' );
//     };
//
//     //  рендер блока с цветом (из фалов)
//     self.color = function( $variants, index, option_id ){
//         var
//             $data = self.makeData( $variants, index, option_id );
//
//         return InSales.Render( $data, 'selectors', 'color' );
//     };
//
//     //  рендер блока с фото товара из карточки
//     self.image = function( $variants, index, option_id ){
//         var
//             $data = self.makeData( $variants, index, option_id );
//
//         return InSales.Render( $data, 'selectors', 'image' );
//     };
//
//     //  прибивает все действия по изменению Основного селектора и внесение измененинй к глобальным данным
//     //  $unit - ссылка на jQuery объект, который был выбран как свойство модификации
//     self._bind = function( $unit ){
//         var
//             option_id    = $unit.data( 'option-position' ),
//             option_index = $unit.data( 'option-index' ),
//             is_disabled  = false;
//
//         // для select'а нужен свой обработчик
//         if( $unit.is('select') ){
//             option_id = $unit.val();
//         };
//
//         Base.optionsHelpers.set( option_index, option_id );
//         Base.optionsHelpers.inable( option_index );
//
//         Base.modification_select
//             .val( Base.treeHelpers.get_variant() )
//             .trigger( 'change' );
//     };
//
//     // навешиваем обработку клика на отрисованный селектор
//     init = function(){
//         // select
//         Base.main_owner.on( 'change', '.variant-select', function(){
//             self._bind( $(this) );
//         });
//
//         // radio
//         Base.main_owner.on( 'change', '.radio-switch', function(){
//             self._bind( $(this) );
//         });
//
//         // span
//         Base.main_owner.on( 'click', '.variant-span:not(.variant-span--unavailable)', function(){
//             self._bind( $(this) );
//         });
//
//         // color
//         Base.main_owner.on( 'click', '.variant-color:not(.variant-color--unavailable)', function(){
//             self._bind( $(this) );
//         });
//
//         // image
//         Base.main_owner.on( 'click', '.variant-image:not(.variant-image--unavailable)', function(){
//             self._bind( $(this) );
//         });
//     };
//
//     init();
// };
// //  функции для работы с деревом модификаций
// InSales.variantsTree = function( $product, Base ){
//     var
//         self = this;
//
//     //  инициализайия дерева модификаций
//     self.init = function(){
//         Base.tree = {};
//
//         //  перебираем все варианты модификаций
//         $.each( $product.variants, function( variants_index, $variant ) {
//             var
//                 variant_id = $variant.id,
//                 $leaf      = Base.tree;
//
//             /!*
//       console.log('tree: init: variants_index: ', variants_index);
//       console.log('tree: init: $variant: ', $variant);
//       /!**!/
//
//             //  перебираем варианты свойств модификаций и вносим их в дерево модификаций
//             //  так же дополняем каждый узел нужными нам свойствами
//             //  если потребуется добавить информацию - делаем это тут, в нужных местах тянем нужную инфу
//             $.each( $variant.option_values, function(index, $value) {
//                 /!*
//         console.log('tree: init: index: ', index);
//         console.log('tree: init: $value:', $value);
//         /!**!/
//
//                 var
//                     id = '';
//                 //  если дошли до последнего уровня, то записываем вариант модификации и ее доступность
//                 if( index == ($variant.option_values.length - 1) ){
//                     id = variant_id;
//                     var
//                         is_available = $variant.available;
//                 };
//
//                 //  если такого свойства модификации еще нет, то загоняем все параметры в ноду
//                 if( !$leaf[ $value.position ] ){
//                     $leaf[ parseInt( $value.position ) ] = {
//                         id:           parseInt( $value.id ),
//                         tree:         {},
//                         title:        $value.title,
//                         variant_id:   id,
//                         position:     parseInt( $value.position ),
//                     };
//
//                     if( is_available !== undefined ){
//                         $leaf[ $value.position ].available = is_available;
//                     };
//                 };
//
//                 $leaf = $leaf[ $value.position ].tree;
//             });
//
//             //return $tree;
//         });
//
//         //  проставляем доступность опций модификаций по дереву
//         $.each( Base.tree, function( index, $leaf ) {
//             leaf_available( $leaf );
//         });
//     };
//
//     //  фиксим доступность свойств модификаций прямо в дереве
//     function leaf_available( $leaf ){
//         if( $leaf.variant_id == '' ){
//             var
//                 is_available = false;
//
//             $.each( $leaf.tree, function( index, $child ){
//                 if( leaf_available( $child ) ){
//                     is_available = true;
//                 };
//             });
//
//             $leaf.available = is_available;
//         };
//
//         return $leaf.available;
//     };
//
//     //  получаем вариант модификации, основываясь на выбранных опциях
//     //  возвращает id варианта модификации
//     self.get_variant = function(){
//         var
//             $leaf      = Base.tree,
//             variant_id = 0;
//
//         /!*
//     console.log('tree: get_variant: $leaf: start: ', $leaf);
//     console.log('');
//     /!**!/
//
//         $.each( Base.options, function( index, $option ){
//             var
//                 option_id = $option.selected;
//
//             /!*
//       console.log('tree: get_variant: each: $option: ',$option);
//       console.log('tree: get_variant: each: $leaf: ',$leaf);
//       /!**!/
//
//             if( $leaf[ option_id ].variant_id == '' ){
//                 $leaf = $leaf[ option_id ].tree;
//             }else{
//                 variant_id = $leaf[ option_id ].variant_id;
//             };
//         });
//
//         return variant_id;
//     };
//
//     //  возвращает массив значений с уровня
//     //  level - уровень дерева
//     self.get_level = function( level ){
//         var
//             $leaf  = Base.tree,
//             $level = [],
//             sort   = [];
//
//         $.each( Base.options, function( option_level, $option ){
//             var
//                 option_id = $option.selected;
//
//             if( option_level == level ){
//                 $.each( $leaf, function( leaf_index, $variant ){
//                     sort.push( parseInt( leaf_index ) );
//                 });
//
//                 return false;
//             };
//
//             $leaf = $leaf[ option_id ].tree;
//         });
//
//         sort.sort( function( a, b ){
//             return a - b;
//         });
//
//         $.each( sort, function( index ){
//             $level.push({
//                 title:     $leaf[ sort[ index ] ].title,
//                 available: $leaf[ sort[ index ] ].available,
//                 tree:      $leaf[ sort[ index ] ].tree,
//                 position:  $leaf[ sort[ index ] ].position,
//                 id:        $leaf[ sort[ index ] ].id
//             });
//         });
//
//         return $level;
//     };
//
//     //  выбор первого ДОСТУПНОГО элемента на уровне дерева
//     //  возвращает объект
//     self.get_first = function( $level ){
//         var
//             $first = {},
//             temp   = [],
//             flag   = false;
//
//         $.each( $level, function( position, $variant ){
//             temp[ $variant.position ] = $variant;
//         });
//
//         temp.forEach( function( $key ){
//             if( !flag ){
//                 if( Base.settings.hide_unavailable ){
//                     if( $key.available ){
//                         $first = $key;
//                         flag = true;
//                     };
//                 }else{
//                     $first = $key;
//                     flag = true;
//                 };
//             };
//         });
//
//         return $first;
//     };
//
//     self.init();
// };
// // =======================================================================================
// //                                        PRODUCT
// // =======================================================================================
//
// $(function(){
//     // обновляем инфу, после смены модификации
//     Events( 'onProductOption_Changed' ).subscribe( function( $data ){
//         var
//             variant           = $data.variant,
//             $js_buy           = $( '.js-product-buy' ),
//             $js_sku           = $( '.js-product-sku' ),
//             $js_sku_text      = $( '.js-product-sku_field' ),
//             $js_price_current = $( '.js-prices-current' ),
//             $js_price_old     = $( '.js-prices-old' ),
//             $js_presence      = $( '.js-product-presence' );
//
//         if( variant ){
//             if( variant.sku ){
//                 $js_sku.show();
//                 $js_sku_text.html( variant.sku );
//             } else {
//                 $js_sku.hide();
//             }
//         }
//
//         if( variant && variant.available === true ){
//             // selected a valid variant
//             $js_price_current
//                 .html( InSales.formatMoney( variant.price ) );
//             $js_price_old.html( InSales.formatMoney( variant.old_price ) );
//             $js_presence
//                 .removeClass( 'product-presence_field--sell_off' )
//                 .html( 'Есть в наличии' );
//
//             if( Site.product.buy_button == 'block' ){
//                 $js_buy
//                     .html( 'В корзину' )
//                     .removeClass( 'button--disabled' )
//                     .prop( 'disabled', false );
//             }
//             else if( Site.product.buy_button == 'buy' ){
//                 $js_buy
//                     .html( 'В корзину' );
//             }
//
//         }else{
//             // variant doesn't exist
//             if( Site.product.buy_button == 'block' ){
//                 $js_buy
//                     .html( 'Распродано' )
//                     .addClass( 'button--disabled' )
//                     .prop( 'disabled', true );
//             }
//             else if( Site.product.buy_button == 'buy' ){
//                 $js_buy
//                     .html( 'Под заказ' );
//             }
//
//             if( variant ){
//                 $js_presence
//                     .addClass( 'product-presence_field--sell_off' )
//                     .html( 'Распродано' );
//                 $js_price_current
//                     .html( InSales.formatMoney( variant.price ) );
//                 $js_price_old
//                     .html( InSales.formatMoney( variant.old_price ) );
//             }else{
//                 $js_presence
//                     .html( '' );
//                 $js_price_current
//                     .html( 'Модификация отсутсвует' );
//                 $js_price_old
//                     .html( '' );
//             }
//         }
//     });
//
//     $( '.quantity' )
//         .quantity();
//
//     Events( 'onBuyButton_Active' ).subscribe( function( $data ){
//         //console.log( 'onBuyButton_Active: ', $data );
//     });
//
//     Events( 'onBuyButton_Inactive' ).subscribe( function( $data ){
//         //console.log( 'onBuyButton_Inactive: ', $data );
//     });
// });
//
// // ============================================================================================
// //                                      PRODUCT GALLERY
// // ============================================================================================
//
// // MagicZoomPlus
//
// var mzOptions = {
//     //zoomMode: 'magnifier',
//     rightClick: true,
//     hint: 'always',
//     textHoverZoomHint: 'Наведите для увеличения',
//     textClickZoomHint: 'Нажмите для увеличения',
//     textExpandHint: 'Полноэкранный просмотр',
//     textBtnClose: 'Закрыть',
//     textBtnPrev: 'Предыдущее',
//     textBtnNext: 'Следующее',
//     smoothing: false,
// };
//
// var mzMobileOptions = {
//     textHoverZoomHint: 'Нажмите для увеличения',
//     textClickZoomHint: 'Дважды нажмите для увеличения',
//     textExpandHint: '',
//     smoothing: false,
// };
//
// $(function(){
//     $( '.js-product_gallery-preview_image' ).on( 'tap', function( e ){
//         e.preventDefault();
//
//         var $preview = $(this).parents( '.gallery-image:first' );
//         var large = $preview.data( 'image' );
//         var original = $preview.attr( 'href' );
//
//         //MagicZoom.update( 'MagicZoom', large, original );
//         setTimeout( function(){
//             MagicZoom.expand( 'MagicZoom' );
//             console.log( 'open' );
//         }, 1000 );
//     });
// });
// // =====================================================================================
// //                                formatMoney
// // =====================================================================================
//
// // правильно формируем объект цены
// InSales.initMoney = function( params ) {
//     var
//         moneyParams = {},
//         temp        = {};
//
//     temp = $.parseJSON( params );
//
//     moneyParams.format   = temp.format;
//     moneyParams.unit     = temp.unit;
//     moneyParams.separator = temp.separator;
//
//     if( temp.delimiter ){
//         moneyParams.delimiter = temp.delimiter ;
//     }else{
//         moneyParams.delimiter = '';
//     }
//
//     if( temp.show_price_without_cents == 1 ){
//         moneyParams.show_price_without_cents = false;
//     }else{
//         moneyParams.show_price_without_cents= true;
//     }
//
//     return moneyParams;
// };
//
// //  основная функция преобразования цен
// //  amount - цена товара
//
// InSales.formatMoney = function( amount ) {
//     // просто банхамер на входе
//     if( amount === null ){
//         return '';
//     }
//
//     // проверяем, заполнен ли объект форматирования цены,
//     // если нет - заполняем.
//     if( $.isEmptyObject( CurrencyFormat ) ){
//         CurrencyFormat = InSales.initMoney( cv_currency_format );
//     }
//
//     var
//         value  = parseFloat( amount ).toFixed( 2 ) || 0,
//         split  = value.toString().split( '.' ),
//         format = CurrencyFormat.format;
//
//     split[ 0 ] = split[ 0 ].replace( /(\d)(?=(\d\d\d)+(?!\d))/g, '$1'+ CurrencyFormat.delimiter );
//
//     if( CurrencyFormat.show_price_without_cents ){
//         value = split.join( CurrencyFormat.separator );
//     }else{
//         value = split[ 0 ];
//     }
//
//     return format.replace( '%n', value ).replace( '%u', CurrencyFormat.unit );
// };
// // =============================================================================
// //                                PRICE TYPE
// // =============================================================================
//
// // мини-плагин для быстрого обновления данных
// (function ($){
//     $.fn.update = function( options ){
//         if( this.data( 'priceType') ){
//             return this.data( 'priceType' ).update( options );
//         }
//     };
// }( jQuery ));
//
// (function ( $, window, document ){
//
//     // объявляем логику
//     var priceType = {
//         // инициализация
//         init: function( options, el ){
//
//             var
//                 self        = this,
//                 $product    = options.product,
//                 $variants   = {},
//                 price_kinds = [];
//
//             // привязываем все статичные элементы
//             self.elem      = $( el );
//             self.variant_id = options.variant_id || $product.variants[ 0 ].id;
//             self.prices     = [];
//
//             self.group = false;
//             if( options.group || Site.client_group.id ){
//                 self.group = options.group || Site.client_group.id;
//             }
//
//             // пересобираем варианты для быстрой работы
//             $.each( $product.variants, function( index, $variant ) {
//                 $variants[ $variant.id ] = $variant;
//             });
//             self.variants = $variants;
//
//             // вытаскиваем правила для типов цен
//             $.each( $product.price_kinds, function( index, $price_kind ) {
//                 price_kinds[ $price_kind.price_index ] = $price_kind.value;
//             });
//             self.price_kinds = price_kinds;
//
//             self.setPrices( self.variant_id );
//
//             // привязываем опции
//             self.options = $.extend( {}, self.elem.data(), options );
//
//             this.update( options );
//         },
//
//         // вытаскиваем типы цен
//         setPrices: function( variant_id ){
//             var
//                 self     = this,
//                 $variant = self.variants[ parseInt( variant_id ) ],
//                 prices   = [];
//
//             prices[ 0 ] = {
//                 price: parseFloat( $variant.price ),
//                 value: 0,
//             };
//
//             $.each( $variant.prices, function( index, price ){
//                 prices[ index +1 ] = {
//                     price: price,
//                     value: self.price_kinds[ index +1 ],
//                 };
//             });
//
//             self.prices = prices;
//         },
//
//         // получение конкретной цены, в зависимости от кол-ва
//         getPrice: function( items_count ){
//             var
//                 self  = this,
//                 price = 0;
//
//             self.items_count = items_count || self.items_count;
//
//             $.each( self.prices, function( index, price_variant ){
//                 if( price_variant.price && self.items_count >= price_variant.value ){
//                     price = price_variant.price;
//                 }
//             });
//
//             return price;
//         },
//
//         // обновляем данные
//         // variant_id - выставляем вариант модификации
//         // quantity   - выставляем кол-во
//         //
//         // генерит событие "onPriceType_Change"
//         //возвращает jQuery-объект и цену за одну единицу товара
//         update: function( $options ){
//             var
//                 self  = this,
//                 price = 0,
//                 $data = {
//                     jqObj: this.elem,
//                 };
//
//             /!*
//       if( !self.group.disabled ){
//         return false;
//       };
//       *!/
//
//             if( $options.variant_id ){
//                 self.setPrices( $options.variant_id );
//             }
//
//             if( $options.quantity ){
//                 price = self.getPrice( $options.quantity );
//             }
//
//             $data.price    = price;
//             $data.quantity = self.items_count;
//
//             Events( 'onPriceType_Change' ).publish( $data );
//         },
//     };
//
//     // навешиваем все это на каждый объект
//     $.fn.priceType = function( options ){
//         this.each( function(){
//             var
//                 prices = Object.create( priceType );
//
//             prices.init( options, this );
//             $.data( this, "priceType", prices );
//         });
//
//         return this;
//     };
//
// }( jQuery, window, document ));
// // ====================================================================================
// //                                    CART
// // ====================================================================================
//
// // сборка позиций корзины
// InSales.OrderLine = function( options ) {
//     var
//         self = this,
//         line = {};
//
//     $.each( options, function( key, value ) {
//         line[ key ] = value;
//     });
//
//     if( options.title ){
//         line.title = options.title.replace( /\+/g, ' ' );
//     }
//
//     if( options.sku ){
//         line.sku = options.sku.replace( /\+/g, ' ' );
//     }
//
//     line.url = '/product_by_id/' + options.product_id;
//
//     // добавляем язык, если не дефолт
//     if( Site.language.not_default ){
//         line.url += '?lang='+ Site.language.locale;
//     }
//
//     // разворачиваем изображения товара для шаблонизатора
//     line.image = {};
//     line.image.small  = line.image_url.replace( 'thumb', 'micro' );
//     line.image.thumb  = line.image_url;
//     line.image.medium = line.image_url.replace( 'thumb', 'medium' );
//
//     return line;
// };
//
// // основной объект корзины
// // занимется всеми взаимодействиями с корзиной
// // на входе - объект с настройками:
// // removeSelector - селектор, кнопки "удаления" товара из корзины,
// // например, '.js-cart_item-delete'.
// //
// // self
// // cart - объект списка корзины
// InSales.Cart = function( options ){
//     var
//         self = this;
//     //cart = {};
//
//     // обновление списка корзины
//     this.setCart = function( order ){
//         var
//             items_count = 0,
//             order_lines = [];
//
//         if ( !order ) {
//             self.items_count = 0;
//             self.total_price = 0;
//             self.items_price = 0;
//             self.order_lines = [];
//             self.discounts   = [];
//             return;
//         }
//
//         self.items_price = order.items_price;
//         self.total_price = order.total_price;
//
//         $( order.order_lines ).each( function( index, order_line ) {
//             items_count += order_line.quantity;
//             order_lines[ index ] = new InSales.OrderLine( order_line );
//         });
//
//         self.items_count   = items_count;
//         self.order_lines   = order_lines;
//         self.discounts     = order.discounts;
//         self.discount_code = order.discount_code;
//
//         // грязный хак, вычищаем из описания скидки '+',
//         // который появляется в ответе вместо " ".
//         // потом надо из разрабов выбить у проверить, зачем такой ответ приходит
//         $.each( self.discounts, function( key, discount ){
//             if( discount.description !== null ){
//                 discount.description = discount.description.replace( /\+/g, ' ' );
//             }
//         });
//
//         return self;
//     };
//
//     // обновляем корзину
//     this.reloadCart = function( callback ) {
//         var
//             $data = {};
//
//         // тут мы убрали лишнее, и так он попробует сделать все последовательно
//         // так что в переменную мы загоняем json либо с сервака, либо из куки
//         // после проверки работы мусор будет удален
//         if ( $.cookie('cart') != 'json' ) {
//             var order;
//             try {
//                 order = $.parseJSON( $.cookie('cart') );
//             } catch( e ) {
//                 order = null;
//             }
//
//             self.setCart( order );
//             $data = makeData( self );
//
//             Events( 'onCart_Update' ).publish( $data );
//
//             if( callback ){
//                 callback( $data );
//             }
//         } else {
//             $.getJSON( '/cart_items.json', function( order ){
//                 self.setCart( order );
//                 $data = makeData( self );
//
//                 Events( 'onCart_Update' ).publish( $data );
//
//                 if( callback ){
//                     callback( $data );
//                 }
//             });
//         }
//     };
//
//     // триггер удаления товара из корзины
//     removeItemTrigger = function(){
//         $( document ).on( 'click', self.removeSelector, function( e ){
//             e.preventDefault();
//
//             // предовращает повторный клик
//             if( $(this).data( 'processed' ) ){
//                 return;
//             }
//
//             $(this).data( 'processed', true );
//
//             self.removeItem( $(this).data( 'item-id' ), $(this) );
//         });
//     };
//
//     // удаление товара
//     this.removeItem = function( variant_id, $link ){
//         var
//             fields = {},
//             path   = '/cart_items/' + variant_id + '.json',
//             $data  = makeData( self );
//
//         $data.removed = variant_id;
//         $data.jqObj   = $link;
//
//         fields._method = 'delete';
//         showPreloader();
//
//         $.post( path, fields )
//             .done( function() {
//                 // дергаем событие ДО обновления корзины
//                 Events( 'onCart_BeforeDelete' ).publish( $data );
//
//                 // дергаем событие ПОСЛЕ полного удаления товара из списка
//                 self.reloadCart( function( $data ){
//                     // добавляем нужные данные
//                     $data.removed = variant_id;
//                     $data.jqObj   = $link;
//
//                     Events( 'onCart_Delete' ).publish( $data );
//                 });
//             })
//             .fail( function( response ){
//                 // снимаем флаг, что мы обрабатывали эту ссылку и лочили
//                 $link.data( 'processed', false );
//
//                 console.log( 'Произошла ошибка при удалении!! Ответ платформы: ', response );
//             })
//             .always( function(){
//                 hidePreloader();
//             });
//     };
//
//     // добавляем товар(ы)
//     //
//     // NOTE!!
//     // учесть, что в обратку может придти jQuery-объект формы
//     // тогда придется разбирать ее в слушателе
//
//     this.addItem = function( $obj, $link ){
//         var
//             fields = {},
//             path   = { path: '/cart_items.json' },
//             $data  = {};
//
//         switch( type_of( $obj ) ){
//             case( 'Object' ):
//                 $.each( $obj, function( variant_id, quantity ){
//                     fields[ 'variant_ids['+ variant_id +']' ] = quantity;
//                 });
//
//                 $data.added = $obj;
//                 break;
//             case( 'jQuery' ):
//                 fields = $obj.serialize();
//                 path   = self.getFormAction( $obj );
//
//                 $data.jqObj = $obj;
//                 break;
//         }
//
//         showPreloader();
//         $.post( path.path , fields )
//             .done( function(){
//                 // обновляем состав корзины
//                 // и дергаем события
//                 $data = makeData( self );
//                 $data.addBy = $link;
//
//                 Events( 'onCart_Add' ).publish( $data );
//
//                 // обновляем состав корзины, и дергаем событие
//                 // куда передаем состав корзины ПОСЛЕ добавления и обновления состава
//                 self.reloadCart( function( $data ){
//                     $data.addBy = $link;
//                     Events( 'onCart_AfterAdd' ).publish( $data );
//                 });
//             })
//             .fail( function( response ){
//                 console.log( 'Произошла ошибка при удалении!! Ответ платформы: ', response );
//             })
//             .always( function(){
//                 hidePreloader();
//             });
//     };
//
//     // пересчет корзины
//     // form - селектор формы
//     this.recalculateOrder = function( form ){
//         var
//             $inputs     = $( form ).find( self.quantitySelector );
//         path        = '/cart_items/update_all.json',
//             fields      = $( form ).serialize(),
//             items_count = 0;
//
//         $inputs.each( function( index ){
//             items_count += parseInt( $(this).val() );
//         });
//
//         if( items_count == self.items_count ){
//             return false;
//         }
//
//         showPreloader();
//
//         $.post( path, fields )
//             .done( function( response ){
//                 self.reloadCart();
//             })
//             .fail( function( response ){
//                 console.log('Произошла ошибка при обновлении!! Ответ платформы: ', response);
//             })
//             .always( function(){
//                 hidePreloader();
//             });
//     };
//
//     // делаем нормальный путь у формы
//     self.getFormAction = function( $form ){
//         var
//             temp   = $form.attr( 'action' ).split( '?' ),
//             action = {};
//
//         action.url    = temp[ 0 ] + '.json';
//         action.params = temp[ 1 ] ? '?'+ temp[ 1 ] : '';
//         action.path   = action.url + action.params;
//
//         return action;
//     };
//
//     // инициируемся
//     init = function( options ){
//         // выставляем настройки на дефолт
//         var
//             options = options || {};
//
//         self.removeSelector   = options.removeSelector   || '.js-cart_item-delete';
//         self.quantitySelector = options.quantitySelector || '.js-quantity-input';
//
//         removeItemTrigger();
//         self.reloadCart();
//     };
//
//     // init
//     init( options );
// };
// // ===================================================================================
// //                                   CART
// // ===================================================================================
//
// $(function(){
//     // создаем объект корзины
//     Cart = new InSales.Cart();
//
//     // привязываем обработку кнопки "купить" к нужному классу
//     ajaxBuyButton( '.js-buy' );
//
//     // идея разделения на несколько функций, которые слушают события, в том,
//     // чтобы не сломать весь сайт своими малыми или большиими изменениями.
//     // это позволяет легче сопровождать и модифицировать скрипты
//
//     // обновляем корзину и виджет
//     Events( 'onCart_Update' ).subscribe( function( $data ){
//         //console.log( 'onCart_Update',$data );
//
//         $.each( $data.order_lines, function( index, order ){
//             var title = order.title.split( ' (' );
//             order.title = title[ 0 ];
//         });
//
//         // генерим виджет корзины ( из шаблона )
//         $( '.basket_list' )
//             .html( InSales.Render( $data, 'cart', 'dropdown' ) );
//
//         // пересчет кол-ва товаров в $data
//         $('.js-cart_widget-items_count')
//             .html( $data.items_count );
//         $('.js-cart_widget-total_price')
//             .html( InSales.formatMoney( $data.total_price ) );
//     });
//
//     // обновляем общую стоимость заказа на странице корзины
//     // выводим скидки при обновлении корзины ( из шаблона )
//     if( Site.template == 'cart' ){
//         Events( 'onCart_Update' ).subscribe( function( $data ){
//             console.log( 'onCart_Update',$data );
//
//             // вставляем в целевой блок шаблон со скидками
//             $( '.js-discounts-list' )
//                 .html( InSales.Render( $data, 'cart', 'discounts' ) );
//
//             $( '.js-cart-total' )
//                 .html( InSales.formatMoney( $data.total_price ) );
//         });
//     }
//
//     // сообщаем о добавлении товара в корзину
//     Events( 'onCart_Add' ).subscribe( function( $data ){
//         //console.log( 'onCart_Add', $data );
//         if( $data.addBy ){
//             // да, просто показываем нужную нам модалку
//             modal.show({
//                 template: 'product_added',
//                 overlay: true,
//             });
//         }
//     });
//
//     // удаляем элемент из списка товаров
//     if( Site.template == 'cart' ){
//         Events( 'onCart_Delete' ).subscribe( function( $data ){
//             //console.log( 'onCart_Delete', $data );
//             // ограничиваем действие этого скрипта
//             // он должен отрабатывать только на странице корзины
//             if( $data.total_price === 0 ){
//                 $('.cart-table_container').hide();
//                 $('.js-cart-notice').show();
//
//                 return;
//             }
//
//             var
//                 $item_row = $( '.cart_item[data-item-id="'+ $data.removed +'"]' );
//
//             $item_row
//                 .slideUp( 400, function(){
//                     $item_row.remove();
//                 });
//         });
//     }
//
//     // пересчитываем список товаров в корзине
//     if( Site.template == 'cart' ){
//         Events( 'onQuantity_Change' ).subscribe( function( $data ){
//             //console.log( 'onQuantity_Change', $data );
//             // обновляем цены с учетом типа цены и прочего
//             $data.inputElement
//                 .parents('.cart_item:first')
//                 .find('[class*="js-price_type"]')
//                 .update({
//                     quantity: $data.current
//                 });
//
//             Cart.recalculateOrder( '#cartform' );
//         });
//     }
//
//     // в форме нажали enter, хотя вопрос - зачем это
//     $( '#cartform' ).on( 'keypress', function(e) {
//         if( e.keyCode == 13 ){
//             e.preventDefault();
//
//             Cart.recalculateOrder( '#cartform' );
//             return false;
//         }
//     });
//
//     // принудительно отрабатываем нажатие на
//     // кнопку "применить купон"
//     $( '.js-discounts-submit' ).on( 'click', function( e ){
//         e.preventDefault();
//
//         // блочим маркер "делаем оформление заказа"
//         $( '[name="make_order"]' )
//             .attr( 'disabled', true );
//
//         $(this)
//             .parents( 'form:first' )
//             .submit();
//     });
//
//     // обновление цены с учетом типа цен
//     if( Site.template == 'cart' ){
//         Events( 'onPriceType_Change' ).subscribe( function( $data ){
//             //console.log( 'onPriceType_Change: ', $data );
//             var
//                 $item_row    = $data.jqObj.parents('.cart_item:first'),
//                 $total_price = $item_row.find('.js-cart_item-total'),
//                 price        = $data.quantity * $data.price;
//
//             $data.jqObj.html( InSales.formatMoney( $data.price ) );
//             $total_price.html( InSales.formatMoney( price ) );
//         });
//     }
// });
// // =======================================================================================
// //                                      AJAX SEARCH
// // =======================================================================================
//
// InSales.Search = function( options ){
//     var
//         self = this;
//
//     // приводим все в порядок
//     init = function(){
//         options             = options || {};
//         self.searchSelector = options.searchSelector || '.js-ajax_search-input';
//         self.searchWrapper  = options.searchWrapper  || '.search_widget';
//         self.markerClass    = options.markerClass    || 'ajax_search-marked';
//
//         self.path = '/search_suggestions';
//
//         self.data = {
//             account_id: Site.account.id,
//             locale:     Site.language.locale,
//             fields:     [ 'price_min', 'price_min_available' ],
//             hide_items_out_of_stock: Site.account.hide_items,
//         };
//
//         self.binding();
//     };
//
//     self.binding = function(){
//         var
//             keyupTimeoutID = '',
//             $search = $( self.searchSelector );
//
//         $search.on( 'keyup', function(){
//             var
//                 $data = {};
//
//             self.data.query = $search.val();
//
//             clearTimeout( self.keyupTimeoutID );
//
//             if( self.data.query !== '' && self.data.query.length >= 3 ){
//                 self.keyupTimeoutID = setTimeout( function(){
//                     $.getJSON( self.path, self.data,
//                         function( response ){
//                             $data = self.makeData( response, $search.val() );
//
//                             Events( 'onAjaxSearch' ).publish( $data );
//                         });
//                 }, 300 );
//
//                 $( document ).on( 'click', 'body', self.outClick );
//             }else{
//                 // возвращаем пустой объект, чтобы спрятать результат поиска
//                 Events( 'onAjaxSearch' ).publish( $data );
//
//                 $( document ).off( 'click', 'body', self.outClick );
//             }
//         });
//     };
//
//     self.outClick = function( event ){
//         var $search = $( self.searchWrapper );
//
//         if( $( event.target ).closest( $search ).length ) return;
//         Events( 'onAjaxSearch' ).publish( {} );
//         event.stopPropagation();
//         $( document ).off( 'click', 'body', self.outClick );
//     };
//
//     // приводим в общий порядок список поиска
//     self.makeData = function( $data, keyword ){
//         var
//             replacment = '<span class="'+ self.markerClass +'">$1</span>';
//
//         $.each( $data.suggestions, function( index, product ){
//             product.id    = product.data;
//             product.url   = '/product_by_id/'+ product.id;
//             product.title = product.value;
//             product.marked_title = product.value.replace( new RegExp( '('+ keyword +')', 'gi' ), replacment );
//         });
//
//         return $data;
//     };
//
//     init();
// };
// // =====================================================================================
// //                                          COMPARE
// // =====================================================================================
//
// // TODO: дождаться когда придет номарльный ответ от сервака и привести  в порядок
// InSales.Compare = function( options ){
//     var
//         self = this,
//         productsCounter = 0;
//
//     // обновляем
//     self.reload = function( callback ){
//         var
//             $data = {};
//
//         // тащим инфу из куки
//         try {
//             self.compare = $.parseJSON( $.cookie( 'compare' ) );
//         }catch( e ){
//             self.compare = null;
//         }
//
//         // дропаем все, если список пустой
//         if( !self.compare ){
//             self.compare  = [];
//             self.products = [];
//
//             return;
//         }
//
//         // сохраняем кол-во товаров
//         productsCounter = self.compare.length;
//
//         $.getJSON( '/compares.json' )
//             .done( function( response ){
//                 self.products = response.products;
//
//                 $data = makeData( self );
//
//                 if( callback ){
//                     callback( $data );
//                 }
//
//                 Events( 'onCompare_Update' ).publish( $data );
//             });
//     };
//
//     // добавляем товар
//     self.addItem = function( product_id, $link ) {
//         var
//             path  = '/compares.json',
//             $data = makeData( self );
//
//         // меняем счетчики
//         productsCounter = productsCounter +1;
//
//         // проверка на повтор
//         showPreloader();
//
//         // проверяем сколкьо товаров
//         if( productsCounter > self.maxItems ) {
//             hidePreloader();
//
//             Events( 'onCompare_maxItem' ).publish( $data );
//         }else{
//             if( self.isRepeated( product_id ) ){
//                 // если такой товар уже в сравнении
//                 Events( 'onCompare_inList' ).publish( $data );
//             }else{
//                 // закидываем запрос
//                 $.post( path, { 'product[id]': product_id })
//                     .done( function( response ){
//                         self.reload( function( $data ){
//                             $data.added = product_id;
//                             $data.jqObj = $link;
//
//                             if( $link ){
//                                 $link
//                                     .parent()
//                                     .toggleClass( self.triggerClass );
//                             }
//
//                             Events( 'onCompare_Add' ).publish( $data );
//                         });
//                     })
//                     .fail( function( response ){
//                         console.log( 'Ошибка при добавлении товара в сравнение. Ответ сервера: ', response );
//                     })
//                     .always( function(){
//                         hidePreloader();
//                     });
//             }
//         }
//     };
//
//     // вешаем триггер добавления в сравнение
//     addItemTrigger = function(){
//         $( document ).on( 'click', self.addSelector, function( e ){
//             e.preventDefault();
//
//             var
//                 product_id = $(this).data( 'product_id' );
//
//             self.addItem( product_id, $(this) );
//         });
//     };
//
//     // удаляем товар
//     self.removeItem = function( product_id, $link ){
//         var
//             fields = {
//                 _method: 'delete',
//             },
//             path   = '/compares/'+ product_id +'.json';
//
//         showPreloader();
//
//         $.post( path, fields )
//             .done( function( response ){
//                 // обновляем
//
//                 self.reload( function( $data ){
//                     $data.removed = product_id;
//
//                     if( $link ){
//                         $link
//                             .toggleClass( self.triggerClass );
//                     }
//
//                     Events( 'onCompare_Remove' ).publish( $data );
//                 });
//             })
//             .fail( function( response ) {
//                 console.log( 'Произошла ошибка, ответ сервера: ',response );
//             })
//             .always( function(){
//                 hidePreloader();
//             });
//     };
//
//     // вешаем триггер удаления из сравнения
//     removeItemTrigger = function(){
//         $( document ).on( 'click', self.removeSelector, function( e ){
//             // блокируем обработку повторного нажатия
//             if( $(this).attr( 'processed' ) ){
//                 return;
//             }
//
//             var
//                 product_id = $(this).data( 'product_id' );
//
//             $(this)
//                 .attr( 'processed', true );
//
//             e.preventDefault();
//
//             self.removeItem( product_id, $(this) );
//         });
//     };
//
//     self.isRepeated = function( product_id ) {
//         var
//             result = false;
//
//         if( self.compare ){
//             $.each( self.compare, function( index, product ) {
//
//                 if( product.id == product_id ) {
//                     result = true;
//                     return false;
//                 }
//             });
//         }
//
//         return result;
//     };
//
//     // првоеряем, добавлен ли товар в сравнение или нет?
//     // если да, то добавим класс контейнеру кнопки
//     self.checkStatus = function(){
//         $( self.addSelector ).each( function(){
//             var
//                 product_id = $(this).data( 'product_id' );
//
//             if( self.isRepeated( product_id ) ){
//                 $(this)
//                     .parent()
//                     .addClass( self.triggerClass );
//             }
//         });
//     };
//
//     // инициализация
//     self.init = function(options) {
//         options = options || {};
//
//         // подгружаем тексты
//         self.text            = options.text         || {};
//         self.text.addItem    = self.text.addItem    || 'Товар добавлен к сравнению';
//         self.text.removeItem = self.text.removeItem || 'Товар удален из сравнения';
//         self.text.repeatItem = self.text.repeatItem || 'Этот товар уже добавлен';
//         self.text.maxItem    = self.text.maxItem    || 'Достигнут максимум товаров. Удалите несколько товаров.';
//
//         // тянем опорные классы
//         self.addSelector    = options.addSelector    || '.js-compare-add';
//         self.removeSelector = options.removeSelector || '.js-compare-remove';
//         self.triggerClass   = options.triggerClass   || 'compare-trigger--added';
//
//         // устанавливаем максимум
//         self.maxItems = options.maxItems || 4;
//
//         // готовим списки
//         self.compare  = [];
//         self.products = [];
//
//         self.reload();
//
//         // новые динамические триггеры
//         addItemTrigger();
//         removeItemTrigger();
//
//         self.checkStatus();
//     };
//
//     self.init( options );
// };
// $(function(){
//     Compare = new InSales.Compare();
//
//     // слушаем обновление сравнения
//     Events( 'onCompare_Update' ).subscribe( function( $data ){
//         //console.log( 'onCompare_Update: ', $data );
//     });
//
//     // слушаем добавление
//     Events( 'onCompare_Add' ).subscribe( function( $data ){
//         //console.log( 'onCompare_Add: ', $data );
//
//         showMessage( $data.text.addItem, 3000 );
//     });
//
//     // товар уже в списке?
//     Events( 'onCompare_inList' ).subscribe( function( $data ){
//         //console.log( 'onCompare_inList: ', $data );
//
//         showMessage( $data.text.repeatItem, 3000 );
//     });
//
//     if( Site.template == 'compare' ){
//         // удаляем товар в сравнении
//         Events( 'onCompare_Remove' ).subscribe( function( $data ){
//             //console.log( 'onCompare_Remove: ', $data );
//
//             if( $data.products.length == 0 ){
//                 $( '.compare-notice' ).show();
//                 $( '.compare-wrapper' ).hide();
//             }
//
//             var
//                 $item = $( '.js-compare_item-'+ $data.removed );
//
//             $item
//                 .remove();
//         });
//     }
//
//     // выводим сообщение, когда удалили товар из сравнения
//     Events( 'onCompare_Remove' ).subscribe( function( $data ){
//         showMessage( $data.text.removeItem, 2000 );
//     });
//
//     // мы достигли максимума товаров в списке
//     Events( 'onCompare_maxItem' ).subscribe( function( $data ){
//         showMessage( $data.text.maxItem, 2000 );
//     });
//
//     // переключение стилей
//     $( '.js-compare-toggle_same' ).on( 'click', function( e ){
//     });
// });
// // ============================================================================
// //                              FAVORITEAS
// // ============================================================================
//
// InSales.Favorites = function( options ){
//     var
//         self = this;
//
//     init = function( options ){
//         options = options || {};
//
//         // тянем классы элементов
//         self.addSelector    = options.addSelector    || '.js-favorite-add';
//         self.removeSelector = options.removeSelector || '.js-favorite-remove';
//         self.triggerClass   = options.triggerClass   || 'favorite-trigger--added';
//
//         // объявляем списки
//         self.products  = [];
//         self.favorites = [];
//
//         self.update();
//         addItemTrigger();
//         removeItemTrigger();
//
//         self.checkStatus();
//     };
//
//     // обновляем
//     self.update = function(){
//         var
//             $data = {};
//
//         // забираем данные из куки
//         try{
//             self.favorites = $.parseJSON( $.cookie( 'favorites' ) );
//         }catch( e ){
//             self.favorites = null;
//         }
//
//         // проверяем на пустоту
//         if( !self.favorites ){
//             self.products  = [];
//             self.favorites = [];
//
//             return;
//         }
//
//         // забираем данные по товарам
//         InSales.getProductList( self.favorites )
//             .then( function( response ){
//                 self.setList( response );
//
//                 $data = makeData( self );
//
//                 Events( 'onFavorite_Update' ).publish( $data );
//             });
//     };
//
//     // добавляем товар
//     self.addItem = function( product_id, $link ){
//         // есть ли такой товар в списке?
//         if( self.isRepeated( product_id ) ){
//             console.log( 'inList' );
//         }else{
//             var
//                 $data = makeData( self );
//
//             if( $link ){
//                 $link
//                     .parent()
//                     .addClass( self.triggerClass );
//             }
//
//             $data.added = product_id;
//             $data.jqObj = $link;
//
//             // пинаем товар в список
//             self.favorites.push( parseInt( product_id ) );
//
//             // сохраняем куку
//             $.cookie( 'favorites', JSON.stringify( self.favorites ), {
//                 path: '/'
//             });
//
//             Events( 'onFavorite_Add' ).publish( $data );
//
//             self.update();
//         }
//     };
//
//     addItemTrigger = function(){
//         $( document ).on( 'click', self.addSelector, function( e ){
//             e.preventDefault();
//
//             var
//                 product_id = $(this).data( 'product_id' );
//
//             self.addItem( product_id, $(this) );
//         });
//     };
//
//     self.removeItem = function( product_id, $link ){
//         var
//             $data = makeData( self ),
//             position;
//
//         $data.removed = product_id,
//             $data.jqObj   = $link,
//
//             // удаляем элемент из списка
//             $.each( self.favorites, function( index, id ){
//                 if( id == product_id ){
//                     position = index;
//                 }
//             });
//
//         if( typeof( position ) == 'number' ){
//             self.favorites.splice( position, 1 );
//         }
//
//         // сохраняем куку
//         $.cookie( 'favorites', JSON.stringify( self.favorites ), {
//             path: '/'
//         });
//
//         // сбрасываем блокировку
//         if( $link ){
//             $link.data( 'processed', false );
//
//             $link
//                 .parent()
//                 .removeClass( self.triggerClass );
//
//             $data.jqObj = $link;
//         }
//
//         Events( 'onFavorite_Remove' ).publish( $data );
//
//         self.update();
//     };
//
//     removeItemTrigger = function(){
//         $( document ).on( 'click', self.removeSelector, function( e ){
//             e.preventDefault();
//
//             // блокируем повторный клик
//             if( $(this).data( 'processed') ){
//                 return;
//             }
//
//             $(this).data( 'processed', true );
//
//             var
//                 product_id = $(this).data( 'product_id' );
//
//             self.removeItem( product_id, $(this) );
//         });
//     };
//
//     // получаем список товаров в избранном
//     self.getProducts = function(){
//         return self.products;
//     };
//
//     // проверка, есть ли такой в списке
//     self.isRepeated = function( product_id ) {
//         var
//             result = false;
//
//         if( self.favorites ){
//             $.each( self.favorites, function( index, id ) {
//                 if( id == product_id ) {
//                     result = true;
//                     return false;
//                 }
//             });
//         }
//
//         return result;
//     };
//
//     // формируем правильный список с данными по товарам
//     self.setList = function( product_list ){
//         var
//             products = convertProducts( product_list );
//
//         self.products = [];
//         $.each( self.favorites, function( index, id ){
//             if( id ){
//                 self.products.push( products[ id ] );
//             }
//         });
//
//         $.each( self.products, function( index, product ){
//             product.price = product.variants[ 0 ].price;
//             product.old_price = product.variants[ 0 ].old_priceprice;
//         });
//     };
//
//     // првоеряем, добавлен ли товар в избранное или нет?
//     // если да, то добавим класс контейнеру кнопки
//     self.checkStatus = function(){
//         $( self.addSelector ).each( function(){
//             var
//                 product_id = $(this).data( 'product_id' );
//
//             if( self.isRepeated( product_id ) ){
//                 $(this)
//                     .parent()
//                     .addClass( self.triggerClass );
//             }
//         });
//     };
//
//     //
//     init( options );
// };
// // =============================================================
// //                      FAVORITE
// // =============================================================
//
// var
//     Favorite = new InSales.Favorites();
//
// $(function(){
//     Events( 'onFavorite_Update' ).subscribe( function( $data ){
//         //console.log( 'onFavorite_Update: ', $data );
//
//         if( $data.products.length === 0 ){
//             $( '.js-favorite-notice' ).show();
//         }else{
//             $( '.js-favorite-notice' ).hide();
//
//             $( '.js-favorite-product_list' )
//                 .html( InSales.Render( $data, 'product', 'preview' ) );
//         }
//     });
//
//     Events( 'onFavorite_Add' ).subscribe( function( $data ){
//         //console.log( 'onFavorite_Add: ', $data );
//
//
//     });
//
//     Events( 'onFavorite_Remove' ).subscribe( function( $data ){
//         //console.log( 'onFavorite_Remove: ', $data );
//     });
// });
// // ============================================================================
// //                            RECENTLY VIEW
// // ============================================================================
//
// InSales.RecentlyView = function( options ){
//     var
//         self = this;
//
//     init = function( options ){
//         options = options || {};
//
//         // выставляем опции
//         self.maxItems = options.maxItems || 4;
//
//         // объявляем списки
//         self.products = [];
//         self.recently = [];
//
//         self.update();
//     };
//
//     // обновляем
//     self.update = function(){
//         var
//             $data = {};
//
//         // забираем данные из куки
//         try{
//             self.recently = $.parseJSON( $.cookie( 'recently' ) );
//         }catch( e ){
//             self.recently = null;
//         }
//
//         // проверяем на пустоту
//         if( !self.recently ){
//             self.products = [];
//             self.recently = [];
//         }
//
//         InSales.getProductList( self.recently )
//             .then( function( response ){
//                 self.setList( response );
//
//                 $data = makeData( self );
//
//                 Events( 'onRecently_Update' ).publish( $data );
//             });
//     };
//
//     // добавляем товар
//     self.addItem = function( product_id ){
//         // есть ли такой товар в списке?
//         if( self.isRepeated( product_id ) ){
//             return;
//         }else{
//             // не превысили мы лимит?
//             if( self.recently.length == self.maxItems ){
//                 self.recently.shift();
//             }
//
//             // пинаем товар в список
//             self.recently.push( parseInt( product_id ) );
//
//             // сохраняем куку
//             $.cookie( 'recently', JSON.stringify( self.recently ), {
//                 path: '/'
//             });
//         }
//     };
//
//     // проверка, есть ли такой в списке
//     self.isRepeated = function( product_id ) {
//         var
//             result = false;
//
//         if( self.recently ){
//             $.each( self.recently, function( index, id ) {
//                 if( id == product_id ) {
//                     result = true;
//                     return false;
//                 }
//             });
//         }
//
//         return result;
//     };
//
//     // формируем правильный список с данными по товарам
//     self.setList = function( product_list ){
//         var
//             products = convertProducts( product_list );
//
//         $.each( self.recently, function( index, id ){
//             if( id ){
//                 self.products.push( products[ id ] );
//             }
//         });
//
//         $.each( self.products, function( index, product ){
//             if( product ){
//                 product.price = product.variants[ 0 ].price;
//                 product.old_price = product.variants[ 0 ].old_priceprice;
//             }
//         });
//     };
//
//     //
//     init( options );
// };
// $(function(){
//     Recently = new InSales.RecentlyView({
//         maxItems: 3,
//     });
//
//     Events( 'onRecently_Update').subscribe( function( $data ){
//         if( $data.products.length > 0 ){
//             $( '.js-recently_view-wrapper' )
//                 .show();
//             $( '.js-recently_view' )
//                 .html( InSales.Render( $data, 'product', 'preview' ) );
//
//             $( '.js-slider--recently_view' ).owlCarousel({
//                 responsive: {
//                     0:    { items: 1 },
//                     480:  { items: 2 },
//                     640:  { items: 3 },
//                     800:  { items: 3 },
//                     1100: { items: 4 },
//                 },
//                 slideBy: 'page',
//                 navClass: [ 'button', 'button' ],
//                 margin: 32,
//             });
//         }
//         else{
//             $( '.js-recently_view-wrapper' )
//                 .hide();
//         }
//     });
//
//     if( Site.template == 'product' ){
//         Recently.addItem( Site.product.id );
//     }
// });
//
//
// */
