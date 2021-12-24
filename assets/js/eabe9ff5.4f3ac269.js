"use strict";(self.webpackChunklearn_cpp_and_dev_practices=self.webpackChunklearn_cpp_and_dev_practices||[]).push([[6304],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,h=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},691:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(7294);function a(e){var t="https://github.com/JulesFouchy/Learn--Cpp-And-Dev-Practices--Project/commit/"+e.hash;return r.createElement("a",{href:t,target:"_blank"},r.createElement("i",null,"Commit"))}},9914:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return d},default:function(){return h}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i=n(1195),s=n(691),c=["components"],l={title:"Noughts and Crosses"},u=void 0,p={unversionedId:"assignment/noughts-and-crosses",id:"assignment/noughts-and-crosses",isDocsHomePage:!1,title:"Noughts and Crosses",description:"Today is a big day because for our third game we are leaving the console behind! We will display some actual graphics and the user will be able to click on the window to play!",source:"@site/docs/assignment/05-noughts-and-crosses.md",sourceDirName:"assignment",slug:"/assignment/noughts-and-crosses",permalink:"/Learn--Cpp-And-Dev-Practices/docs/assignment/noughts-and-crosses",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Noughts and Crosses"},sidebar:"assignment",previous:{title:"Adding a menu",permalink:"/Learn--Cpp-And-Dev-Practices/docs/assignment/adding-a-menu"},next:{title:"connect-4",permalink:"/Learn--Cpp-And-Dev-Practices/docs/assignment/connect-4"}},d=[{value:"Adding the library",id:"adding-the-library",children:[]},{value:"First steps",id:"first-steps",children:[]}],m={toc:d};function h(e){var t=e.components,n=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Today is a big day because for our third game we are leaving the console behind! We will display some actual graphics and the user will be able to click on the window to play!"),(0,o.kt)("p",null,"We are gonna use the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/JulesFouchy/p6"},(0,o.kt)("em",{parentName:"a"},"p6")," library")," which makes it very easy. Its API is strongely inspired by ",(0,o.kt)("a",{parentName:"p",href:"https://p5js.org/"},(0,o.kt)("em",{parentName:"a"},"p5.js"))," which you might be familiar with."),(0,o.kt)("p",null,"TODO PUT A GIF OF THE GAME BEING PLAYED"),(0,o.kt)("h2",{id:"adding-the-library"},"Adding the library"),(0,o.kt)("p",null,"First you will need to add the library to your project. This might be a great time to read the lessons on ",(0,o.kt)("a",{parentName:"p",href:"../lessons/cmake"},"CMake")," and ",(0,o.kt)("a",{parentName:"p",href:"../lessons/git-submodules"},"Git Submodules"),".",(0,o.kt)("br",null),"\nAlso the examples for the library might help you (in order to find them, browse ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/JulesFouchy/p6"},"the GitHub of the library"),")."),(0,o.kt)(s.Z,{hash:"458a5603ddc711b293543ae9fd1ae6a98ceab45e",mdxType:"CommitLink"}),(0,o.kt)("h2",{id:"first-steps"},"First steps"),(0,o.kt)(i.ZP,{mdxType:"TipTryNotToRead"}),(0,o.kt)("p",null,"In order to get familiar with the library we will start by trying to do some very simple things:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"First create a window"),(0,o.kt)("li",{parentName:"ul"},"Then display a square in that window")),(0,o.kt)("p",null,"Again, the library provides all the examples you will need to do that \ud83d\ude09"))}h.isMDXComponent=!0},1195:function(e,t,n){n.d(t,{ZP:function(){return c}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i=["components"],s={toc:[]};function c(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"I encourage you to first try to code without reading the guided steps that follow! Think of the different functions that you need to write, and try to implement them!",(0,o.kt)("br",null),"\nOnly when you are stuck are you allowed to keep reading \ud83d\ude09 And read only enough to get unstuck! Then try to keep coding by yourself \ud83d\ude01 (until you are stuck again)"))))}c.isMDXComponent=!0}}]);