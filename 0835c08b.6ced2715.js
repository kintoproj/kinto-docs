(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{138:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),b=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=b(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,l=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),u=b(n),m=r,O=u["".concat(l,".").concat(m)]||u[m]||s[m]||p;return n?a.a.createElement(O,o(o({ref:t},i),{},{components:n})):a.a.createElement(O,o({ref:t},i))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,l=new Array(p);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var i=2;i<p;i++)l[i]=n[i];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},69:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),p=(n(0),n(138)),l={id:"hapi-example",title:"Hapi"},o={unversionedId:"examples/hapi/hapi-example",id:"examples/hapi/hapi-example",isDocsHomePage:!1,title:"Hapi",description:"A sample Hapi app for KintoHub",source:"@site/docs/examples/hapi/README.md",slug:"/examples/hapi/hapi-example",permalink:"/examples/hapi/hapi-example",version:"current",sidebar:"someSidebar",previous:{title:"Express",permalink:"/examples/express/express-example"},next:{title:"Koa",permalink:"/examples/koa/koa-example"}},c=[{value:"\ud83d\ude80 Deploying on KintoHub",id:"-deploying-on-kintohub",children:[]},{value:"\ud83d\udd28 Running locally",id:"-running-locally",children:[]},{value:"\u26a1 API Call",id:"-api-call",children:[]},{value:"\ud83d\ude91 Support",id:"-support",children:[]}],i={toc:c};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(p.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(p.b)("p",null,"A sample Hapi app for ",Object(p.b)("a",{parentName:"p",href:"https://kintohub.com"},"KintoHub")),Object(p.b)("h2",{id:"-deploying-on-kintohub"},"\ud83d\ude80 Deploying on KintoHub"),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},Object(p.b)("strong",{parentName:"li"},"Service Type:")," Backend API"),Object(p.b)("li",{parentName:"ul"},Object(p.b)("strong",{parentName:"li"},"Repo:")," ",Object(p.b)("a",{parentName:"li",href:"https://github.com/kintohub-examples/hapi"},"https://github.com/kintohub-examples/hapi")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("strong",{parentName:"li"},"Branch:")," master"),Object(p.b)("li",{parentName:"ul"},Object(p.b)("strong",{parentName:"li"},"Language:")," NodeJS"),Object(p.b)("li",{parentName:"ul"},Object(p.b)("strong",{parentName:"li"},"Language version:")," 12"),Object(p.b)("li",{parentName:"ul"},Object(p.b)("strong",{parentName:"li"},"Build Command:")," ",Object(p.b)("inlineCode",{parentName:"li"},"npm install")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("strong",{parentName:"li"},"Start Command:")," ",Object(p.b)("inlineCode",{parentName:"li"},"npm start")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("strong",{parentName:"li"},"Port:")," 80")),Object(p.b)("h2",{id:"-running-locally"},"\ud83d\udd28 Running locally"),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"Pre-requisites:")," NodeJS v12+"),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},"Clone the repository to a folder of choice.")),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre"},"$ git clone https://github.com/kintohub-examples/hapi\n\n$ cd hapi\n")),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},"Install the dependencies")),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre"},"$ npm install\n")),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},"To start the app ")),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre"},"$ npm start\n")),Object(p.b)("h2",{id:"-api-call"},"\u26a1 API Call"),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"Local:")),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre"},"curl -X GET http://localhost/hello/world\n")),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"On KintoHub:")),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre"},"curl -X GET http://<KintohubHostURL>/hello/world\n")),Object(p.b)("h4",{id:"response"},"Response"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-json"},'{\n  "message": "Hello world"\n}\n')),Object(p.b)("h2",{id:"-support"},"\ud83d\ude91 Support"),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"Contact us:")," ",Object(p.b)("a",{parentName:"p",href:"https://www.kintohub.com/contact-us"},"https://www.kintohub.com/contact-us")),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"Discord:")," ",Object(p.b)("a",{parentName:"p",href:"https://kintohub.com/discord"},"https://kintohub.com/discord")))}b.isMDXComponent=!0}}]);