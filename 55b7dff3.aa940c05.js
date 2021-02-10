(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{138:function(e,t,o){"use strict";o.d(t,"a",(function(){return p})),o.d(t,"b",(function(){return m}));var n=o(0),a=o.n(n);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=a.a.createContext({}),b=function(e){var t=a.a.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},p=function(e){var t=b(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=b(o),u=n,m=p["".concat(i,".").concat(u)]||p[u]||d[u]||r;return o?a.a.createElement(m,l(l({ref:t},s),{},{components:o})):a.a.createElement(m,l({ref:t},s))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,i=new Array(r);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<r;s++)i[s]=o[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,o)}u.displayName="MDXCreateElement"},149:function(e,t,o){"use strict";o.r(t),t.default=o.p+"assets/images/edit-service-4edd6eb645934942c22a09148c37ed33.png"},157:function(e,t,o){"use strict";o.r(t),t.default=o.p+"assets/images/abort-3652e8e3f60a90f1debede78ef1ffb9f.png"},215:function(e,t,o){"use strict";o.r(t),t.default=o.p+"assets/images/Releases-f48e8973e6113817aa9048618cc86280.png"},216:function(e,t,o){"use strict";o.r(t),t.default=o.p+"assets/images/rollback-9beb24ff7b3193be2c6b0bf03eb4981c.png"},217:function(e,t,o){"use strict";o.r(t),t.default=o.p+"assets/images/trigger-deploy-78ef55fe8852e042cf4c669623a9b9a5.png"},89:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return i})),o.d(t,"metadata",(function(){return l})),o.d(t,"toc",(function(){return c})),o.d(t,"default",(function(){return b}));var n=o(3),a=o(7),r=(o(0),o(138)),i={id:"deploy",title:"Deploy"},l={unversionedId:"features/deploy",id:"features/deploy",isDocsHomePage:!1,title:"Deploy",description:"The Deploy operation is the most critical operation on KintoHub.",source:"@site/docs/features/features-deploy.md",slug:"/features/deploy",permalink:"/features/deploy",version:"current",sidebar:"someSidebar",previous:{title:"Environment Overview",permalink:"/features/environment"},next:{title:"Metrics",permalink:"/features/metrics"}},c=[{value:"How To Deploy",id:"how-to-deploy",children:[{value:"Deploy New Service",id:"deploy-new-service",children:[]},{value:"Deploy a Configuration Update",id:"deploy-a-configuration-update",children:[]},{value:"Deploy a Previous Release",id:"deploy-a-previous-release",children:[]},{value:"Deploy Updated Code From Your Branch",id:"deploy-updated-code-from-your-branch",children:[]},{value:"Automatically Deploy New Code (CI/CD)",id:"automatically-deploy-new-code-cicd",children:[]}]},{value:"Deploy Logs",id:"deploy-logs",children:[]},{value:"How Does Deploy Work?",id:"how-does-deploy-work",children:[]},{value:"Abort Deploy Action",id:"abort-deploy-action",children:[]}],s={toc:c};function b(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},s,i,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The ",Object(r.b)("strong",{parentName:"p"},"Deploy")," operation is the most critical operation on KintoHub.\nThis functionality is responsible for safely deploying changes to your service's environment with no downtime."),Object(r.b)("h2",{id:"how-to-deploy"},"How To Deploy"),Object(r.b)("p",null,"There are several ways you can deploy updates to a new or existing service."),Object(r.b)("h3",{id:"deploy-new-service"},"Deploy New Service"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Login to KintoHub"),Object(r.b)("li",{parentName:"ol"},"Choose your environment you are interested in deploying into at the top left"),Object(r.b)("li",{parentName:"ol"},"Click on the ",Object(r.b)("inlineCode",{parentName:"li"},"Create Service")," button"),Object(r.b)("li",{parentName:"ol"},"Choose a service from the list of services provided"),Object(r.b)("li",{parentName:"ol"},"Connect your repositories via ",Object(r.b)("strong",{parentName:"li"},"Github Apps")," in ",Object(r.b)("inlineCode",{parentName:"li"},"Github")," tab or Fill in the ",Object(r.b)("strong",{parentName:"li"},"Repository")," information in ",Object(r.b)("inlineCode",{parentName:"li"},"Import URL")," tab"),Object(r.b)("li",{parentName:"ol"},"Fill in the ",Object(r.b)("strong",{parentName:"li"},"Build Settings")," information"),Object(r.b)("li",{parentName:"ol"},"Click on the ",Object(r.b)("inlineCode",{parentName:"li"},"Deploy")," at the top right")),Object(r.b)("h3",{id:"deploy-a-configuration-update"},"Deploy a Configuration Update"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Login to KintoHub"),Object(r.b)("li",{parentName:"ol"},"Choose your environment you are interested in deploying into at the top left"),Object(r.b)("li",{parentName:"ol"},"Choose the service you are interested in editing under the services list"),Object(r.b)("li",{parentName:"ol"},"Click on the ",Object(r.b)("strong",{parentName:"li"},"Edit Service")," at the top right")),Object(r.b)("p",null,Object(r.b)("img",{alt:"Edit Service",src:o(149).default})),Object(r.b)("ol",{start:5},Object(r.b)("li",{parentName:"ol"},"Make the changes within the various tabs you wish to edit"),Object(r.b)("li",{parentName:"ol"},"Click on the ",Object(r.b)("strong",{parentName:"li"},"Deploy")," at the top right")),Object(r.b)("h3",{id:"deploy-a-previous-release"},"Deploy a Previous Release"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Login to KintoHub"),Object(r.b)("li",{parentName:"ol"},"Choose your environment you are interested in deploying into at the top left"),Object(r.b)("li",{parentName:"ol"},"Choose the service you are interested in editing under the services list"),Object(r.b)("li",{parentName:"ol"},"Click on the ",Object(r.b)("strong",{parentName:"li"},"Releases")," tab near the top left")),Object(r.b)("p",null,Object(r.b)("img",{alt:"Release tab",src:o(215).default})),Object(r.b)("ol",{start:5},Object(r.b)("li",{parentName:"ol"},"Click on the ",Object(r.b)("strong",{parentName:"li"},"...")," within the row of the release you wish to deploy"),Object(r.b)("li",{parentName:"ol"},"Click on the ",Object(r.b)("strong",{parentName:"li"},"Rollback")," option")),Object(r.b)("p",null,Object(r.b)("img",{alt:"Rollback",src:o(216).default})),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"The ",Object(r.b)("strong",{parentName:"p"},"Rollback")," option is available for ",Object(r.b)("strong",{parentName:"p"},"any")," service which has atleast 2 successfully deployed releases. However, releases with the status ",Object(r.b)("inlineCode",{parentName:"p"},"Aborted")," and ",Object(r.b)("inlineCode",{parentName:"p"},"Failed")," cannot be rolled back."))),Object(r.b)("h3",{id:"deploy-updated-code-from-your-branch"},"Deploy Updated Code From Your Branch"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Login to KintoHub"),Object(r.b)("li",{parentName:"ol"},"Choose your environment you are interested in deploying into at the top left"),Object(r.b)("li",{parentName:"ol"},"Choose the service you are interested in editing under the services list"),Object(r.b)("li",{parentName:"ol"},"Click on the ",Object(r.b)("strong",{parentName:"li"},"Trigger Deploy")," at the top right of the service")),Object(r.b)("p",null,Object(r.b)("img",{alt:"Trigger",src:o(217).default})),Object(r.b)("h3",{id:"automatically-deploy-new-code-cicd"},"Automatically Deploy New Code (CI/CD)"),Object(r.b)("p",null,"This feature is currently in development and can be read under ",Object(r.b)("a",{parentName:"p",href:"/features/settings"},"Service Settings")),Object(r.b)("h2",{id:"deploy-logs"},"Deploy Logs"),Object(r.b)("p",null,"After clicking deploy, you will see a real time view of the ",Object(r.b)("a",{parentName:"p",href:"/features/releases"},"Release Logs"),"."),Object(r.b)("h2",{id:"how-does-deploy-work"},"How Does Deploy Work?"),Object(r.b)("p",null,"When you deploy a service many things occur under the hood."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Your deploy request is queued for deployment"),Object(r.b)("li",{parentName:"ol"},"KintoHub starts the deployment and updates its state to ",Object(r.b)("strong",{parentName:"li"},"Deploying")),Object(r.b)("li",{parentName:"ol"},"Your code is pulled from your repository"),Object(r.b)("li",{parentName:"ol"},"KintoHub executes your ",Object(r.b)("strong",{parentName:"li"},"Build Command")," from your ",Object(r.b)("a",{parentName:"li",href:"/features/build-settings"},"Build Settings")),Object(r.b)("li",{parentName:"ol"},"Once your build is successful. KintoHub stores your build artifact for historical use"),Object(r.b)("li",{parentName:"ol"},"KintoHub attempts to deploy your service using a ",Object(r.b)("strong",{parentName:"li"},"Rolling Update")),Object(r.b)("li",{parentName:"ol"},"KintoHub streams the live ",Object(r.b)("strong",{parentName:"li"},"Console")," logs of the new services for review and easy access to potential errors"),Object(r.b)("li",{parentName:"ol"},"Once KintoHub detects your service is live on the specified ",Object(r.b)("strong",{parentName:"li"},"Port")," in your ",Object(r.b)("a",{parentName:"li",href:"/features/build-settings"},"Build Settings"),". Your service is marked as deployed and your API traffic is switched to your new ",Object(r.b)("strong",{parentName:"li"},"Release"),"."),Object(r.b)("li",{parentName:"ol"},"If this is not your 1st deployment, KintoHub then shuts down your previous ",Object(r.b)("strong",{parentName:"li"},"Release"),".")),Object(r.b)("p",null,"If any of the above steps fail, KintoHub will try its best to highlight the issue and provide shortcuts to resolving them."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"All deployments are known as ",Object(r.b)("strong",{parentName:"p"},"Rolling Updates"),".\nWhen you have a new version of your Service going out, KintoHub will ensure the new version of your service is 100% working and ready to receive traffic before shutting down the previous version of your release.\nDuring this time, you will be paying for two instances of your service running, which usually lasts less than 30 seconds."))),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},Object(r.b)("inlineCode",{parentName:"p"},"pay-as-you-go")," users have priority over ",Object(r.b)("inlineCode",{parentName:"p"},"free")," users in the KintoHub platform deployment queue.\nEvery ",Object(r.b)("strong",{parentName:"p"},"region")," has its deployment queue."))),Object(r.b)("h2",{id:"abort-deploy-action"},"Abort Deploy Action"),Object(r.b)("p",null,"Under the ",Object(r.b)("strong",{parentName:"p"},"Releases")," Tab of your service, you can click the ",Object(r.b)("strong",{parentName:"p"},"...")," dots a release that is actively deploying and then click ",Object(r.b)("strong",{parentName:"p"},"Abort")),Object(r.b)("p",null,Object(r.b)("img",{alt:"Abort",src:o(157).default})))}b.isMDXComponent=!0}}]);