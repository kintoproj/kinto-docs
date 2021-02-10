(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{129:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return b}));var o=n(3),a=n(7),r=(n(0),n(138)),c={id:"mongodb",title:"MongoDB"},i={unversionedId:"catalogs/mongodb",id:"catalogs/mongodb",isDocsHomePage:!1,title:"MongoDB",description:"Deploy MongoDB",source:"@site/docs/catalogs/catalog-mongodb.md",slug:"/catalogs/mongodb",permalink:"/catalogs/mongodb",version:"current",sidebar:"someSidebar",previous:{title:"Job",permalink:"/service-types/job"},next:{title:"PostgreSQL",permalink:"/catalogs/postgresql"}},s=[{value:"Create a MongoDB Database",id:"create-a-mongodb-database",children:[]},{value:"Access Your MongoDB Instances",id:"access-your-mongodb-instances",children:[{value:"Access from service running on KintoHub",id:"access-from-service-running-on-kintohub",children:[]},{value:"Access from local machine",id:"access-from-local-machine",children:[]}]},{value:"MongoDB Advanced Options",id:"mongodb-advanced-options",children:[{value:"Replica Count",id:"replica-count",children:[]},{value:"Cost Optimization",id:"cost-optimization",children:[]},{value:"(Storage) Persistence",id:"storage-persistence",children:[]}]}],l={toc:s};function b(e){var t=e.components,c=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},l,c,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("img",{alt:"Deploy MongoDB",src:n(242).default})),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://www.mongodb.com/"},"MongoDB")," is a general purpose, document-based, distributed database built for modern application developers and for the cloud era."),Object(r.b)("h2",{id:"create-a-mongodb-database"},"Create a MongoDB Database"),Object(r.b)("p",null,"All MongoDb servers are 100% dedicated to your environment."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",{parentName:"li",href:"https://app.kintohub.com/login"},"Login")," or ",Object(r.b)("a",{parentName:"li",href:"https://app.kintohub.com/sign-up"},"Create")," a KintoHub account"),Object(r.b)("li",{parentName:"ol"},"Click on the ",Object(r.b)("strong",{parentName:"li"},"Create Service")," button at the top right of your environment"),Object(r.b)("li",{parentName:"ol"},"Click on the ",Object(r.b)("strong",{parentName:"li"},"From Catalog")," tab at the top right"),Object(r.b)("li",{parentName:"ol"},"Click on the ",Object(r.b)("strong",{parentName:"li"},"MongoDB")," option in the list"),Object(r.b)("li",{parentName:"ol"},"Optionally enable ",Object(r.b)("strong",{parentName:"li"},"Authentication")," and input or generate your ",Object(r.b)("inlineCode",{parentName:"li"},"Username"),", ",Object(r.b)("inlineCode",{parentName:"li"},"Password")," and ",Object(r.b)("inlineCode",{parentName:"li"},"Root Password")),Object(r.b)("li",{parentName:"ol"},"Click on the ",Object(r.b)("strong",{parentName:"li"},"Deploy")," button at the top right and wait until the release is successful"),Object(r.b)("li",{parentName:"ol"},"Once deployed, click on the ",Object(r.b)("strong",{parentName:"li"},"Access Tab")," to read the access related options")),Object(r.b)("h2",{id:"access-your-mongodb-instances"},"Access Your MongoDB Instances"),Object(r.b)("h3",{id:"access-from-service-running-on-kintohub"},"Access from service running on KintoHub"),Object(r.b)("p",null,"You may only access your MongoDB Instance from services running in the ",Object(r.b)("strong",{parentName:"p"},"same")," environment.\nLearn more about how to connect to your MongoDB Instance under the ",Object(r.b)("a",{parentName:"p",href:"/features/access"},"Access Tab"),"."),Object(r.b)("h3",{id:"access-from-local-machine"},"Access from local machine"),Object(r.b)("p",null,"You can install the ",Object(r.b)("a",{parentName:"p",href:"/features/cli"},"Kinto CLI")," and run ",Object(r.b)("inlineCode",{parentName:"p"},"kinto teleport ")," from a ",Object(r.b)("inlineCode",{parentName:"p"},".git")," folder that has been deployed on KintoHub with a MongoDB database.\nUsing the tunnel that is created with this command, you can use any 3rd party mongo client to connect or the mongo cli."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"In the very near future: ",Object(r.b)("inlineCode",{parentName:"p"},"kinto teleport --all")," will allow you to access MongoDb without having previously deployed another service with it"))),Object(r.b)("h2",{id:"mongodb-advanced-options"},"MongoDB Advanced Options"),Object(r.b)("h3",{id:"replica-count"},"Replica Count"),Object(r.b)("p",null,"Increasing your replicas will create Highly Available MongoDB instances.\nYou can increase or decrease your replicas under the ",Object(r.b)("strong",{parentName:"p"},"Configurations")," tab when creating a MongoDB service.\nIt's recommended to have at least ",Object(r.b)("strong",{parentName:"p"},"3")," replicas in ",Object(r.b)("inlineCode",{parentName:"p"},"production")," environments or any environments you wish to decrease the chances of downtime.\nRead more about replicas ",Object(r.b)("a",{parentName:"p",href:"https://docs.mongodb.com/manual/replication/"},"here"),"."),Object(r.b)("h3",{id:"cost-optimization"},"Cost Optimization"),Object(r.b)("p",null,"Enabling ",Object(r.b)("a",{parentName:"p",href:"/features/advanced#cost-optimization"},"Cost Optimization")," is ",Object(r.b)("strong",{parentName:"p"},"not recommended")," for ",Object(r.b)("inlineCode",{parentName:"p"},"production")," environments.\nCost optimization places your instances on Spot or Pre-emptible cloud instances which can incur random downtime.\nFor best effort uptime, you must ",Object(r.b)("strong",{parentName:"p"},"disable")," cost optimization."),Object(r.b)("h3",{id:"storage-persistence"},"(Storage) Persistence"),Object(r.b)("p",null,"MongoDB has an optional ",Object(r.b)("a",{parentName:"p",href:"/features/advanced#storage-persistence"},"(Storage) Persistence")," and ",Object(r.b)("strong",{parentName:"p"},"Volume Size")," options available under the ",Object(r.b)("strong",{parentName:"p"},"Advanced Options")," Tab."),Object(r.b)("p",null,Object(r.b)("img",{alt:"MongoDB Advanced",src:n(143).default})))}b.isMDXComponent=!0},138:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=b(n),u=o,m=p["".concat(c,".").concat(u)]||p[u]||d[u]||r;return n?a.a.createElement(m,i(i({ref:t},l),{},{components:n})):a.a.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,c=new Array(r);c[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<r;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},143:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/redis-advanced-d5e09cb9acd46bc1260e00f27d88b5ca.png"},242:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/deploy-mongodb-1d96e215f5011afd59eb6d97a1dd7894.gif"}}]);