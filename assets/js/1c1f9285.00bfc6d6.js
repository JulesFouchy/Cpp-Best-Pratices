"use strict";(self.webpackChunkteaching_toolbox_website_generator=self.webpackChunkteaching_toolbox_website_generator||[]).push([[1768],{4137:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return C}});var s=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,s,i=function(e,n){if(null==e)return{};var t,s,i={},a=Object.keys(e);for(s=0;s<a.length;s++)t=a[s],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)t=a[s],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=s.createContext({}),p=function(e){var n=s.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=p(e.components);return s.createElement(o.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return s.createElement(s.Fragment,{},n)}},u=s.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),u=p(t),C=i,g=u["".concat(o,".").concat(C)]||u[C]||c[C]||a;return t?s.createElement(g,l(l({ref:n},d),{},{components:t})):s.createElement(g,l({ref:n},d))}));function C(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=u;var r={};for(var o in n)hasOwnProperty.call(n,o)&&(r[o]=n[o]);r.originalType=e,r.mdxType="string"==typeof e?e:i,l[1]=r;for(var p=2;p<a;p++)l[p]=t[p];return s.createElement.apply(null,l)}return s.createElement.apply(null,t)}u.displayName="MDXCreateElement"},456:function(e,n,t){t.d(n,{Z:function(){return a}});var s=t(7294),i=JSON.parse('[{"title":"Compiler","benefit":5,"easiness":5,"level":"tools","bias":1,"tags":["Tools","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/install-a-compiler","slug":"install-a-compiler","priority":5},{"title":"Classes and Structs","benefit":5,"easiness":5,"level":"basic-cpp","link":"/Learn--Clean-Code-With-Cpp/lessons/classes-and-structs","slug":"classes-and-structs","priority":5},{"title":"for","benefit":5,"easiness":5,"level":"basic-cpp","link":"/Learn--Clean-Code-With-Cpp/lessons/for","slug":"for","priority":5},{"title":"Functions","benefit":5,"easiness":5,"level":"basic-cpp","link":"/Learn--Clean-Code-With-Cpp/lessons/functions","slug":"functions","priority":5},{"title":"IDE","benefit":5,"easiness":5,"level":"tools","tags":["Tools"],"link":"/Learn--Clean-Code-With-Cpp/lessons/ide","slug":"ide","priority":5},{"title":"if","benefit":5,"easiness":5,"level":"basic-cpp","link":"/Learn--Clean-Code-With-Cpp/lessons/if","slug":"if","priority":5},{"title":"Operator Overloading","benefit":5,"easiness":5,"level":"basic-cpp","link":"/Learn--Clean-Code-With-Cpp/lessons/operator-overloading","slug":"operator-overloading","priority":5},{"title":"References","benefit":5,"easiness":5,"level":"basic-cpp","link":"/Learn--Clean-Code-With-Cpp/lessons/references","slug":"references","priority":5},{"title":"Structured bindings","benefit":5,"easiness":5,"level":"basic-cpp","link":"/Learn--Clean-Code-With-Cpp/lessons/structured-bindings","slug":"structured-bindings","priority":5},{"title":"Variables","benefit":5,"easiness":5,"level":"basic-cpp","link":"/Learn--Clean-Code-With-Cpp/lessons/variables","slug":"variables","priority":5},{"title":"std::vector","benefit":5,"easiness":5,"level":"basic-cpp","tags":["Clean Code","Performant Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/vector","slug":"vector","priority":5},{"title":"Git","benefit":5,"easiness":4,"level":"tools","bias":1,"tags":["Tools","Git"],"link":"/Learn--Clean-Code-With-Cpp/lessons/git","slug":"git","priority":4.75},{"title":"Make it work, then make it good","benefit":5,"easiness":4,"level":"clean-code","bias":1,"tags":["Workflow"],"link":"/Learn--Clean-Code-With-Cpp/lessons/make-it-work-then-make-it-good","slug":"make-it-work-then-make-it-good","priority":4.75},{"title":"Debugger","benefit":5,"easiness":4,"level":"tools","tags":["Tools"],"link":"/Learn--Clean-Code-With-Cpp/lessons/debugger","slug":"debugger","priority":4.75},{"title":"Formatter","benefit":5,"easiness":4,"level":"tools","tags":["Tools"],"link":"/Learn--Clean-Code-With-Cpp/lessons/formatting-tool","slug":"formatting-tool","priority":4.75},{"title":"Prefer free functions","benefit":5,"easiness":3,"level":"clean-code","bias":5,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/prefer-free-functions","slug":"prefer-free-functions","priority":4.5},{"title":"Design cohesive classes","benefit":5,"easiness":3,"level":"clean-code","bias":4,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/design-cohesive-classes","slug":"design-cohesive-classes","priority":4.5},{"title":"Use structs to group data","benefit":5,"easiness":3,"level":"clean-code","bias":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/use-structs-to-group-data","slug":"use-structs-to-group-data","priority":4.5},{"title":"Write small functions","benefit":5,"easiness":3,"level":"clean-code","bias":2,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/write-small-functions","slug":"write-small-functions","priority":4.5},{"title":"DRY: Don\'t repeat yourself","benefit":5,"easiness":3,"level":"clean-code","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/dry-dont-repeat-yourself","slug":"dry-dont-repeat-yourself","priority":4.5},{"title":"Internet Search","benefit":5,"easiness":3,"level":"tools","tags":["Workflow"],"link":"/Learn--Clean-Code-With-Cpp/lessons/internet","slug":"internet","priority":4.5},{"title":"Static Analysers","benefit":5,"easiness":3,"level":"tools","tags":["Tools"],"link":"/Learn--Clean-Code-With-Cpp/lessons/static-analysers","slug":"static-analysers","priority":4.5},{"title":"Strong Types","benefit":5,"easiness":3,"level":"clean-code","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/strong-types","slug":"strong-types","priority":4.5},{"title":"Use libraries","benefit":5,"easiness":3,"level":"practices-and-patterns","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/use-libraries","slug":"use-libraries","priority":4.5},{"title":"Watch conferences","benefit":5,"easiness":3,"level":"practices-and-patterns","tags":["Workflow"],"link":"/Learn--Clean-Code-With-Cpp/lessons/watch-conferences","slug":"watch-conferences","priority":4.5},{"title":"Write libraries","benefit":5,"easiness":3,"level":"advanced","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/write-libraries","slug":"write-libraries","priority":4.5},{"title":"The Command pattern","benefit":5,"easiness":2,"level":"advanced","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/command","slug":"command","priority":4.25},{"title":"Dear ImGui","benefit":5,"easiness":2,"level":"practices-and-patterns","tags":["Libraries & Frameworks"],"link":"/Learn--Clean-Code-With-Cpp/lessons/dear-imgui","slug":"dear-imgui","priority":4.25},{"title":"Designated Initializers","benefit":4,"easiness":5,"level":"basic-cpp","tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/designated_initializers","slug":"designated_initializers","priority":4.25},{"title":"Enums","benefit":4,"easiness":5,"level":"basic-cpp","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/enums","slug":"enums","priority":4.25},{"title":"Range-based for loop","benefit":4,"easiness":5,"level":"basic-cpp","tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/range-based-for-loop","slug":"range-based-for-loop","priority":4.25},{"title":"Testing","benefit":5,"easiness":2,"level":"practices-and-patterns","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/testing","slug":"testing","priority":4.25},{"title":"Avoid unnecessary condition nesting","benefit":4,"easiness":4,"level":"practices-and-patterns","link":"/Learn--Clean-Code-With-Cpp/lessons/avoid-unnecessary-condition-nesting","slug":"avoid-unnecessary-condition-nesting","priority":4},{"title":"Lambda functions","benefit":4,"easiness":4,"level":"basic-cpp","tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/lambda","slug":"lambda","priority":4},{"title":"Master your IDE","benefit":4,"easiness":4,"level":"advanced","tags":["Tools"],"link":"/Learn--Clean-Code-With-Cpp/lessons/master-your-ide","slug":"master-your-ide","priority":4},{"title":"Naming","benefit":5,"easiness":1,"level":"clean-code","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/naming","slug":"naming","priority":4},{"title":"std::optional","benefit":4,"easiness":4,"level":"basic-cpp","tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/optional","slug":"optional","priority":4},{"title":"Single Source of Truth","benefit":4,"easiness":4,"level":"practices-and-patterns","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/single-source-of-truth","slug":"single-source-of-truth","priority":4},{"title":"Split problems in small pieces","benefit":5,"easiness":1,"level":"practices-and-patterns","tags":["Workflow"],"link":"/Learn--Clean-Code-With-Cpp/lessons/split-problems-in-small-pieces","slug":"split-problems-in-small-pieces","priority":4},{"title":"std::string and std::string_view","benefit":4,"easiness":4,"level":"basic-cpp","tags":["C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/string-and-string-view","slug":"string-and-string-view","priority":4},{"title":"Code reviews","benefit":4,"easiness":3,"level":"practices-and-patterns","tags":["Workflow"],"link":"/Learn--Clean-Code-With-Cpp/lessons/code-reviews","slug":"code-reviews","priority":3.75},{"title":"const","benefit":4,"easiness":3,"level":"basic-cpp","tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/const","slug":"const","priority":3.75},{"title":"Documentation","benefit":4,"easiness":3,"level":"practices-and-patterns","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/documentation","slug":"documentation","priority":3.75},{"title":"Don\'t overfocus on performance","benefit":4,"easiness":3,"level":"practices-and-patterns","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/dont-overfocus-on-performance","slug":"dont-overfocus-on-performance","priority":3.75},{"title":"Git submodules","benefit":4,"easiness":3,"level":"advanced","tags":["Tools","Git"],"link":"/Learn--Clean-Code-With-Cpp/lessons/git-submodules","slug":"git-submodules","priority":3.75},{"title":"Iterators","benefit":4,"easiness":3,"level":"basic-cpp","link":"/Learn--Clean-Code-With-Cpp/lessons/iterators","slug":"iterators","priority":3.75},{"title":"Minimize dependencies","benefit":4,"easiness":3,"level":"clean-code","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/minimize-dependencies","slug":"minimize-dependencies","priority":3.75},{"title":"Stack vs Heap","benefit":4,"easiness":3,"level":"basic-cpp","tags":["Performant Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/stack-vs-heap","slug":"stack-vs-heap","priority":3.75},{"title":"Static site generators","benefit":4,"easiness":3,"level":"good-to-know","tags":["Tools"],"link":"/Learn--Clean-Code-With-Cpp/lessons/static-site-generators","slug":"static-site-generators","priority":3.75},{"title":"STL algorithms","benefit":4,"easiness":3,"level":"basic-cpp","tags":["Clean Code","Performant Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/stl-algorithms","slug":"stl-algorithms","priority":3.75},{"title":"Templates","benefit":4,"easiness":3,"level":"basic-cpp","link":"/Learn--Clean-Code-With-Cpp/lessons/templates","slug":"templates","priority":3.75},{"title":"Write debug tools","benefit":4,"easiness":3,"level":"practices-and-patterns","tags":["Tools"],"link":"/Learn--Clean-Code-With-Cpp/lessons/write-debug-tools","slug":"write-debug-tools","priority":3.75},{"title":"assert","benefit":3,"easiness":5,"level":"basic-cpp","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/assert","slug":"assert","priority":3.5},{"title":"auto","benefit":3,"easiness":5,"level":"basic-cpp","tags":["Beautiful Code","Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/auto","slug":"auto","priority":3.5},{"title":"Composition over Inheritance","benefit":4,"easiness":2,"level":"practices-and-patterns","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/composition-over-inheritance","slug":"composition-over-inheritance","priority":3.5},{"title":"Debug vs Release","benefit":3,"easiness":5,"level":"practices-and-patterns","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/debug-vs-release","slug":"debug-vs-release","priority":3.5},{"title":"Deleted functions","benefit":3,"easiness":5,"level":"advanced","tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/deleted-functions","slug":"deleted-functions","priority":3.5},{"title":"Immediately Invoked Function","benefit":3,"easiness":5,"level":"practices-and-patterns","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/immediately-invoked-function","slug":"immediately-invoked-function","priority":3.5},{"title":"Markdown","benefit":3,"easiness":5,"level":"tools","tags":["Tools"],"link":"/Learn--Clean-Code-With-Cpp/lessons/markdown","slug":"markdown","priority":3.5},{"title":"namespace","benefit":3,"easiness":5,"level":"basic-cpp","link":"/Learn--Clean-Code-With-Cpp/lessons/namespace","slug":"namespace","priority":3.5},{"title":"Smart Pointers","benefit":3,"easiness":5,"level":"basic-cpp","tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/smart-pointers","slug":"smart-pointers","priority":3.5},{"title":"std::function","benefit":3,"easiness":5,"level":"basic-cpp","tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/std-function","slug":"std-function","priority":3.5},{"title":"Type erasure","benefit":4,"easiness":2,"level":"advanced","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/type-erasure","slug":"type-erasure","priority":3.5},{"title":"wasm and electron","benefit":4,"easiness":2,"level":"advanced","tags":["Libraries & Frameworks"],"link":"/Learn--Clean-Code-With-Cpp/lessons/wasm-and-electron","slug":"wasm-and-electron","priority":3.5},{"title":"std::array","benefit":3,"easiness":4,"level":"basic-cpp","link":"/Learn--Clean-Code-With-Cpp/lessons/array","slug":"array","priority":3.25},{"title":"Dependency Injection","benefit":3,"easiness":4,"level":"practices-and-patterns","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/dependency-injection","slug":"dependency-injection","priority":3.25},{"title":"Error Handling","benefit":3,"easiness":4,"level":"practices-and-patterns","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/error-handling","slug":"error-handling","priority":3.25},{"title":"Git Pull Requests","benefit":3,"easiness":4,"level":"advanced","tags":["Tools","Git"],"link":"/Learn--Clean-Code-With-Cpp/lessons/git-pull-request","slug":"git-pull-request","priority":3.25},{"title":"Scope guard","benefit":3,"easiness":4,"level":"practices-and-patterns","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/scope-guard","slug":"scope-guard","priority":3.25},{"title":"static","benefit":3,"easiness":4,"level":"basic-cpp","link":"/Learn--Clean-Code-With-Cpp/lessons/static","slug":"static","priority":3.25},{"title":"Advanced Git features","benefit":3,"easiness":3,"level":"advanced","tags":["Tools","Git"],"link":"/Learn--Clean-Code-With-Cpp/lessons/advanced-git-features","slug":"advanced-git-features","priority":3},{"title":"CMake","benefit":3,"easiness":3,"level":"good-to-know","tags":["C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/cmake","slug":"cmake","priority":3},{"title":"C++ casts","benefit":3,"easiness":3,"level":"basic-cpp","tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/cpp-casts","slug":"cpp-casts","priority":3},{"title":"Functional programming","benefit":3,"easiness":3,"level":"practices-and-patterns","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/functional-programming","slug":"functional-programming","priority":3},{"title":"Measuring performance","benefit":3,"easiness":3,"level":"advanced","tags":["Performant Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/measuring-performance","slug":"measuring-performance","priority":3},{"title":"Move semantics","benefit":3,"easiness":3,"level":"basic-cpp","tags":["Performant Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/move-semantics","slug":"move-semantics","priority":3},{"title":"Precompiled Header","benefit":3,"easiness":3,"level":"good-to-know","tags":["C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/precompiled-header","slug":"precompiled-header","priority":3},{"title":"<random>","benefit":3,"easiness":3,"level":"basic-cpp","tags":["C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/random","slug":"random","priority":3},{"title":"The Rule of 5","benefit":3,"easiness":3,"level":"practices-and-patterns","tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/rule-of-5","slug":"rule-of-5","priority":3},{"title":"State and Strategy","benefit":3,"easiness":3,"level":"practices-and-patterns","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/state-and-strategy","slug":"state-and-strategy","priority":3},{"title":"std::variant","benefit":3,"easiness":3,"level":"basic-cpp","tags":["Clean Code","Performant Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/variant","slug":"variant","priority":3},{"title":"Cache and Branches","benefit":3,"easiness":2,"level":"advanced","tags":["Performant Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/cache-and-branches","slug":"cache-and-branches","priority":2.75},{"title":"Consistency in style","benefit":2,"easiness":5,"level":"practices-and-patterns","tags":["Beautiful Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/consistency-in-style","slug":"consistency-in-style","priority":2.75},{"title":"l-values and r-values","benefit":3,"easiness":2,"level":"advanced","link":"/Learn--Clean-Code-With-Cpp/lessons/l-values-and-r-values","slug":"l-values-and-r-values","priority":2.75},{"title":"Linked lists","benefit":2,"easiness":5,"level":"advanced","tags":["Performant Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/linked-list","slug":"linked-list","priority":2.75},{"title":"Multithreading","benefit":3,"easiness":2,"level":"advanced","tags":["Performant Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/multithreading","slug":"multithreading","priority":2.75},{"title":"Polymorphism","benefit":3,"easiness":2,"level":"basic-cpp","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/polymorphism","slug":"polymorphism","priority":2.75},{"title":"Space out your code","benefit":2,"easiness":5,"level":"practices-and-patterns","tags":["Beautiful Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/space-out-your-code","slug":"space-out-your-code","priority":2.75},{"title":"Avoid dead code","benefit":2,"easiness":3,"level":"practices-and-patterns","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/avoid-dead-code","slug":"avoid-dead-code","priority":2.25},{"title":"Inheritance","benefit":2,"easiness":3,"level":"basic-cpp","link":"/Learn--Clean-Code-With-Cpp/lessons/inheritance","slug":"inheritance","priority":2.25},{"title":"Avoid nested namespaces","benefit":1,"easiness":5,"level":"useless","tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/avoid-nested-namespaces","slug":"avoid-nested-namespaces","priority":2},{"title":"friend","benefit":1,"easiness":5,"level":"advanced","tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/friend","slug":"friend","priority":2},{"title":"#if defined()","benefit":1,"easiness":5,"level":"useless","tags":["Beautiful Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/if-defined","slug":"if-defined","priority":2},{"title":"Pointers vs References","benefit":2,"easiness":2,"level":"basic-cpp","tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/pointers-vs-references","slug":"pointers-vs-references","priority":2},{"title":"Trailing return type","benefit":1,"easiness":5,"level":"useless","tags":["Beautiful Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/trailing-return-type","slug":"trailing-return-type","priority":2},{"title":"Macros","benefit":1,"easiness":3,"level":"basic-cpp","link":"/Learn--Clean-Code-With-Cpp/lessons/macros","slug":"macros","priority":1.5}]');function a(e){var n=e.slug,t=e.text,a=e.anchor,l=i.find((function(e){return e.slug===n}));if(void 0===l)throw console.error('Broken link to inexistant lesson "'+n+'"'),"";return s.createElement("a",{href:l.link+(a||"")},t||l.title)}},1114:function(e,n,t){t.d(n,{Z:function(){return i}});var s=t(7294);function i(e){var n=e.hash,t=e.text,i="https://github.com/JulesFouchy/Learn--Clean-Code-With-Cpp--Project/commit/"+n;return s.createElement("a",{href:i,target:"_blank"},s.createElement("i",null,"Commit"),t&&s.createElement("span",null,": ",t))}},4132:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return d},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return C},default:function(){return m}});var s=t(7462),i=t(3366),a=(t(7294),t(4137)),l=t(6894),r=t(1114),o=t(456),p=["components"],d={title:"Guess the number"},c=void 0,u={unversionedId:"assignment/guess-the-number",id:"assignment/guess-the-number",title:"Guess the number",description:"Our first game will be very simple",source:"@site/../../content/assignment/02-guess-the-number.md",sourceDirName:"assignment",slug:"/assignment/guess-the-number",permalink:"/Learn--Clean-Code-With-Cpp/assignment/guess-the-number",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Guess the number"},sidebar:"assignment",previous:{title:"Setting up a project",permalink:"/Learn--Clean-Code-With-Cpp/assignment/project-setup"},next:{title:"Hangman",permalink:"/Learn--Clean-Code-With-Cpp/assignment/hangman"}},C=[{value:"The building blocks",id:"the-building-blocks",children:[],level:2},{value:"Picking a random number",id:"picking-a-random-number",children:[],level:2},{value:"Getting an input from the user",id:"getting-an-input-from-the-user",children:[],level:2},{value:"The game",id:"the-game",children:[],level:2},{value:"Refactoring",id:"refactoring",children:[],level:2}],g={toc:C};function m(e){var n=e.components,t=(0,i.Z)(e,p);return(0,a.kt)("wrapper",(0,s.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Our first game will be very simple: the program picks a random number, and the user must find it. They make guesses, and the program tells them if they are above or below the actual number. Here is an example:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u2190 I picked a number between 0 and 100",(0,a.kt)("br",null),"\n\u2192 50",(0,a.kt)("br",null),"\n\u2190 Greater",(0,a.kt)("br",null),"\n\u2192 75",(0,a.kt)("br",null),"\n\u2190 Smaller",(0,a.kt)("br",null),"\n\u2192 63",(0,a.kt)("br",null),"\n\u2190 Congrats, you won!",(0,a.kt)("br",null))),(0,a.kt)(l.ZP,{mdxType:"TipTryNotToRead"}),(0,a.kt)("h2",{id:"the-building-blocks"},"The building blocks"),(0,a.kt)("p",null,"So, what do we need to code for this game?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"pick a random number"),(0,a.kt)("li",{parentName:"ul"},"get an input from the user"),(0,a.kt)("li",{parentName:"ul"},"compare the input to the number we picked, and display a message accordingly"),(0,a.kt)("li",{parentName:"ul"},"repeat until the user finds the correct number")),(0,a.kt)("p",null,"We will code each of these features one by one, and we will assemble them at the end."),(0,a.kt)("h2",{id:"picking-a-random-number"},"Picking a random number"),(0,a.kt)("p",null,"Actually this is a bit of an annoying topic in C++, because C++ wants to be very generic and fit every use case. You can read ",(0,a.kt)(o.Z,{text:"the lesson on random number generators",slug:"random",mdxType:"LessonLink"})," or just copy this function:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <random>\n\n/// Returns a random int between min (included) and max (included)\nint rand(int min, int max) {\n    static std::default_random_engine  generator{std::random_device{}()};\n    std::uniform_int_distribution<int> distribution{min, max};\n    return distribution(generator);\n}\n")),(0,a.kt)(r.Z,{hash:"4af54ba4cb948f6b83ec95e7720ecef2baa09646",mdxType:"CommitLink"}),(0,a.kt)("h2",{id:"getting-an-input-from-the-user"},"Getting an input from the user"),(0,a.kt)("p",null,"You can use ",(0,a.kt)("a",{parentName:"p",href:"https://en.cppreference.com/w/cpp/io/cin"},(0,a.kt)("inlineCode",{parentName:"a"},"std::cin"))," for that. I recommend to wrap that bit of code inside a function, because it will make the usage more convenient afterwards:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"int get_int_from_user() {\n    // TODO ;) Use std::cin to get an int, and then return it\n}\n")),(0,a.kt)("p",null,"PS: did you think of what happens when the user tries to input something that is not a number? Here is ",(0,a.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/10349857/how-to-handle-wrong-data-type-input"},"a link that can help you"),". (NB: now you might start to understand why we wrap this code in a function: the code is not trivial so we want to encapsulate it. You can also read ",(0,a.kt)(o.Z,{slug:"write-small-functions",mdxType:"LessonLink"}),".)"),(0,a.kt)(r.Z,{hash:"f0b93c1f556d25dc4b4a9511f50110ed5a3765ae",mdxType:"CommitLink"}),(0,a.kt)("h2",{id:"the-game"},"The game"),(0,a.kt)("p",null,"We will now finish our game by implementing the last two steps:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"void play_guess_the_number()\n{\n    // TODO\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"First you need to pick a random number"),(0,a.kt)("li",{parentName:"ul"},"Then you need a loop that asks the user for a number, until they guess right. For the loop you can do something like")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'bool finished = false;\nwhile (!finished) {\n    // Ask for a number\n    // If it is the correct one then set finished to true\n    // Else give a hint to the user ("Greater" or "Smaller")\n}\n')),(0,a.kt)(r.Z,{hash:"26ea43ecc10254df0138015bb9543985dbb79090",mdxType:"CommitLink"}),(0,a.kt)("h2",{id:"refactoring"},"Refactoring"),(0,a.kt)("p",null,"Now that we are done with that game we will move the code into its own file, so that ",(0,a.kt)("em",{parentName:"p"},"main.cpp")," is now clean again and we can start coding our next game!"),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"It is a good practice to first code as you want, where you want, and get something working. You can worry about cleaning up in a second step.",(0,a.kt)("br",null),"\n(Read ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)(o.Z,{slug:"make-it-work-then-make-it-good",mdxType:"LessonLink"})),")"))),(0,a.kt)("p",null,"Think of what needs to go in the header (",(0,a.kt)("em",{parentName:"p"},".hpp"),"), and what belongs to the source file (",(0,a.kt)("em",{parentName:"p"},".cpp"),"). Tip: try to put as little things as possible in the header, because we want to keep things private as much as possible."),(0,a.kt)("p",null,"Your main file should now look like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'#include "play_guess_the_number.h"\n\nint main()\n{\n    play_guess_the_number();\n}\n')),(0,a.kt)(r.Z,{hash:"52515fd3ad25c43df3bad4814b672ae2543941b3",mdxType:"CommitLink"}))}m.isMDXComponent=!0},6894:function(e,n,t){t.d(n,{ZP:function(){return o}});var s=t(7462),i=t(3366),a=(t(7294),t(4137)),l=["components"],r={toc:[]};function o(e){var n=e.components,t=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,s.Z)({},r,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"I encourage you to first try to code without reading the guided steps that follow! Think of the different functions that you need to write, and try to implement them!",(0,a.kt)("br",null),"\nOnly when you are stuck are you allowed to keep reading \ud83d\ude09 And read only enough to get unstuck! Then try to keep coding by yourself \ud83d\ude01 (until you are stuck again)."))))}o.isMDXComponent=!0}}]);