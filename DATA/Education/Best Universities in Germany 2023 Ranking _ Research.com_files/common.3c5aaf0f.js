import{s as ae,a as pe}from"./slide.c40c5947.js";import{g as Ie,t as We}from"./throttle.a267e193.js";import{s as Pe}from"./scrollToEl.c8d0887b.js";function he(s){s.value.length>0?s.classList.add("filled"):s.classList.remove("filled")}var ze={exports:{}};(function(s){(function(y,m){var v=m(y,y.document,Date);y.lazySizes=v,s.exports&&(s.exports=v)})(typeof window<"u"?window:{},function(m,v,W){var _,r;if(function(){var a,t={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",fastLoadedClass:"ls-is-cached",iframeLoadMode:0,srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};r=m.lazySizesConfig||m.lazysizesConfig||{};for(a in t)a in r||(r[a]=t[a])}(),!v||!v.getElementsByClassName)return{init:function(){},cfg:r,noSupport:!0};var P=v.documentElement,Ee=m.HTMLPictureElement,q="addEventListener",E="getAttribute",B=m[q].bind(m),S=m.setTimeout,re=m.requestAnimationFrame||S,X=m.requestIdleCallback,ie=/^picture$/i,Ce=["load","error","lazyincluded","_lazyloaded"],G={},be=Array.prototype.forEach,U=function(a,t){return G[t]||(G[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")),G[t].test(a[E]("class")||"")&&G[t]},O=function(a,t){U(a,t)||a.setAttribute("class",(a[E]("class")||"").trim()+" "+t)},Z=function(a,t){var n;(n=U(a,t))&&a.setAttribute("class",(a[E]("class")||"").replace(n," "))},w=function(a,t,n){var f=n?q:"removeEventListener";n&&w(a,t),Ce.forEach(function(d){a[f](d,t)})},D=function(a,t,n,f,d){var o=v.createEvent("Event");return n||(n={}),n.instance=_,o.initEvent(t,!f,!d),o.detail=n,a.dispatchEvent(o),o},ee=function(a,t){var n;!Ee&&(n=m.picturefill||r.pf)?(t&&t.src&&!a[E]("srcset")&&a.setAttribute("srcset",t.src),n({reevaluate:!0,elements:[a]})):t&&t.src&&(a.src=t.src)},$=function(a,t){return(getComputedStyle(a,null)||{})[t]},se=function(a,t,n){for(n=n||a.offsetWidth;n<r.minSize&&t&&!a._lazysizesWidth;)n=t.offsetWidth,t=t.parentNode;return n},V=function(){var a,t,n=[],f=[],d=n,o=function(){var l=d;for(d=n.length?f:n,a=!0,t=!1;l.length;)l.shift()();a=!1},g=function(l,u){a&&!u?l.apply(this,arguments):(d.push(l),t||(t=!0,(v.hidden?S:re)(o)))};return g._lsFlush=o,g}(),J=function(a,t){return t?function(){V(a)}:function(){var n=this,f=arguments;V(function(){a.apply(n,f)})}},Le=function(a){var t,n=0,f=r.throttleDelay,d=r.ricTimeout,o=function(){t=!1,n=W.now(),a()},g=X&&d>49?function(){X(o,{timeout:d}),d!==r.ricTimeout&&(d=r.ricTimeout)}:J(function(){S(o)},!0);return function(l){var u;(l=l===!0)&&(d=33),!t&&(t=!0,u=f-(W.now()-n),u<0&&(u=0),l||u<9?g():S(g,u))}},ne=function(a){var t,n,f=99,d=function(){t=null,a()},o=function(){var g=W.now()-n;g<f?S(o,f-g):(X||d)(d)};return function(){n=W.now(),t||(t=S(o,f))}},oe=function(){var a,t,n,f,d,o,g,l,u,C,M,F,Se=/^img$/i,Ae=/^iframe$/i,Me="onscroll"in m&&!/(gle|ing)bot/.test(navigator.userAgent),_e=0,Y=0,A=0,R=-1,le=function(e){A--,(!e||A<0||!e.target)&&(A=0)},ce=function(e){return F==null&&(F=$(v.body,"visibility")=="hidden"),F||!($(e.parentNode,"visibility")=="hidden"&&$(e,"visibility")=="hidden")},ke=function(e,i){var c,p=e,h=ce(e);for(l-=i,M+=i,u-=i,C+=i;h&&(p=p.offsetParent)&&p!=v.body&&p!=P;)h=($(p,"opacity")||1)>0,h&&$(p,"overflow")!="visible"&&(c=p.getBoundingClientRect(),h=C>c.left&&u<c.right&&M>c.top-1&&l<c.bottom+1);return h},ue=function(){var e,i,c,p,h,z,k,N,T,x,I,H,L=_.elements;if((f=r.loadMode)&&A<8&&(e=L.length)){for(i=0,R++;i<e;i++)if(!(!L[i]||L[i]._lazyRace)){if(!Me||_.prematureUnveil&&_.prematureUnveil(L[i])){j(L[i]);continue}if((!(N=L[i][E]("data-expand"))||!(z=N*1))&&(z=Y),x||(x=!r.expand||r.expand<1?P.clientHeight>500&&P.clientWidth>500?500:370:r.expand,_._defEx=x,I=x*r.expFactor,H=r.hFac,F=null,Y<I&&A<1&&R>2&&f>2&&!v.hidden?(Y=I,R=0):f>1&&R>1&&A<6?Y=x:Y=_e),T!==z&&(o=innerWidth+z*H,g=innerHeight+z,k=z*-1,T=z),c=L[i].getBoundingClientRect(),(M=c.bottom)>=k&&(l=c.top)<=g&&(C=c.right)>=k*H&&(u=c.left)<=o&&(M||C||u||l)&&(r.loadHidden||ce(L[i]))&&(t&&A<3&&!N&&(f<3||R<4)||ke(L[i],z))){if(j(L[i]),h=!0,A>9)break}else!h&&t&&!p&&A<4&&R<4&&f>2&&(a[0]||r.preloadAfterLoad)&&(a[0]||!N&&(M||C||u||l||L[i][E](r.sizesAttr)!="auto"))&&(p=a[0]||L[i])}p&&!h&&j(p)}},b=Le(ue),de=function(e){var i=e.target;if(i._lazyCache){delete i._lazyCache;return}le(e),O(i,r.loadedClass),Z(i,r.loadingClass),w(i,fe),D(i,"lazyloaded")},Ne=J(de),fe=function(e){Ne({target:e.target})},xe=function(e,i){var c=e.getAttribute("data-load-mode")||r.iframeLoadMode;c==0?e.contentWindow.location.replace(i):c==1&&(e.src=i)},Te=function(e){var i,c=e[E](r.srcsetAttr);(i=r.customMedia[e[E]("data-media")||e[E]("media")])&&e.setAttribute("media",i),c&&e.setAttribute("srcset",c)},Be=J(function(e,i,c,p,h){var z,k,N,T,x,I;(x=D(e,"lazybeforeunveil",i)).defaultPrevented||(p&&(c?O(e,r.autosizesClass):e.setAttribute("sizes",p)),k=e[E](r.srcsetAttr),z=e[E](r.srcAttr),h&&(N=e.parentNode,T=N&&ie.test(N.nodeName||"")),I=i.firesLoad||"src"in e&&(k||z||T),x={target:e},O(e,r.loadingClass),I&&(clearTimeout(n),n=S(le,2500),w(e,fe,!0)),T&&be.call(N.getElementsByTagName("source"),Te),k?e.setAttribute("srcset",k):z&&!T&&(Ae.test(e.nodeName)?xe(e,z):e.src=z),h&&(k||T)&&ee(e,{src:z})),e._lazyRace&&delete e._lazyRace,Z(e,r.lazyClass),V(function(){var H=e.complete&&e.naturalWidth>1;(!I||H)&&(H&&O(e,r.fastLoadedClass),de(x),e._lazyCache=!0,S(function(){"_lazyCache"in e&&delete e._lazyCache},9)),e.loading=="lazy"&&A--},!0)}),j=function(e){if(!e._lazyRace){var i,c=Se.test(e.nodeName),p=c&&(e[E](r.sizesAttr)||e[E]("sizes")),h=p=="auto";(h||!t)&&c&&(e[E]("src")||e.srcset)&&!e.complete&&!U(e,r.errorClass)&&U(e,r.lazyClass)||(i=D(e,"lazyunveilread").detail,h&&te.updateElem(e,!0,e.offsetWidth),e._lazyRace=!0,A++,Be(e,i,h,p,c))}},Fe=ne(function(){r.loadMode=3,b()}),ve=function(){r.loadMode==3&&(r.loadMode=2),Fe()},Q=function(){if(!t){if(W.now()-d<999){S(Q,999);return}t=!0,r.loadMode=3,b(),B("scroll",ve,!0)}};return{_:function(){d=W.now(),_.elements=v.getElementsByClassName(r.lazyClass),a=v.getElementsByClassName(r.lazyClass+" "+r.preloadClass),B("scroll",b,!0),B("resize",b,!0),B("pageshow",function(e){if(e.persisted){var i=v.querySelectorAll("."+r.loadingClass);i.length&&i.forEach&&re(function(){i.forEach(function(c){c.complete&&j(c)})})}}),m.MutationObserver?new MutationObserver(b).observe(P,{childList:!0,subtree:!0,attributes:!0}):(P[q]("DOMNodeInserted",b,!0),P[q]("DOMAttrModified",b,!0),setInterval(b,999)),B("hashchange",b,!0),["focus","mouseover","click","load","transitionend","animationend"].forEach(function(e){v[q](e,b,!0)}),/d$|^c/.test(v.readyState)?Q():(B("load",Q),v[q]("DOMContentLoaded",b),S(Q,2e4)),_.elements.length?(ue(),V._lsFlush()):b()},checkElems:b,unveil:j,_aLSL:ve}}(),te=function(){var a,t=J(function(o,g,l,u){var C,M,F;if(o._lazysizesWidth=u,u+="px",o.setAttribute("sizes",u),ie.test(g.nodeName||""))for(C=g.getElementsByTagName("source"),M=0,F=C.length;M<F;M++)C[M].setAttribute("sizes",u);l.detail.dataAttr||ee(o,l.detail)}),n=function(o,g,l){var u,C=o.parentNode;C&&(l=se(o,C,l),u=D(o,"lazybeforesizes",{width:l,dataAttr:!!g}),u.defaultPrevented||(l=u.detail.width,l&&l!==o._lazysizesWidth&&t(o,C,u,l)))},f=function(){var o,g=a.length;if(g)for(o=0;o<g;o++)n(a[o])},d=ne(f);return{_:function(){a=v.getElementsByClassName(r.autosizesClass),B("resize",d)},checkElems:d,updateElem:n}}(),K=function(){!K.i&&v.getElementsByClassName&&(K.i=!0,te._(),oe._())};return S(function(){r.init&&K()}),_={cfg:r,autoSizer:te,loader:oe,init:K,uP:ee,aC:O,rC:Z,hC:U,fire:D,gW:se,rAF:V},_})})(ze);const qe=ze.exports;"loading"in HTMLImageElement.prototype||qe.init();Re();function Re(){const s=Ie(window.location.href,"scrollTo");Pe(document.getElementById(s))}const He=document.querySelectorAll("input, select");He.forEach(s=>{he(s)});document.addEventListener("input",s=>{he(s.target)});document.addEventListener("click",s=>{if(!s.target.closest("#main-menu")&&!s.target.closest("#footer-menu")&&me(document.querySelectorAll(".dropdown .menu-link")),s.target.matches(".dropdown .menu-link")&&(s.preventDefault(),Ue(s.target)),s.target.matches(".header__toggle")){const y=document.getElementById("main-menu");s.target.classList.contains("clicked")?(s.target.classList.remove("clicked"),ae(y)):(s.target.classList.add("clicked"),pe(y))}});function me(s){for(let y=0;y<s.length;y++)s[y].classList.contains("toggled")&&s[y]!==event.target&&(s[y].classList.remove("toggled"),ae(s[y].parentNode.querySelector(".submenu")))}function Ue(s){me(document.querySelectorAll(".dropdown .menu-link"));const y=s.parentNode;s.classList.contains("toggled")?(s.classList.remove("toggled"),ae(y.querySelector(".submenu"))):(s.classList.add("toggled"),pe(y.querySelector(".submenu")))}const Oe=document.getElementById("header"),ge=document.body,De=getComputedStyle(document.getElementById("main-menu")).display!=="none";let ye=window.scrollY;document.addEventListener("scroll",We($e,200));function $e(){if(window.innerWidth>768)return;const s=window.scrollY;ye>s&&!De&&s>Oe.offsetHeight?ge.classList.add("sticky-header"):ge.classList.remove("sticky-header"),ye=s}