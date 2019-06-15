!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=217)}({102:function(e,t,r){"use strict";angular.module("w69b.timeutil",[]).factory("timeutil",function(){var e={formatDuration:function(e){function t(e){return e<10?"0"+e:e}angular.isNumber(e)||(e=0);var r="";e<0&&(r="-",e=.99-e);var n=Math.floor(e%60),o=[t(Math.floor(e/60%60)),t(n)],i=Math.floor(e/3600);return i&&o.unshift(i),r+o.join(":")}};return e}).filter("duration",["timeutil",function(e){return function(t){return e.formatDuration(t||0)}}])},144:function(e,t,r){"use strict";angular.module("castifyExt.recorder",["castifyExt.backgroundTool","castifyExt.optionalPermissions","w69b.spawn"]).factory("recorder",["backgroundTool","optionalPermissions","spawn","$q",function(e,t,r,n){var o=e.portHelper("recorder",!1),i=n.defer(),a={info:{}};a.connectedPromise=i.promise;var c={stateUpdate:function(e){angular.copy(e,a.info),i&&(i.resolve(),i=null)}};return o.installHandlers(c),a.getState=function(){return a.connectedPromise.then(function(){return a.info})},a.start=r.wrap(function*(e){if("tab"===e.captureSource&&!(yield t.requestTabPermissions(e)))return n.reject("tab_permissions");return o.postMessage("start",e)}),a.stop=function(){o.postMessage("stop")},a.restart=function(){o.postMessage("restart")},a.pause=function(){o.postMessage("pause")},a.resume=function(){o.postMessage("resume")},a.replaceStream=function(e){o.postMessage("replaceStream",e)},a.cancelPendingStart=function(){o.postMessage("cancelPendingStart")},a.showPreview=function(e){o.postMessage("showPreview",e)},a.setAutoStop=function(e){o.postMessage("setAutoStop",e)},o.getPort(),a}])},217:function(e,t,r){"use strict";r.r(t);r(25),r(26),r(38),r(102),r(66),r(27),r(144),r(46),r(86),r(218),r(87),r(58);angular.module("castifyExt.LivePreviewApp",["castifyExt.ui.livepreview","castifyExt.ui.themeConfig"]).config(["$sceDelegateProvider",function(e){e.resourceUrlWhitelist(["self","http://localhost:9008/**","blob:**","filesystem:chrome-extension://**"])}])},218:function(e,t,r){"use strict";
/*!
 * Copyright 2018 Screencastify LLC
 */var n=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))(function(o,i){function a(e){try{u(n.next(e))}catch(e){i(e)}}function c(e){try{u(n.throw(e))}catch(e){i(e)}}function u(e){e.done?o(e.value):new r(function(t){t(e.value)}).then(a,c)}u((n=n.apply(e,t||[])).next())})},o=this&&this.__generator||function(e,t){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}};Object.defineProperty(t,"__esModule",{value:!0}),r(39),angular.module("castifyExt.ui.livepreview",["w69b.promiseTool","w69b.timeutil","castifyExt.recorder","castifyExt.ui.loadingOverlay","ngMaterial","w69b.webrtc","templates"]).directive("cfLivePreviewCanvas",["recorder","webrtc","spawn",function(e,t,r){return{restrict:"EA",templateUrl:"components/castifyExt/ui/livepreview/livePreviewCanvas.html",replace:!0,scope:{},link:function(r,i){var a,c=i.find("video").eq(0);c[0].volume=0,c.bind("canplay",function(){c.removeClass("ng-hide")}),a=r.$watch(function(){return e.info.config},function(e){e&&(a(),function(e){n(this,void 0,void 0,function(){var r;return o(this,function(n){switch(n.label){case 0:return r=c[0],[4,t.getUserMedia({video:{optional:[{sourceId:e.camSourceId}]}})];case 1:return r.srcObject=n.sent(),[2]}})})}(e))})}}}]).controller("LivePreviewCtrl",["$scope","recorder",function(e,t){e.recorder=t}])},25:function(e,t,r){"use strict";var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};angular.module("castifyExt.deployConfig",[]).provider("deployConfig",function(){let e=n({apiUrl:"https://api.screencastify.com/api",clientId:"242262968495-o42n5tqeo08dsa75p3j4dk1k61t05ln3.apps.googleusercontent.com",scopes:chrome.runtime.getManifest().oauth2.scopes,redirectUri:"https://www.screencastify.com/oauth2postback",editorOpenUri:"https://editor.screencastify.com/open/drive",notificationUri:"https://us-central1-castify-notifications-prod.cloudfunctions.net/api/userNotification/",uploadServiceURL:"https://ingress.screencastify.com/api/uploadService",exportServiceURL:"https://ingress.screencastify.com/api/exportService",firebase:{apiKey:"AIzaSyDraAcnfh7TewzYJS9yt8Togm6_VzB_RJE",authDomain:"castify-storage.firebaseapp.com",databaseURL:"wss://castify-storage.firebaseio.com",projectId:"castify-storage",storageBucket:"castify-storage.appspot.com",messagingSenderId:"37637381719"}},{enableInlinePopupSupport:!1});return n({},e,{$get:function(){return e}})})},26:function(e,t,r){"use strict";angular.module("w69b.promiseTool",[]).factory("promiseTool",["$q","$timeout",function(e,t){var r={wrapChromeError:function(t,r){return function(){var n=Array.prototype.slice.call(arguments,0),o=e.defer();return n.push(function(e){chrome.runtime.lastError?o.reject(chrome.runtime.lastError):o.resolve(e)}),t.apply(r,n),o.promise}},wrapCallbacks:function(t,r){return function(){var n=Array.prototype.slice.call(arguments,0),o=e.defer();return n.push(o.resolve.bind(o)),n.push(o.reject.bind(o)),t.apply(r,n),o.promise}},serializer:function(){var t=null,r=function(r){var n=e.defer();return(t||e.when()).then(function(){(r.call()||e.when()).then(e=>n.resolve(e),e=>n.reject(e))}),(t=n.promise.catch(()=>null)).then(function(){t=null}),n.promise};return r.wrap=function(e){return function(){return r(e.bind(this,...arguments))}},r},withTimeout:function(r,n,o){o||(o=angular.noop);var i=e.defer(),a=t(function(){var e=o();angular.isDefined(e)?i.resolve(e):i.reject("timeout"),i=null},n);function c(){t.cancel(a),a=null}return r().then(function(){c(),i&&i.resolve.apply(i,arguments)},function(){c(),i&&i.reject.apply(i,arguments)}),i.promise}};return r}])},27:function(e,t,r){"use strict";angular.module("w69b.spawn",[]).factory("spawn",["$q",function(e){function t(t,r){var n=r?Promise.reject.bind(Promise):e.reject.bind(e),o=r?Promise.resolve.bind(Promise):e.when.bind(e);function i(e,t){var r;try{r=e(t)}catch(e){return n(e)}return r.done?o(r.value):o(r.value).then(c,u)}var a=t(),c=i.bind(null,a.next.bind(a)),u=i.bind(null,a.throw.bind(a));return c()}return t.wrap=function(e){return function(){var r=arguments;return t(e.bind(this,...r))}},t}])},38:function(e,t,r){"use strict";angular.module("w69b.chromeRuntime",["w69b.promiseTool"]).factory("chromeRuntime",["promiseTool",function(e){var t={};return t.sendMessage=e.wrapChromeError(chrome.runtime.sendMessage,chrome.runtime),t.getBackgroundPage=e.wrapChromeError(chrome.runtime.getBackgroundPage,chrome.runtime),t.connect=chrome.runtime.connect.bind(chrome.runtime),t.getManifest=chrome.runtime.getManifest.bind(chrome.runtime),t.id=chrome.runtime.id,chrome.runtime.getPlatformInfo&&(t.getPlatformInfo=e.wrapChromeError(chrome.runtime.getPlatformInfo,chrome.runtime)),t.setUninstallURL=e.wrapChromeError(chrome.runtime.setUninstallURL,chrome.runtime),["onMessage","onMessageExternal","onConnect","onConnectExternal","onInstalled","onSuspend"].forEach(function(e){t[e]={addListener:function(t){chrome.runtime[e].addListener(t)},removeListener:function(t){chrome.runtime[e].removeListener(t)}}}),t}])},39:function(e,t,r){"use strict";angular.module("w69b.webrtc",["w69b.promiseTool","w69b.spawn"]).factory("webrtc",["promiseTool","$window","$q","spawn",function(e,t,r,n){var o={},i=t.navigator;function a(e){return e.some(function(e){return!!e.label})}return o.getUserMedia=e.wrapCallbacks(i.getUserMedia||i.webkitGetUserMedia||i.mozGetUserMedia||i.msGetUserMedia,i),i.mediaDevices&&i.mediaDevices.enumerateDevices?o.getSources=function(){return r.when(i.mediaDevices.enumerateDevices()).then(function(e){return e.filter(function(e){return e.kind.endsWith("input")}).map(function(e){var t={id:e.deviceId,label:e.label};return t.kind=e.kind.substring(0,e.kind.length-5),t})})}:o.getSources=e.wrapCallbacks(MediaStreamTrack.getSources,MediaStreamTrack),o.getSourcesByKind=function(e){return o.getSources().then(function(t){return t.filter(function(t){return t.kind===e})})},o.getVideoSources=function(){return o.getSourcesByKind("video")},o.getAudioSources=function(){return o.getSourcesByKind("audio")},o.hasCamera=function(){return o.getVideoSources().then(function(e){return e.length>0})},o.hasMicrophone=function(){return o.getAudioSources().then(function(e){return e.length>0})},o.hasVideoAccess=function(){return o.getVideoSources().then(a)},o.hasAudioAccess=function(){return o.getAudioSources().then(a)},o.getCameraAndMicPermission=n.wrap(function*(){let e=yield o.hasCamera(),t=!1,r=!1;try{let n=yield o.getUserMedia({audio:!0,video:e});r=!!n.getVideoTracks().length,t=!!n.getAudioTracks().length,n.getTracks().forEach(function(e){e.stop()})}catch(e){}return{video:r,audio:t}}),o}])},46:function(e,t,r){"use strict";angular.module("castifyExt.backgroundTool",["w69b.chromeRuntime"]).factory("backgroundTool",["chromeRuntime","$q","$rootScope",function(e,t,r){var n;function o(){var r=t.defer();return e.onMessage.addListener(function t(n){"bg:loaded"===n&&(e.onMessage.removeListener(t),r.resolve())}),e.sendMessage("bg:load").catch(angular.identity),r.promise}var i={portHelper:function(n,i){var a,c={getPort:function(){return(!1===i?t.when():o()).then(function(){return a||(a=e.connect({name:n})),a})},postMessage:function(e,t){return c.getPort().then(function(r){return r.postMessage({type:e,data:t})})},installHandlers:function(e){function t(t){e.hasOwnProperty(t.type)&&e[t.type](t.data),r.$$phase||r.$apply()}return c.getPort().then(function(e){e.onMessage.addListener(t)}),function(){c.getPort().then(function(e){e.onMessage.removeListener(t)})}}};return c},loadBackground:function(){return n||(n=o()),n}};return i}])},58:function(e,t,r){"use strict";angular.module("castifyExt.optionalPermissions",["w69b.chromePermissions","castifyExt.deployConfig"]).factory("optionalPermissions",["chromePermissions","deployConfig",function(e,t){var r={},n={permissions:["tabCapture","webNavigation"],origins:["<all_urls>"]},o={permissions:["tabCapture","webNavigation"],origins:[]};function i(e){return e&&(!e.draw||e.draw&&!e.draw.showToolbox)?o:n}return t.enableInlinePopupSupport||(n.permissions.push("activeTab"),o.permissions.push("activeTab")),r.hasLiteTabPermissions=function(){return e.contains(o)},r.hasTabPermissions=function(t){let r=i(t);return e.contains({permissions:r.permissions})},r.requestTabPermissions=function(t){return e.request(i(t))},r}])},66:function(e,t,r){"use strict";angular.module("w69b.chromePermissions",["w69b.promiseTool"]).factory("chromePermissions",["promiseTool",function(e){var t=window.chrome&&window.chrome.permissions,r={};return t?(r.contains=e.wrapChromeError(t.contains,t),r.request=e.wrapChromeError(t.request,t),r.remove=e.wrapChromeError(t.remove,t),r.getAll=e.wrapChromeError(t.getAll,t),r):r}])},86:function(e,t,r){"use strict";angular.module("castifyExt.ui.themeConfig",["ngMaterial"]).config(["$mdThemingProvider",function(e){e.definePalette("castify",{50:"f5f5f5",100:"555555",200:"ef9a9a",300:"e57373",400:"ef5350",500:"ff8282",600:"e53935",700:"d32f2f",800:"c62828",900:"b71c1c",A100:"fd8c00",A200:"ff8282",A400:"00aaff",A700:"d50000"}),e.theme("default").primaryPalette("castify",{default:"500","hue-1":"A100","hue-2":"A200","hue-3":"A400"}).accentPalette("pink")}]).config(["$mdIconProvider",function(e){e.defaultIconSet("gen/icons.svg")}])},87:function(e,t,r){"use strict";angular.module("castifyExt.ui.loadingOverlay",[]).directive("cfLoadingBackdrop",function(){return{restrict:"E",template:'<md-progress-circular md-mode="indeterminate"></md-progress-circular>'}}).directive("cfLoadingOverlay",["$compile",function(e){return{restrict:"A",link:function(t,r,n){var o=null;t.$watch(n.cfLoadingOverlay,function(n){n?(o=e("<cf-loading-backdrop></cf-loading-backdrop>")(t),r.append(o)):o&&(o.remove(),o=null)})}}}])}});