"use strict";(self.webpackChunkteaching_toolbox_website_generator=self.webpackChunkteaching_toolbox_website_generator||[]).push([[4237],{4137:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return n?o.createElement(f,i(i({ref:t},p),{},{components:n})):o.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4274:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var o=n(7462),r=n(3366),a=(n(7294),n(4137)),i=["components"],s={title:"The Rule of 5",benefit:3,easiness:3,order:4,tags:["Clean Code","C++"]},l=void 0,c={unversionedId:"lessons/rule-of-5",id:"lessons/rule-of-5",title:"The Rule of 5",description:"The Rule of 5 states that if you write a special member function (a.k.a. a destructor, a copy constructor, a copy assignment, a move constructor or a move assignment), then you need to write all 5 of them. They will not be generated by the compiler because if you define one explicitly this probably means that the default compiler-generated implementation is not good for any of them.",source:"@site/../../content/lessons/rule-of-5.md",sourceDirName:"lessons",slug:"/lessons/rule-of-5",permalink:"/Learn--Cpp-And-Dev-Practices/lessons/rule-of-5",tags:[{label:"Clean Code",permalink:"/Learn--Cpp-And-Dev-Practices/tags/clean-code"},{label:"C++",permalink:"/Learn--Cpp-And-Dev-Practices/tags/c"}],version:"current",frontMatter:{title:"The Rule of 5",benefit:3,easiness:3,order:4,tags:["Clean Code","C++"]},sidebar:"lessons",previous:{title:"Random",permalink:"/Learn--Cpp-And-Dev-Practices/lessons/random"},next:{title:"friend",permalink:"/Learn--Cpp-And-Dev-Practices/lessons/friend"}},p=[],u={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("em",{parentName:"p"},"Rule of 5")," states that if you write a special member function (a.k.a. a destructor, a copy constructor, a copy assignment, a move constructor or a move assignment), then you need to write all 5 of them. They will not be generated by the compiler because if you define one explicitly this probably means that the default compiler-generated implementation is not good for any of them."),(0,a.kt)("p",null,"For example an object containing a raw owning pointer needs to be deleted, but also when you make a copy of it you want to copy the pointed object, not the pointer, in order to preserve value semantics. If you were to copy only the pointer then the copied object would point to the same thing as the original object, they would not be independent copies. Also when the first one would be deleted it would delete the pointer that the other object also uses, and you will get a segmentation fault somewhere because the second object is still alive but its pointer isn't anymore."),(0,a.kt)("p",null,"If you have to implement special member functions explicitly, try to make the class as small as possible. You most likely have only one member of your class that requires the destructor / copy. Then, move that member into its own class that implements the rule of 5, and in your main class use that wrapper class and let the compiler generate the destructor / move / copy. It will prevent you from forgetting to copy a member in your copy / move, or something silly of that kind."),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Most classes shouldn't have explicit special member functions, and those wo do should be kept to a minimal size."))))}m.isMDXComponent=!0}}]);