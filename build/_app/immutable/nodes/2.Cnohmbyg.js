import{s as it,f as at,n as Y,o as ot}from"../chunks/scheduler.DypdDQBO.js";import{S as nt,i as rt,s as L,e as r,t as W,f as j,c as o,a as M,b as X,d as g,y as I,o as l,p as V,g as N,h as t,j as lt,u as ct,v as dt,w as ut,k as vt,l as mt,x as ht}from"../chunks/index.DJCUG18x.js";function ft(p){let e,s,_,b,d,x,a,u,H,c,i,T='<hr class="primary500 border-4 opacity-100  svelte-137it7v"/>',C,v,E="",m,n,A,B,D,R="",w,F='<hr class="primary500 border-4 opacity-100  svelte-137it7v"/>',z,P,J="",S,q,G,k,K;return{c(){e=L(),s=r("div"),_=r("a"),b=r("div"),d=r("div"),x=r("div"),a=r("div"),u=r("h1"),H=W(p[0]),c=L(),i=r("div"),i.innerHTML=T,C=L(),v=r("p"),v.innerHTML=E,m=r("div"),n=r("img"),B=L(),D=r("p"),D.innerHTML=R,w=r("div"),w.innerHTML=F,z=L(),P=r("p"),P.innerHTML=J,S=r("p"),q=W(p[2]),G=L(),k=r("a"),K=W("View on Github"),this.h()},l(h){e=j(h),s=o(h,"DIV",{id:!0,style:!0,class:!0});var y=M(s);_=o(y,"A",{class:!0,href:!0});var O=M(_);b=o(O,"DIV",{class:!0});var Q=M(b);d=o(Q,"DIV",{class:!0});var U=M(d);x=o(U,"DIV",{class:!0});var Z=M(x);a=o(Z,"DIV",{class:!0});var f=M(a);u=o(f,"H1",{class:!0});var $=M(u);H=X($,p[0]),$.forEach(g),c=j(f),i=o(f,"DIV",{class:!0,style:!0,"data-svelte-h":!0}),I(i)!=="svelte-1fk7rts"&&(i.innerHTML=T),C=j(f),v=o(f,"P",{"data-svelte-h":!0}),I(v)!=="svelte-1yj5z7h"&&(v.innerHTML=E),m=o(f,"DIV",{class:!0});var tt=M(m);n=o(tt,"IMG",{class:!0,src:!0,alt:!0}),tt.forEach(g),B=j(f),D=o(f,"P",{"data-svelte-h":!0}),I(D)!=="svelte-1yj5z7h"&&(D.innerHTML=R),w=o(f,"DIV",{class:!0,style:!0,"data-svelte-h":!0}),I(w)!=="svelte-1fk7rts"&&(w.innerHTML=F),z=j(f),P=o(f,"P",{"data-svelte-h":!0}),I(P)!=="svelte-1yj5z7h"&&(P.innerHTML=J),S=o(f,"P",{class:!0});var et=M(S);q=X(et,p[2]),et.forEach(g),G=j(f),k=o(f,"A",{class:!0,href:!0,role:!0,style:!0});var st=M(k);K=X(st,"View on Github"),st.forEach(g),f.forEach(g),Z.forEach(g),U.forEach(g),Q.forEach(g),O.forEach(g),y.forEach(g),this.h()},h(){l(u,"class","svelte-137it7v"),l(i,"class","col-9 mx-auto d-block center svelte-137it7v"),V(i,"border-radius","10px"),l(n,"class","img-thumbnail svelte-137it7v"),at(n.src,A=p[1])||l(n,"src",A),l(n,"alt","Biden"),l(m,"class","col-9 mx-auto d-block center svelte-137it7v"),l(w,"class","col-9 mx-auto d-block center svelte-137it7v"),V(w,"border-radius","10px"),l(S,"class","dark600  svelte-137it7v"),l(k,"class","btn primary500 btn-lg font-weight-bold svelte-137it7v"),l(k,"href",p[3]),l(k,"role","button"),V(k,"color","black",1),V(k,"border-radius","100px"),l(a,"class","card-info-title center svelte-137it7v"),l(x,"class","card-info svelte-137it7v"),l(d,"class","card-info-wrapper row svelte-137it7v"),l(b,"class","card-content svelte-137it7v"),l(_,"class","card svelte-137it7v"),l(_,"href",p[3]),l(s,"id","cards"),V(s,"--mouse-x",p[4]+"px"),V(s,"--mouse-y",p[5]+"px"),l(s,"class","svelte-137it7v")},m(h,y){N(h,e,y),N(h,s,y),t(s,_),t(_,b),t(b,d),t(d,x),t(x,a),t(a,u),t(u,H),t(a,c),t(a,i),t(a,C),t(a,v),t(a,m),t(m,n),t(a,B),t(a,D),t(a,w),t(a,z),t(a,P),t(a,S),t(S,q),t(a,G),t(a,k),t(k,K)},p(h,[y]){y&1&&lt(H,h[0]),y&2&&!at(n.src,A=h[1])&&l(n,"src",A),y&4&&lt(q,h[2]),y&8&&l(k,"href",h[3]),y&8&&l(_,"href",h[3]),y&16&&V(s,"--mouse-x",h[4]+"px"),y&32&&V(s,"--mouse-y",h[5]+"px")},i:Y,o:Y,d(h){h&&(g(e),g(s))}}}function pt(p,e,s){let{title:_}=e,{img_path:b}=e,{description:d}=e,{link:x}=e,a=0,u=0;const H=c=>{const i=document.getElementById("cards").getBoundingClientRect(),T=i.right-i.left,C=i.bottom-i.top,v=c.clientX-i.left,E=c.clientY-i.top;s(4,a=.5*T+.7*(v-T/2)),s(5,u=.5*C+.7*(E-C/2))};return ot(()=>{document.getElementById("cards").addEventListener("mousemove",H)}),p.$$set=c=>{"title"in c&&s(0,_=c.title),"img_path"in c&&s(1,b=c.img_path),"description"in c&&s(2,d=c.description),"link"in c&&s(3,x=c.link)},[_,b,d,x,a,u]}class _t extends nt{constructor(e){super(),rt(this,e,pt,ft,it,{title:0,img_path:1,description:2,link:3})}}function gt(p){let e,s,_="Welcome to SvelteKit",b,d,x="Welcome to SvelteKit",a,u,H='Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation',c,i,T="component beneth here:",C,v,E;return v=new _t({props:{title:"My cool project",img_path:"https://cdn.pixabay.com/photo/2024/01/09/22/11/avocado-8498520_960_720.jpg",link:"https://www.github.com",description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."}}),{c(){e=r("main"),s=r("h1"),s.textContent=_,b=L(),d=r("h1"),d.textContent=x,a=L(),u=r("p"),u.innerHTML=H,c=L(),i=r("div"),i.textContent=T,C=L(),ct(v.$$.fragment),this.h()},l(m){e=o(m,"MAIN",{class:!0});var n=M(e);s=o(n,"H1",{"data-svelte-h":!0}),I(s)!=="svelte-yyjjjs"&&(s.textContent=_),b=j(n),d=o(n,"H1",{"data-svelte-h":!0}),I(d)!=="svelte-yyjjjs"&&(d.textContent=x),a=j(n),u=o(n,"P",{"data-svelte-h":!0}),I(u)!=="svelte-vfdtwx"&&(u.innerHTML=H),c=j(n),i=o(n,"DIV",{"data-svelte-h":!0}),I(i)!=="svelte-mc0it3"&&(i.textContent=T),C=j(n),dt(v.$$.fragment,n),n.forEach(g),this.h()},h(){l(e,"class","svelte-1h21rjj")},m(m,n){N(m,e,n),t(e,s),t(e,b),t(e,d),t(e,a),t(e,u),t(e,c),t(e,i),t(e,C),ut(v,e,null),E=!0},p:Y,i(m){E||(vt(v.$$.fragment,m),E=!0)},o(m){mt(v.$$.fragment,m),E=!1},d(m){m&&g(e),ht(v)}}}class xt extends nt{constructor(e){super(),rt(this,e,null,gt,it,{})}}export{xt as component};
