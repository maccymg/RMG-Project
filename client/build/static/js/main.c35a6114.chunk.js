(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{36:function(e,c,a){},63:function(e,c,a){"use strict";a.r(c);var t=a(0),n=a.n(t),s=a(28),i=a.n(s),r=(a(36),a(8)),l=a(2),o=a(10),j=a.n(o),d=a(13),m=a(11),h=a(14),b=a.n(h),u=a(31),x=a(1);var O=function(){var e=n.a.useState(null),c=Object(m.a)(e,2),a=c[0],t=c[1],s=n.a.useState(null),i=Object(m.a)(s,2),l=i[0],o=i[1],h=n.a.useState(0),O=Object(m.a)(h,2),p=O[0],v=O[1];n.a.useEffect((function(){var e=function(){var e=Object(d.a)(j.a.mark((function e(){var c,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("/api/arts/");case 3:c=e.sent,a=c.data,t(a),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[]);var f=function(e){if(window.screen.width>500&&null===l){document.getElementById("main").classList.add("opacity");var c=window.screen.width/100*75/1.3333333,a=(window.screen.height-c)/2;v(a),o(e.target.src)}};return Object(x.jsxs)(x.Fragment,{children:[l?Object(x.jsxs)("div",{className:"view-container",children:[Object(x.jsx)(u.a,{className:"cross",onClick:function(){document.getElementById("main").classList.remove("opacity"),o(null)}}),Object(x.jsx)("div",{className:"fullscreen",style:{padding:"".concat(p,"px 0px")},children:Object(x.jsx)("img",{src:l,className:"fullscreen-image"})})]}):Object(x.jsx)("div",{}),Object(x.jsxs)("div",{id:"main",children:[Object(x.jsxs)("div",{className:"header-container",children:[Object(x.jsx)("h1",{className:"header",children:"Lockdown Landscapes"}),Object(x.jsxs)("div",{className:"nav",children:[Object(x.jsx)(r.b,{to:"/art",style:{textDecoration:"none",color:"black"},children:Object(x.jsx)("p",{className:"nav-item n-i-left",children:"Paintings"})}),Object(x.jsx)(r.b,{to:"/",style:{textDecoration:"none",color:"black"},children:Object(x.jsx)("p",{className:"nav-item",children:"Home"})})]})]}),Object(x.jsx)("div",{className:"grid-wrapper",children:a?a.map((function(e){return Object(x.jsx)("div",{className:"grid-item",children:Object(x.jsxs)("div",{className:"grid-photo-container",children:[Object(x.jsx)("img",{src:e.image,className:"grid-photo",onClick:f,value:e.image}),Object(x.jsxs)("p",{className:"home-image-info",children:[e.name," - ",Object(x.jsx)("span",{className:"italic",children:e.style})]})]})},e.id)})):Object(x.jsx)("div",{className:"quote-container",children:Object(x.jsx)("p",{className:"quote",children:"Loading..."})})})]})]})};var p=function(){var e=n.a.useState(null),c=Object(m.a)(e,2),a=c[0],t=c[1];n.a.useEffect((function(){var e=function(){var e=Object(d.a)(j.a.mark((function e(){var c,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("/api/arts/");case 3:c=e.sent,a=c.data,t(a),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[]);var s=a?a.filter((function(e){if(e.types.includes(3))return e})):null;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("div",{className:"header-container",children:[Object(x.jsx)("h1",{className:"header",children:"Lockdown Landscapes"}),Object(x.jsxs)("div",{className:"nav",children:[Object(x.jsx)(r.b,{to:"/art",style:{textDecoration:"none",color:"black"},children:Object(x.jsx)("p",{className:"nav-item n-i-left",children:"Paintings"})}),Object(x.jsx)(r.b,{to:"/",style:{textDecoration:"none",color:"black"},children:Object(x.jsx)("p",{className:"nav-item",children:"Home"})})]})]}),Object(x.jsx)("div",{className:"home-container",children:a?s.map((function(e){return Object(x.jsxs)("div",{className:"home-key",children:[Object(x.jsxs)("div",{className:"spacing-container",children:[Object(x.jsx)("div",{className:"black"}),Object(x.jsx)("div",{className:"home-image-container",children:Object(x.jsx)("img",{src:e.image,className:"home-image"})}),Object(x.jsx)("div",{className:"black"})]}),Object(x.jsx)("div",{className:"home-image-info-container",children:Object(x.jsxs)("p",{className:"home-image-info",children:[e.name," - ",Object(x.jsx)("span",{className:"italic",children:e.style})]})})]},e.id)})):Object(x.jsx)("div",{className:"home-container-wait"})}),Object(x.jsxs)("div",{className:"quote-container",children:[Object(x.jsx)("q",{className:"quote",children:"Guide manners come by copying ye fairest things"}),Object(x.jsx)("p",{className:"author",children:"Inigo Jones"})]})]})};var v=function(){return Object(x.jsx)(r.a,{children:Object(x.jsxs)(l.c,{children:[Object(x.jsx)(l.a,{exact:!0,path:"/",component:p}),Object(x.jsx)(l.a,{path:"/art",component:O})]})})};i.a.render(Object(x.jsx)(v,{}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.c35a6114.chunk.js.map