(this["webpackJsonpmovie-app-2021"]=this["webpackJsonpmovie-app-2021"]||[]).push([[0],{36:function(e,t,s){},57:function(e,t,s){},66:function(e,t,s){},67:function(e,t,s){},68:function(e,t,s){},69:function(e,t,s){"use strict";s.r(t);var n=s(0),a=s.n(n),c=s(28),r=s.n(c),i=s(8),o=s(2),l=(s(36),s(1));var j=function(){return Object(l.jsxs)("div",{className:"about__container",children:[Object(l.jsx)("span",{children:"\u201cFreedom is the freedom to say that two plus two make four. If that is granted, all else follows.\u201d"}),Object(l.jsx)("span",{children:"- Geroge Orwell, 1984"})]})},m=s(17),u=s.n(m),d=s(29),b=s(11),h=s(12),p=s(14),v=s(13),O=s(30),x=s.n(O);s(57);var f=function(e){var t=e.id,s=e.year,n=e.poster,a=e.summary,c=e.title,r=e.genres;return Object(l.jsx)("div",{className:"movie",children:Object(l.jsxs)(i.b,{to:{pathname:"/movie/".concat(t),state:{year:s,title:c,summary:a,poster:n,genres:r}},children:[Object(l.jsx)("img",{src:n,alt:c,title:c}),Object(l.jsxs)("div",{className:"movie__data",children:[Object(l.jsxs)("h3",{className:"movie__title",children:[" ",c," "]}),Object(l.jsx)("h5",{className:"movie__year",children:s}),Object(l.jsx)("ul",{className:"movie__genres",children:r.map((function(e,t){return Object(l.jsx)("li",{className:"genres__genre",children:e},t)}))}),Object(l.jsxs)("p",{className:"movie__summary",children:[a.slice(0,140),"..."]})]})]})})},y=(s(66),function(e){Object(p.a)(s,e);var t=Object(v.a)(s);function s(){var e;Object(b.a)(this,s);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={isLoading:!0,movies:[]},e.getMovies=Object(d.a)(u.a.mark((function t(){var s,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:s=t.sent,n=s.data.data.movies,e.setState({movies:n,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(h.a)(s,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,s=e.movies;return Object(l.jsx)("section",{className:"container",children:t?Object(l.jsxs)("div",{className:"loader",children:[Object(l.jsx)("span",{className:"loader__text",children:"Loading..."})," "]}):Object(l.jsx)("div",{className:"movies",children:s.map((function(e){return Object(l.jsx)(f,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),s}(a.a.Component));s(67);var g=function(){return Object(l.jsxs)("div",{className:"nav",children:[Object(l.jsx)(i.b,{to:"/",children:"Home"}),Object(l.jsx)(i.b,{to:"/about",children:"About"})]})},_=function(e){Object(p.a)(s,e);var t=Object(v.a)(s);function s(){return Object(b.a)(this,s),t.apply(this,arguments)}return Object(h.a)(s,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,s=e.history;void 0===t.state&&s.push("/"),console.log(t.state)}},{key:"render",value:function(){var e=this.props,t=e.location;e.history;return t.state?Object(l.jsxs)("div",{children:[Object(l.jsx)("span",{children:t.state.title}),Object(l.jsx)("br",{}),Object(l.jsx)("span",{children:t.state.summary})]}):null}}]),s}(a.a.Component);s(68);var N=function(){return Object(l.jsxs)(i.a,{children:[Object(l.jsx)(g,{}),Object(l.jsx)(o.a,{path:"/",exact:!0,component:y}),Object(l.jsx)(o.a,{path:"/about",component:j}),Object(l.jsx)(o.a,{path:"/movie/:id",component:_})]})};r.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(N,{})}),document.getElementById("potato"))}},[[69,1,2]]]);
//# sourceMappingURL=main.67a6c9e5.chunk.js.map