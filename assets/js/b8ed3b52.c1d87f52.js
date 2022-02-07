"use strict";(self.webpackChunkteaching_toolbox_website_generator=self.webpackChunkteaching_toolbox_website_generator||[]).push([[8265],{4137:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return c}});var i=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,s=function(e,t){if(null==e)return{};var n,i,s={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var r=i.createContext({}),p=function(e){var t=i.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(r.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},C=i.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,r=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),C=p(n),c=s,g=C["".concat(r,".").concat(c)]||C[c]||u[c]||o;return n?i.createElement(g,l(l({ref:t},d),{},{components:n})):i.createElement(g,l({ref:t},d))}));function c(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,l=new Array(o);l[0]=C;var a={};for(var r in t)hasOwnProperty.call(t,r)&&(a[r]=t[r]);a.originalType=e,a.mdxType="string"==typeof e?e:s,l[1]=a;for(var p=2;p<o;p++)l[p]=n[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}C.displayName="MDXCreateElement"},8442:function(e,t,n){n.d(t,{Z:function(){return o}});var i=n(7294),s=n(4820);function o(e){var t=e.slug,n=e.text,o=e.anchor,l=s.find((function(e){return e.slug===t}));if(void 0===l)throw console.error('Broken link to inexistant lesson "'+t+'"'),"";return i.createElement("a",{href:l.link+(o||"")},n||l.title)}},8720:function(e,t,n){n.d(t,{Z:function(){return s}});var i=n(7294);function s(e){var t=e.id,n="https://marketplace.visualstudio.com/items?itemName="+t;return i.createElement("a",{href:n,target:"_blank"},t)}},3533:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return d},metadata:function(){return u},toc:function(){return C},default:function(){return g}});var i=n(7462),s=n(3366),o=(n(7294),n(4137)),l=n(8720),a=n(8442),r=["components"],p={title:"Use an IDE",benefit:5,easiness:5,level:1,tags:["Tools"]},d=void 0,u={unversionedId:"lessons/ide",id:"lessons/ide",title:"Use an IDE",description:"Brief",source:"@site/../../content/lessons/ide.md",sourceDirName:"lessons",slug:"/lessons/ide",permalink:"/Learn--Clean-Code-With-Cpp/lessons/ide",tags:[{label:"Tools",permalink:"/Learn--Clean-Code-With-Cpp/tags/tools"}],version:"current",frontMatter:{title:"Use an IDE",benefit:5,easiness:5,level:1,tags:["Tools"]},sidebar:"lessons",previous:{title:"Introduction",permalink:"/Learn--Clean-Code-With-Cpp/lessons"},next:{title:"Use Git",permalink:"/Learn--Clean-Code-With-Cpp/lessons/git"}},C=[{value:"Brief",id:"brief",children:[],level:2},{value:"Extensions",id:"extensions",children:[],level:2},{value:"Quick actions",id:"quick-actions",children:[{value:"Rename",id:"rename",children:[],level:3},{value:"Go to definition",id:"go-to-definition",children:[],level:3},{value:"Go to symbol",id:"go-to-symbol",children:[],level:3},{value:"Go to file",id:"go-to-file",children:[],level:3},{value:"Switch between .h and .cpp",id:"switch-between-h-and-cpp",children:[],level:3},{value:"Find all references",id:"find-all-references",children:[],level:3},{value:"Search for a word in the current file",id:"search-for-a-word-in-the-current-file",children:[],level:3},{value:"Search for a word in the whole project",id:"search-for-a-word-in-the-whole-project",children:[],level:3},{value:"Launching the project",id:"launching-the-project",children:[],level:3}],level:2}],c={toc:C};function g(e){var t=e.components,p=(0,s.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},c,p,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"brief"},"Brief"),(0,o.kt)("p",null,"An IDE (Integrated Development Environment) is like a text editor, but way more powerful! It has a lot of additional features that will help you write, run and debug your code!"),(0,o.kt)("p",null,"I personally use and recommend ",(0,o.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/"},(0,o.kt)("em",{parentName:"a"},"Visual Studio Code"))," (",(0,o.kt)("em",{parentName:"p"},"VS Code")," for short)."),(0,o.kt)("h2",{id:"extensions"},"Extensions"),(0,o.kt)("p",null,"There are many extensions that can help you! Check out the recommended extensions for your language or discover what other people use."),(0,o.kt)("p",null,"Here are some great extensions for VS Code that I recommend:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)(l.Z,{id:"ms-vscode.cpptools-extension-pack",mdxType:"VSCodeExtension"}),": The Basic C++ extensions"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)(l.Z,{id:"coenraads.bracket-pair-colorizer-2",mdxType:"VSCodeExtension"}),": This colors matching pairs of brackets; it makes the code more readable"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)(l.Z,{id:"ms-vsliveshare.vsliveshare",mdxType:"VSCodeExtension"}),": This allows you to work remotely with your teammates in one single editor. It is amazing to work together!")),(0,o.kt)("h2",{id:"quick-actions"},"Quick actions"),(0,o.kt)("p",null,"Below are a few of the most important things that an IDE will help you with; I will demonstrate them using ",(0,o.kt)("em",{parentName:"p"},"VS Code")," but rest assured that any other IDE will have the same functionalities. Please note that most of these actions are only available if ",(0,o.kt)(l.Z,{id:"ms-vscode.cpptools-extension-pack",mdxType:"VSCodeExtension"})," is installed in your VS Code."),(0,o.kt)("h3",{id:"rename"},"Rename"),(0,o.kt)("p",null,"Right-click on any name and choose ",(0,o.kt)("em",{parentName:"p"},"Rename Symbol")," (or put your text cursor on a name and use the shortcut ",(0,o.kt)("inlineCode",{parentName:"p"},"F2"),").",(0,o.kt)("br",null),'\nIt is better than doing a "Find and Replace" because "Rename Symbol" is content-aware; e.g. if you rename a class called "Point" to something else it will not affect another class called "Point2D".'),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(6649).Z,width:"775",height:"432"})),(0,o.kt)("h3",{id:"go-to-definition"},"Go to definition"),(0,o.kt)("p",null,"This will take you directly to the definition of the variable / function / class. This is the functionality I use the most to move around my code.",(0,o.kt)("br",null),"\nAnd if you want to stay focused on the portion of code you are currently editing you can also ",(0,o.kt)("em",{parentName:"p"},"Peek")," at the definition and it will open a small window inside your current file."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(8766).Z,width:"419",height:"370"})),(0,o.kt)("h3",{id:"go-to-symbol"},"Go to symbol"),(0,o.kt)("p",null,"This allows you to quickly jump to a method in a file; the shortcut is ",(0,o.kt)("inlineCode",{parentName:"p"},"CTRL + SHIFT + O")," and then you can type in what you are looking for. It is also super useful to outline the structure of a file."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(1547).Z,width:"792",height:"467"})),(0,o.kt)("h3",{id:"go-to-file"},"Go to file"),(0,o.kt)("p",null,"If you know which file you want to open it is blazing fast to press ",(0,o.kt)("inlineCode",{parentName:"p"},"CTRL + P")," and type what you need."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(5150).Z,width:"804",height:"453"})),(0,o.kt)("h3",{id:"switch-between-h-and-cpp"},"Switch between .h and .cpp"),(0,o.kt)("p",null,"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"ALT + O")," to quickly switch between the header and the implementation file. Very useful when you are writing code for a class."),(0,o.kt)("h3",{id:"find-all-references"},"Find all references"),(0,o.kt)("p",null,"This allows you to find all the places where a symbol is used. Simply right-click on a variable or method and select ",(0,o.kt)("em",{parentName:"p"},"Find All References")," to get this panel to open. Just like the ",(0,o.kt)("em",{parentName:"p"},"Rename Symbol")," action it is context-aware and is supposed to only return the correct variable (if another one has the same name, it won't show up)."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(1018).Z,width:"450",height:"212"})),(0,o.kt)("h3",{id:"search-for-a-word-in-the-current-file"},"Search for a word in the current file"),(0,o.kt)("p",null,"Useful to find you way around, simply press ",(0,o.kt)("inlineCode",{parentName:"p"},"CTRL + F")," to open this popup and search what you need. The arrow on the left allows you to rename the occurrences you found, which can be useful."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(805).Z,width:"525",height:"100"})),(0,o.kt)("h3",{id:"search-for-a-word-in-the-whole-project"},"Search for a word in the whole project"),(0,o.kt)("p",null,"If you need to find something fast and easy, run ",(0,o.kt)("inlineCode",{parentName:"p"},"CTRL + SHIFT + F"),", enter the object of desire and press enter. The VSCode search bar is awesome and won't let you down, you can even batch-rename things there! As a side note, it is also great to be able to limit the search to a specific folder, the option is available when you press the three dots on the right."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(1983).Z,width:"459",height:"595"})),(0,o.kt)("h3",{id:"launching-the-project"},"Launching the project"),(0,o.kt)("p",null,"Once you have the ",(0,o.kt)(a.Z,{slug:"cmake",text:"CMake",mdxType:"LessonLink"})," setup done (either by using the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/JulesFouchy/Simple-Cpp-Setup"},"template project")," or by doing it yourself) you can build the project by pressing ",(0,o.kt)("inlineCode",{parentName:"p"},"F7")," and run it using ",(0,o.kt)("inlineCode",{parentName:"p"},"F5"),'. When you run the project it will use the current configuration; these are made to be customizable so you can select the one you want using the dropdown in the "Run and Debug" panel on the left, and edit them by pressing the cogwheel icon.'),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(9602).Z,width:"506",height:"463"})))}g.isMDXComponent=!0},1018:function(e,t,n){t.Z=n.p+"assets/images/find-all-references-a7eae30b72d72106ad717737d87f0431.png"},8766:function(e,t,n){t.Z=n.p+"assets/images/go-to-definition-0d3324462fe75364717ace9f17f0163f.png"},5150:function(e,t,n){t.Z=n.p+"assets/images/go-to-file-026f833c47dc251aaa067f5fa8588bec.png"},1547:function(e,t,n){t.Z=n.p+"assets/images/go-to-symbol-9e4c642d9e91531d67224095a8dc6594.png"},6649:function(e,t,n){t.Z=n.p+"assets/images/rename-160448a5c11b491dfb4981fc2f5fe48e.png"},9602:function(e,t,n){t.Z=n.p+"assets/images/run-project-2674db3f4b7153c58c1a635a80fb337c.png"},805:function(e,t){t.Z="data:image/png;base64,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"},1983:function(e,t,n){t.Z=n.p+"assets/images/search-whole-project-7a78bfffcb4c3a500b5757bd1e68f2ae.png"},4820:function(e){e.exports=JSON.parse('[{"title":"Use an IDE","benefit":5,"easiness":5,"level":1,"tags":["Tools"],"link":"/Learn--Clean-Code-With-Cpp/lessons/ide","slug":"ide","priority":1,"points":0.5263157894736842},{"title":"Use Git","benefit":5,"easiness":4,"level":1,"bias":1,"tags":["Tools","Git"],"link":"/Learn--Clean-Code-With-Cpp/lessons/git","slug":"git","priority":0.9875,"points":1.0526315789473684},{"title":"Use a debugger","benefit":5,"easiness":4,"level":1,"tags":["Tools"],"link":"/Learn--Clean-Code-With-Cpp/lessons/debugger","slug":"debugger","priority":0.9875,"points":1.0526315789473684},{"title":"Use a formatting tool","benefit":5,"easiness":4,"level":1,"tags":["Tools"],"link":"/Learn--Clean-Code-With-Cpp/lessons/formatting-tool","slug":"formatting-tool","priority":0.9875,"points":1.0526315789473684},{"title":"Use static analysers","benefit":5,"easiness":3,"level":1,"tags":["Tools"],"link":"/Learn--Clean-Code-With-Cpp/lessons/static-analysers","slug":"static-analysers","priority":0.975,"points":1.5789473684210527},{"title":"Naming","benefit":5,"easiness":1,"level":1,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/naming","slug":"naming","priority":0.95,"points":2.6315789473684212},{"title":"Stack vs Heap","benefit":4,"easiness":3,"level":1,"tags":["Performant Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/stack-vs-heap","slug":"stack-vs-heap","priority":0.9375,"points":1.5789473684210527},{"title":"Consistency in style","benefit":2,"easiness":5,"level":1,"tags":["Beautiful Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/consistency-in-style","slug":"consistency-in-style","priority":0.8875000000000001,"points":0.5263157894736842},{"title":"Make it work, then make it good","benefit":5,"easiness":4,"level":2,"bias":1,"tags":["Workflow"],"link":"/Learn--Clean-Code-With-Cpp/lessons/make-it-work-then-make-it-good","slug":"make-it-work-then-make-it-good","priority":0.7875000000000001,"points":0.35714285714285715},{"title":"Prefer free functions","benefit":5,"easiness":3,"level":2,"bias":5,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/prefer-free-functions","slug":"prefer-free-functions","priority":0.775,"points":0.5357142857142857},{"title":"Design cohesive classes","benefit":5,"easiness":3,"level":2,"bias":4,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/design-cohesive-classes","slug":"design-cohesive-classes","priority":0.775,"points":0.5357142857142857},{"title":"Use structs to group data","benefit":5,"easiness":3,"level":2,"bias":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/use-structs-to-group-data","slug":"use-structs-to-group-data","priority":0.775,"points":0.5357142857142857},{"title":"Write small functions","benefit":5,"easiness":3,"level":2,"bias":2,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/write-small-functions","slug":"write-small-functions","priority":0.775,"points":0.5357142857142857},{"title":"DRY: Don\'t repeat yourself","benefit":5,"easiness":2,"level":2,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/dry-dont-repeat-yourself","slug":"dry-dont-repeat-yourself","priority":0.7625000000000001,"points":0.7142857142857143},{"title":"Enums","benefit":4,"easiness":5,"level":2,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/enums","slug":"enums","priority":0.7625000000000001,"points":0.17857142857142858},{"title":"Split problems in small pieces","benefit":5,"easiness":1,"level":2,"tags":["Workflow"],"link":"/Learn--Clean-Code-With-Cpp/lessons/split-problems-in-small-pieces","slug":"split-problems-in-small-pieces","priority":0.75,"points":0.8928571428571429},{"title":"Composition over Inheritance","benefit":4,"easiness":2,"level":2,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/composition-over-inheritance","slug":"composition-over-inheritance","priority":0.7250000000000001,"points":0.7142857142857143},{"title":"std::vector","benefit":5,"easiness":5,"level":3,"tags":["Clean Code","Performant Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/vector","slug":"vector","priority":0.6,"points":0.03333333333333333},{"title":"Documentation","benefit":5,"easiness":3,"level":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/documentation","slug":"documentation","priority":0.575,"points":0.1},{"title":"Use libraries","benefit":5,"easiness":3,"level":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/use-libraries","slug":"use-libraries","priority":0.575,"points":0.1},{"title":"assert","benefit":4,"easiness":5,"level":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/assert","slug":"assert","priority":0.5625,"points":0.03333333333333333},{"title":"auto","benefit":4,"easiness":5,"level":3,"tags":["Beautiful Code","Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/auto","slug":"auto","priority":0.5625,"points":0.03333333333333333},{"title":"Testing","benefit":5,"easiness":2,"level":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/testing","slug":"testing","priority":0.5625,"points":0.13333333333333333},{"title":"Type design","benefit":5,"easiness":2,"level":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/type-design","slug":"type-design","priority":0.5625,"points":0.13333333333333333},{"title":"Dependencies","benefit":5,"easiness":1,"level":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/dependencies","slug":"dependencies","priority":0.55,"points":0.16666666666666666},{"title":"Lambda functions","benefit":4,"easiness":4,"level":3,"tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/lambda","slug":"lambda","priority":0.55,"points":0.06666666666666667},{"title":"Master your IDE","benefit":4,"easiness":4,"level":3,"tags":["Tools"],"link":"/Learn--Clean-Code-With-Cpp/lessons/master-your-ide","slug":"master-your-ide","priority":0.55,"points":0.06666666666666667},{"title":"std::optional","benefit":4,"easiness":4,"level":3,"tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/optional","slug":"optional","priority":0.55,"points":0.06666666666666667},{"title":"Single Source of Truth","benefit":4,"easiness":4,"level":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/single-source-of-truth","slug":"single-source-of-truth","priority":0.55,"points":0.06666666666666667},{"title":"Strong Typing","benefit":4,"easiness":4,"level":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/strong-typing","slug":"strong-typing","priority":0.55,"points":0.06666666666666667},{"title":"Code reviews","benefit":4,"easiness":3,"level":3,"tags":["Workflow"],"link":"/Learn--Clean-Code-With-Cpp/lessons/code-reviews","slug":"code-reviews","priority":0.5375,"points":0.1},{"title":"const","benefit":4,"easiness":3,"level":3,"tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/const","slug":"const","priority":0.5375,"points":0.1},{"title":"Don\'t overfocus on performance","benefit":4,"easiness":3,"level":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/dont-overfocus-on-performance","slug":"dont-overfocus-on-performance","priority":0.5375,"points":0.1},{"title":"Git submodules","benefit":4,"easiness":3,"level":3,"tags":["Tools","Git"],"link":"/Learn--Clean-Code-With-Cpp/lessons/git-submodules","slug":"git-submodules","priority":0.5375,"points":0.1},{"title":"STL algorithms","benefit":4,"easiness":3,"level":3,"tags":["Clean Code","Performant Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/stl-algorithms","slug":"stl-algorithms","priority":0.5375,"points":0.1},{"title":"Debug vs Release","benefit":3,"easiness":5,"level":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/debug-vs-release","slug":"debug-vs-release","priority":0.525,"points":0.03333333333333333},{"title":"Immediately Invoked Function","benefit":3,"easiness":5,"level":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/immediately-invoked-function","slug":"immediately-invoked-function","priority":0.525,"points":0.03333333333333333},{"title":"Markdown","benefit":3,"easiness":5,"level":3,"tags":["Tools"],"link":"/Learn--Clean-Code-With-Cpp/lessons/markdown","slug":"markdown","priority":0.525,"points":0.03333333333333333},{"title":"Range-based for loop","benefit":3,"easiness":5,"level":3,"tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/range-based-for-loop","slug":"range-based-for-loop","priority":0.525,"points":0.03333333333333333},{"title":"Smart Pointers","benefit":3,"easiness":5,"level":3,"tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/smart-pointers","slug":"smart-pointers","priority":0.525,"points":0.03333333333333333},{"title":"std::function","benefit":3,"easiness":5,"level":3,"tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/std-function","slug":"std-function","priority":0.525,"points":0.03333333333333333},{"title":"Error Handling","benefit":3,"easiness":4,"level":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/error-handling","slug":"error-handling","priority":0.5125,"points":0.06666666666666667},{"title":"Git Pull Requests","benefit":3,"easiness":4,"level":3,"tags":["Tools","Git"],"link":"/Learn--Clean-Code-With-Cpp/lessons/git-pull-request","slug":"git-pull-request","priority":0.5125,"points":0.06666666666666667},{"title":"Advanced Git features","benefit":3,"easiness":3,"level":3,"tags":["Tools","Git"],"link":"/Learn--Clean-Code-With-Cpp/lessons/advanced-git-features","slug":"advanced-git-features","priority":0.5,"points":0.1},{"title":"CMake","benefit":3,"easiness":3,"level":3,"tags":["C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/cmake","slug":"cmake","priority":0.5,"points":0.1},{"title":"Functional programming","benefit":3,"easiness":3,"level":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/functional-programming","slug":"functional-programming","priority":0.5,"points":0.1},{"title":"Move semantics","benefit":3,"easiness":3,"level":3,"tags":["Performant Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/move-semantics","slug":"move-semantics","priority":0.5,"points":0.1},{"title":"The Rule of 5","benefit":3,"easiness":3,"level":3,"tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/rule-of-5","slug":"rule-of-5","priority":0.5,"points":0.1},{"title":"State and Strategy","benefit":3,"easiness":3,"level":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/state-and-strategy","slug":"state-and-strategy","priority":0.5,"points":0.1},{"title":"std::variant","benefit":3,"easiness":3,"level":3,"tags":["Clean Code","Performant Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/variant","slug":"variant","priority":0.5,"points":0.1},{"title":"Cache and Branches","benefit":3,"easiness":2,"level":3,"tags":["Performant Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/cache-and-branches","slug":"cache-and-branches","priority":0.4875,"points":0.13333333333333333},{"title":"Multithreading","benefit":3,"easiness":2,"level":3,"tags":["Performant Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/multithreading","slug":"multithreading","priority":0.4875,"points":0.13333333333333333},{"title":"Polymorphism","benefit":3,"easiness":2,"level":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/polymorphism","slug":"polymorphism","priority":0.4875,"points":0.13333333333333333},{"title":"Watch conferences","benefit":5,"easiness":3,"level":4,"tags":["Workflow"],"link":"/Learn--Clean-Code-With-Cpp/lessons/watch-conferences","slug":"watch-conferences","priority":0.3749999999999999,"points":0.09375},{"title":"Write libraries","benefit":5,"easiness":3,"level":4,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/write-libraries","slug":"write-libraries","priority":0.3749999999999999,"points":0.09375},{"title":"Dear ImGui","benefit":5,"easiness":2,"level":4,"tags":["Libraries & Frameworks"],"link":"/Learn--Clean-Code-With-Cpp/lessons/dear-imgui","slug":"dear-imgui","priority":0.36249999999999993,"points":0.125},{"title":"Designated Initializers","benefit":4,"easiness":5,"level":4,"tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/designated_initializers","slug":"designated_initializers","priority":0.36249999999999993,"points":0.03125},{"title":"std::string and std::string_view","benefit":4,"easiness":4,"level":4,"tags":["C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/string-and-string-view","slug":"string-and-string-view","priority":0.3499999999999999,"points":0.0625},{"title":"Static site generators","benefit":4,"easiness":3,"level":4,"tags":["Tools"],"link":"/Learn--Clean-Code-With-Cpp/lessons/static-site-generators","slug":"static-site-generators","priority":0.3374999999999999,"points":0.09375},{"title":"Deleted functions","benefit":3,"easiness":5,"level":4,"tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/deleted-functions","slug":"deleted-functions","priority":0.32499999999999996,"points":0.03125},{"title":"Type erasure","benefit":4,"easiness":2,"level":4,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/type-erasure","slug":"type-erasure","priority":0.32499999999999996,"points":0.125},{"title":"wasm and electron","benefit":4,"easiness":2,"level":4,"tags":["Libraries & Frameworks"],"link":"/Learn--Clean-Code-With-Cpp/lessons/wasm-and-electron","slug":"wasm-and-electron","priority":0.32499999999999996,"points":0.125},{"title":"Scope guard","benefit":3,"easiness":4,"level":4,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/scope-guard","slug":"scope-guard","priority":0.31249999999999994,"points":0.0625},{"title":"C++ casts","benefit":3,"easiness":3,"level":4,"tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/cpp-casts","slug":"cpp-casts","priority":0.29999999999999993,"points":0.09375},{"title":"Measuring performance","benefit":3,"easiness":3,"level":4,"tags":["Performant Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/measuring-performance","slug":"measuring-performance","priority":0.29999999999999993,"points":0.09375},{"title":"Precompiled Header","benefit":3,"easiness":3,"level":4,"tags":["C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/precompiled-header","slug":"precompiled-header","priority":0.29999999999999993,"points":0.09375},{"title":"<random>","benefit":3,"easiness":3,"level":4,"tags":["C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/random","slug":"random","priority":0.29999999999999993,"points":0.09375},{"title":"Linked lists","benefit":2,"easiness":5,"level":4,"tags":["Performant Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/linked-list","slug":"linked-list","priority":0.2874999999999999,"points":0.03125},{"title":"Avoid dead code","benefit":2,"easiness":3,"level":4,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/avoid-dead-code","slug":"avoid-dead-code","priority":0.26249999999999996,"points":0.09375},{"title":"friend","benefit":1,"easiness":5,"level":4,"tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/friend","slug":"friend","priority":0.24999999999999994,"points":0.03125},{"title":"Pointers vs References","benefit":2,"easiness":2,"level":4,"tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/pointers-vs-references","slug":"pointers-vs-references","priority":0.24999999999999994,"points":0.125},{"title":"Avoid nested namespaces","benefit":1,"easiness":5,"level":5,"tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/avoid-nested-namespaces","slug":"avoid-nested-namespaces","priority":0.04999999999999999,"points":0.16666666666666666},{"title":"#if defined()","benefit":1,"easiness":5,"level":5,"tags":["Beautiful Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/if-defined","slug":"if-defined","priority":0.04999999999999999,"points":0.16666666666666666},{"title":"Trailing return type","benefit":1,"easiness":5,"level":5,"tags":["Beautiful Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/trailing-return-type","slug":"trailing-return-type","priority":0.04999999999999999,"points":0.16666666666666666}]')}}]);