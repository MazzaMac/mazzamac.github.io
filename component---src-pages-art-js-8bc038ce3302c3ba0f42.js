(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"IO/5":function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var l=a("q1tI"),r=a.n(l),n=a("Wbzz"),o=a("9eSz"),i=a.n(o);function s(e){let{title:t,date:a,text:l,timeToRead:o,slug:s,category:c,tags:m,link:u,image:d,product:f,productLink:g,displayCategoryFlag:p=!0,redbubble:b,redbubbleCollection:h,redbubbleCollectionLink:y,etsyDescription:E,etsy:w}=e;return r.a.createElement("div",{style:{marginBottom:50}},t&&r.a.createElement("h2",{class:"front-page"},p?c+": ":"",t),r.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"flex-start"}},r.a.createElement("section",{style:{flex:2,display:"flex",flexDirection:"row",width:"100%",justifyContent:"space-between"}},r.a.createElement("small",null,r.a.createElement("b",null,a)))),d&&r.a.createElement(n.Link,{to:s},r.a.createElement(i.a,{fluid:d,alt:t})," "),l&&r.a.createElement("div",{dangerouslySetInnerHTML:{__html:l}}),r.a.createElement("hr",null),f&&r.a.createElement("p",null,"This is available in the ",r.a.createElement(n.Link,{to:"/shop"},"shop"),b&&!w&&" through "+r.a.createElement("a",{href:b},"Redbubble"),!b&&w&&", through "+r.a.createElement("a",{href:w},"Etsy"),w&&b&&", with "+E+"on"+r.a.createElement("a",{href:w},"Etsy")+"or various products on"+r.a.createElement("a",{href:b},"Redbubble"),"."),m&&r.a.createElement("small",null," Tags: ",m.toLowerCase()))}},QHRp:function(e,t,a){"use strict";a.r(t);var l=a("q1tI"),r=a.n(l),n=a("Bl7J"),o=a("vrFN"),i=(a("IO/5"),a("Wbzz")),s=a("9eSz"),c=a.n(s);function m(e){let{image:t,title:a,date:l,slug:n,category:o,tags:s}=e;return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.Link,{to:n},r.a.createElement(c.a,{alt:a,fixed:t})))}t.default=function(e){let{data:t,location:a}=e;const l=a.href?a.href:"";return r.a.createElement(n.a,{currentPath:l},r.a.createElement(o.a,{title:"Art"}),r.a.createElement("p",null,"Some of my work is available on demand as prints, stickers and all sorts through ",r.a.createElement("a",{href:"https://www.redbubble.com/people/mariannemacrae"},"RedBubble"),", or you can buy limited editions directly from my etsy store (not real yet, soon though)"),r.a.createElement("section",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(250px, 1fr))",gridGap:"1rem"}},t.allMarkdownRemark.edges.map((e,t)=>{let{node:a}=e;return r.a.createElement(m,{key:t,title:a.frontmatter.title,date:a.frontmatter.date,image:a.frontmatter.image.childImageSharp.fixed,slug:a.fields.slug,category:a.frontmatter.category,tags:a.frontmatter.tags})})))}}}]);
//# sourceMappingURL=component---src-pages-art-js-8bc038ce3302c3ba0f42.js.map