(this.webpackJsonpnomflix=this.webpackJsonpnomflix||[]).push([[0],{37:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/noImageSmall.ddc2b0c7.png"},73:function(e,t,n){"use strict";n.r(t);var r,a,i,c,o,s,l,d,u,p,j,b,h,g,x,v,O,m,f,y,_,w,k,S,M,T,R,U,z,N,C,F,P,A,B=n(1),D=n.n(B),V=n(38),I=n.n(V),L=n(12),q=n(13),J=n(15),E=n(14),H=n(19),G=n(5),K=n(10),Q=n.n(K),W=n(17),X=n(39),Y=n.n(X).a.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"c100d0e046cdffad8dbfda47d92f5073",language:"en-US"}}),Z=function(){return Y.get("movie/now_playing")},$=function(){return Y.get("movie/upcoming")},ee=function(){return Y.get("movie/popular")},te=function(e){return Y.get("movie/".concat(e),{params:{append_to_response:"videos"}})},ne=function(e){return Y.get("search/movie",{params:{query:e}})},re=function(){return Y.get("tv/top_rated")},ae=function(){return Y.get("tv/popular")},ie=function(){return Y.get("tv/airing_today")},ce=function(e){return Y.get("tv/".concat(e),{params:{append_to_response:"videos"}})},oe=function(e){return Y.get("search/tv",{params:{query:e}})},se=n(3),le=n(2),de=n(16),ue=n(0),pe=le.c.div(r||(r=Object(se.a)(["\n  :not(:last-child) {\n    margin-bottom: 25px;\n  }\n"]))),je=le.c.span(a||(a=Object(se.a)(["\n  font-size: 14px;\n  font-weight: 600;\n"]))),be=le.c.div(i||(i=Object(se.a)(["\n  margin-top: 25px;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, 125px);\n  grid-gap: 25px;\n"]))),he=function(e){var t=e.title,n=e.children;return Object(ue.jsxs)(pe,{children:[Object(ue.jsx)(je,{children:t}),Object(ue.jsx)(be,{children:n})]})},ge=le.c.div(c||(c=Object(se.a)(["\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n  font-size: 30px;\n  margin-top: 20px;\n"]))),xe=function(){return Object(ue.jsx)(ge,{children:Object(ue.jsx)("span",{role:"img","aria-label":"Loading",children:"\u23f0"})})},ve=le.c.div(o||(o=Object(se.a)(["\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n"]))),Oe=le.c.span(s||(s=Object(se.a)(["\n  color: ",";\n  font-weight: 600;\n"])),(function(e){return e.color})),me=function(e){var t=e.text,n=e.color;return Object(ue.jsx)(ve,{children:Object(ue.jsx)(Oe,{color:n,children:t})})},fe=le.c.div(l||(l=Object(se.a)(["\n font-size: 12px;\n"]))),ye=le.c.div(d||(d=Object(se.a)(["\n background-image: url(",");\n height: 180px;\n background-size: cover;\n border-radius: 4px;\n background-position: center center;\n transition: opacity .2s ease-in-out;\n margin-bottom: 5px;\n"])),(function(e){return e.bgUrl})),_e=le.c.span(u||(u=Object(se.a)(["\n  top: 163px;\n  right: 5px;\n  position: absolute;\n  opacity: 0;\n  transition: opacity .2s ease-in-out;\n"]))),we=le.c.div(p||(p=Object(se.a)(["\n margin-bottom: 5px;\n position: relative;\n &:hover {\n  ","{\n    opacity: .4;\n  }  \n  "," {\n    opacity: 1;\n  }\n }\n"])),ye,_e),ke=le.c.span(j||(j=Object(se.a)(["\n  display: block;\n  margin-bottom: 3px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n"]))),Se=le.c.span(b||(b=Object(se.a)(["\n font-size: 10px;\n color: rgba(255, 255, 255, .5);\n"]))),Me=function(e){var t=e.id,r=e.imageUrl,a=e.title,i=e.rating,c=e.year,o=e.isMovie,s=void 0!==o&&o;return Object(ue.jsx)(H.b,{to:s?"/movie/".concat(t):"/tv/".concat(t),children:Object(ue.jsx)(fe,{children:Object(ue.jsxs)(we,{children:[Object(ue.jsx)(ye,{bgUrl:r?"https://image.tmdb.org/t/p/w500".concat(r):n(37).default}),Object(ue.jsxs)(_e,{children:[Object(ue.jsx)("span",{role:"img","aria-label":"rating",children:"\u2b50\ufe0f"}),i,"/10"]}),Object(ue.jsx)(ke,{title:a,children:a}),Object(ue.jsx)(Se,{children:c})]})})})},Te=le.c.div(h||(h=Object(se.a)(["\n  padding: 20px;\n"]))),Re=function(e){var t=e.nowPlaying,n=e.upcoming,r=e.popular,a=e.error,i=e.loading;return Object(ue.jsxs)(ue.Fragment,{children:[Object(ue.jsx)(de.a,{children:Object(ue.jsx)("title",{children:"Movies | Nomflix"})}),i?Object(ue.jsx)(xe,{}):Object(ue.jsxs)(Te,{children:[t&&t.length>0&&Object(ue.jsx)(he,{title:"Now Playing",children:t.map((function(e){return Object(ue.jsx)(Me,{id:e.id,imageUrl:e.poster_path,title:e.original_title,rating:e.vote_average,year:e.release_date&&e.release_date.substring(0,4),isMovie:!0},e.id)}))}),n&&n.length>0&&Object(ue.jsx)(he,{title:"Upcoming Movies",children:n.map((function(e){return Object(ue.jsx)(Me,{id:e.id,imageUrl:e.poster_path,title:e.original_title,rating:e.vote_average,year:e.release_date&&e.release_date.substring(0,4),isMovie:!0},e.id)}))}),r&&r.length>0&&Object(ue.jsx)(he,{title:"Popular Movies",children:r.map((function(e){return Object(ue.jsx)(Me,{id:e.id,imageUrl:e.poster_path,title:e.original_title,rating:e.vote_average,year:e.release_date&&e.release_date.substring(0,4),isMovie:!0},e.id)}))}),a&&Object(ue.jsx)(me,{color:"#e74c3c",text:a})]})]})},Ue=function(e){Object(J.a)(n,e);var t=Object(E.a)(n);function n(){var e;Object(L.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={nowPlaying:null,upcoming:null,popular:null,eroor:null,loading:!0},e}return Object(q.a)(n,[{key:"componentDidMount",value:function(){var e=Object(W.a)(Q.a.mark((function e(){var t,n,r,a,i,c;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Z();case 3:return t=e.sent,n=t.data.results,e.next=7,$();case 7:return r=e.sent,a=r.data.results,e.next=11,ee();case 11:i=e.sent,c=i.data.results,this.setState({nowPlaying:n,upcoming:a,popular:c}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),this.setState({error:"Can't find Movie's infomation"});case 19:return e.prev=19,this.setState({loading:!1}),e.finish(19);case 22:case"end":return e.stop()}}),e,this,[[0,16,19,22]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.nowPlaying,n=e.upcoming,r=e.popular,a=e.error,i=e.loading;return Object(ue.jsx)(Re,{nowPlaying:t,upcoming:n,popular:r,error:a,loading:i})}}]),n}(D.a.Component),ze=le.c.div(g||(g=Object(se.a)(["\n  padding: 20px;\n"]))),Ne=function(e){var t=e.topRated,n=e.airingToday,r=e.popular,a=e.error,i=e.loading;return Object(ue.jsxs)(ue.Fragment,{children:[Object(ue.jsx)(de.a,{children:Object(ue.jsx)("title",{children:"TV Shows | Nomflix"})}),i?Object(ue.jsx)(xe,{}):Object(ue.jsxs)(ze,{children:[t&&t.length&&Object(ue.jsx)(he,{title:"Top Rated",children:t.map((function(e){return Object(ue.jsx)(Me,{id:e.id,imageUrl:e.poster_path,title:e.original_name,rating:e.vote_average,year:e.first_air_date&&e.first_air_date.substring(0,4),isMovie:!1},e.id)}))}),n&&n.length&&Object(ue.jsx)(he,{title:"Airing Today",children:n.map((function(e){return Object(ue.jsx)(Me,{id:e.id,imageUrl:e.poster_path,title:e.original_name,rating:e.vote_average,year:e.first_air_date&&e.first_air_date.substring(0,4),isMovie:!1},e.id)}))}),r&&r.length&&Object(ue.jsx)(he,{title:"Popular show",children:r.map((function(e){return Object(ue.jsx)(Me,{id:e.id,imageUrl:e.poster_path,title:e.original_name,rating:e.vote_average,year:e.first_air_date&&e.first_air_date.substring(0,4),isMovie:!1},e.id)}))}),a&&Object(ue.jsx)(me,{color:"#e74c3c",text:a})]})]})},Ce=function(e){Object(J.a)(n,e);var t=Object(E.a)(n);function n(){var e;Object(L.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={topRated:null,airingToday:null,popular:null,eroor:null,loading:!0},e}return Object(q.a)(n,[{key:"componentDidMount",value:function(){var e=Object(W.a)(Q.a.mark((function e(){var t,n,r,a,i,c;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,re();case 3:return t=e.sent,n=t.data.results,e.next=7,ie();case 7:return r=e.sent,a=r.data.results,e.next=11,ae();case 11:i=e.sent,c=i.data.results,this.setState({topRated:n,airingToday:a,popular:c}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),this.setState({error:"Can't find Movie's infomation"});case 19:return e.prev=19,this.setState({loading:!1}),e.finish(19);case 22:case"end":return e.stop()}}),e,this,[[0,16,19,22]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.topRated,n=e.airingToday,r=e.popular,a=e.error,i=e.loading;return Object(ue.jsx)(Ne,{topRated:t,airingToday:n,popular:r,error:a,loading:i})}}]),n}(D.a.Component),Fe=le.c.div(x||(x=Object(se.a)(["\n  padding: 20px;\n"]))),Pe=le.c.form(v||(v=Object(se.a)(["\n  margin-bottom: 50px;\n  width: 100%;\n"]))),Ae=le.c.input(O||(O=Object(se.a)(["\n  all: unset;\n  font-size: 28px;\n  width: 100%;\n"]))),Be=function(e){var t=e.movieResults,n=e.tvResults,r=e.searchTerm,a=e.error,i=e.loading,c=e.handleSubmit,o=e.updateTerm;return Object(ue.jsxs)(ue.Fragment,{children:[Object(ue.jsx)(de.a,{children:Object(ue.jsx)("title",{children:"Search | Nomflix"})}),Object(ue.jsxs)(Fe,{children:[Object(ue.jsx)(Pe,{onSubmit:c,children:Object(ue.jsx)(Ae,{placeholder:"Search Movies or TV Shows...",value:r,onChange:o})}),i?Object(ue.jsx)(xe,{}):Object(ue.jsxs)(ue.Fragment,{children:[t&&t.length>0&&Object(ue.jsx)(he,{title:"Movie Result",children:t.map((function(e){return Object(ue.jsx)(Me,{id:e.id,imageUrl:e.poster_path,title:e.original_title,rating:e.vote_average,year:e.release_date&&e.release_date.substring(0,4),isMovie:!0},e.id)}))}),n&&n.length>0&&Object(ue.jsx)(he,{title:"TV Result",children:n.map((function(e){return Object(ue.jsx)(Me,{id:e.id,imageUrl:e.poster_path,title:e.original_name,rating:e.vote_average,year:e.first_air_date&&e.first_air_date.substring(0,4),isMovie:!1},e.id)}))}),a&&Object(ue.jsx)(me,{color:"#e74c3c",text:a}),n&&t&&0===n.length&&0===t.length&&Object(ue.jsx)(me,{color:"#95a5a6",text:"Noting Found"})]})]})]})},De=function(e){Object(J.a)(n,e);var t=Object(E.a)(n);function n(){var e;Object(L.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={movieResults:null,tvResults:null,searchTerm:"",eroor:null,loading:!1},e.handleSubmit=function(t){t.preventDefault();var n=e.state.searchTerm;n&&e.searchByTerm(n)},e.updateTerm=function(t){var n=t.target.value;e.setState({searchTerm:n})},e.searchByTerm=function(){var t=Object(W.a)(Q.a.mark((function t(n){var r,a,i,c;return Q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.setState({loading:!0}),t.next=4,oe(n);case 4:return r=t.sent,a=r.data.results,t.next=8,ne(n);case 8:i=t.sent,c=i.data.results,e.setState({movieResults:c,tvResults:a}),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(0),e.setState({error:"can't find results!"});case 16:return t.prev=16,e.setState({loading:!1}),t.finish(16);case 19:case"end":return t.stop()}}),t,null,[[0,13,16,19]])})));return function(e){return t.apply(this,arguments)}}(),e}return Object(q.a)(n,[{key:"render",value:function(){var e=this.state,t=e.movieResults,n=e.tvResults,r=e.searchTerm,a=e.error,i=e.loading;return Object(ue.jsx)(Be,{movieResults:t,tvResults:n,searchTerm:r,error:a,loading:i,handleSubmit:this.handleSubmit,updateTerm:this.updateTerm})}}]),n}(D.a.Component),Ve=le.c.header(m||(m=Object(se.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  padding: 0px 10px;\n  background-color: rgba(20, 20, 20, 0.8);\n  z-index: 10;\n  box-shadow: 0px 1px 5px 2px rgba(0,0,0,0.8);\n"]))),Ie=le.c.ul(f||(f=Object(se.a)(["\n  display: flex;\n"]))),Le=le.c.li(y||(y=Object(se.a)(["\n  height: 50px;\n  width: 50px;\n  text-align: center;\n  border-bottom: 5px solid ",";\n  transition: border-bottom .5s ease-in-out;\n"])),(function(e){return e.current?"#3498db":"transparent"})),qe=Object(le.c)(H.b)(_||(_=Object(se.a)(["\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),Je=Object(G.g)((function(e){var t=e.location.pathname;return Object(ue.jsx)(Ve,{children:Object(ue.jsxs)(Ie,{children:[Object(ue.jsx)(Le,{current:"/"===t,children:Object(ue.jsx)(qe,{to:"/",children:"Movies"})}),Object(ue.jsx)(Le,{current:"/tv"===t,children:Object(ue.jsx)(qe,{to:"/tv",children:"TV"})}),Object(ue.jsx)(Le,{current:"/search"===t,children:Object(ue.jsx)(qe,{to:"/search",children:"Search"})})]})})})),Ee=le.c.div(w||(w=Object(se.a)(["\n  height: calc(100vh - 50px);\n  width: 100%;\n  position: relative;\n  padding: 50px;\n"]))),He=le.c.div(k||(k=Object(se.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-image: url(",");\n  background-position: center center;\n  background-size: cover;\n  filter: blur(3px);\n  opacity: 0.5;\n  z-index: 0;\n"])),(function(e){return e.bgUrl})),Ge=le.c.div(S||(S=Object(se.a)(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  position: relative;\n"]))),Ke=le.c.div(M||(M=Object(se.a)(["\n  width: 30%;\n  background-image: url(",");\n  background-position: center center;\n  background-size: cover;\n  height: 100%;\n  border-radius: 5px;\n"])),(function(e){return e.bgUrl})),Qe=le.c.div(T||(T=Object(se.a)(["\n  width: 70%;\n  margin-left: 10px;\n"]))),We=le.c.h1(R||(R=Object(se.a)(["\n  font-size: 32px;\n  margin-bottom: 10px;\n"]))),Xe=le.c.div(U||(U=Object(se.a)(["\n  margin: 20px 0;\n"]))),Ye=le.c.span(z||(z=Object(se.a)([""]))),Ze=le.c.span(N||(N=Object(se.a)(["\n  margin: 0 10px;\n"]))),$e=le.c.p(C||(C=Object(se.a)(["\n  font-size: 12px;\n  color: rgba(255, 255, 255, 0.7);\n  line-height: 1.5;\n  width: 50%;\n"]))),et=(le.c.ul(F||(F=Object(se.a)(["\n  display: flex;\n"]))),le.c.li(P||(P=Object(se.a)(["\n  height: 50px;\n  width: 50px;\n  text-align: center;\n  border-bottom: 5px solid ",";\n  transition: border-bottom .5s ease-in-out;\n"])),(function(e){return e.current?"#3498db":"transparent"})),function(e){var t=e.result,r=e.error;return e.loading?Object(ue.jsxs)(ue.Fragment,{children:[Object(ue.jsx)(de.a,{children:Object(ue.jsx)("title",{children:"Loading... | Nomflix"})}),Object(ue.jsx)(xe,{})]}):r?Object(ue.jsx)(me,{color:"#e74c3c",text:r}):Object(ue.jsxs)(Ee,{children:[Object(ue.jsx)(de.a,{children:Object(ue.jsxs)("title",{children:[t.original_name||t.original_title," | Nomflix"]})}),Object(ue.jsx)(He,{bgUrl:"https://image.tmdb.org/t/p/original".concat(t.backdrop_path)}),Object(ue.jsxs)(Ge,{children:[Object(ue.jsx)(Ke,{bgUrl:t.poster_path?"https://image.tmdb.org/t/p/original".concat(t.poster_path):n(37).default}),Object(ue.jsxs)(Qe,{children:[Object(ue.jsx)(We,{children:t.original_name||t.original_title}),Object(ue.jsxs)(Xe,{children:[Object(ue.jsx)(Ye,{children:(t.release_date||t.first_air_date).substring(0,4)}),Object(ue.jsx)(Ze,{children:"\xb7"}),Object(ue.jsxs)(Ye,{children:[t.runtime||t.episode_run_time[0]," min"]}),Object(ue.jsx)(Ze,{children:"\xb7"}),Object(ue.jsx)(Ye,{children:t.genres&&t.genres.map((function(e,t){return 0!==t?" / ".concat(e.name):e.name}))})]}),Object(ue.jsx)($e,{children:t.overview})]})]})]})}),tt=function(e){Object(J.a)(n,e);var t=Object(E.a)(n);function n(e){var r;Object(L.a)(this,n),r=t.call(this,e);var a=e.location.pathname;return r.state={result:null,error:null,loading:!0,isMovie:a.includes("/movie/")},r}return Object(q.a)(n,[{key:"componentDidMount",value:function(){var e=Object(W.a)(Q.a.mark((function e(){var t,n,r,a,i,c,o,s;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props,n=t.match.params.id,r=t.history.push,a=this.state.isMovie,i=Number(n),!isNaN(i)){e.next=5;break}return e.abrupt("return",r("/"));case 5:if(e.prev=5,this.setState({loading:!0}),c=null,!a){e.next=15;break}return e.next=11,te(i);case 11:o=e.sent,c=o.data,e.next=19;break;case 15:return e.next=17,ce(i);case 17:s=e.sent,c=s.data;case 19:this.setState({result:c}),e.next=25;break;case 22:e.prev=22,e.t0=e.catch(5),this.setState({error:"can't find detail"});case 25:return e.prev=25,this.setState({loading:!1}),e.finish(25);case 28:case"end":return e.stop()}}),e,this,[[5,22,25,28]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.result,n=e.error,r=e.loading;return Object(ue.jsx)(et,{result:t,error:n,loading:r})}}]),n}(D.a.Component),nt=function(){return Object(ue.jsxs)(H.a,{children:[Object(ue.jsx)(Je,{}),Object(ue.jsx)(ue.Fragment,{children:Object(ue.jsxs)(G.d,{children:[Object(ue.jsx)(G.b,{path:"/",exact:!0,component:Ue}),Object(ue.jsx)(G.b,{path:"/tv",exact:!0,component:Ce}),Object(ue.jsx)(G.b,{path:"/search",exact:!0,component:De}),Object(ue.jsx)(G.b,{path:"/movie/:id",component:tt}),Object(ue.jsx)(G.b,{path:"/tv/:id",component:tt}),Object(ue.jsx)(G.a,{from:"*",to:"/"})]})})]})},rt=n(45),at=Object(le.a)(A||(A=Object(se.a)(["\n  ",";\n  a {\n    text-decoration: none;\n    color: inherit;\n  }\n  * {\n    box-sizing: border-box;\n  }\n  body {\n    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    font-size: 12px;\n    background-color:rgba(20, 20, 20, 1);\n    color: white;\n    padding-top: 50px;\n  }\n"])),rt.a),it=function(e){Object(J.a)(n,e);var t=Object(E.a)(n);function n(){return Object(L.a)(this,n),t.apply(this,arguments)}return Object(q.a)(n,[{key:"render",value:function(){return Object(ue.jsxs)(ue.Fragment,{children:[Object(ue.jsx)(nt,{}),Object(ue.jsx)(at,{})]})}}]),n}(B.Component);I.a.render(Object(ue.jsx)(it,{}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.132714ed.chunk.js.map