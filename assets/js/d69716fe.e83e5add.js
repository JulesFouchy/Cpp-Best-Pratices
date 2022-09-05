"use strict";(self.webpackChunkteaching_toolbox_website_generator=self.webpackChunkteaching_toolbox_website_generator||[]).push([[1829],{4137:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=u(n),h=a,m=f["".concat(l,".").concat(h)]||f[h]||c[h]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1416:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return f}});var r=n(7462),a=n(3366),o=(n(7294),n(4137)),i=["components"],s={title:"Testing",benefit:5,easiness:2,level:"practices-and-patterns",tags:["Clean Code"]},l=void 0,u={unversionedId:"lessons/testing",id:"lessons/testing",title:"Testing",description:"https://youtu.be/ta3S8CRN2TM?t=1306",source:"@site/../../content/lessons/testing.md",sourceDirName:"lessons",slug:"/lessons/testing",permalink:"/Learn--Clean-Code-With-Cpp/lessons/testing",tags:[{label:"Clean Code",permalink:"/Learn--Clean-Code-With-Cpp/tags/clean-code"}],version:"current",frontMatter:{title:"Testing",benefit:5,easiness:2,level:"practices-and-patterns",tags:["Clean Code"]},sidebar:"lessons",previous:{title:"Dear ImGui",permalink:"/Learn--Clean-Code-With-Cpp/lessons/dear-imgui"},next:{title:"Single Source of Truth",permalink:"/Learn--Clean-Code-With-Cpp/lessons/single-source-of-truth"}},p=[{value:"Unit Tests",id:"unit-tests",children:[],level:2},{value:"UnitTesting libraries",id:"unittesting-libraries",children:[],level:2},{value:"Going further",id:"going-further",children:[],level:2}],c={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://youtu.be/ta3S8CRN2TM?t=1306"},"https://youtu.be/ta3S8CRN2TM?t=1306")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://youtu.be/u5senBJUkPc"},"https://youtu.be/u5senBJUkPc")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://youtu.be/cfh6ZrA19r4?t=983"},"https://youtu.be/cfh6ZrA19r4?t=983")),(0,o.kt)("h2",{id:"unit-tests"},"Unit Tests"),(0,o.kt)("p",null,"For example I wrote tests for the code that computes your grades: TODO PUT A LINK"),(0,o.kt)("h2",{id:"unittesting-libraries"},"UnitTesting libraries"),(0,o.kt)("p",null,"There a few out there. I personaly use and recommend ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/doctest/doctest"},"doctest"),". Other popular libraries include ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/google/googletest"},"GoogleTest")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/catchorg/Catch2"},"Catch2"),"."),(0,o.kt)("h2",{id:"going-further"},"Going further"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Going further")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("a",{parentName:"p",href:"https://youtu.be/N2gTxeIHMP0"},"Phil Nash, ",(0,o.kt)("em",{parentName:"a"},"Test Driven C++"))," (1h) About TDD "))))}f.isMDXComponent=!0}}]);