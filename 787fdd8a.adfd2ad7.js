(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{104:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return c}));var o=n(3),r=n(7),a=(n(0),n(152)),i={title:"KintoHub - A New Player To Open Source",author:"Benjamin Apprederisse",author_title:"Director of Engineering @ KintoHub",author_image_url:"https://miro.medium.com/fit/c/262/262/1*_OH8W1ii8dsVqRyrHZ7iiw.jpeg",description:"KintoHub - A New Player To Open Source",image:"https://www.kintohub.com/img/kintohub-og.png"},s={permalink:"/blog/2021/02/25/KintoHub--A-New-Player-To-Open-Source",source:"@site/blog/2021-02-25-KintoHub--A-New-Player-To-Open-Source.md",description:"KintoHub - A New Player To Open Source",date:"2021-02-25T00:00:00.000Z",tags:[],title:"KintoHub - A New Player To Open Source",readingTime:4.66,truncated:!0,nextItem:{title:"KintoHub Team Joins Cash App",permalink:"/blog/2021/02/12/KintoHub-Team-Joins-Cash-App"}},l=[],u={toc:l};function c(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Following the ",Object(a.b)("a",{parentName:"p",href:"https://www.kintohub.com/blog/2021/02/12/KintoHub-Team-Joins-Cash-App"},"recent announcement")," of KintoHub\u2019s team joining Cash App, here are some thoughts about why and how we made KintoHub open source."),Object(a.b)("p",null,"In January 2020, we faced a pretty big challenge while marketing KintoHub: the platform we had spent 2 years developing was too complex to use for most developers. We had a powerful platform that developers could use to build and deploy their whole stack \u2014 from frontend to backend to database \u2014 and allowing them to manage multiple environments from development to staging to production. But they were not able to use it without the team\u2018s guidance.\nAfter years of effort, we realized that developers do not care for stability or desire complex features. Developers need simplicity in the world of Kubernetes. In our case, developers just want to deploy a repository. That\u2019s it, really! KintoHub ended up being the exact same problem as the problem it was trying to solve\u2026 A super promising technology but extremely complex to try so people just give up? 10 letters? Kubernetes?!"),Object(a.b)("p",null,"After 2 months of research, in March 2020, we took the big decision to restart the project from scratch. We literally restarted it at the whiteboard (if you are interested to learn more about it, you can read Coop\u2019s article ",Object(a.b)("a",{parentName:"p",href:"https://blog.kintohub.com/from-whiteboard-to-surprise-retrospective-600e68f292c7"},"here"),") and we did it with only one thing in mind: \u201ckeep it easy-peasy, from tech to product\u201d. That basic rule is why the team has been motivated and inspired to make Kubernetes easy for developers this entire time. Basically, if Kubernetes is a platform for DevOps engineers, then KintoHub would be a platform for developers."),Object(a.b)("p",null,"But during the next 6 months, we strategically decided to build a SaaS solution while developing our codebase to be simple, clean, and ready to be open-sourced at some point. The hard reality caught up with us when we realized it won\u2019t be possible to juggle both a SaaS and open source simultaneously and we opted, as a business, to focus on users versus GitHub stars. KintoHub 1.0 was our last attempt at creating a SaaS platform and getting as many users as possible with a primary key performance indicator (KPI) to get as many users to successfully deploy their repositories."),Object(a.b)("p",null,"This led the team to build features allowing users to register and sign in to their account, allowing them to deploy their service into different regions, allowing them to directly connect to Github, etc. But while all those features are great for a SaaS platform, they add unnecessary complexity to an open-source developer tool."),Object(a.b)("p",null,"But it worked, users registered and successfully deployed their repositories on KintoHub! By August 2020, we increased our success rate by 90% compared to the previous versions in 2018/19"),Object(a.b)("p",null,"Today, with KintoHub Team joining Cash App, we are free from our business obligations. We are now able to get back to the basics and our initial idea of an open-source platform for developers and not make decisions around business timelines and KPI improvements. In the last few weeks, we worked hard on cleaning and removing all the unnecessary stuff mentioned around our SaaS solution and created something easily deployable on any Kubernetes clusters, and immediately usable by any developer. KintoHub has never been so simple. In a few clicks, you can create a dedicated environment, connect your git repository and start deploying backend APIs, frontend websites, jobs, and workers. Developers can also configure custom domain names, observe memory, storage usage, and CPU metrics of any service, and even promote a service from a development environment to a production environment."),Object(a.b)("p",null,"This is just the beginning of a new chapter for KintoHub. Kubernetes is powerful, but engineering teams building products need KintoHub to simplify the process of developing apps directly on Kubernetes so that they may be successful in production. In this new chapter, we are calling out to all cloud-native teams to explore this direction with us and use KintoHub as a tool provided to internal engineering teams to build, debug and ship apps with ease."),Object(a.b)("p",null,"Want to give it a try? Here is the result of our hard work and is it is available now under the Apache 2.0 LICENSE:"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://github.com/kintoproj"},"https://github.com/kintoproj")),Object(a.b)("p",null,"The only requirement is a v1.16+ Kubernetes cluster up and running (local, EKS, GKE, AKS, etc.), empty or not. No specific configuration is required."),Object(a.b)("p",null,"For the existing users who were using our SaaS platform and want to know what is the difference between the open-source version and the SaaS one, here is what we removed:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"User account:")," your open-source version of KintoHub works without authentication. You will instantly be able to create a new environment and start deploying your repository."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Multi-region:")," we have removed this feature to keep the complexity low."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Github App:")," just provide your git URL and credentials to deploy your private repository. Again, this was removed to keep the setup complexity low."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Billing:")," A feature that should not exist in open source software :).")),Object(a.b)("p",null,"The rest is 100% the same. Out of the box, you get:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Multi-Environment management on top of Kubernetes"),Object(a.b)("li",{parentName:"ul"},"Build and Deploy any git repository"),Object(a.b)("li",{parentName:"ul"},"Promote images between environments"),Object(a.b)("li",{parentName:"ul"},"Historic build and deploy logs"),Object(a.b)("li",{parentName:"ul"},"Debug live console logs without accessing Kubernetes"),Object(a.b)("li",{parentName:"ul"},"Access pods with kinto-cli"),Object(a.b)("li",{parentName:"ul"},"Connect custom domains with Let\u2019s Encrypt SSL in a few clicks"),Object(a.b)("li",{parentName:"ul"},"Deploy static sites, web apps, backend APIs, background workers, databases, and jobs"),Object(a.b)("li",{parentName:"ul"},"Enable \u201csleeping\u201d your services when they aren\u2019t used with a single click")),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://www.kintohub.com/installation/installation"},"Try it out")," and give us your feedback so that we can improve the way we use Kubernetes together!"))}c.isMDXComponent=!0},152:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),c=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=o,m=p["".concat(i,".").concat(d)]||p[d]||b[d]||a;return n?r.a.createElement(m,s(s({ref:t},u),{},{components:n})):r.a.createElement(m,s({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);