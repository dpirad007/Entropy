(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[120],{5013:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return p},default:function(){return c}});var a=n(2122),r=n(9756),s=(n(7294),n(3905)),o=["components"],i={title:"Series - Float"},l=void 0,d={unversionedId:"Series/seriesf64",id:"Series/seriesf64",isDocsHomePage:!1,title:"Series - Float",description:"SeriesF32 is a Series where the type of the vector is FloatsVector and the Series name is a string.",source:"@site/docs/02-Series/03-seriesf64.md",sourceDirName:"02-Series",slug:"/Series/seriesf64",permalink:"/entropy/docs/Series/seriesf64",version:"current",sidebarPosition:3,frontMatter:{title:"Series - Float"},sidebar:"tutorialSidebar",previous:{title:"Series - Integer",permalink:"/entropy/docs/Series/seriesi32"},next:{title:"Series - String",permalink:"/entropy/docs/Series/seriesstr"}},p=[{value:"Constructors Methods",id:"constructors-methods",children:[]},{value:"Interop Methods",id:"interop-methods",children:[]},{value:"Utility Methods",id:"utility-methods",children:[]},{value:"Math Methods",id:"math-methods",children:[]}],m={toc:p};function c(e){var t=e.components,n=(0,r.Z)(e,o);return(0,s.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"SeriesF32")," is a Series where the type of the vector is ",(0,s.kt)("inlineCode",{parentName:"p"},"FloatsVector")," and the Series name is a string."),(0,s.kt)("p",null,"The following scripts assume that you have imported the ",(0,s.kt)("inlineCode",{parentName:"p"},"SeriesF32")," object\nfrom the package and set up the threads as explained in ",(0,s.kt)("a",{parentName:"p",href:"../"},"getting started"),"."),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Use ",(0,s.kt)("inlineCode",{parentName:"p"},".display")," on ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("em",{parentName:"strong"},"SeriesF32"))," to view the Series."),(0,s.kt)("p",{parentName:"div"},"Use ",(0,s.kt)("inlineCode",{parentName:"p"},".data")," on ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("em",{parentName:"strong"},"SeriesF32"))," to view ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("em",{parentName:"strong"},"FloatsVector"))," of the Series."))),(0,s.kt)("h2",{id:"constructors-methods"},"Constructors Methods"),(0,s.kt)("p",null,"These methods are used to create new ",(0,s.kt)("inlineCode",{parentName:"p"},"SeriesF32"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'// Create an SeriesF32 from a given JavaScript array\n    let s = new SeriesF32("Grades", [9.5, 9.0, 7.8, 8.5]);\n    console.log(s.display); \n    /*\n    ################\n    # Grades    #\n    ################\n    # 9.5          #\n    # 9.0          #\n    # 7.8          #\n    # 8.5          #\n    ################\n    */\n')),(0,s.kt)("h2",{id:"interop-methods"},"Interop Methods"),(0,s.kt)("p",null,"Some handy methods to work with the Series."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'// Return Json representation of Series\n    let s = new SeriesF32("Grades", [9.5, 9.0, 7.8, 8.5]);\n    console.log(s.toJson());\n    // {name: "Grades", data: Array(4)}\n\n// Return String Series Representation\n    console.log(s.display)\n    /*\n    ################\n    # Grades       #\n    ################\n    # 9.5          #\n    # 9.0          #\n    # 7.8          #\n    # 8.5          #\n    ################\n    */\n\n// Return FloatsVector of Series\n    console.log(s.data())\n    // [9.5, 9.0, 7.8, 8.5]\n')),(0,s.kt)("h2",{id:"utility-methods"},"Utility Methods"),(0,s.kt)("p",null,"Basic getters and setters."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'// Create an SeriesF32 from a given JavaScript array\n    let s = new SeriesF32("Grades", [9.5, 9.0, 7.8, 8.5]);\n\n// Get the length of the array\n    console.log(s.len()); \n    // 4\n\n// Set the given value at the specified index\n    s.set(1, 10); \n    // [9.5, 10, 7.8, 8.5]\n    console.log(s.display) \n    // Use to view Series in console\n\n// Get the value at the specified index\n    console.log(s.get(3)); \n    // 8.5\n\n// Swap the values at the specified indices\n    s.swap(0, 1); \n    // [10, 9.5, 7.8, 8.5]\n    console.log(s.display); \n    // Use to view Series in console\n')),(0,s.kt)("p",null,"More complex methods used to manipulate the ",(0,s.kt)("inlineCode",{parentName:"p"},"SeriesF32"),'. Each of these\nmethods has two versions. The "pure" version returns the result of performing\nthe operation while the "impure" version actually changes the ',(0,s.kt)("inlineCode",{parentName:"p"},"FloatsVector"),"."),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Pure"),(0,s.kt)("th",{parentName:"tr",align:null},"Impure"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"reverse"),(0,s.kt)("td",{parentName:"tr",align:null},"reversed")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"append"),(0,s.kt)("td",{parentName:"tr",align:null},"appended")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"extend"),(0,s.kt)("td",{parentName:"tr",align:null},"extended")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"insert"),(0,s.kt)("td",{parentName:"tr",align:null},"inserted")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"splice"),(0,s.kt)("td",{parentName:"tr",align:null},"spliced")))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'// Create an SeriesF32 from a given JavaScript array\n    let s = new SeriesF32("Grades", [9.5, 9.0, 7.8, 8.5]);\n\n// Reverse the Series Data\n    s.reverse(); \n    // [8.5, 7.8, 9.0, 9.5] (without return)\n    console.log(s.reversed().data); \n    // [8.5, 7.8, 9.0, 9.5]\n\n// Append an element to the Series\n    s.append(10); \n    // [8.5, 7.8, 9.0, 9.5, 10] (without return)\n    console.log(s.appended(33).data) \n    // [8.5, 7.8, 9.0, 9.5, 10] \n\n// Extend the FloatsVector with another\n    s.extend([7.5, 8.5]); \n    // [8.5, 7.8, 9.0, 9.5, 10, 7.5, 8.5]  (without return)   \n    console.log(s.extended([7.5, 8.5]).data); \n    // [8.5, 7.8, 9.0, 9.5, 10, 7.5, 8.5]\n\n// Insert the given element at the specified index\n    s.insert(2, 6); \n    // [8.5, 7.8, 6, 9.0, 9.5, 10, 7.5, 8.5] (without return)\n    console.log(s.inserted(2, 6).data);\n    // [8.5, 7.8, 6.0, 9.0, 9.5, 10, 7.5, 8.5]\n\n// Removes an element from the specified index\n    console.log(s.splice(0)); \n    // 8.5\n\n// Remove the value at the specified index and return the array\n    console.log(s.spliced(6)[0].data); \n    // [7.8, 6.0, 9.0, 9.5, 10, 7.5]\n')),(0,s.kt)("h2",{id:"math-methods"},"Math Methods"),(0,s.kt)("p",null,"Methods to perform simple mathematical operations on the Series."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'// Create an SeriesF32 from a given JavaScript array\n    let s = new SeriesF32("Grades", [9.5, 9.0, 7.8, 8.5]);\n\n// SeriesF32 max\n    console.log(s.max());\n    // 9.5\n\n// SeriesF32 min\n    console.log(s.min());\n    // 7.8\n\n// SeriesF32 sum\n    console.log(s.sum());\n    // 34.8\n\n// SeriesF32 product\n    console.log(s.product());\n    // 5668.65\n\n// SeriesF32 mean\n    console.log(s.mean());\n    // 8.7\n\n// SeriesF32 median\n    console.log(s.median());\n    // 8.75\n\n// SeriesF32 standard deviation  params (degree_of_freedom)\n    console.log(s.std_dev(1));\n    // 0.7257180352359078\n\n// SeriesF32 variance params (degree_of_freedom)\n    console.log(s.variance(1));\n    // 0.5266666666666663\n\n')))}c.isMDXComponent=!0}}]);