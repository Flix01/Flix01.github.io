
var e;e||(e=typeof Module !== 'undefined' ? Module : {});var k={},m;for(m in e)e.hasOwnProperty(m)&&(k[m]=e[m]);var n=[],aa="./this.program";function r(a,b){throw b;}var ba=!1,t=!1,ca=!1,da=!1;ba="object"===typeof window;t="function"===typeof importScripts;ca="object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node;da=!ba&&!ca&&!t;var u="",ea,v,fa,ha;
if(ca)u=t?require("path").dirname(u)+"/":__dirname+"/",ea=function(a,b){fa||(fa=require("fs"));ha||(ha=require("path"));a=ha.normalize(a);return fa.readFileSync(a,b?null:"utf8")},v=function(a){a=ea(a,!0);a.buffer||(a=new Uint8Array(a));assert(a.buffer);return a},1<process.argv.length&&(aa=process.argv[1].replace(/\\/g,"/")),n=process.argv.slice(2),"undefined"!==typeof module&&(module.exports=e),process.on("uncaughtException",function(a){if(!(a instanceof ia))throw a;}),process.on("unhandledRejection",
w),r=function(a){process.exit(a)},e.inspect=function(){return"[Emscripten Module object]"};else if(da)"undefined"!=typeof read&&(ea=function(a){return read(a)}),v=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");assert("object"===typeof a);return a},"undefined"!=typeof scriptArgs?n=scriptArgs:"undefined"!=typeof arguments&&(n=arguments),"function"===typeof quit&&(r=function(a){quit(a)}),"undefined"!==typeof print&&("undefined"===typeof console&&
(console={}),console.log=print,console.warn=console.error="undefined"!==typeof printErr?printErr:print);else if(ba||t)t?u=self.location.href:"undefined"!==typeof document&&document.currentScript&&(u=document.currentScript.src),u=0!==u.indexOf("blob:")?u.substr(0,u.lastIndexOf("/")+1):"",ea=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},t&&(v=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)});
var ka=e.print||console.log.bind(console),x=e.printErr||console.warn.bind(console);for(m in k)k.hasOwnProperty(m)&&(e[m]=k[m]);k=null;e.arguments&&(n=e.arguments);e.thisProgram&&(aa=e.thisProgram);e.quit&&(r=e.quit);function la(a){ma||(ma={});ma[a]||(ma[a]=1,x(a))}var ma,z;e.wasmBinary&&(z=e.wasmBinary);var noExitRuntime;e.noExitRuntime&&(noExitRuntime=e.noExitRuntime);"object"!==typeof WebAssembly&&w("no native wasm support detected");var A,B=!1;
function assert(a,b){a||w("Assertion failed: "+b)}var na="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function oa(a,b,c){var d=b+c;for(c=b;a[c]&&!(c>=d);)++c;if(16<c-b&&a.subarray&&na)return na.decode(a.subarray(b,c));for(d="";b<c;){var f=a[b++];if(f&128){var g=a[b++]&63;if(192==(f&224))d+=String.fromCharCode((f&31)<<6|g);else{var h=a[b++]&63;f=224==(f&240)?(f&15)<<12|g<<6|h:(f&7)<<18|g<<12|h<<6|a[b++]&63;65536>f?d+=String.fromCharCode(f):(f-=65536,d+=String.fromCharCode(55296|f>>10,56320|f&1023))}}else d+=String.fromCharCode(f)}return d}function D(a,b){return a?oa(E,a,b):""}
function pa(a,b,c,d){if(!(0<d))return 0;var f=c;d=c+d-1;for(var g=0;g<a.length;++g){var h=a.charCodeAt(g);if(55296<=h&&57343>=h){var p=a.charCodeAt(++g);h=65536+((h&1023)<<10)|p&1023}if(127>=h){if(c>=d)break;b[c++]=h}else{if(2047>=h){if(c+1>=d)break;b[c++]=192|h>>6}else{if(65535>=h){if(c+2>=d)break;b[c++]=224|h>>12}else{if(c+3>=d)break;b[c++]=240|h>>18;b[c++]=128|h>>12&63}b[c++]=128|h>>6&63}b[c++]=128|h&63}}b[c]=0;return c-f}
function qa(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}"undefined"!==typeof TextDecoder&&new TextDecoder("utf-16le");function ra(a){var b=qa(a)+1,c=sa(b);pa(a,ta,c,b);return c}var ua,ta,E,va,F,wa,G,xa=e.INITIAL_MEMORY||16777216;e.wasmMemory?A=e.wasmMemory:A=new WebAssembly.Memory({initial:xa/65536,maximum:xa/65536});A&&(ua=A.buffer);xa=ua.byteLength;var H=ua;ua=H;
e.HEAP8=ta=new Int8Array(H);e.HEAP16=new Int16Array(H);e.HEAP32=F=new Int32Array(H);e.HEAPU8=E=new Uint8Array(H);e.HEAPU16=va=new Uint16Array(H);e.HEAPU32=wa=new Uint32Array(H);e.HEAPF32=G=new Float32Array(H);e.HEAPF64=new Float64Array(H);var I,ya=[],za=[],Aa=[],Ba=[],Ca=[];function Da(){var a=e.preRun.shift();ya.unshift(a)}var J=0,Ea=null,K=null;e.preloadedImages={};e.preloadedAudios={};
function w(a){if(e.onAbort)e.onAbort(a);x(a);B=!0;throw new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");}function Fa(a){var b=L;return String.prototype.startsWith?b.startsWith(a):0===b.indexOf(a)}function Ga(){return Fa("data:application/octet-stream;base64,")}var L="test_character.wasm";if(!Ga()){var Ha=L;L=e.locateFile?e.locateFile(Ha,u):u+Ha}
function Ia(){try{if(z)return new Uint8Array(z);if(v)return v(L);throw"both async and sync fetching of the wasm failed";}catch(a){w(a)}}function Ja(){return z||!ba&&!t||"function"!==typeof fetch||Fa("file://")?Promise.resolve().then(Ia):fetch(L,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+L+"'";return a.arrayBuffer()}).catch(function(){return Ia()})}
function Ka(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(e);else{var c=b.i;"number"===typeof c?void 0===b.f?I.get(c)():I.get(c)(b.f):c(void 0===b.f?null:b.f)}}}var La=[null,[],[]];function Ma(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,f,g){b.drawArraysInstancedANGLE(c,d,f,g)},a.drawElementsInstanced=function(c,d,f,g,h){b.drawElementsInstancedANGLE(c,d,f,g,h)})}
function Na(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function Oa(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}var Pa=1,Qa=[],M=[],Ra=[],Sa=[],Ta=[],N=[],O=[],Ua=[],Va={},Wa={};
function P(a){Xa||(Xa=a)}function R(a){for(var b=Pa++,c=a.length;c<b;c++)a[c]=null;return b}function Ya(a,b){if(a=a.getContext("webgl",b)){var c=R(Ua),d={G:c,attributes:b,version:b.u,g:a};a.canvas&&(a.canvas.B=d);Ua[c]=d;("undefined"===typeof b.m||b.m)&&Za(d);b=c}else b=0;return b}
function Za(a){a||(a=$a);if(!a.s){a.s=!0;var b=a.g;Ma(b);Na(b);Oa(b);b.D=b.getExtension("EXT_disjoint_timer_query");b.J=b.getExtension("WEBGL_multi_draw");var c="OES_texture_float OES_texture_half_float OES_standard_derivatives OES_vertex_array_object WEBGL_compressed_texture_s3tc WEBGL_depth_texture OES_element_index_uint EXT_texture_filter_anisotropic EXT_frag_depth WEBGL_draw_buffers ANGLE_instanced_arrays OES_texture_float_linear OES_texture_half_float_linear EXT_blend_minmax EXT_shader_texture_lod EXT_texture_norm16 WEBGL_compressed_texture_pvrtc EXT_color_buffer_half_float WEBGL_color_buffer_float EXT_sRGB WEBGL_compressed_texture_etc1 EXT_disjoint_timer_query WEBGL_compressed_texture_etc WEBGL_compressed_texture_astc EXT_color_buffer_float WEBGL_compressed_texture_s3tc_srgb EXT_disjoint_timer_query_webgl2 WEBKIT_WEBGL_compressed_texture_pvrtc".split(" ");(b.getSupportedExtensions()||
[]).forEach(function(d){-1!=c.indexOf(d)&&b.getExtension(d)})}}var ab={},Xa,$a;function bb(a,b,c,d){for(var f=0;f<a;f++){var g=S[c](),h=g&&R(d);g?(g.name=h,d[h]=g):P(1282);F[b+4*f>>2]=h}}
function cb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 36345:c=0;break;case 34466:var d=S.getParameter(34467);c=d?d.length:0}if(void 0===c)switch(d=S.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":P(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 34068:c=0;break;default:P(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||
d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)F[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(f){P(1280);x("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+f+")");return}}break;default:P(1280);x("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}F[b>>2]=c}else P(1281)}function db(a){var b=qa(a)+1,c=fb(b);pa(a,E,c,b);return c}
function gb(a,b,c,d,f){a-=5120;a=1==a?E:4==a?F:6==a?G:5==a||28922==a?wa:va;var g=31-Math.clz32(a.BYTES_PER_ELEMENT);return a.subarray(f>>g,f+d*(c*({5:3,6:4,8:2,29502:3,29504:4}[b-6402]||1)*(1<<g)+4-1&-4)>>g)}var hb=[];
function ib(a,b){jb=a;kb=b;if(lb)if(0==a)T=function(){var d=Math.max(0,mb+b-nb())|0;setTimeout(ob,d)};else if(1==a)T=function(){pb(ob)};else if(2==a){if("undefined"===typeof setImmediate){var c=[];addEventListener("message",function(d){if("setimmediate"===d.data||"setimmediate"===d.data.target)d.stopPropagation(),c.shift()()},!0);setImmediate=function(d){c.push(d);t?(void 0===e.setImmediates&&(e.setImmediates=[]),e.setImmediates.push(d),postMessage({target:"setimmediate"})):postMessage("setimmediate",
"*")}}T=function(){setImmediate(ob)}}}var nb;ca?nb=function(){var a=process.hrtime();return 1E3*a[0]+a[1]/1E6}:"undefined"!==typeof dateNow?nb=dateNow:nb=function(){return performance.now()};
function qb(a){noExitRuntime=!0;assert(!lb,"emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters.");lb=a;var b=U;ob=function(){if(!B)if(0<rb.length){var c=Date.now(),d=rb.shift();d.i(d.f);if(sb){var f=sb,g=0==f%1?f-1:Math.floor(f);sb=d.C?g:(8*f+(g+.5))/9}console.log('main loop blocker "'+d.name+'" took '+(Date.now()-c)+" ms");e.setStatus&&(c=e.statusMessage||"Please wait...",
d=sb,f=tb.F,d?d<f?e.setStatus(c+" ("+(f-d)+"/"+f+")"):e.setStatus(c):e.setStatus(""));b<U||setTimeout(ob,0)}else b<U||(ub=ub+1|0,1==jb&&1<kb&&0!=ub%kb?T():(0==jb&&(mb=nb()),vb(a),b<U||("object"===typeof SDL&&SDL.audio&&SDL.audio.v&&SDL.audio.v(),T())))}}var T=null,U=0,lb=null,jb=0,kb=0,ub=0,rb=[];
function vb(a){if(!(B||e.preMainLoop&&!1===e.preMainLoop())){try{a()}catch(b){if(b instanceof ia||"unwind"==b)return;b&&"object"===typeof b&&b.stack&&x("exception thrown: "+[b,b.stack]);throw b;}e.postMainLoop&&e.postMainLoop()}}var tb={},mb,ob,sb,wb=!1,xb=!1,yb=[];
function zb(){function a(){xb=document.pointerLockElement===e.canvas||document.mozPointerLockElement===e.canvas||document.webkitPointerLockElement===e.canvas||document.msPointerLockElement===e.canvas}e.preloadPlugins||(e.preloadPlugins=[]);if(!Ab){Ab=!0;try{Bb=!0}catch(c){Bb=!1,console.log("warning: no blob constructor, cannot create blobs with mimetypes")}Cb="undefined"!=typeof MozBlobBuilder?MozBlobBuilder:"undefined"!=typeof WebKitBlobBuilder?WebKitBlobBuilder:Bb?null:console.log("warning: no BlobBuilder");
Db="undefined"!=typeof window?window.URL?window.URL:window.webkitURL:void 0;e.j||"undefined"!==typeof Db||(console.log("warning: Browser does not support creating object URLs. Built-in browser image decoding will not be available."),e.j=!0);e.preloadPlugins.push({canHandle:function(c){return!e.j&&/\.(jpg|jpeg|png|bmp)$/i.test(c)},handle:function(c,d,f,g){var h=null;if(Bb)try{h=new Blob([c],{type:Eb(d)}),h.size!==c.length&&(h=new Blob([(new Uint8Array(c)).buffer],{type:Eb(d)}))}catch(q){la("Blob constructor present but fails: "+
q+"; falling back to blob builder")}h||(h=new Cb,h.append((new Uint8Array(c)).buffer),h=h.getBlob());var p=Db.createObjectURL(h),l=new Image;l.onload=function(){assert(l.complete,"Image "+d+" could not be decoded");var q=document.createElement("canvas");q.width=l.width;q.height=l.height;q.getContext("2d").drawImage(l,0,0);e.preloadedImages[d]=q;Db.revokeObjectURL(p);f&&f(c)};l.onerror=function(){console.log("Image "+p+" could not be decoded");g&&g()};l.src=p}});e.preloadPlugins.push({canHandle:function(c){return!e.K&&
c.substr(-4)in{".ogg":1,".wav":1,".mp3":1}},handle:function(c,d,f,g){function h(C){l||(l=!0,e.preloadedAudios[d]=C,f&&f(c))}function p(){l||(l=!0,e.preloadedAudios[d]=new Audio,g&&g())}var l=!1;if(Bb){try{var q=new Blob([c],{type:Eb(d)})}catch(C){return p()}q=Db.createObjectURL(q);var y=new Audio;y.addEventListener("canplaythrough",function(){h(y)},!1);y.onerror=function(){if(!l){console.log("warning: browser could not fully decode audio "+d+", trying slower base64 approach");for(var C="",ja=0,Q=
0,eb=0;eb<c.length;eb++)for(ja=ja<<8|c[eb],Q+=8;6<=Q;){var sc=ja>>Q-6&63;Q-=6;C+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[sc]}2==Q?(C+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(ja&3)<<4],C+="=="):4==Q&&(C+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(ja&15)<<2],C+="=");y.src="data:audio/x-"+d.substr(-3)+";base64,"+C;h(y)}};y.src=q;Fb(function(){h(y)},1E4)}else return p()}});var b=e.canvas;b&&(b.requestPointerLock=b.requestPointerLock||
b.mozRequestPointerLock||b.webkitRequestPointerLock||b.msRequestPointerLock||function(){},b.exitPointerLock=document.exitPointerLock||document.mozExitPointerLock||document.webkitExitPointerLock||document.msExitPointerLock||function(){},b.exitPointerLock=b.exitPointerLock.bind(document),document.addEventListener("pointerlockchange",a,!1),document.addEventListener("mozpointerlockchange",a,!1),document.addEventListener("webkitpointerlockchange",a,!1),document.addEventListener("mspointerlockchange",a,
!1),e.elementPointerLock&&b.addEventListener("click",function(c){!xb&&e.canvas.requestPointerLock&&(e.canvas.requestPointerLock(),c.preventDefault())},!1))}}
function Gb(a,b,c,d){if(b&&e.a&&a==e.canvas)return e.a;var f;if(b){var g={antialias:!1,alpha:!1,u:1};if(d)for(var h in d)g[h]=d[h];if("undefined"!==typeof ab&&(f=Ya(a,g)))var p=Ua[f].g}else p=a.getContext("2d");if(!p)return null;c&&(b||assert("undefined"===typeof S,"cannot set in module if GLctx is used, but we are a non-GL context that would replace it"),e.a=p,b&&($a=Ua[f],e.a=S=$a&&$a.g),e.L=b,yb.forEach(function(l){l()}),zb());return p}var Hb=!1,Ib=void 0,V=void 0;
function Jb(a,b){function c(){wb=!1;var g=d.parentNode;(document.fullscreenElement||document.mozFullScreenElement||document.msFullscreenElement||document.webkitFullscreenElement||document.webkitCurrentFullScreenElement)===g?(d.exitFullscreen=Kb,Ib&&d.requestPointerLock(),wb=!0,V?("undefined"!=typeof SDL&&(F[SDL.screen>>2]=wa[SDL.screen>>2]|8388608),Lb(e.canvas),Mb()):Lb(d)):(g.parentNode.insertBefore(d,g),g.parentNode.removeChild(g),V?("undefined"!=typeof SDL&&(F[SDL.screen>>2]=wa[SDL.screen>>2]&
-8388609),Lb(e.canvas),Mb()):Lb(d));if(e.onFullScreen)e.onFullScreen(wb);if(e.onFullscreen)e.onFullscreen(wb)}Ib=a;V=b;"undefined"===typeof Ib&&(Ib=!0);"undefined"===typeof V&&(V=!1);var d=e.canvas;Hb||(Hb=!0,document.addEventListener("fullscreenchange",c,!1),document.addEventListener("mozfullscreenchange",c,!1),document.addEventListener("webkitfullscreenchange",c,!1),document.addEventListener("MSFullscreenChange",c,!1));var f=document.createElement("div");d.parentNode.insertBefore(f,d);f.appendChild(d);
f.requestFullscreen=f.requestFullscreen||f.mozRequestFullScreen||f.msRequestFullscreen||(f.webkitRequestFullscreen?function(){f.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)}:null)||(f.webkitRequestFullScreen?function(){f.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT)}:null);f.requestFullscreen()}
function Kb(){if(!wb)return!1;(document.exitFullscreen||document.cancelFullScreen||document.mozCancelFullScreen||document.msExitFullscreen||document.webkitCancelFullScreen||function(){}).apply(document,[]);return!0}var Nb=0;function pb(a){if("function"===typeof requestAnimationFrame)requestAnimationFrame(a);else{var b=Date.now();if(0===Nb)Nb=b+1E3/60;else for(;b+2>=Nb;)Nb+=1E3/60;setTimeout(a,Math.max(Nb-b,0))}}function Fb(a,b){noExitRuntime=!0;setTimeout(function(){B||a()},b)}
function Eb(a){return{jpg:"image/jpeg",jpeg:"image/jpeg",png:"image/png",bmp:"image/bmp",ogg:"audio/ogg",wav:"audio/wav",mp3:"audio/mpeg"}[a.substr(a.lastIndexOf(".")+1)]}var W=0,X=0,Ob=0,Pb=0;
function Qb(a){if(xb)"mousemove"!=a.type&&"mozMovementX"in a?Ob=Pb=0:(Ob=a.movementX||a.mozMovementX||a.webkitMovementX||0,Pb=a.movementY||a.mozMovementY||a.webkitMovementY||0),"undefined"!=typeof SDL?(W=SDL.H+Ob,X=SDL.I+Pb):(W+=Ob,X+=Pb);else{var b=e.canvas.getBoundingClientRect(),c=e.canvas.width,d=e.canvas.height,f="undefined"!==typeof window.scrollX?window.scrollX:window.pageXOffset,g="undefined"!==typeof window.scrollY?window.scrollY:window.pageYOffset;"touchstart"!==a.type&&"touchend"!==a.type&&
"touchmove"!==a.type&&(f=a.pageX-(f+b.left),a=a.pageY-(g+b.top),f*=c/b.width,a*=d/b.height,Ob=f-W,Pb=a-X,W=f,X=a)}}var Rb=[];function Mb(){var a=e.canvas;Rb.forEach(function(b){b(a.width,a.height)})}function Sb(a,b,c){Lb(e.canvas,a,b);c||Mb()}
function Lb(a,b,c){b&&c?(a.A=b,a.o=c):(b=a.A,c=a.o);var d=b,f=c;e.forcedAspectRatio&&0<e.forcedAspectRatio&&(d/f<e.forcedAspectRatio?d=Math.round(f*e.forcedAspectRatio):f=Math.round(d/e.forcedAspectRatio));if((document.fullscreenElement||document.mozFullScreenElement||document.msFullscreenElement||document.webkitFullscreenElement||document.webkitCurrentFullScreenElement)===a.parentNode&&"undefined"!=typeof screen){var g=Math.min(screen.width/d,screen.height/f);d=Math.round(d*g);f=Math.round(f*g)}V?
(a.width!=d&&(a.width=d),a.height!=f&&(a.height=f),"undefined"!=typeof a.style&&(a.style.removeProperty("width"),a.style.removeProperty("height"))):(a.width!=b&&(a.width=b),a.height!=c&&(a.height=c),"undefined"!=typeof a.style&&(d!=b||f!=c?(a.style.setProperty("width",d+"px","important"),a.style.setProperty("height",f+"px","important")):(a.style.removeProperty("width"),a.style.removeProperty("height"))))}var Ab,Bb,Cb,Db;
function Tb(){Ub&&!Vb&&(Vb=!0,pb(function(){Vb=!1;vb(function(){I.get(Ub)()})}))}var Wb=null,Xb=null,Ub=null,Yb=null,Zb=null,$b=null,Y=null,ac=0,bc=256,cc=256,dc=18,Vb=!1;function ec(a){ac=0;a.shiftKey&&(ac+=1);a.ctrlKey&&(ac+=2);a.altKey&&(ac+=4)}function fc(a){Qb(a)}
function hc(a){if(a.ctrlKey||a.altKey||a.metaKey)return null;var b=a.keyCode;if(48<=b&&57>=b)return b;if(65<=b&&90>=b)return a.shiftKey?b:b+32;if(96<=b&&105>=b)return b-48;if(106<=b&&111>=b)return b-106+42;switch(b){case 9:case 13:case 27:case 32:case 61:return b}a=a.shiftKey;switch(b){case 186:return a?58:59;case 187:return a?43:61;case 188:return a?60:44;case 189:return a?95:45;case 190:return a?62:46;case 191:return a?63:47;case 219:return a?123:91;case 220:return a?124:47;case 221:return a?125:
93;case 222:return a?34:39}return null}
function ic(a){if(Zb||Yb){var b=null;switch(a.keyCode){case 8:b=120;break;case 46:b=111;break;case 112:b=1;break;case 113:b=2;break;case 114:b=3;break;case 115:b=4;break;case 116:b=5;break;case 117:b=6;break;case 118:b=7;break;case 119:b=8;break;case 120:b=9;break;case 121:b=10;break;case 122:b=11;break;case 123:b=12;break;case 37:b=100;break;case 38:b=101;break;case 39:b=102;break;case 40:b=103;break;case 33:b=104;break;case 34:b=105;break;case 36:b=106;break;case 35:b=107;break;case 45:b=108;break;
case 16:case 5:b=112;break;case 6:b=113;break;case 17:case 3:b=114;break;case 4:b=115;break;case 18:case 2:b=116;break;case 1:b=117}null!==b?Zb&&(a.preventDefault(),ec(a),I.get(Zb)(b,W,X)):(b=hc(a),null!==b&&Yb&&(a.preventDefault(),ec(a),I.get(Yb)(b,W,X)))}}function jc(){}
function Z(a){if(a.target==e.canvas){var b=a.changedTouches[0];switch(a.type){case "touchstart":var c="mousedown";break;case "touchmove":c="mousemove";break;case "touchend":c="mouseup";break;default:return}var d=document.createEvent("MouseEvent");d.initMouseEvent(c,!0,!0,window,1,b.screenX,b.screenY,b.clientX,b.clientY,!1,!1,!1,!1,0,null);b.target.dispatchEvent(d);a.preventDefault()}}
function kc(a){Qb(a);if(a.target==e.canvas&&Y){try{a.target.setCapture()}catch(b){}a.preventDefault();ec(a);I.get(Y)(a.button,0,W,X)}}function lc(a){Qb(a);Y&&(a.preventDefault(),ec(a),I.get(Y)(a.button,1,W,X))}
function mc(a){Qb(a);switch(a.type){case "DOMMouseScroll":var b=a.detail/3;break;case "mousewheel":b=a.wheelDelta/120;break;case "wheel":b=a.deltaY;switch(a.deltaMode){case 0:b/=100;break;case 1:b/=3;break;case 2:b*=80;break;default:throw"unrecognized mouse wheel delta mode: "+a.deltaMode;}break;default:throw"unrecognized mouse wheel event: "+a.type;}b=-b;b=0==b?0:0<b?Math.max(b,1):Math.min(b,-1);var c=3;0>b&&(c=4);Y&&(a.preventDefault(),ec(a),I.get(Y)(c,0,W,X))}
for(var S,nc=new Float32Array(288),oc=0;288>oc;++oc)hb[oc]=nc.subarray(0,oc+1);e.requestFullscreen=function(a,b){Jb(a,b)};e.requestAnimationFrame=function(a){pb(a)};e.setCanvasSize=function(a,b,c){Sb(a,b,c)};e.pauseMainLoop=function(){T=null;U++};e.resumeMainLoop=function(){U++;var a=jb,b=kb,c=lb;lb=null;qb(c);ib(a,b);T()};e.getUserMedia=function(){window.getUserMedia||(window.getUserMedia=navigator.getUserMedia||navigator.mozGetUserMedia);window.getUserMedia(void 0)};
e.createContext=function(a,b,c,d){return Gb(a,b,c,d)};za.push({i:function(){pc()}});
var rc={__assert_fail:function(a,b,c,d){w("Assertion failed: "+D(a)+", at: "+[b?D(b):"unknown filename",c,d?D(d):"unknown function"])},emscripten_memcpy_big:function(a,b,c){E.copyWithin(a,b,b+c)},emscripten_resize_heap:function(){w("OOM")},exit:function(a){qc(a)},fd_close:function(){return 0},fd_seek:function(){},fd_write:function(a,b,c,d){for(var f=0,g=0;g<c;g++){for(var h=F[b+8*g>>2],p=F[b+(8*g+4)>>2],l=0;l<p;l++){var q=E[h+l],y=La[a];0===q||10===q?((1===a?ka:x)(oa(y,0)),y.length=0):y.push(q)}f+=
p}F[d>>2]=f;return 0},glActiveTexture:function(a){S.activeTexture(a)},glAttachShader:function(a,b){S.attachShader(M[a],O[b])},glBindBuffer:function(a,b){S.bindBuffer(a,Qa[b])},glBindFramebuffer:function(a,b){S.bindFramebuffer(a,Ra[b])},glBindRenderbuffer:function(a,b){S.bindRenderbuffer(a,Sa[b])},glBindTexture:function(a,b){S.bindTexture(a,Ta[b])},glBlendFunc:function(a,b){S.blendFunc(a,b)},glBufferData:function(a,b,c,d){S.bufferData(a,c?E.subarray(c,c+b):b,d)},glBufferSubData:function(a,b,c,d){S.bufferSubData(a,
b,E.subarray(d,d+c))},glCheckFramebufferStatus:function(a){return S.checkFramebufferStatus(a)},glClear:function(a){S.clear(a)},glClearColor:function(a,b,c,d){S.clearColor(a,b,c,d)},glColorMask:function(a,b,c,d){S.colorMask(!!a,!!b,!!c,!!d)},glCompileShader:function(a){S.compileShader(O[a])},glCreateProgram:function(){var a=R(M),b=S.createProgram();b.name=a;M[a]=b;return a},glCreateShader:function(a){var b=R(O);O[b]=S.createShader(a);return b},glCullFace:function(a){S.cullFace(a)},glDeleteBuffers:function(a,
b){for(var c=0;c<a;c++){var d=F[b+4*c>>2],f=Qa[d];f&&(S.deleteBuffer(f),f.name=0,Qa[d]=null)}},glDeleteProgram:function(a){if(a){var b=M[a];b?(S.deleteProgram(b),b.name=0,M[a]=null,Va[a]=null):P(1281)}},glDeleteShader:function(a){if(a){var b=O[a];b?(S.deleteShader(b),O[a]=null):P(1281)}},glDeleteTextures:function(a,b){for(var c=0;c<a;c++){var d=F[b+4*c>>2],f=Ta[d];f&&(S.deleteTexture(f),f.name=0,Ta[d]=null)}},glDepthMask:function(a){S.depthMask(!!a)},glDisable:function(a){S.disable(a)},glDisableVertexAttribArray:function(a){S.disableVertexAttribArray(a)},
glDrawArrays:function(a,b,c){S.drawArrays(a,b,c)},glDrawElements:function(a,b,c,d){S.drawElements(a,b,c,d)},glEnable:function(a){S.enable(a)},glEnableVertexAttribArray:function(a){S.enableVertexAttribArray(a)},glFramebufferRenderbuffer:function(a,b,c,d){S.framebufferRenderbuffer(a,b,c,Sa[d])},glFramebufferTexture2D:function(a,b,c,d,f){S.framebufferTexture2D(a,b,c,Ta[d],f)},glFrontFace:function(a){S.frontFace(a)},glGenBuffers:function(a,b){bb(a,b,"createBuffer",Qa)},glGenFramebuffers:function(a,b){bb(a,
b,"createFramebuffer",Ra)},glGenRenderbuffers:function(a,b){bb(a,b,"createRenderbuffer",Sa)},glGenTextures:function(a,b){bb(a,b,"createTexture",Ta)},glGetAttribLocation:function(a,b){return S.getAttribLocation(M[a],D(b))},glGetIntegerv:function(a,b){cb(a,b)},glGetProgramInfoLog:function(a,b,c,d){a=S.getProgramInfoLog(M[a]);null===a&&(a="(unknown error)");b=0<b&&d?pa(a,E,d,b):0;c&&(F[c>>2]=b)},glGetProgramiv:function(a,b,c){if(c)if(a>=Pa)P(1281);else{var d=Va[a];if(d)if(35716==b)a=S.getProgramInfoLog(M[a]),
null===a&&(a="(unknown error)"),F[c>>2]=a.length+1;else if(35719==b)F[c>>2]=d.h;else if(35722==b){if(-1==d.b){a=M[a];var f=S.getProgramParameter(a,35721);for(b=d.b=0;b<f;++b)d.b=Math.max(d.b,S.getActiveAttrib(a,b).name.length+1)}F[c>>2]=d.b}else if(35381==b){if(-1==d.c)for(a=M[a],f=S.getProgramParameter(a,35382),b=d.c=0;b<f;++b)d.c=Math.max(d.c,S.getActiveUniformBlockName(a,b).length+1);F[c>>2]=d.c}else F[c>>2]=S.getProgramParameter(M[a],b);else P(1282)}else P(1281)},glGetShaderInfoLog:function(a,
b,c,d){a=S.getShaderInfoLog(O[a]);null===a&&(a="(unknown error)");b=0<b&&d?pa(a,E,d,b):0;c&&(F[c>>2]=b)},glGetShaderiv:function(a,b,c){c?35716==b?(a=S.getShaderInfoLog(O[a]),null===a&&(a="(unknown error)"),F[c>>2]=a?a.length+1:0):35720==b?(a=S.getShaderSource(O[a]),F[c>>2]=a?a.length+1:0):F[c>>2]=S.getShaderParameter(O[a],b):P(1281)},glGetString:function(a){if(Wa[a])return Wa[a];switch(a){case 7939:var b=S.getSupportedExtensions()||[];b=b.concat(b.map(function(d){return"GL_"+d}));b=db(b.join(" "));
break;case 7936:case 7937:case 37445:case 37446:(b=S.getParameter(a))||P(1280);b=db(b);break;case 7938:b=db("OpenGL ES 2.0 ("+S.getParameter(7938)+")");break;case 35724:b=S.getParameter(35724);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=db(b);break;default:return P(1280),0}return Wa[a]=b},glGetUniformLocation:function(a,b){b=D(b);var c=0;if("]"==b[b.length-1]){var d=b.lastIndexOf("[");c="]"!=b[d+1]?
parseInt(b.slice(d+1)):0;b=b.slice(0,d)}return(a=Va[a]&&Va[a].l[b])&&0<=c&&c<a[0]?a[1]+c:-1},glLineWidth:function(a){S.lineWidth(a)},glLinkProgram:function(a){S.linkProgram(M[a]);var b=M[a];a=Va[a]={l:{},h:0,b:-1,c:-1};for(var c=a.l,d=S.getProgramParameter(b,35718),f=0;f<d;++f){var g=S.getActiveUniform(b,f),h=g.name;a.h=Math.max(a.h,h.length+1);"]"==h.slice(-1)&&(h=h.slice(0,h.lastIndexOf("[")));var p=S.getUniformLocation(b,h);if(p){var l=R(N);c[h]=[g.size,l];N[l]=p;for(var q=1;q<g.size;++q)p=S.getUniformLocation(b,
h+"["+q+"]"),l=R(N),N[l]=p}}},glPolygonOffset:function(a,b){S.polygonOffset(a,b)},glRenderbufferStorage:function(a,b,c,d){S.renderbufferStorage(a,b,c,d)},glShaderSource:function(a,b,c,d){for(var f="",g=0;g<b;++g){var h=d?F[d+4*g>>2]:-1;f+=D(F[c+4*g>>2],0>h?void 0:h)}S.shaderSource(O[a],f)},glTexImage2D:function(a,b,c,d,f,g,h,p,l){S.texImage2D(a,b,c,d,f,g,h,p,l?gb(p,h,d,f,l):null)},glTexParameterf:function(a,b,c){S.texParameterf(a,b,c)},glTexParameteri:function(a,b,c){S.texParameteri(a,b,c)},glUniform1f:function(a,
b){S.uniform1f(N[a],b)},glUniform1i:function(a,b){S.uniform1i(N[a],b)},glUniform2f:function(a,b,c){S.uniform2f(N[a],b,c)},glUniform3f:function(a,b,c,d){S.uniform3f(N[a],b,c,d)},glUniform3fv:function(a,b,c){if(96>=b)for(var d=hb[3*b-1],f=0;f<3*b;f+=3)d[f]=G[c+4*f>>2],d[f+1]=G[c+(4*f+4)>>2],d[f+2]=G[c+(4*f+8)>>2];else d=G.subarray(c>>2,c+12*b>>2);S.uniform3fv(N[a],d)},glUniform4f:function(a,b,c,d,f){S.uniform4f(N[a],b,c,d,f)},glUniform4fv:function(a,b,c){if(72>=b){var d=hb[4*b-1];c>>=2;for(var f=0;f<
4*b;f+=4){var g=c+f;d[f]=G[g];d[f+1]=G[g+1];d[f+2]=G[g+2];d[f+3]=G[g+3]}}else d=G.subarray(c>>2,c+16*b>>2);S.uniform4fv(N[a],d)},glUniformMatrix4fv:function(a,b,c,d){if(18>=b){var f=hb[16*b-1];d>>=2;for(var g=0;g<16*b;g+=16){var h=d+g;f[g]=G[h];f[g+1]=G[h+1];f[g+2]=G[h+2];f[g+3]=G[h+3];f[g+4]=G[h+4];f[g+5]=G[h+5];f[g+6]=G[h+6];f[g+7]=G[h+7];f[g+8]=G[h+8];f[g+9]=G[h+9];f[g+10]=G[h+10];f[g+11]=G[h+11];f[g+12]=G[h+12];f[g+13]=G[h+13];f[g+14]=G[h+14];f[g+15]=G[h+15]}}else f=G.subarray(d>>2,d+64*b>>2);
S.uniformMatrix4fv(N[a],!!c,f)},glUseProgram:function(a){S.useProgram(M[a])},glVertexAttribPointer:function(a,b,c,d,f,g){S.vertexAttribPointer(a,b,c,!!d,f,g)},glViewport:function(a,b,c,d){S.viewport(a,b,c,d)},glutCreateWindow:function(){e.a=Gb(e.canvas,!0,!0,{antialias:0!=(dc&128),depth:0!=(dc&16),stencil:0!=(dc&32),alpha:0!=(dc&8)});return e.a?1:0},glutDestroyWindow:function(){e.a=void 0;return 1},glutDisplayFunc:function(a){Ub=a},glutGet:function(a){switch(a){case 100:return 0;case 101:return 0;
case 102:return e.canvas.width;case 103:return e.canvas.height;case 200:return e.canvas.width;case 201:return e.canvas.height;case 500:return 0;case 501:return 0;case 502:return bc;case 503:return cc;case 700:return Date.now()-Wb;case 105:return e.a.getContextAttributes().stencil?8:0;case 106:return e.a.getContextAttributes().depth?8:0;case 110:return e.a.getContextAttributes().alpha?8:0;case 120:return e.a.getContextAttributes().antialias?1:0;default:throw"glutGet("+a+") not implemented yet";}},
glutGetModifiers:function(){return ac},glutIdleFunc:function(a){function b(){Xb&&(I.get(Xb)(),Fb(b,4))}Xb||Fb(b,0);Xb=a},glutInit:function(){Wb=Date.now();var a="ontouchstart"in document.documentElement;a&&(window.addEventListener("touchmove",Z,!0),window.addEventListener("touchstart",Z,!0),window.addEventListener("touchend",Z,!0));window.addEventListener("keydown",ic,!0);window.addEventListener("keyup",jc,!0);window.addEventListener("mousemove",fc,!0);window.addEventListener("mousedown",kc,!0);window.addEventListener("mouseup",
lc,!0);window.addEventListener("mousewheel",mc,!0);window.addEventListener("DOMMouseScroll",mc,!0);Rb.push(function(b,c){$b&&I.get($b)(b,c)});Ba.push(function(){a&&(window.removeEventListener("touchmove",Z,!0),window.removeEventListener("touchstart",Z,!0),window.removeEventListener("touchend",Z,!0));window.removeEventListener("keydown",ic,!0);window.removeEventListener("keyup",jc,!0);window.removeEventListener("mousemove",fc,!0);window.removeEventListener("mousedown",kc,!0);window.removeEventListener("mouseup",
lc,!0);window.removeEventListener("mousewheel",mc,!0);window.removeEventListener("DOMMouseScroll",mc,!0);e.canvas.width=e.canvas.height=1})},glutInitDisplayMode:function(a){dc=a},glutInitWindowPosition:function(){},glutInitWindowSize:function(a,b){Sb(bc=a,cc=b)},glutKeyboardFunc:function(a){Yb=a},glutMainLoop:function(){var a=e.canvas.width,b=e.canvas.height;Kb();Sb(a,b,!0);$b&&I.get($b)(a,b);Tb();Tb();throw"unwind";},glutMouseFunc:function(a){Y=a},glutPostRedisplay:Tb,glutReshapeFunc:function(a){$b=
a},glutSpecialFunc:function(a){Zb=a},glutSwapBuffers:function(){},memory:A,setTempRet0:function(){}};
(function(){function a(f){e.asm=f.exports;I=e.asm.__indirect_function_table;J--;e.monitorRunDependencies&&e.monitorRunDependencies(J);0==J&&(null!==Ea&&(clearInterval(Ea),Ea=null),K&&(f=K,K=null,f()))}function b(f){a(f.instance)}function c(f){return Ja().then(function(g){return WebAssembly.instantiate(g,d)}).then(f,function(g){x("failed to asynchronously prepare wasm: "+g);w(g)})}var d={env:rc,wasi_snapshot_preview1:rc};J++;e.monitorRunDependencies&&e.monitorRunDependencies(J);if(e.instantiateWasm)try{return e.instantiateWasm(d,
a)}catch(f){return x("Module.instantiateWasm callback failed with error: "+f),!1}(function(){return z||"function"!==typeof WebAssembly.instantiateStreaming||Ga()||Fa("file://")||"function"!==typeof fetch?c(b):fetch(L,{credentials:"same-origin"}).then(function(f){return WebAssembly.instantiateStreaming(f,d).then(b,function(g){x("wasm streaming compile failed: "+g);x("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();
var pc=e.___wasm_call_ctors=function(){return(pc=e.___wasm_call_ctors=e.asm.__wasm_call_ctors).apply(null,arguments)},fb=e._malloc=function(){return(fb=e._malloc=e.asm.malloc).apply(null,arguments)};e._free=function(){return(e._free=e.asm.free).apply(null,arguments)};e._main=function(){return(e._main=e.asm.main).apply(null,arguments)};e.___errno_location=function(){return(e.___errno_location=e.asm.__errno_location).apply(null,arguments)};
e.stackSave=function(){return(e.stackSave=e.asm.stackSave).apply(null,arguments)};e.stackRestore=function(){return(e.stackRestore=e.asm.stackRestore).apply(null,arguments)};var sa=e.stackAlloc=function(){return(sa=e.stackAlloc=e.asm.stackAlloc).apply(null,arguments)};e.dynCall_jiji=function(){return(e.dynCall_jiji=e.asm.dynCall_jiji).apply(null,arguments)};var tc;function ia(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}
K=function uc(){tc||vc();tc||(K=uc)};
function vc(a){function b(){if(!tc&&(tc=!0,e.calledRun=!0,!B)){Ka(za);Ka(Aa);if(e.onRuntimeInitialized)e.onRuntimeInitialized();if(wc){var c=a,d=e._main;c=c||[];var f=c.length+1,g=sa(4*(f+1));F[g>>2]=ra(aa);for(var h=1;h<f;h++)F[(g>>2)+h]=ra(c[h-1]);F[(g>>2)+f]=0;try{var p=d(f,g);qc(p,!0)}catch(l){l instanceof ia||("unwind"==l?noExitRuntime=!0:((c=l)&&"object"===typeof l&&l.stack&&(c=[l,l.stack]),x("exception thrown: "+c),r(1,l)))}finally{}}if(e.postRun)for("function"==typeof e.postRun&&(e.postRun=
[e.postRun]);e.postRun.length;)c=e.postRun.shift(),Ca.unshift(c);Ka(Ca)}}a=a||n;if(!(0<J)){if(e.preRun)for("function"==typeof e.preRun&&(e.preRun=[e.preRun]);e.preRun.length;)Da();Ka(ya);0<J||(e.setStatus?(e.setStatus("Running..."),setTimeout(function(){setTimeout(function(){e.setStatus("")},1);b()},1)):b())}}e.run=vc;function qc(a,b){if(!b||!noExitRuntime||0!==a){if(!noExitRuntime){if(e.onExit)e.onExit(a);B=!0}r(a,new ia(a))}}
if(e.preInit)for("function"==typeof e.preInit&&(e.preInit=[e.preInit]);0<e.preInit.length;)e.preInit.pop()();var wc=!0;e.noInitialRun&&(wc=!1);noExitRuntime=!0;vc();
