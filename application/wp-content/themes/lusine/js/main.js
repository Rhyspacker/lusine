// ==============================
// main.js
// ========================================

// ====================
// Load polyfill scripts
// ========================================

// ==============================
// polyfills.js
// ========================================

// For any polyfill scripts required to be loaded in the main.js
//

// Closest - https://github.com/jonathantneal/closest
(function (ElementProto) {
	if (typeof ElementProto.matches !== 'function') {
		ElementProto.matches = ElementProto.msMatchesSelector || ElementProto.mozMatchesSelector || ElementProto.webkitMatchesSelector || function matches(selector) {
			var element = this;
			var elements = (element.document || element.ownerDocument).querySelectorAll(selector);
			var index = 0;

			while (elements[index] && elements[index] !== element) {
				++index;
			}

			return Boolean(elements[index]);
		};
	}

	if (typeof ElementProto.closest !== 'function') {
		ElementProto.closest = function closest(selector) {
			var element = this;

			while (element && element.nodeType === 1) {
				if (element.matches(selector)) {
					return element;
				}

				element = element.parentNode;
			}

			return null;
		};
	}
})(window.Element.prototype);



// ====================
// Load vendor scripts
// ========================================

// ==============================
// vendor.main.js
// ========================================

// For any vendor scripts required to be loaded in the main.js

// Domready - https://raw.githubusercontent.com/ded/domready/master/src/ready.js
var stack = []
  , domReadyRE = /interactive|complete|loaded/
  , isReady = false

function async(fn){
  setTimeout(function(){
    fn()
  }, 0)
}

function checkStatus(){
  var item
  if(isReady) return
  if(domReadyRE.test(document.readyState)) {
    isReady = true
    while(item = stack.shift()) async(item)
    return
  }
  setTimeout(checkStatus, 10)
}
checkStatus()

var domready = function(fn){
  if(typeof fn != "function") return
  if(isReady) return async(fn)
  stack.push(fn)
}


// Picturefill 2.3.1 - https://github.com/scottjehl/picturefill
/*! Picturefill - v2.3.1 - 2015-04-09
* http://scottjehl.github.io/picturefill
* Copyright (c) 2015 https://github.com/scottjehl/picturefill/blob/master/Authors.txt; Licensed MIT */
window.matchMedia||(window.matchMedia=function(){"use strict";var a=window.styleMedia||window.media;if(!a){var b=document.createElement("style"),c=document.getElementsByTagName("script")[0],d=null;b.type="text/css",b.id="matchmediajs-test",c.parentNode.insertBefore(b,c),d="getComputedStyle"in window&&window.getComputedStyle(b,null)||b.currentStyle,a={matchMedium:function(a){var c="@media "+a+"{ #matchmediajs-test { width: 1px; } }";return b.styleSheet?b.styleSheet.cssText=c:b.textContent=c,"1px"===d.width}}}return function(b){return{matches:a.matchMedium(b||"all"),media:b||"all"}}}()),function(a,b,c){"use strict";function d(b){"object"==typeof module&&"object"==typeof module.exports?module.exports=b:"function"==typeof define&&define.amd&&define("picturefill",function(){return b}),"object"==typeof a&&(a.picturefill=b)}function e(a){var b,c,d,e,f,i=a||{};b=i.elements||g.getAllElements();for(var j=0,k=b.length;k>j;j++)if(c=b[j],d=c.parentNode,e=void 0,f=void 0,"IMG"===c.nodeName.toUpperCase()&&(c[g.ns]||(c[g.ns]={}),i.reevaluate||!c[g.ns].evaluated)){if(d&&"PICTURE"===d.nodeName.toUpperCase()){if(g.removeVideoShim(d),e=g.getMatch(c,d),e===!1)continue}else e=void 0;(d&&"PICTURE"===d.nodeName.toUpperCase()||!g.sizesSupported&&c.srcset&&h.test(c.srcset))&&g.dodgeSrcset(c),e?(f=g.processSourceSet(e),g.applyBestCandidate(f,c)):(f=g.processSourceSet(c),(void 0===c.srcset||c[g.ns].srcset)&&g.applyBestCandidate(f,c)),c[g.ns].evaluated=!0}}function f(){function c(){clearTimeout(d),d=setTimeout(h,60)}g.initTypeDetects(),e();var d,f=setInterval(function(){return e(),/^loaded|^i|^c/.test(b.readyState)?void clearInterval(f):void 0},250),h=function(){e({reevaluate:!0})};a.addEventListener?a.addEventListener("resize",c,!1):a.attachEvent&&a.attachEvent("onresize",c)}if(a.HTMLPictureElement)return void d(function(){});b.createElement("picture");var g=a.picturefill||{},h=/\s+\+?\d+(e\d+)?w/;g.ns="picturefill",function(){g.srcsetSupported="srcset"in c,g.sizesSupported="sizes"in c,g.curSrcSupported="currentSrc"in c}(),g.trim=function(a){return a.trim?a.trim():a.replace(/^\s+|\s+$/g,"")},g.makeUrl=function(){var a=b.createElement("a");return function(b){return a.href=b,a.href}}(),g.restrictsMixedContent=function(){return"https:"===a.location.protocol},g.matchesMedia=function(b){return a.matchMedia&&a.matchMedia(b).matches},g.getDpr=function(){return a.devicePixelRatio||1},g.getWidthFromLength=function(a){var c;if(!a||a.indexOf("%")>-1!=!1||!(parseFloat(a)>0||a.indexOf("calc(")>-1))return!1;a=a.replace("vw","%"),g.lengthEl||(g.lengthEl=b.createElement("div"),g.lengthEl.style.cssText="border:0;display:block;font-size:1em;left:0;margin:0;padding:0;position:absolute;visibility:hidden",g.lengthEl.className="helper-from-picturefill-js"),g.lengthEl.style.width="0px";try{g.lengthEl.style.width=a}catch(d){}return b.body.appendChild(g.lengthEl),c=g.lengthEl.offsetWidth,0>=c&&(c=!1),b.body.removeChild(g.lengthEl),c},g.detectTypeSupport=function(b,c){var d=new a.Image;return d.onerror=function(){g.types[b]=!1,e()},d.onload=function(){g.types[b]=1===d.width,e()},d.src=c,"pending"},g.types=g.types||{},g.initTypeDetects=function(){g.types["image/jpeg"]=!0,g.types["image/gif"]=!0,g.types["image/png"]=!0,g.types["image/svg+xml"]=b.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"),g.types["image/webp"]=g.detectTypeSupport("image/webp","data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=")},g.verifyTypeSupport=function(a){var b=a.getAttribute("type");if(null===b||""===b)return!0;var c=g.types[b];return"string"==typeof c&&"pending"!==c?(g.types[b]=g.detectTypeSupport(b,c),"pending"):"function"==typeof c?(c(),"pending"):c},g.parseSize=function(a){var b=/(\([^)]+\))?\s*(.+)/g.exec(a);return{media:b&&b[1],length:b&&b[2]}},g.findWidthFromSourceSize=function(c){for(var d,e=g.trim(c).split(/\s*,\s*/),f=0,h=e.length;h>f;f++){var i=e[f],j=g.parseSize(i),k=j.length,l=j.media;if(k&&(!l||g.matchesMedia(l))&&(d=g.getWidthFromLength(k)))break}return d||Math.max(a.innerWidth||0,b.documentElement.clientWidth)},g.parseSrcset=function(a){for(var b=[];""!==a;){a=a.replace(/^\s+/g,"");var c,d=a.search(/\s/g),e=null;if(-1!==d){c=a.slice(0,d);var f=c.slice(-1);if((","===f||""===c)&&(c=c.replace(/,+$/,""),e=""),a=a.slice(d+1),null===e){var g=a.indexOf(",");-1!==g?(e=a.slice(0,g),a=a.slice(g+1)):(e=a,a="")}}else c=a,a="";(c||e)&&b.push({url:c,descriptor:e})}return b},g.parseDescriptor=function(a,b){var c,d=b||"100vw",e=a&&a.replace(/(^\s+|\s+$)/g,""),f=g.findWidthFromSourceSize(d);if(e)for(var h=e.split(" "),i=h.length-1;i>=0;i--){var j=h[i],k=j&&j.slice(j.length-1);if("h"!==k&&"w"!==k||g.sizesSupported){if("x"===k){var l=j&&parseFloat(j,10);c=l&&!isNaN(l)?l:1}}else c=parseFloat(parseInt(j,10)/f)}return c||1},g.getCandidatesFromSourceSet=function(a,b){for(var c=g.parseSrcset(a),d=[],e=0,f=c.length;f>e;e++){var h=c[e];d.push({url:h.url,resolution:g.parseDescriptor(h.descriptor,b)})}return d},g.dodgeSrcset=function(a){a.srcset&&(a[g.ns].srcset=a.srcset,a.srcset="",a.setAttribute("data-pfsrcset",a[g.ns].srcset))},g.processSourceSet=function(a){var b=a.getAttribute("srcset"),c=a.getAttribute("sizes"),d=[];return"IMG"===a.nodeName.toUpperCase()&&a[g.ns]&&a[g.ns].srcset&&(b=a[g.ns].srcset),b&&(d=g.getCandidatesFromSourceSet(b,c)),d},g.backfaceVisibilityFix=function(a){var b=a.style||{},c="webkitBackfaceVisibility"in b,d=b.zoom;c&&(b.zoom=".999",c=a.offsetWidth,b.zoom=d)},g.setIntrinsicSize=function(){var c={},d=function(a,b,c){b&&a.setAttribute("width",parseInt(b/c,10))};return function(e,f){var h;e[g.ns]&&!a.pfStopIntrinsicSize&&(void 0===e[g.ns].dims&&(e[g.ns].dims=e.getAttribute("width")||e.getAttribute("height")),e[g.ns].dims||(f.url in c?d(e,c[f.url],f.resolution):(h=b.createElement("img"),h.onload=function(){if(c[f.url]=h.width,!c[f.url])try{b.body.appendChild(h),c[f.url]=h.width||h.offsetWidth,b.body.removeChild(h)}catch(a){}e.src===f.url&&d(e,c[f.url],f.resolution),e=null,h.onload=null,h=null},h.src=f.url)))}}(),g.applyBestCandidate=function(a,b){var c,d,e;a.sort(g.ascendingSort),d=a.length,e=a[d-1];for(var f=0;d>f;f++)if(c=a[f],c.resolution>=g.getDpr()){e=c;break}e&&(e.url=g.makeUrl(e.url),b.src!==e.url&&(g.restrictsMixedContent()&&"http:"===e.url.substr(0,"http:".length).toLowerCase()?void 0!==window.console&&console.warn("Blocked mixed content image "+e.url):(b.src=e.url,g.curSrcSupported||(b.currentSrc=b.src),g.backfaceVisibilityFix(b))),g.setIntrinsicSize(b,e))},g.ascendingSort=function(a,b){return a.resolution-b.resolution},g.removeVideoShim=function(a){var b=a.getElementsByTagName("video");if(b.length){for(var c=b[0],d=c.getElementsByTagName("source");d.length;)a.insertBefore(d[0],c);c.parentNode.removeChild(c)}},g.getAllElements=function(){for(var a=[],c=b.getElementsByTagName("img"),d=0,e=c.length;e>d;d++){var f=c[d];("PICTURE"===f.parentNode.nodeName.toUpperCase()||null!==f.getAttribute("srcset")||f[g.ns]&&null!==f[g.ns].srcset)&&a.push(f)}return a},g.getMatch=function(a,b){for(var c,d=b.childNodes,e=0,f=d.length;f>e;e++){var h=d[e];if(1===h.nodeType){if(h===a)return c;if("SOURCE"===h.nodeName.toUpperCase()){null!==h.getAttribute("src")&&void 0!==typeof console&&console.warn("The `src` attribute is invalid on `picture` `source` element; instead, use `srcset`.");var i=h.getAttribute("media");if(h.getAttribute("srcset")&&(!i||g.matchesMedia(i))){var j=g.verifyTypeSupport(h);if(j===!0){c=h;break}if("pending"===j)return!1}}}}return c},f(),e._=g,d(e)}(window,window.document,new window.Image);

// svgxuse 1.2.3 - https://github.com/Keyamoon/svgxuse
/*!
 * @copyright Copyright (c) 2017 IcoMoon.io
 * @license   Licensed under MIT license
 *            See https://github.com/Keyamoon/svgxuse
 * @version   1.2.3
 */
(function(){if("undefined"!=typeof window&&window.addEventListener){var e=Object.create(null),m,t,d=function(){clearTimeout(t);t=setTimeout(m,100)},q=function(){},u=function(){var f;window.addEventListener("resize",d,!1);window.addEventListener("orientationchange",d,!1);window.MutationObserver?(f=new MutationObserver(d),f.observe(document.documentElement,{childList:!0,subtree:!0,attributes:!0}),q=function(){try{f.disconnect(),window.removeEventListener("resize",d,!1),window.removeEventListener("orientationchange",d,
!1)}catch(n){}}):(document.documentElement.addEventListener("DOMSubtreeModified",d,!1),q=function(){document.documentElement.removeEventListener("DOMSubtreeModified",d,!1);window.removeEventListener("resize",d,!1);window.removeEventListener("orientationchange",d,!1)})},v=function(f){function e(a){var c;void 0!==a.protocol?c=a:(c=document.createElement("a"),c.href=a);return c.protocol.replace(/:/g,"")+c.host}var d,p;window.XMLHttpRequest&&(d=new XMLHttpRequest,p=e(location),f=e(f),d=void 0===d.withCredentials&&
""!==f&&f!==p?XDomainRequest||void 0:XMLHttpRequest);return d};m=function(){function d(){--r;0===r&&(q(),u())}function n(a){return function(){!0!==e[a.base]&&(a.isXlink?a.useEl.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href","#"+a.hash):a.useEl.setAttribute("href","#"+a.hash))}}function m(a){return function(){var c=document.body,b=document.createElement("x");a.onload=null;b.innerHTML=a.responseText;if(b=b.getElementsByTagName("svg")[0])b.setAttribute("aria-hidden","true"),b.style.position=
"absolute",b.style.width=0,b.style.height=0,b.style.overflow="hidden",c.insertBefore(b,c.firstChild);d()}}function p(a){return function(){a.onerror=null;a.ontimeout=null;d()}}var a,c,l,g,r=0,b,k=!1,h;q();h=document.getElementsByTagName("use");for(g=0;g<h.length;g+=1){try{c=h[g].getBoundingClientRect()}catch(w){c=!1}(a=h[g].getAttribute("href"))?k=!1:(a=h[g].getAttributeNS("http://www.w3.org/1999/xlink","href"),k=!0);l=a&&a.split?a.split("#"):["",""];a=l[0];l=l[1];b=c&&0===c.left&&0===c.right&&0===
c.top&&0===c.bottom;c&&0===c.width&&0===c.height&&!b?a.length&&(b=e[a],!0!==b&&setTimeout(n({useEl:h[g],base:a,hash:l,isXlink:k}),0),void 0===b&&(k=v(a),void 0!==k&&(b=new k,e[a]=b,b.onload=m(b),b.onerror=p(b),b.ontimeout=p(b),b.open("GET",a),b.send(),r+=1))):b?a.length&&e[a]&&setTimeout(n({useEl:h[g],base:a,hash:l,isXlink:k}),0):void 0===e[a]?e[a]=!0:e[a].onload&&(e[a].abort(),delete e[a].onload,e[a]=!0)}h="";r+=1;d()};window.addEventListener("load",function n(){window.removeEventListener("load",
n,!1);t=setTimeout(m,0)},!1)}})();


// Isotope
/*!
 * Isotope PACKAGED v3.0.6
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * https://isotope.metafizzy.co
 * Copyright 2010-2018 Metafizzy
 */

!function(t,e){"function"==typeof define&&define.amd?define("jquery-bridget/jquery-bridget",["jquery"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("jquery")):t.jQueryBridget=e(t,t.jQuery)}(window,function(t,e){"use strict";function i(i,s,a){function u(t,e,o){var n,s="$()."+i+'("'+e+'")';return t.each(function(t,u){var h=a.data(u,i);if(!h)return void r(i+" not initialized. Cannot call methods, i.e. "+s);var d=h[e];if(!d||"_"==e.charAt(0))return void r(s+" is not a valid method");var l=d.apply(h,o);n=void 0===n?l:n}),void 0!==n?n:t}function h(t,e){t.each(function(t,o){var n=a.data(o,i);n?(n.option(e),n._init()):(n=new s(o,e),a.data(o,i,n))})}a=a||e||t.jQuery,a&&(s.prototype.option||(s.prototype.option=function(t){a.isPlainObject(t)&&(this.options=a.extend(!0,this.options,t))}),a.fn[i]=function(t){if("string"==typeof t){var e=n.call(arguments,1);return u(this,t,e)}return h(this,t),this},o(a))}function o(t){!t||t&&t.bridget||(t.bridget=i)}var n=Array.prototype.slice,s=t.console,r="undefined"==typeof s?function(){}:function(t){s.error(t)};return o(e||t.jQuery),i}),function(t,e){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",e):"object"==typeof module&&module.exports?module.exports=e():t.EvEmitter=e()}("undefined"!=typeof window?window:this,function(){function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var i=this._events=this._events||{},o=i[t]=i[t]||[];return o.indexOf(e)==-1&&o.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var i=this._onceEvents=this._onceEvents||{},o=i[t]=i[t]||{};return o[e]=!0,this}},e.off=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var o=i.indexOf(e);return o!=-1&&i.splice(o,1),this}},e.emitEvent=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){i=i.slice(0),e=e||[];for(var o=this._onceEvents&&this._onceEvents[t],n=0;n<i.length;n++){var s=i[n],r=o&&o[s];r&&(this.off(t,s),delete o[s]),s.apply(this,e)}return this}},e.allOff=function(){delete this._events,delete this._onceEvents},t}),function(t,e){"function"==typeof define&&define.amd?define("get-size/get-size",e):"object"==typeof module&&module.exports?module.exports=e():t.getSize=e()}(window,function(){"use strict";function t(t){var e=parseFloat(t),i=t.indexOf("%")==-1&&!isNaN(e);return i&&e}function e(){}function i(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0;e<h;e++){var i=u[e];t[i]=0}return t}function o(t){var e=getComputedStyle(t);return e||a("Style returned "+e+". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"),e}function n(){if(!d){d=!0;var e=document.createElement("div");e.style.width="200px",e.style.padding="1px 2px 3px 4px",e.style.borderStyle="solid",e.style.borderWidth="1px 2px 3px 4px",e.style.boxSizing="border-box";var i=document.body||document.documentElement;i.appendChild(e);var n=o(e);r=200==Math.round(t(n.width)),s.isBoxSizeOuter=r,i.removeChild(e)}}function s(e){if(n(),"string"==typeof e&&(e=document.querySelector(e)),e&&"object"==typeof e&&e.nodeType){var s=o(e);if("none"==s.display)return i();var a={};a.width=e.offsetWidth,a.height=e.offsetHeight;for(var d=a.isBorderBox="border-box"==s.boxSizing,l=0;l<h;l++){var f=u[l],c=s[f],m=parseFloat(c);a[f]=isNaN(m)?0:m}var p=a.paddingLeft+a.paddingRight,y=a.paddingTop+a.paddingBottom,g=a.marginLeft+a.marginRight,v=a.marginTop+a.marginBottom,_=a.borderLeftWidth+a.borderRightWidth,z=a.borderTopWidth+a.borderBottomWidth,I=d&&r,x=t(s.width);x!==!1&&(a.width=x+(I?0:p+_));var S=t(s.height);return S!==!1&&(a.height=S+(I?0:y+z)),a.innerWidth=a.width-(p+_),a.innerHeight=a.height-(y+z),a.outerWidth=a.width+g,a.outerHeight=a.height+v,a}}var r,a="undefined"==typeof console?e:function(t){console.error(t)},u=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],h=u.length,d=!1;return s}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("desandro-matches-selector/matches-selector",e):"object"==typeof module&&module.exports?module.exports=e():t.matchesSelector=e()}(window,function(){"use strict";var t=function(){var t=window.Element.prototype;if(t.matches)return"matches";if(t.matchesSelector)return"matchesSelector";for(var e=["webkit","moz","ms","o"],i=0;i<e.length;i++){var o=e[i],n=o+"MatchesSelector";if(t[n])return n}}();return function(e,i){return e[t](i)}}),function(t,e){"function"==typeof define&&define.amd?define("fizzy-ui-utils/utils",["desandro-matches-selector/matches-selector"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("desandro-matches-selector")):t.fizzyUIUtils=e(t,t.matchesSelector)}(window,function(t,e){var i={};i.extend=function(t,e){for(var i in e)t[i]=e[i];return t},i.modulo=function(t,e){return(t%e+e)%e};var o=Array.prototype.slice;i.makeArray=function(t){if(Array.isArray(t))return t;if(null===t||void 0===t)return[];var e="object"==typeof t&&"number"==typeof t.length;return e?o.call(t):[t]},i.removeFrom=function(t,e){var i=t.indexOf(e);i!=-1&&t.splice(i,1)},i.getParent=function(t,i){for(;t.parentNode&&t!=document.body;)if(t=t.parentNode,e(t,i))return t},i.getQueryElement=function(t){return"string"==typeof t?document.querySelector(t):t},i.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},i.filterFindElements=function(t,o){t=i.makeArray(t);var n=[];return t.forEach(function(t){if(t instanceof HTMLElement){if(!o)return void n.push(t);e(t,o)&&n.push(t);for(var i=t.querySelectorAll(o),s=0;s<i.length;s++)n.push(i[s])}}),n},i.debounceMethod=function(t,e,i){i=i||100;var o=t.prototype[e],n=e+"Timeout";t.prototype[e]=function(){var t=this[n];clearTimeout(t);var e=arguments,s=this;this[n]=setTimeout(function(){o.apply(s,e),delete s[n]},i)}},i.docReady=function(t){var e=document.readyState;"complete"==e||"interactive"==e?setTimeout(t):document.addEventListener("DOMContentLoaded",t)},i.toDashed=function(t){return t.replace(/(.)([A-Z])/g,function(t,e,i){return e+"-"+i}).toLowerCase()};var n=t.console;return i.htmlInit=function(e,o){i.docReady(function(){var s=i.toDashed(o),r="data-"+s,a=document.querySelectorAll("["+r+"]"),u=document.querySelectorAll(".js-"+s),h=i.makeArray(a).concat(i.makeArray(u)),d=r+"-options",l=t.jQuery;h.forEach(function(t){var i,s=t.getAttribute(r)||t.getAttribute(d);try{i=s&&JSON.parse(s)}catch(a){return void(n&&n.error("Error parsing "+r+" on "+t.className+": "+a))}var u=new e(t,i);l&&l.data(t,o,u)})})},i}),function(t,e){"function"==typeof define&&define.amd?define("outlayer/item",["ev-emitter/ev-emitter","get-size/get-size"],e):"object"==typeof module&&module.exports?module.exports=e(require("ev-emitter"),require("get-size")):(t.Outlayer={},t.Outlayer.Item=e(t.EvEmitter,t.getSize))}(window,function(t,e){"use strict";function i(t){for(var e in t)return!1;return e=null,!0}function o(t,e){t&&(this.element=t,this.layout=e,this.position={x:0,y:0},this._create())}function n(t){return t.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})}var s=document.documentElement.style,r="string"==typeof s.transition?"transition":"WebkitTransition",a="string"==typeof s.transform?"transform":"WebkitTransform",u={WebkitTransition:"webkitTransitionEnd",transition:"transitionend"}[r],h={transform:a,transition:r,transitionDuration:r+"Duration",transitionProperty:r+"Property",transitionDelay:r+"Delay"},d=o.prototype=Object.create(t.prototype);d.constructor=o,d._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},d.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},d.getSize=function(){this.size=e(this.element)},d.css=function(t){var e=this.element.style;for(var i in t){var o=h[i]||i;e[o]=t[i]}},d.getPosition=function(){var t=getComputedStyle(this.element),e=this.layout._getOption("originLeft"),i=this.layout._getOption("originTop"),o=t[e?"left":"right"],n=t[i?"top":"bottom"],s=parseFloat(o),r=parseFloat(n),a=this.layout.size;o.indexOf("%")!=-1&&(s=s/100*a.width),n.indexOf("%")!=-1&&(r=r/100*a.height),s=isNaN(s)?0:s,r=isNaN(r)?0:r,s-=e?a.paddingLeft:a.paddingRight,r-=i?a.paddingTop:a.paddingBottom,this.position.x=s,this.position.y=r},d.layoutPosition=function(){var t=this.layout.size,e={},i=this.layout._getOption("originLeft"),o=this.layout._getOption("originTop"),n=i?"paddingLeft":"paddingRight",s=i?"left":"right",r=i?"right":"left",a=this.position.x+t[n];e[s]=this.getXValue(a),e[r]="";var u=o?"paddingTop":"paddingBottom",h=o?"top":"bottom",d=o?"bottom":"top",l=this.position.y+t[u];e[h]=this.getYValue(l),e[d]="",this.css(e),this.emitEvent("layout",[this])},d.getXValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&!e?t/this.layout.size.width*100+"%":t+"px"},d.getYValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&e?t/this.layout.size.height*100+"%":t+"px"},d._transitionTo=function(t,e){this.getPosition();var i=this.position.x,o=this.position.y,n=t==this.position.x&&e==this.position.y;if(this.setPosition(t,e),n&&!this.isTransitioning)return void this.layoutPosition();var s=t-i,r=e-o,a={};a.transform=this.getTranslate(s,r),this.transition({to:a,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},d.getTranslate=function(t,e){var i=this.layout._getOption("originLeft"),o=this.layout._getOption("originTop");return t=i?t:-t,e=o?e:-e,"translate3d("+t+"px, "+e+"px, 0)"},d.goTo=function(t,e){this.setPosition(t,e),this.layoutPosition()},d.moveTo=d._transitionTo,d.setPosition=function(t,e){this.position.x=parseFloat(t),this.position.y=parseFloat(e)},d._nonTransition=function(t){this.css(t.to),t.isCleaning&&this._removeStyles(t.to);for(var e in t.onTransitionEnd)t.onTransitionEnd[e].call(this)},d.transition=function(t){if(!parseFloat(this.layout.options.transitionDuration))return void this._nonTransition(t);var e=this._transn;for(var i in t.onTransitionEnd)e.onEnd[i]=t.onTransitionEnd[i];for(i in t.to)e.ingProperties[i]=!0,t.isCleaning&&(e.clean[i]=!0);if(t.from){this.css(t.from);var o=this.element.offsetHeight;o=null}this.enableTransition(t.to),this.css(t.to),this.isTransitioning=!0};var l="opacity,"+n(a);d.enableTransition=function(){if(!this.isTransitioning){var t=this.layout.options.transitionDuration;t="number"==typeof t?t+"ms":t,this.css({transitionProperty:l,transitionDuration:t,transitionDelay:this.staggerDelay||0}),this.element.addEventListener(u,this,!1)}},d.onwebkitTransitionEnd=function(t){this.ontransitionend(t)},d.onotransitionend=function(t){this.ontransitionend(t)};var f={"-webkit-transform":"transform"};d.ontransitionend=function(t){if(t.target===this.element){var e=this._transn,o=f[t.propertyName]||t.propertyName;if(delete e.ingProperties[o],i(e.ingProperties)&&this.disableTransition(),o in e.clean&&(this.element.style[t.propertyName]="",delete e.clean[o]),o in e.onEnd){var n=e.onEnd[o];n.call(this),delete e.onEnd[o]}this.emitEvent("transitionEnd",[this])}},d.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(u,this,!1),this.isTransitioning=!1},d._removeStyles=function(t){var e={};for(var i in t)e[i]="";this.css(e)};var c={transitionProperty:"",transitionDuration:"",transitionDelay:""};return d.removeTransitionStyles=function(){this.css(c)},d.stagger=function(t){t=isNaN(t)?0:t,this.staggerDelay=t+"ms"},d.removeElem=function(){this.element.parentNode.removeChild(this.element),this.css({display:""}),this.emitEvent("remove",[this])},d.remove=function(){return r&&parseFloat(this.layout.options.transitionDuration)?(this.once("transitionEnd",function(){this.removeElem()}),void this.hide()):void this.removeElem()},d.reveal=function(){delete this.isHidden,this.css({display:""});var t=this.layout.options,e={},i=this.getHideRevealTransitionEndProperty("visibleStyle");e[i]=this.onRevealTransitionEnd,this.transition({from:t.hiddenStyle,to:t.visibleStyle,isCleaning:!0,onTransitionEnd:e})},d.onRevealTransitionEnd=function(){this.isHidden||this.emitEvent("reveal")},d.getHideRevealTransitionEndProperty=function(t){var e=this.layout.options[t];if(e.opacity)return"opacity";for(var i in e)return i},d.hide=function(){this.isHidden=!0,this.css({display:""});var t=this.layout.options,e={},i=this.getHideRevealTransitionEndProperty("hiddenStyle");e[i]=this.onHideTransitionEnd,this.transition({from:t.visibleStyle,to:t.hiddenStyle,isCleaning:!0,onTransitionEnd:e})},d.onHideTransitionEnd=function(){this.isHidden&&(this.css({display:"none"}),this.emitEvent("hide"))},d.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},o}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("outlayer/outlayer",["ev-emitter/ev-emitter","get-size/get-size","fizzy-ui-utils/utils","./item"],function(i,o,n,s){return e(t,i,o,n,s)}):"object"==typeof module&&module.exports?module.exports=e(t,require("ev-emitter"),require("get-size"),require("fizzy-ui-utils"),require("./item")):t.Outlayer=e(t,t.EvEmitter,t.getSize,t.fizzyUIUtils,t.Outlayer.Item)}(window,function(t,e,i,o,n){"use strict";function s(t,e){var i=o.getQueryElement(t);if(!i)return void(u&&u.error("Bad element for "+this.constructor.namespace+": "+(i||t)));this.element=i,h&&(this.$element=h(this.element)),this.options=o.extend({},this.constructor.defaults),this.option(e);var n=++l;this.element.outlayerGUID=n,f[n]=this,this._create();var s=this._getOption("initLayout");s&&this.layout()}function r(t){function e(){t.apply(this,arguments)}return e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e}function a(t){if("number"==typeof t)return t;var e=t.match(/(^\d*\.?\d*)(\w*)/),i=e&&e[1],o=e&&e[2];if(!i.length)return 0;i=parseFloat(i);var n=m[o]||1;return i*n}var u=t.console,h=t.jQuery,d=function(){},l=0,f={};s.namespace="outlayer",s.Item=n,s.defaults={containerStyle:{position:"relative"},initLayout:!0,originLeft:!0,originTop:!0,resize:!0,resizeContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}};var c=s.prototype;o.extend(c,e.prototype),c.option=function(t){o.extend(this.options,t)},c._getOption=function(t){var e=this.constructor.compatOptions[t];return e&&void 0!==this.options[e]?this.options[e]:this.options[t]},s.compatOptions={initLayout:"isInitLayout",horizontal:"isHorizontal",layoutInstant:"isLayoutInstant",originLeft:"isOriginLeft",originTop:"isOriginTop",resize:"isResizeBound",resizeContainer:"isResizingContainer"},c._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),o.extend(this.element.style,this.options.containerStyle);var t=this._getOption("resize");t&&this.bindResize()},c.reloadItems=function(){this.items=this._itemize(this.element.children)},c._itemize=function(t){for(var e=this._filterFindItemElements(t),i=this.constructor.Item,o=[],n=0;n<e.length;n++){var s=e[n],r=new i(s,this);o.push(r)}return o},c._filterFindItemElements=function(t){return o.filterFindElements(t,this.options.itemSelector)},c.getItemElements=function(){return this.items.map(function(t){return t.element})},c.layout=function(){this._resetLayout(),this._manageStamps();var t=this._getOption("layoutInstant"),e=void 0!==t?t:!this._isLayoutInited;this.layoutItems(this.items,e),this._isLayoutInited=!0},c._init=c.layout,c._resetLayout=function(){this.getSize()},c.getSize=function(){this.size=i(this.element)},c._getMeasurement=function(t,e){var o,n=this.options[t];n?("string"==typeof n?o=this.element.querySelector(n):n instanceof HTMLElement&&(o=n),this[t]=o?i(o)[e]:n):this[t]=0},c.layoutItems=function(t,e){t=this._getItemsForLayout(t),this._layoutItems(t,e),this._postLayout()},c._getItemsForLayout=function(t){return t.filter(function(t){return!t.isIgnored})},c._layoutItems=function(t,e){if(this._emitCompleteOnItems("layout",t),t&&t.length){var i=[];t.forEach(function(t){var o=this._getItemLayoutPosition(t);o.item=t,o.isInstant=e||t.isLayoutInstant,i.push(o)},this),this._processLayoutQueue(i)}},c._getItemLayoutPosition=function(){return{x:0,y:0}},c._processLayoutQueue=function(t){this.updateStagger(),t.forEach(function(t,e){this._positionItem(t.item,t.x,t.y,t.isInstant,e)},this)},c.updateStagger=function(){var t=this.options.stagger;return null===t||void 0===t?void(this.stagger=0):(this.stagger=a(t),this.stagger)},c._positionItem=function(t,e,i,o,n){o?t.goTo(e,i):(t.stagger(n*this.stagger),t.moveTo(e,i))},c._postLayout=function(){this.resizeContainer()},c.resizeContainer=function(){var t=this._getOption("resizeContainer");if(t){var e=this._getContainerSize();e&&(this._setContainerMeasure(e.width,!0),this._setContainerMeasure(e.height,!1))}},c._getContainerSize=d,c._setContainerMeasure=function(t,e){if(void 0!==t){var i=this.size;i.isBorderBox&&(t+=e?i.paddingLeft+i.paddingRight+i.borderLeftWidth+i.borderRightWidth:i.paddingBottom+i.paddingTop+i.borderTopWidth+i.borderBottomWidth),t=Math.max(t,0),this.element.style[e?"width":"height"]=t+"px"}},c._emitCompleteOnItems=function(t,e){function i(){n.dispatchEvent(t+"Complete",null,[e])}function o(){r++,r==s&&i()}var n=this,s=e.length;if(!e||!s)return void i();var r=0;e.forEach(function(e){e.once(t,o)})},c.dispatchEvent=function(t,e,i){var o=e?[e].concat(i):i;if(this.emitEvent(t,o),h)if(this.$element=this.$element||h(this.element),e){var n=h.Event(e);n.type=t,this.$element.trigger(n,i)}else this.$element.trigger(t,i)},c.ignore=function(t){var e=this.getItem(t);e&&(e.isIgnored=!0)},c.unignore=function(t){var e=this.getItem(t);e&&delete e.isIgnored},c.stamp=function(t){t=this._find(t),t&&(this.stamps=this.stamps.concat(t),t.forEach(this.ignore,this))},c.unstamp=function(t){t=this._find(t),t&&t.forEach(function(t){o.removeFrom(this.stamps,t),this.unignore(t)},this)},c._find=function(t){if(t)return"string"==typeof t&&(t=this.element.querySelectorAll(t)),t=o.makeArray(t)},c._manageStamps=function(){this.stamps&&this.stamps.length&&(this._getBoundingRect(),this.stamps.forEach(this._manageStamp,this))},c._getBoundingRect=function(){var t=this.element.getBoundingClientRect(),e=this.size;this._boundingRect={left:t.left+e.paddingLeft+e.borderLeftWidth,top:t.top+e.paddingTop+e.borderTopWidth,right:t.right-(e.paddingRight+e.borderRightWidth),bottom:t.bottom-(e.paddingBottom+e.borderBottomWidth)}},c._manageStamp=d,c._getElementOffset=function(t){var e=t.getBoundingClientRect(),o=this._boundingRect,n=i(t),s={left:e.left-o.left-n.marginLeft,top:e.top-o.top-n.marginTop,right:o.right-e.right-n.marginRight,bottom:o.bottom-e.bottom-n.marginBottom};return s},c.handleEvent=o.handleEvent,c.bindResize=function(){t.addEventListener("resize",this),this.isResizeBound=!0},c.unbindResize=function(){t.removeEventListener("resize",this),this.isResizeBound=!1},c.onresize=function(){this.resize()},o.debounceMethod(s,"onresize",100),c.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},c.needsResizeLayout=function(){var t=i(this.element),e=this.size&&t;return e&&t.innerWidth!==this.size.innerWidth},c.addItems=function(t){var e=this._itemize(t);return e.length&&(this.items=this.items.concat(e)),e},c.appended=function(t){var e=this.addItems(t);e.length&&(this.layoutItems(e,!0),this.reveal(e))},c.prepended=function(t){var e=this._itemize(t);if(e.length){var i=this.items.slice(0);this.items=e.concat(i),this._resetLayout(),this._manageStamps(),this.layoutItems(e,!0),this.reveal(e),this.layoutItems(i)}},c.reveal=function(t){if(this._emitCompleteOnItems("reveal",t),t&&t.length){var e=this.updateStagger();t.forEach(function(t,i){t.stagger(i*e),t.reveal()})}},c.hide=function(t){if(this._emitCompleteOnItems("hide",t),t&&t.length){var e=this.updateStagger();t.forEach(function(t,i){t.stagger(i*e),t.hide()})}},c.revealItemElements=function(t){var e=this.getItems(t);this.reveal(e)},c.hideItemElements=function(t){var e=this.getItems(t);this.hide(e)},c.getItem=function(t){for(var e=0;e<this.items.length;e++){var i=this.items[e];if(i.element==t)return i}},c.getItems=function(t){t=o.makeArray(t);var e=[];return t.forEach(function(t){var i=this.getItem(t);i&&e.push(i)},this),e},c.remove=function(t){var e=this.getItems(t);this._emitCompleteOnItems("remove",e),e&&e.length&&e.forEach(function(t){t.remove(),o.removeFrom(this.items,t)},this)},c.destroy=function(){var t=this.element.style;t.height="",t.position="",t.width="",this.items.forEach(function(t){t.destroy()}),this.unbindResize();var e=this.element.outlayerGUID;delete f[e],delete this.element.outlayerGUID,h&&h.removeData(this.element,this.constructor.namespace)},s.data=function(t){t=o.getQueryElement(t);var e=t&&t.outlayerGUID;return e&&f[e]},s.create=function(t,e){var i=r(s);return i.defaults=o.extend({},s.defaults),o.extend(i.defaults,e),i.compatOptions=o.extend({},s.compatOptions),i.namespace=t,i.data=s.data,i.Item=r(n),o.htmlInit(i,t),h&&h.bridget&&h.bridget(t,i),i};var m={ms:1,s:1e3};return s.Item=n,s}),function(t,e){"function"==typeof define&&define.amd?define("isotope-layout/js/item",["outlayer/outlayer"],e):"object"==typeof module&&module.exports?module.exports=e(require("outlayer")):(t.Isotope=t.Isotope||{},t.Isotope.Item=e(t.Outlayer))}(window,function(t){"use strict";function e(){t.Item.apply(this,arguments)}var i=e.prototype=Object.create(t.Item.prototype),o=i._create;i._create=function(){this.id=this.layout.itemGUID++,o.call(this),this.sortData={}},i.updateSortData=function(){if(!this.isIgnored){this.sortData.id=this.id,this.sortData["original-order"]=this.id,this.sortData.random=Math.random();var t=this.layout.options.getSortData,e=this.layout._sorters;for(var i in t){var o=e[i];this.sortData[i]=o(this.element,this)}}};var n=i.destroy;return i.destroy=function(){n.apply(this,arguments),this.css({display:""})},e}),function(t,e){"function"==typeof define&&define.amd?define("isotope-layout/js/layout-mode",["get-size/get-size","outlayer/outlayer"],e):"object"==typeof module&&module.exports?module.exports=e(require("get-size"),require("outlayer")):(t.Isotope=t.Isotope||{},t.Isotope.LayoutMode=e(t.getSize,t.Outlayer))}(window,function(t,e){"use strict";function i(t){this.isotope=t,t&&(this.options=t.options[this.namespace],this.element=t.element,this.items=t.filteredItems,this.size=t.size)}var o=i.prototype,n=["_resetLayout","_getItemLayoutPosition","_manageStamp","_getContainerSize","_getElementOffset","needsResizeLayout","_getOption"];return n.forEach(function(t){o[t]=function(){return e.prototype[t].apply(this.isotope,arguments)}}),o.needsVerticalResizeLayout=function(){var e=t(this.isotope.element),i=this.isotope.size&&e;return i&&e.innerHeight!=this.isotope.size.innerHeight},o._getMeasurement=function(){this.isotope._getMeasurement.apply(this,arguments)},o.getColumnWidth=function(){this.getSegmentSize("column","Width")},o.getRowHeight=function(){this.getSegmentSize("row","Height")},o.getSegmentSize=function(t,e){var i=t+e,o="outer"+e;if(this._getMeasurement(i,o),!this[i]){var n=this.getFirstItemSize();this[i]=n&&n[o]||this.isotope.size["inner"+e]}},o.getFirstItemSize=function(){var e=this.isotope.filteredItems[0];return e&&e.element&&t(e.element)},o.layout=function(){this.isotope.layout.apply(this.isotope,arguments)},o.getSize=function(){this.isotope.getSize(),this.size=this.isotope.size},i.modes={},i.create=function(t,e){function n(){i.apply(this,arguments)}return n.prototype=Object.create(o),n.prototype.constructor=n,e&&(n.options=e),n.prototype.namespace=t,i.modes[t]=n,n},i}),function(t,e){"function"==typeof define&&define.amd?define("masonry-layout/masonry",["outlayer/outlayer","get-size/get-size"],e):"object"==typeof module&&module.exports?module.exports=e(require("outlayer"),require("get-size")):t.Masonry=e(t.Outlayer,t.getSize)}(window,function(t,e){var i=t.create("masonry");i.compatOptions.fitWidth="isFitWidth";var o=i.prototype;return o._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns(),this.colYs=[];for(var t=0;t<this.cols;t++)this.colYs.push(0);this.maxY=0,this.horizontalColIndex=0},o.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var t=this.items[0],i=t&&t.element;this.columnWidth=i&&e(i).outerWidth||this.containerWidth}var o=this.columnWidth+=this.gutter,n=this.containerWidth+this.gutter,s=n/o,r=o-n%o,a=r&&r<1?"round":"floor";s=Math[a](s),this.cols=Math.max(s,1)},o.getContainerWidth=function(){var t=this._getOption("fitWidth"),i=t?this.element.parentNode:this.element,o=e(i);this.containerWidth=o&&o.innerWidth},o._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth%this.columnWidth,i=e&&e<1?"round":"ceil",o=Math[i](t.size.outerWidth/this.columnWidth);o=Math.min(o,this.cols);for(var n=this.options.horizontalOrder?"_getHorizontalColPosition":"_getTopColPosition",s=this[n](o,t),r={x:this.columnWidth*s.col,y:s.y},a=s.y+t.size.outerHeight,u=o+s.col,h=s.col;h<u;h++)this.colYs[h]=a;return r},o._getTopColPosition=function(t){var e=this._getTopColGroup(t),i=Math.min.apply(Math,e);return{col:e.indexOf(i),y:i}},o._getTopColGroup=function(t){if(t<2)return this.colYs;for(var e=[],i=this.cols+1-t,o=0;o<i;o++)e[o]=this._getColGroupY(o,t);return e},o._getColGroupY=function(t,e){if(e<2)return this.colYs[t];var i=this.colYs.slice(t,t+e);return Math.max.apply(Math,i)},o._getHorizontalColPosition=function(t,e){var i=this.horizontalColIndex%this.cols,o=t>1&&i+t>this.cols;i=o?0:i;var n=e.size.outerWidth&&e.size.outerHeight;return this.horizontalColIndex=n?i+t:this.horizontalColIndex,{col:i,y:this._getColGroupY(i,t)}},o._manageStamp=function(t){var i=e(t),o=this._getElementOffset(t),n=this._getOption("originLeft"),s=n?o.left:o.right,r=s+i.outerWidth,a=Math.floor(s/this.columnWidth);a=Math.max(0,a);var u=Math.floor(r/this.columnWidth);u-=r%this.columnWidth?0:1,u=Math.min(this.cols-1,u);for(var h=this._getOption("originTop"),d=(h?o.top:o.bottom)+i.outerHeight,l=a;l<=u;l++)this.colYs[l]=Math.max(d,this.colYs[l])},o._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var t={height:this.maxY};return this._getOption("fitWidth")&&(t.width=this._getContainerFitWidth()),t},o._getContainerFitWidth=function(){for(var t=0,e=this.cols;--e&&0===this.colYs[e];)t++;return(this.cols-t)*this.columnWidth-this.gutter},o.needsResizeLayout=function(){var t=this.containerWidth;return this.getContainerWidth(),t!=this.containerWidth},i}),function(t,e){"function"==typeof define&&define.amd?define("isotope-layout/js/layout-modes/masonry",["../layout-mode","masonry-layout/masonry"],e):"object"==typeof module&&module.exports?module.exports=e(require("../layout-mode"),require("masonry-layout")):e(t.Isotope.LayoutMode,t.Masonry)}(window,function(t,e){"use strict";var i=t.create("masonry"),o=i.prototype,n={_getElementOffset:!0,layout:!0,_getMeasurement:!0};for(var s in e.prototype)n[s]||(o[s]=e.prototype[s]);var r=o.measureColumns;o.measureColumns=function(){this.items=this.isotope.filteredItems,r.call(this)};var a=o._getOption;return o._getOption=function(t){return"fitWidth"==t?void 0!==this.options.isFitWidth?this.options.isFitWidth:this.options.fitWidth:a.apply(this.isotope,arguments)},i}),function(t,e){"function"==typeof define&&define.amd?define("isotope-layout/js/layout-modes/fit-rows",["../layout-mode"],e):"object"==typeof exports?module.exports=e(require("../layout-mode")):e(t.Isotope.LayoutMode)}(window,function(t){"use strict";var e=t.create("fitRows"),i=e.prototype;return i._resetLayout=function(){this.x=0,this.y=0,this.maxY=0,this._getMeasurement("gutter","outerWidth")},i._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth+this.gutter,i=this.isotope.size.innerWidth+this.gutter;0!==this.x&&e+this.x>i&&(this.x=0,this.y=this.maxY);var o={x:this.x,y:this.y};return this.maxY=Math.max(this.maxY,this.y+t.size.outerHeight),this.x+=e,o},i._getContainerSize=function(){return{height:this.maxY}},e}),function(t,e){"function"==typeof define&&define.amd?define("isotope-layout/js/layout-modes/vertical",["../layout-mode"],e):"object"==typeof module&&module.exports?module.exports=e(require("../layout-mode")):e(t.Isotope.LayoutMode)}(window,function(t){"use strict";var e=t.create("vertical",{horizontalAlignment:0}),i=e.prototype;return i._resetLayout=function(){this.y=0},i._getItemLayoutPosition=function(t){t.getSize();var e=(this.isotope.size.innerWidth-t.size.outerWidth)*this.options.horizontalAlignment,i=this.y;return this.y+=t.size.outerHeight,{x:e,y:i}},i._getContainerSize=function(){return{height:this.y}},e}),function(t,e){"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size","desandro-matches-selector/matches-selector","fizzy-ui-utils/utils","isotope-layout/js/item","isotope-layout/js/layout-mode","isotope-layout/js/layout-modes/masonry","isotope-layout/js/layout-modes/fit-rows","isotope-layout/js/layout-modes/vertical"],function(i,o,n,s,r,a){return e(t,i,o,n,s,r,a)}):"object"==typeof module&&module.exports?module.exports=e(t,require("outlayer"),require("get-size"),require("desandro-matches-selector"),require("fizzy-ui-utils"),require("isotope-layout/js/item"),require("isotope-layout/js/layout-mode"),require("isotope-layout/js/layout-modes/masonry"),require("isotope-layout/js/layout-modes/fit-rows"),require("isotope-layout/js/layout-modes/vertical")):t.Isotope=e(t,t.Outlayer,t.getSize,t.matchesSelector,t.fizzyUIUtils,t.Isotope.Item,t.Isotope.LayoutMode)}(window,function(t,e,i,o,n,s,r){function a(t,e){return function(i,o){for(var n=0;n<t.length;n++){var s=t[n],r=i.sortData[s],a=o.sortData[s];if(r>a||r<a){var u=void 0!==e[s]?e[s]:e,h=u?1:-1;return(r>a?1:-1)*h}}return 0}}var u=t.jQuery,h=String.prototype.trim?function(t){return t.trim()}:function(t){return t.replace(/^\s+|\s+$/g,"")},d=e.create("isotope",{layoutMode:"masonry",isJQueryFiltering:!0,sortAscending:!0});d.Item=s,d.LayoutMode=r;var l=d.prototype;l._create=function(){this.itemGUID=0,this._sorters={},this._getSorters(),e.prototype._create.call(this),this.modes={},this.filteredItems=this.items,this.sortHistory=["original-order"];for(var t in r.modes)this._initLayoutMode(t)},l.reloadItems=function(){this.itemGUID=0,e.prototype.reloadItems.call(this)},l._itemize=function(){for(var t=e.prototype._itemize.apply(this,arguments),i=0;i<t.length;i++){var o=t[i];o.id=this.itemGUID++}return this._updateItemsSortData(t),t},l._initLayoutMode=function(t){var e=r.modes[t],i=this.options[t]||{};this.options[t]=e.options?n.extend(e.options,i):i,this.modes[t]=new e(this)},l.layout=function(){return!this._isLayoutInited&&this._getOption("initLayout")?void this.arrange():void this._layout()},l._layout=function(){var t=this._getIsInstant();this._resetLayout(),this._manageStamps(),this.layoutItems(this.filteredItems,t),this._isLayoutInited=!0},l.arrange=function(t){this.option(t),this._getIsInstant();var e=this._filter(this.items);this.filteredItems=e.matches,this._bindArrangeComplete(),this._isInstant?this._noTransition(this._hideReveal,[e]):this._hideReveal(e),this._sort(),this._layout()},l._init=l.arrange,l._hideReveal=function(t){this.reveal(t.needReveal),this.hide(t.needHide)},l._getIsInstant=function(){var t=this._getOption("layoutInstant"),e=void 0!==t?t:!this._isLayoutInited;return this._isInstant=e,e},l._bindArrangeComplete=function(){function t(){e&&i&&o&&n.dispatchEvent("arrangeComplete",null,[n.filteredItems])}var e,i,o,n=this;this.once("layoutComplete",function(){e=!0,t()}),this.once("hideComplete",function(){i=!0,t()}),this.once("revealComplete",function(){o=!0,t()})},l._filter=function(t){var e=this.options.filter;e=e||"*";for(var i=[],o=[],n=[],s=this._getFilterTest(e),r=0;r<t.length;r++){var a=t[r];if(!a.isIgnored){var u=s(a);u&&i.push(a),u&&a.isHidden?o.push(a):u||a.isHidden||n.push(a)}}return{matches:i,needReveal:o,needHide:n}},l._getFilterTest=function(t){return u&&this.options.isJQueryFiltering?function(e){return u(e.element).is(t);
}:"function"==typeof t?function(e){return t(e.element)}:function(e){return o(e.element,t)}},l.updateSortData=function(t){var e;t?(t=n.makeArray(t),e=this.getItems(t)):e=this.items,this._getSorters(),this._updateItemsSortData(e)},l._getSorters=function(){var t=this.options.getSortData;for(var e in t){var i=t[e];this._sorters[e]=f(i)}},l._updateItemsSortData=function(t){for(var e=t&&t.length,i=0;e&&i<e;i++){var o=t[i];o.updateSortData()}};var f=function(){function t(t){if("string"!=typeof t)return t;var i=h(t).split(" "),o=i[0],n=o.match(/^\[(.+)\]$/),s=n&&n[1],r=e(s,o),a=d.sortDataParsers[i[1]];return t=a?function(t){return t&&a(r(t))}:function(t){return t&&r(t)}}function e(t,e){return t?function(e){return e.getAttribute(t)}:function(t){var i=t.querySelector(e);return i&&i.textContent}}return t}();d.sortDataParsers={parseInt:function(t){return parseInt(t,10)},parseFloat:function(t){return parseFloat(t)}},l._sort=function(){if(this.options.sortBy){var t=n.makeArray(this.options.sortBy);this._getIsSameSortBy(t)||(this.sortHistory=t.concat(this.sortHistory));var e=a(this.sortHistory,this.options.sortAscending);this.filteredItems.sort(e)}},l._getIsSameSortBy=function(t){for(var e=0;e<t.length;e++)if(t[e]!=this.sortHistory[e])return!1;return!0},l._mode=function(){var t=this.options.layoutMode,e=this.modes[t];if(!e)throw new Error("No layout mode: "+t);return e.options=this.options[t],e},l._resetLayout=function(){e.prototype._resetLayout.call(this),this._mode()._resetLayout()},l._getItemLayoutPosition=function(t){return this._mode()._getItemLayoutPosition(t)},l._manageStamp=function(t){this._mode()._manageStamp(t)},l._getContainerSize=function(){return this._mode()._getContainerSize()},l.needsResizeLayout=function(){return this._mode().needsResizeLayout()},l.appended=function(t){var e=this.addItems(t);if(e.length){var i=this._filterRevealAdded(e);this.filteredItems=this.filteredItems.concat(i)}},l.prepended=function(t){var e=this._itemize(t);if(e.length){this._resetLayout(),this._manageStamps();var i=this._filterRevealAdded(e);this.layoutItems(this.filteredItems),this.filteredItems=i.concat(this.filteredItems),this.items=e.concat(this.items)}},l._filterRevealAdded=function(t){var e=this._filter(t);return this.hide(e.needHide),this.reveal(e.matches),this.layoutItems(e.matches,!0),e.matches},l.insert=function(t){var e=this.addItems(t);if(e.length){var i,o,n=e.length;for(i=0;i<n;i++)o=e[i],this.element.appendChild(o.element);var s=this._filter(e).matches;for(i=0;i<n;i++)e[i].isLayoutInstant=!0;for(this.arrange(),i=0;i<n;i++)delete e[i].isLayoutInstant;this.reveal(s)}};var c=l.remove;return l.remove=function(t){t=n.makeArray(t);var e=this.getItems(t);c.call(this,t);for(var i=e&&e.length,o=0;i&&o<i;o++){var s=e[o];n.removeFrom(this.filteredItems,s)}},l.shuffle=function(){for(var t=0;t<this.items.length;t++){var e=this.items[t];e.sortData.random=Math.random()}this.options.sortBy="random",this._sort(),this._layout()},l._noTransition=function(t,e){var i=this.options.transitionDuration;this.options.transitionDuration=0;var o=t.apply(this,e);return this.options.transitionDuration=i,o},l.getFilteredItemElements=function(){return this.filteredItems.map(function(t){return t.element})},d});


// Scroll Magic
var homePage = document.querySelector(".home");

// If home page then we'll run
if (homePage) {
  /*!
   * ScrollMagic v2.0.6 (2018-10-08)
   * The javascript library for magical scroll interactions.
   * (c) 2018 Jan Paepke (@janpaepke)
   * Project Website: http://scrollmagic.io
   *
   * @version 2.0.6
   * @license Dual licensed under MIT license and GPL.
   * @author Jan Paepke - e-mail@janpaepke.de
   *
   * @file ScrollMagic main library.
   */
  /**
   * @namespace ScrollMagic
   */
  (function (root, factory) {
  	if (typeof define === 'function' && define.amd) {
  		// AMD. Register as an anonymous module.
  		define(factory);
  	} else if (typeof exports === 'object') {
  		// CommonJS
  		module.exports = factory();
  	} else {
  		// Browser global
  		root.ScrollMagic = factory();
  	}
  }(this, function () {
  	"use strict";

  	var ScrollMagic = function () {
  		_util.log(2, '(COMPATIBILITY NOTICE) -> As of ScrollMagic 2.0.0 you need to use \'new ScrollMagic.Controller()\' to create a new controller instance. Use \'new ScrollMagic.Scene()\' to instance a scene.');
  	};

  	ScrollMagic.version = "2.0.6";

  	// TODO: temporary workaround for chrome's scroll jitter bug
  	window.addEventListener("mousewheel", function () {});

  	// global const
  	var PIN_SPACER_ATTRIBUTE = "data-scrollmagic-pin-spacer";

  	/**
  	 * The main class that is needed once per scroll container.
  	 *
  	 * @class
  	 *
  	 * @example
  	 * // basic initialization
  	 * var controller = new ScrollMagic.Controller();
  	 *
  	 * // passing options
  	 * var controller = new ScrollMagic.Controller({container: "#myContainer", loglevel: 3});
  	 *
  	 * @param {object} [options] - An object containing one or more options for the controller.
  	 * @param {(string|object)} [options.container=window] - A selector, DOM object that references the main container for scrolling.
  	 * @param {boolean} [options.vertical=true] - Sets the scroll mode to vertical (`true`) or horizontal (`false`) scrolling.
  	 * @param {object} [options.globalSceneOptions={}] - These options will be passed to every Scene that is added to the controller using the addScene method. For more information on Scene options see {@link ScrollMagic.Scene}.
  	 * @param {number} [options.loglevel=2] Loglevel for debugging. Note that logging is disabled in the minified version of ScrollMagic.
  	 ** `0` => silent
  	 ** `1` => errors
  	 ** `2` => errors, warnings
  	 ** `3` => errors, warnings, debuginfo
  	 * @param {boolean} [options.refreshInterval=100] - Some changes don't call events by default, like changing the container size or moving a scene trigger element.
  	 This interval polls these parameters to fire the necessary events.
  	 If you don't use custom containers, trigger elements or have static layouts, where the positions of the trigger elements don't change, you can set this to 0 disable interval checking and improve performance.
  	 *
  	 */
  	ScrollMagic.Controller = function (options) {
  /*
  	 * ----------------------------------------------------------------
  	 * settings
  	 * ----------------------------------------------------------------
  	 */
  		var
  		NAMESPACE = 'ScrollMagic.Controller',
  			SCROLL_DIRECTION_FORWARD = 'FORWARD',
  			SCROLL_DIRECTION_REVERSE = 'REVERSE',
  			SCROLL_DIRECTION_PAUSED = 'PAUSED',
  			DEFAULT_OPTIONS = CONTROLLER_OPTIONS.defaults;

  /*
  	 * ----------------------------------------------------------------
  	 * private vars
  	 * ----------------------------------------------------------------
  	 */
  		var
  		Controller = this,
  			_options = _util.extend({}, DEFAULT_OPTIONS, options),
  			_sceneObjects = [],
  			_updateScenesOnNextCycle = false,
  			// can be boolean (true => all scenes) or an array of scenes to be updated
  			_scrollPos = 0,
  			_scrollDirection = SCROLL_DIRECTION_PAUSED,
  			_isDocument = true,
  			_viewPortSize = 0,
  			_enabled = true,
  			_updateTimeout, _refreshTimeout;

  /*
  	 * ----------------------------------------------------------------
  	 * private functions
  	 * ----------------------------------------------------------------
  	 */

  		/**
  		 * Internal constructor function of the ScrollMagic Controller
  		 * @private
  		 */
  		var construct = function () {
  			for (var key in _options) {
  				if (!DEFAULT_OPTIONS.hasOwnProperty(key)) {
  					log(2, "WARNING: Unknown option \"" + key + "\"");
  					delete _options[key];
  				}
  			}
  			_options.container = _util.get.elements(_options.container)[0];
  			// check ScrollContainer
  			if (!_options.container) {
  				log(1, "ERROR creating object " + NAMESPACE + ": No valid scroll container supplied");
  				throw NAMESPACE + " init failed."; // cancel
  			}
  			_isDocument = _options.container === window || _options.container === document.body || !document.body.contains(_options.container);
  			// normalize to window
  			if (_isDocument) {
  				_options.container = window;
  			}
  			// update container size immediately
  			_viewPortSize = getViewportSize();
  			// set event handlers
  			_options.container.addEventListener("resize", onChange);
  			_options.container.addEventListener("scroll", onChange);

  			var ri = parseInt(_options.refreshInterval, 10);
  			_options.refreshInterval = _util.type.Number(ri) ? ri : DEFAULT_OPTIONS.refreshInterval;
  			scheduleRefresh();

  			log(3, "added new " + NAMESPACE + " controller (v" + ScrollMagic.version + ")");
  		};

  		/**
  		 * Schedule the next execution of the refresh function
  		 * @private
  		 */
  		var scheduleRefresh = function () {
  			if (_options.refreshInterval > 0) {
  				_refreshTimeout = window.setTimeout(refresh, _options.refreshInterval);
  			}
  		};

  		/**
  		 * Default function to get scroll pos - overwriteable using `Controller.scrollPos(newFunction)`
  		 * @private
  		 */
  		var getScrollPos = function () {
  			return _options.vertical ? _util.get.scrollTop(_options.container) : _util.get.scrollLeft(_options.container);
  		};

  		/**
  		 * Returns the current viewport Size (width vor horizontal, height for vertical)
  		 * @private
  		 */
  		var getViewportSize = function () {
  			return _options.vertical ? _util.get.height(_options.container) : _util.get.width(_options.container);
  		};

  		/**
  		 * Default function to set scroll pos - overwriteable using `Controller.scrollTo(newFunction)`
  		 * Make available publicly for pinned mousewheel workaround.
  		 * @private
  		 */
  		var setScrollPos = this._setScrollPos = function (pos) {
  			if (_options.vertical) {
  				if (_isDocument) {
  					window.scrollTo(_util.get.scrollLeft(), pos);
  				} else {
  					_options.container.scrollTop = pos;
  				}
  			} else {
  				if (_isDocument) {
  					window.scrollTo(pos, _util.get.scrollTop());
  				} else {
  					_options.container.scrollLeft = pos;
  				}
  			}
  		};

  		/**
  		 * Handle updates in cycles instead of on scroll (performance)
  		 * @private
  		 */
  		var updateScenes = function () {
  			if (_enabled && _updateScenesOnNextCycle) {
  				// determine scenes to update
  				var scenesToUpdate = _util.type.Array(_updateScenesOnNextCycle) ? _updateScenesOnNextCycle : _sceneObjects.slice(0);
  				// reset scenes
  				_updateScenesOnNextCycle = false;
  				var oldScrollPos = _scrollPos;
  				// update scroll pos now instead of onChange, as it might have changed since scheduling (i.e. in-browser smooth scroll)
  				_scrollPos = Controller.scrollPos();
  				var deltaScroll = _scrollPos - oldScrollPos;
  				if (deltaScroll !== 0) { // scroll position changed?
  					_scrollDirection = (deltaScroll > 0) ? SCROLL_DIRECTION_FORWARD : SCROLL_DIRECTION_REVERSE;
  				}
  				// reverse order of scenes if scrolling reverse
  				if (_scrollDirection === SCROLL_DIRECTION_REVERSE) {
  					scenesToUpdate.reverse();
  				}
  				// update scenes
  				scenesToUpdate.forEach(function (scene, index) {
  					log(3, "updating Scene " + (index + 1) + "/" + scenesToUpdate.length + " (" + _sceneObjects.length + " total)");
  					scene.update(true);
  				});
  				if (scenesToUpdate.length === 0 && _options.loglevel >= 3) {
  					log(3, "updating 0 Scenes (nothing added to controller)");
  				}
  			}
  		};

  		/**
  		 * Initializes rAF callback
  		 * @private
  		 */
  		var debounceUpdate = function () {
  			_updateTimeout = _util.rAF(updateScenes);
  		};

  		/**
  		 * Handles Container changes
  		 * @private
  		 */
  		var onChange = function (e) {
  			log(3, "event fired causing an update:", e.type);
  			if (e.type == "resize") {
  				// resize
  				_viewPortSize = getViewportSize();
  				_scrollDirection = SCROLL_DIRECTION_PAUSED;
  			}
  			// schedule update
  			if (_updateScenesOnNextCycle !== true) {
  				_updateScenesOnNextCycle = true;
  				debounceUpdate();
  			}
  		};

  		var refresh = function () {
  			if (!_isDocument) {
  				// simulate resize event. Only works for viewport relevant param (performance)
  				if (_viewPortSize != getViewportSize()) {
  					var resizeEvent;
  					try {
  						resizeEvent = new Event('resize', {
  							bubbles: false,
  							cancelable: false
  						});
  					} catch (e) { // stupid IE
  						resizeEvent = document.createEvent("Event");
  						resizeEvent.initEvent("resize", false, false);
  					}
  					_options.container.dispatchEvent(resizeEvent);
  				}
  			}
  			_sceneObjects.forEach(function (scene, index) { // refresh all scenes
  				scene.refresh();
  			});
  			scheduleRefresh();
  		};

  		/**
  		 * Send a debug message to the console.
  		 * provided publicly with _log for plugins
  		 * @private
  		 *
  		 * @param {number} loglevel - The loglevel required to initiate output for the message.
  		 * @param {...mixed} output - One or more variables that should be passed to the console.
  		 */
  		var log = this._log = function (loglevel, output) {
  			if (_options.loglevel >= loglevel) {
  				Array.prototype.splice.call(arguments, 1, 0, "(" + NAMESPACE + ") ->");
  				_util.log.apply(window, arguments);
  			}
  		};
  		// for scenes we have getters for each option, but for the controller we don't, so we need to make it available externally for plugins
  		this._options = _options;

  		/**
  		 * Sort scenes in ascending order of their start offset.
  		 * @private
  		 *
  		 * @param {array} ScenesArray - an array of ScrollMagic Scenes that should be sorted
  		 * @return {array} The sorted array of Scenes.
  		 */
  		var sortScenes = function (ScenesArray) {
  			if (ScenesArray.length <= 1) {
  				return ScenesArray;
  			} else {
  				var scenes = ScenesArray.slice(0);
  				scenes.sort(function (a, b) {
  					return a.scrollOffset() > b.scrollOffset() ? 1 : -1;
  				});
  				return scenes;
  			}
  		};

  		/**
  		 * ----------------------------------------------------------------
  		 * public functions
  		 * ----------------------------------------------------------------
  		 */

  		/**
  		 * Add one ore more scene(s) to the controller.
  		 * This is the equivalent to `Scene.addTo(controller)`.
  		 * @public
  		 * @example
  		 * // with a previously defined scene
  		 * controller.addScene(scene);
  		 *
  		 * // with a newly created scene.
  		 * controller.addScene(new ScrollMagic.Scene({duration : 0}));
  		 *
  		 * // adding multiple scenes
  		 * controller.addScene([scene, scene2, new ScrollMagic.Scene({duration : 0})]);
  		 *
  		 * @param {(ScrollMagic.Scene|array)} newScene - ScrollMagic Scene or Array of Scenes to be added to the controller.
  		 * @return {Controller} Parent object for chaining.
  		 */
  		this.addScene = function (newScene) {
  			if (_util.type.Array(newScene)) {
  				newScene.forEach(function (scene, index) {
  					Controller.addScene(scene);
  				});
  			} else if (newScene instanceof ScrollMagic.Scene) {
  				if (newScene.controller() !== Controller) {
  					newScene.addTo(Controller);
  				} else if (_sceneObjects.indexOf(newScene) < 0) {
  					// new scene
  					_sceneObjects.push(newScene); // add to array
  					_sceneObjects = sortScenes(_sceneObjects); // sort
  					newScene.on("shift.controller_sort", function () { // resort whenever scene moves
  						_sceneObjects = sortScenes(_sceneObjects);
  					});
  					// insert Global defaults.
  					for (var key in _options.globalSceneOptions) {
  						if (newScene[key]) {
  							newScene[key].call(newScene, _options.globalSceneOptions[key]);
  						}
  					}
  					log(3, "adding Scene (now " + _sceneObjects.length + " total)");
  				}
  			} else {
  				log(1, "ERROR: invalid argument supplied for '.addScene()'");
  			}
  			return Controller;
  		};

  		/**
  		 * Remove one ore more scene(s) from the controller.
  		 * This is the equivalent to `Scene.remove()`.
  		 * @public
  		 * @example
  		 * // remove a scene from the controller
  		 * controller.removeScene(scene);
  		 *
  		 * // remove multiple scenes from the controller
  		 * controller.removeScene([scene, scene2, scene3]);
  		 *
  		 * @param {(ScrollMagic.Scene|array)} Scene - ScrollMagic Scene or Array of Scenes to be removed from the controller.
  		 * @returns {Controller} Parent object for chaining.
  		 */
  		this.removeScene = function (Scene) {
  			if (_util.type.Array(Scene)) {
  				Scene.forEach(function (scene, index) {
  					Controller.removeScene(scene);
  				});
  			} else {
  				var index = _sceneObjects.indexOf(Scene);
  				if (index > -1) {
  					Scene.off("shift.controller_sort");
  					_sceneObjects.splice(index, 1);
  					log(3, "removing Scene (now " + _sceneObjects.length + " left)");
  					Scene.remove();
  				}
  			}
  			return Controller;
  		};

  		/**
  		 * Update one ore more scene(s) according to the scroll position of the container.
  		 * This is the equivalent to `Scene.update()`.
  		 * The update method calculates the scene's start and end position (based on the trigger element, trigger hook, duration and offset) and checks it against the current scroll position of the container.
  		 * It then updates the current scene state accordingly (or does nothing, if the state is already correct) – Pins will be set to their correct position and tweens will be updated to their correct progress.
  		 * _**Note:** This method gets called constantly whenever Controller detects a change. The only application for you is if you change something outside of the realm of ScrollMagic, like moving the trigger or changing tween parameters._
  		 * @public
  		 * @example
  		 * // update a specific scene on next cycle
  		 * controller.updateScene(scene);
  		 *
  		 * // update a specific scene immediately
  		 * controller.updateScene(scene, true);
  		 *
  		 * // update multiple scenes scene on next cycle
  		 * controller.updateScene([scene1, scene2, scene3]);
  		 *
  		 * @param {ScrollMagic.Scene} Scene - ScrollMagic Scene or Array of Scenes that is/are supposed to be updated.
  		 * @param {boolean} [immediately=false] - If `true` the update will be instant, if `false` it will wait until next update cycle.
  		 This is useful when changing multiple properties of the scene - this way it will only be updated once all new properties are set (updateScenes).
  		 * @return {Controller} Parent object for chaining.
  		 */
  		this.updateScene = function (Scene, immediately) {
  			if (_util.type.Array(Scene)) {
  				Scene.forEach(function (scene, index) {
  					Controller.updateScene(scene, immediately);
  				});
  			} else {
  				if (immediately) {
  					Scene.update(true);
  				} else if (_updateScenesOnNextCycle !== true && Scene instanceof ScrollMagic.Scene) { // if _updateScenesOnNextCycle is true, all connected scenes are already scheduled for update
  					// prep array for next update cycle
  					_updateScenesOnNextCycle = _updateScenesOnNextCycle || [];
  					if (_updateScenesOnNextCycle.indexOf(Scene) == -1) {
  						_updateScenesOnNextCycle.push(Scene);
  					}
  					_updateScenesOnNextCycle = sortScenes(_updateScenesOnNextCycle); // sort
  					debounceUpdate();
  				}
  			}
  			return Controller;
  		};

  		/**
  		 * Updates the controller params and calls updateScene on every scene, that is attached to the controller.
  		 * See `Controller.updateScene()` for more information about what this means.
  		 * In most cases you will not need this function, as it is called constantly, whenever ScrollMagic detects a state change event, like resize or scroll.
  		 * The only application for this method is when ScrollMagic fails to detect these events.
  		 * One application is with some external scroll libraries (like iScroll) that move an internal container to a negative offset instead of actually scrolling. In this case the update on the controller needs to be called whenever the child container's position changes.
  		 * For this case there will also be the need to provide a custom function to calculate the correct scroll position. See `Controller.scrollPos()` for details.
  		 * @public
  		 * @example
  		 * // update the controller on next cycle (saves performance due to elimination of redundant updates)
  		 * controller.update();
  		 *
  		 * // update the controller immediately
  		 * controller.update(true);
  		 *
  		 * @param {boolean} [immediately=false] - If `true` the update will be instant, if `false` it will wait until next update cycle (better performance)
  		 * @return {Controller} Parent object for chaining.
  		 */
  		this.update = function (immediately) {
  			onChange({
  				type: "resize"
  			}); // will update size and set _updateScenesOnNextCycle to true
  			if (immediately) {
  				updateScenes();
  			}
  			return Controller;
  		};

  		/**
  		 * Scroll to a numeric scroll offset, a DOM element, the start of a scene or provide an alternate method for scrolling.
  		 * For vertical controllers it will change the top scroll offset and for horizontal applications it will change the left offset.
  		 * @public
  		 *
  		 * @since 1.1.0
  		 * @example
  		 * // scroll to an offset of 100
  		 * controller.scrollTo(100);
  		 *
  		 * // scroll to a DOM element
  		 * controller.scrollTo("#anchor");
  		 *
  		 * // scroll to the beginning of a scene
  		 * var scene = new ScrollMagic.Scene({offset: 200});
  		 * controller.scrollTo(scene);
  		 *
  		 * // define a new scroll position modification function (jQuery animate instead of jump)
  		 * controller.scrollTo(function (newScrollPos) {
  		 *	$("html, body").animate({scrollTop: newScrollPos});
  		 * });
  		 * controller.scrollTo(100); // call as usual, but the new function will be used instead
  		 *
  		 * // define a new scroll function with an additional parameter
  		 * controller.scrollTo(function (newScrollPos, message) {
  		 *  console.log(message);
  		 *	$(this).animate({scrollTop: newScrollPos});
  		 * });
  		 * // call as usual, but supply an extra parameter to the defined custom function
  		 * controller.scrollTo(100, "my message");
  		 *
  		 * // define a new scroll function with an additional parameter containing multiple variables
  		 * controller.scrollTo(function (newScrollPos, options) {
  		 *  someGlobalVar = options.a + options.b;
  		 *	$(this).animate({scrollTop: newScrollPos});
  		 * });
  		 * // call as usual, but supply an extra parameter containing multiple options
  		 * controller.scrollTo(100, {a: 1, b: 2});
  		 *
  		 * // define a new scroll function with a callback supplied as an additional parameter
  		 * controller.scrollTo(function (newScrollPos, callback) {
  		 *	$(this).animate({scrollTop: newScrollPos}, 400, "swing", callback);
  		 * });
  		 * // call as usual, but supply an extra parameter, which is used as a callback in the previously defined custom scroll function
  		 * controller.scrollTo(100, function() {
  		 *	console.log("scroll has finished.");
  		 * });
  		 *
  		 * @param {mixed} scrollTarget - The supplied argument can be one of these types:
  		 * 1. `number` -> The container will scroll to this new scroll offset.
  		 * 2. `string` or `object` -> Can be a selector or a DOM object.
  		 *  The container will scroll to the position of this element.
  		 * 3. `ScrollMagic Scene` -> The container will scroll to the start of this scene.
  		 * 4. `function` -> This function will be used for future scroll position modifications.
  		 *  This provides a way for you to change the behaviour of scrolling and adding new behaviour like animation. The function receives the new scroll position as a parameter and a reference to the container element using `this`.
  		 *  It may also optionally receive an optional additional parameter (see below)
  		 *  _**NOTE:**
  		 *  All other options will still work as expected, using the new function to scroll._
  		 * @param {mixed} [additionalParameter] - If a custom scroll function was defined (see above 4.), you may want to supply additional parameters to it, when calling it. You can do this using this parameter – see examples for details. Please note, that this parameter will have no effect, if you use the default scrolling function.
  		 * @returns {Controller} Parent object for chaining.
  		 */
  		this.scrollTo = function (scrollTarget, additionalParameter) {
  			if (_util.type.Number(scrollTarget)) { // excecute
  				setScrollPos.call(_options.container, scrollTarget, additionalParameter);
  			} else if (scrollTarget instanceof ScrollMagic.Scene) { // scroll to scene
  				if (scrollTarget.controller() === Controller) { // check if the controller is associated with this scene
  					Controller.scrollTo(scrollTarget.scrollOffset(), additionalParameter);
  				} else {
  					log(2, "scrollTo(): The supplied scene does not belong to this controller. Scroll cancelled.", scrollTarget);
  				}
  			} else if (_util.type.Function(scrollTarget)) { // assign new scroll function
  				setScrollPos = scrollTarget;
  			} else { // scroll to element
  				var elem = _util.get.elements(scrollTarget)[0];
  				if (elem) {
  					// if parent is pin spacer, use spacer position instead so correct start position is returned for pinned elements.
  					while (elem.parentNode.hasAttribute(PIN_SPACER_ATTRIBUTE)) {
  						elem = elem.parentNode;
  					}

  					var
  					param = _options.vertical ? "top" : "left",
  						// which param is of interest ?
  						containerOffset = _util.get.offset(_options.container),
  						// container position is needed because element offset is returned in relation to document, not in relation to container.
  						elementOffset = _util.get.offset(elem);

  					if (!_isDocument) { // container is not the document root, so substract scroll Position to get correct trigger element position relative to scrollcontent
  						containerOffset[param] -= Controller.scrollPos();
  					}

  					Controller.scrollTo(elementOffset[param] - containerOffset[param], additionalParameter);
  				} else {
  					log(2, "scrollTo(): The supplied argument is invalid. Scroll cancelled.", scrollTarget);
  				}
  			}
  			return Controller;
  		};

  		/**
  		 * **Get** the current scrollPosition or **Set** a new method to calculate it.
  		 * -> **GET**:
  		 * When used as a getter this function will return the current scroll position.
  		 * To get a cached value use Controller.info("scrollPos"), which will be updated in the update cycle.
  		 * For vertical controllers it will return the top scroll offset and for horizontal applications it will return the left offset.
  		 *
  		 * -> **SET**:
  		 * When used as a setter this method prodes a way to permanently overwrite the controller's scroll position calculation.
  		 * A typical usecase is when the scroll position is not reflected by the containers scrollTop or scrollLeft values, but for example by the inner offset of a child container.
  		 * Moving a child container inside a parent is a commonly used method for several scrolling frameworks, including iScroll.
  		 * By providing an alternate calculation function you can make sure ScrollMagic receives the correct scroll position.
  		 * Please also bear in mind that your function should return y values for vertical scrolls an x for horizontals.
  		 *
  		 * To change the current scroll position please use `Controller.scrollTo()`.
  		 * @public
  		 *
  		 * @example
  		 * // get the current scroll Position
  		 * var scrollPos = controller.scrollPos();
  		 *
  		 * // set a new scroll position calculation method
  		 * controller.scrollPos(function () {
  		 *	return this.info("vertical") ? -mychildcontainer.y : -mychildcontainer.x
  		 * });
  		 *
  		 * @param {function} [scrollPosMethod] - The function to be used for the scroll position calculation of the container.
  		 * @returns {(number|Controller)} Current scroll position or parent object for chaining.
  		 */
  		this.scrollPos = function (scrollPosMethod) {
  			if (!arguments.length) { // get
  				return getScrollPos.call(Controller);
  			} else { // set
  				if (_util.type.Function(scrollPosMethod)) {
  					getScrollPos = scrollPosMethod;
  				} else {
  					log(2, "Provided value for method 'scrollPos' is not a function. To change the current scroll position use 'scrollTo()'.");
  				}
  			}
  			return Controller;
  		};

  		/**
  		 * **Get** all infos or one in particular about the controller.
  		 * @public
  		 * @example
  		 * // returns the current scroll position (number)
  		 * var scrollPos = controller.info("scrollPos");
  		 *
  		 * // returns all infos as an object
  		 * var infos = controller.info();
  		 *
  		 * @param {string} [about] - If passed only this info will be returned instead of an object containing all.
  		 Valid options are:
  		 ** `"size"` => the current viewport size of the container
  		 ** `"vertical"` => true if vertical scrolling, otherwise false
  		 ** `"scrollPos"` => the current scroll position
  		 ** `"scrollDirection"` => the last known direction of the scroll
  		 ** `"container"` => the container element
  		 ** `"isDocument"` => true if container element is the document.
  		 * @returns {(mixed|object)} The requested info(s).
  		 */
  		this.info = function (about) {
  			var values = {
  				size: _viewPortSize,
  				// contains height or width (in regard to orientation);
  				vertical: _options.vertical,
  				scrollPos: _scrollPos,
  				scrollDirection: _scrollDirection,
  				container: _options.container,
  				isDocument: _isDocument
  			};
  			if (!arguments.length) { // get all as an object
  				return values;
  			} else if (values[about] !== undefined) {
  				return values[about];
  			} else {
  				log(1, "ERROR: option \"" + about + "\" is not available");
  				return;
  			}
  		};

  		/**
  		 * **Get** or **Set** the current loglevel option value.
  		 * @public
  		 *
  		 * @example
  		 * // get the current value
  		 * var loglevel = controller.loglevel();
  		 *
  		 * // set a new value
  		 * controller.loglevel(3);
  		 *
  		 * @param {number} [newLoglevel] - The new loglevel setting of the Controller. `[0-3]`
  		 * @returns {(number|Controller)} Current loglevel or parent object for chaining.
  		 */
  		this.loglevel = function (newLoglevel) {
  			if (!arguments.length) { // get
  				return _options.loglevel;
  			} else if (_options.loglevel != newLoglevel) { // set
  				_options.loglevel = newLoglevel;
  			}
  			return Controller;
  		};

  		/**
  		 * **Get** or **Set** the current enabled state of the controller.
  		 * This can be used to disable all Scenes connected to the controller without destroying or removing them.
  		 * @public
  		 *
  		 * @example
  		 * // get the current value
  		 * var enabled = controller.enabled();
  		 *
  		 * // disable the controller
  		 * controller.enabled(false);
  		 *
  		 * @param {boolean} [newState] - The new enabled state of the controller `true` or `false`.
  		 * @returns {(boolean|Controller)} Current enabled state or parent object for chaining.
  		 */
  		this.enabled = function (newState) {
  			if (!arguments.length) { // get
  				return _enabled;
  			} else if (_enabled != newState) { // set
  				_enabled = !! newState;
  				Controller.updateScene(_sceneObjects, true);
  			}
  			return Controller;
  		};

  		/**
  		 * Destroy the Controller, all Scenes and everything.
  		 * @public
  		 *
  		 * @example
  		 * // without resetting the scenes
  		 * controller = controller.destroy();
  		 *
  		 * // with scene reset
  		 * controller = controller.destroy(true);
  		 *
  		 * @param {boolean} [resetScenes=false] - If `true` the pins and tweens (if existent) of all scenes will be reset.
  		 * @returns {null} Null to unset handler variables.
  		 */
  		this.destroy = function (resetScenes) {
  			window.clearTimeout(_refreshTimeout);
  			var i = _sceneObjects.length;
  			while (i--) {
  				_sceneObjects[i].destroy(resetScenes);
  			}
  			_options.container.removeEventListener("resize", onChange);
  			_options.container.removeEventListener("scroll", onChange);
  			_util.cAF(_updateTimeout);
  			log(3, "destroyed " + NAMESPACE + " (reset: " + (resetScenes ? "true" : "false") + ")");
  			return null;
  		};

  		// INIT
  		construct();
  		return Controller;
  	};

  	// store pagewide controller options
  	var CONTROLLER_OPTIONS = {
  		defaults: {
  			container: window,
  			vertical: true,
  			globalSceneOptions: {},
  			loglevel: 2,
  			refreshInterval: 100
  		}
  	};
  /*
   * method used to add an option to ScrollMagic Scenes.
   */
  	ScrollMagic.Controller.addOption = function (name, defaultValue) {
  		CONTROLLER_OPTIONS.defaults[name] = defaultValue;
  	};
  	// instance extension function for plugins
  	ScrollMagic.Controller.extend = function (extension) {
  		var oldClass = this;
  		ScrollMagic.Controller = function () {
  			oldClass.apply(this, arguments);
  			this.$super = _util.extend({}, this); // copy parent state
  			return extension.apply(this, arguments) || this;
  		};
  		_util.extend(ScrollMagic.Controller, oldClass); // copy properties
  		ScrollMagic.Controller.prototype = oldClass.prototype; // copy prototype
  		ScrollMagic.Controller.prototype.constructor = ScrollMagic.Controller; // restore constructor
  	};


  	/**
  	 * A Scene defines where the controller should react and how.
  	 *
  	 * @class
  	 *
  	 * @example
  	 * // create a standard scene and add it to a controller
  	 * new ScrollMagic.Scene()
  	 *		.addTo(controller);
  	 *
  	 * // create a scene with custom options and assign a handler to it.
  	 * var scene = new ScrollMagic.Scene({
  	 * 		duration: 100,
  	 *		offset: 200,
  	 *		triggerHook: "onEnter",
  	 *		reverse: false
  	 * });
  	 *
  	 * @param {object} [options] - Options for the Scene. The options can be updated at any time.
  	 Instead of setting the options for each scene individually you can also set them globally in the controller as the controllers `globalSceneOptions` option. The object accepts the same properties as the ones below.
  	 When a scene is added to the controller the options defined using the Scene constructor will be overwritten by those set in `globalSceneOptions`.
  	 * @param {(number|function)} [options.duration=0] - The duration of the scene.
  	 If `0` tweens will auto-play when reaching the scene start point, pins will be pinned indefinetly starting at the start position.
  	 A function retuning the duration value is also supported. Please see `Scene.duration()` for details.
  	 * @param {number} [options.offset=0] - Offset Value for the Trigger Position. If no triggerElement is defined this will be the scroll distance from the start of the page, after which the scene will start.
  	 * @param {(string|object)} [options.triggerElement=null] - Selector or DOM object that defines the start of the scene. If undefined the scene will start right at the start of the page (unless an offset is set).
  	 * @param {(number|string)} [options.triggerHook="onCenter"] - Can be a number between 0 and 1 defining the position of the trigger Hook in relation to the viewport.
  	 Can also be defined using a string:
  	 ** `"onEnter"` => `1`
  	 ** `"onCenter"` => `0.5`
  	 ** `"onLeave"` => `0`
  	 * @param {boolean} [options.reverse=true] - Should the scene reverse, when scrolling up?
  	 * @param {number} [options.loglevel=2] - Loglevel for debugging. Note that logging is disabled in the minified version of ScrollMagic.
  	 ** `0` => silent
  	 ** `1` => errors
  	 ** `2` => errors, warnings
  	 ** `3` => errors, warnings, debuginfo
  	 *
  	 */
  	ScrollMagic.Scene = function (options) {

  /*
  	 * ----------------------------------------------------------------
  	 * settings
  	 * ----------------------------------------------------------------
  	 */

  		var
  		NAMESPACE = 'ScrollMagic.Scene',
  			SCENE_STATE_BEFORE = 'BEFORE',
  			SCENE_STATE_DURING = 'DURING',
  			SCENE_STATE_AFTER = 'AFTER',
  			DEFAULT_OPTIONS = SCENE_OPTIONS.defaults;

  /*
  	 * ----------------------------------------------------------------
  	 * private vars
  	 * ----------------------------------------------------------------
  	 */

  		var
  		Scene = this,
  			_options = _util.extend({}, DEFAULT_OPTIONS, options),
  			_state = SCENE_STATE_BEFORE,
  			_progress = 0,
  			_scrollOffset = {
  				start: 0,
  				end: 0
  			},
  			// reflects the controllers's scroll position for the start and end of the scene respectively
  			_triggerPos = 0,
  			_enabled = true,
  			_durationUpdateMethod, _controller;

  		/**
  		 * Internal constructor function of the ScrollMagic Scene
  		 * @private
  		 */
  		var construct = function () {
  			for (var key in _options) { // check supplied options
  				if (!DEFAULT_OPTIONS.hasOwnProperty(key)) {
  					log(2, "WARNING: Unknown option \"" + key + "\"");
  					delete _options[key];
  				}
  			}
  			// add getters/setters for all possible options
  			for (var optionName in DEFAULT_OPTIONS) {
  				addSceneOption(optionName);
  			}
  			// validate all options
  			validateOption();
  		};

  /*
   * ----------------------------------------------------------------
   * Event Management
   * ----------------------------------------------------------------
   */

  		var _listeners = {};
  		/**
  		 * Scene start event.
  		 * Fires whenever the scroll position its the starting point of the scene.
  		 * It will also fire when scrolling back up going over the start position of the scene. If you want something to happen only when scrolling down/right, use the scrollDirection parameter passed to the callback.
  		 *
  		 * For details on this event and the order in which it is fired, please review the {@link Scene.progress} method.
  		 *
  		 * @event ScrollMagic.Scene#start
  		 *
  		 * @example
  		 * scene.on("start", function (event) {
  		 * 	console.log("Hit start point of scene.");
  		 * });
  		 *
  		 * @property {object} event - The event Object passed to each callback
  		 * @property {string} event.type - The name of the event
  		 * @property {Scene} event.target - The Scene object that triggered this event
  		 * @property {number} event.progress - Reflects the current progress of the scene
  		 * @property {string} event.state - The current state of the scene `"BEFORE"` or `"DURING"`
  		 * @property {string} event.scrollDirection - Indicates which way we are scrolling `"PAUSED"`, `"FORWARD"` or `"REVERSE"`
  		 */
  		/**
  		 * Scene end event.
  		 * Fires whenever the scroll position its the ending point of the scene.
  		 * It will also fire when scrolling back up from after the scene and going over its end position. If you want something to happen only when scrolling down/right, use the scrollDirection parameter passed to the callback.
  		 *
  		 * For details on this event and the order in which it is fired, please review the {@link Scene.progress} method.
  		 *
  		 * @event ScrollMagic.Scene#end
  		 *
  		 * @example
  		 * scene.on("end", function (event) {
  		 * 	console.log("Hit end point of scene.");
  		 * });
  		 *
  		 * @property {object} event - The event Object passed to each callback
  		 * @property {string} event.type - The name of the event
  		 * @property {Scene} event.target - The Scene object that triggered this event
  		 * @property {number} event.progress - Reflects the current progress of the scene
  		 * @property {string} event.state - The current state of the scene `"DURING"` or `"AFTER"`
  		 * @property {string} event.scrollDirection - Indicates which way we are scrolling `"PAUSED"`, `"FORWARD"` or `"REVERSE"`
  		 */
  		/**
  		 * Scene enter event.
  		 * Fires whenever the scene enters the "DURING" state.
  		 * Keep in mind that it doesn't matter if the scene plays forward or backward: This event always fires when the scene enters its active scroll timeframe, regardless of the scroll-direction.
  		 *
  		 * For details on this event and the order in which it is fired, please review the {@link Scene.progress} method.
  		 *
  		 * @event ScrollMagic.Scene#enter
  		 *
  		 * @example
  		 * scene.on("enter", function (event) {
  		 * 	console.log("Scene entered.");
  		 * });
  		 *
  		 * @property {object} event - The event Object passed to each callback
  		 * @property {string} event.type - The name of the event
  		 * @property {Scene} event.target - The Scene object that triggered this event
  		 * @property {number} event.progress - Reflects the current progress of the scene
  		 * @property {string} event.state - The current state of the scene - always `"DURING"`
  		 * @property {string} event.scrollDirection - Indicates which way we are scrolling `"PAUSED"`, `"FORWARD"` or `"REVERSE"`
  		 */
  		/**
  		 * Scene leave event.
  		 * Fires whenever the scene's state goes from "DURING" to either "BEFORE" or "AFTER".
  		 * Keep in mind that it doesn't matter if the scene plays forward or backward: This event always fires when the scene leaves its active scroll timeframe, regardless of the scroll-direction.
  		 *
  		 * For details on this event and the order in which it is fired, please review the {@link Scene.progress} method.
  		 *
  		 * @event ScrollMagic.Scene#leave
  		 *
  		 * @example
  		 * scene.on("leave", function (event) {
  		 * 	console.log("Scene left.");
  		 * });
  		 *
  		 * @property {object} event - The event Object passed to each callback
  		 * @property {string} event.type - The name of the event
  		 * @property {Scene} event.target - The Scene object that triggered this event
  		 * @property {number} event.progress - Reflects the current progress of the scene
  		 * @property {string} event.state - The current state of the scene `"BEFORE"` or `"AFTER"`
  		 * @property {string} event.scrollDirection - Indicates which way we are scrolling `"PAUSED"`, `"FORWARD"` or `"REVERSE"`
  		 */
  		/**
  		 * Scene update event.
  		 * Fires whenever the scene is updated (but not necessarily changes the progress).
  		 *
  		 * @event ScrollMagic.Scene#update
  		 *
  		 * @example
  		 * scene.on("update", function (event) {
  		 * 	console.log("Scene updated.");
  		 * });
  		 *
  		 * @property {object} event - The event Object passed to each callback
  		 * @property {string} event.type - The name of the event
  		 * @property {Scene} event.target - The Scene object that triggered this event
  		 * @property {number} event.startPos - The starting position of the scene (in relation to the conainer)
  		 * @property {number} event.endPos - The ending position of the scene (in relation to the conainer)
  		 * @property {number} event.scrollPos - The current scroll position of the container
  		 */
  		/**
  		 * Scene progress event.
  		 * Fires whenever the progress of the scene changes.
  		 *
  		 * For details on this event and the order in which it is fired, please review the {@link Scene.progress} method.
  		 *
  		 * @event ScrollMagic.Scene#progress
  		 *
  		 * @example
  		 * scene.on("progress", function (event) {
  		 * 	console.log("Scene progress changed to " + event.progress);
  		 * });
  		 *
  		 * @property {object} event - The event Object passed to each callback
  		 * @property {string} event.type - The name of the event
  		 * @property {Scene} event.target - The Scene object that triggered this event
  		 * @property {number} event.progress - Reflects the current progress of the scene
  		 * @property {string} event.state - The current state of the scene `"BEFORE"`, `"DURING"` or `"AFTER"`
  		 * @property {string} event.scrollDirection - Indicates which way we are scrolling `"PAUSED"`, `"FORWARD"` or `"REVERSE"`
  		 */
  		/**
  		 * Scene change event.
  		 * Fires whenvever a property of the scene is changed.
  		 *
  		 * @event ScrollMagic.Scene#change
  		 *
  		 * @example
  		 * scene.on("change", function (event) {
  		 * 	console.log("Scene Property \"" + event.what + "\" changed to " + event.newval);
  		 * });
  		 *
  		 * @property {object} event - The event Object passed to each callback
  		 * @property {string} event.type - The name of the event
  		 * @property {Scene} event.target - The Scene object that triggered this event
  		 * @property {string} event.what - Indicates what value has been changed
  		 * @property {mixed} event.newval - The new value of the changed property
  		 */
  		/**
  		 * Scene shift event.
  		 * Fires whenvever the start or end **scroll offset** of the scene change.
  		 * This happens explicitely, when one of these values change: `offset`, `duration` or `triggerHook`.
  		 * It will fire implicitly when the `triggerElement` changes, if the new element has a different position (most cases).
  		 * It will also fire implicitly when the size of the container changes and the triggerHook is anything other than `onLeave`.
  		 *
  		 * @event ScrollMagic.Scene#shift
  		 * @since 1.1.0
  		 *
  		 * @example
  		 * scene.on("shift", function (event) {
  		 * 	console.log("Scene moved, because the " + event.reason + " has changed.)");
  		 * });
  		 *
  		 * @property {object} event - The event Object passed to each callback
  		 * @property {string} event.type - The name of the event
  		 * @property {Scene} event.target - The Scene object that triggered this event
  		 * @property {string} event.reason - Indicates why the scene has shifted
  		 */
  		/**
  		 * Scene destroy event.
  		 * Fires whenvever the scene is destroyed.
  		 * This can be used to tidy up custom behaviour used in events.
  		 *
  		 * @event ScrollMagic.Scene#destroy
  		 * @since 1.1.0
  		 *
  		 * @example
  		 * scene.on("enter", function (event) {
  		 *        // add custom action
  		 *        $("#my-elem").left("200");
  		 *      })
  		 *      .on("destroy", function (event) {
  		 *        // reset my element to start position
  		 *        if (event.reset) {
  		 *          $("#my-elem").left("0");
  		 *        }
  		 *      });
  		 *
  		 * @property {object} event - The event Object passed to each callback
  		 * @property {string} event.type - The name of the event
  		 * @property {Scene} event.target - The Scene object that triggered this event
  		 * @property {boolean} event.reset - Indicates if the destroy method was called with reset `true` or `false`.
  		 */
  		/**
  		 * Scene add event.
  		 * Fires when the scene is added to a controller.
  		 * This is mostly used by plugins to know that change might be due.
  		 *
  		 * @event ScrollMagic.Scene#add
  		 * @since 2.0.0
  		 *
  		 * @example
  		 * scene.on("add", function (event) {
  		 * 	console.log('Scene was added to a new controller.');
  		 * });
  		 *
  		 * @property {object} event - The event Object passed to each callback
  		 * @property {string} event.type - The name of the event
  		 * @property {Scene} event.target - The Scene object that triggered this event
  		 * @property {boolean} event.controller - The controller object the scene was added to.
  		 */
  		/**
  		 * Scene remove event.
  		 * Fires when the scene is removed from a controller.
  		 * This is mostly used by plugins to know that change might be due.
  		 *
  		 * @event ScrollMagic.Scene#remove
  		 * @since 2.0.0
  		 *
  		 * @example
  		 * scene.on("remove", function (event) {
  		 * 	console.log('Scene was removed from its controller.');
  		 * });
  		 *
  		 * @property {object} event - The event Object passed to each callback
  		 * @property {string} event.type - The name of the event
  		 * @property {Scene} event.target - The Scene object that triggered this event
  		 */

  		/**
  		 * Add one ore more event listener.
  		 * The callback function will be fired at the respective event, and an object containing relevant data will be passed to the callback.
  		 * @method ScrollMagic.Scene#on
  		 *
  		 * @example
  		 * function callback (event) {
  		 * 		console.log("Event fired! (" + event.type + ")");
  		 * }
  		 * // add listeners
  		 * scene.on("change update progress start end enter leave", callback);
  		 *
  		 * @param {string} names - The name or names of the event the callback should be attached to.
  		 * @param {function} callback - A function that should be executed, when the event is dispatched. An event object will be passed to the callback.
  		 * @returns {Scene} Parent object for chaining.
  		 */
  		this.on = function (names, callback) {
  			if (_util.type.Function(callback)) {
  				names = names.trim().split(' ');
  				names.forEach(function (fullname) {
  					var
  					nameparts = fullname.split('.'),
  						eventname = nameparts[0],
  						namespace = nameparts[1];
  					if (eventname != "*") { // disallow wildcards
  						if (!_listeners[eventname]) {
  							_listeners[eventname] = [];
  						}
  						_listeners[eventname].push({
  							namespace: namespace || '',
  							callback: callback
  						});
  					}
  				});
  			} else {
  				log(1, "ERROR when calling '.on()': Supplied callback for '" + names + "' is not a valid function!");
  			}
  			return Scene;
  		};

  		/**
  		 * Remove one or more event listener.
  		 * @method ScrollMagic.Scene#off
  		 *
  		 * @example
  		 * function callback (event) {
  		 * 		console.log("Event fired! (" + event.type + ")");
  		 * }
  		 * // add listeners
  		 * scene.on("change update", callback);
  		 * // remove listeners
  		 * scene.off("change update", callback);
  		 *
  		 * @param {string} names - The name or names of the event that should be removed.
  		 * @param {function} [callback] - A specific callback function that should be removed. If none is passed all callbacks to the event listener will be removed.
  		 * @returns {Scene} Parent object for chaining.
  		 */
  		this.off = function (names, callback) {
  			if (!names) {
  				log(1, "ERROR: Invalid event name supplied.");
  				return Scene;
  			}
  			names = names.trim().split(' ');
  			names.forEach(function (fullname, key) {
  				var
  				nameparts = fullname.split('.'),
  					eventname = nameparts[0],
  					namespace = nameparts[1] || '',
  					removeList = eventname === '*' ? Object.keys(_listeners) : [eventname];
  				removeList.forEach(function (remove) {
  					var
  					list = _listeners[remove] || [],
  						i = list.length;
  					while (i--) {
  						var listener = list[i];
  						if (listener && (namespace === listener.namespace || namespace === '*') && (!callback || callback == listener.callback)) {
  							list.splice(i, 1);
  						}
  					}
  					if (!list.length) {
  						delete _listeners[remove];
  					}
  				});
  			});
  			return Scene;
  		};

  		/**
  		 * Trigger an event.
  		 * @method ScrollMagic.Scene#trigger
  		 *
  		 * @example
  		 * this.trigger("change");
  		 *
  		 * @param {string} name - The name of the event that should be triggered.
  		 * @param {object} [vars] - An object containing info that should be passed to the callback.
  		 * @returns {Scene} Parent object for chaining.
  		 */
  		this.trigger = function (name, vars) {
  			if (name) {
  				var
  				nameparts = name.trim().split('.'),
  					eventname = nameparts[0],
  					namespace = nameparts[1],
  					listeners = _listeners[eventname];
  				log(3, 'event fired:', eventname, vars ? "->" : '', vars || '');
  				if (listeners) {
  					listeners.forEach(function (listener, key) {
  						if (!namespace || namespace === listener.namespace) {
  							listener.callback.call(Scene, new ScrollMagic.Event(eventname, listener.namespace, Scene, vars));
  						}
  					});
  				}
  			} else {
  				log(1, "ERROR: Invalid event name supplied.");
  			}
  			return Scene;
  		};

  		// set event listeners
  		Scene.on("change.internal", function (e) {
  			if (e.what !== "loglevel" && e.what !== "tweenChanges") { // no need for a scene update scene with these options...
  				if (e.what === "triggerElement") {
  					updateTriggerElementPosition();
  				} else if (e.what === "reverse") { // the only property left that may have an impact on the current scene state. Everything else is handled by the shift event.
  					Scene.update();
  				}
  			}
  		}).on("shift.internal", function (e) {
  			updateScrollOffset();
  			Scene.update(); // update scene to reflect new position
  		});

  		/**
  		 * Send a debug message to the console.
  		 * @private
  		 * but provided publicly with _log for plugins
  		 *
  		 * @param {number} loglevel - The loglevel required to initiate output for the message.
  		 * @param {...mixed} output - One or more variables that should be passed to the console.
  		 */
  		var log = this._log = function (loglevel, output) {
  			if (_options.loglevel >= loglevel) {
  				Array.prototype.splice.call(arguments, 1, 0, "(" + NAMESPACE + ") ->");
  				_util.log.apply(window, arguments);
  			}
  		};

  		/**
  		 * Add the scene to a controller.
  		 * This is the equivalent to `Controller.addScene(scene)`.
  		 * @method ScrollMagic.Scene#addTo
  		 *
  		 * @example
  		 * // add a scene to a ScrollMagic Controller
  		 * scene.addTo(controller);
  		 *
  		 * @param {ScrollMagic.Controller} controller - The controller to which the scene should be added.
  		 * @returns {Scene} Parent object for chaining.
  		 */
  		this.addTo = function (controller) {
  			if (!(controller instanceof ScrollMagic.Controller)) {
  				log(1, "ERROR: supplied argument of 'addTo()' is not a valid ScrollMagic Controller");
  			} else if (_controller != controller) {
  				// new controller
  				if (_controller) { // was associated to a different controller before, so remove it...
  					_controller.removeScene(Scene);
  				}
  				_controller = controller;
  				validateOption();
  				updateDuration(true);
  				updateTriggerElementPosition(true);
  				updateScrollOffset();
  				_controller.info("container").addEventListener('resize', onContainerResize);
  				controller.addScene(Scene);
  				Scene.trigger("add", {
  					controller: _controller
  				});
  				log(3, "added " + NAMESPACE + " to controller");
  				Scene.update();
  			}
  			return Scene;
  		};

  		/**
  		 * **Get** or **Set** the current enabled state of the scene.
  		 * This can be used to disable this scene without removing or destroying it.
  		 * @method ScrollMagic.Scene#enabled
  		 *
  		 * @example
  		 * // get the current value
  		 * var enabled = scene.enabled();
  		 *
  		 * // disable the scene
  		 * scene.enabled(false);
  		 *
  		 * @param {boolean} [newState] - The new enabled state of the scene `true` or `false`.
  		 * @returns {(boolean|Scene)} Current enabled state or parent object for chaining.
  		 */
  		this.enabled = function (newState) {
  			if (!arguments.length) { // get
  				return _enabled;
  			} else if (_enabled != newState) { // set
  				_enabled = !! newState;
  				Scene.update(true);
  			}
  			return Scene;
  		};

  		/**
  		 * Remove the scene from the controller.
  		 * This is the equivalent to `Controller.removeScene(scene)`.
  		 * The scene will not be updated anymore until you readd it to a controller.
  		 * To remove the pin or the tween you need to call removeTween() or removePin() respectively.
  		 * @method ScrollMagic.Scene#remove
  		 * @example
  		 * // remove the scene from its controller
  		 * scene.remove();
  		 *
  		 * @returns {Scene} Parent object for chaining.
  		 */
  		this.remove = function () {
  			if (_controller) {
  				_controller.info("container").removeEventListener('resize', onContainerResize);
  				var tmpParent = _controller;
  				_controller = undefined;
  				tmpParent.removeScene(Scene);
  				Scene.trigger("remove");
  				log(3, "removed " + NAMESPACE + " from controller");
  			}
  			return Scene;
  		};

  		/**
  		 * Destroy the scene and everything.
  		 * @method ScrollMagic.Scene#destroy
  		 * @example
  		 * // destroy the scene without resetting the pin and tween to their initial positions
  		 * scene = scene.destroy();
  		 *
  		 * // destroy the scene and reset the pin and tween
  		 * scene = scene.destroy(true);
  		 *
  		 * @param {boolean} [reset=false] - If `true` the pin and tween (if existent) will be reset.
  		 * @returns {null} Null to unset handler variables.
  		 */
  		this.destroy = function (reset) {
  			Scene.trigger("destroy", {
  				reset: reset
  			});
  			Scene.remove();
  			Scene.off("*.*");
  			log(3, "destroyed " + NAMESPACE + " (reset: " + (reset ? "true" : "false") + ")");
  			return null;
  		};


  		/**
  		 * Updates the Scene to reflect the current state.
  		 * This is the equivalent to `Controller.updateScene(scene, immediately)`.
  		 * The update method calculates the scene's start and end position (based on the trigger element, trigger hook, duration and offset) and checks it against the current scroll position of the container.
  		 * It then updates the current scene state accordingly (or does nothing, if the state is already correct) – Pins will be set to their correct position and tweens will be updated to their correct progress.
  		 * This means an update doesn't necessarily result in a progress change. The `progress` event will be fired if the progress has indeed changed between this update and the last.
  		 * _**NOTE:** This method gets called constantly whenever ScrollMagic detects a change. The only application for you is if you change something outside of the realm of ScrollMagic, like moving the trigger or changing tween parameters._
  		 * @method ScrollMagic.Scene#update
  		 * @example
  		 * // update the scene on next tick
  		 * scene.update();
  		 *
  		 * // update the scene immediately
  		 * scene.update(true);
  		 *
  		 * @fires Scene.update
  		 *
  		 * @param {boolean} [immediately=false] - If `true` the update will be instant, if `false` it will wait until next update cycle (better performance).
  		 * @returns {Scene} Parent object for chaining.
  		 */
  		this.update = function (immediately) {
  			if (_controller) {
  				if (immediately) {
  					if (_controller.enabled() && _enabled) {
  						var
  						scrollPos = _controller.info("scrollPos"),
  							newProgress;

  						if (_options.duration > 0) {
  							newProgress = (scrollPos - _scrollOffset.start) / (_scrollOffset.end - _scrollOffset.start);
  						} else {
  							newProgress = scrollPos >= _scrollOffset.start ? 1 : 0;
  						}

  						Scene.trigger("update", {
  							startPos: _scrollOffset.start,
  							endPos: _scrollOffset.end,
  							scrollPos: scrollPos
  						});

  						Scene.progress(newProgress);
  					} else if (_pin && _state === SCENE_STATE_DURING) {
  						updatePinState(true); // unpin in position
  					}
  				} else {
  					_controller.updateScene(Scene, false);
  				}
  			}
  			return Scene;
  		};

  		/**
  		 * Updates dynamic scene variables like the trigger element position or the duration.
  		 * This method is automatically called in regular intervals from the controller. See {@link ScrollMagic.Controller} option `refreshInterval`.
  		 *
  		 * You can call it to minimize lag, for example when you intentionally change the position of the triggerElement.
  		 * If you don't it will simply be updated in the next refresh interval of the container, which is usually sufficient.
  		 *
  		 * @method ScrollMagic.Scene#refresh
  		 * @since 1.1.0
  		 * @example
  		 * scene = new ScrollMagic.Scene({triggerElement: "#trigger"});
  		 *
  		 * // change the position of the trigger
  		 * $("#trigger").css("top", 500);
  		 * // immediately let the scene know of this change
  		 * scene.refresh();
  		 *
  		 * @fires {@link Scene.shift}, if the trigger element position or the duration changed
  		 * @fires {@link Scene.change}, if the duration changed
  		 *
  		 * @returns {Scene} Parent object for chaining.
  		 */
  		this.refresh = function () {
  			updateDuration();
  			updateTriggerElementPosition();
  			// update trigger element position
  			return Scene;
  		};

  		/**
  		 * **Get** or **Set** the scene's progress.
  		 * Usually it shouldn't be necessary to use this as a setter, as it is set automatically by scene.update().
  		 * The order in which the events are fired depends on the duration of the scene:
  		 *  1. Scenes with `duration == 0`:
  		 *  Scenes that have no duration by definition have no ending. Thus the `end` event will never be fired.
  		 *  When the trigger position of the scene is passed the events are always fired in this order:
  		 *  `enter`, `start`, `progress` when scrolling forward
  		 *  and
  		 *  `progress`, `start`, `leave` when scrolling in reverse
  		 *  2. Scenes with `duration > 0`:
  		 *  Scenes with a set duration have a defined start and end point.
  		 *  When scrolling past the start position of the scene it will fire these events in this order:
  		 *  `enter`, `start`, `progress`
  		 *  When continuing to scroll and passing the end point it will fire these events:
  		 *  `progress`, `end`, `leave`
  		 *  When reversing through the end point these events are fired:
  		 *  `enter`, `end`, `progress`
  		 *  And when continuing to scroll past the start position in reverse it will fire:
  		 *  `progress`, `start`, `leave`
  		 *  In between start and end the `progress` event will be called constantly, whenever the progress changes.
  		 *
  		 * In short:
  		 * `enter` events will always trigger **before** the progress update and `leave` envents will trigger **after** the progress update.
  		 * `start` and `end` will always trigger at their respective position.
  		 *
  		 * Please review the event descriptions for details on the events and the event object that is passed to the callback.
  		 *
  		 * @method ScrollMagic.Scene#progress
  		 * @example
  		 * // get the current scene progress
  		 * var progress = scene.progress();
  		 *
  		 * // set new scene progress
  		 * scene.progress(0.3);
  		 *
  		 * @fires {@link Scene.enter}, when used as setter
  		 * @fires {@link Scene.start}, when used as setter
  		 * @fires {@link Scene.progress}, when used as setter
  		 * @fires {@link Scene.end}, when used as setter
  		 * @fires {@link Scene.leave}, when used as setter
  		 *
  		 * @param {number} [progress] - The new progress value of the scene `[0-1]`.
  		 * @returns {number} `get` -  Current scene progress.
  		 * @returns {Scene} `set` -  Parent object for chaining.
  		 */
  		this.progress = function (progress) {
  			if (!arguments.length) { // get
  				return _progress;
  			} else { // set
  				var
  				doUpdate = false,
  					oldState = _state,
  					scrollDirection = _controller ? _controller.info("scrollDirection") : 'PAUSED',
  					reverseOrForward = _options.reverse || progress >= _progress;
  				if (_options.duration === 0) {
  					// zero duration scenes
  					doUpdate = _progress != progress;
  					_progress = progress < 1 && reverseOrForward ? 0 : 1;
  					_state = _progress === 0 ? SCENE_STATE_BEFORE : SCENE_STATE_DURING;
  				} else {
  					// scenes with start and end
  					if (progress < 0 && _state !== SCENE_STATE_BEFORE && reverseOrForward) {
  						// go back to initial state
  						_progress = 0;
  						_state = SCENE_STATE_BEFORE;
  						doUpdate = true;
  					} else if (progress >= 0 && progress < 1 && reverseOrForward) {
  						_progress = progress;
  						_state = SCENE_STATE_DURING;
  						doUpdate = true;
  					} else if (progress >= 1 && _state !== SCENE_STATE_AFTER) {
  						_progress = 1;
  						_state = SCENE_STATE_AFTER;
  						doUpdate = true;
  					} else if (_state === SCENE_STATE_DURING && !reverseOrForward) {
  						updatePinState(); // in case we scrolled backwards mid-scene and reverse is disabled => update the pin position, so it doesn't move back as well.
  					}
  				}
  				if (doUpdate) {
  					// fire events
  					var
  					eventVars = {
  						progress: _progress,
  						state: _state,
  						scrollDirection: scrollDirection
  					},
  						stateChanged = _state != oldState;

  					var trigger = function (eventName) { // tmp helper to simplify code
  						Scene.trigger(eventName, eventVars);
  					};

  					if (stateChanged) { // enter events
  						if (oldState !== SCENE_STATE_DURING) {
  							trigger("enter");
  							trigger(oldState === SCENE_STATE_BEFORE ? "start" : "end");
  						}
  					}
  					trigger("progress");
  					if (stateChanged) { // leave events
  						if (_state !== SCENE_STATE_DURING) {
  							trigger(_state === SCENE_STATE_BEFORE ? "start" : "end");
  							trigger("leave");
  						}
  					}
  				}

  				return Scene;
  			}
  		};


  		/**
  		 * Update the start and end scrollOffset of the container.
  		 * The positions reflect what the controller's scroll position will be at the start and end respectively.
  		 * Is called, when:
  		 *   - Scene event "change" is called with: offset, triggerHook, duration
  		 *   - scroll container event "resize" is called
  		 *   - the position of the triggerElement changes
  		 *   - the controller changes -> addTo()
  		 * @private
  		 */
  		var updateScrollOffset = function () {
  			_scrollOffset = {
  				start: _triggerPos + _options.offset
  			};
  			if (_controller && _options.triggerElement) {
  				// take away triggerHook portion to get relative to top
  				_scrollOffset.start -= _controller.info("size") * _options.triggerHook;
  			}
  			_scrollOffset.end = _scrollOffset.start + _options.duration;
  		};

  		/**
  		 * Updates the duration if set to a dynamic function.
  		 * This method is called when the scene is added to a controller and in regular intervals from the controller through scene.refresh().
  		 *
  		 * @fires {@link Scene.change}, if the duration changed
  		 * @fires {@link Scene.shift}, if the duration changed
  		 *
  		 * @param {boolean} [suppressEvents=false] - If true the shift event will be suppressed.
  		 * @private
  		 */
  		var updateDuration = function (suppressEvents) {
  			// update duration
  			if (_durationUpdateMethod) {
  				var varname = "duration";
  				if (changeOption(varname, _durationUpdateMethod.call(Scene)) && !suppressEvents) { // set
  					Scene.trigger("change", {
  						what: varname,
  						newval: _options[varname]
  					});
  					Scene.trigger("shift", {
  						reason: varname
  					});
  				}
  			}
  		};

  		/**
  		 * Updates the position of the triggerElement, if present.
  		 * This method is called ...
  		 *  - ... when the triggerElement is changed
  		 *  - ... when the scene is added to a (new) controller
  		 *  - ... in regular intervals from the controller through scene.refresh().
  		 *
  		 * @fires {@link Scene.shift}, if the position changed
  		 *
  		 * @param {boolean} [suppressEvents=false] - If true the shift event will be suppressed.
  		 * @private
  		 */
  		var updateTriggerElementPosition = function (suppressEvents) {
  			var
  			elementPos = 0,
  				telem = _options.triggerElement;
  			if (_controller && (telem || _triggerPos > 0)) { // either an element exists or was removed and the triggerPos is still > 0
  				if (telem) { // there currently a triggerElement set
  					if (telem.parentNode) { // check if element is still attached to DOM
  						var
  						controllerInfo = _controller.info(),
  							containerOffset = _util.get.offset(controllerInfo.container),
  							// container position is needed because element offset is returned in relation to document, not in relation to container.
  							param = controllerInfo.vertical ? "top" : "left"; // which param is of interest ?
  						// if parent is spacer, use spacer position instead so correct start position is returned for pinned elements.
  						while (telem.parentNode.hasAttribute(PIN_SPACER_ATTRIBUTE)) {
  							telem = telem.parentNode;
  						}

  						var elementOffset = _util.get.offset(telem);

  						if (!controllerInfo.isDocument) { // container is not the document root, so substract scroll Position to get correct trigger element position relative to scrollcontent
  							containerOffset[param] -= _controller.scrollPos();
  						}

  						elementPos = elementOffset[param] - containerOffset[param];

  					} else { // there was an element, but it was removed from DOM
  						log(2, "WARNING: triggerElement was removed from DOM and will be reset to", undefined);
  						Scene.triggerElement(undefined); // unset, so a change event is triggered
  					}
  				}

  				var changed = elementPos != _triggerPos;
  				_triggerPos = elementPos;
  				if (changed && !suppressEvents) {
  					Scene.trigger("shift", {
  						reason: "triggerElementPosition"
  					});
  				}
  			}
  		};

  		/**
  		 * Trigger a shift event, when the container is resized and the triggerHook is > 1.
  		 * @private
  		 */
  		var onContainerResize = function (e) {
  			if (_options.triggerHook > 0) {
  				Scene.trigger("shift", {
  					reason: "containerResize"
  				});
  			}
  		};


  		var _validate = _util.extend(SCENE_OPTIONS.validate, {
  			// validation for duration handled internally for reference to private var _durationMethod
  			duration: function (val) {
  				if (_util.type.String(val) && val.match(/^(\.|\d)*\d+%$/)) {
  					// percentage value
  					var perc = parseFloat(val) / 100;
  					val = function () {
  						return _controller ? _controller.info("size") * perc : 0;
  					};
  				}
  				if (_util.type.Function(val)) {
  					// function
  					_durationUpdateMethod = val;
  					try {
  						val = parseFloat(_durationUpdateMethod());
  					} catch (e) {
  						val = -1; // will cause error below
  					}
  				}
  				// val has to be float
  				val = parseFloat(val);
  				if (!_util.type.Number(val) || val < 0) {
  					if (_durationUpdateMethod) {
  						_durationUpdateMethod = undefined;
  						throw ["Invalid return value of supplied function for option \"duration\":", val];
  					} else {
  						throw ["Invalid value for option \"duration\":", val];
  					}
  				}
  				return val;
  			}
  		});

  		/**
  		 * Checks the validity of a specific or all options and reset to default if neccessary.
  		 * @private
  		 */
  		var validateOption = function (check) {
  			check = arguments.length ? [check] : Object.keys(_validate);
  			check.forEach(function (optionName, key) {
  				var value;
  				if (_validate[optionName]) { // there is a validation method for this option
  					try { // validate value
  						value = _validate[optionName](_options[optionName]);
  					} catch (e) { // validation failed -> reset to default
  						value = DEFAULT_OPTIONS[optionName];
  						var logMSG = _util.type.String(e) ? [e] : e;
  						if (_util.type.Array(logMSG)) {
  							logMSG[0] = "ERROR: " + logMSG[0];
  							logMSG.unshift(1); // loglevel 1 for error msg
  							log.apply(this, logMSG);
  						} else {
  							log(1, "ERROR: Problem executing validation callback for option '" + optionName + "':", e.message);
  						}
  					} finally {
  						_options[optionName] = value;
  					}
  				}
  			});
  		};

  		/**
  		 * Helper used by the setter/getters for scene options
  		 * @private
  		 */
  		var changeOption = function (varname, newval) {
  			var
  			changed = false,
  				oldval = _options[varname];
  			if (_options[varname] != newval) {
  				_options[varname] = newval;
  				validateOption(varname); // resets to default if necessary
  				changed = oldval != _options[varname];
  			}
  			return changed;
  		};

  		// generate getters/setters for all options
  		var addSceneOption = function (optionName) {
  			if (!Scene[optionName]) {
  				Scene[optionName] = function (newVal) {
  					if (!arguments.length) { // get
  						return _options[optionName];
  					} else {
  						if (optionName === "duration") { // new duration is set, so any previously set function must be unset
  							_durationUpdateMethod = undefined;
  						}
  						if (changeOption(optionName, newVal)) { // set
  							Scene.trigger("change", {
  								what: optionName,
  								newval: _options[optionName]
  							});
  							if (SCENE_OPTIONS.shifts.indexOf(optionName) > -1) {
  								Scene.trigger("shift", {
  									reason: optionName
  								});
  							}
  						}
  					}
  					return Scene;
  				};
  			}
  		};

  		/**
  		 * **Get** or **Set** the duration option value.
  		 * As a setter it also accepts a function returning a numeric value.
  		 * This is particularly useful for responsive setups.
  		 *
  		 * The duration is updated using the supplied function every time `Scene.refresh()` is called, which happens periodically from the controller (see ScrollMagic.Controller option `refreshInterval`).
  		 * _**NOTE:** Be aware that it's an easy way to kill performance, if you supply a function that has high CPU demand.
  		 * Even for size and position calculations it is recommended to use a variable to cache the value. (see example)
  		 * This counts double if you use the same function for multiple scenes._
  		 *
  		 * @method ScrollMagic.Scene#duration
  		 * @example
  		 * // get the current duration value
  		 * var duration = scene.duration();
  		 *
  		 * // set a new duration
  		 * scene.duration(300);
  		 *
  		 * // use a function to automatically adjust the duration to the window height.
  		 * var durationValueCache;
  		 * function getDuration () {
  		 *   return durationValueCache;
  		 * }
  		 * function updateDuration (e) {
  		 *   durationValueCache = window.innerHeight;
  		 * }
  		 * $(window).on("resize", updateDuration); // update the duration when the window size changes
  		 * $(window).triggerHandler("resize"); // set to initial value
  		 * scene.duration(getDuration); // supply duration method
  		 *
  		 * @fires {@link Scene.change}, when used as setter
  		 * @fires {@link Scene.shift}, when used as setter
  		 * @param {(number|function)} [newDuration] - The new duration of the scene.
  		 * @returns {number} `get` -  Current scene duration.
  		 * @returns {Scene} `set` -  Parent object for chaining.
  		 */

  		/**
  		 * **Get** or **Set** the offset option value.
  		 * @method ScrollMagic.Scene#offset
  		 * @example
  		 * // get the current offset
  		 * var offset = scene.offset();
  		 *
  		 * // set a new offset
  		 * scene.offset(100);
  		 *
  		 * @fires {@link Scene.change}, when used as setter
  		 * @fires {@link Scene.shift}, when used as setter
  		 * @param {number} [newOffset] - The new offset of the scene.
  		 * @returns {number} `get` -  Current scene offset.
  		 * @returns {Scene} `set` -  Parent object for chaining.
  		 */

  		/**
  		 * **Get** or **Set** the triggerElement option value.
  		 * Does **not** fire `Scene.shift`, because changing the trigger Element doesn't necessarily mean the start position changes. This will be determined in `Scene.refresh()`, which is automatically triggered.
  		 * @method ScrollMagic.Scene#triggerElement
  		 * @example
  		 * // get the current triggerElement
  		 * var triggerElement = scene.triggerElement();
  		 *
  		 * // set a new triggerElement using a selector
  		 * scene.triggerElement("#trigger");
  		 * // set a new triggerElement using a DOM object
  		 * scene.triggerElement(document.getElementById("trigger"));
  		 *
  		 * @fires {@link Scene.change}, when used as setter
  		 * @param {(string|object)} [newTriggerElement] - The new trigger element for the scene.
  		 * @returns {(string|object)} `get` -  Current triggerElement.
  		 * @returns {Scene} `set` -  Parent object for chaining.
  		 */

  		/**
  		 * **Get** or **Set** the triggerHook option value.
  		 * @method ScrollMagic.Scene#triggerHook
  		 * @example
  		 * // get the current triggerHook value
  		 * var triggerHook = scene.triggerHook();
  		 *
  		 * // set a new triggerHook using a string
  		 * scene.triggerHook("onLeave");
  		 * // set a new triggerHook using a number
  		 * scene.triggerHook(0.7);
  		 *
  		 * @fires {@link Scene.change}, when used as setter
  		 * @fires {@link Scene.shift}, when used as setter
  		 * @param {(number|string)} [newTriggerHook] - The new triggerHook of the scene. See {@link Scene} parameter description for value options.
  		 * @returns {number} `get` -  Current triggerHook (ALWAYS numerical).
  		 * @returns {Scene} `set` -  Parent object for chaining.
  		 */

  		/**
  		 * **Get** or **Set** the reverse option value.
  		 * @method ScrollMagic.Scene#reverse
  		 * @example
  		 * // get the current reverse option
  		 * var reverse = scene.reverse();
  		 *
  		 * // set new reverse option
  		 * scene.reverse(false);
  		 *
  		 * @fires {@link Scene.change}, when used as setter
  		 * @param {boolean} [newReverse] - The new reverse setting of the scene.
  		 * @returns {boolean} `get` -  Current reverse option value.
  		 * @returns {Scene} `set` -  Parent object for chaining.
  		 */

  		/**
  		 * **Get** or **Set** the loglevel option value.
  		 * @method ScrollMagic.Scene#loglevel
  		 * @example
  		 * // get the current loglevel
  		 * var loglevel = scene.loglevel();
  		 *
  		 * // set new loglevel
  		 * scene.loglevel(3);
  		 *
  		 * @fires {@link Scene.change}, when used as setter
  		 * @param {number} [newLoglevel] - The new loglevel setting of the scene. `[0-3]`
  		 * @returns {number} `get` -  Current loglevel.
  		 * @returns {Scene} `set` -  Parent object for chaining.
  		 */

  		/**
  		 * **Get** the associated controller.
  		 * @method ScrollMagic.Scene#controller
  		 * @example
  		 * // get the controller of a scene
  		 * var controller = scene.controller();
  		 *
  		 * @returns {ScrollMagic.Controller} Parent controller or `undefined`
  		 */
  		this.controller = function () {
  			return _controller;
  		};

  		/**
  		 * **Get** the current state.
  		 * @method ScrollMagic.Scene#state
  		 * @example
  		 * // get the current state
  		 * var state = scene.state();
  		 *
  		 * @returns {string} `"BEFORE"`, `"DURING"` or `"AFTER"`
  		 */
  		this.state = function () {
  			return _state;
  		};

  		/**
  		 * **Get** the current scroll offset for the start of the scene.
  		 * Mind, that the scrollOffset is related to the size of the container, if `triggerHook` is bigger than `0` (or `"onLeave"`).
  		 * This means, that resizing the container or changing the `triggerHook` will influence the scene's start offset.
  		 * @method ScrollMagic.Scene#scrollOffset
  		 * @example
  		 * // get the current scroll offset for the start and end of the scene.
  		 * var start = scene.scrollOffset();
  		 * var end = scene.scrollOffset() + scene.duration();
  		 * console.log("the scene starts at", start, "and ends at", end);
  		 *
  		 * @returns {number} The scroll offset (of the container) at which the scene will trigger. Y value for vertical and X value for horizontal scrolls.
  		 */
  		this.scrollOffset = function () {
  			return _scrollOffset.start;
  		};

  		/**
  		 * **Get** the trigger position of the scene (including the value of the `offset` option).
  		 * @method ScrollMagic.Scene#triggerPosition
  		 * @example
  		 * // get the scene's trigger position
  		 * var triggerPosition = scene.triggerPosition();
  		 *
  		 * @returns {number} Start position of the scene. Top position value for vertical and left position value for horizontal scrolls.
  		 */
  		this.triggerPosition = function () {
  			var pos = _options.offset; // the offset is the basis
  			if (_controller) {
  				// get the trigger position
  				if (_options.triggerElement) {
  					// Element as trigger
  					pos += _triggerPos;
  				} else {
  					// return the height of the triggerHook to start at the beginning
  					pos += _controller.info("size") * Scene.triggerHook();
  				}
  			}
  			return pos;
  		};

  		var
  		_pin, _pinOptions;

  		Scene.on("shift.internal", function (e) {
  			var durationChanged = e.reason === "duration";
  			if ((_state === SCENE_STATE_AFTER && durationChanged) || (_state === SCENE_STATE_DURING && _options.duration === 0)) {
  				// if [duration changed after a scene (inside scene progress updates pin position)] or [duration is 0, we are in pin phase and some other value changed].
  				updatePinState();
  			}
  			if (durationChanged) {
  				updatePinDimensions();
  			}
  		}).on("progress.internal", function (e) {
  			updatePinState();
  		}).on("add.internal", function (e) {
  			updatePinDimensions();
  		}).on("destroy.internal", function (e) {
  			Scene.removePin(e.reset);
  		});
  		/**
  		 * Update the pin state.
  		 * @private
  		 */
  		var updatePinState = function (forceUnpin) {
  			if (_pin && _controller) {
  				var
  				containerInfo = _controller.info(),
  					pinTarget = _pinOptions.spacer.firstChild; // may be pin element or another spacer, if cascading pins
  				if (!forceUnpin && _state === SCENE_STATE_DURING) { // during scene or if duration is 0 and we are past the trigger
  					// pinned state
  					if (_util.css(pinTarget, "position") != "fixed") {
  						// change state before updating pin spacer (position changes due to fixed collapsing might occur.)
  						_util.css(pinTarget, {
  							"position": "fixed"
  						});
  						// update pin spacer
  						updatePinDimensions();
  					}

  					var
  					fixedPos = _util.get.offset(_pinOptions.spacer, true),
  						// get viewport position of spacer
  						scrollDistance = _options.reverse || _options.duration === 0 ? containerInfo.scrollPos - _scrollOffset.start // quicker
  						: Math.round(_progress * _options.duration * 10) / 10; // if no reverse and during pin the position needs to be recalculated using the progress
  					// add scrollDistance
  					fixedPos[containerInfo.vertical ? "top" : "left"] += scrollDistance;

  					// set new values
  					_util.css(_pinOptions.spacer.firstChild, {
  						top: fixedPos.top,
  						left: fixedPos.left
  					});
  				} else {
  					// unpinned state
  					var
  					newCSS = {
  						position: _pinOptions.inFlow ? "relative" : "absolute",
  						top: 0,
  						left: 0
  					},
  						change = _util.css(pinTarget, "position") != newCSS.position;

  					if (!_pinOptions.pushFollowers) {
  						newCSS[containerInfo.vertical ? "top" : "left"] = _options.duration * _progress;
  					} else if (_options.duration > 0) { // only concerns scenes with duration
  						if (_state === SCENE_STATE_AFTER && parseFloat(_util.css(_pinOptions.spacer, "padding-top")) === 0) {
  							change = true; // if in after state but havent updated spacer yet (jumped past pin)
  						} else if (_state === SCENE_STATE_BEFORE && parseFloat(_util.css(_pinOptions.spacer, "padding-bottom")) === 0) { // before
  							change = true; // jumped past fixed state upward direction
  						}
  					}
  					// set new values
  					_util.css(pinTarget, newCSS);
  					if (change) {
  						// update pin spacer if state changed
  						updatePinDimensions();
  					}
  				}
  			}
  		};

  		/**
  		 * Update the pin spacer and/or element size.
  		 * The size of the spacer needs to be updated whenever the duration of the scene changes, if it is to push down following elements.
  		 * @private
  		 */
  		var updatePinDimensions = function () {
  			if (_pin && _controller && _pinOptions.inFlow) { // no spacerresize, if original position is absolute
  				var
  				after = (_state === SCENE_STATE_AFTER),
  					before = (_state === SCENE_STATE_BEFORE),
  					during = (_state === SCENE_STATE_DURING),
  					vertical = _controller.info("vertical"),
  					pinTarget = _pinOptions.spacer.firstChild,
  					// usually the pined element but can also be another spacer (cascaded pins)
  					marginCollapse = _util.isMarginCollapseType(_util.css(_pinOptions.spacer, "display")),
  					css = {};

  				// set new size
  				// if relsize: spacer -> pin | else: pin -> spacer
  				if (_pinOptions.relSize.width || _pinOptions.relSize.autoFullWidth) {
  					if (during) {
  						_util.css(_pin, {
  							"width": _util.get.width(_pinOptions.spacer)
  						});
  					} else {
  						_util.css(_pin, {
  							"width": "100%"
  						});
  					}
  				} else {
  					// minwidth is needed for cascaded pins.
  					css["min-width"] = _util.get.width(vertical ? _pin : pinTarget, true, true);
  					css.width = during ? css["min-width"] : "auto";
  				}
  				if (_pinOptions.relSize.height) {
  					if (during) {
  						// the only padding the spacer should ever include is the duration (if pushFollowers = true), so we need to substract that.
  						_util.css(_pin, {
  							"height": _util.get.height(_pinOptions.spacer) - (_pinOptions.pushFollowers ? _options.duration : 0)
  						});
  					} else {
  						_util.css(_pin, {
  							"height": "100%"
  						});
  					}
  				} else {
  					// margin is only included if it's a cascaded pin to resolve an IE9 bug
  					css["min-height"] = _util.get.height(vertical ? pinTarget : _pin, true, !marginCollapse); // needed for cascading pins
  					css.height = during ? css["min-height"] : "auto";
  				}

  				// add space for duration if pushFollowers is true
  				if (_pinOptions.pushFollowers) {
  					css["padding" + (vertical ? "Top" : "Left")] = _options.duration * _progress;
  					css["padding" + (vertical ? "Bottom" : "Right")] = _options.duration * (1 - _progress);
  				}
  				_util.css(_pinOptions.spacer, css);
  			}
  		};

  		/**
  		 * Updates the Pin state (in certain scenarios)
  		 * If the controller container is not the document and we are mid-pin-phase scrolling or resizing the main document can result to wrong pin positions.
  		 * So this function is called on resize and scroll of the document.
  		 * @private
  		 */
  		var updatePinInContainer = function () {
  			if (_controller && _pin && _state === SCENE_STATE_DURING && !_controller.info("isDocument")) {
  				updatePinState();
  			}
  		};

  		/**
  		 * Updates the Pin spacer size state (in certain scenarios)
  		 * If container is resized during pin and relatively sized the size of the pin might need to be updated...
  		 * So this function is called on resize of the container.
  		 * @private
  		 */
  		var updateRelativePinSpacer = function () {
  			if (_controller && _pin && // well, duh
  			_state === SCENE_STATE_DURING && // element in pinned state?
  			( // is width or height relatively sized, but not in relation to body? then we need to recalc.
  			((_pinOptions.relSize.width || _pinOptions.relSize.autoFullWidth) && _util.get.width(window) != _util.get.width(_pinOptions.spacer.parentNode)) || (_pinOptions.relSize.height && _util.get.height(window) != _util.get.height(_pinOptions.spacer.parentNode)))) {
  				updatePinDimensions();
  			}
  		};

  		/**
  		 * Is called, when the mousewhel is used while over a pinned element inside a div container.
  		 * If the scene is in fixed state scroll events would be counted towards the body. This forwards the event to the scroll container.
  		 * @private
  		 */
  		var onMousewheelOverPin = function (e) {
  			if (_controller && _pin && _state === SCENE_STATE_DURING && !_controller.info("isDocument")) { // in pin state
  				e.preventDefault();
  				_controller._setScrollPos(_controller.info("scrollPos") - ((e.wheelDelta || e[_controller.info("vertical") ? "wheelDeltaY" : "wheelDeltaX"]) / 3 || -e.detail * 30));
  			}
  		};

  		/**
  		 * Pin an element for the duration of the tween.
  		 * If the scene duration is 0 the element will only be unpinned, if the user scrolls back past the start position.
  		 * Make sure only one pin is applied to an element at the same time.
  		 * An element can be pinned multiple times, but only successively.
  		 * _**NOTE:** The option `pushFollowers` has no effect, when the scene duration is 0._
  		 * @method ScrollMagic.Scene#setPin
  		 * @example
  		 * // pin element and push all following elements down by the amount of the pin duration.
  		 * scene.setPin("#pin");
  		 *
  		 * // pin element and keeping all following elements in their place. The pinned element will move past them.
  		 * scene.setPin("#pin", {pushFollowers: false});
  		 *
  		 * @param {(string|object)} element - A Selector targeting an element or a DOM object that is supposed to be pinned.
  		 * @param {object} [settings] - settings for the pin
  		 * @param {boolean} [settings.pushFollowers=true] - If `true` following elements will be "pushed" down for the duration of the pin, if `false` the pinned element will just scroll past them.
  		 Ignored, when duration is `0`.
  		 * @param {string} [settings.spacerClass="scrollmagic-pin-spacer"] - Classname of the pin spacer element, which is used to replace the element.
  		 *
  		 * @returns {Scene} Parent object for chaining.
  		 */
  		this.setPin = function (element, settings) {
  			var
  			defaultSettings = {
  				pushFollowers: true,
  				spacerClass: "scrollmagic-pin-spacer"
  			};
  			settings = _util.extend({}, defaultSettings, settings);

  			// validate Element
  			element = _util.get.elements(element)[0];
  			if (!element) {
  				log(1, "ERROR calling method 'setPin()': Invalid pin element supplied.");
  				return Scene; // cancel
  			} else if (_util.css(element, "position") === "fixed") {
  				log(1, "ERROR calling method 'setPin()': Pin does not work with elements that are positioned 'fixed'.");
  				return Scene; // cancel
  			}

  			if (_pin) { // preexisting pin?
  				if (_pin === element) {
  					// same pin we already have -> do nothing
  					return Scene; // cancel
  				} else {
  					// kill old pin
  					Scene.removePin();
  				}

  			}
  			_pin = element;

  			var
  			parentDisplay = _pin.parentNode.style.display,
  				boundsParams = ["top", "left", "bottom", "right", "margin", "marginLeft", "marginRight", "marginTop", "marginBottom"];

  			_pin.parentNode.style.display = 'none'; // hack start to force css to return stylesheet values instead of calculated px values.
  			var
  			inFlow = _util.css(_pin, "position") != "absolute",
  				pinCSS = _util.css(_pin, boundsParams.concat(["display"])),
  				sizeCSS = _util.css(_pin, ["width", "height"]);
  			_pin.parentNode.style.display = parentDisplay; // hack end.
  			if (!inFlow && settings.pushFollowers) {
  				log(2, "WARNING: If the pinned element is positioned absolutely pushFollowers will be disabled.");
  				settings.pushFollowers = false;
  			}
  			window.setTimeout(function () { // wait until all finished, because with responsive duration it will only be set after scene is added to controller
  				if (_pin && _options.duration === 0 && settings.pushFollowers) {
  					log(2, "WARNING: pushFollowers =", true, "has no effect, when scene duration is 0.");
  				}
  			}, 0);

  			// create spacer and insert
  			var
  			spacer = _pin.parentNode.insertBefore(document.createElement('div'), _pin),
  				spacerCSS = _util.extend(pinCSS, {
  					position: inFlow ? "relative" : "absolute",
  					boxSizing: "content-box",
  					mozBoxSizing: "content-box",
  					webkitBoxSizing: "content-box"
  				});

  			if (!inFlow) { // copy size if positioned absolutely, to work for bottom/right positioned elements.
  				_util.extend(spacerCSS, _util.css(_pin, ["width", "height"]));
  			}

  			_util.css(spacer, spacerCSS);
  			spacer.setAttribute(PIN_SPACER_ATTRIBUTE, "");
  			_util.addClass(spacer, settings.spacerClass);

  			// set the pin Options
  			_pinOptions = {
  				spacer: spacer,
  				relSize: { // save if size is defined using % values. if so, handle spacer resize differently...
  					width: sizeCSS.width.slice(-1) === "%",
  					height: sizeCSS.height.slice(-1) === "%",
  					autoFullWidth: sizeCSS.width === "auto" && inFlow && _util.isMarginCollapseType(pinCSS.display)
  				},
  				pushFollowers: settings.pushFollowers,
  				inFlow: inFlow,
  				// stores if the element takes up space in the document flow
  			};

  			if (!_pin.___origStyle) {
  				_pin.___origStyle = {};
  				var
  				pinInlineCSS = _pin.style,
  					copyStyles = boundsParams.concat(["width", "height", "position", "boxSizing", "mozBoxSizing", "webkitBoxSizing"]);
  				copyStyles.forEach(function (val) {
  					_pin.___origStyle[val] = pinInlineCSS[val] || "";
  				});
  			}

  			// if relative size, transfer it to spacer and make pin calculate it...
  			if (_pinOptions.relSize.width) {
  				_util.css(spacer, {
  					width: sizeCSS.width
  				});
  			}
  			if (_pinOptions.relSize.height) {
  				_util.css(spacer, {
  					height: sizeCSS.height
  				});
  			}

  			// now place the pin element inside the spacer
  			spacer.appendChild(_pin);
  			// and set new css
  			_util.css(_pin, {
  				position: inFlow ? "relative" : "absolute",
  				margin: "auto",
  				top: "auto",
  				left: "auto",
  				bottom: "auto",
  				right: "auto"
  			});

  			if (_pinOptions.relSize.width || _pinOptions.relSize.autoFullWidth) {
  				_util.css(_pin, {
  					boxSizing: "border-box",
  					mozBoxSizing: "border-box",
  					webkitBoxSizing: "border-box"
  				});
  			}

  			// add listener to document to update pin position in case controller is not the document.
  			window.addEventListener('scroll', updatePinInContainer);
  			window.addEventListener('resize', updatePinInContainer);
  			window.addEventListener('resize', updateRelativePinSpacer);
  			// add mousewheel listener to catch scrolls over fixed elements
  			_pin.addEventListener("mousewheel", onMousewheelOverPin);
  			_pin.addEventListener("DOMMouseScroll", onMousewheelOverPin);

  			log(3, "added pin");

  			// finally update the pin to init
  			updatePinState();

  			return Scene;
  		};

  		/**
  		 * Remove the pin from the scene.
  		 * @method ScrollMagic.Scene#removePin
  		 * @example
  		 * // remove the pin from the scene without resetting it (the spacer is not removed)
  		 * scene.removePin();
  		 *
  		 * // remove the pin from the scene and reset the pin element to its initial position (spacer is removed)
  		 * scene.removePin(true);
  		 *
  		 * @param {boolean} [reset=false] - If `false` the spacer will not be removed and the element's position will not be reset.
  		 * @returns {Scene} Parent object for chaining.
  		 */
  		this.removePin = function (reset) {
  			if (_pin) {
  				if (_state === SCENE_STATE_DURING) {
  					updatePinState(true); // force unpin at position
  				}
  				if (reset || !_controller) { // if there's no controller no progress was made anyway...
  					var pinTarget = _pinOptions.spacer.firstChild; // usually the pin element, but may be another spacer (cascaded pins)...
  					if (pinTarget.hasAttribute(PIN_SPACER_ATTRIBUTE)) { // copy margins to child spacer
  						var
  						style = _pinOptions.spacer.style,
  							values = ["margin", "marginLeft", "marginRight", "marginTop", "marginBottom"],
  							margins = {};
  						values.forEach(function (val) {
  							margins[val] = style[val] || "";
  						});
  						_util.css(pinTarget, margins);
  					}
  					_pinOptions.spacer.parentNode.insertBefore(pinTarget, _pinOptions.spacer);
  					_pinOptions.spacer.parentNode.removeChild(_pinOptions.spacer);
  					if (!_pin.parentNode.hasAttribute(PIN_SPACER_ATTRIBUTE)) { // if it's the last pin for this element -> restore inline styles
  						// TODO: only correctly set for first pin (when cascading) - how to fix?
  						_util.css(_pin, _pin.___origStyle);
  						delete _pin.___origStyle;
  					}
  				}
  				window.removeEventListener('scroll', updatePinInContainer);
  				window.removeEventListener('resize', updatePinInContainer);
  				window.removeEventListener('resize', updateRelativePinSpacer);
  				_pin.removeEventListener("mousewheel", onMousewheelOverPin);
  				_pin.removeEventListener("DOMMouseScroll", onMousewheelOverPin);
  				_pin = undefined;
  				log(3, "removed pin (reset: " + (reset ? "true" : "false") + ")");
  			}
  			return Scene;
  		};


  		var
  		_cssClasses, _cssClassElems = [];

  		Scene.on("destroy.internal", function (e) {
  			Scene.removeClassToggle(e.reset);
  		});
  		/**
  		 * Define a css class modification while the scene is active.
  		 * When the scene triggers the classes will be added to the supplied element and removed, when the scene is over.
  		 * If the scene duration is 0 the classes will only be removed if the user scrolls back past the start position.
  		 * @method ScrollMagic.Scene#setClassToggle
  		 * @example
  		 * // add the class 'myclass' to the element with the id 'my-elem' for the duration of the scene
  		 * scene.setClassToggle("#my-elem", "myclass");
  		 *
  		 * // add multiple classes to multiple elements defined by the selector '.classChange'
  		 * scene.setClassToggle(".classChange", "class1 class2 class3");
  		 *
  		 * @param {(string|object)} element - A Selector targeting one or more elements or a DOM object that is supposed to be modified.
  		 * @param {string} classes - One or more Classnames (separated by space) that should be added to the element during the scene.
  		 *
  		 * @returns {Scene} Parent object for chaining.
  		 */
  		this.setClassToggle = function (element, classes) {
  			var elems = _util.get.elements(element);
  			if (elems.length === 0 || !_util.type.String(classes)) {
  				log(1, "ERROR calling method 'setClassToggle()': Invalid " + (elems.length === 0 ? "element" : "classes") + " supplied.");
  				return Scene;
  			}
  			if (_cssClassElems.length > 0) {
  				// remove old ones
  				Scene.removeClassToggle();
  			}
  			_cssClasses = classes;
  			_cssClassElems = elems;
  			Scene.on("enter.internal_class leave.internal_class", function (e) {
  				var toggle = e.type === "enter" ? _util.addClass : _util.removeClass;
  				_cssClassElems.forEach(function (elem, key) {
  					toggle(elem, _cssClasses);
  				});
  			});
  			return Scene;
  		};

  		/**
  		 * Remove the class binding from the scene.
  		 * @method ScrollMagic.Scene#removeClassToggle
  		 * @example
  		 * // remove class binding from the scene without reset
  		 * scene.removeClassToggle();
  		 *
  		 * // remove class binding and remove the changes it caused
  		 * scene.removeClassToggle(true);
  		 *
  		 * @param {boolean} [reset=false] - If `false` and the classes are currently active, they will remain on the element. If `true` they will be removed.
  		 * @returns {Scene} Parent object for chaining.
  		 */
  		this.removeClassToggle = function (reset) {
  			if (reset) {
  				_cssClassElems.forEach(function (elem, key) {
  					_util.removeClass(elem, _cssClasses);
  				});
  			}
  			Scene.off("start.internal_class end.internal_class");
  			_cssClasses = undefined;
  			_cssClassElems = [];
  			return Scene;
  		};

  		// INIT
  		construct();
  		return Scene;
  	};

  	// store pagewide scene options
  	var SCENE_OPTIONS = {
  		defaults: {
  			duration: 0,
  			offset: 0,
  			triggerElement: undefined,
  			triggerHook: 0.5,
  			reverse: true,
  			loglevel: 2
  		},
  		validate: {
  			offset: function (val) {
  				val = parseFloat(val);
  				if (!_util.type.Number(val)) {
  					throw ["Invalid value for option \"offset\":", val];
  				}
  				return val;
  			},
  			triggerElement: function (val) {
  				val = val || undefined;
  				if (val) {
  					var elem = _util.get.elements(val)[0];
  					if (elem && elem.parentNode) {
  						val = elem;
  					} else {
  						throw ["Element defined in option \"triggerElement\" was not found:", val];
  					}
  				}
  				return val;
  			},
  			triggerHook: function (val) {
  				var translate = {
  					"onCenter": 0.5,
  					"onEnter": 1,
  					"onLeave": 0
  				};
  				if (_util.type.Number(val)) {
  					val = Math.max(0, Math.min(parseFloat(val), 1)); //  make sure its betweeen 0 and 1
  				} else if (val in translate) {
  					val = translate[val];
  				} else {
  					throw ["Invalid value for option \"triggerHook\": ", val];
  				}
  				return val;
  			},
  			reverse: function (val) {
  				return !!val; // force boolean
  			},
  			loglevel: function (val) {
  				val = parseInt(val);
  				if (!_util.type.Number(val) || val < 0 || val > 3) {
  					throw ["Invalid value for option \"loglevel\":", val];
  				}
  				return val;
  			}
  		},
  		// holder for  validation methods. duration validation is handled in 'getters-setters.js'
  		shifts: ["duration", "offset", "triggerHook"],
  		// list of options that trigger a `shift` event
  	};
  /*
   * method used to add an option to ScrollMagic Scenes.
   * TODO: DOC (private for dev)
   */
  	ScrollMagic.Scene.addOption = function (name, defaultValue, validationCallback, shifts) {
  		if (!(name in SCENE_OPTIONS.defaults)) {
  			SCENE_OPTIONS.defaults[name] = defaultValue;
  			SCENE_OPTIONS.validate[name] = validationCallback;
  			if (shifts) {
  				SCENE_OPTIONS.shifts.push(name);
  			}
  		} else {
  			ScrollMagic._util.log(1, "[static] ScrollMagic.Scene -> Cannot add Scene option '" + name + "', because it already exists.");
  		}
  	};
  	// instance extension function for plugins
  	// TODO: DOC (private for dev)
  	ScrollMagic.Scene.extend = function (extension) {
  		var oldClass = this;
  		ScrollMagic.Scene = function () {
  			oldClass.apply(this, arguments);
  			this.$super = _util.extend({}, this); // copy parent state
  			return extension.apply(this, arguments) || this;
  		};
  		_util.extend(ScrollMagic.Scene, oldClass); // copy properties
  		ScrollMagic.Scene.prototype = oldClass.prototype; // copy prototype
  		ScrollMagic.Scene.prototype.constructor = ScrollMagic.Scene; // restore constructor
  	};



  	/**
  	 * TODO: DOCS (private for dev)
  	 * @class
  	 * @private
  	 */

  	ScrollMagic.Event = function (type, namespace, target, vars) {
  		vars = vars || {};
  		for (var key in vars) {
  			this[key] = vars[key];
  		}
  		this.type = type;
  		this.target = this.currentTarget = target;
  		this.namespace = namespace || '';
  		this.timeStamp = this.timestamp = Date.now();
  		return this;
  	};

  /*
   * TODO: DOCS (private for dev)
   */

  	var _util = ScrollMagic._util = (function (window) {
  		var U = {},
  			i;

  		/**
  		 * ------------------------------
  		 * internal helpers
  		 * ------------------------------
  		 */

  		// parse float and fall back to 0.
  		var floatval = function (number) {
  			return parseFloat(number) || 0;
  		};
  		// get current style IE safe (otherwise IE would return calculated values for 'auto')
  		var _getComputedStyle = function (elem) {
  			return elem.currentStyle ? elem.currentStyle : window.getComputedStyle(elem);
  		};

  		// get element dimension (width or height)
  		var _dimension = function (which, elem, outer, includeMargin) {
  			elem = (elem === document) ? window : elem;
  			if (elem === window) {
  				includeMargin = false;
  			} else if (!_type.DomElement(elem)) {
  				return 0;
  			}
  			which = which.charAt(0).toUpperCase() + which.substr(1).toLowerCase();
  			var dimension = (outer ? elem['offset' + which] || elem['outer' + which] : elem['client' + which] || elem['inner' + which]) || 0;
  			if (outer && includeMargin) {
  				var style = _getComputedStyle(elem);
  				dimension += which === 'Height' ? floatval(style.marginTop) + floatval(style.marginBottom) : floatval(style.marginLeft) + floatval(style.marginRight);
  			}
  			return dimension;
  		};
  		// converts 'margin-top' into 'marginTop'
  		var _camelCase = function (str) {
  			return str.replace(/^[^a-z]+([a-z])/g, '$1').replace(/-([a-z])/g, function (g) {
  				return g[1].toUpperCase();
  			});
  		};

  		/**
  		 * ------------------------------
  		 * external helpers
  		 * ------------------------------
  		 */

  		// extend obj – same as jQuery.extend({}, objA, objB)
  		U.extend = function (obj) {
  			obj = obj || {};
  			for (i = 1; i < arguments.length; i++) {
  				if (!arguments[i]) {
  					continue;
  				}
  				for (var key in arguments[i]) {
  					if (arguments[i].hasOwnProperty(key)) {
  						obj[key] = arguments[i][key];
  					}
  				}
  			}
  			return obj;
  		};

  		// check if a css display type results in margin-collapse or not
  		U.isMarginCollapseType = function (str) {
  			return ["block", "flex", "list-item", "table", "-webkit-box"].indexOf(str) > -1;
  		};

  		// implementation of requestAnimationFrame
  		// based on https://gist.github.com/paulirish/1579671
  		var
  		lastTime = 0,
  			vendors = ['ms', 'moz', 'webkit', 'o'];
  		var _requestAnimationFrame = window.requestAnimationFrame;
  		var _cancelAnimationFrame = window.cancelAnimationFrame;
  		// try vendor prefixes if the above doesn't work
  		for (i = 0; !_requestAnimationFrame && i < vendors.length; ++i) {
  			_requestAnimationFrame = window[vendors[i] + 'RequestAnimationFrame'];
  			_cancelAnimationFrame = window[vendors[i] + 'CancelAnimationFrame'] || window[vendors[i] + 'CancelRequestAnimationFrame'];
  		}

  		// fallbacks
  		if (!_requestAnimationFrame) {
  			_requestAnimationFrame = function (callback) {
  				var
  				currTime = new Date().getTime(),
  					timeToCall = Math.max(0, 16 - (currTime - lastTime)),
  					id = window.setTimeout(function () {
  						callback(currTime + timeToCall);
  					}, timeToCall);
  				lastTime = currTime + timeToCall;
  				return id;
  			};
  		}
  		if (!_cancelAnimationFrame) {
  			_cancelAnimationFrame = function (id) {
  				window.clearTimeout(id);
  			};
  		}
  		U.rAF = _requestAnimationFrame.bind(window);
  		U.cAF = _cancelAnimationFrame.bind(window);

  		var
  		loglevels = ["error", "warn", "log"],
  			console = window.console || {};

  		console.log = console.log ||
  		function () {}; // no console log, well - do nothing then...
  		// make sure methods for all levels exist.
  		for (i = 0; i < loglevels.length; i++) {
  			var method = loglevels[i];
  			if (!console[method]) {
  				console[method] = console.log; // prefer .log over nothing
  			}
  		}
  		U.log = function (loglevel) {
  			if (loglevel > loglevels.length || loglevel <= 0) loglevel = loglevels.length;
  			var now = new Date(),
  				time = ("0" + now.getHours()).slice(-2) + ":" + ("0" + now.getMinutes()).slice(-2) + ":" + ("0" + now.getSeconds()).slice(-2) + ":" + ("00" + now.getMilliseconds()).slice(-3),
  				method = loglevels[loglevel - 1],
  				args = Array.prototype.splice.call(arguments, 1),
  				func = Function.prototype.bind.call(console[method], console);
  			args.unshift(time);
  			func.apply(console, args);
  		};

  		/**
  		 * ------------------------------
  		 * type testing
  		 * ------------------------------
  		 */

  		var _type = U.type = function (v) {
  			return Object.prototype.toString.call(v).replace(/^\[object (.+)\]$/, "$1").toLowerCase();
  		};
  		_type.String = function (v) {
  			return _type(v) === 'string';
  		};
  		_type.Function = function (v) {
  			return _type(v) === 'function';
  		};
  		_type.Array = function (v) {
  			return Array.isArray(v);
  		};
  		_type.Number = function (v) {
  			return !_type.Array(v) && (v - parseFloat(v) + 1) >= 0;
  		};
  		_type.DomElement = function (o) {
  			return (
  			typeof HTMLElement === "object" ? o instanceof HTMLElement : //DOM2
  			o && typeof o === "object" && o !== null && o.nodeType === 1 && typeof o.nodeName === "string");
  		};

  		/**
  		 * ------------------------------
  		 * DOM Element info
  		 * ------------------------------
  		 */
  		// always returns a list of matching DOM elements, from a selector, a DOM element or an list of elements or even an array of selectors
  		var _get = U.get = {};
  		_get.elements = function (selector) {
  			var arr = [];
  			if (_type.String(selector)) {
  				try {
  					selector = document.querySelectorAll(selector);
  				} catch (e) { // invalid selector
  					return arr;
  				}
  			}
  			if (_type(selector) === 'nodelist' || _type.Array(selector)) {
  				for (var i = 0, ref = arr.length = selector.length; i < ref; i++) { // list of elements
  					var elem = selector[i];
  					arr[i] = _type.DomElement(elem) ? elem : _get.elements(elem); // if not an element, try to resolve recursively
  				}
  			} else if (_type.DomElement(selector) || selector === document || selector === window) {
  				arr = [selector]; // only the element
  			}
  			return arr;
  		};
  		// get scroll top value
  		_get.scrollTop = function (elem) {
  			return (elem && typeof elem.scrollTop === 'number') ? elem.scrollTop : window.pageYOffset || 0;
  		};
  		// get scroll left value
  		_get.scrollLeft = function (elem) {
  			return (elem && typeof elem.scrollLeft === 'number') ? elem.scrollLeft : window.pageXOffset || 0;
  		};
  		// get element height
  		_get.width = function (elem, outer, includeMargin) {
  			return _dimension('width', elem, outer, includeMargin);
  		};
  		// get element width
  		_get.height = function (elem, outer, includeMargin) {
  			return _dimension('height', elem, outer, includeMargin);
  		};

  		// get element position (optionally relative to viewport)
  		_get.offset = function (elem, relativeToViewport) {
  			var offset = {
  				top: 0,
  				left: 0
  			};
  			if (elem && elem.getBoundingClientRect) { // check if available
  				var rect = elem.getBoundingClientRect();
  				offset.top = rect.top;
  				offset.left = rect.left;
  				if (!relativeToViewport) { // clientRect is by default relative to viewport...
  					offset.top += _get.scrollTop();
  					offset.left += _get.scrollLeft();
  				}
  			}
  			return offset;
  		};

  		/**
  		 * ------------------------------
  		 * DOM Element manipulation
  		 * ------------------------------
  		 */

  		U.addClass = function (elem, classname) {
  			if (classname) {
  				if (elem.classList) elem.classList.add(classname);
  				else elem.className += ' ' + classname;
  			}
  		};
  		U.removeClass = function (elem, classname) {
  			if (classname) {
  				if (elem.classList) elem.classList.remove(classname);
  				else elem.className = elem.className.replace(new RegExp('(^|\\b)' + classname.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
  			}
  		};
  		// if options is string -> returns css value
  		// if options is array -> returns object with css value pairs
  		// if options is object -> set new css values
  		U.css = function (elem, options) {
  			if (_type.String(options)) {
  				return _getComputedStyle(elem)[_camelCase(options)];
  			} else if (_type.Array(options)) {
  				var
  				obj = {},
  					style = _getComputedStyle(elem);
  				options.forEach(function (option, key) {
  					obj[option] = style[_camelCase(option)];
  				});
  				return obj;
  			} else {
  				for (var option in options) {
  					var val = options[option];
  					if (val == parseFloat(val)) { // assume pixel for seemingly numerical values
  						val += 'px';
  					}
  					elem.style[_camelCase(option)] = val;
  				}
  			}
  		};

  		return U;
  	}(window || {}));

  	ScrollMagic.Scene.prototype.addIndicators = function () {
  		ScrollMagic._util.log(1, '(ScrollMagic.Scene) -> ERROR calling addIndicators() due to missing Plugin \'debug.addIndicators\'. Please make sure to include plugins/debug.addIndicators.js');
  		return this;
  	}
  	ScrollMagic.Scene.prototype.removeIndicators = function () {
  		ScrollMagic._util.log(1, '(ScrollMagic.Scene) -> ERROR calling removeIndicators() due to missing Plugin \'debug.addIndicators\'. Please make sure to include plugins/debug.addIndicators.js');
  		return this;
  	}
  	ScrollMagic.Scene.prototype.setTween = function () {
  		ScrollMagic._util.log(1, '(ScrollMagic.Scene) -> ERROR calling setTween() due to missing Plugin \'animation.gsap\'. Please make sure to include plugins/animation.gsap.js');
  		return this;
  	}
  	ScrollMagic.Scene.prototype.removeTween = function () {
  		ScrollMagic._util.log(1, '(ScrollMagic.Scene) -> ERROR calling removeTween() due to missing Plugin \'animation.gsap\'. Please make sure to include plugins/animation.gsap.js');
  		return this;
  	}
  	ScrollMagic.Scene.prototype.setVelocity = function () {
  		ScrollMagic._util.log(1, '(ScrollMagic.Scene) -> ERROR calling setVelocity() due to missing Plugin \'animation.velocity\'. Please make sure to include plugins/animation.velocity.js');
  		return this;
  	}
  	ScrollMagic.Scene.prototype.removeVelocity = function () {
  		ScrollMagic._util.log(1, '(ScrollMagic.Scene) -> ERROR calling removeVelocity() due to missing Plugin \'animation.velocity\'. Please make sure to include plugins/animation.velocity.js');
  		return this;
  	}

  	return ScrollMagic;
  }));
  /*!
   * ScrollMagic v2.0.6 (2018-10-08)
   * The javascript library for magical scroll interactions.
   * (c) 2018 Jan Paepke (@janpaepke)
   * Project Website: http://scrollmagic.io
   *
   * @version 2.0.6
   * @license Dual licensed under MIT license and GPL.
   * @author Jan Paepke - e-mail@janpaepke.de
   *
   * @file ScrollMagic GSAP Animation Plugin.
   *
   * requires: GSAP ~1.14
   * Powered by the Greensock Animation Platform (GSAP): http://www.greensock.com/js
   * Greensock License info at http://www.greensock.com/licensing/
   */
  /**
   * This plugin is meant to be used in conjunction with the Greensock Animation Plattform.
   * It offers an easy API to trigger Tweens or synchronize them to the scrollbar movement.
   *
   * Both the `lite` and the `max` versions of the GSAP library are supported.
   * The most basic requirement is `TweenLite`.
   *
   * To have access to this extension, please include `plugins/animation.gsap.js`.
   * @requires {@link http://greensock.com/gsap|GSAP ~1.14.x}
   * @mixin animation.GSAP
   */
  (function (root, factory) {
  	if (typeof define === 'function' && define.amd) {
  		// AMD. Register as an anonymous module.
  		define(['ScrollMagic', 'TweenMax', 'TimelineMax'], factory);
  	} else if (typeof exports === 'object') {
  		// CommonJS
  		// Loads whole gsap package onto global scope.
  		require('gsap');
  		factory(require('scrollmagic'), TweenMax, TimelineMax);
  	} else {
  		// Browser globals
  		factory(root.ScrollMagic || (root.jQuery && root.jQuery.ScrollMagic), root.TweenMax || root.TweenLite, root.TimelineMax || root.TimelineLite);
  	}
  }(this, function (ScrollMagic, Tween, Timeline) {
  	"use strict";
  	var NAMESPACE = "animation.gsap";

  	var
  	console = window.console || {},
  		err = Function.prototype.bind.call(console.error || console.log ||
  		function () {}, console);
  	if (!ScrollMagic) {
  		err("(" + NAMESPACE + ") -> ERROR: The ScrollMagic main module could not be found. Please make sure it's loaded before this plugin or use an asynchronous loader like requirejs.");
  	}
  	if (!Tween) {
  		err("(" + NAMESPACE + ") -> ERROR: TweenLite or TweenMax could not be found. Please make sure GSAP is loaded before ScrollMagic or use an asynchronous loader like requirejs.");
  	}

  /*
  	 * ----------------------------------------------------------------
  	 * Extensions for Scene
  	 * ----------------------------------------------------------------
  	 */
  	/**
  	 * Every instance of ScrollMagic.Scene now accepts an additional option.
  	 * See {@link ScrollMagic.Scene} for a complete list of the standard options.
  	 * @memberof! animation.GSAP#
  	 * @method new ScrollMagic.Scene(options)
  	 * @example
  	 * var scene = new ScrollMagic.Scene({tweenChanges: true});
  	 *
  	 * @param {object} [options] - Options for the Scene. The options can be updated at any time.
  	 * @param {boolean} [options.tweenChanges=false] - Tweens Animation to the progress target instead of setting it.
  	 Does not affect animations where duration is `0`.
  	 */
  	/**
  	 * **Get** or **Set** the tweenChanges option value.
  	 * This only affects scenes with a duration. If `tweenChanges` is `true`, the progress update when scrolling will not be immediate, but instead the animation will smoothly animate to the target state.
  	 * For a better understanding, try enabling and disabling this option in the [Scene Manipulation Example](../examples/basic/scene_manipulation.html).
  	 * @memberof! animation.GSAP#
  	 * @method Scene.tweenChanges
  	 *
  	 * @example
  	 * // get the current tweenChanges option
  	 * var tweenChanges = scene.tweenChanges();
  	 *
  	 * // set new tweenChanges option
  	 * scene.tweenChanges(true);
  	 *
  	 * @fires {@link Scene.change}, when used as setter
  	 * @param {boolean} [newTweenChanges] - The new tweenChanges setting of the scene.
  	 * @returns {boolean} `get` -  Current tweenChanges option value.
  	 * @returns {Scene} `set` -  Parent object for chaining.
  	 */
  	// add option (TODO: DOC (private for dev))
  	ScrollMagic.Scene.addOption("tweenChanges", // name
  	false, // default


  	function (val) { // validation callback
  		return !!val;
  	});
  	// extend scene
  	ScrollMagic.Scene.extend(function () {
  		var Scene = this,
  			_tween;

  		var log = function () {
  			if (Scene._log) { // not available, when main source minified
  				Array.prototype.splice.call(arguments, 1, 0, "(" + NAMESPACE + ")", "->");
  				Scene._log.apply(this, arguments);
  			}
  		};

  		// set listeners
  		Scene.on("progress.plugin_gsap", function () {
  			updateTweenProgress();
  		});
  		Scene.on("destroy.plugin_gsap", function (e) {
  			Scene.removeTween(e.reset);
  		});

  		/**
  		 * Update the tween progress to current position.
  		 * @private
  		 */
  		var updateTweenProgress = function () {
  			if (_tween) {
  				var
  				progress = Scene.progress(),
  					state = Scene.state();
  				if (_tween.repeat && _tween.repeat() === -1) {
  					// infinite loop, so not in relation to progress
  					if (state === 'DURING' && _tween.paused()) {
  						_tween.play();
  					} else if (state !== 'DURING' && !_tween.paused()) {
  						_tween.pause();
  					}
  				} else if (progress != _tween.progress()) { // do we even need to update the progress?
  					// no infinite loop - so should we just play or go to a specific point in time?
  					if (Scene.duration() === 0) {
  						// play the animation
  						if (progress > 0) { // play from 0 to 1
  							_tween.play();
  						} else { // play from 1 to 0
  							_tween.reverse();
  						}
  					} else {
  						// go to a specific point in time
  						if (Scene.tweenChanges() && _tween.tweenTo) {
  							// go smooth
  							_tween.tweenTo(progress * _tween.duration());
  						} else {
  							// just hard set it
  							_tween.progress(progress).pause();
  						}
  					}
  				}
  			}
  		};

  		/**
  		 * Add a tween to the scene.
  		 * If you want to add multiple tweens, add them into a GSAP Timeline object and supply it instead (see example below).
  		 *
  		 * If the scene has a duration, the tween's duration will be projected to the scroll distance of the scene, meaning its progress will be synced to scrollbar movement.
  		 * For a scene with a duration of `0`, the tween will be triggered when scrolling forward past the scene's trigger position and reversed, when scrolling back.
  		 * To gain better understanding, check out the [Simple Tweening example](../examples/basic/simple_tweening.html).
  		 *
  		 * Instead of supplying a tween this method can also be used as a shorthand for `TweenMax.to()` (see example below).
  		 * @memberof! animation.GSAP#
  		 *
  		 * @example
  		 * // add a single tween directly
  		 * scene.setTween(TweenMax.to("obj"), 1, {x: 100});
  		 *
  		 * // add a single tween via variable
  		 * var tween = TweenMax.to("obj"), 1, {x: 100};
  		 * scene.setTween(tween);
  		 *
  		 * // add multiple tweens, wrapped in a timeline.
  		 * var timeline = new TimelineMax();
  		 * var tween1 = TweenMax.from("obj1", 1, {x: 100});
  		 * var tween2 = TweenMax.to("obj2", 1, {y: 100});
  		 * timeline
  		 *		.add(tween1)
  		 *		.add(tween2);
  		 * scene.addTween(timeline);
  		 *
  		 * // short hand to add a TweenMax.to() tween
  		 * scene.setTween("obj3", 0.5, {y: 100});
  		 *
  		 * // short hand to add a TweenMax.to() tween for 1 second
  		 * // this is useful, when the scene has a duration and the tween duration isn't important anyway
  		 * scene.setTween("obj3", {y: 100});
  		 *
  		 * @param {(object|string)} TweenObject - A TweenMax, TweenLite, TimelineMax or TimelineLite object that should be animated in the scene. Can also be a Dom Element or Selector, when using direct tween definition (see examples).
  		 * @param {(number|object)} duration - A duration for the tween, or tween parameters. If an object containing parameters are supplied, a default duration of 1 will be used.
  		 * @param {object} params - The parameters for the tween
  		 * @returns {Scene} Parent object for chaining.
  		 */
  		Scene.setTween = function (TweenObject, duration, params) {
  			var newTween;
  			if (arguments.length > 1) {
  				if (arguments.length < 3) {
  					params = duration;
  					duration = 1;
  				}
  				TweenObject = Tween.to(TweenObject, duration, params);
  			}
  			try {
  				// wrap Tween into a Timeline Object if available to include delay and repeats in the duration and standardize methods.
  				if (Timeline) {
  					newTween = new Timeline({
  						smoothChildTiming: true
  					}).add(TweenObject);
  				} else {
  					newTween = TweenObject;
  				}
  				newTween.pause();
  			} catch (e) {
  				log(1, "ERROR calling method 'setTween()': Supplied argument is not a valid TweenObject");
  				return Scene;
  			}
  			if (_tween) { // kill old tween?
  				Scene.removeTween();
  			}
  			_tween = newTween;

  			// some properties need to be transferred it to the wrapper, otherwise they would get lost.
  			if (TweenObject.repeat && TweenObject.repeat() === -1) { // TweenMax or TimelineMax Object?
  				_tween.repeat(-1);
  				_tween.yoyo(TweenObject.yoyo());
  			}
  			// Some tween validations and debugging helpers
  			if (Scene.tweenChanges() && !_tween.tweenTo) {
  				log(2, "WARNING: tweenChanges will only work if the TimelineMax object is available for ScrollMagic.");
  			}

  			// check if there are position tweens defined for the trigger and warn about it :)
  			if (_tween && Scene.controller() && Scene.triggerElement() && Scene.loglevel() >= 2) { // controller is needed to know scroll direction.
  				var
  				triggerTweens = Tween.getTweensOf(Scene.triggerElement()),
  					vertical = Scene.controller().info("vertical");
  				triggerTweens.forEach(function (value, index) {
  					var
  					tweenvars = value.vars.css || value.vars,
  						condition = vertical ? (tweenvars.top !== undefined || tweenvars.bottom !== undefined) : (tweenvars.left !== undefined || tweenvars.right !== undefined);
  					if (condition) {
  						log(2, "WARNING: Tweening the position of the trigger element affects the scene timing and should be avoided!");
  						return false;
  					}
  				});
  			}

  			// warn about tween overwrites, when an element is tweened multiple times
  			if (parseFloat(TweenLite.version) >= 1.14) { // onOverwrite only present since GSAP v1.14.0
  				var
  				list = _tween.getChildren ? _tween.getChildren(true, true, false) : [_tween],
  					// get all nested tween objects
  					newCallback = function () {
  						log(2, "WARNING: tween was overwritten by another. To learn how to avoid this issue see here: https://github.com/janpaepke/ScrollMagic/wiki/WARNING:-tween-was-overwritten-by-another");
  					};
  				for (var i = 0, thisTween, oldCallback; i < list.length; i++) { /*jshint loopfunc: true */
  					thisTween = list[i];
  					if (oldCallback !== newCallback) { // if tweens is added more than once
  						oldCallback = thisTween.vars.onOverwrite;
  						thisTween.vars.onOverwrite = function () {
  							if (oldCallback) {
  								oldCallback.apply(this, arguments);
  							}
  							newCallback.apply(this, arguments);
  						};
  					}
  				}
  			}
  			log(3, "added tween");

  			updateTweenProgress();
  			return Scene;
  		};

  		/**
  		 * Remove the tween from the scene.
  		 * This will terminate the control of the Scene over the tween.
  		 *
  		 * Using the reset option you can decide if the tween should remain in the current state or be rewound to set the target elements back to the state they were in before the tween was added to the scene.
  		 * @memberof! animation.GSAP#
  		 *
  		 * @example
  		 * // remove the tween from the scene without resetting it
  		 * scene.removeTween();
  		 *
  		 * // remove the tween from the scene and reset it to initial position
  		 * scene.removeTween(true);
  		 *
  		 * @param {boolean} [reset=false] - If `true` the tween will be reset to its initial values.
  		 * @returns {Scene} Parent object for chaining.
  		 */
  		Scene.removeTween = function (reset) {
  			if (_tween) {
  				if (reset) {
  					_tween.progress(0).pause();
  				}
  				_tween.kill();
  				_tween = undefined;
  				log(3, "removed tween (reset: " + (reset ? "true" : "false") + ")");
  			}
  			return Scene;
  		};

  	});
  }));
  /*!
   * ScrollMagic v2.0.6 (2018-10-08)
   * The javascript library for magical scroll interactions.
   * (c) 2018 Jan Paepke (@janpaepke)
   * Project Website: http://scrollmagic.io
   *
   * @version 2.0.6
   * @license Dual licensed under MIT license and GPL.
   * @author Jan Paepke - e-mail@janpaepke.de
   *
   * @file Debug Extension for ScrollMagic.
   */
  /**
   * This plugin was formerly known as the ScrollMagic debug extension.
   *
   * It enables you to add visual indicators to your page, to be able to see exactly when a scene is triggered.
   *
   * To have access to this extension, please include `plugins/debug.addIndicators.js`.
   * @mixin debug.addIndicators
   */
  (function (root, factory) {
  	if (typeof define === 'function' && define.amd) {
  		// AMD. Register as an anonymous module.
  		define(['ScrollMagic'], factory);
  	} else if (typeof exports === 'object') {
  		// CommonJS
  		factory(require('scrollmagic'));
  	} else {
  		// no browser global export needed, just execute
  		factory(root.ScrollMagic || (root.jQuery && root.jQuery.ScrollMagic));
  	}
  }(this, function (ScrollMagic) {
  	"use strict";
  	var NAMESPACE = "debug.addIndicators";

  	var
  	console = window.console || {},
  		err = Function.prototype.bind.call(console.error || console.log ||
  		function () {}, console);
  	if (!ScrollMagic) {
  		err("(" + NAMESPACE + ") -> ERROR: The ScrollMagic main module could not be found. Please make sure it's loaded before this plugin or use an asynchronous loader like requirejs.");
  	}

  	// plugin settings
  	var
  	FONT_SIZE = "0.85em",
  		ZINDEX = "9999",
  		EDGE_OFFSET = 15; // minimum edge distance, added to indentation

  	// overall vars
  	var
  	_util = ScrollMagic._util,
  		_autoindex = 0;



  	ScrollMagic.Scene.extend(function () {
  		var
  		Scene = this,
  			_indicator;

  		var log = function () {
  			if (Scene._log) { // not available, when main source minified
  				Array.prototype.splice.call(arguments, 1, 0, "(" + NAMESPACE + ")", "->");
  				Scene._log.apply(this, arguments);
  			}
  		};

  		/**
  		 * Add visual indicators for a ScrollMagic.Scene.
  		 * @memberof! debug.addIndicators#
  		 *
  		 * @example
  		 * // add basic indicators
  		 * scene.addIndicators()
  		 *
  		 * // passing options
  		 * scene.addIndicators({name: "pin scene", colorEnd: "#FFFFFF"});
  		 *
  		 * @param {object} [options] - An object containing one or more options for the indicators.
  		 * @param {(string|object)} [options.parent=undefined] - A selector, DOM Object or a jQuery object that the indicators should be added to.
  		 If undefined, the controller's container will be used.
  		 * @param {number} [options.name=""] - This string will be displayed at the start and end indicators of the scene for identification purposes. If no name is supplied an automatic index will be used.
  		 * @param {number} [options.indent=0] - Additional position offset for the indicators (useful, when having multiple scenes starting at the same position).
  		 * @param {string} [options.colorStart=green] - CSS color definition for the start indicator.
  		 * @param {string} [options.colorEnd=red] - CSS color definition for the end indicator.
  		 * @param {string} [options.colorTrigger=blue] - CSS color definition for the trigger indicator.
  		 */
  		Scene.addIndicators = function (options) {
  			if (!_indicator) {
  				var
  				DEFAULT_OPTIONS = {
  					name: "",
  					indent: 0,
  					parent: undefined,
  					colorStart: "green",
  					colorEnd: "red",
  					colorTrigger: "blue",
  				};

  				options = _util.extend({}, DEFAULT_OPTIONS, options);

  				_autoindex++;
  				_indicator = new Indicator(Scene, options);

  				Scene.on("add.plugin_addIndicators", _indicator.add);
  				Scene.on("remove.plugin_addIndicators", _indicator.remove);
  				Scene.on("destroy.plugin_addIndicators", Scene.removeIndicators);

  				// it the scene already has a controller we can start right away.
  				if (Scene.controller()) {
  					_indicator.add();
  				}
  			}
  			return Scene;
  		};

  		/**
  		 * Removes visual indicators from a ScrollMagic.Scene.
  		 * @memberof! debug.addIndicators#
  		 *
  		 * @example
  		 * // remove previously added indicators
  		 * scene.removeIndicators()
  		 *
  		 */
  		Scene.removeIndicators = function () {
  			if (_indicator) {
  				_indicator.remove();
  				this.off("*.plugin_addIndicators");
  				_indicator = undefined;
  			}
  			return Scene;
  		};

  	});


  /*
  	 * ----------------------------------------------------------------
  	 * Extension for controller to store and update related indicators
  	 * ----------------------------------------------------------------
  	 */
  	// add option to globally auto-add indicators to scenes
  	/**
  	 * Every ScrollMagic.Controller instance now accepts an additional option.
  	 * See {@link ScrollMagic.Controller} for a complete list of the standard options.
  	 * @memberof! debug.addIndicators#
  	 * @method new ScrollMagic.Controller(options)
  	 * @example
  	 * // make a controller and add indicators to all scenes attached
  	 * var controller = new ScrollMagic.Controller({addIndicators: true});
  	 * // this scene will automatically have indicators added to it
  	 * new ScrollMagic.Scene()
  	 *                .addTo(controller);
  	 *
  	 * @param {object} [options] - Options for the Controller.
  	 * @param {boolean} [options.addIndicators=false] - If set to `true` every scene that is added to the controller will automatically get indicators added to it.
  	 */
  	ScrollMagic.Controller.addOption("addIndicators", false);
  	// extend Controller
  	ScrollMagic.Controller.extend(function () {
  		var
  		Controller = this,
  			_info = Controller.info(),
  			_container = _info.container,
  			_isDocument = _info.isDocument,
  			_vertical = _info.vertical,
  			_indicators = { // container for all indicators and methods
  				groups: []
  			};

  		var log = function () {
  			if (Controller._log) { // not available, when main source minified
  				Array.prototype.splice.call(arguments, 1, 0, "(" + NAMESPACE + ")", "->");
  				Controller._log.apply(this, arguments);
  			}
  		};
  		if (Controller._indicators) {
  			log(2, "WARNING: Scene already has a property '_indicators', which will be overwritten by plugin.");
  		}

  		// add indicators container
  		this._indicators = _indicators;
  /*
  			needed updates:
  			+++++++++++++++
  			start/end position on scene shift (handled in Indicator class)
  			trigger parameters on triggerHook value change (handled in Indicator class)
  			bounds position on container scroll or resize (to keep alignment to bottom/right)
  			trigger position on container resize, window resize (if container isn't document) and window scroll (if container isn't document)
  		*/

  		// event handler for when associated bounds markers need to be repositioned
  		var handleBoundsPositionChange = function () {
  			_indicators.updateBoundsPositions();
  		};

  		// event handler for when associated trigger groups need to be repositioned
  		var handleTriggerPositionChange = function () {
  			_indicators.updateTriggerGroupPositions();
  		};

  		_container.addEventListener("resize", handleTriggerPositionChange);
  		if (!_isDocument) {
  			window.addEventListener("resize", handleTriggerPositionChange);
  			window.addEventListener("scroll", handleTriggerPositionChange);
  		}
  		// update all related bounds containers
  		_container.addEventListener("resize", handleBoundsPositionChange);
  		_container.addEventListener("scroll", handleBoundsPositionChange);


  		// updates the position of the bounds container to aligned to the right for vertical containers and to the bottom for horizontal
  		this._indicators.updateBoundsPositions = function (specificIndicator) {
  			var // constant for all bounds
  			groups = specificIndicator ? [_util.extend({}, specificIndicator.triggerGroup, {
  				members: [specificIndicator]
  			})] : // create a group with only one element
  			_indicators.groups,
  				// use all
  				g = groups.length,
  				css = {},
  				paramPos = _vertical ? "left" : "top",
  				paramDimension = _vertical ? "width" : "height",
  				edge = _vertical ? _util.get.scrollLeft(_container) + _util.get.width(_container) - EDGE_OFFSET : _util.get.scrollTop(_container) + _util.get.height(_container) - EDGE_OFFSET,
  				b, triggerSize, group;
  			while (g--) { // group loop
  				group = groups[g];
  				b = group.members.length;
  				triggerSize = _util.get[paramDimension](group.element.firstChild);
  				while (b--) { // indicators loop
  					css[paramPos] = edge - triggerSize;
  					_util.css(group.members[b].bounds, css);
  				}
  			}
  		};

  		// updates the positions of all trigger groups attached to a controller or a specific one, if provided
  		this._indicators.updateTriggerGroupPositions = function (specificGroup) {
  			var // constant vars
  			groups = specificGroup ? [specificGroup] : _indicators.groups,
  				i = groups.length,
  				container = _isDocument ? document.body : _container,
  				containerOffset = _isDocument ? {
  					top: 0,
  					left: 0
  				} : _util.get.offset(container, true),
  				edge = _vertical ? _util.get.width(_container) - EDGE_OFFSET : _util.get.height(_container) - EDGE_OFFSET,
  				paramDimension = _vertical ? "width" : "height",
  				paramTransform = _vertical ? "Y" : "X";
  			var // changing vars
  			group, elem, pos, elemSize, transform;
  			while (i--) {
  				group = groups[i];
  				elem = group.element;
  				pos = group.triggerHook * Controller.info("size");
  				elemSize = _util.get[paramDimension](elem.firstChild.firstChild);
  				transform = pos > elemSize ? "translate" + paramTransform + "(-100%)" : "";

  				_util.css(elem, {
  					top: containerOffset.top + (_vertical ? pos : edge - group.members[0].options.indent),
  					left: containerOffset.left + (_vertical ? edge - group.members[0].options.indent : pos)
  				});
  				_util.css(elem.firstChild.firstChild, {
  					"-ms-transform": transform,
  					"-webkit-transform": transform,
  					"transform": transform
  				});
  			}
  		};

  		// updates the label for the group to contain the name, if it only has one member
  		this._indicators.updateTriggerGroupLabel = function (group) {
  			var
  			text = "trigger" + (group.members.length > 1 ? "" : " " + group.members[0].options.name),
  				elem = group.element.firstChild.firstChild,
  				doUpdate = elem.textContent !== text;
  			if (doUpdate) {
  				elem.textContent = text;
  				if (_vertical) { // bounds position is dependent on text length, so update
  					_indicators.updateBoundsPositions();
  				}
  			}
  		};

  		// add indicators if global option is set
  		this.addScene = function (newScene) {

  			if (this._options.addIndicators && newScene instanceof ScrollMagic.Scene && newScene.controller() === Controller) {
  				newScene.addIndicators();
  			}
  			// call original destroy method
  			this.$super.addScene.apply(this, arguments);
  		};

  		// remove all previously set listeners on destroy
  		this.destroy = function () {
  			_container.removeEventListener("resize", handleTriggerPositionChange);
  			if (!_isDocument) {
  				window.removeEventListener("resize", handleTriggerPositionChange);
  				window.removeEventListener("scroll", handleTriggerPositionChange);
  			}
  			_container.removeEventListener("resize", handleBoundsPositionChange);
  			_container.removeEventListener("scroll", handleBoundsPositionChange);
  			// call original destroy method
  			this.$super.destroy.apply(this, arguments);
  		};
  		return Controller;

  	});

  /*
  	 * ----------------------------------------------------------------
  	 * Internal class for the construction of Indicators
  	 * ----------------------------------------------------------------
  	 */
  	var Indicator = function (Scene, options) {
  		var
  		Indicator = this,
  			_elemBounds = TPL.bounds(),
  			_elemStart = TPL.start(options.colorStart),
  			_elemEnd = TPL.end(options.colorEnd),
  			_boundsContainer = options.parent && _util.get.elements(options.parent)[0],
  			_vertical, _ctrl;

  		var log = function () {
  			if (Scene._log) { // not available, when main source minified
  				Array.prototype.splice.call(arguments, 1, 0, "(" + NAMESPACE + ")", "->");
  				Scene._log.apply(this, arguments);
  			}
  		};

  		options.name = options.name || _autoindex;

  		// prepare bounds elements
  		_elemStart.firstChild.textContent += " " + options.name;
  		_elemEnd.textContent += " " + options.name;
  		_elemBounds.appendChild(_elemStart);
  		_elemBounds.appendChild(_elemEnd);

  		// set public variables
  		Indicator.options = options;
  		Indicator.bounds = _elemBounds;
  		// will be set later
  		Indicator.triggerGroup = undefined;

  		// add indicators to DOM
  		this.add = function () {
  			_ctrl = Scene.controller();
  			_vertical = _ctrl.info("vertical");

  			var isDocument = _ctrl.info("isDocument");

  			if (!_boundsContainer) {
  				// no parent supplied or doesnt exist
  				_boundsContainer = isDocument ? document.body : _ctrl.info("container"); // check if window/document (then use body)
  			}
  			if (!isDocument && _util.css(_boundsContainer, "position") === 'static') {
  				// position mode needed for correct positioning of indicators
  				_util.css(_boundsContainer, {
  					position: "relative"
  				});
  			}

  			// add listeners for updates
  			Scene.on("change.plugin_addIndicators", handleTriggerParamsChange);
  			Scene.on("shift.plugin_addIndicators", handleBoundsParamsChange);

  			// updates trigger & bounds (will add elements if needed)
  			updateTriggerGroup();
  			updateBounds();

  			setTimeout(function () { // do after all execution is finished otherwise sometimes size calculations are off
  				_ctrl._indicators.updateBoundsPositions(Indicator);
  			}, 0);

  			log(3, "added indicators");
  		};

  		// remove indicators from DOM
  		this.remove = function () {
  			if (Indicator.triggerGroup) { // if not set there's nothing to remove
  				Scene.off("change.plugin_addIndicators", handleTriggerParamsChange);
  				Scene.off("shift.plugin_addIndicators", handleBoundsParamsChange);

  				if (Indicator.triggerGroup.members.length > 1) {
  					// just remove from memberlist of old group
  					var group = Indicator.triggerGroup;
  					group.members.splice(group.members.indexOf(Indicator), 1);
  					_ctrl._indicators.updateTriggerGroupLabel(group);
  					_ctrl._indicators.updateTriggerGroupPositions(group);
  					Indicator.triggerGroup = undefined;
  				} else {
  					// remove complete group
  					removeTriggerGroup();
  				}
  				removeBounds();

  				log(3, "removed indicators");
  			}
  		};

  /*
  		 * ----------------------------------------------------------------
  		 * internal Event Handlers
  		 * ----------------------------------------------------------------
  		 */

  		// event handler for when bounds params change
  		var handleBoundsParamsChange = function () {
  			updateBounds();
  		};

  		// event handler for when trigger params change
  		var handleTriggerParamsChange = function (e) {
  			if (e.what === "triggerHook") {
  				updateTriggerGroup();
  			}
  		};

  /*
  		 * ----------------------------------------------------------------
  		 * Bounds (start / stop) management
  		 * ----------------------------------------------------------------
  		 */

  		// adds an new bounds elements to the array and to the DOM
  		var addBounds = function () {
  			var v = _ctrl.info("vertical");
  			// apply stuff we didn't know before...
  			_util.css(_elemStart.firstChild, {
  				"border-bottom-width": v ? 1 : 0,
  				"border-right-width": v ? 0 : 1,
  				"bottom": v ? -1 : options.indent,
  				"right": v ? options.indent : -1,
  				"padding": v ? "0 8px" : "2px 4px",
  			});
  			_util.css(_elemEnd, {
  				"border-top-width": v ? 1 : 0,
  				"border-left-width": v ? 0 : 1,
  				"top": v ? "100%" : "",
  				"right": v ? options.indent : "",
  				"bottom": v ? "" : options.indent,
  				"left": v ? "" : "100%",
  				"padding": v ? "0 8px" : "2px 4px"
  			});
  			// append
  			_boundsContainer.appendChild(_elemBounds);
  		};

  		// remove bounds from list and DOM
  		var removeBounds = function () {
  			_elemBounds.parentNode.removeChild(_elemBounds);
  		};

  		// update the start and end positions of the scene
  		var updateBounds = function () {
  			if (_elemBounds.parentNode !== _boundsContainer) {
  				addBounds(); // Add Bounds elements (start/end)
  			}
  			var css = {};
  			css[_vertical ? "top" : "left"] = Scene.triggerPosition();
  			css[_vertical ? "height" : "width"] = Scene.duration();
  			_util.css(_elemBounds, css);
  			_util.css(_elemEnd, {
  				display: Scene.duration() > 0 ? "" : "none"
  			});
  		};

  /*
  		 * ----------------------------------------------------------------
  		 * trigger and trigger group management
  		 * ----------------------------------------------------------------
  		 */

  		// adds an new trigger group to the array and to the DOM
  		var addTriggerGroup = function () {
  			var triggerElem = TPL.trigger(options.colorTrigger); // new trigger element
  			var css = {};
  			css[_vertical ? "right" : "bottom"] = 0;
  			css[_vertical ? "border-top-width" : "border-left-width"] = 1;
  			_util.css(triggerElem.firstChild, css);
  			_util.css(triggerElem.firstChild.firstChild, {
  				padding: _vertical ? "0 8px 3px 8px" : "3px 4px"
  			});
  			document.body.appendChild(triggerElem); // directly add to body
  			var newGroup = {
  				triggerHook: Scene.triggerHook(),
  				element: triggerElem,
  				members: [Indicator]
  			};
  			_ctrl._indicators.groups.push(newGroup);
  			Indicator.triggerGroup = newGroup;
  			// update right away
  			_ctrl._indicators.updateTriggerGroupLabel(newGroup);
  			_ctrl._indicators.updateTriggerGroupPositions(newGroup);
  		};

  		var removeTriggerGroup = function () {
  			_ctrl._indicators.groups.splice(_ctrl._indicators.groups.indexOf(Indicator.triggerGroup), 1);
  			Indicator.triggerGroup.element.parentNode.removeChild(Indicator.triggerGroup.element);
  			Indicator.triggerGroup = undefined;
  		};

  		// updates the trigger group -> either join existing or add new one
  /*
  		 * Logic:
  		 * 1 if a trigger group exist, check if it's in sync with Scene settings – if so, nothing else needs to happen
  		 * 2 try to find an existing one that matches Scene parameters
  		 * 	 2.1 If a match is found check if already assigned to an existing group
  		 *			 If so:
  		 *       A: it was the last member of existing group -> kill whole group
  		 *       B: the existing group has other members -> just remove from member list
  		 *	 2.2 Assign to matching group
  		 * 3 if no new match could be found, check if assigned to existing group
  		 *   A: yes, and it's the only member -> just update parameters and positions and keep using this group
  		 *   B: yes but there are other members -> remove from member list and create a new one
  		 *   C: no, so create a new one
  		 */
  		var updateTriggerGroup = function () {
  			var
  			triggerHook = Scene.triggerHook(),
  				closeEnough = 0.0001;

  			// Have a group, check if it still matches
  			if (Indicator.triggerGroup) {
  				if (Math.abs(Indicator.triggerGroup.triggerHook - triggerHook) < closeEnough) {
  					// _util.log(0, "trigger", options.name, "->", "no need to change, still in sync");
  					return; // all good
  				}
  			}
  			// Don't have a group, check if a matching one exists
  			// _util.log(0, "trigger", options.name, "->", "out of sync!");
  			var
  			groups = _ctrl._indicators.groups,
  				group, i = groups.length;
  			while (i--) {
  				group = groups[i];
  				if (Math.abs(group.triggerHook - triggerHook) < closeEnough) {
  					// found a match!
  					// _util.log(0, "trigger", options.name, "->", "found match");
  					if (Indicator.triggerGroup) { // do I have an old group that is out of sync?
  						if (Indicator.triggerGroup.members.length === 1) { // is it the only remaining group?
  							// _util.log(0, "trigger", options.name, "->", "kill");
  							// was the last member, remove the whole group
  							removeTriggerGroup();
  						} else {
  							Indicator.triggerGroup.members.splice(Indicator.triggerGroup.members.indexOf(Indicator), 1); // just remove from memberlist of old group
  							_ctrl._indicators.updateTriggerGroupLabel(Indicator.triggerGroup);
  							_ctrl._indicators.updateTriggerGroupPositions(Indicator.triggerGroup);
  							// _util.log(0, "trigger", options.name, "->", "removing from previous member list");
  						}
  					}
  					// join new group
  					group.members.push(Indicator);
  					Indicator.triggerGroup = group;
  					_ctrl._indicators.updateTriggerGroupLabel(group);
  					return;
  				}
  			}

  			// at this point I am obviously out of sync and don't match any other group
  			if (Indicator.triggerGroup) {
  				if (Indicator.triggerGroup.members.length === 1) {
  					// _util.log(0, "trigger", options.name, "->", "updating existing");
  					// out of sync but i'm the only member => just change and update
  					Indicator.triggerGroup.triggerHook = triggerHook;
  					_ctrl._indicators.updateTriggerGroupPositions(Indicator.triggerGroup);
  					return;
  				} else {
  					// _util.log(0, "trigger", options.name, "->", "removing from previous member list");
  					Indicator.triggerGroup.members.splice(Indicator.triggerGroup.members.indexOf(Indicator), 1); // just remove from memberlist of old group
  					_ctrl._indicators.updateTriggerGroupLabel(Indicator.triggerGroup);
  					_ctrl._indicators.updateTriggerGroupPositions(Indicator.triggerGroup);
  					Indicator.triggerGroup = undefined; // need a brand new group...
  				}
  			}
  			// _util.log(0, "trigger", options.name, "->", "add a new one");
  			// did not find any match, make new trigger group
  			addTriggerGroup();
  		};
  	};

  /*
  	 * ----------------------------------------------------------------
  	 * Templates for the indicators
  	 * ----------------------------------------------------------------
  	 */
  	var TPL = {
  		start: function (color) {
  			// inner element (for bottom offset -1, while keeping top position 0)
  			var inner = document.createElement("div");
  			inner.textContent = "start";
  			_util.css(inner, {
  				position: "absolute",
  				overflow: "visible",
  				"border-width": 0,
  				"border-style": "solid",
  				color: color,
  				"border-color": color
  			});
  			var e = document.createElement('div');
  			// wrapper
  			_util.css(e, {
  				position: "absolute",
  				overflow: "visible",
  				width: 0,
  				height: 0
  			});
  			e.appendChild(inner);
  			return e;
  		},
  		end: function (color) {
  			var e = document.createElement('div');
  			e.textContent = "end";
  			_util.css(e, {
  				position: "absolute",
  				overflow: "visible",
  				"border-width": 0,
  				"border-style": "solid",
  				color: color,
  				"border-color": color
  			});
  			return e;
  		},
  		bounds: function () {
  			var e = document.createElement('div');
  			_util.css(e, {
  				position: "absolute",
  				overflow: "visible",
  				"white-space": "nowrap",
  				"pointer-events": "none",
  				"font-size": FONT_SIZE
  			});
  			e.style.zIndex = ZINDEX;
  			return e;
  		},
  		trigger: function (color) {
  			// inner to be above or below line but keep position
  			var inner = document.createElement('div');
  			inner.textContent = "trigger";
  			_util.css(inner, {
  				position: "relative",
  			});
  			// inner wrapper for right: 0 and main element has no size
  			var w = document.createElement('div');
  			_util.css(w, {
  				position: "absolute",
  				overflow: "visible",
  				"border-width": 0,
  				"border-style": "solid",
  				color: color,
  				"border-color": color
  			});
  			w.appendChild(inner);
  			// wrapper
  			var e = document.createElement('div');
  			_util.css(e, {
  				position: "fixed",
  				overflow: "visible",
  				"white-space": "nowrap",
  				"pointer-events": "none",
  				"font-size": FONT_SIZE
  			});
  			e.style.zIndex = ZINDEX;
  			e.appendChild(w);
  			return e;
  		},
  	};

  }));
}


// ====================
// App
// ========================================

var app = {};

app.globals = {

  states: {
    loading: "is--loading",
    active: "is--active",
    expanded: "is--expanded",
    noScroll: "no--scroll",
    hasMenu: "has--menu"
  },

  doc: null,
  body: null,
  page: null,

  // These should reflect css breakpoints to avoid confusion
  // unless otherwise required
  //
  breakpoints: {
    mobile: 360,
    mobileLandscape: 480,
    tablet: 768,
    tabletLandscape: 1024,
    desktop: 1025,
    wide: 1440,
    superWide: 1920
  }
};

domready(function () {
  app.globals.doc = document.documentElement;
  app.globals.body = document.getElementsByTagName('body')[0];
  app.globals.page = document.querySelector('.page');

  // Remove .no-js from html element, replace with .js
  app.globals.doc.classList.remove('no-js');
  app.globals.doc.classList.add('js');

  setTimeout(function () {
    app.globals.doc.classList.add('domready');
  }, 200);

});

// Cookies
//

function setCookie(name, value, days) {
  var d = new Date();
  d.setTime(d.getTime() + (days*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(name) {
  name = name + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for (var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

// Is Internet Explorer
//

function introBrowserCheck() {
  var ua = window.navigator.userAgent; //Check the userAgent property of the window.navigator object
  var msie = ua.indexOf('MSIE'); // IE 10 or older
  var trident = ua.indexOf('Trident/'); //IE 11
  var edge = ua.indexOf("Edge");

  return (msie > 0 || trident > 0 || edge > 0);
}

// ====================
// Global Throttler
// ========================================

function throttle(fn, threshhold, scope) {
  threshhold = threshhold || (threshhold = 250);
  var last,
      deferTimer;
  return function () {
    var context = scope || this;

    var now = +new Date(),
        args = arguments;
    if (last && now < last + threshhold) {
      // hold on to it
      clearTimeout(deferTimer);
      deferTimer = setTimeout(function () {
        last = now;
        fn.apply(context, args);
      }, threshhold + last - now);
    } else {
      last = now;
      fn.apply(context, args);
    }
  };
}


// ====================
// Load component scripts
// ========================================

// ==============================
// components.js
// ========================================

//#=include component-name/component-name.js

// ==============================

// intro.js

// ========================================



app.intro = {



  config: {

    component: '.intro',

  },



  init: function() {

    var self = this;



    var component = document.querySelector(self.config.component);

    var isHome = document.querySelector(".home") ? true : false;

    var cookieIsSet = getCookie("intro") ? true : false;



    if (isHome) {

      if (introBrowserCheck()) {

        app.globals.body.removeChild(component);

      }

      else if (component !== null && cookieIsSet === false) {

        self.handleIntro(component);

        setCookie("intro", true, 14);

      }

      else {

        app.globals.body.removeChild(component);

      }

    }



  },



  handleIntro: function(component) {

    var self = this;





    setTimeout(function () {

      component.classList.add("transition--out");

    }, 4000);

    setTimeout(function () {

      app.globals.body.removeChild(component);

    }, 4750);

  },



};



domready(function () {

  app.intro.init();

});


// ==============================
// header.js
// ========================================

app.header = {

  config: {
    header: '.header',
    trigger: '.header__nav__trigger',
  },

  isActive: false,

  init: function() {
    var self = this;

    var header = document.querySelector(self.config.header);

    if (header !== null) {
      self.handleNav(header);
      self.handleResize(header);
    }
  },


  handleNav: function(header) {
    var self = this;

    var trigger = document.querySelector(self.config.trigger);

    trigger.addEventListener("click", function() {
      if (self.isActive == false) {
        header.classList.add(app.globals.states.active);
        trigger.classList.add(app.globals.states.active);
        app.globals.body.classList.add(app.globals.states.noScroll);
        self.isActive = true;
      }
      else if (self.isActive == true) {
        header.classList.remove(app.globals.states.active);
        trigger.classList.remove(app.globals.states.active);
        app.globals.body.classList.remove(app.globals.states.noScroll);
        self.isActive = false;
      }
    })
  },

  handleResize: function(header) {
    var self = this;

    var trigger = document.querySelector(self.config.trigger);

    window.addEventListener("resize", throttle(function() {
      var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

      if (windowWidth >= app.globals.breakpoints.desktop) {
        header.classList.remove(app.globals.states.active);
        trigger.classList.remove(app.globals.states.active);
        app.globals.body.classList.remove(app.globals.states.noScroll);
        self.isActive = false;
      }
    }, 500));
  },


};

domready(function () {
  app.header.init();
});

// ==============================
// videoModal
// ========================================

app.videoModal = {

  config: {
    modal: '.modal',
    trigger: '.modal__trigger',
    triggerCard: 'modal__trigger--card',
    triggerOuter: '.modal__trigger__outer',
    closeTrigger: '.modal__close',
    overlay: '.modal__overlay',
  },

  isActive: false,

  openModal: function(iframeSrc) {
    var self = this;

    var modalHtml = '<div class="modal"><div class="modal__inner"><iframe width="100%" height="100%" src="'+iframeSrc+'" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div><button class="modal__close"><span></span><span></span></button></div><div class="modal__overlay"></div>';
    var modalElement = document.createElement("div");
    app.globals.body.appendChild(modalElement);
    modalElement.outerHTML = modalHtml;

    var modal = document.querySelector(self.config.modal);
    setTimeout(function () {
      modal.classList.add(app.globals.states.active);
      app.globals.body.classList.add(app.globals.states.noScroll);
      modal.focus();
    }, 100);

    self.handleClose();
  },

  handleClose: function() {
    var self = this;
    var modal = document.querySelector(self.config.modal);
    var closeTrigger = document.querySelector(self.config.closeTrigger);
    var overlay = document.querySelector(self.config.overlay);

    closeTrigger.addEventListener("click", function() {
      modal.classList.remove(app.globals.states.active);
      app.globals.body.classList.remove(app.globals.states.noScroll);
      setTimeout(function () {
        app.globals.body.removeChild(modal);
        app.globals.body.removeChild(overlay);
      }, 300);
    })

    overlay.addEventListener("click", function() {
      modal.classList.remove(app.globals.states.active);
      app.globals.body.classList.remove(app.globals.states.noScroll);
      setTimeout(function () {
        app.globals.body.removeChild(modal);
        app.globals.body.removeChild(overlay);
      }, 300);
    })
  },

  handleTriggerClicks: function(trigger) {
    var self = this;

    var iframeSrc = trigger.getAttribute("data-iframe");

    trigger.addEventListener("click", function(e) {
      // Make sure only one click event is fired
      if (e.target !== this) return;

      self.openModal(iframeSrc);
    })
  },

  handleTriggerOuterClicks: function(triggerOuter) {
    var self = this;

    var triggerInside = triggerOuter.querySelector(self.config.trigger);
    var iframeSrc = triggerInside.getAttribute("data-iframe");

    triggerOuter.addEventListener("click", function() {
      self.openModal(iframeSrc);
    })
  },

  handleCardTriggerPosition: function(trigger) {
    var cardMedia = trigger.closest(".card__media");
    var triggerPosY = (cardMedia.offsetHeight / 2) + "px";

    trigger.style.top = triggerPosY;
  },

  init: function() {
    var self = this;

    var triggers = document.querySelectorAll(self.config.trigger);
    var triggersOuter = document.querySelectorAll(self.config.triggerOuter);

    if (triggers !== null) {
      for (var i = 0; i < triggers.length; i++) {
        var trigger = triggers[i];

        var triggerInCard = trigger.classList.contains(self.config.triggerCard) ? true : false;

        if (triggerInCard) {
          self.handleCardTriggerPosition(trigger);
        }

        self.handleTriggerClicks(trigger);
      }
    }

    if (triggersOuter !== null) {
      for (var i = 0; i < triggersOuter.length; i++) {
        var triggerOuter = triggersOuter[i];

        self.handleTriggerOuterClicks(triggerOuter);
      }
    }

  }
};

domready(function () {
  app.videoModal.init();
});

// ==============================
// isotope.js
// ========================================

app.isotope = {

  config: {
    component: '.card-deck',
  },

  init: function() {
    var self = this;

    var component = document.querySelector(self.config.component);

    if (component !== null) {

      var cardDeckItems = component.querySelector(".card-deck__items");
      self.handleIsotope(cardDeckItems);

    }
  },

  handleIsotope: function(cardDeckItems) {
    var self = this;
    // var iso = new Isotope(cardDeckItems, {
    //   itemSelector: '.col-sm-6',
    //   getSortData: {
    //     name: '.name',
    //     category: '[data-category]'
    //   },
    //   masonry: {
    //     //columnWidth: 200
    //   },
    //   sortBy: [ 'color', 'number' ]
    // });

    var $grid = $(".card-deck__items").isotope({
      itemSelector: '.col-md-6',
      filter: '.solo-work'
    });

    $('.card-deck__filter').on( 'click', function() {
      var filterValue = $( this ).attr('data-filter');
      $grid.isotope({ filter: filterValue });
      $('.card-deck__filter').removeClass("is--active");
      $(this).addClass("is--active");
    });
  },

  handleFilters: function(iso) {
    var self = this;


  },

};

domready(function () {
  app.isotope.init();
});

// ==============================
// decor.js
// ========================================

domready(function () {
	var homePage = document.querySelector(".home");

	// If home page then we'll run
	if (homePage) {
	  // 	init scrollmagic
		var controller = new ScrollMagic.Controller();

		var decor = $(".decor");

		// Add tweenmax for backgroundParallax
		var parallax = TweenMax.to( decor, 1, {
			y: '-500',
			ease: Power0.easeNone
		} );

		// Create scrollmagic scene
		var parallaxScene = new ScrollMagic.Scene({
			duration: '3000',
		})
		.setTween( parallax )
		.addTo(controller);
	}

});

// ==============================
// pageHeader.js
// ========================================

app.pageHeader = {

  config: {
    component: '.page-header',
  },

  init: function() {
    var self = this;

    var $component = $(self.config.component);

    if($component !== null) {
      self.setPageHeaderHeight($component);
      self.handleResize($component);
      self.handleScroll($component);
    }
  },

  setPageHeaderHeight: function($component) {
    var self = this;

    var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    if (windowWidth <= app.globals.breakpoints.tablet) {
      $component.height($(window).height() - 80);
    }
    else {
      $component.height("");
    }
  },

  handleResize: function($component) {
    var self = this;
    window.addEventListener("resize", throttle(function(){
      self.setPageHeaderHeight($component);
    }, 500));
  },

  handleScroll: function($component) {
    $(window).on('scroll', function() {
      var y_scroll_pos = window.pageYOffset;
      var scroll_pos_test = 150;   // set to whatever you want it to be

      if (y_scroll_pos <= 150) {
        $component.removeClass("has--scrolled");
      }
      else {
        $component.addClass("has--scrolled");
      }
    });
  }

};

domready(function () {
  app.pageHeader.init();
});
