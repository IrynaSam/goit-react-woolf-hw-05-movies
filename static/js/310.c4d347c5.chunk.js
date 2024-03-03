"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[310],{537:function(n,e,r){r.d(e,{Z:function(){return b}});r(791);var t,o,c,a,i,u=r(168),s=r(924),p=r(87),f=s.ZP.li(t||(t=(0,u.Z)(["\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  overflow: hidden;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  justify-content: space-between;\n  width: 220px;\n  margin-bottom: 20px;\n  &:hover {\n    background-color: #f0f0f0;\n  }\n"]))),d=(0,s.ZP)(p.rU)(o||(o=(0,u.Z)(["\n  display: block;\n  color: inherit;\n  text-decoration: none;\n"]))),l=s.ZP.img(c||(c=(0,u.Z)(["\n  width: 100%;\n  height: auto;\n  display: block;\n  border-bottom: 1px solid #ddd;\n"]))),h=s.ZP.h3(a||(a=(0,u.Z)(["\n  padding: 10px;\n  font-size: 1em;\n  margin: 10px;\n  text-align: center;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n"]))),x=r(184),v=function(n){var e=n.movie,r=e.poster_path?"https://image.tmdb.org/t/p/w500".concat(e.poster_path):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700";return(0,x.jsx)(f,{children:(0,x.jsxs)(d,{to:"/movies/".concat(e.id),children:[(0,x.jsx)(l,{src:r,alt:e.title||e.name}),(0,x.jsx)(h,{children:e.title||e.name})]})})},m=s.ZP.ul(i||(i=(0,u.Z)(["\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 20px;\n  justify-content: center;\n  align-items: stretch;\n"]))),b=function(n){var e=n.movies;return(0,x.jsx)(m,{children:e.map((function(n){return(0,x.jsx)(v,{movie:n},n.id)}))})}},310:function(n,e,r){r.r(e),r.d(e,{default:function(){return k}});var t,o,c,a,i=r(861),u=r(439),s=r(757),p=r.n(s),f=r(791),d=r(243),l=r(537),h=r(168),x=r(924),v=x.ZP.div(t||(t=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 10px;\n"]))),m=x.ZP.form(o||(o=(0,h.Z)(["\n  display: flex;\n  margin-bottom: 20px;\n  gap: 10px;\n"]))),b=x.ZP.input(c||(c=(0,h.Z)(["\n  padding: 10px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  font-size: 16px;\n  width: 300px; // \u0410\u0431\u043e \u0456\u043d\u0448\u0438\u0439 \u0440\u043e\u0437\u043c\u0456\u0440 \u0437\u0430 \u043f\u043e\u0442\u0440\u0435\u0431\u0438\n\n  &:focus {\n    outline: none;\n    border-color: #007bff;\n    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);\n  }\n"]))),w=x.ZP.button(a||(a=(0,h.Z)(["\n  padding: 10px 20px;\n  border: none;\n  border-radius: 4px;\n  background-color: #e7e481;\n  color: #333;\n  font-size: 16px;\n  cursor: pointer;\n  transition: background-color 0.3s;\n\n  &:hover {\n    background-color: #cfcfcf;\n  }\n"]))),g=r(184),k=function(){var n=(0,f.useState)(""),e=(0,u.Z)(n,2),r=e[0],t=e[1],o=(0,f.useState)([]),c=(0,u.Z)(o,2),a=c[0],s=c[1],h=function(){var n=(0,i.Z)(p().mark((function n(e){var t,o;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e.preventDefault(),r){n.next=3;break}return n.abrupt("return");case 3:return n.prev=3,n.next=6,(0,d.z1)(r);case 6:t=n.sent,o=t.results,s(o),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(3),console.error("Error searching for movies:",n.t0);case 14:case"end":return n.stop()}}),n,null,[[3,11]])})));return function(e){return n.apply(this,arguments)}}();return(0,g.jsxs)(v,{children:[(0,g.jsxs)(m,{onSubmit:h,children:[(0,g.jsx)(b,{type:"text",value:r,onChange:function(n){return t(n.target.value)},placeholder:"Search movies"}),(0,g.jsx)(w,{type:"submit",children:"Search"})]}),(0,g.jsx)(l.Z,{movies:a})]})}},243:function(n,e,r){r.d(e,{TP:function(){return p},tx:function(){return d},wr:function(){return u},z1:function(){return s},zv:function(){return f}});var t=r(861),o=r(757),c=r.n(o),a="842bd71c1f2824f7da65afa384cb3d5e",i="https://api.themoviedb.org/3",u=function(){var n=(0,t.Z)(c().mark((function n(){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(i,"/trending/movie/day?api_key=").concat(a),n.next=3,fetch(e);case 3:if((r=n.sent).ok){n.next=6;break}throw new Error("Could not fetch trending movies");case 6:return n.abrupt("return",r.json());case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,t.Z)(c().mark((function n(e){var r,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="".concat(i,"/search/movie?api_key=").concat(a,"&query=").concat(encodeURIComponent(e)),n.next=3,fetch(r);case 3:if((t=n.sent).ok){n.next=6;break}throw new Error("Could not search for movies");case 6:return n.abrupt("return",t.json());case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(c().mark((function n(e){var r,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="".concat(i,"/movie/").concat(e,"?api_key=").concat(a),n.next=3,fetch(r);case 3:if((t=n.sent).ok){n.next=6;break}throw new Error("Could not fetch details for movie ID: ".concat(e));case 6:return n.abrupt("return",t.json());case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,t.Z)(c().mark((function n(e){var r,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="".concat(i,"/movie/").concat(e,"/credits?api_key=").concat(a),n.next=3,fetch(r);case 3:if((t=n.sent).ok){n.next=6;break}throw new Error("Could not fetch credits for movie ID: ".concat(e));case 6:return n.abrupt("return",t.json());case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,t.Z)(c().mark((function n(e){var r,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="".concat(i,"/movie/").concat(e,"/reviews?api_key=").concat(a),n.next=3,fetch(r);case 3:if((t=n.sent).ok){n.next=6;break}throw new Error("Could not fetch reviews for movie ID: ".concat(e));case 6:return n.abrupt("return",t.json());case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},861:function(n,e,r){function t(n,e,r,t,o,c,a){try{var i=n[c](a),u=i.value}catch(s){return void r(s)}i.done?e(u):Promise.resolve(u).then(t,o)}function o(n){return function(){var e=this,r=arguments;return new Promise((function(o,c){var a=n.apply(e,r);function i(n){t(a,o,c,i,u,"next",n)}function u(n){t(a,o,c,i,u,"throw",n)}i(void 0)}))}}r.d(e,{Z:function(){return o}})}}]);
//# sourceMappingURL=310.c4d347c5.chunk.js.map