(function(e){function n(n){for(var a,o,s=n[0],c=n[1],l=n[2],p=0,f=[];p<s.length;p++)o=s[p],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&f.push(r[o][0]),r[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);u&&u(n);while(f.length)f.shift()();return i.push.apply(i,l||[]),t()}function t(){for(var e,n=0;n<i.length;n++){for(var t=i[n],a=!0,s=1;s<t.length;s++){var c=t[s];0!==r[c]&&(a=!1)}a&&(i.splice(n--,1),e=o(o.s=t[0]))}return e}var a={},r={app:0},i=[];function o(n){if(a[n])return a[n].exports;var t=a[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=e,o.c=a,o.d=function(e,n,t){o.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,n){if(1&n&&(e=o(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)o.d(t,a,function(n){return e[n]}.bind(null,a));return t},o.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="/shelly-dashboard/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=n,s=s.slice();for(var l=0;l<s.length;l++)n(s[l]);var u=c;i.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"034f":function(e,n,t){"use strict";t("85ec")},"30cb":function(e,n,t){"use strict";t("864d")},"352e":function(e,n,t){"use strict";t("f2b1")},"50b8":function(e,n,t){"use strict";t("65be")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var a=t("2b0e"),r=(t("d3b7"),t("bc3a")),i=t.n(r),o={timeout:6e4},s=i.a.create(o);s.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),s.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),Plugin.install=function(e,n){e.axios=s,window.axios=s,Object.defineProperties(e.prototype,{axios:{get:function(){return s}},$axios:{get:function(){return s}}})},a["a"].use(Plugin);Plugin;var c=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},l=[],u=(t("034f"),t("2877")),p={},f=Object(u["a"])(p,c,l,!1,null,null,null),d=f.exports,m=t("9483");Object(m["a"])("".concat("/shelly-dashboard/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var v=t("8c4f"),h=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("h1",[e._v("Shelly Dashboard")]),t("div",{staticClass:"devices"},e._l(e.devices,(function(e){return t("DeviceCard",{key:e.ip,attrs:{ip:e.ip,fallbackName:e.name}})})),1)])},g=[],y=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"card"},[t("div",{staticClass:"device-details"},[t("h3",[t("span",[e._v(e._s(e.name?e.name:e.fallbackName))]),t("span",{staticClass:"reload-icon",on:{click:e.getDeviceInfo}},[t("svg",{attrs:{"aria-hidden":"true",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"}},[t("path",{attrs:{fill:"currentColor",d:"M500.33 0h-47.41a12 12 0 0 0-12 12.57l4 82.76A247.42 247.42 0 0 0 256 8C119.34 8 7.9 119.53 8 256.19 8.1 393.07 119.1 504 256 504a247.1 247.1 0 0 0 166.18-63.91 12 12 0 0 0 .48-17.43l-34-34a12 12 0 0 0-16.38-.55A176 176 0 1 1 402.1 157.8l-101.53-4.87a12 12 0 0 0-12.57 12v47.41a12 12 0 0 0 12 12h200.33a12 12 0 0 0 12-12V12a12 12 0 0 0-12-12z"}})])])]),t("div",{staticClass:"ip_address"},[e._v(e._s(e.ip))]),t("div",{staticClass:"type"},[t("span",[e._v(e._s(e.deviceTypeName))]),t("span",{staticClass:"divider"},[e._v("|")]),t("a",{attrs:{href:"http://"+e.ip+"/"}},[e._v("manage")])])]),e.loading?t("Spinner"):e._l(e.relays,(function(n,a){return t("RelayCard",{key:e.ip+"-relay-"+a,attrs:{relay:n,fallbackName:e.fallbackName+" - Relay "+a}})}))],2)},b=[],w=(t("b0c0"),function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{class:{relay:!0,on:e.relay.ison,off:!e.relay.ison}},[t("h4",[t("span",[e._v(e._s(e.relay.name?e.relay.name:e.fallbackName))]),t("span",{staticClass:"on-off"},[e._v(e._s(e.relay.ison?"ON":"OFF"))])]),t("div",[t("span",[e._v(e._s(e.relay.btn_type)+" switch")])])])}),_=[],x={props:{relay:Object,fallbackName:String}},C=x,O=(t("352e"),Object(u["a"])(C,w,_,!1,null,"3c4c4f69",null)),j=O.exports,k=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"outter"},[t("div",{staticClass:"inner"},[t("svg",{attrs:{viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg"}},[t("circle",{attrs:{cx:"50",cy:"50",r:"45"}})])])])},S=[],B=(t("a20e"),{}),N=Object(u["a"])(B,k,S,!1,null,"4345e1ec",null),P=N.exports,D={"SHSW-25":{name:"Shelly 2.5"},"SHSW-1":{name:"Shelly 1"}},E={components:{RelayCard:j,Spinner:P},props:{ip:String,fallbackName:String},data:function(){return{loading:!0,type:null,name:null,relays:[]}},computed:{deviceTypeName:function(){var e=this.loading?"loading":"disconnected";return this.type?D[this.type].name:e}},created:function(){this.getDeviceInfo()},methods:{getDeviceInfo:function(){var e=this;this.loading=!0,this.axios.get("http://".concat(this.ip,"/settings")).then((function(n){e.type=n.data.device.type,e.name=n.data.name,e.relays=n.data.relays,e.loading=!1})).catch((function(n){e.loading=!1,console.log("error"),console.log(n)}))}}},M=E,$=(t("50b8"),Object(u["a"])(M,y,b,!1,null,"763547b6",null)),T=$.exports,A=[{ip:"192.168.86.227",name:"Front Door & Entryway Lights"},{ip:"192.168.86.32",name:"Kitchen & Deck"},{ip:"192.168.86.67",name:"Backyard Breezeway"},{ip:"192.168.86.70",name:"Basement Stairway Top"},{ip:"192.168.86.151",name:"Garage & Breezeway"},{ip:"192.168.86.20",name:"Basement Lights"},{ip:"192.168.86.167",name:"Master Bedroom"},{ip:"192.168.86.33",name:"Master Bathroom"},{ip:"192.168.86.250",name:"Dining Room"},{ip:"192.168.86.41",name:"Guest Bedroom"},{ip:"192.168.86.42",name:"Hallway"},{ip:"192.168.86.77",name:"Living Room"},{ip:"192.168.86.40",name:"Kitchen Cab 1"},{ip:"192.168.86.43",name:"Kitchen Cab 2"},{ip:"192.168.86.24",name:"Kitchen Cab 3"},{ip:"192.168.86.45",name:"Kitchen Cab 4"},{ip:"192.168.86.248",name:"Basement Stairway Bottom"},{ip:"192.168.86.27",name:"Basement Bathroom"}],F={components:{DeviceCard:T},data:function(){return{devices:A}}},K=F,R=(t("30cb"),Object(u["a"])(K,h,g,!1,null,"7f7eee2e",null)),z=R.exports;a["a"].use(v["a"]);var H=[{path:"/",name:"Dashboard",component:z}],I=new v["a"]({routes:H}),L=I;a["a"].config.productionTip=!1,new a["a"]({router:L,render:function(e){return e(d)}}).$mount("#app")},"65be":function(e,n,t){},"85ec":function(e,n,t){},"864d":function(e,n,t){},a20e:function(e,n,t){"use strict";t("ac65")},ac65:function(e,n,t){},f2b1:function(e,n,t){}});
//# sourceMappingURL=app.a2a3f176.js.map