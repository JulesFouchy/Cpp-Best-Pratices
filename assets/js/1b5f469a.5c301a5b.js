"use strict";(self.webpackChunkteaching_toolbox_website_generator=self.webpackChunkteaching_toolbox_website_generator||[]).push([[5115],{4137:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),f=o,d=m["".concat(s,".").concat(f)]||m[f]||p[f]||a;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9283:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var r=n(7462),o=n(3366),a=(n(7294),n(4137)),i=["components"],l={title:"Use a formatting tool",benefit:4,easiness:5,order:1,tags:["Tools"]},s=void 0,c={unversionedId:"lessons/formatting-tool",id:"lessons/formatting-tool",title:"Use a formatting tool",description:"Brief",source:"@site/../../content/lessons/formatting-tool.md",sourceDirName:"lessons",slug:"/lessons/formatting-tool",permalink:"/Learn--Cpp-And-Dev-Practices/lessons/formatting-tool",tags:[{label:"Tools",permalink:"/Learn--Cpp-And-Dev-Practices/tags/tools"}],version:"current",frontMatter:{title:"Use a formatting tool",benefit:4,easiness:5,order:1,tags:["Tools"]},sidebar:"lessons",previous:{title:"Use Git",permalink:"/Learn--Cpp-And-Dev-Practices/lessons/git"},next:{title:"Naming",permalink:"/Learn--Cpp-And-Dev-Practices/lessons/naming"}},u=[{value:"Brief",id:"brief",children:[],level:2},{value:"Details",id:"details",children:[],level:2}],p={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"brief"},"Brief"),(0,a.kt)("p",null,"Tools can format your code automatically: fix indentation, add spaces consistently, put curly braces where you want them, ",(0,a.kt)("em",{parentName:"p"},"etc."),"\nIt saves a lot of time because it means you don't have to worry about it and do it manually!\nAlso, it ensures a consistency in style across the whole codebase and all the developpers."),(0,a.kt)("h2",{id:"details"},"Details"),(0,a.kt)("p",null,"For C++, ",(0,a.kt)("em",{parentName:"p"},"Clang format")," is the most used one and I would recommend it. You can use it inside VSCode through this extension: ",(0,a.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=xaver.clang-format"},"xaver.clang-format"),". Once installed you will need go in your VSCode settings and"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"set ",(0,a.kt)("em",{parentName:"li"},"Default Formatter")," to Clang-Format"),(0,a.kt)("li",{parentName:"ul"},"enable ",(0,a.kt)("em",{parentName:"li"},"Format on Save"))),(0,a.kt)("p",null,"You will also need to put a configuration file named ",(0,a.kt)("em",{parentName:"p"},".clang-format")," at the root of your project to specify how the formatting should be done. You can use ",(0,a.kt)("a",{parentName:"p",href:"https://zed0.co.uk/clang-format-configurator/"},"this great website")," to configure it. If you don't want to spend too many time tweaking it yourself, you can use mine: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/CoolLibs/Cool/blob/main/.clang-format"},"https://github.com/CoolLibs/Cool/blob/main/.clang-format"),"."))}m.isMDXComponent=!0}}]);