var $jscomp={scope:{},getGlobal:function(a){return"undefined"!=typeof window&&window===a?a:"undefined"!=typeof global?global:a}};$jscomp.global=$jscomp.getGlobal(this);$jscomp.initSymbol=function(){$jscomp.global.Symbol||($jscomp.global.Symbol=$jscomp.Symbol);$jscomp.initSymbol=function(){}};$jscomp.symbolCounter_=0;$jscomp.Symbol=function(a){return"jscomp_symbol_"+a+$jscomp.symbolCounter_++};
$jscomp.initSymbolIterator=function(){$jscomp.initSymbol();$jscomp.global.Symbol.iterator||($jscomp.global.Symbol.iterator=$jscomp.global.Symbol("iterator"));$jscomp.initSymbolIterator=function(){}};
$jscomp.makeIterator=function(a){$jscomp.initSymbolIterator();if(a[$jscomp.global.Symbol.iterator])return a[$jscomp.global.Symbol.iterator]();if(!(a instanceof Array||"string"==typeof a||a instanceof String))throw new TypeError(a+" is not iterable");var b=0;return{next:function(){return b==a.length?{done:!0}:{done:!1,value:a[b++]}}}};$jscomp.arrayFromIterator=function(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c};
$jscomp.arrayFromIterable=function(a){return a instanceof Array?a:$jscomp.arrayFromIterator($jscomp.makeIterator(a))};$jscomp.arrayFromArguments=function(a){for(var b=[],c=0;c<a.length;c++)b.push(a[c]);return b};$jscomp.inherits=function(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a;for(var d in b)if($jscomp.global.Object.defineProperties){var e=$jscomp.global.Object.getOwnPropertyDescriptor(b,d);$jscomp.global.Object.defineProperty(a,d,e)}else a[d]=b[d]};
$jscomp.array=$jscomp.array||{};$jscomp.array.done_=function(){return{done:!0,value:void 0}};$jscomp.array.arrayIterator_=function(a,b){a instanceof String&&(a=String(a));var c=0;$jscomp.initSymbol();$jscomp.initSymbolIterator();var d={},e=(d.next=function(){if(c<a.length){var d=c++;return{value:b(d,a[d]),done:!1}}e.next=$jscomp.array.done_;return $jscomp.array.done_()},d[Symbol.iterator]=function(){return e},d);return e};
$jscomp.array.findInternal_=function(a,b,c){a instanceof String&&(a=String(a));for(var d=a.length,e=0;e<d;e++){var g=a[e];if(b.call(c,g,e,a))return{i:e,v:g}}return{i:-1,v:void 0}};
$jscomp.array.from=function(a,b,c){b=void 0===b?function(a){return a}:b;var d=[];$jscomp.initSymbol();$jscomp.initSymbolIterator();if(a[Symbol.iterator]){$jscomp.initSymbol();$jscomp.initSymbolIterator();a=a[Symbol.iterator]();for(var e;!(e=a.next()).done;)d.push(b.call(c,e.value))}else{e=a.length;for(var g=0;g<e;g++)d.push(b.call(c,a[g]))}return d};$jscomp.array.of=function(a){for(var b=[],c=0;c<arguments.length;++c)b[c-0]=arguments[c];return $jscomp.array.from(b)};
$jscomp.array.entries=function(){return $jscomp.array.arrayIterator_(this,function(a,b){return[a,b]})};$jscomp.array.entries$install=function(){Array.prototype.entries||(Array.prototype.entries=$jscomp.array.entries)};$jscomp.array.keys=function(){return $jscomp.array.arrayIterator_(this,function(a){return a})};$jscomp.array.keys$install=function(){Array.prototype.keys||(Array.prototype.keys=$jscomp.array.keys)};$jscomp.array.values=function(){return $jscomp.array.arrayIterator_(this,function(a,b){return b})};
$jscomp.array.values$install=function(){Array.prototype.values||(Array.prototype.values=$jscomp.array.values)};$jscomp.array.copyWithin=function(a,b,c){var d=this.length;a=Number(a);b=Number(b);c=Number(null!=c?c:d);if(a<b)for(c=Math.min(c,d);b<c;)b in this?this[a++]=this[b++]:(delete this[a++],b++);else for(c=Math.min(c,d+b-a),a+=c-b;c>b;)--c in this?this[--a]=this[c]:delete this[a];return this};$jscomp.array.copyWithin$install=function(){Array.prototype.copyWithin||(Array.prototype.copyWithin=$jscomp.array.copyWithin)};
$jscomp.array.fill=function(a,b,c){null!=c&&a.length||(c=this.length||0);c=Number(c);for(b=Number((void 0===b?0:b)||0);b<c;b++)this[b]=a;return this};$jscomp.array.fill$install=function(){Array.prototype.fill||(Array.prototype.fill=$jscomp.array.fill)};$jscomp.array.find=function(a,b){return $jscomp.array.findInternal_(this,a,b).v};$jscomp.array.find$install=function(){Array.prototype.find||(Array.prototype.find=$jscomp.array.find)};
$jscomp.array.findIndex=function(a,b){return $jscomp.array.findInternal_(this,a,b).i};$jscomp.array.findIndex$install=function(){Array.prototype.findIndex||(Array.prototype.findIndex=$jscomp.array.findIndex)};$jscomp.Map=function(a){a=void 0===a?[]:a;this.data_={};this.head_=$jscomp.Map.createHead_();this.size=0;if(a){a=$jscomp.makeIterator(a);for(var b=a.next();!b.done;b=a.next())b=b.value,this.set(b[0],b[1])}};
$jscomp.Map.checkBrowserConformance_=function(){var a=$jscomp.global.Map;if(!a||!a.prototype.entries||!Object.seal)return!1;try{var b=Object.seal({x:4}),c=new a($jscomp.makeIterator([[b,"s"]]));if("s"!=c.get(b)||1!=c.size||c.get({x:4})||c.set({x:4},"t")!=c||2!=c.size)return!1;var d=c.entries(),e=d.next();if(e.done||e.value[0]!=b||"s"!=e.value[1])return!1;e=d.next();return e.done||4!=e.value[0].x||"t"!=e.value[1]||!d.next().done?!1:!0}catch(g){return!1}};
$jscomp.Map.createHead_=function(){var a={};return a.previous=a.next=a.head=a};$jscomp.Map.getId_=function(a){if(!(a instanceof Object))return String(a);$jscomp.Map.key_ in a||a instanceof Object&&Object.isExtensible&&Object.isExtensible(a)&&$jscomp.Map.defineProperty_(a,$jscomp.Map.key_,++$jscomp.Map.index_);return $jscomp.Map.key_ in a?a[$jscomp.Map.key_]:" "+a};
$jscomp.Map.prototype.set=function(a,b){var c=this.maybeGetEntry_(a),d=c.id,e=c.list,c=c.entry;e||(e=this.data_[d]=[]);c?c.value=b:(c={next:this.head_,previous:this.head_.previous,head:this.head_,key:a,value:b},e.push(c),this.head_.previous.next=c,this.head_.previous=c,this.size++);return this};
$jscomp.Map.prototype["delete"]=function(a){var b=this.maybeGetEntry_(a);a=b.id;var c=b.list,d=b.index;return(b=b.entry)&&c?(c.splice(d,1),c.length||delete this.data_[a],b.previous.next=b.next,b.next.previous=b.previous,b.head=null,this.size--,!0):!1};$jscomp.Map.prototype.clear=function(){this.data_={};this.head_=this.head_.previous=$jscomp.Map.createHead_();this.size=0};$jscomp.Map.prototype.has=function(a){return!!this.maybeGetEntry_(a).entry};
$jscomp.Map.prototype.get=function(a){return(a=this.maybeGetEntry_(a).entry)&&a.value};$jscomp.Map.prototype.maybeGetEntry_=function(a){var b=$jscomp.Map.getId_(a),c=this.data_[b];if(c)for(var d=0;d<c.length;d++){var e=c[d];if(a!==a&&e.key!==e.key||a===e.key)return{id:b,list:c,index:d,entry:e}}return{id:b,list:c,index:-1,entry:void 0}};$jscomp.Map.prototype.entries=function(){return this.iter_(function(a){return[a.key,a.value]})};$jscomp.Map.prototype.keys=function(){return this.iter_(function(a){return a.key})};
$jscomp.Map.prototype.values=function(){return this.iter_(function(a){return a.value})};$jscomp.Map.prototype.forEach=function(a,b){for(var c=$jscomp.makeIterator(this.entries()),d=c.next();!d.done;d=c.next())d=d.value,a.call(b,d[1],d[0],this)};
$jscomp.Map.prototype.iter_=function(a){var b=this,c=this.head_;$jscomp.initSymbol();$jscomp.initSymbolIterator();var d={};return d.next=function(){if(c){for(;c.head!=b.head_;)c=c.previous;for(;c.next!=c.head;)return c=c.next,{done:!1,value:a(c)};c=null}return{done:!0,value:void 0}},d[Symbol.iterator]=function(){return this},d};$jscomp.Map.index_=0;$jscomp.Map.defineProperty_=Object.defineProperty?function(a,b,c){Object.defineProperty(a,b,{value:String(c)})}:function(a,b,c){a[b]=String(c)};
$jscomp.Map.Entry_=function(){};$jscomp.Map.ASSUME_NO_NATIVE=!1;$jscomp.Map$install=function(){$jscomp.initSymbol();$jscomp.initSymbolIterator();!$jscomp.Map.ASSUME_NO_NATIVE&&$jscomp.Map.checkBrowserConformance_()?$jscomp.Map=$jscomp.global.Map:($jscomp.initSymbol(),$jscomp.initSymbolIterator(),$jscomp.Map.prototype[Symbol.iterator]=$jscomp.Map.prototype.entries,$jscomp.initSymbol(),$jscomp.Map.key_=Symbol("map-id-key"));$jscomp.Map$install=function(){}};$jscomp.math=$jscomp.math||{};
$jscomp.math.clz32=function(a){a=Number(a)>>>0;if(0===a)return 32;var b=0;0===(a&4294901760)&&(a<<=16,b+=16);0===(a&4278190080)&&(a<<=8,b+=8);0===(a&4026531840)&&(a<<=4,b+=4);0===(a&3221225472)&&(a<<=2,b+=2);0===(a&2147483648)&&b++;return b};$jscomp.math.imul=function(a,b){a=Number(a);b=Number(b);var c=a&65535,d=b&65535;return c*d+((a>>>16&65535)*d+c*(b>>>16&65535)<<16>>>0)|0};$jscomp.math.sign=function(a){a=Number(a);return 0===a||isNaN(a)?a:0<a?1:-1};
$jscomp.math.log10=function(a){return Math.log(a)/Math.LN10};$jscomp.math.log2=function(a){return Math.log(a)/Math.LN2};$jscomp.math.log1p=function(a){a=Number(a);if(.25>a&&-.25<a){for(var b=a,c=1,d=a,e=0,g=1;e!=d;)b*=a,g*=-1,d=(e=d)+g*b/++c;return d}return Math.log(1+a)};$jscomp.math.expm1=function(a){a=Number(a);if(.25>a&&-.25<a){for(var b=a,c=1,d=a,e=0;e!=d;)b*=a/++c,d=(e=d)+b;return d}return Math.exp(a)-1};$jscomp.math.cosh=function(a){a=Number(a);return(Math.exp(a)+Math.exp(-a))/2};
$jscomp.math.sinh=function(a){a=Number(a);return 0===a?a:(Math.exp(a)-Math.exp(-a))/2};$jscomp.math.tanh=function(a){a=Number(a);if(0===a)return a;var b=Math.exp(2*-Math.abs(a)),b=(1-b)/(1+b);return 0>a?-b:b};$jscomp.math.acosh=function(a){a=Number(a);return Math.log(a+Math.sqrt(a*a-1))};$jscomp.math.asinh=function(a){a=Number(a);if(0===a)return a;var b=Math.log(Math.abs(a)+Math.sqrt(a*a+1));return 0>a?-b:b};
$jscomp.math.atanh=function(a){a=Number(a);return($jscomp.math.log1p(a)-$jscomp.math.log1p(-a))/2};
$jscomp.math.hypot=function(a,b,c){for(var d=[],e=2;e<arguments.length;++e)d[e-2]=arguments[e];a=Number(a);b=Number(b);for(var g=Math.max(Math.abs(a),Math.abs(b)),f=$jscomp.makeIterator(d),e=f.next();!e.done;e=f.next())g=Math.max(g,Math.abs(e.value));if(1E100<g||1E-100>g){a/=g;b/=g;f=a*a+b*b;d=$jscomp.makeIterator(d);for(e=d.next();!e.done;e=d.next())e=e.value,e=Number(e)/g,f+=e*e;return Math.sqrt(f)*g}g=a*a+b*b;d=$jscomp.makeIterator(d);for(e=d.next();!e.done;e=d.next())e=e.value,g+=e*e;return Math.sqrt(g)};
$jscomp.math.trunc=function(a){a=Number(a);if(isNaN(a)||Infinity===a||-Infinity===a||0===a)return a;var b=Math.floor(Math.abs(a));return 0>a?-b:b};$jscomp.math.cbrt=function(a){if(0===a)return a;a=Number(a);var b=Math.pow(Math.abs(a),1/3);return 0>a?-b:b};$jscomp.number=$jscomp.number||{};$jscomp.number.isFinite=function(a){return"number"!==typeof a?!1:!isNaN(a)&&Infinity!==a&&-Infinity!==a};$jscomp.number.isInteger=function(a){return $jscomp.number.isFinite(a)?a===Math.floor(a):!1};
$jscomp.number.isNaN=function(a){return"number"===typeof a&&isNaN(a)};$jscomp.number.isSafeInteger=function(a){return $jscomp.number.isInteger(a)&&Math.abs(a)<=$jscomp.number.MAX_SAFE_INTEGER};$jscomp.number.EPSILON=Math.pow(2,-52);$jscomp.number.MAX_SAFE_INTEGER=9007199254740991;$jscomp.number.MIN_SAFE_INTEGER=-9007199254740991;$jscomp.object=$jscomp.object||{};
$jscomp.object.assign=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];c=$jscomp.makeIterator(c);for(d=c.next();!d.done;d=c.next()){var d=d.value,e;for(e in d)Object.prototype.hasOwnProperty.call(d,e)&&(a[e]=d[e])}return a};$jscomp.object.is=function(a,b){return a===b?0!==a||1/a===1/b:a!==a&&b!==b};$jscomp.Set=function(a){a=void 0===a?[]:a;this.map_=new $jscomp.Map;if(a){a=$jscomp.makeIterator(a);for(var b=a.next();!b.done;b=a.next())this.add(b.value)}this.size=this.map_.size};
$jscomp.Set.checkBrowserConformance_=function(){var a=$jscomp.global.Set;if(!a||!a.prototype.entries||!Object.seal)return!1;var b=Object.seal({x:4}),a=new a($jscomp.makeIterator([b]));if(a.has(b)||1!=a.size||a.add(b)!=a||1!=a.size||a.add({x:4})!=a||2!=a.size)return!1;var a=a.entries(),c=a.next();if(c.done||c.value[0]!=b||c.value[1]!=b)return!1;c=a.next();return c.done||c.value[0]==b||4!=c.value[0].x||c.value[1]!=c.value[0]?!1:a.next().done};
$jscomp.Set.prototype.add=function(a){this.map_.set(a,a);this.size=this.map_.size;return this};$jscomp.Set.prototype["delete"]=function(a){a=this.map_["delete"](a);this.size=this.map_.size;return a};$jscomp.Set.prototype.clear=function(){this.map_.clear();this.size=0};$jscomp.Set.prototype.has=function(a){return this.map_.has(a)};$jscomp.Set.prototype.entries=function(){return this.map_.entries()};$jscomp.Set.prototype.values=function(){return this.map_.values()};
$jscomp.Set.prototype.forEach=function(a,b){var c=this;this.map_.forEach(function(d){return a.call(b,d,d,c)})};$jscomp.Set.ASSUME_NO_NATIVE=!1;$jscomp.Set$install=function(){!$jscomp.Set.ASSUME_NO_NATIVE&&$jscomp.Set.checkBrowserConformance_()?$jscomp.Set=$jscomp.global.Set:($jscomp.Map$install(),$jscomp.initSymbol(),$jscomp.initSymbolIterator(),$jscomp.Set.prototype[Symbol.iterator]=$jscomp.Set.prototype.values);$jscomp.Set$install=function(){}};$jscomp.string=$jscomp.string||{};
$jscomp.string.noRegExp_=function(a,b){if(a instanceof RegExp)throw new TypeError("First argument to String.prototype."+b+" must not be a regular expression");};
$jscomp.string.fromCodePoint=function(a){for(var b=[],c=0;c<arguments.length;++c)b[c-0]=arguments[c];for(var c="",b=$jscomp.makeIterator(b),d=b.next();!d.done;d=b.next()){d=d.value;d=+d;if(0>d||1114111<d||d!==Math.floor(d))throw new RangeError("invalid_code_point "+d);65535>=d?c+=String.fromCharCode(d):(d-=65536,c+=String.fromCharCode(d>>>10&1023|55296),c+=String.fromCharCode(d&1023|56320))}return c};
$jscomp.string.repeat=function(a){var b=this.toString();if(0>a||1342177279<a)throw new RangeError("Invalid count value");a|=0;for(var c="";a;)if(a&1&&(c+=b),a>>>=1)b+=b;return c};$jscomp.string.repeat$install=function(){String.prototype.repeat||(String.prototype.repeat=$jscomp.string.repeat)};
$jscomp.string.codePointAt=function(a){var b=this.toString(),c=b.length;a=Number(a)||0;if(0<=a&&a<c){a|=0;var d=b.charCodeAt(a);if(55296>d||56319<d||a+1===c)return d;a=b.charCodeAt(a+1);return 56320>a||57343<a?d:1024*(d-55296)+a+9216}};$jscomp.string.codePointAt$install=function(){String.prototype.codePointAt||(String.prototype.codePointAt=$jscomp.string.codePointAt)};
$jscomp.string.includes=function(a,b){b=void 0===b?0:b;$jscomp.string.noRegExp_(a,"includes");return-1!==this.toString().indexOf(a,b)};$jscomp.string.includes$install=function(){String.prototype.includes||(String.prototype.includes=$jscomp.string.includes)};
$jscomp.string.startsWith=function(a,b){b=void 0===b?0:b;$jscomp.string.noRegExp_(a,"startsWith");var c=this.toString();a+="";for(var d=c.length,e=a.length,g=Math.max(0,Math.min(b|0,c.length)),f=0;f<e&&g<d;)if(c[g++]!=a[f++])return!1;return f>=e};$jscomp.string.startsWith$install=function(){String.prototype.startsWith||(String.prototype.startsWith=$jscomp.string.startsWith)};
$jscomp.string.endsWith=function(a,b){$jscomp.string.noRegExp_(a,"endsWith");var c=this.toString();a+="";void 0===b&&(b=c.length);for(var d=Math.max(0,Math.min(b|0,c.length)),e=a.length;0<e&&0<d;)if(c[--d]!=a[--e])return!1;return 0>=e};$jscomp.string.endsWith$install=function(){String.prototype.endsWith||(String.prototype.endsWith=$jscomp.string.endsWith)};
(function(){if(window._castifyDrawInjected)return!1;for(var a=document.querySelectorAll("[id]"),b=0;b<a.length;++b){var c=a[b].id;window[c]instanceof Element&&(window[c]=void 0)}window._castifyDrawInjected=!0;(function(){(function(a){function b(a,e,c,d){if("string"!=typeof a)throw"System.register provided no module name";e="boolean"==typeof c?{declarative:!1,deps:e,execute:d,executingRequire:c}:{declarative:!0,deps:e,declare:c};e.name=a;a in m||(m[a]=e);a=e.deps;c=[];d=0;for(var g=a.length;d<g;d++)-1==
n.call(c,a[d])&&c.push(a[d]);e.deps=c;e.normalizedDeps=e.deps}function c(a,b){b[a.groupIndex]=b[a.groupIndex]||[];if(-1==n.call(b[a.groupIndex],a)){b[a.groupIndex].push(a);for(var e=0,d=a.normalizedDeps.length;e<d;e++){var f=m[a.normalizedDeps[e]];if(f&&!f.evaluated){var k=a.groupIndex+(f.declarative!=a.declarative);if(void 0===f.groupIndex||f.groupIndex<k){if(void 0!==f.groupIndex&&(b[f.groupIndex].splice(n.call(b[f.groupIndex],f),1),0==b[f.groupIndex].length))throw new TypeError("Mixed dependency cycle detected");
f.groupIndex=k}c(f,b)}}}}function f(a){return k[a]||(k[a]={name:a,dependencies:[],exports:{},importers:[]})}function z(b){if(!b.module){var e=b.module=f(b.name),c=b.module.exports,g=b.declare.call(a,function(a,b){e.locked=!0;c[a]=b;for(var d=0,g=e.importers.length;d<g;d++){var f=e.importers[d];if(!f.locked){var u=n.call(f.dependencies,e);f.setters[u](c)}}e.locked=!1;return b});e.setters=g.setters;e.execute=g.execute;if(!e.setters||!e.execute)throw new TypeError("Invalid System.register form for "+
b.name);for(var g=0,q=b.normalizedDeps.length;g<q;g++){var t=b.normalizedDeps[g],r=m[t],h=k[t];h?t=h.exports:r&&!r.declarative?t=r.module.exports&&r.module.exports.__esModule?r.module.exports:{"default":r.module.exports,__useDefault:!0}:r?(z(r),h=r.module,t=h.exports):t=l(t);h&&h.importers?(h.importers.push(e),e.dependencies.push(h)):e.dependencies.push(null);if(e.setters[g])e.setters[g](t)}}}function p(b){if(!b.module){var e={},c=b.module={exports:e,id:b.name};if(!b.executingRequire)for(var g=0,
f=b.normalizedDeps.length;g<f;g++){var n=m[b.normalizedDeps[g]];n&&p(n)}b.evaluated=!0;if(e=b.execute.call(a,function(a){for(var e=0,c=b.deps.length;e<c;e++)if(b.deps[e]==a){a=b.normalizedDeps[e];e=void 0;if(c=m[a])c.declarative?h(a,[]):c.evaluated||p(c),e=c.module.exports;else if(e=l(a),!e)throw Error("Unable to load dependency "+a+".");a=(!c||c.declarative)&&e&&e.__useDefault?e["default"]:e;return a}throw new TypeError("Module "+a+" not declared as a dependency.");},e,c))c.exports=e}}function h(b,
e){var c=m[b];if(c&&!c.evaluated&&c.declarative){e.push(b);for(var g=0,f=c.normalizedDeps.length;g<f;g++){var k=c.normalizedDeps[g];-1==n.call(e,k)&&(m[k]?h(k,e):l(k))}c.evaluated||(c.evaluated=!0,c.module.execute.call(a))}}function l(a){if(q[a])return q[a];var b=m[a];if(!b)throw"Module "+a+" not present.";var e=m[a];e.groupIndex=0;var d=[];c(e,d);for(var e=!!e.declarative==d.length%2,f=d.length-1;0<=f;f--){for(var n=d[f],k=0;k<n.length;k++){var l=n[k];e?z(l):p(l)}e=!e}h(a,[]);m[a]=void 0;d=b.module.exports;
if(!d||!b.declarative&&!0!==d.__esModule)d={"default":d,__useDefault:!0};return q[a]=d}var m={},n=Array.prototype.indexOf||function(a){for(var b=0,e=this.length;b<e;b++)if(this[b]===a)return b;return-1},k={},q={};return function(c,g){var f;f={register:b,get:l,set:function(a,b){q[a]=b},newModule:function(a){return a},global:a};f.set("@empty",{});g(f);for(f=0;f<c.length;f++)l(c[f])}})("undefined"!=typeof window?window:global)(["content-script-frame"],function(a){a.register("images/pencil-cursor.tpl.svg!text",
[],!0,function(b,c,f){b=a.global;c=b.define;b.define=void 0;f.exports='<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" stroke="#000" fill="#fff" stroke-width="1.5"/><path fill="{{color}}" stroke="#000" d="M15.34 15.34h6.412v6.41h-6.41z"/></svg>';b.define=c;return f.exports});a.register("images/pointer-cursor.svg!text",
[],!0,function(b,c,f){b=a.global;c=b.define;b.define=void 0;f.exports='<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 18 24" width="18"><g fill="#fff" fill-rule="evenodd"><path d="M0 14.94V0l10.812 10.838H4.487l-.384.116z"/><path d="M8.474 15.568L5.111 17 .744 6.656l3.438-1.449z"/></g><g fill="#000023" fill-rule="evenodd"><path d="M7.23 14.933l-1.72.722-2.892-6.878 1.718-.723z"/><path d="M.933 2.245v10.437l2.77-2.674.399-.13h4.447z"/></g></svg>';b.define=c;return f.exports});a.register("images/hand-cursor.svg!text",
[],!0,function(b,c,f){b=a.global;c=b.define;b.define=void 0;f.exports='<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M9.444 17.57h6.817s2.844-6.964 2.452-7.797c-.392-.834-2.06-1.128-2.06-.442 0 .687 0 1.515-.098 1.324-.147-.245.098-2.403-.147-2.746-.343-.392-1.57-.343-1.765.05-.197.391-.3 1.825-.49 1.617-.14-.121-.08-1.726-.197-2.354-.637-.392-1.854-.397-2.354-.147-.333.167-.15 2.498-.358 2.55-.034.07.26-6.816-.427-7.16-.686-.343-2.353.197-2.353.49 0 .295.539 7.357.392 7.75-.49-.05-1.717-2.11-2.354-2.306-.638-.196-2.01.932-2.01 1.472 0 .54 2.598 3.236 2.647 3.727.05.49 2.06 3.972 2.305 3.972z" fill="#fff" fill-rule="evenodd" stroke="#000" stroke-width=".772" stroke-linecap="round" stroke-miterlimit="0"/></svg>';
b.define=c;return f.exports});a.register("images/text-cursor.svg!text",[],!0,function(b,c,f){b=a.global;c=b.define;b.define=void 0;f.exports='<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><g stroke="#000" stroke-width="3"><path d="M17.441 1.712c-.303 0-5.665-.785-5.665 3.355v8.08M6.316 1.712c.304 0 5.46-.785 5.46 3.355v8.08m-5.46 9.15c.304 0 5.46.784 5.46-3.356v-5.789m5.665 9.144c-.303 0-5.665.785-5.665-3.355v-5.794" fill="none" transform="matrix(.99986 0 0 -1.01336 -.274 24.164)"/></g><g stroke="#fff"><path d="M16.254 1.712c-.303 0-4.478-.785-4.478 3.355v8.08M7.254 1.712c.304 0 4.522-.785 4.522 3.355v8.08m-4.522 9.15c.304 0 4.522.784 4.522-3.356v-5.794m4.478 9.15c-.303 0-4.478.784-4.478-3.356v-5.794" fill="none" transform="matrix(.99986 0 0 -1.01336 -.274 24.164)"/></g></svg>';
b.define=c;return f.exports});a.register("images/move-cursor.svg!text",[],!0,function(b,c,f){b=a.global;c=b.define;b.define=void 0;f.exports='<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M14.816 7.303c.354-.354 1.884 0 1.884 0v1.916h-1.884s-.354-1.562 0-1.916zm1.884 9.429h-1.884v-1.916H16.7zM9.186 9.219H7.3V7.303h1.885zm0 7.513H7.3v-1.916h1.885zM12 0L0 12.003l7.848 7.845L12.001 24 24 12.002z" fill="#fff" fill-rule="evenodd"/><path d="M21.87 11.997l-3.843-4.22v2.875H5.988V7.776l-3.864 4.221 3.866 4.22-.002-2.844h12.039l-.002 2.844z" fill-rule="evenodd"/><path d="M13.358 12.002h.02V5.989l2.842.002L12 2.128 7.78 5.989h2.845v6.012h.012v6.014l-2.874-.001 4.219 3.872 4.215-3.871h-2.84z" fill-rule="evenodd"/></svg>';
b.define=c;return f.exports});a.register("images/nwse-resize-cursor.svg!text",[],!0,function(b,c,f){b=a.global;c=b.define;b.define=void 0;f.exports='<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M9.33 11.574l7.021 7.018-2.9 2.9 8.02-.025.022-8.018-2.921 2.92-7.023-7.015-3.924-3.926 2.924-2.924H2.504v8.045l2.902-2.9 3.924 3.925z" fill-rule="evenodd" stroke="#fff" stroke-width="1.007"/></svg>';b.define=c;return f.exports});a.register("images/nesw-resize-cursor.svg!text",
[],!0,function(b,c,f){b=a.global;c=b.define;b.define=void 0;f.exports='<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M14.67 11.574L7.65 18.592l2.9 2.9-8.02-.025-.022-8.018 2.921 2.92 7.023-7.015 3.924-3.926-2.924-2.924h8.045v8.045l-2.902-2.9-3.924 3.925z" fill-rule="evenodd" stroke="#fff" stroke-width="1.007"/></svg>';b.define=c;return f.exports});a.register("images/none-cursor-win.svg!text",[],!0,function(b,c,f){b=a.global;c=b.define;b.define=void 0;
f.exports='<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path fill="#fff" fill-opacity=".506" d="M0 0h.5v.5H0z"/></svg>';b.define=c;return f.exports});a.register("images/none-cursor.svg!text",[],!0,function(b,c,f){b=a.global;c=b.define;b.define=void 0;f.exports='<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"/>';b.define=c;return f.exports});a.register("cursor-hack.css.tpl!text",[],!0,function(b,c,f){b=a.global;c=b.define;b.define=
void 0;f.exports='html * {\n  cursor: {{default}} !important;\n}\nhtml /deep/ * {\n  cursor: inherit !important;\n}\n\nhtml /deep/ input,\nhtml /deep/ textarea {\n cursor: {{text}} !important;\n}\n\nhtml,\nhtml /deep/ input[type="button" i],\nhtml /deep/ input[type="submit" i],\nhtml /deep/ input[type="reset" i],\nhtml /deep/ input[type="file" i]::-webkit-file-upload-button,\nhtml /deep/ button,\nhtml /deep/ select,\nhtml /deep/ label,\nhtml /deep/ input::-webkit-inner-spin-button {\n  cursor: {{default}} !important;\n}\n\nhtml /deep/ a:-webkit-any-link,\nhtml /deep/ a:-webkit-any-link *,\nhtml /deep/ area {\n cursor: {{pointer}} !important;\n}\n';
b.define=c;return f.exports});a.register("platform",[],function(a){var b;return{setters:[],execute:function(){b=window.navigator.userAgent.includes("Macintosh");a("default",{IS_MAC:b,isExtension:!(!chrome.runtime||!chrome.runtime.id),isTopFrame:window.top===window})}}});a.register("crypto",[],function(a){var b;a("generateKey",function(){return b.subtle.generateKey({name:"AES-GCM",length:256},!0,["encrypt","decrypt"])});a("exportKey",function(a){return b.subtle.exportKey("jwk",a)});a("importKey",function(a){return b.subtle.importKey("jwk",
a,{name:"AES-GCM"},!0,["encrypt","decrypt"])});a("encrypt",function(a,c){var e=window.crypto.getRandomValues(new Uint8Array(16)),d=new Uint8Array(0);return b.subtle.encrypt({name:"AES-GCM",iv:e,additionalData:d,tagLength:128},c,a).then(function(a){return[e,d,a]})});a("decrypt",function(a,c){return b.subtle.decrypt({name:"AES-GCM",iv:a[0],additionalData:a[1],tagLength:128},c,a[2])});return{setters:[],execute:function(){b=window.crypto}}});a.register("keyboard",["platform"],function(a){function b(a){return(c.IS_MAC?
h:p)[a]||a}var c,d,p,h,l,m;a("getEventKeys",function(a){var b=[];a.altKey&&b.push("ALT");a.ctrlKey&&b.push("CTRL");a.shiftKey&&b.push("SHIFT");l[a.keyCode]?b.push(l[a.keyCode]):b.push(String.fromCharCode(a.keyCode).toUpperCase());return b.join("+")});a("equals",function(a,b){a=a.split("+");b=b.split("+");return a.every(function(a){return 0<=b.indexOf(a)})});a("toHumanKey",b);a("getHumanBinding",function(a){return(a=m[a])?a.split("+").map(b).join("+"):null});return{setters:[function(a){c=a.default}],
execute:function(){d={"ALT+P":"key-pen","ALT+M":"key-mouse","ALT+E":"key-eraser","ALT+Z":"key-clear","ALT+F":"key-focus","ALT+H":"key-hide","ALT+T":"key-tools","ALT+W":"key-cam","ALT+C":"key-clock","ALT+K":"key-click"};a("KEYMAP",d);p={ALT:"Alt",CTRL:"Ctrl",META:"Meta",DOWN:"\u2b07",UP:"\u2b06",LEFT:"\u2b05",RIGHT:"\u27a1"};h={ALT:"Option",CTRL:"Ctrl",META:"Command"};l={27:"ESC",37:"LEFT",38:"UP",39:"RIGHT",40:"DOWN"};var b=d,c={},f;for(f in b)c[b[f]]=f;m=c}}});a.register("messaging",["platform",
"crypto"],function(a){function b(){this.listeners=new Map}function c(){if(m.isTopFrame)throw Error();}function d(){this.listeners=new Map;window.addEventListener("message",this._onMessage.bind(this))}function p(){q||(q=new Promise(function(a,b){chrome.runtime.sendMessage({type:k},{},function(c){"plain"===c?a(c):c?a(n.importKey(c)):b("getChromeKeyPromise failed")})}));q.catch(function(a){console.error(a)});return q}function h(){c.call(this);this._encoder=new TextEncoder("utf8")}function l(){d.call(this);
this._decoder=new TextDecoder("utf8")}var m,n,k,q,u,v;return{setters:[function(a){m=a.default},function(a){n=a}],execute:function(){k="castifyDrawGetMsgKey";b.prototype={_fire:function(a){for(var b=$jscomp.makeIterator(this.listeners.entries()),c=b.next();!c.done;c=b.next())c=c.value,c[0].call(c[1],a)},addListener:function(a,b){this.listeners.set(a,b)},removeListener:function(a){this.listeners.remove(a)}};c.prototype={post:function(a){Promise.resolve(this._wrapMessage(a)).then(function(a){window.parent.postMessage(a,
"*")})},_wrapMessage:function(a){return{type:"castifyParentMsg",data:a}}};d.prototype=Object.create(b.prototype);d.prototype._onMessage=function(a){Promise.resolve(this._unwrapMessage(a)).then(function(b){b&&(b.source=a.source,this._fire(b))}.bind(this))};d.prototype._unwrapMessage=function(a){var b=a.data;return b&&"castifyParentMsg"===b.type?(a.stopImmediatePropagation(),a.stopPropagation(),b=b.data):null};q=null;h.prototype=Object.create(c.prototype);h.prototype._wrapMessage=function(a){var b=
c.prototype._wrapMessage.bind(this),e=this._encoder;return p().then(function(b){if("plain"===b)return a;var c=e.encode(JSON.stringify(a));return n.encrypt(c,b)}).then(b)};l.prototype=Object.create(d.prototype);l.prototype._unwrapMessage=function(a){var b=d.prototype._unwrapMessage(a);if(!b)return null;var c=this._decoder;return p().then(function(a){return"plain"===a?b:n.decrypt(b,a).then(function(a){return JSON.parse(c.decode(a))})})};m.isExtension?(a("ParentPort",u=h),a("ChildPort",v=l)):(a("ParentPort",
u=c),a("ChildPort",v=d));a("ParentPort",u);a("ChildPort",v)}}});a.register("svgutil",["images/pencil-cursor.tpl.svg!text"],function(a){function b(a,c){var d,e,f,g=void 0!==c?c:{},k=void 0===(d=g.viewbox)?"0 0 1 1":d;d=void 0===(e=g.width)?1:e;e=void 0===(f=g.height)?1:f;return'<?xml version="1.0"?><svg viewBox="'+k+'" '+('width="'+d+'px" height="'+e+'px" version="1.1" ')+('xmlns="http://www.w3.org/2000/svg">'+a+"</svg>")}var c;a("getCircle",function(a){return b('<circle cx="0.5" cy="0.5" r="0.5"/>',
{width:a,height:a})});a("getCircleStroke",function(a){var c=2/a;return b('<defs><clipPath id="clip"><circle cx="0.5" cy="0.5" r="0.5"/></clipPath></defs>\n    <circle cx="0.5" cy="0.5" r="0.5" fill="none" stroke="black" stroke-width="'+c+'"\n    stroke-dasharray="0.2, 0.2" clip-path="url(#clip)"/>\n    <circle cx="0.5" cy="0.5" r="0.5" fill="none" stroke="white" stroke-width="'+c+'"\n    stroke-dasharray="0.2, 0.2" stroke-dashoffset="0.2" clip-path="url(#clip)"/>',{width:a,height:a})});a("getPencilCursor",
function(a){return c.replace("{{color}}",a)});a("toDataUrl",function(a){return'url("data:image/svg+xml;base64,'+window.btoa(a)+'")'});return{setters:[function(a){c=a.default}],execute:function(){}}});a.register("event-capture",["keyboard","platform","messaging"],function(a){function b(a){for(var c=document.querySelectorAll("iframe"),d=0;d<c.length;++d){var e=c[d];if(e.contentWindow===a)return e}return null}function c(a,b){a.stopImmediatePropagation();a.stopPropagation();!1!==b&&a.preventDefault()}
var d,p,h,l;a("EventCapture",function(a,e){function k(a){var b={type:a.type};if(x.has(a.type)&&(b.x=a.x,b.y=a.y,a.targetCursor&&(b.targetCursor=a.targetCursor),a.isTouchDevice&&(b.isTouchDevice=a.isTouchDevice),a.touches)){b.touches=[];for(var c=0;c<a.touches.length;++c){var d=a.touches[c];b.touches.push({clientX:d.clientX,clientY:d.clientY})}}A.post({type:"event",data:b})}function q(b){window.top===window?a.publish(b.type,b):k(b)}function u(a){if(a.touches&&a.touches.length){var b=a.touches[0];a.x=
b.clientX;a.y=b.clientY}a.isTouchDevice=!(!a.sourceCapabilities||!a.sourceCapabilities.firesTouchEvents);var b=Date.now(),c;c=a.target;for(var d=a.x,e=a.y,f=c;c&&c.shadowRoot;){var g=c.shadowRoot.elementFromPoint(d,e);if(g===c)break;(c=g)&&(f=c)}c=f;a.target.tagName&&a.target.tagName.startsWith("W69B-CFD")||c.tagName&&c.tagName.startsWith("W69B-CFD")?a.targetCursor=c.style.cursor:(y.has(c)&&(d=y.get(c),5E3>b-d.timestamp&&(a.targetCursor=d.cursor)),a.targetCursor||(d=null,d||c===document||(d=window.getComputedStyle(c).cursor),
d||(d="default"),y.set(c,{cursor:d,timestamp:b}),a.targetCursor=d));q(a)}function v(a){var b=e[d.getEventKeys(a)];b&&(c(a),a.repeat||q({type:b}))}function w(a){return a.endsWith("px")?parseFloat(a.substr(0,a.length-2)):0}function B(c){var d=c.data,e=b(c.source);c=e.getBoundingClientRect();var e=window.getComputedStyle(e),f=w(e.paddingLeft)+w(e.borderLeftWidth)+c.left,u=w(e.paddingTop)+w(e.borderTopWidth)+c.top;d.x+=f;d.y+=u;d.touches&&d.touches.forEach(function(a){a.clientX+=f;a.clientY+=u});window.top===
window?a.publish(d.type,d):k(d)}var x=new Set("mousedown touchstart mousemove touchmove mouseup touchend".split(" ")),t={},r,A;r=new l;p.isTopFrame||(A=new h);e=e||d.KEYMAP;var y=new WeakMap;t.start=function(){for(var a=$jscomp.makeIterator(x),b=a.next();!b.done;b=a.next())window.addEventListener(b.value,u,!0);Object.keys(e).length&&window.addEventListener("keydown",v,!0);r&&r.addListener(B)};t.dispose=function(){for(var a=$jscomp.makeIterator(x),b=a.next();!b.done;b=a.next())window.removeEventListener(b.value,
u,!0)};return t});a("cancel",c);return{setters:[function(a){d=a},function(a){p=a.default},function(a){h=a.ParentPort;l=a.ChildPort}],execute:function(){}}});a.register("cursors","svgutil images/pointer-cursor.svg!text images/hand-cursor.svg!text images/text-cursor.svg!text images/move-cursor.svg!text images/nwse-resize-cursor.svg!text images/nesw-resize-cursor.svg!text images/none-cursor-win.svg!text images/none-cursor.svg!text".split(" "),function(a){var b,c,d,p,h,l,m,n,k,q;return{setters:[function(a){b=
a},function(a){c=a.default},function(a){d=a.default},function(a){p=a.default},function(a){h=a.default},function(a){l=a.default},function(a){m=a.default},function(a){n=a.default},function(a){k=a.default}],execute:function(){q=window.navigator.userAgent.includes("Windows")?n:k;a("default",{"default":{url:b.toDataUrl(c),offsetX:0,offsetY:0},pointer:{url:b.toDataUrl(d),offsetX:9,offsetY:2},text:{url:b.toDataUrl(p),offsetX:11,offsetY:12},move:{url:b.toDataUrl(h),offsetX:12,offsetY:12},"nwse-resize":{url:b.toDataUrl(l),
offsetX:12,offsetY:12},"nesw-resize":{url:b.toDataUrl(m),offsetX:12,offsetY:12},none:{url:b.toDataUrl(q),offsetX:0,offsetY:0}})}}});a.register("cursor-hack",["cursors","cursor-hack.css.tpl!text","platform"],function(a){function b(){n||(n=new Promise(function(a){if(document.head)a();else{var b=document.documentElement,c=new MutationObserver(function(){document.head&&(a(),c.disconnect())});c.observe(b,{childList:!0})}}));return n}function c(){function a(){return p.replace(/{{([^}]+)}}/g,function(a,
b){var c=d.none;return c.url+" "+c.offsetX+" "+c.offsetY+", "+b})}var e={},f=null,h=!1;e.enable=function(){h||(h=!0,f||(f=document.createElement("style"),f.appendChild(document.createTextNode(a()))),b().then(function(){var a=document.head;a.contains(f)||a.insertBefore(f,a.firstElementChild)}))};e.disable=function(){h&&(h=!1,b().then(function(){f&&document.head.contains(f)&&document.head.removeChild(f)}))};return e}var d,p,h,l,m,n;a("CursorHider",function(){function a(b){h.isExtension&&chrome.runtime.sendMessage({type:m,
data:{type:l,data:b}})}var b=c();return{enable:function(){b.enable();a(!0)},disable:function(){b.disable();a(!1)}}});a("CursorChromeMessageService",function(){function a(b){b&&b.type===l&&(b.data?e.enable():e.disable());return!1}if(h.isTopFrame)throw Error();var b={},d=!1,e=c();b.start=function(){d||(chrome.runtime.onMessage.addListener(a),d=!0)};b.stop=function(){d&&(d=!1,chrome.runtime.onMessage.removeListener(a),e.disable())};return b});return{setters:[function(a){d=a.default},function(a){p=a.default},
function(a){h=a.default}],execute:function(){l="castifyDrawCursorService";m="castifyDrawFrameBroadcast";n=null}}});a.register("content-script-frame",["event-capture","cursor-hack"],function(a){var b,c;return{setters:[function(a){b=a.EventCapture},function(a){c=a.CursorChromeMessageService}],execute:function(){if(window.top===window)throw Error("usage error: only inject this in frames");(new b).start();(new c).start()}}})})})();return!0})();