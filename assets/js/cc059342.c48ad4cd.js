"use strict";(self.webpackChunkteaching_toolbox_website_generator=self.webpackChunkteaching_toolbox_website_generator||[]).push([[6539],{45134:function(e){e.exports=JSON.parse('{"name":"Clean Code","permalink":"/Learn--Clean-Code-With-Cpp/tags/clean-code","docs":[{"id":"lessons/assert","title":"assert","description":"Brief","permalink":"/Learn--Clean-Code-With-Cpp/lessons/assert"},{"id":"lessons/auto","title":"auto","description":"Brief","permalink":"/Learn--Clean-Code-With-Cpp/lessons/auto"},{"id":"lessons/avoid-dead-code","title":"Avoid dead code","description":"Don\'t leave commented out blocks in your code.","permalink":"/Learn--Clean-Code-With-Cpp/lessons/avoid-dead-code"},{"id":"lessons/avoid-nested-namespaces","title":"Avoid nested namespaces","description":"https://youtu.be/xu7q8dGvuwk?t=1198","permalink":"/Learn--Clean-Code-With-Cpp/lessons/avoid-nested-namespaces"},{"id":"lessons/cpp-casts","title":"C++ casts","description":"","permalink":"/Learn--Clean-Code-With-Cpp/lessons/cpp-casts"},{"id":"lessons/composition-over-inheritance","title":"Composition over Inheritance","description":"Inheritance is often overused, even by experienced developers. A sound rule of software engineering is to minimize coupling: if a relationship can be expressed in more than one way, use the weakest relationship that\'s practical.","permalink":"/Learn--Clean-Code-With-Cpp/lessons/composition-over-inheritance"},{"id":"lessons/const","title":"const","description":"Brief","permalink":"/Learn--Clean-Code-With-Cpp/lessons/const"},{"id":"lessons/debug-vs-release","title":"Debug vs Release","description":"","permalink":"/Learn--Clean-Code-With-Cpp/lessons/debug-vs-release"},{"id":"lessons/deleted-functions","title":"Deleted functions","description":"You can delete functions to prevent them from beeing used. This is mostly used to prevent a type from being copied ; for example std::sharedptr.","permalink":"/Learn--Clean-Code-With-Cpp/lessons/deleted-functions"},{"id":"lessons/dependency-injection","title":"Dependency Injection","description":"Brief","permalink":"/Learn--Clean-Code-With-Cpp/lessons/dependency-injection"},{"id":"lessons/design-cohesive-classes","title":"Design cohesive classes","description":"Keep it small","permalink":"/Learn--Clean-Code-With-Cpp/lessons/design-cohesive-classes"},{"id":"lessons/designated_initializers","title":"Designated Initializers","description":"","permalink":"/Learn--Clean-Code-With-Cpp/lessons/designated_initializers"},{"id":"lessons/documentation","title":"Documentation","description":"Brief","permalink":"/Learn--Clean-Code-With-Cpp/lessons/documentation"},{"id":"lessons/dont-overfocus-on-performance","title":"Don\'t overfocus on performance","description":"Because most applications don\'t really need performance, and correctness is their main concern. Often, the compute-heavy parts are handled by libraries and you don\'t need to worry about that. If the code that you write doesn\'t weigh much in the performance scale, don\'t waste time optimizing it, or worse, don\'t optimize it at the expense of readability / maintainability !","permalink":"/Learn--Clean-Code-With-Cpp/lessons/dont-overfocus-on-performance"},{"id":"lessons/dry-dont-repeat-yourself","title":"DRY: Don\'t repeat yourself","description":"Brief","permalink":"/Learn--Clean-Code-With-Cpp/lessons/dry-dont-repeat-yourself"},{"id":"lessons/enums","title":"Enums","description":"Brief","permalink":"/Learn--Clean-Code-With-Cpp/lessons/enums"},{"id":"lessons/error-handling","title":"Error Handling","description":"Exceptions","permalink":"/Learn--Clean-Code-With-Cpp/lessons/error-handling"},{"id":"lessons/friend","title":"friend","description":"There are *very few* good reasons to use `friend`.","permalink":"/Learn--Clean-Code-With-Cpp/lessons/friend"},{"id":"lessons/functional-programming","title":"Functional programming","description":"A monad is just a monoid in the category of endofunctors","permalink":"/Learn--Clean-Code-With-Cpp/lessons/functional-programming"},{"id":"lessons/immediately-invoked-function","title":"Immediately Invoked Function","description":"","permalink":"/Learn--Clean-Code-With-Cpp/lessons/immediately-invoked-function"},{"id":"lessons/lambda","title":"Lambda functions","description":"","permalink":"/Learn--Clean-Code-With-Cpp/lessons/lambda"},{"id":"lessons/minimize-dependencies","title":"Minimize dependencies","description":"Brief","permalink":"/Learn--Clean-Code-With-Cpp/lessons/minimize-dependencies"},{"id":"lessons/naming","title":"Naming","description":"There are only two hard problems in computer science: naming, cache invalidation, and off-by-1 errors.","permalink":"/Learn--Clean-Code-With-Cpp/lessons/naming"},{"id":"lessons/pointers-vs-references","title":"Pointers vs References","description":"Pointers can be null","permalink":"/Learn--Clean-Code-With-Cpp/lessons/pointers-vs-references"},{"id":"lessons/polymorphism","title":"Polymorphism","description":"Static Polymorphism","permalink":"/Learn--Clean-Code-With-Cpp/lessons/polymorphism"},{"id":"lessons/prefer-free-functions","title":"Prefer free functions","description":"C.4: Make a function a member only if it needs direct access to the representation of a class.","permalink":"/Learn--Clean-Code-With-Cpp/lessons/prefer-free-functions"},{"id":"lessons/range-based-for-loop","title":"Range-based for loop","description":"Brief","permalink":"/Learn--Clean-Code-With-Cpp/lessons/range-based-for-loop"},{"id":"lessons/scope-guard","title":"Scope guard","description":"Conference","permalink":"/Learn--Clean-Code-With-Cpp/lessons/scope-guard"},{"id":"lessons/single-source-of-truth","title":"Single Source of Truth","description":"The Single Source of Truth principle is very simple : only store an information once !","permalink":"/Learn--Clean-Code-With-Cpp/lessons/single-source-of-truth"},{"id":"lessons/smart-pointers","title":"Smart Pointers","description":"No naked new : this doesn\'t mean no dynamic allocations, it just means they should always be done through a smart pointer or a container.","permalink":"/Learn--Clean-Code-With-Cpp/lessons/smart-pointers"},{"id":"lessons/state-and-strategy","title":"State and Strategy","description":"Difference : State handles the changes itself, it is an implementation of a state machine. For Strategy, the decision of changing the strategy comes from the outside, it doesn\'t depend on what the current strategy is.","permalink":"/Learn--Clean-Code-With-Cpp/lessons/state-and-strategy"},{"id":"lessons/std-function","title":"std::function","description":"Brief","permalink":"/Learn--Clean-Code-With-Cpp/lessons/std-function"},{"id":"lessons/optional","title":"std::optional","description":"Brief","permalink":"/Learn--Clean-Code-With-Cpp/lessons/optional"},{"id":"lessons/variant","title":"std::variant","description":"Brief","permalink":"/Learn--Clean-Code-With-Cpp/lessons/variant"},{"id":"lessons/vector","title":"std::vector","description":"Brief","permalink":"/Learn--Clean-Code-With-Cpp/lessons/vector"},{"id":"lessons/stl-algorithms","title":"STL algorithms","description":"Here are some of the most important ones:","permalink":"/Learn--Clean-Code-With-Cpp/lessons/stl-algorithms"},{"id":"lessons/strong-types","title":"Strong Types","description":"I.4: Make interfaces precisely and strongly typed.","permalink":"/Learn--Clean-Code-With-Cpp/lessons/strong-types"},{"id":"lessons/testing","title":"Testing","description":"https://youtu.be/ta3S8CRN2TM?t=1306","permalink":"/Learn--Clean-Code-With-Cpp/lessons/testing"},{"id":"lessons/command","title":"The Command pattern","description":"Brief","permalink":"/Learn--Clean-Code-With-Cpp/lessons/command"},{"id":"lessons/rule-of-5","title":"The Rule of 5","description":"C.21: If you define or =delete any copy, move, or destructor function, define or =delete them all.","permalink":"/Learn--Clean-Code-With-Cpp/lessons/rule-of-5"},{"id":"lessons/type-erasure","title":"Type erasure","description":"https://youtu.be/jKt6A3wnDyI","permalink":"/Learn--Clean-Code-With-Cpp/lessons/type-erasure"},{"id":"lessons/use-libraries","title":"Use libraries","description":"Brief","permalink":"/Learn--Clean-Code-With-Cpp/lessons/use-libraries"},{"id":"lessons/use-structs-to-group-data","title":"Use structs to group data","description":"C.2: Use class if the class has an invariant; use struct if the data members can vary independently.","permalink":"/Learn--Clean-Code-With-Cpp/lessons/use-structs-to-group-data"},{"id":"lessons/write-libraries","title":"Write libraries","description":"Even if it\'s only for your personal use, it will help you a lot with code reuse across projects and also inside one project. And also it will force you to make your code a little more generic, which most of the time will improve it at the same time. Moreover, it will make sure that the code is decoupled from the rest of your application.","permalink":"/Learn--Clean-Code-With-Cpp/lessons/write-libraries"},{"id":"lessons/write-small-functions","title":"Write small functions","description":"Write the functions you wish to see in the world \u2013 Tony Van Eerd","permalink":"/Learn--Clean-Code-With-Cpp/lessons/write-small-functions"}],"allTagsPath":"/Learn--Clean-Code-With-Cpp/tags"}')}}]);