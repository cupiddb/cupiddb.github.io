const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../nodes/0.CtLD9H8l.js","../chunks/scheduler.CQlsE29-.js","../chunks/index.xSuZ9O7b.js","../assets/0.2hi6le8c.css","../nodes/1.B-blD13y.js","../chunks/stores.BVvLqyGI.js","../chunks/entry.BehuA4pa.js","../chunks/index.Bx3dTvZi.js","../nodes/2.BFhKL47K.js","../chunks/each.D6YF6ztN.js","../chunks/stores.vPqkk0ZP.js","../nodes/3.6eFKObPL.js","../chunks/cupiddb-logo-text.DbtXUgL4.js","../assets/3.DljngmFk.css","../nodes/4.BL-mXMuT.js","../chunks/cupiddb-vs.DyDcAhkA.js","../nodes/5.CurkmsND.js","../nodes/6.Di1UkyrW.js","../nodes/7.Cg08sXez.js","../nodes/8.CQ2IPZ6D.js","../nodes/9.miyAxxPq.js","../nodes/10.DuJbZTWH.js","../nodes/11.h0WnYGYj.js","../chunks/Content.Bil-1pfp.js","../nodes/12.DICsMoal.js","../chunks/Content.CfOCOpqG.js","../chunks/DocClass.7obxUD2J.js","../nodes/13._XvIySGT.js","../chunks/Content.DNKpiqbl.js","../nodes/14.h0WnYGYj.js","../nodes/15.DICsMoal.js","../nodes/16._XvIySGT.js"])))=>i.map(i=>d[i]);
import{s as U,e as j,o as F,f as I,t as W}from"../chunks/scheduler.CQlsE29-.js";import{S as z,i as G,s as H,B as d,f as J,g as b,q as h,D as y,p as g,d as w,e as K,c as Q,a as X,l as T,E as P,t as Y,b as Z,j as M,C as A,F as E,m as k,n as O,o as v,r as R}from"../chunks/index.xSuZ9O7b.js";const x="modulepreload",ee=function(l,e){return new URL(l,e).href},V={},u=function(e,n,o){let r=Promise.resolve();if(n&&n.length>0){const c=document.getElementsByTagName("link"),t=document.querySelector("meta[property=csp-nonce]"),s=(t==null?void 0:t.nonce)||(t==null?void 0:t.getAttribute("nonce"));r=Promise.all(n.map(i=>{if(i=ee(i,o),i in V)return;V[i]=!0;const f=i.endsWith(".css"),_=f?'[rel="stylesheet"]':"";if(!!o)for(let L=c.length-1;L>=0;L--){const D=c[L];if(D.href===i&&(!f||D.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${_}`))return;const m=document.createElement("link");if(m.rel=f?"stylesheet":x,f||(m.as="script",m.crossOrigin=""),m.href=i,s&&m.setAttribute("nonce",s),document.head.appendChild(m),f)return new Promise((L,D)=>{m.addEventListener("load",L),m.addEventListener("error",()=>D(new Error(`Unable to preload CSS for ${i}`)))})}))}return r.then(()=>e()).catch(c=>{const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=c,window.dispatchEvent(t),!t.defaultPrevented)throw c})},ce={};function te(l){let e,n,o;var r=l[1][0];function c(t,s){return{props:{data:t[3],form:t[2]}}}return r&&(e=E(r,c(l)),l[15](e)),{c(){e&&k(e.$$.fragment),n=d()},l(t){e&&O(e.$$.fragment,t),n=d()},m(t,s){e&&v(e,t,s),b(t,n,s),o=!0},p(t,s){if(s&2&&r!==(r=t[1][0])){if(e){A();const i=e;h(i.$$.fragment,1,0,()=>{R(i,1)}),y()}r?(e=E(r,c(t)),t[15](e),k(e.$$.fragment),g(e.$$.fragment,1),v(e,n.parentNode,n)):e=null}else if(r){const i={};s&8&&(i.data=t[3]),s&4&&(i.form=t[2]),e.$set(i)}},i(t){o||(e&&g(e.$$.fragment,t),o=!0)},o(t){e&&h(e.$$.fragment,t),o=!1},d(t){t&&w(n),l[15](null),e&&R(e,t)}}}function ne(l){let e,n,o;var r=l[1][0];function c(t,s){return{props:{data:t[3],$$slots:{default:[se]},$$scope:{ctx:t}}}}return r&&(e=E(r,c(l)),l[14](e)),{c(){e&&k(e.$$.fragment),n=d()},l(t){e&&O(e.$$.fragment,t),n=d()},m(t,s){e&&v(e,t,s),b(t,n,s),o=!0},p(t,s){if(s&2&&r!==(r=t[1][0])){if(e){A();const i=e;h(i.$$.fragment,1,0,()=>{R(i,1)}),y()}r?(e=E(r,c(t)),t[14](e),k(e.$$.fragment),g(e.$$.fragment,1),v(e,n.parentNode,n)):e=null}else if(r){const i={};s&8&&(i.data=t[3]),s&65591&&(i.$$scope={dirty:s,ctx:t}),e.$set(i)}},i(t){o||(e&&g(e.$$.fragment,t),o=!0)},o(t){e&&h(e.$$.fragment,t),o=!1},d(t){t&&w(n),l[14](null),e&&R(e,t)}}}function ie(l){let e,n,o;var r=l[1][1];function c(t,s){return{props:{data:t[4],form:t[2]}}}return r&&(e=E(r,c(l)),l[13](e)),{c(){e&&k(e.$$.fragment),n=d()},l(t){e&&O(e.$$.fragment,t),n=d()},m(t,s){e&&v(e,t,s),b(t,n,s),o=!0},p(t,s){if(s&2&&r!==(r=t[1][1])){if(e){A();const i=e;h(i.$$.fragment,1,0,()=>{R(i,1)}),y()}r?(e=E(r,c(t)),t[13](e),k(e.$$.fragment),g(e.$$.fragment,1),v(e,n.parentNode,n)):e=null}else if(r){const i={};s&16&&(i.data=t[4]),s&4&&(i.form=t[2]),e.$set(i)}},i(t){o||(e&&g(e.$$.fragment,t),o=!0)},o(t){e&&h(e.$$.fragment,t),o=!1},d(t){t&&w(n),l[13](null),e&&R(e,t)}}}function re(l){let e,n,o;var r=l[1][1];function c(t,s){return{props:{data:t[4],$$slots:{default:[oe]},$$scope:{ctx:t}}}}return r&&(e=E(r,c(l)),l[12](e)),{c(){e&&k(e.$$.fragment),n=d()},l(t){e&&O(e.$$.fragment,t),n=d()},m(t,s){e&&v(e,t,s),b(t,n,s),o=!0},p(t,s){if(s&2&&r!==(r=t[1][1])){if(e){A();const i=e;h(i.$$.fragment,1,0,()=>{R(i,1)}),y()}r?(e=E(r,c(t)),t[12](e),k(e.$$.fragment),g(e.$$.fragment,1),v(e,n.parentNode,n)):e=null}else if(r){const i={};s&16&&(i.data=t[4]),s&65575&&(i.$$scope={dirty:s,ctx:t}),e.$set(i)}},i(t){o||(e&&g(e.$$.fragment,t),o=!0)},o(t){e&&h(e.$$.fragment,t),o=!1},d(t){t&&w(n),l[12](null),e&&R(e,t)}}}function oe(l){let e,n,o;var r=l[1][2];function c(t,s){return{props:{data:t[5],form:t[2]}}}return r&&(e=E(r,c(l)),l[11](e)),{c(){e&&k(e.$$.fragment),n=d()},l(t){e&&O(e.$$.fragment,t),n=d()},m(t,s){e&&v(e,t,s),b(t,n,s),o=!0},p(t,s){if(s&2&&r!==(r=t[1][2])){if(e){A();const i=e;h(i.$$.fragment,1,0,()=>{R(i,1)}),y()}r?(e=E(r,c(t)),t[11](e),k(e.$$.fragment),g(e.$$.fragment,1),v(e,n.parentNode,n)):e=null}else if(r){const i={};s&32&&(i.data=t[5]),s&4&&(i.form=t[2]),e.$set(i)}},i(t){o||(e&&g(e.$$.fragment,t),o=!0)},o(t){e&&h(e.$$.fragment,t),o=!1},d(t){t&&w(n),l[11](null),e&&R(e,t)}}}function se(l){let e,n,o,r;const c=[re,ie],t=[];function s(i,f){return i[1][2]?0:1}return e=s(l),n=t[e]=c[e](l),{c(){n.c(),o=d()},l(i){n.l(i),o=d()},m(i,f){t[e].m(i,f),b(i,o,f),r=!0},p(i,f){let _=e;e=s(i),e===_?t[e].p(i,f):(A(),h(t[_],1,1,()=>{t[_]=null}),y(),n=t[e],n?n.p(i,f):(n=t[e]=c[e](i),n.c()),g(n,1),n.m(o.parentNode,o))},i(i){r||(g(n),r=!0)},o(i){h(n),r=!1},d(i){i&&w(o),t[e].d(i)}}}function $(l){let e,n=l[7]&&N(l);return{c(){e=K("div"),n&&n.c(),this.h()},l(o){e=Q(o,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var r=X(e);n&&n.l(r),r.forEach(w),this.h()},h(){T(e,"id","svelte-announcer"),T(e,"aria-live","assertive"),T(e,"aria-atomic","true"),P(e,"position","absolute"),P(e,"left","0"),P(e,"top","0"),P(e,"clip","rect(0 0 0 0)"),P(e,"clip-path","inset(50%)"),P(e,"overflow","hidden"),P(e,"white-space","nowrap"),P(e,"width","1px"),P(e,"height","1px")},m(o,r){b(o,e,r),n&&n.m(e,null)},p(o,r){o[7]?n?n.p(o,r):(n=N(o),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(o){o&&w(e),n&&n.d()}}}function N(l){let e;return{c(){e=Y(l[8])},l(n){e=Z(n,l[8])},m(n,o){b(n,e,o)},p(n,o){o&256&&M(e,n[8])},d(n){n&&w(e)}}}function le(l){let e,n,o,r,c;const t=[ne,te],s=[];function i(_,p){return _[1][1]?0:1}e=i(l),n=s[e]=t[e](l);let f=l[6]&&$(l);return{c(){n.c(),o=H(),f&&f.c(),r=d()},l(_){n.l(_),o=J(_),f&&f.l(_),r=d()},m(_,p){s[e].m(_,p),b(_,o,p),f&&f.m(_,p),b(_,r,p),c=!0},p(_,[p]){let m=e;e=i(_),e===m?s[e].p(_,p):(A(),h(s[m],1,1,()=>{s[m]=null}),y(),n=s[e],n?n.p(_,p):(n=s[e]=t[e](_),n.c()),g(n,1),n.m(o.parentNode,o)),_[6]?f?f.p(_,p):(f=$(_),f.c(),f.m(r.parentNode,r)):f&&(f.d(1),f=null)},i(_){c||(g(n),c=!0)},o(_){h(n),c=!1},d(_){_&&(w(o),w(r)),s[e].d(_),f&&f.d(_)}}}function _e(l,e,n){let{stores:o}=e,{page:r}=e,{constructors:c}=e,{components:t=[]}=e,{form:s}=e,{data_0:i=null}=e,{data_1:f=null}=e,{data_2:_=null}=e;j(o.page.notify);let p=!1,m=!1,L=null;F(()=>{const a=o.page.subscribe(()=>{p&&(n(7,m=!0),W().then(()=>{n(8,L=document.title||"untitled page")}))});return n(6,p=!0),a});function D(a){I[a?"unshift":"push"](()=>{t[2]=a,n(0,t)})}function S(a){I[a?"unshift":"push"](()=>{t[1]=a,n(0,t)})}function C(a){I[a?"unshift":"push"](()=>{t[1]=a,n(0,t)})}function q(a){I[a?"unshift":"push"](()=>{t[0]=a,n(0,t)})}function B(a){I[a?"unshift":"push"](()=>{t[0]=a,n(0,t)})}return l.$$set=a=>{"stores"in a&&n(9,o=a.stores),"page"in a&&n(10,r=a.page),"constructors"in a&&n(1,c=a.constructors),"components"in a&&n(0,t=a.components),"form"in a&&n(2,s=a.form),"data_0"in a&&n(3,i=a.data_0),"data_1"in a&&n(4,f=a.data_1),"data_2"in a&&n(5,_=a.data_2)},l.$$.update=()=>{l.$$.dirty&1536&&o.page.set(r)},[t,c,s,i,f,_,p,m,L,o,r,D,S,C,q,B]}class ue extends z{constructor(e){super(),G(this,e,_e,le,U,{stores:9,page:10,constructors:1,components:0,form:2,data_0:3,data_1:4,data_2:5})}}const me=[()=>u(()=>import("../nodes/0.CtLD9H8l.js"),__vite__mapDeps([0,1,2,3]),import.meta.url),()=>u(()=>import("../nodes/1.B-blD13y.js"),__vite__mapDeps([4,1,2,5,6,7]),import.meta.url),()=>u(()=>import("../nodes/2.BFhKL47K.js"),__vite__mapDeps([8,1,2,9,6,7,5,10]),import.meta.url),()=>u(()=>import("../nodes/3.6eFKObPL.js"),__vite__mapDeps([11,1,2,9,12,13]),import.meta.url),()=>u(()=>import("../nodes/4.BL-mXMuT.js"),__vite__mapDeps([14,1,2,12,15]),import.meta.url),()=>u(()=>import("../nodes/5.CurkmsND.js"),__vite__mapDeps([16,1,2,15]),import.meta.url),()=>u(()=>import("../nodes/6.Di1UkyrW.js"),__vite__mapDeps([17,1,2,12]),import.meta.url),()=>u(()=>import("../nodes/7.Cg08sXez.js"),__vite__mapDeps([18,1,2]),import.meta.url),()=>u(()=>import("../nodes/8.CQ2IPZ6D.js"),__vite__mapDeps([19,1,2]),import.meta.url),()=>u(()=>import("../nodes/9.miyAxxPq.js"),__vite__mapDeps([20,1,2]),import.meta.url),()=>u(()=>import("../nodes/10.DuJbZTWH.js"),__vite__mapDeps([21,1,2]),import.meta.url),()=>u(()=>import("../nodes/11.h0WnYGYj.js"),__vite__mapDeps([22,1,2,23,10,7]),import.meta.url),()=>u(()=>import("../nodes/12.DICsMoal.js"),__vite__mapDeps([24,1,2,25,9,26]),import.meta.url),()=>u(()=>import("../nodes/13._XvIySGT.js"),__vite__mapDeps([27,1,2,28,26,9]),import.meta.url),()=>u(()=>import("../nodes/14.h0WnYGYj.js"),__vite__mapDeps([29,1,2,23,10,7]),import.meta.url),()=>u(()=>import("../nodes/15.DICsMoal.js"),__vite__mapDeps([30,1,2,25,9,26]),import.meta.url),()=>u(()=>import("../nodes/16._XvIySGT.js"),__vite__mapDeps([31,1,2,28,26,9]),import.meta.url)],pe=[],de={"/":[3],"/blog":[4],"/blog/benchmarking-cupiddb-redis-memcached":[5],"/blog/introducing-cupiddb":[6],"/docs":[7,[2]],"/docs/cupiddb":[8,[2]],"/docs/getting-started":[9,[2]],"/docs/python-client":[10,[2]],"/docs/python-client/1.3.0":[11,[2]],"/docs/python-client/1.3.0/client":[12,[2]],"/docs/python-client/1.3.0/filter":[13,[2]],"/docs/python-client/latest":[14,[2]],"/docs/python-client/latest/client":[15,[2]],"/docs/python-client/latest/filter":[16,[2]]},he={handleError:({error:l})=>{console.error(l)},reroute:()=>{}};export{de as dictionary,he as hooks,ce as matchers,me as nodes,ue as root,pe as server_loads};
