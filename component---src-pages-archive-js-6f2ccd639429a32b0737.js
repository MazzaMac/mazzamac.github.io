(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"IO/5":function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var l=a("q1tI"),n=a.n(l),r=a("Wbzz"),i=a("9eSz"),o=a.n(i);function c(e){let{title:t,date:a,text:l,timeToRead:i,slug:c,category:s,tags:u,link:m,image:d,product:f,productLink:E,displayCategoryFlag:h=!0,redbubble:b,redbubbleCollection:p,redbubbleCollectionLink:g,etsyDescription:y,etsy:w}=e;return n.a.createElement("div",{style:{marginBottom:50}},t&&n.a.createElement("h2",{class:"front-page"},h?s+": ":"",t),n.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"flex-start"}},n.a.createElement("section",{style:{flex:2,display:"flex",flexDirection:"row",width:"100%",justifyContent:"space-between"}},n.a.createElement("small",null,n.a.createElement("b",null,a)))),d&&n.a.createElement(r.Link,{to:c},n.a.createElement(o.a,{fluid:d,alt:t})," "),l&&n.a.createElement("div",{dangerouslySetInnerHTML:{__html:l}}),n.a.createElement("hr",null),f&&n.a.createElement("p",null,"This is available in the ",n.a.createElement(r.Link,{to:"/shop"},"shop"),b&&!w&&" through "+n.a.createElement("a",{href:b},"Redbubble"),!b&&w&&", through "+n.a.createElement("a",{href:w},"Etsy"),w&&b&&", with "+y+"on"+n.a.createElement("a",{href:w},"Etsy")+"or various products on"+n.a.createElement("a",{href:b},"Redbubble"),"."),u&&n.a.createElement("small",null," Tags: ",u.toLowerCase()))}},nRki:function(e,t,a){"use strict";a.r(t);var l=a("q1tI"),n=a.n(l),r=a("Wbzz"),i=a("Bl7J"),o=a("vrFN");a("IO/5");t.default=function(e){let{data:t,location:a}=e;const l=a.href?a.href:"";return n.a.createElement(i.a,{layout:"front",currentPath:l},n.a.createElement(o.a,{title:"Archive"}),n.a.createElement("h1",null,"Archive"),n.a.createElement("section",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, 100%)",gridGap:"1rem"}},n.a.createElement("ul",null,t.allMarkdownRemark.edges.map((e,t)=>{let{node:a}=e;return n.a.createElement("li",null,n.a.createElement(r.Link,{to:a.fields.slug},a.frontmatter.title)," - ",a.frontmatter.category," - ",a.frontmatter.date)}))))}}}]);
//# sourceMappingURL=component---src-pages-archive-js-6f2ccd639429a32b0737.js.map