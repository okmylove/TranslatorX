!function(e,i,t){var n=.4,o={use_html5_location:!1,ipinfodb_key:!1,gapi_location:!0,location_cookie:"location",location_cookie_timeout:5,session_timeout:32,session_cookie:"first_session"},r=function(){if(String.prototype.contains=function(e){if("string"==typeof e)return-1!==this.indexOf(e);for(var i=0;i<e.length;i++)if(-1!==this.indexOf(e[i]))return!0;return!1},e.session&&e.session.options)for(option in e.session.options)o[option]=e.session.options[option];var i={api_version:n,locale:a.locale(),current_session:a.session(),original_session:a.session(o.session_cookie,24*o.session_timeout*60*60*1e3),browser:a.browser(),plugins:a.plugins(),time:a.time(),device:a.device()};if(o.use_html5_location?i.location=a.html5_location():o.ipinfodb_key?i.location=a.ipinfodb_location(o.ipinfodb_key):o.gapi_location&&(i.location=a.gapi_location()),e.session&&e.session.start)var t=e.session.start;var r,s=0,c=function(){0===s&&t&&t(e.session)};e.session={};for(var l in i)if("function"==typeof(r=i[l]))try{r(function(i){e.session[l]=i,s--,c()}),s++}catch(i){e.console&&"function"==typeof console.log&&console.log(i)}else e.session[l]=r;c()},s={detect:function(){return{browser:this.search(this.data.browser),version:this.search(t.userAgent)||this.search(t.appVersion),os:this.search(this.data.os)}},search:function(e){if("object"!=typeof e){var i=e.indexOf(this.version_string);if(-1==i)return;return parseFloat(e.substr(i+this.version_string.length+1))}for(var t=0;t<e.length;t++){var n=e[t].string,o=e[t].prop;if(this.version_string=e[t].versionSearch||e[t].identity,n){if(-1!=n.indexOf(e[t].subString))return e[t].identity}else if(o)return e[t].identity}},data:{browser:[{string:t.userAgent,subString:"Chrome",identity:"Chrome"},{string:t.userAgent,subString:"OmniWeb",versionSearch:"OmniWeb/",identity:"OmniWeb"},{string:t.vendor,subString:"Apple",identity:"Safari",versionSearch:"Version"},{prop:e.opera,identity:"Opera",versionSearch:"Version"},{string:t.vendor,subString:"iCab",identity:"iCab"},{string:t.vendor,subString:"KDE",identity:"Konqueror"},{string:t.userAgent,subString:"Firefox",identity:"Firefox"},{string:t.vendor,subString:"Camino",identity:"Camino"},{string:t.userAgent,subString:"Netscape",identity:"Netscape"},{string:t.userAgent,subString:"MSIE",identity:"Explorer",versionSearch:"MSIE"},{string:t.userAgent,subString:"Gecko",identity:"Mozilla",versionSearch:"rv"},{string:t.userAgent,subString:"Mozilla",identity:"Netscape",versionSearch:"Mozilla"}],os:[{string:t.platform,subString:"Win",identity:"Windows"},{string:t.platform,subString:"Mac",identity:"Mac"},{string:t.userAgent,subString:"iPhone",identity:"iPhone/iPod"},{string:t.userAgent,subString:"iPad",identitiy:"iPad"},{string:t.platform,subString:"Linux",identity:"Linux"},{string:t.userAgent,subString:"Android",identity:"Android"}]}},a={browser:function(){return s.detect()},time:function(){var e=new Date,i=new Date;return e.setMonth(0),e.setDate(1),i.setMonth(6),i.setDate(1),{tz_offset:-(new Date).getTimezoneOffset()/60,observes_dst:e.getTimezoneOffset()!==i.getTimezoneOffset()}},locale:function(){var e=(t.language||t.browserLanguage||t.systemLanguage||t.userLanguage).split("-");return 2==e.length?{country:e[1].toLowerCase(),lang:e[0].toLowerCase()}:e?{lang:e[0].toLowerCase(),country:null}:{lang:null,country:null}},device:function(){var n={screen:{width:screen.width,height:screen.height}},o=i.documentElement,r=i.getElementsByTagName("body")[0];return n.viewport={width:e.innerWidth||o.clientWidth||r.clientWidth,height:e.innerHeight||o.clientHeight||r.clientHeight},n.is_tablet=!!t.userAgent.match(/(iPad|SCH-I800|xoom|kindle)/i),n.is_phone=!n.isTablet&&!!t.userAgent.match(/(iPhone|iPod|blackberry|android 0.5|htc|lg|midp|mmp|mobile|nokia|opera mini|palm|pocket|psp|sgh|smartphone|symbian|treo mini|Playstation Portable|SonyEricsson|Samsung|MobileExplorer|PalmSource|Benq|Windows Phone|Windows Mobile|IEMobile|Windows CE|Nintendo Wii)/i),n.is_mobile=n.is_tablet||n.is_phone,n},plugins:function(){var e=function(e){if(t.plugins){for(var i,n=0,o=t.plugins.length;n<o;n++)if((i=t.plugins[n])&&i.name&&-1!==i.name.toLowerCase().indexOf(e))return!0;return!1}return!1};return{flash:e("flash"),silverlight:e("silverlight"),java:e("java"),quicktime:e("quicktime")}},session:function(t,n){var o=c.get_obj(t);if(null==o){o={visits:1,start:(new Date).getTime(),last_visit:(new Date).getTime(),url:e.location.href,path:e.location.pathname,referrer:i.referrer,referrer_info:c.parse_url(i.referrer),search:{engine:null,query:null}};var r,s=[{name:"Google",host:"google",query:"q"},{name:"Bing",host:"bing.com",query:"q"},{name:"Yahoo",host:"search.yahoo",query:"p"},{name:"AOL",host:"search.aol",query:"q"},{name:"Ask",host:"ask.com",query:"q"},{name:"Baidu",host:"baidu.com",query:"wd"}],a=s.length,l=0,u="q query term p wd query text".split(" ");for(l=0;l<a;l++)if(r=s[l],-1!==o.referrer_info.host.indexOf(r.host)){o.search.engine=r.name,o.search.query=o.referrer_info.query[r.query],o.search.terms=o.search.query?o.search.query.split(" "):null;break}if(null===o.search.engine&&o.referrer_info.search.length>1)for(l=0;l<u.length;l++){var g=o.referrer_info.query[u[l]];if(g){o.search.engine="Unknown",o.search.query=g,o.search.terms=g.split(" ");break}}}else o.last_visit=(new Date).getTime(),o.visits++;return c.set_cookie(t,c.package_obj(o),n),o},html5_location:function(){return function(e){t.geolocation.getCurrentPosition(function(i){i.source="html5",e(i)},function(){o.gapi_location?a.gapi_location()(e):e({error:!0,source:"html5"})})}},gapi_location:function(){return function(i){var t=c.get_obj(o.location_cookie);t&&"google"===t.source?i(t):(e.gloader_ready=function(){"google"in e&&(e.google.loader.ClientLocation?(e.google.loader.ClientLocation.source="google",i(e.google.loader.ClientLocation)):i({error:!0,source:"google"}),c.set_cookie(o.location_cookie,c.package_obj(e.google.loader.ClientLocation),60*o.location_cookie_timeout*60*1e3))})}},ipinfodb_location:function(i){return function(t){var n=c.get_obj(o.location_cookie);n&&"ipinfodb"===n.source&&t(n),e.ipinfocb=function(e){if("OK"===e.statusCode)e.source="ipinfodb",c.set_cookie(o.location_cookie,c.package_obj(e),60*o.location_cookie*60*1e3),t(e);else{if(o.gapi_location)return a.gapi_location()(t);t({error:!0,source:"ipinfodb",message:e.statusMessage})}},c.embed_script("http://api.ipinfodb.com/v3/ip-city/?key="+i+"&format=json&callback=ipinfocb")}}},c={parse_url:function(e){var t=i.createElement("a"),n={};if(t.href=e,query_str=t.search.substr(1),""!=query_str)for(var o,r=query_str.split("&"),s=0,a=r.length;s<a;s++)o=r[s].split("="),2===o.length&&(n[o[0]]=decodeURI(o[1]));return{host:t.host,path:t.pathname,protocol:t.protocol,port:""===t.port?80:t.port,search:t.search,query:n}},set_cookie:function(t,n,o,r){if(!i.cookie||!t||!n)return null;if(!r)var r={};return null!==n&&n!==undefined||(o=-1),o&&(r.expires=(new Date).getTime()+o),document.cookie=[encodeURIComponent(t),"=",encodeURIComponent(String(n)),r.expires?"; expires="+new Date(r.expires).toUTCString():"",r.path?"; path="+r.path:"",r.domain?"; domain="+r.domain:"",e.location&&"https:"===e.location.protocol?"; secure":""].join("")},get_cookie:function(e,i){return(i=new RegExp("(?:^|; )"+encodeURIComponent(e)+"=([^;]*)").exec(document.cookie))?decodeURIComponent(i[1]):null},embed_script:function(e){var t=i.createElement("script");t.type="text/javascript",t.src=e,i.getElementsByTagName("body")[0].appendChild(t)},package_obj:function(e){e.version=n;var i=l.stringify(e);return delete e.version,i},get_obj:function(e){var i;try{i=l.parse(c.get_cookie(e))}catch(e){}if(i&&i.version==n)return delete i.version,i}},l={parse:e.JSON&&e.JSON.parse||function(e){return"string"==typeof e&&e?new Function("return "+e)():null},stringify:e.JSON&&e.JSON.stringify||function(e){var i=typeof e;if("object"===i&&null!==e){var t,n,o=[],r=e&&e.constructor===Array;for(t in e)n=e[t],i=typeof n,"string"===i?n='"'+n+'"':"object"===i&&null!==n&&(n=this.stringify(n)),o.push((r?"":'"'+t+'":')+n);return(r?"[":"{")+o.join(",")+(r?"]":"}")}if("string"===i)return'"'+e+'"'}};r()}(window,document,navigator);