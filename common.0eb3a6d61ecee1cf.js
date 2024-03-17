"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2076],{1233:(k,p,a)=>{a.d(p,{c:()=>c});var f=a(9081),t=a(4081),d=a(405);const c=(s,r)=>{let e,n;const u=(i,_,w)=>{if(typeof document>"u")return;const E=document.elementFromPoint(i,_);E&&r(E)?E!==e&&(o(),l(E,w)):o()},l=(i,_)=>{e=i,n||(n=e);const w=e;(0,f.w)(()=>w.classList.add("ion-activated")),_()},o=(i=!1)=>{if(!e)return;const _=e;(0,f.w)(()=>_.classList.remove("ion-activated")),i&&n!==e&&e.click(),e=void 0};return(0,d.createGesture)({el:s,gestureName:"buttonActiveDrag",threshold:0,onStart:i=>u(i.currentX,i.currentY,t.a),onMove:i=>u(i.currentX,i.currentY,t.b),onEnd:()=>{o(!0),(0,t.h)(),n=void 0}})}},8438:(k,p,a)=>{a.d(p,{g:()=>t});var f=a(8476);const t=()=>{if(void 0!==f.w)return f.w.Capacitor}},5572:(k,p,a)=>{a.d(p,{c:()=>f,i:()=>t});const f=(d,c,s)=>"function"==typeof s?s(d,c):"string"==typeof s?d[s]===c[s]:Array.isArray(c)?c.includes(d):d===c,t=(d,c,s)=>void 0!==d&&(Array.isArray(d)?d.some(r=>f(r,c,s)):f(d,c,s))},3351:(k,p,a)=>{a.d(p,{g:()=>f});const f=(r,e,n,u,l)=>d(r[1],e[1],n[1],u[1],l).map(o=>t(r[0],e[0],n[0],u[0],o)),t=(r,e,n,u,l)=>l*(3*e*Math.pow(l-1,2)+l*(-3*n*l+3*n+u*l))-r*Math.pow(l-1,3),d=(r,e,n,u,l)=>s((u-=l)-3*(n-=l)+3*(e-=l)-(r-=l),3*n-6*e+3*r,3*e-3*r,r).filter(i=>i>=0&&i<=1),s=(r,e,n,u)=>{if(0===r)return((r,e,n)=>{const u=e*e-4*r*n;return u<0?[]:[(-e+Math.sqrt(u))/(2*r),(-e-Math.sqrt(u))/(2*r)]})(e,n,u);const l=(3*(n/=r)-(e/=r)*e)/3,o=(2*e*e*e-9*e*n+27*(u/=r))/27;if(0===l)return[Math.pow(-o,1/3)];if(0===o)return[Math.sqrt(-l),-Math.sqrt(-l)];const i=Math.pow(o/2,2)+Math.pow(l/3,3);if(0===i)return[Math.pow(o/2,.5)-e/3];if(i>0)return[Math.pow(-o/2+Math.sqrt(i),1/3)-Math.pow(o/2+Math.sqrt(i),1/3)-e/3];const _=Math.sqrt(Math.pow(-l/3,3)),w=Math.acos(-o/(2*Math.sqrt(Math.pow(-l/3,3)))),E=2*Math.pow(_,1/3);return[E*Math.cos(w/3)-e/3,E*Math.cos((w+2*Math.PI)/3)-e/3,E*Math.cos((w+4*Math.PI)/3)-e/3]}},5083:(k,p,a)=>{a.d(p,{i:()=>f});const f=t=>t&&""!==t.dir?"rtl"===t.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},3126:(k,p,a)=>{a.r(p),a.d(p,{startFocusVisible:()=>c});const f="ion-focused",d=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],c=s=>{let r=[],e=!0;const n=s?s.shadowRoot:document,u=s||document.body,l=b=>{r.forEach(m=>m.classList.remove(f)),b.forEach(m=>m.classList.add(f)),r=b},o=()=>{e=!1,l([])},i=b=>{e=d.includes(b.key),e||l([])},_=b=>{if(e&&void 0!==b.composedPath){const m=b.composedPath().filter(g=>!!g.classList&&g.classList.contains("ion-focusable"));l(m)}},w=()=>{n.activeElement===u&&l([])};return n.addEventListener("keydown",i),n.addEventListener("focusin",_),n.addEventListener("focusout",w),n.addEventListener("touchstart",o,{passive:!0}),n.addEventListener("mousedown",o),{destroy:()=>{n.removeEventListener("keydown",i),n.removeEventListener("focusin",_),n.removeEventListener("focusout",w),n.removeEventListener("touchstart",o),n.removeEventListener("mousedown",o)},setFocus:l}}},8281:(k,p,a)=>{a.d(p,{c:()=>t});var f=a(5638);const t=r=>{const e=r;let n;return{hasLegacyControl:()=>{if(void 0===n){const l=void 0!==e.label||d(e),o=e.hasAttribute("aria-label")||e.hasAttribute("aria-labelledby")&&null===e.shadowRoot,i=(0,f.h)(e);n=!0===e.legacy||!l&&!o&&null!==i}return n}}},d=r=>!!(c.includes(r.tagName)&&null!==r.querySelector('[slot="label"]')||s.includes(r.tagName)&&""!==r.textContent),c=["ION-INPUT","ION-TEXTAREA","ION-SELECT","ION-RANGE"],s=["ION-TOGGLE","ION-CHECKBOX","ION-RADIO"]},4081:(k,p,a)=>{a.d(p,{I:()=>t,a:()=>e,b:()=>n,c:()=>r,d:()=>l,h:()=>u});var f=a(8438),t=function(o){return o.Heavy="HEAVY",o.Medium="MEDIUM",o.Light="LIGHT",o}(t||{});const c={getEngine(){const o=window.TapticEngine;if(o)return o;const i=(0,f.g)();return null!=i&&i.isPluginAvailable("Haptics")?i.Plugins.Haptics:void 0},available(){if(!this.getEngine())return!1;const i=(0,f.g)();return"web"!==(null==i?void 0:i.getPlatform())||typeof navigator<"u"&&void 0!==navigator.vibrate},isCordova:()=>void 0!==window.TapticEngine,isCapacitor:()=>void 0!==(0,f.g)(),impact(o){const i=this.getEngine();if(!i)return;const _=this.isCapacitor()?o.style:o.style.toLowerCase();i.impact({style:_})},notification(o){const i=this.getEngine();if(!i)return;const _=this.isCapacitor()?o.type:o.type.toLowerCase();i.notification({type:_})},selection(){const o=this.isCapacitor()?t.Light:"light";this.impact({style:o})},selectionStart(){const o=this.getEngine();o&&(this.isCapacitor()?o.selectionStart():o.gestureSelectionStart())},selectionChanged(){const o=this.getEngine();o&&(this.isCapacitor()?o.selectionChanged():o.gestureSelectionChanged())},selectionEnd(){const o=this.getEngine();o&&(this.isCapacitor()?o.selectionEnd():o.gestureSelectionEnd())}},s=()=>c.available(),r=()=>{s()&&c.selection()},e=()=>{s()&&c.selectionStart()},n=()=>{s()&&c.selectionChanged()},u=()=>{s()&&c.selectionEnd()},l=o=>{s()&&c.impact(o)}},2885:(k,p,a)=>{a.d(p,{I:()=>r,a:()=>l,b:()=>s,c:()=>_,d:()=>E,f:()=>o,g:()=>u,i:()=>n,p:()=>w,r:()=>b,s:()=>i});var f=a(467),t=a(5638),d=a(4929);const s="ion-content",r=".ion-content-scroll-host",e=`${s}, ${r}`,n=m=>"ION-CONTENT"===m.tagName,u=function(){var m=(0,f.A)(function*(g){return n(g)?(yield new Promise(v=>(0,t.c)(g,v)),g.getScrollElement()):g});return function(v){return m.apply(this,arguments)}}(),l=m=>m.querySelector(r)||m.querySelector(e),o=m=>m.closest(e),i=(m,g)=>n(m)?m.scrollToTop(g):Promise.resolve(m.scrollTo({top:0,left:0,behavior:g>0?"smooth":"auto"})),_=(m,g,v,y)=>n(m)?m.scrollByPoint(g,v,y):Promise.resolve(m.scrollBy({top:v,left:g,behavior:y>0?"smooth":"auto"})),w=m=>(0,d.b)(m,s),E=m=>{if(n(m)){const v=m.scrollY;return m.scrollY=!1,v}return m.style.setProperty("overflow","hidden"),!0},b=(m,g)=>{n(m)?m.scrollY=g:m.style.removeProperty("overflow")}},6726:(k,p,a)=>{a.d(p,{a:()=>f,b:()=>_,c:()=>e,d:()=>w,e:()=>M,f:()=>r,g:()=>E,h:()=>d,i:()=>t,j:()=>y,k:()=>C,l:()=>n,m:()=>o,n:()=>b,o:()=>l,p:()=>s,q:()=>c,r:()=>v,s:()=>h,t:()=>i,u:()=>m,v:()=>g,w:()=>u});const f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M136 208l120-104 120 104M136 304l120 104 120-104' stroke-width='48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",b="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",y="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",C="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",M="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},275:(k,p,a)=>{a.d(p,{c:()=>c,g:()=>s});var f=a(8476),t=a(5638),d=a(4929);const c=(e,n,u)=>{let l,o;if(void 0!==f.w&&"MutationObserver"in f.w){const E=Array.isArray(n)?n:[n];l=new MutationObserver(b=>{for(const m of b)for(const g of m.addedNodes)if(g.nodeType===Node.ELEMENT_NODE&&E.includes(g.slot))return u(),void(0,t.r)(()=>i(g))}),l.observe(e,{childList:!0})}const i=E=>{var b;o&&(o.disconnect(),o=void 0),o=new MutationObserver(m=>{u();for(const g of m)for(const v of g.removedNodes)v.nodeType===Node.ELEMENT_NODE&&v.slot===n&&w()}),o.observe(null!==(b=E.parentElement)&&void 0!==b?b:E,{subtree:!0,childList:!0})},w=()=>{o&&(o.disconnect(),o=void 0)};return{destroy:()=>{l&&(l.disconnect(),l=void 0),w()}}},s=(e,n,u)=>{const l=null==e?0:e.toString().length,o=r(l,n);if(void 0===u)return o;try{return u(l,n)}catch(i){return(0,d.a)("Exception in provided `counterFormatter`.",i),o}},r=(e,n)=>`${e} / ${n}`},1622:(k,p,a)=>{a.r(p),a.d(p,{KEYBOARD_DID_CLOSE:()=>s,KEYBOARD_DID_OPEN:()=>c,copyVisualViewport:()=>C,keyboardDidClose:()=>m,keyboardDidOpen:()=>E,keyboardDidResize:()=>b,resetKeyboardAssist:()=>l,setKeyboardClose:()=>w,setKeyboardOpen:()=>_,startKeyboardAssist:()=>o,trackViewportChanges:()=>y});var f=a(4379);a(8438),a(8476);const c="ionKeyboardDidShow",s="ionKeyboardDidHide";let e={},n={},u=!1;const l=()=>{e={},n={},u=!1},o=h=>{if(f.K.getEngine())i(h);else{if(!h.visualViewport)return;n=C(h.visualViewport),h.visualViewport.onresize=()=>{y(h),E()||b(h)?_(h):m(h)&&w(h)}}},i=h=>{h.addEventListener("keyboardDidShow",M=>_(h,M)),h.addEventListener("keyboardDidHide",()=>w(h))},_=(h,M)=>{g(h,M),u=!0},w=h=>{v(h),u=!1},E=()=>!u&&e.width===n.width&&(e.height-n.height)*n.scale>150,b=h=>u&&!m(h),m=h=>u&&n.height===h.innerHeight,g=(h,M)=>{const O=new CustomEvent(c,{detail:{keyboardHeight:M?M.keyboardHeight:h.innerHeight-n.height}});h.dispatchEvent(O)},v=h=>{const M=new CustomEvent(s);h.dispatchEvent(M)},y=h=>{e=Object.assign({},n),n=C(h.visualViewport)},C=h=>({width:Math.round(h.width),height:Math.round(h.height),offsetTop:h.offsetTop,offsetLeft:h.offsetLeft,pageTop:h.pageTop,pageLeft:h.pageLeft,scale:h.scale})},4379:(k,p,a)=>{a.d(p,{K:()=>c,a:()=>d});var f=a(8438),t=function(s){return s.Unimplemented="UNIMPLEMENTED",s.Unavailable="UNAVAILABLE",s}(t||{}),d=function(s){return s.Body="body",s.Ionic="ionic",s.Native="native",s.None="none",s}(d||{});const c={getEngine(){const s=(0,f.g)();if(null!=s&&s.isPluginAvailable("Keyboard"))return s.Plugins.Keyboard},getResizeMode(){const s=this.getEngine();return null!=s&&s.getResizeMode?s.getResizeMode().catch(r=>{if(r.code!==t.Unimplemented)throw r}):Promise.resolve(void 0)}}},4731:(k,p,a)=>{a.d(p,{c:()=>r});var f=a(467),t=a(8476),d=a(4379);const c=e=>{if(void 0===t.d||e===d.a.None||void 0===e)return null;const n=t.d.querySelector("ion-app");return null!=n?n:t.d.body},s=e=>{const n=c(e);return null===n?0:n.clientHeight},r=function(){var e=(0,f.A)(function*(n){let u,l,o,i;const _=function(){var g=(0,f.A)(function*(){const v=yield d.K.getResizeMode(),y=void 0===v?void 0:v.mode;u=()=>{void 0===i&&(i=s(y)),o=!0,w(o,y)},l=()=>{o=!1,w(o,y)},null==t.w||t.w.addEventListener("keyboardWillShow",u),null==t.w||t.w.addEventListener("keyboardWillHide",l)});return function(){return g.apply(this,arguments)}}(),w=(g,v)=>{n&&n(g,E(v))},E=g=>{if(0===i||i===s(g))return;const v=c(g);return null!==v?new Promise(y=>{const h=new ResizeObserver(()=>{v.clientHeight===i&&(h.disconnect(),y())});h.observe(v)}):void 0};return yield _(),{init:_,destroy:()=>{null==t.w||t.w.removeEventListener("keyboardWillShow",u),null==t.w||t.w.removeEventListener("keyboardWillHide",l),u=l=void 0},isKeyboardVisible:()=>o}});return function(u){return e.apply(this,arguments)}}()},7838:(k,p,a)=>{a.d(p,{c:()=>t});var f=a(467);const t=()=>{let d;return{lock:function(){var s=(0,f.A)(function*(){const r=d;let e;return d=new Promise(n=>e=n),void 0!==r&&(yield r),e});return function(){return s.apply(this,arguments)}}()}}},2172:(k,p,a)=>{a.d(p,{c:()=>d});var f=a(8476),t=a(5638);const d=(c,s,r)=>{let e;const n=()=>!(void 0===s()||void 0!==c.label||null===r()),l=()=>{const i=s();if(void 0===i)return;if(!n())return void i.style.removeProperty("width");const _=r().scrollWidth;if(0===_&&null===i.offsetParent&&void 0!==f.w&&"IntersectionObserver"in f.w){if(void 0!==e)return;const w=e=new IntersectionObserver(E=>{1===E[0].intersectionRatio&&(l(),w.disconnect(),e=void 0)},{threshold:.01,root:c});w.observe(i)}else i.style.setProperty("width",.75*_+"px")};return{calculateNotchWidth:()=>{n()&&(0,t.r)(()=>{l()})},destroy:()=>{e&&(e.disconnect(),e=void 0)}}}},7895:(k,p,a)=>{a.d(p,{S:()=>t});const t={bubbles:{dur:1e3,circles:9,fn:(d,c,s)=>{const r=d*c/s-d+"ms",e=2*Math.PI*c/s;return{r:5,style:{top:32*Math.sin(e)+"%",left:32*Math.cos(e)+"%","animation-delay":r}}}},circles:{dur:1e3,circles:8,fn:(d,c,s)=>{const r=c/s,e=d*r-d+"ms",n=2*Math.PI*r;return{r:5,style:{top:32*Math.sin(n)+"%",left:32*Math.cos(n)+"%","animation-delay":e}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(d,c)=>({r:6,style:{left:32-32*c+"%","animation-delay":-110*c+"ms"}})},lines:{dur:1e3,lines:8,fn:(d,c,s)=>({y1:14,y2:26,style:{transform:`rotate(${360/s*c+(c<s/2?180:-180)}deg)`,"animation-delay":d*c/s-d+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(d,c,s)=>({y1:12,y2:20,style:{transform:`rotate(${360/s*c+(c<s/2?180:-180)}deg)`,"animation-delay":d*c/s-d+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(d,c,s)=>({y1:17,y2:29,style:{transform:`rotate(${30*c+(c<6?180:-180)}deg)`,"animation-delay":d*c/s-d+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(d,c,s)=>({y1:12,y2:20,style:{transform:`rotate(${30*c+(c<6?180:-180)}deg)`,"animation-delay":d*c/s-d+"ms"}})}}},6492:(k,p,a)=>{a.r(p),a.d(p,{createSwipeBackGesture:()=>s});var f=a(5638),t=a(5083),d=a(405);a(8221);const s=(r,e,n,u,l)=>{const o=r.ownerDocument.defaultView;let i=(0,t.i)(r);const w=v=>i?-v.deltaX:v.deltaX;return(0,d.createGesture)({el:r,gestureName:"goback-swipe",gesturePriority:101,threshold:10,canStart:v=>(i=(0,t.i)(r),(v=>{const{startX:C}=v;return i?C>=o.innerWidth-50:C<=50})(v)&&e()),onStart:n,onMove:v=>{const C=w(v)/o.innerWidth;u(C)},onEnd:v=>{const y=w(v),C=o.innerWidth,h=y/C,M=(v=>i?-v.velocityX:v.velocityX)(v),O=M>=0&&(M>.2||y>C/2),D=(O?1-h:h)*C;let P=0;if(D>5){const T=D/Math.abs(M);P=Math.min(T,540)}l(O,h<=0?.01:(0,f.l)(0,h,.9999),P)}})}},2935:(k,p,a)=>{a.d(p,{w:()=>f});const f=(c,s,r)=>{if(typeof MutationObserver>"u")return;const e=new MutationObserver(n=>{r(t(n,s))});return e.observe(c,{childList:!0,subtree:!0}),e},t=(c,s)=>{let r;return c.forEach(e=>{for(let n=0;n<e.addedNodes.length;n++)r=d(e.addedNodes[n],s)||r}),r},d=(c,s)=>{if(1!==c.nodeType)return;const r=c;return(r.tagName===s.toUpperCase()?[r]:Array.from(r.querySelectorAll(s))).find(n=>n.value===r.value)}},4543:(k,p,a)=>{a.d(p,{x:()=>e});var f=a(4341),t=a(4438),d=a(8721),c=a(5873),s=a(1979);let r=(()=>{var n;class u{constructor(){this.buttonPressed=new t.bkB,(0,d.a)({backspaceOutline:c.GvW})}ngOnInit(){}buttonClick(o){this.buttonPressed.emit(o)}backspaceClick(){this.buttonPressed.emit("backspace")}}return(n=u).\u0275fac=function(o){return new(o||n)},n.\u0275cmp=t.VBU({type:n,selectors:[["app-num-keyboard"]],outputs:{buttonPressed:"buttonPressed"},standalone:!0,features:[t.aNF],decls:37,vars:0,consts:[["expand","block","fill","outline",3,"click"],["name","backspace-outline"]],template:function(o,i){1&o&&(t.j41(0,"ion-row")(1,"ion-col")(2,"ion-button",0),t.bIt("click",function(){return i.buttonClick(1)}),t.EFF(3,"1"),t.k0s()(),t.j41(4,"ion-col")(5,"ion-button",0),t.bIt("click",function(){return i.buttonClick(2)}),t.EFF(6,"2"),t.k0s()(),t.j41(7,"ion-col")(8,"ion-button",0),t.bIt("click",function(){return i.buttonClick(3)}),t.EFF(9,"3"),t.k0s()()(),t.j41(10,"ion-row")(11,"ion-col")(12,"ion-button",0),t.bIt("click",function(){return i.buttonClick(4)}),t.EFF(13,"4"),t.k0s()(),t.j41(14,"ion-col")(15,"ion-button",0),t.bIt("click",function(){return i.buttonClick(5)}),t.EFF(16,"5"),t.k0s()(),t.j41(17,"ion-col")(18,"ion-button",0),t.bIt("click",function(){return i.buttonClick(6)}),t.EFF(19,"6"),t.k0s()()(),t.j41(20,"ion-row")(21,"ion-col")(22,"ion-button",0),t.bIt("click",function(){return i.buttonClick(7)}),t.EFF(23,"7"),t.k0s()(),t.j41(24,"ion-col")(25,"ion-button",0),t.bIt("click",function(){return i.buttonClick(8)}),t.EFF(26,"8"),t.k0s()(),t.j41(27,"ion-col")(28,"ion-button",0),t.bIt("click",function(){return i.buttonClick(9)}),t.EFF(29,"9"),t.k0s()()(),t.j41(30,"ion-row")(31,"ion-col")(32,"ion-button",0),t.bIt("click",function(){return i.buttonClick(0)}),t.EFF(33,"0"),t.k0s()(),t.j41(34,"ion-col")(35,"ion-button",0),t.bIt("click",function(){return i.backspaceClick()}),t.nrm(36,"ion-icon",1),t.k0s()()())},dependencies:[s.Jm,s.iq,s.hU,s.ln,f.YN],styles:["ion-col[_ngcontent-%COMP%]{text-align:center}"]}),u})(),e=(()=>{var n;class u{constructor(o){this.modalCtrl=o,this.selectedInput=0,this.repetitions=10,this.weight=5}ngOnInit(){}buttonClick(o,i){this.selectedInput=i?1:0,this.keyClicked(o)}keyClicked(o){"number"==typeof o?0===this.selectedInput?(this.repetitions=this.repetitions+o,this.repetitions<0&&(this.repetitions=0)):(this.weight=this.weight+o,this.weight<0&&(this.weight=0)):0===this.selectedInput?this.repetitions=Math.floor(this.repetitions/10):this.weight=Math.floor(this.weight/10)}addSet(){this.repetitions>0&&this.weight>0&&this.modalCtrl.dismiss({reps:this.repetitions,weight:this.weight},"confirm")}}return(n=u).\u0275fac=function(o){return new(o||n)(t.rXU(s.W3))},n.\u0275cmp=t.VBU({type:n,selectors:[["app-record-set"]],standalone:!0,features:[t.aNF],decls:40,vars:4,consts:[[1,"ion-padding"],[3,"className"],[1,"change-button"],["size","small",3,"click"],[1,"ion-text-center","count",3,"click"],["expand","block",3,"click"],[3,"buttonPressed"]],template:function(o,i){1&o&&(t.j41(0,"ion-content",0)(1,"h3"),t.EFF(2,"Repetitions"),t.k0s(),t.j41(3,"div",1)(4,"div",2)(5,"span"),t.EFF(6,"-"),t.k0s(),t.j41(7,"ion-button",3),t.bIt("click",function(){return i.buttonClick(-1)}),t.EFF(8,"1"),t.k0s()(),t.j41(9,"div",4),t.bIt("click",function(){return i.selectedInput=0}),t.j41(10,"ion-label"),t.EFF(11),t.k0s()(),t.j41(12,"div",2)(13,"ion-button",3),t.bIt("click",function(){return i.buttonClick(1)}),t.EFF(14,"1"),t.k0s(),t.j41(15,"span"),t.EFF(16,"+"),t.k0s()()(),t.j41(17,"h3"),t.EFF(18,"Weight"),t.k0s(),t.j41(19,"div",1)(20,"div",2)(21,"span"),t.EFF(22,"-"),t.k0s(),t.j41(23,"ion-button",3),t.bIt("click",function(){return i.buttonClick(-5,!0)}),t.EFF(24,"5"),t.k0s(),t.j41(25,"ion-button",3),t.bIt("click",function(){return i.buttonClick(-1,!0)}),t.EFF(26,"1"),t.k0s()(),t.j41(27,"div",4),t.bIt("click",function(){return i.selectedInput=1}),t.j41(28,"ion-label"),t.EFF(29),t.k0s()(),t.j41(30,"div",2)(31,"ion-button",3),t.bIt("click",function(){return i.buttonClick(1,!0)}),t.EFF(32,"1"),t.k0s(),t.j41(33,"ion-button",3),t.bIt("click",function(){return i.buttonClick(5,!0)}),t.EFF(34,"5"),t.k0s(),t.j41(35,"span"),t.EFF(36,"+"),t.k0s()()(),t.j41(37,"ion-button",5),t.bIt("click",function(){return i.addSet()}),t.EFF(38,"Add Set"),t.k0s(),t.j41(39,"app-num-keyboard",6),t.bIt("buttonPressed",function(w){return i.keyClicked(w)}),t.k0s()()),2&o&&(t.R7$(3),t.Y8G("className",0===i.selectedInput?"custom-input selected-input":"custom-input"),t.R7$(8),t.SpI(" ",i.repetitions," rep"),t.R7$(8),t.Y8G("className",1===i.selectedInput?"custom-input selected-input":"custom-input"),t.R7$(10),t.SpI(" ",i.weight," kg"))},dependencies:[s.W9,s.Jm,s.he,f.YN,r],styles:[".custom-input[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;margin-bottom:32px;flex-direction:row;background-color:var(--ion-color-light);border-radius:8px}.custom-input[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%]{margin:0 16px;font-size:24px;font-weight:600;color:var(--ion-color-primary);text-align:center;flex:1}.custom-input[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:24px;font-weight:600;color:var(--ion-color-primary);text-align:center;margin:1rem}.custom-input[_ngcontent-%COMP%]   .change-button[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.selected-input[_ngcontent-%COMP%]{outline:1px solid var(--ion-color-primary)}"]}),u})()}}]);