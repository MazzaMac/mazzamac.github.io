(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"IO/5":function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var l=a("q1tI"),n=a.n(l),r=a("Wbzz"),o=a("9eSz"),c=a.n(o);function i(e){let{title:t,date:a,text:l,timeToRead:o,slug:i,category:s,tags:u,link:m,image:d,product:f,productLink:E,categoryFlag:h,redbubble:b,redbubbleCollection:g,redbubbleCollectionLink:p,etsyDescription:y,etsy:w}=e;return n.a.createElement("div",{style:{marginBottom:50}},d&&n.a.createElement(r.Link,{to:i},n.a.createElement(c.a,{fluid:d,alt:t})," "),l&&n.a.createElement("p",null,l),t&&n.a.createElement("p",null,t),n.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"flex-start"}},n.a.createElement("section",{style:{flex:2,display:"flex",flexDirection:"row",width:"100%",justifyContent:"space-between"}},!m&&n.a.createElement(r.Link,{to:i},n.a.createElement("h2",null,s)),m&&n.a.createElement("a",{href:m},n.a.createElement("h2",null,s)),n.a.createElement("small",null,n.a.createElement("b",null,a)))),f&&n.a.createElement("p",null,"This is available in the ",n.a.createElement(r.Link,{to:"/shop"},"shop"),b&&!w&&" through "+n.a.createElement("a",{href:b},"Redbubble"),!b&&w&&", through "+n.a.createElement("a",{href:w},"Etsy"),w&&b&&", with "+y+"on"+n.a.createElement("a",{href:w},"Etsy")+"or various products on"+n.a.createElement("a",{href:b},"Redbubble"),"."),u&&n.a.createElement("small",null," Tags: ",u.toLowerCase()))}},vx99:function(e,t,a){"use strict";a.r(t);var l=a("q1tI"),n=a.n(l),r=a("Bl7J"),o=a("vrFN"),c=a("IO/5");t.default=function(e){let{data:t,location:a}=e;const l=a.href?a.href:"";return n.a.createElement(r.a,{currentPath:l,layout:"list"},n.a.createElement(o.a,{title:"Blog"}),n.a.createElement("h1",null,"Welcome to the Blog"),t.allMarkdownRemark.edges.map((e,t)=>{let{node:a}=e;return n.a.createElement(c.a,{key:t,title:a.frontmatter.title,date:a.frontmatter.date,timeToRead:a.timeToRead,text:a.excerpt,slug:a.fields.slug,category:a.frontmatter.category,tags:a.frontmatter.tags})}))}}}]);
//# sourceMappingURL=component---src-pages-blog-js-59b257a7380922c7f260.js.map