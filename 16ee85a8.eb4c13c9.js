(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{138:function(e,r,n){"use strict";n.d(r,"a",(function(){return p})),n.d(r,"b",(function(){return f}));var t=n(0),a=n.n(t);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function c(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?c(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),l=function(e){var r=a.a.useContext(u),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},p=function(e){var r=l(e.components);return a.a.createElement(u.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},d=a.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),d=t,f=p["".concat(c,".").concat(d)]||p[d]||b[d]||o;return n?a.a.createElement(f,i(i({ref:r},u),{},{components:n})):a.a.createElement(f,i({ref:r},u))}));function f(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:t,c[1]=i;for(var u=2;u<o;u++)c[u]=n[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},72:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return c})),n.d(r,"metadata",(function(){return i})),n.d(r,"toc",(function(){return s})),n.d(r,"default",(function(){return l}));var t=n(3),a=n(7),o=(n(0),n(138)),c={id:"backend-worker",title:"Backend Worker"},i={unversionedId:"service-types/backend-worker",id:"service-types/backend-worker",isDocsHomePage:!1,title:"Backend Worker",description:"KintoHub can host backend workers which are services that run continuously and do not expose any port.",source:"@site/docs/service-types/types-backend-worker.md",slug:"/service-types/backend-worker",permalink:"/service-types/backend-worker",version:"current",sidebar:"someSidebar",previous:{title:"Backend API",permalink:"/service-types/backend-api"},next:{title:"Job",permalink:"/service-types/job"}},s=[{value:"When to use a backend worker service?",id:"when-to-use-a-backend-worker-service",children:[]},{value:"Backend worker features",id:"backend-worker-features",children:[]}],u={toc:s};function l(e){var r=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},u,n,{components:r,mdxType:"MDXLayout"}),Object(o.b)("p",null,"KintoHub can host backend workers which are services that run continuously and do not expose any port.\nUsually backend workers are used to consume messages or process events from queues such as Redis, Kafka or RabbitMQ.\nSidekiq and Celery are often used as a backend worker service."),Object(o.b)("h2",{id:"when-to-use-a-backend-worker-service"},"When to use a backend worker service?"),Object(o.b)("p",null,"If your app does not have any public API endpoints and needs to run continuously, you should consider using a backend worker."),Object(o.b)("h2",{id:"backend-worker-features"},"Backend worker features"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Advance ",Object(o.b)("a",{parentName:"li",href:"/features/build-settings"},"Build")," and ",Object(o.b)("a",{parentName:"li",href:"/features/deploy"},"Deploy")," Settings",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"1st Class Languages Build and Deploy support"),Object(o.b)("li",{parentName:"ul"},"Single and Multi-Stage Dockerfile Build and Deploy support"),Object(o.b)("li",{parentName:"ul"},"Auto scaling"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/features/metrics"},"Metrics")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/features/environment-variables"},"Environment Variables"))))}l.isMDXComponent=!0}}]);