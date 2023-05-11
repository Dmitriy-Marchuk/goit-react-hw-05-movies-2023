"use strict";(self.webpackChunkgoit_react_hw_05_movies_2023=self.webpackChunkgoit_react_hw_05_movies_2023||[]).push([[316],{5316:function(n,t,e){e.r(t),e.d(t,{default:function(){return m}});var r,a,u,c=e(9439),i=e(2791),s=e(7689),o=e(7793),p=e(168),f=e(6444),l=f.ZP.ul(r||(r=(0,p.Z)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  grid-gap: 30px;\n  max-width: calc(100vw - 48px);\n  padding: 0 0 30px 0;\n  margin-top: 20px;\n  margin-left: auto;\n  margin-right: auto;\n  list-style: none;\n"]))),h=f.ZP.img(a||(a=(0,p.Z)(["\n  width: 150px;\n  border-radius: 5px;\n"]))),d=f.ZP.p(u||(u=(0,p.Z)(["\n  font-weight: 500;\n  margin: 5px 0 2px 0;\n"]))),g=e(4390),x=e(184),m=function(){var n=(0,s.UO)().movieId,t=(0,i.useState)(""),e=(0,c.Z)(t,2),r=e[0],a=e[1];return(0,i.useEffect)((function(){(0,g.M1)(n).then(a).catch((function(n){return console.log(n.message)}))}),[n]),0===r.length?(0,x.jsx)(x.Fragment,{children:(0,x.jsx)("h1",{children:"No info!"})}):(0,x.jsxs)(l,{children:[r&&r.map((function(n){var t=n.id,e=n.character,r=n.name,a=n.profile_path;return(0,x.jsxs)("li",{children:[(0,x.jsx)(h,{src:a?"https://image.tmdb.org/t/p/w500"+a:"https://www.csaff.org/wp-content/uploads/csaff-no-poster.jpg",alt:r}),(0,x.jsx)(d,{children:r}),(0,x.jsx)("p",{children:e})]},t)})),(0,x.jsx)(i.Suspense,{fallback:(0,x.jsx)(o.Z,{}),children:(0,x.jsx)(s.j3,{})})]})}},4390:function(n,t,e){e.d(t,{KL:function(){return s},M1:function(){return p},TP:function(){return o},q:function(){return l},tx:function(){return f}});var r=e(5861),a=e(7757),u=e.n(a),c=e(1243);c.Z.defaults.baseURL="https://api.themoviedb.org/3";var i="fe4b88b6e68a30f89cb8b35af00ef551",s=function(){var n=(0,r.Z)(u().mark((function n(){return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/trending/all/day?api_key=".concat(i)).then((function(n){return n.data.results}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,r.Z)(u().mark((function n(t){return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(t,"?api_key=").concat(i,"&language=en-US")).then((function(n){return n.data}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(u().mark((function n(t){return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(t,"/credits?api_key=").concat(i,"&language=en-US")).then((function(n){return n.data.cast}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(u().mark((function n(t){return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(t,"/reviews?api_key=").concat(i,"&language=en-US")).then((function(n){return n.data.results}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(u().mark((function n(t){return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/search/movie?api_key=".concat(i,"&language=en-US&query=").concat(t,"&page=1&include_adult=false")).then((function(n){return n.data.results}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=316.e1af1c7a.chunk.js.map