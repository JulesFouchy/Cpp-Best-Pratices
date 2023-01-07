"use strict";(self.webpackChunkteaching_toolbox_website_generator=self.webpackChunkteaching_toolbox_website_generator||[]).push([[8334],{4137:function(e,t,s){s.d(t,{Zo:function(){return c},kt:function(){return u}});var n=s(7294);function i(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function a(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,n)}return s}function l(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?a(Object(s),!0).forEach((function(t){i(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):a(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function o(e,t){if(null==e)return{};var s,n,i=function(e,t){if(null==e)return{};var s,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)s=a[n],t.indexOf(s)>=0||(i[s]=e[s]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)s=a[n],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(i[s]=e[s])}return i}var r=n.createContext({}),p=function(e){var t=n.useContext(r),s=t;return e&&(s="function"==typeof e?e(t):l(l({},t),e)),s},c=function(e){var t=p(e.components);return n.createElement(r.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},C=n.forwardRef((function(e,t){var s=e.components,i=e.mdxType,a=e.originalType,r=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),C=p(s),u=i,g=C["".concat(r,".").concat(u)]||C[u]||d[u]||a;return s?n.createElement(g,l(l({ref:t},c),{},{components:s})):n.createElement(g,l({ref:t},c))}));function u(e,t){var s=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=s.length,l=new Array(a);l[0]=C;var o={};for(var r in t)hasOwnProperty.call(t,r)&&(o[r]=t[r]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<a;p++)l[p]=s[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,s)}C.displayName="MDXCreateElement"},456:function(e,t,s){s.d(t,{Z:function(){return a}});var n=s(7294),i=JSON.parse('[{"title":"Compiler","benefit":5,"easiness":5,"level":"tools","bias":1,"tags":["Tools","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/install-a-compiler","slug":"install-a-compiler","priority":5},{"title":"Classes and Structs","benefit":5,"easiness":5,"level":"basic-cpp","link":"/Learn--Clean-Code-With-Cpp/lessons/classes-and-structs","slug":"classes-and-structs","priority":5},{"title":"for","benefit":5,"easiness":5,"level":"basic-cpp","link":"/Learn--Clean-Code-With-Cpp/lessons/for","slug":"for","priority":5},{"title":"Functions","benefit":5,"easiness":5,"level":"basic-cpp","link":"/Learn--Clean-Code-With-Cpp/lessons/functions","slug":"functions","priority":5},{"title":"IDE","benefit":5,"easiness":5,"level":"tools","tags":["Tools"],"link":"/Learn--Clean-Code-With-Cpp/lessons/ide","slug":"ide","priority":5},{"title":"if","benefit":5,"easiness":5,"level":"basic-cpp","link":"/Learn--Clean-Code-With-Cpp/lessons/if","slug":"if","priority":5},{"title":"Operator Overloading","benefit":5,"easiness":5,"level":"basic-cpp","link":"/Learn--Clean-Code-With-Cpp/lessons/operator-overloading","slug":"operator-overloading","priority":5},{"title":"References","benefit":5,"easiness":5,"level":"basic-cpp","link":"/Learn--Clean-Code-With-Cpp/lessons/references","slug":"references","priority":5},{"title":"Structured bindings","benefit":5,"easiness":5,"level":"basic-cpp","link":"/Learn--Clean-Code-With-Cpp/lessons/structured-bindings","slug":"structured-bindings","priority":5},{"title":"Variables","benefit":5,"easiness":5,"level":"basic-cpp","link":"/Learn--Clean-Code-With-Cpp/lessons/variables","slug":"variables","priority":5},{"title":"std::vector","benefit":5,"easiness":5,"level":"basic-cpp","tags":["Clean Code","Performant Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/vector","slug":"vector","priority":5},{"title":"Git","benefit":5,"easiness":4,"level":"tools","bias":1,"tags":["Tools","Git"],"link":"/Learn--Clean-Code-With-Cpp/lessons/git","slug":"git","priority":4.75},{"title":"Make it work, then make it good","benefit":5,"easiness":4,"level":"clean-code","bias":1,"tags":["Workflow"],"link":"/Learn--Clean-Code-With-Cpp/lessons/make-it-work-then-make-it-good","slug":"make-it-work-then-make-it-good","priority":4.75},{"title":"Debugger","benefit":5,"easiness":4,"level":"tools","tags":["Tools"],"link":"/Learn--Clean-Code-With-Cpp/lessons/debugger","slug":"debugger","priority":4.75},{"title":"Formatter","benefit":5,"easiness":4,"level":"tools","tags":["Tools"],"link":"/Learn--Clean-Code-With-Cpp/lessons/formatting-tool","slug":"formatting-tool","priority":4.75},{"title":"Prefer free functions","benefit":5,"easiness":3,"level":"clean-code","bias":5,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/prefer-free-functions","slug":"prefer-free-functions","priority":4.5},{"title":"Design cohesive classes","benefit":5,"easiness":3,"level":"clean-code","bias":4,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/design-cohesive-classes","slug":"design-cohesive-classes","priority":4.5},{"title":"Use structs to group data","benefit":5,"easiness":3,"level":"clean-code","bias":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/use-structs-to-group-data","slug":"use-structs-to-group-data","priority":4.5},{"title":"Write small functions","benefit":5,"easiness":3,"level":"clean-code","bias":2,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/write-small-functions","slug":"write-small-functions","priority":4.5},{"title":"DRY: Don\'t repeat yourself","benefit":5,"easiness":3,"level":"clean-code","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/dry-dont-repeat-yourself","slug":"dry-dont-repeat-yourself","priority":4.5},{"title":"Internet Search","benefit":5,"easiness":3,"level":"tools","tags":["Workflow"],"link":"/Learn--Clean-Code-With-Cpp/lessons/internet","slug":"internet","priority":4.5},{"title":"Static Analysers","benefit":5,"easiness":3,"level":"tools","tags":["Tools"],"link":"/Learn--Clean-Code-With-Cpp/lessons/static-analysers","slug":"static-analysers","priority":4.5},{"title":"Strong Types","benefit":5,"easiness":3,"level":"clean-code","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/strong-types","slug":"strong-types","priority":4.5},{"title":"Use libraries","benefit":5,"easiness":3,"level":"practices-and-patterns","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/use-libraries","slug":"use-libraries","priority":4.5},{"title":"Watch conferences","benefit":5,"easiness":3,"level":"practices-and-patterns","tags":["Workflow"],"link":"/Learn--Clean-Code-With-Cpp/lessons/watch-conferences","slug":"watch-conferences","priority":4.5},{"title":"Write libraries","benefit":5,"easiness":3,"level":"advanced","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/write-libraries","slug":"write-libraries","priority":4.5},{"title":"The Command pattern","benefit":5,"easiness":2,"level":"advanced","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/command","slug":"command","priority":4.25},{"title":"Dear ImGui","benefit":5,"easiness":2,"level":"practices-and-patterns","tags":["Libraries & Frameworks"],"link":"/Learn--Clean-Code-With-Cpp/lessons/dear-imgui","slug":"dear-imgui","priority":4.25},{"title":"Designated Initializers","benefit":4,"easiness":5,"level":"basic-cpp","tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/designated_initializers","slug":"designated_initializers","priority":4.25},{"title":"Enums","benefit":4,"easiness":5,"level":"basic-cpp","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/enums","slug":"enums","priority":4.25},{"title":"Range-based for loop","benefit":4,"easiness":5,"level":"basic-cpp","tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/range-based-for-loop","slug":"range-based-for-loop","priority":4.25},{"title":"Testing","benefit":5,"easiness":2,"level":"practices-and-patterns","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/testing","slug":"testing","priority":4.25},{"title":"Avoid unnecessary condition nesting","benefit":4,"easiness":4,"level":"practices-and-patterns","link":"/Learn--Clean-Code-With-Cpp/lessons/avoid-unnecessary-condition-nesting","slug":"avoid-unnecessary-condition-nesting","priority":4},{"title":"Lambda functions","benefit":4,"easiness":4,"level":"basic-cpp","tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/lambda","slug":"lambda","priority":4},{"title":"Master your IDE","benefit":4,"easiness":4,"level":"advanced","tags":["Tools"],"link":"/Learn--Clean-Code-With-Cpp/lessons/master-your-ide","slug":"master-your-ide","priority":4},{"title":"Naming","benefit":5,"easiness":1,"level":"clean-code","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/naming","slug":"naming","priority":4},{"title":"std::optional","benefit":4,"easiness":4,"level":"basic-cpp","tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/optional","slug":"optional","priority":4},{"title":"Single Source of Truth","benefit":4,"easiness":4,"level":"practices-and-patterns","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/single-source-of-truth","slug":"single-source-of-truth","priority":4},{"title":"Split problems in small pieces","benefit":5,"easiness":1,"level":"practices-and-patterns","tags":["Workflow"],"link":"/Learn--Clean-Code-With-Cpp/lessons/split-problems-in-small-pieces","slug":"split-problems-in-small-pieces","priority":4},{"title":"std::string and std::string_view","benefit":4,"easiness":4,"level":"basic-cpp","tags":["C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/string-and-string-view","slug":"string-and-string-view","priority":4},{"title":"Code reviews","benefit":4,"easiness":3,"level":"practices-and-patterns","tags":["Workflow"],"link":"/Learn--Clean-Code-With-Cpp/lessons/code-reviews","slug":"code-reviews","priority":3.75},{"title":"const","benefit":4,"easiness":3,"level":"basic-cpp","tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/const","slug":"const","priority":3.75},{"title":"Documentation","benefit":4,"easiness":3,"level":"practices-and-patterns","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/documentation","slug":"documentation","priority":3.75},{"title":"Don\'t overfocus on performance","benefit":4,"easiness":3,"level":"practices-and-patterns","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/dont-overfocus-on-performance","slug":"dont-overfocus-on-performance","priority":3.75},{"title":"Git submodules","benefit":4,"easiness":3,"level":"advanced","tags":["Tools","Git"],"link":"/Learn--Clean-Code-With-Cpp/lessons/git-submodules","slug":"git-submodules","priority":3.75},{"title":"Iterators","benefit":4,"easiness":3,"level":"basic-cpp","link":"/Learn--Clean-Code-With-Cpp/lessons/iterators","slug":"iterators","priority":3.75},{"title":"Minimize dependencies","benefit":4,"easiness":3,"level":"clean-code","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/minimize-dependencies","slug":"minimize-dependencies","priority":3.75},{"title":"Stack vs Heap","benefit":4,"easiness":3,"level":"basic-cpp","tags":["Performant Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/stack-vs-heap","slug":"stack-vs-heap","priority":3.75},{"title":"Static site generators","benefit":4,"easiness":3,"level":"good-to-know","tags":["Tools"],"link":"/Learn--Clean-Code-With-Cpp/lessons/static-site-generators","slug":"static-site-generators","priority":3.75},{"title":"STL algorithms","benefit":4,"easiness":3,"level":"basic-cpp","tags":["Clean Code","Performant Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/stl-algorithms","slug":"stl-algorithms","priority":3.75},{"title":"Templates","benefit":4,"easiness":3,"level":"basic-cpp","link":"/Learn--Clean-Code-With-Cpp/lessons/templates","slug":"templates","priority":3.75},{"title":"Write debug tools","benefit":4,"easiness":3,"level":"practices-and-patterns","tags":["Tools"],"link":"/Learn--Clean-Code-With-Cpp/lessons/write-debug-tools","slug":"write-debug-tools","priority":3.75},{"title":"assert","benefit":3,"easiness":5,"level":"basic-cpp","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/assert","slug":"assert","priority":3.5},{"title":"auto","benefit":3,"easiness":5,"level":"basic-cpp","tags":["Beautiful Code","Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/auto","slug":"auto","priority":3.5},{"title":"Composition over Inheritance","benefit":4,"easiness":2,"level":"practices-and-patterns","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/composition-over-inheritance","slug":"composition-over-inheritance","priority":3.5},{"title":"Debug vs Release","benefit":3,"easiness":5,"level":"practices-and-patterns","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/debug-vs-release","slug":"debug-vs-release","priority":3.5},{"title":"Deleted functions","benefit":3,"easiness":5,"level":"advanced","tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/deleted-functions","slug":"deleted-functions","priority":3.5},{"title":"Immediately Invoked Function","benefit":3,"easiness":5,"level":"practices-and-patterns","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/immediately-invoked-function","slug":"immediately-invoked-function","priority":3.5},{"title":"Markdown","benefit":3,"easiness":5,"level":"tools","tags":["Tools"],"link":"/Learn--Clean-Code-With-Cpp/lessons/markdown","slug":"markdown","priority":3.5},{"title":"namespace","benefit":3,"easiness":5,"level":"basic-cpp","link":"/Learn--Clean-Code-With-Cpp/lessons/namespace","slug":"namespace","priority":3.5},{"title":"Smart Pointers","benefit":3,"easiness":5,"level":"basic-cpp","tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/smart-pointers","slug":"smart-pointers","priority":3.5},{"title":"std::function","benefit":3,"easiness":5,"level":"basic-cpp","tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/std-function","slug":"std-function","priority":3.5},{"title":"Type erasure","benefit":4,"easiness":2,"level":"advanced","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/type-erasure","slug":"type-erasure","priority":3.5},{"title":"wasm and electron","benefit":4,"easiness":2,"level":"advanced","tags":["Libraries & Frameworks"],"link":"/Learn--Clean-Code-With-Cpp/lessons/wasm-and-electron","slug":"wasm-and-electron","priority":3.5},{"title":"std::array","benefit":3,"easiness":4,"level":"basic-cpp","link":"/Learn--Clean-Code-With-Cpp/lessons/array","slug":"array","priority":3.25},{"title":"Dependency Injection","benefit":3,"easiness":4,"level":"practices-and-patterns","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/dependency-injection","slug":"dependency-injection","priority":3.25},{"title":"Error Handling","benefit":3,"easiness":4,"level":"practices-and-patterns","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/error-handling","slug":"error-handling","priority":3.25},{"title":"Git Pull Requests","benefit":3,"easiness":4,"level":"advanced","tags":["Tools","Git"],"link":"/Learn--Clean-Code-With-Cpp/lessons/git-pull-request","slug":"git-pull-request","priority":3.25},{"title":"Scope guard","benefit":3,"easiness":4,"level":"practices-and-patterns","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/scope-guard","slug":"scope-guard","priority":3.25},{"title":"static","benefit":3,"easiness":4,"level":"basic-cpp","link":"/Learn--Clean-Code-With-Cpp/lessons/static","slug":"static","priority":3.25},{"title":"Advanced Git features","benefit":3,"easiness":3,"level":"advanced","tags":["Tools","Git"],"link":"/Learn--Clean-Code-With-Cpp/lessons/advanced-git-features","slug":"advanced-git-features","priority":3},{"title":"CMake","benefit":3,"easiness":3,"level":"good-to-know","tags":["C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/cmake","slug":"cmake","priority":3},{"title":"C++ casts","benefit":3,"easiness":3,"level":"basic-cpp","tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/cpp-casts","slug":"cpp-casts","priority":3},{"title":"Functional programming","benefit":3,"easiness":3,"level":"practices-and-patterns","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/functional-programming","slug":"functional-programming","priority":3},{"title":"Measuring performance","benefit":3,"easiness":3,"level":"advanced","tags":["Performant Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/measuring-performance","slug":"measuring-performance","priority":3},{"title":"Move semantics","benefit":3,"easiness":3,"level":"basic-cpp","tags":["Performant Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/move-semantics","slug":"move-semantics","priority":3},{"title":"Precompiled Header","benefit":3,"easiness":3,"level":"good-to-know","tags":["C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/precompiled-header","slug":"precompiled-header","priority":3},{"title":"<random>","benefit":3,"easiness":3,"level":"basic-cpp","tags":["C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/random","slug":"random","priority":3},{"title":"The Rule of 5","benefit":3,"easiness":3,"level":"practices-and-patterns","tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/rule-of-5","slug":"rule-of-5","priority":3},{"title":"State and Strategy","benefit":3,"easiness":3,"level":"practices-and-patterns","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/state-and-strategy","slug":"state-and-strategy","priority":3},{"title":"std::variant","benefit":3,"easiness":3,"level":"basic-cpp","tags":["Clean Code","Performant Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/variant","slug":"variant","priority":3},{"title":"Cache and Branches","benefit":3,"easiness":2,"level":"advanced","tags":["Performant Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/cache-and-branches","slug":"cache-and-branches","priority":2.75},{"title":"Consistency in style","benefit":2,"easiness":5,"level":"practices-and-patterns","tags":["Beautiful Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/consistency-in-style","slug":"consistency-in-style","priority":2.75},{"title":"l-values and r-values","benefit":3,"easiness":2,"level":"advanced","link":"/Learn--Clean-Code-With-Cpp/lessons/l-values-and-r-values","slug":"l-values-and-r-values","priority":2.75},{"title":"Linked lists","benefit":2,"easiness":5,"level":"advanced","tags":["Performant Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/linked-list","slug":"linked-list","priority":2.75},{"title":"Multithreading","benefit":3,"easiness":2,"level":"advanced","tags":["Performant Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/multithreading","slug":"multithreading","priority":2.75},{"title":"Polymorphism","benefit":3,"easiness":2,"level":"basic-cpp","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/polymorphism","slug":"polymorphism","priority":2.75},{"title":"Space out your code","benefit":2,"easiness":5,"level":"practices-and-patterns","tags":["Beautiful Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/space-out-your-code","slug":"space-out-your-code","priority":2.75},{"title":"Avoid dead code","benefit":2,"easiness":3,"level":"practices-and-patterns","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/avoid-dead-code","slug":"avoid-dead-code","priority":2.25},{"title":"Inheritance","benefit":2,"easiness":3,"level":"basic-cpp","link":"/Learn--Clean-Code-With-Cpp/lessons/inheritance","slug":"inheritance","priority":2.25},{"title":"Avoid nested namespaces","benefit":1,"easiness":5,"level":"useless","tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/avoid-nested-namespaces","slug":"avoid-nested-namespaces","priority":2},{"title":"friend","benefit":1,"easiness":5,"level":"advanced","tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/friend","slug":"friend","priority":2},{"title":"#if defined()","benefit":1,"easiness":5,"level":"useless","tags":["Beautiful Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/if-defined","slug":"if-defined","priority":2},{"title":"Pointers vs References","benefit":2,"easiness":2,"level":"basic-cpp","tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/pointers-vs-references","slug":"pointers-vs-references","priority":2},{"title":"Trailing return type","benefit":1,"easiness":5,"level":"useless","tags":["Beautiful Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/trailing-return-type","slug":"trailing-return-type","priority":2},{"title":"Macros","benefit":1,"easiness":3,"level":"basic-cpp","link":"/Learn--Clean-Code-With-Cpp/lessons/macros","slug":"macros","priority":1.5}]');function a(e){var t=e.slug,s=e.text,a=e.anchor,l=i.find((function(e){return e.slug===t}));if(void 0===l)throw console.error('Broken link to inexistant lesson "'+t+'"'),"";return n.createElement("a",{href:l.link+(a||"")},s||l.title)}},6741:function(e,t,s){s.r(t),s.d(t,{frontMatter:function(){return r},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return d},default:function(){return u}});var n=s(7462),i=s(3366),a=(s(7294),s(4137)),l=s(456),o=["components"],r={title:"Setting up a project"},p=void 0,c={unversionedId:"assignment/project-setup",id:"assignment/project-setup",title:"Setting up a project",description:"We will be making a program that allows you to play a few games, all in one project. This will force you to reuse code and maintain the hygiene of your codebase.",source:"@site/../../content/assignment/01-project-setup.md",sourceDirName:"assignment",slug:"/assignment/project-setup",permalink:"/Learn--Clean-Code-With-Cpp/assignment/project-setup",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Setting up a project"},sidebar:"assignment",previous:{title:"Introduction",permalink:"/Learn--Clean-Code-With-Cpp/assignment"},next:{title:"Guess the number",permalink:"/Learn--Clean-Code-With-Cpp/assignment/guess-the-number"}},d=[{value:"Git",id:"git",children:[],level:2},{value:"Project template",id:"project-template",children:[],level:2}],C={toc:d};function u(e){var t=e.components,s=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},C,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"We will be making a program that allows you to play a few games, all in one project. This will force you to reuse code and maintain the hygiene of your codebase."),(0,a.kt)("h2",{id:"git"},"Git"),(0,a.kt)("p",null,"First things first, let's create ",(0,a.kt)("strong",{parentName:"p"},"a Git repo"),". If you are not used to using Git, read ",(0,a.kt)(l.Z,{text:"the associated lesson",slug:"git",mdxType:"LessonLink"}),"."),(0,a.kt)("p",null,"I also created a repo that you will be able to use as a reference / solution as you work on the project. I will regularly link to commits that correspond to the current exercise, and you can also check out the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/JulesFouchy/Learn--Clean-Code-With-Cpp--Project/commits/main"},"commit history"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"NB:")," in my solution there are a lot of comments that explain why I do things in a certain way. They are not good examples of comments that you should put in your code; they are only here to help you learn C++. For example these comments shouldn't appear in actual code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'static constexpr int MIN = 0;   // `static constexpr` is the "proper" way of declaring constants known at compile time\nstatic constexpr int MAX = 100; // It is as efficient as `#define` but has the benefit of working like a normal C++ variable: it has a type, etc.\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"NB:")," my solutions will not always be the best, partly to keep them simple, partly to leave you room to think and improve the code I give you \ud83d\ude09 (and partly because I am not an omniscient programmer and there might be things that I am simply not aware of).\nWe will come back to some of the solutions later to improve them."),(0,a.kt)("h2",{id:"project-template"},"Project template"),(0,a.kt)("p",null,"I would recommend you use ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/JulesFouchy/Simple-Cpp-Setup"},"this template"),". It is a minimalist C++ project that uses CMake. It also sets up a few tools that will be useful to you. Read its readme to learn how to build it! (NB: I don't recommend to use the dev container for this project because we will do some graphics stuff later on)."))}u.isMDXComponent=!0}}]);