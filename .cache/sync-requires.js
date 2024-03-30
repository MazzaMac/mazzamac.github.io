const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("/Users/Richard/Documents/Personal/MazDotCom/mazzamac.github.io/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/Richard/Documents/Personal/MazDotCom/mazzamac.github.io/src/pages/about.js"))),
  "component---src-pages-art-js": hot(preferDefault(require("/Users/Richard/Documents/Personal/MazDotCom/mazzamac.github.io/src/pages/art.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("/Users/Richard/Documents/Personal/MazDotCom/mazzamac.github.io/src/pages/blog.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/Users/Richard/Documents/Personal/MazDotCom/mazzamac.github.io/src/pages/contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/Richard/Documents/Personal/MazDotCom/mazzamac.github.io/src/pages/index.js"))),
  "component---src-pages-page-2-js": hot(preferDefault(require("/Users/Richard/Documents/Personal/MazDotCom/mazzamac.github.io/src/pages/page-2.js"))),
  "component---src-pages-writing-js": hot(preferDefault(require("/Users/Richard/Documents/Personal/MazDotCom/mazzamac.github.io/src/pages/writing.js"))),
  "component---src-templates-blog-post-js": hot(preferDefault(require("/Users/Richard/Documents/Personal/MazDotCom/mazzamac.github.io/src/templates/blog-post.js")))
}

