(window.__googlesitekit_webpackJsonp=window.__googlesitekit_webpackJsonp||[]).push([[10],{0:function(t,e){t.exports=googlesitekit.i18n},100:function(t,e,r){"use strict";(function(t){r.d(e,"a",(function(){return a}));var n=r(61),o=r(43);function a(e,r){var a=Object(n.a)(r);return function(){e.trackingEnabled=!0;var r=t.document;if(!r.querySelector("script[".concat(o.b,"]"))){var n=r.createElement("script");n.setAttribute(o.b,""),n.async=!0,n.src="https://www.googletagmanager.com/gtag/js?id=".concat(e.trackingID,"&l=").concat(o.a),r.head.appendChild(n),a("js",new Date),a("config",e.trackingID)}}}}).call(this,r(19))},101:function(t,e,r){"use strict";(function(t){r.d(e,"a",(function(){return p}));var n=r(7),o=r.n(n),a=r(6),i=r.n(a),c=r(14),u=r.n(c),s=r(61),l=r(58);function f(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?f(Object(r),!0).forEach((function(e){i()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(e,r,n){var a=Object(s.a)(r);return function(){var r=u()(o.a.mark((function r(i,c,u,s){var f,p,g,v,b,h,m,y;return o.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(g=e.isFirstAdmin,v=e.referenceSiteURL,b=e.trackingEnabled,h=e.trackingID,m=e.userIDHash,!(null===(f=n._gaUserPrefs)||void 0===f||null===(p=f.ioo)||void 0===p?void 0:p.call(f))){r.next=3;break}return r.abrupt("return");case 3:if(b){r.next=5;break}return r.abrupt("return");case 5:return y={send_to:h,event_category:i,event_label:u,value:s,dimension1:v,dimension2:g?"true":"false",dimension3:m,dimension4:"1.30.0",dimension5:l.a.join(", ")},r.abrupt("return",new Promise((function(e){var r=setTimeout((function(){t.console.warn('Tracking event "'.concat(c,'" (category "').concat(i,'") took too long to fire.')),e()}),1e3);a("event",c,d(d({},y),{},{event_callback:function(){clearTimeout(r),e()}}))})));case 7:case"end":return r.stop()}}),r)})));return function(t,e,n,o){return r.apply(this,arguments)}}()}}).call(this,r(19))},102:function(t,e,r){"use strict";(function(t){r.d(e,"a",(function(){return o}));var n=r(142),o=r.n(n)()(t)}).call(this,r(19))},114:function(t,e,r){"use strict";r.d(e,"b",(function(){return n})),r.d(e,"a",(function(){return n}));var n="core/forms"},115:function(t,e,r){"use strict";r.d(e,"a",(function(){return v})),r.d(e,"c",(function(){return h})),r.d(e,"b",(function(){return m}));var n=r(26),o=r.n(n),a=r(6),i=r.n(a),c=r(7),u=r.n(c),s=r(13),l=r.n(s),f=r(4),d=r.n(f),p=r(89),g=d.a.createRegistryControl,v=function(t){var e;l()(t,"storeName is required to create a snapshot store.");var r={},n={deleteSnapshot:u.a.mark((function t(){var e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,{payload:{},type:"DELETE_SNAPSHOT"};case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})),restoreSnapshot:u.a.mark((function t(){var e,r,n,o,a,i,c=arguments;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=c.length>0&&void 0!==c[0]?c[0]:{},r=e.clearAfterRestore,n=void 0===r||r,t.next=4,{payload:{},type:"RESTORE_SNAPSHOT"};case 4:if(o=t.sent,a=o.cacheHit,i=o.value,!a){t.next=13;break}return t.next=10,{payload:{snapshot:i},type:"SET_STATE_FROM_SNAPSHOT"};case 10:if(!n){t.next=13;break}return t.next=13,{payload:{},type:"DELETE_SNAPSHOT"};case 13:return t.abrupt("return",a);case 14:case"end":return t.stop()}}),t)})),createSnapshot:u.a.mark((function t(){var e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,{payload:{},type:"CREATE_SNAPSHOT"};case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)}))},a=(e={},i()(e,"DELETE_SNAPSHOT",(function(){return Object(p.a)("datastore::cache::".concat(t))})),i()(e,"CREATE_SNAPSHOT",g((function(e){return function(){return Object(p.d)("datastore::cache::".concat(t),e.stores[t].store.getState())}}))),i()(e,"RESTORE_SNAPSHOT",(function(){return Object(p.b)("datastore::cache::".concat(t),3600)})),e);return{initialState:r,actions:n,controls:a,reducer:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r,e=arguments.length>1?arguments[1]:void 0,n=e.type,a=e.payload;switch(n){case"SET_STATE_FROM_SNAPSHOT":var i=a.snapshot,c=(i.error,o()(i,["error"]));return c;default:return t}}}},b=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d.a;return Object.values(t.stores).filter((function(t){return Object.keys(t.getActions()).includes("restoreSnapshot")}))},h=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d.a;return Promise.all(b(t).map((function(t){return t.getActions().createSnapshot()})))},m=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d.a;return Promise.all(b(t).map((function(t){return t.getActions().restoreSnapshot()})))}},30:function(t,e,r){"use strict";(function(t){r.d(e,"a",(function(){return i})),r.d(e,"b",(function(){return c}));var n=r(24),o=r.n(n),a=r(2),i=function(t){return function(e){return function FilteredComponent(r){return Object(a.createElement)(a.Fragment,{},"",Object(a.createElement)(e,r),t)}}},c=function(e,r){return function(n){return function InnerComponent(a){return t.createElement(e,o()({},a,r,{OriginalComponent:n}))}}}}).call(this,r(2))},4:function(t,e){t.exports=googlesitekit.data},43:function(t,e,r){"use strict";r.d(e,"a",(function(){return n})),r.d(e,"b",(function(){return o}));var n="_googlesitekitDataLayer",o="data-googlesitekit-gtag"},48:function(t,e,r){"use strict";(function(t){r.d(e,"a",(function(){return p})),r.d(e,"b",(function(){return d}));var n=r(99),o=t._googlesitekitBaseData||{},a=o.isFirstAdmin,i=o.trackingAllowed,c={isFirstAdmin:a,trackingEnabled:o.trackingEnabled,trackingID:o.trackingID,referenceSiteURL:o.referenceSiteURL,userIDHash:o.userIDHash},u=Object(n.a)(c),s=u.enableTracking,l=u.disableTracking,f=u.isTrackingEnabled,d=u.trackEvent;function p(t){t?s():l()}!0===i&&p(f())}).call(this,r(19))},49:function(t,e,r){"use strict";(function(t){r.d(e,"a",(function(){return l}));var n,o=r(16),a=r.n(o),i=r(17),c=r.n(i),u=function(e){var r=t[e];if(!r)return!1;try{var n="__storage_test__";return r.setItem(n,n),r.removeItem(n),!0}catch(t){return t instanceof DOMException&&(22===t.code||1014===t.code||"QuotaExceededError"===t.name||"NS_ERROR_DOM_QUOTA_REACHED"===t.name)&&0!==r.length}},s=function(){function NullStorage(){a()(this,NullStorage)}return c()(NullStorage,[{key:"key",value:function(){return null}},{key:"getItem",value:function(){return null}},{key:"setItem",value:function(){}},{key:"removeItem",value:function(){}},{key:"clear",value:function(){}},{key:"length",get:function(){return 0}}]),NullStorage}(),l=function(){return n||(n=u("sessionStorage")?t.sessionStorage:u("localStorage")?t.localStorage:new s),n}}).call(this,r(19))},5:function(t,e,r){"use strict";(function(t){r.d(e,"h",(function(){return _})),r.d(e,"m",(function(){return D})),r.d(e,"b",(function(){return P})),r.d(e,"i",(function(){return A})),r.d(e,"k",(function(){return x})),r.d(e,"l",(function(){return R})),r.d(e,"w",(function(){return N})),r.d(e,"a",(function(){return I})),r.d(e,"s",(function(){return C})),r.d(e,"e",(function(){return L}));var n=r(7),o=r.n(n),a=r(14),i=r.n(a),c=r(6),u=r.n(c),s=r(36),l=r.n(s),f=r(15),d=r(18),p=r(59),g=r(217),v=r(48);r.d(e,"u",(function(){return v.b}));var b=r(30),h=r(69);r.d(e,"r",(function(){return h.a})),r.d(e,"v",(function(){return h.b}));var m=r(71);r.d(e,"t",(function(){return m.a}));var y=r(79);r.d(e,"c",(function(){return y.b})),r.d(e,"j",(function(){return y.c}));r(49);var O=r(80);r.d(e,"n",(function(){return O.b})),r.d(e,"p",(function(){return O.c})),r.d(e,"q",(function(){return O.d})),r.d(e,"f",(function(){return b.b}));var j=r(96);r.d(e,"o",(function(){return j.a}));var w=r(97);r.d(e,"d",(function(){return w.a}));r(51);var k=r(98);function E(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function S(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?E(Object(r),!0).forEach((function(e){u()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}r.d(e,"g",(function(){return k.a}));var _=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t,r=Object(f.get)(e,["_googlesitekitLegacyData","locale","","lang"]);if(r){var n=r.match(/^(\w{2})?(_)?(\w{2})/);if(n&&n[0])return n[0].replace(/_/g,"-")}return e.navigator.language},D=function(t){switch(t){case"minute":return 60;case"hour":return 3600;case"day":return 86400;case"week":return 604800;case"month":return 2592e3;case"year":return 31536e3}},P=function(t,e){if("0"===t||0===t||isNaN(t))return null;var r=(e-t)/t;return isNaN(r)||!Object(f.isFinite)(r)?null:r},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t._googlesitekitLegacyData,r=e.modules;return r?Object.keys(r).reduce((function(t,e){return"object"!==l()(r[e])||void 0===r[e].slug||void 0===r[e].name||r[e].slug!==e?t:S(S({},t),{},u()({},e,r[e]))}),{}):{}},x=function(e,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t._googlesitekitLegacyData,o=n.admin,a=o.connectURL,i=o.adminRoot,c=n.setup.needReauthenticate,u=A(n)[e].screenID,s="pagespeed-insights"===e?{notification:"authentication_success",reAuth:void 0}:{},l=Object(p.a)(i,S({page:e&&r&&u?u:"googlesitekit-dashboard",slug:e,reAuth:r},s));if(!c)return l;var f=encodeURIComponent(Object(g.a)(l));return l=i+"?"+f,Object(p.a)(a,{redirect:l,status:r})},R=function(e,r){var n=t._googlesitekitLegacyData.admin.adminRoot;return e||(e="googlesitekit-dashboard"),r=S({page:e},r),Object(p.a)(n,r)},N=function(t){try{return JSON.parse(t)&&!!t}catch(t){return!1}},I=function(){var t=i()(o.a.mark((function t(e,r,n){var a,i,c,u,s=arguments;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=s.length>3&&void 0!==s[3]?s[3]:v.b,i=s.length>4&&void 0!==s[4]?s[4]:A,t.next=4,e.setModuleActive(r,n);case 4:return c=t.sent,(u=i())[r]&&(u[r].active=n),t.next=9,a("".concat(r,"_setup"),n?"module_activate":"module_deactivate",r);case 9:return t.abrupt("return",c);case 10:case"end":return t.stop()}}),t)})));return function(e,r,n){return t.apply(this,arguments)}}(),C=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Object(d.b)("googlesitekit.ErrorNotification","googlesitekit.ErrorNotification",Object(b.b)(t,e),1)},L=function(t){if(!t)return"";var e=t.replace(/&#(\d+);/g,(function(t,e){return String.fromCharCode(e)})).replace(/(\\)/g,"");return Object(f.unescape)(e)}}).call(this,r(19))},51:function(t,e,r){"use strict";r.d(e,"b",(function(){return o})),r.d(e,"a",(function(){return a}));var n=r(0);function o(t){var e=t.match(/last-(\d+)-days/);if(e&&e[1])return parseInt(e[1],10);throw new Error("Unrecognized date range slug.")}function a(){var t=function(t){return Object(n.sprintf)(
/* translators: %s: number of days */
Object(n._n)("Last %s day","Last %s days",t,"google-site-kit"),t)};return{"last-7-days":{slug:"last-7-days",label:t(7),days:7},"last-14-days":{slug:"last-14-days",label:t(14),days:14},"last-28-days":{slug:"last-28-days",label:t(28),days:28},"last-90-days":{slug:"last-90-days",label:t(90),days:90}}}},58:function(t,e,r){"use strict";(function(t){var n,o;r.d(e,"a",(function(){return a})),r.d(e,"b",(function(){return i}));var a=(null===(n=t)||void 0===n||null===(o=n._googlesitekitBaseData)||void 0===o?void 0:o.enabledFeatures)||[],i=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a;return e.includes(t)}}).call(this,r(19))},61:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var n=r(43);function o(t){return function(){t[n.a]=t[n.a]||[],t[n.a].push(arguments)}}},63:function(t,e,r){"use strict";(function(t){var n=r(1),o=r.n(n),a=r(8),i=r.n(a);function ChangeArrow(e){var r=e.direction,n=e.invertColor,o=e.width,a=e.height;return t.createElement("svg",{className:i()("googlesitekit-change-arrow","googlesitekit-change-arrow--".concat(r),{"googlesitekit-change-arrow--inverted-color":n}),width:o,height:a,viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.createElement("path",{d:"M5.625 10L5.625 2.375L9.125 5.875L10 5L5 -1.76555e-07L-2.7055e-07 5L0.875 5.875L4.375 2.375L4.375 10L5.625 10Z",fill:"currentColor"}))}ChangeArrow.propTypes={direction:o.a.string,invertColor:o.a.bool,width:o.a.number,height:o.a.number},ChangeArrow.defaultProps={direction:"up",invertColor:!1,width:9,height:9},e.a=ChangeArrow}).call(this,r(2))},69:function(t,e,r){"use strict";r.d(e,"a",(function(){return o})),r.d(e,"b",(function(){return a}));var n=r(102),o=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return{__html:n.a.sanitize(t,e)}},a=function(t){var e;return null==t||null===(e=t.replace)||void 0===e?void 0:e.call(t,/\/+$/,"")}},71:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var n=r(36),o=r.n(n),a=r(94),i=r.n(a),c=function(t){return i()(JSON.stringify(function t(e){var r={};return Object.keys(e).sort().forEach((function(n){var a=e[n];a&&"object"===o()(a)&&!Array.isArray(a)&&(a=t(a)),r[n]=a})),r}(t)))}},77:function(t,e,r){"use strict";r.d(e,"a",(function(){return v})),r.d(e,"b",(function(){return b}));var n=r(6),o=r.n(n),a=r(36),i=r.n(a),c=r(13),u=r.n(c),s=r(94),l=r.n(s),f=r(5);function d(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function p(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?d(Object(r),!0).forEach((function(e){o()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function g(t,e){if(e&&Array.isArray(e)){var r=e.map((function(t){return"object"===i()(t)?Object(f.t)(t):t}));return"".concat(t,"::").concat(l()(JSON.stringify(r)))}return t}var v={receiveError:function(t,e,r){return u()(t,"error is required."),e&&u()(r&&Array.isArray(r),"args is required (and must be an array) when baseName is specified."),{type:"RECEIVE_ERROR",payload:{error:t,baseName:e,args:r}}},clearError:function(t,e){return t&&u()(e&&Array.isArray(e),"args is required (and must be an array) when baseName is specified."),{type:"CLEAR_ERROR",payload:{baseName:t,args:e}}},clearErrors:function(t){return{type:"CLEAR_ERRORS",payload:{baseName:t}}}};function b(){var t={getErrorForSelector:function(e,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return u()(r,"selectorName is required."),t.getError(e,r,n)},getErrorForAction:function(e,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return u()(r,"actionName is required."),t.getError(e,r,n)},getError:function(t,e,r){var n=t.error,o=t.errors;return e||r?(u()(e,"baseName is required."),o[g(e,r)]):n},getErrors:function(t){var e=new Set(Object.values(t.errors));return void 0!==t.error&&e.add(t.error),Array.from(e)},hasErrors:function(e){return t.getErrors(e).length>0}};return{initialState:{errors:{},error:void 0},actions:v,controls:{},reducer:function(t,e){var r=e.type,n=e.payload;switch(r){case"RECEIVE_ERROR":var a=n.baseName,i=n.args,c=n.error;return p(p({},t),{},a?{errors:p(p({},t.errors||{}),{},o()({},g(a,i),c))}:{error:c});case"CLEAR_ERROR":var u=n.baseName,s=n.args,l=p({},t);if(u){var f=g(u,s);l.errors=p({},t.errors||{}),delete l.errors[f]}else l.error=void 0;return l;case"CLEAR_ERRORS":var d=n.baseName,v=p({},t);if(d)for(var b in v.errors=p({},t.errors||{}),v.errors)(b===d||b.startsWith("".concat(d,"::")))&&delete v.errors[b];else v.errors={},v.error=void 0;return v;default:return t}},resolvers:{},selectors:t}}},79:function(t,e,r){"use strict";(function(t){r.d(e,"a",(function(){return u})),r.d(e,"b",(function(){return s})),r.d(e,"c",(function(){return f}));var n=r(10),o=r.n(n),a=r(0);function i(t,e){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,u=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return i=t.done,t},e:function(t){u=!0,a=t},f:function(){try{i||null==r.return||r.return()}finally{if(u)throw a}}}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var u=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=null,r=null,n=document.querySelector("#toplevel_page_googlesitekit-dashboard .googlesitekit-notifications-counter"),o=document.querySelector("#wp-admin-bar-google-site-kit .googlesitekit-notifications-counter");if(n&&o)return!1;if(e=document.querySelector("#toplevel_page_googlesitekit-dashboard .wp-menu-name"),r=document.querySelector("#wp-admin-bar-google-site-kit .ab-item"),null===e&&null===r)return!1;var i=document.createElement("span");i.setAttribute("class","googlesitekit-notifications-counter update-plugins count-".concat(t));var c=document.createElement("span");c.setAttribute("class","plugin-count"),c.setAttribute("aria-hidden","true"),c.textContent=t;var u=document.createElement("span");return u.setAttribute("class","screen-reader-text"),u.textContent=Object(a.sprintf)(
/* translators: %d is the number of notifications */
Object(a._n)("%d notification","%d notifications",t,"google-site-kit"),t),i.appendChild(c),i.appendChild(u),e&&null===n&&e.appendChild(i),r&&null===o&&r.appendChild(i),i},s=function(){t.localStorage&&t.localStorage.clear(),t.sessionStorage&&t.sessionStorage.clear()},l=function(t){for(var e=location.search.substr(1).split("&"),r={},n=0;n<e.length;n++)r[e[n].split("=")[0]]=decodeURIComponent(e[n].split("=")[1]);return t?r.hasOwnProperty(t)?decodeURIComponent(r[t].replace(/\+/g," ")):"":r},f=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:location,r=new URL(e.href);if(t)return r.searchParams&&r.searchParams.get?r.searchParams.get(t):l(t);var n,a={},c=i(r.searchParams.entries());try{for(c.s();!(n=c.n()).done;){var u=o()(n.value,2),s=u[0],f=u[1];a[s]=f}}catch(t){c.e(t)}finally{c.f()}return a}}).call(this,r(19))},80:function(t,e,r){"use strict";(function(t){r.d(e,"c",(function(){return h})),r.d(e,"d",(function(){return m})),r.d(e,"b",(function(){return y})),r.d(e,"a",(function(){return O}));var n=r(36),o=r.n(n),a=r(6),i=r.n(a),c=r(26),u=r.n(c),s=r(15),l=r(0);function f(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?f(Object(r),!0).forEach((function(e){i()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var p=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=g(t,e),n=r.formatUnit,o=r.formatDecimal;try{return n()}catch(t){return o()}},g=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t=parseInt(t,10),Number.isNaN(t)&&(t=0);var r=Math.floor(t/60/60),n=Math.floor(t/60%60),o=Math.floor(t%60);return{hours:r,minutes:n,seconds:o,formatUnit:function(){var a=e.unitDisplay,i=d(d({unitDisplay:void 0===a?"short":a},u()(e,["unitDisplay"])),{},{style:"unit"});return 0===t?m(o,d(d({},i),{},{unit:"second"})):Object(l.sprintf)(
/* translators: 1: formatted seconds, 2: formatted minutes, 3: formatted hours */
Object(l._x)("%3$s %2$s %1$s","duration of time: hh mm ss","google-site-kit"),o?m(o,d(d({},i),{},{unit:"second"})):"",n?m(n,d(d({},i),{},{unit:"minute"})):"",r?m(r,d(d({},i),{},{unit:"hour"})):"").trim()},formatDecimal:function(){var e=Object(l.sprintf)(// translators: %s number of seconds with "s" as the abbreviated unit.
Object(l.__)("%ds","google-site-kit"),o);if(0===t)return e;var a=Object(l.sprintf)(// translators: %s number of minutes with "m" as the abbreviated unit.
Object(l.__)("%dm","google-site-kit"),n),i=Object(l.sprintf)(// translators: %s number of hours with "h" as the abbreviated unit.
Object(l.__)("%dh","google-site-kit"),r);return Object(l.sprintf)(
/* translators: 1: formatted seconds, 2: formatted minutes, 3: formatted hours */
Object(l._x)("%3$s %2$s %1$s","duration of time: hh mm ss","google-site-kit"),o?e:"",n?a:"",r?i:"").trim()}}},v=function(t){return 1e6<=t?Math.round(t/1e5)/10:1e4<=t?Math.round(t/1e3):1e3<=t?Math.round(t/100)/10:t},b=function(t){var e={minimumFractionDigits:1,maximumFractionDigits:1};return 1e6<=t?Object(l.sprintf)(// translators: %s: an abbreviated number in millions.
Object(l.__)("%sM","google-site-kit"),m(v(t),t%10==0?{}:e)):1e4<=t?Object(l.sprintf)(// translators: %s: an abbreviated number in thousands.
Object(l.__)("%sK","google-site-kit"),m(v(t))):1e3<=t?Object(l.sprintf)(// translators: %s: an abbreviated number in thousands.
Object(l.__)("%sK","google-site-kit"),m(v(t),t%10==0?{}:e)):m(t,{signDisplay:"never",maximumFractionDigits:1})},h=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t=Object(s.isFinite)(t)?t:Number(t),Object(s.isFinite)(t)||(console.warn("Invalid number",t,o()(t)),t=0);var r={};if("%"===e)r={style:"percent",maximumFractionDigits:2};else{if("s"===e)return p(t,{unitDisplay:"narrow"});e&&"string"==typeof e?r={style:"currency",currency:e}:Object(s.isPlainObject)(e)&&(r=d({},e))}var n=r,a=n.style,i=void 0===a?"metric":a;return"metric"===i?b(t):"duration"===i?p(t,e):m(t,r)},m=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=e.locale,n=void 0===r?O():r,o=u()(e,["locale"]);return new Intl.NumberFormat(n,o).format(t)},y=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=e.locale,n=void 0===r?O():r,o=e.style,a=void 0===o?"long":o,i=e.type,c=void 0===i?"conjunction":i;if(Intl.ListFormat){var u=new Intl.ListFormat(n,{style:a,type:c});return u.format(t)}
/* translators: used between list items, there is a space after the comma. */var s=Object(l.__)(", ","google-site-kit");return t.join(s)},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t,r=Object(s.get)(e,["_googlesitekitLegacyData","locale"]);if(r){var n=r.match(/^(\w{2})?(_)?(\w{2})/);if(n&&n[0])return n[0].replace(/_/g,"-")}return e.navigator.language}}).call(this,r(19))},89:function(t,e,r){"use strict";(function(t){r.d(e,"b",(function(){return v})),r.d(e,"d",(function(){return b})),r.d(e,"a",(function(){return h})),r.d(e,"c",(function(){return m}));var n=r(7),o=r.n(n),a=r(14),i=r.n(a);r(37);function c(t,e){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return u(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,c=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return i=t.done,t},e:function(t){c=!0,a=t},f:function(){try{i||null==r.return||r.return()}finally{if(c)throw a}}}}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var s,l="googlesitekit_".concat("1.30.0","_"),f=["sessionStorage","localStorage"],d=[].concat(f),p=function(){var e=i()(o.a.mark((function e(r){var n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t[r]){e.next=3;break}return e.abrupt("return",!1);case 3:return e.prev=3,a="__storage_test__",n.setItem(a,a),n.removeItem(a),e.abrupt("return",!0);case 10:return e.prev=10,e.t0=e.catch(3),e.abrupt("return",e.t0 instanceof DOMException&&(22===e.t0.code||1014===e.t0.code||"QuotaExceededError"===e.t0.name||"NS_ERROR_DOM_QUOTA_REACHED"===e.t0.name)&&0!==n.length);case 13:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=i()(o.a.mark((function e(){var r,n,a,i,u;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(null===(r=t._googlesitekitLegacyData)||void 0===r||null===(n=r.admin)||void 0===n?void 0:n.nojscache)){e.next=2;break}return e.abrupt("return",null);case 2:if(void 0!==s){e.next=25;break}a=c(d),e.prev=4,a.s();case 6:if((i=a.n()).done){e.next=16;break}if(u=i.value,!s){e.next=10;break}return e.abrupt("continue",14);case 10:return e.next=12,p(u);case 12:if(!e.sent){e.next=14;break}s=t[u];case 14:e.next=6;break;case 16:e.next=21;break;case 18:e.prev=18,e.t0=e.catch(4),a.e(e.t0);case 21:return e.prev=21,a.f(),e.finish(21);case 24:void 0===s&&(s=null);case 25:return e.abrupt("return",s);case 26:case"end":return e.stop()}}),e,null,[[4,18,21,24]])})));return function(){return e.apply(this,arguments)}}(),v=function(){var t=i()(o.a.mark((function t(e){var r,n,a,i,c,u,s;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g();case 2:if(!(r=t.sent)){t.next=10;break}if(!(n=r.getItem("".concat(l).concat(e)))){t.next=10;break}if(a=JSON.parse(n),i=a.timestamp,c=a.ttl,u=a.value,s=a.isError,!i||c&&!(Math.round(Date.now()/1e3)-i<c)){t.next=10;break}return t.abrupt("return",{cacheHit:!0,value:u,isError:s});case 10:return t.abrupt("return",{cacheHit:!1,value:void 0});case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),b=function(){var e=i()(o.a.mark((function e(r,n){var a,i,c,u,s,f,d,p,v=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=v.length>2&&void 0!==v[2]?v[2]:{},i=a.ttl,c=void 0===i?3600:i,u=a.timestamp,s=void 0===u?Math.round(Date.now()/1e3):u,f=a.isError,d=void 0!==f&&f,e.next=3,g();case 3:if(!(p=e.sent)){e.next=14;break}return e.prev=5,p.setItem("".concat(l).concat(r),JSON.stringify({timestamp:s,ttl:c,value:n,isError:d})),e.abrupt("return",!0);case 10:return e.prev=10,e.t0=e.catch(5),t.console.warn("Encountered an unexpected storage error:",e.t0),e.abrupt("return",!1);case 14:return e.abrupt("return",!1);case 15:case"end":return e.stop()}}),e,null,[[5,10]])})));return function(t,r){return e.apply(this,arguments)}}(),h=function(){var e=i()(o.a.mark((function e(r){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:if(!(n=e.sent)){e.next=13;break}return e.prev=4,n.removeItem("".concat(l).concat(r)),e.abrupt("return",!0);case 9:return e.prev=9,e.t0=e.catch(4),t.console.warn("Encountered an unexpected storage error:",e.t0),e.abrupt("return",!1);case 13:return e.abrupt("return",!1);case 14:case"end":return e.stop()}}),e,null,[[4,9]])})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=i()(o.a.mark((function e(){var r,n,a,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:if(!(r=e.sent)){e.next=14;break}for(e.prev=4,n=[],a=0;a<r.length;a++)0===(i=r.key(a)).indexOf(l)&&n.push(i.substring(l.length));return e.abrupt("return",n);case 10:return e.prev=10,e.t0=e.catch(4),t.console.warn("Encountered an unexpected storage error:",e.t0),e.abrupt("return",[]);case 14:return e.abrupt("return",[]);case 15:case"end":return e.stop()}}),e,null,[[4,10]])})));return function(){return e.apply(this,arguments)}}()}).call(this,r(19))},891:function(t,e,r){"use strict";r.r(e);var n=r(4),o=r.n(n),a=r(77),i=r(115),c=r(6),u=r.n(c),s=r(13),l=r.n(s),f=r(83),d=r.n(f);function p(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function g(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?p(Object(r),!0).forEach((function(e){u()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var v={initialState:{},actions:{setValues:function(t,e){return l()(t&&"string"==typeof t,"a valid formName is required for setting values."),l()(d()(e),"formData must be an object."),{payload:{formName:t,formData:e},type:"SET_FORM_VALUES"}}},controls:{},reducer:function(t,e){var r=e.type,n=e.payload;switch(r){case"SET_FORM_VALUES":var o=n.formName,a=n.formData;return g(g({},t),{},u()({},o,g(g({},t[o]||{}),a)));default:return t}},resolvers:{},selectors:{getValue:function(t,e,r){return(t[e]||{})[r]},hasForm:function(t,e){return!!t[e]}}},b=r(114),h=o.a.combineStores(o.a.commonStore,v,Object(i.a)(b.b),Object(a.b)());h.initialState,h.actions,h.controls,h.reducer,h.resolvers,h.selectors;o.a.registerStore(b.b,h)},96:function(t,e,r){"use strict";function n(t){return t.replace(/\[([^\]]+)\]\((https?:\/\/[^\/]+\.\w+\/?.*?)\)/gi,'<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')}function o(t){return"<p>".concat(t.replace(/\n{2,}/g,"</p><p>"),"</p>")}function a(t){return t.replace(/\n/gi,"<br>")}function i(t){for(var e=t,r=0,i=[n,o,a];r<i.length;r++){e=(0,i[r])(e)}return e}r.d(e,"a",(function(){return i}))},97:function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));var n=function(t){return t=parseFloat(t),isNaN(t)||0===t?[0,0,0,0]:[Math.floor(t/60/60),Math.floor(t/60%60),Math.floor(t%60),Math.floor(1e3*t)-1e3*Math.floor(t)]}},98:function(t,e,r){"use strict";(function(t){r.d(e,"a",(function(){return a}));var n=r(234),o=r(63),a=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(Number.isNaN(Number(e)))return"";var a=r.invertColor,i=void 0!==a&&a;return Object(n.a)(t.createElement(o.a,{direction:e>0?"up":"down",invertColor:i}))}}).call(this,r(2))},99:function(t,e,r){"use strict";(function(t){r.d(e,"a",(function(){return l}));var n=r(6),o=r.n(n),a=r(100),i=r(101);function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){o()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var s={isFirstAdmin:!1,trackingEnabled:!1,trackingID:"",referenceSiteURL:"",userIDHash:""};function l(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t,o=u(u({},s),e);return o.referenceSiteURL&&(o.referenceSiteURL=o.referenceSiteURL.toString().replace(/\/+$/,"")),{enableTracking:Object(a.a)(o,r),disableTracking:function(){o.trackingEnabled=!1},isTrackingEnabled:function(){return!!o.trackingEnabled},trackEvent:Object(i.a)(o,r,n)}}}).call(this,r(19))}},[[891,1,0]]]);