"use strict";(self.webpackChunkteaching_toolbox_website_generator=self.webpackChunkteaching_toolbox_website_generator||[]).push([[3794],{4137:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),u=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(i.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=u(t),d=o,f=m["".concat(i,".").concat(d)]||m[d]||p[d]||a;return t?r.createElement(f,c(c({ref:n},l),{},{components:t})):r.createElement(f,c({ref:n},l))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=m;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,c[1]=s;for(var u=2;u<a;u++)c[u]=t[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2657:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return l},default:function(){return m}});var r=t(7462),o=t(3366),a=(t(7294),t(4137)),c=["components"],s={title:"const",benefit:4,easiness:3,order:2,tags:["Clean Code","C++"]},i=void 0,u={unversionedId:"lessons/const",id:"lessons/const",title:"const",description:"Bonus trick",source:"@site/../../content/lessons/const.md",sourceDirName:"lessons",slug:"/lessons/const",permalink:"/Learn--Cpp-And-Dev-Practices/lessons/const",tags:[{label:"Clean Code",permalink:"/Learn--Cpp-And-Dev-Practices/tags/clean-code"},{label:"C++",permalink:"/Learn--Cpp-And-Dev-Practices/tags/c"}],version:"current",frontMatter:{title:"const",benefit:4,easiness:3,order:2,tags:["Clean Code","C++"]},sidebar:"lessons",previous:{title:"std::string and std::string_view",permalink:"/Learn--Cpp-And-Dev-Practices/lessons/string-and-string-view"},next:{title:"Don't overfocus on performance",permalink:"/Learn--Cpp-And-Dev-Practices/lessons/dont-overfocus-on-performance"}},l=[{value:"Bonus trick",id:"bonus-trick",children:[{value:"Bad :( (because <code>x</code> is not <code>const</code>)",id:"bad--because-x-is-not-const",children:[],level:3},{value:"Good :)",id:"good-",children:[],level:3}],level:2}],p={toc:l};function m(e){var n=e.components,t=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"bonus-trick"},"Bonus trick"),(0,a.kt)("p",null,"You can use lambdas for const variables that are complex to initialize."),(0,a.kt)("h3",{id:"bad--because-x-is-not-const"},"Bad :( (because ",(0,a.kt)("inlineCode",{parentName:"h3"},"x")," is not ",(0,a.kt)("inlineCode",{parentName:"h3"},"const"),")"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"enum class MyEnum {\n    value0,\n    value1,\n    value2,\n};\n\nint do_something(MyEnum my_enum) {\n      int x;\n      switch(my_enum) {\n            case MyEnum::value0 :\n                  x = 17;\n                  break;\n            case MyEnum::value1 :\n                  x = 5;\n                  break;\n            case MyEnum::value2 :\n                  x = 30;\n                  break;\n            default:\n                  x = 0;\n                  break;\n      }\n      // use x\n      return x + 2;\n}\n\nint main() {\n    return do_something(MyEnum::value1);\n}\n")),(0,a.kt)("h3",{id:"good-"},"Good :)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"enum class MyEnum {\n    value0,\n    value1,\n    value2,\n};\n\nint do_something(MyEnum my_enum) {\n      const int x = [my_enum]() {\n            switch(my_enum) {\n                  case MyEnum::value0 :\n                        return 17;\n                  case MyEnum::value1 :\n                        return 5;\n                  case MyEnum::value2 :\n                        return 30;\n                  default:\n                        return 0;\n            }\n      }(); // parenthesis to call the lambda function that was just declared\n      // use x\n      return x + 2;\n}\n\nint main() {\n    return do_something(MyEnum::value1);\n}\n")))}m.isMDXComponent=!0}}]);