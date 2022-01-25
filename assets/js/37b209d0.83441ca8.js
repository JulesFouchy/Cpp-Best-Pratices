(self.webpackChunkteaching_toolbox_website_generator=self.webpackChunkteaching_toolbox_website_generator||[]).push([[1316],{2666:function(e,s,t){e.exports={src:{srcSet:t.p+"assets/ideal-img/the-fucking-manual.c2f495e.1200.jpg 1200w",images:[{path:t.p+"assets/ideal-img/the-fucking-manual.c2f495e.1200.jpg",width:1200,height:720}],src:t.p+"assets/ideal-img/the-fucking-manual.c2f495e.1200.jpg",toString:function(){return t.p+"assets/ideal-img/the-fucking-manual.c2f495e.1200.jpg"},placeholder:void 0,width:1200,height:720},preSrc:"data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAGAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAgEAACAgIABwAAAAAAAAAAAAABAgADBBEFBgcSIVGh/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAL/xAAWEQEBAQAAAAAAAAAAAAAAAAAAATH/2gAMAwEAAhEDEQA/AJT08xr7eQ+Jut4rwnsspyECgs57NoR60Tv5JYB4iJM2j//Z",palette:null}},8442:function(e,s,t){"use strict";t.d(s,{Z:function(){return l}});var i=t(7294),n=t(4820);function l(e){var s=e.slug,t=e.text,l=e.anchor,a=n.find((function(e){return e.slug===s}));if(void 0===a)throw console.error('Broken link to inexistant lesson "'+s+'"'),"";return i.createElement("a",{href:a.link+(l||"")},t||a.title)}},5131:function(e,s,t){"use strict";t.r(s),t.d(s,{frontMatter:function(){return p},contentTitle:function(){return C},metadata:function(){return d},toc:function(){return g},default:function(){return c}});var i=t(7462),n=t(3366),l=(t(7294),t(4137)),a=t(5944),o=t(8442),r=["components"],p={title:"Use libraries",benefit:5,easiness:3,level:3,tags:["Clean Code"]},C=void 0,d={unversionedId:"lessons/use-libraries",id:"lessons/use-libraries",title:"Use libraries",description:"Build from source",source:"@site/../../content/lessons/use-libraries.md",sourceDirName:"lessons",slug:"/lessons/use-libraries",permalink:"/Learn--Clean-Code-With-Cpp/lessons/use-libraries",tags:[{label:"Clean Code",permalink:"/Learn--Clean-Code-With-Cpp/tags/clean-code"}],version:"current",frontMatter:{title:"Use libraries",benefit:5,easiness:3,level:3,tags:["Clean Code"]},sidebar:"lessons",previous:{title:"Stack vs Heap",permalink:"/Learn--Clean-Code-With-Cpp/lessons/stack-vs-heap"},next:{title:"assert",permalink:"/Learn--Clean-Code-With-Cpp/lessons/assert"}},g=[{value:"Build from source",id:"build-from-source",children:[],level:2},{value:"Add them to your project with CMake",id:"add-them-to-your-project-with-cmake",children:[],level:2},{value:"Read the documentation",id:"read-the-documentation",children:[],level:2}],u={toc:g};function c(e){var s=e.components,p=(0,n.Z)(e,r);return(0,l.kt)("wrapper",(0,i.Z)({},u,p,{components:s,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"build-from-source"},"Build from source"),(0,l.kt)("p",null,"Building from source means that:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"anyone simply has to clone your project and is guaranteed to have all the dependencies"),(0,l.kt)("li",{parentName:"ul"},"you never have any version conflict"),(0,l.kt)("li",{parentName:"ul"},"you can tweak the libraries if you need to (and if their license allows so)"),(0,l.kt)("li",{parentName:"ul"},"you have quick access to the source code to read it and your IDE can jump to it")),(0,l.kt)("p",null,"To add a library to your project you can simply download the folder and copy it into your project, but a better practice is to use a ",(0,l.kt)(o.Z,{text:"Git submodule",slug:"git-submodules",mdxType:"LessonLink"}),"."),(0,l.kt)("h2",{id:"add-them-to-your-project-with-cmake"},"Add them to your project with CMake"),(0,l.kt)("p",null,"If the library provides good CMake support, all you should have to do is:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cmake"},"add_subdirectory(libname)\ntarget_link_libraries(${PROJECT_NAME} PRIVATE libname)\n")),(0,l.kt)("p",null,"If not, then you will have to define the target and its requirements yourself. For that, check out ",(0,l.kt)(o.Z,{text:"the lesson on CMake for library authors",slug:"cmake",anchor:"#cmake-for-library-authors",mdxType:"LessonLink"}),"."),(0,l.kt)("h2",{id:"read-the-documentation"},"Read the documentation"),(0,l.kt)("p",null,"Read the doc! Really! Or at least all the tutorial and introduction parts!",(0,l.kt)("br",null),"\nWhenever I finally take the time to sit down and go through the documentation of a library I use, I always end up cursing myself for not doing it earlier because I learn so much while reading it and I realize it would have saved me a lot of debugging time if I had read it before trying to blindly use the library! Plus you will discover amazing features that you were not even aware of!"),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Take the time and ",(0,l.kt)("strong",{parentName:"p"},"Read the Fucking Manual"),". Programing is a slow and patient process. You will save time later down the road if you take the time to do things properly from the get go."))),(0,l.kt)(a.Z,{img:t(2666),mdxType:"Image"}))}c.isMDXComponent=!0},4820:function(e){"use strict";e.exports=JSON.parse('[{"title":"Use an IDE","benefit":5,"easiness":5,"level":1,"tags":["Tools"],"link":"/Learn--Clean-Code-With-Cpp/lessons/ide","slug":"ide","priority":1,"points":0.625},{"title":"Use Git","benefit":5,"easiness":4,"level":1,"bias":1,"tags":["Tools","Git"],"link":"/Learn--Clean-Code-With-Cpp/lessons/git","slug":"git","priority":0.9875,"points":1.25},{"title":"Use a debugger","benefit":5,"easiness":4,"level":1,"tags":["Tools"],"link":"/Learn--Clean-Code-With-Cpp/lessons/debugger","slug":"debugger","priority":0.9875,"points":1.25},{"title":"Use a formatting tool","benefit":5,"easiness":4,"level":1,"tags":["Tools"],"link":"/Learn--Clean-Code-With-Cpp/lessons/formatting-tool","slug":"formatting-tool","priority":0.9875,"points":1.25},{"title":"Static analysis and Sanitizers","benefit":5,"easiness":3,"level":1,"tags":["Tools"],"link":"/Learn--Clean-Code-With-Cpp/lessons/static-analysis-and-sanitizers","slug":"static-analysis-and-sanitizers","priority":0.975,"points":1.875},{"title":"Naming","benefit":5,"easiness":1,"level":1,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/naming","slug":"naming","priority":0.95,"points":3.125},{"title":"Consistency in style","benefit":2,"easiness":5,"level":1,"tags":["Beautiful Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/consistency-in-style","slug":"consistency-in-style","priority":0.8875000000000001,"points":0.625},{"title":"Prefer free functions","benefit":5,"easiness":3,"level":2,"bias":5,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/free-functions","slug":"free-functions","priority":0.775,"points":0.5172413793103449},{"title":"Design Cohesive Classes","benefit":5,"easiness":3,"level":2,"bias":4,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/design-cohesive-classes","slug":"design-cohesive-classes","priority":0.775,"points":0.5172413793103449},{"title":"When to use structs","benefit":5,"easiness":3,"level":2,"bias":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/when-to-use-structs","slug":"when-to-use-structs","priority":0.775,"points":0.5172413793103449},{"title":"Write small functions","benefit":5,"easiness":3,"level":2,"bias":2,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/write-small-functions","slug":"write-small-functions","priority":0.775,"points":0.5172413793103449},{"title":"Make it work, then make it good","benefit":5,"easiness":3,"level":2,"bias":1,"tags":["Workflow"],"link":"/Learn--Clean-Code-With-Cpp/lessons/make-it-work-then-make-it-good","slug":"make-it-work-then-make-it-good","priority":0.775,"points":0.5172413793103449},{"title":"DRY: Don\'t repeat yourself","benefit":5,"easiness":2,"level":2,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/dont-repeat-yourself","slug":"dont-repeat-yourself","priority":0.7625000000000001,"points":0.6896551724137931},{"title":"Enums","benefit":4,"easiness":5,"level":2,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/enums","slug":"enums","priority":0.7625000000000001,"points":0.1724137931034483},{"title":"Orthogonality","benefit":5,"easiness":2,"level":2,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/orthogonality","slug":"orthogonality","priority":0.7625000000000001,"points":0.6896551724137931},{"title":"Split problems in small pieces","benefit":5,"easiness":1,"level":2,"tags":["Workflow"],"link":"/Learn--Clean-Code-With-Cpp/lessons/split-problems-in-small-pieces","slug":"split-problems-in-small-pieces","priority":0.75,"points":0.8620689655172413},{"title":"std::vector","benefit":5,"easiness":5,"level":3,"tags":["Clean Code","Performant Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/vector","slug":"vector","priority":0.6,"points":0.03125},{"title":"Documentation","benefit":5,"easiness":3,"level":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/documentation","slug":"documentation","priority":0.575,"points":0.09375},{"title":"Stack vs Heap","benefit":5,"easiness":3,"level":3,"tags":["Performant Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/stack-vs-heap","slug":"stack-vs-heap","priority":0.575,"points":0.09375},{"title":"Use libraries","benefit":5,"easiness":3,"level":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/use-libraries","slug":"use-libraries","priority":0.575,"points":0.09375},{"title":"assert","benefit":4,"easiness":5,"level":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/assert","slug":"assert","priority":0.5625,"points":0.03125},{"title":"auto","benefit":4,"easiness":5,"level":3,"tags":["Beautiful Code","Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/auto","slug":"auto","priority":0.5625,"points":0.03125},{"title":"Testing","benefit":5,"easiness":2,"level":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/testing","slug":"testing","priority":0.5625,"points":0.125},{"title":"Type design","benefit":5,"easiness":2,"level":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/type-design","slug":"type-design","priority":0.5625,"points":0.125},{"title":"Dependencies","benefit":5,"easiness":1,"level":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/dependencies","slug":"dependencies","priority":0.55,"points":0.15625},{"title":"Lambda functions","benefit":4,"easiness":4,"level":3,"tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/lambda","slug":"lambda","priority":0.55,"points":0.0625},{"title":"Master your IDE","benefit":4,"easiness":4,"level":3,"tags":["Tools"],"link":"/Learn--Clean-Code-With-Cpp/lessons/master-your-ide","slug":"master-your-ide","priority":0.55,"points":0.0625},{"title":"std::optional","benefit":4,"easiness":4,"level":3,"tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/optional","slug":"optional","priority":0.55,"points":0.0625},{"title":"Single Source of Truth","benefit":4,"easiness":4,"level":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/single-source-of-truth","slug":"single-source-of-truth","priority":0.55,"points":0.0625},{"title":"Strong Typing","benefit":4,"easiness":4,"level":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/strong-typing","slug":"strong-typing","priority":0.55,"points":0.0625},{"title":"Code reviews","benefit":4,"easiness":3,"level":3,"tags":["Workflow"],"link":"/Learn--Clean-Code-With-Cpp/lessons/code-reviews","slug":"code-reviews","priority":0.5375,"points":0.09375},{"title":"const","benefit":4,"easiness":3,"level":3,"tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/const","slug":"const","priority":0.5375,"points":0.09375},{"title":"Don\'t overfocus on performance","benefit":4,"easiness":3,"level":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/dont-overfocus-on-performance","slug":"dont-overfocus-on-performance","priority":0.5375,"points":0.09375},{"title":"Git submodules","benefit":4,"easiness":3,"level":3,"tags":["Tools","Git"],"link":"/Learn--Clean-Code-With-Cpp/lessons/git-submodules","slug":"git-submodules","priority":0.5375,"points":0.09375},{"title":"STL algorithms","benefit":4,"easiness":3,"level":3,"tags":["Clean Code","Performant Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/stl-algorithms","slug":"stl-algorithms","priority":0.5375,"points":0.09375},{"title":"Composition over Inheritance","benefit":4,"easiness":2,"level":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/composition-over-inheritance","slug":"composition-over-inheritance","priority":0.525,"points":0.125},{"title":"Debug vs Release","benefit":3,"easiness":5,"level":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/debug-vs-release","slug":"debug-vs-release","priority":0.525,"points":0.03125},{"title":"Immediately Invoked Function","benefit":3,"easiness":5,"level":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/immediately-invoked-function","slug":"immediately-invoked-function","priority":0.525,"points":0.03125},{"title":"Markdown","benefit":3,"easiness":5,"level":3,"tags":["Tools"],"link":"/Learn--Clean-Code-With-Cpp/lessons/markdown","slug":"markdown","priority":0.525,"points":0.03125},{"title":"Range-based for loop","benefit":3,"easiness":5,"level":3,"tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/range-based-for-loop","slug":"range-based-for-loop","priority":0.525,"points":0.03125},{"title":"Smart Pointers","benefit":3,"easiness":5,"level":3,"tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/smart-pointers","slug":"smart-pointers","priority":0.525,"points":0.03125},{"title":"Error Handling","benefit":3,"easiness":4,"level":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/error-handling","slug":"error-handling","priority":0.5125,"points":0.0625},{"title":"Git Pull Requests","benefit":3,"easiness":4,"level":3,"tags":["Tools","Git"],"link":"/Learn--Clean-Code-With-Cpp/lessons/git-pull-request","slug":"git-pull-request","priority":0.5125,"points":0.0625},{"title":"Advanced Git features","benefit":3,"easiness":3,"level":3,"tags":["Tools","Git"],"link":"/Learn--Clean-Code-With-Cpp/lessons/advanced-git-features","slug":"advanced-git-features","priority":0.5,"points":0.09375},{"title":"CMake","benefit":3,"easiness":3,"level":3,"tags":["C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/cmake","slug":"cmake","priority":0.5,"points":0.09375},{"title":"Functional programming","benefit":3,"easiness":3,"level":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/functional-programming","slug":"functional-programming","priority":0.5,"points":0.09375},{"title":"Move semantics","benefit":3,"easiness":3,"level":3,"tags":["Performant Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/move-semantics","slug":"move-semantics","priority":0.5,"points":0.09375},{"title":"The Rule of 5","benefit":3,"easiness":3,"level":3,"tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/rule-of-5","slug":"rule-of-5","priority":0.5,"points":0.09375},{"title":"State and Strategy","benefit":3,"easiness":3,"level":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/state-and-strategy","slug":"state-and-strategy","priority":0.5,"points":0.09375},{"title":"std::variant","benefit":3,"easiness":3,"level":3,"tags":["Clean Code","Performant Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/variant","slug":"variant","priority":0.5,"points":0.09375},{"title":"Cache and Branches","benefit":3,"easiness":2,"level":3,"tags":["Performant Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/cache-and-branches","slug":"cache-and-branches","priority":0.4875,"points":0.125},{"title":"Multithreading","benefit":3,"easiness":2,"level":3,"tags":["Performant Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/multithreading","slug":"multithreading","priority":0.4875,"points":0.125},{"title":"Polymorphism","benefit":3,"easiness":2,"level":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/polymorphism","slug":"polymorphism","priority":0.4875,"points":0.125},{"title":"Watch conferences","benefit":5,"easiness":3,"level":4,"tags":["Workflow"],"link":"/Learn--Clean-Code-With-Cpp/lessons/watch-conferences","slug":"watch-conferences","priority":0.3749999999999999,"points":0.09375},{"title":"Write libraries","benefit":5,"easiness":3,"level":4,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/write-libraries","slug":"write-libraries","priority":0.3749999999999999,"points":0.09375},{"title":"Dear ImGui","benefit":5,"easiness":2,"level":4,"tags":["Libraries & Frameworks"],"link":"/Learn--Clean-Code-With-Cpp/lessons/dear-imgui","slug":"dear-imgui","priority":0.36249999999999993,"points":0.125},{"title":"Designated Initializers","benefit":4,"easiness":5,"level":4,"tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/designated_initializers","slug":"designated_initializers","priority":0.36249999999999993,"points":0.03125},{"title":"std::string and std::string_view","benefit":4,"easiness":4,"level":4,"tags":["C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/string-and-string-view","slug":"string-and-string-view","priority":0.3499999999999999,"points":0.0625},{"title":"Static site generators","benefit":4,"easiness":3,"level":4,"tags":["Tools"],"link":"/Learn--Clean-Code-With-Cpp/lessons/static-site-generators","slug":"static-site-generators","priority":0.3374999999999999,"points":0.09375},{"title":"Deleted functions","benefit":3,"easiness":5,"level":4,"tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/deleted-functions","slug":"deleted-functions","priority":0.32499999999999996,"points":0.03125},{"title":"Type erasure","benefit":4,"easiness":2,"level":4,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/type-erasure","slug":"type-erasure","priority":0.32499999999999996,"points":0.125},{"title":"wasm and electron","benefit":4,"easiness":2,"level":4,"tags":["Libraries & Frameworks"],"link":"/Learn--Clean-Code-With-Cpp/lessons/wasm-and-electron","slug":"wasm-and-electron","priority":0.32499999999999996,"points":0.125},{"title":"Scope guard","benefit":3,"easiness":4,"level":4,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/scope-guard","slug":"scope-guard","priority":0.31249999999999994,"points":0.0625},{"title":"C++ casts","benefit":3,"easiness":3,"level":4,"tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/cpp-casts","slug":"cpp-casts","priority":0.29999999999999993,"points":0.09375},{"title":"Measuring performance","benefit":3,"easiness":3,"level":4,"tags":["Performant Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/measuring-performance","slug":"measuring-performance","priority":0.29999999999999993,"points":0.09375},{"title":"Precompiled Header","benefit":3,"easiness":3,"level":4,"tags":["C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/precompiled-header","slug":"precompiled-header","priority":0.29999999999999993,"points":0.09375},{"title":"<random>","benefit":3,"easiness":3,"level":4,"tags":["C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/random","slug":"random","priority":0.29999999999999993,"points":0.09375},{"title":"Linked lists","benefit":2,"easiness":5,"level":4,"tags":["Performant Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/linked-list","slug":"linked-list","priority":0.2874999999999999,"points":0.03125},{"title":"Avoid dead code","benefit":2,"easiness":3,"level":4,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/avoid-dead-code","slug":"avoid-dead-code","priority":0.26249999999999996,"points":0.09375},{"title":"friend","benefit":1,"easiness":5,"level":4,"tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/friend","slug":"friend","priority":0.24999999999999994,"points":0.03125},{"title":"Pointers vs References","benefit":2,"easiness":2,"level":4,"tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/pointers-vs-references","slug":"pointers-vs-references","priority":0.24999999999999994,"points":0.125},{"title":"Avoid nested namespaces","benefit":1,"easiness":5,"level":5,"tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/avoid-nested-namespaces","slug":"avoid-nested-namespaces","priority":0.04999999999999999,"points":0.16666666666666666},{"title":"#if defined()","benefit":1,"easiness":5,"level":5,"tags":["Beautiful Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/if-defined","slug":"if-defined","priority":0.04999999999999999,"points":0.16666666666666666},{"title":"Trailing return type","benefit":1,"easiness":5,"level":5,"tags":["Beautiful Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/trailing-return-type","slug":"trailing-return-type","priority":0.04999999999999999,"points":0.16666666666666666}]')}}]);