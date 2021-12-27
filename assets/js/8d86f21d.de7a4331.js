"use strict";(self.webpackChunkteaching_toolbox_website_generator=self.webpackChunkteaching_toolbox_website_generator||[]).push([[8651],{4137:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=l(n),u=r,f=d["".concat(c,".").concat(u)]||d[u]||m[u]||s;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var l=2;l<s;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5897:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var a=n(7462),r=n(3366),s=(n(7294),n(4137)),i=["components"],o={title:"Design Great Classes",benefit:5,easiness:3,order:2,tags:["Clean Code"]},c=void 0,l={unversionedId:"lessons/design-great-classes",id:"lessons/design-great-classes",title:"Design Great Classes",description:"First, do you need a class? What is the difference between a class and a struct?",source:"@site/../../content/lessons/design-great-classes.md",sourceDirName:"lessons",slug:"/lessons/design-great-classes",permalink:"/Learn--Cpp-And-Dev-Practices/lessons/design-great-classes",tags:[{label:"Clean Code",permalink:"/Learn--Cpp-And-Dev-Practices/tags/clean-code"}],version:"current",frontMatter:{title:"Design Great Classes",benefit:5,easiness:3,order:2,tags:["Clean Code"]},sidebar:"lessons",previous:{title:"Consistency in style",permalink:"/Learn--Cpp-And-Dev-Practices/lessons/consistency-in-style"},next:{title:"Documentation",permalink:"/Learn--Cpp-And-Dev-Practices/lessons/documentation"}},p=[{value:"Keep it small",id:"keep-it-small",children:[],level:2},{value:"No private methods",id:"no-private-methods",children:[],level:2}],m={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,s.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"First, do you need a class? What is the difference between a ",(0,s.kt)("em",{parentName:"p"},"class")," and a ",(0,s.kt)("em",{parentName:"p"},"struct"),"?",(0,s.kt)("sup",{parentName:"p",id:"fnref-1"},(0,s.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),(0,s.kt)("br",null),"\nA class can have private members, it can have methods attached to it",(0,s.kt)("sup",{parentName:"p",id:"fnref-2"},(0,s.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")),", and it can use inheritance."),(0,s.kt)("p",null,"Inheritance is kinda problematic so we are not going to consider it here. We are then left with private member variables, and methods, which actually both serve the same goal: ",(0,s.kt)("em",{parentName:"p"},"enforcing invariants"),"."),(0,s.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Classes have one goal: ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("em",{parentName:"strong"},"enforcing invariants")),"."))),(0,s.kt)("p",null,"If you don't have any invariants, you will end up with a class that only has getters and setters that do nothing special: this is basically a struct with an uglier syntax. You could also have member functions, but if your member variables all have getters and setters then you could always replace these member functions with free functions, which is a better practice anyways (see ",(0,s.kt)("a",{parentName:"p",href:"free-functions"},"Prefer Free Functions"),")."),(0,s.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Prefer using a ",(0,s.kt)("em",{parentName:"p"},"struct")," over a ",(0,s.kt)("em",{parentName:"p"},"class")," if you have no invariants to enforce."))),(0,s.kt)("h2",{id:"keep-it-small"},"Keep it small"),(0,s.kt)("p",null,"Try not to mix concerns inside a single class: it should have only one reason to change."),(0,s.kt)("p",null,"A good indicator: if none of your methods needs to have access to all members at once, you can probably split that class in two or more smaller classes."),(0,s.kt)("h2",{id:"no-private-methods"},"No private methods"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Private methods")," are bad because they can't be tested and they can't be reused outside of the class!"),(0,s.kt)("p",null,"Think about it: what is their advantage over a free function? Apart from the fact that they have access to all the members of the class, and therefore they don't need to declare parameters (which is a bad reason, don't be lazy!), I can't think of anything",(0,s.kt)("sup",{parentName:"p",id:"fnref-3"},(0,s.kt)("a",{parentName:"sup",href:"#fn-3",className:"footnote-ref"},"3")),"."),(0,s.kt)("p",null,"So my guideline will be: don't use private member functions, use"),(0,s.kt)("div",{className:"footnotes"},(0,s.kt)("hr",{parentName:"div"}),(0,s.kt)("ol",{parentName:"div"},(0,s.kt)("li",{parentName:"ol",id:"fn-1"},"I am talking about the semantic differences here, because in C++ a ",(0,s.kt)("em",{parentName:"li"},"class")," and a ",(0,s.kt)("em",{parentName:"li"},"struct")," can do exactly the same things. The only difference is that by default if you don't use an access specifier everything is private in a ",(0,s.kt)("em",{parentName:"li"},"class")," and public in a ",(0,s.kt)("em",{parentName:"li"},"struct"),".",(0,s.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,s.kt)("li",{parentName:"ol",id:"fn-2"},"Even though I am not opposed to having methods in a struct.",(0,s.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")),(0,s.kt)("li",{parentName:"ol",id:"fn-3"},"Actually they might be used in inheritance hierarchies. But since inheritance hierarchies are a bad practice too, this doesn't count \ud83d\ude1b",(0,s.kt)("a",{parentName:"li",href:"#fnref-3",className:"footnote-backref"},"\u21a9")))))}d.isMDXComponent=!0}}]);