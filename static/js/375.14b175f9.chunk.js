"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[375],{375:function(n,e,t){t.r(e),t.d(e,{default:function(){return S}});var r,o,c,i,a,s,u,f,p,d,l,h,x,v=t(439),m=t(791),w=t(689),g=t(243),Z=t(168),k=t(924),b=t(87),j=k.ZP.div(r||(r=(0,Z.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  padding: 20px;\n  background-color: #f8f8f8;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n"]))),y=k.ZP.div(o||(o=(0,Z.Z)(["\n  display: flex;\n"]))),P=k.ZP.img(c||(c=(0,Z.Z)(["\n  flex: 0 0 auto;\n  width: 300px;\n  height: 450px;\n  margin-right: 20px;\n  background: url(",") center center / cover no-repeat;\n  border-radius: 8px;\n  position: relative;\n"])),(function(n){return n.src})),_=k.ZP.div(i||(i=(0,Z.Z)(["\n  flex: 1 1 auto;\n  display: flex;\n  flex-direction: column;\n"]))),C=k.ZP.h2(a||(a=(0,Z.Z)(["\n  font-size: 24px;\n  margin-top: 0;\n"]))),z=k.ZP.p(s||(s=(0,Z.Z)(["\n  font-size: 18px;\n  margin-bottom: 10px;\n"]))),E=k.ZP.p(u||(u=(0,Z.Z)(["\n  font-size: 16px;\n  margin-bottom: 10px;\n"]))),I=k.ZP.p(f||(f=(0,Z.Z)(["\n  font-size: 16px;\n  margin-bottom: 20px;\n"]))),D=k.ZP.div(p||(p=(0,Z.Z)(["\n  width: 100%;\n  margin-top: 20px;\n"]))),U=k.ZP.h3(d||(d=(0,Z.Z)(["\n  font-size: 20px;\n  margin-bottom: 10px;\n"]))),T=k.ZP.ul(l||(l=(0,Z.Z)(["\n  list-style: none;\n  padding: 0;\n  display: flex;\n  justify-content: center;\n"]))),G=k.ZP.li(h||(h=(0,Z.Z)(["\n  margin-right: 10px;\n"]))),O=(0,k.ZP)(b.rU)(x||(x=(0,Z.Z)(["\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  min-width: 100px;\n  height: 40px;\n  margin-top: 20px;\n  padding: 10px 15px;\n  border-radius: 5px;\n  text-align: center;\n  background-color: #e7e481;\n  color: #333;\n  text-decoration: none;\n  &:hover {\n    background-color: #cfcfcf;\n  }\n"]))),R=t(184),S=function(){var n,e=(0,w.UO)().movieId,t=(0,m.useState)(null),r=(0,v.Z)(t,2),o=r[0],c=r[1],i=(0,w.TH)();if(console.log(i),(0,m.useEffect)((function(){(0,g.TP)(e).then(c).catch(console.error)}),[e]),!o)return(0,R.jsx)("div",{children:"Loading..."});var a=o.poster_path?"https://image.tmdb.org/t/p/w500".concat(o.poster_path):"/path-to-default-image.jpg",s=(null===(n=i.state)||void 0===n?void 0:n.from)||"/";return(0,R.jsxs)(j,{children:[(0,R.jsxs)(y,{children:[(0,R.jsx)(P,{src:a,alt:o.title}),(0,R.jsxs)(_,{children:[(0,R.jsxs)(C,{children:[o.title," (",new Date(o.release_date).getFullYear(),")"]}),(0,R.jsxs)(z,{children:["User Score: ",Math.round(10*o.vote_average),"%"]}),(0,R.jsxs)(E,{children:["Overview: ",o.overview]}),(0,R.jsxs)(I,{children:["Genres: ",o.genres.map((function(n){return n.name})).join(", ")]})]})]}),(0,R.jsx)(O,{to:s,state:i.state,children:"\u2190 Go back"}),(0,R.jsxs)(D,{children:[(0,R.jsx)(U,{children:"Additional information"}),(0,R.jsxs)(T,{children:[(0,R.jsx)(G,{children:(0,R.jsx)(O,{to:"cast",state:{from:s},children:"Cast"})}),(0,R.jsx)(G,{children:(0,R.jsx)(O,{to:"reviews",state:{from:s},children:"Reviews"})})]})]}),(0,R.jsx)(w.j3,{})]})}},243:function(n,e,t){t.d(e,{TP:function(){return f},tx:function(){return d},wr:function(){return s},z1:function(){return u},zv:function(){return p}});var r=t(861),o=t(757),c=t.n(o),i="842bd71c1f2824f7da65afa384cb3d5e",a="https://api.themoviedb.org/3",s=function(){var n=(0,r.Z)(c().mark((function n(){var e,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(a,"/trending/movie/day?api_key=").concat(i),n.next=3,fetch(e);case 3:if((t=n.sent).ok){n.next=6;break}throw new Error("Could not fetch trending movies");case 6:return n.abrupt("return",t.json());case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat(a,"/search/movie?api_key=").concat(i,"&query=").concat(encodeURIComponent(e)),n.next=3,fetch(t);case 3:if((r=n.sent).ok){n.next=6;break}throw new Error("Could not search for movies");case 6:return n.abrupt("return",r.json());case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat(a,"/movie/").concat(e,"?api_key=").concat(i),n.next=3,fetch(t);case 3:if((r=n.sent).ok){n.next=6;break}throw new Error("Could not fetch details for movie ID: ".concat(e));case 6:return n.abrupt("return",r.json());case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat(a,"/movie/").concat(e,"/credits?api_key=").concat(i),n.next=3,fetch(t);case 3:if((r=n.sent).ok){n.next=6;break}throw new Error("Could not fetch credits for movie ID: ".concat(e));case 6:return n.abrupt("return",r.json());case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat(a,"/movie/").concat(e,"/reviews?api_key=").concat(i),n.next=3,fetch(t);case 3:if((r=n.sent).ok){n.next=6;break}throw new Error("Could not fetch reviews for movie ID: ".concat(e));case 6:return n.abrupt("return",r.json());case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},861:function(n,e,t){function r(n,e,t,r,o,c,i){try{var a=n[c](i),s=a.value}catch(u){return void t(u)}a.done?e(s):Promise.resolve(s).then(r,o)}function o(n){return function(){var e=this,t=arguments;return new Promise((function(o,c){var i=n.apply(e,t);function a(n){r(i,o,c,a,s,"next",n)}function s(n){r(i,o,c,a,s,"throw",n)}a(void 0)}))}}t.d(e,{Z:function(){return o}})}}]);
//# sourceMappingURL=375.14b175f9.chunk.js.map