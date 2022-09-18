"use strict";(self.webpackChunkteaching_toolbox_website_generator=self.webpackChunkteaching_toolbox_website_generator||[]).push([[9209],{4137:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return n?o.createElement(f,i(i({ref:t},u),{},{components:n})):o.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1907:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var o=n(7462),r=n(3366),a=(n(7294),n(4137)),i=["components"],s={title:"Make it work, then make it good",benefit:5,easiness:4,level:"clean-code",bias:1,tags:["Workflow"]},l=void 0,c={unversionedId:"lessons/make-it-work-then-make-it-good",id:"lessons/make-it-work-then-make-it-good",title:"Make it work, then make it good",description:"Brief",source:"@site/../../content/lessons/make-it-work-then-make-it-good.md",sourceDirName:"lessons",slug:"/lessons/make-it-work-then-make-it-good",permalink:"/Learn--Clean-Code-With-Cpp/lessons/make-it-work-then-make-it-good",tags:[{label:"Workflow",permalink:"/Learn--Clean-Code-With-Cpp/tags/workflow"}],version:"current",frontMatter:{title:"Make it work, then make it good",benefit:5,easiness:4,level:"clean-code",bias:1,tags:["Workflow"]},sidebar:"lessons",previous:{title:"Macros",permalink:"/Learn--Clean-Code-With-Cpp/lessons/macros"},next:{title:"Prefer free functions",permalink:"/Learn--Clean-Code-With-Cpp/lessons/prefer-free-functions"}},u=[{value:"Brief",id:"brief",children:[],level:2}],p={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"brief"},"Brief"),(0,a.kt)("p",null,"No matter all the other advice I am gonna give you, always remember this one: "),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"If you can't find the \"perfect\" solution, if you know that there must be a simpler way but can't figure out what it is, then don't worry and ",(0,a.kt)("strong",{parentName:"p"},"do what works for you!"))),(0,a.kt)("p",null,"The most important quality of a piece of code is that ",(0,a.kt)("em",{parentName:"p"},"it works"),". All the other advice in the other lessons are just here to help you write working code, and make sure it keeps working over time when you make changes to it or to the code surrounding it."),(0,a.kt)("p",null,"It is completely OK if you do some copy-paste, some duplication, some not-so-good names while you are trying to get something to work. I don't want you to get paralyzed by all the other considerations about clean code."),(0,a.kt)("p",null,"But beware! I never said not to care about the quality of your code! Just that this concern should come in a second pass, once you already have a working piece of code. At that point, don't move on to the next feature! Go back to the code you just wrote, read it critically, and try to improve it! Refactor duplicated code, split complicated functions into smaller ones, create structs to hold the data that belongs together, ",(0,a.kt)("em",{parentName:"p"},"etc.")," Basically, ",(0,a.kt)("strong",{parentName:"p"},"try to apply all the things you will learn in the next lessons"),"."),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Over time you will realize that \u2013 as you get used to writing clean code \u2013 you will start to write better code even during the first prototyping pass. But until then, don't feel compelled to produce the best code ever in the first pass."))))}d.isMDXComponent=!0}}]);