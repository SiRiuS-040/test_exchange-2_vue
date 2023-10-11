(function(){"use strict";var e={9135:function(e,t,a){var n=a(9242),o=a(3396),r=a(4870),s=a(2483),u={__name:"App",setup(e){const t=(0,s.yj)();return(e,a)=>((0,o.wg)(),(0,o.j4)((0,r.SU)(s.MA),{key:(0,r.SU)(t).path},{default:(0,o.w5)((({Component:e})=>[(0,o.Wm)(n.uT,null,{default:(0,o.w5)((()=>[((0,o.wg)(),(0,o.j4)((0,o.LL)(e)))])),_:2},1024)])),_:1}))}};const l=u;var c=l;const i=e=>((0,o.dD)("data-v-2984aeb6"),e=e(),(0,o.Cn)(),e),p={class:"app-header"},d=i((()=>(0,o._)("div",{class:"app-header__content"}," Курсы обмена валют ",-1))),g=[d];function v(e,t,a,n,r,s){return(0,o.wg)(),(0,o.iD)("div",p,g)}var h={name:"AppHeader"},f=a(89);const _=(0,f.Z)(h,[["render",v],["__scopeId","data-v-2984aeb6"]]);var m=_;const w={class:"app-main"},y={class:"app-main__content container"};function x(e,t,a,n,r,s){return(0,o.wg)(),(0,o.iD)("div",w,[(0,o._)("div",y,[(0,o.WI)(e.$slots,"mainContent",{},void 0,!0)])])}var b={name:"AppMain"};const S=(0,f.Z)(b,[["render",x],["__scopeId","data-v-1be534b8"]]);var D=S;const P={class:"app-footer"},k=(0,o._)("div",{class:"app-footer__content"}," API - https://www.cbr-xml-daily.ru/ ",-1),V=[k];function U(e,t,a,n,r,s){return(0,o.wg)(),(0,o.iD)("div",P,V)}var j={name:"AppFooter",components:{}};const L=(0,f.Z)(j,[["render",U]]);var O=L,A=a(7139);const C=e=>((0,o.dD)("data-v-0968b660"),e=e(),(0,o.Cn)(),e),H={class:"app-page"},R={key:2,class:"app-page__content"},E={class:"exchange"},I={class:"exchange__select-wrapper"},F={key:0,class:"exchange__select-list"},T=["onClick"],W={class:"exchange__result-wrapper"},Z=C((()=>(0,o._)("span",null,"руб.",-1)));function q(e,t,a,r,s,u){const l=(0,o.up)("AppPlugLoading"),c=(0,o.up)("AppPlug404");return(0,o.wg)(),(0,o.iD)("div",H,[r.isLoading?((0,o.wg)(),(0,o.j4)(l,{key:0})):(0,o.kq)("",!0),r.is404Plug&&!r.isLoading?((0,o.wg)(),(0,o.j4)(c,{key:1})):(0,o.kq)("",!0),r.isPageDataLoaded&&!r.isLoading?((0,o.wg)(),(0,o.iD)("section",R,[(0,o._)("div",E,[(0,o._)("div",null," Конвертер валют. Выбранный курс: "+(0,A.zw)(r.selectedExchangeValue)+" р. за 1 ед. ",1),(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>r.startValue=e),onInput:t[1]||(t[1]=(...e)=>r.setResultValue&&r.setResultValue(...e)),placeholder:"Введите кол-во валюты",type:"text",class:"exchange__input-value ui-input"},null,544),[[n.nr,r.startValue]]),(0,o._)("p",{onClick:t[2]||(t[2]=(...e)=>r.openSelect&&r.openSelect(...e)),class:"exchange__selected-desc fake-input"},(0,A.zw)(r.selectedExchangeDesc),1),(0,o._)("div",I,[r.isSelectOpen?((0,o.wg)(),(0,o.iD)("ul",F,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(r.appPageData.Valute,((e,t)=>((0,o.wg)(),(0,o.iD)("li",{key:t,onClick:t=>r.selectValue(e),class:"fake-input"},(0,A.zw)(t),9,T)))),128))])):(0,o.kq)("",!0)]),(0,o._)("div",W,[(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":t[3]||(t[3]=e=>r.exchangeResult=e),onInput:t[4]||(t[4]=(...e)=>r.setStartValue&&r.setStartValue(...e)),placeholder:"Итого",type:"tel",class:"ui-input"},null,544),[[n.nr,r.exchangeResult]]),Z])])])):(0,o.kq)("",!0)])}var z=a.p+"img/404.cf1e3f5a.png";const $={class:"app-plug"},M=(0,o._)("img",{src:z,alt:"",width:"280",height:"200",class:"app-404-plug__image"},null,-1),N=(0,o._)("h2",{class:"app-plug__text"}," Ошибка запуска приложения ",-1),B=(0,o._)("p",null," (возможно неполадки с сетью / API) ",-1),G=[M,N,B];function K(e,t,a,n,r,s){return(0,o.wg)(),(0,o.iD)("section",$,G)}var Y={name:"AppPlug404",props:{componentData:{type:Object}}};const J=(0,f.Z)(Y,[["render",K]]);var Q=J,X=a.p+"img/loading.3cf3c522.gif";const ee={class:"app-plug"},te=(0,o._)("img",{src:X,alt:"",width:"40",height:"40",class:"app-404-plug__image"},null,-1),ae=(0,o._)("p",null," Загружаются данные курсов валют ",-1),ne=[te,ae];function oe(e,t,a,n,r,s){return(0,o.wg)(),(0,o.iD)("section",ee,ne)}var re={name:"AppPlugLoading",props:{componentData:{type:Object}}};const se=(0,f.Z)(re,[["render",oe]]);var ue=se;const le={token:"",headers:new Headers({Accept:"application/json"}),baseURL:"https://www.cbr-xml-daily.ru/daily_json.js"};var ce={index(e){return fetch(le.baseURL+`${e}`,{method:"GET",headers:le.headers}).then((function(e){if(200!=e.status)throw e.status;return e.json()})).catch((function(){return{dataEmpty:!0}}))},store(e){return le.headers.set("Content-Type","multipart/form-data"),le.headers.set("Authorization","Bearer "+le.token),fetch(le.baseURL+"/",{method:"POST",headers:le.headers,body:e}).then((function(e){if(201!=e.status)throw e.status;return e.json()}))}};const ie=e=>{const t=(0,r.iH)(!1),a=(0,r.iH)(!1),n=(0,r.iH)(!0),o=(0,r.iH)({}),s=async()=>{o.value=await ce.index(e),!0===o.value.dataEmpty?(a.value=!1,t.value=!0,n.value=!1):(a.value=!0,n.value=!1)};return s().then(),{appPageData:o,isPageDataLoaded:a,is404Plug:t,isLoading:n}};var pe={name:"PageHome",components:{AppPlug404:Q,AppPlugLoading:ue},mounted(){},setup(){const{appPageData:e,isPageDataLoaded:t,is404Plug:a,isLoading:n}=ie(""),s=(0,r.iH)(0),u=(0,r.iH)(0),l=(0,r.iH)(!1),c=(0,r.iH)(localStorage.currency),i=t=>`${(0,r.SU)(e).Valute[t]["Name"]} (${(0,r.SU)(e).Valute[t]["CharCode"]})`,p=(0,o.Fl)((()=>(0,r.SU)(c)?+((0,r.SU)(e).Valute[(0,r.SU)(c)]["Value"]/(0,r.SU)(e).Valute[(0,r.SU)(c)]["Nominal"]).toFixed(2):0)),d=(0,o.Fl)((()=>(0,r.SU)(c)?i((0,r.SU)(c)):"Выберите валюту")),g=()=>{l.value=!0},v=()=>{u.value=+((0,r.SU)(s)*(0,r.SU)(p)).toFixed(2)},h=()=>{s.value=+((0,r.SU)(u)/(0,r.SU)(p)).toFixed(2)},f=e=>{l.value=!1,localStorage.currency=e["CharCode"],c.value=localStorage.currency,v()};return{appPageData:e,isPageDataLoaded:t,is404Plug:a,isLoading:n,isSelectOpen:l,startValue:s,exchangeResult:u,selectedExchangeValue:p,selectedExchangeDesc:d,openSelect:g,selectValue:f,setResultValue:v,setStartValue:h}}};const de=(0,f.Z)(pe,[["render",q],["__scopeId","data-v-0968b660"]]);var ge=de;const ve={class:"app-body"};var he={__name:"ViewHome",setup(e){return(e,t)=>((0,o.wg)(),(0,o.iD)("div",ve,[(0,o.Wm)(m),(0,o.Wm)(D,null,{mainContent:(0,o.w5)((()=>[(0,o.Wm)(n.uT,null,{default:(0,o.w5)((()=>[(0,o.Wm)(ge)])),_:1})])),_:1}),(0,o.Wm)(O)]))}};const fe=he;var _e=fe;const me={history:(0,s.r5)(),routes:[{path:"/",name:"home",component:_e}]},we=(0,s.p7)(me);var ye=we;const xe=(0,n.ri)(c);xe.use(ye),xe.mount("#app")}},t={};function a(n){var o=t[n];if(void 0!==o)return o.exports;var r=t[n]={exports:{}};return e[n].call(r.exports,r,r.exports,a),r.exports}a.m=e,function(){var e=[];a.O=function(t,n,o,r){if(!n){var s=1/0;for(i=0;i<e.length;i++){n=e[i][0],o=e[i][1],r=e[i][2];for(var u=!0,l=0;l<n.length;l++)(!1&r||s>=r)&&Object.keys(a.O).every((function(e){return a.O[e](n[l])}))?n.splice(l--,1):(u=!1,r<s&&(s=r));if(u){e.splice(i--,1);var c=o();void 0!==c&&(t=c)}}return t}r=r||0;for(var i=e.length;i>0&&e[i-1][2]>r;i--)e[i]=e[i-1];e[i]=[n,o,r]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.p="/test_exchange-2_vue/"}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,r,s=n[0],u=n[1],l=n[2],c=0;if(s.some((function(t){return 0!==e[t]}))){for(o in u)a.o(u,o)&&(a.m[o]=u[o]);if(l)var i=l(a)}for(t&&t(n);c<s.length;c++)r=s[c],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return a.O(i)},n=self["webpackChunktest_exchange_2_vue"]=self["webpackChunktest_exchange_2_vue"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(9135)}));n=a.O(n)})();
//# sourceMappingURL=app.98a2c782.js.map