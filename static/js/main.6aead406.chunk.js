(this["webpackJsonpcovid19-dashboard"]=this["webpackJsonpcovid19-dashboard"]||[]).push([[0],{14:function(e,n,t){e.exports=t(24)},19:function(e,n,t){},23:function(e,n,t){},24:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),i=t(8),c=t.n(i),o=(t(19),t(3)),l=t.n(o),d=t(12),u=t(4),m=t(2),s=t(1);function f(){var e=Object(m.a)(["\n  grid-area: banner;\n  background: #26070a;\n  padding: 0.5rem 1rem;\n  box-shadow: 0px 0px 36px 0px rgba(0, 0, 0, 0.75);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-radius: 4px;\n  color: #7c92a6;\n  font-size: 1.25rem;\n  @media only screen and (min-width: 768px) {\n    font-size: 2rem;\n  }\n"]);return f=function(){return e},e}var p=s.a.div(f());function g(){return a.a.createElement(p,null,a.a.createElement("div",null,"CORONA TRACKER",a.a.createElement("span",{role:"img","aria-label":"flag",style:{paddingLeft:".5rem"}},"\ud83c\uddee\ud83c\uddf3")))}function v(){var e=Object(m.a)(['\n  height: 100%;\n  background: #591212;\n  // background: -webkit-linear-gradient(to right, #2c5364, #203a43, #0f2027);\n  // background: linear-gradient(to right, #2c5364, #203a43, #0f2027);\n\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 50px 1fr 1fr 2rem;\n  grid-gap: 0.5rem;\n  grid-template-areas: "banner" "content-1" "content-2" "footer";\n  overflow: hidden;\n\n  @media only screen and (min-width: 768px) {\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 100px calc(100% - 160px) 2rem;\n    grid-gap: 10px;\n    padding-bottom: 2rem;\n    grid-template-areas: "banner banner" "content-1 content-2" "content-1 footer";\n  }\n']);return v=function(){return e},e}var h=s.a.div(v());function b(e){return a.a.createElement(h,null,e.children)}function E(){var e=Object(m.a)(["\n  font-size: 1.25rem;\n"]);return E=function(){return e},e}function w(){var e=Object(m.a)(["\n  grid-area: ",";\n  flex-direction: column;\n  display: flex;\n  align-items: flex-start;\n  overflow: hidden;\n"]);return w=function(){return e},e}function x(){var e=Object(m.a)(["\n  font-size: 1rem;\n  width: calc(100% - 0.5rem);\n  @media only screen and (min-width: 768px) {\n    font-size: 1.5rem;\n    width: calc(100% - 0.5rem);\n  }\n"]);return x=function(){return e},e}function y(){var e=Object(m.a)(["\n  font-size: 0.75rem;\n  color: #bdc3c7;\n"]);return y=function(){return e},e}function j(){var e=Object(m.a)(["\n  grid-area: state;\n  flex-direction: column;\n  display: flex;\n  align-items: flex-start;\n  overflow: hidden;\n"]);return j=function(){return e},e}function O(){var e=Object(m.a)(['\n  background: #bf2626;\n  border-radius: 4px;\n  width: 20rem;\n  height: 10rem;\n  margin: 0.5rem 1rem;\n  display: grid;\n  color: #e1e1e1;\n  grid-template-column: 1fr 1fr;\n  gird-template-rows: 1fr 1.5rem 1.5rem;\n  padding: 0.625rem 0.5rem;\n  grid-gap: 0.1rem;\n  cursor: pointer;\n  transition: transform 0.2s;\n  grid-template-areas:\n    "state state"\n    "active confirmed" "recovered deaths";\n\n  :hover {\n    background: #bf2a37;\n    box-shadow: 0px 0px 36px 0px rgba(0, 0, 0, 0.65);\n    transform: scale(1.025);\n    z-index: 2;\n  }\n\n  @media only screen and (min-width: 768px) {\n    margin: 1rem;\n    width: 20rem;\n    height: 12.5rem;\n    margin: 1rem;\n    display: grid;\n    color: #e1e1e1;\n    grid-template-column: 1fr 1fr;\n    gird-template-rows: 1fr 2.5rem 2.5rem;\n    padding: 1rem;\n    grid-gap: 0.5rem;\n  }\n']);return O=function(){return e},e}var k=s.a.div(O()),z=s.a.div(j()),N=s.a.div(y()),S=s.a.div(x()),C=s.a.div(w(),(function(e){return e.gridName})),L=s.a.div(E());function T(e){var n=e.active,t=e.confirmed,r=e.deaths,i=e.recovered,c=e.state;return a.a.createElement(k,null,a.a.createElement(z,null,a.a.createElement(N,null,"State"),a.a.createElement(S,null,c)),a.a.createElement(C,{gridName:"active"},a.a.createElement(N,null,"Active"),a.a.createElement(L,null,n)),a.a.createElement(C,{gridName:"confirmed"},a.a.createElement(N,null,"Confirmed"),a.a.createElement(L,null,t)),a.a.createElement(C,{gridName:"recovered"},a.a.createElement(N,null,"Recovered"),a.a.createElement(L,null,i)),a.a.createElement(C,{gridName:"deaths"},a.a.createElement(N,null,"Deaths"),a.a.createElement(L,null,r)))}function R(){var e=Object(m.a)(["\n  width: 50%;\n  border-width: 0.25px;\n"]);return R=function(){return e},e}function A(){var e=Object(m.a)(["\n  grid-area: footer;\n  color: white;\n  text-align: center;\n  padding-bottom: 0.5rem;\n  @media only screen and (min-width: 768px) {\n    font-size: 0.75rem;\n  }\n"]);return A=function(){return e},e}var G=s.a.div(A()),B=s.a.hr(R());function H(){return a.a.createElement(G,null,a.a.createElement(B,null),"Courtesy @",a.a.createElement("a",{style:{color:"white",paddingLeft:"0.2rem"},href:"https://api.covid19india.org",target:"_blank",rel:"noopener noreferrer"},"Covid19 India Org.")," ","|",a.a.createElement("a",{style:{color:"white",paddingLeft:"0.2rem"},href:"https://github.com/shihabus",target:"_blank",rel:"noopener noreferrer"},"GitHub"))}function I(){var e=Object(m.a)(["\n  grid-area: ",";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: white;\n  font-size: 1rem;\n"]);return I=function(){return e},e}var J=s.a.div(I(),(function(e){return e.gridName}));function W(e){var n=e.gridName,t=e.slogan;return a.a.createElement(J,{gridName:n},t)}W.defaultProps={slogan:"Loading..."};var _=function(){var e=Object(u.a)(l.a.mark((function e(){var n,t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.covid19india.org/data.json");case 2:return n=e.sent,e.next=5,n.json();case 5:return t=e.sent,e.abrupt("return",t);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function D(){var e=Object(m.a)(["\n  grid-area: content-1;\n  height: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: flex-start;\n  justify-content: center;\n  overflow: auto;\n  ::-webkit-scrollbar {\n    width: 0px;\n    background: transparent;\n  }\n  @media only screen and (min-width: 768px) {\n    justify-content: flex-start;\n  }\n"]);return D=function(){return e},e}var K=s.a.div(D());function M(e){console.log("props",e);var n=e.dataSet;return a.a.createElement(K,null,n.map((function(e){return a.a.createElement(T,e)})))}function P(){var e=Object(m.a)(["\n  @media only screen and (min-width: 768px) {\n    flex-direction: row;\n    font-size: 1rem;\n  }\n"]);return P=function(){return e},e}function $(){var e=Object(m.a)(["\n  grid-area: ",";\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]);return $=function(){return e},e}function q(){var e=Object(m.a)(["\n  font-size: 2rem;\n  color: white;\n  @media only screen and (min-width: 768px) {\n    font-size: 5rem;\n  }\n"]);return q=function(){return e},e}function F(){var e=Object(m.a)(["\n  font-size: 1rem;\n  @media only screen and (min-width: 768px) {\n    font-size: 1.5rem;\n  }\n"]);return F=function(){return e},e}function Q(){var e=Object(m.a)(['\n  grid-area: content-2;\n  height: 100%;\n  display: flex;\n\n  margin: 0.5rem 1rem;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding-bottom: 0.5rem;\n  color: #7c92a6;\n\n  @media only screen and (min-width: 768px) {\n    display: grid;\n    grid-template-rows: repeat(2, 1fr) 5rem;\n    grid-template-columns: repeat(2, 1fr);\n    grid-template-areas: "active confirmed" "deaths recovered" "last-updated last-updated";\n  }\n']);return Q=function(){return e},e}var U=s.a.div(Q()),V=s.a.div(F()),X=s.a.div(q()),Y=s.a.div($(),(function(e){return e.gridName})),Z=Object(s.a)(Y)(P());function ee(e){var n=e.dataSet,t=n.active,r=n.confirmed,i=n.deaths,c=n.recovered,o=n.lastupdatedtime;return a.a.createElement(U,null,a.a.createElement(Y,null,a.a.createElement(V,null,"Total active"),a.a.createElement(X,null,t)),a.a.createElement(Y,null,a.a.createElement(V,null,"Total confirmed"),a.a.createElement(X,null,r)),a.a.createElement(Y,null,a.a.createElement(V,null,"Total deaths"),a.a.createElement(X,null,i)),a.a.createElement(Y,null,a.a.createElement(V,null,"Total recovered"),a.a.createElement(X,null,c)),a.a.createElement(Z,{gridName:"last-updated"},"Last updated on :",a.a.createElement("span",{style:{color:"white"}},a.a.createElement("b",null," ",o))))}function ne(){function e(){return n.apply(this,arguments)}function n(){return(n=Object(u.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_();case 2:n=e.sent,o(n.statewise);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(r.useEffect)((function(){return e(),function(){e()}}),[]);var t=Object(r.useState)(null),i=Object(d.a)(t,2),c=i[0],o=i[1];return a.a.createElement(b,null,a.a.createElement(g,null),c?a.a.createElement(M,{dataSet:c.slice(1)}):a.a.createElement(W,{gridName:"content-1",slogan:"#StayHomeStaySafe"}),c?a.a.createElement(ee,{dataSet:c[0]}):a.a.createElement(W,{gridName:"content-2",slogan:"#GoCoronaGo"}),a.a.createElement(H,null))}t(23);var te=function(){return a.a.createElement(ne,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(te,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.6aead406.chunk.js.map