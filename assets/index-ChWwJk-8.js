var We=Object.defineProperty;var Xe=(t,e,n)=>e in t?We(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var _e=(t,e,n)=>Xe(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))l(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function T(){}function Te(t){return t()}function Le(){return Object.create(null)}function Z(t){t.forEach(Te)}function Ve(t){return typeof t=="function"}function Ye(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function Ze(t){return Object.keys(t).length===0}function c(t,e){t.appendChild(e)}function M(t,e,n){t.insertBefore(e,n||null)}function L(t){t.parentNode&&t.parentNode.removeChild(t)}function ge(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function _(t){return document.createElement(t)}function w(t){return document.createTextNode(t)}function y(){return w(" ")}function Ge(){return w("")}function ee(t,e,n,l){return t.addEventListener(e,n,l),()=>t.removeEventListener(e,n,l)}function a(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function xe(t,e,n){const l=new Set;for(let i=0;i<t.length;i+=1)t[i].checked&&l.add(t[i].__value);return n||l.delete(e),Array.from(l)}function He(t){let e;return{p(...n){e=n,e.forEach(l=>t.push(l))},r(){e.forEach(n=>t.splice(t.indexOf(n),1))}}}function et(t){return Array.from(t.childNodes)}function ne(t,e){e=""+e,t.data!==e&&(t.data=e)}function U(t,e){t.value=e??""}let ve;function te(t){ve=t}const X=[],Se=[];let Y=[];const Me=[],tt=Promise.resolve();let he=!1;function nt(){he||(he=!0,tt.then(Je))}function pe(t){Y.push(t)}const de=new Set;let W=0;function Je(){if(W!==0)return;const t=ve;do{try{for(;W<X.length;){const e=X[W];W++,te(e),lt(e.$$)}}catch(e){throw X.length=0,W=0,e}for(te(null),X.length=0,W=0;Se.length;)Se.pop()();for(let e=0;e<Y.length;e+=1){const n=Y[e];de.has(n)||(de.add(n),n())}Y.length=0}while(X.length);for(;Me.length;)Me.pop()();he=!1,de.clear(),te(t)}function lt(t){if(t.fragment!==null){t.update(),Z(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(pe)}}function it(t){const e=[],n=[];Y.forEach(l=>t.indexOf(l)===-1?e.push(l):n.push(l)),n.forEach(l=>l()),Y=e}const ot=new Set;function Qe(t,e){t&&t.i&&(ot.delete(t),t.i(e))}function V(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function st(t,e){t.d(1),e.delete(t.key)}function ct(t,e,n,l,i,s,o,u,f,r,g,p){let v=t.length,d=s.length,m=v;const j={};for(;m--;)j[t[m].key]=m;const E=[],k=new Map,S=new Map,I=[];for(m=d;m--;){const h=p(i,s,m),$=n(h);let C=o.get($);C?I.push(()=>C.p(h,e)):(C=r($,h),C.c()),k.set($,E[m]=C),$ in j&&S.set($,Math.abs(m-j[$]))}const K=new Set,R=new Set;function P(h){Qe(h,1),h.m(u,g),o.set(h.key,h),g=h.first,d--}for(;v&&d;){const h=E[d-1],$=t[v-1],C=h.key,B=$.key;h===$?(g=h.first,v--,d--):k.has(B)?!o.has(C)||K.has(C)?P(h):R.has(B)?v--:S.get(C)>S.get(B)?(R.add(C),P(h)):(K.add(B),v--):(f($,o),v--)}for(;v--;){const h=t[v];k.has(h.key)||f(h,o)}for(;d;)P(E[d-1]);return Z(I),E}function ft(t,e,n){const{fragment:l,after_update:i}=t.$$;l&&l.m(e,n),pe(()=>{const s=t.$$.on_mount.map(Te).filter(Ve);t.$$.on_destroy?t.$$.on_destroy.push(...s):Z(s),t.$$.on_mount=[]}),i.forEach(pe)}function ut(t,e){const n=t.$$;n.fragment!==null&&(it(n.after_update),Z(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function rt(t,e){t.$$.dirty[0]===-1&&(X.push(t),nt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function at(t,e,n,l,i,s,o=null,u=[-1]){const f=ve;te(t);const r=t.$$={fragment:null,ctx:[],props:s,update:T,not_equal:i,bound:Le(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(f?f.$$.context:[])),callbacks:Le(),dirty:u,skip_bound:!1,root:e.target||f.$$.root};o&&o(r.root);let g=!1;if(r.ctx=n?n(t,e.props||{},(p,v,...d)=>{const m=d.length?d[0]:v;return r.ctx&&i(r.ctx[p],r.ctx[p]=m)&&(!r.skip_bound&&r.bound[p]&&r.bound[p](m),g&&rt(t,p)),v}):[],r.update(),g=!0,Z(r.before_update),r.fragment=l?l(r.ctx):!1,e.target){if(e.hydrate){const p=et(e.target);r.fragment&&r.fragment.l(p),p.forEach(L)}else r.fragment&&r.fragment.c();e.intro&&Qe(t.$$.fragment),ft(t,e.target,e.anchor),Je()}te(f)}class _t{constructor(){_e(this,"$$");_e(this,"$$set")}$destroy(){ut(this,1),this.$destroy=T}$on(e,n){if(!Ve(n))return T;const l=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return l.push(n),()=>{const i=l.indexOf(n);i!==-1&&l.splice(i,1)}}$set(e){this.$$set&&!Ze(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const dt="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(dt);function Pe(t,e,n){const l=t.slice();return l[12]=e[n],l[14]=n,l}function Ie(t,e,n){const l=t.slice();return l[12]=e[n],l[14]=n,l}function Be(t,e,n){const l=t.slice();return l[16]=e[n],l[18]=n,l}function qe(t,e,n){const l=t.slice();return l[19]=e[n],l}function De(t){let e,n=t[3].length+"",l,i;return{c(){e=w("／"),l=w(n),i=w("問 選択中")},m(s,o){M(s,e,o),M(s,l,o),M(s,i,o)},p(s,o){o&8&&n!==(n=s[3].length+"")&&ne(l,n)},d(s){s&&(L(e),L(l),L(i))}}}function ht(t){let e=[],n=new Map,l,i=V(t[0]);const s=o=>o[19].yomi;for(let o=0;o<i.length;o+=1){let u=qe(t,i,o),f=s(u);n.set(f,e[o]=Ke(f,u))}return{c(){for(let o=0;o<e.length;o+=1)e[o].c();l=Ge()},m(o,u){for(let f=0;f<e.length;f+=1)e[f]&&e[f].m(o,u);M(o,l,u)},p(o,u){u&9&&(i=V(o[0]),e=ct(e,u,s,1,o,i,n,l.parentNode,st,Ke,l,qe))},d(o){o&&L(l);for(let u=0;u<e.length;u+=1)e[u].d(o)}}}function pt(t){let e;return{c(){e=_("p"),e.textContent="Loading..."},m(n,l){M(n,e,l)},p:T,d(n){n&&L(e)}}}function Ke(t,e){let n,l,i,s,o=!1,u,f,r,g=e[19].kanji+"",p,v,d,m=e[19].yomi+"",j,E,k,S,I,K,R;return I=He(e[7][0]),{key:t,first:null,c(){n=_("p"),l=_("label"),i=_("input"),r=y(),p=w(g),v=_("span"),d=w("（"),j=w(m),E=w("）"),S=y(),a(i,"type","checkbox"),a(i,"name","kanji"),i.__value=s=e[19],U(i,i.__value),a(i,"id",u=e[19].yomi),i.disabled=f=e[3].length===me&&!e[3].includes(e[19]),a(v,"class","kana"),a(l,"for",k=e[19].yomi),a(n,"class","item"),I.p(i),this.first=n},m(P,h){M(P,n,h),c(n,l),c(l,i),i.checked=~(e[3]||[]).indexOf(i.__value),c(l,r),c(l,p),c(l,v),c(v,d),c(v,j),c(v,E),c(n,S),K||(R=ee(i,"change",e[9]),K=!0)},p(P,h){e=P,h&1&&s!==(s=e[19])&&(i.__value=s,U(i,i.__value),o=!0),h&1&&u!==(u=e[19].yomi)&&a(i,"id",u),h&9&&f!==(f=e[3].length===me&&!e[3].includes(e[19]))&&(i.disabled=f),(o||h&9)&&(i.checked=~(e[3]||[]).indexOf(i.__value)),h&1&&g!==(g=e[19].kanji+"")&&ne(p,g),h&1&&m!==(m=e[19].yomi+"")&&ne(j,m),h&1&&k!==(k=e[19].yomi)&&a(l,"for",k)},d(P){P&&L(n),I.r(),K=!1,R()}}}function mt(t){let e,n=V(t[3]),l=[];for(let i=0;i<n.length;i+=1)l[i]=Ue(Ie(t,n,i));return{c(){for(let i=0;i<l.length;i+=1)l[i].c();e=Ge()},m(i,s){for(let o=0;o<l.length;o+=1)l[o]&&l[o].m(i,s);M(i,e,s)},p(i,s){if(s&8){n=V(i[3]);let o;for(o=0;o<n.length;o+=1){const u=Ie(i,n,o);l[o]?l[o].p(u,s):(l[o]=Ue(u),l[o].c(),l[o].m(e.parentNode,e))}for(;o<l.length;o+=1)l[o].d(1);l.length=n.length}},d(i){i&&L(e),ge(l,i)}}}function gt(t){let e;return{c(){e=_("p"),e.textContent="漢字を選んでください。"},m(n,l){M(n,e,l)},p:T,d(n){n&&L(e)}}}function Re(t){let e;return{c(){e=_("div"),a(e,"class","kanji")},m(n,l){M(n,e,l)},p:T,d(n){n&&L(e)}}}function Ue(t){let e,n,l,i=t[12].yomi+"",s,o,u,f,r=V(Array.from({length:t[12].kanji.length})),g=[];for(let p=0;p<r.length;p+=1)g[p]=Re(Be(t,r,p));return{c(){e=_("div"),n=_("div"),l=_("span"),l.textContent=`(${t[14]+1})`,s=w(i),o=y(),u=_("div");for(let p=0;p<g.length;p+=1)g[p].c();f=y(),a(l,"class","index"),a(n,"class","kana"),a(u,"class","kanji_box"),a(e,"class","item")},m(p,v){M(p,e,v),c(e,n),c(n,l),c(n,s),c(e,o),c(e,u);for(let d=0;d<g.length;d+=1)g[d]&&g[d].m(u,null);c(e,f)},p(p,v){if(v&8&&i!==(i=p[12].yomi+"")&&ne(s,i),v&8){r=V(Array.from({length:p[12].kanji.length}));let d;for(d=0;d<r.length;d+=1){const m=Be(p,r,d);g[d]?g[d].p(m,v):(g[d]=Re(),g[d].c(),g[d].m(u,null))}for(;d<g.length;d+=1)g[d].d(1);g.length=r.length}},d(p){p&&L(e),ge(g,p)}}}function ze(t){let e,n,l,i=V(t[3]),s=[];for(let o=0;o<i.length;o+=1)s[o]=Fe(Pe(t,i,o));return{c(){e=_("div"),n=_("h3"),n.textContent="回答",l=y();for(let o=0;o<s.length;o+=1)s[o].c();a(n,"class","noprint"),a(e,"class","answer")},m(o,u){M(o,e,u),c(e,n),c(e,l);for(let f=0;f<s.length;f+=1)s[f]&&s[f].m(e,null)},p(o,u){if(u&8){i=V(o[3]);let f;for(f=0;f<i.length;f+=1){const r=Pe(o,i,f);s[f]?s[f].p(r,u):(s[f]=Fe(r),s[f].c(),s[f].m(e,null))}for(;f<s.length;f+=1)s[f].d(1);s.length=i.length}},d(o){o&&L(e),ge(s,o)}}}function Fe(t){let e,n,l=t[12].kanji+"",i,s;return{c(){e=_("div"),n=_("span"),n.textContent=`(${t[14]+1})`,i=w(l),s=y(),a(n,"class","index"),a(e,"class","item")},m(o,u){M(o,e,u),c(e,n),c(e,i),c(e,s)},p(o,u){u&8&&l!==(l=o[12].kanji+"")&&ne(i,l)},d(o){o&&L(e)}}}function vt(t){let e,n,l,i,s,o,u,f,r,g,p,v,d,m,j,E,k,S,I,K,R,P,h,$,C,B,H,J,be,le,ke,Q,ie,ye,ue,we,x,z,$e,Ce,F,G,oe,je,Ee,se,re,ae,Oe,O=t[3].length>0&&De(t);function Ne(b,A){return b[1]?pt:ht}let ce=Ne(t),q=ce(t);function Ae(b,A){return b[3].length<=0?gt:mt}let fe=Ae(t),D=fe(t),N=t[4]&&ze(t);return re=He(t[7][1]),{c(){e=_("main"),n=_("div"),l=_("h1"),l.textContent="漢字練習問題作成",i=y(),s=_("h2"),s.textContent="フォント（ローカルにインストールが必要です）",o=y(),u=_("p"),f=_("label"),r=_("input"),g=w("游教科書体"),p=y(),v=_("p"),d=_("label"),m=_("input"),j=w("UDデジタル教科書体 ProN R"),E=y(),k=_("h2"),S=w("漢字候補（最大"),I=w(me),K=w("問"),O&&O.c(),R=w("）"),P=y(),h=_("select"),$=_("option"),$.textContent="ランダム選択する数",C=_("option"),C.textContent="5問",B=_("option"),B.textContent="10問",H=_("option"),H.textContent="15問",J=_("option"),J.textContent="20問",be=y(),le=_("button"),le.textContent="ランダムに選ぶ",ke=y(),Q=_("div"),q.c(),ye=y(),ue=_("h2"),ue.textContent="答え",we=y(),x=_("label"),z=_("input"),$e=w("答えも印刷する"),Ce=y(),F=_("div"),G=_("div"),oe=_("h3"),oe.textContent="問題",je=y(),D.c(),Ee=y(),N&&N.c(),a(r,"type","radio"),a(r,"name","font"),a(r,"id","font-yu"),r.__value="yu-font",U(r,r.__value),a(f,"for","font-yu"),a(u,"class","yu-font"),a(m,"type","radio"),a(m,"name","font"),a(m,"id","font-ud"),m.__value="ud-font",U(m,m.__value),a(d,"for","font-ud"),a(v,"class","ud-font"),$.__value="",U($,$.__value),C.__value="5",U(C,C.__value),B.__value="10",U(B,B.__value),H.__value="15",U(H,H.__value),J.__value="20",U(J,J.__value),a(h,"name","num_of_choose"),a(h,"id","num_of_choose"),a(Q,"class",ie="list "+t[2]),a(z,"type","checkbox"),a(z,"name","show_answer"),a(z,"id","show_answer"),a(x,"for","show_answer"),a(n,"class","noprint"),a(oe,"class","noprint"),a(G,"class","question"),a(F,"class",se="paper "+t[2]),a(e,"class",t[2]),re.p(r,m)},m(b,A){M(b,e,A),c(e,n),c(n,l),c(n,i),c(n,s),c(n,o),c(n,u),c(u,f),c(f,r),r.checked=r.__value===t[2],c(f,g),c(n,p),c(n,v),c(v,d),c(d,m),m.checked=m.__value===t[2],c(d,j),c(n,E),c(n,k),c(k,S),c(k,I),c(k,K),O&&O.m(k,null),c(k,R),c(n,P),c(n,h),c(h,$),c(h,C),c(h,B),c(h,H),c(h,J),c(n,be),c(n,le),c(n,ke),c(n,Q),q.m(Q,null),c(n,ye),c(n,ue),c(n,we),c(n,x),c(x,z),z.checked=t[4],c(x,$e),c(e,Ce),c(e,F),c(F,G),c(G,oe),c(G,je),D.m(G,null),c(F,Ee),N&&N.m(F,null),ae||(Oe=[ee(r,"change",t[6]),ee(m,"change",t[8]),ee(le,"click",t[5]),ee(z,"change",t[10])],ae=!0)},p(b,[A]){A&4&&(r.checked=r.__value===b[2]),A&4&&(m.checked=m.__value===b[2]),b[3].length>0?O?O.p(b,A):(O=De(b),O.c(),O.m(k,R)):O&&(O.d(1),O=null),ce===(ce=Ne(b))&&q?q.p(b,A):(q.d(1),q=ce(b),q&&(q.c(),q.m(Q,null))),A&4&&ie!==(ie="list "+b[2])&&a(Q,"class",ie),A&16&&(z.checked=b[4]),fe===(fe=Ae(b))&&D?D.p(b,A):(D.d(1),D=fe(b),D&&(D.c(),D.m(G,null))),b[4]?N?N.p(b,A):(N=ze(b),N.c(),N.m(F,null)):N&&(N.d(1),N=null),A&4&&se!==(se="paper "+b[2])&&a(F,"class",se),A&4&&a(e,"class",b[2])},i:T,o:T,d(b){b&&L(e),O&&O.d(),q.d(),D.d(),N&&N.d(),re.r(),ae=!1,Z(Oe)}}}const me=20;function bt(t){Object.keys(t).length}function kt(t,e,n){let l=null,i=!0,s="yu-font",o=[],u=!1;async function f(){const j=await fetch("./kanji.json");n(0,l=await j.json()),n(1,i=!1),bt(l)}f();function r(){const j=document.getElementById("num_of_choose");let E=0;if(j&&(E=Number(j.value)),E>0){const k=[];let S=new Set;for(;S.size<E;)S.add(Math.floor(Math.random()*l.length));S.forEach(I=>{k.push(l[I])}),n(3,o=k)}}const g=[[],[]];function p(){s=this.__value,n(2,s)}function v(){s=this.__value,n(2,s)}function d(){o=xe(g[0],this.__value,this.checked),n(3,o)}function m(){u=this.checked,n(4,u)}return[l,i,s,o,u,r,p,g,v,d,m]}class yt extends _t{constructor(e){super(),at(this,e,kt,vt,Ye,{})}}new yt({target:document.getElementById("app")});