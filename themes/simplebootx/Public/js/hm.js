(function(){var h={},mt={},c={id:"694932821b7c606e6eb3984aa634ee90",dm:["hdb.com"],js:"tongji.baidu.com/hm-web/js/",etrk:[{id:"find",eventType:"onclick"},{id:"home",eventType:"onclick"},{id:"addPost",eventType:"onclick"},{id:"a_top_register",eventType:"onclick"},{id:"a_top_login",eventType:"onclick"}],icon:'',ctrk:false,align:-1,nv:-1,vdur:1800000,age:31536000000,rec:0,rp:[],trust:0,vcard:0,qiao:0,lxb:0,conv:0,med:0,cvcc:'',cvcf:[],apps:''};var p=void 0,q=!0,r=null,w=!1;mt.j={};mt.j.P=/msie (\d+\.\d+)/i.test(navigator.userAgent);mt.j.Na=/msie (\d+\.\d+)/i.test(navigator.userAgent)?document.documentMode||+RegExp.$1:p;mt.j.cookieEnabled=navigator.cookieEnabled;mt.j.javaEnabled=navigator.javaEnabled();mt.j.language=navigator.language||navigator.browserLanguage||navigator.systemLanguage||navigator.userLanguage||"";mt.j.Sa=(window.screen.width||0)+"x"+(window.screen.height||0);mt.j.colorDepth=window.screen.colorDepth||0;mt.cookie={};
mt.cookie.set=function(a,d,f){var e;f.L&&(e=new Date,e.setTime(e.getTime()+f.L));document.cookie=a+"="+d+(f.domain?"; domain="+f.domain:"")+(f.path?"; path="+f.path:"")+(e?"; expires="+e.toGMTString():"")+(f.fb?"; secure":"")};mt.cookie.get=function(a){return(a=RegExp("(^| )"+a+"=([^;]*)(;|$)").exec(document.cookie))?a[2]:r};mt.p={};mt.p.M=function(a){return document.getElementById(a)};mt.p.xa=function(a){var d;for(d="A";(a=a.parentNode)&&1==a.nodeType;)if(a.tagName==d)return a;return r};
(mt.p.T=function(){function a(){if(!a.D){a.D=q;for(var b=0,d=e.length;b<d;b++)e[b]()}}function d(){try{document.documentElement.doScroll("left")}catch(e){setTimeout(d,1);return}a()}var f=w,e=[],b;document.addEventListener?b=function(){document.removeEventListener("DOMContentLoaded",b,w);a()}:document.attachEvent&&(b=function(){"complete"===document.readyState&&(document.detachEvent("onreadystatechange",b),a())});(function(){if(!f)if(f=q,"complete"===document.readyState)a.D=q;else if(document.addEventListener)document.addEventListener("DOMContentLoaded",
b,w),window.addEventListener("load",a,w);else if(document.attachEvent){document.attachEvent("onreadystatechange",b);window.attachEvent("onload",a);var e=w;try{e=window.frameElement==r}catch(m){}document.documentElement.doScroll&&e&&d()}})();return function(b){a.D?b():e.push(b)}}()).D=w;mt.event={};mt.event.c=function(a,d,f){a.attachEvent?a.attachEvent("on"+d,function(e){f.call(a,e)}):a.addEventListener&&a.addEventListener(d,f,w)};
mt.event.preventDefault=function(a){a.preventDefault?a.preventDefault():a.returnValue=w};mt.m={};mt.m.parse=function(){return(new Function('return (" + source + ")'))()};
mt.m.stringify=function(){function a(a){/["\\\x00-\x1f]/.test(a)&&(a=a.replace(/["\\\x00-\x1f]/g,function(a){var e=f[a];if(e)return e;e=a.charCodeAt();return"\\u00"+Math.floor(e/16).toString(16)+(e%16).toString(16)}));return'"'+a+'"'}function d(a){return 10>a?"0"+a:a}var f={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};return function(e){switch(typeof e){case "undefined":return"undefined";case "number":return isFinite(e)?String(e):"null";case "string":return a(e);case "boolean":return String(e);
default:if(e===r)return"null";if(e instanceof Array){var b=["["],f=e.length,m,g,k;for(g=0;g<f;g++)switch(k=e[g],typeof k){case "undefined":case "function":case "unknown":break;default:m&&b.push(","),b.push(mt.m.stringify(k)),m=1}b.push("]");return b.join("")}if(e instanceof Date)return'"'+e.getFullYear()+"-"+d(e.getMonth()+1)+"-"+d(e.getDate())+"T"+d(e.getHours())+":"+d(e.getMinutes())+":"+d(e.getSeconds())+'"';m=["{"];g=mt.m.stringify;for(f in e)if(Object.prototype.hasOwnProperty.call(e,f))switch(k=
e[f],typeof k){case "undefined":case "unknown":case "function":break;default:b&&m.push(","),b=1,m.push(g(f)+":"+g(k))}m.push("}");return m.join("")}}}();mt.lang={};mt.lang.d=function(a,d){return"[object "+d+"]"==={}.toString.call(a)};mt.lang.bb=function(a){return mt.lang.d(a,"Number")&&isFinite(a)};mt.lang.eb=function(a){return mt.lang.d(a,"String")};mt.localStorage={};
mt.localStorage.I=function(){if(!mt.localStorage.h)try{mt.localStorage.h=document.createElement("input"),mt.localStorage.h.type="hidden",mt.localStorage.h.style.display="none",mt.localStorage.h.addBehavior("#default#userData"),document.getElementsByTagName("head")[0].appendChild(mt.localStorage.h)}catch(a){return w}return q};
mt.localStorage.set=function(a,d,f){var e=new Date;e.setTime(e.getTime()+f||31536E6);try{window.localStorage?(d=e.getTime()+"|"+d,window.localStorage.setItem(a,d)):mt.localStorage.I()&&(mt.localStorage.h.expires=e.toUTCString(),mt.localStorage.h.load(document.location.hostname),mt.localStorage.h.setAttribute(a,d),mt.localStorage.h.save(document.location.hostname))}catch(b){}};
mt.localStorage.get=function(a){if(window.localStorage){if(a=window.localStorage.getItem(a)){var d=a.indexOf("|"),f=a.substring(0,d)-0;if(f&&f>(new Date).getTime())return a.substring(d+1)}}else if(mt.localStorage.I())try{return mt.localStorage.h.load(document.location.hostname),mt.localStorage.h.getAttribute(a)}catch(e){}return r};
mt.localStorage.remove=function(a){if(window.localStorage)window.localStorage.removeItem(a);else if(mt.localStorage.I())try{mt.localStorage.h.load(document.location.hostname),mt.localStorage.h.removeAttribute(a),mt.localStorage.h.save(document.location.hostname)}catch(d){}};mt.sessionStorage={};mt.sessionStorage.set=function(a,d){if(window.sessionStorage)try{window.sessionStorage.setItem(a,d)}catch(f){}};
mt.sessionStorage.get=function(a){return window.sessionStorage?window.sessionStorage.getItem(a):r};mt.sessionStorage.remove=function(a){window.sessionStorage&&window.sessionStorage.removeItem(a)};mt.V={};mt.V.log=function(a,d){var f=new Image,e="mini_tangram_log_"+Math.floor(2147483648*Math.random()).toString(36);window[e]=f;f.onload=f.onerror=f.onabort=function(){f.onload=f.onerror=f.onabort=r;f=window[e]=r;d&&d(a)};f.src=a};mt.H={};
mt.H.Fa=function(){var a="";if(navigator.plugins&&navigator.mimeTypes.length){var d=navigator.plugins["Shockwave Flash"];d&&d.description&&(a=d.description.replace(/^.*\s+(\S+)\s+\S+$/,"$1"))}else if(window.ActiveXObject)try{if(d=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"))(a=d.GetVariable("$version"))&&(a=a.replace(/^.*\s+(\d+),(\d+).*$/,"$1.$2"))}catch(f){}return a};
mt.H.ra=function(a,d,f,e,b){return'<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="'+a+'" width="'+f+'" height="'+e+'"><param name="movie" value="'+d+'" /><param name="flashvars" value="'+(b||"")+'" /><param name="allowscriptaccess" value="always" /><embed type="application/x-shockwave-flash" name="'+a+'" width="'+f+'" height="'+e+'" src="'+d+'" flashvars="'+(b||"")+'" allowscriptaccess="always" /></object>'};mt.url={};
mt.url.l=function(a,d){var f=a.match(RegExp("(^|&|\\?|#)("+d+")=([^&#]*)(&|$|#)",""));return f?f[3]:r};mt.url.ab=function(a){return(a=a.match(/^(https?:)\/\//))?a[1]:r};mt.url.Ba=function(a){return(a=a.match(/^(https?:\/\/)?([^\/\?#]*)/))?a[2].replace(/.*@/,""):r};mt.url.Z=function(a){return(a=mt.url.Ba(a))?a.replace(/:\d+$/,""):a};mt.url.$a=function(a){return(a=a.match(/^(https?:\/\/)?[^\/]*(.*)/))?a[2].replace(/[\?#].*/,"").replace(/^$/,"/"):r};
h.k={Ma:"http://tongji.baidu.com/hm-web/welcome/ico",S:"hm.baidu.com/hm.gif",ka:"baidu.com",Ja:"hmmd",Ka:"hmpl",Ia:"hmkw",Ga:"hmci",La:"hmsr",Ha:"hmcu",z:0,o:Math.round(+new Date/1E3),protocol:"https:"===document.location.protocol?"https:":"http:",cb:0,pa:6E5,qa:10,W:1024,oa:1,w:2147483647,ea:"cc cf ci ck cl cm cp cu cw ds ep et fl ja ln lo lt nv rnd si st su v cv lv api u tt".split(" ")};
(function(){var a={s:{},c:function(a,f){this.s[a]=this.s[a]||[];this.s[a].push(f)},B:function(a,f){this.s[a]=this.s[a]||[];for(var e=this.s[a].length,b=0;b<e;b++)this.s[a][b](f)}};return h.r=a})();
(function(){function a(a,e){var b=document.createElement("script");b.charset="utf-8";d.d(e,"Function")&&(b.readyState?b.onreadystatechange=function(){if("loaded"===b.readyState||"complete"===b.readyState)b.onreadystatechange=r,e()}:b.onload=function(){e()});b.src=a;var l=document.getElementsByTagName("script")[0];l.parentNode.insertBefore(b,l)}var d=mt.lang;return h.load=a})();
(function(){function a(){var a="";h.b.a.nv?(a=encodeURIComponent(document.referrer),window.sessionStorage?f.set("Hm_from_"+c.id,a):d.set("Hm_from_"+c.id,a,864E5)):a=(window.sessionStorage?f.get("Hm_from_"+c.id):d.get("Hm_from_"+c.id))||"";return a}var d=mt.localStorage,f=mt.sessionStorage;return h.X=a})();
(function(){var a=h.k,d=mt.H,f={init:function(){if(""!==c.icon){var e;e=c.icon.split("|");var b=a.Ma+"?s="+c.id,f=("http:"==a.protocol?"http://eiv":"https://bs")+".baidu.com"+e[0]+"."+e[1];switch(e[1]){case "swf":e=d.ra("HolmesIcon"+a.o,f,e[2],e[3],"s="+b);break;case "gif":e='<a href="'+b+'" target="_blank"><img border="0" src="'+f+'" width="'+e[2]+'" height="'+e[3]+'"></a>';break;default:e='<a href="'+b+'" target="_blank">'+e[0]+"</a>"}document.write(e)}}};h.r.c("pv-b",f.init);return f})();
(function(){var a=mt.p,d=mt.event,f={ga:function(){d.c(document,"click",f.ua());for(var e=c.etrk.length,b=0;b<e;b++){var l=c.etrk[b],m=a.M(decodeURIComponent(l.id));m&&d.c(m,l.eventType,f.K())}},K:function(){return function(a){(a.target||a.srcElement).setAttribute("HM_fix",a.clientX+":"+a.clientY);h.b.a.et=1;h.b.a.ep="{id:"+this.id+",eventType:"+a.type+"}";h.b.g()}},ua:function(){return function(a){var b=a.target||a.srcElement;if(b){var d=b.getAttribute("HM_fix"),f=a.clientX+":"+a.clientY;if(d&&d==
f)b.removeAttribute("HM_fix");else if(d=c.etrk.length,0<d){for(f={};b&&b!=document.body;)b.id&&(f[b.id]=""),b=b.parentNode;for(b=0;b<d;b++){var g=decodeURIComponent(c.etrk[b].id);f.hasOwnProperty(g)&&(h.b.a.et=1,h.b.a.ep="{id:"+g+",eventType:"+a.type+"}",h.b.g())}}}}}};h.r.c("pv-b",f.ga);return f})();
(function(){var a=mt.p,d=mt.event,f=mt.j,e=h.k,b=[],l={fa:function(){c.ctrk&&(d.c(document,"mouseup",l.na()),d.c(window,"unload",function(){l.F()}),setInterval(function(){l.F()},e.pa))},na:function(){return function(a){a=l.ya(a);if(""!==a){var d=(e.protocol+"//"+e.S+"?"+h.b.da().replace(/ep=[^&]*/,"ep="+encodeURIComponent("["+a+"]"))).length;d+(e.w+"").length>e.W||(d+encodeURIComponent(b.join(",")+(b.length?",":"")).length+(e.w+"").length>e.W&&l.F(),b.push(a),(b.length>=e.qa||/t:a/.test(a))&&l.F())}}},
ya:function(b){if(0===e.oa){var d=b.target||b.srcElement,k=d.tagName.toLowerCase();if("embed"==k||"object"==k)return""}f.P?(d=Math.max(document.documentElement.scrollTop,document.body.scrollTop),k=Math.max(document.documentElement.scrollLeft,document.body.scrollLeft),k=b.clientX+k,d=b.clientY+d):(k=b.pageX,d=b.pageY);var n=window.innerWidth||document.documentElement.clientWidth||document.body.offsetWidth;switch(c.align){case 1:k-=n/2;break;case 2:k-=n}k="{x:"+k+",y:"+d+",";d=b.target||b.srcElement;
return k=(b="a"==d.tagName.toLowerCase()?d:a.xa(d))?k+("t:a,u:"+encodeURIComponent(b.href)+"}"):k+"t:b}"},F:function(){0!==b.length&&(h.b.a.et=2,h.b.a.ep="["+b.join(",")+"]",h.b.g(),b=[])}};h.r.c("pv-b",l.fa);return l})();
(function(){var a=mt.p,d=h.k,f=h.load,e=h.X;h.r.c("pv-b",function(){c.rec&&a.T(function(){for(var b=0,l=c.rp.length;b<l;b++){var m=c.rp[b][0],g=c.rp[b][1],k=a.M("hm_t_"+m);if(g&&!(2==g&&!k||k&&""!==k.innerHTML))k="",k=Math.round(Math.random()*d.w),k=4==g?"http://crs.baidu.com/hl.js?"+["siteId="+c.id,"planId="+m,"rnd="+k].join("&"):"http://crs.baidu.com/t.js?"+["siteId="+c.id,"planId="+m,"from="+e(),"referer="+encodeURIComponent(document.referrer),"title="+encodeURIComponent(document.title),"rnd="+
k].join("&"),f(k)}})})})();(function(){var a=h.k,d=h.load,f=h.X;h.r.c("pv-b",function(){if(c.trust&&c.vcard){var e=a.protocol+"//trust.baidu.com/vcard/v.js?"+["siteid="+c.vcard,"url="+encodeURIComponent(document.location.href),"source="+f(),"rnd="+Math.round(Math.random()*a.w),"hm=1"].join("&");d(e)}})})();
(function(){function a(){return function(){h.b.a.nv=0;h.b.a.st=4;h.b.a.et=3;h.b.a.ep=h.J.Da()+","+h.J.Aa();h.b.g()}}function d(){clearTimeout(B);var a;z&&(a="visible"==document[z]);C&&(a=!document[C]);g="undefined"==typeof a?q:a;if((!m||!k)&&g&&n)u=q,s=+new Date;else if(m&&k&&(!g||!n))u=w,t+=+new Date-s;m=g;k=n;B=setTimeout(d,100)}function f(a){var k=document,b="";if(a in k)b=a;else for(var s=["webkit","ms","moz","o"],d=0;d<s.length;d++){var e=s[d]+a.charAt(0).toUpperCase()+a.slice(1);if(e in k){b=
e;break}}return b}function e(a){if(!("focus"==a.type||"blur"==a.type)||!(a.target&&a.target!=window))n="focus"==a.type||"focusin"==a.type?q:w,d()}var b=mt.event,l=h.r,m=q,g=q,k=q,n=q,v=+new Date,s=v,t=0,u=q,z=f("visibilityState"),C=f("hidden"),B;d();(function(){var a=z.replace(/[vV]isibilityState/,"visibilitychange");b.c(document,a,d);b.c(window,"pageshow",d);b.c(window,"pagehide",d);"object"==typeof document.onfocusin?(b.c(document,"focusin",e),b.c(document,"focusout",e)):(b.c(window,"focus",e),
b.c(window,"blur",e))})();h.J={Da:function(){return+new Date-v},Aa:function(){return u?+new Date-s+t:t}};l.c("pv-b",function(){b.c(window,"unload",a())});return h.J})();
(function(){var a=mt.lang,d=h.k,f=h.load,e={Oa:function(b){if((window._dxt===p||a.d(window._dxt,"Array"))&&"undefined"!==typeof h.b){var e=h.b.N();f([d.protocol,"//datax.baidu.com/x.js?si=",c.id,"&dm=",encodeURIComponent(e)].join(""),b)}},Ya:function(b){if(a.d(b,"String")||a.d(b,"Number"))window._dxt=window._dxt||[],window._dxt.push(["_setUserId",b])}};return h.sa=e})();
(function(){function a(k){for(var b in k)if({}.hasOwnProperty.call(k,b)){var d=k[b];f.d(d,"Object")||f.d(d,"Array")?a(d):k[b]=String(d)}}function d(a){return a.replace?a.replace(/'/g,"'0").replace(/\*/g,"'1").replace(/!/g,"'2"):a}var f=mt.lang,e=mt.m,b=h.k,l=h.r,m=h.sa,g={A:[],G:0,ba:w,init:function(){g.e=0;l.c("pv-b",function(){g.ta();g.va()});l.c("pv-d",g.wa);l.c("stag-b",function(){h.b.a.api=g.e||g.G?g.e+"_"+g.G:""});l.c("stag-d",function(){h.b.a.api=0;g.e=0;g.G=0})},ta:function(){var a=window._hmt||
[];if(!a||f.d(a,"Array"))window._hmt={id:c.id,cmd:{},push:function(){for(var a=window._hmt,b=0;b<arguments.length;b++){var k=arguments[b];f.d(k,"Array")&&(a.cmd[a.id].push(k),"_setAccount"===k[0]&&(1<k.length&&/^[0-9a-f]{32}$/.test(k[1]))&&(k=k[1],a.id=k,a.cmd[k]=a.cmd[k]||[]))}}},window._hmt.cmd[c.id]=[],window._hmt.push.apply(window._hmt,a)},va:function(){var a=window._hmt;if(a&&a.cmd&&a.cmd[c.id])for(var b=a.cmd[c.id],d=/^_track(Event|MobConv|Order|RTEvent)$/,e=0,f=b.length;e<f;e++){var l=b[e];
d.test(l[0])?g.A.push(l):g.R(l)}a.cmd[c.id]={push:g.R}},wa:function(){if(0<g.A.length)for(var a=0,b=g.A.length;a<b;a++)g.R(g.A[a]);g.A=r},R:function(a){var b=a[0];if(g.hasOwnProperty(b)&&f.d(g[b],"Function"))g[b](a)},_setAccount:function(a){1<a.length&&/^[0-9a-f]{32}$/.test(a[1])&&(g.e|=1)},_setAutoPageview:function(a){if(1<a.length&&(a=a[1],w===a||q===a))g.e|=2,h.b.$=a},_trackPageview:function(a){if(1<a.length&&a[1].charAt&&"/"===a[1].charAt(0)){g.e|=4;h.b.a.et=0;h.b.a.ep="";h.b.O?(h.b.a.nv=0,h.b.a.st=
4):h.b.O=q;var d=h.b.a.u,e=h.b.a.su;h.b.a.u=b.protocol+"//"+document.location.host+a[1];g.ba||(h.b.a.su=document.location.href);h.b.g();h.b.a.u=d;h.b.a.su=e}},_trackEvent:function(a){2<a.length&&(g.e|=8,h.b.a.nv=0,h.b.a.st=4,h.b.a.et=4,h.b.a.ep=d(a[1])+"*"+d(a[2])+(a[3]?"*"+d(a[3]):"")+(a[4]?"*"+d(a[4]):""),h.b.g())},_setCustomVar:function(a){if(!(4>a.length)){var b=a[1],e=a[4]||3;if(0<b&&6>b&&0<e&&4>e){g.G++;for(var s=(h.b.a.cv||"*").split("!"),f=s.length;f<b-1;f++)s.push("*");s[b-1]=e+"*"+d(a[2])+
"*"+d(a[3]);h.b.a.cv=s.join("!");a=h.b.a.cv.replace(/[^1](\*[^!]*){2}/g,"*").replace(/((^|!)\*)+$/g,"");""!==a?h.b.setData("Hm_cv_"+c.id,encodeURIComponent(a),c.age):h.b.Ra("Hm_cv_"+c.id)}}},_setReferrerOverride:function(a){1<a.length&&(h.b.a.su=a[1].charAt&&"/"===a[1].charAt(0)?b.protocol+"//"+window.location.host+a[1]:a[1],g.ba=q)},_trackOrder:function(b){b=b[1];f.d(b,"Object")&&(a(b),g.e|=16,h.b.a.nv=0,h.b.a.st=4,h.b.a.et=94,h.b.a.ep=e.stringify(b),h.b.g())},_trackMobConv:function(a){if(a={webim:1,
tel:2,map:3,sms:4,callback:5,share:6}[a[1]])g.e|=32,h.b.a.et=93,h.b.a.ep=a,h.b.g()},_trackRTPageview:function(b){b=b[1];f.d(b,"Object")&&(a(b),b=e.stringify(b),512>=encodeURIComponent(b).length&&(g.e|=64,h.b.a.rt=b))},_trackRTEvent:function(d){d=d[1];if(f.d(d,"Object")){a(d);d=encodeURIComponent(e.stringify(d));var l=function(a){var b=h.b.a.rt;g.e|=128;h.b.a.et=90;h.b.a.rt=a;h.b.g();h.b.a.rt=b},m=d.length;if(900>=m)l.call(this,d);else for(var m=Math.ceil(m/900),s="block|"+Math.round(Math.random()*
b.w).toString(16)+"|"+m+"|",t=[],u=0;u<m;u++)t.push(u),t.push(d.substring(900*u,900*u+900)),l.call(this,s+t.join("|")),t=[]}},_setUserId:function(a){a=a[1];m.Oa();m.Ya(a)}};g.init();h.la=g;return h.la})();
(function(){function a(){"undefined"===typeof window["_bdhm_loaded_"+c.id]&&(window["_bdhm_loaded_"+c.id]=q,this.a={},this.$=q,this.O=w,this.init())}var d=mt.url,f=mt.V,e=mt.H,b=mt.lang,l=mt.cookie,m=mt.j,g=mt.localStorage,k=mt.sessionStorage,n=h.k,v=h.r;a.prototype={Q:function(a,b){a="."+a.replace(/:\d+/,"");b="."+b.replace(/:\d+/,"");var d=a.indexOf(b);return-1<d&&d+b.length===a.length},ca:function(a,b){a=a.replace(/^https?:\/\//,"");return 0===a.indexOf(b)},C:function(a){for(var b=0;b<c.dm.length;b++)if(-1<
c.dm[b].indexOf("/")){if(this.ca(a,c.dm[b]))return q}else{var e=d.Z(a);if(e&&this.Q(e,c.dm[b]))return q}return w},N:function(){for(var a=document.location.hostname,b=0,d=c.dm.length;b<d;b++)if(this.Q(a,c.dm[b]))return c.dm[b].replace(/(:\d+)?[\/\?#].*/,"");return a},Y:function(){for(var a=0,b=c.dm.length;a<b;a++){var d=c.dm[a];if(-1<d.indexOf("/")&&this.ca(document.location.href,d))return d.replace(/^[^\/]+(\/.*)/,"$1")+"/"}return"/"},Ea:function(){if(!document.referrer)return n.o-n.z>c.vdur?1:4;
var a=w;this.C(document.referrer)&&this.C(document.location.href)?a=q:(a=d.Z(document.referrer),a=this.Q(a||"",document.location.hostname));return a?n.o-n.z>c.vdur?1:4:3},getData:function(a){try{return l.get(a)||k.get(a)||g.get(a)}catch(b){}},setData:function(a,b,d){try{l.set(a,b,{domain:this.N(),path:this.Y(),L:d}),d?g.set(a,b,d):k.set(a,b)}catch(e){}},Ra:function(a){try{l.set(a,"",{domain:this.N(),path:this.Y(),L:-1}),k.remove(a),g.remove(a)}catch(b){}},Wa:function(){var a,b,d,e,f;n.z=this.getData("Hm_lpvt_"+
c.id)||0;13===n.z.length&&(n.z=Math.round(n.z/1E3));b=this.Ea();a=4!==b?1:0;if(d=this.getData("Hm_lvt_"+c.id)){e=d.split(",");for(f=e.length-1;0<=f;f--)13===e[f].length&&(e[f]=""+Math.round(e[f]/1E3));for(;2592E3<n.o-e[0];)e.shift();f=4>e.length?2:3;for(1===a&&e.push(n.o);4<e.length;)e.shift();d=e.join(",");e=e[e.length-1]}else d=n.o,e="",f=1;this.setData("Hm_lvt_"+c.id,d,c.age);this.setData("Hm_lpvt_"+c.id,n.o);d=n.o===this.getData("Hm_lpvt_"+c.id)?"1":"0";if(0===c.nv&&this.C(document.location.href)&&
(""===document.referrer||this.C(document.referrer)))a=0,b=4;this.a.nv=a;this.a.st=b;this.a.cc=d;this.a.lt=e;this.a.lv=f},da:function(){for(var a=[],b=this.a.et,d=0,e=n.ea.length;d<e;d++){var f=n.ea[d],g=this.a[f];"undefined"!==typeof g&&""!==g&&("tt"!==f||"tt"===f&&0===b)&&a.push(f+"="+encodeURIComponent(g))}this.a.rt&&(0===b?a.push("rt="+encodeURIComponent(this.a.rt)):90===b&&a.push("rt="+this.a.rt));return a.join("&")},Xa:function(){this.Wa();this.a.si=c.id;this.a.su=document.referrer;this.a.ds=
m.Sa;this.a.cl=m.colorDepth+"-bit";this.a.ln=m.language;this.a.ja=m.javaEnabled?1:0;this.a.ck=m.cookieEnabled?1:0;this.a.lo="number"===typeof _bdhm_top?1:0;this.a.fl=e.Fa();this.a.v="1.1.27";this.a.cv=decodeURIComponent(this.getData("Hm_cv_"+c.id)||"");this.a.tt=document.title||"";var a=document.location.href;this.a.cm=d.l(a,n.Ja)||"";this.a.cp=d.l(a,n.Ka)||"";this.a.cw=d.l(a,n.Ia)||"";this.a.ci=d.l(a,n.Ga)||"";this.a.cf=d.l(a,n.La)||"";this.a.cu=d.l(a,n.Ha)||""},init:function(){try{this.Xa(),0===
this.a.nv?this.Ua():this.U(".*"),h.b=this,this.ma(),v.B("pv-b"),this.Ta()}catch(a){var b=[];b.push("si="+c.id);b.push("n="+encodeURIComponent(a.name));b.push("m="+encodeURIComponent(a.message));b.push("r="+encodeURIComponent(document.referrer));f.log(n.protocol+"//"+n.S+"?"+b.join("&"))}},Ta:function(){function a(){v.B("pv-d")}this.$?(this.O=q,this.a.et=0,this.a.ep="",this.g(a)):a()},g:function(a){var d=this;d.a.rnd=Math.round(Math.random()*n.w);v.B("stag-b");var e=n.protocol+"//"+n.S+"?"+d.da();
v.B("stag-d");d.ia(e);f.log(e,function(e){d.U(e);b.d(a,"Function")&&a.call(d)})},ma:function(){var a=document.location.hash.substring(1),b=RegExp(c.id),e=-1<document.referrer.indexOf(n.ka),f=d.l(a,"jn"),g=/^heatlink$|^select$/.test(f);a&&(b.test(a)&&e&&g)&&(this.a.rnd=Math.round(Math.random()*n.w),a=document.createElement("script"),a.setAttribute("type","text/javascript"),a.setAttribute("charset","utf-8"),a.setAttribute("src",n.protocol+"//"+c.js+f+".js?"+this.a.rnd),f=document.getElementsByTagName("script")[0],
f.parentNode.insertBefore(a,f))},ia:function(a){var b=k.get("Hm_unsent_"+c.id)||"",d=this.a.u?"":"&u="+encodeURIComponent(document.location.href),b=encodeURIComponent(a.replace(/^https?:\/\//,"")+d)+(b?","+b:"");k.set("Hm_unsent_"+c.id,b)},U:function(a){var b=k.get("Hm_unsent_"+c.id)||"";b&&(a=encodeURIComponent(a.replace(/^https?:\/\//,"")),a=RegExp(a.replace(/([\*\(\)])/g,"\\$1")+"(%26u%3D[^,]*)?,?","g"),(b=b.replace(a,"").replace(/,$/,""))?k.set("Hm_unsent_"+c.id,b):k.remove("Hm_unsent_"+c.id))},
Ua:function(){var a=this,b=k.get("Hm_unsent_"+c.id);if(b)for(var b=b.split(","),d=function(b){f.log(n.protocol+"//"+decodeURIComponent(b),function(b){a.U(b)})},e=0,g=b.length;e<g;e++)d(b[e])}};return new a})();var x=h.k,y=h.load;if(c.apps){var A=[x.protocol,"//ers.baidu.com/app/s.js?"];A.push(c.apps);y(A.join(""))}var D=h.k,E=h.load;if(c.conv&&"http:"===D.protocol){var F=["http://page.baidu.com/conversion_js.php?sid="];F.push(c.conv);E(F.join(""))}var G=h.k,H=h.load;
c.lxb&&H([G.protocol,"//lxbjs.baidu.com/lxb.js?sid=",c.lxb].join(""));var I=h.load,J=h.k.protocol;if(c.qiao){for(var K=[J+"//goutong.baidu.com/site/"],L=c.id,M=5381,N=L.length,O=0;O<N;O++)M=(33*M+Number(L.charCodeAt(O)))%4294967296;2147483648<M&&(M-=2147483648);K.push(M%1E3+"/");K.push(c.id+"/b.js");K.push("?siteId="+c.qiao);I(K.join(""))}
(function(){var a=mt.p,d=mt.event,f=mt.url,e=mt.m;try{if(window.performance&&performance.timing&&"undefined"!==typeof h.b){var b=+new Date,l=function(a){var b=performance.timing,d=b[a+"Start"]?b[a+"Start"]:0;a=b[a+"End"]?b[a+"End"]:0;return{start:d,end:a,value:0<a-d?a-d:0}},m=r;a.T(function(){m=+new Date});var g=function(){var a,d,g;g=l("navigation");d=l("request");g={netAll:d.start-g.start,netDns:l("domainLookup").value,netTcp:l("connect").value,srv:l("response").start-d.start,dom:performance.timing.domInteractive-
performance.timing.fetchStart,loadEvent:l("loadEvent").end-g.start};a=document.referrer;var k=a.match(/^(http[s]?:\/\/)?([^\/]+)(.*)/)||[],u=r;d=r;if("www.baidu.com"===k[2]||"m.baidu.com"===k[2])u=f.l(a,"qid"),d=f.l(a,"click_t");a=u;g.qid=a!=r?a:"";d!=r?(g.bdDom=m?m-d:0,g.bdRun=b-d,g.bdDef=l("navigation").start-d):(g.bdDom=0,g.bdRun=0,g.bdDef=0);h.b.a.et=87;h.b.a.ep=e.stringify(g);h.b.g()};d.c(window,"load",function(){setTimeout(g,500)})}}catch(k){}})();
(function(){var a=mt.j,d=mt.lang,f=mt.event,e=mt.m;if("undefined"!==typeof h.b&&(c.med||(!a.P||7<a.Na)&&c.cvcc)){var b,l,m,g,k=function(a){if(a.item){for(var b=a.length,d=Array(b);b--;)d[b]=a[b];return d}return[].slice.call(a)},n=function(a,b){for(var d in a)if(a.hasOwnProperty(d)&&b.call(a,d,a[d])===w)return w},v=function(a,f){var g={};g.n=b;g.t="clk";g.v=a;if(f){var k=f.getAttribute("href"),l=f.getAttribute("onclick")?""+f.getAttribute("onclick"):r,n=f.getAttribute("id")||"";m.test(k)?(g.sn="mediate",
g.snv=k):d.d(l,"String")&&m.test(l)&&(g.sn="wrap",g.snv=l);g.id=n}h.b.a.et=86;h.b.a.ep=e.stringify(g);h.b.g();for(g=+new Date;400>=+new Date-g;);};if(c.med)l="/zoosnet",b="swt",m=/swt|zixun|call|chat|zoos|business|talk|kefu|openkf|online|\/LR\/Chatpre\.aspx/i,g={click:function(){for(var a=[],b=k(document.getElementsByTagName("a")),b=[].concat.apply(b,k(document.getElementsByTagName("area"))),b=[].concat.apply(b,k(document.getElementsByTagName("img"))),d,e,f=0,g=b.length;f<g;f++)d=b[f],e=d.getAttribute("onclick"),
d=d.getAttribute("href"),(m.test(e)||m.test(d))&&a.push(b[f]);return a}};else if(c.cvcc){l="/other-comm";b="other";m=c.cvcc.q||p;var s=c.cvcc.id||p;g={click:function(){for(var a=[],b=k(document.getElementsByTagName("a")),b=[].concat.apply(b,k(document.getElementsByTagName("area"))),b=[].concat.apply(b,k(document.getElementsByTagName("img"))),d,e,f,g=0,l=b.length;g<l;g++)d=b[g],m!==p?(e=d.getAttribute("onclick"),f=d.getAttribute("href"),s?(d=d.getAttribute("id"),(m.test(e)||m.test(f)||s.test(d))&&
a.push(b[g])):(m.test(e)||m.test(f))&&a.push(b[g])):s!==p&&(d=d.getAttribute("id"),s.test(d)&&a.push(b[g]));return a}}}if("undefined"!==typeof g&&"undefined"!==typeof m){var t;l+=/\/$/.test(l)?"":"/";var u=function(a,b){if(t===b)return v(l+a,b),w;if(d.d(b,"Array")||d.d(b,"NodeList"))for(var e=0,f=b.length;e<f;e++)if(t===b[e])return v(l+a+"/"+(e+1),b[e]),w};f.c(document,"mousedown",function(a){a=a||window.event;t=a.target||a.srcElement;var b={};for(n(g,function(a,e){b[a]=d.d(e,"Function")?e():document.getElementById(e)});t&&
t!==document&&n(b,u)!==w;)t=t.parentNode})}}})();(function(){var a=mt.p,d=mt.lang,f=mt.event,e=mt.m;if("undefined"!==typeof h.b&&d.d(c.cvcf,"Array")&&0<c.cvcf.length){var b={ha:function(){for(var d=c.cvcf.length,e,g=0;g<d;g++)(e=a.M(decodeURIComponent(c.cvcf[g])))&&f.c(e,"click",b.K())},K:function(){return function(){h.b.a.et=86;var a={n:"form",t:"clk"};a.id=this.id;h.b.a.ep=e.stringify(a);h.b.g()}}};a.T(function(){b.ha()})}})();
(function(){var a=mt.event,d=mt.m;if(c.med&&"undefined"!==typeof h.b){var f=+new Date,e={n:"anti",sb:0,kb:0,clk:0},b=function(){h.b.a.et=86;h.b.a.ep=d.stringify(e);h.b.g()};a.c(document,"click",function(){e.clk++});a.c(document,"keyup",function(){e.kb=1});a.c(window,"scroll",function(){e.sb++});a.c(window,"unload",function(){e.t=+new Date-f;b()});a.c(window,"load",function(){setTimeout(b,5E3)})}})();
(function(){function a(){this.f=r}var d=mt.V,f=mt.j;a.prototype={Pa:function(a){if(this.f)this.i(a,0);else if(this.isSupported()){try{this.f=new ActiveXObject("BDEXIE.BDExExtension.1"),this.aa=q}catch(d){this.aa=w}this.aa?this.i(a,0):this.i(a,-1)}else this.i(a,-1)},Za:function(){this.f&&delete this.f;this.f=r},Va:function(a,d,e){if(this.f&&"SetLocalCache"in this.f)try{this.f.SetLocalCache(a,d)===p&&this.i(e,0)}catch(f){this.i(e,-1)}else this.i(e,-1)},Ca:function(a,d){if(this.f&&"GetLocalCache"in this.f)try{this.i(d,
this.f.GetLocalCache(a))}catch(e){this.i(d,"")}else this.i(d,"")},za:function(a){if(this.f&&"GetCryptStr"in this.f)try{this.i(a,this.f.GetCryptStr("strEncryptID1"))}catch(d){this.i(a,"")}else this.i(a,"")},i:function(a,d){"function"===typeof a&&a(d,this)},isSupported:function(){if(window.ActiveXObject||"ActiveXObject"in window)try{return!!new ActiveXObject("BDEXIE.BDExExtension.1")}catch(a){}return w},Qa:function(){var a=this;this.za(function(e){e!==p&&""!==e&&(d.log("//datax.baidu.com/x.gif?dm="+
encodeURIComponent("datax.baidu.com/webadapter/guid")+"&ac="+encodeURIComponent(e)+"&v=hm-webadapter-0.0.1&rnd="+Math.round(2147483647*Math.random())),a.Va("hmKey",+new Date,function(){a.Za()}))})}};if(f.P&&/^http(s)?:$/.test(document.location.protocol)){var e=new a;e.Pa(function(a){0===a&&e.Ca("hmKey",function(a){a=+a;(isNaN(a)||6048E5<+new Date-a)&&e.Qa()})})}})();})();
