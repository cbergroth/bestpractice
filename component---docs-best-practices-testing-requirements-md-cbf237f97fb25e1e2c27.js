(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{LY3E:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return c}));a("5hJT"),a("W1QL"),a("K/PF"),a("t91x"),a("75LO"),a("PJhk");var n=a("SAVP"),r=a("TjRS");a("aD51");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var s={};void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"docs/best-practices/testing-requirements.md"}});var o={_frontmatter:s},l=r.a;function c(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return Object(n.b)(l,i({},o,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"testing-requirements"},"Testing requirements"),Object(n.b)("p",null,"... or, what kind of regression tests should City of Helsinki services\nhave?"),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"well-tested program -\nadapting to every change -\nno surprises here!\n-- Panu Kalliokoski, programming haikus")),Object(n.b)("h2",{id:"tests-that-should-be-written"},"Tests that should be written"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"integration tests that cover the happy paths of each feature and user\nstory",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"this means a program that does what the user would do (against a\nreal service) and checks that what happens is what should happen"))),Object(n.b)("li",{parentName:"ul"},"integration or unit tests that cover forbidden behavior",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"a program that does what a hacker would do and checks that it fails"))),Object(n.b)("li",{parentName:"ul"},'unit tests for every method/function whose logic is "complicated"',Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},'"complicated" means there are at least three execution paths in the\nmethod/function'))),Object(n.b)("li",{parentName:"ul"},"integration or unit tests that provide full code coverage at least for\nall code that implements the running service",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"this is meant to exclude build-time helper scripts and similar\nstuff.  But consider testing them, too!")))),Object(n.b)("h2",{id:"tests-that-would-be-nice"},"Tests that would be nice"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"at least rudimentary performance tests: how long does it take to load\neach view 1000 times?",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"these produce an important time series where you can find when you\nmade a performance blunder"))),Object(n.b)("li",{parentName:"ul"},"randomised fuzz testing to see that the service doesn't break (or\nreports errors correctly)"),Object(n.b)("li",{parentName:"ul"},"state invariants if your data has interdependencies",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"these can be made on database level")))),Object(n.b)("h2",{id:"how-tests-should-be-written"},"How tests should be written"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Prefer integration (and e2e) tests over unit tests.",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Use unit tests for stuff that is hard to understand even on a local\n(unit) level."),Object(n.b)("li",{parentName:"ul"},"Integration tests are good for covering a lot of stuff quickly.\nUnit tests are good for finding exactly where a problem is.  "))),Object(n.b)("li",{parentName:"ul"},"Don't use mocks unless it simplifies tests considerably.  That is,\ndon't redo software components in a simplified way.",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"instead, use the real components for tests, too."),Object(n.b)("li",{parentName:"ul"},"if the real component is really hard to use, then a mock (or fake\nversion) might be feasible.  Consider fixing the real component,\nthough."))),Object(n.b)("li",{parentName:"ul"},"Don't overtest or undertest.  (This is hard.)",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Undertesting means that broken things go unnoticed.  Write enough\ntests to cover all execution paths and test the results are right\nfrom the unit/service user's point of view."),Object(n.b)("li",{parentName:"ul"},"Overtesting means that change is hard because most of the time goes\ninto fixing tests.  In the test, don't check for details that are\nirrelevant and might change."))),Object(n.b)("li",{parentName:"ul"},"Use fixtures (such as prepopulated data in the database) if your tests\nneed it.",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"However, don't make your tests depend very much on the detail of\ntesting data.  Testing data will inevitably have to be updated\nsomeday.")))),Object(n.b)("h2",{id:"how-to-write-easily-testable-code"},"How to write easily testable code"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Build stateless services if you can.  Put state into specialised\nstateful services (buckets, databases).",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"This way, the state can always be initialised (by fixtures) so that\ntests work predictably."))),Object(n.b)("li",{parentName:"ul"},"Use stateless handlers (pure functions/components) wherever you can.",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Model your program as functions that process input data into output\ndata.  Hoist all I/O and other interaction onto as high level in the\nprogram as possible."))),Object(n.b)("li",{parentName:"ul"},"In UI programs, separate state handling from the rest of the program.",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},'You can test your reducers (state update functions) separately if\nthey are "complicated".')))))}c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"docs/best-practices/testing-requirements.md"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---docs-best-practices-testing-requirements-md-cbf237f97fb25e1e2c27.js.map