"use strict";(self.webpackChunklearn_cpp_and_dev_practices=self.webpackChunklearn_cpp_and_dev_practices||[]).push([[9978],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),u=o,h=m["".concat(l,".").concat(u)]||m[u]||d[u]||i;return n?a.createElement(h,r(r({ref:t},c),{},{components:n})):a.createElement(h,r({ref:t},c))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2581:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var a=n(2122),o=n(9756),i=(n(7294),n(3905)),r=["components"],s={title:"Move semantics",benefit:3,easiness:3,order:3,tags:["C++"]},l=void 0,p={unversionedId:"lessons/move-semantics",id:"lessons/move-semantics",isDocsHomePage:!1,title:"Move semantics",description:"Brief",source:"@site/docs/lessons/move-semantics.md",sourceDirName:"lessons",slug:"/lessons/move-semantics",permalink:"/Learn--Cpp-And-Dev-Practices/docs/lessons/move-semantics",tags:[{label:"C++",permalink:"/Learn--Cpp-And-Dev-Practices/docs/tags/c"}],version:"current",frontMatter:{title:"Move semantics",benefit:3,easiness:3,order:3,tags:["C++"]},sidebar:"lessons",previous:{title:"Measuring performance",permalink:"/Learn--Cpp-And-Dev-Practices/docs/lessons/measuring-performance"},next:{title:"Precompiled Header",permalink:"/Learn--Cpp-And-Dev-Practices/docs/lessons/precompiled-header"}},c=[{value:"Brief",id:"brief",children:[]},{value:"Implementing move for your own classes",id:"implementing-move-for-your-own-classes",children:[]},{value:"Asking for a move with std::move",id:"asking-for-a-move-with-stdmove",children:[]},{value:"Return value optimization (RVO)",id:"return-value-optimization-rvo",children:[]},{value:"Going further",id:"going-further",children:[]}],d={toc:c};function m(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"brief"},"Brief"),(0,i.kt)("p",null,"You all know what copying an object means. But did you know that we can do better in some circumstances?"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"move")," is an optimization of ",(0,i.kt)("inlineCode",{parentName:"p"},"copy"),". For example consider:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"std::vector<int> create_n_integers(int n) {\n    std::vector v;\n    for (int i = 0; i < n; ++i) {\n        v.push_back(n);\n    }\n    return v;\n}\n\nstd::vector<int> my_vector = create_n_integers(10000000);\n")),(0,i.kt)("p",null,"It might look like we are doing a copy: a vector is created inside ",(0,i.kt)("inlineCode",{parentName:"p"},"create_n_integers")," and then when we do ",(0,i.kt)("inlineCode",{parentName:"p"},"my_vector = create_n_integers(10000000)")," we copy the vector from ",(0,i.kt)("inlineCode",{parentName:"p"},"create_n_integers")," into ",(0,i.kt)("inlineCode",{parentName:"p"},"my_vector"),". And you know that a vector can be big and therefore its copy can be expensive! All of that is true, but the above code is still perfectly fine. This is because the compiler knows that there is no need to do a copy and that it can do a move instead: same effect, but faster."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"So, what is a move?"),' The idea is that when an object is about to be destroyed, there is no need to keep that object intact ; our "copy" operation is therefore allowed to modify it. That "destructive copy" is called a ',(0,i.kt)("em",{parentName:"p"},"move"),"."),(0,i.kt)("p",null,'Why would modifying the "copied" object be useful? Let\'s take the example of a ',(0,i.kt)("inlineCode",{parentName:"p"},"std::vector<int> v1"),". A vector is implemented as a pointer to an array of elements on the heap. If we ask for a ",(0,i.kt)("em",{parentName:"p"},"copy")," of the vector (",(0,i.kt)("inlineCode",{parentName:"p"},"std::vector<int> v2 = v1;"),") then it has to copy all the elements of the array into a new array, because we want ",(0,i.kt)("inlineCode",{parentName:"p"},"v1")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"v2")," to be independent objects. If we were to only copy the pointer, then ",(0,i.kt)("inlineCode",{parentName:"p"},"v1")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"v2")," would point to the same array and modifying ",(0,i.kt)("inlineCode",{parentName:"p"},"v1")," would also affect ",(0,i.kt)("inlineCode",{parentName:"p"},"v2"),", which would be very confusing and impractical.\nTherefore making a copy of a big vector is slow because each of the (possibly many) elements of the vector has to be copied. ",(0,i.kt)("strong",{parentName:"p"},"But")," if we know that ",(0,i.kt)("inlineCode",{parentName:"p"},"v1")," is no longer used, then we don't care if it points to the same array as ",(0,i.kt)("inlineCode",{parentName:"p"},"v2"),"! There is no way of touching ",(0,i.kt)("inlineCode",{parentName:"p"},"v1")," and accidentaly modifying ",(0,i.kt)("inlineCode",{parentName:"p"},"v2"),"! In that case we can simply copy the pointer and save a lot of time."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This is the power of ",(0,i.kt)("em",{parentName:"p"},"move"),": the compiler optimizes your ",(0,i.kt)("em",{parentName:"p"},"copy")," when it knows that you won't see the difference between a copy and a move."))),(0,i.kt)("p",null,"So, do you need to think about ",(0,i.kt)("em",{parentName:"p"},"move")," all the time? Luckily, no! It will happen automatically in places where it can. Just remember that having a function that returns a vector by value is not a bad thing because the copy will be optimized into a move, which is cheap."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Another explanation")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("a",{parentName:"p",href:"https://youtu.be/ehMg6zvXuMY"},"The Cherno, ",(0,i.kt)("em",{parentName:"a"},"Move Semantics in C++"))," (13min)"))),(0,i.kt)("h2",{id:"implementing-move-for-your-own-classes"},"Implementing move for your own classes"),(0,i.kt)("p",null,"For most of your classes a move constructor will be defined automatically (just like the copy constructor) and you have nothing to do.\nThe only time where you need to implement ",(0,i.kt)("em",{parentName:"p"},"move")," yourself is if your class has an explicitly defined destructor or copy constructor (see ",(0,i.kt)("a",{parentName:"p",href:"./rule-of-5"},"The Rule of 5"),"). This should be rare because if all the members of your class already have move and destruction defined, then your class will get a default move and destructor that will do the right thing and everything will be fine."),(0,i.kt)("p",null,"The only case where you would need to define destruction and move is when you manage a resource like a pointer, an object from a C api that needs to be freed, ",(0,i.kt)("em",{parentName:"p"},"etc.")," Note that in the case of a pointer the problem is already solved by ",(0,i.kt)("inlineCode",{parentName:"p"},"std::unique_ptr")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"std::shared_ptr"),". Please don't allocate your pointers with raw ",(0,i.kt)("inlineCode",{parentName:"p"},"new")," and don't add destructors to your classes just to manage the pointers that you allocated. Use ",(0,i.kt)("inlineCode",{parentName:"p"},"std::unique_ptr")," instead and you won't even need to think about destructors and move constructors.\nIf you ever need to create a wrapper similar to a ",(0,i.kt)("inlineCode",{parentName:"p"},"std::unique_ptr")," for some resource (like an OpenGL id), here is how to do it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"class UniqueBuffer {\npublic:\n    UniqueBuffer()\n    {\n        glGenBuffers(1, &_id); // Do whatever you need to create the resource\n    }\n    ~UniqueBuffer()\n    {\n        glDeleteBuffers(1, &_id); // Do whatever you need to delete the resource\n    }\n    UniqueBuffer(const UniqueBuffer&) = delete;            // We disable copying\n    UniqueBuffer& operator=(const UniqueBuffer&) = delete; // We disable copying\n    UniqueBuffer(UniqueBuffer&& rhs) noexcept // Move constructor\n        : _id{rhs._id}\n    {\n        rhs._id = 0; // Make sure that rhs won't delete the _id we just copied\n    }\n    UniqueBuffer& operator=(UniqueBuffer&& rhs) noexcept // Move assignment operator\n    {\n        if (this != &rhs) {           // Make sure that we don't do silly things if we try to move an object to itself\n            glDeleteBuffers(1, &_id); // Delete the previous object\n            _id     = rhs._id;        // Get the new object\n            rhs._id = 0;              // Make sure that rhs won't delete the _id we just copied\n        }\n        return *this; // move assignment must return a reference to this, so we do it\n    }\n\n    GLuint operator*() const { return _id; } // The getter for the wrapped `_id`. You can also have it as a function called id() but I like to use the dereference operator for that purpose (*my_wrapper).\n\nprivate:\n    GLuint _id;\n};\n")),(0,i.kt)("p",null,"Many things to note:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"We disable copying because we can't simply copy the ",(0,i.kt)("inlineCode",{parentName:"li"},"_id")," (the copy would refer to the same object as the original, which would be problematic just like in our vector example), and we can't create a new object with ",(0,i.kt)("inlineCode",{parentName:"li"},"glGenBuffers")," because we have no idea what was stored in that buffer by users (if we were to do a naive copy constructor, then when users ask for a copy they would get a new empty buffer instead of a copy of all the vertex data or whatever that was added to the buffer). Disabling copy also prevents accidental copies of objects that are not supposed to be copied (e.g. because they are big and the copy would be expensive)."),(0,i.kt)("li",{parentName:"ul"},"We do ",(0,i.kt)("inlineCode",{parentName:"li"},"rhs._id = 0;")," when we move. This is because if we don't, then when ",(0,i.kt)("inlineCode",{parentName:"li"},"rhs")," gets destroyed it will destroy its ",(0,i.kt)("inlineCode",{parentName:"li"},"_id"),", which is the same that our new object is using, which would make it invalid!"),(0,i.kt)("li",{parentName:"ul"},"We do ",(0,i.kt)("inlineCode",{parentName:"li"},"if (this != &rhs)"),". This is because someone could call ",(0,i.kt)("inlineCode",{parentName:"li"},"v = std::move(v);")," (in generic code it can happen and it is not that obvious and sometimes you need to do it). In such cases without the check we would do ",(0,i.kt)("inlineCode",{parentName:"li"},"rhs._id = 0;")," but since ",(0,i.kt)("inlineCode",{parentName:"li"},"rhs")," is ourself we would just loose our ",(0,i.kt)("inlineCode",{parentName:"li"},"_id"),"!"),(0,i.kt)("li",{parentName:"ul"},"The signature for move operations contains ",(0,i.kt)("inlineCode",{parentName:"li"},"UniqueBuffer&&"),". This ",(0,i.kt)("inlineCode",{parentName:"li"},"&&")," symbol is called an r-value reference ; it is kind of like the usual reference ",(0,i.kt)("inlineCode",{parentName:"li"},"&")," (called an l-value reference) but it indicates that you are allowed to modify the object and steal its resources. Basically it means that it is okay to move from the object. "),(0,i.kt)("li",{parentName:"ul"},"The move constructor and move assignment are marked ",(0,i.kt)("inlineCode",{parentName:"li"},"noexcept")," which is ",(0,i.kt)("strong",{parentName:"li"},"extremely important"),". If you don't then STL containers like vector will not use your move and will do a copy instead (because it would be problematic if an exception was thrown while a vector is resizing and moving objects to the new location). This ",(0,i.kt)("inlineCode",{parentName:"li"},"noexcept")," costs you nothing and allows great performance improvements when you store your objects in a vector, so please don't forget it!")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Make your wrappers as small as possible. Because if you need to define a move constructor in a big class then you need to tell it to move each member variable, which is tedious and error prone. Plus you will probably need that resource in several classes and you don't want to have to repeat the destruction code in each of them."),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("em",{parentName:"p"},"You can find examples of such wrappers in ",(0,i.kt)("a",{parentName:"em",href:"https://github.com/CoolLibs/glpp/blob/main/src/glpp/internal/UniqueHandle.h"},"GL++")),"."))),(0,i.kt)("h2",{id:"asking-for-a-move-with-stdmove"},"Asking for a move with std::move"),(0,i.kt)("p",null,"Move happens automatically:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"When returning from a function"),(0,i.kt)("li",{parentName:"ul"},"When passing a temporary value to a function (a.k.a. something that was not put in a variable). In ",(0,i.kt)("inlineCode",{parentName:"li"},"f(MyClass{1, 3});"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"MyClass{1, 3}")," is not given any name: it is a temporary and will be moved into ",(0,i.kt)("inlineCode",{parentName:"li"},"f")," instead of copied.")),(0,i.kt)("p",null,"But if you have"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"std::vector<MyClass> v;\n\nMyClass my_class{1, 3};\n// Maybe do something with my_class\n// . . .\nv.push_back(my_class);\n")),(0,i.kt)("p",null,"when passing ",(0,i.kt)("inlineCode",{parentName:"p"},"my_class")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"push_back")," it will be copied and not moved. But let's say that we don't need ",(0,i.kt)("inlineCode",{parentName:"p"},"my_class")," after the call to ",(0,i.kt)("inlineCode",{parentName:"p"},"push_back"),": then it would be nice to move ",(0,i.kt)("inlineCode",{parentName:"p"},"my_class")," into ",(0,i.kt)("inlineCode",{parentName:"p"},"push_back")," and avoid a copy. We can ask for that by doing ",(0,i.kt)("inlineCode",{parentName:"p"},"v.push_back(std::move(my_class));"),"."),(0,i.kt)("p",null,"This works because ",(0,i.kt)("inlineCode",{parentName:"p"},"push_back")," is overloaded to accept both normal references (",(0,i.kt)("inlineCode",{parentName:"p"},"const MyClass&"),") and r-value references (",(0,i.kt)("inlineCode",{parentName:"p"},"MyClass&&"),")."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"After calling ",(0,i.kt)("inlineCode",{parentName:"p"},"std::move()")," on an object, don't use it again! It has been moved away and might not be valid anymore. To learn more on that, check out ",(0,i.kt)("a",{parentName:"p",href:"https://abseil.io/tips/77"},"Beware: Zombies"),"."))),(0,i.kt)("h2",{id:"return-value-optimization-rvo"},"Return value optimization (RVO)"),(0,i.kt)("p",null,"Sometimes the compiler can do ",(0,i.kt)("em",{parentName:"p"},"even better than move"),". When you are returning an unnamed variable from a function you are guaranteed that there won't even be a move, the variable will be created in place at the call site. This is called RVO and is guaranteed by the standard."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"std::vector<int> create_some_vector(int x) {\n    int a = x + 1;\n    int b = x * 2;\n    return std::vector<int>{{a, b}}; // RVO applies because we did not give a name to the variable std::vector<int>{{a, b}}, we returned it directly\n}\n\nstd::vector<int> v = create_some_vector(2); // No copy nor move. It is the same as doing std::vector<int> v = {2 + 1, 2 * 2};\n")),(0,i.kt)("p",null,"Compilers can do other optimizations, but RVO is (currently) the only one that is guaranteed. In ",(0,i.kt)("a",{parentName:"p",href:"#brief"},"our first example")," RVO doesn't apply because we gave a name to the variable that we return (",(0,i.kt)("inlineCode",{parentName:"p"},"v"),"). But chances are your compiler will still optimize the ",(0,i.kt)("em",{parentName:"p"},"move")," away ; this is known as NRVO (Named Return Value Optimization)."),(0,i.kt)("h2",{id:"going-further"},"Going further"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Going further")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("a",{parentName:"p",href:"https://abseil.io/tips/77"},"Abseil's tip")," (5min)"),(0,i.kt)("p",{parentName:"div"},"TODO put a link to Klaus' conference when the CppCon 2021 is available on Youtube."),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("a",{parentName:"p",href:"https://youtu.be/hA1WNtNyNbo"},"Arthur O'Dwyer,",(0,i.kt)("em",{parentName:"a"}," Return Value Optimization: Harder Than It Looks")),", Details about RVO (25min)"))))}m.isMDXComponent=!0}}]);